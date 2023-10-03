!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Tesseract = t() : e.Tesseract = t()
}(window, (function() {
    return function(e) {
        var t = {};
        function r(n) {
            if (t[n])
                return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r),
            o.l = !0,
            o.exports
        }
        return r.m = e,
        r.c = t,
        r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        r.t = function(e, t) {
            if (1 & t && (e = r(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (r.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    r.d(n, o, function(t) {
                        return e[t]
                    }
                    .bind(null, o));
            return n
        }
        ,
        r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return r.d(t, "a", t),
            t
        }
        ,
        r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r.p = "",
        r(r.s = 7)
    }([function(e, t) {
        e.exports = function(e, t) {
            return "".concat(e, "-").concat(t, "-").concat(Math.random().toString(16).slice(3, 8))
        }
    }
    , function(e, t) {
        var r = this
          , n = !1;
        t.logging = n,
        t.setLogging = function(e) {
            n = e
        }
        ,
        t.log = function() {
            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                t[o] = arguments[o];
            return n ? console.log.apply(r, t) : null
        }
    }
    , function(e, t) {
        var r, n, o = e.exports = {};
        function c(e) {
            if (r === setTimeout)
                return setTimeout(e, 0);
            if ((r === i || !r) && setTimeout)
                return r = setTimeout,
                setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                r = i
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                n = a
            }
        }();
        var u, s = [], f = !1, l = -1;
        function p() {
            f && u && (f = !1,
            u.length ? s = u.concat(s) : l = -1,
            s.length && d())
        }
        function d() {
            if (!f) {
                var e = c(p);
                f = !0;
                for (var t = s.length; t; ) {
                    for (u = s,
                    s = []; ++l < t; )
                        u && u[l].run();
                    l = -1,
                    t = s.length
                }
                u = null,
                f = !1,
                function(e) {
                    if (n === clearTimeout)
                        return clearTimeout(e);
                    if ((n === a || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function h(e, t) {
            this.fun = e,
            this.array = t
        }
        function y() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
            s.push(new h(e,t)),
            1 !== s.length || f || c(d)
        }
        ,
        h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        o.title = "browser",
        o.browser = !0,
        o.env = {},
        o.argv = [],
        o.version = "",
        o.versions = {},
        o.on = y,
        o.addListener = y,
        o.once = y,
        o.off = y,
        o.removeListener = y,
        o.removeAllListeners = y,
        o.emit = y,
        o.prependListener = y,
        o.prependOnceListener = y,
        o.listeners = function(e) {
            return []
        }
        ,
        o.cwd = function() {
            return "/"
        }
        ,
        o.umask = function() {
            return 0
        }
    }
    , function(e, t, r) {
        var n, o;
        void 0 === (o = "function" == typeof (n = function() {
            return function() {
                var e = arguments.length;
                if (0 === e)
                    throw new Error("resolveUrl requires at least one argument; got none.");
                var t = document.createElement("base");
                if (t.href = arguments[0],
                1 === e)
                    return t.href;
                var r = document.getElementsByTagName("head")[0];
                r.insertBefore(t, r.firstChild);
                for (var n, o = document.createElement("a"), i = 1; i < e; i++)
                    o.href = arguments[i],
                    n = o.href,
                    t.href = n;
                return r.removeChild(t),
                n
            }
        }
        ) ? n.call(t, r, t, e) : n) || (e.exports = o)
    }
    , function(e, t, r) {
        var n = r(0)
          , o = 0;
        e.exports = function(e) {
            var t = e.id
              , r = e.action
              , i = e.payload
              , a = void 0 === i ? {} : i
              , c = t;
            return void 0 === c && (c = n("Job", o),
            o += 1),
            {
                id: c,
                action: r,
                payload: a
            }
        }
    }
    , function(e, t, r) {
        function n(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function o(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(o, i) {
                    var a = e.apply(t, r);
                    function c(e) {
                        n(a, o, i, c, u, "next", e)
                    }
                    function u(e) {
                        n(a, o, i, c, u, "throw", e)
                    }
                    c(void 0)
                }
                ))
            }
        }
        function i(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(r), !0).forEach((function(t) {
                    c(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function c(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function u(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        var s = r(11)
          , f = r(14)
          , l = r(4)
          , p = r(1).log
          , d = r(0)
          , h = r(15).defaultOEM
          , y = r(16)
          , g = y.defaultOptions
          , b = y.spawnWorker
          , v = y.terminateWorker
          , m = y.onMessage
          , w = y.loadImage
          , O = y.send
          , j = 0;
        e.exports = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = d("Worker", j)
              , r = s(a({}, g, {}, e))
              , n = r.logger
              , i = r.errorHandler
              , c = u(r, ["logger", "errorHandler"])
              , y = {}
              , x = {}
              , k = b(c);
            j += 1;
            var P = function(e, t) {
                y[e] = t
            }
              , S = function(e, t) {
                x[e] = t
            }
              , E = function(e) {
                var r = e.id
                  , n = e.action
                  , o = e.payload;
                return new Promise((function(e, i) {
                    p("[".concat(t, "]: Start ").concat(r, ", action=").concat(n)),
                    P(n, e),
                    S(n, i),
                    O(k, {
                        workerId: t,
                        jobId: r,
                        action: n,
                        payload: o
                    })
                }
                ))
            }
              , L = function(e) {
                return E(l({
                    id: e,
                    action: "load",
                    payload: {
                        options: c
                    }
                }))
            }
              , T = function(e, t, r) {
                return E(l({
                    id: r,
                    action: "FS",
                    payload: {
                        method: "writeFile",
                        args: [e, t]
                    }
                }))
            }
              , R = function(e, t) {
                return E(l({
                    id: t,
                    action: "FS",
                    payload: {
                        method: "readFile",
                        args: [e, {
                            encoding: "utf8"
                        }]
                    }
                }))
            }
              , _ = function(e, t) {
                return E(l({
                    id: t,
                    action: "FS",
                    payload: {
                        method: "unlink",
                        args: [e]
                    }
                }))
            }
              , A = function(e, t, r) {
                return E(l({
                    id: r,
                    action: "FS",
                    payload: {
                        method: e,
                        args: t
                    }
                }))
            }
              , D = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "eng"
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return E(l({
                    id: t,
                    action: "loadLanguage",
                    payload: {
                        langs: e,
                        options: c
                    }
                }))
            }
              , N = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "eng"
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h
                  , r = arguments.length > 2 ? arguments[2] : void 0;
                return E(l({
                    id: r,
                    action: "initialize",
                    payload: {
                        langs: e,
                        oem: t
                    }
                }))
            }
              , F = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return E(l({
                    id: t,
                    action: "setParameters",
                    payload: {
                        params: e
                    }
                }))
            }
              , I = function() {
                var e = o(regeneratorRuntime.mark((function e(t) {
                    var r, n, o = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = o.length > 1 && void 0 !== o[1] ? o[1] : {},
                                n = o.length > 2 ? o[2] : void 0,
                                e.t0 = E,
                                e.t1 = l,
                                e.t2 = n,
                                e.next = 7,
                                w(t);
                            case 7:
                                return e.t3 = e.sent,
                                e.t4 = r,
                                e.t5 = {
                                    image: e.t3,
                                    options: e.t4
                                },
                                e.t6 = {
                                    id: e.t2,
                                    action: "recognize",
                                    payload: e.t5
                                },
                                e.t7 = (0,
                                e.t1)(e.t6),
                                e.abrupt("return", (0,
                                e.t0)(e.t7));
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , M = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Tesseract OCR Result"
                  , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , r = arguments.length > 2 ? arguments[2] : void 0;
                return E(l({
                    id: r,
                    action: "getPDF",
                    payload: {
                        title: e,
                        textonly: t
                    }
                }))
            }
              , C = function() {
                var e = o(regeneratorRuntime.mark((function e(t, r) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.t0 = E,
                                e.t1 = l,
                                e.t2 = r,
                                e.next = 5,
                                w(t);
                            case 5:
                                return e.t3 = e.sent,
                                e.t4 = {
                                    image: e.t3
                                },
                                e.t5 = {
                                    id: e.t2,
                                    action: "detect",
                                    payload: e.t4
                                },
                                e.t6 = (0,
                                e.t1)(e.t5),
                                e.abrupt("return", (0,
                                e.t0)(e.t6));
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
              , z = function() {
                var e = o(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return null !== k && (v(k),
                                k = null),
                                e.abrupt("return", Promise.resolve());
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return m(k, (function(e) {
                var t = e.workerId
                  , r = e.jobId
                  , o = e.status
                  , c = e.action
                  , u = e.data;
                if ("resolve" === o) {
                    p("[".concat(t, "]: Complete ").concat(r));
                    var s = u;
                    "recognize" === c ? s = f(u) : "getPDF" === c && (s = Array.from(a({}, u, {
                        length: Object.keys(u).length
                    }))),
                    y[c]({
                        jobId: r,
                        data: s
                    })
                } else if ("reject" === o) {
                    if (x[c](u),
                    !i)
                        throw Error(u);
                    i(u)
                } else
                    "progress" === o && n(u)
            }
            )),
            {
                id: t,
                worker: k,
                setResolve: P,
                setReject: S,
                load: L,
                writeText: T,
                readText: R,
                removeFile: _,
                FS: A,
                loadLanguage: D,
                initialize: N,
                setParameters: F,
                recognize: I,
                getPDF: M,
                detect: C,
                terminate: z
            }
        }
    }
    , function(e, t) {
        e.exports = {
            TESSERACT_ONLY: 0,
            LSTM_ONLY: 1,
            TESSERACT_LSTM_COMBINED: 2,
            DEFAULT: 3
        }
    }
    , function(e, t, r) {
        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function o(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        r(8);
        var i = r(10)
          , a = r(5)
          , c = r(25)
          , u = r(6)
          , s = r(26)
          , f = r(1).setLogging;
        e.exports = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(r), !0).forEach((function(t) {
                    o(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }({
            OEM: u,
            PSM: s,
            createScheduler: i,
            createWorker: a,
            setLogging: f
        }, c)
    }
    , function(e, t, r) {
        (function(e) {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            var r = function(e) {
                "use strict";
                var r, n = Object.prototype, o = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
                function s(e, t, r, n) {
                    var o = t && t.prototype instanceof g ? t : g
                      , i = Object.create(o.prototype)
                      , a = new L(n || []);
                    return i._invoke = function(e, t, r) {
                        var n = l;
                        return function(o, i) {
                            if (n === d)
                                throw new Error("Generator is already running");
                            if (n === h) {
                                if ("throw" === o)
                                    throw i;
                                return R()
                            }
                            for (r.method = o,
                            r.arg = i; ; ) {
                                var a = r.delegate;
                                if (a) {
                                    var c = P(a, r);
                                    if (c) {
                                        if (c === y)
                                            continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method)
                                    r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (n === l)
                                        throw n = h,
                                        r.arg;
                                    r.dispatchException(r.arg)
                                } else
                                    "return" === r.method && r.abrupt("return", r.arg);
                                n = d;
                                var u = f(e, t, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? h : p,
                                    u.arg === y)
                                        continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = h,
                                r.method = "throw",
                                r.arg = u.arg)
                            }
                        }
                    }(e, r, a),
                    i
                }
                function f(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = s;
                var l = "suspendedStart"
                  , p = "suspendedYield"
                  , d = "executing"
                  , h = "completed"
                  , y = {};
                function g() {}
                function b() {}
                function v() {}
                var m = {};
                m[a] = function() {
                    return this
                }
                ;
                var w = Object.getPrototypeOf
                  , O = w && w(w(T([])));
                O && O !== n && o.call(O, a) && (m = O);
                var j = v.prototype = g.prototype = Object.create(m);
                function x(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e)
                        }
                    }
                    ))
                }
                function k(e) {
                    var r;
                    this._invoke = function(n, i) {
                        function a() {
                            return new Promise((function(r, a) {
                                !function r(n, i, a, c) {
                                    var u = f(e[n], e, i);
                                    if ("throw" !== u.type) {
                                        var s = u.arg
                                          , l = s.value;
                                        return l && "object" === t(l) && o.call(l, "__await") ? Promise.resolve(l.__await).then((function(e) {
                                            r("next", e, a, c)
                                        }
                                        ), (function(e) {
                                            r("throw", e, a, c)
                                        }
                                        )) : Promise.resolve(l).then((function(e) {
                                            s.value = e,
                                            a(s)
                                        }
                                        ), (function(e) {
                                            return r("throw", e, a, c)
                                        }
                                        ))
                                    }
                                    c(u.arg)
                                }(n, i, r, a)
                            }
                            ))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }
                function P(e, t) {
                    var n = e.iterator[t.method];
                    if (n === r) {
                        if (t.delegate = null,
                        "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return",
                            t.arg = r,
                            P(e, t),
                            "throw" === t.method))
                                return y;
                            t.method = "throw",
                            t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return y
                    }
                    var o = f(n, e.iterator, t.arg);
                    if ("throw" === o.type)
                        return t.method = "throw",
                        t.arg = o.arg,
                        t.delegate = null,
                        y;
                    var i = o.arg;
                    return i ? i.done ? (t[e.resultName] = i.value,
                    t.next = e.nextLoc,
                    "return" !== t.method && (t.method = "next",
                    t.arg = r),
                    t.delegate = null,
                    y) : i : (t.method = "throw",
                    t.arg = new TypeError("iterator result is not an object"),
                    t.delegate = null,
                    y)
                }
                function S(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2],
                    t.afterLoc = e[3]),
                    this.tryEntries.push(t)
                }
                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal",
                    delete t.arg,
                    e.completion = t
                }
                function L(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    e.forEach(S, this),
                    this.reset(!0)
                }
                function T(e) {
                    if (e) {
                        var t = e[a];
                        if (t)
                            return t.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var n = -1
                              , i = function t() {
                                for (; ++n < e.length; )
                                    if (o.call(e, n))
                                        return t.value = e[n],
                                        t.done = !1,
                                        t;
                                return t.value = r,
                                t.done = !0,
                                t
                            };
                            return i.next = i
                        }
                    }
                    return {
                        next: R
                    }
                }
                function R() {
                    return {
                        value: r,
                        done: !0
                    }
                }
                return b.prototype = j.constructor = v,
                v.constructor = b,
                v[u] = b.displayName = "GeneratorFunction",
                e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v,
                    u in e || (e[u] = "GeneratorFunction")),
                    e.prototype = Object.create(j),
                    e
                }
                ,
                e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }
                ,
                x(k.prototype),
                k.prototype[c] = function() {
                    return this
                }
                ,
                e.AsyncIterator = k,
                e.async = function(t, r, n, o) {
                    var i = new k(s(t, r, n, o));
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }
                    ))
                }
                ,
                x(j),
                j[u] = "Generator",
                j[a] = function() {
                    return this
                }
                ,
                j.toString = function() {
                    return "[object Generator]"
                }
                ,
                e.keys = function(e) {
                    var t = [];
                    for (var r in e)
                        t.push(r);
                    return t.reverse(),
                    function r() {
                        for (; t.length; ) {
                            var n = t.pop();
                            if (n in e)
                                return r.value = n,
                                r.done = !1,
                                r
                        }
                        return r.done = !0,
                        r
                    }
                }
                ,
                e.values = T,
                L.prototype = {
                    constructor: L,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = r,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = r,
                        this.tryEntries.forEach(E),
                        !e)
                            for (var t in this)
                                "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var t = this;
                        function n(n, o) {
                            return c.type = "throw",
                            c.arg = e,
                            t.next = n,
                            o && (t.method = "next",
                            t.arg = r),
                            !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i]
                              , c = a.completion;
                            if ("root" === a.tryLoc)
                                return n("end");
                            if (a.tryLoc <= this.prev) {
                                var u = o.call(a, "catchLoc")
                                  , s = o.call(a, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < a.catchLoc)
                                        return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return n(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc)
                                        return n(a.catchLoc, !0)
                                } else {
                                    if (!s)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var i = n;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e,
                        a.arg = t,
                        i ? (this.method = "next",
                        this.next = i.finallyLoc,
                        y) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === e.type && t && (this.next = t),
                        y
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e)
                                return this.complete(r.completion, r.afterLoc),
                                E(r),
                                y
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(r)
                                }
                                return o
                            }
                        }
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: t,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = r),
                        y
                    }
                },
                e
            }("object" === t(e) ? e.exports : {});
            try {
                regeneratorRuntime = r
            } catch (e) {
                Function("r", "regeneratorRuntime = r")(r)
            }
        }
        ).call(this, r(9)(e))
    }
    , function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}
            ,
            e.paths = [],
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            e.webpackPolyfill = 1),
            e
        }
    }
    , function(e, t, r) {
        var n = this;
        function o(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++)
                        r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function i(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function a(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var a = e.apply(t, r);
                    function c(e) {
                        i(a, n, o, c, u, "next", e)
                    }
                    function u(e) {
                        i(a, n, o, c, u, "throw", e)
                    }
                    c(void 0)
                }
                ))
            }
        }
        var c = r(4)
          , u = r(1).log
          , s = r(0)
          , f = 0;
        e.exports = function() {
            var e = s("Scheduler", f)
              , t = {}
              , r = {}
              , i = [];
            f += 1;
            var l = function() {
                return Object.keys(t).length
            }
              , p = function() {
                if (0 !== i.length)
                    for (var e = Object.keys(t), n = 0; n < e.length; n += 1)
                        if (void 0 === r[e[n]]) {
                            i[0](t[e[n]]);
                            break
                        }
            }
              , d = function(t, s) {
                return new Promise((function(f, l) {
                    var d = c({
                        action: t,
                        payload: s
                    });
                    i.push(function() {
                        var e = a(regeneratorRuntime.mark((function e(a) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return i.shift(),
                                        r[a.id] = d,
                                        e.prev = 2,
                                        e.t0 = f,
                                        e.next = 6,
                                        a[t].apply(n, [].concat(o(s), [d.id]));
                                    case 6:
                                        e.t1 = e.sent,
                                        (0,
                                        e.t0)(e.t1),
                                        e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10,
                                        e.t2 = e.catch(2),
                                        l(e.t2);
                                    case 13:
                                        return e.prev = 13,
                                        delete r[a.id],
                                        p(),
                                        e.finish(13);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[2, 10, 13, 17]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()),
                    u("[".concat(e, "]: Add ").concat(d.id, " to JobQueue")),
                    u("[".concat(e, "]: JobQueue length=").concat(i.length)),
                    p()
                }
                ))
            };
            return {
                addWorker: function(r) {
                    return t[r.id] = r,
                    u("[".concat(e, "]: Add ").concat(r.id)),
                    u("[".concat(e, "]: Number of workers=").concat(l())),
                    p(),
                    r.id
                },
                addJob: function() {
                    var t = a(regeneratorRuntime.mark((function t(r) {
                        var n, o, i, a = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (0 !== l()) {
                                        t.next = 2;
                                        break
                                    }
                                    throw Error("[".concat(e, "]: You need to have at least one worker before adding jobs"));
                                case 2:
                                    for (n = a.length,
                                    o = new Array(n > 1 ? n - 1 : 0),
                                    i = 1; i < n; i++)
                                        o[i - 1] = a[i];
                                    return t.abrupt("return", d(r, o));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                terminate: function() {
                    var e = a(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    Object.keys(t).forEach(function() {
                                        var e = a(regeneratorRuntime.mark((function e(r) {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        t[r].terminate();
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()),
                                    i = [];
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                getQueueLen: function() {
                    return i.length
                },
                getNumWorkers: l
            }
        }
    }
    , function(e, t, r) {
        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function o(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var i = "browser" === r(12)("type") ? r(3) : function(e) {
            return e
        }
        ;
        e.exports = function(e) {
            var t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach((function(t) {
                        o(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }({}, e);
            return ["corePath", "workerPath", "langPath"].forEach((function(r) {
                void 0 !== e[r] && (t[r] = i(t[r]))
            }
            )),
            t
        }
    }
    , function(e, t, r) {
        (function(t) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            var o = r(13);
            e.exports = function(e) {
                var r = {};
                return o() ? r.type = "electron" : "object" === ("undefined" == typeof window ? "undefined" : n(window)) ? r.type = "browser" : "function" == typeof importScripts ? r.type = "webworker" : "object" === (void 0 === t ? "undefined" : n(t)) && (r.type = "node"),
                void 0 === e ? r : r[e]
            }
        }
        ).call(this, r(2))
    }
    , function(e, t, r) {
        (function(t) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            e.exports = function() {
                return "undefined" != typeof window && "object" === r(window.process) && "renderer" === window.process.type || (!(void 0 === t || "object" !== r(t.versions) || !t.versions.electron) || "object" === ("undefined" == typeof navigator ? "undefined" : r(navigator)) && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0)
            }
        }
        ).call(this, r(2))
    }
    , function(e, t) {
        function r(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function n(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function(t) {
                    o(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function o(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        e.exports = function(e) {
            var t = []
              , r = []
              , o = []
              , i = []
              , a = [];
            return e.blocks.forEach((function(c) {
                c.paragraphs.forEach((function(t) {
                    t.lines.forEach((function(r) {
                        r.words.forEach((function(o) {
                            o.symbols.forEach((function(i) {
                                a.push(n({}, i, {
                                    page: e,
                                    block: c,
                                    paragraph: t,
                                    line: r,
                                    word: o
                                }))
                            }
                            )),
                            i.push(n({}, o, {
                                page: e,
                                block: c,
                                paragraph: t,
                                line: r
                            }))
                        }
                        )),
                        o.push(n({}, r, {
                            page: e,
                            block: c,
                            paragraph: t
                        }))
                    }
                    )),
                    r.push(n({}, t, {
                        page: e,
                        block: c
                    }))
                }
                )),
                t.push(n({}, c, {
                    page: e
                }))
            }
            )),
            n({}, e, {
                blocks: t,
                paragraphs: r,
                lines: o,
                words: i,
                symbols: a
            })
        }
    }
    , function(e, t, r) {
        var n = r(6);
        e.exports = {
            defaultOEM: n.DEFAULT
        }
    }
    , function(e, t, r) {
        var n = r(17)
          , o = r(20)
          , i = r(21)
          , a = r(22)
          , c = r(23)
          , u = r(24);
        e.exports = {
            defaultOptions: n,
            spawnWorker: o,
            terminateWorker: i,
            onMessage: a,
            send: c,
            loadImage: u
        }
    }
    , function(e, t, r) {
        (function(t) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    r.push.apply(r, n)
                }
                return r
            }
            function i(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }
            var a = r(3)
              , c = r(18)
              , u = c.version
              , s = c.dependencies
              , f = r(19);
            e.exports = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        i(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }({}, f, {
                workerPath: void 0 !== t && "development" === t.env.TESS_ENV ? a("/dist/worker.dev.js?nocache=".concat(Math.random().toString(36).slice(3))) : "https://unpkg.com/tesseract.js@v".concat(u, "/dist/worker.min.js"),
                corePath: "https://unpkg.com/tesseract.js-core@v".concat(s["tesseract.js-core"].substring(1), "/tesseract-core.").concat("object" === ("undefined" == typeof WebAssembly ? "undefined" : n(WebAssembly)) ? "wasm" : "asm", ".js")
            })
        }
        ).call(this, r(2))
    }
    , function(e) {
        e.exports = JSON.parse('{"name":"tesseract.js","version":"2.1.1","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.7.7","@babel/preset-env":"^7.7.7","acorn":"^6.4.0","babel-loader":"^8.0.6","cors":"^2.8.5","eslint":"^5.16.0","eslint-config-airbnb":"^17.1.1","eslint-plugin-import":"^2.19.1","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-react":"^7.17.0","expect.js":"^0.3.1","express":"^4.17.1","mocha":"^5.2.0","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","nyc":"^15.0.0","rimraf":"^2.7.1","wait-on":"^3.3.0","webpack":"^4.41.4","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.10","webpack-dev-middleware":"^3.7.2"},"dependencies":{"bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-electron":"^2.2.0","is-url":"^1.2.4","node-fetch":"^2.6.0","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^2.2.0","zlibjs":"^0.3.1"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}')
    }
    , function(e, t) {
        e.exports = {
            langPath: "https://tessdata.projectnaptha.com/4.0.0",
            workerBlobURL: !0,
            logger: function() {}
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            var t, r = e.workerPath, n = e.workerBlobURL;
            if (Blob && URL && n) {
                var o = new Blob(['importScripts("'.concat(r, '");')],{
                    type: "application/javascript"
                });
                t = new Worker(URL.createObjectURL(o))
            } else
                t = new Worker(r);
            return t
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            e.terminate()
        }
    }
    , function(e, t) {
        e.exports = function(e, t) {
            e.onmessage = function(e) {
                var r = e.data;
                t(r)
            }
        }
    }
    , function(e, t) {
        function r(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        e.exports = function() {
            var e, t = (e = regeneratorRuntime.mark((function e(t, r) {
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            t.postMessage(r);
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )),
            function() {
                var t = this
                  , n = arguments;
                return new Promise((function(o, i) {
                    var a = e.apply(t, n);
                    function c(e) {
                        r(a, o, i, c, u, "next", e)
                    }
                    function u(e) {
                        r(a, o, i, c, u, "throw", e)
                    }
                    c(void 0)
                }
                ))
            }
            );
            return function(e, r) {
                return t.apply(this, arguments)
            }
        }()
    }
    , function(e, t, r) {
        function n(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function o(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(o, i) {
                    var a = e.apply(t, r);
                    function c(e) {
                        n(a, o, i, c, u, "next", e)
                    }
                    function u(e) {
                        n(a, o, i, c, u, "throw", e)
                    }
                    c(void 0)
                }
                ))
            }
        }
        var i = r(3)
          , a = function(e) {
            return new Promise((function(t, r) {
                var n = new FileReader;
                n.onload = function() {
                    t(n.result)
                }
                ,
                n.onerror = function(e) {
                    var t = e.target.error.code;
                    r(Error("File could not be read! Code=".concat(t)))
                }
                ,
                n.readAsArrayBuffer(e)
            }
            ))
        }
          , c = function() {
            var e = o(regeneratorRuntime.mark((function e(t) {
                var r, n;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = t,
                            void 0 !== t) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", "undefined");
                        case 3:
                            if ("string" != typeof t) {
                                e.next = 16;
                                break
                            }
                            if (!/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(t)) {
                                e.next = 8;
                                break
                            }
                            r = atob(t.split(",")[1]).split("").map((function(e) {
                                return e.charCodeAt(0)
                            }
                            )),
                            e.next = 14;
                            break;
                        case 8:
                            return e.next = 10,
                            fetch(i(t));
                        case 10:
                            return n = e.sent,
                            e.next = 13,
                            n.arrayBuffer();
                        case 13:
                            r = e.sent;
                        case 14:
                            e.next = 34;
                            break;
                        case 16:
                            if (!(t instanceof HTMLElement)) {
                                e.next = 30;
                                break
                            }
                            if ("IMG" !== t.tagName) {
                                e.next = 21;
                                break
                            }
                            return e.next = 20,
                            c(t.src);
                        case 20:
                            r = e.sent;
                        case 21:
                            if ("VIDEO" !== t.tagName) {
                                e.next = 25;
                                break
                            }
                            return e.next = 24,
                            c(t.poster);
                        case 24:
                            r = e.sent;
                        case 25:
                            if ("CANVAS" !== t.tagName) {
                                e.next = 28;
                                break
                            }
                            return e.next = 28,
                            new Promise((function(e) {
                                t.toBlob(function() {
                                    var t = o(regeneratorRuntime.mark((function t(n) {
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2,
                                                    a(n);
                                                case 2:
                                                    r = t.sent,
                                                    e();
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }())
                            }
                            ));
                        case 28:
                            e.next = 34;
                            break;
                        case 30:
                            if (!(t instanceof File || t instanceof Blob)) {
                                e.next = 34;
                                break
                            }
                            return e.next = 33,
                            a(t);
                        case 33:
                            r = e.sent;
                        case 34:
                            return e.abrupt("return", new Uint8Array(r));
                        case 35:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        e.exports = c
    }
    , function(e, t, r) {
        function n(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, o)
        }
        function o(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(o, i) {
                    var a = e.apply(t, r);
                    function c(e) {
                        n(a, o, i, c, u, "next", e)
                    }
                    function u(e) {
                        n(a, o, i, c, u, "throw", e)
                    }
                    c(void 0)
                }
                ))
            }
        }
        var i = r(5)
          , a = function() {
            var e = o(regeneratorRuntime.mark((function e(t, r, n) {
                var a;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = i(n),
                            e.next = 3,
                            a.load();
                        case 3:
                            return e.next = 5,
                            a.loadLanguage(r);
                        case 5:
                            return e.next = 7,
                            a.initialize(r);
                        case 7:
                            return e.abrupt("return", a.recognize(t).finally(o(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                            a.terminate();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))));
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, r, n) {
                return e.apply(this, arguments)
            }
        }()
          , c = function() {
            var e = o(regeneratorRuntime.mark((function e(t, r) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = i(r),
                            e.next = 3,
                            n.load();
                        case 3:
                            return e.next = 5,
                            n.loadLanguage("osd");
                        case 5:
                            return e.next = 7,
                            n.initialize("osd");
                        case 7:
                            return e.abrupt("return", n.detect(t).finally(o(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                            n.terminate();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))));
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }();
        e.exports = {
            recognize: a,
            detect: c
        }
    }
    , function(e, t) {
        e.exports = {
            OSD_ONLY: "0",
            AUTO_OSD: "1",
            AUTO_ONLY: "2",
            AUTO: "3",
            SINGLE_COLUMN: "4",
            SINGLE_BLOCK_VERT_TEXT: "5",
            SINGLE_BLOCK: "6",
            SINGLE_LINE: "7",
            SINGLE_WORD: "8",
            CIRCLE_WORD: "9",
            SINGLE_CHAR: "10",
            SPARSE_TEXT: "11",
            SPARSE_TEXT_OSD: "12"
        }
    }
    ])
}
));
