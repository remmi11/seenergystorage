<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8' />
		<title>Create a heatmap layer</title>
		<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
		<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.0/mapbox-gl.css' rel='stylesheet' />
		<link rel="stylesheet" href="css/jquery.ui.css">
		<link rel="stylesheet" href="css/jquery-ui-slider.css">
		<link rel="stylesheet" href="css/app.css">
	</head>
<body>
 
<div id='map'></div>

<div class='map-overlay top'>
	<div class='map-overlay-inner'>
		<div class="slider"></div>
	</div>
	<div class='map-overlay-inner magnitude'>
		<div id='legend' class='legend'>
			<div class='bar color1'></div>
			<div class='bar color2'></div>
			<div class='bar color3'></div>
			<div class='bar color4'></div>
			<div class='bar color5'></div>
			<div>Magnitude (m)</div>
		</div>
	</div>
</div>

<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.0/mapbox-gl.js'></script>
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="js/jquery-plus-ui.js"></script>
<script src="js/jquery-slider-pips-ui.js"></script>
<script src="js/modenizr.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js"></script>
<script src="js/map.js"></script>

<script>
$(document).ready(function() {
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	$(".slider").slider({ 
		min: 0, 
		max: months.length-1
	}).slider("pips", {
		rest: "label",
		labels: months
	}).slider("float", {
        labels: months
    }).on("slide", function(e,ui) {
		updateData((ui.value+1).toString()+"/2017");
	});
});
</script>
 
</body>
</html>