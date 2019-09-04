mapboxgl.accessToken = 'pk.eyJ1IjoiaXJyYWRpYW5jZWdoaSIsImEiOiJjanpsaGI4MmwwdmdtM29saTRhNWc2d3QxIn0.5kYxYGYgMdp5rvZHvHo1GA';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [-80, 40],
	zoom: 3,
	maxZoom: 4,
	minZoom: 2
});
var dataSeries = {};

map.on('load', function() {
	map.addSource('earthquakes', {
		"type": "geojson",
		"data": {
			"type": "FeatureCollection",
			"crs": { 
				"type": "name",
				"properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } 
			},
			"features": []
		}
	});
	 
	map.addLayer({
		"id": "earthquakes-heat",
		"type": "heatmap",
		"source": "earthquakes",
		"maxzoom": 9,
		"paint": {
			// Increase the heatmap weight based on frequency and property magnitude
			"heatmap-weight": [
				"interpolate",
				["linear"],
				["get", "mag"],
				1, 0,
				40, 2
			],
			// Increase the heatmap color weight weight by zoom level
			// heatmap-intensity is a multiplier on top of heatmap-weight
			"heatmap-intensity": [
				"interpolate",
				["linear"],
				["zoom"],
				0, 1,
				2, 3
			],
			// Color ramp for heatmap.	Domain is 0 (low) to 1 (high).
			// Begin color ramp at 0-stop with a 0-transparancy color
			// to create a blur-like effect.
			"heatmap-color": [
				"interpolate",
				["linear"],
				["heatmap-density"],
				0, "rgba(0,0,0,0)",
				0.01, "#ffffb2",
				0.1, "#fecc5c",
				0.5, "#fd8d3c",
				0.9, "#f03b20",
				1, "#bd0026",
			],
			// Adjust the heatmap radius by zoom level
			"heatmap-radius": [
				"interpolate",
				["linear"],
				["zoom"],
				0, 2,
				9, 50
			],
			// Transition from heatmap to circle layer by zoom level
			"heatmap-opacity": [
				"interpolate",
				["linear"],
				["zoom"],
				2, 1,
				12, 1
			],
		}
	}, 'waterway-label');
	map.addLayer({
		"id": "earthquakes-point",
		"type": "circle",
		"source": "earthquakes",
		"minzoom": 7,
		"paint": {
			// Size circle radius by earthquake magnitude and zoom level
			"circle-radius": [
				"interpolate",
				["linear"],
				["zoom"],
				7, [
					"interpolate",
					["linear"],
					["get", "mag"],
					1, 1,
					6, 4
				],
				16, [
					"interpolate",
					["linear"],
					["get", "mag"],
					1, 5,
					6, 50
				]
			],
			// Color circle by earthquake magnitude
			"circle-color": [
				"interpolate",
				["linear"],
				["get", "mag"],
				1, "rgba(33,102,172,0)",
				4, "rgb(253,219,199)",
				6, "rgb(178,24,43)"
			],
			"circle-stroke-color": "white",
			"circle-stroke-width": 1,
			// Transition from heatmap to circle layer by zoom level
			"circle-opacity": [
				"interpolate",
				["linear"],
				["zoom"],
				7, 0,
				8, 1
			]
		}
	}, 'waterway-label');

	fetchXslx("/test.xlsx");
});

function fetchXslx(url) {
	var oReq = new XMLHttpRequest();
	oReq.open("GET", url, true);
	oReq.responseType = "arraybuffer";

	oReq.onload = function(e) {
		var arraybuffer = oReq.response;

		/* convert data to binary string */
		var data = new Uint8Array(arraybuffer);

		var arr = new Array();
		for (var i = 0; i != data.length; ++i) {
			arr[i] = String.fromCharCode(data[i]);
		}

		var bstr = arr.join("");

		var cfb = XLSX.read(bstr, { type: 'binary' });

		cfb.SheetNames.forEach(function(sheetName, index) {

			// Obtain The Current Row As CSV
			var fieldsObjs = XLS.utils.sheet_to_json(cfb.Sheets[sheetName]);

			fieldsObjs.map(function(field) {
				var value = parseInt(field['value']);
				var temp = field['ObservationTime(UTC)'].split(" ")[0].split("/")

				var dateKey = temp[0] + "/" + temp[2];
				if (dataSeries[dateKey] == undefined)
					dataSeries[dateKey] = {};
				if (dataSeries[dateKey][field['location']] == undefined)
					dataSeries[dateKey][field['location']] = 0;
				dataSeries[dateKey][field['location']] = dataSeries[dateKey][field['location']] + value;
			});

			updateData('12/2017');
		});
	}

	oReq.send();
}

function updateData(key) {
	var dataTemp = {
		"type": "FeatureCollection",
		"crs": { 
			"type": "name",
			"properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } 
		},
		"features": []
	};
	var filteredData = dataSeries[key];
	var max = 0, min = 100000;
	for (var key in filteredData) {
		if (max < filteredData[key])
			max = filteredData[key];
		if (min > filteredData[key])
			min = filteredData[key];
	}

	for (var key in filteredData) {
		var latlng = key.split(',');
		var value = ((filteredData[key] - min) * 20) / parseFloat(max - min)

		var point = { 
			"type": "Feature", 
			"properties": { 
				"mag": value
			}, 
			"geometry": { 
				"type": "Point", 
				"coordinates": [parseFloat(latlng[1]), parseFloat(latlng[0])] 
			} 
		};

		dataTemp['features'].push(point);
	}

	map.getSource('earthquakes').setData(dataTemp);
}