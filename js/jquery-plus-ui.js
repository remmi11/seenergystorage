!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length"in a && a.length
          , c = jQuery.type(a);
        return "function" === c || jQuery.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (jQuery.isFunction(b))
            return jQuery.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return jQuery.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (hb.test(b))
                return jQuery.filter(b, a, c);
            b = jQuery.filter(b, a)
        }
        return jQuery.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function f(a) {
        var b = ob[a] = {};
        return jQuery.each(a.match(nb) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1),
        a.removeEventListener("load", g, !1),
        jQuery.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = jQuery.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ub, "-$1").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? jQuery.parseJSON(c) : c
                } catch (e) {}
                sb.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    function j() {
        return !0
    }
    function k() {
        return !1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }
    function m(a, b) {
        return jQuery.nodeName(a, "table") && jQuery.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a),
            g = rb.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        jQuery.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a),
            i = jQuery.extend({}, h),
            sb.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && jQuery.nodeName(a, b) ? jQuery.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = jQuery(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : jQuery.css(e[0], "display");
        return e.detach(),
        f
    }
    function u(a) {
        var b = Z
          , c = Ob[a];
        return c || (c = t(a, b),
        "none" !== c && c || (Nb = (Nb || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = Nb[0].contentDocument,
        b.write(),
        b.close(),
        c = t(a, b),
        Nb.detach()),
        Ob[a] = c),
        c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a),
        c && (g = c.getPropertyValue(b) || c[b]),
        c && ("" !== g || jQuery.contains(a.ownerDocument, a) || (g = jQuery.style(a, b)),
        Qb.test(g) && Pb.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 !== g ? g + "" : g
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function x(a, b) {
        if (b in a)
            return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--; )
            if (b = Xb[e] + c,
            b in a)
                return b;
        return d
    }
    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += jQuery.css(a, c + wb[f], !0, e)),
            d ? ("content" === c && (g -= jQuery.css(a, "padding" + wb[f], !0, e)),
            "margin" !== c && (g -= jQuery.css(a, "border" + wb[f] + "Width", !0, e))) : (g += jQuery.css(a, "padding" + wb[f], !0, e),
            "padding" !== c && (g += jQuery.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Rb(a)
          , g = "border-box" === jQuery.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Qb.test(e))
                return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = rb.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d),
            "none" === c && e || rb.set(d, "olddisplay", e ? c : jQuery.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a,b,c,d,e)
    }
    function D() {
        return setTimeout(function() {
            Yb = void 0
        }),
        Yb = jQuery.now()
    }
    function E(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = wb[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xb(a), p = rb.get(a, "fxshow");
        c.queue || (h = jQuery._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                jQuery.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
        j = jQuery.css(a, "display"),
        k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j,
        "inline" === k && "none" === jQuery.css(a, "float") && (n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden",
        l.always(function() {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            $b.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || jQuery.style(a, d)
            } else
                j = void 0;
        if (jQuery.isEmptyObject(m))
            "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden"in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}),
            f && (p.hidden = !o),
            o ? jQuery(a).show() : l.done(function() {
                jQuery(a).hide()
            }),
            l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m)
                    jQuery.style(a, b, m[b])
            });
            for (d in m)
                g = F(o ? p[d] : 0, d, l),
                d in p || (p[d] = g.start,
                o && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = jQuery.camelCase(c),
            e = b[d],
            f = a[c],
            jQuery.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = jQuery.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bc.length, h = jQuery.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: jQuery.extend({}, b),
            opts: jQuery.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Yb || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = jQuery.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bc[f].call(j, a, k, j.opts))
                return d;
        return jQuery.map(k, F, j),
        jQuery.isFunction(j.opts.start) && j.opts.start.call(a, j),
        jQuery.fx.timer(jQuery.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(nb) || [];
            if (jQuery.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
            jQuery.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                e(j),
                !1)
            }),
            i
        }
        var f = {}
          , g = a === tc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = jQuery.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && jQuery.extend(!0, a, d),
        a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    function O(a, b, c, d) {
        var e;
        if (jQuery.isArray(b))
            jQuery.each(b, function(b, e) {
                c || yc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== jQuery.type(b))
            d(a, b);
        else
            for (e in b)
                O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return jQuery.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = []
      , R = Q.slice
      , S = Q.concat
      , T = Q.push
      , U = Q.indexOf
      , V = {}
      , W = V.toString
      , X = V.hasOwnProperty
      , Y = {}
      , Z = a.document
      , _ = "2.1.4"
      , jQuery = function(a, b) {
        return new jQuery.fn.init(a,b)
    }
      , ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , bb = /^-ms-/
      , cb = /-([\da-z])/gi
      , db = function(a, b) {
        return b.toUpperCase()
    };
    jQuery.fn = jQuery.prototype = {
        jquery: _,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = jQuery.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return jQuery.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(jQuery.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    },
    jQuery.extend = jQuery.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || jQuery.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (jQuery.isPlainObject(d) || (e = jQuery.isArray(d))) ? (e ? (e = !1,
                    f = c && jQuery.isArray(c) ? c : []) : f = c && jQuery.isPlainObject(c) ? c : {},
                    g[b] = jQuery.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    jQuery.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === jQuery.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !jQuery.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== jQuery.type(a) || a.nodeType || jQuery.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = jQuery.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"),
            b.text = a,
            Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d),
                    e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d),
                        e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]),
                e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]),
                    e === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? jQuery.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            else
                for (f in a)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            jQuery.isFunction(a) ? (d = R.call(arguments, 2),
            e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || jQuery.guid++,
            e) : void 0
        },
        now: Date.now,
        support: Y
    }),
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b),
            b = b || G,
            c = c || [],
            h = b.nodeType,
            "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)
                return c;
            if (!d && I) {
                if (11 !== h && (e = tb.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g),
                            !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f),
                                c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f),
                            c
                    } else {
                        if (e[2])
                            return _.apply(c, b.getElementsByTagName(a)),
                            c;
                        if ((g = e[3]) && v.getElementsByClassName)
                            return _.apply(c, b.getElementsByClassName(g)),
                            c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N,
                    o = b,
                    p = 1 !== h && a,
                    1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a),
                        (l = b.getAttribute("id")) ? n = l.replace(vb, "\\$&") : b.setAttribute("id", n),
                        n = "[id='" + n + "'] ",
                        i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = ub.test(a) && k(b.parentNode) || b,
                        p = j.join(",")
                    }
                    if (p)
                        try {
                            return _.apply(c, o.querySelectorAll(p)),
                            c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(jb, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0,
            a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b,
                d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}),
                            (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
            d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i),
                e)
                    for (j = q(t, n),
                    e(j, [], h, i),
                    k = j.length; k--; )
                        (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [],
                            k = t.length; k--; )
                                (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--; )
                            (l = t[k]) && (j = f ? bb(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    t = q(t === g ? t.splice(o, t.length) : t),
                    f ? f(null, g, t, i) : _.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return bb(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null,
                e
            }
            ]; e > h; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches),
                    c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(jb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0
              , f = a.length > 0
              , g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--,
                    d && p.push(k))
                }
                if (n += o,
                e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    _.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u,
                C = s),
                p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0),
            0
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, _ = X.push, ab = X.slice, bb = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", db = "[\\x20\\t\\r\\n\\f]", eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fb = eb.replace("w", "w#"), gb = "\\[" + db + "*(" + eb + ")(?:" + db + "*([*^$|!~]?=)" + db + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fb + "))|)" + db + "*\\]", hb = ":(" + eb + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + gb + ")*)|.*)\\)|)", ib = new RegExp(db + "+","g"), jb = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$","g"), kb = new RegExp("^" + db + "*," + db + "*"), lb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"), mb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]","g"), nb = new RegExp(hb), ob = new RegExp("^" + fb + "$"), pb = {
            ID: new RegExp("^#(" + eb + ")"),
            CLASS: new RegExp("^\\.(" + eb + ")"),
            TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + gb),
            PSEUDO: new RegExp("^" + hb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)","i"),
            bool: new RegExp("^(?:" + cb + ")$","i"),
            needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)","i")
        }, qb = /^(?:input|select|textarea|button)$/i, rb = /^h\d$/i, sb = /^[^{]+\{\s*\[native \w/, tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ub = /[+~]/, vb = /'|\\/g, wb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)","ig"), xb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, yb = function() {
            F()
        };
        try {
            _.apply(X = ab.call(O.childNodes), O.childNodes),
            X[O.childNodes.length].nodeType
        } catch (zb) {
            _ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, ab.call(b))
                }
                : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }
            }
        }
        v = b.support = {},
        y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d,
            H = d.documentElement,
            c = d.defaultView,
            c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", yb, !1) : c.attachEvent && c.attachEvent("onunload", yb)),
            I = !y(d),
            v.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            v.getElementsByClassName = sb.test(d.getElementsByClassName),
            v.getById = e(function(a) {
                return H.appendChild(a).id = N,
                !d.getElementsByName || !d.getElementsByName(N).length
            }),
            v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            w.filter.ID = function(a) {
                var b = a.replace(wb, xb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete w.find.ID,
            w.filter.ID = function(a) {
                var b = a.replace(wb, xb);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }
            ,
            K = [],
            J = [],
            (v.qsa = sb.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"),
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                a.querySelectorAll(":checked").length || J.push(":checked"),
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }),
            e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                J.push(",.*:")
            })),
            (v.matchesSelector = sb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"),
                L.call(a, "[s!='']:x"),
                K.push("!=", hb)
            }),
            J = J.length && new RegExp(J.join("|")),
            K = K.length && new RegExp(K.join("|")),
            b = sb.test(H.compareDocumentPosition),
            M = b || sb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            U = b ? function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? bb(D, a) - bb(D, b) : 0 : 4 & c ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? bb(D, a) - bb(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (c = a; c = c.parentNode; )
                    i.unshift(c);
                for (c = b; c = c.parentNode; )
                    j.unshift(c);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }
            ,
            d) : G
        }
        ,
        b.matches = function(a, c) {
            return b(a, null, null, c)
        }
        ,
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a),
            c = c.replace(mb, "='$1']"),
            !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }
        ,
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        }
        ,
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()]
              , d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }
        ,
        b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates,
            D = !v.sortStable && a.slice(0),
            a.sort(U),
            E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null,
            a
        }
        ,
        x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += x(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += x(b);
            return c
        }
        ,
        w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: pb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(wb, xb),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(wb, xb),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return pb.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && nb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(wb, xb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "",
                        "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ib, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                for (k = q[N] || (q[N] = {}),
                                j = k[a] || [],
                                n = j[0] === P && j[1],
                                m = j[0] === P && j[2],
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                l !== b)); )
                                    ;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                    w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                            d = bb(a, e[g]),
                            a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }
                    ) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = []
                      , c = []
                      , e = A(a.replace(jb, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a,
                        e(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(wb, xb),
                    function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return ob.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(wb, xb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return rb.test(a.nodeName)
                },
                input: function(a) {
                    return qb.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        })
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos,
        w.setFilters = new l,
        z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a,
            i = [],
            j = w.preFilter; h; ) {
                (!d || (e = kb.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                d = !1,
                (e = lb.exec(h)) && (d = e.shift(),
                f.push({
                    value: d,
                    type: e[0].replace(jb, " ")
                }),
                h = h.slice(d.length));
                for (g in w.filter)
                    !(e = pb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                    f.push({
                        value: d,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }
        ,
        A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)),
                c = b.length; c--; )
                    f = s(b[c]),
                    f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [],
            1 === l.length) {
                if (f = l[0] = l[0].slice(0),
                f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(wb, xb), b) || [])[0],
                    !b)
                        return c;
                    j && (b = b.parentNode),
                    a = a.slice(f.shift().value.length)
                }
                for (e = pb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                !w.relative[h = g.type]); )
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(wb, xb), ub.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1),
                        a = d.length && m(f),
                        !a)
                            return _.apply(c, d),
                            c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ub.test(a) && k(b.parentNode) || b),
            c
        }
        ,
        v.sortStable = N.split("").sort(U).join("") === N,
        v.detectDuplicates = !!E,
        F(),
        v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        v.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(cb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        b
    }(a);
    jQuery.find = eb,
    jQuery.expr = eb.selectors,
    jQuery.expr[":"] = jQuery.expr.pseudos,
    jQuery.unique = eb.uniqueSort,
    jQuery.text = eb.getText,
    jQuery.isXMLDoc = eb.isXML,
    jQuery.contains = eb.contains;
    var fb = jQuery.expr.match.needsContext
      , gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , hb = /^.[^:#\[\.,]*$/;
    jQuery.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? jQuery.find.matchesSelector(d, a) ? [d] : [] : jQuery.find.matches(a, jQuery.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    jQuery.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(jQuery(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (jQuery.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                jQuery.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? jQuery.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? jQuery(a) : a || [], !1).length
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kb = jQuery.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof jQuery ? b[0] : b,
                jQuery.merge(this, jQuery.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)),
                gb.test(c[1]) && jQuery.isPlainObject(b))
                    for (c in b)
                        jQuery.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]),
            d && d.parentNode && (this.length = 1,
            this[0] = d),
            this.context = Z,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : jQuery.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(jQuery) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        jQuery.makeArray(a, this))
    }
    ;
    kb.prototype = jQuery.fn,
    ib = jQuery(Z);
    var lb = /^(?:parents|prev(?:Until|All))/
      , mb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    jQuery.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && jQuery(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    jQuery.fn.extend({
        has: function(a) {
            var b = jQuery(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (jQuery.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? jQuery(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && jQuery.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? jQuery.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(jQuery(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    jQuery.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return jQuery.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return jQuery.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return jQuery.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return jQuery.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return jQuery.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return jQuery.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return jQuery.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return jQuery.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || jQuery.merge([], a.childNodes)
        }
    }, function(a, b) {
        jQuery.fn[a] = function(c, d) {
            var e = jQuery.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = jQuery.filter(d, e)),
            this.length > 1 && (mb[a] || jQuery.unique(e),
            lb.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var nb = /\S+/g
      , ob = {};
    jQuery.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : jQuery.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f,
            c = !0,
            h = e || 0,
            e = 0,
            g = i.length,
            d = !0; i && g > h; h++)
                if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1,
            i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {
            add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        jQuery.each(b, function(b, c) {
                            var d = jQuery.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                    d ? g = i.length : b && (e = c,
                    k(b))
                }
                return this
            },
            remove: function() {
                return i && jQuery.each(arguments, function(a, b) {
                    for (var c; (c = jQuery.inArray(b, i, c)) > -1; )
                        i.splice(c, 1),
                        d && (g >= c && g--,
                        h >= c && h--)
                }),
                this
            },
            has: function(a) {
                return a ? jQuery.inArray(a, i) > -1 : !(!i || !i.length)
            },
            empty: function() {
                return i = [],
                g = 0,
                this
            },
            disable: function() {
                return i = j = b = void 0,
                this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return j = void 0,
                b || l.disable(),
                this
            },
            locked: function() {
                return !j
            },
            fireWith: function(a, b) {
                return !i || c && !j || (b = b || [],
                b = [a, b.slice ? b.slice() : b],
                d ? j.push(b) : k(b)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return l
    }
    ,
    jQuery.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return jQuery.Deferred(function(c) {
                        jQuery.each(b, function(b, f) {
                            var g = jQuery.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && jQuery.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? jQuery.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            jQuery.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && jQuery.isFunction(a.promise) ? g : 0, i = 1 === h ? a : jQuery.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? R.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g),
                c = new Array(g),
                d = new Array(g); g > e; e++)
                    f[e] && jQuery.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    });
    var pb;
    jQuery.fn.ready = function(a) {
        return jQuery.ready.promise().done(a),
        this
    }
    ,
    jQuery.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? jQuery.readyWait++ : jQuery.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0,
            a !== !0 && --jQuery.readyWait > 0 || (pb.resolveWith(Z, [jQuery]),
            jQuery.fn.triggerHandler && (jQuery(Z).triggerHandler("ready"),
            jQuery(Z).off("ready"))))
        }
    }),
    jQuery.ready.promise = function(b) {
        return pb || (pb = jQuery.Deferred(),
        "complete" === Z.readyState ? setTimeout(jQuery.ready) : (Z.addEventListener("DOMContentLoaded", g, !1),
        a.addEventListener("load", g, !1))),
        pb.promise(b)
    }
    ,
    jQuery.ready.promise();
    var qb = jQuery.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === jQuery.type(c)) {
            e = !0;
            for (h in c)
                jQuery.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        jQuery.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(jQuery(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
    ;
    jQuery.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
    ,
    h.uid = 1,
    h.accepts = jQuery.acceptData,
    h.prototype = {
        key: function(a) {
            if (!h.accepts(a))
                return 0;
            var b = {}
              , c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    },
                    Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c,
                    jQuery.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}),
            c
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (jQuery.isEmptyObject(f))
                jQuery.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, jQuery.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                jQuery.isArray(b) ? d = b.concat(b.map(jQuery.camelCase)) : (e = jQuery.camelCase(b),
                b in g ? d = [b, e] : (d = e,
                d = d in g ? [d] : d.match(nb) || [])),
                c = d.length;
                for (; c--; )
                    delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !jQuery.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var rb = new h
      , sb = new h
      , tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ub = /([A-Z])/g;
    jQuery.extend({
        hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a)
        },
        data: function(a, b, c) {
            return sb.access(a, b, c)
        },
        removeData: function(a, b) {
            sb.remove(a, b)
        },
        _data: function(a, b, c) {
            return rb.access(a, b, c)
        },
        _removeData: function(a, b) {
            rb.remove(a, b)
        }
    }),
    jQuery.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f),
                1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; )
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = jQuery.camelCase(d.slice(5)),
                        i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a)
            }) : qb(this, function(b) {
                var c, d = jQuery.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a),
                    void 0 !== c)
                        return c;
                    if (c = sb.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = i(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = sb.get(this, d);
                        sb.set(this, d, b),
                        -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a)
            })
        }
    }),
    jQuery.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = rb.get(a, b),
            c && (!d || jQuery.isArray(c) ? d = rb.access(a, b, jQuery.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = jQuery.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = jQuery._queueHooks(a, b)
              , g = function() {
                jQuery.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    rb.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    jQuery.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? jQuery.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = jQuery.queue(this, a, b);
                jQuery._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && jQuery.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                jQuery.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = jQuery.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx"; g--; )
                c = rb.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , wb = ["Top", "Right", "Bottom", "Left"]
      , xb = function(a, b) {
        return a = b || a,
        "none" === jQuery.css(a, "display") || !jQuery.contains(a.ownerDocument, a)
    }
      , yb = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment()
          , b = a.appendChild(Z.createElement("div"))
          , c = Z.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin"in a;
    var Ab = /^key/
      , Bb = /^(?:mouse|pointer|contextmenu)|click/
      , Cb = /^(?:focusinfocus|focusoutblur)$/
      , Db = /^([^.]*)(?:\.(.+)|)$/;
    jQuery.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q)
                for (c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = jQuery.guid++),
                (i = q.events) || (i = q.events = {}),
                (g = q.handle) || (g = q.handle = function(b) {
                    return typeof jQuery !== zb && jQuery.event.triggered !== b.type ? jQuery.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(nb) || [""],
                j = b.length; j--; )
                    h = Db.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n && (l = jQuery.event.special[n] || {},
                    n = (e ? l.delegateType : l.bindType) || n,
                    l = jQuery.event.special[n] || {},
                    k = jQuery.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && jQuery.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f),
                    (m = i[n]) || (m = i[n] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    jQuery.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [""],
                j = b.length; j--; )
                    if (h = Db.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n) {
                        for (l = jQuery.event.special[n] || {},
                        n = (d ? l.delegateType : l.bindType) || n,
                        m = i[n] || [],
                        h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length; f--; )
                            k = m[f],
                            !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || jQuery.removeEvent(a, n, q.handle),
                        delete i[n])
                    } else
                        for (n in i)
                            jQuery.event.remove(a, n + b[j], c, d, !0);
                jQuery.isEmptyObject(i) && (delete q.handle,
                rb.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z,
            3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + jQuery.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."),
            n = o.shift(),
            o.sort()),
            j = n.indexOf(":") < 0 && "on" + n,
            b = b[jQuery.expando] ? b : new jQuery.Event(n,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = o.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : jQuery.makeArray(c, [b]),
            l = jQuery.event.special[n] || {},
            e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !jQuery.isWindow(d)) {
                    for (i = l.delegateType || n,
                    Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
                        m.push(g),
                        h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                    b.type = f > 1 ? i : l.bindType || n,
                    k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"),
                    k && k.apply(g, c),
                    k = j && g[j],
                    k && k.apply && jQuery.acceptData(g) && (b.result = k.apply(g, c),
                    b.result === !1 && b.preventDefault());
                return b.type = n,
                e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !jQuery.acceptData(d) || j && jQuery.isFunction(d[n]) && !jQuery.isWindow(d) && (h = d[j],
                h && (d[j] = null),
                jQuery.event.triggered = n,
                d[n](),
                jQuery.event.triggered = void 0,
                h && (d[j] = h)),
                b.result
            }
        },
        dispatch: function(a) {
            a = jQuery.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (rb.get(this, "events") || {})[a.type] || [], j = jQuery.event.special[a.type] || {};
            if (h[0] = a,
            a.delegateTarget = this,
            !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = jQuery.event.handlers.call(this, a, i),
                b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem,
                    c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f,
                        a.data = f.data,
                        d = ((jQuery.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? jQuery(e, this).index(i) >= 0 : jQuery.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z,
                d = c.documentElement,
                e = c.body,
                a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[jQuery.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new jQuery.Event(f),
            b = d.length; b--; )
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = Z),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && jQuery.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return jQuery.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = jQuery.extend(new jQuery.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? jQuery.event.trigger(e, null, b) : jQuery.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    jQuery.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    ,
    jQuery.Event = function(a, b) {
        return this instanceof jQuery.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a,
        b && jQuery.extend(this, b),
        this.timeStamp = a && a.timeStamp || jQuery.now(),
        void (this[jQuery.expando] = !0)) : new jQuery.Event(a,b)
    }
    ,
    jQuery.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j,
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j,
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        jQuery.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !jQuery.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    Y.focusinBubbles || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            jQuery.event.simulate(b, a.target, jQuery.event.fix(a), !0)
        };
        jQuery.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = rb.access(d, b);
                e || d.addEventListener(a, c, !0),
                rb.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0),
                rb.remove(d, b))
            }
        }
    }),
    jQuery.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = k;
            else if (!d)
                return this;
            return 1 === e && (f = d,
            d = function(a) {
                return jQuery().off(a),
                f.apply(this, arguments)
            }
            ,
            d.guid = f.guid || (f.guid = jQuery.guid++)),
            this.each(function() {
                jQuery.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                jQuery(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = k),
            this.each(function() {
                jQuery.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                jQuery.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? jQuery.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Fb = /<([\w:]+)/
      , Gb = /<|&#?\w+;/
      , Hb = /<(?:script|style|link)/i
      , Ib = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Jb = /^$|\/(?:java|ecma)script/i
      , Kb = /^true\/(.*)/
      , Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Mb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Mb.optgroup = Mb.option,
    Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead,
    Mb.th = Mb.td,
    jQuery.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = jQuery.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || jQuery.isXMLDoc(a)))
                for (g = r(h),
                f = r(a),
                d = 0,
                e = f.length; e > d; d++)
                    s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a),
                    g = g || r(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        q(f[d], g[d]);
                else
                    q(a, h);
            return g = r(h, "script"),
            g.length > 0 && p(g, !i && r(a, "script")),
            h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m],
                e || 0 === e)
                    if ("object" === jQuery.type(e))
                        jQuery.merge(l, e.nodeType ? [e] : e);
                    else if (Gb.test(e)) {
                        for (f = f || k.appendChild(b.createElement("div")),
                        g = (Fb.exec(e) || ["", ""])[1].toLowerCase(),
                        h = Mb[g] || Mb._default,
                        f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2],
                        j = h[0]; j--; )
                            f = f.lastChild;
                        jQuery.merge(l, f.childNodes),
                        f = k.firstChild,
                        f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            for (k.textContent = "",
            m = 0; e = l[m++]; )
                if ((!d || -1 === jQuery.inArray(e, d)) && (i = jQuery.contains(e.ownerDocument, e),
                f = r(k.appendChild(e), "script"),
                i && p(f),
                c))
                    for (j = 0; e = f[j++]; )
                        Jb.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = jQuery.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (jQuery.acceptData(c) && (e = c[rb.expando],
                e && (b = rb.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? jQuery.event.remove(c, d) : jQuery.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e]
                }
                delete sb.cache[c[sb.expando]]
            }
        }
    }),
    jQuery.fn.extend({
        text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? jQuery.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? jQuery.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || jQuery.cleanData(r(c)),
                c.parentNode && (b && jQuery.contains(c.ownerDocument, c) && p(r(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (jQuery.cleanData(r(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return jQuery.clone(this, a, b)
            })
        },
        html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (jQuery.cleanData(r(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                jQuery.cleanData(r(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = jQuery.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m))
                return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (j && (c = jQuery.buildFragment(a, this[0].ownerDocument, !1, this),
            d = c.firstChild,
            1 === c.childNodes.length && (c = d),
            d)) {
                for (e = jQuery.map(r(c, "script"), n),
                f = e.length; j > i; i++)
                    g = c,
                    i !== l && (g = jQuery.clone(g, !0, !0),
                    f && jQuery.merge(e, r(g, "script"))),
                    b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument,
                    jQuery.map(e, o),
                    i = 0; f > i; i++)
                        g = e[i],
                        Jb.test(g.type || "") && !rb.access(g, "globalEval") && jQuery.contains(h, g) && (g.src ? jQuery._evalUrl && jQuery._evalUrl(g.src) : jQuery.globalEval(g.textContent.replace(Lb, "")))
            }
            return this
        }
    }),
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        jQuery.fn[a] = function(a) {
            for (var c, d = [], e = jQuery(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0),
                jQuery(e[g])[b](c),
                T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {}, Pb = /^margin/, Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$","i"), Rb = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            g.innerHTML = "",
            e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top,
            d = "4px" === b.width,
            e.removeChild(f)
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box",
        g.cloneNode(!0).style.backgroundClip = "",
        Y.clearCloneStyle = "content-box" === g.style.backgroundClip,
        f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        f.appendChild(g),
        a.getComputedStyle && jQuery.extend(Y, {
            pixelPosition: function() {
                return b(),
                c
            },
            boxSizingReliable: function() {
                return null == d && b(),
                d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                c.style.marginRight = c.style.width = "0",
                g.style.width = "1px",
                e.appendChild(f),
                b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                e.removeChild(f),
                g.removeChild(c),
                b
            }
        }))
    }(),
    jQuery.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var Sb = /^(none|table(?!-c[ea]).+)/
      , Tb = new RegExp("^(" + vb + ")(.*)$","i")
      , Ub = new RegExp("^([+-])=(" + vb + ")","i")
      , Vb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Wb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Xb = ["Webkit", "O", "Moz", "ms"];
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = jQuery.camelCase(b), i = a.style;
                return b = jQuery.cssProps[h] || (jQuery.cssProps[h] = x(i, h)),
                g = jQuery.cssHooks[b] || jQuery.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(jQuery.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || jQuery.cssNumber[h] || (c += "px"),
                Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = jQuery.camelCase(b);
            return b = jQuery.cssProps[h] || (jQuery.cssProps[h] = x(a.style, h)),
            g = jQuery.cssHooks[b] || jQuery.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = v(a, b, d)),
            "normal" === e && b in Wb && (e = Wb[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || jQuery.isNumeric(f) ? f || 0 : e) : e
        }
    }),
    jQuery.each(["height", "width"], function(a, b) {
        jQuery.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sb.test(jQuery.css(a, "display")) && 0 === a.offsetWidth ? jQuery.swap(a, Vb, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === jQuery.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    jQuery.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? jQuery.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }),
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        jQuery.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Pb.test(a) || (jQuery.cssHooks[a + b].set = y)
    }),
    jQuery.fn.extend({
        css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (jQuery.isArray(b)) {
                    for (d = Rb(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = jQuery.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? jQuery.style(a, b, c) : jQuery.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? jQuery(this).show() : jQuery(this).hide()
            })
        }
    }),
    jQuery.Tween = C,
    C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (jQuery.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? jQuery.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : C.propHooks._default.set(this),
            this
        }
    },
    C.prototype.init.prototype = C.prototype,
    C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = jQuery.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                jQuery.fx.step[a.prop] ? jQuery.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[jQuery.cssProps[a.prop]] || jQuery.cssHooks[a.prop]) ? jQuery.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    jQuery.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    jQuery.fx = C.prototype.init,
    jQuery.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/, _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$","i"), ac = /queueHooks$/, bc = [G], cc = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = _b.exec(b)
              , f = e && e[3] || (jQuery.cssNumber[a] ? "" : "px")
              , g = (jQuery.cssNumber[a] || "px" !== f && +d) && _b.exec(jQuery.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    jQuery.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    jQuery.Animation = jQuery.extend(I, {
        tweener: function(a, b) {
            jQuery.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                cc[c] = cc[c] || [],
                cc[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? bc.unshift(a) : bc.push(a)
        }
    }),
    jQuery.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? jQuery.extend({}, a) : {
            complete: c || !c && b || jQuery.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !jQuery.isFunction(b) && b
        };
        return d.duration = jQuery.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in jQuery.fx.speeds ? jQuery.fx.speeds[d.duration] : jQuery.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            jQuery.isFunction(d.old) && d.old.call(this),
            d.queue && jQuery.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    jQuery.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = jQuery.isEmptyObject(a)
              , f = jQuery.speed(b, c, d)
              , g = function() {
                var b = I(this, jQuery.extend({}, a), f);
                (e || rb.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = jQuery.timers
                  , g = rb.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && ac.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && jQuery.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = rb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = jQuery.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                jQuery.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    jQuery.each(["toggle", "show", "hide"], function(a, b) {
        var c = jQuery.fn[b];
        jQuery.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }),
    jQuery.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        jQuery.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    jQuery.timers = [],
    jQuery.fx.tick = function() {
        var a, b = 0, c = jQuery.timers;
        for (Yb = jQuery.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || jQuery.fx.stop(),
        Yb = void 0
    }
    ,
    jQuery.fx.timer = function(a) {
        jQuery.timers.push(a),
        a() ? jQuery.fx.start() : jQuery.timers.pop()
    }
    ,
    jQuery.fx.interval = 13,
    jQuery.fx.start = function() {
        Zb || (Zb = setInterval(jQuery.fx.tick, jQuery.fx.interval))
    }
    ,
    jQuery.fx.stop = function() {
        clearInterval(Zb),
        Zb = null
    }
    ,
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    jQuery.fn.delay = function(a, b) {
        return a = jQuery.fx ? jQuery.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a = Z.createElement("input")
          , b = Z.createElement("select")
          , c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox",
        Y.checkOn = "" !== a.value,
        Y.optSelected = c.selected,
        b.disabled = !0,
        Y.optDisabled = !c.disabled,
        a = Z.createElement("input"),
        a.value = "t",
        a.type = "radio",
        Y.radioValue = "t" === a.value
    }();
    var dc, ec, fc = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(a, b) {
            return qb(this, jQuery.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                jQuery.removeAttr(this, a)
            })
        }
    }),
    jQuery.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === zb ? jQuery.prop(a, b, c) : (1 === f && jQuery.isXMLDoc(a) || (b = b.toLowerCase(),
                d = jQuery.attrHooks[b] || (jQuery.expr.match.bool.test(b) ? ec : dc)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = jQuery.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void jQuery.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(nb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = jQuery.propFix[c] || c,
                    jQuery.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && jQuery.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    ec = {
        set: function(a, b, c) {
            return b === !1 ? jQuery.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || jQuery.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b],
            fc[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            fc[b] = f),
            e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({
        prop: function(a, b) {
            return qb(this, jQuery.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[jQuery.propFix[a] || a]
            })
        }
    }),
    jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !jQuery.isXMLDoc(a),
                f && (b = jQuery.propFix[b] || b,
                e = jQuery.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }),
    Y.optSelected || (jQuery.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        }
    }),
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (jQuery.isFunction(a))
                return this.each(function(b) {
                    jQuery(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = jQuery.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (jQuery.isFunction(a))
                return this.each(function(b) {
                    jQuery(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? jQuery.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(jQuery.isFunction(a) ? function(c) {
                jQuery(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c)
                    for (var b, d = 0, e = jQuery(this), f = a.match(nb) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    });
    var ic = /\r/g;
    jQuery.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = jQuery.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, jQuery(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : jQuery.isArray(e) && (e = jQuery.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = jQuery.valHooks[e.type] || jQuery.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)
            }
        }
    }),
    jQuery.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = jQuery.find.attr(a, "value");
                    return null != b ? b : jQuery.trim(jQuery.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && jQuery.nodeName(c.parentNode, "optgroup"))) {
                            if (b = jQuery(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = jQuery.makeArray(b), g = e.length; g--; )
                        d = e[g],
                        (d.selected = jQuery.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function(a, b) {
                return jQuery.isArray(b) ? a.checked = jQuery.inArray(jQuery(a).val(), b) >= 0 : void 0
            }
        },
        Y.checkOn || (jQuery.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    }),
    jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        jQuery.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    jQuery.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jc = jQuery.now()
      , kc = /\?/;
    jQuery.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    jQuery.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser,
            b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + a),
        b
    }
    ;
    var lc = /#.*$/
      , mc = /([?&])_=[^&]*/
      , nc = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , oc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , pc = /^(?:GET|HEAD)$/
      , qc = /^\/\//
      , rc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , sc = {}
      , tc = {}
      , uc = "*/".concat("*")
      , vc = a.location.href
      , wc = rc.exec(vc.toLowerCase()) || [];
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vc,
            type: "GET",
            isLocal: oc.test(wc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": uc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, jQuery.ajaxSettings), b) : L(jQuery.ajaxSettings, a)
        },
        ajaxPrefilter: J(sc),
        ajaxTransport: J(tc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2,
                h && clearTimeout(h),
                d = void 0,
                f = g || "",
                v.readyState = a > 0 ? 4 : 0,
                i = a >= 200 && 300 > a || 304 === a,
                c && (s = M(l, v, c)),
                s = N(l, s, v, i),
                i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                u && (jQuery.lastModified[e] = u),
                u = v.getResponseHeader("etag"),
                u && (jQuery.etag[e] = u)),
                204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state,
                k = s.data,
                r = s.error,
                i = !r)) : (r = w,
                (a || !w) && (w = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || w) + "",
                i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                v.statusCode(q),
                q = void 0,
                j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]),
                p.fireWith(m, [v, w]),
                j && (n.trigger("ajaxComplete", [v, l]),
                --jQuery.active || jQuery.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var d, e, f, g, h, i, j, k, l = jQuery.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? jQuery(m) : jQuery.event, o = jQuery.Deferred(), p = jQuery.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g)
                            for (g = {}; b = nc.exec(f); )
                                g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b),
                    c(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            l.url = ((a || l.url || vc) + "").replace(lc, "").replace(qc, wc[1] + "//"),
            l.type = b.method || b.type || l.method || l.type,
            l.dataTypes = jQuery.trim(l.dataType || "*").toLowerCase().match(nb) || [""],
            null == l.crossDomain && (i = rc.exec(l.url.toLowerCase()),
            l.crossDomain = !(!i || i[1] === wc[1] && i[2] === wc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wc[3] || ("http:" === wc[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = jQuery.param(l.data, l.traditional)),
            K(sc, l, b, v),
            2 === t)
                return v;
            j = jQuery.event && l.global,
            j && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !pc.test(l.type),
            e = l.url,
            l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = mc.test(e) ? e.replace(mc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)),
            l.ifModified && (jQuery.lastModified[e] && v.setRequestHeader("If-Modified-Since", jQuery.lastModified[e]),
            jQuery.etag[e] && v.setRequestHeader("If-None-Match", jQuery.etag[e])),
            (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + uc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers)
                v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[k](l[k]);
            if (d = K(tc, l, b, v)) {
                v.readyState = 1,
                j && n.trigger("ajaxSend", [v, l]),
                l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1,
                    d.send(r, c)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    c(-1, w)
                }
            } else
                c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return jQuery.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return jQuery.get(a, void 0, b, "script")
        }
    }),
    jQuery.each(["get", "post"], function(a, b) {
        jQuery[b] = function(a, c, d, e) {
            return jQuery.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            jQuery.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    jQuery._evalUrl = function(a) {
        return jQuery.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    jQuery.fn.extend({
        wrapAll: function(a) {
            var b;
            return jQuery.isFunction(a) ? this.each(function(b) {
                jQuery(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = jQuery(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return this.each(jQuery.isFunction(a) ? function(b) {
                jQuery(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = jQuery(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = jQuery.isFunction(a);
            return this.each(function(c) {
                jQuery(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    jQuery.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }
    ,
    jQuery.expr.filters.visible = function(a) {
        return !jQuery.expr.filters.hidden(a)
    }
    ;
    var xc = /%20/g
      , yc = /\[\]$/
      , zc = /\r?\n/g
      , Ac = /^(?:submit|button|image|reset|file)$/i
      , Bc = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = jQuery.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional),
        jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a))
            jQuery.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                O(c, a[c], b, e);
        return d.join("&").replace(xc, "+")
    }
    ,
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = jQuery.prop(this, "elements");
                return a ? jQuery.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !jQuery(this).is(":disabled") && Bc.test(this.nodeName) && !Ac.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = jQuery(this).val();
                return null == c ? null : jQuery.isArray(c) ? jQuery.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zc, "\r\n")
                }
            }).get()
        }
    }),
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    }
    ;
    var Cc = 0
      , Dc = {}
      , Ec = {
        0: 200,
        1223: 204
    }
      , Fc = jQuery.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Dc)
            Dc[a]()
    }),
    Y.cors = !!Fc && "withCredentials"in Fc,
    Y.ajax = Fc = !!Fc,
    jQuery.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g],
                        b = f.onload = f.onerror = null,
                        "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }
                ,
                f.onload = b(),
                f.onerror = b("error"),
                b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }),
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return jQuery.globalEval(a),
                a
            }
        }
    }),
    jQuery.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    jQuery.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = jQuery("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gc = []
      , Hc = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || jQuery.expando + "_" + jc++;
            return this[a] = !0,
            a
        }
    }),
    jQuery.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = jQuery.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || jQuery.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Gc.push(e)),
            g && jQuery.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    jQuery.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || Z;
        var d = gb.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = jQuery.buildFragment([a], b, e),
        e && e.length && jQuery(e).remove(),
        jQuery.merge([], d.childNodes))
    }
    ;
    var Ic = jQuery.fn.load;
    jQuery.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = jQuery.trim(a.slice(h)),
        a = a.slice(0, h)),
        jQuery.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && jQuery.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? jQuery("<div>").append(jQuery.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        jQuery.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    jQuery.expr.filters.animated = function(a) {
        return jQuery.grep(jQuery.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var Jc = a.document.documentElement;
    jQuery.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = jQuery.css(a, "position"), l = jQuery(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = jQuery.css(a, "top"),
            i = jQuery.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            jQuery.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    jQuery.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    jQuery.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                jQuery.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()),
                c = P(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === jQuery.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                jQuery.nodeName(a[0], "html") || (d = a.offset()),
                d.top += jQuery.css(a[0], "borderTopWidth", !0),
                d.left += jQuery.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - jQuery.css(c, "marginTop", !0),
                    left: b.left - d.left - jQuery.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jc; a && !jQuery.nodeName(a, "html") && "static" === jQuery.css(a, "position"); )
                    a = a.offsetParent;
                return a || Jc
            })
        }
    }),
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        jQuery.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }),
    jQuery.each(["top", "left"], function(a, b) {
        jQuery.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b),
            Qb.test(c) ? jQuery(a).position()[b] + "px" : c) : void 0
        })
    }),
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        jQuery.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            jQuery.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return jQuery.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? jQuery.css(b, c, g) : jQuery.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    jQuery.fn.size = function() {
        return this.length
    }
    ,
    jQuery.fn.andSelf = jQuery.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return jQuery
    });
    var Kc = a.jQuery
      , Lc = a.$;
    return jQuery.noConflict = function(b) {
        return a.$ === jQuery && (a.$ = Lc),
        b && a.jQuery === jQuery && (a.jQuery = Kc),
        jQuery
    }
    ,
    typeof b === zb && (a.jQuery = a.$ = jQuery),
    jQuery
}),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function($) {
    function a(a, c) {
        var d, e, f, g = a.nodeName.toLowerCase();
        return "area" === g ? (d = a.parentNode,
        e = d.name,
        a.href && e && "map" === d.nodeName.toLowerCase() ? (f = $("img[usemap='#" + e + "']")[0],
        !!f && b(f)) : !1) : (/^(input|select|textarea|button|object)$/.test(g) ? !a.disabled : "a" === g ? a.href || c : c) && b(a)
    }
    function b(a) {
        return $.expr.filters.visible(a) && !$(a).parents().addBack().filter(function() {
            return "hidden" === $.css(this, "visibility")
        }).length
    }
    $.ui = $.ui || {},
    $.extend($.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    $.fn.extend({
        scrollParent: function(a) {
            var b = this.css("position")
              , c = "absolute" === b
              , d = a ? /(auto|scroll|hidden)/ : /(auto|scroll)/
              , e = this.parents().filter(function() {
                var a = $(this);
                return c && "static" === a.css("position") ? !1 : d.test(a.css("overflow") + a.css("overflow-y") + a.css("overflow-x"))
            }).eq(0);
            return "fixed" !== b && e.length ? e : $(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && $(this).removeAttr("id")
            })
        }
    }),
    $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function(a) {
            return function(b) {
                return !!$.data(b, a)
            }
        }) : function(a, b, c) {
            return !!$.data(a, c[3])
        }
        ,
        focusable: function(b) {
            return a(b, !isNaN($.attr(b, "tabindex")))
        },
        tabbable: function(b) {
            var c = $.attr(b, "tabindex")
              , d = isNaN(c);
            return (d || c >= 0) && a(b, !d)
        }
    }),
    $("<a>").outerWidth(1).jquery || $.each(["Width", "Height"], function(a, b) {
        function c(a, b, c, e) {
            return $.each(d, function() {
                b -= parseFloat($.css(a, "padding" + this)) || 0,
                c && (b -= parseFloat($.css(a, "border" + this + "Width")) || 0),
                e && (b -= parseFloat($.css(a, "margin" + this)) || 0)
            }),
            b
        }
        var d = "Width" === b ? ["Left", "Right"] : ["Top", "Bottom"]
          , e = b.toLowerCase()
          , f = {
            innerWidth: $.fn.innerWidth,
            innerHeight: $.fn.innerHeight,
            outerWidth: $.fn.outerWidth,
            outerHeight: $.fn.outerHeight
        };
        $.fn["inner" + b] = function(a) {
            return void 0 === a ? f["inner" + b].call(this) : this.each(function() {
                $(this).css(e, c(this, a) + "px")
            })
        }
        ,
        $.fn["outer" + b] = function(a, d) {
            return "number" != typeof a ? f["outer" + b].call(this, a) : this.each(function() {
                $(this).css(e, c(this, a, !0, d) + "px")
            })
        }
    }),
    $.fn.addBack || ($.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
    ),
    $("<a>").data("a-b", "a").removeData("a-b").data("a-b") && ($.fn.removeData = function(a) {
        return function(b) {
            return arguments.length ? a.call(this, $.camelCase(b)) : a.call(this)
        }
    }($.fn.removeData)),
    $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    $.fn.extend({
        focus: function(a) {
            return function(b, c) {
                return "number" == typeof b ? this.each(function() {
                    var a = this;
                    setTimeout(function() {
                        $(a).focus(),
                        c && c.call(a)
                    }, b)
                }) : a.apply(this, arguments)
            }
        }($.fn.focus),
        disableSelection: function() {
            var a = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(a) {
            if (void 0 !== a)
                return this.css("zIndex", a);
            if (this.length)
                for (var b, c, d = $(this[0]); d.length && d[0] !== document; ) {
                    if (b = d.css("position"),
                    ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(d.css("zIndex"), 10),
                    !isNaN(c) && 0 !== c))
                        return c;
                    d = d.parent()
                }
            return 0
        }
    }),
    $.ui.plugin = {
        add: function(a, b, c) {
            var d, e = $.ui[a].prototype;
            for (d in c)
                e.plugins[d] = e.plugins[d] || [],
                e.plugins[d].push([b, c[d]])
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++)
                    a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }
    }
}),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function($) {
    var a = 0
      , b = Array.prototype.slice;
    return $.cleanData = function(a) {
        return function(b) {
            var c, d, e;
            for (e = 0; null != (d = b[e]); e++)
                try {
                    c = $._data(d, "events"),
                    c && c.remove && $(d).triggerHandler("remove")
                } catch (f) {}
            a(b)
        }
    }($.cleanData),
    $.widget = function(a, b, c) {
        var d, e, f, g, h = {}, i = a.split(".")[0];
        return a = a.split(".")[1],
        d = i + "-" + a,
        c || (c = b,
        b = $.Widget),
        $.expr[":"][d.toLowerCase()] = function(a) {
            return !!$.data(a, d)
        }
        ,
        $[i] = $[i] || {},
        e = $[i][a],
        f = $[i][a] = function(a, b) {
            return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new f(a,b)
        }
        ,
        $.extend(f, e, {
            version: c.version,
            _proto: $.extend({}, c),
            _childConstructors: []
        }),
        g = new b,
        g.options = $.widget.extend({}, g.options),
        $.each(c, function(a, c) {
            return $.isFunction(c) ? void (h[a] = function() {
                var d = function() {
                    return b.prototype[a].apply(this, arguments)
                }
                  , e = function(c) {
                    return b.prototype[a].apply(this, c)
                };
                return function() {
                    var a, b = this._super, f = this._superApply;
                    return this._super = d,
                    this._superApply = e,
                    a = c.apply(this, arguments),
                    this._super = b,
                    this._superApply = f,
                    a
                }
            }()) : void (h[a] = c)
        }),
        f.prototype = $.widget.extend(g, {
            widgetEventPrefix: e ? g.widgetEventPrefix || a : a
        }, h, {
            constructor: f,
            namespace: i,
            widgetName: a,
            widgetFullName: d
        }),
        e ? ($.each(e._childConstructors, function(a, b) {
            var c = b.prototype;
            $.widget(c.namespace + "." + c.widgetName, f, b._proto)
        }),
        delete e._childConstructors) : b._childConstructors.push(f),
        $.widget.bridge(a, f),
        f
    }
    ,
    $.widget.extend = function(a) {
        for (var c, d, e = b.call(arguments, 1), f = 0, g = e.length; g > f; f++)
            for (c in e[f])
                d = e[f][c],
                e[f].hasOwnProperty(c) && void 0 !== d && (a[c] = $.isPlainObject(d) ? $.isPlainObject(a[c]) ? $.widget.extend({}, a[c], d) : $.widget.extend({}, d) : d);
        return a
    }
    ,
    $.widget.bridge = function(a, c) {
        var d = c.prototype.widgetFullName || a;
        $.fn[a] = function(e) {
            var f = "string" == typeof e
              , g = b.call(arguments, 1)
              , h = this;
            return f ? this.each(function() {
                var b, c = $.data(this, d);
                return "instance" === e ? (h = c,
                !1) : c ? $.isFunction(c[e]) && "_" !== e.charAt(0) ? (b = c[e].apply(c, g),
                b !== c && void 0 !== b ? (h = b && b.jquery ? h.pushStack(b.get()) : b,
                !1) : void 0) : $.error("no such method '" + e + "' for " + a + " widget instance") : $.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + e + "'")
            }) : (g.length && (e = $.widget.extend.apply(null, [e].concat(g))),
            this.each(function() {
                var a = $.data(this, d);
                a ? (a.option(e || {}),
                a._init && a._init()) : $.data(this, d, new c(e,this))
            })),
            h
        }
    }
    ,
    $.Widget = function() {}
    ,
    $.Widget._childConstructors = [],
    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b, c) {
            c = $(c || this.defaultElement || this)[0],
            this.element = $(c),
            this.uuid = a++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = $(),
            this.hoverable = $(),
            this.focusable = $(),
            c !== this && ($.data(c, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(a) {
                    a.target === c && this.destroy()
                }
            }),
            this.document = $(c.style ? c.ownerDocument : c.document || c),
            this.window = $(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), b),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: $.noop,
        widget: function() {
            return this.element
        },
        option: function(a, b) {
            var c, d, e, f = a;
            if (0 === arguments.length)
                return $.widget.extend({}, this.options);
            if ("string" == typeof a)
                if (f = {},
                c = a.split("."),
                a = c.shift(),
                c.length) {
                    for (d = f[a] = $.widget.extend({}, this.options[a]),
                    e = 0; e < c.length - 1; e++)
                        d[c[e]] = d[c[e]] || {},
                        d = d[c[e]];
                    if (a = c.pop(),
                    1 === arguments.length)
                        return void 0 === d[a] ? null : d[a];
                    d[a] = b
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[a] ? null : this.options[a];
                    f[a] = b
                }
            return this._setOptions(f),
            this
        },
        _setOptions: function(a) {
            var b;
            for (b in a)
                this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return this.options[a] = b,
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b),
            b && (this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus"))),
            this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(a, b, c) {
            var d, e = this;
            "boolean" != typeof a && (c = b,
            b = a,
            a = !1),
            c ? (b = d = $(b),
            this.bindings = this.bindings.add(b)) : (c = b,
            b = this.element,
            d = this.widget()),
            $.each(c, function(c, f) {
                function g() {
                    return a || e.options.disabled !== !0 && !$(this).hasClass("ui-state-disabled") ? ("string" == typeof f ? e[f] : f).apply(e, arguments) : void 0
                }
                "string" != typeof f && (g.guid = f.guid = f.guid || g.guid || $.guid++);
                var h = c.match(/^([\w:-]*)\s*(.*)$/)
                  , i = h[1] + e.eventNamespace
                  , j = h[2];
                j ? d.delegate(j, i, g) : b.bind(i, g)
            })
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            a.unbind(b).undelegate(b),
            this.bindings = $(this.bindings.not(a).get()),
            this.focusable = $(this.focusable.not(a).get()),
            this.hoverable = $(this.hoverable.not(a).get())
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(a) {
            this.hoverable = this.hoverable.add(a),
            this._on(a, {
                mouseenter: function(a) {
                    $(a.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(a) {
                    $(a.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(a) {
            this.focusable = this.focusable.add(a),
            this._on(a, {
                focusin: function(a) {
                    $(a.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(a) {
                    $(a.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(a, b, c) {
            var d, e, f = this.options[a];
            if (c = c || {},
            b = $.Event(b),
            b.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(),
            b.target = this.element[0],
            e = b.originalEvent)
                for (d in e)
                    d in b || (b[d] = e[d]);
            return this.element.trigger(b, c),
            !($.isFunction(f) && f.apply(this.element[0], [b].concat(c)) === !1 || b.isDefaultPrevented())
        }
    },
    $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(a, b) {
        $.Widget.prototype["_" + a] = function(c, d, e) {
            "string" == typeof d && (d = {
                effect: d
            });
            var f, g = d ? d === !0 || "number" == typeof d ? b : d.effect || b : a;
            d = d || {},
            "number" == typeof d && (d = {
                duration: d
            }),
            f = !$.isEmptyObject(d),
            d.complete = e,
            d.delay && c.delay(d.delay),
            f && $.effects && $.effects.effect[g] ? c[a](d) : g !== a && c[g] ? c[g](d.duration, d.easing, e) : c.queue(function(b) {
                $(this)[a](),
                e && e.call(c[0]),
                b()
            })
        }
    }),
    $.widget
}),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./widget"], a) : a(jQuery)
}(function($) {
    var a = !1;
    return $(document).mouseup(function() {
        a = !1
    }),
    $.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var a = this;
            this.element.bind("mousedown." + this.widgetName, function(b) {
                return a._mouseDown(b)
            }).bind("click." + this.widgetName, function(b) {
                return !0 === $.data(b.target, a.widgetName + ".preventClickEvent") ? ($.removeData(b.target, a.widgetName + ".preventClickEvent"),
                b.stopImmediatePropagation(),
                !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(b) {
            if (!a) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(b),
                this._mouseDownEvent = b;
                var c = this
                  , d = 1 === b.which
                  , e = "string" == typeof this.options.cancel && b.target.nodeName ? $(b.target).closest(this.options.cancel).length : !1;
                return d && !e && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1,
                !this._mouseStarted) ? (b.preventDefault(),
                !0) : (!0 === $.data(b.target, this.widgetName + ".preventClickEvent") && $.removeData(b.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(a) {
                    return c._mouseMove(a)
                }
                ,
                this._mouseUpDelegate = function(a) {
                    return c._mouseUp(a)
                }
                ,
                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                b.preventDefault(),
                a = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(a) {
            if (this._mouseMoved) {
                if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !a.button)
                    return this._mouseUp(a);
                if (!a.which)
                    return this._mouseUp(a)
            }
            return (a.which || a.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(a),
            a.preventDefault()) : (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== !1,
            this._mouseStarted ? this._mouseDrag(a) : this._mouseUp(a)),
            !this._mouseStarted)
        },
        _mouseUp: function(b) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            b.target === this._mouseDownEvent.target && $.data(b.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(b)),
            a = !1,
            !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], a) : a(jQuery)
}(function($) {
    return $.widget("ui.slider", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var a, b, c = this.options, d = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), e = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", f = [];
            for (b = c.values && c.values.length || 1,
            d.length > b && (d.slice(b).remove(),
            d = d.slice(0, b)),
            a = d.length; b > a; a++)
                f.push(e);
            this.handles = d.add($(f.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.each(function(a) {
                $(this).data("ui-slider-handle-index", a)
            })
        },
        _createRange: function() {
            var a = this.options
              , b = "";
            a.range ? (a.range === !0 && (a.values ? a.values.length && 2 !== a.values.length ? a.values = [a.values[0], a.values[0]] : $.isArray(a.values) && (a.values = a.values.slice(0)) : a.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = $("<div></div>").appendTo(this.element),
            b = "ui-slider-range ui-widget-header ui-corner-all"),
            this.range.addClass(b + ("min" === a.range || "max" === a.range ? " ui-slider-range-" + a.range : ""))) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(a) {
            var b, c, d, e, f, g, h, i, j = this, k = this.options;
            return k.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            b = {
                x: a.pageX,
                y: a.pageY
            },
            c = this._normValueFromMouse(b),
            d = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(a) {
                var b = Math.abs(c - j.values(a));
                (d > b || d === b && (a === j._lastChangedValue || j.values(a) === k.min)) && (d = b,
                e = $(this),
                f = a)
            }),
            g = this._start(a, f),
            g === !1 ? !1 : (this._mouseSliding = !0,
            this._handleIndex = f,
            e.addClass("ui-state-active").focus(),
            h = e.offset(),
            i = !$(a.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = i ? {
                left: 0,
                top: 0
            } : {
                left: a.pageX - h.left - e.width() / 2,
                top: a.pageY - h.top - e.height() / 2 - (parseInt(e.css("borderTopWidth"), 10) || 0) - (parseInt(e.css("borderBottomWidth"), 10) || 0) + (parseInt(e.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(a, f, c),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(a) {
            var b = {
                x: a.pageX,
                y: a.pageY
            }
              , c = this._normValueFromMouse(b);
            return this._slide(a, this._handleIndex, c),
            !1
        },
        _mouseStop: function(a) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(a, this._handleIndex),
            this._change(a, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(a) {
            var b, c, d, e, f;
            return "horizontal" === this.orientation ? (b = this.elementSize.width,
            c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height,
            c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            d = c / b,
            d > 1 && (d = 1),
            0 > d && (d = 0),
            "vertical" === this.orientation && (d = 1 - d),
            e = this._valueMax() - this._valueMin(),
            f = this._valueMin() + d * e,
            this._trimAlignValue(f)
        },
        _start: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (c.value = this.values(b),
            c.values = this.values()),
            this._trigger("start", a, c)
        },
        _slide: function(a, b, c) {
            var d, e, f;
            this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1),
            2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d),
            c !== this.values(b) && (e = this.values(),
            e[b] = c,
            f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c,
                values: e
            }),
            d = this.values(b ? 0 : 1),
            f !== !1 && this.values(b, c))) : c !== this.value() && (f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c
            }),
            f !== !1 && this.value(c))
        },
        _stop: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(b),
            c.values = this.values()),
            this._trigger("stop", a, c)
        },
        _change: function(a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b),
                c.values = this.values()),
                this._lastChangedValue = b,
                this._trigger("change", a, c)
            }
        },
        value: function(a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a),
            this._refreshValue(),
            void this._change(null, 0)) : this._value()
        },
        values: function(a, b) {
            var c, d, e;
            if (arguments.length > 1)
                return this.options.values[a] = this._trimAlignValue(b),
                this._refreshValue(),
                void this._change(null, a);
            if (!arguments.length)
                return this._values();
            if (!$.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(a) : this.value();
            for (c = this.options.values,
            d = arguments[0],
            e = 0; e < c.length; e += 1)
                c[e] = this._trimAlignValue(d[e]),
                this._change(null, e);
            this._refreshValue()
        },
        _setOption: function(a, b) {
            var c, d = 0;
            switch ("range" === a && this.options.range === !0 && ("min" === b ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === b && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            $.isArray(this.options.values) && (d = this.options.values.length),
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b),
            this._super(a, b),
            a) {
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.handles.css("horizontal" === b ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                c = 0; d > c; c += 1)
                    this._change(null, c);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0,
                this._calculateNewMax(),
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function(a) {
            var b, c, d;
            if (arguments.length)
                return b = this.options.values[a],
                b = this._trimAlignValue(b);
            if (this.options.values && this.options.values.length) {
                for (c = this.options.values.slice(),
                d = 0; d < c.length; d += 1)
                    c[d] = this._trimAlignValue(c[d]);
                return c
            }
            return []
        },
        _trimAlignValue: function(a) {
            if (a <= this._valueMin())
                return this._valueMin();
            if (a >= this._valueMax())
                return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1
              , c = (a - this._valueMin()) % b
              , d = a - c;
            return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b),
            parseFloat(d.toFixed(5))
        },
        _calculateNewMax: function() {
            var a = this.options.max
              , b = this._valueMin()
              , c = this.options.step
              , d = Math.floor(+(a - b).toFixed(this._precision()) / c) * c;
            a = d + b,
            this.max = parseFloat(a.toFixed(this._precision()))
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))),
            a
        },
        _precisionOf: function(a) {
            var b = a.toString()
              , c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshValue: function() {
            var a, b, c, d, e, f = this.options.range, g = this.options, h = this, i = this._animateOff ? !1 : g.animate, j = {};
            this.options.values && this.options.values.length ? this.handles.each(function(c) {
                b = (h.values(c) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100,
                j["horizontal" === h.orientation ? "left" : "bottom"] = b + "%",
                $(this).stop(1, 1)[i ? "animate" : "css"](j, g.animate),
                h.options.range === !0 && ("horizontal" === h.orientation ? (0 === c && h.range.stop(1, 1)[i ? "animate" : "css"]({
                    left: b + "%"
                }, g.animate),
                1 === c && h.range[i ? "animate" : "css"]({
                    width: b - a + "%"
                }, {
                    queue: !1,
                    duration: g.animate
                })) : (0 === c && h.range.stop(1, 1)[i ? "animate" : "css"]({
                    bottom: b + "%"
                }, g.animate),
                1 === c && h.range[i ? "animate" : "css"]({
                    height: b - a + "%"
                }, {
                    queue: !1,
                    duration: g.animate
                }))),
                a = b
            }) : (c = this.value(),
            d = this._valueMin(),
            e = this._valueMax(),
            b = e !== d ? (c - d) / (e - d) * 100 : 0,
            j["horizontal" === this.orientation ? "left" : "bottom"] = b + "%",
            this.handle.stop(1, 1)[i ? "animate" : "css"](j, g.animate),
            "min" === f && "horizontal" === this.orientation && this.range.stop(1, 1)[i ? "animate" : "css"]({
                width: b + "%"
            }, g.animate),
            "max" === f && "horizontal" === this.orientation && this.range[i ? "animate" : "css"]({
                width: 100 - b + "%"
            }, {
                queue: !1,
                duration: g.animate
            }),
            "min" === f && "vertical" === this.orientation && this.range.stop(1, 1)[i ? "animate" : "css"]({
                height: b + "%"
            }, g.animate),
            "max" === f && "vertical" === this.orientation && this.range[i ? "animate" : "css"]({
                height: 100 - b + "%"
            }, {
                queue: !1,
                duration: g.animate
            }))
        },
        _handleEvents: {
            keydown: function(a) {
                var b, c, d, e, f = $(a.target).data("ui-slider-handle-index");
                switch (a.keyCode) {
                case $.ui.keyCode.HOME:
                case $.ui.keyCode.END:
                case $.ui.keyCode.PAGE_UP:
                case $.ui.keyCode.PAGE_DOWN:
                case $.ui.keyCode.UP:
                case $.ui.keyCode.RIGHT:
                case $.ui.keyCode.DOWN:
                case $.ui.keyCode.LEFT:
                    if (a.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    $(a.target).addClass("ui-state-active"),
                    b = this._start(a, f),
                    b === !1))
                        return
                }
                switch (e = this.options.step,
                c = d = this.options.values && this.options.values.length ? this.values(f) : this.value(),
                a.keyCode) {
                case $.ui.keyCode.HOME:
                    d = this._valueMin();
                    break;
                case $.ui.keyCode.END:
                    d = this._valueMax();
                    break;
                case $.ui.keyCode.PAGE_UP:
                    d = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case $.ui.keyCode.PAGE_DOWN:
                    d = this._trimAlignValue(c - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case $.ui.keyCode.UP:
                case $.ui.keyCode.RIGHT:
                    if (c === this._valueMax())
                        return;
                    d = this._trimAlignValue(c + e);
                    break;
                case $.ui.keyCode.DOWN:
                case $.ui.keyCode.LEFT:
                    if (c === this._valueMin())
                        return;
                    d = this._trimAlignValue(c - e)
                }
                this._slide(a, f, d)
            },
            keyup: function(a) {
                var b = $(a.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(a, b),
                this._change(a, b),
                $(a.target).removeClass("ui-state-active"))
            }
        }
    })
});
