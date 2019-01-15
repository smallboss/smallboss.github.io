! function t(e, i, r) {
    function n(o, s) {
        if (!i[o]) {
            if (!e[o]) {
                var h = "function" == typeof require && require;
                if (!s && h) return h(o, !0);
                if (a) return a(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = i[o] = {
                exports: {}
            };
            e[o][0].call(c.exports, function(t) {
                var i = e[o][1][t];
                return n(i ? i : t)
            }, c, c.exports, t, e, i, r)
        }
        return i[o].exports
    }
    for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) n(r[o]);
    return n
}({
    1: [function(t, e, i) {
        "use strict";

        function r() {
            P = document.getElementById("wrapper"), D.init(F, A, _, x, b, w), C = D.canvas();
            var t = D.renderer();
            if (!Modernizr.touch) {
                var e = window.devicePixelRatio;
                2 > e && (e = 2), t.setPixelRatio(e)
            }
            t.setSize(C.width, C.height), P.appendChild(t.domElement), M = $(t.domElement), Modernizr.touch ? (t.domElement.addEventListener("touchstart", s), t.domElement.addEventListener("touchmove", s), M.on("touchend", o)) : ($(window).on("mousemove", a), $(window).on("mouseleave", a)), T = M.offset(), S = M.width(), E = M.height(), d = document.createElement("div"), d.appendChild(f), m = $(f), g(n), v.resize(l), l(), h(), setTimeout(function() {
                window.top.postMessage("loaded", "*")
            }, 0)
        }

        function n() {
            U += B, D.step(U), g(n)
        }

        function a(t) {
            var e = t.clientX - T.left,
                i = t.clientY - T.top;
            D.onMouseMove(e, i), t.preventDefault()
        }

        function o(t) {
            var e = 1e4,
                i = 1e4;
            D.onMouseMove(e, i), t.preventDefault()
        }

        function s(t) {
            var e = t.touches[0].clientX - T.left,
                i = t.touches[0].clientY - T.top;
            D.onMouseMove(e, i), t.preventDefault()
        }

        function h() {
            var t = document.createElement("div"),
                e = document.createElement("div"),
                i = document.createElement("div"),
                r = document.createElement("div"),
                n = document.createElement("div");
            d.style.opacity = "1", t.style.opacity = "1", e.style.opacity = "1", i.style.opacity = "1", r.style.opacity = "1", y.style.opacity = "1", n.style.opacity = "1", M.css("opacity", 1)
        }

        function l(t) {
            var e, i, r = window.innerWidth,
                n = window.innerHeight,
                a = r / n;
            V > a ? (i = n, e = i * V) : (e = r, i = e / V), m.css({
                width: e,
                height: i,
                left: (r - e) / 2
            }), T = M.offset()
        }

        function c() {
            k++, k == O && (R.getLoaded() ? r() : R.hasImageLoaded())
        }

        function u() {
            A = new Image,
            A.onload = c,
            A.src = "./assets/text/story.png",
            f = new Image, f.setAttribute("id", "bg-image"),
            f.onload = c,
            f.src = "./assets/bg.jpg"
        }

        function p() {
            F.setFile("./shaders/feather/fragment.glsl", "fs"), F.setFile("./shaders/feather/vertex.glsl", "vx"), F.setFile("./shaders/particles/fragment.glsl", "particleFs"), F.setFile("./shaders/particles/vertex.glsl", "particleVx"), F.setFile("./shaders/text/fragment.glsl", "textFs"), F.setFile("./shaders/text/vertex.glsl", "textVx"), F.setFile("./shaders/delayedFeather/fragment.glsl", "delayedFeatherFs"), F.setFile("./shaders/delayedFeather/vertex.glsl", "delayedFeatherVx"), F.setLoadedFunction(u), F.startLoad(), R.startload(r)
        }
        window.THREE = t("three"), t("gsap");
        var d, f, m, g = t("raf"),
            v = $(window),
            y = ((new Date).getTime(), document.createElement("div"));
        y.setAttribute("class", "fade"), document.body.appendChild(y);
        var _, x, b, w, M, T, S, E, A, C, P, L = t("./vendor/shader-loader"),
            R = t("./components/jsonloader"),
            D = t("./app"),
            F = new L,
            O = 2,
            k = 0,
            U = 0,
            B = 1 / 30,
            V = 1600 / 930;
        p()
    }, {
        "./app": 7,
        "./components/jsonloader": 11,
        "./vendor/shader-loader": 14,
        gsap: 3,
        raf: 4,
        three: 6
    }],
    2: [function(t, e, i) {
        function r() {
            if (!s) {
                s = !0;
                for (var t, e = o.length; e;) {
                    t = o, o = [];
                    for (var i = -1; ++i < e;) t[i]();
                    e = o.length
                }
                s = !1
            }
        }

        function n() {}
        var a = e.exports = {},
            o = [],
            s = !1;
        a.nextTick = function(t) {
            o.push(t), s || setTimeout(r, 0)
        }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = n, a.addListener = n, a.once = n, a.off = n, a.removeListener = n, a.removeAllListeners = n, a.emit = n, a.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, a.cwd = function() {
            return "/"
        }, a.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, a.umask = function() {
            return 0
        }
    }, {}],
    3: [function(t, e, i) {
        (function(t) {
            var i = "undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window;
            (i._gsQueue || (i._gsQueue = [])).push(function() {
                "use strict";
                i._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                    var r = function(t) {
                            var e, i = [],
                                r = t.length;
                            for (e = 0; e !== r; i.push(t[e++]));
                            return i
                        },
                        n = function(t, e, i) {
                            var r, n, a = t.cycle;
                            for (r in a) n = a[r], t[r] = "function" == typeof n ? n.call(e[i], i) : n[i % n.length];
                            delete t.cycle
                        },
                        a = function(t, e, r) {
                            i.call(this, t, e, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = a.prototype.render
                        },
                        o = 1e-10,
                        s = i._internals,
                        h = s.isSelector,
                        l = s.isArray,
                        c = a.prototype = i.to({}, .1, {}),
                        u = [];
                    a.version = "1.18.0", c.constructor = a, c.kill()._gc = !1, a.killTweensOf = a.killDelayedCallsTo = i.killTweensOf, a.getTweensOf = i.getTweensOf, a.lagSmoothing = i.lagSmoothing, a.ticker = i.ticker, a.render = i.render, c.invalidate = function() {
                        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                    }, c.updateTo = function(t, e) {
                        var r, n = this.ratio,
                            a = this.vars.immediateRender || t.immediateRender;
                        e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                        for (r in t) this.vars[r] = t[r];
                        if (this._initted || a)
                            if (e) this._initted = !1, a && this.render(0, !0, !0);
                            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                var o = this._time;
                                this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                            } else if (this._time > 0 || a) {
                                this._initted = !1, this._init();
                                for (var s, h = 1 / (1 - n), l = this._firstPT; l;) s = l.s + l.c, l.c *= h, l.s = s - l.c, l = l._next
                            }
                        return this
                    }, c.render = function(t, e, i) {
                        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                        var r, n, a, h, l, c, u, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                            f = this._time,
                            m = this._totalTime,
                            g = this._cycle,
                            v = this._duration,
                            y = this._rawPrevTime;
                        if (t >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === o) && y !== t && (i = !0, y > o && (n = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (n = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / v, c = this._easeType, u = this._easePower, (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), 1 === c ? this.ratio = 1 - l : 2 === c ? this.ratio = l : this._time / v < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), f === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                            this._time && !r ? this.ratio = this._ease.getRatio(this._time / v) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || r) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === v && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
                    }, a.to = function(t, e, i) {
                        return new a(t, e, i)
                    }, a.from = function(t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new a(t, e, i)
                    }, a.fromTo = function(t, e, i, r) {
                        return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new a(t, e, r)
                    }, a.staggerTo = a.allTo = function(t, e, o, s, c, p, d) {
                        s = s || 0;
                        var f, m, g, v, y = o.delay || 0,
                            _ = [],
                            x = function() {
                                o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(d || o.callbackScope || this, p || u)
                            },
                            b = o.cycle,
                            w = o.startAt && o.startAt.cycle;
                        for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = r(t))), t = t || [], 0 > s && (t = r(t), t.reverse(), s *= -1), f = t.length - 1, g = 0; f >= g; g++) {
                            m = {};
                            for (v in o) m[v] = o[v];
                            if (b && n(m, t, g), w) {
                                w = m.startAt = {};
                                for (v in o.startAt) w[v] = o.startAt[v];
                                n(m.startAt, t, g)
                            }
                            m.delay = y, g === f && c && (m.onComplete = x), _[g] = new a(t[g], e, m), y += s
                        }
                        return _
                    }, a.staggerFrom = a.allFrom = function(t, e, i, r, n, o, s) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, a.staggerTo(t, e, i, r, n, o, s)
                    }, a.staggerFromTo = a.allFromTo = function(t, e, i, r, n, o, s, h) {
                        return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, a.staggerTo(t, e, r, n, o, s, h)
                    }, a.delayedCall = function(t, e, i, r, n) {
                        return new a(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: r,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            useFrames: n,
                            overwrite: 0
                        })
                    }, a.set = function(t, e) {
                        return new a(t, 0, e)
                    }, a.isTweening = function(t) {
                        return i.getTweensOf(t, !0).length > 0
                    };
                    var p = function(t, e) {
                            for (var r = [], n = 0, a = t._first; a;) a instanceof i ? r[n++] = a : (e && (r[n++] = a), r = r.concat(p(a, e)), n = r.length), a = a._next;
                            return r
                        },
                        d = a.getAllTweens = function(e) {
                            return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
                        };
                    a.killAll = function(t, i, r, n) {
                        null == i && (i = !0), null == r && (r = !0);
                        var a, o, s, h = d(0 != n),
                            l = h.length,
                            c = i && r && n;
                        for (s = 0; l > s; s++) o = h[s], (c || o instanceof e || (a = o.target === o.vars.onComplete) && r || i && !a) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                    }, a.killChildTweensOf = function(t, e) {
                        if (null != t) {
                            var n, o, c, u, p, d = s.tweenLookup;
                            if ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = r(t)), l(t))
                                for (u = t.length; --u > -1;) a.killChildTweensOf(t[u], e);
                            else {
                                n = [];
                                for (c in d)
                                    for (o = d[c].target.parentNode; o;) o === t && (n = n.concat(d[c].tweens)), o = o.parentNode;
                                for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                            }
                        }
                    };
                    var f = function(t, i, r, n) {
                        i = i !== !1, r = r !== !1, n = n !== !1;
                        for (var a, o, s = d(n), h = i && r && n, l = s.length; --l > -1;) o = s[l], (h || o instanceof e || (a = o.target === o.vars.onComplete) && r || i && !a) && o.paused(t)
                    };
                    return a.pauseAll = function(t, e, i) {
                        f(!0, t, e, i)
                    }, a.resumeAll = function(t, e, i) {
                        f(!1, t, e, i)
                    }, a.globalTimeScale = function(e) {
                        var r = t._rootTimeline,
                            n = i.ticker.time;
                        return arguments.length ? (e = e || o, r._startTime = n - (n - r._startTime) * r._timeScale / e, r = t._rootFramesTimeline, n = i.ticker.frame, r._startTime = n - (n - r._startTime) * r._timeScale / e, r._timeScale = t._rootTimeline._timeScale = e, e) : r._timeScale
                    }, c.progress = function(t) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                    }, c.totalProgress = function(t) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                    }, c.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                    }, c.duration = function(e) {
                        return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                    }, c.totalDuration = function(t) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                    }, c.repeat = function(t) {
                        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                    }, c.repeatDelay = function(t) {
                        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                    }, c.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, a
                }, !0), i._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, r) {
                    var n = function(t) {
                            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                            var i, r, n = this.vars;
                            for (r in n) i = n[r], l(i) && -1 !== i.join("").indexOf("{self}") && (n[r] = this._swapSelfInParams(i));
                            l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                        },
                        a = 1e-10,
                        o = r._internals,
                        s = n._internals = {},
                        h = o.isSelector,
                        l = o.isArray,
                        c = o.lazyTweens,
                        u = o.lazyRender,
                        p = i._gsDefine.globals,
                        d = function(t) {
                            var e, i = {};
                            for (e in t) i[e] = t[e];
                            return i
                        },
                        f = function(t, e, i) {
                            var r, n, a = t.cycle;
                            for (r in a) n = a[r], t[r] = "function" == typeof n ? n.call(e[i], i) : n[i % n.length];
                            delete t.cycle
                        },
                        m = s.pauseCallback = function() {},
                        g = function(t) {
                            var e, i = [],
                                r = t.length;
                            for (e = 0; e !== r; i.push(t[e++]));
                            return i
                        },
                        v = n.prototype = new e;
                    return n.version = "1.18.0", v.constructor = n, v.kill()._gc = v._forcingPlayhead = v._hasPause = !1, v.to = function(t, e, i, n) {
                        var a = i.repeat && p.TweenMax || r;
                        return e ? this.add(new a(t, e, i), n) : this.set(t, i, n)
                    }, v.from = function(t, e, i, n) {
                        return this.add((i.repeat && p.TweenMax || r).from(t, e, i), n)
                    }, v.fromTo = function(t, e, i, n, a) {
                        var o = n.repeat && p.TweenMax || r;
                        return e ? this.add(o.fromTo(t, e, i, n), a) : this.set(t, n, a)
                    }, v.staggerTo = function(t, e, i, a, o, s, l, c) {
                        var u, p, m = new n({
                                onComplete: s,
                                onCompleteParams: l,
                                callbackScope: c,
                                smoothChildTiming: this.smoothChildTiming
                            }),
                            v = i.cycle;
                        for ("string" == typeof t && (t = r.selector(t) || t), t = t || [], h(t) && (t = g(t)), a = a || 0, 0 > a && (t = g(t), t.reverse(), a *= -1), p = 0; p < t.length; p++) u = d(i), u.startAt && (u.startAt = d(u.startAt), u.startAt.cycle && f(u.startAt, t, p)), v && f(u, t, p), m.to(t[p], e, u, p * a);
                        return this.add(m, o)
                    }, v.staggerFrom = function(t, e, i, r, n, a, o, s) {
                        return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, n, a, o, s)
                    }, v.staggerFromTo = function(t, e, i, r, n, a, o, s, h) {
                        return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, r, n, a, o, s, h)
                    }, v.call = function(t, e, i, n) {
                        return this.add(r.delayedCall(0, t, e, i), n)
                    }, v.set = function(t, e, i) {
                        return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new r(t, 0, e), i)
                    }, n.exportRoot = function(t, e) {
                        t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var i, a, o = new n(t),
                            s = o._timeline;
                        for (null == e && (e = !0), s._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = s._time, i = s._first; i;) a = i._next, e && i instanceof r && i.target === i.vars.onComplete || o.add(i, i._startTime - i._delay), i = a;
                        return s.add(o, 0), o
                    }, v.add = function(i, a, o, s) {
                        var h, c, u, p, d, f;
                        if ("number" != typeof a && (a = this._parseTimeOrLabel(a, 0, !0, i)), !(i instanceof t)) {
                            if (i instanceof Array || i && i.push && l(i)) {
                                for (o = o || "normal", s = s || 0, h = a, c = i.length, u = 0; c > u; u++) l(p = i[u]) && (p = new n({
                                    tweens: p
                                })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += s;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof i) return this.addLabel(i, a);
                            if ("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                            i = r.delayedCall(0, i)
                        }
                        if (e.prototype.add.call(this, i, a), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                            for (d = this, f = d.rawTime() > i._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                        return this
                    }, v.remove = function(e) {
                        if (e instanceof t) {
                            this._remove(e, !1);
                            var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                            return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                        }
                        if (e instanceof Array || e && e.push && l(e)) {
                            for (var r = e.length; --r > -1;) this.remove(e[r]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }, v._remove = function(t, i) {
                        e.prototype._remove.call(this, t, i);
                        var r = this._last;
                        return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                    }, v.append = function(t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }, v.insert = v.insertMultiple = function(t, e, i, r) {
                        return this.add(t, e || 0, i, r)
                    }, v.appendMultiple = function(t, e, i, r) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
                    }, v.addLabel = function(t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e), this
                    }, v.addPause = function(t, e, i, n) {
                        var a = r.delayedCall(0, m, i, n || this);
                        return a.vars.onComplete = a.vars.onReverseComplete = e, a.data = "isPause", this._hasPause = !0, this.add(a, t)
                    }, v.removeLabel = function(t) {
                        return delete this._labels[t], this
                    }, v.getLabelTime = function(t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    }, v._parseTimeOrLabel = function(e, i, r, n) {
                        var a;
                        if (n instanceof t && n.timeline === this) this.remove(n);
                        else if (n && (n instanceof Array || n.push && l(n)))
                            for (a = n.length; --a > -1;) n[a] instanceof t && n[a].timeline === this && this.remove(n[a]);
                        if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, r);
                        if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                        else {
                            if (a = e.indexOf("="), -1 === a) return null == this._labels[e] ? r ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                            i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, r) : this.duration()
                        }
                        return Number(e) + i
                    }, v.seek = function(t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                    }, v.stop = function() {
                        return this.paused(!0)
                    }, v.gotoAndPlay = function(t, e) {
                        return this.play(t, e)
                    }, v.gotoAndStop = function(t, e) {
                        return this.pause(t, e)
                    }, v.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var r, n, o, s, h, l, p = this._dirty ? this.totalDuration() : this._totalDuration,
                            d = this._time,
                            f = this._startTime,
                            m = this._timeScale,
                            g = this._paused;
                        if (t >= p) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, s = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === a) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > a && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : a, t = p + 1e-4;
                        else if (1e-7 > t)
                            if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== a && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (s = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : a, 0 === t && n)
                                    for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                                t = 0, this._initted || (h = !0)
                            } else {
                            if (this._hasPause && !this._forcingPlayhead && !e) {
                                if (t >= d)
                                    for (r = this._first; r && r._startTime <= t && !l;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (l = r), r = r._next;
                                else
                                    for (r = this._last; r && r._startTime >= t && !l;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (l = r), r = r._prev;
                                l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            this._totalTime = this._time = this._rawPrevTime = t
                        }
                        if (this._time !== d && this._first || i || h || l) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= d)
                                for (r = this._first; r && (o = r._next, !this._paused || g);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (l === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = o;
                            else
                                for (r = this._last; r && (o = r._prev, !this._paused || g);) {
                                    if (r._active || r._startTime <= d && !r._paused && !r._gc) {
                                        if (l === r) {
                                            for (l = r._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                            l = null, this.pause()
                                        }
                                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                                    }
                                    r = o
                                }
                            this._onUpdate && (e || (c.length && u(), this._callback("onUpdate"))), s && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                        }
                    }, v._hasPausedChild = function() {
                        for (var t = this._first; t;) {
                            if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                            t = t._next
                        }
                        return !1
                    }, v.getChildren = function(t, e, i, n) {
                        n = n || -9999999999;
                        for (var a = [], o = this._first, s = 0; o;) o._startTime < n || (o instanceof r ? e !== !1 && (a[s++] = o) : (i !== !1 && (a[s++] = o), t !== !1 && (a = a.concat(o.getChildren(!0, e, i)), s = a.length))), o = o._next;
                        return a
                    }, v.getTweensOf = function(t, e) {
                        var i, n, a = this._gc,
                            o = [],
                            s = 0;
                        for (a && this._enabled(!0, !0), i = r.getTweensOf(t), n = i.length; --n > -1;)(i[n].timeline === this || e && this._contains(i[n])) && (o[s++] = i[n]);
                        return a && this._enabled(!1, !0), o
                    }, v.recent = function() {
                        return this._recent
                    }, v._contains = function(t) {
                        for (var e = t.timeline; e;) {
                            if (e === this) return !0;
                            e = e.timeline
                        }
                        return !1
                    }, v.shiftChildren = function(t, e, i) {
                        i = i || 0;
                        for (var r, n = this._first, a = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                        if (e)
                            for (r in a) a[r] >= i && (a[r] += t);
                        return this._uncache(!0)
                    }, v._kill = function(t, e) {
                        if (!t && !e) return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1;) i[r]._kill(t, e) && (n = !0);
                        return n
                    }, v.clear = function(t) {
                        var e = this.getChildren(!1, !0, !0),
                            i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                        return t !== !1 && (this._labels = {}), this._uncache(!0)
                    }, v.invalidate = function() {
                        for (var e = this._first; e;) e.invalidate(), e = e._next;
                        return t.prototype.invalidate.call(this)
                    }, v._enabled = function(t, i) {
                        if (t === this._gc)
                            for (var r = this._first; r;) r._enabled(t, !0), r = r._next;
                        return e.prototype._enabled.call(this, t, i)
                    }, v.totalTime = function(e, i, r) {
                        this._forcingPlayhead = !0;
                        var n = t.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1, n
                    }, v.duration = function(t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                    }, v.totalDuration = function(t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, r = 0, n = this._last, a = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > a && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : a = n._startTime, n._startTime < 0 && !n._paused && (r -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), a = 0), i = n._startTime + n._totalDuration / n._timeScale, i > r && (r = i), n = e;
                                this._duration = this._totalDuration = r, this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                    }, v.paused = function(e) {
                        if (!e)
                            for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                        return t.prototype.paused.apply(this, arguments)
                    }, v.usesFrames = function() {
                        for (var e = this._timeline; e._timeline;) e = e._timeline;
                        return e === t._rootFramesTimeline
                    }, v.rawTime = function() {
                        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                    }, n
                }, !0), i._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                    var r = function(e) {
                            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                        },
                        n = 1e-10,
                        a = e._internals,
                        o = a.lazyTweens,
                        s = a.lazyRender,
                        h = new i(null, null, 1, 0),
                        l = r.prototype = new t;
                    return l.constructor = r, l.kill()._gc = !1, r.version = "1.18.0", l.invalidate = function() {
                        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                    }, l.addCallback = function(t, i, r, n) {
                        return this.add(e.delayedCall(0, t, r, n), i)
                    }, l.removeCallback = function(t, e) {
                        if (t)
                            if (null == e) this._kill(null, t);
                            else
                                for (var i = this.getTweensOf(t, !1), r = i.length, n = this._parseTimeOrLabel(e); --r > -1;) i[r]._startTime === n && i[r]._enabled(!1, !1);
                        return this
                    }, l.removePause = function(e) {
                        return this.removeCallback(t._internals.pauseCallback, e)
                    }, l.tweenTo = function(t, i) {
                        i = i || {};
                        var r, n, a, o = {
                            ease: h,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        };
                        for (n in i) o[n] = i[n];
                        return o.time = this._parseTimeOrLabel(t), r = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, r, o), o.onStart = function() {
                            a.target.paused(!0), a.vars.time !== a.target.time() && r === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && a._callback("onStart")
                        }, a
                    }, l.tweenFromTo = function(t, e, i) {
                        i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [t],
                            callbackScope: this
                        }, i.immediateRender = i.immediateRender !== !1;
                        var r = this.tweenTo(e, i);
                        return r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
                    }, l.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var r, a, h, l, c, u, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                            f = this._duration,
                            m = this._time,
                            g = this._totalTime,
                            v = this._startTime,
                            y = this._timeScale,
                            _ = this._rawPrevTime,
                            x = this._paused,
                            b = this._cycle;
                        if (t >= d) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > _ || _ === n) && _ !== t && this._first && (c = !0, _ > n && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);
                        else if (1e-7 > t)
                            if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && _ !== n && (_ > 0 || 0 > t && _ >= 0) && !this._locked) && (l = "onReverseComplete", a = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = a = !0, l = "onReverseComplete") : _ >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : n, 0 === t && a)
                                    for (r = this._first; r && 0 === r._startTime;) r._duration || (a = !1), r = r._next;
                                t = 0, this._initted || (c = !0)
                            } else if (0 === f && 0 > _ && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = f + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                            if (t = this._time, t >= m)
                                for (r = this._first; r && r._startTime <= t && !p;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (p = r), r = r._next;
                            else
                                for (r = this._last; r && r._startTime >= t && !p;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (p = r), r = r._prev;
                            p && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        if (this._cycle !== b && !this._locked) {
                            var w = this._yoyo && 0 !== (1 & b),
                                M = w === (this._yoyo && 0 !== (1 & this._cycle)),
                                T = this._totalTime,
                                S = this._cycle,
                                E = this._rawPrevTime,
                                A = this._time;
                            if (this._totalTime = b * f, this._cycle < b ? w = !w : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? _ - 1e-4 : _, this._cycle = b, this._locked = !0, m = w ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), M && (m = w ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                            this._time = A, this._totalTime = T, this._cycle = S, this._rawPrevTime = E
                        }
                        if (!(this._time !== m && this._first || i || c || p)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= m)
                            for (r = this._first; r && (h = r._next, !this._paused || x);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (p === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = h;
                        else
                            for (r = this._last; r && (h = r._prev, !this._paused || x);) {
                                if (r._active || r._startTime <= m && !r._paused && !r._gc) {
                                    if (p === r) {
                                        for (p = r._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
                                        p = null, this.pause()
                                    }
                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                                }
                                r = h
                            }
                        this._onUpdate && (e || (o.length && s(), this._callback("onUpdate"))), l && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (a && (o.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                    }, l.getActive = function(t, e, i) {
                        null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                        var r, n, a = [],
                            o = this.getChildren(t, e, i),
                            s = 0,
                            h = o.length;
                        for (r = 0; h > r; r++) n = o[r], n.isActive() && (a[s++] = n);
                        return a
                    }, l.getLabelAfter = function(t) {
                        t || 0 !== t && (t = this._time);
                        var e, i = this.getLabelsArray(),
                            r = i.length;
                        for (e = 0; r > e; e++)
                            if (i[e].time > t) return i[e].name;
                        return null
                    }, l.getLabelBefore = function(t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                            if (e[i].time < t) return e[i].name;
                        return null
                    }, l.getLabelsArray = function() {
                        var t, e = [],
                            i = 0;
                        for (t in this._labels) e[i++] = {
                            time: this._labels[t],
                            name: t
                        };
                        return e.sort(function(t, e) {
                            return t.time - e.time
                        }), e
                    }, l.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                    }, l.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                    }, l.totalDuration = function(e) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                    }, l.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                    }, l.repeat = function(t) {
                        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                    }, l.repeatDelay = function(t) {
                        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                    }, l.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, l.currentLabel = function(t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                    }, r
                }, !0),
                    function() {
                        var t = 180 / Math.PI,
                            e = [],
                            r = [],
                            n = [],
                            a = {},
                            o = i._gsDefine.globals,
                            s = function(t, e, i, r) {
                                this.a = t, this.b = e, this.c = i,
                                    this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t
                            },
                            h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                            l = function(t, e, i, r) {
                                var n = {
                                        a: t
                                    },
                                    a = {},
                                    o = {},
                                    s = {
                                        c: r
                                    },
                                    h = (t + e) / 2,
                                    l = (e + i) / 2,
                                    c = (i + r) / 2,
                                    u = (h + l) / 2,
                                    p = (l + c) / 2,
                                    d = (p - u) / 8;
                                return n.b = h + (t - h) / 4, a.b = u + d, n.c = a.a = (n.b + a.b) / 2, a.c = o.a = (u + p) / 2, o.b = p - d, s.b = c + (r - c) / 4, o.c = s.a = (o.b + s.b) / 2, [n, a, o, s]
                            },
                            c = function(t, i, a, o, s) {
                                var h, c, u, p, d, f, m, g, v, y, _, x, b, w = t.length - 1,
                                    M = 0,
                                    T = t[0].a;
                                for (h = 0; w > h; h++) d = t[M], c = d.a, u = d.d, p = t[M + 1].d, s ? (_ = e[h], x = r[h], b = (x + _) * i * .25 / (o ? .5 : n[h] || .5), f = u - (u - c) * (o ? .5 * i : 0 !== _ ? b / _ : 0), m = u + (p - u) * (o ? .5 * i : 0 !== x ? b / x : 0), g = u - (f + ((m - f) * (3 * _ / (_ + x) + .5) / 4 || 0))) : (f = u - (u - c) * i * .5, m = u + (p - u) * i * .5, g = u - (f + m) / 2), f += g, m += g, d.c = v = f, 0 !== h ? d.b = T : d.b = T = d.a + .6 * (d.c - d.a), d.da = u - c, d.ca = v - c, d.ba = T - c, a ? (y = l(c, T, v, u), t.splice(M, 1, y[0], y[1], y[2], y[3]), M += 4) : M++, T = m;
                                d = t[M], d.b = T, d.c = T + .4 * (d.d - T), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = T - d.a, a && (y = l(d.a, T, d.c, d.d), t.splice(M, 1, y[0], y[1], y[2], y[3]))
                            },
                            u = function(t, i, n, a) {
                                var o, h, l, c, u, p, d = [];
                                if (a)
                                    for (t = [a].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][i]) && "=" === p.charAt(1) && (t[h][i] = a[i] + Number(p.charAt(0) + p.substr(2)));
                                if (o = t.length - 2, 0 > o) return d[0] = new s(t[0][i], 0, 0, t[-1 > o ? 0 : 1][i]), d;
                                for (h = 0; o > h; h++) l = t[h][i], c = t[h + 1][i], d[h] = new s(l, 0, 0, c), n && (u = t[h + 2][i], e[h] = (e[h] || 0) + (c - l) * (c - l), r[h] = (r[h] || 0) + (u - c) * (u - c));
                                return d[h] = new s(t[h][i], 0, 0, t[h + 1][i]), d
                            },
                            p = function(t, i, o, s, l, p) {
                                var d, f, m, g, v, y, _, x, b = {},
                                    w = [],
                                    M = p || t[0];
                                l = "string" == typeof l ? "," + l + "," : h, null == i && (i = 1);
                                for (f in t[0]) w.push(f);
                                if (t.length > 1) {
                                    for (x = t[t.length - 1], _ = !0, d = w.length; --d > -1;)
                                        if (f = w[d], Math.abs(M[f] - x[f]) > .05) {
                                            _ = !1;
                                            break
                                        }
                                    _ && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                                }
                                for (e.length = r.length = n.length = 0, d = w.length; --d > -1;) f = w[d], a[f] = -1 !== l.indexOf("," + f + ","), b[f] = u(t, f, a[f], p);
                                for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), r[d] = Math.sqrt(r[d]);
                                if (!s) {
                                    for (d = w.length; --d > -1;)
                                        if (a[f])
                                            for (m = b[w[d]], y = m.length - 1, g = 0; y > g; g++) v = m[g + 1].da / r[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                                    for (d = n.length; --d > -1;) n[d] = Math.sqrt(n[d])
                                }
                                for (d = w.length, g = o ? 4 : 1; --d > -1;) f = w[d], m = b[f], c(m, i, o, s, a[f]), _ && (m.splice(0, g), m.splice(m.length - g, g));
                                return b
                            },
                            d = function(t, e, i) {
                                e = e || "soft";
                                var r, n, a, o, h, l, c, u, p, d, f, m = {},
                                    g = "cubic" === e ? 3 : 2,
                                    v = "soft" === e,
                                    y = [];
                                if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                                for (p in t[0]) y.push(p);
                                for (l = y.length; --l > -1;) {
                                    for (p = y[l], m[p] = h = [], d = 0, u = t.length, c = 0; u > c; c++) r = null == i ? t[c][p] : "string" == typeof(f = t[c][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && u - 1 > c && (h[d++] = (r + h[d - 2]) / 2), h[d++] = r;
                                    for (u = d - g + 1, d = 0, c = 0; u > c; c += g) r = h[c], n = h[c + 1], a = h[c + 2], o = 2 === g ? 0 : h[c + 3], h[d++] = f = 3 === g ? new s(r, n, a, o) : new s(r, (2 * n + r) / 3, (2 * n + a) / 3, a);
                                    h.length = d
                                }
                                return m
                            },
                            f = function(t, e, i) {
                                for (var r, n, a, o, s, h, l, c, u, p, d, f = 1 / i, m = t.length; --m > -1;)
                                    for (p = t[m], a = p.a, o = p.d - a, s = p.c - a, h = p.b - a, r = n = 0, c = 1; i >= c; c++) l = f * c, u = 1 - l, r = n - (n = (l * l * o + 3 * u * (l * s + u * h)) * l), d = m * i + c - 1, e[d] = (e[d] || 0) + r * r
                            },
                            m = function(t, e) {
                                e = e >> 0 || 6;
                                var i, r, n, a, o = [],
                                    s = [],
                                    h = 0,
                                    l = 0,
                                    c = e - 1,
                                    u = [],
                                    p = [];
                                for (i in t) f(t[i], o, e);
                                for (n = o.length, r = 0; n > r; r++) h += Math.sqrt(o[r]), a = r % e, p[a] = h, a === c && (l += h, a = r / e >> 0, u[a] = p, s[a] = l, h = 0, p = []);
                                return {
                                    length: l,
                                    lengths: s,
                                    segments: u
                                }
                            },
                            g = i._gsDefine.plugin({
                                propName: "bezier",
                                priority: -1,
                                version: "1.3.4",
                                API: 2,
                                global: !0,
                                init: function(t, e, i) {
                                    this._target = t, e instanceof Array && (e = {
                                        values: e
                                    }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                    var r, n, a, o, s, h = e.values || [],
                                        l = {},
                                        c = h[0],
                                        u = e.autoRotate || i.vars.orientToBezier;
                                    this._autoRotate = u ? u instanceof Array ? u : [
                                        ["x", "y", "rotation", u === !0 ? 0 : Number(u) || 0]
                                    ] : null;
                                    for (r in c) this._props.push(r);
                                    for (a = this._props.length; --a > -1;) r = this._props[a], this._overwriteProps.push(r), n = this._func[r] = "function" == typeof t[r], l[r] = n ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), s || l[r] !== h[0][r] && (s = l);
                                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, s) : d(h, e.type, l), this._segCount = this._beziers[r].length, this._timeRes) {
                                        var f = m(this._beziers, this._timeRes);
                                        this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                    }
                                    if (u = this._autoRotate)
                                        for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), a = u.length; --a > -1;) {
                                            for (o = 0; 3 > o; o++) r = u[a][o], this._func[r] = "function" == typeof t[r] ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                                            r = u[a][2], this._initialRotations[a] = this._func[r] ? this._func[r].call(this._target) : this._target[r]
                                        }
                                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                                },
                                set: function(e) {
                                    var i, r, n, a, o, s, h, l, c, u, p = this._segCount,
                                        d = this._func,
                                        f = this._target,
                                        m = e !== this._startRatio;
                                    if (this._timeRes) {
                                        if (c = this._lengths, u = this._curSeg, e *= this._length, n = this._li, e > this._l2 && p - 1 > n) {
                                            for (l = p - 1; l > n && (this._l2 = c[++n]) <= e;);
                                            this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0]
                                        } else if (e < this._l1 && n > 0) {
                                            for (; n > 0 && (this._l1 = c[--n]) >= e;);
                                            0 === n && e < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                        }
                                        if (i = n, e -= this._l1, n = this._si, e > this._s2 && n < u.length - 1) {
                                            for (l = u.length - 1; l > n && (this._s2 = u[++n]) <= e;);
                                            this._s1 = u[n - 1], this._si = n
                                        } else if (e < this._s1 && n > 0) {
                                            for (; n > 0 && (this._s1 = u[--n]) >= e;);
                                            0 === n && e < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n
                                        }
                                        s = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                                    } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, s = (e - i * (1 / p)) * p;
                                    for (r = 1 - s, n = this._props.length; --n > -1;) a = this._props[n], o = this._beziers[a][i], h = (s * s * o.da + 3 * r * (s * o.ca + r * o.ba)) * s + o.a, this._round[a] && (h = Math.round(h)), d[a] ? f[a](h) : f[a] = h;
                                    if (this._autoRotate) {
                                        var g, v, y, _, x, b, w, M = this._autoRotate;
                                        for (n = M.length; --n > -1;) a = M[n][2], b = M[n][3] || 0, w = M[n][4] === !0 ? 1 : t, o = this._beziers[M[n][0]], g = this._beziers[M[n][1]], o && g && (o = o[i], g = g[i], v = o.a + (o.b - o.a) * s, _ = o.b + (o.c - o.b) * s, v += (_ - v) * s, _ += (o.c + (o.d - o.c) * s - _) * s, y = g.a + (g.b - g.a) * s, x = g.b + (g.c - g.b) * s, y += (x - y) * s, x += (g.c + (g.d - g.c) * s - x) * s, h = m ? Math.atan2(x - y, _ - v) * w + b : this._initialRotations[n], d[a] ? f[a](h) : f[a] = h)
                                    }
                                }
                            }),
                            v = g.prototype;
                        g.bezierThrough = p, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function(t, e, i) {
                            return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                        }, g._cssRegister = function() {
                            var t = o.CSSPlugin;
                            if (t) {
                                var e = t._internals,
                                    i = e._parseToProxy,
                                    r = e._setPluginRatio,
                                    n = e.CSSPropTween;
                                e._registerComplexSpecialProp("bezier", {
                                    parser: function(t, e, a, o, s, h) {
                                        e instanceof Array && (e = {
                                            values: e
                                        }), h = new g;
                                        var l, c, u, p = e.values,
                                            d = p.length - 1,
                                            f = [],
                                            m = {};
                                        if (0 > d) return s;
                                        for (l = 0; d >= l; l++) u = i(t, p[l], o, s, h, d !== l), f[l] = u.end;
                                        for (c in e) m[c] = e[c];
                                        return m.values = f, s = new n(t, "bezier", 0, 0, u.pt, 2), s.data = u, s.plugin = h, s.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (l = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                                            ["left", "top", "rotation", l, !1]
                                        ] : null != u.end.x ? [
                                            ["x", "y", "rotation", l, !1]
                                        ] : !1), m.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform), h._onInitTween(u.proxy, m, o._tween), s
                                    }
                                })
                            }
                        }, v._roundProps = function(t, e) {
                            for (var i = this._overwriteProps, r = i.length; --r > -1;)(t[i[r]] || t.bezier || t.bezierThrough) && (this._round[i[r]] = e)
                        }, v._kill = function(t) {
                            var e, i, r = this._props;
                            for (e in this._beziers)
                                if (e in t)
                                    for (delete this._beziers[e], delete this._func[e], i = r.length; --i > -1;) r[i] === e && r.splice(i, 1);
                            return this._super._kill.call(this, t)
                        }
                    }(), i._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                    var r, n, a, o, s = function() {
                            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                        },
                        h = i._gsDefine.globals,
                        l = {},
                        c = s.prototype = new t("css");
                    c.constructor = s, s.version = "1.18.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, c = "px", s.suffixMap = {
                        top: c,
                        right: c,
                        bottom: c,
                        left: c,
                        width: c,
                        height: c,
                        fontSize: c,
                        padding: c,
                        margin: c,
                        perspective: c,
                        lineHeight: ""
                    };
                    var u, p, d, f, m, g, v = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                        y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                        b = /(?:\d|\-|\+|=|#|\.)*/g,
                        w = /opacity *= *([^)]*)/i,
                        M = /opacity:([^;]*)/i,
                        T = /alpha\(opacity *=.+?\)/i,
                        S = /^(rgb|hsl)/,
                        E = /([A-Z])/g,
                        A = /-([a-z])/gi,
                        C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        P = function(t, e) {
                            return e.toUpperCase()
                        },
                        L = /(?:Left|Right|Width)/i,
                        R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        F = /,(?=[^\)]*(?:\(|$))/gi,
                        O = Math.PI / 180,
                        k = 180 / Math.PI,
                        U = {},
                        B = document,
                        V = function(t) {
                            return B.createElementNS ? B.createElementNS("http://www.w3.org/1999/xhtml", t) : B.createElement(t)
                        },
                        I = V("div"),
                        z = V("img"),
                        N = s._internals = {
                            _specialProps: l
                        },
                        G = navigator.userAgent,
                        H = function() {
                            var t = G.indexOf("Android"),
                                e = V("a");
                            return d = -1 !== G.indexOf("Safari") && -1 === G.indexOf("Chrome") && (-1 === t || Number(G.substr(t + 8, 1)) > 3), m = d && Number(G.substr(G.indexOf("Version/") + 8, 1)) < 6, f = -1 !== G.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(G)) && (g = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                        }(),
                        j = function(t) {
                            return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                        },
                        W = function(t) {
                            window.console && console.log(t)
                        },
                        X = "",
                        q = "",
                        Y = function(t, e) {
                            e = e || I;
                            var i, r, n = e.style;
                            if (void 0 !== n[t]) return t;
                            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === n[i[r] + t];);
                            return r >= 0 ? (q = 3 === r ? "ms" : i[r], X = "-" + q.toLowerCase() + "-", q + t) : null
                        },
                        K = B.defaultView ? B.defaultView.getComputedStyle : function() {},
                        Z = s.getStyle = function(t, e, i, r, n) {
                            var a;
                            return H || "opacity" !== e ? (!r && t.style[e] ? a = t.style[e] : (i = i || K(t)) ? a = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t.currentStyle && (a = t.currentStyle[e]), null == n || a && "none" !== a && "auto" !== a && "auto auto" !== a ? a : n) : j(t)
                        },
                        Q = N.convertToPixels = function(t, i, r, n, a) {
                            if ("px" === n || !n) return r;
                            if ("auto" === n || !r) return 0;
                            var o, h, l, c = L.test(i),
                                u = t,
                                p = I.style,
                                d = 0 > r;
                            if (d && (r = -r), "%" === n && -1 !== i.indexOf("border")) o = r / 100 * (c ? t.clientWidth : t.clientHeight);
                            else {
                                if (p.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) p[c ? "borderLeftWidth" : "borderTopWidth"] = r + n;
                                else {
                                    if (u = t.parentNode || B.body, h = u._gsCache, l = e.ticker.frame, h && c && h.time === l) return h.width * r / 100;
                                    p[c ? "width" : "height"] = r + n
                                }
                                u.appendChild(I), o = parseFloat(I[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(I), c && "%" === n && s.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = o / r * 100), 0 !== o || a || (o = Q(t, i, r, n, !0))
                            }
                            return d ? -o : o
                        },
                        J = N.calculateOffset = function(t, e, i) {
                            if ("absolute" !== Z(t, "position", i)) return 0;
                            var r = "left" === e ? "Left" : "Top",
                                n = Z(t, "margin" + r, i);
                            return t["offset" + r] - (Q(t, e, parseFloat(n), n.replace(b, "")) || 0)
                        },
                        $ = function(t, e) {
                            var i, r, n, a = {};
                            if (e = e || K(t, null))
                                if (i = e.length)
                                    for (; --i > -1;) n = e[i], (-1 === n.indexOf("-transform") || Et === n) && (a[n.replace(A, P)] = e.getPropertyValue(n));
                                else
                                    for (i in e)(-1 === i.indexOf("Transform") || St === i) && (a[i] = e[i]);
                            else if (e = t.currentStyle || t.style)
                                for (i in e) "string" == typeof i && void 0 === a[i] && (a[i.replace(A, P)] = e[i]);
                            return H || (a.opacity = j(t)), r = Vt(t, e, !1), a.rotation = r.rotation, a.skewX = r.skewX, a.scaleX = r.scaleX, a.scaleY = r.scaleY, a.x = r.x, a.y = r.y, Ct && (a.z = r.z, a.rotationX = r.rotationX, a.rotationY = r.rotationY, a.scaleZ = r.scaleZ), a.filters && delete a.filters, a
                        },
                        tt = function(t, e, i, r, n) {
                            var a, o, s, h = {},
                                l = t.style;
                            for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (a = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof a || "string" == typeof a) && (h[o] = "auto" !== a || "left" !== o && "top" !== o ? "" !== a && "auto" !== a && "none" !== a || "string" != typeof e[o] || "" === e[o].replace(x, "") ? a : 0 : J(t, o), void 0 !== l[o] && (s = new mt(l, o, l[o], s)));
                            if (r)
                                for (o in r) "className" !== o && (h[o] = r[o]);
                            return {
                                difs: h,
                                firstMPT: s
                            }
                        },
                        et = {
                            width: ["Left", "Right"],
                            height: ["Top", "Bottom"]
                        },
                        it = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        rt = function(t, e, i) {
                            var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                n = et[e],
                                a = n.length;
                            for (i = i || K(t, null); --a > -1;) r -= parseFloat(Z(t, "padding" + n[a], i, !0)) || 0, r -= parseFloat(Z(t, "border" + n[a] + "Width", i, !0)) || 0;
                            return r
                        },
                        nt = function(t, e) {
                            if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                            (null == t || "" === t) && (t = "0 0");
                            var i = t.split(" "),
                                r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                                n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                            return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + n + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(n.replace(x, "")), e.v = t), e || t
                        },
                        at = function(t, e) {
                            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                        },
                        ot = function(t, e) {
                            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                        },
                        st = function(t, e, i, r) {
                            var n, a, o, s, h, l = 1e-6;
                            return null == t ? s = e : "number" == typeof t ? s = t : (n = 360, a = t.split("_"), h = "=" === t.charAt(1), o = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(a[0].substr(2)) : parseFloat(a[0])) * (-1 === t.indexOf("rad") ? 1 : k) - (h ? 0 : e), a.length && (r && (r[i] = e + o), -1 !== t.indexOf("short") && (o %= n, o !== o % (n / 2) && (o = 0 > o ? o + n : o - n)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * n) % n - (o / n | 0) * n : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * n) % n - (o / n | 0) * n)), s = e + o), l > s && s > -l && (s = 0), s
                        },
                        ht = {
                            aqua: [0, 255, 255],
                            lime: [0, 255, 0],
                            silver: [192, 192, 192],
                            black: [0, 0, 0],
                            maroon: [128, 0, 0],
                            teal: [0, 128, 128],
                            blue: [0, 0, 255],
                            navy: [0, 0, 128],
                            white: [255, 255, 255],
                            fuchsia: [255, 0, 255],
                            olive: [128, 128, 0],
                            yellow: [255, 255, 0],
                            orange: [255, 165, 0],
                            gray: [128, 128, 128],
                            purple: [128, 0, 128],
                            green: [0, 128, 0],
                            red: [255, 0, 0],
                            pink: [255, 192, 203],
                            cyan: [0, 255, 255],
                            transparent: [255, 255, 255, 0]
                        },
                        lt = function(t, e, i) {
                            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                        },
                        ct = s.parseColor = function(t, e) {
                            var i, r, n, a, o, s, h, l, c, u, p;
                            if (t)
                                if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                                else {
                                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ht[t]) i = ht[t];
                                    else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), n = t.charAt(2), a = t.charAt(3), t = "#" + r + r + n + n + a + a), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                    else if ("hsl" === t.substr(0, 3))
                                        if (i = p = t.match(v), e) {
                                            if (-1 !== t.indexOf("=")) return t.match(y)
                                        } else o = Number(i[0]) % 360 / 360, s = Number(i[1]) / 100, h = Number(i[2]) / 100, n = .5 >= h ? h * (s + 1) : h + s - h * s, r = 2 * h - n, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(o + 1 / 3, r, n), i[1] = lt(o, r, n), i[2] = lt(o - 1 / 3, r, n);
                                    else i = t.match(v) || ht.transparent;
                                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                                } else i = ht.black;
                            return e && !p && (r = i[0] / 255, n = i[1] / 255, a = i[2] / 255, l = Math.max(r, n, a), c = Math.min(r, n, a), h = (l + c) / 2, l === c ? o = s = 0 : (u = l - c, s = h > .5 ? u / (2 - l - c) : u / (l + c), o = l === r ? (n - a) / u + (a > n ? 6 : 0) : l === n ? (a - r) / u + 2 : (r - n) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * s + .5 | 0, i[2] = 100 * h + .5 | 0), i
                        },
                        ut = function(t, e) {
                            var i, r, n, a = t.match(pt) || [],
                                o = 0,
                                s = a.length ? "" : t;
                            for (i = 0; i < a.length; i++) r = a[i], n = t.substr(o, t.indexOf(r, o) - o), o += n.length + r.length, r = ct(r, e), 3 === r.length && r.push(1), s += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                            return s
                        },
                        pt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                    for (c in ht) pt += "|" + c + "\\b";
                    pt = new RegExp(pt + ")", "gi"), s.colorStringFilter = function(t) {
                        var e, i = t[0] + t[1];
                        pt.lastIndex = 0, pt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ut(t[0], e), t[1] = ut(t[1], e))
                    }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
                    var dt = function(t, e, i, r) {
                            if (null == t) return function(t) {
                                return t
                            };
                            var n, a = e ? (t.match(pt) || [""])[0] : "",
                                o = t.split(a).join("").match(_) || [],
                                s = t.substr(0, t.indexOf(o[0])),
                                h = ")" === t.charAt(t.length - 1) ? ")" : "",
                                l = -1 !== t.indexOf(" ") ? " " : ",",
                                c = o.length,
                                u = c > 0 ? o[0].replace(v, "") : "";
                            return c ? n = e ? function(t) {
                                var e, p, d, f;
                                if ("number" == typeof t) t += u;
                                else if (r && F.test(t)) {
                                    for (f = t.replace(F, "|").split("|"), d = 0; d < f.length; d++) f[d] = n(f[d]);
                                    return f.join(",")
                                }
                                if (e = (t.match(pt) || [a])[0], p = t.split(e).join("").match(_) || [], d = p.length, c > d--)
                                    for (; ++d < c;) p[d] = i ? p[(d - 1) / 2 | 0] : o[d];
                                return s + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                            } : function(t) {
                                var e, a, p;
                                if ("number" == typeof t) t += u;
                                else if (r && F.test(t)) {
                                    for (a = t.replace(F, "|").split("|"), p = 0; p < a.length; p++) a[p] = n(a[p]);
                                    return a.join(",")
                                }
                                if (e = t.match(_) || [], p = e.length, c > p--)
                                    for (; ++p < c;) e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
                                return s + e.join(l) + h
                            } : function(t) {
                                return t
                            }
                        },
                        ft = function(t) {
                            return t = t.split(","),
                                function(e, i, r, n, a, o, s) {
                                    var h, l = (i + "").split(" ");
                                    for (s = {}, h = 0; 4 > h; h++) s[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                    return n.parse(e, s, a, o)
                                }
                        },
                        mt = (N._setPluginRatio = function(t) {
                            this.plugin.setRatio(t);
                            for (var e, i, r, n, a = this.data, o = a.proxy, s = a.firstMPT, h = 1e-6; s;) e = o[s.v], s.r ? e = Math.round(e) : h > e && e > -h && (e = 0), s.t[s.p] = e, s = s._next;
                            if (a.autoRotate && (a.autoRotate.rotation = o.rotation), 1 === t)
                                for (s = a.firstMPT; s;) {
                                    if (i = s.t, i.type) {
                                        if (1 === i.type) {
                                            for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                            i.e = n
                                        }
                                    } else i.e = i.s + i.xs0;
                                    s = s._next
                                }
                        }, function(t, e, i, r, n) {
                            this.t = t, this.p = e, this.v = i, this.r = n, r && (r._prev = this, this._next = r)
                        }),
                        gt = (N._parseToProxy = function(t, e, i, r, n, a) {
                            var o, s, h, l, c, u = r,
                                p = {},
                                d = {},
                                f = i._transform,
                                m = U;
                            for (i._transform = null, U = e, r = c = i.parse(t, e, r, n), U = m, a && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); r && r !== u;) {
                                if (r.type <= 1 && (s = r.p, d[s] = r.s + r.c, p[s] = r.s, a || (l = new mt(r, "s", s, l, r.r), r.c = 0), 1 === r.type))
                                    for (o = r.l; --o > 0;) h = "xn" + o, s = r.p + "_" + h, d[s] = r.data[h], p[s] = r[h], a || (l = new mt(r, h, s, l, r.rxp[h]));
                                r = r._next
                            }
                            return {
                                proxy: p,
                                end: d,
                                firstMPT: l,
                                pt: c
                            }
                        }, N.CSSPropTween = function(t, e, i, n, a, s, h, l, c, u, p) {
                            this.t = t, this.p = e, this.s = i, this.c = n, this.n = h || e, t instanceof gt || o.push(this.n), this.r = l, this.type = s || 0, c && (this.pr = c, r = !0), this.b = void 0 === u ? i : u, this.e = void 0 === p ? i + n : p, a && (this._next = a, a._prev = this)
                        }),
                        vt = function(t, e, i, r, n, a) {
                            var o = new gt(t, e, i, r - i, n, -1, a);
                            return o.b = i, o.e = o.xs0 = r, o
                        },
                        yt = s.parseComplex = function(t, e, i, r, n, a, o, s, h, l) {
                            i = i || a || "", o = new gt(t, e, 0, 0, o, l ? 2 : 1, null, !1, s, i, r), r += "";
                            var c, p, d, f, m, g, _, x, b, w, M, T, S, E = i.split(", ").join(",").split(" "),
                                A = r.split(", ").join(",").split(" "),
                                C = E.length,
                                P = u !== !1;
                            for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (E = E.join(" ").replace(F, ", ").split(" "), A = A.join(" ").replace(F, ", ").split(" "), C = E.length), C !== A.length && (E = (a || "").split(" "), C = E.length), o.plugin = h, o.setRatio = l, pt.lastIndex = 0, c = 0; C > c; c++)
                                if (f = E[c], m = A[c], x = parseFloat(f), x || 0 === x) o.appendXtra("", x, at(m, x), m.replace(y, ""), P && -1 !== m.indexOf("px"), !0);
                                else if (n && pt.test(f)) T = "," === m.charAt(m.length - 1) ? ")," : ")", S = -1 !== m.indexOf("hsl") && H, f = ct(f, S), m = ct(m, S), b = f.length + m.length > 6, b && !H && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(A[c]).join("transparent")) : (H || (b = !1), S ? o.appendXtra(b ? "hsla(" : "hsl(", f[0], at(m[0], f[0]), ",", !1, !0).appendXtra("", f[1], at(m[1], f[1]), "%,", !1).appendXtra("", f[2], at(m[2], f[2]), b ? "%," : "%" + T, !1) : o.appendXtra(b ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], b ? "," : T, !0), b && (f = f.length < 4 ? 1 : f[3], o.appendXtra("", f, (m.length < 4 ? 1 : m[3]) - f, T, !1))), pt.lastIndex = 0;
                                else if (g = f.match(v)) {
                                    if (_ = m.match(y), !_ || _.length !== g.length) return o;
                                    for (d = 0, p = 0; p < g.length; p++) M = g[p], w = f.indexOf(M, d), o.appendXtra(f.substr(d, w - d), Number(M), at(_[p], M), "", P && "px" === f.substr(w + M.length, 2), 0 === p), d = w + M.length;
                                    o["xs" + o.l] += f.substr(d)
                                } else o["xs" + o.l] += o.l ? " " + f : f;
                            if (-1 !== r.indexOf("=") && o.data) {
                                for (T = o.xs0 + o.data.s, c = 1; c < o.l; c++) T += o["xs" + c] + o.data["xn" + c];
                                o.e = T + o["xs" + c]
                            }
                            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                        },
                        _t = 9;
                    for (c = gt.prototype, c.l = c.pr = 0; --_t > 0;) c["xn" + _t] = 0, c["xs" + _t] = "";
                    c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, r, n, a) {
                        var o = this,
                            s = o.l;
                        return o["xs" + s] += a && s ? " " + t : t || "", i || 0 === s || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", s > 0 ? (o.data["xn" + s] = e + i, o.rxp["xn" + s] = n, o["xn" + s] = e, o.plugin || (o.xfirst = new gt(o, "xn" + s, e, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                            s: e + i
                        }, o.rxp = {}, o.s = e, o.c = i, o.r = n, o)) : (o["xs" + s] += e + (r || ""), o)
                    };
                    var xt = function(t, e) {
                            e = e || {}, this.p = e.prefix ? Y(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                        },
                        bt = N._registerComplexSpecialProp = function(t, e, i) {
                            "object" != typeof e && (e = {
                                parser: i
                            });
                            var r, n, a = t.split(","),
                                o = e.defaultValue;
                            for (i = i || [o], r = 0; r < a.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || o, n = new xt(a[r], e)
                        },
                        wt = function(t) {
                            if (!l[t]) {
                                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                bt(t, {
                                    parser: function(t, i, r, n, a, o, s) {
                                        var c = h.com.greensock.plugins[e];
                                        return c ? (c._cssRegister(), l[r].parse(t, i, r, n, a, o, s)) : (W("Error: " + e + " js file not loaded."), a)
                                    }
                                })
                            }
                        };
                    c = xt.prototype, c.parseComplex = function(t, e, i, r, n, a) {
                        var o, s, h, l, c, u, p = this.keyword;
                        if (this.multi && (F.test(i) || F.test(e) ? (s = e.replace(F, "|").split("|"), h = i.replace(F, "|").split("|")) : p && (s = [e], h = [i])), h) {
                            for (l = h.length > s.length ? h.length : s.length, o = 0; l > o; o++) e = s[o] = s[o] || this.dflt, i = h[o] = h[o] || this.dflt, p && (c = e.indexOf(p), u = i.indexOf(p), c !== u && (-1 === u ? s[o] = s[o].split(p).join("") : -1 === c && (s[o] += " " + p)));
                            e = s.join(", "), i = h.join(", ")
                        }
                        return yt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, a)
                    }, c.parse = function(t, e, i, r, n, o, s) {
                        return this.parseComplex(t.style, this.format(Z(t, this.p, a, !1, this.dflt)), this.format(e), n, o)
                    }, s.registerSpecialProp = function(t, e, i) {
                        bt(t, {
                            parser: function(t, r, n, a, o, s, h) {
                                var l = new gt(t, n, 0, 0, o, 2, n, !1, i);
                                return l.plugin = s, l.setRatio = e(t, r, a._tween, n), l
                            },
                            priority: i
                        })
                    }, s.useSVGTransformAttr = d || f;
                    var Mt, Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                        St = Y("transform"),
                        Et = X + "transform",
                        At = Y("transformOrigin"),
                        Ct = null !== Y("perspective"),
                        Pt = N.Transform = function() {
                            this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = s.defaultForce3D !== !1 && Ct ? s.defaultForce3D || "auto" : !1
                        },
                        Lt = window.SVGElement,
                        Rt = function(t, e, i) {
                            var r, n = B.createElementNS("http://www.w3.org/2000/svg", t),
                                a = /([a-z])([A-Z])/g;
                            for (r in i) n.setAttributeNS(null, r.replace(a, "$1-$2").toLowerCase(), i[r]);
                            return e.appendChild(n), n
                        },
                        Dt = B.documentElement,
                        Ft = function() {
                            var t, e, i, r = g || /Android/i.test(G) && !window.chrome;
                            return B.createElementNS && !r && (t = Rt("svg", Dt), e = Rt("rect", t, {
                                width: 100,
                                height: 50,
                                x: 100
                            }), i = e.getBoundingClientRect().width, e.style[At] = "50% 50%", e.style[St] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(f && Ct), Dt.removeChild(t)), r
                        }(),
                        Ot = function(t, e, i, r, n) {
                            var a, o, h, l, c, u, p, d, f, m, g, v, y, _, x = t._gsTransform,
                                b = Bt(t, !0);
                            x && (y = x.xOrigin, _ = x.yOrigin), (!r || (a = r.split(" ")).length < 2) && (p = t.getBBox(), e = nt(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = l = parseFloat(a[0]), i.yOrigin = c = parseFloat(a[1]), r && b !== Ut && (u = b[0], p = b[1], d = b[2], f = b[3], m = b[4], g = b[5], v = u * f - p * d, o = l * (f / v) + c * (-d / v) + (d * g - f * m) / v, h = l * (-p / v) + c * (u / v) - (u * g - p * m) / v, l = i.xOrigin = a[0] = o, c = i.yOrigin = a[1] = h), x && (n || n !== !1 && s.defaultSmoothOrigin !== !1 ? (o = l - y, h = c - _, x.xOffset += o * b[0] + h * b[2] - o, x.yOffset += o * b[1] + h * b[3] - h) : x.xOffset = x.yOffset = 0), t.setAttribute("data-svg-origin", a.join(" "))
                        },
                        kt = function(t) {
                            return !!(Lt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                        },
                        Ut = [1, 0, 0, 1, 0, 0],
                        Bt = function(t, e) {
                            var i, r, n, a, o, s = t._gsTransform || new Pt,
                                h = 1e5;
                            if (St ? r = Z(t, Et, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(R), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), s.x || 0, s.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, (s.svg || t.getBBox && kt(t)) && (i && -1 !== (t.style[St] + "").indexOf("matrix") && (r = t.style[St], i = 0), n = t.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (r = n, i = 0) : -1 !== n.indexOf("translate") && (r = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ut;
                            for (n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], _t = n.length; --_t > -1;) a = Number(n[_t]), n[_t] = (o = a - (a |= 0)) ? (o * h + (0 > o ? -.5 : .5) | 0) / h + a : a;
                            return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                        },
                        Vt = N.getTransform = function(t, i, r, n) {
                            if (t._gsTransform && r && !n) return t._gsTransform;
                            var o, h, l, c, u, p, d = r ? t._gsTransform || new Pt : new Pt,
                                f = d.scaleX < 0,
                                m = 2e-5,
                                g = 1e5,
                                v = Ct ? parseFloat(Z(t, At, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                                y = parseFloat(s.defaultTransformPerspective) || 0;
                            if (d.svg = !(!t.getBBox || !kt(t)), d.svg && (Ot(t, Z(t, At, a, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Mt = s.useSVGTransformAttr || Ft), o = Bt(t), o !== Ut) {
                                if (16 === o.length) {
                                    var _, x, b, w, M, T = o[0],
                                        S = o[1],
                                        E = o[2],
                                        A = o[3],
                                        C = o[4],
                                        P = o[5],
                                        L = o[6],
                                        R = o[7],
                                        D = o[8],
                                        F = o[9],
                                        O = o[10],
                                        U = o[12],
                                        B = o[13],
                                        V = o[14],
                                        I = o[11],
                                        z = Math.atan2(L, O);
                                    d.zOrigin && (V = -d.zOrigin, U = D * V - o[12], B = F * V - o[13], V = O * V + d.zOrigin - o[14]), d.rotationX = z * k, z && (w = Math.cos(-z), M = Math.sin(-z), _ = C * w + D * M, x = P * w + F * M, b = L * w + O * M, D = C * -M + D * w, F = P * -M + F * w, O = L * -M + O * w, I = R * -M + I * w, C = _, P = x, L = b), z = Math.atan2(D, O), d.rotationY = z * k, z && (w = Math.cos(-z), M = Math.sin(-z), _ = T * w - D * M, x = S * w - F * M, b = E * w - O * M, F = S * M + F * w, O = E * M + O * w, I = A * M + I * w, T = _, S = x, E = b), z = Math.atan2(S, T), d.rotation = z * k, z && (w = Math.cos(-z), M = Math.sin(-z), T = T * w + C * M, x = S * w + P * M, P = S * -M + P * w, L = E * -M + L * w, S = x), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY += 180), d.scaleX = (Math.sqrt(T * T + S * S) * g + .5 | 0) / g, d.scaleY = (Math.sqrt(P * P + F * F) * g + .5 | 0) / g, d.scaleZ = (Math.sqrt(L * L + O * O) * g + .5 | 0) / g, d.skewX = 0, d.perspective = I ? 1 / (0 > I ? -I : I) : 0, d.x = U, d.y = B, d.z = V, d.svg && (d.x -= d.xOrigin - (d.xOrigin * T - d.yOrigin * C), d.y -= d.yOrigin - (d.yOrigin * S - d.xOrigin * P))
                                } else if ((!Ct || n || !o.length || d.x !== o[4] || d.y !== o[5] || !d.rotationX && !d.rotationY) && (void 0 === d.x || "none" !== Z(t, "display", i))) {
                                    var N = o.length >= 6,
                                        G = N ? o[0] : 1,
                                        H = o[1] || 0,
                                        j = o[2] || 0,
                                        W = N ? o[3] : 1;
                                    d.x = o[4] || 0, d.y = o[5] || 0, l = Math.sqrt(G * G + H * H), c = Math.sqrt(W * W + j * j), u = G || H ? Math.atan2(H, G) * k : d.rotation || 0, p = j || W ? Math.atan2(j, W) * k + u : d.skewX || 0, Math.abs(p) > 90 && Math.abs(p) < 270 && (f ? (l *= -1, p += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (c *= -1, p += 0 >= p ? 180 : -180)), d.scaleX = l, d.scaleY = c, d.rotation = u, d.skewX = p, Ct && (d.rotationX = d.rotationY = d.z = 0, d.perspective = y, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * G + d.yOrigin * j), d.y -= d.yOrigin - (d.xOrigin * H + d.yOrigin * W))
                                }
                                d.zOrigin = v;
                                for (h in d) d[h] < m && d[h] > -m && (d[h] = 0)
                            }
                            return r && (t._gsTransform = d, d.svg && (Mt && t.style[St] ? e.delayedCall(.001, function() {
                                Gt(t.style, St)
                            }) : !Mt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                                t.removeAttribute("transform")
                            }))), d
                        },
                        It = function(t) {
                            var e, i, r = this.data,
                                n = -r.rotation * O,
                                a = n + r.skewX * O,
                                o = 1e5,
                                s = (Math.cos(n) * r.scaleX * o | 0) / o,
                                h = (Math.sin(n) * r.scaleX * o | 0) / o,
                                l = (Math.sin(a) * -r.scaleY * o | 0) / o,
                                c = (Math.cos(a) * r.scaleY * o | 0) / o,
                                u = this.t.style,
                                p = this.t.currentStyle;
                            if (p) {
                                i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                                var d, f, m = this.t.offsetWidth,
                                    v = this.t.offsetHeight,
                                    y = "absolute" !== p.position,
                                    _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + h + ", M21=" + l + ", M22=" + c,
                                    x = r.x + m * r.xPercent / 100,
                                    M = r.y + v * r.yPercent / 100;
                                if (null != r.ox && (d = (r.oxp ? m * r.ox * .01 : r.ox) - m / 2, f = (r.oyp ? v * r.oy * .01 : r.oy) - v / 2, x += d - (d * s + f * h), M += f - (d * l + f * c)), y ? (d = m / 2, f = v / 2, _ += ", Dx=" + (d - (d * s + f * h) + x) + ", Dy=" + (f - (d * l + f * c) + M) + ")") : _ += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(D, _) : u.filter = _ + " " + e, (0 === t || 1 === t) && 1 === s && 0 === h && 0 === l && 1 === c && (y && -1 === _.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !y) {
                                    var T, S, E, A = 8 > g ? 1 : -1;
                                    for (d = r.ieOffsetX || 0, f = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > s ? -s : s) * m + (0 > h ? -h : h) * v)) / 2 + x), r.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > l ? -l : l) * m)) / 2 + M), _t = 0; 4 > _t; _t++) S = it[_t], T = p[S], i = -1 !== T.indexOf("px") ? parseFloat(T) : Q(this.t, S, parseFloat(T), T.replace(b, "")) || 0, E = i !== r[S] ? 2 > _t ? -r.ieOffsetX : -r.ieOffsetY : 2 > _t ? d - r.ieOffsetX : f - r.ieOffsetY, u[S] = (r[S] = Math.round(i - E * (0 === _t || 2 === _t ? 1 : A))) + "px"
                                }
                            }
                        },
                        zt = N.set3DTransformRatio = N.setTransformRatio = function(t) {
                            var e, i, r, n, a, o, s, h, l, c, u, p, d, m, g, v, y, _, x, b, w, M, T, S = this.data,
                                E = this.t.style,
                                A = S.rotation,
                                C = S.rotationX,
                                P = S.rotationY,
                                L = S.scaleX,
                                R = S.scaleY,
                                D = S.scaleZ,
                                F = S.x,
                                k = S.y,
                                U = S.z,
                                B = S.svg,
                                V = S.perspective,
                                I = S.force3D;
                            if (((1 === t || 0 === t) && "auto" === I && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !I) && !U && !V && !P && !C || Mt && B || !Ct) return void(A || S.skewX || B ? (A *= O, M = S.skewX * O, T = 1e5, e = Math.cos(A) * L, n = Math.sin(A) * L, i = Math.sin(A - M) * -R, a = Math.cos(A - M) * R, M && "simple" === S.skewType && (y = Math.tan(M), y = Math.sqrt(1 + y * y), i *= y, a *= y, S.skewY && (e *= y, n *= y)), B && (F += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, k += S.yOrigin - (S.xOrigin * n + S.yOrigin * a) + S.yOffset, Mt && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), F += .01 * S.xPercent * m.width, k += .01 * S.yPercent * m.height), m = 1e-6, m > F && F > -m && (F = 0), m > k && k > -m && (k = 0)), x = (e * T | 0) / T + "," + (n * T | 0) / T + "," + (i * T | 0) / T + "," + (a * T | 0) / T + "," + F + "," + k + ")", B && Mt ? this.t.setAttribute("transform", "matrix(" + x) : E[St] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : E[St] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + L + ",0,0," + R + "," + F + "," + k + ")");
                            if (f && (m = 1e-4, m > L && L > -m && (L = D = 2e-5), m > R && R > -m && (R = D = 2e-5), !V || S.z || S.rotationX || S.rotationY || (V = 0)), A || S.skewX) A *= O, g = e = Math.cos(A), v = n = Math.sin(A), S.skewX && (A -= S.skewX * O, g = Math.cos(A), v = Math.sin(A), "simple" === S.skewType && (y = Math.tan(S.skewX * O), y = Math.sqrt(1 + y * y), g *= y, v *= y, S.skewY && (e *= y, n *= y))), i = -v, a = g;
                            else {
                                if (!(P || C || 1 !== D || V || B)) return void(E[St] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + k + "px," + U + "px)" + (1 !== L || 1 !== R ? " scale(" + L + "," + R + ")" : ""));
                                e = a = 1, i = n = 0
                            }
                            l = 1, r = o = s = h = c = u = 0, p = V ? -1 / V : 0, d = S.zOrigin, m = 1e-6, b = ",", w = "0", A = P * O, A && (g = Math.cos(A), v = Math.sin(A), s = -v, c = p * -v, r = e * v, o = n * v, l = g, p *= g, e *= g, n *= g), A = C * O, A && (g = Math.cos(A), v = Math.sin(A), y = i * g + r * v, _ = a * g + o * v, h = l * v, u = p * v, r = i * -v + r * g, o = a * -v + o * g, l *= g, p *= g, i = y, a = _), 1 !== D && (r *= D, o *= D, l *= D, p *= D), 1 !== R && (i *= R, a *= R, h *= R, u *= R), 1 !== L && (e *= L, n *= L, s *= L, c *= L), (d || B) && (d && (F += r * -d, k += o * -d, U += l * -d + d), B && (F += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, k += S.yOrigin - (S.xOrigin * n + S.yOrigin * a) + S.yOffset), m > F && F > -m && (F = w), m > k && k > -m && (k = w), m > U && U > -m && (U = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -m ? w : e) + b + (m > n && n > -m ? w : n) + b + (m > s && s > -m ? w : s), x += b + (m > c && c > -m ? w : c) + b + (m > i && i > -m ? w : i) + b + (m > a && a > -m ? w : a), C || P ? (x += b + (m > h && h > -m ? w : h) + b + (m > u && u > -m ? w : u) + b + (m > r && r > -m ? w : r), x += b + (m > o && o > -m ? w : o) + b + (m > l && l > -m ? w : l) + b + (m > p && p > -m ? w : p) + b) : x += ",0,0,0,0,1,0,", x += F + b + k + b + U + b + (V ? 1 + -U / V : 1) + ")", E[St] = x
                        };
                    c = Pt.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(t, e, i, r, n, o, h) {
                            if (r._lastParsedTransform === h) return n;
                            r._lastParsedTransform = h;
                            var l, c, u, p, d, f, m, g, v, y, _ = t._gsTransform,
                                x = t.style,
                                b = 1e-6,
                                w = Tt.length,
                                M = h,
                                T = {},
                                S = "transformOrigin";
                            if (h.display ? (p = Z(t, "display"), x.display = "block", l = Vt(t, a, !0, h.parseTransform), x.display = p) : l = Vt(t, a, !0, h.parseTransform), r._transform = l, "string" == typeof M.transform && St) p = I.style, p[St] = M.transform, p.display = "block", p.position = "absolute", B.body.appendChild(I), c = Vt(I, null, !1), B.body.removeChild(I), c.perspective || (c.perspective = l.perspective), null != M.xPercent && (c.xPercent = ot(M.xPercent, l.xPercent)), null != M.yPercent && (c.yPercent = ot(M.yPercent, l.yPercent));
                            else if ("object" == typeof M) {
                                if (c = {
                                    scaleX: ot(null != M.scaleX ? M.scaleX : M.scale, l.scaleX),
                                    scaleY: ot(null != M.scaleY ? M.scaleY : M.scale, l.scaleY),
                                    scaleZ: ot(M.scaleZ, l.scaleZ),
                                    x: ot(M.x, l.x),
                                    y: ot(M.y, l.y),
                                    z: ot(M.z, l.z),
                                    xPercent: ot(M.xPercent, l.xPercent),
                                    yPercent: ot(M.yPercent, l.yPercent),
                                    perspective: ot(M.transformPerspective, l.perspective)
                                }, g = M.directionalRotation, null != g)
                                    if ("object" == typeof g)
                                        for (p in g) M[p] = g[p];
                                    else M.rotation = g;
                                "string" == typeof M.x && -1 !== M.x.indexOf("%") && (c.x = 0, c.xPercent = ot(M.x, l.xPercent)), "string" == typeof M.y && -1 !== M.y.indexOf("%") && (c.y = 0, c.yPercent = ot(M.y, l.yPercent)), c.rotation = st("rotation" in M ? M.rotation : "shortRotation" in M ? M.shortRotation + "_short" : "rotationZ" in M ? M.rotationZ : l.rotation, l.rotation, "rotation", T), Ct && (c.rotationX = st("rotationX" in M ? M.rotationX : "shortRotationX" in M ? M.shortRotationX + "_short" : l.rotationX || 0, l.rotationX, "rotationX", T), c.rotationY = st("rotationY" in M ? M.rotationY : "shortRotationY" in M ? M.shortRotationY + "_short" : l.rotationY || 0, l.rotationY, "rotationY", T)), c.skewX = null == M.skewX ? l.skewX : st(M.skewX, l.skewX), c.skewY = null == M.skewY ? l.skewY : st(M.skewY, l.skewY), (u = c.skewY - l.skewY) && (c.skewX += u, c.rotation += u)
                            }
                            for (Ct && null != M.force3D && (l.force3D = M.force3D, m = !0), l.skewType = M.skewType || l.skewType || s.defaultSkewType, f = l.force3D || l.z || l.rotationX || l.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, f || null == M.scale || (c.scaleZ = 1); --w > -1;) i = Tt[w], d = c[i] - l[i], (d > b || -b > d || null != M[i] || null != U[i]) && (m = !0, n = new gt(l, i, l[i], d, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
                            return d = M.transformOrigin, l.svg && (d || M.svgOrigin) && (v = l.xOffset, y = l.yOffset, Ot(t, nt(d), c, M.svgOrigin, M.smoothOrigin), n = vt(l, "xOrigin", (_ ? l : c).xOrigin, c.xOrigin, n, S), n = vt(l, "yOrigin", (_ ? l : c).yOrigin, c.yOrigin, n, S), (v !== l.xOffset || y !== l.yOffset) && (n = vt(l, "xOffset", _ ? v : l.xOffset, l.xOffset, n, S), n = vt(l, "yOffset", _ ? y : l.yOffset, l.yOffset, n, S)), d = Mt ? null : "0px 0px"), (d || Ct && f && l.zOrigin) && (St ? (m = !0, i = At, d = (d || Z(t, i, a, !1, "50% 50%")) + "", n = new gt(x, i, 0, 0, n, -1, S), n.b = x[i], n.plugin = o, Ct ? (p = l.zOrigin, d = d.split(" "), l.zOrigin = (d.length > 2 && (0 === p || "0px" !== d[2]) ? parseFloat(d[2]) : p) || 0, n.xs0 = n.e = d[0] + " " + (d[1] || "50%") + " 0px", n = new gt(l, "zOrigin", 0, 0, n, -1, n.n), n.b = p, n.xs0 = n.e = l.zOrigin) : n.xs0 = n.e = d) : nt(d + "", l)), m && (r._transformType = l.svg && Mt || !f && 3 !== this._transformType ? 2 : 3), n
                        },
                        prefix: !0
                    }), bt("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), bt("borderRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, i, r, o, s) {
                            e = this.format(e);
                            var h, l, c, u, p, d, f, m, g, v, y, _, x, b, w, M, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                S = t.style;
                            for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), h = e.split(" "), l = 0; l < T.length; l++) this.p.indexOf("border") && (T[l] = Y(T[l])), p = u = Z(t, T[l], a, !1, "0px"), -1 !== p.indexOf(" ") && (u = p.split(" "), p = u[0], u = u[1]), d = c = h[l], f = parseFloat(p), _ = p.substr((f + "").length), x = "=" === d.charAt(1), x ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), y = d.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(d), y = d.substr((m + "").length)), "" === y && (y = n[i] || _), y !== _ && (b = Q(t, "borderLeft", f, _), w = Q(t, "borderTop", f, _), "%" === y ? (p = b / g * 100 + "%", u = w / v * 100 + "%") : "em" === y ? (M = Q(t, "borderLeft", 1, "em"), p = b / M + "em", u = w / M + "em") : (p = b + "px", u = w + "px"), x && (d = parseFloat(p) + m + y, c = parseFloat(u) + m + y)), o = yt(S, T[l], p + " " + u, d + " " + c, !1, "0px", o);
                            return o
                        },
                        prefix: !0,
                        formatter: dt("0px 0px 0px 0px", !1, !0)
                    }), bt("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(t, e, i, r, n, o) {
                            var s, h, l, c, u, p, d = "background-position",
                                f = a || K(t, null),
                                m = this.format((f ? g ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                v = this.format(e);
                            if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (p = Z(t, "backgroundImage").replace(C, ""), p && "none" !== p)) {
                                for (s = m.split(" "), h = v.split(" "), z.setAttribute("src", p), l = 2; --l > -1;) m = s[l], c = -1 !== m.indexOf("%"), c !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - z.width : t.offsetHeight - z.height, s[l] = c ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                                m = s.join(" ")
                            }
                            return this.parseComplex(t.style, m, v, n, o)
                        },
                        formatter: nt
                    }), bt("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: nt
                    }), bt("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), bt("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), bt("transformStyle", {
                        prefix: !0
                    }), bt("backfaceVisibility", {
                        prefix: !0
                    }), bt("userSelect", {
                        prefix: !0
                    }), bt("margin", {
                        parser: ft("marginTop,marginRight,marginBottom,marginLeft")
                    }), bt("padding", {
                        parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }), bt("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(t, e, i, r, n, o) {
                            var s, h, l;
                            return 9 > g ? (h = t.currentStyle, l = 8 > g ? " " : ",", s = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (s = this.format(Z(t, this.p, a, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, n, o)
                        }
                    }), bt("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), bt("autoRound,strictUnits", {
                        parser: function(t, e, i, r, n) {
                            return n
                        }
                    }), bt("border", {
                        defaultValue: "0px solid #000",
                        parser: function(t, e, i, r, n, o) {
                            return this.parseComplex(t.style, this.format(Z(t, "borderTopWidth", a, !1, "0px") + " " + Z(t, "borderTopStyle", a, !1, "solid") + " " + Z(t, "borderTopColor", a, !1, "#000")), this.format(e), n, o)
                        },
                        color: !0,
                        formatter: function(t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(pt) || ["#000"])[0]
                        }
                    }), bt("borderWidth", {
                        parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }), bt("float,cssFloat,styleFloat", {
                        parser: function(t, e, i, r, n, a) {
                            var o = t.style,
                                s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                            return new gt(o, s, 0, 0, n, -1, i, !1, 0, o[s], e)
                        }
                    });
                    var Nt = function(t) {
                        var e, i = this.t,
                            r = i.filter || Z(this.data, "filter") || "",
                            n = this.s + this.c * t | 0;
                        100 === n && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = r.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(w, "opacity=" + n))
                    };
                    bt("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(t, e, i, r, n, o) {
                            var s = parseFloat(Z(t, "opacity", a, !1, "1")),
                                h = t.style,
                                l = "autoAlpha" === i;
                            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), l && 1 === s && "hidden" === Z(t, "visibility", a) && 0 !== e && (s = 0), H ? n = new gt(h, "opacity", s, e - s, n) : (n = new gt(h, "opacity", 100 * s, 100 * (e - s), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = o, n.setRatio = Nt), l && (n = new gt(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
                        }
                    });
                    var Gt = function(t, e) {
                            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(E, "-$1").toLowerCase())) : t.removeAttribute(e))
                        },
                        Ht = function(t) {
                            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Gt(i, e.p), e = e._next;
                                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                        };
                    bt("className", {
                        parser: function(t, e, i, n, o, s, h) {
                            var l, c, u, p, d, f = t.getAttribute("class") || "",
                                m = t.style.cssText;
                            if (o = n._classNamePT = new gt(t, i, 0, 0, o, 2), o.setRatio = Ht, o.pr = -11, r = !0, o.b = f, c = $(t, a), u = t._gsClassPT) {
                                for (p = {}, d = u.data; d;) p[d.p] = 1, d = d._next;
                                u.setRatio(1)
                            }
                            return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), l = tt(t, c, $(t), h, p), t.setAttribute("class", f), o.data = l.firstMPT, t.style.cssText = m, o = o.xfirst = n.parse(t, l.difs, o, s)
                        }
                    });
                    var jt = function(t) {
                        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var e, i, r, n, a, o = this.t.style,
                                s = l.transform.parse;
                            if ("all" === this.e) o.cssText = "", n = !0;
                            else
                                for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) i = e[r], l[i] && (l[i].parse === s ? n = !0 : i = "transformOrigin" === i ? At : l[i].p), Gt(o, i);
                            n && (Gt(o, St), a = this.t._gsTransform, a && (a.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                        }
                    };
                    for (bt("clearProps", {
                        parser: function(t, e, i, n, a) {
                            return a = new gt(t, i, 0, 0, a, 2), a.setRatio = jt, a.e = e, a.pr = -10, a.data = n._tween, r = !0, a
                        }
                    }), c = "bezier,throwProps,physicsProps,physics2D".split(","), _t = c.length; _t--;) wt(c[_t]);
                    c = s.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, i) {
                        if (!t.nodeType) return !1;
                        this._target = t, this._tween = i, this._vars = e, u = e.autoRound, r = !1, n = e.suffixMap || s.suffixMap, a = K(t, ""), o = this._overwriteProps;
                        var h, c, f, g, v, y, _, x, b, w = t.style;
                        if (p && "" === w.zIndex && (h = Z(t, "zIndex", a), ("auto" === h || "" === h) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (g = w.cssText, h = $(t, a), w.cssText = g + ";" + e, h = tt(t, h, $(t)).difs, !H && M.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = g), e.className ? this._firstPT = c = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = c = this.parse(t, e, null), this._transformType) {
                            for (b = 3 === this._transformType, St ? d && (p = !0, "" === w.zIndex && (_ = Z(t, "zIndex", a), ("auto" === _ || "" === _) && this._addLazySet(w, "zIndex", 0)), m && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : w.zoom = 1, f = c; f && f._next;) f = f._next;
                            x = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, f), x.setRatio = St ? zt : It, x.data = this._transform || Vt(t, a, !0), x.tween = i, x.pr = -1, o.pop()
                        }
                        if (r) {
                            for (; c;) {
                                for (y = c._next, f = g; f && f.pr > c.pr;) f = f._next;
                                (c._prev = f ? f._prev : v) ? c._prev._next = c: g = c, (c._next = f) ? f._prev = c : v = c, c = y
                            }
                            this._firstPT = g
                        }
                        return !0
                    }, c.parse = function(t, e, i, r) {
                        var o, s, h, c, p, d, f, m, g, v, y = t.style;
                        for (o in e) d = e[o], s = l[o], s ? i = s.parse(t, d, o, this, i, r, e) : (p = Z(t, o, a) + "", g = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && S.test(d) ? (g || (d = ct(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = yt(y, o, p, d, !0, "transparent", i, 0, r)) : !g || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (h = parseFloat(p), f = h || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = rt(t, o, a), f = "px") : "left" === o || "top" === o ? (h = J(t, o, a), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), v = g && "=" === d.charAt(1), v ? (c = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), c *= parseFloat(d), m = d.replace(b, "")) : (c = parseFloat(d), m = g ? d.replace(b, "") : ""), "" === m && (m = o in n ? n[o] : f), d = c || 0 === c ? (v ? c + h : c) + m : e[o], f !== m && "" !== m && (c || 0 === c) && h && (h = Q(t, o, h, f), "%" === m ? (h /= Q(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = h + "%")) : "em" === m || "rem" === m ? h /= Q(t, o, 1, m) : "px" !== m && (c = Q(t, o, c, m), m = "px"), v && (c || 0 === c) && (d = c + h + m)), v && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== y[o] && (d || d + "" != "NaN" && null != d) ? (i = new gt(y, o, c || h || 0, 0, i, -1, o, !1, 0, p, d), i.xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d : p) : W("invalid " + o + " tween value: " + e[o]) : (i = new gt(y, o, h, c - h, i, 0, o, u !== !1 && ("px" === m || "zIndex" === o), 0, p, d), i.xs0 = m)) : i = yt(y, o, p, d, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                        return i
                    }, c.setRatio = function(t) {
                        var e, i, r, n = this._firstPT,
                            a = 1e-6;
                        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                                for (; n;) {
                                    if (e = n.c * t + n.s, n.r ? e = Math.round(e) : a > e && e > -a && (e = 0), n.type)
                                        if (1 === n.type)
                                            if (r = n.l, 2 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                            else if (3 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                            else if (4 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                            else if (5 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                            else {
                                                for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                                n.t[n.p] = i
                                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                                    else n.t[n.p] = e + n.xs0;
                                    n = n._next
                                } else
                                for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                        else
                            for (; n;) {
                                if (2 !== n.type)
                                    if (n.r && -1 !== n.type)
                                        if (e = Math.round(n.s + n.c), n.type) {
                                            if (1 === n.type) {
                                                for (r = n.l, i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                                n.t[n.p] = i
                                            }
                                        } else n.t[n.p] = e + n.xs0;
                                    else n.t[n.p] = n.e;
                                else n.setRatio(t);
                                n = n._next
                            }
                    }, c._enableTransforms = function(t) {
                        this._transform = this._transform || Vt(this._target, a, !0), this._transformType = this._transform.svg && Mt || !t && 3 !== this._transformType ? 2 : 3
                    };
                    var Wt = function(t) {
                        this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                    };
                    c._addLazySet = function(t, e, i) {
                        var r = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
                        r.e = i, r.setRatio = Wt, r.data = this
                    }, c._linkCSSP = function(t, e, i, r) {
                        return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                    }, c._kill = function(e) {
                        var i, r, n, a = e;
                        if (e.autoAlpha || e.alpha) {
                            a = {};
                            for (r in e) a[r] = e[r];
                            a.opacity = 1, a.autoAlpha && (a.visibility = 1)
                        }
                        return e.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), t.prototype._kill.call(this, a)
                    };
                    var Xt = function(t, e, i) {
                        var r, n, a, o;
                        if (t.slice)
                            for (n = t.length; --n > -1;) Xt(t[n], e, i);
                        else
                            for (r = t.childNodes, n = r.length; --n > -1;) a = r[n], o = a.type, a.style && (e.push($(a)), i && i.push(a)), 1 !== o && 9 !== o && 11 !== o || !a.childNodes.length || Xt(a, e, i)
                    };
                    return s.cascadeTo = function(t, i, r) {
                        var n, a, o, s, h = e.to(t, i, r),
                            l = [h],
                            c = [],
                            u = [],
                            p = [],
                            d = e._internals.reservedProps;
                        for (t = h._targets || h.target, Xt(t, c, p), h.render(i, !0, !0), Xt(t, u), h.render(0, !0, !0), h._enabled(!0), n = p.length; --n > -1;)
                            if (a = tt(p[n], c[n], u[n]), a.firstMPT) {
                                a = a.difs;
                                for (o in r) d[o] && (a[o] = r[o]);
                                s = {};
                                for (o in a) s[o] = c[n][o];
                                l.push(e.fromTo(p[n], i, s, a))
                            }
                        return l
                    }, t.activate([s]), s
                }, !0),
                    function() {
                        var t = i._gsDefine.plugin({
                                propName: "roundProps",
                                version: "1.5",
                                priority: -1,
                                API: 2,
                                init: function(t, e, i) {
                                    return this._tween = i, !0
                                }
                            }),
                            e = function(t) {
                                for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                            },
                            r = t.prototype;
                        r._onInitAllProps = function() {
                            for (var t, i, r, n = this._tween, a = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), o = a.length, s = {}, h = n._propLookup.roundProps; --o > -1;) s[a[o]] = 1;
                            for (o = a.length; --o > -1;)
                                for (t = a[o], i = n._firstPT; i;) r = i._next, i.pg ? i.t._roundProps(s, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), r && (r._prev = i._prev), i._prev ? i._prev._next = r : n._firstPT === i && (n._firstPT = r), i._next = i._prev = null, n._propLookup[t] = h)), i = r;
                            return !1
                        }, r._add = function(t, e, i, r) {
                            this._addTween(t, e, i, i + r, e, !0), this._overwriteProps.push(e)
                        }
                    }(),
                    function() {
                        i._gsDefine.plugin({
                            propName: "attr",
                            API: 2,
                            version: "0.5.0",
                            init: function(t, e, i) {
                                var r;
                                if ("function" != typeof t.setAttribute) return !1;
                                for (r in e) this._addTween(t, "setAttribute", t.getAttribute(r) + "", e[r] + "", r, !1, r), this._overwriteProps.push(r);
                                return !0
                            }
                        })
                    }(), i._gsDefine.plugin({
                    propName: "directionalRotation",
                    version: "0.2.1",
                    API: 2,
                    init: function(t, e, i) {
                        "object" != typeof e && (e = {
                            rotation: e
                        }), this.finals = {};
                        var r, n, a, o, s, h, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                            c = 1e-6;
                        for (r in e) "useRadians" !== r && (h = (e[r] + "").split("_"), n = h[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), o = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, s = o - a, h.length && (n = h.join("_"), -1 !== n.indexOf("short") && (s %= l, s !== s % (l / 2) && (s = 0 > s ? s + l : s - l)), -1 !== n.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * l) % l - (s / l | 0) * l : -1 !== n.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * l) % l - (s / l | 0) * l)), (s > c || -c > s) && (this._addTween(t, r, a, a + s, r), this._overwriteProps.push(r)));
                        return !0
                    },
                    set: function(t) {
                        var e;
                        if (1 !== t) this._super.setRatio.call(this, t);
                        else
                            for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                    }
                })._autoCSS = !0, i._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                    var e, r, n, a = i.GreenSockGlobals || i,
                        o = a.com.greensock,
                        s = 2 * Math.PI,
                        h = Math.PI / 2,
                        l = o._class,
                        c = function(e, i) {
                            var r = l("easing." + e, function() {}, !0),
                                n = r.prototype = new t;
                            return n.constructor = r, n.getRatio = i, r
                        },
                        u = t.register || function() {},
                        p = function(t, e, i, r, n) {
                            var a = l("easing." + t, {
                                easeOut: new e,
                                easeIn: new i,
                                easeInOut: new r
                            }, !0);
                            return u(a, t), a
                        },
                        d = function(t, e, i) {
                            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                        },
                        f = function(e, i) {
                            var r = l("easing." + e, function(t) {
                                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                                }, !0),
                                n = r.prototype = new t;
                            return n.constructor = r, n.getRatio = i, n.config = function(t) {
                                return new r(t)
                            }, r
                        },
                        m = p("Back", f("BackOut", function(t) {
                            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                        }), f("BackIn", function(t) {
                            return t * t * ((this._p1 + 1) * t - this._p1)
                        }), f("BackInOut", function(t) {
                            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                        })),
                        g = l("easing.SlowMo", function(t, e, i) {
                            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                        }, !0),
                        v = g.prototype = new t;
                    return v.constructor = g, v.getRatio = function(t) {
                        var e = t + (.5 - t) * this._p;
                        return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                    }, g.ease = new g(.7, .7), v.config = g.config = function(t, e, i) {
                        return new g(t, e, i)
                    }, e = l("easing.SteppedEase", function(t) {
                        t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                    }, !0), v = e.prototype = new t, v.constructor = e, v.getRatio = function(t) {
                        return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                    }, v.config = e.config = function(t) {
                        return new e(t)
                    }, r = l("easing.RoughEase", function(e) {
                        e = e || {};
                        for (var i, r, n, a, o, s, h = e.taper || "none", l = [], c = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, r = g ? g.getRatio(i) : i, "none" === h ? n = v : "out" === h ? (a = 1 - i, n = a * a * v) : "in" === h ? n = i * i * v : .5 > i ? (a = 2 * i, n = a * a * .5 * v) : (a = 2 * (1 - i), n = a * a * .5 * v), f ? r += Math.random() * n - .5 * n : p % 2 ? r += .5 * n : r -= .5 * n, m && (r > 1 ? r = 1 : 0 > r && (r = 0)), l[c++] = {
                            x: i,
                            y: r
                        };
                        for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), s = new d(1, 1, null), p = u; --p > -1;) o = l[p], s = new d(o.x, o.y, s);
                        this._prev = new d(0, 0, 0 !== s.t ? s : s.next)
                    }, !0), v = r.prototype = new t, v.constructor = r, v.getRatio = function(t) {
                        var e = this._prev;
                        if (t > e.t) {
                            for (; e.next && t >= e.t;) e = e.next;
                            e = e.prev
                        } else
                            for (; e.prev && t <= e.t;) e = e.prev;
                        return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                    }, v.config = function(t) {
                        return new r(t)
                    }, r.ease = new r, p("Bounce", c("BounceOut", function(t) {
                        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }), c("BounceIn", function(t) {
                        return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    }), c("BounceInOut", function(t) {
                        var e = .5 > t;
                        return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                    })), p("Circ", c("CircOut", function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    }), c("CircIn", function(t) {
                        return -(Math.sqrt(1 - t * t) - 1)
                    }), c("CircInOut", function(t) {
                        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    })), n = function(e, i, r) {
                        var n = l("easing." + e, function(t, e) {
                                this._p1 = t >= 1 ? t : 1, this._p2 = (e || r) / (1 > t ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                            }, !0),
                            a = n.prototype = new t;
                        return a.constructor = n, a.getRatio = i, a.config = function(t, e) {
                            return new n(t, e)
                        }, n
                    }, p("Elastic", n("ElasticOut", function(t) {
                        return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                    }, .3), n("ElasticIn", function(t) {
                        return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                    }, .3), n("ElasticInOut", function(t) {
                        return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                    }, .45)), p("Expo", c("ExpoOut", function(t) {
                        return 1 - Math.pow(2, -10 * t)
                    }), c("ExpoIn", function(t) {
                        return Math.pow(2, 10 * (t - 1)) - .001
                    }), c("ExpoInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                    })), p("Sine", c("SineOut", function(t) {
                        return Math.sin(t * h)
                    }), c("SineIn", function(t) {
                        return -Math.cos(t * h) + 1
                    }), c("SineInOut", function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    })), l("easing.EaseLookup", {
                        find: function(e) {
                            return t.map[e]
                        }
                    }, !0), u(a.SlowMo, "SlowMo", "ease,"), u(r, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), m
                }, !0)
            }), i._gsDefine && i._gsQueue.pop()(),
                function(t, i) {
                    "use strict";
                    var r = t.GreenSockGlobals = t.GreenSockGlobals || t;
                    if (!r.TweenLite) {
                        var n, a, o, s, h, l = function(t) {
                                var e, i = t.split("."),
                                    n = r;
                                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                                return n
                            },
                            c = l("com.greensock"),
                            u = 1e-10,
                            p = function(t) {
                                var e, i = [],
                                    r = t.length;
                                for (e = 0; e !== r; i.push(t[e++]));
                                return i
                            },
                            d = function() {},
                            f = function() {
                                var t = Object.prototype.toString,
                                    e = t.call([]);
                                return function(i) {
                                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                                }
                            }(),
                            m = {},
                            g = function(n, a, o, s) {
                                this.sc = m[n] ? m[n].sc : [], m[n] = this, this.gsClass = null, this.func = o;
                                var h = [];
                                this.check = function(c) {
                                    for (var u, p, d, f, v, y = a.length, _ = y; --y > -1;)(u = m[a[y]] || new g(a[y], [])).gsClass ? (h[y] = u.gsClass, _--) : c && u.sc.push(this);
                                    if (0 === _ && o)
                                        for (p = ("com.greensock." + n).split("."), d = p.pop(), f = l(p.join("."))[d] = this.gsClass = o.apply(o, h), s && (r[d] = f, v = "undefined" != typeof e && e.exports, !v && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                            return f
                                        }) : n === i && v && (e.exports = f)), y = 0; y < this.sc.length; y++) this.sc[y].check()
                                }, this.check(!0)
                            },
                            v = t._gsDefine = function(t, e, i, r) {
                                return new g(t, e, i, r)
                            },
                            y = c._class = function(t, e, i) {
                                return e = e || function() {}, v(t, [], function() {
                                    return e
                                }, i), e
                            };
                        v.globals = r;
                        var _ = [0, 0, 1, 1],
                            x = [],
                            b = y("easing.Ease", function(t, e, i, r) {
                                this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? _.concat(e) : _
                            }, !0),
                            w = b.map = {},
                            M = b.register = function(t, e, i, r) {
                                for (var n, a, o, s, h = e.split(","), l = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --l > -1;)
                                    for (a = h[l], n = r ? y("easing." + a, null, !0) : c.easing[a] || {}, o = u.length; --o > -1;) s = u[o], w[a + "." + s] = w[s + a] = n[s] = t.getRatio ? t : t[s] || new t
                            };
                        for (o = b.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                            var e = this._type,
                                i = this._power,
                                r = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                            return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : .5 > t ? r / 2 : 1 - r / 2
                        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = n.length; --a > -1;) o = n[a] + ",Power" + a, M(new b(null, null, 1, a), o, "easeOut", !0), M(new b(null, null, 2, a), o, "easeIn" + (0 === a ? ",easeNone" : "")), M(new b(null, null, 3, a), o, "easeInOut");
                        w.linear = c.easing.Linear.easeIn, w.swing = c.easing.Quad.easeInOut;
                        var T = y("events.EventDispatcher", function(t) {
                            this._listeners = {}, this._eventTarget = t || this
                        });
                        o = T.prototype, o.addEventListener = function(t, e, i, r, n) {
                            n = n || 0;
                            var a, o, l = this._listeners[t],
                                c = 0;
                            for (null == l && (this._listeners[t] = l = []), o = l.length; --o > -1;) a = l[o], a.c === e && a.s === i ? l.splice(o, 1) : 0 === c && a.pr < n && (c = o + 1);
                            l.splice(c, 0, {
                                c: e,
                                s: i,
                                up: r,
                                pr: n
                            }), this !== s || h || s.wake()
                        }, o.removeEventListener = function(t, e) {
                            var i, r = this._listeners[t];
                            if (r)
                                for (i = r.length; --i > -1;)
                                    if (r[i].c === e) return void r.splice(i, 1)
                        }, o.dispatchEvent = function(t) {
                            var e, i, r, n = this._listeners[t];
                            if (n)
                                for (e = n.length, i = this._eventTarget; --e > -1;) r = n[e], r && (r.up ? r.c.call(r.s || i, {
                                    type: t,
                                    target: i
                                }) : r.c.call(r.s || i))
                        };
                        var S = t.requestAnimationFrame,
                            E = t.cancelAnimationFrame,
                            A = Date.now || function() {
                                return (new Date).getTime()
                            },
                            C = A();
                        for (n = ["ms", "moz", "webkit", "o"], a = n.length; --a > -1 && !S;) S = t[n[a] + "RequestAnimationFrame"], E = t[n[a] + "CancelAnimationFrame"] || t[n[a] + "CancelRequestAnimationFrame"];
                        y("Ticker", function(t, e) {
                            var i, r, n, a, o, l = this,
                                c = A(),
                                p = e !== !1 && S,
                                f = 500,
                                m = 33,
                                g = "tick",
                                v = function(t) {
                                    var e, s, h = A() - C;
                                    h > f && (c += h - m), C += h, l.time = (C - c) / 1e3, e = l.time - o, (!i || e > 0 || t === !0) && (l.frame++, o += e + (e >= a ? .004 : a - e), s = !0), t !== !0 && (n = r(v)), s && l.dispatchEvent(g)
                                };
                            T.call(l), l.time = l.frame = 0, l.tick = function() {
                                v(!0)
                            }, l.lagSmoothing = function(t, e) {
                                f = t || 1 / u, m = Math.min(e, f, 0)
                            }, l.sleep = function() {
                                null != n && (p && E ? E(n) : clearTimeout(n), r = d, n = null, l === s && (h = !1))
                            }, l.wake = function() {
                                null !== n ? l.sleep() : l.frame > 10 && (C = A() - f + 5), r = 0 === i ? d : p && S ? S : function(t) {
                                    return setTimeout(t, 1e3 * (o - l.time) + 1 | 0)
                                }, l === s && (h = !0), v(2)
                            }, l.fps = function(t) {
                                return arguments.length ? (i = t, a = 1 / (i || 60), o = this.time + a, void l.wake()) : i
                            }, l.useRAF = function(t) {
                                return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p
                            }, l.fps(t), setTimeout(function() {
                                p && l.frame < 5 && l.useRAF(!1)
                            }, 1500)
                        }), o = c.Ticker.prototype = new c.events.EventDispatcher, o.constructor = c.Ticker;
                        var P = y("core.Animation", function(t, e) {
                            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Y) {
                                h || s.wake();
                                var i = this.vars.useFrames ? q : Y;
                                i.add(this, i._time), this.vars.paused && this.paused(!0)
                            }
                        });
                        s = P.ticker = new c.Ticker, o = P.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
                        var L = function() {
                            h && A() - C > 2e3 && s.wake(), setTimeout(L, 2e3)
                        };
                        L(), o.play = function(t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                        }, o.pause = function(t, e) {
                            return null != t && this.seek(t, e), this.paused(!0)
                        }, o.resume = function(t, e) {
                            return null != t && this.seek(t, e), this.paused(!1)
                        }, o.seek = function(t, e) {
                            return this.totalTime(Number(t), e !== !1)
                        }, o.restart = function(t, e) {
                            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
                        }, o.reverse = function(t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                        }, o.render = function(t, e, i) {}, o.invalidate = function() {
                            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
                        }, o.isActive = function() {
                            var t, e = this._timeline,
                                i = this._startTime;
                            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
                        }, o._enabled = function(t, e) {
                            return h || s.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                        }, o._kill = function(t, e) {
                            return this._enabled(!1, !1)
                        }, o.kill = function(t, e) {
                            return this._kill(t, e), this
                        }, o._uncache = function(t) {
                            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                            return this
                        }, o._swapSelfInParams = function(t) {
                            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                            return i
                        }, o._callback = function(t) {
                            var e = this.vars;
                            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || x)
                        }, o.eventCallback = function(t, e, i, r) {
                            if ("on" === (t || "").substr(0, 2)) {
                                var n = this.vars;
                                if (1 === arguments.length) return n[t];
                                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
                            }
                            return this
                        }, o.delay = function(t) {
                            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                        }, o.duration = function(t) {
                            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                        }, o.totalDuration = function(t) {
                            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                        }, o.time = function(t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                        }, o.totalTime = function(t, e, i) {
                            if (h || s.wake(), !arguments.length) return this._totalTime;
                            if (this._timeline) {
                                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                    this._dirty && this.totalDuration();
                                    var r = this._totalDuration,
                                        n = this._timeline;
                                    if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                                }
                                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (k.length && Z(), this.render(t, e, !1), k.length && Z())
                            }
                            return this
                        }, o.progress = o.totalProgress = function(t, e) {
                            var i = this.duration();
                            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                        }, o.startTime = function(t) {
                            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                        }, o.endTime = function(t) {
                            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                        }, o.timeScale = function(t) {
                            if (!arguments.length) return this._timeScale;
                            if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                                var e = this._pauseTime,
                                    i = e || 0 === e ? e : this._timeline.totalTime();
                                this._startTime = i - (i - this._startTime) * this._timeScale / t
                            }
                            return this._timeScale = t, this._uncache(!1)
                        }, o.reversed = function(t) {
                            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                        }, o.paused = function(t) {
                            if (!arguments.length) return this._paused;
                            var e, i, r = this._timeline;
                            return t != this._paused && r && (h || t || s.wake(), e = r.rawTime(), i = e - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                        };
                        var R = y("core.SimpleTimeline", function(t) {
                            P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                        });
                        o = R.prototype = new P, o.constructor = R, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, i, r) {
                            var n, a;
                            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                                for (a = t._startTime; n && n._startTime > a;) n = n._prev;
                            return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
                        }, o._remove = function(t, e) {
                            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                        }, o.render = function(t, e, i) {
                            var r, n = this._first;
                            for (this._totalTime = this._time = this._rawPrevTime = t; n;) r = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r
                        }, o.rawTime = function() {
                            return h || s.wake(), this._totalTime
                        };
                        var D = y("TweenLite", function(e, i, r) {
                                if (P.call(this, i, r), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                                this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                                var n, a, o, s = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                                    h = this.vars.overwrite;
                                if (this._overwrite = h = null == h ? X[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : X[h], (s || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                                    for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++) a = o[n], a ? "string" != typeof a ? a.length && a !== t && a[0] && (a[0] === t || a[0].nodeType && a[0].style && !a.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(p(a))) : (this._siblings[n] = Q(a, this, !1), 1 === h && this._siblings[n].length > 1 && $(a, this, null, 1, this._siblings[n])) : (a = o[n--] = D.selector(a), "string" == typeof a && o.splice(n + 1, 1)) : o.splice(n--, 1);
                                else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === h && this._siblings.length > 1 && $(e, this, null, 1, this._siblings);
                                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
                            }, !0),
                            F = function(e) {
                                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                            },
                            O = function(t, e) {
                                var i, r = {};
                                for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!G[i] || G[i] && G[i]._autoCSS) || (r[i] = t[i], delete t[i]);
                                t.css = r
                            };
                        o = D.prototype = new P, o.constructor = D, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, D.version = "1.18.0", D.defaultEase = o._ease = new b(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = s, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                            s.lagSmoothing(t, e)
                        }, D.selector = t.$ || t.jQuery || function(e) {
                            var i = t.$ || t.jQuery;
                            return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                        };
                        var k = [],
                            U = {},
                            B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                            V = function(t) {
                                for (var e, i = this._firstPT, r = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : r > e && e > -r && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                            },
                            I = function(t, e, i, r) {
                                var n, a, o, s, h, l, c, u = [t, e],
                                    p = 0,
                                    d = "",
                                    f = 0;
                                for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, n = t.match(B) || [], a = e.match(B) || [], r && (r._next = null, r.blob = 1, u._firstPT = r), h = a.length, s = 0; h > s; s++) c = a[s], l = e.substr(p, e.indexOf(c, p) - p), d += l || !s ? l : ",", p += l.length, f ? f = (f + 1) % 5 : "rgba(" === l.substr(-5) && (f = 1), c === n[s] || n.length <= s ? d += c : (d && (u.push(d), d = ""), o = parseFloat(n[s]), u.push(o), u._firstPT = {
                                    _next: u._firstPT,
                                    t: u,
                                    p: u.length - 1,
                                    s: o,
                                    c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                                    f: 0,
                                    r: f && 4 > f
                                }), p += c.length;
                                return d += e.substr(p), d && u.push(d), u.setRatio = V, u
                            },
                            z = function(t, e, i, r, n, a, o, s) {
                                var h, l, c = "get" === i ? t[e] : i,
                                    u = typeof t[e],
                                    p = "string" == typeof r && "=" === r.charAt(1),
                                    d = {
                                        t: t,
                                        p: e,
                                        s: c,
                                        f: "function" === u,
                                        pg: 0,
                                        n: n || e,
                                        r: a,
                                        pr: 0,
                                        c: p ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - c || 0
                                    };
                                return "number" !== u && ("function" === u && "get" === i && (l = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), d.s = c = o ? t[l](o) : t[l]()), "string" == typeof c && (o || isNaN(c)) ? (d.fp = o, h = I(c, r, s || D.defaultStringFilter, d), d = {
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: n || e,
                                    pr: 0
                                }) : p || (d.c = parseFloat(r) - parseFloat(c) || 0)), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
                            },
                            N = D._internals = {
                                isArray: f,
                                isSelector: F,
                                lazyTweens: k,
                                blobDif: I
                            },
                            G = D._plugins = {},
                            H = N.tweenLookup = {},
                            j = 0,
                            W = N.reservedProps = {
                                ease: 1,
                                delay: 1,
                                overwrite: 1,
                                onComplete: 1,
                                onCompleteParams: 1,
                                onCompleteScope: 1,
                                useFrames: 1,
                                runBackwards: 1,
                                startAt: 1,
                                onUpdate: 1,
                                onUpdateParams: 1,
                                onUpdateScope: 1,
                                onStart: 1,
                                onStartParams: 1,
                                onStartScope: 1,
                                onReverseComplete: 1,
                                onReverseCompleteParams: 1,
                                onReverseCompleteScope: 1,
                                onRepeat: 1,
                                onRepeatParams: 1,
                                onRepeatScope: 1,
                                easeParams: 1,
                                yoyo: 1,
                                immediateRender: 1,
                                repeat: 1,
                                repeatDelay: 1,
                                data: 1,
                                paused: 1,
                                reversed: 1,
                                autoCSS: 1,
                                lazy: 1,
                                onOverwrite: 1,
                                callbackScope: 1,
                                stringFilter: 1
                            },
                            X = {
                                none: 0,
                                all: 1,
                                auto: 2,
                                concurrent: 3,
                                allOnStart: 4,
                                preexisting: 5,
                                "true": 1,
                                "false": 0
                            },
                            q = P._rootFramesTimeline = new R,
                            Y = P._rootTimeline = new R,
                            K = 30,
                            Z = N.lazyRender = function() {
                                var t, e = k.length;
                                for (U = {}; --e > -1;) t = k[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                                k.length = 0
                            };
                        Y._startTime = s.time, q._startTime = s.frame, Y._active = q._active = !0, setTimeout(Z, 1), P._updateRoot = D.render = function() {
                            var t, e, i;
                            if (k.length && Z(), Y.render((s.time - Y._startTime) * Y._timeScale, !1, !1), q.render((s.frame - q._startTime) * q._timeScale, !1, !1), k.length && Z(), s.frame >= K) {
                                K = s.frame + (parseInt(D.autoSleep, 10) || 120);
                                for (i in H) {
                                    for (e = H[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                    0 === e.length && delete H[i]
                                }
                                if (i = Y._first, (!i || i._paused) && D.autoSleep && !q._first && 1 === s._listeners.tick.length) {
                                    for (; i && i._paused;) i = i._next;
                                    i || s.sleep()
                                }
                            }
                        }, s.addEventListener("tick", P._updateRoot);
                        var Q = function(t, e, i) {
                                var r, n, a = t._gsTweenID;
                                if (H[a || (t._gsTweenID = a = "t" + j++)] || (H[a] = {
                                    target: t,
                                    tweens: []
                                }), e && (r = H[a].tweens, r[n = r.length] = e, i))
                                    for (; --n > -1;) r[n] === e && r.splice(n, 1);
                                return H[a].tweens
                            },
                            J = function(t, e, i, r) {
                                var n, a, o = t.vars.onOverwrite;
                                return o && (n = o(t, e, i, r)), o = D.onOverwrite, o && (a = o(t, e, i, r)), n !== !1 && a !== !1
                            },
                            $ = function(t, e, i, r, n) {
                                var a, o, s, h;
                                if (1 === r || r >= 4) {
                                    for (h = n.length, a = 0; h > a; a++)
                                        if ((s = n[a]) !== e) s._gc || s._kill(null, t, e) && (o = !0);
                                        else if (5 === r) break;
                                    return o
                                }
                                var l, c = e._startTime + u,
                                    p = [],
                                    d = 0,
                                    f = 0 === e._duration;
                                for (a = n.length; --a > -1;)(s = n[a]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (l = l || tt(e, 0, f), 0 === tt(s, l, f) && (p[d++] = s)) : s._startTime <= c && s._startTime + s.totalDuration() / s._timeScale > c && ((f || !s._initted) && c - s._startTime <= 2e-10 || (p[d++] = s)));
                                for (a = d; --a > -1;)
                                    if (s = p[a], 2 === r && s._kill(i, t, e) && (o = !0), 2 !== r || !s._firstPT && s._initted) {
                                        if (2 !== r && !J(s, e)) continue;
                                        s._enabled(!1, !1) && (o = !0)
                                    }
                                return o
                            },
                            tt = function(t, e, i) {
                                for (var r = t._timeline, n = r._timeScale, a = t._startTime; r._timeline;) {
                                    if (a += r._startTime, n *= r._timeScale, r._paused) return -100;
                                    r = r._timeline
                                }
                                return a /= n, a > e ? a - e : i && a === e || !t._initted && 2 * u > a - e ? u : (a += t.totalDuration() / t._timeScale / n) > e + u ? 0 : a - e - u
                            };
                        o._init = function() {
                            var t, e, i, r, n, a = this.vars,
                                o = this._overwrittenProps,
                                s = this._duration,
                                h = !!a.immediateRender,
                                l = a.ease;
                            if (a.startAt) {
                                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                                for (r in a.startAt) n[r] = a.startAt[r];
                                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = h && a.lazy !== !1, n.startAt = n.delay = null, this._startAt = D.to(this.target, 0, n), h)
                                    if (this._time > 0) this._startAt = null;
                                    else if (0 !== s) return
                            } else if (a.runBackwards && 0 !== s)
                                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                                else {
                                    0 !== this._time && (h = !1), i = {};
                                    for (r in a) W[r] && "autoCSS" !== r || (i[r] = a[r]);
                                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && a.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                                        if (0 === this._time) return
                                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                                }
                            if (this._ease = l = l ? l instanceof b ? l : "function" == typeof l ? new b(l, a.easeParams) : w[l] || D.defaultEase : D.defaultEase, a.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                            else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                            if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                            this._onUpdate = a.onUpdate, this._initted = !0
                        }, o._initProps = function(e, i, r, n) {
                            var a, o, s, h, l, c;
                            if (null == e) return !1;
                            U[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && G.css && this.vars.autoCSS !== !1 && O(this.vars, e);
                            for (a in this.vars)
                                if (c = this.vars[a], W[a]) c && (c instanceof Array || c.push && f(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
                                else if (G[a] && (h = new G[a])._onInitTween(e, this.vars[a], this)) {
                                    for (this._firstPT = l = {
                                        _next: this._firstPT,
                                        t: h,
                                        p: "setRatio",
                                        s: 0,
                                        c: 1,
                                        f: 1,
                                        n: a,
                                        pg: 1,
                                        pr: h._priority
                                    }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                                    (h._priority || h._onInitAllProps) && (s = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
                                } else i[a] = z.call(this, e, a, "get", c, a, 0, null, this.vars.stringFilter);
                            return n && this._kill(n, e) ? this._initProps(e, i, r, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && $(e, this, i, this._overwrite, r) ? (this._kill(i, e), this._initProps(e, i, r, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (U[e._gsTweenID] = !0), s)
                        }, o.render = function(t, e, i) {
                            var r, n, a, o, s = this._time,
                                h = this._duration,
                                l = this._rawPrevTime;
                            if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === u && "isPause" !== this.data) && l !== t && (i = !0, l > u && (n = "onReverseComplete")), this._rawPrevTime = o = !e || t || l === t ? t : u);
                            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === h && l > 0) && (n = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || l === t ? t : u)), this._initted || (i = !0);
                            else if (this._totalTime = this._time = t, this._easeType) {
                                var c = t / h,
                                    p = this._easeType,
                                    d = this._easePower;
                                (1 === p || 3 === p && c >= .5) && (c = 1 - c), 3 === p && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), 1 === p ? this.ratio = 1 - c : 2 === p ? this.ratio = c : .5 > t / h ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                            } else this.ratio = this._ease.getRatio(t / h);
                            if (this._time !== s || i) {
                                if (!this._initted) {
                                    if (this._init(), !this._initted || this._gc) return;
                                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = l, k.push(this), void(this._lazy = [t, e]);
                                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / h) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                                }
                                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== s || r) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === h && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0))
                            }
                        }, o._kill = function(t, e, i) {
                            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                            e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                            var r, n, a, o, s, h, l, c, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                            if ((f(e) || F(e)) && "number" != typeof e[0])
                                for (r = e.length; --r > -1;) this._kill(t, e[r], i) && (h = !0);
                            else {
                                if (this._targets) {
                                    for (r = this._targets.length; --r > -1;)
                                        if (e === this._targets[r]) {
                                            s = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                                            break
                                        }
                                } else {
                                    if (e !== this.target) return !1;
                                    s = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                                }
                                if (s) {
                                    if (l = t || s, c = t !== n && "all" !== n && t !== s && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                                        for (a in l) s[a] && (u || (u = []), u.push(a));
                                        if ((u || !t) && !J(this, i, e, u)) return !1
                                    }
                                    for (a in l)(o = s[a]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, h = !0), o.pg && o.t._kill(l) && (h = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[a]), c && (n[a] = 1);
                                    !this._firstPT && this._initted && this._enabled(!1, !1)
                                }
                            }
                            return h
                        }, o.invalidate = function() {
                            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
                        }, o._enabled = function(t, e) {
                            if (h || s.wake(), t && this._gc) {
                                var i, r = this._targets;
                                if (r)
                                    for (i = r.length; --i > -1;) this._siblings[i] = Q(r[i], this, !0);
                                else this._siblings = Q(this.target, this, !0)
                            }
                            return P.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
                        }, D.to = function(t, e, i) {
                            return new D(t, e, i)
                        }, D.from = function(t, e, i) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
                        }, D.fromTo = function(t, e, i, r) {
                            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new D(t, e, r)
                        }, D.delayedCall = function(t, e, i, r, n) {
                            return new D(e, 0, {
                                delay: t,
                                onComplete: e,
                                onCompleteParams: i,
                                callbackScope: r,
                                onReverseComplete: e,
                                onReverseCompleteParams: i,
                                immediateRender: !1,
                                lazy: !1,
                                useFrames: n,
                                overwrite: 0
                            })
                        }, D.set = function(t, e) {
                            return new D(t, 0, e)
                        }, D.getTweensOf = function(t, e) {
                            if (null == t) return [];
                            t = "string" != typeof t ? t : D.selector(t) || t;
                            var i, r, n, a;
                            if ((f(t) || F(t)) && "number" != typeof t[0]) {
                                for (i = t.length, r = []; --i > -1;) r = r.concat(D.getTweensOf(t[i], e));
                                for (i = r.length; --i > -1;)
                                    for (a = r[i], n = i; --n > -1;) a === r[n] && r.splice(i, 1)
                            } else
                                for (r = Q(t).concat(), i = r.length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
                            return r
                        }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                            "object" == typeof e && (i = e, e = !1);
                            for (var r = D.getTweensOf(t, e), n = r.length; --n > -1;) r[n]._kill(i, t)
                        };
                        var et = y("plugins.TweenPlugin", function(t, e) {
                            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
                        }, !0);
                        if (o = et.prototype, et.version = "1.18.0", et.API = 2, o._firstPT = null, o._addTween = z, o.setRatio = V, o._kill = function(t) {
                            var e, i = this._overwriteProps,
                                r = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                            for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                            return !1
                        }, o._roundProps = function(t, e) {
                            for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                        }, D._onPluginEvent = function(t, e) {
                            var i, r, n, a, o, s = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; s;) {
                                    for (o = s._next, r = n; r && r.pr > s.pr;) r = r._next;
                                    (s._prev = r ? r._prev : a) ? s._prev._next = s: n = s, (s._next = r) ? r._prev = s : a = s, s = o
                                }
                                s = e._firstPT = n
                            }
                            for (; s;) s.pg && "function" == typeof s.t[t] && s.t[t]() && (i = !0), s = s._next;
                            return i
                        }, et.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === et.API && (G[(new t[e])._propName] = t[e]);
                            return !0
                        }, v.plugin = function(t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, i = t.propName,
                                r = t.priority || 0,
                                n = t.overwriteProps,
                                a = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_roundProps",
                                    initAll: "_onInitAllProps"
                                },
                                o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                    et.call(this, i, r), this._overwriteProps = n || []
                                }, t.global === !0),
                                s = o.prototype = new et(i);
                            s.constructor = o, o.API = t.API;
                            for (e in a) "function" == typeof t[e] && (s[a[e]] = t[e]);
                            return o.version = t.version, et.activate([o]), o
                        }, n = t._gsQueue) {
                            for (a = 0; a < n.length; a++) n[a]();
                            for (o in m) m[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
                        }
                        h = !1
                    }
                }("undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window, "TweenMax")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    4: [function(t, e, i) {
        for (var r = t("performance-now"), n = "undefined" == typeof window ? {} : window, a = ["moz", "webkit"], o = "AnimationFrame", s = n["request" + o], h = n["cancel" + o] || n["cancelRequest" + o], l = 0; l < a.length && !s; l++) s = n[a[l] + "Request" + o], h = n[a[l] + "Cancel" + o] || n[a[l] + "CancelRequest" + o];
        if (!s || !h) {
            var c = 0,
                u = 0,
                p = [],
                d = 1e3 / 60;
            s = function(t) {
                if (0 === p.length) {
                    var e = r(),
                        i = Math.max(0, d - (e - c));
                    c = i + e, setTimeout(function() {
                        var t = p.slice(0);
                        p.length = 0;
                        for (var e = 0; e < t.length; e++)
                            if (!t[e].cancelled) try {
                                t[e].callback(c)
                            } catch (i) {
                                setTimeout(function() {
                                    throw i
                                }, 0)
                            }
                    }, Math.round(i))
                }
                return p.push({
                    handle: ++u,
                    callback: t,
                    cancelled: !1
                }), u
            }, h = function(t) {
                for (var e = 0; e < p.length; e++) p[e].handle === t && (p[e].cancelled = !0)
            }
        }
        e.exports = function(t) {
            return s.call(n, t)
        }, e.exports.cancel = function() {
            h.apply(n, arguments)
        }
    }, {
        "performance-now": 5
    }],
    5: [function(t, e, i) {
        (function(t) {
            (function() {
                var i, r, n;
                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" != typeof t && null !== t && t.hrtime ? (e.exports = function() {
                    return (i() - n) / 1e6
                }, r = t.hrtime, i = function() {
                    var t;
                    return t = r(), 1e9 * t[0] + t[1]
                }, n = i()) : Date.now ? (e.exports = function() {
                    return Date.now() - n
                }, n = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - n
                }, n = (new Date).getTime())
            }).call(this)
        }).call(this, t("_process"))
    }, {
        _process: 2
    }],
    6: [function(t, e, i) {
        var r = r || {},
            n = {
                REVISION: "72"
            };
        "function" == typeof define && define.amd ? define("three", n) : "undefined" != typeof i && "undefined" != typeof e && (e.exports = n), (void 0 === r.requestAnimationFrame || void 0 === r.cancelAnimationFrame) && ! function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !r.requestAnimationFrame; ++i) r.requestAnimationFrame = r[e[i] + "RequestAnimationFrame"], r.cancelAnimationFrame = r[e[i] + "CancelAnimationFrame"] || r[e[i] + "CancelRequestAnimationFrame"];
            void 0 === r.requestAnimationFrame && void 0 !== r.setTimeout && (r.requestAnimationFrame = function(e) {
                var i = Date.now(),
                    n = Math.max(0, 16 - (i - t)),
                    a = r.setTimeout(function() {
                        e(i + n)
                    }, n);
                return t = i + n, a
            }), void 0 === r.cancelAnimationFrame && void 0 !== r.clearTimeout && (r.cancelAnimationFrame = function(t) {
                r.clearTimeout(t)
            })
        }(), void 0 === Math.sign && (Math.sign = function(t) {
            return 0 > t ? -1 : t > 0 ? 1 : +t
        }), void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
            get: function() {
                return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
            }
        }), n.MOUSE = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        }, n.CullFaceNone = 0, n.CullFaceBack = 1, n.CullFaceFront = 2, n.CullFaceFrontBack = 3, n.FrontFaceDirectionCW = 0, n.FrontFaceDirectionCCW = 1, n.BasicShadowMap = 0, n.PCFShadowMap = 1, n.PCFSoftShadowMap = 2, n.FrontSide = 0, n.BackSide = 1, n.DoubleSide = 2, n.FlatShading = 1, n.SmoothShading = 2, n.NoColors = 0, n.FaceColors = 1, n.VertexColors = 2, n.NoBlending = 0, n.NormalBlending = 1, n.AdditiveBlending = 2, n.SubtractiveBlending = 3, n.MultiplyBlending = 4, n.CustomBlending = 5, n.AddEquation = 100, n.SubtractEquation = 101, n.ReverseSubtractEquation = 102, n.MinEquation = 103, n.MaxEquation = 104, n.ZeroFactor = 200, n.OneFactor = 201, n.SrcColorFactor = 202, n.OneMinusSrcColorFactor = 203, n.SrcAlphaFactor = 204, n.OneMinusSrcAlphaFactor = 205, n.DstAlphaFactor = 206, n.OneMinusDstAlphaFactor = 207, n.DstColorFactor = 208, n.OneMinusDstColorFactor = 209, n.SrcAlphaSaturateFactor = 210, n.NeverDepth = 0, n.AlwaysDepth = 1, n.LessDepth = 2, n.LessEqualDepth = 3, n.EqualDepth = 4, n.GreaterEqualDepth = 5, n.GreaterDepth = 6, n.NotEqualDepth = 7, n.MultiplyOperation = 0, n.MixOperation = 1, n.AddOperation = 2, n.UVMapping = 300, n.CubeReflectionMapping = 301, n.CubeRefractionMapping = 302, n.EquirectangularReflectionMapping = 303, n.EquirectangularRefractionMapping = 304, n.SphericalReflectionMapping = 305, n.RepeatWrapping = 1e3, n.ClampToEdgeWrapping = 1001, n.MirroredRepeatWrapping = 1002, n.NearestFilter = 1003, n.NearestMipMapNearestFilter = 1004, n.NearestMipMapLinearFilter = 1005, n.LinearFilter = 1006, n.LinearMipMapNearestFilter = 1007, n.LinearMipMapLinearFilter = 1008, n.UnsignedByteType = 1009, n.ByteType = 1010, n.ShortType = 1011, n.UnsignedShortType = 1012, n.IntType = 1013, n.UnsignedIntType = 1014, n.FloatType = 1015, n.HalfFloatType = 1025, n.UnsignedShort4444Type = 1016, n.UnsignedShort5551Type = 1017, n.UnsignedShort565Type = 1018, n.AlphaFormat = 1019, n.RGBFormat = 1020, n.RGBAFormat = 1021, n.LuminanceFormat = 1022, n.LuminanceAlphaFormat = 1023, n.RGBEFormat = n.RGBAFormat, n.RGB_S3TC_DXT1_Format = 2001, n.RGBA_S3TC_DXT1_Format = 2002, n.RGBA_S3TC_DXT3_Format = 2003, n.RGBA_S3TC_DXT5_Format = 2004, n.RGB_PVRTC_4BPPV1_Format = 2100, n.RGB_PVRTC_2BPPV1_Format = 2101, n.RGBA_PVRTC_4BPPV1_Format = 2102, n.RGBA_PVRTC_2BPPV1_Format = 2103, n.Projector = function() {
            console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) {
                console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
            }, this.unprojectVector = function(t, e) {
                console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
            }, this.pickingRay = function(t, e) {
                console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
            }
        }, n.CanvasRenderer = function() {
            console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElement("canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
        }, n.Color = function(t) {
            return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(t)
        }, n.Color.prototype = {
            constructor: n.Color,
            r: 1,
            g: 1,
            b: 1,
            set: function(t) {
                return t instanceof n.Color ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
            },
            setHex: function(t) {
                return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
            },
            setRGB: function(t, e, i) {
                return this.r = t, this.g = e, this.b = i, this
            },
            setHSL: function() {
                function t(t, e, i) {
                    return 0 > i && (i += 1), i > 1 && (i -= 1), 1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                return function(e, i, r) {
                    if (e = n.Math.euclideanModulo(e, 1), i = n.Math.clamp(i, 0, 1), r = n.Math.clamp(r, 0, 1), 0 === i) this.r = this.g = this.b = r;
                    else {
                        var a = .5 >= r ? r * (1 + i) : r + i - r * i,
                            o = 2 * r - a;
                        this.r = t(o, a, e + 1 / 3), this.g = t(o, a, e), this.b = t(o, a, e - 1 / 3)
                    }
                    return this
                }
            }(),
            setStyle: function(t) {
                var e, i = function(e) {
                    var i = parseFloat(e);
                    return 1 > i && console.warn("THREE.Color: Alpha component of color " + t + " will be ignored."), i
                };
                if (e = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                    var r, a = e[1],
                        o = e[2];
                    switch (a) {
                        case "rgb":
                            if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/.exec(o)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, this;
                            if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(o)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, this;
                            break;
                        case "rgba":
                            if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(o)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, i(r[4]), this;
                            if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(o)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, i(r[4]), this;
                            break;
                        case "hsl":
                            if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(o)) {
                                var s = parseFloat(r[1]),
                                    h = parseInt(r[2], 10) / 100,
                                    l = parseInt(r[3], 10) / 100;
                                return this.setHSL(s, h, l)
                            }
                            break;
                        case "hsla":
                            if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(o)) {
                                var s = parseFloat(r[1]),
                                    h = parseInt(r[2], 10) / 100,
                                    l = parseInt(r[3], 10) / 100;
                                return i(r[4]), this.setHSL(s, h, l)
                            }
                    }
                } else if (e = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                    var c = e[1],
                        u = c.length;
                    if (3 === u) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
                    if (6 === u) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
                }
                if (t && t.length > 0) {
                    var c = n.ColorKeywords[t];
                    void 0 !== c ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + t)
                }
                return this
            },
            clone: function() {
                return new this.constructor(this.r, this.g, this.b)
            },
            copy: function(t) {
                return this.r = t.r, this.g = t.g, this.b = t.b, this
            },
            copyGammaToLinear: function(t, e) {
                return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
            },
            copyLinearToGamma: function(t, e) {
                void 0 === e && (e = 2);
                var i = e > 0 ? 1 / e : 1;
                return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
            },
            convertGammaToLinear: function() {
                var t = this.r,
                    e = this.g,
                    i = this.b;
                return this.r = t * t, this.g = e * e, this.b = i * i, this
            },
            convertLinearToGamma: function() {
                return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
            },
            getHex: function() {
                return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
            },
            getHexString: function() {
                return ("000000" + this.getHex().toString(16)).slice(-6)
            },
            getHSL: function(t) {
                var e, i, r = t || {
                        h: 0,
                        s: 0,
                        l: 0
                    },
                    n = this.r,
                    a = this.g,
                    o = this.b,
                    s = Math.max(n, a, o),
                    h = Math.min(n, a, o),
                    l = (h + s) / 2;
                if (h === s) e = 0, i = 0;
                else {
                    var c = s - h;
                    switch (i = .5 >= l ? c / (s + h) : c / (2 - s - h), s) {
                        case n:
                            e = (a - o) / c + (o > a ? 6 : 0);
                            break;
                        case a:
                            e = (o - n) / c + 2;
                            break;
                        case o:
                            e = (n - a) / c + 4
                    }
                    e /= 6
                }
                return r.h = e, r.s = i, r.l = l, r
            },
            getStyle: function() {
                return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
            },
            offsetHSL: function(t, e, i) {
                var r = this.getHSL();
                return r.h += t, r.s += e, r.l += i, this.setHSL(r.h, r.s, r.l), this
            },
            add: function(t) {
                return this.r += t.r, this.g += t.g, this.b += t.b, this
            },
            addColors: function(t, e) {
                return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
            },
            addScalar: function(t) {
                return this.r += t, this.g += t, this.b += t, this
            },
            multiply: function(t) {
                return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
            },
            multiplyScalar: function(t) {
                return this.r *= t, this.g *= t, this.b *= t, this
            },
            lerp: function(t, e) {
                return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
            },
            equals: function(t) {
                return t.r === this.r && t.g === this.g && t.b === this.b
            },
            fromArray: function(t) {
                return this.r = t[0], this.g = t[1], this.b = t[2], this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
            }
        }, n.ColorKeywords = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        }, n.Quaternion = function(t, e, i, r) {
            this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== r ? r : 1
        }, n.Quaternion.prototype = {
            constructor: n.Quaternion,
            get x() {
                return this._x
            },
            set x(t) {
                this._x = t, this.onChangeCallback()
            },
            get y() {
                return this._y
            },
            set y(t) {
                this._y = t, this.onChangeCallback()
            },
            get z() {
                return this._z
            },
            set z(t) {
                this._z = t, this.onChangeCallback()
            },
            get w() {
                return this._w
            },
            set w(t) {
                this._w = t, this.onChangeCallback()
            },
            set: function(t, e, i, r) {
                return this._x = t, this._y = e, this._z = i, this._w = r, this.onChangeCallback(), this
            },
            clone: function() {
                return new this.constructor(this._x, this._y, this._z, this._w)
            },
            copy: function(t) {
                return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
            },
            setFromEuler: function(t, e) {
                if (t instanceof n.Euler == !1) throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                var i = Math.cos(t._x / 2),
                    r = Math.cos(t._y / 2),
                    a = Math.cos(t._z / 2),
                    o = Math.sin(t._x / 2),
                    s = Math.sin(t._y / 2),
                    h = Math.sin(t._z / 2),
                    l = t.order;
                return "XYZ" === l ? (this._x = o * r * a + i * s * h, this._y = i * s * a - o * r * h, this._z = i * r * h + o * s * a, this._w = i * r * a - o * s * h) : "YXZ" === l ? (this._x = o * r * a + i * s * h, this._y = i * s * a - o * r * h, this._z = i * r * h - o * s * a, this._w = i * r * a + o * s * h) : "ZXY" === l ? (this._x = o * r * a - i * s * h, this._y = i * s * a + o * r * h, this._z = i * r * h + o * s * a, this._w = i * r * a - o * s * h) : "ZYX" === l ? (this._x = o * r * a - i * s * h, this._y = i * s * a + o * r * h, this._z = i * r * h - o * s * a, this._w = i * r * a + o * s * h) : "YZX" === l ? (this._x = o * r * a + i * s * h, this._y = i * s * a + o * r * h, this._z = i * r * h - o * s * a, this._w = i * r * a - o * s * h) : "XZY" === l && (this._x = o * r * a - i * s * h, this._y = i * s * a - o * r * h, this._z = i * r * h + o * s * a, this._w = i * r * a + o * s * h), e !== !1 && this.onChangeCallback(), this
            },
            setFromAxisAngle: function(t, e) {
                var i = e / 2,
                    r = Math.sin(i);
                return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(i), this.onChangeCallback(), this
            },
            setFromRotationMatrix: function(t) {
                var e, i = t.elements,
                    r = i[0],
                    n = i[4],
                    a = i[8],
                    o = i[1],
                    s = i[5],
                    h = i[9],
                    l = i[2],
                    c = i[6],
                    u = i[10],
                    p = r + s + u;
                return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (c - h) * e, this._y = (a - l) * e, this._z = (o - n) * e) : r > s && r > u ? (e = 2 * Math.sqrt(1 + r - s - u), this._w = (c - h) / e, this._x = .25 * e, this._y = (n + o) / e, this._z = (a + l) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - r - u), this._w = (a - l) / e, this._x = (n + o) / e, this._y = .25 * e, this._z = (h + c) / e) : (e = 2 * Math.sqrt(1 + u - r - s), this._w = (o - n) / e, this._x = (a + l) / e, this._y = (h + c) / e, this._z = .25 * e), this.onChangeCallback(), this
            },
            setFromUnitVectors: function() {
                var t, e, i = 1e-6;
                return function(r, a) {
                    return void 0 === t && (t = new n.Vector3), e = r.dot(a) + 1, i > e ? (e = 0, Math.abs(r.x) > Math.abs(r.z) ? t.set(-r.y, r.x, 0) : t.set(0, -r.z, r.y)) : t.crossVectors(r, a), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize(), this
                }
            }(),
            inverse: function() {
                return this.conjugate().normalize(), this
            },
            conjugate: function() {
                return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
            },
            dot: function(t) {
                return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
            },
            lengthSq: function() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            },
            length: function() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            },
            normalize: function() {
                var t = this.length();
                return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
            },
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
            },
            multiplyQuaternions: function(t, e) {
                var i = t._x,
                    r = t._y,
                    n = t._z,
                    a = t._w,
                    o = e._x,
                    s = e._y,
                    h = e._z,
                    l = e._w;
                return this._x = i * l + a * o + r * h - n * s, this._y = r * l + a * s + n * o - i * h, this._z = n * l + a * h + i * s - r * o, this._w = a * l - i * o - r * s - n * h, this.onChangeCallback(), this
            },
            multiplyVector3: function(t) {
                return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
            },
            slerp: function(t, e) {
                if (0 === e) return this;
                if (1 === e) return this.copy(t);
                var i = this._x,
                    r = this._y,
                    n = this._z,
                    a = this._w,
                    o = a * t._w + i * t._x + r * t._y + n * t._z;
                if (0 > o ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = i, this._y = r, this._z = n, this;
                var s = Math.acos(o),
                    h = Math.sqrt(1 - o * o);
                if (Math.abs(h) < .001) return this._w = .5 * (a + this._w),
                    this._x = .5 * (i + this._x), this._y = .5 * (r + this._y), this._z = .5 * (n + this._z), this;
                var l = Math.sin((1 - e) * s) / h,
                    c = Math.sin(e * s) / h;
                return this._w = a * l + this._w * c, this._x = i * l + this._x * c, this._y = r * l + this._y * c, this._z = n * l + this._z * c, this.onChangeCallback(), this
            },
            equals: function(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
            },
            onChange: function(t) {
                return this.onChangeCallback = t, this
            },
            onChangeCallback: function() {}
        }, n.Quaternion.slerp = function(t, e, i, r) {
            return i.copy(t).slerp(e, r)
        }, n.Vector2 = function(t, e) {
            this.x = t || 0, this.y = e || 0
        }, n.Vector2.prototype = {
            constructor: n.Vector2,
            set: function(t, e) {
                return this.x = t, this.y = e, this
            },
            setX: function(t) {
                return this.x = t, this
            },
            setY: function(t) {
                return this.y = t, this
            },
            setComponent: function(t, e) {
                switch (t) {
                    case 0:
                        this.x = e;
                        break;
                    case 1:
                        this.y = e;
                        break;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            },
            getComponent: function(t) {
                switch (t) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x, this.y)
            },
            copy: function(t) {
                return this.x = t.x, this.y = t.y, this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
            },
            addScalar: function(t) {
                return this.x += t, this.y += t, this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x, this.y = t.y + e.y, this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e, this.y += t.y * e, this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
            },
            subScalar: function(t) {
                return this.x -= t, this.y -= t, this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x, this.y = t.y - e.y, this
            },
            multiply: function(t) {
                return this.x *= t.x, this.y *= t.y, this
            },
            multiplyScalar: function(t) {
                return this.x *= t, this.y *= t, this
            },
            divide: function(t) {
                return this.x /= t.x, this.y /= t.y, this
            },
            divideScalar: function(t) {
                if (0 !== t) {
                    var e = 1 / t;
                    this.x *= e, this.y *= e
                } else this.x = 0, this.y = 0;
                return this
            },
            min: function(t) {
                return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this
            },
            max: function(t) {
                return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this
            },
            clamp: function(t, e) {
                return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this
            },
            clampScalar: function() {
                var t, e;
                return function(i, r) {
                    return void 0 === t && (t = new n.Vector2, e = new n.Vector2), t.set(i, i), e.set(r, r), this.clamp(t, e)
                }
            }(),
            floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            lengthManhattan: function() {
                return Math.abs(this.x) + Math.abs(this.y)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            distanceTo: function(t) {
                return Math.sqrt(this.distanceToSquared(t))
            },
            distanceToSquared: function(t) {
                var e = this.x - t.x,
                    i = this.y - t.y;
                return e * e + i * i
            },
            setLength: function(t) {
                var e = this.length();
                return 0 !== e && t !== e && this.multiplyScalar(t / e), this
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
            },
            lerpVectors: function(t, e, i) {
                return this.subVectors(e, t).multiplyScalar(i).add(t), this
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
            },
            fromAttribute: function(t, e, i) {
                return void 0 === i && (i = 0), e = e * t.itemSize + i, this.x = t.array[e], this.y = t.array[e + 1], this
            }
        }, n.Vector3 = function(t, e, i) {
            this.x = t || 0, this.y = e || 0, this.z = i || 0
        }, n.Vector3.prototype = {
            constructor: n.Vector3,
            set: function(t, e, i) {
                return this.x = t, this.y = e, this.z = i, this
            },
            setX: function(t) {
                return this.x = t, this
            },
            setY: function(t) {
                return this.y = t, this
            },
            setZ: function(t) {
                return this.z = t, this
            },
            setComponent: function(t, e) {
                switch (t) {
                    case 0:
                        this.x = e;
                        break;
                    case 1:
                        this.y = e;
                        break;
                    case 2:
                        this.z = e;
                        break;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            },
            getComponent: function(t) {
                switch (t) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x, this.y, this.z)
            },
            copy: function(t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
            },
            addScalar: function(t) {
                return this.x += t, this.y += t, this.z += t, this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
            },
            subScalar: function(t) {
                return this.x -= t, this.y -= t, this.z -= t, this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
            },
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
            },
            multiplyScalar: function(t) {
                return this.x *= t, this.y *= t, this.z *= t, this
            },
            multiplyVectors: function(t, e) {
                return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
            },
            applyEuler: function() {
                var t;
                return function(e) {
                    return e instanceof n.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."), void 0 === t && (t = new n.Quaternion), this.applyQuaternion(t.setFromEuler(e)), this
                }
            }(),
            applyAxisAngle: function() {
                var t;
                return function(e, i) {
                    return void 0 === t && (t = new n.Quaternion), this.applyQuaternion(t.setFromAxisAngle(e, i)), this
                }
            }(),
            applyMatrix3: function(t) {
                var e = this.x,
                    i = this.y,
                    r = this.z,
                    n = t.elements;
                return this.x = n[0] * e + n[3] * i + n[6] * r, this.y = n[1] * e + n[4] * i + n[7] * r, this.z = n[2] * e + n[5] * i + n[8] * r, this
            },
            applyMatrix4: function(t) {
                var e = this.x,
                    i = this.y,
                    r = this.z,
                    n = t.elements;
                return this.x = n[0] * e + n[4] * i + n[8] * r + n[12], this.y = n[1] * e + n[5] * i + n[9] * r + n[13], this.z = n[2] * e + n[6] * i + n[10] * r + n[14], this
            },
            applyProjection: function(t) {
                var e = this.x,
                    i = this.y,
                    r = this.z,
                    n = t.elements,
                    a = 1 / (n[3] * e + n[7] * i + n[11] * r + n[15]);
                return this.x = (n[0] * e + n[4] * i + n[8] * r + n[12]) * a, this.y = (n[1] * e + n[5] * i + n[9] * r + n[13]) * a, this.z = (n[2] * e + n[6] * i + n[10] * r + n[14]) * a, this
            },
            applyQuaternion: function(t) {
                var e = this.x,
                    i = this.y,
                    r = this.z,
                    n = t.x,
                    a = t.y,
                    o = t.z,
                    s = t.w,
                    h = s * e + a * r - o * i,
                    l = s * i + o * e - n * r,
                    c = s * r + n * i - a * e,
                    u = -n * e - a * i - o * r;
                return this.x = h * s + u * -n + l * -o - c * -a, this.y = l * s + u * -a + c * -n - h * -o, this.z = c * s + u * -o + h * -a - l * -n, this
            },
            project: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Matrix4), t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyProjection(t)
                }
            }(),
            unproject: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Matrix4), t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyProjection(t)
                }
            }(),
            transformDirection: function(t) {
                var e = this.x,
                    i = this.y,
                    r = this.z,
                    n = t.elements;
                return this.x = n[0] * e + n[4] * i + n[8] * r, this.y = n[1] * e + n[5] * i + n[9] * r, this.z = n[2] * e + n[6] * i + n[10] * r, this.normalize(), this
            },
            divide: function(t) {
                return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
            },
            divideScalar: function(t) {
                if (0 !== t) {
                    var e = 1 / t;
                    this.x *= e, this.y *= e, this.z *= e
                } else this.x = 0, this.y = 0, this.z = 0;
                return this
            },
            min: function(t) {
                return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this.z > t.z && (this.z = t.z), this
            },
            max: function(t) {
                return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this.z < t.z && (this.z = t.z), this
            },
            clamp: function(t, e) {
                return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this.z < t.z ? this.z = t.z : this.z > e.z && (this.z = e.z), this
            },
            clampScalar: function() {
                var t, e;
                return function(i, r) {
                    return void 0 === t && (t = new n.Vector3, e = new n.Vector3), t.set(i, i, i), e.set(r, r, r), this.clamp(t, e)
                }
            }(),
            floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
            },
            round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            lengthManhattan: function() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            setLength: function(t) {
                var e = this.length();
                return 0 !== e && t !== e && this.multiplyScalar(t / e), this
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
            },
            lerpVectors: function(t, e, i) {
                return this.subVectors(e, t).multiplyScalar(i).add(t), this
            },
            cross: function(t, e) {
                if (void 0 !== e) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e);
                var i = this.x,
                    r = this.y,
                    n = this.z;
                return this.x = r * t.z - n * t.y, this.y = n * t.x - i * t.z, this.z = i * t.y - r * t.x, this
            },
            crossVectors: function(t, e) {
                var i = t.x,
                    r = t.y,
                    n = t.z,
                    a = e.x,
                    o = e.y,
                    s = e.z;
                return this.x = r * s - n * o, this.y = n * a - i * s, this.z = i * o - r * a, this
            },
            projectOnVector: function() {
                var t, e;
                return function(i) {
                    return void 0 === t && (t = new n.Vector3), t.copy(i).normalize(), e = this.dot(t), this.copy(t).multiplyScalar(e)
                }
            }(),
            projectOnPlane: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Vector3), t.copy(this).projectOnVector(e), this.sub(t)
                }
            }(),
            reflect: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Vector3), this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
                }
            }(),
            angleTo: function(t) {
                var e = this.dot(t) / (this.length() * t.length());
                return Math.acos(n.Math.clamp(e, -1, 1))
            },
            distanceTo: function(t) {
                return Math.sqrt(this.distanceToSquared(t))
            },
            distanceToSquared: function(t) {
                var e = this.x - t.x,
                    i = this.y - t.y,
                    r = this.z - t.z;
                return e * e + i * i + r * r
            },
            setEulerFromRotationMatrix: function(t, e) {
                console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
            },
            setEulerFromQuaternion: function(t, e) {
                console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
            },
            getPositionFromMatrix: function(t) {
                return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
            },
            getScaleFromMatrix: function(t) {
                return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
            },
            getColumnFromMatrix: function(t, e) {
                return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
            },
            setFromMatrixPosition: function(t) {
                return this.x = t.elements[12], this.y = t.elements[13], this.z = t.elements[14], this
            },
            setFromMatrixScale: function(t) {
                var e = this.set(t.elements[0], t.elements[1], t.elements[2]).length(),
                    i = this.set(t.elements[4], t.elements[5], t.elements[6]).length(),
                    r = this.set(t.elements[8], t.elements[9], t.elements[10]).length();
                return this.x = e, this.y = i, this.z = r, this
            },
            setFromMatrixColumn: function(t, e) {
                var i = 4 * t,
                    r = e.elements;
                return this.x = r[i], this.y = r[i + 1], this.z = r[i + 2], this
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
            },
            fromAttribute: function(t, e, i) {
                return void 0 === i && (i = 0), e = e * t.itemSize + i, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this
            }
        }, n.Vector4 = function(t, e, i, r) {
            this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== r ? r : 1
        }, n.Vector4.prototype = {
            constructor: n.Vector4,
            set: function(t, e, i, r) {
                return this.x = t, this.y = e, this.z = i, this.w = r, this
            },
            setX: function(t) {
                return this.x = t, this
            },
            setY: function(t) {
                return this.y = t, this
            },
            setZ: function(t) {
                return this.z = t, this
            },
            setW: function(t) {
                return this.w = t, this
            },
            setComponent: function(t, e) {
                switch (t) {
                    case 0:
                        this.x = e;
                        break;
                    case 1:
                        this.y = e;
                        break;
                    case 2:
                        this.z = e;
                        break;
                    case 3:
                        this.w = e;
                        break;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            },
            getComponent: function(t) {
                switch (t) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    case 3:
                        return this.w;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x, this.y, this.z, this.w)
            },
            copy: function(t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
            },
            addScalar: function(t) {
                return this.x += t, this.y += t, this.z += t, this.w += t, this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
            },
            subScalar: function(t) {
                return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
            },
            multiplyScalar: function(t) {
                return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
            },
            applyMatrix4: function(t) {
                var e = this.x,
                    i = this.y,
                    r = this.z,
                    n = this.w,
                    a = t.elements;
                return this.x = a[0] * e + a[4] * i + a[8] * r + a[12] * n, this.y = a[1] * e + a[5] * i + a[9] * r + a[13] * n, this.z = a[2] * e + a[6] * i + a[10] * r + a[14] * n, this.w = a[3] * e + a[7] * i + a[11] * r + a[15] * n, this
            },
            divideScalar: function(t) {
                if (0 !== t) {
                    var e = 1 / t;
                    this.x *= e, this.y *= e, this.z *= e, this.w *= e
                } else this.x = 0, this.y = 0, this.z = 0, this.w = 1;
                return this
            },
            setAxisAngleFromQuaternion: function(t) {
                this.w = 2 * Math.acos(t.w);
                var e = Math.sqrt(1 - t.w * t.w);
                return 1e-4 > e ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
            },
            setAxisAngleFromRotationMatrix: function(t) {
                var e, i, r, n, a = .01,
                    o = .1,
                    s = t.elements,
                    h = s[0],
                    l = s[4],
                    c = s[8],
                    u = s[1],
                    p = s[5],
                    d = s[9],
                    f = s[2],
                    m = s[6],
                    g = s[10];
                if (Math.abs(l - u) < a && Math.abs(c - f) < a && Math.abs(d - m) < a) {
                    if (Math.abs(l + u) < o && Math.abs(c + f) < o && Math.abs(d + m) < o && Math.abs(h + p + g - 3) < o) return this.set(1, 0, 0, 0), this;
                    e = Math.PI;
                    var v = (h + 1) / 2,
                        y = (p + 1) / 2,
                        _ = (g + 1) / 2,
                        x = (l + u) / 4,
                        b = (c + f) / 4,
                        w = (d + m) / 4;
                    return v > y && v > _ ? a > v ? (i = 0, r = .707106781, n = .707106781) : (i = Math.sqrt(v), r = x / i, n = b / i) : y > _ ? a > y ? (i = .707106781, r = 0, n = .707106781) : (r = Math.sqrt(y), i = x / r, n = w / r) : a > _ ? (i = .707106781, r = .707106781, n = 0) : (n = Math.sqrt(_), i = b / n, r = w / n), this.set(i, r, n, e), this
                }
                var M = Math.sqrt((m - d) * (m - d) + (c - f) * (c - f) + (u - l) * (u - l));
                return Math.abs(M) < .001 && (M = 1), this.x = (m - d) / M, this.y = (c - f) / M, this.z = (u - l) / M, this.w = Math.acos((h + p + g - 1) / 2), this
            },
            min: function(t) {
                return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this.z > t.z && (this.z = t.z), this.w > t.w && (this.w = t.w), this
            },
            max: function(t) {
                return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this.z < t.z && (this.z = t.z), this.w < t.w && (this.w = t.w), this
            },
            clamp: function(t, e) {
                return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this.z < t.z ? this.z = t.z : this.z > e.z && (this.z = e.z), this.w < t.w ? this.w = t.w : this.w > e.w && (this.w = e.w), this
            },
            clampScalar: function() {
                var t, e;
                return function(i, r) {
                    return void 0 === t && (t = new n.Vector4, e = new n.Vector4), t.set(i, i, i, i), e.set(r, r, r, r), this.clamp(t, e)
                }
            }(),
            floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
            },
            round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            },
            lengthManhattan: function() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            setLength: function(t) {
                var e = this.length();
                return 0 !== e && t !== e && this.multiplyScalar(t / e), this
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
            },
            lerpVectors: function(t, e, i) {
                return this.subVectors(e, t).multiplyScalar(i).add(t), this
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
            },
            fromAttribute: function(t, e, i) {
                return void 0 === i && (i = 0), e = e * t.itemSize + i, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this.w = t.array[e + 3], this
            }
        }, n.Euler = function(t, e, i, r) {
            this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = r || n.Euler.DefaultOrder
        }, n.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], n.Euler.DefaultOrder = "XYZ", n.Euler.prototype = {
            constructor: n.Euler,
            get x() {
                return this._x
            },
            set x(t) {
                this._x = t, this.onChangeCallback()
            },
            get y() {
                return this._y
            },
            set y(t) {
                this._y = t, this.onChangeCallback()
            },
            get z() {
                return this._z
            },
            set z(t) {
                this._z = t, this.onChangeCallback()
            },
            get order() {
                return this._order
            },
            set order(t) {
                this._order = t, this.onChangeCallback()
            },
            set: function(t, e, i, r) {
                return this._x = t, this._y = e, this._z = i, this._order = r || this._order, this.onChangeCallback(), this
            },
            clone: function() {
                return new this.constructor(this._x, this._y, this._z, this._order)
            },
            copy: function(t) {
                return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
            },
            setFromRotationMatrix: function(t, e, i) {
                var r = n.Math.clamp,
                    a = t.elements,
                    o = a[0],
                    s = a[4],
                    h = a[8],
                    l = a[1],
                    c = a[5],
                    u = a[9],
                    p = a[2],
                    d = a[6],
                    f = a[10];
                return e = e || this._order, "XYZ" === e ? (this._y = Math.asin(r(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-s, o)) : (this._x = Math.atan2(d, c), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-r(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(h, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-p, o), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(r(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-p, f), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(l, o))) : "ZYX" === e ? (this._y = Math.asin(-r(p, -1, 1)), Math.abs(p) < .99999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, o)) : (this._x = 0, this._z = Math.atan2(-s, c))) : "YZX" === e ? (this._z = Math.asin(r(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-p, o)) : (this._x = 0, this._y = Math.atan2(h, f))) : "XZY" === e ? (this._z = Math.asin(-r(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(h, o)) : (this._x = Math.atan2(-u, f), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, i !== !1 && this.onChangeCallback(), this
            },
            setFromQuaternion: function() {
                var t;
                return function(e, i, r) {
                    return void 0 === t && (t = new n.Matrix4), t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, r), this
                }
            }(),
            setFromVector3: function(t, e) {
                return this.set(t.x, t.y, t.z, e || this._order)
            },
            reorder: function() {
                var t = new n.Quaternion;
                return function(e) {
                    t.setFromEuler(this), this.setFromQuaternion(t, e)
                }
            }(),
            equals: function(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
            },
            fromArray: function(t) {
                return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
            },
            toVector3: function(t) {
                return t ? t.set(this._x, this._y, this._z) : new n.Vector3(this._x, this._y, this._z)
            },
            onChange: function(t) {
                return this.onChangeCallback = t, this
            },
            onChangeCallback: function() {}
        }, n.Line3 = function(t, e) {
            this.start = void 0 !== t ? t : new n.Vector3, this.end = void 0 !== e ? e : new n.Vector3
        }, n.Line3.prototype = {
            constructor: n.Line3,
            set: function(t, e) {
                return this.start.copy(t), this.end.copy(e), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.start.copy(t.start), this.end.copy(t.end), this
            },
            center: function(t) {
                var e = t || new n.Vector3;
                return e.addVectors(this.start, this.end).multiplyScalar(.5)
            },
            delta: function(t) {
                var e = t || new n.Vector3;
                return e.subVectors(this.end, this.start)
            },
            distanceSq: function() {
                return this.start.distanceToSquared(this.end)
            },
            distance: function() {
                return this.start.distanceTo(this.end)
            },
            at: function(t, e) {
                var i = e || new n.Vector3;
                return this.delta(i).multiplyScalar(t).add(this.start)
            },
            closestPointToPointParameter: function() {
                var t = new n.Vector3,
                    e = new n.Vector3;
                return function(i, r) {
                    t.subVectors(i, this.start), e.subVectors(this.end, this.start);
                    var a = e.dot(e),
                        o = e.dot(t),
                        s = o / a;
                    return r && (s = n.Math.clamp(s, 0, 1)), s
                }
            }(),
            closestPointToPoint: function(t, e, i) {
                var r = this.closestPointToPointParameter(t, e),
                    a = i || new n.Vector3;
                return this.delta(a).multiplyScalar(r).add(this.start)
            },
            applyMatrix4: function(t) {
                return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
            },
            equals: function(t) {
                return t.start.equals(this.start) && t.end.equals(this.end)
            }
        }, n.Box2 = function(t, e) {
            this.min = void 0 !== t ? t : new n.Vector2(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new n.Vector2(-(1 / 0), -(1 / 0))
        }, n.Box2.prototype = {
            constructor: n.Box2,
            set: function(t, e) {
                return this.min.copy(t), this.max.copy(e), this
            },
            setFromPoints: function(t) {
                this.makeEmpty();
                for (var e = 0, i = t.length; i > e; e++) this.expandByPoint(t[e]);
                return this
            },
            setFromCenterAndSize: function() {
                var t = new n.Vector2;
                return function(e, i) {
                    var r = t.copy(i).multiplyScalar(.5);
                    return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.min.copy(t.min), this.max.copy(t.max), this
            },
            makeEmpty: function() {
                return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -(1 / 0), this
            },
            empty: function() {
                return this.max.x < this.min.x || this.max.y < this.min.y
            },
            center: function(t) {
                var e = t || new n.Vector2;
                return e.addVectors(this.min, this.max).multiplyScalar(.5)
            },
            size: function(t) {
                var e = t || new n.Vector2;
                return e.subVectors(this.max, this.min)
            },
            expandByPoint: function(t) {
                return this.min.min(t), this.max.max(t), this
            },
            expandByVector: function(t) {
                return this.min.sub(t), this.max.add(t), this
            },
            expandByScalar: function(t) {
                return this.min.addScalar(-t), this.max.addScalar(t), this
            },
            containsPoint: function(t) {
                return t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y ? !1 : !0
            },
            containsBox: function(t) {
                return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y ? !0 : !1
            },
            getParameter: function(t, e) {
                var i = e || new n.Vector2;
                return i.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
            },
            isIntersectionBox: function(t) {
                return t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y ? !1 : !0
            },
            clampPoint: function(t, e) {
                var i = e || new n.Vector2;
                return i.copy(t).clamp(this.min, this.max)
            },
            distanceToPoint: function() {
                var t = new n.Vector2;
                return function(e) {
                    var i = t.copy(e).clamp(this.min, this.max);
                    return i.sub(e).length()
                }
            }(),
            intersect: function(t) {
                return this.min.max(t.min), this.max.min(t.max), this
            },
            union: function(t) {
                return this.min.min(t.min), this.max.max(t.max), this
            },
            translate: function(t) {
                return this.min.add(t), this.max.add(t), this
            },
            equals: function(t) {
                return t.min.equals(this.min) && t.max.equals(this.max)
            }
        }, n.Box3 = function(t, e) {
            this.min = void 0 !== t ? t : new n.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new n.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
        }, n.Box3.prototype = {
            constructor: n.Box3,
            set: function(t, e) {
                return this.min.copy(t), this.max.copy(e), this
            },
            setFromPoints: function(t) {
                this.makeEmpty();
                for (var e = 0, i = t.length; i > e; e++) this.expandByPoint(t[e]);
                return this
            },
            setFromCenterAndSize: function() {
                var t = new n.Vector3;
                return function(e, i) {
                    var r = t.copy(i).multiplyScalar(.5);
                    return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
                }
            }(),
            setFromObject: function() {
                var t = new n.Vector3;
                return function(e) {
                    var i = this;
                    return e.updateMatrixWorld(!0), this.makeEmpty(), e.traverse(function(e) {
                        var r = e.geometry;
                        if (void 0 !== r)
                            if (r instanceof n.Geometry)
                                for (var a = r.vertices, o = 0, s = a.length; s > o; o++) t.copy(a[o]), t.applyMatrix4(e.matrixWorld), i.expandByPoint(t);
                            else if (r instanceof n.BufferGeometry && void 0 !== r.attributes.position)
                                for (var h = r.attributes.position.array, o = 0, s = h.length; s > o; o += 3) t.set(h[o], h[o + 1], h[o + 2]), t.applyMatrix4(e.matrixWorld), i.expandByPoint(t)
                    }), this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.min.copy(t.min), this.max.copy(t.max), this
            },
            makeEmpty: function() {
                return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -(1 / 0), this
            },
            empty: function() {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            },
            center: function(t) {
                var e = t || new n.Vector3;
                return e.addVectors(this.min, this.max).multiplyScalar(.5)
            },
            size: function(t) {
                var e = t || new n.Vector3;
                return e.subVectors(this.max, this.min)
            },
            expandByPoint: function(t) {
                return this.min.min(t), this.max.max(t), this
            },
            expandByVector: function(t) {
                return this.min.sub(t), this.max.add(t), this
            },
            expandByScalar: function(t) {
                return this.min.addScalar(-t), this.max.addScalar(t), this
            },
            containsPoint: function(t) {
                return t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z ? !1 : !0
            },
            containsBox: function(t) {
                return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z ? !0 : !1
            },
            getParameter: function(t, e) {
                var i = e || new n.Vector3;
                return i.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
            },
            isIntersectionBox: function(t) {
                return t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z ? !1 : !0
            },
            clampPoint: function(t, e) {
                var i = e || new n.Vector3;
                return i.copy(t).clamp(this.min, this.max)
            },
            distanceToPoint: function() {
                var t = new n.Vector3;
                return function(e) {
                    var i = t.copy(e).clamp(this.min, this.max);
                    return i.sub(e).length()
                }
            }(),
            getBoundingSphere: function() {
                var t = new n.Vector3;
                return function(e) {
                    var i = e || new n.Sphere;
                    return i.center = this.center(), i.radius = .5 * this.size(t).length(), i
                }
            }(),
            intersect: function(t) {
                return this.min.max(t.min), this.max.min(t.max), this
            },
            union: function(t) {
                return this.min.min(t.min), this.max.max(t.max), this
            },
            applyMatrix4: function() {
                var t = [new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3, new n.Vector3];
                return function(e) {
                    return t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.makeEmpty(), this.setFromPoints(t), this
                }
            }(),
            translate: function(t) {
                return this.min.add(t), this.max.add(t), this
            },
            equals: function(t) {
                return t.min.equals(this.min) && t.max.equals(this.max)
            }
        }, n.Matrix3 = function() {
            this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }, n.Matrix3.prototype = {
            constructor: n.Matrix3,
            set: function(t, e, i, r, n, a, o, s, h) {
                var l = this.elements;
                return l[0] = t, l[3] = e, l[6] = i, l[1] = r, l[4] = n, l[7] = a, l[2] = o, l[5] = s, l[8] = h, this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
            },
            clone: function() {
                return (new this.constructor).fromArray(this.elements)
            },
            copy: function(t) {
                var e = t.elements;
                return this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]), this
            },
            multiplyVector3: function(t) {
                return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
            },
            multiplyVector3Array: function(t) {
                return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
            },
            applyToVector3Array: function() {
                var t;
                return function(e, i, r) {
                    void 0 === t && (t = new n.Vector3), void 0 === i && (i = 0), void 0 === r && (r = e.length);
                    for (var a = 0, o = i; r > a; a += 3, o += 3) t.fromArray(e, o), t.applyMatrix3(this), t.toArray(e, o);
                    return e
                }
            }(),
            applyToBuffer: function() {
                var t;
                return function(e, i, r) {
                    void 0 === t && (t = new n.Vector3), void 0 === i && (i = 0), void 0 === r && (r = e.length / e.itemSize);
                    for (var a = 0, o = i; r > a; a++, o++) t.x = e.getX(o), t.y = e.getY(o), t.z = e.getZ(o), t.applyMatrix3(this), e.setXYZ(t.x, t.y, t.z);
                    return e
                }
            }(),
            multiplyScalar: function(t) {
                var e = this.elements;
                return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
            },
            determinant: function() {
                var t = this.elements,
                    e = t[0],
                    i = t[1],
                    r = t[2],
                    n = t[3],
                    a = t[4],
                    o = t[5],
                    s = t[6],
                    h = t[7],
                    l = t[8];
                return e * a * l - e * o * h - i * n * l + i * o * s + r * n * h - r * a * s
            },
            getInverse: function(t, e) {
                var i = t.elements,
                    r = this.elements;
                r[0] = i[10] * i[5] - i[6] * i[9], r[1] = -i[10] * i[1] + i[2] * i[9], r[2] = i[6] * i[1] - i[2] * i[5], r[3] = -i[10] * i[4] + i[6] * i[8], r[4] = i[10] * i[0] - i[2] * i[8], r[5] = -i[6] * i[0] + i[2] * i[4], r[6] = i[9] * i[4] - i[5] * i[8], r[7] = -i[9] * i[0] + i[1] * i[8], r[8] = i[5] * i[0] - i[1] * i[4];
                var n = i[0] * r[0] + i[1] * r[3] + i[2] * r[6];
                if (0 === n) {
                    var a = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
                    if (e) throw new Error(a);
                    return console.warn(a), this.identity(), this
                }
                return this.multiplyScalar(1 / n), this
            },
            transpose: function() {
                var t, e = this.elements;
                return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
            },
            flattenToArrayOffset: function(t, e) {
                var i = this.elements;
                return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
            },
            getNormalMatrix: function(t) {
                return this.getInverse(t).transpose(), this
            },
            transposeIntoArray: function(t) {
                var e = this.elements;
                return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
            },
            fromArray: function(t) {
                return this.elements.set(t), this
            },
            toArray: function() {
                var t = this.elements;
                return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]]
            }
        }, n.Matrix4 = function() {
            this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }, n.Matrix4.prototype = {
            constructor: n.Matrix4,
            set: function(t, e, i, r, n, a, o, s, h, l, c, u, p, d, f, m) {
                var g = this.elements;
                return g[0] = t, g[4] = e, g[8] = i, g[12] = r, g[1] = n, g[5] = a, g[9] = o, g[13] = s, g[2] = h, g[6] = l, g[10] = c, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m,
                    this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            },
            clone: function() {
                return (new n.Matrix4).fromArray(this.elements)
            },
            copy: function(t) {
                return this.elements.set(t.elements), this
            },
            extractPosition: function(t) {
                return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
            },
            copyPosition: function(t) {
                var e = this.elements,
                    i = t.elements;
                return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
            },
            extractBasis: function(t, e, i) {
                var r = this.elements;
                return t.set(r[0], r[1], r[2]), e.set(r[4], r[5], r[6]), i.set(r[8], r[9], r[10]), this
            },
            makeBasis: function(t, e, i) {
                return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
            },
            extractRotation: function() {
                var t;
                return function(e) {
                    void 0 === t && (t = new n.Vector3);
                    var i = this.elements,
                        r = e.elements,
                        a = 1 / t.set(r[0], r[1], r[2]).length(),
                        o = 1 / t.set(r[4], r[5], r[6]).length(),
                        s = 1 / t.set(r[8], r[9], r[10]).length();
                    return i[0] = r[0] * a, i[1] = r[1] * a, i[2] = r[2] * a, i[4] = r[4] * o, i[5] = r[5] * o, i[6] = r[6] * o, i[8] = r[8] * s, i[9] = r[9] * s, i[10] = r[10] * s, this
                }
            }(),
            makeRotationFromEuler: function(t) {
                t instanceof n.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                var e = this.elements,
                    i = t.x,
                    r = t.y,
                    a = t.z,
                    o = Math.cos(i),
                    s = Math.sin(i),
                    h = Math.cos(r),
                    l = Math.sin(r),
                    c = Math.cos(a),
                    u = Math.sin(a);
                if ("XYZ" === t.order) {
                    var p = o * c,
                        d = o * u,
                        f = s * c,
                        m = s * u;
                    e[0] = h * c, e[4] = -h * u, e[8] = l, e[1] = d + f * l, e[5] = p - m * l, e[9] = -s * h, e[2] = m - p * l, e[6] = f + d * l, e[10] = o * h
                } else if ("YXZ" === t.order) {
                    var g = h * c,
                        v = h * u,
                        y = l * c,
                        _ = l * u;
                    e[0] = g + _ * s, e[4] = y * s - v, e[8] = o * l, e[1] = o * u, e[5] = o * c, e[9] = -s, e[2] = v * s - y, e[6] = _ + g * s, e[10] = o * h
                } else if ("ZXY" === t.order) {
                    var g = h * c,
                        v = h * u,
                        y = l * c,
                        _ = l * u;
                    e[0] = g - _ * s, e[4] = -o * u, e[8] = y + v * s, e[1] = v + y * s, e[5] = o * c, e[9] = _ - g * s, e[2] = -o * l, e[6] = s, e[10] = o * h
                } else if ("ZYX" === t.order) {
                    var p = o * c,
                        d = o * u,
                        f = s * c,
                        m = s * u;
                    e[0] = h * c, e[4] = f * l - d, e[8] = p * l + m, e[1] = h * u, e[5] = m * l + p, e[9] = d * l - f, e[2] = -l, e[6] = s * h, e[10] = o * h
                } else if ("YZX" === t.order) {
                    var x = o * h,
                        b = o * l,
                        w = s * h,
                        M = s * l;
                    e[0] = h * c, e[4] = M - x * u, e[8] = w * u + b, e[1] = u, e[5] = o * c, e[9] = -s * c, e[2] = -l * c, e[6] = b * u + w, e[10] = x - M * u
                } else if ("XZY" === t.order) {
                    var x = o * h,
                        b = o * l,
                        w = s * h,
                        M = s * l;
                    e[0] = h * c, e[4] = -u, e[8] = l * c, e[1] = x * u + M, e[5] = o * c, e[9] = b * u - w, e[2] = w * u - b, e[6] = s * c, e[10] = M * u + x
                }
                return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
            },
            setRotationFromQuaternion: function(t) {
                return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
            },
            makeRotationFromQuaternion: function(t) {
                var e = this.elements,
                    i = t.x,
                    r = t.y,
                    n = t.z,
                    a = t.w,
                    o = i + i,
                    s = r + r,
                    h = n + n,
                    l = i * o,
                    c = i * s,
                    u = i * h,
                    p = r * s,
                    d = r * h,
                    f = n * h,
                    m = a * o,
                    g = a * s,
                    v = a * h;
                return e[0] = 1 - (p + f), e[4] = c - v, e[8] = u + g, e[1] = c + v, e[5] = 1 - (l + f), e[9] = d - m, e[2] = u - g, e[6] = d + m, e[10] = 1 - (l + p), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
            },
            lookAt: function() {
                var t, e, i;
                return function(r, a, o) {
                    void 0 === t && (t = new n.Vector3), void 0 === e && (e = new n.Vector3), void 0 === i && (i = new n.Vector3);
                    var s = this.elements;
                    return i.subVectors(r, a).normalize(), 0 === i.length() && (i.z = 1), t.crossVectors(o, i).normalize(), 0 === t.length() && (i.x += 1e-4, t.crossVectors(o, i).normalize()), e.crossVectors(i, t), s[0] = t.x, s[4] = e.x, s[8] = i.x, s[1] = t.y, s[5] = e.y, s[9] = i.y, s[2] = t.z, s[6] = e.z, s[10] = i.z, this
                }
            }(),
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
            },
            multiplyMatrices: function(t, e) {
                var i = t.elements,
                    r = e.elements,
                    n = this.elements,
                    a = i[0],
                    o = i[4],
                    s = i[8],
                    h = i[12],
                    l = i[1],
                    c = i[5],
                    u = i[9],
                    p = i[13],
                    d = i[2],
                    f = i[6],
                    m = i[10],
                    g = i[14],
                    v = i[3],
                    y = i[7],
                    _ = i[11],
                    x = i[15],
                    b = r[0],
                    w = r[4],
                    M = r[8],
                    T = r[12],
                    S = r[1],
                    E = r[5],
                    A = r[9],
                    C = r[13],
                    P = r[2],
                    L = r[6],
                    R = r[10],
                    D = r[14],
                    F = r[3],
                    O = r[7],
                    k = r[11],
                    U = r[15];
                return n[0] = a * b + o * S + s * P + h * F, n[4] = a * w + o * E + s * L + h * O, n[8] = a * M + o * A + s * R + h * k, n[12] = a * T + o * C + s * D + h * U, n[1] = l * b + c * S + u * P + p * F, n[5] = l * w + c * E + u * L + p * O, n[9] = l * M + c * A + u * R + p * k, n[13] = l * T + c * C + u * D + p * U, n[2] = d * b + f * S + m * P + g * F, n[6] = d * w + f * E + m * L + g * O, n[10] = d * M + f * A + m * R + g * k, n[14] = d * T + f * C + m * D + g * U, n[3] = v * b + y * S + _ * P + x * F, n[7] = v * w + y * E + _ * L + x * O, n[11] = v * M + y * A + _ * R + x * k, n[15] = v * T + y * C + _ * D + x * U, this
            },
            multiplyToArray: function(t, e, i) {
                var r = this.elements;
                return this.multiplyMatrices(t, e), i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], i[4] = r[4], i[5] = r[5], i[6] = r[6], i[7] = r[7], i[8] = r[8], i[9] = r[9], i[10] = r[10], i[11] = r[11], i[12] = r[12], i[13] = r[13], i[14] = r[14], i[15] = r[15], this
            },
            multiplyScalar: function(t) {
                var e = this.elements;
                return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
            },
            multiplyVector3: function(t) {
                return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), t.applyProjection(this)
            },
            multiplyVector4: function(t) {
                return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
            },
            multiplyVector3Array: function(t) {
                return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
            },
            applyToVector3Array: function() {
                var t;
                return function(e, i, r) {
                    void 0 === t && (t = new n.Vector3), void 0 === i && (i = 0), void 0 === r && (r = e.length);
                    for (var a = 0, o = i; r > a; a += 3, o += 3) t.fromArray(e, o), t.applyMatrix4(this), t.toArray(e, o);
                    return e
                }
            }(),
            applyToBuffer: function() {
                var t;
                return function(e, i, r) {
                    void 0 === t && (t = new n.Vector3), void 0 === i && (i = 0), void 0 === r && (r = e.length / e.itemSize);
                    for (var a = 0, o = i; r > a; a++, o++) t.x = e.getX(o), t.y = e.getY(o), t.z = e.getZ(o), t.applyMatrix4(this), e.setXYZ(t.x, t.y, t.z);
                    return e
                }
            }(),
            rotateAxis: function(t) {
                console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
            },
            crossVector: function(t) {
                return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
            },
            determinant: function() {
                var t = this.elements,
                    e = t[0],
                    i = t[4],
                    r = t[8],
                    n = t[12],
                    a = t[1],
                    o = t[5],
                    s = t[9],
                    h = t[13],
                    l = t[2],
                    c = t[6],
                    u = t[10],
                    p = t[14],
                    d = t[3],
                    f = t[7],
                    m = t[11],
                    g = t[15];
                return d * (+n * s * c - r * h * c - n * o * u + i * h * u + r * o * p - i * s * p) + f * (+e * s * p - e * h * u + n * a * u - r * a * p + r * h * l - n * s * l) + m * (+e * h * c - e * o * p - n * a * c + i * a * p + n * o * l - i * h * l) + g * (-r * o * l - e * s * c + e * o * u + r * a * c - i * a * u + i * s * l)
            },
            transpose: function() {
                var t, e = this.elements;
                return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
            },
            flattenToArrayOffset: function(t, e) {
                var i = this.elements;
                return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
            },
            getPosition: function() {
                var t;
                return function() {
                    void 0 === t && (t = new n.Vector3), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                    var e = this.elements;
                    return t.set(e[12], e[13], e[14])
                }
            }(),
            setPosition: function(t) {
                var e = this.elements;
                return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
            },
            getInverse: function(t, e) {
                var i = this.elements,
                    r = t.elements,
                    n = r[0],
                    a = r[4],
                    o = r[8],
                    s = r[12],
                    h = r[1],
                    l = r[5],
                    c = r[9],
                    u = r[13],
                    p = r[2],
                    d = r[6],
                    f = r[10],
                    m = r[14],
                    g = r[3],
                    v = r[7],
                    y = r[11],
                    _ = r[15];
                i[0] = c * m * v - u * f * v + u * d * y - l * m * y - c * d * _ + l * f * _, i[4] = s * f * v - o * m * v - s * d * y + a * m * y + o * d * _ - a * f * _, i[8] = o * u * v - s * c * v + s * l * y - a * u * y - o * l * _ + a * c * _, i[12] = s * c * d - o * u * d - s * l * f + a * u * f + o * l * m - a * c * m, i[1] = u * f * g - c * m * g - u * p * y + h * m * y + c * p * _ - h * f * _, i[5] = o * m * g - s * f * g + s * p * y - n * m * y - o * p * _ + n * f * _, i[9] = s * c * g - o * u * g - s * h * y + n * u * y + o * h * _ - n * c * _, i[13] = o * u * p - s * c * p + s * h * f - n * u * f - o * h * m + n * c * m, i[2] = l * m * g - u * d * g + u * p * v - h * m * v - l * p * _ + h * d * _, i[6] = s * d * g - a * m * g - s * p * v + n * m * v + a * p * _ - n * d * _, i[10] = a * u * g - s * l * g + s * h * v - n * u * v - a * h * _ + n * l * _, i[14] = s * l * p - a * u * p - s * h * d + n * u * d + a * h * m - n * l * m, i[3] = c * d * g - l * f * g - c * p * v + h * f * v + l * p * y - h * d * y, i[7] = a * f * g - o * d * g + o * p * v - n * f * v - a * p * y + n * d * y, i[11] = o * l * g - a * c * g - o * h * v + n * c * v + a * h * y - n * l * y, i[15] = a * c * p - o * l * p + o * h * d - n * c * d - a * h * f + n * l * f;
                var x = n * i[0] + h * i[4] + p * i[8] + g * i[12];
                if (0 === x) {
                    var b = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                    if (e) throw new Error(b);
                    return console.warn(b), this.identity(), this
                }
                return this.multiplyScalar(1 / x), this
            },
            translate: function(t) {
                console.error("THREE.Matrix4: .translate() has been removed.")
            },
            rotateX: function(t) {
                console.error("THREE.Matrix4: .rotateX() has been removed.")
            },
            rotateY: function(t) {
                console.error("THREE.Matrix4: .rotateY() has been removed.")
            },
            rotateZ: function(t) {
                console.error("THREE.Matrix4: .rotateZ() has been removed.")
            },
            rotateByAxis: function(t, e) {
                console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
            },
            scale: function(t) {
                var e = this.elements,
                    i = t.x,
                    r = t.y,
                    n = t.z;
                return e[0] *= i, e[4] *= r, e[8] *= n, e[1] *= i, e[5] *= r, e[9] *= n, e[2] *= i, e[6] *= r, e[10] *= n, e[3] *= i, e[7] *= r, e[11] *= n, this
            },
            getMaxScaleOnAxis: function() {
                var t = this.elements,
                    e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                    i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                    r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                return Math.sqrt(Math.max(e, Math.max(i, r)))
            },
            makeTranslation: function(t, e, i) {
                return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
            },
            makeRotationX: function(t) {
                var e = Math.cos(t),
                    i = Math.sin(t);
                return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
            },
            makeRotationY: function(t) {
                var e = Math.cos(t),
                    i = Math.sin(t);
                return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
            },
            makeRotationZ: function(t) {
                var e = Math.cos(t),
                    i = Math.sin(t);
                return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            },
            makeRotationAxis: function(t, e) {
                var i = Math.cos(e),
                    r = Math.sin(e),
                    n = 1 - i,
                    a = t.x,
                    o = t.y,
                    s = t.z,
                    h = n * a,
                    l = n * o;
                return this.set(h * a + i, h * o - r * s, h * s + r * o, 0, h * o + r * s, l * o + i, l * s - r * a, 0, h * s - r * o, l * s + r * a, n * s * s + i, 0, 0, 0, 0, 1), this
            },
            makeScale: function(t, e, i) {
                return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
            },
            compose: function(t, e, i) {
                return this.makeRotationFromQuaternion(e), this.scale(i), this.setPosition(t), this
            },
            decompose: function() {
                var t, e;
                return function(i, r, a) {
                    void 0 === t && (t = new n.Vector3), void 0 === e && (e = new n.Matrix4);
                    var o = this.elements,
                        s = t.set(o[0], o[1], o[2]).length(),
                        h = t.set(o[4], o[5], o[6]).length(),
                        l = t.set(o[8], o[9], o[10]).length(),
                        c = this.determinant();
                    0 > c && (s = -s), i.x = o[12], i.y = o[13], i.z = o[14], e.elements.set(this.elements);
                    var u = 1 / s,
                        p = 1 / h,
                        d = 1 / l;
                    return e.elements[0] *= u, e.elements[1] *= u, e.elements[2] *= u, e.elements[4] *= p, e.elements[5] *= p, e.elements[6] *= p, e.elements[8] *= d, e.elements[9] *= d, e.elements[10] *= d, r.setFromRotationMatrix(e), a.x = s, a.y = h, a.z = l, this
                }
            }(),
            makeFrustum: function(t, e, i, r, n, a) {
                var o = this.elements,
                    s = 2 * n / (e - t),
                    h = 2 * n / (r - i),
                    l = (e + t) / (e - t),
                    c = (r + i) / (r - i),
                    u = -(a + n) / (a - n),
                    p = -2 * a * n / (a - n);
                return o[0] = s, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = h, o[9] = c, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
            },
            makePerspective: function(t, e, i, r) {
                var a = i * Math.tan(n.Math.degToRad(.5 * t)),
                    o = -a,
                    s = o * e,
                    h = a * e;
                return this.makeFrustum(s, h, o, a, i, r)
            },
            makeOrthographic: function(t, e, i, r, n, a) {
                var o = this.elements,
                    s = e - t,
                    h = i - r,
                    l = a - n,
                    c = (e + t) / s,
                    u = (i + r) / h,
                    p = (a + n) / l;
                return o[0] = 2 / s, o[4] = 0, o[8] = 0, o[12] = -c, o[1] = 0, o[5] = 2 / h, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 / l, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
            },
            equals: function(t) {
                for (var e = this.elements, i = t.elements, r = 0; 16 > r; r++)
                    if (e[r] !== i[r]) return !1;
                return !0
            },
            fromArray: function(t) {
                return this.elements.set(t), this
            },
            toArray: function() {
                var t = this.elements;
                return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]]
            }
        }, n.Ray = function(t, e) {
            this.origin = void 0 !== t ? t : new n.Vector3, this.direction = void 0 !== e ? e : new n.Vector3
        }, n.Ray.prototype = {
            constructor: n.Ray,
            set: function(t, e) {
                return this.origin.copy(t), this.direction.copy(e), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.origin.copy(t.origin), this.direction.copy(t.direction), this
            },
            at: function(t, e) {
                var i = e || new n.Vector3;
                return i.copy(this.direction).multiplyScalar(t).add(this.origin)
            },
            recast: function() {
                var t = new n.Vector3;
                return function(e) {
                    return this.origin.copy(this.at(e, t)), this
                }
            }(),
            closestPointToPoint: function(t, e) {
                var i = e || new n.Vector3;
                i.subVectors(t, this.origin);
                var r = i.dot(this.direction);
                return 0 > r ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(r).add(this.origin)
            },
            distanceToPoint: function(t) {
                return Math.sqrt(this.distanceSqToPoint(t))
            },
            distanceSqToPoint: function() {
                var t = new n.Vector3;
                return function(e) {
                    var i = t.subVectors(e, this.origin).dot(this.direction);
                    return 0 > i ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
                }
            }(),
            distanceSqToSegment: function() {
                var t = new n.Vector3,
                    e = new n.Vector3,
                    i = new n.Vector3;
                return function(r, n, a, o) {
                    t.copy(r).add(n).multiplyScalar(.5), e.copy(n).sub(r).normalize(), i.copy(this.origin).sub(t);
                    var s, h, l, c, u = .5 * r.distanceTo(n),
                        p = -this.direction.dot(e),
                        d = i.dot(this.direction),
                        f = -i.dot(e),
                        m = i.lengthSq(),
                        g = Math.abs(1 - p * p);
                    if (g > 0)
                        if (s = p * f - d, h = p * d - f, c = u * g, s >= 0)
                            if (h >= -c)
                                if (c >= h) {
                                    var v = 1 / g;
                                    s *= v, h *= v, l = s * (s + p * h + 2 * d) + h * (p * s + h + 2 * f) + m
                                } else h = u, s = Math.max(0, -(p * h + d)), l = -s * s + h * (h + 2 * f) + m;
                            else h = -u, s = Math.max(0, -(p * h + d)), l = -s * s + h * (h + 2 * f) + m;
                        else -c >= h ? (s = Math.max(0, -(-p * u + d)), h = s > 0 ? -u : Math.min(Math.max(-u, -f), u), l = -s * s + h * (h + 2 * f) + m) : c >= h ? (s = 0, h = Math.min(Math.max(-u, -f), u), l = h * (h + 2 * f) + m) : (s = Math.max(0, -(p * u + d)), h = s > 0 ? u : Math.min(Math.max(-u, -f), u), l = -s * s + h * (h + 2 * f) + m);
                    else h = p > 0 ? -u : u, s = Math.max(0, -(p * h + d)), l = -s * s + h * (h + 2 * f) + m;
                    return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(e).multiplyScalar(h).add(t), l
                }
            }(),
            isIntersectionSphere: function(t) {
                return this.distanceToPoint(t.center) <= t.radius
            },
            intersectSphere: function() {
                var t = new n.Vector3;
                return function(e, i) {
                    t.subVectors(e.center, this.origin);
                    var r = t.dot(this.direction),
                        n = t.dot(t) - r * r,
                        a = e.radius * e.radius;
                    if (n > a) return null;
                    var o = Math.sqrt(a - n),
                        s = r - o,
                        h = r + o;
                    return 0 > s && 0 > h ? null : 0 > s ? this.at(h, i) : this.at(s, i)
                }
            }(),
            isIntersectionPlane: function(t) {
                var e = t.distanceToPoint(this.origin);
                if (0 === e) return !0;
                var i = t.normal.dot(this.direction);
                return 0 > i * e ? !0 : !1
            },
            distanceToPlane: function(t) {
                var e = t.normal.dot(this.direction);
                if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
                var i = -(this.origin.dot(t.normal) + t.constant) / e;
                return i >= 0 ? i : null
            },
            intersectPlane: function(t, e) {
                var i = this.distanceToPlane(t);
                return null === i ? null : this.at(i, e)
            },
            isIntersectionBox: function() {
                var t = new n.Vector3;
                return function(e) {
                    return null !== this.intersectBox(e, t)
                }
            }(),
            intersectBox: function(t, e) {
                var i, r, n, a, o, s, h = 1 / this.direction.x,
                    l = 1 / this.direction.y,
                    c = 1 / this.direction.z,
                    u = this.origin;
                return h >= 0 ? (i = (t.min.x - u.x) * h, r = (t.max.x - u.x) * h) : (i = (t.max.x - u.x) * h, r = (t.min.x - u.x) * h), l >= 0 ? (n = (t.min.y - u.y) * l, a = (t.max.y - u.y) * l) : (n = (t.max.y - u.y) * l, a = (t.min.y - u.y) * l), i > a || n > r ? null : ((n > i || i !== i) && (i = n), (r > a || r !== r) && (r = a), c >= 0 ? (o = (t.min.z - u.z) * c, s = (t.max.z - u.z) * c) : (o = (t.max.z - u.z) * c, s = (t.min.z - u.z) * c), i > s || o > r ? null : ((o > i || i !== i) && (i = o), (r > s || r !== r) && (r = s), 0 > r ? null : this.at(i >= 0 ? i : r, e)))
            },
            intersectTriangle: function() {
                var t = new n.Vector3,
                    e = new n.Vector3,
                    i = new n.Vector3,
                    r = new n.Vector3;
                return function(n, a, o, s, h) {
                    e.subVectors(a, n), i.subVectors(o, n), r.crossVectors(e, i);
                    var l, c = this.direction.dot(r);
                    if (c > 0) {
                        if (s) return null;
                        l = 1
                    } else {
                        if (!(0 > c)) return null;
                        l = -1, c = -c
                    }
                    t.subVectors(this.origin, n);
                    var u = l * this.direction.dot(i.crossVectors(t, i));
                    if (0 > u) return null;
                    var p = l * this.direction.dot(e.cross(t));
                    if (0 > p) return null;
                    if (u + p > c) return null;
                    var d = -l * t.dot(r);
                    return 0 > d ? null : this.at(d / c, h)
                }
            }(),
            applyMatrix4: function(t) {
                return this.direction.add(this.origin).applyMatrix4(t), this.origin.applyMatrix4(t), this.direction.sub(this.origin), this.direction.normalize(), this
            },
            equals: function(t) {
                return t.origin.equals(this.origin) && t.direction.equals(this.direction)
            }
        }, n.Sphere = function(t, e) {
            this.center = void 0 !== t ? t : new n.Vector3, this.radius = void 0 !== e ? e : 0
        }, n.Sphere.prototype = {
            constructor: n.Sphere,
            set: function(t, e) {
                return this.center.copy(t), this.radius = e, this
            },
            setFromPoints: function() {
                var t = new n.Box3;
                return function(e, i) {
                    var r = this.center;
                    void 0 !== i ? r.copy(i) : t.setFromPoints(e).center(r);
                    for (var n = 0, a = 0, o = e.length; o > a; a++) n = Math.max(n, r.distanceToSquared(e[a]));
                    return this.radius = Math.sqrt(n), this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.center.copy(t.center), this.radius = t.radius, this
            },
            empty: function() {
                return this.radius <= 0
            },
            containsPoint: function(t) {
                return t.distanceToSquared(this.center) <= this.radius * this.radius
            },
            distanceToPoint: function(t) {
                return t.distanceTo(this.center) - this.radius
            },
            intersectsSphere: function(t) {
                var e = this.radius + t.radius;
                return t.center.distanceToSquared(this.center) <= e * e
            },
            clampPoint: function(t, e) {
                var i = this.center.distanceToSquared(t),
                    r = e || new n.Vector3;
                return r.copy(t), i > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
            },
            getBoundingBox: function(t) {
                var e = t || new n.Box3;
                return e.set(this.center, this.center), e.expandByScalar(this.radius), e
            },
            applyMatrix4: function(t) {
                return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
            },
            translate: function(t) {
                return this.center.add(t), this
            },
            equals: function(t) {
                return t.center.equals(this.center) && t.radius === this.radius
            }
        }, n.Frustum = function(t, e, i, r, a, o) {
            this.planes = [void 0 !== t ? t : new n.Plane, void 0 !== e ? e : new n.Plane, void 0 !== i ? i : new n.Plane, void 0 !== r ? r : new n.Plane, void 0 !== a ? a : new n.Plane, void 0 !== o ? o : new n.Plane]
        }, n.Frustum.prototype = {
            constructor: n.Frustum,
            set: function(t, e, i, r, n, a) {
                var o = this.planes;
                return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(r), o[4].copy(n), o[5].copy(a), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                for (var e = this.planes, i = 0; 6 > i; i++) e[i].copy(t.planes[i]);
                return this
            },
            setFromMatrix: function(t) {
                var e = this.planes,
                    i = t.elements,
                    r = i[0],
                    n = i[1],
                    a = i[2],
                    o = i[3],
                    s = i[4],
                    h = i[5],
                    l = i[6],
                    c = i[7],
                    u = i[8],
                    p = i[9],
                    d = i[10],
                    f = i[11],
                    m = i[12],
                    g = i[13],
                    v = i[14],
                    y = i[15];
                return e[0].setComponents(o - r, c - s, f - u, y - m).normalize(), e[1].setComponents(o + r, c + s, f + u, y + m).normalize(), e[2].setComponents(o + n, c + h, f + p, y + g).normalize(), e[3].setComponents(o - n, c - h, f - p, y - g).normalize(), e[4].setComponents(o - a, c - l, f - d, y - v).normalize(), e[5].setComponents(o + a, c + l, f + d, y + v).normalize(), this
            },
            intersectsObject: function() {
                var t = new n.Sphere;
                return function(e) {
                    var i = e.geometry;
                    return null === i.boundingSphere && i.computeBoundingSphere(), t.copy(i.boundingSphere), t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
                }
            }(),
            intersectsSphere: function(t) {
                for (var e = this.planes, i = t.center, r = -t.radius, n = 0; 6 > n; n++) {
                    var a = e[n].distanceToPoint(i);
                    if (r > a) return !1
                }
                return !0
            },
            intersectsBox: function() {
                var t = new n.Vector3,
                    e = new n.Vector3;
                return function(i) {
                    for (var r = this.planes, n = 0; 6 > n; n++) {
                        var a = r[n];
                        t.x = a.normal.x > 0 ? i.min.x : i.max.x, e.x = a.normal.x > 0 ? i.max.x : i.min.x, t.y = a.normal.y > 0 ? i.min.y : i.max.y, e.y = a.normal.y > 0 ? i.max.y : i.min.y, t.z = a.normal.z > 0 ? i.min.z : i.max.z, e.z = a.normal.z > 0 ? i.max.z : i.min.z;
                        var o = a.distanceToPoint(t),
                            s = a.distanceToPoint(e);
                        if (0 > o && 0 > s) return !1
                    }
                    return !0
                }
            }(),
            containsPoint: function(t) {
                for (var e = this.planes, i = 0; 6 > i; i++)
                    if (e[i].distanceToPoint(t) < 0) return !1;
                return !0
            }
        }, n.Plane = function(t, e) {
            this.normal = void 0 !== t ? t : new n.Vector3(1, 0, 0), this.constant = void 0 !== e ? e : 0
        }, n.Plane.prototype = {
            constructor: n.Plane,
            set: function(t, e) {
                return this.normal.copy(t), this.constant = e, this
            },
            setComponents: function(t, e, i, r) {
                return this.normal.set(t, e, i), this.constant = r, this
            },
            setFromNormalAndCoplanarPoint: function(t, e) {
                return this.normal.copy(t), this.constant = -e.dot(this.normal), this
            },
            setFromCoplanarPoints: function() {
                var t = new n.Vector3,
                    e = new n.Vector3;
                return function(i, r, n) {
                    var a = t.subVectors(n, r).cross(e.subVectors(i, r)).normalize();
                    return this.setFromNormalAndCoplanarPoint(a, i), this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.normal.copy(t.normal), this.constant = t.constant, this
            },
            normalize: function() {
                var t = 1 / this.normal.length();
                return this.normal.multiplyScalar(t), this.constant *= t, this
            },
            negate: function() {
                return this.constant *= -1, this.normal.negate(), this
            },
            distanceToPoint: function(t) {
                return this.normal.dot(t) + this.constant
            },
            distanceToSphere: function(t) {
                return this.distanceToPoint(t.center) - t.radius
            },
            projectPoint: function(t, e) {
                return this.orthoPoint(t, e).sub(t).negate()
            },
            orthoPoint: function(t, e) {
                var i = this.distanceToPoint(t),
                    r = e || new n.Vector3;
                return r.copy(this.normal).multiplyScalar(i)
            },
            isIntersectionLine: function(t) {
                var e = this.distanceToPoint(t.start),
                    i = this.distanceToPoint(t.end);
                return 0 > e && i > 0 || 0 > i && e > 0
            },
            intersectLine: function() {
                var t = new n.Vector3;
                return function(e, i) {
                    var r = i || new n.Vector3,
                        a = e.delta(t),
                        o = this.normal.dot(a);
                    if (0 === o) return 0 === this.distanceToPoint(e.start) ? r.copy(e.start) : void 0;
                    var s = -(e.start.dot(this.normal) + this.constant) / o;
                    return 0 > s || s > 1 ? void 0 : r.copy(a).multiplyScalar(s).add(e.start)
                }
            }(),
            coplanarPoint: function(t) {
                var e = t || new n.Vector3;
                return e.copy(this.normal).multiplyScalar(-this.constant)
            },
            applyMatrix4: function() {
                var t = new n.Vector3,
                    e = new n.Vector3,
                    i = new n.Matrix3;
                return function(r, n) {
                    var a = n || i.getNormalMatrix(r),
                        o = t.copy(this.normal).applyMatrix3(a),
                        s = this.coplanarPoint(e);
                    return s.applyMatrix4(r), this.setFromNormalAndCoplanarPoint(o, s), this
                }
            }(),
            translate: function(t) {
                return this.constant = this.constant - t.dot(this.normal), this
            },
            equals: function(t) {
                return t.normal.equals(this.normal) && t.constant === this.constant
            }
        }, n.Math = {
            generateUUID: function() {
                var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                    i = new Array(36),
                    r = 0;
                return function() {
                    for (var n = 0; 36 > n; n++) 8 === n || 13 === n || 18 === n || 23 === n ? i[n] = "-" : 14 === n ? i[n] = "4" : (2 >= r && (r = 33554432 + 16777216 * Math.random() | 0), t = 15 & r, r >>= 4, i[n] = e[19 === n ? 3 & t | 8 : t]);
                    return i.join("")
                }
            }(),
            clamp: function(t, e, i) {
                return e > t ? e : t > i ? i : t
            },
            clampBottom: function(t, e) {
                return e > t ? e : t
            },
            euclideanModulo: function(t, e) {
                return (t % e + e) % e
            },
            mapLinear: function(t, e, i, r, n) {
                return r + (t - e) * (n - r) / (i - e)
            },
            smoothstep: function(t, e, i) {
                return e >= t ? 0 : t >= i ? 1 : (t = (t - e) / (i - e), t * t * (3 - 2 * t))
            },
            smootherstep: function(t, e, i) {
                return e >= t ? 0 : t >= i ? 1 : (t = (t - e) / (i - e), t * t * t * (t * (6 * t - 15) + 10))
            },
            random16: function() {
                return (65280 * Math.random() + 255 * Math.random()) / 65535
            },
            randInt: function(t, e) {
                return t + Math.floor(Math.random() * (e - t + 1))
            },
            randFloat: function(t, e) {
                return t + Math.random() * (e - t)
            },
            randFloatSpread: function(t) {
                return t * (.5 - Math.random())
            },
            degToRad: function() {
                var t = Math.PI / 180;
                return function(e) {
                    return e * t
                }
            }(),
            radToDeg: function() {
                var t = 180 / Math.PI;
                return function(e) {
                    return e * t
                }
            }(),
            isPowerOfTwo: function(t) {
                return 0 === (t & t - 1) && 0 !== t
            },
            nextPowerOfTwo: function(t) {
                return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, t++, t
            }
        }, n.Spline = function(t) {
            function e(t, e, i, r, n, a, o) {
                var s = .5 * (i - t),
                    h = .5 * (r - e);
                return (2 * (e - i) + s + h) * o + (-3 * (e - i) - 2 * s - h) * a + s * n + e
            }
            this.points = t;
            var i, r, a, o, s, h, l, c, u, p = [],
                d = {
                    x: 0,
                    y: 0,
                    z: 0
                };
            this.initFromArray = function(t) {
                this.points = [];
                for (var e = 0; e < t.length; e++) this.points[e] = {
                    x: t[e][0],
                    y: t[e][1],
                    z: t[e][2]
                }
            }, this.getPoint = function(t) {
                return i = (this.points.length - 1) * t, r = Math.floor(i), a = i - r, p[0] = 0 === r ? r : r - 1, p[1] = r, p[2] = r > this.points.length - 2 ? this.points.length - 1 : r + 1, p[3] = r > this.points.length - 3 ? this.points.length - 1 : r + 2, h = this.points[p[0]], l = this.points[p[1]], c = this.points[p[2]], u = this.points[p[3]], o = a * a, s = a * o, d.x = e(h.x, l.x, c.x, u.x, a, o, s), d.y = e(h.y, l.y, c.y, u.y, a, o, s), d.z = e(h.z, l.z, c.z, u.z, a, o, s), d
            }, this.getControlPointsArray = function() {
                var t, e, i = this.points.length,
                    r = [];
                for (t = 0; i > t; t++) e = this.points[t], r[t] = [e.x, e.y, e.z];
                return r
            }, this.getLength = function(t) {
                var e, i, r, a, o = 0,
                    s = 0,
                    h = 0,
                    l = new n.Vector3,
                    c = new n.Vector3,
                    u = [],
                    p = 0;
                for (u[0] = 0, t || (t = 100), r = this.points.length * t, l.copy(this.points[0]), e = 1; r > e; e++) i = e / r, a = this.getPoint(i), c.copy(a), p += c.distanceTo(l), l.copy(a), o = (this.points.length - 1) * i, s = Math.floor(o), s !== h && (u[s] = p, h = s);
                return u[u.length] = p, {
                    chunks: u,
                    total: p
                }
            }, this.reparametrizeByArcLength = function(t) {
                var e, i, r, a, o, s, h, l, c = [],
                    u = new n.Vector3,
                    p = this.getLength();
                for (c.push(u.copy(this.points[0]).clone()), e = 1; e < this.points.length; e++) {
                    for (s = p.chunks[e] - p.chunks[e - 1], h = Math.ceil(t * s / p.total), a = (e - 1) / (this.points.length - 1), o = e / (this.points.length - 1), i = 1; h - 1 > i; i++) r = a + i * (1 / h) * (o - a), l = this.getPoint(r), c.push(u.copy(l).clone());
                    c.push(u.copy(this.points[e]).clone())
                }
                this.points = c
            }
        }, n.Triangle = function(t, e, i) {
            this.a = void 0 !== t ? t : new n.Vector3, this.b = void 0 !== e ? e : new n.Vector3, this.c = void 0 !== i ? i : new n.Vector3
        }, n.Triangle.normal = function() {
            var t = new n.Vector3;
            return function(e, i, r, a) {
                var o = a || new n.Vector3;
                o.subVectors(r, i), t.subVectors(e, i), o.cross(t);
                var s = o.lengthSq();
                return s > 0 ? o.multiplyScalar(1 / Math.sqrt(s)) : o.set(0, 0, 0)
            }
        }(), n.Triangle.barycoordFromPoint = function() {
            var t = new n.Vector3,
                e = new n.Vector3,
                i = new n.Vector3;
            return function(r, a, o, s, h) {
                t.subVectors(s, a), e.subVectors(o, a), i.subVectors(r, a);
                var l = t.dot(t),
                    c = t.dot(e),
                    u = t.dot(i),
                    p = e.dot(e),
                    d = e.dot(i),
                    f = l * p - c * c,
                    m = h || new n.Vector3;
                if (0 === f) return m.set(-2, -1, -1);
                var g = 1 / f,
                    v = (p * u - c * d) * g,
                    y = (l * d - c * u) * g;
                return m.set(1 - v - y, y, v)
            }
        }(), n.Triangle.containsPoint = function() {
            var t = new n.Vector3;
            return function(e, i, r, a) {
                var o = n.Triangle.barycoordFromPoint(e, i, r, a, t);
                return o.x >= 0 && o.y >= 0 && o.x + o.y <= 1
            }
        }(), n.Triangle.prototype = {
            constructor: n.Triangle,
            set: function(t, e, i) {
                return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
            },
            setFromPointsAndIndices: function(t, e, i, r) {
                return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[r]), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
            },
            area: function() {
                var t = new n.Vector3,
                    e = new n.Vector3;
                return function() {
                    return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
                }
            }(),
            midpoint: function(t) {
                var e = t || new n.Vector3;
                return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            },
            normal: function(t) {
                return n.Triangle.normal(this.a, this.b, this.c, t)
            },
            plane: function(t) {
                var e = t || new n.Plane;
                return e.setFromCoplanarPoints(this.a, this.b, this.c)
            },
            barycoordFromPoint: function(t, e) {
                return n.Triangle.barycoordFromPoint(t, this.a, this.b, this.c, e)
            },
            containsPoint: function(t) {
                return n.Triangle.containsPoint(t, this.a, this.b, this.c)
            },
            equals: function(t) {
                return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
            }
        }, n.Clock = function(t) {
            this.autoStart = void 0 !== t ? t : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
        }, n.Clock.prototype = {
            constructor: n.Clock,
            start: function() {
                this.startTime = void 0 !== r.performance && void 0 !== r.performance.now ? r.performance.now() : Date.now(), this.oldTime = this.startTime, this.running = !0
            },
            stop: function() {
                this.getElapsedTime(), this.running = !1
            },
            getElapsedTime: function() {
                return this.getDelta(), this.elapsedTime
            },
            getDelta: function() {
                var t = 0;
                if (this.autoStart && !this.running && this.start(), this.running) {
                    var e = void 0 !== r.performance && void 0 !== r.performance.now ? r.performance.now() : Date.now();
                    t = .001 * (e - this.oldTime), this.oldTime = e, this.elapsedTime += t
                }
                return t
            }
        }, n.EventDispatcher = function() {}, n.EventDispatcher.prototype = {
            constructor: n.EventDispatcher,
            apply: function(t) {
                t.addEventListener = n.EventDispatcher.prototype.addEventListener, t.hasEventListener = n.EventDispatcher.prototype.hasEventListener, t.removeEventListener = n.EventDispatcher.prototype.removeEventListener, t.dispatchEvent = n.EventDispatcher.prototype.dispatchEvent
            },
            addEventListener: function(t, e) {
                void 0 === this._listeners && (this._listeners = {});
                var i = this._listeners;
                void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
            },
            hasEventListener: function(t, e) {
                if (void 0 === this._listeners) return !1;
                var i = this._listeners;
                return void 0 !== i[t] && -1 !== i[t].indexOf(e) ? !0 : !1
            },
            removeEventListener: function(t, e) {
                if (void 0 !== this._listeners) {
                    var i = this._listeners,
                        r = i[t];
                    if (void 0 !== r) {
                        var n = r.indexOf(e); - 1 !== n && r.splice(n, 1)
                    }
                }
            },
            dispatchEvent: function(t) {
                if (void 0 !== this._listeners) {
                    var e = this._listeners,
                        i = e[t.type];
                    if (void 0 !== i) {
                        t.target = this;
                        for (var r = [], n = i.length, a = 0; n > a; a++) r[a] = i[a];
                        for (var a = 0; n > a; a++) r[a].call(this, t)
                    }
                }
            }
        },
        function(t) {
            function e(t, e) {
                return t.distance - e.distance
            }
            t.Raycaster = function(e, i, r, n) {
                this.ray = new t.Ray(e, i), this.near = r || 0, this.far = n || 1 / 0, this.params = {
                    Mesh: {},
                    Line: {},
                    LOD: {},
                    Points: {
                        threshold: 1
                    },
                    Sprite: {}
                }, Object.defineProperties(this.params, {
                    PointCloud: {
                        get: function() {
                            return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                        }
                    }
                })
            };
            var i = function(t, e, r, n) {
                if (t.visible !== !1 && (t.raycast(e, r), n === !0))
                    for (var a = t.children, o = 0, s = a.length; s > o; o++) i(a[o], e, r, !0)
            };
            t.Raycaster.prototype = {
                constructor: t.Raycaster,
                linePrecision: 1,
                set: function(t, e) {
                    this.ray.set(t, e)
                },
                setFromCamera: function(e, i) {
                    i instanceof t.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(i.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(i).sub(this.ray.origin).normalize()) : i instanceof t.OrthographicCamera ? (this.ray.origin.set(e.x, e.y, -1).unproject(i), this.ray.direction.set(0, 0, -1).transformDirection(i.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
                },
                intersectObject: function(t, r) {
                    var n = [];
                    return i(t, this, n, r), n.sort(e), n
                },
                intersectObjects: function(t, r) {
                    var n = [];
                    if (Array.isArray(t) === !1) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
                    for (var a = 0, o = t.length; o > a; a++) i(t[a], this, n, r);
                    return n.sort(e), n
                }
            }
        }(n), n.Object3D = function() {
            Object.defineProperty(this, "id", {
                value: n.Object3DIdCount++
            }), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = n.Object3D.DefaultUp.clone();
            var t = new n.Vector3,
                e = new n.Euler,
                i = new n.Quaternion,
                r = new n.Vector3(1, 1, 1),
                a = function() {
                    i.setFromEuler(e, !1)
                },
                o = function() {
                    e.setFromQuaternion(i, void 0, !1)
                };
            e.onChange(a), i.onChange(o), Object.defineProperties(this, {
                position: {
                    enumerable: !0,
                    value: t
                },
                rotation: {
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    enumerable: !0,
                    value: i
                },
                scale: {
                    enumerable: !0,
                    value: r
                },
                modelViewMatrix: {
                    value: new n.Matrix4
                },
                normalMatrix: {
                    value: new n.Matrix3
                }
            }), this.rotationAutoUpdate = !0, this.matrix = new n.Matrix4, this.matrixWorld = new n.Matrix4, this.matrixAutoUpdate = n.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
        }, n.Object3D.DefaultUp = new n.Vector3(0, 1, 0), n.Object3D.DefaultMatrixAutoUpdate = !0, n.Object3D.prototype = {
            constructor: n.Object3D,
            get eulerOrder() {
                return console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order
            },
            set eulerOrder(t) {
                console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order = t
            },
            get useQuaternion() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set useQuaternion(t) {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set renderDepth(t) {
                console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
            },
            applyMatrix: function(t) {
                this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
            },
            setRotationFromAxisAngle: function(t, e) {
                this.quaternion.setFromAxisAngle(t, e)
            },
            setRotationFromEuler: function(t) {
                this.quaternion.setFromEuler(t, !0)
            },
            setRotationFromMatrix: function(t) {
                this.quaternion.setFromRotationMatrix(t)
            },
            setRotationFromQuaternion: function(t) {
                this.quaternion.copy(t)
            },
            rotateOnAxis: function() {
                var t = new n.Quaternion;
                return function(e, i) {
                    return t.setFromAxisAngle(e, i), this.quaternion.multiply(t), this
                }
            }(),
            rotateX: function() {
                var t = new n.Vector3(1, 0, 0);
                return function(e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            rotateY: function() {
                var t = new n.Vector3(0, 1, 0);
                return function(e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            rotateZ: function() {
                var t = new n.Vector3(0, 0, 1);
                return function(e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            translateOnAxis: function() {
                var t = new n.Vector3;
                return function(e, i) {
                    return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this
                }
            }(),
            translate: function(t, e) {
                return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
            },
            translateX: function() {
                var t = new n.Vector3(1, 0, 0);
                return function(e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            translateY: function() {
                var t = new n.Vector3(0, 1, 0);
                return function(e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            translateZ: function() {
                var t = new n.Vector3(0, 0, 1);
                return function(e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            localToWorld: function(t) {
                return t.applyMatrix4(this.matrixWorld);
            },
            worldToLocal: function() {
                var t = new n.Matrix4;
                return function(e) {
                    return e.applyMatrix4(t.getInverse(this.matrixWorld))
                }
            }(),
            lookAt: function() {
                var t = new n.Matrix4;
                return function(e) {
                    t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
                }
            }(),
            add: function(t) {
                if (arguments.length > 1) {
                    for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                    return this
                }
                return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t instanceof n.Object3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
                    type: "added"
                }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
            },
            remove: function(t) {
                if (arguments.length > 1)
                    for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                var i = this.children.indexOf(t); - 1 !== i && (t.parent = null, t.dispatchEvent({
                    type: "removed"
                }), this.children.splice(i, 1))
            },
            getChildByName: function(t) {
                return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
            },
            getObjectById: function(t) {
                return this.getObjectByProperty("id", t)
            },
            getObjectByName: function(t) {
                return this.getObjectByProperty("name", t)
            },
            getObjectByProperty: function(t, e) {
                if (this[t] === e) return this;
                for (var i = 0, r = this.children.length; r > i; i++) {
                    var n = this.children[i],
                        a = n.getObjectByProperty(t, e);
                    if (void 0 !== a) return a
                }
                return void 0
            },
            getWorldPosition: function(t) {
                var e = t || new n.Vector3;
                return this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
            },
            getWorldQuaternion: function() {
                var t = new n.Vector3,
                    e = new n.Vector3;
                return function(i) {
                    var r = i || new n.Quaternion;
                    return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, r, e), r
                }
            }(),
            getWorldRotation: function() {
                var t = new n.Quaternion;
                return function(e) {
                    var i = e || new n.Euler;
                    return this.getWorldQuaternion(t), i.setFromQuaternion(t, this.rotation.order, !1)
                }
            }(),
            getWorldScale: function() {
                var t = new n.Vector3,
                    e = new n.Quaternion;
                return function(i) {
                    var r = i || new n.Vector3;
                    return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, r), r
                }
            }(),
            getWorldDirection: function() {
                var t = new n.Quaternion;
                return function(e) {
                    var i = e || new n.Vector3;
                    return this.getWorldQuaternion(t), i.set(0, 0, 1).applyQuaternion(t)
                }
            }(),
            raycast: function() {},
            traverse: function(t) {
                t(this);
                for (var e = this.children, i = 0, r = e.length; r > i; i++) e[i].traverse(t)
            },
            traverseVisible: function(t) {
                if (this.visible !== !1) {
                    t(this);
                    for (var e = this.children, i = 0, r = e.length; r > i; i++) e[i].traverseVisible(t)
                }
            },
            traverseAncestors: function(t) {
                var e = this.parent;
                null !== e && (t(e), e.traverseAncestors(t))
            },
            updateMatrix: function() {
                this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
            },
            updateMatrixWorld: function(t) {
                this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || t === !0) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
                for (var e = 0, i = this.children.length; i > e; e++) this.children[e].updateMatrixWorld(t)
            },
            toJSON: function(t) {
                function e(t) {
                    var e = [];
                    for (var i in t) {
                        var r = t[i];
                        delete r.metadata, e.push(r)
                    }
                    return e
                }
                var i = void 0 === t,
                    r = {};
                if (i && (t = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {}
                }, r.metadata = {
                    version: 4.4,
                    type: "Object",
                    generator: "Object3D.toJSON"
                }), r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData), this.visible !== !0 && (r.visible = this.visible), r.matrix = this.matrix.toArray(), this.children.length > 0) {
                    r.children = [];
                    for (var n = 0; n < this.children.length; n++) r.children.push(this.children[n].toJSON(t).object)
                }
                var a = {};
                if (i) {
                    var o = e(t.geometries),
                        s = e(t.materials),
                        h = e(t.textures),
                        l = e(t.images);
                    o.length > 0 && (a.geometries = o), s.length > 0 && (a.materials = s), h.length > 0 && (a.textures = h), l.length > 0 && (a.images = l)
                }
                return a.object = r, a
            },
            clone: function(t) {
                return (new this.constructor).copy(this, t)
            },
            copy: function(t, e) {
                if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.rotationAutoUpdate = t.rotationAutoUpdate, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
                    for (var i = 0; i < t.children.length; i++) {
                        var r = t.children[i];
                        this.add(r.clone())
                    }
                return this
            }
        }, n.EventDispatcher.prototype.apply(n.Object3D.prototype), n.Object3DIdCount = 0, n.Face3 = function(t, e, i, r, a, o) {
            this.a = t, this.b = e, this.c = i, this.normal = r instanceof n.Vector3 ? r : new n.Vector3, this.vertexNormals = Array.isArray(r) ? r : [], this.color = a instanceof n.Color ? a : new n.Color, this.vertexColors = Array.isArray(a) ? a : [], this.materialIndex = void 0 !== o ? o : 0
        }, n.Face3.prototype = {
            constructor: n.Face3,
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
                for (var e = 0, i = t.vertexNormals.length; i > e; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
                for (var e = 0, i = t.vertexColors.length; i > e; e++) this.vertexColors[e] = t.vertexColors[e].clone();
                return this
            }
        }, n.Face4 = function(t, e, i, r, a, o, s) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new n.Face3(t, e, i, a, o, s)
        }, n.BufferAttribute = function(t, e) {
            this.uuid = n.Math.generateUUID(), this.array = t, this.itemSize = e, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }, n.BufferAttribute.prototype = {
            constructor: n.BufferAttribute,
            get length() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
            },
            get count() {
                return this.array.length / this.itemSize
            },
            set needsUpdate(t) {
                t === !0 && this.version++
            },
            setDynamic: function(t) {
                return this.dynamic = t, this
            },
            copy: function(t) {
                return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.dynamic = t.dynamic, this
            },
            copyAt: function(t, e, i) {
                t *= this.itemSize, i *= e.itemSize;
                for (var r = 0, n = this.itemSize; n > r; r++) this.array[t + r] = e.array[i + r];
                return this
            },
            copyArray: function(t) {
                return this.array.set(t), this
            },
            copyColorsArray: function(t) {
                for (var e = this.array, i = 0, r = 0, a = t.length; a > r; r++) {
                    var o = t[r];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), o = new n.Color), e[i++] = o.r, e[i++] = o.g, e[i++] = o.b
                }
                return this
            },
            copyIndicesArray: function(t) {
                for (var e = this.array, i = 0, r = 0, n = t.length; n > r; r++) {
                    var a = t[r];
                    e[i++] = a.a, e[i++] = a.b, e[i++] = a.c
                }
                return this
            },
            copyVector2sArray: function(t) {
                for (var e = this.array, i = 0, r = 0, a = t.length; a > r; r++) {
                    var o = t[r];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), o = new n.Vector2), e[i++] = o.x, e[i++] = o.y
                }
                return this
            },
            copyVector3sArray: function(t) {
                for (var e = this.array, i = 0, r = 0, a = t.length; a > r; r++) {
                    var o = t[r];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), o = new n.Vector3), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z
                }
                return this
            },
            copyVector4sArray: function(t) {
                for (var e = this.array, i = 0, r = 0, a = t.length; a > r; r++) {
                    var o = t[r];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), o = new n.Vector4), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z, e[i++] = o.w
                }
                return this
            },
            set: function(t, e) {
                return void 0 === e && (e = 0), this.array.set(t, e), this
            },
            getX: function(t) {
                return this.array[t * this.itemSize]
            },
            setX: function(t, e) {
                return this.array[t * this.itemSize] = e, this
            },
            getY: function(t) {
                return this.array[t * this.itemSize + 1]
            },
            setY: function(t, e) {
                return this.array[t * this.itemSize + 1] = e, this
            },
            getZ: function(t) {
                return this.array[t * this.itemSize + 2]
            },
            setZ: function(t, e) {
                return this.array[t * this.itemSize + 2] = e, this
            },
            getW: function(t) {
                return this.array[t * this.itemSize + 3]
            },
            setW: function(t, e) {
                return this.array[t * this.itemSize + 3] = e, this
            },
            setXY: function(t, e, i) {
                return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
            },
            setXYZ: function(t, e, i, r) {
                return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = r, this
            },
            setXYZW: function(t, e, i, r, n) {
                return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = r, this.array[t + 3] = n, this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            }
        }, n.Int8Attribute = function(t, e) {
            return new n.BufferAttribute(new Int8Array(t), e)
        }, n.Uint8Attribute = function(t, e) {
            return new n.BufferAttribute(new Uint8Array(t), e)
        }, n.Uint8ClampedAttribute = function(t, e) {
            return new n.BufferAttribute(new Uint8ClampedArray(t), e)
        }, n.Int16Attribute = function(t, e) {
            return new n.BufferAttribute(new Int16Array(t), e)
        }, n.Uint16Attribute = function(t, e) {
            return new n.BufferAttribute(new Uint16Array(t), e)
        }, n.Int32Attribute = function(t, e) {
            return new n.BufferAttribute(new Int32Array(t), e)
        }, n.Uint32Attribute = function(t, e) {
            return new n.BufferAttribute(new Uint32Array(t), e)
        }, n.Float32Attribute = function(t, e) {
            return new n.BufferAttribute(new Float32Array(t), e)
        }, n.Float64Attribute = function(t, e) {
            return new n.BufferAttribute(new Float64Array(t), e)
        }, n.DynamicBufferAttribute = function(t, e) {
            return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new n.BufferAttribute(t, e).setDynamic(!0)
        }, n.InstancedBufferAttribute = function(t, e, i) {
            n.BufferAttribute.call(this, t, e), this.meshPerAttribute = i || 1
        }, n.InstancedBufferAttribute.prototype = Object.create(n.BufferAttribute.prototype), n.InstancedBufferAttribute.prototype.constructor = n.InstancedBufferAttribute, n.InstancedBufferAttribute.prototype.copy = function(t) {
            return n.BufferAttribute.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }, n.InterleavedBuffer = function(t, e) {
            this.uuid = n.Math.generateUUID(), this.array = t, this.stride = e, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }, n.InterleavedBuffer.prototype = {
            constructor: n.InterleavedBuffer,
            get length() {
                return this.array.length
            },
            get count() {
                return this.array.length / this.stride
            },
            set needsUpdate(t) {
                t === !0 && this.version++
            },
            setDynamic: function(t) {
                return this.dynamic = t, this
            },
            copy: function(t) {
                this.array = new t.array.constructor(t.array), this.stride = t.stride, this.dynamic = t.dynamic
            },
            copyAt: function(t, e, i) {
                t *= this.stride, i *= e.stride;
                for (var r = 0, n = this.stride; n > r; r++) this.array[t + r] = e.array[i + r];
                return this
            },
            set: function(t, e) {
                return void 0 === e && (e = 0), this.array.set(t, e), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            }
        }, n.InstancedInterleavedBuffer = function(t, e, i) {
            n.InterleavedBuffer.call(this, t, e), this.meshPerAttribute = i || 1
        }, n.InstancedInterleavedBuffer.prototype = Object.create(n.InterleavedBuffer.prototype), n.InstancedInterleavedBuffer.prototype.constructor = n.InstancedInterleavedBuffer, n.InstancedInterleavedBuffer.prototype.copy = function(t) {
            return n.InterleavedBuffer.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }, n.InterleavedBufferAttribute = function(t, e, i) {
            this.uuid = n.Math.generateUUID(), this.data = t, this.itemSize = e, this.offset = i
        }, n.InterleavedBufferAttribute.prototype = {
            constructor: n.InterleavedBufferAttribute,
            get length() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
            },
            get count() {
                return this.data.array.length / this.data.stride
            },
            setX: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset] = e, this
            },
            setY: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset + 1] = e, this
            },
            setZ: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset + 2] = e, this
            },
            setW: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset + 3] = e, this
            },
            getX: function(t) {
                return this.data.array[t * this.data.stride + this.offset]
            },
            getY: function(t) {
                return this.data.array[t * this.data.stride + this.offset + 1]
            },
            getZ: function(t) {
                return this.data.array[t * this.data.stride + this.offset + 2]
            },
            getW: function(t) {
                return this.data.array[t * this.data.stride + this.offset + 3]
            },
            setXY: function(t, e, i) {
                return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
            },
            setXYZ: function(t, e, i, r) {
                return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = r, this
            },
            setXYZW: function(t, e, i, r, n) {
                return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = r, this.data.array[t + 3] = n, this
            }
        }, n.Geometry = function() {
            Object.defineProperty(this, "id", {
                value: n.GeometryIdCount++
            }), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
        }, n.Geometry.prototype = {
            constructor: n.Geometry,
            applyMatrix: function(t) {
                for (var e = (new n.Matrix3).getNormalMatrix(t), i = 0, r = this.vertices.length; r > i; i++) {
                    var a = this.vertices[i];
                    a.applyMatrix4(t)
                }
                for (var i = 0, r = this.faces.length; r > i; i++) {
                    var o = this.faces[i];
                    o.normal.applyMatrix3(e).normalize();
                    for (var s = 0, h = o.vertexNormals.length; h > s; s++) o.vertexNormals[s].applyMatrix3(e).normalize()
                }
                null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0
            },
            rotateX: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Matrix4), t.makeRotationX(e), this.applyMatrix(t), this
                }
            }(),
            rotateY: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Matrix4), t.makeRotationY(e), this.applyMatrix(t), this
                }
            }(),
            rotateZ: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Matrix4), t.makeRotationZ(e), this.applyMatrix(t), this
                }
            }(),
            translate: function() {
                var t;
                return function(e, i, r) {
                    return void 0 === t && (t = new n.Matrix4), t.makeTranslation(e, i, r), this.applyMatrix(t), this
                }
            }(),
            scale: function() {
                var t;
                return function(e, i, r) {
                    return void 0 === t && (t = new n.Matrix4), t.makeScale(e, i, r), this.applyMatrix(t), this
                }
            }(),
            lookAt: function() {
                var t;
                return function(e) {
                    void 0 === t && (t = new n.Object3D), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
                }
            }(),
            fromBufferGeometry: function(t) {
                var e = this,
                    i = null !== t.index ? t.index.array : void 0,
                    r = t.attributes,
                    a = r.position.array,
                    o = void 0 !== r.normal ? r.normal.array : void 0,
                    s = void 0 !== r.color ? r.color.array : void 0,
                    h = void 0 !== r.uv ? r.uv.array : void 0,
                    l = void 0 !== r.uv2 ? r.uv2.array : void 0;
                void 0 !== l && (this.faceVertexUvs[1] = []);
                for (var c = [], u = [], p = [], d = 0, f = 0, m = 0; d < a.length; d += 3, f += 2, m += 4) e.vertices.push(new n.Vector3(a[d], a[d + 1], a[d + 2])), void 0 !== o && c.push(new n.Vector3(o[d], o[d + 1], o[d + 2])), void 0 !== s && e.colors.push(new n.Color(s[d], s[d + 1], s[d + 2])), void 0 !== h && u.push(new n.Vector2(h[f], h[f + 1])), void 0 !== l && p.push(new n.Vector2(l[f], l[f + 1]));
                var g = function(t, i, r) {
                    var a = void 0 !== o ? [c[t].clone(), c[i].clone(), c[r].clone()] : [],
                        d = void 0 !== s ? [e.colors[t].clone(), e.colors[i].clone(), e.colors[r].clone()] : [],
                        f = new n.Face3(t, i, r, a, d);
                    e.faces.push(f), void 0 !== h && e.faceVertexUvs[0].push([u[t].clone(), u[i].clone(), u[r].clone()]), void 0 !== l && e.faceVertexUvs[1].push([p[t].clone(), p[i].clone(), p[r].clone()])
                };
                if (void 0 !== i) {
                    var v = t.groups;
                    if (v.length > 0)
                        for (var d = 0; d < v.length; d++)
                            for (var y = v[d], _ = y.start, x = y.count, f = _, b = _ + x; b > f; f += 3) g(i[f], i[f + 1], i[f + 2]);
                    else
                        for (var d = 0; d < i.length; d += 3) g(i[d], i[d + 1], i[d + 2])
                } else
                    for (var d = 0; d < a.length / 3; d += 3) g(d, d + 1, d + 2);
                return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
            },
            center: function() {
                this.computeBoundingBox();
                var t = this.boundingBox.center().negate();
                return this.translate(t.x, t.y, t.z), t
            },
            normalize: function() {
                this.computeBoundingSphere();
                var t = this.boundingSphere.center,
                    e = this.boundingSphere.radius,
                    i = 0 === e ? 1 : 1 / e,
                    r = new n.Matrix4;
                return r.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(r), this
            },
            computeFaceNormals: function() {
                for (var t = new n.Vector3, e = new n.Vector3, i = 0, r = this.faces.length; r > i; i++) {
                    var a = this.faces[i],
                        o = this.vertices[a.a],
                        s = this.vertices[a.b],
                        h = this.vertices[a.c];
                    t.subVectors(h, s), e.subVectors(o, s), t.cross(e), t.normalize(), a.normal.copy(t)
                }
            },
            computeVertexNormals: function(t) {
                var e, i, r, a, o, s;
                for (s = new Array(this.vertices.length), e = 0, i = this.vertices.length; i > e; e++) s[e] = new n.Vector3;
                if (t) {
                    var h, l, c, u = new n.Vector3,
                        p = new n.Vector3;
                    for (r = 0, a = this.faces.length; a > r; r++) o = this.faces[r], h = this.vertices[o.a], l = this.vertices[o.b], c = this.vertices[o.c], u.subVectors(c, l), p.subVectors(h, l), u.cross(p), s[o.a].add(u), s[o.b].add(u), s[o.c].add(u)
                } else
                    for (r = 0, a = this.faces.length; a > r; r++) o = this.faces[r], s[o.a].add(o.normal), s[o.b].add(o.normal), s[o.c].add(o.normal);
                for (e = 0, i = this.vertices.length; i > e; e++) s[e].normalize();
                for (r = 0, a = this.faces.length; a > r; r++) {
                    o = this.faces[r];
                    var d = o.vertexNormals;
                    3 === d.length ? (d[0].copy(s[o.a]), d[1].copy(s[o.b]), d[2].copy(s[o.c])) : (d[0] = s[o.a].clone(), d[1] = s[o.b].clone(), d[2] = s[o.c].clone())
                }
            },
            computeMorphNormals: function() {
                var t, e, i, r, a;
                for (i = 0, r = this.faces.length; r > i; i++)
                    for (a = this.faces[i], a.__originalFaceNormal ? a.__originalFaceNormal.copy(a.normal) : a.__originalFaceNormal = a.normal.clone(), a.__originalVertexNormals || (a.__originalVertexNormals = []), t = 0, e = a.vertexNormals.length; e > t; t++) a.__originalVertexNormals[t] ? a.__originalVertexNormals[t].copy(a.vertexNormals[t]) : a.__originalVertexNormals[t] = a.vertexNormals[t].clone();
                var o = new n.Geometry;
                for (o.faces = this.faces, t = 0, e = this.morphTargets.length; e > t; t++) {
                    if (!this.morphNormals[t]) {
                        this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                        var s, h, l = this.morphNormals[t].faceNormals,
                            c = this.morphNormals[t].vertexNormals;
                        for (i = 0, r = this.faces.length; r > i; i++) s = new n.Vector3, h = {
                            a: new n.Vector3,
                            b: new n.Vector3,
                            c: new n.Vector3
                        }, l.push(s), c.push(h)
                    }
                    var u = this.morphNormals[t];
                    o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o.computeVertexNormals();
                    var s, h;
                    for (i = 0, r = this.faces.length; r > i; i++) a = this.faces[i], s = u.faceNormals[i], h = u.vertexNormals[i], s.copy(a.normal), h.a.copy(a.vertexNormals[0]), h.b.copy(a.vertexNormals[1]), h.c.copy(a.vertexNormals[2])
                }
                for (i = 0, r = this.faces.length; r > i; i++) a = this.faces[i], a.normal = a.__originalFaceNormal, a.vertexNormals = a.__originalVertexNormals
            },
            computeTangents: function() {
                console.warn("THREE.Geometry: .computeTangents() has been removed.")
            },
            computeLineDistances: function() {
                for (var t = 0, e = this.vertices, i = 0, r = e.length; r > i; i++) i > 0 && (t += e[i].distanceTo(e[i - 1])), this.lineDistances[i] = t
            },
            computeBoundingBox: function() {
                null === this.boundingBox && (this.boundingBox = new n.Box3), this.boundingBox.setFromPoints(this.vertices)
            },
            computeBoundingSphere: function() {
                null === this.boundingSphere && (this.boundingSphere = new n.Sphere), this.boundingSphere.setFromPoints(this.vertices)
            },
            merge: function(t, e, i) {
                if (t instanceof n.Geometry == !1) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
                var r, a = this.vertices.length,
                    o = this.vertices,
                    s = t.vertices,
                    h = this.faces,
                    l = t.faces,
                    c = this.faceVertexUvs[0],
                    u = t.faceVertexUvs[0];
                void 0 === i && (i = 0), void 0 !== e && (r = (new n.Matrix3).getNormalMatrix(e));
                for (var p = 0, d = s.length; d > p; p++) {
                    var f = s[p],
                        m = f.clone();
                    void 0 !== e && m.applyMatrix4(e), o.push(m)
                }
                for (p = 0, d = l.length; d > p; p++) {
                    var g, v, y, _ = l[p],
                        x = _.vertexNormals,
                        b = _.vertexColors;
                    g = new n.Face3(_.a + a, _.b + a, _.c + a), g.normal.copy(_.normal), void 0 !== r && g.normal.applyMatrix3(r).normalize();
                    for (var w = 0, M = x.length; M > w; w++) v = x[w].clone(), void 0 !== r && v.applyMatrix3(r).normalize(), g.vertexNormals.push(v);
                    g.color.copy(_.color);
                    for (var w = 0, M = b.length; M > w; w++) y = b[w], g.vertexColors.push(y.clone());
                    g.materialIndex = _.materialIndex + i, h.push(g)
                }
                for (p = 0, d = u.length; d > p; p++) {
                    var T = u[p],
                        S = [];
                    if (void 0 !== T) {
                        for (var w = 0, M = T.length; M > w; w++) S.push(T[w].clone());
                        c.push(S)
                    }
                }
            },
            mergeMesh: function(t) {
                return t instanceof n.Mesh == !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t) : (t.matrixAutoUpdate && t.updateMatrix(), void this.merge(t.geometry, t.matrix))
            },
            mergeVertices: function() {
                var t, e, i, r, n, a, o, s, h = {},
                    l = [],
                    c = [],
                    u = 4,
                    p = Math.pow(10, u);
                for (i = 0, r = this.vertices.length; r > i; i++) t = this.vertices[i], e = Math.round(t.x * p) + "_" + Math.round(t.y * p) + "_" + Math.round(t.z * p), void 0 === h[e] ? (h[e] = i, l.push(this.vertices[i]), c[i] = l.length - 1) : c[i] = c[h[e]];
                var d = [];
                for (i = 0, r = this.faces.length; r > i; i++) {
                    n = this.faces[i], n.a = c[n.a], n.b = c[n.b], n.c = c[n.c], a = [n.a, n.b, n.c];
                    for (var f = -1, m = 0; 3 > m; m++)
                        if (a[m] === a[(m + 1) % 3]) {
                            f = m, d.push(i);
                            break
                        }
                }
                for (i = d.length - 1; i >= 0; i--) {
                    var g = d[i];
                    for (this.faces.splice(g, 1), o = 0, s = this.faceVertexUvs.length; s > o; o++) this.faceVertexUvs[o].splice(g, 1)
                }
                var v = this.vertices.length - l.length;
                return this.vertices = l, v
            },
            toJSON: function() {
                function t(t, e, i) {
                    return i ? t | 1 << e : t & ~(1 << e)
                }

                function e(t) {
                    var e = t.x.toString() + t.y.toString() + t.z.toString();
                    return void 0 !== p[e] ? p[e] : (p[e] = u.length / 3, u.push(t.x, t.y, t.z), p[e])
                }

                function i(t) {
                    var e = t.r.toString() + t.g.toString() + t.b.toString();
                    return void 0 !== f[e] ? f[e] : (f[e] = d.length, d.push(t.getHex()), f[e])
                }

                function r(t) {
                    var e = t.x.toString() + t.y.toString();
                    return void 0 !== g[e] ? g[e] : (g[e] = m.length / 2, m.push(t.x, t.y), g[e])
                }
                var n = {
                    metadata: {
                        version: 4.4,
                        type: "Geometry",
                        generator: "Geometry.toJSON"
                    }
                };
                if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), void 0 !== this.parameters) {
                    var a = this.parameters;
                    for (var o in a) void 0 !== a[o] && (n[o] = a[o]);
                    return n
                }
                for (var s = [], h = 0; h < this.vertices.length; h++) {
                    var l = this.vertices[h];
                    s.push(l.x, l.y, l.z)
                }
                for (var c = [], u = [], p = {}, d = [], f = {}, m = [], g = {}, h = 0; h < this.faces.length; h++) {
                    var v = this.faces[h],
                        y = !1,
                        _ = !1,
                        x = void 0 !== this.faceVertexUvs[0][h],
                        b = v.normal.length() > 0,
                        w = v.vertexNormals.length > 0,
                        M = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b,
                        T = v.vertexColors.length > 0,
                        S = 0;
                    if (S = t(S, 0, 0), S = t(S, 1, y), S = t(S, 2, _), S = t(S, 3, x), S = t(S, 4, b), S = t(S, 5, w), S = t(S, 6, M), S = t(S, 7, T), c.push(S), c.push(v.a, v.b, v.c), x) {
                        var E = this.faceVertexUvs[0][h];
                        c.push(r(E[0]), r(E[1]), r(E[2]))
                    }
                    if (b && c.push(e(v.normal)), w) {
                        var A = v.vertexNormals;
                        c.push(e(A[0]), e(A[1]), e(A[2]))
                    }
                    if (M && c.push(i(v.color)), T) {
                        var C = v.vertexColors;
                        c.push(i(C[0]), i(C[1]), i(C[2]))
                    }
                }
                return n.data = {}, n.data.vertices = s, n.data.normals = u, d.length > 0 && (n.data.colors = d), m.length > 0 && (n.data.uvs = [m]), n.data.faces = c, n
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                this.vertices = [], this.faces = [], this.faceVertexUvs = [
                    []
                ];
                for (var e = t.vertices, i = 0, r = e.length; r > i; i++) this.vertices.push(e[i].clone());
                for (var n = t.faces, i = 0, r = n.length; r > i; i++) this.faces.push(n[i].clone());
                for (var i = 0, r = t.faceVertexUvs.length; r > i; i++) {
                    var a = t.faceVertexUvs[i];
                    void 0 === this.faceVertexUvs[i] && (this.faceVertexUvs[i] = []);
                    for (var o = 0, s = a.length; s > o; o++) {
                        for (var h = a[o], l = [], c = 0, u = h.length; u > c; c++) {
                            var p = h[c];
                            l.push(p.clone())
                        }
                        this.faceVertexUvs[i].push(l)
                    }
                }
                return this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, n.EventDispatcher.prototype.apply(n.Geometry.prototype), n.GeometryIdCount = 0, n.DirectGeometry = function() {
            Object.defineProperty(this, "id", {
                value: n.GeometryIdCount++
            }), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
        }, n.DirectGeometry.prototype = {
            constructor: n.DirectGeometry,
            computeBoundingBox: n.Geometry.prototype.computeBoundingBox,
            computeBoundingSphere: n.Geometry.prototype.computeBoundingSphere,
            computeFaceNormals: function() {
                console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
            },
            computeVertexNormals: function() {
                console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
            },
            computeGroups: function(t) {
                for (var e, i, r = [], n = t.faces, a = 0; a < n.length; a++) {
                    var o = n[a];
                    o.materialIndex !== i && (i = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, r.push(e)), e = {
                        start: 3 * a,
                        materialIndex: i
                    })
                }
                void 0 !== e && (e.count = 3 * a - e.start, r.push(e)), this.groups = r
            },
            fromGeometry: function(t) {
                var e = t.faces,
                    i = t.vertices,
                    r = t.faceVertexUvs,
                    a = r[0] && r[0].length > 0,
                    o = r[1] && r[1].length > 0,
                    s = t.morphTargets,
                    h = s.length;
                if (h > 0) {
                    for (var l = [], c = 0; h > c; c++) l[c] = [];
                    this.morphTargets.position = l
                }
                var u = t.morphNormals,
                    p = u.length;
                if (p > 0) {
                    for (var d = [], c = 0; p > c; c++) d[c] = [];
                    this.morphTargets.normal = d
                }
                for (var f = t.skinIndices, m = t.skinWeights, g = f.length === i.length, v = m.length === i.length, c = 0; c < e.length; c++) {
                    var y = e[c];
                    this.vertices.push(i[y.a], i[y.b], i[y.c]);
                    var _ = y.vertexNormals;
                    if (3 === _.length) this.normals.push(_[0], _[1], _[2]);
                    else {
                        var x = y.normal;
                        this.normals.push(x, x, x)
                    }
                    var b = y.vertexColors;
                    if (3 === b.length) this.colors.push(b[0], b[1], b[2]);
                    else {
                        var w = y.color;
                        this.colors.push(w, w, w)
                    }
                    if (a === !0) {
                        var M = r[0][c];
                        void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new n.Vector2, new n.Vector2, new n.Vector2))
                    }
                    if (o === !0) {
                        var M = r[1][c];
                        void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new n.Vector2, new n.Vector2, new n.Vector2))
                    }
                    for (var T = 0; h > T; T++) {
                        var S = s[T].vertices;
                        l[T].push(S[y.a], S[y.b], S[y.c])
                    }
                    for (var T = 0; p > T; T++) {
                        var E = u[T].vertexNormals[c];
                        d[T].push(E.a, E.b, E.c)
                    }
                    g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
                }
                return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, n.EventDispatcher.prototype.apply(n.DirectGeometry.prototype), n.BufferGeometry = function() {
            Object.defineProperty(this, "id", {
                value: n.GeometryIdCount++
            }), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }
        }, n.BufferGeometry.prototype = {
            constructor: n.BufferGeometry,
            addIndex: function(t) {
                console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
            },
            getIndex: function() {
                return this.index
            },
            setIndex: function(t) {
                this.index = t
            },
            addAttribute: function(t, e) {
                return e instanceof n.BufferAttribute == !1 && e instanceof n.InterleavedBufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(t, new n.BufferAttribute(arguments[1], arguments[2]))) : ("index" === t && (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e)), void(this.attributes[t] = e))
            },
            getAttribute: function(t) {
                return this.attributes[t]
            },
            removeAttribute: function(t) {
                delete this.attributes[t]
            },
            get drawcalls() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            },
            get offsets() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            },
            addDrawCall: function(t, e, i) {
                void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
            },
            clearDrawCalls: function() {
                console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
            },
            addGroup: function(t, e, i) {
                this.groups.push({
                    start: t,
                    count: e,
                    materialIndex: void 0 !== i ? i : 0
                })
            },
            clearGroups: function() {
                this.groups = []
            },
            setDrawRange: function(t, e) {
                this.drawRange.start = t, this.drawRange.count = e
            },
            applyMatrix: function(t) {
                var e = this.attributes.position;
                void 0 !== e && (t.applyToVector3Array(e.array), e.needsUpdate = !0);
                var i = this.attributes.normal;
                if (void 0 !== i) {
                    var r = (new n.Matrix3).getNormalMatrix(t);
                    r.applyToVector3Array(i.array), i.needsUpdate = !0
                }
                null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere()
            },
            rotateX: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Matrix4), t.makeRotationX(e), this.applyMatrix(t), this
                }
            }(),
            rotateY: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Matrix4), t.makeRotationY(e), this.applyMatrix(t), this
                }
            }(),
            rotateZ: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new n.Matrix4), t.makeRotationZ(e), this.applyMatrix(t), this
                }
            }(),
            translate: function() {
                var t;
                return function(e, i, r) {
                    return void 0 === t && (t = new n.Matrix4), t.makeTranslation(e, i, r), this.applyMatrix(t), this
                }
            }(),
            scale: function() {
                var t;
                return function(e, i, r) {
                    return void 0 === t && (t = new n.Matrix4), t.makeScale(e, i, r), this.applyMatrix(t), this
                }
            }(),
            lookAt: function() {
                var t;
                return function(e) {
                    void 0 === t && (t = new n.Object3D), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
                }
            }(),
            center: function() {
                this.computeBoundingBox();
                var t = this.boundingBox.center().negate();
                return this.translate(t.x, t.y, t.z), t
            },
            setFromObject: function(t) {
                var e = t.geometry;
                if (t instanceof n.Points || t instanceof n.Line) {
                    var i = new n.Float32Attribute(3 * e.vertices.length, 3),
                        r = new n.Float32Attribute(3 * e.colors.length, 3);
                    if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", r.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                        var a = new n.Float32Attribute(e.lineDistances.length, 1);
                        this.addAttribute("lineDistance", a.copyArray(e.lineDistances))
                    }
                    null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
                } else t instanceof n.Mesh && e instanceof n.Geometry && this.fromGeometry(e);
                return this
            },
            updateFromObject: function(t) {
                var e = t.geometry;
                if (t instanceof n.Mesh) {
                    var i = e.__directGeometry;
                    if (void 0 === i) return this.fromGeometry(e);
                    i.verticesNeedUpdate = e.verticesNeedUpdate, i.normalsNeedUpdate = e.normalsNeedUpdate, i.colorsNeedUpdate = e.colorsNeedUpdate, i.uvsNeedUpdate = e.uvsNeedUpdate, i.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = i
                }
                if (e.verticesNeedUpdate === !0) {
                    var r = this.attributes.position;
                    void 0 !== r && (r.copyVector3sArray(e.vertices), r.needsUpdate = !0), e.verticesNeedUpdate = !1
                }
                if (e.normalsNeedUpdate === !0) {
                    var r = this.attributes.normal;
                    void 0 !== r && (r.copyVector3sArray(e.normals), r.needsUpdate = !0), e.normalsNeedUpdate = !1
                }
                if (e.colorsNeedUpdate === !0) {
                    var r = this.attributes.color;
                    void 0 !== r && (r.copyColorsArray(e.colors), r.needsUpdate = !0), e.colorsNeedUpdate = !1
                }
                if (e.lineDistancesNeedUpdate) {
                    var r = this.attributes.lineDistance;
                    void 0 !== r && (r.copyArray(e.lineDistances), r.needsUpdate = !0), e.lineDistancesNeedUpdate = !1
                }
                return e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
            },
            fromGeometry: function(t) {
                return t.__directGeometry = (new n.DirectGeometry).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
            },
            fromDirectGeometry: function(t) {
                var e = new Float32Array(3 * t.vertices.length);
                if (this.addAttribute("position", new n.BufferAttribute(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                    var i = new Float32Array(3 * t.normals.length);
                    this.addAttribute("normal", new n.BufferAttribute(i, 3).copyVector3sArray(t.normals))
                }
                if (t.colors.length > 0) {
                    var r = new Float32Array(3 * t.colors.length);
                    this.addAttribute("color", new n.BufferAttribute(r, 3).copyColorsArray(t.colors))
                }
                if (t.uvs.length > 0) {
                    var a = new Float32Array(2 * t.uvs.length);
                    this.addAttribute("uv", new n.BufferAttribute(a, 2).copyVector2sArray(t.uvs))
                }
                if (t.uvs2.length > 0) {
                    var o = new Float32Array(2 * t.uvs2.length);
                    this.addAttribute("uv2", new n.BufferAttribute(o, 2).copyVector2sArray(t.uvs2))
                }
                if (t.indices.length > 0) {
                    var s = t.vertices.length > 65535 ? Uint32Array : Uint16Array,
                        h = new s(3 * t.indices.length);
                    this.setIndex(new n.BufferAttribute(h, 1).copyIndicesArray(t.indices))
                }
                this.groups = t.groups;
                for (var l in t.morphTargets) {
                    for (var c = [], u = t.morphTargets[l], p = 0, d = u.length; d > p; p++) {
                        var f = u[p],
                            m = new n.Float32Attribute(3 * f.length, 3);
                        c.push(m.copyVector3sArray(f))
                    }
                    this.morphAttributes[l] = c
                }
                if (t.skinIndices.length > 0) {
                    var g = new n.Float32Attribute(4 * t.skinIndices.length, 4);
                    this.addAttribute("skinIndex", g.copyVector4sArray(t.skinIndices))
                }
                if (t.skinWeights.length > 0) {
                    var v = new n.Float32Attribute(4 * t.skinWeights.length, 4);
                    this.addAttribute("skinWeight", v.copyVector4sArray(t.skinWeights))
                }
                return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
            },
            computeBoundingBox: function() {
                var t = new n.Vector3;
                return function() {
                    null === this.boundingBox && (this.boundingBox = new n.Box3);
                    var e = this.attributes.position.array;
                    if (e) {
                        var i = this.boundingBox;
                        i.makeEmpty();
                        for (var r = 0, a = e.length; a > r; r += 3) t.fromArray(e, r), i.expandByPoint(t)
                    }(void 0 === e || 0 === e.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
                }
            }(),
            computeBoundingSphere: function() {
                var t = new n.Box3,
                    e = new n.Vector3;
                return function() {
                    null === this.boundingSphere && (this.boundingSphere = new n.Sphere);
                    var i = this.attributes.position.array;
                    if (i) {
                        t.makeEmpty();
                        for (var r = this.boundingSphere.center, a = 0, o = i.length; o > a; a += 3) e.fromArray(i, a), t.expandByPoint(e);
                        t.center(r);
                        for (var s = 0, a = 0, o = i.length; o > a; a += 3) e.fromArray(i, a), s = Math.max(s, r.distanceToSquared(e));
                        this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                    }
                }
            }(),
            computeFaceNormals: function() {},
            computeVertexNormals: function() {
                var t = this.index,
                    e = this.attributes,
                    i = this.groups;
                if (e.position) {
                    var r = e.position.array;
                    if (void 0 === e.normal) this.addAttribute("normal", new n.BufferAttribute(new Float32Array(r.length), 3));
                    else
                        for (var a = e.normal.array, o = 0, s = a.length; s > o; o++) a[o] = 0;
                    var h, l, c, a = e.normal.array,
                        u = new n.Vector3,
                        p = new n.Vector3,
                        d = new n.Vector3,
                        f = new n.Vector3,
                        m = new n.Vector3;
                    if (t) {
                        var g = t.array;
                        0 === i.length && this.addGroup(0, g.length);
                        for (var v = 0, y = i.length; y > v; ++v)
                            for (var _ = i[v], x = _.start, b = _.count, o = x, s = x + b; s > o; o += 3) h = 3 * g[o + 0], l = 3 * g[o + 1], c = 3 * g[o + 2], u.fromArray(r, h), p.fromArray(r, l), d.fromArray(r, c), f.subVectors(d, p), m.subVectors(u, p), f.cross(m), a[h] += f.x, a[h + 1] += f.y, a[h + 2] += f.z, a[l] += f.x, a[l + 1] += f.y, a[l + 2] += f.z, a[c] += f.x, a[c + 1] += f.y, a[c + 2] += f.z
                    } else
                        for (var o = 0, s = r.length; s > o; o += 9) u.fromArray(r, o), p.fromArray(r, o + 3), d.fromArray(r, o + 6), f.subVectors(d, p), m.subVectors(u, p), f.cross(m), a[o] = f.x, a[o + 1] = f.y, a[o + 2] = f.z, a[o + 3] = f.x, a[o + 4] = f.y, a[o + 5] = f.z, a[o + 6] = f.x, a[o + 7] = f.y, a[o + 8] = f.z;
                    this.normalizeNormals(), e.normal.needsUpdate = !0
                }
            },
            computeTangents: function() {
                console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
            },
            computeOffsets: function(t) {
                console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
            },
            merge: function(t, e) {
                if (t instanceof n.BufferGeometry == !1) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
                void 0 === e && (e = 0);
                var i = this.attributes;
                for (var r in i)
                    if (void 0 !== t.attributes[r])
                        for (var a = i[r], o = a.array, s = t.attributes[r], h = s.array, l = s.itemSize, c = 0, u = l * e; c < h.length; c++, u++) o[u] = h[c];
                return this
            },
            normalizeNormals: function() {
                for (var t, e, i, r, n = this.attributes.normal.array, a = 0, o = n.length; o > a; a += 3) t = n[a], e = n[a + 1], i = n[a + 2], r = 1 / Math.sqrt(t * t + e * e + i * i), n[a] *= r, n[a + 1] *= r, n[a + 2] *= r
            },
            toJSON: function() {
                var t = {
                    metadata: {
                        version: 4.4,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                    var e = this.parameters;
                    for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                    return t
                }
                t.data = {
                    attributes: {}
                };
                var r = this.index;
                if (null !== r) {
                    var n = Array.prototype.slice.call(r.array);
                    t.data.index = {
                        type: r.array.constructor.name,
                        array: n
                    }
                }
                var a = this.attributes;
                for (var i in a) {
                    var o = a[i],
                        n = Array.prototype.slice.call(o.array);
                    t.data.attributes[i] = {
                        itemSize: o.itemSize,
                        type: o.array.constructor.name,
                        array: n
                    }
                }
                var s = this.groups;
                s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
                var h = this.boundingSphere;
                return null !== h && (t.data.boundingSphere = {
                    center: h.center.toArray(),
                    radius: h.radius
                }), t
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                var e = t.index;
                null !== e && this.setIndex(e.clone());
                var i = t.attributes;
                for (var r in i) {
                    var n = i[r];
                    this.addAttribute(r, n.clone())
                }
                for (var a = t.groups, o = 0, s = a.length; s > o; o++) {
                    var h = a[o];
                    this.addGroup(h.start, h.count)
                }
                return this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, n.EventDispatcher.prototype.apply(n.BufferGeometry.prototype), n.BufferGeometry.MaxIndex = 65535, n.InstancedBufferGeometry = function() {
            n.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
        }, n.InstancedBufferGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.InstancedBufferGeometry.prototype.constructor = n.InstancedBufferGeometry, n.InstancedBufferGeometry.prototype.addGroup = function(t, e, i) {
            this.groups.push({
                start: t,
                count: e,
                instances: i
            })
        }, n.InstancedBufferGeometry.prototype.copy = function(t) {
            var e = t.index;
            null !== e && this.setIndex(e.clone());
            var i = t.attributes;
            for (var r in i) {
                var n = i[r];
                this.addAttribute(r, n.clone())
            }
            for (var a = t.groups, o = 0, s = a.length; s > o; o++) {
                var h = a[o];
                this.addGroup(h.start, h.count, h.instances)
            }
            return this
        }, n.EventDispatcher.prototype.apply(n.InstancedBufferGeometry.prototype), n.Camera = function() {
            n.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new n.Matrix4, this.projectionMatrix = new n.Matrix4
        }, n.Camera.prototype = Object.create(n.Object3D.prototype), n.Camera.prototype.constructor = n.Camera, n.Camera.prototype.getWorldDirection = function() {
            var t = new n.Quaternion;
            return function(e) {
                var i = e || new n.Vector3;
                return this.getWorldQuaternion(t), i.set(0, 0, -1).applyQuaternion(t)
            }
        }(), n.Camera.prototype.lookAt = function() {
            var t = new n.Matrix4;
            return function(e) {
                t.lookAt(this.position, e, this.up), this.quaternion.setFromRotationMatrix(t)
            }
        }(), n.Camera.prototype.clone = function() {
            return (new this.constructor).copy(this)
        }, n.Camera.prototype.copy = function(t) {
            return n.Object3D.prototype.copy.call(this, t), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
        }, n.CubeCamera = function(t, e, i) {
            n.Object3D.call(this), this.type = "CubeCamera";
            var r = 90,
                a = 1,
                o = new n.PerspectiveCamera(r, a, t, e);
            o.up.set(0, -1, 0), o.lookAt(new n.Vector3(1, 0, 0)), this.add(o);
            var s = new n.PerspectiveCamera(r, a, t, e);
            s.up.set(0, -1, 0), s.lookAt(new n.Vector3(-1, 0, 0)), this.add(s);
            var h = new n.PerspectiveCamera(r, a, t, e);
            h.up.set(0, 0, 1), h.lookAt(new n.Vector3(0, 1, 0)), this.add(h);
            var l = new n.PerspectiveCamera(r, a, t, e);
            l.up.set(0, 0, -1), l.lookAt(new n.Vector3(0, -1, 0)), this.add(l);
            var c = new n.PerspectiveCamera(r, a, t, e);
            c.up.set(0, -1, 0), c.lookAt(new n.Vector3(0, 0, 1)), this.add(c);
            var u = new n.PerspectiveCamera(r, a, t, e);
            u.up.set(0, -1, 0), u.lookAt(new n.Vector3(0, 0, -1)), this.add(u), this.renderTarget = new n.WebGLRenderTargetCube(i, i, {
                format: n.RGBFormat,
                magFilter: n.LinearFilter,
                minFilter: n.LinearFilter
            }), this.updateCubeMap = function(t, e) {
                null === this.parent && this.updateMatrixWorld();
                var i = this.renderTarget,
                    r = i.generateMipmaps;
                i.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, o, i), i.activeCubeFace = 1, t.render(e, s, i), i.activeCubeFace = 2, t.render(e, h, i), i.activeCubeFace = 3, t.render(e, l, i), i.activeCubeFace = 4, t.render(e, c, i), i.generateMipmaps = r, i.activeCubeFace = 5, t.render(e, u, i), t.setRenderTarget(null)
            }
        }, n.CubeCamera.prototype = Object.create(n.Object3D.prototype), n.CubeCamera.prototype.constructor = n.CubeCamera, n.OrthographicCamera = function(t, e, i, r, a, o) {
            n.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.left = t, this.right = e, this.top = i, this.bottom = r, this.near = void 0 !== a ? a : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
        }, n.OrthographicCamera.prototype = Object.create(n.Camera.prototype), n.OrthographicCamera.prototype.constructor = n.OrthographicCamera, n.OrthographicCamera.prototype.updateProjectionMatrix = function() {
            var t = (this.right - this.left) / (2 * this.zoom),
                e = (this.top - this.bottom) / (2 * this.zoom),
                i = (this.right + this.left) / 2,
                r = (this.top + this.bottom) / 2;
            this.projectionMatrix.makeOrthographic(i - t, i + t, r + e, r - e, this.near, this.far)
        }, n.OrthographicCamera.prototype.copy = function(t) {
            return n.Camera.prototype.copy.call(this, t), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this
        }, n.OrthographicCamera.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, e
        }, n.PerspectiveCamera = function(t, e, i, r) {
            n.Camera.call(this), this.type = "PerspectiveCamera", this.zoom = 1, this.fov = void 0 !== t ? t : 50, this.aspect = void 0 !== e ? e : 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== r ? r : 2e3, this.updateProjectionMatrix()
        }, n.PerspectiveCamera.prototype = Object.create(n.Camera.prototype), n.PerspectiveCamera.prototype.constructor = n.PerspectiveCamera, n.PerspectiveCamera.prototype.setLens = function(t, e) {
            void 0 === e && (e = 24), this.fov = 2 * n.Math.radToDeg(Math.atan(e / (2 * t))), this.updateProjectionMatrix()
        }, n.PerspectiveCamera.prototype.setViewOffset = function(t, e, i, r, n, a) {
            this.fullWidth = t, this.fullHeight = e, this.x = i, this.y = r, this.width = n, this.height = a, this.updateProjectionMatrix()
        }, n.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
            var t = n.Math.radToDeg(2 * Math.atan(Math.tan(.5 * n.Math.degToRad(this.fov)) / this.zoom));
            if (this.fullWidth) {
                var e = this.fullWidth / this.fullHeight,
                    i = Math.tan(n.Math.degToRad(.5 * t)) * this.near,
                    r = -i,
                    a = e * r,
                    o = e * i,
                    s = Math.abs(o - a),
                    h = Math.abs(i - r);
                this.projectionMatrix.makeFrustum(a + this.x * s / this.fullWidth, a + (this.x + this.width) * s / this.fullWidth, i - (this.y + this.height) * h / this.fullHeight, i - this.y * h / this.fullHeight, this.near, this.far)
            } else this.projectionMatrix.makePerspective(t, this.aspect, this.near, this.far)
        }, n.PerspectiveCamera.prototype.copy = function(t) {
            return n.Camera.prototype.copy.call(this, t), this.fov = t.fov, this.aspect = t.aspect, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this
        }, n.PerspectiveCamera.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom, e.object.fov = this.fov, e.object.aspect = this.aspect, e.object.near = this.near, e.object.far = this.far, e
        }, n.Light = function(t) {
            n.Object3D.call(this), this.type = "Light", this.color = new n.Color(t)
        }, n.Light.prototype = Object.create(n.Object3D.prototype), n.Light.prototype.constructor = n.Light, n.Light.prototype.copy = function(t) {
            return n.Object3D.prototype.copy.call(this, t), this.color.copy(t.color), this
        }, n.AmbientLight = function(t) {
            n.Light.call(this, t), this.type = "AmbientLight"
        }, n.AmbientLight.prototype = Object.create(n.Light.prototype), n.AmbientLight.prototype.constructor = n.AmbientLight, n.AmbientLight.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e
        }, n.DirectionalLight = function(t, e) {
            n.Light.call(this, t), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new n.Object3D, this.intensity = void 0 !== e ? e : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
        }, n.DirectionalLight.prototype = Object.create(n.Light.prototype), n.DirectionalLight.prototype.constructor = n.DirectionalLight, n.DirectionalLight.prototype.copy = function(t) {
            return n.Light.prototype.copy.call(this, t), this.intensity = t.intensity, this.target = t.target.clone(), this.castShadow = t.castShadow, this.onlyShadow = t.onlyShadow, this.shadowCameraNear = t.shadowCameraNear, this.shadowCameraFar = t.shadowCameraFar, this.shadowCameraLeft = t.shadowCameraLeft, this.shadowCameraRight = t.shadowCameraRight, this.shadowCameraTop = t.shadowCameraTop, this.shadowCameraBottom = t.shadowCameraBottom, this.shadowCameraVisible = t.shadowCameraVisible, this.shadowBias = t.shadowBias, this.shadowDarkness = t.shadowDarkness, this.shadowMapWidth = t.shadowMapWidth, this.shadowMapHeight = t.shadowMapHeight, this
        }, n.DirectionalLight.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, e
        }, n.HemisphereLight = function(t, e, i) {
            n.Light.call(this, t), this.type = "HemisphereLight", this.position.set(0, 1, 0), this.updateMatrix(), this.groundColor = new n.Color(e), this.intensity = void 0 !== i ? i : 1
        }, n.HemisphereLight.prototype = Object.create(n.Light.prototype), n.HemisphereLight.prototype.constructor = n.HemisphereLight, n.HemisphereLight.prototype.copy = function(t) {
            return n.Light.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this.intensity = t.intensity, this
        }, n.HemisphereLight.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.groundColor = this.groundColor.getHex(), e.object.intensity = this.intensity, e
        }, n.PointLight = function(t, e, i, r) {
            n.Light.call(this, t), this.type = "PointLight", this.intensity = void 0 !== e ? e : 1, this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== r ? r : 1
        }, n.PointLight.prototype = Object.create(n.Light.prototype), n.PointLight.prototype.constructor = n.PointLight, n.PointLight.prototype.copy = function(t) {
            return n.Light.prototype.copy.call(this, t), this.intensity = t.intensity, this.distance = t.distance, this.decay = t.decay, this
        }, n.PointLight.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, e.object.distance = this.distance, e.object.decay = this.decay, e
        }, n.SpotLight = function(t, e, i, r, a, o) {
            n.Light.call(this, t), this.type = "SpotLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new n.Object3D, this.intensity = void 0 !== e ? e : 1, this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.exponent = void 0 !== a ? a : 10, this.decay = void 0 !== o ? o : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
        }, n.SpotLight.prototype = Object.create(n.Light.prototype), n.SpotLight.prototype.constructor = n.SpotLight, n.SpotLight.prototype.copy = function(t) {
            return n.Light.prototype.copy.call(this, t), this.intensity = t.intensity, this.distance = t.distance, this.angle = t.angle, this.exponent = t.exponent, this.decay = t.decay, this.target = t.target.clone(), this.castShadow = t.castShadow, this.onlyShadow = t.onlyShadow, this.shadowCameraNear = t.shadowCameraNear, this.shadowCameraFar = t.shadowCameraFar, this.shadowCameraFov = t.shadowCameraFov, this.shadowCameraVisible = t.shadowCameraVisible, this.shadowBias = t.shadowBias, this.shadowDarkness = t.shadowDarkness, this.shadowMapWidth = t.shadowMapWidth, this.shadowMapHeight = t.shadowMapHeight, this
        }, n.SpotLight.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, e.object.distance = this.distance, e.object.angle = this.angle, e.object.exponent = this.exponent, e.object.decay = this.decay, e
        }, n.Cache = {
            enabled: !1,
            files: {},
            add: function(t, e) {
                this.enabled !== !1 && (this.files[t] = e)
            },
            get: function(t) {
                return this.enabled !== !1 ? this.files[t] : void 0
            },
            remove: function(t) {
                delete this.files[t]
            },
            clear: function() {
                this.files = {}
            }
        }, n.Loader = function() {
            this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
        }, n.Loader.prototype = {
            constructor: n.Loader,
            crossOrigin: void 0,
            extractUrlBase: function(t) {
                var e = t.split("/");
                return 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
            },
            initMaterials: function(t, e, i) {
                for (var r = [], n = 0; n < t.length; ++n) r[n] = this.createMaterial(t[n], e, i);
                return r
            },
            createMaterial: function() {
                var t;
                return function(e, i, r) {
                    function a(t) {
                        var e = Math.log(t) / Math.LN2;
                        return Math.pow(2, Math.round(e))
                    }

                    function o(e, o, s, h, l, c, u) {
                        var p, d = i + s,
                            f = n.Loader.Handlers.get(d);
                        if (null !== f ? p = f.load(d) : (p = new n.Texture, f = t, f.setCrossOrigin(r), f.load(d, function(t) {
                            if (n.Math.isPowerOfTwo(t.width) === !1 || n.Math.isPowerOfTwo(t.height) === !1) {
                                var e = a(t.width),
                                    i = a(t.height),
                                    r = document.createElement("canvas");
                                r.width = e, r.height = i;
                                var o = r.getContext("2d");
                                o.drawImage(t, 0, 0, e, i), p.image = r
                            } else p.image = t;
                            p.needsUpdate = !0
                        })), p.sourceFile = s, h && (p.repeat.set(h[0], h[1]), 1 !== h[0] && (p.wrapS = n.RepeatWrapping), 1 !== h[1] && (p.wrapT = n.RepeatWrapping)), l && p.offset.set(l[0], l[1]), c) {
                            var m = {
                                repeat: n.RepeatWrapping,
                                mirror: n.MirroredRepeatWrapping
                            };
                            void 0 !== m[c[0]] && (p.wrapS = m[c[0]]), void 0 !== m[c[1]] && (p.wrapT = m[c[1]])
                        }
                        u && (p.anisotropy = u), e[o] = p
                    }

                    function s(t) {
                        return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
                    }
                    var h = this;
                    void 0 === r && void 0 !== h.crossOrigin && (r = h.crossOrigin), void 0 === t && (t = new n.ImageLoader);
                    var l = "MeshLambertMaterial",
                        c = {};
                    if (e.shading) {
                        var u = e.shading.toLowerCase();
                        "phong" === u ? l = "MeshPhongMaterial" : "basic" === u && (l = "MeshBasicMaterial")
                    }
                    void 0 !== e.blending && void 0 !== n[e.blending] && (c.blending = n[e.blending]), void 0 !== e.transparent && (c.transparent = e.transparent), void 0 !== e.opacity && e.opacity < 1 && (c.transparent = !0), void 0 !== e.depthTest && (c.depthTest = e.depthTest), void 0 !== e.depthWrite && (c.depthWrite = e.depthWrite), void 0 !== e.visible && (c.visible = e.visible), void 0 !== e.flipSided && (c.side = n.BackSide), void 0 !== e.doubleSided && (c.side = n.DoubleSide), void 0 !== e.wireframe && (c.wireframe = e.wireframe), void 0 !== e.vertexColors && ("face" === e.vertexColors ? c.vertexColors = n.FaceColors : e.vertexColors && (c.vertexColors = n.VertexColors)), e.colorDiffuse ? c.color = s(e.colorDiffuse) : e.DbgColor && (c.color = e.DbgColor), e.colorEmissive && (c.emissive = s(e.colorEmissive)), "MeshPhongMaterial" === l && (e.colorSpecular && (c.specular = s(e.colorSpecular)), e.specularCoef && (c.shininess = e.specularCoef)), void 0 !== e.transparency && (console.warn("THREE.Loader: transparency has been renamed to opacity"), e.opacity = e.transparency), void 0 !== e.opacity && (c.opacity = e.opacity), i && (e.mapDiffuse && o(c, "map", e.mapDiffuse, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy), e.mapLight && o(c, "lightMap", e.mapLight, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy), e.mapAO && o(c, "aoMap", e.mapAO, e.mapAORepeat, e.mapAOOffset, e.mapAOWrap, e.mapAOAnisotropy), e.mapBump && o(c, "bumpMap", e.mapBump, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy), e.mapNormal && o(c, "normalMap", e.mapNormal, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy), e.mapSpecular && o(c, "specularMap", e.mapSpecular, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy), e.mapAlpha && o(c, "alphaMap", e.mapAlpha, e.mapAlphaRepeat, e.mapAlphaOffset, e.mapAlphaWrap, e.mapAlphaAnisotropy)), e.mapBumpScale && (c.bumpScale = e.mapBumpScale), e.mapNormalFactor && (c.normalScale = new n.Vector2(e.mapNormalFactor, e.mapNormalFactor));
                    var p = new n[l](c);
                    return void 0 !== e.DbgName && (p.name = e.DbgName), p
                }
            }()
        }, n.Loader.Handlers = {
            handlers: [],
            add: function(t, e) {
                this.handlers.push(t, e)
            },
            get: function(t) {
                for (var e = 0, i = this.handlers.length; i > e; e += 2) {
                    var r = this.handlers[e],
                        n = this.handlers[e + 1];
                    if (r.test(t)) return n
                }
                return null
            }
        }, n.XHRLoader = function(t) {
            this.manager = void 0 !== t ? t : n.DefaultLoadingManager
        }, n.XHRLoader.prototype = {
            constructor: n.XHRLoader,
            load: function(t, e, i, r) {
                var a = this,
                    o = n.Cache.get(t);
                if (void 0 !== o) return e && setTimeout(function() {
                    e(o)
                }, 0), o;
                var s = new XMLHttpRequest;
                return s.open("GET", t, !0), s.addEventListener("load", function(i) {
                    n.Cache.add(t, this.response), e && e(this.response), a.manager.itemEnd(t)
                }, !1), void 0 !== i && s.addEventListener("progress", function(t) {
                    i(t)
                }, !1), s.addEventListener("error", function(e) {
                    r && r(e), a.manager.itemError(t)
                }, !1), void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (s.responseType = this.responseType), void 0 !== this.withCredentials && (s.withCredentials = this.withCredentials), s.send(null), a.manager.itemStart(t), s
            },
            setResponseType: function(t) {
                this.responseType = t
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            },
            setWithCredentials: function(t) {
                this.withCredentials = t
            }
        }, n.ImageLoader = function(t) {
            this.manager = void 0 !== t ? t : n.DefaultLoadingManager
        }, n.ImageLoader.prototype = {
            constructor: n.ImageLoader,
            load: function(t, e, i, r) {
                var a = this,
                    o = n.Cache.get(t);
                if (void 0 !== o) return e && setTimeout(function() {
                    e(o)
                }, 0), o;
                var s = document.createElement("img");
                return s.addEventListener("load", function(i) {
                    n.Cache.add(t, this), e && e(this), a.manager.itemEnd(t)
                }, !1), void 0 !== i && s.addEventListener("progress", function(t) {
                    i(t)
                }, !1), s.addEventListener("error", function(e) {
                    r && r(e), a.manager.itemError(t)
                }, !1), void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), a.manager.itemStart(t), s.src = t, s
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            }
        }, n.JSONLoader = function(t) {
            "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : n.DefaultLoadingManager, this.withCredentials = !1
        }, n.JSONLoader.prototype = {
            constructor: n.JSONLoader,
            get statusDomElement() {
                return void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div")), console.warn("THREE.JSONLoader: .statusDomElement has been removed."), this._statusDomElement
            },
            load: function(t, e, i, r) {
                var a = this,
                    o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : n.Loader.prototype.extractUrlBase(t),
                    s = new n.XHRLoader(this.manager);
                s.setCrossOrigin(this.crossOrigin), s.setWithCredentials(this.withCredentials), s.load(t, function(i) {
                    var r = JSON.parse(i),
                        n = r.metadata;
                    if (void 0 !== n) {
                        if ("object" === n.type) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === n.type) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.SceneLoader instead.")
                    }
                    var s = a.parse(r, o);
                    e(s.geometry, s.materials)
                })
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            },
            setTexturePath: function(t) {
                this.texturePath = t
            },
            parse: function(t, e) {
                function i(e) {
                    function i(t, e) {
                        return t & 1 << e
                    }
                    var r, a, s, h, l, c, u, p, d, f, m, g, v, y, _, x, b, w, M, T, S, E, A, C, P, L, R, D = t.faces,
                        F = t.vertices,
                        O = t.normals,
                        k = t.colors,
                        U = 0;
                    if (void 0 !== t.uvs) {
                        for (r = 0; r < t.uvs.length; r++) t.uvs[r].length && U++;
                        for (r = 0; U > r; r++) o.faceVertexUvs[r] = []
                    }
                    for (h = 0, l = F.length; l > h;) w = new n.Vector3, w.x = F[h++] * e, w.y = F[h++] * e, w.z = F[h++] * e, o.vertices.push(w);
                    for (h = 0, l = D.length; l > h;)
                        if (f = D[h++], m = i(f, 0), g = i(f, 1), v = i(f, 3), y = i(f, 4), _ = i(f, 5), x = i(f, 6), b = i(f, 7), m) {
                            if (T = new n.Face3, T.a = D[h], T.b = D[h + 1], T.c = D[h + 3], S = new n.Face3, S.a = D[h + 1], S.b = D[h + 2], S.c = D[h + 3], h += 4, g && (d = D[h++], T.materialIndex = d, S.materialIndex = d), s = o.faces.length, v)
                                for (r = 0; U > r; r++)
                                    for (C = t.uvs[r], o.faceVertexUvs[r][s] = [], o.faceVertexUvs[r][s + 1] = [], a = 0; 4 > a; a++) p = D[h++], L = C[2 * p], R = C[2 * p + 1], P = new n.Vector2(L, R), 2 !== a && o.faceVertexUvs[r][s].push(P), 0 !== a && o.faceVertexUvs[r][s + 1].push(P);
                            if (y && (u = 3 * D[h++], T.normal.set(O[u++], O[u++], O[u]), S.normal.copy(T.normal)), _)
                                for (r = 0; 4 > r; r++) u = 3 * D[h++], A = new n.Vector3(O[u++], O[u++], O[u]), 2 !== r && T.vertexNormals.push(A), 0 !== r && S.vertexNormals.push(A);
                            if (x && (c = D[h++], E = k[c], T.color.setHex(E), S.color.setHex(E)), b)
                                for (r = 0; 4 > r; r++) c = D[h++], E = k[c], 2 !== r && T.vertexColors.push(new n.Color(E)), 0 !== r && S.vertexColors.push(new n.Color(E));
                            o.faces.push(T), o.faces.push(S)
                        } else {
                            if (M = new n.Face3, M.a = D[h++], M.b = D[h++], M.c = D[h++], g && (d = D[h++], M.materialIndex = d), s = o.faces.length, v)
                                for (r = 0; U > r; r++)
                                    for (C = t.uvs[r], o.faceVertexUvs[r][s] = [], a = 0; 3 > a; a++) p = D[h++], L = C[2 * p], R = C[2 * p + 1], P = new n.Vector2(L, R), o.faceVertexUvs[r][s].push(P);
                            if (y && (u = 3 * D[h++], M.normal.set(O[u++], O[u++], O[u])), _)
                                for (r = 0; 3 > r; r++) u = 3 * D[h++], A = new n.Vector3(O[u++], O[u++], O[u]), M.vertexNormals.push(A);
                            if (x && (c = D[h++], M.color.setHex(k[c])), b)
                                for (r = 0; 3 > r; r++) c = D[h++], M.vertexColors.push(new n.Color(k[c]));
                            o.faces.push(M)
                        }
                }

                function r() {
                    var e = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                    if (t.skinWeights)
                        for (var i = 0, r = t.skinWeights.length; r > i; i += e) {
                            var a = t.skinWeights[i],
                                s = e > 1 ? t.skinWeights[i + 1] : 0,
                                h = e > 2 ? t.skinWeights[i + 2] : 0,
                                l = e > 3 ? t.skinWeights[i + 3] : 0;
                            o.skinWeights.push(new n.Vector4(a, s, h, l))
                        }
                    if (t.skinIndices)
                        for (var i = 0, r = t.skinIndices.length; r > i; i += e) {
                            var c = t.skinIndices[i],
                                u = e > 1 ? t.skinIndices[i + 1] : 0,
                                p = e > 2 ? t.skinIndices[i + 2] : 0,
                                d = e > 3 ? t.skinIndices[i + 3] : 0;
                            o.skinIndices.push(new n.Vector4(c, u, p, d))
                        }
                    o.bones = t.bones, o.bones && o.bones.length > 0 && (o.skinWeights.length !== o.skinIndices.length || o.skinIndices.length !== o.vertices.length) && console.warn("When skinning, number of vertices (" + o.vertices.length + "), skinIndices (" + o.skinIndices.length + "), and skinWeights (" + o.skinWeights.length + ") should match."), o.animation = t.animation, o.animations = t.animations
                }

                function a(e) {
                    if (void 0 !== t.morphTargets) {
                        var i, r, a, s, h, l;
                        for (i = 0, r = t.morphTargets.length; r > i; i++)
                            for (o.morphTargets[i] = {}, o.morphTargets[i].name = t.morphTargets[i].name, o.morphTargets[i].vertices = [], h = o.morphTargets[i].vertices, l = t.morphTargets[i].vertices, a = 0, s = l.length; s > a; a += 3) {
                                var c = new n.Vector3;
                                c.x = l[a] * e, c.y = l[a + 1] * e, c.z = l[a + 2] * e, h.push(c)
                            }
                    }
                    if (void 0 !== t.morphColors) {
                        var i, r, u, p, d, f, m;
                        for (i = 0, r = t.morphColors.length; r > i; i++)
                            for (o.morphColors[i] = {}, o.morphColors[i].name = t.morphColors[i].name, o.morphColors[i].colors = [], d = o.morphColors[i].colors, f = t.morphColors[i].colors, u = 0, p = f.length; p > u; u += 3) m = new n.Color(16755200), m.setRGB(f[u], f[u + 1], f[u + 2]), d.push(m)
                    }
                }
                var o = new n.Geometry,
                    s = void 0 !== t.scale ? 1 / t.scale : 1;
                if (i(s), r(), a(s), o.computeFaceNormals(), o.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length) return {
                    geometry: o
                };
                var h = n.Loader.prototype.initMaterials(t.materials, e, this.crossOrigin);
                return {
                    geometry: o,
                    materials: h
                }
            }
        }, n.LoadingManager = function(t, e, i) {
            var r = this,
                n = !1,
                a = 0,
                o = 0;
            this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
                o++, n === !1 && void 0 !== r.onStart && r.onStart(t, a, o), n = !0
            }, this.itemEnd = function(t) {
                a++, void 0 !== r.onProgress && r.onProgress(t, a, o), a === o && (n = !1, void 0 !== r.onLoad && r.onLoad())
            }, this.itemError = function(t) {
                void 0 !== r.onError && r.onError(t)
            }
        }, n.DefaultLoadingManager = new n.LoadingManager, n.BufferGeometryLoader = function(t) {
            this.manager = void 0 !== t ? t : n.DefaultLoadingManager
        }, n.BufferGeometryLoader.prototype = {
            constructor: n.BufferGeometryLoader,
            load: function(t, e, i, r) {
                var a = this,
                    o = new n.XHRLoader(a.manager);
                o.setCrossOrigin(this.crossOrigin), o.load(t, function(t) {
                    e(a.parse(JSON.parse(t)))
                }, i, r)
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            },
            parse: function(t) {
                var e = new n.BufferGeometry,
                    i = t.data.index;
                if (void 0 !== i) {
                    var a = new r[i.type](i.array);
                    e.setIndex(new n.BufferAttribute(a, 1))
                }
                var o = t.data.attributes;
                for (var s in o) {
                    var h = o[s],
                        a = new r[h.type](h.array);
                    e.addAttribute(s, new n.BufferAttribute(a, h.itemSize))
                }
                var l = t.data.groups || t.data.drawcalls || t.data.offsets;
                if (void 0 !== l)
                    for (var c = 0, u = l.length; c !== u; ++c) {
                        var p = l[c];
                        e.addGroup(p.start, p.count)
                    }
                var d = t.data.boundingSphere;
                if (void 0 !== d) {
                    var f = new n.Vector3;
                    void 0 !== d.center && f.fromArray(d.center), e.boundingSphere = new n.Sphere(f, d.radius)
                }
                return e
            }
        }, n.MaterialLoader = function(t) {
            this.manager = void 0 !== t ? t : n.DefaultLoadingManager, this.textures = {}
        }, n.MaterialLoader.prototype = {
            constructor: n.MaterialLoader,
            load: function(t, e, i, r) {
                var a = this,
                    o = new n.XHRLoader(a.manager);
                o.setCrossOrigin(this.crossOrigin), o.load(t, function(t) {
                    e(a.parse(JSON.parse(t)))
                }, i, r)
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            },
            setTextures: function(t) {
                this.textures = t
            },
            getTexture: function(t) {
                var e = this.textures;
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
            },
            parse: function(t) {
                var e = new n[t.type];
                if (e.uuid = t.uuid, void 0 !== t.name && (e.name = t.name), void 0 !== t.color && e.color.setHex(t.color), void 0 !== t.emissive && e.emissive.setHex(t.emissive), void 0 !== t.specular && e.specular.setHex(t.specular), void 0 !== t.shininess && (e.shininess = t.shininess), void 0 !== t.uniforms && (e.uniforms = t.uniforms), void 0 !== t.vertexShader && (e.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (e.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (e.vertexColors = t.vertexColors), void 0 !== t.shading && (e.shading = t.shading), void 0 !== t.blending && (e.blending = t.blending), void 0 !== t.side && (e.side = t.side), void 0 !== t.opacity && (e.opacity = t.opacity), void 0 !== t.transparent && (e.transparent = t.transparent), void 0 !== t.alphaTest && (e.alphaTest = t.alphaTest), void 0 !== t.depthTest && (e.depthTest = t.depthTest), void 0 !== t.depthWrite && (e.depthWrite = t.depthWrite), void 0 !== t.wireframe && (e.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (e.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.size && (e.size = t.size), void 0 !== t.sizeAttenuation && (e.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (e.map = this.getTexture(t.map)), void 0 !== t.alphaMap && (e.alphaMap = this.getTexture(t.alphaMap), e.transparent = !0), void 0 !== t.bumpMap && (e.bumpMap = this.getTexture(t.bumpMap)), void 0 !== t.bumpScale && (e.bumpScale = t.bumpScale), void 0 !== t.normalMap && (e.normalMap = this.getTexture(t.normalMap)), t.normalScale && (e.normalScale = new n.Vector2(t.normalScale, t.normalScale)), void 0 !== t.displacementMap && (e.displacementMap = this.getTexture(t.displacementMap)), void 0 !== t.displacementScale && (e.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (e.displacementBias = t.displacementBias), void 0 !== t.specularMap && (e.specularMap = this.getTexture(t.specularMap)), void 0 !== t.envMap && (e.envMap = this.getTexture(t.envMap), e.combine = n.MultiplyOperation), t.reflectivity && (e.reflectivity = t.reflectivity), void 0 !== t.lightMap && (e.lightMap = this.getTexture(t.lightMap)), void 0 !== t.lightMapIntensity && (e.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (e.aoMap = this.getTexture(t.aoMap)), void 0 !== t.aoMapIntensity && (e.aoMapIntensity = t.aoMapIntensity), void 0 !== t.materials)
                    for (var i = 0, r = t.materials.length; r > i; i++) e.materials.push(this.parse(t.materials[i]));
                return e
            }
        }, n.ObjectLoader = function(t) {
            this.manager = void 0 !== t ? t : n.DefaultLoadingManager, this.texturePath = ""
        }, n.ObjectLoader.prototype = {
            constructor: n.ObjectLoader,
            load: function(t, e, i, r) {
                "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
                var a = this,
                    o = new n.XHRLoader(a.manager);
                o.setCrossOrigin(this.crossOrigin), o.load(t, function(t) {
                    a.parse(JSON.parse(t), e)
                }, i, r)
            },
            setTexturePath: function(t) {
                this.texturePath = t
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            },
            parse: function(t, e) {
                var i = this.parseGeometries(t.geometries),
                    r = this.parseImages(t.images, function() {
                        void 0 !== e && e(o)
                    }),
                    n = this.parseTextures(t.textures, r),
                    a = this.parseMaterials(t.materials, n),
                    o = this.parseObject(t.object, i, a);
                return (void 0 === t.images || 0 === t.images.length) && void 0 !== e && e(o), o
            },
            parseGeometries: function(t) {
                var e = {};
                if (void 0 !== t)
                    for (var i = new n.JSONLoader, r = new n.BufferGeometryLoader, a = 0, o = t.length; o > a; a++) {
                        var s, h = t[a];
                        switch (h.type) {
                            case "PlaneGeometry":
                            case "PlaneBufferGeometry":
                                s = new n[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
                                break;
                            case "BoxGeometry":
                            case "CubeGeometry":
                                s = new n.BoxGeometry(h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                                break;
                            case "CircleBufferGeometry":
                                s = new n.CircleBufferGeometry(h.radius, h.segments, h.thetaStart, h.thetaLength);
                                break;
                            case "CircleGeometry":
                                s = new n.CircleGeometry(h.radius, h.segments, h.thetaStart, h.thetaLength);
                                break;
                            case "CylinderGeometry":
                                s = new n.CylinderGeometry(h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                                break;
                            case "SphereGeometry":
                                s = new n.SphereGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                                break;
                            case "SphereBufferGeometry":
                                s = new n.SphereBufferGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                                break;
                            case "DodecahedronGeometry":
                                s = new n.DodecahedronGeometry(h.radius, h.detail);
                                break;
                            case "IcosahedronGeometry":
                                s = new n.IcosahedronGeometry(h.radius, h.detail);
                                break;
                            case "OctahedronGeometry":
                                s = new n.OctahedronGeometry(h.radius, h.detail);
                                break;
                            case "TetrahedronGeometry":
                                s = new n.TetrahedronGeometry(h.radius, h.detail);
                                break;
                            case "RingGeometry":
                                s = new n.RingGeometry(h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments, h.thetaStart, h.thetaLength);
                                break;
                            case "TorusGeometry":
                                s = new n.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                                break;
                            case "TorusKnotGeometry":
                                s = new n.TorusKnotGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.p, h.q, h.heightScale);
                                break;
                            case "TextGeometry":
                                s = new n.TextGeometry(h.text, h.data);
                                break;
                            case "BufferGeometry":
                                s = r.parse(h);
                                break;
                            case "Geometry":
                                s = i.parse(h.data, this.texturePath).geometry;
                                break;
                            default:
                                console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
                                continue
                        }
                        s.uuid = h.uuid, void 0 !== h.name && (s.name = h.name), e[h.uuid] = s
                    }
                return e
            },
            parseMaterials: function(t, e) {
                var i = {};
                if (void 0 !== t) {
                    var r = new n.MaterialLoader;
                    r.setTextures(e);
                    for (var a = 0, o = t.length; o > a; a++) {
                        var s = r.parse(t[a]);
                        i[s.uuid] = s
                    }
                }
                return i
            },
            parseImages: function(t, e) {
                function i(t) {
                    return r.manager.itemStart(t), s.load(t, function() {
                        r.manager.itemEnd(t)
                    })
                }
                var r = this,
                    a = {};
                if (void 0 !== t && t.length > 0) {
                    var o = new n.LoadingManager(e),
                        s = new n.ImageLoader(o);
                    s.setCrossOrigin(this.crossOrigin);
                    for (var h = 0, l = t.length; l > h; h++) {
                        var c = t[h],
                            u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : r.texturePath + c.url;
                        a[c.uuid] = i(u)
                    }
                }
                return a
            },
            parseTextures: function(t, e) {
                function i(t) {
                    return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), n[t])
                }
                var r = {};
                if (void 0 !== t)
                    for (var a = 0, o = t.length; o > a; a++) {
                        var s = t[a];
                        void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                        var h = new n.Texture(e[s.image]);
                        h.needsUpdate = !0, h.uuid = s.uuid, void 0 !== s.name && (h.name = s.name), void 0 !== s.mapping && (h.mapping = i(s.mapping)), void 0 !== s.offset && (h.offset = new n.Vector2(s.offset[0], s.offset[1])), void 0 !== s.repeat && (h.repeat = new n.Vector2(s.repeat[0], s.repeat[1])), void 0 !== s.minFilter && (h.minFilter = i(s.minFilter)), void 0 !== s.magFilter && (h.magFilter = i(s.magFilter)), void 0 !== s.anisotropy && (h.anisotropy = s.anisotropy), Array.isArray(s.wrap) && (h.wrapS = i(s.wrap[0]), h.wrapT = i(s.wrap[1])), r[s.uuid] = h
                    }
                return r
            },
            parseObject: function() {
                var t = new n.Matrix4;
                return function(e, i, r) {
                    var a, o = function(t) {
                            return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), i[t]
                        },
                        s = function(t) {
                            return void 0 === r[t] && console.warn("THREE.ObjectLoader: Undefined material", t), r[t]
                        };
                    switch (e.type) {
                        case "Scene":
                            a = new n.Scene;
                            break;
                        case "PerspectiveCamera":
                            a = new n.PerspectiveCamera(e.fov, e.aspect, e.near, e.far);
                            break;
                        case "OrthographicCamera":
                            a = new n.OrthographicCamera(e.left, e.right, e.top, e.bottom, e.near, e.far);
                            break;
                        case "AmbientLight":
                            a = new n.AmbientLight(e.color);
                            break;
                        case "DirectionalLight":
                            a = new n.DirectionalLight(e.color, e.intensity);
                            break;
                        case "PointLight":
                            a = new n.PointLight(e.color, e.intensity, e.distance, e.decay);
                            break;
                        case "SpotLight":
                            a = new n.SpotLight(e.color, e.intensity, e.distance, e.angle, e.exponent, e.decay);
                            break;
                        case "HemisphereLight":
                            a = new n.HemisphereLight(e.color, e.groundColor, e.intensity);
                            break;
                        case "Mesh":
                            a = new n.Mesh(o(e.geometry), s(e.material));
                            break;
                        case "LOD":
                            a = new n.LOD;
                            break;
                        case "Line":
                            a = new n.Line(o(e.geometry), s(e.material), e.mode);
                            break;
                        case "PointCloud":
                        case "Points":
                            a = new n.Points(o(e.geometry), s(e.material));
                            break;
                        case "Sprite":
                            a = new n.Sprite(s(e.material));
                            break;
                        case "Group":
                            a = new n.Group;
                            break;
                        default:
                            a = new n.Object3D
                    }
                    if (a.uuid = e.uuid, void 0 !== e.name && (a.name = e.name), void 0 !== e.matrix ? (t.fromArray(e.matrix), t.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== e.position && a.position.fromArray(e.position), void 0 !== e.rotation && a.rotation.fromArray(e.rotation), void 0 !== e.scale && a.scale.fromArray(e.scale)), void 0 !== e.castShadow && (a.castShadow = e.castShadow), void 0 !== e.receiveShadow && (a.receiveShadow = e.receiveShadow), void 0 !== e.visible && (a.visible = e.visible), void 0 !== e.userData && (a.userData = e.userData), void 0 !== e.children)
                        for (var h in e.children) a.add(this.parseObject(e.children[h], i, r));
                    if ("LOD" === e.type)
                        for (var l = e.levels, c = 0; c < l.length; c++) {
                            var u = l[c],
                                h = a.getObjectByProperty("uuid", u.object);
                            void 0 !== h && a.addLevel(h, u.distance)
                        }
                    return a
                }
            }()
        }, n.TextureLoader = function(t) {
            this.manager = void 0 !== t ? t : n.DefaultLoadingManager
        }, n.TextureLoader.prototype = {
            constructor: n.TextureLoader,
            load: function(t, e, i, r) {
                var a = this,
                    o = new n.ImageLoader(a.manager);
                o.setCrossOrigin(this.crossOrigin), o.load(t, function(t) {
                    var i = new n.Texture(t);
                    i.needsUpdate = !0, void 0 !== e && e(i)
                }, i, r)
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            }
        }, n.DataTextureLoader = n.BinaryTextureLoader = function(t) {
            this.manager = void 0 !== t ? t : n.DefaultLoadingManager, this._parser = null
        }, n.BinaryTextureLoader.prototype = {
            constructor: n.BinaryTextureLoader,
            load: function(t, e, i, r) {
                var a = this,
                    o = new n.DataTexture,
                    s = new n.XHRLoader(this.manager);
                return s.setCrossOrigin(this.crossOrigin), s.setResponseType("arraybuffer"), s.load(t, function(t) {
                    var i = a._parser(t);
                    i && (void 0 !== i.image ? o.image = i.image : void 0 !== i.data && (o.image.width = i.width, o.image.height = i.height, o.image.data = i.data), o.wrapS = void 0 !== i.wrapS ? i.wrapS : n.ClampToEdgeWrapping, o.wrapT = void 0 !== i.wrapT ? i.wrapT : n.ClampToEdgeWrapping, o.magFilter = void 0 !== i.magFilter ? i.magFilter : n.LinearFilter, o.minFilter = void 0 !== i.minFilter ? i.minFilter : n.LinearMipMapLinearFilter, o.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (o.format = i.format), void 0 !== i.type && (o.type = i.type), void 0 !== i.mipmaps && (o.mipmaps = i.mipmaps), 1 === i.mipmapCount && (o.minFilter = n.LinearFilter), o.needsUpdate = !0, e && e(o, i))
                }, i, r), o
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            }
        }, n.CompressedTextureLoader = function(t) {
            this.manager = void 0 !== t ? t : n.DefaultLoadingManager, this._parser = null
        }, n.CompressedTextureLoader.prototype = {
            constructor: n.CompressedTextureLoader,
            load: function(t, e, i, r) {
                var a = this,
                    o = [],
                    s = new n.CompressedTexture;
                s.image = o;
                var h = new n.XHRLoader(this.manager);
                if (h.setCrossOrigin(this.crossOrigin), h.setResponseType("arraybuffer"), Array.isArray(t))
                    for (var l = 0, c = function(c) {
                        h.load(t[c], function(t) {
                            var i = a._parser(t, !0);
                            o[c] = {
                                width: i.width,
                                height: i.height,
                                format: i.format,
                                mipmaps: i.mipmaps
                            }, l += 1, 6 === l && (1 === i.mipmapCount && (s.minFilter = n.LinearFilter), s.format = i.format, s.needsUpdate = !0, e && e(s))
                        }, i, r)
                    }, u = 0, p = t.length; p > u; ++u) c(u);
                else h.load(t, function(t) {
                    var i = a._parser(t, !0);
                    if (i.isCubemap)
                        for (var r = i.mipmaps.length / i.mipmapCount, h = 0; r > h; h++) {
                            o[h] = {
                                mipmaps: []
                            };
                            for (var l = 0; l < i.mipmapCount; l++) o[h].mipmaps.push(i.mipmaps[h * i.mipmapCount + l]), o[h].format = i.format, o[h].width = i.width, o[h].height = i.height
                        } else s.image.width = i.width, s.image.height = i.height, s.mipmaps = i.mipmaps;
                    1 === i.mipmapCount && (s.minFilter = n.LinearFilter), s.format = i.format, s.needsUpdate = !0, e && e(s)
                }, i, r);
                return s
            },
            setCrossOrigin: function(t) {
                this.crossOrigin = t
            }
        }, n.Material = function() {
            Object.defineProperty(this, "id", {
                value: n.MaterialIdCount++
            }), this.uuid = n.Math.generateUUID(), this.name = "", this.type = "Material", this.side = n.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = n.NormalBlending, this.blendSrc = n.SrcAlphaFactor, this.blendDst = n.OneMinusSrcAlphaFactor, this.blendEquation = n.AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = n.LessEqualDepth, this.depthTest = !0, this.depthWrite = !0, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
        }, n.Material.prototype = {
            constructor: n.Material,
            get needsUpdate() {
                return this._needsUpdate
            },
            set needsUpdate(t) {
                t === !0 && this.update(), this._needsUpdate = t
            },
            setValues: function(t) {
                if (void 0 !== t)
                    for (var e in t) {
                        var i = t[e];
                        if (void 0 !== i) {
                            var r = this[e];
                            void 0 !== r ? r instanceof n.Color ? r.set(i) : r instanceof n.Vector3 && i instanceof n.Vector3 ? r.copy(i) : "overdraw" === e ? this[e] = Number(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                        } else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                    }
            },
            toJSON: function(t) {
                var e = {
                    metadata: {
                        version: 4.4,
                        type: "Material",
                        generator: "Material.toJSON"
                    }
                };
                return e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), this.color instanceof n.Color && (e.color = this.color.getHex()), this.emissive instanceof n.Color && (e.emissive = this.emissive.getHex()), this.specular instanceof n.Color && (e.specular = this.specular.getHex()), void 0 !== this.shininess && (e.shininess = this.shininess), this.map instanceof n.Texture && (e.map = this.map.toJSON(t).uuid), this.alphaMap instanceof n.Texture && (e.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap instanceof n.Texture && (e.lightMap = this.lightMap.toJSON(t).uuid), this.bumpMap instanceof n.Texture && (e.bumpMap = this.bumpMap.toJSON(t).uuid, e.bumpScale = this.bumpScale), this.normalMap instanceof n.Texture && (e.normalMap = this.normalMap.toJSON(t).uuid, e.normalScale = this.normalScale), this.displacementMap instanceof n.Texture && (e.displacementMap = this.displacementMap.toJSON(t).uuid, e.displacementScale = this.displacementScale, e.displacementBias = this.displacementBias), this.specularMap instanceof n.Texture && (e.specularMap = this.specularMap.toJSON(t).uuid), this.envMap instanceof n.Texture && (e.envMap = this.envMap.toJSON(t).uuid, e.reflectivity = this.reflectivity), void 0 !== this.size && (e.size = this.size), void 0 !== this.sizeAttenuation && (e.sizeAttenuation = this.sizeAttenuation), void 0 !== this.vertexColors && this.vertexColors !== n.NoColors && (e.vertexColors = this.vertexColors), void 0 !== this.shading && this.shading !== n.SmoothShading && (e.shading = this.shading), void 0 !== this.blending && this.blending !== n.NormalBlending && (e.blending = this.blending), void 0 !== this.side && this.side !== n.FrontSide && (e.side = this.side), this.opacity < 1 && (e.opacity = this.opacity), this.transparent === !0 && (e.transparent = this.transparent), this.alphaTest > 0 && (e.alphaTest = this.alphaTest), this.wireframe === !0 && (e.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (e.wireframeLinewidth = this.wireframeLinewidth), e
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.name = t.name, this.side = t.side, this.opacity = t.opacity, this.transparent = t.transparent, this.blending = t.blending, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.alphaTest = t.alphaTest, this.overdraw = t.overdraw, this.visible = t.visible, this
            },
            update: function() {
                this.dispatchEvent({
                    type: "update"
                })
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            },
            get wrapAround() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            },
            set wrapAround(t) {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            },
            get wrapRGB() {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new n.Color
            }
        }, n.EventDispatcher.prototype.apply(n.Material.prototype), n.MaterialIdCount = 0, n.LineBasicMaterial = function(t) {
            n.Material.call(this), this.type = "LineBasicMaterial", this.color = new n.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = n.NoColors, this.fog = !0, this.setValues(t)
        }, n.LineBasicMaterial.prototype = Object.create(n.Material.prototype), n.LineBasicMaterial.prototype.constructor = n.LineBasicMaterial, n.LineBasicMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.vertexColors = t.vertexColors, this.fog = t.fog, this
        }, n.LineDashedMaterial = function(t) {
            n.Material.call(this), this.type = "LineDashedMaterial", this.color = new n.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(t)
        }, n.LineDashedMaterial.prototype = Object.create(n.Material.prototype), n.LineDashedMaterial.prototype.constructor = n.LineDashedMaterial, n.LineDashedMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this.vertexColors = t.vertexColors, this.fog = t.fog, this
        }, n.MeshBasicMaterial = function(t) {
            n.Material.call(this), this.type = "MeshBasicMaterial", this.color = new n.Color(16777215), this.map = null, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(t)
        }, n.MeshBasicMaterial.prototype = Object.create(n.Material.prototype), n.MeshBasicMaterial.prototype.constructor = n.MeshBasicMaterial, n.MeshBasicMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
        }, n.MeshLambertMaterial = function(t) {
            n.Material.call(this), this.type = "MeshLambertMaterial", this.color = new n.Color(16777215), this.emissive = new n.Color(0), this.map = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
        }, n.MeshLambertMaterial.prototype = Object.create(n.Material.prototype), n.MeshLambertMaterial.prototype.constructor = n.MeshLambertMaterial, n.MeshLambertMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.emissive.copy(t.emissive), this.map = t.map, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
        }, n.MeshPhongMaterial = function(t) {
            n.Material.call(this), this.type = "MeshPhongMaterial", this.color = new n.Color(16777215), this.emissive = new n.Color(0), this.specular = new n.Color(1118481), this.shininess = 30, this.metal = !1, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
        }, n.MeshPhongMaterial.prototype = Object.create(n.Material.prototype), n.MeshPhongMaterial.prototype.constructor = n.MeshPhongMaterial, n.MeshPhongMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.emissive.copy(t.emissive), this.specular.copy(t.specular), this.shininess = t.shininess, this.metal = t.metal, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissiveMap = t.emissiveMap, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.fog = t.fog, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
        }, n.MeshDepthMaterial = function(t) {
            n.Material.call(this), this.type = "MeshDepthMaterial", this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
        }, n.MeshDepthMaterial.prototype = Object.create(n.Material.prototype), n.MeshDepthMaterial.prototype.constructor = n.MeshDepthMaterial, n.MeshDepthMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
        }, n.MeshNormalMaterial = function(t) {
            n.Material.call(this, t), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(t)
        }, n.MeshNormalMaterial.prototype = Object.create(n.Material.prototype), n.MeshNormalMaterial.prototype.constructor = n.MeshNormalMaterial, n.MeshNormalMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
        }, n.MultiMaterial = function(t) {
            this.uuid = n.Math.generateUUID(), this.type = "MultiMaterial", this.materials = t instanceof Array ? t : [], this.visible = !0
        }, n.MultiMaterial.prototype = {
            constructor: n.MultiMaterial,
            toJSON: function() {
                for (var t = {
                    metadata: {
                        version: 4.2,
                        type: "material",
                        generator: "MaterialExporter"
                    },
                    uuid: this.uuid,
                    type: this.type,
                    materials: []
                }, e = 0, i = this.materials.length; i > e; e++) t.materials.push(this.materials[e].toJSON());
                return t.visible = this.visible, t
            },
            clone: function() {
                for (var t = new this.constructor, e = 0; e < this.materials.length; e++) t.materials.push(this.materials[e].clone());
                return t.visible = this.visible, t
            }
        }, n.MeshFaceMaterial = n.MultiMaterial, n.PointsMaterial = function(t) {
            n.Material.call(this), this.type = "PointsMaterial", this.color = new n.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = n.NoColors, this.fog = !0, this.setValues(t)
        }, n.PointsMaterial.prototype = Object.create(n.Material.prototype), n.PointsMaterial.prototype.constructor = n.PointsMaterial, n.PointsMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.vertexColors = t.vertexColors, this.fog = t.fog, this
        }, n.PointCloudMaterial = function(t) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new n.PointsMaterial(t)
        }, n.ParticleBasicMaterial = function(t) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new n.PointsMaterial(t)
        }, n.ParticleSystemMaterial = function(t) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new n.PointsMaterial(t)
        }, n.ShaderMaterial = function(t) {
            n.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = n.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.derivatives = !1, this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            }, this.index0AttributeName = void 0, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
        }, n.ShaderMaterial.prototype = Object.create(n.Material.prototype), n.ShaderMaterial.prototype.constructor = n.ShaderMaterial, n.ShaderMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = n.UniformsUtils.clone(t.uniforms), this.attributes = t.attributes, this.defines = t.defines, this.shading = t.shading, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.vertexColors = t.vertexColors, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.derivatives = t.derivatives, this
        }, n.ShaderMaterial.prototype.toJSON = function(t) {
            var e = n.Material.prototype.toJSON.call(this, t);
            return e.uniforms = this.uniforms, e.attributes = this.attributes, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
        }, n.RawShaderMaterial = function(t) {
            n.ShaderMaterial.call(this, t), this.type = "RawShaderMaterial"
        }, n.RawShaderMaterial.prototype = Object.create(n.ShaderMaterial.prototype), n.RawShaderMaterial.prototype.constructor = n.RawShaderMaterial, n.SpriteMaterial = function(t) {
            n.Material.call(this), this.type = "SpriteMaterial", this.color = new n.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(t)
        }, n.SpriteMaterial.prototype = Object.create(n.Material.prototype), n.SpriteMaterial.prototype.constructor = n.SpriteMaterial, n.SpriteMaterial.prototype.copy = function(t) {
            return n.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.fog = t.fog, this
        }, n.Texture = function(t, e, i, r, a, o, s, h, l) {
            Object.defineProperty(this, "id", {
                value: n.TextureIdCount++
            }), this.uuid = n.Math.generateUUID(), this.name = "", this.sourceFile = "", this.image = void 0 !== t ? t : n.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : n.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : n.ClampToEdgeWrapping, this.wrapT = void 0 !== r ? r : n.ClampToEdgeWrapping, this.magFilter = void 0 !== a ? a : n.LinearFilter, this.minFilter = void 0 !== o ? o : n.LinearMipMapLinearFilter, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== s ? s : n.RGBAFormat, this.type = void 0 !== h ? h : n.UnsignedByteType, this.offset = new n.Vector2(0, 0), this.repeat = new n.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.version = 0, this.onUpdate = null
        }, n.Texture.DEFAULT_IMAGE = void 0, n.Texture.DEFAULT_MAPPING = n.UVMapping, n.Texture.prototype = {
            constructor: n.Texture,
            set needsUpdate(t) {
                t === !0 && this.version++
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this
            },
            toJSON: function(t) {
                function e(t) {
                    var e;
                    return void 0 !== t.toDataURL ? e = t : (e = document.createElement("canvas"), e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)), e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                }
                if (void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
                var i = {
                    metadata: {
                        version: 4.4,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    wrap: [this.wrapS, this.wrapT],
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy
                };
                if (void 0 !== this.image) {
                    var r = this.image;
                    void 0 === r.uuid && (r.uuid = n.Math.generateUUID()), void 0 === t.images[r.uuid] && (t.images[r.uuid] = {
                        uuid: r.uuid,
                        url: e(r)
                    }), i.image = r.uuid
                }
                return t.textures[this.uuid] = i, i
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            },
            transformUv: function(t) {
                if (this.mapping === n.UVMapping) {
                    if (t.multiply(this.repeat), t.add(this.offset), t.x < 0 || t.x > 1) switch (this.wrapS) {
                        case n.RepeatWrapping:
                            t.x = t.x - Math.floor(t.x);
                            break;
                        case n.ClampToEdgeWrapping:
                            t.x = t.x < 0 ? 0 : 1;
                            break;
                        case n.MirroredRepeatWrapping:
                            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                    }
                    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                        case n.RepeatWrapping:
                            t.y = t.y - Math.floor(t.y);
                            break;
                        case n.ClampToEdgeWrapping:
                            t.y = t.y < 0 ? 0 : 1;
                            break;
                        case n.MirroredRepeatWrapping:
                            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                    }
                    this.flipY && (t.y = 1 - t.y)
                }
            }
        }, n.EventDispatcher.prototype.apply(n.Texture.prototype), n.TextureIdCount = 0, n.CanvasTexture = function(t, e, i, r, a, o, s, h, l) {
            n.Texture.call(this, t, e, i, r, a, o, s, h, l), this.needsUpdate = !0
        }, n.CanvasTexture.prototype = Object.create(n.Texture.prototype), n.CanvasTexture.prototype.constructor = n.CanvasTexture, n.CubeTexture = function(t, e, i, r, a, o, s, h, l) {
            e = void 0 !== e ? e : n.CubeReflectionMapping, n.Texture.call(this, t, e, i, r, a, o, s, h, l), this.images = t, this.flipY = !1
        }, n.CubeTexture.prototype = Object.create(n.Texture.prototype), n.CubeTexture.prototype.constructor = n.CubeTexture, n.CubeTexture.prototype.copy = function(t) {
            return n.Texture.prototype.copy.call(this, t), this.images = t.images, this
        }, n.CompressedTexture = function(t, e, i, r, a, o, s, h, l, c, u) {
            n.Texture.call(this, null, o, s, h, l, c, r, a, u), this.image = {
                width: e,
                height: i
            }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
        }, n.CompressedTexture.prototype = Object.create(n.Texture.prototype), n.CompressedTexture.prototype.constructor = n.CompressedTexture, n.DataTexture = function(t, e, i, r, a, o, s, h, l, c, u) {
            n.Texture.call(this, null, o, s, h, l, c, r, a, u), this.image = {
                data: t,
                width: e,
                height: i
            }, this.magFilter = void 0 !== l ? l : n.NearestFilter, this.minFilter = void 0 !== c ? c : n.NearestFilter, this.flipY = !1, this.generateMipmaps = !1
        }, n.DataTexture.prototype = Object.create(n.Texture.prototype), n.DataTexture.prototype.constructor = n.DataTexture, n.VideoTexture = function(t, e, i, r, a, o, s, h, l) {
            n.Texture.call(this, t, e, i, r, a, o, s, h, l), this.generateMipmaps = !1;
            var c = this,
                u = function() {
                    requestAnimationFrame(u), t.readyState === t.HAVE_ENOUGH_DATA && (c.needsUpdate = !0)
                };
            u()
        }, n.VideoTexture.prototype = Object.create(n.Texture.prototype), n.VideoTexture.prototype.constructor = n.VideoTexture, n.Group = function() {
            n.Object3D.call(this), this.type = "Group"
        }, n.Group.prototype = Object.create(n.Object3D.prototype), n.Group.prototype.constructor = n.Group, n.Points = function(t, e) {
            n.Object3D.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new n.Geometry, this.material = void 0 !== e ? e : new n.PointsMaterial({
                color: 16777215 * Math.random()
            })
        }, n.Points.prototype = Object.create(n.Object3D.prototype), n.Points.prototype.constructor = n.Points, n.Points.prototype.raycast = function() {
            var t = new n.Matrix4,
                e = new n.Ray;
            return function(i, r) {
                function a(t, n) {
                    var a = e.distanceSqToPoint(t);
                    if (c > a) {
                        var s = e.closestPointToPoint(t);
                        s.applyMatrix4(o.matrixWorld);
                        var h = i.ray.origin.distanceTo(s);
                        if (h < i.near || h > i.far) return;
                        r.push({
                            distance: h,
                            distanceToRay: Math.sqrt(a),
                            point: s.clone(),
                            index: n,
                            face: null,
                            object: o
                        })
                    }
                }
                var o = this,
                    s = o.geometry,
                    h = i.params.Points.threshold;
                if (t.getInverse(this.matrixWorld), e.copy(i.ray).applyMatrix4(t), null === s.boundingBox || e.isIntersectionBox(s.boundingBox) !== !1) {
                    var l = h / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        c = l * l,
                        u = new n.Vector3;
                    if (s instanceof n.BufferGeometry) {
                        var p = s.index,
                            d = s.attributes,
                            f = d.position.array;
                        if (null !== p)
                            for (var m = p.array, g = 0, v = m.length; v > g; g++) {
                                var y = m[g];
                                u.fromArray(f, 3 * y), a(u, y)
                            } else
                            for (var g = 0, _ = f.length / 3; _ > g; g++) u.fromArray(f, 3 * g), a(u, g)
                    } else
                        for (var x = s.vertices, g = 0, _ = x.length; _ > g; g++) a(x[g], g)
                }
            }
        }(), n.Points.prototype.clone = function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }, n.Points.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON()), void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON()), e.object.geometry = this.geometry.uuid, e.object.material = this.material.uuid, e
        }, n.PointCloud = function(t, e) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new n.Points(t, e)
        }, n.ParticleSystem = function(t, e) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new n.Points(t, e)
        }, n.Line = function(t, e, i) {
            return 1 === i ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new n.LineSegments(t, e)) : (n.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new n.Geometry, void(this.material = void 0 !== e ? e : new n.LineBasicMaterial({
                color: 16777215 * Math.random()
            })))
        }, n.Line.prototype = Object.create(n.Object3D.prototype), n.Line.prototype.constructor = n.Line, n.Line.prototype.raycast = function() {
            var t = new n.Matrix4,
                e = new n.Ray,
                i = new n.Sphere;
            return function(r, a) {
                var o = r.linePrecision,
                    s = o * o,
                    h = this.geometry;
                if (null === h.boundingSphere && h.computeBoundingSphere(), i.copy(h.boundingSphere), i.applyMatrix4(this.matrixWorld), r.ray.isIntersectionSphere(i) !== !1) {
                    t.getInverse(this.matrixWorld), e.copy(r.ray).applyMatrix4(t);
                    var l = new n.Vector3,
                        c = new n.Vector3,
                        u = new n.Vector3,
                        p = new n.Vector3,
                        d = this instanceof n.LineSegments ? 2 : 1;
                    if (h instanceof n.BufferGeometry) {
                        var f = h.index,
                            m = h.attributes;
                        if (null !== f)
                            for (var g = f.array, v = m.position.array, y = 0, _ = g.length - 1; _ > y; y += d) {
                                var x = g[y],
                                    b = g[y + 1];
                                l.fromArray(v, 3 * x), c.fromArray(v, 3 * b);
                                var w = e.distanceSqToSegment(l, c, p, u);
                                if (!(w > s)) {
                                    p.applyMatrix4(this.matrixWorld);
                                    var M = r.ray.origin.distanceTo(p);
                                    M < r.near || M > r.far || a.push({
                                        distance: M,
                                        point: u.clone().applyMatrix4(this.matrixWorld),
                                        index: y,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            } else
                            for (var v = m.position.array, y = 0, _ = v.length / 3 - 1; _ > y; y += d) {
                                l.fromArray(v, 3 * y), c.fromArray(v, 3 * y + 3);
                                var w = e.distanceSqToSegment(l, c, p, u);
                                if (!(w > s)) {
                                    p.applyMatrix4(this.matrixWorld);
                                    var M = r.ray.origin.distanceTo(p);
                                    M < r.near || M > r.far || a.push({
                                        distance: M,
                                        point: u.clone().applyMatrix4(this.matrixWorld),
                                        index: y,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            }
                    } else if (h instanceof n.Geometry)
                        for (var T = h.vertices, S = T.length, y = 0; S - 1 > y; y += d) {
                            var w = e.distanceSqToSegment(T[y], T[y + 1], p, u);
                            if (!(w > s)) {
                                p.applyMatrix4(this.matrixWorld);
                                var M = r.ray.origin.distanceTo(p);
                                M < r.near || M > r.far || a.push({
                                    distance: M,
                                    point: u.clone().applyMatrix4(this.matrixWorld),
                                    index: y,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                }
            }
        }(), n.Line.prototype.clone = function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }, n.Line.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON()), void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON()), e.object.geometry = this.geometry.uuid, e.object.material = this.material.uuid, e
        }, n.LineStrip = 0, n.LinePieces = 1, n.LineSegments = function(t, e) {
            n.Line.call(this, t, e), this.type = "LineSegments"
        }, n.LineSegments.prototype = Object.create(n.Line.prototype), n.LineSegments.prototype.constructor = n.LineSegments, n.Mesh = function(t, e) {
            n.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new n.Geometry, this.material = void 0 !== e ? e : new n.MeshBasicMaterial({
                color: 16777215 * Math.random()
            }), this.updateMorphTargets()
        }, n.Mesh.prototype = Object.create(n.Object3D.prototype), n.Mesh.prototype.constructor = n.Mesh, n.Mesh.prototype.updateMorphTargets = function() {
            if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
                this.morphTargetBase = -1, this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (var t = 0, e = this.geometry.morphTargets.length; e > t; t++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[t].name] = t
            }
        }, n.Mesh.prototype.getMorphTargetIndexByName = function(t) {
            return void 0 !== this.morphTargetDictionary[t] ? this.morphTargetDictionary[t] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + t + " does not exist. Returning 0."), 0)
        }, n.Mesh.prototype.raycast = function() {
            function t(t, e, i, r, a, o, s) {
                return n.Triangle.barycoordFromPoint(t, e, i, r, f), a.multiplyScalar(f.x), o.multiplyScalar(f.y), s.multiplyScalar(f.z), a.add(o).add(s), a.clone()
            }
            var e = new n.Matrix4,
                i = new n.Ray,
                r = new n.Sphere,
                a = new n.Vector3,
                o = new n.Vector3,
                s = new n.Vector3,
                h = new n.Vector3,
                l = new n.Vector3,
                c = new n.Vector3,
                u = new n.Vector2,
                p = new n.Vector2,
                d = new n.Vector2,
                f = new n.Vector3,
                m = new n.Vector3,
                g = new n.Vector3;
            return function(f, v) {
                var y = this.geometry,
                    _ = this.material;
                if (void 0 !== _ && (null === y.boundingSphere && y.computeBoundingSphere(), r.copy(y.boundingSphere), r.applyMatrix4(this.matrixWorld), f.ray.isIntersectionSphere(r) !== !1 && (e.getInverse(this.matrixWorld), i.copy(f.ray).applyMatrix4(e), null === y.boundingBox || i.isIntersectionBox(y.boundingBox) !== !1))) {
                    var x, b, w;
                    if (y instanceof n.BufferGeometry) {
                        var M = y.index,
                            T = y.attributes;
                        if (null !== M)
                            for (var S = M.array, E = T.position.array, A = 0, C = S.length; C > A; A += 3) {
                                if (x = S[A], b = S[A + 1], w = S[A + 2], a.fromArray(E, 3 * x), o.fromArray(E, 3 * b), s.fromArray(E, 3 * w), _.side === n.BackSide) {
                                    if (null === i.intersectTriangle(s, o, a, !0, m)) continue
                                } else if (null === i.intersectTriangle(a, o, s, _.side !== n.DoubleSide, m)) continue;
                                g.copy(m), g.applyMatrix4(this.matrixWorld);
                                var P = f.ray.origin.distanceTo(g);
                                if (!(P < f.near || P > f.far)) {
                                    var L;
                                    if (void 0 !== T.uv) {
                                        var R = T.uv.array;
                                        u.fromArray(R, 2 * x), p.fromArray(R, 2 * b), d.fromArray(R, 2 * w), L = t(m, a, o, s, u, p, d)
                                    }
                                    v.push({
                                        distance: P,
                                        point: g.clone(),
                                        uv: L,
                                        face: new n.Face3(x, b, w, n.Triangle.normal(a, o, s)),
                                        faceIndex: Math.floor(A / 3),
                                        object: this
                                    })
                                }
                            } else
                            for (var E = T.position.array, A = 0, C = E.length; C > A; A += 9) {
                                if (a.fromArray(E, A), o.fromArray(E, A + 3), s.fromArray(E, A + 6), _.side === n.BackSide) {
                                    if (null === i.intersectTriangle(s, o, a, !0, m)) continue
                                } else if (null === i.intersectTriangle(a, o, s, _.side !== n.DoubleSide, m)) continue;
                                g.copy(m), g.applyMatrix4(this.matrixWorld);
                                var P = f.ray.origin.distanceTo(g);
                                if (!(P < f.near || P > f.far)) {
                                    var L;
                                    if (void 0 !== T.uv) {
                                        var R = T.uv.array;
                                        u.fromArray(R, A), p.fromArray(R, A + 2), d.fromArray(R, A + 4), L = t(m, a, o, s, u, p, d)
                                    }
                                    x = A / 3, b = x + 1, w = x + 2, v.push({
                                        distance: P,
                                        point: g.clone(),
                                        uv: L,
                                        face: new n.Face3(x, b, w, n.Triangle.normal(a, o, s)),
                                        index: x,
                                        object: this
                                    })
                                }
                            }
                    } else if (y instanceof n.Geometry)
                        for (var D = _ instanceof n.MeshFaceMaterial, F = D === !0 ? _.materials : null, O = y.vertices, k = y.faces, U = 0, B = k.length; B > U; U++) {
                            var V = k[U],
                                I = D === !0 ? F[V.materialIndex] : _;
                            if (void 0 !== I) {
                                if (x = O[V.a], b = O[V.b], w = O[V.c], I.morphTargets === !0) {
                                    var z = y.morphTargets,
                                        N = this.morphTargetInfluences;
                                    a.set(0, 0, 0), o.set(0, 0, 0), s.set(0, 0, 0);
                                    for (var G = 0, H = z.length; H > G; G++) {
                                        var j = N[G];
                                        if (0 !== j) {
                                            var W = z[G].vertices;
                                            a.addScaledVector(h.subVectors(W[V.a], x), j), o.addScaledVector(l.subVectors(W[V.b], b), j), s.addScaledVector(c.subVectors(W[V.c], w), j)
                                        }
                                    }
                                    a.add(x), o.add(b), s.add(w), x = a, b = o, w = s
                                }
                                if (I.side === n.BackSide) {
                                    if (null === i.intersectTriangle(w, b, x, !0, m)) continue
                                } else if (null === i.intersectTriangle(x, b, w, I.side !== n.DoubleSide, m)) continue;
                                g.copy(m), g.applyMatrix4(this.matrixWorld);
                                var P = f.ray.origin.distanceTo(g);
                                if (!(P < f.near || P > f.far)) {
                                    var L;
                                    if (y.faceVertexUvs[0].length > 0) {
                                        var R = y.faceVertexUvs[0][U];
                                        u.copy(R[0]), p.copy(R[1]), d.copy(R[2]), L = t(m, x, b, w, u, p, d)
                                    }
                                    v.push({
                                        distance: P,
                                        point: g.clone(),
                                        uv: L,
                                        face: V,
                                        faceIndex: U,
                                        object: this
                                    })
                                }
                            }
                        }
                }
            }
        }(), n.Mesh.prototype.clone = function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }, n.Mesh.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON(t)), void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON(t)), e.object.geometry = this.geometry.uuid, e.object.material = this.material.uuid, e
        }, n.Bone = function(t) {
            n.Object3D.call(this), this.type = "Bone", this.skin = t
        }, n.Bone.prototype = Object.create(n.Object3D.prototype), n.Bone.prototype.constructor = n.Bone, n.Bone.prototype.copy = function(t) {
            return n.Object3D.prototype.copy.call(this, t), this.skin = t.skin, this
        }, n.Skeleton = function(t, e, i) {
            if (this.useVertexTexture = void 0 !== i ? i : !0, this.identityMatrix = new n.Matrix4, t = t || [], this.bones = t.slice(0), this.useVertexTexture) {
                var r = Math.sqrt(4 * this.bones.length);
                r = n.Math.nextPowerOfTwo(Math.ceil(r)), r = Math.max(r, 4), this.boneTextureWidth = r, this.boneTextureHeight = r, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new n.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, n.RGBAFormat, n.FloatType)
            } else this.boneMatrices = new Float32Array(16 * this.bones.length);
            if (void 0 === e) this.calculateInverses();
            else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
            else {
                console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
                for (var a = 0, o = this.bones.length; o > a; a++) this.boneInverses.push(new n.Matrix4)
            }
        }, n.Skeleton.prototype.calculateInverses = function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; e > t; t++) {
                var i = new n.Matrix4;
                this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
            }
        }, n.Skeleton.prototype.pose = function() {
            for (var t, e = 0, i = this.bones.length; i > e; e++) t = this.bones[e], t && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (var e = 0, i = this.bones.length; i > e; e++) t = this.bones[e], t && (t.parent ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
        }, n.Skeleton.prototype.update = function() {
            var t = new n.Matrix4;
            return function() {
                for (var e = 0, i = this.bones.length; i > e; e++) {
                    var r = this.bones[e] ? this.bones[e].matrixWorld : this.identityMatrix;
                    t.multiplyMatrices(r, this.boneInverses[e]), t.flattenToArrayOffset(this.boneMatrices, 16 * e)
                }
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(), n.Skeleton.prototype.clone = function() {
            return new n.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
        }, n.SkinnedMesh = function(t, e, i) {
            n.Mesh.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new n.Matrix4, this.bindMatrixInverse = new n.Matrix4;
            var r = [];
            if (this.geometry && void 0 !== this.geometry.bones) {
                for (var a, o, s = 0, h = this.geometry.bones.length; h > s; ++s) o = this.geometry.bones[s], a = new n.Bone(this), r.push(a), a.name = o.name, a.position.fromArray(o.pos), a.quaternion.fromArray(o.rotq), void 0 !== o.scl && a.scale.fromArray(o.scl);
                for (var s = 0, h = this.geometry.bones.length; h > s; ++s) o = this.geometry.bones[s], -1 !== o.parent ? r[o.parent].add(r[s]) : this.add(r[s])
            }
            this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new n.Skeleton(r, void 0, i), this.matrixWorld)
        }, n.SkinnedMesh.prototype = Object.create(n.Mesh.prototype), n.SkinnedMesh.prototype.constructor = n.SkinnedMesh, n.SkinnedMesh.prototype.bind = function(t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
        }, n.SkinnedMesh.prototype.pose = function() {
            this.skeleton.pose()
        }, n.SkinnedMesh.prototype.normalizeSkinWeights = function() {
            if (this.geometry instanceof n.Geometry)
                for (var t = 0; t < this.geometry.skinIndices.length; t++) {
                    var e = this.geometry.skinWeights[t],
                        i = 1 / e.lengthManhattan();
                    i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1)
                }
        }, n.SkinnedMesh.prototype.updateMatrixWorld = function(t) {
            n.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        }, n.SkinnedMesh.prototype.clone = function() {
            return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this)
        }, n.MorphAnimMesh = function(t, e) {
            n.Mesh.call(this, t, e), this.type = "MorphAnimMesh", this.duration = 1e3, this.mirroredLoop = !1, this.time = 0, this.lastKeyframe = 0, this.currentKeyframe = 0, this.direction = 1, this.directionBackwards = !1, this.setFrameRange(0, t.morphTargets.length - 1)
        }, n.MorphAnimMesh.prototype = Object.create(n.Mesh.prototype), n.MorphAnimMesh.prototype.constructor = n.MorphAnimMesh, n.MorphAnimMesh.prototype.setFrameRange = function(t, e) {
            this.startKeyframe = t, this.endKeyframe = e, this.length = this.endKeyframe - this.startKeyframe + 1
        }, n.MorphAnimMesh.prototype.setDirectionForward = function() {
            this.direction = 1, this.directionBackwards = !1
        }, n.MorphAnimMesh.prototype.setDirectionBackward = function() {
            this.direction = -1, this.directionBackwards = !0
        }, n.MorphAnimMesh.prototype.parseAnimations = function() {
            var t = this.geometry;
            t.animations || (t.animations = {});
            for (var e, i = t.animations, r = /([a-z]+)_?(\d+)/, n = 0, a = t.morphTargets.length; a > n; n++) {
                var o = t.morphTargets[n],
                    s = o.name.match(r);
                if (s && s.length > 1) {
                    var h = s[1];
                    i[h] || (i[h] = {
                        start: 1 / 0,
                        end: -(1 / 0)
                    });
                    var l = i[h];
                    n < l.start && (l.start = n), n > l.end && (l.end = n), e || (e = h)
                }
            }
            t.firstAnimation = e
        }, n.MorphAnimMesh.prototype.setAnimationLabel = function(t, e, i) {
            this.geometry.animations || (this.geometry.animations = {}), this.geometry.animations[t] = {
                start: e,
                end: i
            }
        }, n.MorphAnimMesh.prototype.playAnimation = function(t, e) {
            var i = this.geometry.animations[t];
            i ? (this.setFrameRange(i.start, i.end), this.duration = 1e3 * ((i.end - i.start) / e), this.time = 0) : console.warn("THREE.MorphAnimMesh: animation[" + t + "] undefined in .playAnimation()")
        }, n.MorphAnimMesh.prototype.updateAnimation = function(t) {
            var e = this.duration / this.length;
            this.time += this.direction * t, this.mirroredLoop ? (this.time > this.duration || this.time < 0) && (this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), this.time < 0 && (this.time = 0, this.directionBackwards = !1)) : (this.time = this.time % this.duration, this.time < 0 && (this.time += this.duration));
            var i = this.startKeyframe + n.Math.clamp(Math.floor(this.time / e), 0, this.length - 1),
                r = this.morphTargetInfluences;
            i !== this.currentKeyframe && (r[this.lastKeyframe] = 0, r[this.currentKeyframe] = 1, r[i] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = i);
            var a = this.time % e / e;
            this.directionBackwards && (a = 1 - a), r[this.currentKeyframe] = a, r[this.lastKeyframe] = 1 - a
        }, n.MorphAnimMesh.prototype.interpolateTargets = function(t, e, i) {
            for (var r = this.morphTargetInfluences, n = 0, a = r.length; a > n; n++) r[n] = 0;
            t > -1 && (r[t] = 1 - i), e > -1 && (r[e] = i)
        }, n.MorphAnimMesh.prototype.copy = function(t) {
            return n.Mesh.prototype.copy.call(this, t), this.duration = t.duration, this.mirroredLoop = t.mirroredLoop, this.time = t.time, this.lastKeyframe = t.lastKeyframe, this.currentKeyframe = t.currentKeyframe, this.direction = t.direction, this.directionBackwards = t.directionBackwards, this
        }, n.LOD = function() {
            n.Object3D.call(this), this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                },
                objects: {
                    get: function() {
                        return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
                    }
                }
            })
        }, n.LOD.prototype = Object.create(n.Object3D.prototype), n.LOD.prototype.constructor = n.LOD, n.LOD.prototype.addLevel = function(t, e) {
            void 0 === e && (e = 0), e = Math.abs(e);
            for (var i = this.levels, r = 0; r < i.length && !(e < i[r].distance); r++);
            i.splice(r, 0, {
                distance: e,
                object: t
            }), this.add(t)
        }, n.LOD.prototype.getObjectForDistance = function(t) {
            for (var e = this.levels, i = 1, r = e.length; r > i && !(t < e[i].distance); i++);
            return e[i - 1].object
        }, n.LOD.prototype.raycast = function() {
            var t = new n.Vector3;
            return function(e, i) {
                t.setFromMatrixPosition(this.matrixWorld);
                var r = e.ray.origin.distanceTo(t);
                this.getObjectForDistance(r).raycast(e, i)
            }
        }(), n.LOD.prototype.update = function() {
            var t = new n.Vector3,
                e = new n.Vector3;
            return function(i) {
                var r = this.levels;
                if (r.length > 1) {
                    t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
                    var n = t.distanceTo(e);
                    r[0].object.visible = !0;
                    for (var a = 1, o = r.length; o > a && n >= r[a].distance; a++) r[a - 1].object.visible = !1, r[a].object.visible = !0;
                    for (; o > a; a++) r[a].object.visible = !1
                }
            }
        }(), n.LOD.prototype.copy = function(t) {
            n.Object3D.prototype.copy.call(this, t, !1);
            for (var e = t.levels, i = 0, r = e.length; r > i; i++) {
                var a = e[i];
                this.addLevel(a.object.clone(), a.distance)
            }
            return this
        }, n.LOD.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var i = this.levels, r = 0, a = i.length; a > r; r++) {
                var o = i[r];
                e.object.levels.push({
                    object: o.object.uuid,
                    distance: o.distance
                })
            }
            return e
        }, n.Sprite = function() {
            var t = new Uint16Array([0, 1, 2, 0, 2, 3]),
                e = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
                i = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
                r = new n.BufferGeometry;
            return r.setIndex(new n.BufferAttribute(t, 1)), r.addAttribute("position", new n.BufferAttribute(e, 3)), r.addAttribute("uv", new n.BufferAttribute(i, 2)),
                function(t) {
                    n.Object3D.call(this), this.type = "Sprite", this.geometry = r, this.material = void 0 !== t ? t : new n.SpriteMaterial
                }
        }(), n.Sprite.prototype = Object.create(n.Object3D.prototype), n.Sprite.prototype.constructor = n.Sprite, n.Sprite.prototype.raycast = function() {
            var t = new n.Vector3;
            return function(e, i) {
                t.setFromMatrixPosition(this.matrixWorld);
                var r = e.ray.distanceSqToPoint(t),
                    n = this.scale.x * this.scale.y;
                r > n || i.push({
                    distance: Math.sqrt(r),
                    point: this.position,
                    face: null,
                    object: this
                })
            }
        }(), n.Sprite.prototype.clone = function() {
            return new this.constructor(this.material).copy(this)
        }, n.Sprite.prototype.toJSON = function(t) {
            var e = n.Object3D.prototype.toJSON.call(this, t);
            return void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON()), e.object.material = this.material.uuid, e
        }, n.Particle = n.Sprite, n.LensFlare = function(t, e, i, r, a) {
            n.Object3D.call(this), this.lensFlares = [], this.positionScreen = new n.Vector3, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, i, r, a)
        }, n.LensFlare.prototype = Object.create(n.Object3D.prototype), n.LensFlare.prototype.constructor = n.LensFlare, n.LensFlare.prototype.add = function(t, e, i, r, a, o) {
            void 0 === e && (e = -1), void 0 === i && (i = 0), void 0 === o && (o = 1), void 0 === a && (a = new n.Color(16777215)), void 0 === r && (r = n.NormalBlending), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
                texture: t,
                size: e,
                distance: i,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: o,
                color: a,
                blending: r
            })
        }, n.LensFlare.prototype.updateLensFlares = function() {
            var t, e, i = this.lensFlares.length,
                r = 2 * -this.positionScreen.x,
                n = 2 * -this.positionScreen.y;
            for (t = 0; i > t; t++) e = this.lensFlares[t], e.x = this.positionScreen.x + r * e.distance, e.y = this.positionScreen.y + n * e.distance, e.wantedRotation = e.x * Math.PI * .25, e.rotation += .25 * (e.wantedRotation - e.rotation)
        }, n.LensFlare.prototype.copy = function(t) {
            n.Object3D.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this.customUpdateCallback = t.customUpdateCallback;
            for (var e = 0, i = t.lensFlares.length; i > e; e++) this.lensFlares.push(t.lensFlares[e]);
            return this
        }, n.Scene = function() {
            n.Object3D.call(this), this.type = "Scene", this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
        }, n.Scene.prototype = Object.create(n.Object3D.prototype), n.Scene.prototype.constructor = n.Scene, n.Scene.prototype.copy = function(t) {
            return n.Object3D.prototype.copy.call(this, t), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
        }, n.Fog = function(t, e, i) {
            this.name = "", this.color = new n.Color(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
        }, n.Fog.prototype.clone = function() {
            return new n.Fog(this.color.getHex(), this.near, this.far)
        }, n.FogExp2 = function(t, e) {
            this.name = "", this.color = new n.Color(t), this.density = void 0 !== e ? e : 25e-5
        }, n.FogExp2.prototype.clone = function() {
            return new n.FogExp2(this.color.getHex(), this.density)
        }, n.ShaderChunk = {}, n.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n", n.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n", n.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n	if ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n", n.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\n	totalAmbientLight *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n#endif\n", n.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n\n#endif", n.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n", n.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n", n.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n	// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n	// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;		// normalized\n\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n", n.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n	diffuseColor.rgb *= vColor;\n\n#endif", n.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n", n.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif", n.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n	vColor.xyz = color.xyz;\n\n#endif", n.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	float distance = dot( planeNormal, point - pointOnPlane );\n\n	return - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\n	if ( decayExponent > 0.0 ) {\n\n	  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n	}\n\n	return 1.0;\n\n}\n\nvec3 F_Schlick( in vec3 specularColor, in float dotLH ) {\n\n	// Original approximation by Christophe Schlick '94\n	//;float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n	// Optimized variant (presented by Epic at SIGGRAPH '13)\n	float fresnel = exp2( ( -5.55437 * dotLH - 6.98316 ) * dotLH );\n\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* in float dotNL, in float dotNV */ ) {\n\n	// geometry term is (nâ‹…l)(nâ‹…v) / 4(nâ‹…l)(nâ‹…v)\n\n	return 0.25;\n\n}\n\nfloat D_BlinnPhong( in float shininess, in float dotNH ) {\n\n	// factor of 1/PI in distribution term omitted\n\n	return ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( in vec3 specularColor, in float shininess, in vec3 normal, in vec3 lightDir, in vec3 viewDir ) {\n\n	vec3 halfDir = normalize( lightDir + viewDir );\n\n	//float dotNL = saturate( dot( normal, lightDir ) );\n	//float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotLH = saturate( dot( lightDir, halfDir ) );\n\n	vec3 F = F_Schlick( specularColor, dotLH );\n\n	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n	float D = D_BlinnPhong( shininess, dotNH );\n\n	return F * G * D;\n\n}\n\nvec3 inputToLinear( in vec3 a ) {\n\n	#ifdef GAMMA_INPUT\n\n		return pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n\nvec3 linearToOutput( in vec3 a ) {\n\n	#ifdef GAMMA_OUTPUT\n\n		return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n", n.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n", n.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n", n.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n\n#endif\n", n.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n	emissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\n	totalEmissiveLight *= emissiveColor.rgb;\n\n#endif\n", n.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\n	uniform sampler2D emissiveMap;\n\n#endif\n", n.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n		// Transforming Normal Vectors with the Inverse Transformation\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n		#else\n\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		#endif\n\n	#else\n\n		vec3 reflectVec = vReflect;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#else\n		float flipNormal = 1.0;\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n\n	envColor.xyz = inputToLinear( envColor.xyz );\n\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_MIX )\n\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_ADD )\n\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n	#endif\n\n#endif\n", n.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n	uniform float reflectivity;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		uniform float refractionRatio;\n\n	#else\n\n		varying vec3 vReflect;\n\n	#endif\n\n#endif\n", n.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	varying vec3 vReflect;\n\n	uniform float refractionRatio;\n\n#endif\n", n.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	vec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n	#ifdef ENVMAP_MODE_REFLECTION\n\n		vReflect = reflect( cameraToVertex, worldNormal );\n\n	#else\n\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n	#endif\n\n#endif\n", n.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n	#else\n\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n	#endif\n\n	#ifdef FOG_EXP2\n\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n	#endif\n	\n	outgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif", n.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n\n#endif", n.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n	totalAmbientLight += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n#endif\n", n.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n\n#endif", n.ShaderChunk.lights_lambert_pars_vertex = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n", n.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack = vec3( 0.0 );\n\n#endif\n\nvec3 normal = normalize( transformedNormal );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lVector = pointLightPosition[ i ] - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		// attenuation\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n			// attenuation\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n			// diffuse\n\n			float dotProduct = dot( normal, lightDir );\n\n			vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n			#ifdef DOUBLE_SIDED\n\n				vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n			#endif\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		#ifdef DOUBLE_SIDED\n\n			float hemiDiffuseWeightBack = - 0.5 * dotProduct + 0.5;\n\n			vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n		#endif\n\n	}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack += ambientLightColor;\n\n#endif\n", n.ShaderChunk.lights_phong_fragment = "#ifndef FLAT_SHADED\n\n	vec3 normal = normalize( vNormal );\n\n	#ifdef DOUBLE_SIDED\n\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n	#endif\n\n#else\n\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 viewDir = normalize( vViewPosition );\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lightPosition = pointLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		// attenuation\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		// diffuse\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n		// specular\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n			// attenuation\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n			// diffuse\n\n			float cosineTerm = saturate( dot( normal, lightDir ) );\n\n			totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n			// specular\n\n			vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n			totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n		// diffuse\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * cosineTerm;\n\n		// specular\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * cosineTerm;\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vec3 lightColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		totalDiffuseLight += lightColor;\n\n		// specular (sky term only)\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * max( dotProduct, 0.0 );\n\n	}\n\n#endif\n\n#ifdef METAL\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) * specular + totalSpecularLight + totalEmissiveLight;\n\n#else\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) + totalSpecularLight + totalEmissiveLight;\n\n#endif\n",
        n.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n", n.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n", n.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	vWorldPosition = worldPosition.xyz;\n\n#endif\n", n.ShaderChunk.linear_to_gamma_fragment = "\n	outgoingLight = linearToOutput( outgoingLight );\n", n.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif", n.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n#endif\n", n.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif", n.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif", n.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	texelColor.xyz = inputToLinear( texelColor.xyz );\n\n	diffuseColor *= texelColor;\n\n#endif\n", n.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif", n.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n	diffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n", n.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n\n#endif\n", n.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n", n.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_MORPHNORMALS\n\n	uniform float morphTargetInfluences[ 8 ];\n\n	#else\n\n	uniform float morphTargetInfluences[ 4 ];\n\n	#endif\n\n#endif", n.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n	#ifndef USE_MORPHNORMALS\n\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n	#endif\n\n#endif\n", n.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n	// Per-Pixel Tangent Space Normal Mapping\n	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n", n.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\n	vec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n", n.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n	#ifdef SHADOWMAP_DEBUG\n\n		vec3 frustumColors[3];\n		frustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n		frustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n		frustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n	#endif\n\n	float fDepth;\n	vec3 shadowColor = vec3( 1.0 );\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n				// if ( something && something ) breaks ATI OpenGL shader compiler\n				// if ( all( something, something ) ) using this instead\n\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n		bool frustumTest = all( frustumTestVec );\n\n		if ( frustumTest ) {\n\n			shadowCoord.z += shadowBias[ i ];\n\n			#if defined( SHADOWMAP_TYPE_PCF )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n		/*\n						// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n						// must enroll loop manually\n\n				for ( float y = -1.25; y <= 1.25; y += 1.25 )\n					for ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n						vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n								// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n								//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n						float fDepth = unpackDepth( rgbaDepth );\n\n						if ( fDepth < shadowCoord.z )\n							shadow += 1.0;\n\n				}\n\n				shadow /= 9.0;\n\n		*/\n\n				const float shadowDelta = 1.0 / 9.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.25 * xPixelOffset;\n				float dy0 = -1.25 * yPixelOffset;\n				float dx1 = 1.25 * xPixelOffset;\n				float dy1 = 1.25 * yPixelOffset;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.0 * xPixelOffset;\n				float dy0 = -1.0 * yPixelOffset;\n				float dx1 = 1.0 * xPixelOffset;\n				float dy1 = 1.0 * yPixelOffset;\n\n				mat3 shadowKernel;\n				mat3 depthKernel;\n\n				depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n				vec3 shadowZ = vec3( shadowCoord.z );\n				shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n				shadowKernel[0] *= vec3(0.25);\n\n				shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n				shadowKernel[1] *= vec3(0.25);\n\n				shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n				shadowKernel[2] *= vec3(0.25);\n\n				vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n				shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n				shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n				vec4 shadowValues;\n				shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n				shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n				shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n				shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n				shadow = dot( shadowValues, vec4( 1.0 ) );\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#else\n\n				vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n				float fDepth = unpackDepth( rgbaDepth );\n\n				if ( fDepth < shadowCoord.z )\n\n		// spot with multiple shadows is darker\n\n					shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n		// spot with multiple shadows has the same color as single shadow spot\n\n		// 					shadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n			#endif\n\n		}\n\n\n		#ifdef SHADOWMAP_DEBUG\n\n			if ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n		#endif\n\n	}\n\n	outgoingLight = outgoingLight * shadowColor;\n\n#endif\n", n.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n	uniform sampler2D shadowMap[ MAX_SHADOWS ];\n	uniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform float shadowBias[ MAX_SHADOWS ];\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n	float unpackDepth( const in vec4 rgba_depth ) {\n\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		float depth = dot( rgba_depth, bit_shift );\n		return depth;\n\n	}\n\n#endif", n.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n	uniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif", n.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n	}\n\n#endif", n.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif", n.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n", n.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n", n.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n", n.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif", n.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif", n.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	varying vec2 vUv2;\n\n#endif", n.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n\n#endif", n.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	vUv2 = uv2;\n\n#endif", n.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n\n#endif", n.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n", n.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif", n.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#else\n\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n	#endif\n\n#endif\n", n.UniformsUtils = {
            merge: function(t) {
                for (var e = {}, i = 0; i < t.length; i++) {
                    var r = this.clone(t[i]);
                    for (var n in r) e[n] = r[n]
                }
                return e
            },
            clone: function(t) {
                var e = {};
                for (var i in t) {
                    e[i] = {};
                    for (var r in t[i]) {
                        var a = t[i][r];
                        a instanceof n.Color || a instanceof n.Vector2 || a instanceof n.Vector3 || a instanceof n.Vector4 || a instanceof n.Matrix3 || a instanceof n.Matrix4 || a instanceof n.Texture ? e[i][r] = a.clone() : Array.isArray(a) ? e[i][r] = a.slice() : e[i][r] = a
                    }
                }
                return e
            }
        }, n.UniformsLib = {
            common: {
                diffuse: {
                    type: "c",
                    value: new n.Color(15658734)
                },
                opacity: {
                    type: "f",
                    value: 1
                },
                map: {
                    type: "t",
                    value: null
                },
                offsetRepeat: {
                    type: "v4",
                    value: new n.Vector4(0, 0, 1, 1)
                },
                specularMap: {
                    type: "t",
                    value: null
                },
                alphaMap: {
                    type: "t",
                    value: null
                },
                envMap: {
                    type: "t",
                    value: null
                },
                flipEnvMap: {
                    type: "f",
                    value: -1
                },
                reflectivity: {
                    type: "f",
                    value: 1
                },
                refractionRatio: {
                    type: "f",
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    type: "t",
                    value: null
                },
                aoMapIntensity: {
                    type: "f",
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    type: "t",
                    value: null
                },
                lightMapIntensity: {
                    type: "f",
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    type: "t",
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    type: "t",
                    value: null
                },
                bumpScale: {
                    type: "f",
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    type: "t",
                    value: null
                },
                normalScale: {
                    type: "v2",
                    value: new n.Vector2(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    type: "t",
                    value: null
                },
                displacementScale: {
                    type: "f",
                    value: 1
                },
                displacementBias: {
                    type: "f",
                    value: 0
                }
            },
            fog: {
                fogDensity: {
                    type: "f",
                    value: 25e-5
                },
                fogNear: {
                    type: "f",
                    value: 1
                },
                fogFar: {
                    type: "f",
                    value: 2e3
                },
                fogColor: {
                    type: "c",
                    value: new n.Color(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    type: "fv",
                    value: []
                },
                directionalLightDirection: {
                    type: "fv",
                    value: []
                },
                directionalLightColor: {
                    type: "fv",
                    value: []
                },
                hemisphereLightDirection: {
                    type: "fv",
                    value: []
                },
                hemisphereLightSkyColor: {
                    type: "fv",
                    value: []
                },
                hemisphereLightGroundColor: {
                    type: "fv",
                    value: []
                },
                pointLightColor: {
                    type: "fv",
                    value: []
                },
                pointLightPosition: {
                    type: "fv",
                    value: []
                },
                pointLightDistance: {
                    type: "fv1",
                    value: []
                },
                pointLightDecay: {
                    type: "fv1",
                    value: []
                },
                spotLightColor: {
                    type: "fv",
                    value: []
                },
                spotLightPosition: {
                    type: "fv",
                    value: []
                },
                spotLightDirection: {
                    type: "fv",
                    value: []
                },
                spotLightDistance: {
                    type: "fv1",
                    value: []
                },
                spotLightAngleCos: {
                    type: "fv1",
                    value: []
                },
                spotLightExponent: {
                    type: "fv1",
                    value: []
                },
                spotLightDecay: {
                    type: "fv1",
                    value: []
                }
            },
            points: {
                psColor: {
                    type: "c",
                    value: new n.Color(15658734)
                },
                opacity: {
                    type: "f",
                    value: 1
                },
                size: {
                    type: "f",
                    value: 1
                },
                scale: {
                    type: "f",
                    value: 1
                },
                map: {
                    type: "t",
                    value: null
                },
                offsetRepeat: {
                    type: "v4",
                    value: new n.Vector4(0, 0, 1, 1)
                },
                fogDensity: {
                    type: "f",
                    value: 25e-5
                },
                fogNear: {
                    type: "f",
                    value: 1
                },
                fogFar: {
                    type: "f",
                    value: 2e3
                },
                fogColor: {
                    type: "c",
                    value: new n.Color(16777215)
                }
            },
            shadowmap: {
                shadowMap: {
                    type: "tv",
                    value: []
                },
                shadowMapSize: {
                    type: "v2v",
                    value: []
                },
                shadowBias: {
                    type: "fv1",
                    value: []
                },
                shadowDarkness: {
                    type: "fv1",
                    value: []
                },
                shadowMatrix: {
                    type: "m4v",
                    value: []
                }
            }
        }, n.ShaderLib = {
            basic: {
                uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.aomap, n.UniformsLib.fog, n.UniformsLib.shadowmap]),
                vertexShader: [n.ShaderChunk.common, n.ShaderChunk.uv_pars_vertex, n.ShaderChunk.uv2_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.uv_vertex, n.ShaderChunk.uv2_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.skinbase_vertex, "	#ifdef USE_ENVMAP", n.ShaderChunk.beginnormal_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, "	#endif", n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.uv_pars_fragment, n.ShaderChunk.uv2_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.aomap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	vec3 totalAmbientLight = vec3( 1.0 );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, n.ShaderChunk.aomap_fragment, "	outgoingLight = diffuseColor.rgb * totalAmbientLight;", n.ShaderChunk.envmap_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            lambert: {
                uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.fog, n.UniformsLib.lights, n.UniformsLib.shadowmap, {
                    emissive: {
                        type: "c",
                        value: new n.Color(0)
                    }
                }]),
                vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", n.ShaderChunk.common, n.ShaderChunk.uv_pars_vertex, n.ShaderChunk.uv2_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.lights_lambert_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.uv_vertex, n.ShaderChunk.uv2_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.beginnormal_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.lights_lambert_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform float opacity;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.uv_pars_fragment, n.ShaderChunk.uv2_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, "	#ifdef DOUBLE_SIDED", "		if ( gl_FrontFacing )", "			outgoingLight += diffuseColor.rgb * vLightFront + emissive;", "		else", "			outgoingLight += diffuseColor.rgb * vLightBack + emissive;", "	#else", "		outgoingLight += diffuseColor.rgb * vLightFront + emissive;", "	#endif", n.ShaderChunk.envmap_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            phong: {
                uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.aomap, n.UniformsLib.lightmap, n.UniformsLib.emissivemap, n.UniformsLib.bumpmap, n.UniformsLib.normalmap, n.UniformsLib.displacementmap, n.UniformsLib.fog, n.UniformsLib.lights, n.UniformsLib.shadowmap, {
                    emissive: {
                        type: "c",
                        value: new n.Color(0)
                    },
                    specular: {
                        type: "c",
                        value: new n.Color(1118481)
                    },
                    shininess: {
                        type: "f",
                        value: 30
                    }
                }]),
                vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "#ifndef FLAT_SHADED", "	varying vec3 vNormal;", "#endif", n.ShaderChunk.common, n.ShaderChunk.uv_pars_vertex, n.ShaderChunk.uv2_pars_vertex, n.ShaderChunk.displacementmap_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.lights_phong_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.uv_vertex, n.ShaderChunk.uv2_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.beginnormal_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED", "	vNormal = normalize( transformedNormal );", "#endif", n.ShaderChunk.begin_vertex, n.ShaderChunk.displacementmap_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, "	vViewPosition = - mvPosition.xyz;", n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.lights_phong_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["#define PHONG", "uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", "uniform float opacity;", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.uv_pars_fragment, n.ShaderChunk.uv2_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.alphamap_pars_fragment, n.ShaderChunk.aomap_pars_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.emissivemap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.lights_phong_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.bumpmap_pars_fragment, n.ShaderChunk.normalmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	vec3 totalAmbientLight = ambientLightColor;", "	vec3 totalEmissiveLight = emissive;", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.alphamap_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, n.ShaderChunk.lightmap_fragment, n.ShaderChunk.aomap_fragment, n.ShaderChunk.emissivemap_fragment, n.ShaderChunk.lights_phong_fragment, n.ShaderChunk.envmap_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            points: {
                uniforms: n.UniformsUtils.merge([n.UniformsLib.points, n.UniformsLib.shadowmap]),
                vertexShader: ["uniform float size;", "uniform float scale;", n.ShaderChunk.common, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.color_vertex, "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	#ifdef USE_SIZEATTENUATION", "		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );", "	#else", "		gl_PointSize = size;", "	#endif", "	gl_Position = projectionMatrix * mvPosition;", n.ShaderChunk.logdepthbuf_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 psColor;", "uniform float opacity;", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.map_particle_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( psColor, opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.map_particle_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.alphatest_fragment, "	outgoingLight = diffuseColor.rgb;", n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            dashed: {
                uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.fog, {
                    scale: {
                        type: "f",
                        value: 1
                    },
                    dashSize: {
                        type: "f",
                        value: 1
                    },
                    totalSize: {
                        type: "f",
                        value: 2
                    }
                }]),
                vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", n.ShaderChunk.common, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.color_vertex, "	vLineDistance = scale * lineDistance;", "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	gl_Position = projectionMatrix * mvPosition;", n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", n.ShaderChunk.common, n.ShaderChunk.color_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	if ( mod( vLineDistance, totalSize ) > dashSize ) {", "		discard;", "	}", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", n.ShaderChunk.logdepthbuf_fragment, n.ShaderChunk.color_fragment, "	outgoingLight = diffuseColor.rgb;", n.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            depth: {
                uniforms: {
                    mNear: {
                        type: "f",
                        value: 1
                    },
                    mFar: {
                        type: "f",
                        value: 2e3
                    },
                    opacity: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: [n.ShaderChunk.common, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", n.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		float depth = gl_FragDepthEXT / gl_FragCoord.w;", "	#else", "		float depth = gl_FragCoord.z / gl_FragCoord.w;", "	#endif", "	float color = 1.0 - smoothstep( mNear, mFar, depth );", "	gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n")
            },
            normal: {
                uniforms: {
                    opacity: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: ["varying vec3 vNormal;", n.ShaderChunk.common, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vNormal = normalize( normalMatrix * normal );", n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", n.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
            },
            cube: {
                uniforms: {
                    tCube: {
                        type: "t",
                        value: null
                    },
                    tFlip: {
                        type: "f",
                        value: -1
                    }
                },
                vertexShader: ["varying vec3 vWorldPosition;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform samplerCube tCube;", "uniform float tFlip;", "varying vec3 vWorldPosition;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", n.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        type: "t",
                        value: null
                    },
                    tFlip: {
                        type: "f",
                        value: -1
                    }
                },
                vertexShader: ["varying vec3 vWorldPosition;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform sampler2D tEquirect;", "uniform float tFlip;", "varying vec3 vWorldPosition;", n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "vec3 direction = normalize( vWorldPosition );", "vec2 sampleUV;", "sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );", "sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "gl_FragColor = texture2D( tEquirect, sampleUV );", n.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
            },
            depthRGBA: {
                uniforms: {},
                vertexShader: [n.ShaderChunk.common, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", n.ShaderChunk.skinbase_vertex, n.ShaderChunk.begin_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.project_vertex, n.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: [n.ShaderChunk.common, n.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {", "	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "	res -= res.xxyz * bit_mask;", "	return res;", "}", "void main() {", n.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );", "	#else", "		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "	#endif", "}"].join("\n")
            }
        }, n.WebGLRenderer = function(t) {
            function e(t, e, i, r) {
                at === !0 && (t *= r, e *= r, i *= r), Gt.clearColor(t, e, i, r)
            }

            function i() {
                qt.init(), Gt.viewport(Ct, Pt, Lt, Rt), e(st.r, st.g, st.b, ht)
            }

            function r() {
                wt = null, Et = null, St = "", Tt = -1, Vt = !0, qt.reset()
            }

            function a(t) {
                t.preventDefault(), r(), i(), Yt.clear()
            }

            function o(t) {
                var e = t.target;
                e.removeEventListener("dispose", o), l(e), zt.textures--
            }

            function s(t) {
                var e = t.target;
                e.removeEventListener("dispose", s), c(e), zt.textures--
            }

            function h(t) {
                var e = t.target;
                e.removeEventListener("dispose", h), u(e)
            }

            function l(t) {
                var e = Yt.get(t);
                if (t.image && e.__image__webglTextureCube) Gt.deleteTexture(e.__image__webglTextureCube);
                else {
                    if (void 0 === e.__webglInit) return;
                    Gt.deleteTexture(e.__webglTexture)
                }
                Yt["delete"](t)
            }

            function c(t) {
                var e = Yt.get(t);
                if (t && void 0 !== e.__webglTexture) {
                    if (Gt.deleteTexture(e.__webglTexture), t instanceof n.WebGLRenderTargetCube)
                        for (var i = 0; 6 > i; i++) Gt.deleteFramebuffer(e.__webglFramebuffer[i]), Gt.deleteRenderbuffer(e.__webglRenderbuffer[i]);
                    else Gt.deleteFramebuffer(e.__webglFramebuffer), Gt.deleteRenderbuffer(e.__webglRenderbuffer);
                    Yt["delete"](t)
                }
            }

            function u(t) {
                p(t), Yt["delete"](t)
            }

            function p(t) {
                var e = Yt.get(t).program;
                t.program = void 0, void 0 !== e && Zt.releaseProgram(e)
            }

            function d(t, e, i, r) {
                var a;
                if (i instanceof n.InstancedBufferGeometry && (a = Wt.get("ANGLE_instanced_arrays"), null === a)) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                void 0 === r && (r = 0), qt.initAttributes();
                var o = i.attributes,
                    s = e.getAttributes(),
                    h = t.defaultAttributeValues;
                for (var l in s) {
                    var c = s[l];
                    if (c >= 0) {
                        var u = o[l];
                        if (void 0 !== u) {
                            qt.enableAttribute(c);
                            var p = u.itemSize,
                                d = Kt.getAttributeBuffer(u);
                            if (u instanceof n.InterleavedBufferAttribute) {
                                var f = u.data,
                                    m = f.stride,
                                    g = u.offset;
                                if (Gt.bindBuffer(Gt.ARRAY_BUFFER, d), Gt.vertexAttribPointer(c, p, Gt.FLOAT, !1, m * f.array.BYTES_PER_ELEMENT, (r * m + g) * f.array.BYTES_PER_ELEMENT), f instanceof n.InstancedInterleavedBuffer) {
                                    if (null === a) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");
                                    a.vertexAttribDivisorANGLE(c, f.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = f.meshPerAttribute * f.count)
                                }
                            } else if (Gt.bindBuffer(Gt.ARRAY_BUFFER, d), Gt.vertexAttribPointer(c, p, Gt.FLOAT, !1, 0, r * p * 4), u instanceof n.InstancedBufferAttribute) {
                                if (null === a) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");
                                a.vertexAttribDivisorANGLE(c, u.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = u.meshPerAttribute * u.count)
                            }
                        } else if (void 0 !== h) {
                            var v = h[l];
                            if (void 0 !== v) switch (v.length) {
                                case 2:
                                    Gt.vertexAttrib2fv(c, v);
                                    break;
                                case 3:
                                    Gt.vertexAttrib3fv(c, v);
                                    break;
                                case 4:
                                    Gt.vertexAttrib4fv(c, v);
                                    break;
                                default:
                                    Gt.vertexAttrib1fv(c, v)
                            }
                        }
                    }
                }
                qt.disableUnusedAttributes()
            }

            function f(t, e) {
                return e[0] - t[0]
            }

            function m(t, e) {
                return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
            }

            function g(t, e) {
                return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
            }

            function v(t) {
                var e, i;
                t.material.transparent ? (e = gt, i = ++vt) : (e = ft, i = ++mt), i < e.length ? e[i] = t : e.push(t)
            }

            function y(t, e, i, r, n) {
                var a, o;
                i.transparent ? (a = pt, o = ++dt) : (a = ct, o = ++ut);
                var s = a[o];
                void 0 !== s ? (s.id = t.id, s.object = t, s.geometry = e, s.material = i, s.z = Ut.z, s.group = n) : (s = {
                    id: t.id,
                    object: t,
                    geometry: e,
                    material: i,
                    z: Ut.z,
                    group: n
                }, a.push(s))
            }

            function _(t) {
                if (t.visible !== !1) {
                    if (t instanceof n.Light) lt.push(t);
                    else if (t instanceof n.Sprite) _t.push(t);
                    else if (t instanceof n.LensFlare) xt.push(t);
                    else if (t instanceof n.ImmediateRenderObject) v(t);
                    else if ((t instanceof n.Mesh || t instanceof n.Line || t instanceof n.Points) && (t instanceof n.SkinnedMesh && t.skeleton.update(), t.frustumCulled === !1 || Ot.intersectsObject(t) === !0)) {
                        var e = t.material;
                        if (e.visible === !0) {
                            bt.sortObjects === !0 && (Ut.setFromMatrixPosition(t.matrixWorld), Ut.applyProjection(kt));
                            var i = Kt.update(t);
                            if (e instanceof n.MeshFaceMaterial)
                                for (var r = i.groups, a = e.materials, o = 0, s = r.length; s > o; o++) {
                                    var h = r[o],
                                        l = a[h.materialIndex];
                                    l.visible === !0 && y(t, i, l, Ut.z, h)
                                } else y(t, i, e, Ut.z)
                        }
                    }
                    for (var c = t.children, o = 0, s = c.length; s > o; o++) _(c[o])
                }
            }

            function x(t, e, i, r, n) {
                for (var a = 0, o = t.length; o > a; a++) {
                    var s = t[a],
                        h = s.object,
                        l = s.geometry,
                        c = void 0 === n ? s.material : n,
                        u = s.group;
                    h.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, h.matrixWorld), h.normalMatrix.getNormalMatrix(h.modelViewMatrix), bt.renderBufferDirect(e, i, r, l, c, h, u)
                }
            }

            function b(t, e, i, r, n) {
                for (var a = n, o = 0, s = t.length; s > o; o++) {
                    var h = t[o];
                    h.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, h.matrixWorld), h.normalMatrix.getNormalMatrix(h.modelViewMatrix), void 0 === n && (a = h.material), M(a);
                    var l = S(e, i, r, a, h);
                    St = "", h.render(function(t) {
                        bt.renderBufferImmediate(t, l, a)
                    })
                }
            }

            function w(t, e, i, r) {
                var a = Yt.get(t),
                    o = Zt.getParameters(t, e, i, r),
                    s = Zt.getProgramCode(t, o),
                    l = a.program,
                    c = !0;
                if (void 0 === l) t.addEventListener("dispose", h);
                else if (l.code !== s) p(t);
                else {
                    if (void 0 !== o.shaderID) return;
                    c = !1
                }
                if (c) {
                    if (o.shaderID) {
                        var u = n.ShaderLib[o.shaderID];
                        a.__webglShader = {
                            name: t.type,
                            uniforms: n.UniformsUtils.clone(u.uniforms),
                            vertexShader: u.vertexShader,
                            fragmentShader: u.fragmentShader
                        }
                    } else a.__webglShader = {
                        name: t.type,
                        uniforms: t.uniforms,
                        vertexShader: t.vertexShader,
                        fragmentShader: t.fragmentShader
                    };
                    t.__webglShader = a.__webglShader, l = Zt.acquireProgram(t, o, s), a.program = l, t.program = l
                }
                var d = l.getAttributes();
                if (t.morphTargets) {
                    t.numSupportedMorphTargets = 0;
                    for (var f = 0; f < bt.maxMorphTargets; f++) d["morphTarget" + f] >= 0 && t.numSupportedMorphTargets++
                }
                if (t.morphNormals)
                    for (t.numSupportedMorphNormals = 0, f = 0; f < bt.maxMorphNormals; f++) d["morphNormal" + f] >= 0 && t.numSupportedMorphNormals++;
                a.uniformsList = [];
                var m = a.program.getUniforms();
                for (var g in a.__webglShader.uniforms) {
                    var v = m[g];
                    v && a.uniformsList.push([a.__webglShader.uniforms[g], v])
                }
            }

            function M(t) {
                T(t), t.transparent === !0 ? qt.setBlending(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha) : qt.setBlending(n.NoBlending), qt.setDepthFunc(t.depthFunc), qt.setDepthTest(t.depthTest), qt.setDepthWrite(t.depthWrite), qt.setColorWrite(t.colorWrite), qt.setPolygonOffset(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
            }

            function T(t) {
                t.side !== n.DoubleSide ? qt.enable(Gt.CULL_FACE) : qt.disable(Gt.CULL_FACE), qt.setFlipSided(t.side === n.BackSide)
            }

            function S(t, e, i, r, a) {
                At = 0;
                var o = Yt.get(r);
                (r.needsUpdate || !o.program) && (w(r, e, i, a), r.needsUpdate = !1);
                var s = !1,
                    h = !1,
                    l = !1,
                    c = o.program,
                    u = c.getUniforms(),
                    p = o.__webglShader.uniforms;
                if (c.id !== wt && (Gt.useProgram(c.program), wt = c.id, s = !0, h = !0, l = !0), r.id !== Tt && (-1 === Tt && (l = !0), Tt = r.id, h = !0), (s || t !== Et) && (Gt.uniformMatrix4fv(u.projectionMatrix, !1, t.projectionMatrix.elements), Xt.logarithmicDepthBuffer && Gt.uniform1f(u.logDepthBufFC, 2 / (Math.log(t.far + 1) / Math.LN2)), t !== Et && (Et = t), (r instanceof n.ShaderMaterial || r instanceof n.MeshPhongMaterial || r.envMap) && void 0 !== u.cameraPosition && (Ut.setFromMatrixPosition(t.matrixWorld), Gt.uniform3f(u.cameraPosition, Ut.x, Ut.y, Ut.z)), (r instanceof n.MeshPhongMaterial || r instanceof n.MeshLambertMaterial || r instanceof n.MeshBasicMaterial || r instanceof n.ShaderMaterial || r.skinning) && void 0 !== u.viewMatrix && Gt.uniformMatrix4fv(u.viewMatrix, !1, t.matrixWorldInverse.elements)), r.skinning)
                    if (a.bindMatrix && void 0 !== u.bindMatrix && Gt.uniformMatrix4fv(u.bindMatrix, !1, a.bindMatrix.elements), a.bindMatrixInverse && void 0 !== u.bindMatrixInverse && Gt.uniformMatrix4fv(u.bindMatrixInverse, !1, a.bindMatrixInverse.elements), Xt.floatVertexTextures && a.skeleton && a.skeleton.useVertexTexture) {
                        if (void 0 !== u.boneTexture) {
                            var d = U();
                            Gt.uniform1i(u.boneTexture, d), bt.setTexture(a.skeleton.boneTexture, d)
                        }
                        void 0 !== u.boneTextureWidth && Gt.uniform1i(u.boneTextureWidth, a.skeleton.boneTextureWidth), void 0 !== u.boneTextureHeight && Gt.uniform1i(u.boneTextureHeight, a.skeleton.boneTextureHeight)
                    } else a.skeleton && a.skeleton.boneMatrices && void 0 !== u.boneGlobalMatrices && Gt.uniformMatrix4fv(u.boneGlobalMatrices, !1, a.skeleton.boneMatrices);
                return h && (i && r.fog && L(p, i), (r instanceof n.MeshPhongMaterial || r instanceof n.MeshLambertMaterial || r.lights) && (Vt && (l = !0, I(e, t), Vt = !1), l ? (D(p, It), F(p, !0)) : F(p, !1)), (r instanceof n.MeshBasicMaterial || r instanceof n.MeshLambertMaterial || r instanceof n.MeshPhongMaterial) && E(p, r), r instanceof n.LineBasicMaterial ? A(p, r) : r instanceof n.LineDashedMaterial ? (A(p, r), C(p, r)) : r instanceof n.PointsMaterial ? P(p, r) : r instanceof n.MeshPhongMaterial ? R(p, r) : r instanceof n.MeshDepthMaterial ? (p.mNear.value = t.near, p.mFar.value = t.far, p.opacity.value = r.opacity) : r instanceof n.MeshNormalMaterial && (p.opacity.value = r.opacity), a.receiveShadow && !r._shadowPass && O(p, e), B(o.uniformsList)), k(u, a), void 0 !== u.modelMatrix && Gt.uniformMatrix4fv(u.modelMatrix, !1, a.matrixWorld.elements), c
            }

            function E(t, e) {
                t.opacity.value = e.opacity, t.diffuse.value = e.color, e.emissive && (t.emissive.value = e.emissive), t.map.value = e.map, t.specularMap.value = e.specularMap, t.alphaMap.value = e.alphaMap, e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
                var i;
                if (e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i) {
                    var r = i.offset,
                        a = i.repeat;
                    t.offsetRepeat.value.set(r.x, r.y, a.x, a.y)
                }
                t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap instanceof n.WebGLRenderTargetCube ? 1 : -1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio
            }

            function A(t, e) {
                t.diffuse.value = e.color, t.opacity.value = e.opacity
            }

            function C(t, e) {
                t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
            }

            function P(t, e) {
                if (t.psColor.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size, t.scale.value = Z.height / 2, t.map.value = e.map, null !== e.map) {
                    var i = e.map.offset,
                        r = e.map.repeat;
                    t.offsetRepeat.value.set(i.x, i.y, r.x, r.y)
                }
            }

            function L(t, e) {
                t.fogColor.value = e.color, e instanceof n.Fog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e instanceof n.FogExp2 && (t.fogDensity.value = e.density)
            }

            function R(t, e) {
                t.specular.value = e.specular, t.shininess.value = e.shininess, e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }

            function D(t, e) {
                t.ambientLightColor.value = e.ambient, t.directionalLightColor.value = e.directional.colors, t.directionalLightDirection.value = e.directional.positions, t.pointLightColor.value = e.point.colors, t.pointLightPosition.value = e.point.positions, t.pointLightDistance.value = e.point.distances, t.pointLightDecay.value = e.point.decays, t.spotLightColor.value = e.spot.colors, t.spotLightPosition.value = e.spot.positions, t.spotLightDistance.value = e.spot.distances, t.spotLightDirection.value = e.spot.directions, t.spotLightAngleCos.value = e.spot.anglesCos, t.spotLightExponent.value = e.spot.exponents, t.spotLightDecay.value = e.spot.decays, t.hemisphereLightSkyColor.value = e.hemi.skyColors, t.hemisphereLightGroundColor.value = e.hemi.groundColors, t.hemisphereLightDirection.value = e.hemi.positions
            }

            function F(t, e) {
                t.ambientLightColor.needsUpdate = e, t.directionalLightColor.needsUpdate = e, t.directionalLightDirection.needsUpdate = e, t.pointLightColor.needsUpdate = e, t.pointLightPosition.needsUpdate = e, t.pointLightDistance.needsUpdate = e, t.pointLightDecay.needsUpdate = e, t.spotLightColor.needsUpdate = e, t.spotLightPosition.needsUpdate = e, t.spotLightDistance.needsUpdate = e, t.spotLightDirection.needsUpdate = e, t.spotLightAngleCos.needsUpdate = e, t.spotLightExponent.needsUpdate = e, t.spotLightDecay.needsUpdate = e, t.hemisphereLightSkyColor.needsUpdate = e, t.hemisphereLightGroundColor.needsUpdate = e, t.hemisphereLightDirection.needsUpdate = e
            }

            function O(t, e) {
                if (t.shadowMatrix)
                    for (var i = 0, r = 0, a = e.length; a > r; r++) {
                        var o = e[r];
                        o.castShadow && (o instanceof n.SpotLight || o instanceof n.DirectionalLight) && (t.shadowMap.value[i] = o.shadowMap, t.shadowMapSize.value[i] = o.shadowMapSize, t.shadowMatrix.value[i] = o.shadowMatrix, t.shadowDarkness.value[i] = o.shadowDarkness, t.shadowBias.value[i] = o.shadowBias, i++)
                    }
            }

            function k(t, e) {
                Gt.uniformMatrix4fv(t.modelViewMatrix, !1, e.modelViewMatrix.elements), t.normalMatrix && Gt.uniformMatrix3fv(t.normalMatrix, !1, e.normalMatrix.elements)
            }

            function U() {
                var t = At;
                return t >= Xt.maxTextures && console.warn("WebGLRenderer: trying to use " + t + " texture units while this GPU supports only " + Xt.maxTextures), At += 1, t
            }

            function B(t) {
                for (var e, i, r = 0, a = t.length; a > r; r++) {
                    var o = t[r][0];
                    if (o.needsUpdate !== !1) {
                        var s = o.type,
                            h = o.value,
                            l = t[r][1];
                        switch (s) {
                            case "1i":
                                Gt.uniform1i(l, h);
                                break;
                            case "1f":
                                Gt.uniform1f(l, h);
                                break;
                            case "2f":
                                Gt.uniform2f(l, h[0], h[1]);
                                break;
                            case "3f":
                                Gt.uniform3f(l, h[0], h[1], h[2]);
                                break;
                            case "4f":
                                Gt.uniform4f(l, h[0], h[1], h[2], h[3]);
                                break;
                            case "1iv":
                                Gt.uniform1iv(l, h);
                                break;
                            case "3iv":
                                Gt.uniform3iv(l, h);
                                break;
                            case "1fv":
                                Gt.uniform1fv(l, h);
                                break;
                            case "2fv":
                                Gt.uniform2fv(l, h);
                                break;
                            case "3fv":
                                Gt.uniform3fv(l, h);
                                break;
                            case "4fv":
                                Gt.uniform4fv(l, h);
                                break;
                            case "Matrix3fv":
                                Gt.uniformMatrix3fv(l, !1, h);
                                break;
                            case "Matrix4fv":
                                Gt.uniformMatrix4fv(l, !1, h);
                                break;
                            case "i":
                                Gt.uniform1i(l, h);
                                break;
                            case "f":
                                Gt.uniform1f(l, h);
                                break;
                            case "v2":
                                Gt.uniform2f(l, h.x, h.y);
                                break;
                            case "v3":
                                Gt.uniform3f(l, h.x, h.y, h.z);
                                break;
                            case "v4":
                                Gt.uniform4f(l, h.x, h.y, h.z, h.w);
                                break;
                            case "c":
                                Gt.uniform3f(l, h.r, h.g, h.b);
                                break;
                            case "iv1":
                                Gt.uniform1iv(l, h);
                                break;
                            case "iv":
                                Gt.uniform3iv(l, h);
                                break;
                            case "fv1":
                                Gt.uniform1fv(l, h);
                                break;
                            case "fv":
                                Gt.uniform3fv(l, h);
                                break;
                            case "v2v":
                                void 0 === o._array && (o._array = new Float32Array(2 * h.length));
                                for (var c = 0, u = 0, p = h.length; p > c; c++, u += 2) o._array[u + 0] = h[c].x, o._array[u + 1] = h[c].y;
                                Gt.uniform2fv(l, o._array);
                                break;
                            case "v3v":
                                void 0 === o._array && (o._array = new Float32Array(3 * h.length));
                                for (var c = 0, d = 0, p = h.length; p > c; c++, d += 3) o._array[d + 0] = h[c].x, o._array[d + 1] = h[c].y, o._array[d + 2] = h[c].z;
                                Gt.uniform3fv(l, o._array);
                                break;
                            case "v4v":
                                void 0 === o._array && (o._array = new Float32Array(4 * h.length));
                                for (var c = 0, f = 0, p = h.length; p > c; c++, f += 4) o._array[f + 0] = h[c].x, o._array[f + 1] = h[c].y, o._array[f + 2] = h[c].z, o._array[f + 3] = h[c].w;
                                Gt.uniform4fv(l, o._array);
                                break;
                            case "m3":
                                Gt.uniformMatrix3fv(l, !1, h.elements);
                                break;
                            case "m3v":
                                void 0 === o._array && (o._array = new Float32Array(9 * h.length));
                                for (var c = 0, p = h.length; p > c; c++) h[c].flattenToArrayOffset(o._array, 9 * c);
                                Gt.uniformMatrix3fv(l, !1, o._array);
                                break;
                            case "m4":
                                Gt.uniformMatrix4fv(l, !1, h.elements);
                                break;
                            case "m4v":
                                void 0 === o._array && (o._array = new Float32Array(16 * h.length));
                                for (var c = 0, p = h.length; p > c; c++) h[c].flattenToArrayOffset(o._array, 16 * c);
                                Gt.uniformMatrix4fv(l, !1, o._array);
                                break;
                            case "t":
                                if (e = h, i = U(), Gt.uniform1i(l, i), !e) continue;
                                e instanceof n.CubeTexture || Array.isArray(e.image) && 6 === e.image.length ? H(e, i) : e instanceof n.WebGLRenderTargetCube ? j(e, i) : bt.setTexture(e, i);
                                break;
                            case "tv":
                                void 0 === o._array && (o._array = []);
                                for (var c = 0, p = o.value.length; p > c; c++) o._array[c] = U();
                                Gt.uniform1iv(l, o._array);
                                for (var c = 0, p = o.value.length; p > c; c++) e = o.value[c], i = o._array[c], e && bt.setTexture(e, i);
                                break;
                            default:
                                console.warn("THREE.WebGLRenderer: Unknown uniform type: " + s)
                        }
                    }
                }
            }

            function V(t, e, i, r) {
                t[e + 0] = i.r * r, t[e + 1] = i.g * r, t[e + 2] = i.b * r
            }

            function I(t, e) {
                var i, r, a, o, s, h, l, c, u = 0,
                    p = 0,
                    d = 0,
                    f = It,
                    m = e.matrixWorldInverse,
                    g = f.directional.colors,
                    v = f.directional.positions,
                    y = f.point.colors,
                    _ = f.point.positions,
                    x = f.point.distances,
                    b = f.point.decays,
                    w = f.spot.colors,
                    M = f.spot.positions,
                    T = f.spot.distances,
                    S = f.spot.directions,
                    E = f.spot.anglesCos,
                    A = f.spot.exponents,
                    C = f.spot.decays,
                    P = f.hemi.skyColors,
                    L = f.hemi.groundColors,
                    R = f.hemi.positions,
                    D = 0,
                    F = 0,
                    O = 0,
                    k = 0,
                    U = 0,
                    B = 0,
                    I = 0,
                    z = 0,
                    N = 0,
                    G = 0,
                    H = 0,
                    j = 0;
                for (i = 0, r = t.length; r > i; i++)
                    if (a = t[i], !a.onlyShadow)
                        if (o = a.color, l = a.intensity, c = a.distance, a instanceof n.AmbientLight) {
                            if (!a.visible) continue;
                            u += o.r, p += o.g, d += o.b
                        } else if (a instanceof n.DirectionalLight) {
                            if (U += 1, !a.visible) continue;
                            Bt.setFromMatrixPosition(a.matrixWorld), Ut.setFromMatrixPosition(a.target.matrixWorld), Bt.sub(Ut), Bt.transformDirection(m), N = 3 * D, v[N + 0] = Bt.x, v[N + 1] = Bt.y, v[N + 2] = Bt.z, V(g, N, o, l), D += 1
                        } else if (a instanceof n.PointLight) {
                            if (B += 1, !a.visible) continue;
                            G = 3 * F, V(y, G, o, l), Ut.setFromMatrixPosition(a.matrixWorld), Ut.applyMatrix4(m), _[G + 0] = Ut.x, _[G + 1] = Ut.y, _[G + 2] = Ut.z, x[F] = c, b[F] = 0 === a.distance ? 0 : a.decay, F += 1
                        } else if (a instanceof n.SpotLight) {
                            if (I += 1, !a.visible) continue;
                            H = 3 * O, V(w, H, o, l), Bt.setFromMatrixPosition(a.matrixWorld), Ut.copy(Bt).applyMatrix4(m), M[H + 0] = Ut.x, M[H + 1] = Ut.y, M[H + 2] = Ut.z, T[O] = c, Ut.setFromMatrixPosition(a.target.matrixWorld), Bt.sub(Ut), Bt.transformDirection(m), S[H + 0] = Bt.x, S[H + 1] = Bt.y, S[H + 2] = Bt.z, E[O] = Math.cos(a.angle), A[O] = a.exponent, C[O] = 0 === a.distance ? 0 : a.decay, O += 1
                        } else if (a instanceof n.HemisphereLight) {
                            if (z += 1, !a.visible) continue;
                            Bt.setFromMatrixPosition(a.matrixWorld), Bt.transformDirection(m), j = 3 * k, R[j + 0] = Bt.x, R[j + 1] = Bt.y, R[j + 2] = Bt.z, s = a.color, h = a.groundColor, V(P, j, s, l), V(L, j, h, l), k += 1
                        }
                for (i = 3 * D, r = Math.max(g.length, 3 * U); r > i; i++) g[i] = 0;
                for (i = 3 * F, r = Math.max(y.length, 3 * B); r > i; i++) y[i] = 0;
                for (i = 3 * O, r = Math.max(w.length, 3 * I); r > i; i++) w[i] = 0;
                for (i = 3 * k, r = Math.max(P.length, 3 * z); r > i; i++) P[i] = 0;
                for (i = 3 * k, r = Math.max(L.length, 3 * z); r > i; i++) L[i] = 0;
                f.directional.length = D, f.point.length = F, f.spot.length = O, f.hemi.length = k, f.ambient[0] = u, f.ambient[1] = p, f.ambient[2] = d
            }

            function z(t, e, i) {
                var r;
                if (i ? (Gt.texParameteri(t, Gt.TEXTURE_WRAP_S, K(e.wrapS)), Gt.texParameteri(t, Gt.TEXTURE_WRAP_T, K(e.wrapT)), Gt.texParameteri(t, Gt.TEXTURE_MAG_FILTER, K(e.magFilter)), Gt.texParameteri(t, Gt.TEXTURE_MIN_FILTER, K(e.minFilter))) : (Gt.texParameteri(t, Gt.TEXTURE_WRAP_S, Gt.CLAMP_TO_EDGE), Gt.texParameteri(t, Gt.TEXTURE_WRAP_T, Gt.CLAMP_TO_EDGE), (e.wrapS !== n.ClampToEdgeWrapping || e.wrapT !== n.ClampToEdgeWrapping) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( " + e.sourceFile + " )"), Gt.texParameteri(t, Gt.TEXTURE_MAG_FILTER, Y(e.magFilter)), Gt.texParameteri(t, Gt.TEXTURE_MIN_FILTER, Y(e.minFilter)), e.minFilter !== n.NearestFilter && e.minFilter !== n.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( " + e.sourceFile + " )")), r = Wt.get("EXT_texture_filter_anisotropic")) {
                    if (e.type === n.FloatType && null === Wt.get("OES_texture_float_linear")) return;
                    if (e.type === n.HalfFloatType && null === Wt.get("OES_texture_half_float_linear")) return;
                    (e.anisotropy > 1 || Yt.get(e).__currentAnisotropy) && (Gt.texParameterf(t, r.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e.anisotropy, bt.getMaxAnisotropy())), Yt.get(e).__currentAnisotropy = e.anisotropy)
                }
            }

            function N(t, e, i) {
                void 0 === t.__webglInit && (t.__webglInit = !0, e.__webglInit = !0, e.addEventListener("dispose", o), t.__webglTexture = Gt.createTexture(), zt.textures++), qt.activeTexture(Gt.TEXTURE0 + i), qt.bindTexture(Gt.TEXTURE_2D, t.__webglTexture), Gt.pixelStorei(Gt.UNPACK_FLIP_Y_WEBGL, e.flipY), Gt.pixelStorei(Gt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), Gt.pixelStorei(Gt.UNPACK_ALIGNMENT, e.unpackAlignment), e.image = G(e.image, Xt.maxTextureSize);
                var r = e.image,
                    a = n.Math.isPowerOfTwo(r.width) && n.Math.isPowerOfTwo(r.height),
                    s = K(e.format),
                    h = K(e.type);
                z(Gt.TEXTURE_2D, e, a);
                var l, c = e.mipmaps;
                if (e instanceof n.DataTexture)
                    if (c.length > 0 && a) {
                        for (var u = 0, p = c.length; p > u; u++) l = c[u], qt.texImage2D(Gt.TEXTURE_2D, u, s, l.width, l.height, 0, s, h, l.data);
                        e.generateMipmaps = !1
                    } else qt.texImage2D(Gt.TEXTURE_2D, 0, s, r.width, r.height, 0, s, h, r.data);
                else if (e instanceof n.CompressedTexture)
                    for (var u = 0, p = c.length; p > u; u++) l = c[u], e.format !== n.RGBAFormat && e.format !== n.RGBFormat ? qt.getCompressedTextureFormats().indexOf(s) > -1 ? qt.compressedTexImage2D(Gt.TEXTURE_2D, u, s, l.width, l.height, 0, l.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : qt.texImage2D(Gt.TEXTURE_2D, u, s, l.width, l.height, 0, s, h, l.data);
                else if (c.length > 0 && a) {
                    for (var u = 0, p = c.length; p > u; u++) l = c[u], qt.texImage2D(Gt.TEXTURE_2D, u, s, s, h, l);
                    e.generateMipmaps = !1
                } else qt.texImage2D(Gt.TEXTURE_2D, 0, s, s, h, e.image);
                e.generateMipmaps && a && Gt.generateMipmap(Gt.TEXTURE_2D), t.__version = e.version, e.onUpdate && e.onUpdate(e)
            }

            function G(t, e) {
                if (t.width > e || t.height > e) {
                    var i = e / Math.max(t.width, t.height),
                        r = document.createElement("canvas");
                    r.width = Math.floor(t.width * i), r.height = Math.floor(t.height * i);
                    var n = r.getContext("2d");
                    return n.drawImage(t, 0, 0, t.width, t.height, 0, 0, r.width, r.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + r.width + "x" + r.height, t), r
                }
                return t
            }

            function H(t, e) {
                var i = Yt.get(t);
                if (6 === t.image.length)
                    if (t.version > 0 && i.__version !== t.version) {
                        i.__image__webglTextureCube || (t.addEventListener("dispose", o), i.__image__webglTextureCube = Gt.createTexture(), zt.textures++), qt.activeTexture(Gt.TEXTURE0 + e), qt.bindTexture(Gt.TEXTURE_CUBE_MAP, i.__image__webglTextureCube), Gt.pixelStorei(Gt.UNPACK_FLIP_Y_WEBGL, t.flipY);
                        for (var r = t instanceof n.CompressedTexture, a = t.image[0] instanceof n.DataTexture, s = [], h = 0; 6 > h; h++) !bt.autoScaleCubemaps || r || a ? s[h] = a ? t.image[h].image : t.image[h] : s[h] = G(t.image[h], Xt.maxCubemapSize);
                        var l = s[0],
                            c = n.Math.isPowerOfTwo(l.width) && n.Math.isPowerOfTwo(l.height),
                            u = K(t.format),
                            p = K(t.type);
                        z(Gt.TEXTURE_CUBE_MAP, t, c);
                        for (var h = 0; 6 > h; h++)
                            if (r)
                                for (var d, f = s[h].mipmaps, m = 0, g = f.length; g > m; m++) d = f[m], t.format !== n.RGBAFormat && t.format !== n.RGBFormat ? qt.getCompressedTextureFormats().indexOf(u) > -1 ? qt.compressedTexImage2D(Gt.TEXTURE_CUBE_MAP_POSITIVE_X + h, m, u, d.width, d.height, 0, d.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : qt.texImage2D(Gt.TEXTURE_CUBE_MAP_POSITIVE_X + h, m, u, d.width, d.height, 0, u, p, d.data);
                            else a ? qt.texImage2D(Gt.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, u, s[h].width, s[h].height, 0, u, p, s[h].data) : qt.texImage2D(Gt.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, u, u, p, s[h]);
                        t.generateMipmaps && c && Gt.generateMipmap(Gt.TEXTURE_CUBE_MAP), i.__version = t.version, t.onUpdate && t.onUpdate(t)
                    } else qt.activeTexture(Gt.TEXTURE0 + e), qt.bindTexture(Gt.TEXTURE_CUBE_MAP, i.__image__webglTextureCube)
            }

            function j(t, e) {
                qt.activeTexture(Gt.TEXTURE0 + e), qt.bindTexture(Gt.TEXTURE_CUBE_MAP, Yt.get(t).__webglTexture)
            }

            function W(t, e, i) {
                Gt.bindFramebuffer(Gt.FRAMEBUFFER, t), Gt.framebufferTexture2D(Gt.FRAMEBUFFER, Gt.COLOR_ATTACHMENT0, i, Yt.get(e).__webglTexture, 0)
            }

            function X(t, e) {
                Gt.bindRenderbuffer(Gt.RENDERBUFFER, t), e.depthBuffer && !e.stencilBuffer ? (Gt.renderbufferStorage(Gt.RENDERBUFFER, Gt.DEPTH_COMPONENT16, e.width, e.height), Gt.framebufferRenderbuffer(Gt.FRAMEBUFFER, Gt.DEPTH_ATTACHMENT, Gt.RENDERBUFFER, t)) : e.depthBuffer && e.stencilBuffer ? (Gt.renderbufferStorage(Gt.RENDERBUFFER, Gt.DEPTH_STENCIL, e.width, e.height), Gt.framebufferRenderbuffer(Gt.FRAMEBUFFER, Gt.DEPTH_STENCIL_ATTACHMENT, Gt.RENDERBUFFER, t)) : Gt.renderbufferStorage(Gt.RENDERBUFFER, Gt.RGBA4, e.width, e.height)
            }

            function q(t) {
                t instanceof n.WebGLRenderTargetCube ? (qt.bindTexture(Gt.TEXTURE_CUBE_MAP, Yt.get(t).__webglTexture), Gt.generateMipmap(Gt.TEXTURE_CUBE_MAP), qt.bindTexture(Gt.TEXTURE_CUBE_MAP, null)) : (qt.bindTexture(Gt.TEXTURE_2D, Yt.get(t).__webglTexture), Gt.generateMipmap(Gt.TEXTURE_2D), qt.bindTexture(Gt.TEXTURE_2D, null))
            }

            function Y(t) {
                return t === n.NearestFilter || t === n.NearestMipMapNearestFilter || t === n.NearestMipMapLinearFilter ? Gt.NEAREST : Gt.LINEAR
            }

            function K(t) {
                var e;
                if (t === n.RepeatWrapping) return Gt.REPEAT;
                if (t === n.ClampToEdgeWrapping) return Gt.CLAMP_TO_EDGE;
                if (t === n.MirroredRepeatWrapping) return Gt.MIRRORED_REPEAT;
                if (t === n.NearestFilter) return Gt.NEAREST;
                if (t === n.NearestMipMapNearestFilter) return Gt.NEAREST_MIPMAP_NEAREST;
                if (t === n.NearestMipMapLinearFilter) return Gt.NEAREST_MIPMAP_LINEAR;
                if (t === n.LinearFilter) return Gt.LINEAR;
                if (t === n.LinearMipMapNearestFilter) return Gt.LINEAR_MIPMAP_NEAREST;
                if (t === n.LinearMipMapLinearFilter) return Gt.LINEAR_MIPMAP_LINEAR;
                if (t === n.UnsignedByteType) return Gt.UNSIGNED_BYTE;
                if (t === n.UnsignedShort4444Type) return Gt.UNSIGNED_SHORT_4_4_4_4;
                if (t === n.UnsignedShort5551Type) return Gt.UNSIGNED_SHORT_5_5_5_1;
                if (t === n.UnsignedShort565Type) return Gt.UNSIGNED_SHORT_5_6_5;
                if (t === n.ByteType) return Gt.BYTE;
                if (t === n.ShortType) return Gt.SHORT;
                if (t === n.UnsignedShortType) return Gt.UNSIGNED_SHORT;
                if (t === n.IntType) return Gt.INT;
                if (t === n.UnsignedIntType) return Gt.UNSIGNED_INT;
                if (t === n.FloatType) return Gt.FLOAT;
                if (e = Wt.get("OES_texture_half_float"), null !== e && t === n.HalfFloatType) return e.HALF_FLOAT_OES;
                if (t === n.AlphaFormat) return Gt.ALPHA;
                if (t === n.RGBFormat) return Gt.RGB;
                if (t === n.RGBAFormat) return Gt.RGBA;
                if (t === n.LuminanceFormat) return Gt.LUMINANCE;
                if (t === n.LuminanceAlphaFormat) return Gt.LUMINANCE_ALPHA;
                if (t === n.AddEquation) return Gt.FUNC_ADD;
                if (t === n.SubtractEquation) return Gt.FUNC_SUBTRACT;
                if (t === n.ReverseSubtractEquation) return Gt.FUNC_REVERSE_SUBTRACT;
                if (t === n.ZeroFactor) return Gt.ZERO;
                if (t === n.OneFactor) return Gt.ONE;
                if (t === n.SrcColorFactor) return Gt.SRC_COLOR;
                if (t === n.OneMinusSrcColorFactor) return Gt.ONE_MINUS_SRC_COLOR;
                if (t === n.SrcAlphaFactor) return Gt.SRC_ALPHA;
                if (t === n.OneMinusSrcAlphaFactor) return Gt.ONE_MINUS_SRC_ALPHA;
                if (t === n.DstAlphaFactor) return Gt.DST_ALPHA;
                if (t === n.OneMinusDstAlphaFactor) return Gt.ONE_MINUS_DST_ALPHA;
                if (t === n.DstColorFactor) return Gt.DST_COLOR;
                if (t === n.OneMinusDstColorFactor) return Gt.ONE_MINUS_DST_COLOR;
                if (t === n.SrcAlphaSaturateFactor) return Gt.SRC_ALPHA_SATURATE;
                if (e = Wt.get("WEBGL_compressed_texture_s3tc"), null !== e) {
                    if (t === n.RGB_S3TC_DXT1_Format) return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (t === n.RGBA_S3TC_DXT1_Format) return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (t === n.RGBA_S3TC_DXT3_Format) return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (t === n.RGBA_S3TC_DXT5_Format) return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if (e = Wt.get("WEBGL_compressed_texture_pvrtc"), null !== e) {
                    if (t === n.RGB_PVRTC_4BPPV1_Format) return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (t === n.RGB_PVRTC_2BPPV1_Format) return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (t === n.RGBA_PVRTC_4BPPV1_Format) return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (t === n.RGBA_PVRTC_2BPPV1_Format) return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (e = Wt.get("EXT_blend_minmax"), null !== e) {
                    if (t === n.MinEquation) return e.MIN_EXT;
                    if (t === n.MaxEquation) return e.MAX_EXT
                }
                return 0
            }
            console.log("THREE.WebGLRenderer", n.REVISION), t = t || {};
            var Z = void 0 !== t.canvas ? t.canvas : document.createElement("canvas"),
                Q = void 0 !== t.context ? t.context : null,
                J = Z.width,
                $ = Z.height,
                tt = 1,
                et = void 0 !== t.alpha ? t.alpha : !1,
                it = void 0 !== t.depth ? t.depth : !0,
                rt = void 0 !== t.stencil ? t.stencil : !0,
                nt = void 0 !== t.antialias ? t.antialias : !1,
                at = void 0 !== t.premultipliedAlpha ? t.premultipliedAlpha : !0,
                ot = void 0 !== t.preserveDrawingBuffer ? t.preserveDrawingBuffer : !1,
                st = new n.Color(0),
                ht = 0,
                lt = [],
                ct = [],
                ut = -1,
                pt = [],
                dt = -1,
                ft = [],
                mt = -1,
                gt = [],
                vt = -1,
                yt = new Float32Array(8),
                _t = [],
                xt = [];
            this.domElement = Z, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0;
            var bt = this,
                wt = null,
                Mt = null,
                Tt = -1,
                St = "",
                Et = null,
                At = 0,
                Ct = 0,
                Pt = 0,
                Lt = Z.width,
                Rt = Z.height,
                Dt = 0,
                Ft = 0,
                Ot = new n.Frustum,
                kt = new n.Matrix4,
                Ut = new n.Vector3,
                Bt = new n.Vector3,
                Vt = !0,
                It = {
                    ambient: [0, 0, 0],
                    directional: {
                        length: 0,
                        colors: [],
                        positions: []
                    },
                    point: {
                        length: 0,
                        colors: [],
                        positions: [],
                        distances: [],
                        decays: []
                    },
                    spot: {
                        length: 0,
                        colors: [],
                        positions: [],
                        distances: [],
                        directions: [],
                        anglesCos: [],
                        exponents: [],
                        decays: []
                    },
                    hemi: {
                        length: 0,
                        skyColors: [],
                        groundColors: [],
                        positions: []
                    }
                },
                zt = {
                    geometries: 0,
                    textures: 0
                },
                Nt = {
                    calls: 0,
                    vertices: 0,
                    faces: 0,
                    points: 0
                };
            this.info = {
                render: Nt,
                memory: zt,
                programs: null
            };
            var Gt;
            try {
                var Ht = {
                    alpha: et,
                    depth: it,
                    stencil: rt,
                    antialias: nt,
                    premultipliedAlpha: at,
                    preserveDrawingBuffer: ot
                };
                if (Gt = Q || Z.getContext("webgl", Ht) || Z.getContext("experimental-webgl", Ht), null === Gt) throw null !== Z.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
                Z.addEventListener("webglcontextlost", a, !1)
            } catch (jt) {
                console.error("THREE.WebGLRenderer: " + jt)
            }
            var Wt = new n.WebGLExtensions(Gt);
            Wt.get("OES_texture_float"), Wt.get("OES_texture_float_linear"), Wt.get("OES_texture_half_float"), Wt.get("OES_texture_half_float_linear"), Wt.get("OES_standard_derivatives"), Wt.get("ANGLE_instanced_arrays"), Wt.get("OES_element_index_uint") && (n.BufferGeometry.MaxIndex = 4294967296);
            var Xt = new n.WebGLCapabilities(Gt, Wt, t),
                qt = new n.WebGLState(Gt, Wt, K),
                Yt = new n.WebGLProperties,
                Kt = new n.WebGLObjects(Gt, Yt, this.info),
                Zt = new n.WebGLPrograms(this, Xt);
            this.info.programs = Zt.programs;
            var Qt = new n.WebGLBufferRenderer(Gt, Wt, Nt),
                Jt = new n.WebGLIndexedBufferRenderer(Gt, Wt, Nt);
            i(), this.context = Gt, this.capabilities = Xt, this.extensions = Wt, this.state = qt;
            var $t = new n.WebGLShadowMap(this, lt, Kt);
            this.shadowMap = $t;
            var te = new n.SpritePlugin(this, _t),
                ee = new n.LensFlarePlugin(this, xt);
            this.getContext = function() {
                return Gt
            }, this.getContextAttributes = function() {
                return Gt.getContextAttributes()
            }, this.forceContextLoss = function() {
                Wt.get("WEBGL_lose_context").loseContext()
            }, this.getMaxAnisotropy = function() {
                var t;
                return function() {
                    if (void 0 !== t) return t;
                    var e = Wt.get("EXT_texture_filter_anisotropic");
                    return t = null !== e ? Gt.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                }
            }(), this.getPrecision = function() {
                return Xt.precision
            }, this.getPixelRatio = function() {
                return tt
            }, this.setPixelRatio = function(t) {
                void 0 !== t && (tt = t)
            }, this.getSize = function() {
                return {
                    width: J,
                    height: $
                }
            }, this.setSize = function(t, e, i) {
                J = t, $ = e, Z.width = t * tt, Z.height = e * tt, i !== !1 && (Z.style.width = t + "px", Z.style.height = e + "px"), this.setViewport(0, 0, t, e)
            }, this.setViewport = function(t, e, i, r) {
                Ct = t * tt, Pt = e * tt, Lt = i * tt, Rt = r * tt, Gt.viewport(Ct, Pt, Lt, Rt)
            }, this.setScissor = function(t, e, i, r) {
                Gt.scissor(t * tt, e * tt, i * tt, r * tt)
            }, this.enableScissorTest = function(t) {
                qt.setScissorTest(t)
            }, this.getClearColor = function() {
                return st
            }, this.setClearColor = function(t, i) {
                st.set(t), ht = void 0 !== i ? i : 1, e(st.r, st.g, st.b, ht)
            }, this.getClearAlpha = function() {
                return ht
            }, this.setClearAlpha = function(t) {
                ht = t, e(st.r, st.g, st.b, ht)
            }, this.clear = function(t, e, i) {
                var r = 0;
                (void 0 === t || t) && (r |= Gt.COLOR_BUFFER_BIT), (void 0 === e || e) && (r |= Gt.DEPTH_BUFFER_BIT), (void 0 === i || i) && (r |= Gt.STENCIL_BUFFER_BIT), Gt.clear(r)
            }, this.clearColor = function() {
                Gt.clear(Gt.COLOR_BUFFER_BIT)
            }, this.clearDepth = function() {
                Gt.clear(Gt.DEPTH_BUFFER_BIT)
            }, this.clearStencil = function() {
                Gt.clear(Gt.STENCIL_BUFFER_BIT)
            }, this.clearTarget = function(t, e, i, r) {
                this.setRenderTarget(t), this.clear(e, i, r)
            }, this.resetGLState = r, this.dispose = function() {
                Z.removeEventListener("webglcontextlost", a, !1)
            }, this.renderBufferImmediate = function(t, e, i) {
                qt.initAttributes();
                var r = Yt.get(t);
                t.hasPositions && !r.position && (r.position = Gt.createBuffer()), t.hasNormals && !r.normal && (r.normal = Gt.createBuffer()), t.hasUvs && !r.uv && (r.uv = Gt.createBuffer()), t.hasColors && !r.color && (r.color = Gt.createBuffer());
                var a = e.getAttributes();
                if (t.hasPositions && (Gt.bindBuffer(Gt.ARRAY_BUFFER, r.position), Gt.bufferData(Gt.ARRAY_BUFFER, t.positionArray, Gt.DYNAMIC_DRAW), qt.enableAttribute(a.position), Gt.vertexAttribPointer(a.position, 3, Gt.FLOAT, !1, 0, 0)), t.hasNormals) {
                    if (Gt.bindBuffer(Gt.ARRAY_BUFFER, r.normal), "MeshPhongMaterial" !== i.type && i.shading === n.FlatShading)
                        for (var o = 0, s = 3 * t.count; s > o; o += 9) {
                            var h = t.normalArray,
                                l = (h[o + 0] + h[o + 3] + h[o + 6]) / 3,
                                c = (h[o + 1] + h[o + 4] + h[o + 7]) / 3,
                                u = (h[o + 2] + h[o + 5] + h[o + 8]) / 3;
                            h[o + 0] = l, h[o + 1] = c, h[o + 2] = u, h[o + 3] = l, h[o + 4] = c, h[o + 5] = u, h[o + 6] = l, h[o + 7] = c, h[o + 8] = u
                        }
                    Gt.bufferData(Gt.ARRAY_BUFFER, t.normalArray, Gt.DYNAMIC_DRAW), qt.enableAttribute(a.normal), Gt.vertexAttribPointer(a.normal, 3, Gt.FLOAT, !1, 0, 0)
                }
                t.hasUvs && i.map && (Gt.bindBuffer(Gt.ARRAY_BUFFER, r.uv), Gt.bufferData(Gt.ARRAY_BUFFER, t.uvArray, Gt.DYNAMIC_DRAW), qt.enableAttribute(a.uv), Gt.vertexAttribPointer(a.uv, 2, Gt.FLOAT, !1, 0, 0)), t.hasColors && i.vertexColors !== n.NoColors && (Gt.bindBuffer(Gt.ARRAY_BUFFER, r.color), Gt.bufferData(Gt.ARRAY_BUFFER, t.colorArray, Gt.DYNAMIC_DRAW), qt.enableAttribute(a.color), Gt.vertexAttribPointer(a.color, 3, Gt.FLOAT, !1, 0, 0)), qt.disableUnusedAttributes(), Gt.drawArrays(Gt.TRIANGLES, 0, t.count), t.count = 0
            }, this.renderBufferDirect = function(t, e, i, r, a, o, s) {
                M(a);
                var h = S(t, e, i, a, o),
                    l = !1,
                    c = r.id + "_" + h.id + "_" + a.wireframe;
                c !== St && (St = c, l = !0);
                var u = o.morphTargetInfluences;
                if (void 0 !== u) {
                    for (var p = [], m = 0, g = u.length; g > m; m++) {
                        var v = u[m];
                        p.push([v, m])
                    }
                    p.sort(f), p.length > 8 && (p.length = 8);
                    for (var y = r.morphAttributes, m = 0, g = p.length; g > m; m++) {
                        var v = p[m];
                        if (yt[m] = v[0], 0 !== v[0]) {
                            var _ = v[1];
                            a.morphTargets === !0 && y.position && r.addAttribute("morphTarget" + m, y.position[_]), a.morphNormals === !0 && y.normal && r.addAttribute("morphNormal" + m, y.normal[_])
                        } else a.morphTargets === !0 && r.removeAttribute("morphTarget" + m), a.morphNormals === !0 && r.removeAttribute("morphNormal" + m)
                    }
                    var x = h.getUniforms();
                    null !== x.morphTargetInfluences && Gt.uniform1fv(x.morphTargetInfluences, yt), l = !0
                }
                var _ = r.index,
                    b = r.attributes.position;
                a.wireframe === !0 && (_ = Kt.getWireframeAttribute(r));
                var w;
                if (null !== _ ? (w = Jt, w.setIndex(_)) : w = Qt, l && (d(a, h, r), null !== _ && Gt.bindBuffer(Gt.ELEMENT_ARRAY_BUFFER, Kt.getAttributeBuffer(_))), void 0 === s) {
                    var T;
                    T = null !== _ ? _.count : b instanceof n.InterleavedBufferAttribute ? b.data.array.length / 3 : b.count;
                    var E = r.drawRange;
                    s = {
                        start: E.start,
                        count: Math.min(E.count, T)
                    }
                }
                if (o instanceof n.Mesh) a.wireframe === !0 ? (qt.setLineWidth(a.wireframeLinewidth * tt), w.setMode(Gt.LINES)) : w.setMode(Gt.TRIANGLES), r instanceof n.InstancedBufferGeometry && r.maxInstancedCount > 0 ? w.renderInstances(r) : w.render(s.start, s.count);
                else if (o instanceof n.Line) {
                    var A = a.linewidth;
                    void 0 === A && (A = 1), qt.setLineWidth(A * tt), o instanceof n.LineSegments ? w.setMode(Gt.LINES) : w.setMode(Gt.LINE_STRIP), w.render(s.start, s.count)
                } else o instanceof n.Points && (w.setMode(Gt.POINTS), w.render(s.start, s.count))
            }, this.render = function(t, e, i, r) {
                if (e instanceof n.Camera == !1) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                var a = t.fog;
                if (St = "", Tt = -1, Et = null, Vt = !0, t.autoUpdate === !0 && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld), kt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), Ot.setFromMatrix(kt), lt.length = 0, ut = -1, dt = -1, mt = -1, vt = -1, _t.length = 0, xt.length = 0, _(t), ct.length = ut + 1, pt.length = dt + 1, ft.length = mt + 1, gt.length = vt + 1, bt.sortObjects === !0 && (ct.sort(m), pt.sort(g)), $t.render(t, e), Nt.calls = 0, Nt.vertices = 0, Nt.faces = 0, Nt.points = 0, this.setRenderTarget(i), (this.autoClear || r) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), t.overrideMaterial) {
                    var o = t.overrideMaterial;
                    x(ct, e, lt, a, o), x(pt, e, lt, a, o), b(ft, e, lt, a, o), b(gt, e, lt, a, o)
                } else qt.setBlending(n.NoBlending), x(ct, e, lt, a), b(ft, e, lt, a), x(pt, e, lt, a), b(gt, e, lt, a);
                te.render(t, e), ee.render(t, e, Dt, Ft), i && i.generateMipmaps && i.minFilter !== n.NearestFilter && i.minFilter !== n.LinearFilter && q(i), qt.setDepthTest(!0), qt.setDepthWrite(!0), qt.setColorWrite(!0)
            }, this.setFaceCulling = function(t, e) {
                t === n.CullFaceNone ? qt.disable(Gt.CULL_FACE) : (e === n.FrontFaceDirectionCW ? Gt.frontFace(Gt.CW) : Gt.frontFace(Gt.CCW), t === n.CullFaceBack ? Gt.cullFace(Gt.BACK) : t === n.CullFaceFront ? Gt.cullFace(Gt.FRONT) : Gt.cullFace(Gt.FRONT_AND_BACK), qt.enable(Gt.CULL_FACE))
            }, this.setTexture = function(t, e) {
                var i = Yt.get(t);
                if (t.version > 0 && i.__version !== t.version) {
                    var r = t.image;
                    return void 0 === r ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", t) : r.complete === !1 ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", t) : void N(i, t, e)
                }
                qt.activeTexture(Gt.TEXTURE0 + e), qt.bindTexture(Gt.TEXTURE_2D, i.__webglTexture)
            }, this.setRenderTarget = function(t) {
                var e = t instanceof n.WebGLRenderTargetCube;
                if (t && void 0 === Yt.get(t).__webglFramebuffer) {
                    var i = Yt.get(t);
                    void 0 === t.depthBuffer && (t.depthBuffer = !0), void 0 === t.stencilBuffer && (t.stencilBuffer = !0), t.addEventListener("dispose", s), i.__webglTexture = Gt.createTexture(), zt.textures++;
                    var r = n.Math.isPowerOfTwo(t.width) && n.Math.isPowerOfTwo(t.height),
                        a = K(t.format),
                        o = K(t.type);
                    if (e) {
                        i.__webglFramebuffer = [], i.__webglRenderbuffer = [], qt.bindTexture(Gt.TEXTURE_CUBE_MAP, i.__webglTexture), z(Gt.TEXTURE_CUBE_MAP, t, r);
                        for (var h = 0; 6 > h; h++) i.__webglFramebuffer[h] = Gt.createFramebuffer(), i.__webglRenderbuffer[h] = Gt.createRenderbuffer(), qt.texImage2D(Gt.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, a, t.width, t.height, 0, a, o, null), W(i.__webglFramebuffer[h], t, Gt.TEXTURE_CUBE_MAP_POSITIVE_X + h), X(i.__webglRenderbuffer[h], t);
                        t.generateMipmaps && r && Gt.generateMipmap(Gt.TEXTURE_CUBE_MAP)
                    } else i.__webglFramebuffer = Gt.createFramebuffer(), t.shareDepthFrom ? i.__webglRenderbuffer = t.shareDepthFrom.__webglRenderbuffer : i.__webglRenderbuffer = Gt.createRenderbuffer(), qt.bindTexture(Gt.TEXTURE_2D, i.__webglTexture), z(Gt.TEXTURE_2D, t, r), qt.texImage2D(Gt.TEXTURE_2D, 0, a, t.width, t.height, 0, a, o, null), W(i.__webglFramebuffer, t, Gt.TEXTURE_2D), t.shareDepthFrom ? t.depthBuffer && !t.stencilBuffer ? Gt.framebufferRenderbuffer(Gt.FRAMEBUFFER, Gt.DEPTH_ATTACHMENT, Gt.RENDERBUFFER, i.__webglRenderbuffer) : t.depthBuffer && t.stencilBuffer && Gt.framebufferRenderbuffer(Gt.FRAMEBUFFER, Gt.DEPTH_STENCIL_ATTACHMENT, Gt.RENDERBUFFER, i.__webglRenderbuffer) : X(i.__webglRenderbuffer, t), t.generateMipmaps && r && Gt.generateMipmap(Gt.TEXTURE_2D);
                    e ? qt.bindTexture(Gt.TEXTURE_CUBE_MAP, null) : qt.bindTexture(Gt.TEXTURE_2D, null), Gt.bindRenderbuffer(Gt.RENDERBUFFER, null), Gt.bindFramebuffer(Gt.FRAMEBUFFER, null)
                }
                var l, c, u, p, d;
                if (t) {
                    var i = Yt.get(t);
                    l = e ? i.__webglFramebuffer[t.activeCubeFace] : i.__webglFramebuffer, c = t.width, u = t.height, p = 0, d = 0
                } else l = null, c = Lt, u = Rt, p = Ct, d = Pt;
                l !== Mt && (Gt.bindFramebuffer(Gt.FRAMEBUFFER, l), Gt.viewport(p, d, c, u), Mt = l), Dt = c, Ft = u
            }, this.readRenderTargetPixels = function(t, e, i, r, a, o) {
                if (!(t instanceof n.WebGLRenderTarget)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                if (Yt.get(t).__webglFramebuffer) {
                    if (t.format !== n.RGBAFormat) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");
                    var s = !1;
                    Yt.get(t).__webglFramebuffer !== Mt && (Gt.bindFramebuffer(Gt.FRAMEBUFFER, Yt.get(t).__webglFramebuffer), s = !0), Gt.checkFramebufferStatus(Gt.FRAMEBUFFER) === Gt.FRAMEBUFFER_COMPLETE ? Gt.readPixels(e, i, r, a, Gt.RGBA, Gt.UNSIGNED_BYTE, o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."), s && Gt.bindFramebuffer(Gt.FRAMEBUFFER, Mt)
                }
            }, this.supportsFloatTextures = function() {
                return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), Wt.get("OES_texture_float")
            }, this.supportsHalfFloatTextures = function() {
                return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), Wt.get("OES_texture_half_float")
            }, this.supportsStandardDerivatives = function() {
                return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), Wt.get("OES_standard_derivatives")
            }, this.supportsCompressedTextureS3TC = function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), Wt.get("WEBGL_compressed_texture_s3tc")
            }, this.supportsCompressedTexturePVRTC = function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), Wt.get("WEBGL_compressed_texture_pvrtc")
            }, this.supportsBlendMinMax = function() {
                return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), Wt.get("EXT_blend_minmax")
            }, this.supportsVertexTextures = function() {
                return Xt.vertexTextures
            }, this.supportsInstancedArrays = function() {
                return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), Wt.get("ANGLE_instanced_arrays")
            }, this.initMaterial = function() {
                console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
            }, this.addPrePlugin = function() {
                console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
            }, this.addPostPlugin = function() {
                console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
            }, this.updateShadowMap = function() {
                console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
            }, Object.defineProperties(this, {
                shadowMapEnabled: {
                    get: function() {
                        return $t.enabled
                    },
                    set: function(t) {
                        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), $t.enabled = t
                    }
                },
                shadowMapType: {
                    get: function() {
                        return $t.type
                    },
                    set: function(t) {
                        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), $t.type = t
                    }
                },
                shadowMapCullFace: {
                    get: function() {
                        return $t.cullFace
                    },
                    set: function(t) {
                        console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), $t.cullFace = t
                    }
                },
                shadowMapDebug: {
                    get: function() {
                        return $t.debug
                    },
                    set: function(t) {
                        console.warn("THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug."), $t.debug = t
                    }
                }
            })
        }, n.WebGLRenderTarget = function(t, e, i) {
            this.uuid = n.Math.generateUUID(), this.width = t, this.height = e, i = i || {}, this.wrapS = void 0 !== i.wrapS ? i.wrapS : n.ClampToEdgeWrapping, this.wrapT = void 0 !== i.wrapT ? i.wrapT : n.ClampToEdgeWrapping, this.magFilter = void 0 !== i.magFilter ? i.magFilter : n.LinearFilter, this.minFilter = void 0 !== i.minFilter ? i.minFilter : n.LinearMipMapLinearFilter, this.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, this.offset = new n.Vector2(0, 0), this.repeat = new n.Vector2(1, 1), this.format = void 0 !== i.format ? i.format : n.RGBAFormat, this.type = void 0 !== i.type ? i.type : n.UnsignedByteType, this.depthBuffer = void 0 !== i.depthBuffer ? i.depthBuffer : !0, this.stencilBuffer = void 0 !== i.stencilBuffer ? i.stencilBuffer : !0, this.generateMipmaps = !0, this.shareDepthFrom = void 0 !== i.shareDepthFrom ? i.shareDepthFrom : null
        }, n.WebGLRenderTarget.prototype = {
            constructor: n.WebGLRenderTarget,
            setSize: function(t, e) {
                (this.width !== t || this.height !== e) && (this.width = t, this.height = e, this.dispose())
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.width = t.width, this.height = t.height, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.format = t.format, this.type = t.type, this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.generateMipmaps = t.generateMipmaps, this.shareDepthFrom = t.shareDepthFrom, this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, n.EventDispatcher.prototype.apply(n.WebGLRenderTarget.prototype), n.WebGLRenderTargetCube = function(t, e, i) {
            n.WebGLRenderTarget.call(this, t, e, i), this.activeCubeFace = 0
        }, n.WebGLRenderTargetCube.prototype = Object.create(n.WebGLRenderTarget.prototype), n.WebGLRenderTargetCube.prototype.constructor = n.WebGLRenderTargetCube, n.WebGLBufferRenderer = function(t, e, i) {
            function r(t) {
                s = t
            }

            function a(e, r) {
                t.drawArrays(s, e, r), i.calls++, i.vertices += r, s === t.TRIANGLES && (i.faces += r / 3)
            }

            function o(t) {
                var i = e.get("ANGLE_instanced_arrays");
                if (null === i) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                var r = t.attributes.position;
                r instanceof n.InterleavedBufferAttribute ? i.drawArraysInstancedANGLE(s, 0, r.data.count, t.maxInstancedCount) : i.drawArraysInstancedANGLE(s, 0, r.count, t.maxInstancedCount)
            }
            var s;
            this.setMode = r, this.render = a, this.renderInstances = o
        }, n.WebGLIndexedBufferRenderer = function(t, e, i) {
            function r(t) {
                s = t
            }

            function n(i) {
                i.array instanceof Uint32Array && e.get("OES_element_index_uint") ? (h = t.UNSIGNED_INT, l = 4) : (h = t.UNSIGNED_SHORT, l = 2)
            }

            function a(e, r) {
                t.drawElements(s, r, h, e * l), i.calls++, i.vertices += r, s === t.TRIANGLES && (i.faces += r / 3)
            }

            function o(t) {
                var i = e.get("ANGLE_instanced_arrays");
                if (null === i) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                var r = t.index;
                i.drawElementsInstancedANGLE(s, r.array.length, h, 0, t.maxInstancedCount)
            }
            var s, h, l;
            this.setMode = r, this.setIndex = n, this.render = a, this.renderInstances = o
        }, n.WebGLExtensions = function(t) {
            var e = {};
            this.get = function(i) {
                if (void 0 !== e[i]) return e[i];
                var r;
                switch (i) {
                    case "EXT_texture_filter_anisotropic":
                        r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        r = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        r = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    default:
                        r = t.getExtension(i)
                }
                return null === r && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), e[i] = r, r
            }
        }, n.WebGLCapabilities = function(t, e, i) {
            function r(e) {
                if ("highp" === e) {
                    if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
                    e = "mediump"
                }
                return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
            }
            this.getMaxPrecision = r, this.precision = void 0 !== i.precision ? i.precision : "highp", this.logarithmicDepthBuffer = void 0 !== i.logarithmicDepthBuffer ? i.logarithmicDepthBuffer : !1, this.maxTextures = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE), this.maxCubemapSize = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = t.getParameter(t.MAX_VARYING_VECTORS), this.maxFragmentUniforms = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = this.maxVertexTextures > 0, this.floatFragmentTextures = !!e.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
            var n = r(this.precision);
            n !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", n, "instead."), this.precision = n), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!e.get("EXT_frag_depth"))
        }, n.WebGLGeometries = function(t, e, i) {
            function r(t) {
                var e = t.geometry;
                if (void 0 !== c[e.id]) return c[e.id];
                e.addEventListener("dispose", a);
                var r;
                return e instanceof n.BufferGeometry ? r = e : e instanceof n.Geometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new n.BufferGeometry).setFromObject(t)), r = e._bufferGeometry), c[e.id] = r, i.memory.geometries++, r
            }

            function a(t) {
                var r = t.target,
                    n = c[r.id];
                h(n.attributes), r.removeEventListener("dispose", a), delete c[r.id];
                var o = e.get(r);
                o.wireframe && s(o.wireframe), i.memory.geometries--
            }

            function o(t) {
                return t instanceof n.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
            }

            function s(e) {
                var i = o(e);
                void 0 !== i && (t.deleteBuffer(i), l(e))
            }

            function h(t) {
                for (var e in t) s(t[e])
            }

            function l(t) {
                t instanceof n.InterleavedBufferAttribute ? e["delete"](t.data) : e["delete"](t)
            }
            var c = {};
            this.get = r
        }, n.WebGLObjects = function(t, e, i) {
            function r(e) {
                var i = u.get(e);
                e.geometry instanceof n.Geometry && i.updateFromObject(e);
                var r = i.index,
                    o = i.attributes;
                null !== r && a(r, t.ELEMENT_ARRAY_BUFFER);
                for (var s in o) a(o[s], t.ARRAY_BUFFER);
                var h = i.morphAttributes;
                for (var s in h)
                    for (var l = h[s], c = 0, p = l.length; p > c; c++) a(l[c], t.ARRAY_BUFFER);
                return i
            }

            function a(t, i) {
                var r = t instanceof n.InterleavedBufferAttribute ? t.data : t,
                    a = e.get(r);
                void 0 === a.__webglBuffer ? o(a, r, i) : a.version !== r.version && s(a, r, i)
            }

            function o(e, i, r) {
                e.__webglBuffer = t.createBuffer(), t.bindBuffer(r, e.__webglBuffer);
                var n = i.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
                t.bufferData(r, i.array, n), e.version = i.version
            }

            function s(e, i, r) {
                t.bindBuffer(r, e.__webglBuffer), i.dynamic === !1 || -1 === i.updateRange.count ? t.bufferSubData(r, 0, i.array) : 0 === i.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(r, i.updateRange.offset * i.array.BYTES_PER_ELEMENT, i.array.subarray(i.updateRange.offset, i.updateRange.offset + i.updateRange.count)), i.updateRange.count = 0), e.version = i.version
            }

            function h(t) {
                return t instanceof n.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
            }

            function l(i) {
                var r = e.get(i);
                if (void 0 !== r.wireframe) return r.wireframe;
                var o = [],
                    s = i.index,
                    h = i.attributes,
                    l = h.position;
                if (null !== s)
                    for (var u = {}, p = s.array, d = 0, f = p.length; f > d; d += 3) {
                        var m = p[d + 0],
                            g = p[d + 1],
                            v = p[d + 2];
                        c(u, m, g) && o.push(m, g), c(u, g, v) && o.push(g, v), c(u, v, m) && o.push(v, m)
                    } else
                    for (var p = h.position.array, d = 0, f = p.length / 3 - 1; f > d; d += 3) {
                        var m = d + 0,
                            g = d + 1,
                            v = d + 2;
                        o.push(m, g, g, v, v, m)
                    }
                var y = l.count > 65535 ? Uint32Array : Uint16Array,
                    _ = new n.BufferAttribute(new y(o), 1);
                return a(_, t.ELEMENT_ARRAY_BUFFER), r.wireframe = _, _
            }

            function c(t, e, i) {
                if (e > i) {
                    var r = e;
                    e = i, i = r
                }
                var n = t[e];
                return void 0 === n ? (t[e] = [i], !0) : -1 === n.indexOf(i) ? (n.push(i), !0) : !1
            }
            var u = new n.WebGLGeometries(t, e, i);
            this.getAttributeBuffer = h, this.getWireframeAttribute = l, this.update = r
        }, n.WebGLProgram = function() {
            function t(t) {
                var e = [];
                for (var i in t) {
                    var r = t[i];
                    r !== !1 && e.push("#define " + i + " " + r)
                }
                return e.join("\n")
            }

            function e(t, e, i) {
                for (var r = {}, n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), a = 0; n > a; a++) {
                    var o = t.getActiveUniform(e, a),
                        s = o.name,
                        h = t.getUniformLocation(e, s),
                        l = s.lastIndexOf("[0]"); - 1 !== l && l === s.length - 3 && (r[s.substr(0, l)] = h), r[s] = h
                }
                return r
            }

            function i(t, e, i) {
                for (var r = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; n > a; a++) {
                    var o = t.getActiveAttrib(e, a),
                        s = o.name;
                    r[s] = t.getAttribLocation(e, s)
                }
                return r
            }

            function r(t) {
                return "" !== t
            }
            var a = 0;
            return function(o, s, h, l) {
                var c = o.context,
                    u = h.defines,
                    p = h.__webglShader.vertexShader,
                    d = h.__webglShader.fragmentShader,
                    f = "SHADOWMAP_TYPE_BASIC";
                l.shadowMapType === n.PCFShadowMap ? f = "SHADOWMAP_TYPE_PCF" : l.shadowMapType === n.PCFSoftShadowMap && (f = "SHADOWMAP_TYPE_PCF_SOFT");
                var m = "ENVMAP_TYPE_CUBE",
                    g = "ENVMAP_MODE_REFLECTION",
                    v = "ENVMAP_BLENDING_MULTIPLY";
                if (l.envMap) {
                    switch (h.envMap.mapping) {
                        case n.CubeReflectionMapping:
                        case n.CubeRefractionMapping:
                            m = "ENVMAP_TYPE_CUBE";
                            break;
                        case n.EquirectangularReflectionMapping:
                        case n.EquirectangularRefractionMapping:
                            m = "ENVMAP_TYPE_EQUIREC";
                            break;
                        case n.SphericalReflectionMapping:
                            m = "ENVMAP_TYPE_SPHERE"
                    }
                    switch (h.envMap.mapping) {
                        case n.CubeRefractionMapping:
                        case n.EquirectangularRefractionMapping:
                            g = "ENVMAP_MODE_REFRACTION"
                    }
                    switch (h.combine) {
                        case n.MultiplyOperation:
                            v = "ENVMAP_BLENDING_MULTIPLY";
                            break;
                        case n.MixOperation:
                            v = "ENVMAP_BLENDING_MIX";
                            break;
                        case n.AddOperation:
                            v = "ENVMAP_BLENDING_ADD"
                    }
                }
                var y, _, x = o.gammaFactor > 0 ? o.gammaFactor : 1,
                    b = t(u),
                    w = c.createProgram();
                h instanceof n.RawShaderMaterial ? (y = "", _ = "") : (y = ["precision " + l.precision + " float;", "precision " + l.precision + " int;", "#define SHADER_NAME " + h.__webglShader.name, b, l.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", o.gammaInput ? "#define GAMMA_INPUT" : "", o.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + x, "#define MAX_DIR_LIGHTS " + l.maxDirLights, "#define MAX_POINT_LIGHTS " + l.maxPointLights, "#define MAX_SPOT_LIGHTS " + l.maxSpotLights, "#define MAX_HEMI_LIGHTS " + l.maxHemiLights, "#define MAX_SHADOWS " + l.maxShadows, "#define MAX_BONES " + l.maxBones, l.map ? "#define USE_MAP" : "", l.envMap ? "#define USE_ENVMAP" : "", l.envMap ? "#define " + g : "", l.lightMap ? "#define USE_LIGHTMAP" : "", l.aoMap ? "#define USE_AOMAP" : "", l.emissiveMap ? "#define USE_EMISSIVEMAP" : "", l.bumpMap ? "#define USE_BUMPMAP" : "", l.normalMap ? "#define USE_NORMALMAP" : "", l.displacementMap && l.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", l.specularMap ? "#define USE_SPECULARMAP" : "", l.alphaMap ? "#define USE_ALPHAMAP" : "", l.vertexColors ? "#define USE_COLOR" : "", l.flatShading ? "#define FLAT_SHADED" : "", l.skinning ? "#define USE_SKINNING" : "", l.useVertexTexture ? "#define BONE_TEXTURE" : "", l.morphTargets ? "#define USE_MORPHTARGETS" : "", l.morphNormals && l.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", l.doubleSided ? "#define DOUBLE_SIDED" : "", l.flipSided ? "#define FLIP_SIDED" : "", l.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", l.shadowMapEnabled ? "#define " + f : "", l.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", l.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", l.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", l.logarithmicDepthBuffer && o.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(r).join("\n"), _ = [l.bumpMap || l.normalMap || l.flatShading || h.derivatives ? "#extension GL_OES_standard_derivatives : enable" : "", l.logarithmicDepthBuffer && o.extensions.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", "precision " + l.precision + " float;", "precision " + l.precision + " int;", "#define SHADER_NAME " + h.__webglShader.name, b, "#define MAX_DIR_LIGHTS " + l.maxDirLights, "#define MAX_POINT_LIGHTS " + l.maxPointLights, "#define MAX_SPOT_LIGHTS " + l.maxSpotLights, "#define MAX_HEMI_LIGHTS " + l.maxHemiLights, "#define MAX_SHADOWS " + l.maxShadows, l.alphaTest ? "#define ALPHATEST " + l.alphaTest : "", o.gammaInput ? "#define GAMMA_INPUT" : "", o.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + x, l.useFog && l.fog ? "#define USE_FOG" : "", l.useFog && l.fogExp ? "#define FOG_EXP2" : "", l.map ? "#define USE_MAP" : "", l.envMap ? "#define USE_ENVMAP" : "", l.envMap ? "#define " + m : "", l.envMap ? "#define " + g : "", l.envMap ? "#define " + v : "", l.lightMap ? "#define USE_LIGHTMAP" : "", l.aoMap ? "#define USE_AOMAP" : "", l.emissiveMap ? "#define USE_EMISSIVEMAP" : "", l.bumpMap ? "#define USE_BUMPMAP" : "", l.normalMap ? "#define USE_NORMALMAP" : "", l.specularMap ? "#define USE_SPECULARMAP" : "", l.alphaMap ? "#define USE_ALPHAMAP" : "", l.vertexColors ? "#define USE_COLOR" : "", l.flatShading ? "#define FLAT_SHADED" : "", l.metal ? "#define METAL" : "", l.doubleSided ? "#define DOUBLE_SIDED" : "", l.flipSided ? "#define FLIP_SIDED" : "", l.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", l.shadowMapEnabled ? "#define " + f : "", l.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", l.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", l.logarithmicDepthBuffer && o.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "\n"].filter(r).join("\n"));
                var M = y + p,
                    T = _ + d,
                    S = n.WebGLShader(c, c.VERTEX_SHADER, M),
                    E = n.WebGLShader(c, c.FRAGMENT_SHADER, T);
                c.attachShader(w, S), c.attachShader(w, E), void 0 !== h.index0AttributeName ? c.bindAttribLocation(w, 0, h.index0AttributeName) : l.morphTargets === !0 && c.bindAttribLocation(w, 0, "position"), c.linkProgram(w);
                var A = c.getProgramInfoLog(w),
                    C = c.getShaderInfoLog(S),
                    P = c.getShaderInfoLog(E),
                    L = !0,
                    R = !0;
                c.getProgramParameter(w, c.LINK_STATUS) === !1 ? (L = !1, console.error("THREE.WebGLProgram: shader error: ", c.getError(), "gl.VALIDATE_STATUS", c.getProgramParameter(w, c.VALIDATE_STATUS), "gl.getProgramInfoLog", A, C, P)) : "" !== A ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", A) : ("" === C || "" === P) && (R = !1), R && (this.diagnostics = {
                    runnable: L,
                    material: h,
                    programLog: A,
                    vertexShader: {
                        log: C,
                        prefix: y
                    },
                    fragmentShader: {
                        log: P,
                        prefix: _
                    }
                }), c.deleteShader(S), c.deleteShader(E);
                var D;
                this.getUniforms = function() {
                    return void 0 === D && (D = e(c, w)), D
                };
                var F;
                return this.getAttributes = function() {
                    return void 0 === F && (F = i(c, w)), F
                }, this.destroy = function() {
                    c.deleteProgram(w), this.program = void 0
                }, Object.defineProperties(this, {
                    uniforms: {
                        get: function() {
                            return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                        }
                    },
                    attributes: {
                        get: function() {
                            return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                        }
                    }
                }), this.id = a++, this.code = s, this.usedTimes = 1, this.program = w, this.vertexShader = S, this.fragmentShader = E, this
            }
        }(), n.WebGLPrograms = function(t, e) {
            function i(t) {
                if (e.floatVertexTextures && t && t.skeleton && t.skeleton.useVertexTexture) return 1024;
                var i = e.maxVertexUniforms,
                    r = Math.floor((i - 20) / 4),
                    a = r;
                return void 0 !== t && t instanceof n.SkinnedMesh && (a = Math.min(t.skeleton.bones.length, a), a < t.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + t.skeleton.bones.length + ", this GPU supports just " + a + " (try OpenGL instead of ANGLE)")), a
            }

            function r(t) {
                for (var e = 0, i = 0, r = 0, a = 0, o = 0, s = t.length; s > o; o++) {
                    var h = t[o];
                    h.onlyShadow || h.visible === !1 || (h instanceof n.DirectionalLight && e++, h instanceof n.PointLight && i++, h instanceof n.SpotLight && r++, h instanceof n.HemisphereLight && a++)
                }
                return {
                    directional: e,
                    point: i,
                    spot: r,
                    hemi: a
                }
            }

            function a(t) {
                for (var e = 0, i = 0, r = t.length; r > i; i++) {
                    var a = t[i];
                    a.castShadow && (a instanceof n.SpotLight && e++, a instanceof n.DirectionalLight && e++)
                }
                return e
            }
            var o = [],
                s = {
                    MeshDepthMaterial: "depth",
                    MeshNormalMaterial: "normal",
                    MeshBasicMaterial: "basic",
                    MeshLambertMaterial: "lambert",
                    MeshPhongMaterial: "phong",
                    LineBasicMaterial: "basic",
                    LineDashedMaterial: "dashed",
                    PointsMaterial: "points"
                },
                h = ["precision", "supportsVertexTextures", "map", "envMap", "envMapMode", "lightMap", "aoMap", "emissiveMap", "bumpMap", "normalMap", "specularMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "maxDirLights", "maxPointLights", "maxSpotLights", "maxHemiLights", "maxShadows", "shadowMapEnabled", "shadowMapType", "shadowMapDebug", "alphaTest", "metal", "doubleSided", "flipSided"];
            this.getParameters = function(o, h, l, c) {
                var u = s[o.type],
                    p = r(h),
                    d = a(h),
                    f = i(c),
                    m = t.getPrecision();
                null !== o.precision && (m = e.getMaxPrecision(o.precision), m !== o.precision && console.warn("THREE.WebGLRenderer.initMaterial:", o.precision, "not supported, using", m, "instead."));
                var g = {
                    shaderID: u,
                    precision: m,
                    supportsVertexTextures: e.vertexTextures,
                    map: !!o.map,
                    envMap: !!o.envMap,
                    envMapMode: o.envMap && o.envMap.mapping,
                    lightMap: !!o.lightMap,
                    aoMap: !!o.aoMap,
                    emissiveMap: !!o.emissiveMap,
                    bumpMap: !!o.bumpMap,
                    normalMap: !!o.normalMap,
                    displacementMap: !!o.displacementMap,
                    specularMap: !!o.specularMap,
                    alphaMap: !!o.alphaMap,
                    combine: o.combine,
                    vertexColors: o.vertexColors,
                    fog: l,
                    useFog: o.fog,
                    fogExp: l instanceof n.FogExp2,
                    flatShading: o.shading === n.FlatShading,
                    sizeAttenuation: o.sizeAttenuation,
                    logarithmicDepthBuffer: e.logarithmicDepthBuffer,
                    skinning: o.skinning,
                    maxBones: f,
                    useVertexTexture: e.floatVertexTextures && c && c.skeleton && c.skeleton.useVertexTexture,
                    morphTargets: o.morphTargets,
                    morphNormals: o.morphNormals,
                    maxMorphTargets: t.maxMorphTargets,
                    maxMorphNormals: t.maxMorphNormals,
                    maxDirLights: p.directional,
                    maxPointLights: p.point,
                    maxSpotLights: p.spot,
                    maxHemiLights: p.hemi,
                    maxShadows: d,
                    shadowMapEnabled: t.shadowMap.enabled && c.receiveShadow && d > 0,
                    shadowMapType: t.shadowMap.type,
                    shadowMapDebug: t.shadowMap.debug,
                    alphaTest: o.alphaTest,
                    metal: o.metal,
                    doubleSided: o.side === n.DoubleSide,
                    flipSided: o.side === n.BackSide
                };
                return g
            }, this.getProgramCode = function(t, e) {
                var i = [];
                if (e.shaderID ? i.push(e.shaderID) : (i.push(t.fragmentShader), i.push(t.vertexShader)), void 0 !== t.defines)
                    for (var r in t.defines) i.push(r), i.push(t.defines[r]);
                for (var n = 0; n < h.length; n++) {
                    var a = h[n];
                    i.push(a), i.push(e[a])
                }
                return i.join()
            }, this.acquireProgram = function(e, i, r) {
                for (var a, s = 0, h = o.length; h > s; s++) {
                    var l = o[s];
                    if (l.code === r) {
                        a = l, ++a.usedTimes;
                        break
                    }
                }
                return void 0 === a && (a = new n.WebGLProgram(t, r, e, i), o.push(a)), a
            }, this.releaseProgram = function(t) {
                if (0 === --t.usedTimes) {
                    var e = o.indexOf(t);
                    o[e] = o[o.length - 1], o.pop(), t.destroy()
                }
            }, this.programs = o
        }, n.WebGLProperties = function() {
            var t = {};
            this.get = function(e) {
                var i = e.uuid,
                    r = t[i];
                return void 0 === r && (r = {}, t[i] = r), r
            }, this["delete"] = function(e) {
                delete t[e.uuid]
            }, this.clear = function() {
                t = {}
            }
        }, n.WebGLShader = function() {
            var t = function(t) {
                for (var e = t.split("\n"), i = 0; i < e.length; i++) e[i] = i + 1 + ": " + e[i];
                return e.join("\n")
            };
            return function(e, i, r) {
                var n = e.createShader(i);
                return e.shaderSource(n, r), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== e.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", i === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(n), t(r)), n
            }
        }(), n.WebGLShadowMap = function(t, e, i) {
            function r(t, e) {
                var i, r = t.geometry,
                    a = void 0 !== r.morphTargets && r.morphTargets.length > 0 && e.morphTargets,
                    o = t instanceof n.SkinnedMesh && e.skinning;
                return i = t.customDepthMaterial ? t.customDepthMaterial : o ? a ? v : g : a ? m : f, i.visible = e.visible, i.wireframe = e.wireframe, i.wireframeLinewidth = e.wireframeLinewidth, i
            }

            function a(t, e) {
                if (t.visible !== !1) {
                    if ((t instanceof n.Mesh || t instanceof n.Line || t instanceof n.Points) && t.castShadow && (t.frustumCulled === !1 || h.intersectsObject(t) === !0)) {
                        var i = t.material;
                        i.visible === !0 && (t.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, t.matrixWorld), u.push(t))
                    }
                    for (var r = t.children, o = 0, s = r.length; s > o; o++) a(r[o], e)
                }
            }
            var o = t.context,
                s = t.state,
                h = new n.Frustum,
                l = new n.Matrix4,
                c = (new n.Vector3, new n.Vector3, new n.Vector3),
                u = [],
                p = n.ShaderLib.depthRGBA,
                d = n.UniformsUtils.clone(p.uniforms),
                f = new n.ShaderMaterial({
                    uniforms: d,
                    vertexShader: p.vertexShader,
                    fragmentShader: p.fragmentShader
                }),
                m = new n.ShaderMaterial({
                    uniforms: d,
                    vertexShader: p.vertexShader,
                    fragmentShader: p.fragmentShader,
                    morphTargets: !0
                }),
                g = new n.ShaderMaterial({
                    uniforms: d,
                    vertexShader: p.vertexShader,
                    fragmentShader: p.fragmentShader,
                    skinning: !0
                }),
                v = new n.ShaderMaterial({
                    uniforms: d,
                    vertexShader: p.vertexShader,
                    fragmentShader: p.fragmentShader,
                    morphTargets: !0,
                    skinning: !0
                });
            f._shadowPass = !0, m._shadowPass = !0, g._shadowPass = !0, v._shadowPass = !0;
            var y = this;
            this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1,
                this.type = n.PCFShadowMap, this.cullFace = n.CullFaceFront, this.render = function(p, d) {
                if (y.enabled !== !1 && (y.autoUpdate !== !1 || y.needsUpdate !== !1)) {
                    o.clearColor(1, 1, 1, 1), s.disable(o.BLEND), s.enable(o.CULL_FACE), o.frontFace(o.CCW), y.cullFace === n.CullFaceFront ? o.cullFace(o.FRONT) : o.cullFace(o.BACK), s.setDepthTest(!0);
                    for (var f = 0, m = e.length; m > f; f++) {
                        var g = e[f];
                        if (g.castShadow) {
                            if (!g.shadowMap) {
                                var v = n.LinearFilter;
                                y.type === n.PCFSoftShadowMap && (v = n.NearestFilter);
                                var _ = {
                                    minFilter: v,
                                    magFilter: v,
                                    format: n.RGBAFormat
                                };
                                g.shadowMap = new n.WebGLRenderTarget(g.shadowMapWidth, g.shadowMapHeight, _), g.shadowMapSize = new n.Vector2(g.shadowMapWidth, g.shadowMapHeight), g.shadowMatrix = new n.Matrix4
                            }
                            if (!g.shadowCamera) {
                                if (g instanceof n.SpotLight) g.shadowCamera = new n.PerspectiveCamera(g.shadowCameraFov, g.shadowMapWidth / g.shadowMapHeight, g.shadowCameraNear, g.shadowCameraFar);
                                else {
                                    if (!(g instanceof n.DirectionalLight)) {
                                        console.error("THREE.ShadowMapPlugin: Unsupported light type for shadow", g);
                                        continue
                                    }
                                    g.shadowCamera = new n.OrthographicCamera(g.shadowCameraLeft, g.shadowCameraRight, g.shadowCameraTop, g.shadowCameraBottom, g.shadowCameraNear, g.shadowCameraFar)
                                }
                                p.add(g.shadowCamera), p.autoUpdate === !0 && p.updateMatrixWorld()
                            }
                            g.shadowCameraVisible && !g.cameraHelper && (g.cameraHelper = new n.CameraHelper(g.shadowCamera), p.add(g.cameraHelper));
                            var x = g.shadowMap,
                                b = g.shadowMatrix,
                                w = g.shadowCamera;
                            w.position.setFromMatrixPosition(g.matrixWorld), c.setFromMatrixPosition(g.target.matrixWorld), w.lookAt(c), w.updateMatrixWorld(), w.matrixWorldInverse.getInverse(w.matrixWorld), g.cameraHelper && (g.cameraHelper.visible = g.shadowCameraVisible), g.shadowCameraVisible && g.cameraHelper.update(), b.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), b.multiply(w.projectionMatrix), b.multiply(w.matrixWorldInverse), l.multiplyMatrices(w.projectionMatrix, w.matrixWorldInverse), h.setFromMatrix(l), t.setRenderTarget(x), t.clear(), u.length = 0, a(p, w);
                            for (var M = 0, T = u.length; T > M; M++) {
                                var S = u[M],
                                    E = i.update(S),
                                    A = S.material;
                                if (A instanceof n.MeshFaceMaterial)
                                    for (var C = E.groups, P = A.materials, L = 0, R = C.length; R > L; L++) {
                                        var D = C[L],
                                            F = P[D.materialIndex];
                                        F.visible === !0 && t.renderBufferDirect(w, e, null, E, r(S, F), S, D)
                                    } else t.renderBufferDirect(w, e, null, E, r(S, A), S)
                            }
                        }
                    }
                    var O = t.getClearColor(),
                        k = t.getClearAlpha();
                    t.setClearColor(O, k), s.enable(o.BLEND), y.cullFace === n.CullFaceFront && o.cullFace(o.BACK), t.resetGLState(), y.needsUpdate = !1
                }
            }
        }, n.WebGLState = function(t, e, i) {
            var r = this,
                a = new Uint8Array(16),
                o = new Uint8Array(16),
                s = {},
                h = null,
                l = null,
                c = null,
                u = null,
                p = null,
                d = null,
                f = null,
                m = null,
                g = null,
                v = null,
                y = null,
                _ = null,
                x = null,
                b = null,
                w = null,
                M = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                T = void 0,
                S = {};
            this.init = function() {
                t.clearColor(0, 0, 0, 1), t.clearDepth(1), t.clearStencil(0), this.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.frontFace(t.CCW), t.cullFace(t.BACK), this.enable(t.CULL_FACE), this.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA)
            }, this.initAttributes = function() {
                for (var t = 0, e = a.length; e > t; t++) a[t] = 0
            }, this.enableAttribute = function(e) {
                a[e] = 1, 0 === o[e] && (t.enableVertexAttribArray(e), o[e] = 1)
            }, this.disableUnusedAttributes = function() {
                for (var e = 0, i = o.length; i > e; e++) o[e] !== a[e] && (t.disableVertexAttribArray(e), o[e] = 0)
            }, this.enable = function(e) {
                s[e] !== !0 && (t.enable(e), s[e] = !0)
            }, this.disable = function(e) {
                s[e] !== !1 && (t.disable(e), s[e] = !1)
            }, this.getCompressedTextureFormats = function() {
                if (null === h && (h = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc")))
                    for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), r = 0; r < i.length; r++) h.push(i[r]);
                return h
            }, this.setBlending = function(e, r, a, o, s, h, g) {
                e !== l && (e === n.NoBlending ? this.disable(t.BLEND) : e === n.AdditiveBlending ? (this.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE)) : e === n.SubtractiveBlending ? (this.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : e === n.MultiplyBlending ? (this.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR)) : e === n.CustomBlending ? this.enable(t.BLEND) : (this.enable(t.BLEND), t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)), l = e), e === n.CustomBlending ? (s = s || r, h = h || a, g = g || o, (r !== c || s !== d) && (t.blendEquationSeparate(i(r), i(s)), c = r, d = s), (a !== u || o !== p || h !== f || g !== m) && (t.blendFuncSeparate(i(a), i(o), i(h), i(g)), u = a, p = o, f = h, m = g)) : (c = null, u = null, p = null, d = null, f = null, m = null)
            }, this.setDepthFunc = function(e) {
                if (g !== e) {
                    if (e) switch (e) {
                        case n.NeverDepth:
                            t.depthFunc(t.NEVER);
                            break;
                        case n.AlwaysDepth:
                            t.depthFunc(t.ALWAYS);
                            break;
                        case n.LessDepth:
                            t.depthFunc(t.LESS);
                            break;
                        case n.LessEqualDepth:
                            t.depthFunc(t.LEQUAL);
                            break;
                        case n.EqualDepth:
                            t.depthFunc(t.EQUAL);
                            break;
                        case n.GreaterEqualDepth:
                            t.depthFunc(t.GEQUAL);
                            break;
                        case n.GreaterDepth:
                            t.depthFunc(t.GREATER);
                            break;
                        case n.NotEqualDepth:
                            t.depthFunc(t.NOTEQUAL);
                            break;
                        default:
                            t.depthFunc(t.LEQUAL)
                    } else t.depthFunc(t.LEQUAL);
                    g = e
                }
            }, this.setDepthTest = function(e) {
                e ? this.enable(t.DEPTH_TEST) : this.disable(t.DEPTH_TEST)
            }, this.setDepthWrite = function(e) {
                v !== e && (t.depthMask(e), v = e)
            }, this.setColorWrite = function(e) {
                y !== e && (t.colorMask(e, e, e, e), y = e)
            }, this.setFlipSided = function(e) {
                _ !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), _ = e)
            }, this.setLineWidth = function(e) {
                e !== x && (t.lineWidth(e), x = e)
            }, this.setPolygonOffset = function(e, i, r) {
                e ? this.enable(t.POLYGON_OFFSET_FILL) : this.disable(t.POLYGON_OFFSET_FILL), !e || b === i && w === r || (t.polygonOffset(i, r), b = i, w = r)
            }, this.setScissorTest = function(e) {
                e ? this.enable(t.SCISSOR_TEST) : this.disable(t.SCISSOR_TEST)
            }, this.activeTexture = function(e) {
                void 0 === e && (e = t.TEXTURE0 + M - 1), T !== e && (t.activeTexture(e), T = e)
            }, this.bindTexture = function(e, i) {
                void 0 === T && r.activeTexture();
                var n = S[T];
                void 0 === n && (n = {
                    type: void 0,
                    texture: void 0
                }, S[T] = n), (n.type !== e || n.texture !== i) && (t.bindTexture(e, i), n.type = e, n.texture = i)
            }, this.compressedTexImage2D = function() {
                try {
                    t.compressedTexImage2D.apply(t, arguments)
                } catch (e) {
                    console.error(e)
                }
            }, this.texImage2D = function() {
                try {
                    t.texImage2D.apply(t, arguments)
                } catch (e) {
                    console.error(e)
                }
            }, this.reset = function() {
                for (var e = 0; e < o.length; e++) 1 === o[e] && (t.disableVertexAttribArray(e), o[e] = 0);
                s = {}, h = null, l = null, v = null, y = null, _ = null
            }
        }, n.LensFlarePlugin = function(t, e) {
            function i(e) {
                var i = p.createProgram(),
                    r = p.createShader(p.FRAGMENT_SHADER),
                    n = p.createShader(p.VERTEX_SHADER),
                    a = "precision " + t.getPrecision() + " float;\n";
                return p.shaderSource(r, a + e.fragmentShader), p.shaderSource(n, a + e.vertexShader), p.compileShader(r), p.compileShader(n), p.attachShader(i, r), p.attachShader(i, n), p.linkProgram(i), i
            }
            var r, a, o, s, h, l, c, u, p = t.context,
                d = t.state,
                f = function() {
                    var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                        e = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    r = p.createBuffer(), a = p.createBuffer(), p.bindBuffer(p.ARRAY_BUFFER, r), p.bufferData(p.ARRAY_BUFFER, t, p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), p.bufferData(p.ELEMENT_ARRAY_BUFFER, e, p.STATIC_DRAW), c = p.createTexture(), u = p.createTexture(), d.bindTexture(p.TEXTURE_2D, c), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0, p.RGB, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), d.bindTexture(p.TEXTURE_2D, u), p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), l = p.getParameter(p.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
                    var n;
                    n = l ? {
                        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                        fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                    } : {
                        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                        fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                    }, o = i(n), s = {
                        vertex: p.getAttribLocation(o, "position"),
                        uv: p.getAttribLocation(o, "uv")
                    }, h = {
                        renderType: p.getUniformLocation(o, "renderType"),
                        map: p.getUniformLocation(o, "map"),
                        occlusionMap: p.getUniformLocation(o, "occlusionMap"),
                        opacity: p.getUniformLocation(o, "opacity"),
                        color: p.getUniformLocation(o, "color"),
                        scale: p.getUniformLocation(o, "scale"),
                        rotation: p.getUniformLocation(o, "rotation"),
                        screenPosition: p.getUniformLocation(o, "screenPosition")
                    }
                };
            this.render = function(i, m, g, v) {
                if (0 !== e.length) {
                    var y = new n.Vector3,
                        _ = v / g,
                        x = .5 * g,
                        b = .5 * v,
                        w = 16 / v,
                        M = new n.Vector2(w * _, w),
                        T = new n.Vector3(1, 1, 0),
                        S = new n.Vector2(1, 1);
                    void 0 === o && f(), p.useProgram(o), d.initAttributes(), d.enableAttribute(s.vertex), d.enableAttribute(s.uv), d.disableUnusedAttributes(), p.uniform1i(h.occlusionMap, 0), p.uniform1i(h.map, 1), p.bindBuffer(p.ARRAY_BUFFER, r), p.vertexAttribPointer(s.vertex, 2, p.FLOAT, !1, 16, 0), p.vertexAttribPointer(s.uv, 2, p.FLOAT, !1, 16, 8), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a), d.disable(p.CULL_FACE), p.depthMask(!1);
                    for (var E = 0, A = e.length; A > E; E++) {
                        w = 16 / v, M.set(w * _, w);
                        var C = e[E];
                        if (y.set(C.matrixWorld.elements[12], C.matrixWorld.elements[13], C.matrixWorld.elements[14]), y.applyMatrix4(m.matrixWorldInverse), y.applyProjection(m.projectionMatrix), T.copy(y), S.x = T.x * x + x, S.y = T.y * b + b, l || S.x > 0 && S.x < g && S.y > 0 && S.y < v) {
                            d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, null), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, c), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, S.x - 8, S.y - 8, 16, 16, 0), p.uniform1i(h.renderType, 0), p.uniform2f(h.scale, M.x, M.y), p.uniform3f(h.screenPosition, T.x, T.y, T.z), d.disable(p.BLEND), d.enable(p.DEPTH_TEST), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, u), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, S.x - 8, S.y - 8, 16, 16, 0), p.uniform1i(h.renderType, 1), d.disable(p.DEPTH_TEST), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, c), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), C.positionScreen.copy(T), C.customUpdateCallback ? C.customUpdateCallback(C) : C.updateLensFlares(), p.uniform1i(h.renderType, 2), d.enable(p.BLEND);
                            for (var P = 0, L = C.lensFlares.length; L > P; P++) {
                                var R = C.lensFlares[P];
                                R.opacity > .001 && R.scale > .001 && (T.x = R.x, T.y = R.y, T.z = R.z, w = R.size * R.scale / v, M.x = w * _, M.y = w, p.uniform3f(h.screenPosition, T.x, T.y, T.z), p.uniform2f(h.scale, M.x, M.y), p.uniform1f(h.rotation, R.rotation), p.uniform1f(h.opacity, R.opacity), p.uniform3f(h.color, R.color.r, R.color.g, R.color.b), d.setBlending(R.blending, R.blendEquation, R.blendSrc, R.blendDst), t.setTexture(R.texture, 1), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0))
                            }
                        }
                    }
                    d.enable(p.CULL_FACE), d.enable(p.DEPTH_TEST), p.depthMask(!0), t.resetGLState()
                }
            }
        }, n.SpritePlugin = function(t, e) {
            function i() {
                var e = u.createProgram(),
                    i = u.createShader(u.VERTEX_SHADER),
                    r = u.createShader(u.FRAGMENT_SHADER);
                return u.shaderSource(i, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), u.shaderSource(r, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), u.compileShader(i), u.compileShader(r), u.attachShader(e, i), u.attachShader(e, r), u.linkProgram(e), e
            }

            function r(t, e) {
                return t.z !== e.z ? e.z - t.z : e.id - t.id
            }
            var a, o, s, h, l, c, u = t.context,
                p = t.state,
                d = new n.Vector3,
                f = new n.Quaternion,
                m = new n.Vector3,
                g = function() {
                    var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                        e = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    a = u.createBuffer(), o = u.createBuffer(), u.bindBuffer(u.ARRAY_BUFFER, a), u.bufferData(u.ARRAY_BUFFER, t, u.STATIC_DRAW), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, o), u.bufferData(u.ELEMENT_ARRAY_BUFFER, e, u.STATIC_DRAW), s = i(), h = {
                        position: u.getAttribLocation(s, "position"),
                        uv: u.getAttribLocation(s, "uv")
                    }, l = {
                        uvOffset: u.getUniformLocation(s, "uvOffset"),
                        uvScale: u.getUniformLocation(s, "uvScale"),
                        rotation: u.getUniformLocation(s, "rotation"),
                        scale: u.getUniformLocation(s, "scale"),
                        color: u.getUniformLocation(s, "color"),
                        map: u.getUniformLocation(s, "map"),
                        opacity: u.getUniformLocation(s, "opacity"),
                        modelViewMatrix: u.getUniformLocation(s, "modelViewMatrix"),
                        projectionMatrix: u.getUniformLocation(s, "projectionMatrix"),
                        fogType: u.getUniformLocation(s, "fogType"),
                        fogDensity: u.getUniformLocation(s, "fogDensity"),
                        fogNear: u.getUniformLocation(s, "fogNear"),
                        fogFar: u.getUniformLocation(s, "fogFar"),
                        fogColor: u.getUniformLocation(s, "fogColor"),
                        alphaTest: u.getUniformLocation(s, "alphaTest")
                    };
                    var r = document.createElement("canvas");
                    r.width = 8, r.height = 8;
                    var p = r.getContext("2d");
                    p.fillStyle = "white", p.fillRect(0, 0, 8, 8), c = new n.Texture(r), c.needsUpdate = !0
                };
            this.render = function(i, v) {
                if (0 !== e.length) {
                    void 0 === s && g(), u.useProgram(s), p.initAttributes(), p.enableAttribute(h.position), p.enableAttribute(h.uv), p.disableUnusedAttributes(), p.disable(u.CULL_FACE), p.enable(u.BLEND), u.bindBuffer(u.ARRAY_BUFFER, a), u.vertexAttribPointer(h.position, 2, u.FLOAT, !1, 16, 0), u.vertexAttribPointer(h.uv, 2, u.FLOAT, !1, 16, 8), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, o), u.uniformMatrix4fv(l.projectionMatrix, !1, v.projectionMatrix.elements), p.activeTexture(u.TEXTURE0), u.uniform1i(l.map, 0);
                    var y = 0,
                        _ = 0,
                        x = i.fog;
                    x ? (u.uniform3f(l.fogColor, x.color.r, x.color.g, x.color.b), x instanceof n.Fog ? (u.uniform1f(l.fogNear, x.near), u.uniform1f(l.fogFar, x.far), u.uniform1i(l.fogType, 1), y = 1, _ = 1) : x instanceof n.FogExp2 && (u.uniform1f(l.fogDensity, x.density), u.uniform1i(l.fogType, 2), y = 2, _ = 2)) : (u.uniform1i(l.fogType, 0), y = 0, _ = 0);
                    for (var b = 0, w = e.length; w > b; b++) {
                        var M = e[b];
                        M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, M.matrixWorld), M.z = -M.modelViewMatrix.elements[14]
                    }
                    e.sort(r);
                    for (var T = [], b = 0, w = e.length; w > b; b++) {
                        var M = e[b],
                            S = M.material;
                        u.uniform1f(l.alphaTest, S.alphaTest), u.uniformMatrix4fv(l.modelViewMatrix, !1, M.modelViewMatrix.elements), M.matrixWorld.decompose(d, f, m), T[0] = m.x, T[1] = m.y;
                        var E = 0;
                        i.fog && S.fog && (E = _), y !== E && (u.uniform1i(l.fogType, E), y = E), null !== S.map ? (u.uniform2f(l.uvOffset, S.map.offset.x, S.map.offset.y), u.uniform2f(l.uvScale, S.map.repeat.x, S.map.repeat.y)) : (u.uniform2f(l.uvOffset, 0, 0), u.uniform2f(l.uvScale, 1, 1)), u.uniform1f(l.opacity, S.opacity), u.uniform3f(l.color, S.color.r, S.color.g, S.color.b), u.uniform1f(l.rotation, S.rotation), u.uniform2fv(l.scale, T), p.setBlending(S.blending, S.blendEquation, S.blendSrc, S.blendDst), p.setDepthTest(S.depthTest), p.setDepthWrite(S.depthWrite), S.map && S.map.image && S.map.image.width ? t.setTexture(S.map, 0) : t.setTexture(c, 0), u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0)
                    }
                    p.enable(u.CULL_FACE), t.resetGLState()
                }
            }
        }, n.GeometryUtils = {
            merge: function(t, e, i) {
                console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
                var r;
                e instanceof n.Mesh && (e.matrixAutoUpdate && e.updateMatrix(), r = e.matrix, e = e.geometry), t.merge(e, r, i)
            },
            center: function(t) {
                return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
            }
        }, n.ImageUtils = {
            crossOrigin: void 0,
            loadTexture: function(t, e, i, r) {
                var a = new n.ImageLoader;
                a.crossOrigin = this.crossOrigin;
                var o = new n.Texture(void 0, e);
                return a.load(t, function(t) {
                    o.image = t, o.needsUpdate = !0, i && i(o)
                }, void 0, function(t) {
                    r && r(t)
                }), o.sourceFile = t, o
            },
            loadTextureCube: function(t, e, i, r) {
                var a = [],
                    o = new n.ImageLoader;
                o.crossOrigin = this.crossOrigin;
                for (var s = new n.CubeTexture(a, e), h = 0, l = function(e) {
                    o.load(t[e], function(t) {
                        s.images[e] = t, h += 1, 6 === h && (s.needsUpdate = !0, i && i(s))
                    }, void 0, r)
                }, c = 0, u = t.length; u > c; ++c) l(c);
                return s
            },
            loadCompressedTexture: function() {
                console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
            },
            loadCompressedTextureCube: function() {
                console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
            },
            getNormalMap: function(t, e) {
                var i = function(t, e) {
                        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                    },
                    r = function(t, e) {
                        return [t[0] - e[0], t[1] - e[1], t[2] - e[2]]
                    },
                    n = function(t) {
                        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                        return [t[0] / e, t[1] / e, t[2] / e]
                    };
                e = 1 | e;
                var a = t.width,
                    o = t.height,
                    s = document.createElement("canvas");
                s.width = a, s.height = o;
                var h = s.getContext("2d");
                h.drawImage(t, 0, 0);
                for (var l = h.getImageData(0, 0, a, o).data, c = h.createImageData(a, o), u = c.data, p = 0; a > p; p++)
                    for (var d = 0; o > d; d++) {
                        var f = 0 > d - 1 ? 0 : d - 1,
                            m = d + 1 > o - 1 ? o - 1 : d + 1,
                            g = 0 > p - 1 ? 0 : p - 1,
                            v = p + 1 > a - 1 ? a - 1 : p + 1,
                            y = [],
                            _ = [0, 0, l[4 * (d * a + p)] / 255 * e];
                        y.push([-1, 0, l[4 * (d * a + g)] / 255 * e]), y.push([-1, -1, l[4 * (f * a + g)] / 255 * e]), y.push([0, -1, l[4 * (f * a + p)] / 255 * e]), y.push([1, -1, l[4 * (f * a + v)] / 255 * e]), y.push([1, 0, l[4 * (d * a + v)] / 255 * e]), y.push([1, 1, l[4 * (m * a + v)] / 255 * e]), y.push([0, 1, l[4 * (m * a + p)] / 255 * e]), y.push([-1, 1, l[4 * (m * a + g)] / 255 * e]);
                        for (var x = [], b = y.length, w = 0; b > w; w++) {
                            var M = y[w],
                                T = y[(w + 1) % b];
                            M = r(M, _), T = r(T, _), x.push(n(i(M, T)))
                        }
                        for (var S = [0, 0, 0], w = 0; w < x.length; w++) S[0] += x[w][0], S[1] += x[w][1], S[2] += x[w][2];
                        S[0] /= x.length, S[1] /= x.length, S[2] /= x.length;
                        var E = 4 * (d * a + p);
                        u[E] = (S[0] + 1) / 2 * 255 | 0, u[E + 1] = (S[1] + 1) / 2 * 255 | 0, u[E + 2] = 255 * S[2] | 0, u[E + 3] = 255
                    }
                return h.putImageData(c, 0, 0), s
            },
            generateDataTexture: function(t, e, i) {
                for (var r = t * e, a = new Uint8Array(3 * r), o = Math.floor(255 * i.r), s = Math.floor(255 * i.g), h = Math.floor(255 * i.b), l = 0; r > l; l++) a[3 * l] = o, a[3 * l + 1] = s, a[3 * l + 2] = h;
                var c = new n.DataTexture(a, t, e, n.RGBFormat);
                return c.needsUpdate = !0, c
            }
        }, n.SceneUtils = {
            createMultiMaterialObject: function(t, e) {
                for (var i = new n.Group, r = 0, a = e.length; a > r; r++) i.add(new n.Mesh(t, e[r]));
                return i
            },
            detach: function(t, e, i) {
                t.applyMatrix(e.matrixWorld), e.remove(t), i.add(t)
            },
            attach: function(t, e, i) {
                var r = new n.Matrix4;
                r.getInverse(i.matrixWorld), t.applyMatrix(r), e.remove(t), i.add(t)
            }
        }, n.FontUtils = {
            faces: {},
            face: "helvetiker",
            weight: "normal",
            style: "normal",
            size: 150,
            divisions: 10,
            getFace: function() {
                try {
                    return this.faces[this.face.toLowerCase()][this.weight][this.style]
                } catch (t) {
                    throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
                }
            },
            loadFace: function(t) {
                var e = t.familyName.toLowerCase(),
                    i = this;
                return i.faces[e] = i.faces[e] || {}, i.faces[e][t.cssFontWeight] = i.faces[e][t.cssFontWeight] || {}, i.faces[e][t.cssFontWeight][t.cssFontStyle] = t, i.faces[e][t.cssFontWeight][t.cssFontStyle] = t, t
            },
            drawText: function(t) {
                var e, i = this.getFace(),
                    r = this.size / i.resolution,
                    a = 0,
                    o = String(t).split(""),
                    s = o.length,
                    h = [];
                for (e = 0; s > e; e++) {
                    var l = new n.Path,
                        c = this.extractGlyphPoints(o[e], i, r, a, l);
                    a += c.offset, h.push(c.path)
                }
                var u = a / 2;
                return {
                    paths: h,
                    offset: u
                }
            },
            extractGlyphPoints: function(t, e, i, r, a) {
                var o, s, h, l, c, u, p, d, f, m, g, v, y, _, x, b, w, M, T, S = [],
                    E = e.glyphs[t] || e.glyphs["?"];
                if (E) {
                    if (E.o)
                        for (l = E._cachedOutline || (E._cachedOutline = E.o.split(" ")), u = l.length, p = i, d = i, o = 0; u > o;) switch (c = l[o++]) {
                            case "m":
                                f = l[o++] * p + r, m = l[o++] * d, a.moveTo(f, m);
                                break;
                            case "l":
                                f = l[o++] * p + r, m = l[o++] * d, a.lineTo(f, m);
                                break;
                            case "q":
                                if (g = l[o++] * p + r, v = l[o++] * d, x = l[o++] * p + r, b = l[o++] * d, a.quadraticCurveTo(x, b, g, v), T = S[S.length - 1])
                                    for (y = T.x, _ = T.y, s = 1, h = this.divisions; h >= s; s++) {
                                        var A = s / h;
                                        n.Shape.Utils.b2(A, y, x, g), n.Shape.Utils.b2(A, _, b, v)
                                    }
                                break;
                            case "b":
                                if (g = l[o++] * p + r, v = l[o++] * d, x = l[o++] * p + r, b = l[o++] * d, w = l[o++] * p + r, M = l[o++] * d, a.bezierCurveTo(x, b, w, M, g, v), T = S[S.length - 1])
                                    for (y = T.x, _ = T.y, s = 1, h = this.divisions; h >= s; s++) {
                                        var A = s / h;
                                        n.Shape.Utils.b3(A, y, x, w, g), n.Shape.Utils.b3(A, _, b, M, v)
                                    }
                        }
                    return {
                        offset: E.ha * i,
                        path: a
                    }
                }
            }
        }, n.FontUtils.generateShapes = function(t, e) {
            e = e || {};
            var i = void 0 !== e.size ? e.size : 100,
                r = void 0 !== e.curveSegments ? e.curveSegments : 4,
                a = void 0 !== e.font ? e.font : "helvetiker",
                o = void 0 !== e.weight ? e.weight : "normal",
                s = void 0 !== e.style ? e.style : "normal";
            n.FontUtils.size = i, n.FontUtils.divisions = r, n.FontUtils.face = a, n.FontUtils.weight = o, n.FontUtils.style = s;
            for (var h = n.FontUtils.drawText(t), l = h.paths, c = [], u = 0, p = l.length; p > u; u++) Array.prototype.push.apply(c, l[u].toShapes());
            return c
        },
        function(t) {
            var e = 1e-10,
                i = function(t, e) {
                    var i = t.length;
                    if (3 > i) return null;
                    var a, o, s, h = [],
                        l = [],
                        c = [];
                    if (r(t) > 0)
                        for (o = 0; i > o; o++) l[o] = o;
                    else
                        for (o = 0; i > o; o++) l[o] = i - 1 - o;
                    var u = i,
                        p = 2 * u;
                    for (o = u - 1; u > 2;) {
                        if (p-- <= 0) return console.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()"), e ? c : h;
                        if (a = o, a >= u && (a = 0), o = a + 1, o >= u && (o = 0), s = o + 1, s >= u && (s = 0), n(t, a, o, s, u, l)) {
                            var d, f, m, g, v;
                            for (d = l[a], f = l[o], m = l[s], h.push([t[d], t[f], t[m]]), c.push([l[a], l[o], l[s]]), g = o, v = o + 1; u > v; g++, v++) l[g] = l[v];
                            u--, p = 2 * u
                        }
                    }
                    return e ? c : h
                },
                r = function(t) {
                    for (var e = t.length, i = 0, r = e - 1, n = 0; e > n; r = n++) i += t[r].x * t[n].y - t[n].x * t[r].y;
                    return .5 * i
                },
                n = function(t, i, r, n, a, o) {
                    var s, h, l, c, u, p, d, f, m;
                    if (h = t[o[i]].x, l = t[o[i]].y, c = t[o[r]].x, u = t[o[r]].y, p = t[o[n]].x, d = t[o[n]].y, e > (c - h) * (d - l) - (u - l) * (p - h)) return !1;
                    var g, v, y, _, x, b, w, M, T, S, E, A, C, P, L;
                    for (g = p - c, v = d - u, y = h - p, _ = l - d, x = c - h, b = u - l, s = 0; a > s; s++)
                        if (f = t[o[s]].x, m = t[o[s]].y, !(f === h && m === l || f === c && m === u || f === p && m === d) && (w = f - h, M = m - l, T = f - c, S = m - u, E = f - p, A = m - d, L = g * S - v * T, C = x * M - b * w, P = y * A - _ * E, L >= -e && P >= -e && C >= -e)) return !1;
                    return !0
                };
            return t.Triangulate = i, t.Triangulate.area = r, t
        }(n.FontUtils), n.typeface_js = {
            faces: n.FontUtils.faces,
            loadFace: n.FontUtils.loadFace
        }, "undefined" != typeof r && (r._typeface_js = n.typeface_js), n.Audio = function(t) {
            n.Object3D.call(this), this.type = "Audio", this.context = t.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.panner = this.context.createPanner(), this.panner.connect(this.gain), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1
        }, n.Audio.prototype = Object.create(n.Object3D.prototype), n.Audio.prototype.constructor = n.Audio, n.Audio.prototype.load = function(t) {
            var e = this,
                i = new XMLHttpRequest;
            return i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function(t) {
                e.context.decodeAudioData(this.response, function(t) {
                    e.source.buffer = t, e.autoplay && e.play()
                })
            }, i.send(), this
        }, n.Audio.prototype.play = function() {
            if (this.isPlaying === !0) return void console.warn("THREE.Audio: Audio is already playing.");
            var t = this.context.createBufferSource();
            t.buffer = this.source.buffer, t.loop = this.source.loop, t.onended = this.source.onended, t.start(0, this.startTime), t.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = t, this.connect()
        }, n.Audio.prototype.pause = function() {
            this.source.stop(), this.startTime = this.context.currentTime
        }, n.Audio.prototype.stop = function() {
            this.source.stop(), this.startTime = 0
        }, n.Audio.prototype.connect = function() {
            void 0 !== this.filter ? (this.source.connect(this.filter), this.filter.connect(this.panner)) : this.source.connect(this.panner)
        }, n.Audio.prototype.disconnect = function() {
            void 0 !== this.filter ? (this.source.disconnect(this.filter), this.filter.disconnect(this.panner)) : this.source.disconnect(this.panner)
        }, n.Audio.prototype.setFilter = function(t) {
            this.isPlaying === !0 ? (this.disconnect(), this.filter = t, this.connect()) : this.filter = t
        }, n.Audio.prototype.getFilter = function() {
            return this.filter
        }, n.Audio.prototype.setPlaybackRate = function(t) {
            this.playbackRate = t, this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate)
        }, n.Audio.prototype.getPlaybackRate = function() {
            return this.playbackRate
        }, n.Audio.prototype.onEnded = function() {
            this.isPlaying = !1
        }, n.Audio.prototype.setLoop = function(t) {
            this.source.loop = t
        }, n.Audio.prototype.getLoop = function() {
            return this.source.loop
        }, n.Audio.prototype.setRefDistance = function(t) {
            this.panner.refDistance = t
        }, n.Audio.prototype.getRefDistance = function() {
            return this.panner.refDistance
        }, n.Audio.prototype.setRolloffFactor = function(t) {
            this.panner.rolloffFactor = t
        }, n.Audio.prototype.getRolloffFactor = function() {
            return this.panner.rolloffFactor
        }, n.Audio.prototype.setVolume = function(t) {
            this.gain.gain.value = t
        }, n.Audio.prototype.getVolume = function() {
            return this.gain.gain.value
        }, n.Audio.prototype.updateMatrixWorld = function() {
            var t = new n.Vector3;
            return function(e) {
                n.Object3D.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
            }
        }(), n.AudioListener = function() {
            n.Object3D.call(this), this.type = "AudioListener", this.context = new(window.AudioContext || window.webkitAudioContext)
        }, n.AudioListener.prototype = Object.create(n.Object3D.prototype), n.AudioListener.prototype.constructor = n.AudioListener, n.AudioListener.prototype.updateMatrixWorld = function() {
            var t = new n.Vector3,
                e = new n.Quaternion,
                i = new n.Vector3,
                r = new n.Vector3;
            return function(a) {
                n.Object3D.prototype.updateMatrixWorld.call(this, a);
                var o = this.context.listener,
                    s = this.up;
                this.matrixWorld.decompose(t, e, i), r.set(0, 0, -1).applyQuaternion(e), o.setPosition(t.x, t.y, t.z), o.setOrientation(r.x, r.y, r.z, s.x, s.y, s.z)
            }
        }(), n.Curve = function() {}, n.Curve.prototype.getPoint = function(t) {
            return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
        }, n.Curve.prototype.getPointAt = function(t) {
            var e = this.getUtoTmapping(t);
            return this.getPoint(e)
        }, n.Curve.prototype.getPoints = function(t) {
            t || (t = 5);
            var e, i = [];
            for (e = 0; t >= e; e++) i.push(this.getPoint(e / t));
            return i
        }, n.Curve.prototype.getSpacedPoints = function(t) {
            t || (t = 5);
            var e, i = [];
            for (e = 0; t >= e; e++) i.push(this.getPointAt(e / t));
            return i
        }, n.Curve.prototype.getLength = function() {
            var t = this.getLengths();
            return t[t.length - 1]
        }, n.Curve.prototype.getLengths = function(t) {
            if (t || (t = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, i, r = [],
                n = this.getPoint(0),
                a = 0;
            for (r.push(0), i = 1; t >= i; i++) e = this.getPoint(i / t), a += e.distanceTo(n), r.push(a), n = e;
            return this.cacheArcLengths = r, r
        }, n.Curve.prototype.updateArcLengths = function() {
            this.needsUpdate = !0, this.getLengths()
        }, n.Curve.prototype.getUtoTmapping = function(t, e) {
            var i, r = this.getLengths(),
                n = 0,
                a = r.length;
            i = e ? e : t * r[a - 1];
            for (var o, s = 0, h = a - 1; h >= s;)
                if (n = Math.floor(s + (h - s) / 2), o = r[n] - i, 0 > o) s = n + 1;
                else {
                    if (!(o > 0)) {
                        h = n;
                        break
                    }
                    h = n - 1
                }
            if (n = h, r[n] === i) {
                var l = n / (a - 1);
                return l
            }
            var c = r[n],
                u = r[n + 1],
                p = u - c,
                d = (i - c) / p,
                l = (n + d) / (a - 1);
            return l
        }, n.Curve.prototype.getTangent = function(t) {
            var e = 1e-4,
                i = t - e,
                r = t + e;
            0 > i && (i = 0), r > 1 && (r = 1);
            var n = this.getPoint(i),
                a = this.getPoint(r),
                o = a.clone().sub(n);
            return o.normalize()
        }, n.Curve.prototype.getTangentAt = function(t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        }, n.Curve.Utils = {
            tangentQuadraticBezier: function(t, e, i, r) {
                return 2 * (1 - t) * (i - e) + 2 * t * (r - i)
            },
            tangentCubicBezier: function(t, e, i, r, n) {
                return -3 * e * (1 - t) * (1 - t) + 3 * i * (1 - t) * (1 - t) - 6 * t * i * (1 - t) + 6 * t * r * (1 - t) - 3 * t * t * r + 3 * t * t * n
            },
            tangentSpline: function(t, e, i, r, n) {
                var a = 6 * t * t - 6 * t,
                    o = 3 * t * t - 4 * t + 1,
                    s = -6 * t * t + 6 * t,
                    h = 3 * t * t - 2 * t;
                return a + o + s + h
            },
            interpolate: function(t, e, i, r, n) {
                var a = .5 * (i - t),
                    o = .5 * (r - e),
                    s = n * n,
                    h = n * s;
                return (2 * e - 2 * i + a + o) * h + (-3 * e + 3 * i - 2 * a - o) * s + a * n + e
            }
        }, n.Curve.create = function(t, e) {
            return t.prototype = Object.create(n.Curve.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
        }, n.CurvePath = function() {
            this.curves = [], this.bends = [], this.autoClose = !1
        }, n.CurvePath.prototype = Object.create(n.Curve.prototype), n.CurvePath.prototype.constructor = n.CurvePath, n.CurvePath.prototype.add = function(t) {
            this.curves.push(t)
        }, n.CurvePath.prototype.checkConnection = function() {}, n.CurvePath.prototype.closePath = function() {
            var t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new n.LineCurve(e, t))
        }, n.CurvePath.prototype.getPoint = function(t) {
            for (var e, i, r = t * this.getLength(), n = this.getCurveLengths(), a = 0; a < n.length;) {
                if (n[a] >= r) {
                    e = n[a] - r, i = this.curves[a];
                    var o = 1 - e / i.getLength();
                    return i.getPointAt(o)
                }
                a++
            }
            return null
        }, n.CurvePath.prototype.getLength = function() {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        }, n.CurvePath.prototype.getCurveLengths = function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            var t, e = [],
                i = 0,
                r = this.curves.length;
            for (t = 0; r > t; t++) i += this.curves[t].getLength(), e.push(i);
            return this.cacheLengths = e, e
        }, n.CurvePath.prototype.getBoundingBox = function() {
            var t, e, i, r, a, o, s = this.getPoints();
            t = e = Number.NEGATIVE_INFINITY, r = a = Number.POSITIVE_INFINITY;
            var h, l, c, u, p = s[0] instanceof n.Vector3;
            for (u = p ? new n.Vector3 : new n.Vector2, l = 0, c = s.length; c > l; l++) h = s[l], h.x > t ? t = h.x : h.x < r && (r = h.x), h.y > e ? e = h.y : h.y < a && (a = h.y), p && (h.z > i ? i = h.z : h.z < o && (o = h.z)),
                u.add(h);
            var d = {
                minX: r,
                minY: a,
                maxX: t,
                maxY: e
            };
            return p && (d.maxZ = i, d.minZ = o), d
        }, n.CurvePath.prototype.createPointsGeometry = function(t) {
            var e = this.getPoints(t, !0);
            return this.createGeometry(e)
        }, n.CurvePath.prototype.createSpacedPointsGeometry = function(t) {
            var e = this.getSpacedPoints(t, !0);
            return this.createGeometry(e)
        }, n.CurvePath.prototype.createGeometry = function(t) {
            for (var e = new n.Geometry, i = 0; i < t.length; i++) e.vertices.push(new n.Vector3(t[i].x, t[i].y, t[i].z || 0));
            return e
        }, n.CurvePath.prototype.addWrapPath = function(t) {
            this.bends.push(t)
        }, n.CurvePath.prototype.getTransformedPoints = function(t, e) {
            var i, r, n = this.getPoints(t);
            for (e || (e = this.bends), i = 0, r = e.length; r > i; i++) n = this.getWrapPoints(n, e[i]);
            return n
        }, n.CurvePath.prototype.getTransformedSpacedPoints = function(t, e) {
            var i, r, n = this.getSpacedPoints(t);
            for (e || (e = this.bends), i = 0, r = e.length; r > i; i++) n = this.getWrapPoints(n, e[i]);
            return n
        }, n.CurvePath.prototype.getWrapPoints = function(t, e) {
            var i, r, n, a, o, s, h = this.getBoundingBox();
            for (i = 0, r = t.length; r > i; i++) {
                n = t[i], a = n.x, o = n.y, s = a / h.maxX, s = e.getUtoTmapping(s, a);
                var l = e.getPoint(s),
                    c = e.getTangent(s);
                c.set(-c.y, c.x).multiplyScalar(o), n.x = l.x + c.x, n.y = l.y + c.y
            }
            return t
        }, n.Path = function(t) {
            n.CurvePath.call(this), this.actions = [], t && this.fromPoints(t)
        }, n.Path.prototype = Object.create(n.CurvePath.prototype), n.Path.prototype.constructor = n.Path, n.PathActions = {
            MOVE_TO: "moveTo",
            LINE_TO: "lineTo",
            QUADRATIC_CURVE_TO: "quadraticCurveTo",
            BEZIER_CURVE_TO: "bezierCurveTo",
            CSPLINE_THRU: "splineThru",
            ARC: "arc",
            ELLIPSE: "ellipse"
        }, n.Path.prototype.fromPoints = function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, i = t.length; i > e; e++) this.lineTo(t[e].x, t[e].y)
        }, n.Path.prototype.moveTo = function(t, e) {
            var i = Array.prototype.slice.call(arguments);
            this.actions.push({
                action: n.PathActions.MOVE_TO,
                args: i
            })
        }, n.Path.prototype.lineTo = function(t, e) {
            var i = Array.prototype.slice.call(arguments),
                r = this.actions[this.actions.length - 1].args,
                a = r[r.length - 2],
                o = r[r.length - 1],
                s = new n.LineCurve(new n.Vector2(a, o), new n.Vector2(t, e));
            this.curves.push(s), this.actions.push({
                action: n.PathActions.LINE_TO,
                args: i
            })
        }, n.Path.prototype.quadraticCurveTo = function(t, e, i, r) {
            var a = Array.prototype.slice.call(arguments),
                o = this.actions[this.actions.length - 1].args,
                s = o[o.length - 2],
                h = o[o.length - 1],
                l = new n.QuadraticBezierCurve(new n.Vector2(s, h), new n.Vector2(t, e), new n.Vector2(i, r));
            this.curves.push(l), this.actions.push({
                action: n.PathActions.QUADRATIC_CURVE_TO,
                args: a
            })
        }, n.Path.prototype.bezierCurveTo = function(t, e, i, r, a, o) {
            var s = Array.prototype.slice.call(arguments),
                h = this.actions[this.actions.length - 1].args,
                l = h[h.length - 2],
                c = h[h.length - 1],
                u = new n.CubicBezierCurve(new n.Vector2(l, c), new n.Vector2(t, e), new n.Vector2(i, r), new n.Vector2(a, o));
            this.curves.push(u), this.actions.push({
                action: n.PathActions.BEZIER_CURVE_TO,
                args: s
            })
        }, n.Path.prototype.splineThru = function(t) {
            var e = Array.prototype.slice.call(arguments),
                i = this.actions[this.actions.length - 1].args,
                r = i[i.length - 2],
                a = i[i.length - 1],
                o = [new n.Vector2(r, a)];
            Array.prototype.push.apply(o, t);
            var s = new n.SplineCurve(o);
            this.curves.push(s), this.actions.push({
                action: n.PathActions.CSPLINE_THRU,
                args: e
            })
        }, n.Path.prototype.arc = function(t, e, i, r, n, a) {
            var o = this.actions[this.actions.length - 1].args,
                s = o[o.length - 2],
                h = o[o.length - 1];
            this.absarc(t + s, e + h, i, r, n, a)
        }, n.Path.prototype.absarc = function(t, e, i, r, n, a) {
            this.absellipse(t, e, i, i, r, n, a)
        }, n.Path.prototype.ellipse = function(t, e, i, r, n, a, o, s) {
            var h = this.actions[this.actions.length - 1].args,
                l = h[h.length - 2],
                c = h[h.length - 1];
            this.absellipse(t + l, e + c, i, r, n, a, o, s)
        }, n.Path.prototype.absellipse = function(t, e, i, r, a, o, s, h) {
            var l = [t, e, i, r, a, o, s, h || 0],
                c = new n.EllipseCurve(t, e, i, r, a, o, s, h);
            this.curves.push(c);
            var u = c.getPoint(1);
            l.push(u.x), l.push(u.y), this.actions.push({
                action: n.PathActions.ELLIPSE,
                args: l
            })
        }, n.Path.prototype.getSpacedPoints = function(t, e) {
            t || (t = 40);
            for (var i = [], r = 0; t > r; r++) i.push(this.getPoint(r / t));
            return i
        }, n.Path.prototype.getPoints = function(t, e) {
            if (this.useSpacedPoints) return this.getSpacedPoints(t, e);
            t = t || 12;
            var i, r, a, o, s, h, l, c, u, p, d, f, m, g, v, y, _, x, b = [];
            for (i = 0, r = this.actions.length; r > i; i++) switch (a = this.actions[i], o = a.action, s = a.args, o) {
                case n.PathActions.MOVE_TO:
                    b.push(new n.Vector2(s[0], s[1]));
                    break;
                case n.PathActions.LINE_TO:
                    b.push(new n.Vector2(s[0], s[1]));
                    break;
                case n.PathActions.QUADRATIC_CURVE_TO:
                    for (h = s[2], l = s[3], p = s[0], d = s[1], b.length > 0 ? (g = b[b.length - 1], f = g.x, m = g.y) : (g = this.actions[i - 1].args, f = g[g.length - 2], m = g[g.length - 1]), v = 1; t >= v; v++) y = v / t, _ = n.Shape.Utils.b2(y, f, p, h), x = n.Shape.Utils.b2(y, m, d, l), b.push(new n.Vector2(_, x));
                    break;
                case n.PathActions.BEZIER_CURVE_TO:
                    for (h = s[4], l = s[5], p = s[0], d = s[1], c = s[2], u = s[3], b.length > 0 ? (g = b[b.length - 1], f = g.x, m = g.y) : (g = this.actions[i - 1].args, f = g[g.length - 2], m = g[g.length - 1]), v = 1; t >= v; v++) y = v / t, _ = n.Shape.Utils.b3(y, f, p, c, h), x = n.Shape.Utils.b3(y, m, d, u, l), b.push(new n.Vector2(_, x));
                    break;
                case n.PathActions.CSPLINE_THRU:
                    g = this.actions[i - 1].args;
                    var w = new n.Vector2(g[g.length - 2], g[g.length - 1]),
                        M = [w],
                        T = t * s[0].length;
                    M = M.concat(s[0]);
                    var S = new n.SplineCurve(M);
                    for (v = 1; T >= v; v++) b.push(S.getPointAt(v / T));
                    break;
                case n.PathActions.ARC:
                    var E, A = s[0],
                        C = s[1],
                        P = s[2],
                        L = s[3],
                        R = s[4],
                        D = !!s[5],
                        F = R - L,
                        O = 2 * t;
                    for (v = 1; O >= v; v++) y = v / O, D || (y = 1 - y), E = L + y * F, _ = A + P * Math.cos(E), x = C + P * Math.sin(E), b.push(new n.Vector2(_, x));
                    break;
                case n.PathActions.ELLIPSE:
                    var E, k, U, A = s[0],
                        C = s[1],
                        B = s[2],
                        V = s[3],
                        L = s[4],
                        R = s[5],
                        D = !!s[6],
                        I = s[7],
                        F = R - L,
                        O = 2 * t;
                    for (0 !== I && (k = Math.cos(I), U = Math.sin(I)), v = 1; O >= v; v++) {
                        if (y = v / O, D || (y = 1 - y), E = L + y * F, _ = A + B * Math.cos(E), x = C + V * Math.sin(E), 0 !== I) {
                            var z = _,
                                N = x;
                            _ = (z - A) * k - (N - C) * U + A, x = (z - A) * U + (N - C) * k + C
                        }
                        b.push(new n.Vector2(_, x))
                    }
            }
            var G = b[b.length - 1],
                H = 1e-10;
            return Math.abs(G.x - b[0].x) < H && Math.abs(G.y - b[0].y) < H && b.splice(b.length - 1, 1), e && b.push(b[0]), b
        }, n.Path.prototype.toShapes = function(t, e) {
            function i(t) {
                var e, i, r, a, o, s = [],
                    h = new n.Path;
                for (e = 0, i = t.length; i > e; e++) r = t[e], o = r.args, a = r.action, a === n.PathActions.MOVE_TO && 0 !== h.actions.length && (s.push(h), h = new n.Path), h[a].apply(h, o);
                return 0 !== h.actions.length && s.push(h), s
            }

            function r(t) {
                for (var e = [], i = 0, r = t.length; r > i; i++) {
                    var a = t[i],
                        o = new n.Shape;
                    o.actions = a.actions, o.curves = a.curves, e.push(o)
                }
                return e
            }

            function a(t, e) {
                for (var i = 1e-10, r = e.length, n = !1, a = r - 1, o = 0; r > o; a = o++) {
                    var s = e[a],
                        h = e[o],
                        l = h.x - s.x,
                        c = h.y - s.y;
                    if (Math.abs(c) > i) {
                        if (0 > c && (s = e[o], l = -l, h = e[a], c = -c), t.y < s.y || t.y > h.y) continue;
                        if (t.y === s.y) {
                            if (t.x === s.x) return !0
                        } else {
                            var u = c * (t.x - s.x) - l * (t.y - s.y);
                            if (0 === u) return !0;
                            if (0 > u) continue;
                            n = !n
                        }
                    } else {
                        if (t.y !== s.y) continue;
                        if (h.x <= t.x && t.x <= s.x || s.x <= t.x && t.x <= h.x) return !0
                    }
                }
                return n
            }
            var o = i(this.actions);
            if (0 === o.length) return [];
            if (e === !0) return r(o);
            var s, h, l, c = [];
            if (1 === o.length) return h = o[0], l = new n.Shape, l.actions = h.actions, l.curves = h.curves, c.push(l), c;
            var u = !n.Shape.Utils.isClockWise(o[0].getPoints());
            u = t ? !u : u;
            var p, d = [],
                f = [],
                m = [],
                g = 0;
            f[g] = void 0, m[g] = [];
            var v, y;
            for (v = 0, y = o.length; y > v; v++) h = o[v], p = h.getPoints(), s = n.Shape.Utils.isClockWise(p), s = t ? !s : s, s ? (!u && f[g] && g++, f[g] = {
                s: new n.Shape,
                p: p
            }, f[g].s.actions = h.actions, f[g].s.curves = h.curves, u && g++, m[g] = []) : m[g].push({
                h: h,
                p: p[0]
            });
            if (!f[0]) return r(o);
            if (f.length > 1) {
                for (var _ = !1, x = [], b = 0, w = f.length; w > b; b++) d[b] = [];
                for (var b = 0, w = f.length; w > b; b++)
                    for (var M = m[b], T = 0; T < M.length; T++) {
                        for (var S = M[T], E = !0, A = 0; A < f.length; A++) a(S.p, f[A].p) && (b !== A && x.push({
                            froms: b,
                            tos: A,
                            hole: T
                        }), E ? (E = !1, d[A].push(S)) : _ = !0);
                        E && d[b].push(S)
                    }
                x.length > 0 && (_ || (m = d))
            }
            var C, P, L;
            for (v = 0, y = f.length; y > v; v++)
                for (l = f[v].s, c.push(l), C = m[v], P = 0, L = C.length; L > P; P++) l.holes.push(C[P].h);
            return c
        }, n.Shape = function() {
            n.Path.apply(this, arguments), this.holes = []
        }, n.Shape.prototype = Object.create(n.Path.prototype), n.Shape.prototype.constructor = n.Shape, n.Shape.prototype.extrude = function(t) {
            var e = new n.ExtrudeGeometry(this, t);
            return e
        }, n.Shape.prototype.makeGeometry = function(t) {
            var e = new n.ShapeGeometry(this, t);
            return e
        }, n.Shape.prototype.getPointsHoles = function(t) {
            var e, i = this.holes.length,
                r = [];
            for (e = 0; i > e; e++) r[e] = this.holes[e].getTransformedPoints(t, this.bends);
            return r
        }, n.Shape.prototype.getSpacedPointsHoles = function(t) {
            var e, i = this.holes.length,
                r = [];
            for (e = 0; i > e; e++) r[e] = this.holes[e].getTransformedSpacedPoints(t, this.bends);
            return r
        }, n.Shape.prototype.extractAllPoints = function(t) {
            return {
                shape: this.getTransformedPoints(t),
                holes: this.getPointsHoles(t)
            }
        }, n.Shape.prototype.extractPoints = function(t) {
            return this.useSpacedPoints ? this.extractAllSpacedPoints(t) : this.extractAllPoints(t)
        }, n.Shape.prototype.extractAllSpacedPoints = function(t) {
            return {
                shape: this.getTransformedSpacedPoints(t),
                holes: this.getSpacedPointsHoles(t)
            }
        }, n.Shape.Utils = {
            triangulateShape: function(t, e) {
                function i(t, e, i) {
                    return t.x !== e.x ? t.x < e.x ? t.x <= i.x && i.x <= e.x : e.x <= i.x && i.x <= t.x : t.y < e.y ? t.y <= i.y && i.y <= e.y : e.y <= i.y && i.y <= t.y
                }

                function r(t, e, r, n, a) {
                    var o = 1e-10,
                        s = e.x - t.x,
                        h = e.y - t.y,
                        l = n.x - r.x,
                        c = n.y - r.y,
                        u = t.x - r.x,
                        p = t.y - r.y,
                        d = h * l - s * c,
                        f = h * u - s * p;
                    if (Math.abs(d) > o) {
                        var m;
                        if (d > 0) {
                            if (0 > f || f > d) return [];
                            if (m = c * u - l * p, 0 > m || m > d) return []
                        } else {
                            if (f > 0 || d > f) return [];
                            if (m = c * u - l * p, m > 0 || d > m) return []
                        }
                        if (0 === m) return !a || 0 !== f && f !== d ? [t] : [];
                        if (m === d) return !a || 0 !== f && f !== d ? [e] : [];
                        if (0 === f) return [r];
                        if (f === d) return [n];
                        var g = m / d;
                        return [{
                            x: t.x + g * s,
                            y: t.y + g * h
                        }]
                    }
                    if (0 !== f || c * u !== l * p) return [];
                    var v = 0 === s && 0 === h,
                        y = 0 === l && 0 === c;
                    if (v && y) return t.x !== r.x || t.y !== r.y ? [] : [t];
                    if (v) return i(r, n, t) ? [t] : [];
                    if (y) return i(t, e, r) ? [r] : [];
                    var _, x, b, w, M, T, S, E;
                    return 0 !== s ? (t.x < e.x ? (_ = t, b = t.x, x = e, w = e.x) : (_ = e, b = e.x, x = t, w = t.x), r.x < n.x ? (M = r, S = r.x, T = n, E = n.x) : (M = n, S = n.x, T = r, E = r.x)) : (t.y < e.y ? (_ = t, b = t.y, x = e, w = e.y) : (_ = e, b = e.y, x = t, w = t.y), r.y < n.y ? (M = r, S = r.y, T = n, E = n.y) : (M = n, S = n.y, T = r, E = r.y)), S >= b ? S > w ? [] : w === S ? a ? [] : [M] : E >= w ? [M, x] : [M, T] : b > E ? [] : b === E ? a ? [] : [_] : E >= w ? [_, x] : [_, T]
                }

                function a(t, e, i, r) {
                    var n = 1e-10,
                        a = e.x - t.x,
                        o = e.y - t.y,
                        s = i.x - t.x,
                        h = i.y - t.y,
                        l = r.x - t.x,
                        c = r.y - t.y,
                        u = a * h - o * s,
                        p = a * c - o * l;
                    if (Math.abs(u) > n) {
                        var d = l * h - c * s;
                        return u > 0 ? p >= 0 && d >= 0 : p >= 0 || d >= 0
                    }
                    return p > 0
                }

                function o(t, e) {
                    function i(t, e) {
                        var i = y.length - 1,
                            r = t - 1;
                        0 > r && (r = i);
                        var n = t + 1;
                        n > i && (n = 0);
                        var o = a(y[t], y[r], y[n], s[e]);
                        if (!o) return !1;
                        var h = s.length - 1,
                            l = e - 1;
                        0 > l && (l = h);
                        var c = e + 1;
                        return c > h && (c = 0), o = a(s[e], s[l], s[c], y[t]), o ? !0 : !1
                    }

                    function n(t, e) {
                        var i, n, a;
                        for (i = 0; i < y.length; i++)
                            if (n = i + 1, n %= y.length, a = r(t, e, y[i], y[n], !0), a.length > 0) return !0;
                        return !1
                    }

                    function o(t, i) {
                        var n, a, o, s, h;
                        for (n = 0; n < _.length; n++)
                            for (a = e[_[n]], o = 0; o < a.length; o++)
                                if (s = o + 1, s %= a.length, h = r(t, i, a[o], a[s], !0), h.length > 0) return !0;
                        return !1
                    }
                    for (var s, h, l, c, u, p, d, f, m, g, v, y = t.concat(), _ = [], x = [], b = 0, w = e.length; w > b; b++) _.push(b);
                    for (var M = 0, T = 2 * _.length; _.length > 0;) {
                        if (T--, 0 > T) {
                            console.log("Infinite Loop! Holes left:" + _.length + ", Probably Hole outside Shape!");
                            break
                        }
                        for (l = M; l < y.length; l++) {
                            c = y[l], h = -1;
                            for (var b = 0; b < _.length; b++)
                                if (p = _[b], d = c.x + ":" + c.y + ":" + p, void 0 === x[d]) {
                                    s = e[p];
                                    for (var S = 0; S < s.length; S++)
                                        if (u = s[S], i(l, S) && !n(c, u) && !o(c, u)) {
                                            h = S, _.splice(b, 1), f = y.slice(0, l + 1), m = y.slice(l), g = s.slice(h), v = s.slice(0, h + 1), y = f.concat(g).concat(v).concat(m), M = l;
                                            break
                                        }
                                    if (h >= 0) break;
                                    x[d] = !0
                                }
                            if (h >= 0) break
                        }
                    }
                    return y
                }
                for (var s, h, l, c, u, p, d = {}, f = t.concat(), m = 0, g = e.length; g > m; m++) Array.prototype.push.apply(f, e[m]);
                for (s = 0, h = f.length; h > s; s++) u = f[s].x + ":" + f[s].y, void 0 !== d[u] && console.warn("THREE.Shape: Duplicate point", u), d[u] = s;
                var v = o(t, e),
                    y = n.FontUtils.Triangulate(v, !1);
                for (s = 0, h = y.length; h > s; s++)
                    for (c = y[s], l = 0; 3 > l; l++) u = c[l].x + ":" + c[l].y, p = d[u], void 0 !== p && (c[l] = p);
                return y.concat()
            },
            isClockWise: function(t) {
                return n.FontUtils.Triangulate.area(t) < 0
            },
            b2p0: function(t, e) {
                var i = 1 - t;
                return i * i * e
            },
            b2p1: function(t, e) {
                return 2 * (1 - t) * t * e
            },
            b2p2: function(t, e) {
                return t * t * e
            },
            b2: function(t, e, i, r) {
                return this.b2p0(t, e) + this.b2p1(t, i) + this.b2p2(t, r)
            },
            b3p0: function(t, e) {
                var i = 1 - t;
                return i * i * i * e
            },
            b3p1: function(t, e) {
                var i = 1 - t;
                return 3 * i * i * t * e
            },
            b3p2: function(t, e) {
                var i = 1 - t;
                return 3 * i * t * t * e
            },
            b3p3: function(t, e) {
                return t * t * t * e
            },
            b3: function(t, e, i, r, n) {
                return this.b3p0(t, e) + this.b3p1(t, i) + this.b3p2(t, r) + this.b3p3(t, n)
            }
        }, n.LineCurve = function(t, e) {
            this.v1 = t, this.v2 = e
        }, n.LineCurve.prototype = Object.create(n.Curve.prototype), n.LineCurve.prototype.constructor = n.LineCurve, n.LineCurve.prototype.getPoint = function(t) {
            var e = this.v2.clone().sub(this.v1);
            return e.multiplyScalar(t).add(this.v1), e
        }, n.LineCurve.prototype.getPointAt = function(t) {
            return this.getPoint(t)
        }, n.LineCurve.prototype.getTangent = function(t) {
            var e = this.v2.clone().sub(this.v1);
            return e.normalize()
        }, n.QuadraticBezierCurve = function(t, e, i) {
            this.v0 = t, this.v1 = e, this.v2 = i
        }, n.QuadraticBezierCurve.prototype = Object.create(n.Curve.prototype), n.QuadraticBezierCurve.prototype.constructor = n.QuadraticBezierCurve, n.QuadraticBezierCurve.prototype.getPoint = function(t) {
            var e = new n.Vector2;
            return e.x = n.Shape.Utils.b2(t, this.v0.x, this.v1.x, this.v2.x), e.y = n.Shape.Utils.b2(t, this.v0.y, this.v1.y, this.v2.y), e
        }, n.QuadraticBezierCurve.prototype.getTangent = function(t) {
            var e = new n.Vector2;
            return e.x = n.Curve.Utils.tangentQuadraticBezier(t, this.v0.x, this.v1.x, this.v2.x), e.y = n.Curve.Utils.tangentQuadraticBezier(t, this.v0.y, this.v1.y, this.v2.y), e.normalize()
        }, n.CubicBezierCurve = function(t, e, i, r) {
            this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = r
        }, n.CubicBezierCurve.prototype = Object.create(n.Curve.prototype), n.CubicBezierCurve.prototype.constructor = n.CubicBezierCurve, n.CubicBezierCurve.prototype.getPoint = function(t) {
            var e, i;
            return e = n.Shape.Utils.b3(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), i = n.Shape.Utils.b3(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new n.Vector2(e, i)
        }, n.CubicBezierCurve.prototype.getTangent = function(t) {
            var e, i;
            e = n.Curve.Utils.tangentCubicBezier(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), i = n.Curve.Utils.tangentCubicBezier(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
            var r = new n.Vector2(e, i);
            return r.normalize(), r
        }, n.SplineCurve = function(t) {
            this.points = void 0 == t ? [] : t
        }, n.SplineCurve.prototype = Object.create(n.Curve.prototype), n.SplineCurve.prototype.constructor = n.SplineCurve, n.SplineCurve.prototype.getPoint = function(t) {
            var e = this.points,
                i = (e.length - 1) * t,
                r = Math.floor(i),
                a = i - r,
                o = e[0 === r ? r : r - 1],
                s = e[r],
                h = e[r > e.length - 2 ? e.length - 1 : r + 1],
                l = e[r > e.length - 3 ? e.length - 1 : r + 2],
                c = new n.Vector2;
            return c.x = n.Curve.Utils.interpolate(o.x, s.x, h.x, l.x, a), c.y = n.Curve.Utils.interpolate(o.y, s.y, h.y, l.y, a), c
        }, n.EllipseCurve = function(t, e, i, r, n, a, o, s) {
            this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = r, this.aStartAngle = n, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s || 0
        }, n.EllipseCurve.prototype = Object.create(n.Curve.prototype), n.EllipseCurve.prototype.constructor = n.EllipseCurve, n.EllipseCurve.prototype.getPoint = function(t) {
            var e = this.aEndAngle - this.aStartAngle;
            0 > e && (e += 2 * Math.PI), e > 2 * Math.PI && (e -= 2 * Math.PI);
            var i;
            i = this.aClockwise === !0 ? this.aEndAngle + (1 - t) * (2 * Math.PI - e) : this.aStartAngle + t * e;
            var r = this.aX + this.xRadius * Math.cos(i),
                a = this.aY + this.yRadius * Math.sin(i);
            if (0 !== this.aRotation) {
                var o = Math.cos(this.aRotation),
                    s = Math.sin(this.aRotation),
                    h = r,
                    l = a;
                r = (h - this.aX) * o - (l - this.aY) * s + this.aX, a = (h - this.aX) * s + (l - this.aY) * o + this.aY
            }
            return new n.Vector2(r, a)
        }, n.ArcCurve = function(t, e, i, r, a, o) {
            n.EllipseCurve.call(this, t, e, i, i, r, a, o)
        }, n.ArcCurve.prototype = Object.create(n.EllipseCurve.prototype), n.ArcCurve.prototype.constructor = n.ArcCurve, n.LineCurve3 = n.Curve.create(function(t, e) {
            this.v1 = t, this.v2 = e
        }, function(t) {
            var e = new n.Vector3;
            return e.subVectors(this.v2, this.v1), e.multiplyScalar(t), e.add(this.v1), e
        }), n.QuadraticBezierCurve3 = n.Curve.create(function(t, e, i) {
            this.v0 = t, this.v1 = e, this.v2 = i
        }, function(t) {
            var e = new n.Vector3;
            return e.x = n.Shape.Utils.b2(t, this.v0.x, this.v1.x, this.v2.x), e.y = n.Shape.Utils.b2(t, this.v0.y, this.v1.y, this.v2.y), e.z = n.Shape.Utils.b2(t, this.v0.z, this.v1.z, this.v2.z), e
        }), n.CubicBezierCurve3 = n.Curve.create(function(t, e, i, r) {
            this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = r
        }, function(t) {
            var e = new n.Vector3;
            return e.x = n.Shape.Utils.b3(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e.y = n.Shape.Utils.b3(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y), e.z = n.Shape.Utils.b3(t, this.v0.z, this.v1.z, this.v2.z, this.v3.z), e
        }), n.SplineCurve3 = n.Curve.create(function(t) {
            console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"), this.points = void 0 == t ? [] : t
        }, function(t) {
            var e = this.points,
                i = (e.length - 1) * t,
                r = Math.floor(i),
                a = i - r,
                o = e[0 == r ? r : r - 1],
                s = e[r],
                h = e[r > e.length - 2 ? e.length - 1 : r + 1],
                l = e[r > e.length - 3 ? e.length - 1 : r + 2],
                c = new n.Vector3;
            return c.x = n.Curve.Utils.interpolate(o.x, s.x, h.x, l.x, a), c.y = n.Curve.Utils.interpolate(o.y, s.y, h.y, l.y, a), c.z = n.Curve.Utils.interpolate(o.z, s.z, h.z, l.z, a), c
        }), n.CatmullRomCurve3 = function() {
            function t() {}
            var e = new n.Vector3,
                i = new t,
                r = new t,
                a = new t;
            return t.prototype.init = function(t, e, i, r) {
                this.c0 = t, this.c1 = i, this.c2 = -3 * t + 3 * e - 2 * i - r, this.c3 = 2 * t - 2 * e + i + r
            }, t.prototype.initNonuniformCatmullRom = function(t, e, i, r, n, a, o) {
                var s = (e - t) / n - (i - t) / (n + a) + (i - e) / a,
                    h = (i - e) / a - (r - e) / (a + o) + (r - i) / o;
                s *= a, h *= a, this.init(e, i, s, h)
            }, t.prototype.initCatmullRom = function(t, e, i, r, n) {
                this.init(e, i, n * (i - t), n * (r - e))
            }, t.prototype.calc = function(t) {
                var e = t * t,
                    i = e * t;
                return this.c0 + this.c1 * t + this.c2 * e + this.c3 * i
            }, n.Curve.create(function(t) {
                this.points = t || []
            }, function(t) {
                var o, s, h, l, c = this.points;
                l = c.length, 2 > l && console.log("duh, you need at least 2 points"), o = (l - 1) * t, s = Math.floor(o), h = o - s, 0 === h && s === l - 1 && (s = l - 2, h = 1);
                var u, p, d, f;
                if (0 === s ? (e.subVectors(c[0], c[1]).add(c[0]), u = e) : u = c[s - 1], p = c[s], d = c[s + 1], l > s + 2 ? f = c[s + 2] : (e.subVectors(c[l - 1], c[l - 2]).add(c[l - 2]), f = e), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                    var m = "chordal" === this.type ? .5 : .25,
                        g = Math.pow(u.distanceToSquared(p), m),
                        v = Math.pow(p.distanceToSquared(d), m),
                        y = Math.pow(d.distanceToSquared(f), m);
                    1e-4 > v && (v = 1), 1e-4 > g && (g = v), 1e-4 > y && (y = v), i.initNonuniformCatmullRom(u.x, p.x, d.x, f.x, g, v, y), r.initNonuniformCatmullRom(u.y, p.y, d.y, f.y, g, v, y), a.initNonuniformCatmullRom(u.z, p.z, d.z, f.z, g, v, y)
                } else if ("catmullrom" === this.type) {
                    var _ = void 0 !== this.tension ? this.tension : .5;
                    i.initCatmullRom(u.x, p.x, d.x, f.x, _), r.initCatmullRom(u.y, p.y, d.y, f.y, _), a.initCatmullRom(u.z, p.z, d.z, f.z, _)
                }
                var x = new n.Vector3(i.calc(h), r.calc(h), a.calc(h));
                return x
            })
        }(), n.ClosedSplineCurve3 = n.Curve.create(function(t) {
            this.points = void 0 == t ? [] : t
        }, function(t) {
            var e = this.points,
                i = (e.length - 0) * t,
                r = Math.floor(i),
                a = i - r;
            r += r > 0 ? 0 : (Math.floor(Math.abs(r) / e.length) + 1) * e.length;
            var o = e[(r - 1) % e.length],
                s = e[r % e.length],
                h = e[(r + 1) % e.length],
                l = e[(r + 2) % e.length],
                c = new n.Vector3;
            return c.x = n.Curve.Utils.interpolate(o.x, s.x, h.x, l.x, a), c.y = n.Curve.Utils.interpolate(o.y, s.y, h.y, l.y, a), c.z = n.Curve.Utils.interpolate(o.z, s.z, h.z, l.z, a), c
        }), n.AnimationHandler = {
            LINEAR: 0,
            CATMULLROM: 1,
            CATMULLROM_FORWARD: 2,
            add: function() {
                console.warn("THREE.AnimationHandler.add() has been deprecated.")
            },
            get: function() {
                console.warn("THREE.AnimationHandler.get() has been deprecated.")
            },
            remove: function() {
                console.warn("THREE.AnimationHandler.remove() has been deprecated.")
            },
            animations: [],
            init: function(t) {
                if (t.initialized === !0) return t;
                for (var e = 0; e < t.hierarchy.length; e++) {
                    for (var i = 0; i < t.hierarchy[e].keys.length; i++)
                        if (t.hierarchy[e].keys[i].time < 0 && (t.hierarchy[e].keys[i].time = 0), void 0 !== t.hierarchy[e].keys[i].rot && !(t.hierarchy[e].keys[i].rot instanceof n.Quaternion)) {
                            var r = t.hierarchy[e].keys[i].rot;
                            t.hierarchy[e].keys[i].rot = (new n.Quaternion).fromArray(r)
                        }
                    if (t.hierarchy[e].keys.length && void 0 !== t.hierarchy[e].keys[0].morphTargets) {
                        for (var a = {}, i = 0; i < t.hierarchy[e].keys.length; i++)
                            for (var o = 0; o < t.hierarchy[e].keys[i].morphTargets.length; o++) {
                                var s = t.hierarchy[e].keys[i].morphTargets[o];
                                a[s] = -1
                            }
                        t.hierarchy[e].usedMorphTargets = a;
                        for (var i = 0; i < t.hierarchy[e].keys.length; i++) {
                            var h = {};
                            for (var s in a) {
                                for (var o = 0; o < t.hierarchy[e].keys[i].morphTargets.length; o++)
                                    if (t.hierarchy[e].keys[i].morphTargets[o] === s) {
                                        h[s] = t.hierarchy[e].keys[i].morphTargetsInfluences[o];
                                        break
                                    }
                                o === t.hierarchy[e].keys[i].morphTargets.length && (h[s] = 0)
                            }
                            t.hierarchy[e].keys[i].morphTargetsInfluences = h
                        }
                    }
                    for (var i = 1; i < t.hierarchy[e].keys.length; i++) t.hierarchy[e].keys[i].time === t.hierarchy[e].keys[i - 1].time && (t.hierarchy[e].keys.splice(i, 1), i--);
                    for (var i = 0; i < t.hierarchy[e].keys.length; i++) t.hierarchy[e].keys[i].index = i
                }
                return t.initialized = !0, t
            },
            parse: function(t) {
                var e = function(t, i) {
                        i.push(t);
                        for (var r = 0; r < t.children.length; r++) e(t.children[r], i)
                    },
                    i = [];
                if (t instanceof n.SkinnedMesh)
                    for (var r = 0; r < t.skeleton.bones.length; r++) i.push(t.skeleton.bones[r]);
                else e(t, i);
                return i
            },
            play: function(t) {
                -1 === this.animations.indexOf(t) && this.animations.push(t)
            },
            stop: function(t) {
                var e = this.animations.indexOf(t); - 1 !== e && this.animations.splice(e, 1)
            },
            update: function(t) {
                for (var e = 0; e < this.animations.length; e++) this.animations[e].resetBlendWeights();
                for (var e = 0; e < this.animations.length; e++) this.animations[e].update(t)
            }
        }, n.Animation = function(t, e) {
            this.root = t, this.data = n.AnimationHandler.init(e), this.hierarchy = n.AnimationHandler.parse(t), this.currentTime = 0, this.timeScale = 1, this.isPlaying = !1, this.loop = !0, this.weight = 0, this.interpolationType = n.AnimationHandler.LINEAR
        }, n.Animation.prototype = {
            constructor: n.Animation,
            keyTypes: ["pos", "rot", "scl"],
            play: function(t, e) {
                this.currentTime = void 0 !== t ? t : 0, this.weight = void 0 !== e ? e : 1, this.isPlaying = !0, this.reset(), n.AnimationHandler.play(this)
            },
            stop: function() {
                this.isPlaying = !1, n.AnimationHandler.stop(this)
            },
            reset: function() {
                for (var t = 0, e = this.hierarchy.length; e > t; t++) {
                    var i = this.hierarchy[t];
                    void 0 === i.animationCache && (i.animationCache = {
                        animations: {},
                        blending: {
                            positionWeight: 0,
                            quaternionWeight: 0,
                            scaleWeight: 0
                        }
                    });
                    var r = this.data.name,
                        n = i.animationCache.animations,
                        a = n[r];
                    void 0 === a && (a = {
                        prevKey: {
                            pos: 0,
                            rot: 0,
                            scl: 0
                        },
                        nextKey: {
                            pos: 0,
                            rot: 0,
                            scl: 0
                        },
                        originalMatrix: i.matrix
                    }, n[r] = a);
                    for (var o = 0; 3 > o; o++) {
                        for (var s = this.keyTypes[o], h = this.data.hierarchy[t].keys[0], l = this.getNextKeyWith(s, t, 1); l.time < this.currentTime && l.index > h.index;) h = l, l = this.getNextKeyWith(s, t, l.index + 1);
                        a.prevKey[s] = h, a.nextKey[s] = l
                    }
                }
            },
            resetBlendWeights: function() {
                for (var t = 0, e = this.hierarchy.length; e > t; t++) {
                    var i = this.hierarchy[t],
                        r = i.animationCache;
                    if (void 0 !== r) {
                        var n = r.blending;
                        n.positionWeight = 0, n.quaternionWeight = 0, n.scaleWeight = 0
                    }
                }
            },
            update: function() {
                var t = [],
                    e = new n.Vector3,
                    i = new n.Vector3,
                    r = new n.Quaternion,
                    a = function(t, e) {
                        var i, r, n, a, s, h, l, c, u, p = [],
                            d = [];
                        return i = (t.length - 1) * e, r = Math.floor(i), n = i - r, p[0] = 0 === r ? r : r - 1, p[1] = r, p[2] = r > t.length - 2 ? r : r + 1, p[3] = r > t.length - 3 ? r : r + 2, h = t[p[0]], l = t[p[1]], c = t[p[2]], u = t[p[3]], a = n * n, s = n * a, d[0] = o(h[0], l[0], c[0], u[0], n, a, s), d[1] = o(h[1], l[1], c[1], u[1], n, a, s), d[2] = o(h[2], l[2], c[2], u[2], n, a, s), d
                    },
                    o = function(t, e, i, r, n, a, o) {
                        var s = .5 * (i - t),
                            h = .5 * (r - e);
                        return (2 * (e - i) + s + h) * o + (-3 * (e - i) - 2 * s - h) * a + s * n + e
                    };
                return function(o) {
                    if (this.isPlaying !== !1 && (this.currentTime += o * this.timeScale, 0 !== this.weight)) {
                        var s = this.data.length;
                        (this.currentTime > s || this.currentTime < 0) && (this.loop ? (this.currentTime %= s, this.currentTime < 0 && (this.currentTime += s), this.reset()) : this.stop());
                        for (var h = 0, l = this.hierarchy.length; l > h; h++)
                            for (var c = this.hierarchy[h], u = c.animationCache.animations[this.data.name], p = c.animationCache.blending, d = 0; 3 > d; d++) {
                                var f = this.keyTypes[d],
                                    m = u.prevKey[f],
                                    g = u.nextKey[f];
                                if (this.timeScale > 0 && g.time <= this.currentTime || this.timeScale < 0 && m.time >= this.currentTime) {
                                    for (m = this.data.hierarchy[h].keys[0], g = this.getNextKeyWith(f, h, 1); g.time < this.currentTime && g.index > m.index;) m = g, g = this.getNextKeyWith(f, h, g.index + 1);
                                    u.prevKey[f] = m, u.nextKey[f] = g
                                }
                                var v = (this.currentTime - m.time) / (g.time - m.time),
                                    y = m[f],
                                    _ = g[f];
                                if (0 > v && (v = 0), v > 1 && (v = 1), "pos" === f) {
                                    if (this.interpolationType === n.AnimationHandler.LINEAR) {
                                        i.x = y[0] + (_[0] - y[0]) * v, i.y = y[1] + (_[1] - y[1]) * v, i.z = y[2] + (_[2] - y[2]) * v;
                                        var x = this.weight / (this.weight + p.positionWeight);
                                        c.position.lerp(i, x), p.positionWeight += this.weight
                                    } else if (this.interpolationType === n.AnimationHandler.CATMULLROM || this.interpolationType === n.AnimationHandler.CATMULLROM_FORWARD) {
                                        t[0] = this.getPrevKeyWith("pos", h, m.index - 1).pos, t[1] = y, t[2] = _, t[3] = this.getNextKeyWith("pos", h, g.index + 1).pos, v = .33 * v + .33;
                                        var b = a(t, v),
                                            x = this.weight / (this.weight + p.positionWeight);
                                        p.positionWeight += this.weight;
                                        var w = c.position;
                                        if (w.x = w.x + (b[0] - w.x) * x, w.y = w.y + (b[1] - w.y) * x, w.z = w.z + (b[2] - w.z) * x, this.interpolationType === n.AnimationHandler.CATMULLROM_FORWARD) {
                                            var M = a(t, 1.01 * v);
                                            e.set(M[0], M[1], M[2]), e.sub(w), e.y = 0, e.normalize();
                                            var T = Math.atan2(e.x, e.z);
                                            c.rotation.set(0, T, 0)
                                        }
                                    }
                                } else if ("rot" === f)
                                    if (n.Quaternion.slerp(y, _, r, v), 0 === p.quaternionWeight) c.quaternion.copy(r), p.quaternionWeight = this.weight;
                                    else {
                                        var x = this.weight / (this.weight + p.quaternionWeight);
                                        n.Quaternion.slerp(c.quaternion, r, c.quaternion, x), p.quaternionWeight += this.weight
                                    } else if ("scl" === f) {
                                    i.x = y[0] + (_[0] - y[0]) * v, i.y = y[1] + (_[1] - y[1]) * v, i.z = y[2] + (_[2] - y[2]) * v;
                                    var x = this.weight / (this.weight + p.scaleWeight);
                                    c.scale.lerp(i, x), p.scaleWeight += this.weight
                                }
                            }
                        return !0
                    }
                }
            }(),
            getNextKeyWith: function(t, e, i) {
                var r = this.data.hierarchy[e].keys;
                for (this.interpolationType === n.AnimationHandler.CATMULLROM || this.interpolationType === n.AnimationHandler.CATMULLROM_FORWARD ? i = i < r.length - 1 ? i : r.length - 1 : i %= r.length; i < r.length; i++)
                    if (void 0 !== r[i][t]) return r[i];
                return this.data.hierarchy[e].keys[0]
            },
            getPrevKeyWith: function(t, e, i) {
                var r = this.data.hierarchy[e].keys;
                for (i = this.interpolationType === n.AnimationHandler.CATMULLROM || this.interpolationType === n.AnimationHandler.CATMULLROM_FORWARD ? i > 0 ? i : 0 : i >= 0 ? i : i + r.length; i >= 0; i--)
                    if (void 0 !== r[i][t]) return r[i];
                return this.data.hierarchy[e].keys[r.length - 1]
            }
        }, n.KeyFrameAnimation = function(t) {
            this.root = t.node, this.data = n.AnimationHandler.init(t), this.hierarchy = n.AnimationHandler.parse(this.root), this.currentTime = 0, this.timeScale = .001, this.isPlaying = !1, this.isPaused = !0, this.loop = !0;
            for (var e = 0, i = this.hierarchy.length; i > e; e++) {
                var r = this.data.hierarchy[e].keys,
                    a = this.data.hierarchy[e].sids,
                    o = this.hierarchy[e];
                if (r.length && a) {
                    for (var s = 0; s < a.length; s++) {
                        var h = a[s],
                            l = this.getNextKeyWith(h, e, 0);
                        l && l.apply(h)
                    }
                    o.matrixAutoUpdate = !1, this.data.hierarchy[e].node.updateMatrix(), o.matrixWorldNeedsUpdate = !0
                }
            }
        }, n.KeyFrameAnimation.prototype = {
            constructor: n.KeyFrameAnimation,
            play: function(t) {
                if (this.currentTime = void 0 !== t ? t : 0, this.isPlaying === !1) {
                    this.isPlaying = !0;
                    var e, i, r, a = this.hierarchy.length;
                    for (e = 0; a > e; e++) {
                        i = this.hierarchy[e], r = this.data.hierarchy[e], void 0 === r.animationCache && (r.animationCache = {}, r.animationCache.prevKey = null, r.animationCache.nextKey = null, r.animationCache.originalMatrix = i.matrix);
                        var o = this.data.hierarchy[e].keys;
                        o.length && (r.animationCache.prevKey = o[0], r.animationCache.nextKey = o[1], this.startTime = Math.min(o[0].time, this.startTime), this.endTime = Math.max(o[o.length - 1].time, this.endTime))
                    }
                    this.update(0)
                }
                this.isPaused = !1, n.AnimationHandler.play(this)
            },
            stop: function() {
                this.isPlaying = !1, this.isPaused = !1, n.AnimationHandler.stop(this);
                for (var t = 0; t < this.data.hierarchy.length; t++) {
                    var e = this.hierarchy[t],
                        i = this.data.hierarchy[t];
                    if (void 0 !== i.animationCache) {
                        var r = i.animationCache.originalMatrix;
                        r.copy(e.matrix), e.matrix = r, delete i.animationCache
                    }
                }
            },
            update: function(t) {
                if (this.isPlaying !== !1) {
                    this.currentTime += t * this.timeScale;
                    var e = this.data.length;
                    this.loop === !0 && this.currentTime > e && (this.currentTime %= e), this.currentTime = Math.min(this.currentTime, e);
                    for (var i = 0, r = this.hierarchy.length; r > i; i++) {
                        var n = this.hierarchy[i],
                            a = this.data.hierarchy[i],
                            o = a.keys,
                            s = a.animationCache;
                        if (o.length) {
                            var h = s.prevKey,
                                l = s.nextKey;
                            if (l.time <= this.currentTime) {
                                for (; l.time < this.currentTime && l.index > h.index;) h = l, l = o[h.index + 1];
                                s.prevKey = h, s.nextKey = l
                            }
                            l.time >= this.currentTime ? h.interpolate(l, this.currentTime) : h.interpolate(l, l.time), this.data.hierarchy[i].node.updateMatrix(), n.matrixWorldNeedsUpdate = !0
                        }
                    }
                }
            },
            getNextKeyWith: function(t, e, i) {
                var r = this.data.hierarchy[e].keys;
                for (i %= r.length; i < r.length; i++)
                    if (r[i].hasTarget(t)) return r[i];
                return r[0]
            },
            getPrevKeyWith: function(t, e, i) {
                var r = this.data.hierarchy[e].keys;
                for (i = i >= 0 ? i : i + r.length; i >= 0; i--)
                    if (r[i].hasTarget(t)) return r[i];
                return r[r.length - 1]
            }
        }, n.MorphAnimation = function(t) {
            this.mesh = t, this.frames = t.morphTargetInfluences.length, this.currentTime = 0, this.duration = 1e3, this.loop = !0, this.lastFrame = 0, this.currentFrame = 0, this.isPlaying = !1
        }, n.MorphAnimation.prototype = {
            constructor: n.MorphAnimation,
            play: function() {
                this.isPlaying = !0
            },
            pause: function() {
                this.isPlaying = !1
            },
            update: function(t) {
                if (this.isPlaying !== !1) {
                    this.currentTime += t, this.loop === !0 && this.currentTime > this.duration && (this.currentTime %= this.duration), this.currentTime = Math.min(this.currentTime, this.duration);
                    var e = this.duration / this.frames,
                        i = Math.floor(this.currentTime / e),
                        r = this.mesh.morphTargetInfluences;
                    i !== this.currentFrame && (r[this.lastFrame] = 0, r[this.currentFrame] = 1, r[i] = 0, this.lastFrame = this.currentFrame, this.currentFrame = i);
                    var n = this.currentTime % e / e;
                    r[i] = n, r[this.lastFrame] = 1 - n
                }
            }
        }, n.BoxGeometry = function(t, e, i, r, a, o) {
            function s(t, e, i, r, a, o, s, l) {
                var c, u, p, d = h.widthSegments,
                    f = h.heightSegments,
                    m = a / 2,
                    g = o / 2,
                    v = h.vertices.length;
                "x" === t && "y" === e || "y" === t && "x" === e ? c = "z" : "x" === t && "z" === e || "z" === t && "x" === e ? (c = "y", f = h.depthSegments) : ("z" === t && "y" === e || "y" === t && "z" === e) && (c = "x", d = h.depthSegments);
                var y = d + 1,
                    _ = f + 1,
                    x = a / d,
                    b = o / f,
                    w = new n.Vector3;
                for (w[c] = s > 0 ? 1 : -1, p = 0; _ > p; p++)
                    for (u = 0; y > u; u++) {
                        var M = new n.Vector3;
                        M[t] = (u * x - m) * i, M[e] = (p * b - g) * r, M[c] = s, h.vertices.push(M)
                    }
                for (p = 0; f > p; p++)
                    for (u = 0; d > u; u++) {
                        var T = u + y * p,
                            S = u + y * (p + 1),
                            E = u + 1 + y * (p + 1),
                            A = u + 1 + y * p,
                            C = new n.Vector2(u / d, 1 - p / f),
                            P = new n.Vector2(u / d, 1 - (p + 1) / f),
                            L = new n.Vector2((u + 1) / d, 1 - (p + 1) / f),
                            R = new n.Vector2((u + 1) / d, 1 - p / f),
                            D = new n.Face3(T + v, S + v, A + v);
                        D.normal.copy(w), D.vertexNormals.push(w.clone(), w.clone(), w.clone()), D.materialIndex = l, h.faces.push(D), h.faceVertexUvs[0].push([C, P, R]), D = new n.Face3(S + v, E + v, A + v), D.normal.copy(w), D.vertexNormals.push(w.clone(), w.clone(), w.clone()), D.materialIndex = l, h.faces.push(D), h.faceVertexUvs[0].push([P.clone(), L, R.clone()])
                    }
            }
            n.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
                width: t,
                height: e,
                depth: i,
                widthSegments: r,
                heightSegments: a,
                depthSegments: o
            }, this.widthSegments = r || 1, this.heightSegments = a || 1, this.depthSegments = o || 1;
            var h = this,
                l = t / 2,
                c = e / 2,
                u = i / 2;
            s("z", "y", -1, -1, i, e, l, 0), s("z", "y", 1, -1, i, e, -l, 1), s("x", "z", 1, 1, t, i, c, 2), s("x", "z", 1, -1, t, i, -c, 3), s("x", "y", 1, -1, t, e, u, 4), s("x", "y", -1, -1, t, e, -u, 5), this.mergeVertices()
        }, n.BoxGeometry.prototype = Object.create(n.Geometry.prototype), n.BoxGeometry.prototype.constructor = n.BoxGeometry, n.BoxGeometry.prototype.clone = function() {
            var t = new n.BoxGeometry(this.parameters.width, this.parameters.height, this.parameters.depth, this.parameters.widthSegments, this.parameters.heightSegments, this.parameters.depthSegments);
            return t
        }, n.CubeGeometry = n.BoxGeometry, n.CircleGeometry = function(t, e, i, r) {
            n.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
                radius: t,
                segments: e,
                thetaStart: i,
                thetaLength: r
            }, t = t || 50, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI;
            var a, o = [],
                s = new n.Vector3,
                h = new n.Vector2(.5, .5);
            for (this.vertices.push(s), o.push(h), a = 0; e >= a; a++) {
                var l = new n.Vector3,
                    c = i + a / e * r;
                l.x = t * Math.cos(c), l.y = t * Math.sin(c), this.vertices.push(l), o.push(new n.Vector2((l.x / t + 1) / 2, (l.y / t + 1) / 2))
            }
            var u = new n.Vector3(0, 0, 1);
            for (a = 1; e >= a; a++) this.faces.push(new n.Face3(a, a + 1, 0, [u.clone(), u.clone(), u.clone()])), this.faceVertexUvs[0].push([o[a].clone(), o[a + 1].clone(), h.clone()]);
            this.computeFaceNormals(), this.boundingSphere = new n.Sphere(new n.Vector3, t)
        }, n.CircleGeometry.prototype = Object.create(n.Geometry.prototype), n.CircleGeometry.prototype.constructor = n.CircleGeometry, n.CircleGeometry.prototype.clone = function() {
            var t = new n.CircleGeometry(this.parameters.radius, this.parameters.segments, this.parameters.thetaStart, this.parameters.thetaLength);
            return t
        }, n.CircleBufferGeometry = function(t, e, i, r) {
            n.BufferGeometry.call(this), this.type = "CircleBufferGeometry", this.parameters = {
                radius: t,
                segments: e,
                thetaStart: i,
                thetaLength: r
            }, t = t || 50, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI;
            var a = e + 2,
                o = new Float32Array(3 * a),
                s = new Float32Array(3 * a),
                h = new Float32Array(2 * a);
            s[3] = 1, h[0] = .5, h[1] = .5;
            for (var l = 0, c = 3, u = 2; e >= l; l++, c += 3, u += 2) {
                var p = i + l / e * r;
                o[c] = t * Math.cos(p), o[c + 1] = t * Math.sin(p), s[c + 2] = 1, h[u] = (o[c] / t + 1) / 2, h[u + 1] = (o[c + 1] / t + 1) / 2
            }
            for (var d = [], c = 1; e >= c; c++) d.push(c), d.push(c + 1), d.push(0);
            this.setIndex(new n.BufferAttribute(new Uint16Array(d), 1)), this.addAttribute("position", new n.BufferAttribute(o, 3)), this.addAttribute("normal", new n.BufferAttribute(s, 3)), this.addAttribute("uv", new n.BufferAttribute(h, 2)), this.boundingSphere = new n.Sphere(new n.Vector3, t)
        }, n.CircleBufferGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.CircleBufferGeometry.prototype.constructor = n.CircleBufferGeometry, n.CircleBufferGeometry.prototype.clone = function() {
            var t = new n.CircleBufferGeometry(this.parameters.radius, this.parameters.segments, this.parameters.thetaStart, this.parameters.thetaLength);
            return t.copy(this), t
        }, n.CylinderGeometry = function(t, e, i, r, a, o, s, h) {
            n.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: i,
                radialSegments: r,
                heightSegments: a,
                openEnded: o,
                thetaStart: s,
                thetaLength: h
            }, t = void 0 !== t ? t : 20, e = void 0 !== e ? e : 20, i = void 0 !== i ? i : 100, r = r || 8, a = a || 1, o = void 0 !== o ? o : !1, s = void 0 !== s ? s : 0, h = void 0 !== h ? h : 2 * Math.PI;
            var l, c, u = i / 2,
                p = [],
                d = [];
            for (c = 0; a >= c; c++) {
                var f = [],
                    m = [],
                    g = c / a,
                    v = g * (e - t) + t;
                for (l = 0; r >= l; l++) {
                    var y = l / r,
                        _ = new n.Vector3;
                    _.x = v * Math.sin(y * h + s), _.y = -g * i + u, _.z = v * Math.cos(y * h + s), this.vertices.push(_), f.push(this.vertices.length - 1), m.push(new n.Vector2(y, 1 - g))
                }
                p.push(f), d.push(m)
            }
            var x, b, w = (e - t) / i;
            for (l = 0; r > l; l++)
                for (0 !== t ? (x = this.vertices[p[0][l]].clone(), b = this.vertices[p[0][l + 1]].clone()) : (x = this.vertices[p[1][l]].clone(), b = this.vertices[p[1][l + 1]].clone()), x.setY(Math.sqrt(x.x * x.x + x.z * x.z) * w).normalize(), b.setY(Math.sqrt(b.x * b.x + b.z * b.z) * w).normalize(), c = 0; a > c; c++) {
                    var M = p[c][l],
                        T = p[c + 1][l],
                        S = p[c + 1][l + 1],
                        E = p[c][l + 1],
                        A = x.clone(),
                        C = x.clone(),
                        P = b.clone(),
                        L = b.clone(),
                        R = d[c][l].clone(),
                        D = d[c + 1][l].clone(),
                        F = d[c + 1][l + 1].clone(),
                        O = d[c][l + 1].clone();
                    this.faces.push(new n.Face3(M, T, E, [A, C, L])), this.faceVertexUvs[0].push([R, D, O]), this.faces.push(new n.Face3(T, S, E, [C.clone(), P, L.clone()])), this.faceVertexUvs[0].push([D.clone(), F, O.clone()])
                }
            if (o === !1 && t > 0)
                for (this.vertices.push(new n.Vector3(0, u, 0)), l = 0; r > l; l++) {
                    var M = p[0][l],
                        T = p[0][l + 1],
                        S = this.vertices.length - 1,
                        A = new n.Vector3(0, 1, 0),
                        C = new n.Vector3(0, 1, 0),
                        P = new n.Vector3(0, 1, 0),
                        R = d[0][l].clone(),
                        D = d[0][l + 1].clone(),
                        F = new n.Vector2(D.x, 0);
                    this.faces.push(new n.Face3(M, T, S, [A, C, P], void 0, 1)), this.faceVertexUvs[0].push([R, D, F])
                }
            if (o === !1 && e > 0)
                for (this.vertices.push(new n.Vector3(0, -u, 0)), l = 0; r > l; l++) {
                    var M = p[a][l + 1],
                        T = p[a][l],
                        S = this.vertices.length - 1,
                        A = new n.Vector3(0, -1, 0),
                        C = new n.Vector3(0, -1, 0),
                        P = new n.Vector3(0, -1, 0),
                        R = d[a][l + 1].clone(),
                        D = d[a][l].clone(),
                        F = new n.Vector2(D.x, 1);
                    this.faces.push(new n.Face3(M, T, S, [A, C, P], void 0, 2)), this.faceVertexUvs[0].push([R, D, F])
                }
            this.computeFaceNormals()
        }, n.CylinderGeometry.prototype = Object.create(n.Geometry.prototype), n.CylinderGeometry.prototype.constructor = n.CylinderGeometry, n.CylinderGeometry.prototype.clone = function() {
            var t = new n.CylinderGeometry(this.parameters.radiusTop, this.parameters.radiusBottom, this.parameters.height, this.parameters.radialSegments, this.parameters.heightSegments, this.parameters.openEnded, this.parameters.thetaStart, this.parameters.thetaLength);
            return t
        }, n.EdgesGeometry = function(t, e) {
            n.BufferGeometry.call(this), e = void 0 !== e ? e : 1;
            var i, r = Math.cos(n.Math.degToRad(e)),
                a = [0, 0],
                o = {},
                s = function(t, e) {
                    return t - e
                },
                h = ["a", "b", "c"];
            t instanceof n.BufferGeometry ? (i = new n.Geometry, i.fromBufferGeometry(t)) : i = t.clone(), i.mergeVertices(), i.computeFaceNormals();
            for (var l = i.vertices, c = i.faces, u = 0, p = c.length; p > u; u++)
                for (var d = c[u], f = 0; 3 > f; f++) {
                    a[0] = d[h[f]], a[1] = d[h[(f + 1) % 3]], a.sort(s);
                    var m = a.toString();
                    void 0 === o[m] ? o[m] = {
                        vert1: a[0],
                        vert2: a[1],
                        face1: u,
                        face2: void 0
                    } : o[m].face2 = u
                }
            var g = [];
            for (var m in o) {
                var v = o[m];
                if (void 0 === v.face2 || c[v.face1].normal.dot(c[v.face2].normal) <= r) {
                    var y = l[v.vert1];
                    g.push(y.x), g.push(y.y), g.push(y.z), y = l[v.vert2], g.push(y.x), g.push(y.y), g.push(y.z)
                }
            }
            this.addAttribute("position", new n.BufferAttribute(new Float32Array(g), 3))
        }, n.EdgesGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.EdgesGeometry.prototype.constructor = n.EdgesGeometry, n.ExtrudeGeometry = function(t, e) {
            return "undefined" == typeof t ? void(t = []) : (n.Geometry.call(this), this.type = "ExtrudeGeometry", t = Array.isArray(t) ? t : [t], this.addShapeList(t, e), void this.computeFaceNormals())
        }, n.ExtrudeGeometry.prototype = Object.create(n.Geometry.prototype), n.ExtrudeGeometry.prototype.constructor = n.ExtrudeGeometry, n.ExtrudeGeometry.prototype.addShapeList = function(t, e) {
            for (var i = t.length, r = 0; i > r; r++) {
                var n = t[r];
                this.addShape(n, e)
            }
        }, n.ExtrudeGeometry.prototype.addShape = function(t, e) {
            function i(t, e, i) {
                return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t)
            }

            function r(t, e, i) {
                var r, a, o = 1e-10,
                    s = 1,
                    h = t.x - e.x,
                    l = t.y - e.y,
                    c = i.x - t.x,
                    u = i.y - t.y,
                    p = h * h + l * l,
                    d = h * u - l * c;
                if (Math.abs(d) > o) {
                    var f = Math.sqrt(p),
                        m = Math.sqrt(c * c + u * u),
                        g = e.x - l / f,
                        v = e.y + h / f,
                        y = i.x - u / m,
                        _ = i.y + c / m,
                        x = ((y - g) * u - (_ - v) * c) / (h * u - l * c);
                    r = g + h * x - t.x, a = v + l * x - t.y;
                    var b = r * r + a * a;
                    if (2 >= b) return new n.Vector2(r, a);
                    s = Math.sqrt(b / 2)
                } else {
                    var w = !1;
                    h > o ? c > o && (w = !0) : -o > h ? -o > c && (w = !0) : Math.sign(l) === Math.sign(u) && (w = !0), w ? (r = -l, a = h, s = Math.sqrt(p)) : (r = h, a = l, s = Math.sqrt(p / 2))
                }
                return new n.Vector2(r / s, a / s)
            }

            function a() {
                if (x) {
                    var t = 0,
                        e = H * t;
                    for (X = 0; j > X; X++) G = k[X], l(G[2] + e, G[1] + e, G[0] + e);
                    for (t = w + 2 * _, e = H * t, X = 0; j > X; X++) G = k[X], l(G[0] + e, G[1] + e, G[2] + e)
                } else {
                    for (X = 0; j > X; X++) G = k[X], l(G[2], G[1], G[0]);
                    for (X = 0; j > X; X++) G = k[X], l(G[0] + H * w, G[1] + H * w, G[2] + H * w)
                }
            }

            function o() {
                var t = 0;
                for (s(U, t), t += U.length, A = 0, C = F.length; C > A; A++) E = F[A], s(E, t), t += E.length
            }

            function s(t, e) {
                var i, r;
                for (X = t.length; --X >= 0;) {
                    i = X, r = X - 1, 0 > r && (r = t.length - 1);
                    var n = 0,
                        a = w + 2 * _;
                    for (n = 0; a > n; n++) {
                        var o = H * n,
                            s = H * (n + 1),
                            h = e + i + o,
                            l = e + r + o,
                            u = e + r + s,
                            p = e + i + s;
                        c(h, l, u, p, t, n, a, i, r)
                    }
                }
            }

            function h(t, e, i) {
                P.vertices.push(new n.Vector3(t, e, i))
            }

            function l(t, e, i) {
                t += L, e += L, i += L, P.faces.push(new n.Face3(t, e, i));
                var r = S.generateTopUV(P, t, e, i);
                P.faceVertexUvs[0].push(r)
            }

            function c(t, e, i, r, a, o, s, h, l) {
                t += L, e += L, i += L, r += L, P.faces.push(new n.Face3(t, e, r)), P.faces.push(new n.Face3(e, i, r));
                var c = S.generateSideWallUV(P, t, e, i, r);
                P.faceVertexUvs[0].push([c[0], c[1], c[3]]), P.faceVertexUvs[0].push([c[1], c[2], c[3]])
            }
            var u, p, d, f, m, g = void 0 !== e.amount ? e.amount : 100,
                v = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                y = void 0 !== e.bevelSize ? e.bevelSize : v - 2,
                _ = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
                x = void 0 !== e.bevelEnabled ? e.bevelEnabled : !0,
                b = void 0 !== e.curveSegments ? e.curveSegments : 12,
                w = void 0 !== e.steps ? e.steps : 1,
                M = e.extrudePath,
                T = !1,
                S = void 0 !== e.UVGenerator ? e.UVGenerator : n.ExtrudeGeometry.WorldUVGenerator;
            M && (u = M.getSpacedPoints(w), T = !0, x = !1, p = void 0 !== e.frames ? e.frames : new n.TubeGeometry.FrenetFrames(M, w, !1), d = new n.Vector3, f = new n.Vector3, m = new n.Vector3), x || (_ = 0, v = 0, y = 0);
            var E, A, C, P = this,
                L = this.vertices.length,
                R = t.extractPoints(b),
                D = R.shape,
                F = R.holes,
                O = !n.Shape.Utils.isClockWise(D);
            if (O) {
                for (D = D.reverse(), A = 0, C = F.length; C > A; A++) E = F[A], n.Shape.Utils.isClockWise(E) && (F[A] = E.reverse());
                O = !1
            }
            var k = n.Shape.Utils.triangulateShape(D, F),
                U = D;
            for (A = 0, C = F.length; C > A; A++) E = F[A], D = D.concat(E);
            for (var B, V, I, z, N, G, H = D.length, j = k.length, W = [], X = 0, q = U.length, Y = q - 1, K = X + 1; q > X; X++, Y++, K++) Y === q && (Y = 0), K === q && (K = 0), W[X] = r(U[X], U[Y], U[K]);
            var Z, Q = [],
                J = W.concat();
            for (A = 0, C = F.length; C > A; A++) {
                for (E = F[A], Z = [], X = 0, q = E.length, Y = q - 1, K = X + 1; q > X; X++, Y++, K++) Y === q && (Y = 0), K === q && (K = 0), Z[X] = r(E[X], E[Y], E[K]);
                Q.push(Z), J = J.concat(Z)
            }
            for (B = 0; _ > B; B++) {
                for (I = B / _, z = v * (1 - I), V = y * Math.sin(I * Math.PI / 2), X = 0, q = U.length; q > X; X++) N = i(U[X], W[X], V), h(N.x, N.y, -z);
                for (A = 0, C = F.length; C > A; A++)
                    for (E = F[A], Z = Q[A], X = 0, q = E.length; q > X; X++) N = i(E[X], Z[X], V), h(N.x, N.y, -z)
            }
            for (V = y, X = 0; H > X; X++) N = x ? i(D[X], J[X], V) : D[X], T ? (f.copy(p.normals[0]).multiplyScalar(N.x), d.copy(p.binormals[0]).multiplyScalar(N.y), m.copy(u[0]).add(f).add(d), h(m.x, m.y, m.z)) : h(N.x, N.y, 0);
            var $;
            for ($ = 1; w >= $; $++)
                for (X = 0; H > X; X++) N = x ? i(D[X], J[X], V) : D[X], T ? (f.copy(p.normals[$]).multiplyScalar(N.x), d.copy(p.binormals[$]).multiplyScalar(N.y), m.copy(u[$]).add(f).add(d), h(m.x, m.y, m.z)) : h(N.x, N.y, g / w * $);
            for (B = _ - 1; B >= 0; B--) {
                for (I = B / _, z = v * (1 - I), V = y * Math.sin(I * Math.PI / 2), X = 0, q = U.length; q > X; X++) N = i(U[X], W[X], V), h(N.x, N.y, g + z);
                for (A = 0, C = F.length; C > A; A++)
                    for (E = F[A], Z = Q[A], X = 0, q = E.length; q > X; X++) N = i(E[X], Z[X], V), T ? h(N.x, N.y + u[w - 1].y, u[w - 1].x + z) : h(N.x, N.y, g + z)
            }
            a(), o()
        }, n.ExtrudeGeometry.WorldUVGenerator = {
            generateTopUV: function(t, e, i, r) {
                var a = t.vertices,
                    o = a[e],
                    s = a[i],
                    h = a[r];
                return [new n.Vector2(o.x, o.y), new n.Vector2(s.x, s.y), new n.Vector2(h.x, h.y)]
            },
            generateSideWallUV: function(t, e, i, r, a) {
                var o = t.vertices,
                    s = o[e],
                    h = o[i],
                    l = o[r],
                    c = o[a];
                return Math.abs(s.y - h.y) < .01 ? [new n.Vector2(s.x, 1 - s.z), new n.Vector2(h.x, 1 - h.z), new n.Vector2(l.x, 1 - l.z), new n.Vector2(c.x, 1 - c.z)] : [new n.Vector2(s.y, 1 - s.z), new n.Vector2(h.y, 1 - h.z), new n.Vector2(l.y, 1 - l.z), new n.Vector2(c.y, 1 - c.z)]
            }
        }, n.ShapeGeometry = function(t, e) {
            n.Geometry.call(this), this.type = "ShapeGeometry", Array.isArray(t) === !1 && (t = [t]), this.addShapeList(t, e), this.computeFaceNormals()
        }, n.ShapeGeometry.prototype = Object.create(n.Geometry.prototype), n.ShapeGeometry.prototype.constructor = n.ShapeGeometry, n.ShapeGeometry.prototype.addShapeList = function(t, e) {
            for (var i = 0, r = t.length; r > i; i++) this.addShape(t[i], e);
            return this
        }, n.ShapeGeometry.prototype.addShape = function(t, e) {
            void 0 === e && (e = {});
            var i, r, a, o = void 0 !== e.curveSegments ? e.curveSegments : 12,
                s = e.material,
                h = void 0 === e.UVGenerator ? n.ExtrudeGeometry.WorldUVGenerator : e.UVGenerator,
                l = this.vertices.length,
                c = t.extractPoints(o),
                u = c.shape,
                p = c.holes,
                d = !n.Shape.Utils.isClockWise(u);
            if (d) {
                for (u = u.reverse(), i = 0, r = p.length; r > i; i++) a = p[i], n.Shape.Utils.isClockWise(a) && (p[i] = a.reverse());
                d = !1
            }
            var f = n.Shape.Utils.triangulateShape(u, p);
            for (i = 0, r = p.length; r > i; i++) a = p[i], u = u.concat(a);
            var m, g, v = u.length,
                y = f.length;
            for (i = 0; v > i; i++) m = u[i], this.vertices.push(new n.Vector3(m.x, m.y, 0));
            for (i = 0; y > i; i++) {
                g = f[i];
                var _ = g[0] + l,
                    x = g[1] + l,
                    b = g[2] + l;
                this.faces.push(new n.Face3(_, x, b, null, null, s)), this.faceVertexUvs[0].push(h.generateTopUV(this, _, x, b))
            }
        }, n.LatheGeometry = function(t, e, i, r) {
            n.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
                points: t,
                segments: e,
                phiStart: i,
                phiLength: r
            }, e = e || 12, i = i || 0, r = r || 2 * Math.PI;
            for (var a = 1 / (t.length - 1), o = 1 / e, s = 0, h = e; h >= s; s++)
                for (var l = i + s * o * r, c = Math.cos(l), u = Math.sin(l), p = 0, d = t.length; d > p; p++) {
                    var f = t[p],
                        m = new n.Vector3;
                    m.x = c * f.x - u * f.y, m.y = u * f.x + c * f.y, m.z = f.z, this.vertices.push(m)
                }
            for (var g = t.length, s = 0, h = e; h > s; s++)
                for (var p = 0, d = t.length - 1; d > p; p++) {
                    var v = p + g * s,
                        y = v,
                        _ = v + g,
                        c = v + 1 + g,
                        x = v + 1,
                        b = s * o,
                        w = p * a,
                        M = b + o,
                        T = w + a;
                    this.faces.push(new n.Face3(y, _, x)), this.faceVertexUvs[0].push([new n.Vector2(b, w), new n.Vector2(M, w), new n.Vector2(b, T)]), this.faces.push(new n.Face3(_, c, x)), this.faceVertexUvs[0].push([new n.Vector2(M, w), new n.Vector2(M, T), new n.Vector2(b, T)])
                }
            this.mergeVertices(), this.computeFaceNormals(), this.computeVertexNormals()
        }, n.LatheGeometry.prototype = Object.create(n.Geometry.prototype), n.LatheGeometry.prototype.constructor = n.LatheGeometry, n.PlaneGeometry = function(t, e, i, r) {
            n.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: i,
                heightSegments: r
            }, this.fromBufferGeometry(new n.PlaneBufferGeometry(t, e, i, r))
        }, n.PlaneGeometry.prototype = Object.create(n.Geometry.prototype), n.PlaneGeometry.prototype.constructor = n.PlaneGeometry, n.PlaneGeometry.prototype.clone = function() {
            var t = new n.PlaneGeometry(this.parameters.width, this.parameters.height, this.parameters.widthSegments, this.parameters.heightSegments);
            return t
        }, n.PlaneBufferGeometry = function(t, e, i, r) {
            n.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: i,
                heightSegments: r
            };
            for (var a = t / 2, o = e / 2, s = Math.floor(i) || 1, h = Math.floor(r) || 1, l = s + 1, c = h + 1, u = t / s, p = e / h, d = new Float32Array(l * c * 3), f = new Float32Array(l * c * 3), m = new Float32Array(l * c * 2), g = 0, v = 0, y = 0; c > y; y++)
                for (var _ = y * p - o, x = 0; l > x; x++) {
                    var b = x * u - a;
                    d[g] = b, d[g + 1] = -_, f[g + 2] = 1, m[v] = x / s, m[v + 1] = 1 - y / h, g += 3, v += 2
                }
            g = 0;
            for (var w = new(d.length / 3 > 65535 ? Uint32Array : Uint16Array)(s * h * 6), y = 0; h > y; y++)
                for (var x = 0; s > x; x++) {
                    var M = x + l * y,
                        T = x + l * (y + 1),
                        S = x + 1 + l * (y + 1),
                        E = x + 1 + l * y;
                    w[g] = M, w[g + 1] = T, w[g + 2] = E, w[g + 3] = T, w[g + 4] = S, w[g + 5] = E, g += 6
                }
            this.setIndex(new n.BufferAttribute(w, 1)), this.addAttribute("position", new n.BufferAttribute(d, 3)), this.addAttribute("normal", new n.BufferAttribute(f, 3)), this.addAttribute("uv", new n.BufferAttribute(m, 2))
        }, n.PlaneBufferGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.PlaneBufferGeometry.prototype.constructor = n.PlaneBufferGeometry, n.PlaneBufferGeometry.prototype.clone = function() {
            var t = new n.PlaneBufferGeometry(this.parameters.width, this.parameters.height, this.parameters.widthSegments, this.parameters.heightSegments);
            return t.copy(this), t
        }, n.RingGeometry = function(t, e, i, r, a, o) {
            n.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: i,
                phiSegments: r,
                thetaStart: a,
                thetaLength: o
            }, t = t || 0, e = e || 50, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8, r = void 0 !== r ? Math.max(1, r) : 8;
            var s, h, l = [],
                c = t,
                u = (e - t) / r;
            for (s = 0; r + 1 > s; s++) {
                for (h = 0; i + 1 > h; h++) {
                    var p = new n.Vector3,
                        d = a + h / i * o;
                    p.x = c * Math.cos(d), p.y = c * Math.sin(d), this.vertices.push(p), l.push(new n.Vector2((p.x / e + 1) / 2, (p.y / e + 1) / 2))
                }
                c += u
            }
            var f = new n.Vector3(0, 0, 1);
            for (s = 0; r > s; s++) {
                var m = s * (i + 1);
                for (h = 0; i > h; h++) {
                    var d = h + m,
                        g = d,
                        v = d + i + 1,
                        y = d + i + 2;
                    this.faces.push(new n.Face3(g, v, y, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([l[g].clone(), l[v].clone(), l[y].clone()]), g = d, v = d + i + 2, y = d + 1, this.faces.push(new n.Face3(g, v, y, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([l[g].clone(), l[v].clone(), l[y].clone()])
                }
            }
            this.computeFaceNormals(), this.boundingSphere = new n.Sphere(new n.Vector3, c)
        }, n.RingGeometry.prototype = Object.create(n.Geometry.prototype), n.RingGeometry.prototype.constructor = n.RingGeometry, n.RingGeometry.prototype.clone = function() {
            var t = new n.RingGeometry(this.parameters.innerRadius, this.parameters.outerRadius, this.parameters.thetaSegments, this.parameters.phiSegments, this.parameters.thetaStart, this.parameters.thetaLength);
            return t
        }, n.SphereGeometry = function(t, e, i, r, a, o, s) {
            n.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: i,
                phiStart: r,
                phiLength: a,
                thetaStart: o,
                thetaLength: s
            }, this.fromBufferGeometry(new n.SphereBufferGeometry(t, e, i, r, a, o, s))
        }, n.SphereGeometry.prototype = Object.create(n.Geometry.prototype), n.SphereGeometry.prototype.constructor = n.SphereGeometry, n.SphereGeometry.prototype.clone = function() {
            var t = new n.SphereGeometry(this.parameters.radius, this.parameters.widthSegments, this.parameters.heightSegments, this.parameters.phiStart, this.parameters.phiLength, this.parameters.thetaStart, this.parameters.thetaLength);
            return t
        }, n.SphereBufferGeometry = function(t, e, i, r, a, o, s) {
            n.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: i,
                phiStart: r,
                phiLength: a,
                thetaStart: o,
                thetaLength: s
            }, t = t || 50, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : Math.PI;
            for (var h = o + s, l = (e + 1) * (i + 1), c = new n.BufferAttribute(new Float32Array(3 * l), 3), u = new n.BufferAttribute(new Float32Array(3 * l), 3), p = new n.BufferAttribute(new Float32Array(2 * l), 2), d = 0, f = [], m = new n.Vector3, g = 0; i >= g; g++) {
                for (var v = [], y = g / i, _ = 0; e >= _; _++) {
                    var x = _ / e,
                        b = -t * Math.cos(r + x * a) * Math.sin(o + y * s),
                        w = t * Math.cos(o + y * s),
                        M = t * Math.sin(r + x * a) * Math.sin(o + y * s);
                    m.set(b, w, M).normalize(), c.setXYZ(d, b, w, M), u.setXYZ(d, m.x, m.y, m.z), p.setXY(d, x, 1 - y), v.push(d), d++
                }
                f.push(v)
            }
            for (var T = [], g = 0; i > g; g++)
                for (var _ = 0; e > _; _++) {
                    var S = f[g][_ + 1],
                        E = f[g][_],
                        A = f[g + 1][_],
                        C = f[g + 1][_ + 1];
                    (0 !== g || o > 0) && T.push(S, E, C), (g !== i - 1 || h < Math.PI) && T.push(E, A, C)
                }
            this.setIndex(new n.BufferAttribute(new Uint16Array(T), 1)), this.addAttribute("position", c), this.addAttribute("normal", u), this.addAttribute("uv", p), this.boundingSphere = new n.Sphere(new n.Vector3, t)
        }, n.SphereBufferGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.SphereBufferGeometry.prototype.constructor = n.SphereBufferGeometry, n.SphereBufferGeometry.prototype.clone = function() {
            var t = new n.SphereBufferGeometry(this.parameters.radius, this.parameters.widthSegments, this.parameters.heightSegments, this.parameters.phiStart, this.parameters.phiLength, this.parameters.thetaStart, this.parameters.thetaLength);
            return t.copy(this), t
        }, n.TextGeometry = function(t, e) {
            e = e || {};
            var i = n.FontUtils.generateShapes(t, e);
            e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), n.ExtrudeGeometry.call(this, i, e), this.type = "TextGeometry"
        }, n.TextGeometry.prototype = Object.create(n.ExtrudeGeometry.prototype), n.TextGeometry.prototype.constructor = n.TextGeometry, n.TorusGeometry = function(t, e, i, r, a) {
            n.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
                radius: t,
                tube: e,
                radialSegments: i,
                tubularSegments: r,
                arc: a
            }, t = t || 100, e = e || 40, i = i || 8, r = r || 6, a = a || 2 * Math.PI;
            for (var o = new n.Vector3, s = [], h = [], l = 0; i >= l; l++)
                for (var c = 0; r >= c; c++) {
                    var u = c / r * a,
                        p = l / i * Math.PI * 2;
                    o.x = t * Math.cos(u), o.y = t * Math.sin(u);
                    var d = new n.Vector3;
                    d.x = (t + e * Math.cos(p)) * Math.cos(u), d.y = (t + e * Math.cos(p)) * Math.sin(u), d.z = e * Math.sin(p), this.vertices.push(d), s.push(new n.Vector2(c / r, l / i)), h.push(d.clone().sub(o).normalize())
                }
            for (var l = 1; i >= l; l++)
                for (var c = 1; r >= c; c++) {
                    var f = (r + 1) * l + c - 1,
                        m = (r + 1) * (l - 1) + c - 1,
                        g = (r + 1) * (l - 1) + c,
                        v = (r + 1) * l + c,
                        y = new n.Face3(f, m, v, [h[f].clone(), h[m].clone(), h[v].clone()]);
                    this.faces.push(y), this.faceVertexUvs[0].push([s[f].clone(), s[m].clone(), s[v].clone()]), y = new n.Face3(m, g, v, [h[m].clone(), h[g].clone(), h[v].clone()]), this.faces.push(y), this.faceVertexUvs[0].push([s[m].clone(), s[g].clone(), s[v].clone()])
                }
            this.computeFaceNormals()
        }, n.TorusGeometry.prototype = Object.create(n.Geometry.prototype), n.TorusGeometry.prototype.constructor = n.TorusGeometry, n.TorusGeometry.prototype.clone = function() {
            var t = new n.TorusGeometry(this.parameters.radius, this.parameters.tube, this.parameters.radialSegments, this.parameters.tubularSegments, this.parameters.arc);
            return t
        }, n.TorusKnotGeometry = function(t, e, i, r, a, o, s) {
            function h(t, e, i, r, a) {
                var o = Math.cos(t),
                    s = Math.sin(t),
                    h = e / i * t,
                    l = Math.cos(h),
                    c = r * (2 + l) * .5 * o,
                    u = r * (2 + l) * s * .5,
                    p = a * r * Math.sin(h) * .5;
                return new n.Vector3(c, u, p)
            }
            n.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
                radius: t,
                tube: e,
                radialSegments: i,
                tubularSegments: r,
                p: a,
                q: o,
                heightScale: s
            }, t = t || 100, e = e || 40, i = i || 64, r = r || 8, a = a || 2, o = o || 3, s = s || 1;
            for (var l = new Array(i), c = new n.Vector3, u = new n.Vector3, p = new n.Vector3, d = 0; i > d; ++d) {
                l[d] = new Array(r);
                var f = d / i * 2 * a * Math.PI,
                    m = h(f, o, a, t, s),
                    g = h(f + .01, o, a, t, s);
                c.subVectors(g, m), u.addVectors(g, m), p.crossVectors(c, u), u.crossVectors(p, c), p.normalize(), u.normalize();
                for (var v = 0; r > v; ++v) {
                    var y = v / r * 2 * Math.PI,
                        _ = -e * Math.cos(y),
                        x = e * Math.sin(y),
                        b = new n.Vector3;
                    b.x = m.x + _ * u.x + x * p.x, b.y = m.y + _ * u.y + x * p.y, b.z = m.z + _ * u.z + x * p.z, l[d][v] = this.vertices.push(b) - 1
                }
            }
            for (var d = 0; i > d; ++d)
                for (var v = 0; r > v; ++v) {
                    var w = (d + 1) % i,
                        M = (v + 1) % r,
                        T = l[d][v],
                        S = l[w][v],
                        E = l[w][M],
                        A = l[d][M],
                        C = new n.Vector2(d / i, v / r),
                        P = new n.Vector2((d + 1) / i, v / r),
                        L = new n.Vector2((d + 1) / i, (v + 1) / r),
                        R = new n.Vector2(d / i, (v + 1) / r);
                    this.faces.push(new n.Face3(T, S, A)), this.faceVertexUvs[0].push([C, P, R]), this.faces.push(new n.Face3(S, E, A)), this.faceVertexUvs[0].push([P.clone(), L, R.clone()])
                }
            this.computeFaceNormals(), this.computeVertexNormals()
        }, n.TorusKnotGeometry.prototype = Object.create(n.Geometry.prototype), n.TorusKnotGeometry.prototype.constructor = n.TorusKnotGeometry, n.TorusKnotGeometry.prototype.clone = function() {
            var t = new n.TorusKnotGeometry(this.parameters.radius, this.parameters.tube, this.parameters.radialSegments, this.parameters.tubularSegments, this.parameters.p, this.parameters.q, this.parameters.heightScale);
            return t
        }, n.TubeGeometry = function(t, e, i, r, a, o) {
            function s(t, e, i) {
                return L.vertices.push(new n.Vector3(t, e, i)) - 1
            }
            n.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
                path: t,
                segments: e,
                radius: i,
                radialSegments: r,
                closed: a
            }, e = e || 64, i = i || 1, r = r || 8, a = a || !1, o = o || n.TubeGeometry.NoTaper;
            var h, l, c, u, p, d, f, m, g, v, y, _, x, b, w, M, T, S, E, A, C, P = [],
                L = this,
                R = e + 1,
                D = new n.Vector3,
                F = new n.TubeGeometry.FrenetFrames(t, e, a),
                O = F.tangents,
                k = F.normals,
                U = F.binormals;
            for (this.tangents = O, this.normals = k, this.binormals = U, v = 0; R > v; v++)
                for (P[v] = [], u = v / (R - 1), g = t.getPointAt(u), h = O[v], l = k[v], c = U[v], d = i * o(u), y = 0; r > y; y++) p = y / r * 2 * Math.PI, f = -d * Math.cos(p), m = d * Math.sin(p), D.copy(g), D.x += f * l.x + m * c.x, D.y += f * l.y + m * c.y, D.z += f * l.z + m * c.z, P[v][y] = s(D.x, D.y, D.z);
            for (v = 0; e > v; v++)
                for (y = 0; r > y; y++) _ = a ? (v + 1) % e : v + 1, x = (y + 1) % r, b = P[v][y], w = P[_][y], M = P[_][x], T = P[v][x], S = new n.Vector2(v / e, y / r), E = new n.Vector2((v + 1) / e, y / r), A = new n.Vector2((v + 1) / e, (y + 1) / r), C = new n.Vector2(v / e, (y + 1) / r), this.faces.push(new n.Face3(b, w, T)), this.faceVertexUvs[0].push([S, E, C]), this.faces.push(new n.Face3(w, M, T)), this.faceVertexUvs[0].push([E.clone(), A, C.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        }, n.TubeGeometry.prototype = Object.create(n.Geometry.prototype), n.TubeGeometry.prototype.constructor = n.TubeGeometry, n.TubeGeometry.NoTaper = function(t) {
            return 1
        }, n.TubeGeometry.SinusoidalTaper = function(t) {
            return Math.sin(Math.PI * t)
        }, n.TubeGeometry.FrenetFrames = function(t, e, i) {
            function r() {
                f[0] = new n.Vector3, m[0] = new n.Vector3, o = Number.MAX_VALUE, s = Math.abs(d[0].x), h = Math.abs(d[0].y), l = Math.abs(d[0].z), o >= s && (o = s, p.set(1, 0, 0)), o >= h && (o = h, p.set(0, 1, 0)), o >= l && p.set(0, 0, 1), g.crossVectors(d[0], p).normalize(), f[0].crossVectors(d[0], g), m[0].crossVectors(d[0], f[0])
            }
            var a, o, s, h, l, c, u, p = new n.Vector3,
                d = [],
                f = [],
                m = [],
                g = new n.Vector3,
                v = new n.Matrix4,
                y = e + 1,
                _ = 1e-4;
            for (this.tangents = d, this.normals = f, this.binormals = m, c = 0; y > c; c++) u = c / (y - 1), d[c] = t.getTangentAt(u), d[c].normalize();
            for (r(), c = 1; y > c; c++) f[c] = f[c - 1].clone(), m[c] = m[c - 1].clone(), g.crossVectors(d[c - 1], d[c]), g.length() > _ && (g.normalize(), a = Math.acos(n.Math.clamp(d[c - 1].dot(d[c]), -1, 1)), f[c].applyMatrix4(v.makeRotationAxis(g, a))), m[c].crossVectors(d[c], f[c]);
            if (i)
                for (a = Math.acos(n.Math.clamp(f[0].dot(f[y - 1]), -1, 1)), a /= y - 1, d[0].dot(g.crossVectors(f[0], f[y - 1])) > 0 && (a = -a), c = 1; y > c; c++) f[c].applyMatrix4(v.makeRotationAxis(d[c], a * c)), m[c].crossVectors(d[c], f[c])
        }, n.PolyhedronGeometry = function(t, e, i, r) {
            function a(t) {
                var e = t.normalize().clone();
                e.index = u.vertices.push(e) - 1;
                var i = h(t) / 2 / Math.PI + .5,
                    r = l(t) / Math.PI + .5;
                return e.uv = new n.Vector2(i, 1 - r), e
            }

            function o(t, e, i, r) {
                var a = new n.Face3(t.index, e.index, i.index, [t.clone(), e.clone(), i.clone()], void 0, r);
                u.faces.push(a), x.copy(t).add(e).add(i).divideScalar(3);
                var o = h(x);
                u.faceVertexUvs[0].push([c(t.uv, t, o), c(e.uv, e, o), c(i.uv, i, o)])
            }

            function s(t, e) {
                for (var i = Math.pow(2, e), r = a(u.vertices[t.a]), n = a(u.vertices[t.b]), s = a(u.vertices[t.c]), h = [], l = t.materialIndex, c = 0; i >= c; c++) {
                    h[c] = [];
                    for (var p = a(r.clone().lerp(s, c / i)), d = a(n.clone().lerp(s, c / i)), f = i - c, m = 0; f >= m; m++) 0 === m && c === i ? h[c][m] = p : h[c][m] = a(p.clone().lerp(d, m / f))
                }
                for (var c = 0; i > c; c++)
                    for (var m = 0; 2 * (i - c) - 1 > m; m++) {
                        var g = Math.floor(m / 2);
                        m % 2 === 0 ? o(h[c][g + 1], h[c + 1][g], h[c][g], l) : o(h[c][g + 1], h[c + 1][g + 1], h[c + 1][g], l)
                    }
            }

            function h(t) {
                return Math.atan2(t.z, -t.x)
            }

            function l(t) {
                return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
            }

            function c(t, e, i) {
                return 0 > i && 1 === t.x && (t = new n.Vector2(t.x - 1, t.y)), 0 === e.x && 0 === e.z && (t = new n.Vector2(i / 2 / Math.PI + .5, t.y)), t.clone()
            }
            n.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: t,
                indices: e,
                radius: i,
                detail: r
            }, i = i || 1, r = r || 0;
            for (var u = this, p = 0, d = t.length; d > p; p += 3) a(new n.Vector3(t[p], t[p + 1], t[p + 2]));
            for (var f = this.vertices, m = [], p = 0, g = 0, d = e.length; d > p; p += 3, g++) {
                var v = f[e[p]],
                    y = f[e[p + 1]],
                    _ = f[e[p + 2]];
                m[g] = new n.Face3(v.index, y.index, _.index, [v.clone(), y.clone(), _.clone()], void 0, g)
            }
            for (var x = new n.Vector3, p = 0, d = m.length; d > p; p++) s(m[p], r);
            for (var p = 0, d = this.faceVertexUvs[0].length; d > p; p++) {
                var b = this.faceVertexUvs[0][p],
                    w = b[0].x,
                    M = b[1].x,
                    T = b[2].x,
                    S = Math.max(w, Math.max(M, T)),
                    E = Math.min(w, Math.min(M, T));
                S > .9 && .1 > E && (.2 > w && (b[0].x += 1), .2 > M && (b[1].x += 1), .2 > T && (b[2].x += 1))
            }
            for (var p = 0, d = this.vertices.length; d > p; p++) this.vertices[p].multiplyScalar(i);
            this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new n.Sphere(new n.Vector3, i)
        }, n.PolyhedronGeometry.prototype = Object.create(n.Geometry.prototype), n.PolyhedronGeometry.prototype.constructor = n.PolyhedronGeometry, n.PolyhedronGeometry.prototype.clone = function() {
            var t = new n.PolyhedronGeometry(this.parameters.vertices, this.parameters.indices, this.parameters.radius, this.parameters.detail);
            return t.copy(this)
        }, n.PolyhedronGeometry.prototype.copy = function(t) {
            return n.Geometry.prototype.copy.call(this, t), this
        }, n.DodecahedronGeometry = function(t, e) {
            var i = (1 + Math.sqrt(5)) / 2,
                r = 1 / i,
                a = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -i, 0, -r, i, 0, r, -i, 0, r, i, -r, -i, 0, -r, i, 0, r, -i, 0, r, i, 0, -i, 0, -r, i, 0, -r, -i, 0, r, i, 0, r],
                o = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
            n.PolyhedronGeometry.call(this, a, o, t, e), this.type = "DodecahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }, n.DodecahedronGeometry.prototype = Object.create(n.PolyhedronGeometry.prototype), n.DodecahedronGeometry.prototype.constructor = n.DodecahedronGeometry, n.DodecahedronGeometry.prototype.clone = function() {
            var t = new n.DodecahedronGeometry(this.parameters.radius, this.parameters.detail);
            return t.copy(this), t
        }, n.IcosahedronGeometry = function(t, e) {
            var i = (1 + Math.sqrt(5)) / 2,
                r = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1],
                a = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
            n.PolyhedronGeometry.call(this, r, a, t, e), this.type = "IcosahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }, n.IcosahedronGeometry.prototype = Object.create(n.PolyhedronGeometry.prototype), n.IcosahedronGeometry.prototype.constructor = n.IcosahedronGeometry, n.IcosahedronGeometry.prototype.clone = function() {
            var t = new n.IcosahedronGeometry(this.parameters.radius, this.parameters.detail);
            return t.copy(this), t
        }, n.OctahedronGeometry = function(t, e) {
            var i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
                r = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
            n.PolyhedronGeometry.call(this, i, r, t, e), this.type = "OctahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }, n.OctahedronGeometry.prototype = Object.create(n.PolyhedronGeometry.prototype), n.OctahedronGeometry.prototype.constructor = n.OctahedronGeometry, n.OctahedronGeometry.prototype.clone = function() {
            var t = new n.OctahedronGeometry(this.parameters.radius, this.parameters.detail);
            return t.copy(this), t
        }, n.TetrahedronGeometry = function(t, e) {
            var i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
                r = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
            n.PolyhedronGeometry.call(this, i, r, t, e), this.type = "TetrahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }, n.TetrahedronGeometry.prototype = Object.create(n.PolyhedronGeometry.prototype), n.TetrahedronGeometry.prototype.constructor = n.TetrahedronGeometry, n.TetrahedronGeometry.prototype.clone = function() {
            var t = new n.TetrahedronGeometry(this.parameters.radius, this.parameters.detail);
            return t.copy(this), t
        }, n.ParametricGeometry = function(t, e, i) {
            n.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {
                func: t,
                slices: e,
                stacks: i
            };
            var r, a, o, s, h, l = this.vertices,
                c = this.faces,
                u = this.faceVertexUvs[0],
                p = e + 1;
            for (r = 0; i >= r; r++)
                for (h = r / i, a = 0; e >= a; a++) s = a / e, o = t(s, h), l.push(o);
            var d, f, m, g, v, y, _, x;
            for (r = 0; i > r; r++)
                for (a = 0; e > a; a++) d = r * p + a, f = r * p + a + 1, m = (r + 1) * p + a + 1, g = (r + 1) * p + a, v = new n.Vector2(a / e, r / i), y = new n.Vector2((a + 1) / e, r / i), _ = new n.Vector2((a + 1) / e, (r + 1) / i), x = new n.Vector2(a / e, (r + 1) / i), c.push(new n.Face3(d, f, g)), u.push([v, y, x]), c.push(new n.Face3(f, m, g)), u.push([y.clone(), _, x.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        }, n.ParametricGeometry.prototype = Object.create(n.Geometry.prototype), n.ParametricGeometry.prototype.constructor = n.ParametricGeometry, n.WireframeGeometry = function(t) {
            n.BufferGeometry.call(this);
            var e = [0, 0],
                i = {},
                r = function(t, e) {
                    return t - e
                },
                a = ["a", "b", "c"];
            if (t instanceof n.Geometry) {
                for (var o = t.vertices, s = t.faces, h = 0, l = new Uint32Array(6 * s.length), c = 0, u = s.length; u > c; c++)
                    for (var p = s[c], d = 0; 3 > d; d++) {
                        e[0] = p[a[d]], e[1] = p[a[(d + 1) % 3]], e.sort(r);
                        var f = e.toString();
                        void 0 === i[f] && (l[2 * h] = e[0], l[2 * h + 1] = e[1], i[f] = !0, h++)
                    }
                for (var m = new Float32Array(2 * h * 3), c = 0, u = h; u > c; c++)
                    for (var d = 0; 2 > d; d++) {
                        var g = o[l[2 * c + d]],
                            v = 6 * c + 3 * d;
                        m[v + 0] = g.x, m[v + 1] = g.y, m[v + 2] = g.z
                    }
                this.addAttribute("position", new n.BufferAttribute(m, 3))
            } else if (t instanceof n.BufferGeometry)
                if (null !== t.index) {
                    var y = t.index.array,
                        o = t.attributes.position,
                        _ = t.drawcalls,
                        h = 0;
                    0 === _.length && t.addDrawCall(0, y.length);
                    for (var l = new Uint32Array(2 * y.length), x = 0, b = _.length; b > x; ++x)
                        for (var w = _[x], M = w.start, T = w.count, c = M, S = M + T; S > c; c += 3)
                            for (var d = 0; 3 > d; d++) {
                                e[0] = y[c + d], e[1] = y[c + (d + 1) % 3], e.sort(r);
                                var f = e.toString();
                                void 0 === i[f] && (l[2 * h] = e[0], l[2 * h + 1] = e[1], i[f] = !0, h++)
                            }
                    for (var m = new Float32Array(2 * h * 3), c = 0, u = h; u > c; c++)
                        for (var d = 0; 2 > d; d++) {
                            var v = 6 * c + 3 * d,
                                E = l[2 * c + d];
                            m[v + 0] = o.getX(E), m[v + 1] = o.getY(E), m[v + 2] = o.getZ(E)
                        }
                    this.addAttribute("position", new n.BufferAttribute(m, 3))
                } else {
                    for (var o = t.attributes.position.array, h = o.length / 3, A = h / 3, m = new Float32Array(2 * h * 3), c = 0, u = A; u > c; c++)
                        for (var d = 0; 3 > d; d++) {
                            var v = 18 * c + 6 * d,
                                C = 9 * c + 3 * d;
                            m[v + 0] = o[C], m[v + 1] = o[C + 1], m[v + 2] = o[C + 2];
                            var E = 9 * c + 3 * ((d + 1) % 3);
                            m[v + 3] = o[E], m[v + 4] = o[E + 1], m[v + 5] = o[E + 2]
                        }
                    this.addAttribute("position", new n.BufferAttribute(m, 3))
                }
        }, n.WireframeGeometry.prototype = Object.create(n.BufferGeometry.prototype), n.WireframeGeometry.prototype.constructor = n.WireframeGeometry, n.AxisHelper = function(t) {
            t = t || 1;
            var e = new Float32Array([0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t]),
                i = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]),
                r = new n.BufferGeometry;
            r.addAttribute("position", new n.BufferAttribute(e, 3)), r.addAttribute("color", new n.BufferAttribute(i, 3));
            var a = new n.LineBasicMaterial({
                vertexColors: n.VertexColors
            });
            n.LineSegments.call(this, r, a)
        }, n.AxisHelper.prototype = Object.create(n.LineSegments.prototype), n.AxisHelper.prototype.constructor = n.AxisHelper, n.ArrowHelper = function() {
            var t = new n.Geometry;
            t.vertices.push(new n.Vector3(0, 0, 0), new n.Vector3(0, 1, 0));
            var e = new n.CylinderGeometry(0, .5, 1, 5, 1);
            return e.translate(0, -.5, 0),
                function(i, r, a, o, s, h) {
                    n.Object3D.call(this), void 0 === o && (o = 16776960), void 0 === a && (a = 1), void 0 === s && (s = .2 * a), void 0 === h && (h = .2 * s), this.position.copy(r), a > s && (this.line = new n.Line(t, new n.LineBasicMaterial({
                        color: o
                    })), this.line.matrixAutoUpdate = !1, this.add(this.line)), this.cone = new n.Mesh(e, new n.MeshBasicMaterial({
                        color: o
                    })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(i), this.setLength(a, s, h)
                }
        }(), n.ArrowHelper.prototype = Object.create(n.Object3D.prototype), n.ArrowHelper.prototype.constructor = n.ArrowHelper, n.ArrowHelper.prototype.setDirection = function() {
            var t, e = new n.Vector3;
            return function(i) {
                i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(i.z, 0, -i.x).normalize(), t = Math.acos(i.y), this.quaternion.setFromAxisAngle(e, t))
            }
        }(), n.ArrowHelper.prototype.setLength = function(t, e, i) {
            void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), t > e && (this.line.scale.set(1, t - e, 1), this.line.updateMatrix()), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
        }, n.ArrowHelper.prototype.setColor = function(t) {
            void 0 !== this.line && this.line.material.color.set(t), this.cone.material.color.set(t)
        }, n.BoxHelper = function(t) {
            var e = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                i = new Float32Array(24),
                r = new n.BufferGeometry;
            r.setIndex(new n.BufferAttribute(e, 1)), r.addAttribute("position", new n.BufferAttribute(i, 3)), n.LineSegments.call(this, r, new n.LineBasicMaterial({
                color: 16776960
            })), void 0 !== t && this.update(t)
        }, n.BoxHelper.prototype = Object.create(n.LineSegments.prototype), n.BoxHelper.prototype.constructor = n.BoxHelper, n.BoxHelper.prototype.update = function() {
            var t = new n.Box3;
            return function(e) {
                if (t.setFromObject(e), !t.empty()) {
                    var i = t.min,
                        r = t.max,
                        n = this.geometry.attributes.position,
                        a = n.array;
                    a[0] = r.x, a[1] = r.y, a[2] = r.z, a[3] = i.x, a[4] = r.y, a[5] = r.z, a[6] = i.x, a[7] = i.y, a[8] = r.z, a[9] = r.x, a[10] = i.y, a[11] = r.z, a[12] = r.x, a[13] = r.y, a[14] = i.z, a[15] = i.x, a[16] = r.y, a[17] = i.z, a[18] = i.x, a[19] = i.y, a[20] = i.z, a[21] = r.x, a[22] = i.y, a[23] = i.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere()
                }
            }
        }(), n.BoundingBoxHelper = function(t, e) {
            var i = void 0 !== e ? e : 8947848;
            this.object = t, this.box = new n.Box3, n.Mesh.call(this, new n.BoxGeometry(1, 1, 1), new n.MeshBasicMaterial({
                color: i,
                wireframe: !0
            }))
        }, n.BoundingBoxHelper.prototype = Object.create(n.Mesh.prototype), n.BoundingBoxHelper.prototype.constructor = n.BoundingBoxHelper, n.BoundingBoxHelper.prototype.update = function() {
            this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
        }, n.CameraHelper = function(t) {
            function e(t, e, r) {
                i(t, r), i(e, r)
            }

            function i(t, e) {
                r.vertices.push(new n.Vector3), r.colors.push(new n.Color(e)), void 0 === o[t] && (o[t] = []), o[t].push(r.vertices.length - 1)
            }
            var r = new n.Geometry,
                a = new n.LineBasicMaterial({
                    color: 16777215,
                    vertexColors: n.FaceColors
                }),
                o = {},
                s = 16755200,
                h = 16711680,
                l = 43775,
                c = 16777215,
                u = 3355443;
            e("n1", "n2", s), e("n2", "n4", s), e("n4", "n3", s), e("n3", "n1", s), e("f1", "f2", s), e("f2", "f4", s), e("f4", "f3", s), e("f3", "f1", s), e("n1", "f1", s), e("n2", "f2", s), e("n3", "f3", s), e("n4", "f4", s), e("p", "n1", h), e("p", "n2", h), e("p", "n3", h), e("p", "n4", h), e("u1", "u2", l), e("u2", "u3", l), e("u3", "u1", l), e("c", "t", c), e("p", "c", u), e("cn1", "cn2", u), e("cn3", "cn4", u), e("cf1", "cf2", u), e("cf3", "cf4", u), n.LineSegments.call(this, r, a), this.camera = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update()
        }, n.CameraHelper.prototype = Object.create(n.LineSegments.prototype), n.CameraHelper.prototype.constructor = n.CameraHelper, n.CameraHelper.prototype.update = function() {
            var t, e, i = new n.Vector3,
                r = new n.Camera,
                a = function(n, a, o, s) {
                    i.set(a, o, s).unproject(r);
                    var h = e[n];
                    if (void 0 !== h)
                        for (var l = 0, c = h.length; c > l; l++) t.vertices[h[l]].copy(i)
                };
            return function() {
                t = this.geometry, e = this.pointMap;
                var i = 1,
                    n = 1;
                r.projectionMatrix.copy(this.camera.projectionMatrix), a("c", 0, 0, -1), a("t", 0, 0, 1), a("n1", -i, -n, -1), a("n2", i, -n, -1), a("n3", -i, n, -1), a("n4", i, n, -1), a("f1", -i, -n, 1), a("f2", i, -n, 1), a("f3", -i, n, 1), a("f4", i, n, 1), a("u1", .7 * i, 1.1 * n, -1), a("u2", .7 * -i, 1.1 * n, -1), a("u3", 0, 2 * n, -1), a("cf1", -i, 0, 1), a("cf2", i, 0, 1), a("cf3", 0, -n, 1), a("cf4", 0, n, 1), a("cn1", -i, 0, -1), a("cn2", i, 0, -1), a("cn3", 0, -n, -1), a("cn4", 0, n, -1), t.verticesNeedUpdate = !0
            }
        }(), n.DirectionalLightHelper = function(t, e) {
            n.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, e = e || 1;
            var i = new n.Geometry;
            i.vertices.push(new n.Vector3(-e, e, 0), new n.Vector3(e, e, 0), new n.Vector3(e, -e, 0), new n.Vector3(-e, -e, 0), new n.Vector3(-e, e, 0));
            var r = new n.LineBasicMaterial({
                fog: !1
            });
            r.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new n.Line(i, r), this.add(this.lightPlane), i = new n.Geometry, i.vertices.push(new n.Vector3, new n.Vector3), r = new n.LineBasicMaterial({
                fog: !1
            }), r.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new n.Line(i, r), this.add(this.targetLine), this.update()
        }, n.DirectionalLightHelper.prototype = Object.create(n.Object3D.prototype), n.DirectionalLightHelper.prototype.constructor = n.DirectionalLightHelper, n.DirectionalLightHelper.prototype.dispose = function() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
        }, n.DirectionalLightHelper.prototype.update = function() {
            var t = new n.Vector3,
                e = new n.Vector3,
                i = new n.Vector3;
            return function() {
                t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(e, t), this.lightPlane.lookAt(i), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(i), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
            }
        }(), n.EdgesHelper = function(t, e, i) {
            var r = void 0 !== e ? e : 16777215;
            n.LineSegments.call(this, new n.EdgesGeometry(t.geometry, i), new n.LineBasicMaterial({
                color: r
            })), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
        }, n.EdgesHelper.prototype = Object.create(n.LineSegments.prototype), n.EdgesHelper.prototype.constructor = n.EdgesHelper, n.FaceNormalsHelper = function(t, e, i, r) {
            this.object = t, this.size = void 0 !== e ? e : 1;
            var a = void 0 !== i ? i : 16776960,
                o = void 0 !== r ? r : 1,
                s = 0,
                h = this.object.geometry;
            h instanceof n.Geometry ? s = h.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
            var l = new n.BufferGeometry,
                c = new n.Float32Attribute(2 * s * 3, 3);
            l.addAttribute("position", c), n.LineSegments.call(this, l, new n.LineBasicMaterial({
                color: a,
                linewidth: o
            })), this.matrixAutoUpdate = !1, this.update()
        }, n.FaceNormalsHelper.prototype = Object.create(n.LineSegments.prototype), n.FaceNormalsHelper.prototype.constructor = n.FaceNormalsHelper, n.FaceNormalsHelper.prototype.update = function() {
            var t = new n.Vector3,
                e = new n.Vector3,
                i = new n.Matrix3;
            return function() {
                this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
                for (var r = this.object.matrixWorld, n = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, h = 0, l = 0, c = s.length; c > l; l++) {
                    var u = s[l],
                        p = u.normal;
                    t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(r), e.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), n.setXYZ(h, t.x, t.y, t.z), h += 1, n.setXYZ(h, e.x, e.y, e.z), h += 1
                }
                return n.needsUpdate = !0, this
            }
        }(), n.GridHelper = function(t, e) {
            var i = new n.Geometry,
                r = new n.LineBasicMaterial({
                    vertexColors: n.VertexColors
                });
            this.color1 = new n.Color(4473924), this.color2 = new n.Color(8947848);
            for (var a = -t; t >= a; a += e) {
                i.vertices.push(new n.Vector3(-t, 0, a), new n.Vector3(t, 0, a), new n.Vector3(a, 0, -t), new n.Vector3(a, 0, t));
                var o = 0 === a ? this.color1 : this.color2;
                i.colors.push(o, o, o, o)
            }
            n.LineSegments.call(this, i, r)
        }, n.GridHelper.prototype = Object.create(n.LineSegments.prototype), n.GridHelper.prototype.constructor = n.GridHelper, n.GridHelper.prototype.setColors = function(t, e) {
            this.color1.set(t), this.color2.set(e), this.geometry.colorsNeedUpdate = !0
        }, n.HemisphereLightHelper = function(t, e) {
            n.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new n.Color, new n.Color];
            var i = new n.SphereGeometry(e, 4, 2);
            i.rotateX(-Math.PI / 2);
            for (var r = 0, a = 8; a > r; r++) i.faces[r].color = this.colors[4 > r ? 0 : 1];
            var o = new n.MeshBasicMaterial({
                vertexColors: n.FaceColors,
                wireframe: !0
            });
            this.lightSphere = new n.Mesh(i, o), this.add(this.lightSphere), this.update()
        }, n.HemisphereLightHelper.prototype = Object.create(n.Object3D.prototype), n.HemisphereLightHelper.prototype.constructor = n.HemisphereLightHelper, n.HemisphereLightHelper.prototype.dispose = function() {
            this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
        }, n.HemisphereLightHelper.prototype.update = function() {
            var t = new n.Vector3;
            return function() {
                this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
            }
        }(), n.PointLightHelper = function(t, e) {
            this.light = t, this.light.updateMatrixWorld();
            var i = new n.SphereGeometry(e, 4, 2),
                r = new n.MeshBasicMaterial({
                    wireframe: !0,
                    fog: !1
                });
            r.color.copy(this.light.color).multiplyScalar(this.light.intensity), n.Mesh.call(this, i, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
        }, n.PointLightHelper.prototype = Object.create(n.Mesh.prototype), n.PointLightHelper.prototype.constructor = n.PointLightHelper, n.PointLightHelper.prototype.dispose = function() {
            this.geometry.dispose(), this.material.dispose()
        }, n.PointLightHelper.prototype.update = function() {
            this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }, n.SkeletonHelper = function(t) {
            this.bones = this.getBoneList(t);
            for (var e = new n.Geometry, i = 0; i < this.bones.length; i++) {
                var r = this.bones[i];
                r.parent instanceof n.Bone && (e.vertices.push(new n.Vector3), e.vertices.push(new n.Vector3), e.colors.push(new n.Color(0, 0, 1)), e.colors.push(new n.Color(0, 1, 0)))
            }
            e.dynamic = !0;
            var a = new n.LineBasicMaterial({
                vertexColors: n.VertexColors,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            });
            n.LineSegments.call(this, e, a), this.root = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.update()
        }, n.SkeletonHelper.prototype = Object.create(n.LineSegments.prototype), n.SkeletonHelper.prototype.constructor = n.SkeletonHelper, n.SkeletonHelper.prototype.getBoneList = function(t) {
            var e = [];
            t instanceof n.Bone && e.push(t);
            for (var i = 0; i < t.children.length; i++) e.push.apply(e, this.getBoneList(t.children[i]));
            return e
        }, n.SkeletonHelper.prototype.update = function() {
            for (var t = this.geometry, e = (new n.Matrix4).getInverse(this.root.matrixWorld), i = new n.Matrix4, r = 0, a = 0; a < this.bones.length; a++) {
                var o = this.bones[a];
                o.parent instanceof n.Bone && (i.multiplyMatrices(e, o.matrixWorld), t.vertices[r].setFromMatrixPosition(i), i.multiplyMatrices(e, o.parent.matrixWorld), t.vertices[r + 1].setFromMatrixPosition(i), r += 2)
            }
            t.verticesNeedUpdate = !0, t.computeBoundingSphere()
        }, n.SpotLightHelper = function(t) {
            n.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
            var e = new n.CylinderGeometry(0, 1, 1, 8, 1, !0);
            e.translate(0, -.5, 0), e.rotateX(-Math.PI / 2);
            var i = new n.MeshBasicMaterial({
                wireframe: !0,
                fog: !1
            });
            this.cone = new n.Mesh(e, i), this.add(this.cone), this.update()
        }, n.SpotLightHelper.prototype = Object.create(n.Object3D.prototype), n.SpotLightHelper.prototype.constructor = n.SpotLightHelper, n.SpotLightHelper.prototype.dispose = function() {
            this.cone.geometry.dispose(), this.cone.material.dispose()
        }, n.SpotLightHelper.prototype.update = function() {
            var t = new n.Vector3,
                e = new n.Vector3;
            return function() {
                var i = this.light.distance ? this.light.distance : 1e4,
                    r = i * Math.tan(this.light.angle);
                this.cone.scale.set(r, r, i), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
            }
        }(), n.VertexNormalsHelper = function(t, e, i, r) {
            this.object = t, this.size = void 0 !== e ? e : 1;
            var a = void 0 !== i ? i : 16711680,
                o = void 0 !== r ? r : 1,
                s = 0,
                h = this.object.geometry;
            h instanceof n.Geometry ? s = 3 * h.faces.length : h instanceof n.BufferGeometry && (s = h.attributes.normal.count);
            var l = new n.BufferGeometry,
                c = new n.Float32Attribute(2 * s * 3, 3);
            l.addAttribute("position", c), n.LineSegments.call(this, l, new n.LineBasicMaterial({
                color: a,
                linewidth: o
            })), this.matrixAutoUpdate = !1, this.update()
        }, n.VertexNormalsHelper.prototype = Object.create(n.LineSegments.prototype), n.VertexNormalsHelper.prototype.constructor = n.VertexNormalsHelper, n.VertexNormalsHelper.prototype.update = function() {
            var t = new n.Vector3,
                e = new n.Vector3,
                i = new n.Matrix3;
            return function() {
                var r = ["a", "b", "c"];
                this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
                var a = this.object.matrixWorld,
                    o = this.geometry.attributes.position,
                    s = this.object.geometry;
                if (s instanceof n.Geometry)
                    for (var h = s.vertices, l = s.faces, c = 0, u = 0, p = l.length; p > u; u++)
                        for (var d = l[u], f = 0, m = d.vertexNormals.length; m > f; f++) {
                            var g = h[d[r[f]]],
                                v = d.vertexNormals[f];
                            t.copy(g).applyMatrix4(a), e.copy(v).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), o.setXYZ(c, t.x, t.y, t.z), c += 1, o.setXYZ(c, e.x, e.y, e.z), c += 1
                        } else if (s instanceof n.BufferGeometry)
                    for (var y = s.attributes.position, _ = s.attributes.normal, c = 0, f = 0, m = y.count; m > f; f++) t.set(y.getX(f), y.getY(f), y.getZ(f)).applyMatrix4(a), e.set(_.getX(f), _.getY(f), _.getZ(f)), e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), o.setXYZ(c, t.x, t.y, t.z), c += 1, o.setXYZ(c, e.x, e.y, e.z), c += 1;
                return o.needsUpdate = !0, this
            }
        }(), n.WireframeHelper = function(t, e) {
            var i = void 0 !== e ? e : 16777215;
            n.LineSegments.call(this, new n.WireframeGeometry(t.geometry), new n.LineBasicMaterial({
                color: i
            })), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
        }, n.WireframeHelper.prototype = Object.create(n.LineSegments.prototype), n.WireframeHelper.prototype.constructor = n.WireframeHelper, n.ImmediateRenderObject = function() {
            n.Object3D.call(this), this.render = function(t) {}
        }, n.ImmediateRenderObject.prototype = Object.create(n.Object3D.prototype), n.ImmediateRenderObject.prototype.constructor = n.ImmediateRenderObject, n.MorphBlendMesh = function(t, e) {
            n.Mesh.call(this, t, e), this.animationsMap = {}, this.animationsList = [];
            var i = this.geometry.morphTargets.length,
                r = "__default",
                a = 0,
                o = i - 1,
                s = i / 1;
            this.createAnimation(r, a, o, s), this.setAnimationWeight(r, 1)
        }, n.MorphBlendMesh.prototype = Object.create(n.Mesh.prototype), n.MorphBlendMesh.prototype.constructor = n.MorphBlendMesh, n.MorphBlendMesh.prototype.createAnimation = function(t, e, i, r) {
            var n = {
                start: e,
                end: i,
                length: i - e + 1,
                fps: r,
                duration: (i - e) / r,
                lastFrame: 0,
                currentFrame: 0,
                active: !1,
                time: 0,
                direction: 1,
                weight: 1,
                directionBackwards: !1,
                mirroredLoop: !1
            };
            this.animationsMap[t] = n, this.animationsList.push(n)
        }, n.MorphBlendMesh.prototype.autoCreateAnimations = function(t) {
            for (var e, i = /([a-z]+)_?(\d+)/, r = {}, n = this.geometry, a = 0, o = n.morphTargets.length; o > a; a++) {
                var s = n.morphTargets[a],
                    h = s.name.match(i);
                if (h && h.length > 1) {
                    var l = h[1];
                    r[l] || (r[l] = {
                        start: 1 / 0,
                        end: -(1 / 0)
                    });
                    var c = r[l];
                    a < c.start && (c.start = a), a > c.end && (c.end = a), e || (e = l)
                }
            }
            for (var l in r) {
                var c = r[l];
                this.createAnimation(l, c.start, c.end, t)
            }
            this.firstAnimation = e
        }, n.MorphBlendMesh.prototype.setAnimationDirectionForward = function(t) {
            var e = this.animationsMap[t];
            e && (e.direction = 1, e.directionBackwards = !1)
        }, n.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(t) {
            var e = this.animationsMap[t];
            e && (e.direction = -1, e.directionBackwards = !0)
        }, n.MorphBlendMesh.prototype.setAnimationFPS = function(t, e) {
            var i = this.animationsMap[t];
            i && (i.fps = e, i.duration = (i.end - i.start) / i.fps)
        }, n.MorphBlendMesh.prototype.setAnimationDuration = function(t, e) {
            var i = this.animationsMap[t];
            i && (i.duration = e, i.fps = (i.end - i.start) / i.duration)
        }, n.MorphBlendMesh.prototype.setAnimationWeight = function(t, e) {
            var i = this.animationsMap[t];
            i && (i.weight = e)
        }, n.MorphBlendMesh.prototype.setAnimationTime = function(t, e) {
            var i = this.animationsMap[t];
            i && (i.time = e)
        }, n.MorphBlendMesh.prototype.getAnimationTime = function(t) {
            var e = 0,
                i = this.animationsMap[t];
            return i && (e = i.time), e
        }, n.MorphBlendMesh.prototype.getAnimationDuration = function(t) {
            var e = -1,
                i = this.animationsMap[t];
            return i && (e = i.duration), e
        }, n.MorphBlendMesh.prototype.playAnimation = function(t) {
            var e = this.animationsMap[t];
            e ? (e.time = 0, e.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + t + "] undefined in .playAnimation()")
        }, n.MorphBlendMesh.prototype.stopAnimation = function(t) {
            var e = this.animationsMap[t];
            e && (e.active = !1)
        }, n.MorphBlendMesh.prototype.update = function(t) {
            for (var e = 0, i = this.animationsList.length; i > e; e++) {
                var r = this.animationsList[e];
                if (r.active) {
                    var a = r.duration / r.length;
                    r.time += r.direction * t, r.mirroredLoop ? (r.time > r.duration || r.time < 0) && (r.direction *= -1, r.time > r.duration && (r.time = r.duration, r.directionBackwards = !0), r.time < 0 && (r.time = 0, r.directionBackwards = !1)) : (r.time = r.time % r.duration, r.time < 0 && (r.time += r.duration));
                    var o = r.start + n.Math.clamp(Math.floor(r.time / a), 0, r.length - 1),
                        s = r.weight;
                    o !== r.currentFrame && (this.morphTargetInfluences[r.lastFrame] = 0, this.morphTargetInfluences[r.currentFrame] = 1 * s, this.morphTargetInfluences[o] = 0, r.lastFrame = r.currentFrame, r.currentFrame = o);
                    var h = r.time % a / a;
                    r.directionBackwards && (h = 1 - h), r.currentFrame !== r.lastFrame ? (this.morphTargetInfluences[r.currentFrame] = h * s, this.morphTargetInfluences[r.lastFrame] = (1 - h) * s) : this.morphTargetInfluences[r.currentFrame] = s
                }
            }
        }, "undefined" != typeof i ? ("undefined" != typeof e && e.exports && (i = e.exports = n), i.THREE = n) : this.THREE = n
    }, {}],
    7: [function(t, e, i) {
        "use strict";

        function r(t, e, i, r, o, s) {
            T = t, m = e, u = i, p = r, d = o, f = s, y = document.createElement("canvas"), y.width = m.width / 2 + 200, y.height = m.height / 2 + 200, n(), v = y.getContext("2d"), v.drawImage(m, 0, 0, m.width, m.height, (y.width - m.width / 2) / 2, (y.height - m.height / 2) / 2, m.width / 2, m.height / 2), g = v.getImageData(0, 0, y.width, y.height);
            for (var h = 0; h < y.width; h++)
                for (var l = 0; l < y.height; l++) {
                    var c = 4 * (h + y.width * l) + 3,
                        _ = g.data[c];
                    255 == _ && A.push({
                        x: h,
                        y: l
                    })
                }
            P.init(x, T, A, y), L.init(M, y, w), a()
        }

        function n() {
            try {
                b = new THREE.WebGLRenderer({
                    antialias: !0,
                    alpha: !0
                })
            } catch (t) {
                return
            }
            _ = new THREE.OrthographicCamera(y.width / -2, y.width / 2, y.height / 2, y.height / -2, 1, 1e3), w = new THREE.OrthographicCamera(y.width / -2, y.width / 2, y.height / 2, y.height / -2, 1, 1e4), x = new THREE.Scene, M = new THREE.Scene, _.position.z = 425, _.lookAt(new THREE.Vector3), w.position.z = 100, w.lookAt(new THREE.Vector3), b.autoClear = !1
        }

        function a() {
            var t = document.createElement("canvas"),
                e = t.getContext("2d");
            t.width = t.height = 2, e.fillStyle = "#ff0000", e.fillRect(0, 0, t.width, t.height);
            var i = new THREE.PlaneBufferGeometry(y.width - 200, y.height - 200), // canvas side space
                r = new THREE.Texture(m);
            r.needsUpdate = !0, r.magFilter = THREE.NearestFilte, r.minFilter = THREE.LinearFilter, S = {
                uText: {
                    type: "t",
                    value: r
                },
                uMouse: {
                    type: "2f",
                    value: [1e4, 1e4]
                },
                uTime: {
                    type: "f",
                    value: 0
                }
            };
            var n = new THREE.ShaderMaterial({
                uniforms: S,
                vertexShader: T.shaders.textVx,
                fragmentShader: T.shaders.textFs,
                transparent: !0
            });
            E = new THREE.Mesh(i, n), x.add(E)
        }

        function o(t, e) {
            var i = [t*0.85 - y.width / 2, y.height - 290 -  e*0.85]; // was 175
                C.x = t,
                C.y = e,
                S.uMouse.value = i,
                P.onMouseMove(C.x, C.y),
                1e4 == t && 1e4 == e ? L.mouseleave() : L.mousemove(C.x, C.y)
        }

        function s() {
            return b
        }

        function h() {
            return A
        }

        function l() {
            return y
        }

        function c(t) {
            S.uTime.value = t, S.uTime.needsUpdate = !0, P.step(), L.step(), b.clear(), b.render(x, _), b.render(M, w)
        }
        var u, p, d, f, m, g, v, y, _, x, b, w, M, T, S, E, A = [],
            C = {
                x: 1e4,
                y: 1e4
            },
            P = (t("./vendor/perlin-noise"), t("./components/particle-app")),
            L = t("./components/feather-json-app");
        e.exports = {
            init: r,
            canvas: l,
            renderer: s,
            letterPosArr: h,
            step: c,
            onMouseMove: o
        }
    }, {
        "./components/feather-json-app": 9,
        "./components/particle-app": 12,
        "./vendor/perlin-noise": 13
    }],
    8: [function(t, e, i) {
        "use strict";
        var r = t("./feather"),
            n = function(t, e, i, n) {
                this.isMesh0 = !0, this.scene = t, this.shapesData = e, this.dataObj = i, this.originalSize = n, this.isTransition = !1, this.isActive = !1, this.rad = 120, /* cross radius*/ this.isShow = 0, this.featherMesh0 = new r(e, i, n), this.featherMesh1 = new r(e, i, n), this.position = this.featherMesh0.position.clone(), this.scene = t, this.delay = Modernizr.touch ? 5 * Math.random() + 10 : 6 * Math.random() + 4, this.appearDuration = Modernizr.touch ? 10 + 5 * Math.random() + this.delay : 1 + 4 * Math.random() + this.delay, this.resetTime = this.appearDuration + (3 + 2 * Math.random());
                var a = Math.random();.6 > a ? this.fadeoutAnimationDuration1 = Modernizr.touch ? 3 : .5 + .3 * Math.random() : this.fadeoutAnimationDuration1 = Modernizr.touch ? 3 : 1.8 + .5 * Math.random();
                var a = Math.random();.6 > a ? this.fadeoutAnimationDuration2 = Modernizr.touch ? 3 : .5 + .3 * Math.random() : this.fadeoutAnimationDuration2 = Modernizr.touch ? 3 : 1.8 + .5 * Math.random(), this.curTime = 0, this.fadeIn = .6, this.duration1 = 1.5 * Math.random() + 3, this.isFirstSplash = Math.random() < .5 ? !0 : !1, this.interval1 = 3 * Math.random(), this.duration2 = 2 + 10 * Math.random(), this.interval2 = 3 * Math.random(), this.curTime = 0, this.scene.add(this.featherMesh0), this.scene.add(this.featherMesh1), this.randomThread = .8
            };
        n.prototype.step = function() {
            this.isFloatFeatherActive && (this.prevTime = this.curTime, this.curTime += 1 / 60, this.curTime < this.fadeIn + this.duration1 + this.totalCycle && this.curTime > this.totalCycle ? this.isFirstSplash ? this.featherMesh0.step2() : this.featherMesh0.step() : this.curTime > this.fadeIn + this.duration1 + this.totalCycle && this.curTime < this.fadeIn + this.duration1 + this.fadeoutAnimationDuration1 + this.totalCycle ? this.featherMesh0.step2() : this.prevTime < this.fadeIn + this.duration1 + this.fadeoutAnimationDuration1 + this.totalCycle && this.curTime > this.fadeIn + this.duration1 + this.fadeoutAnimationDuration1 + this.totalCycle && this.featherMesh0.scaleDown(this.fadeoutAnimationDuration1), this.curTime > this.fadeIn + this.duration1 + this.interval1 + this.totalCycle && this.prevTime < this.fadeIn + this.duration1 + this.interval1 + this.totalCycle ? this.featherMesh1.slowShow() : this.curTime < this.fadeIn + this.duration1 + this.interval1 + this.fadeIn + this.duration2 + this.totalCycle && this.curTime > this.fadeIn + this.duration1 + this.interval1 + this.totalCycle ? this.featherMesh1.step() : this.curTime > this.fadeIn + this.duration1 + this.interval1 + this.duration2 + this.fadeIn + this.totalCycle && this.curTime < this.fadeIn + this.duration1 + this.interval1 + this.duration2 + this.fadeIn + this.fadeoutAnimationDuration2 + this.totalCycle ? this.featherMesh1.step2() : this.curTime > this.fadeIn + this.duration1 + this.interval1 + this.duration2 + this.fadeIn + this.fadeoutAnimationDuration2 + this.totalCycle && this.prevTime < this.fadeIn + this.duration1 + this.interval1 + this.duration2 + this.fadeIn + this.fadeoutAnimationDuration2 + this.totalCycle ? this.featherMesh1.scaleDown(this.fadeoutAnimationDuration2) : this.curTime > this.fadeIn + this.duration1 + this.interval1 + this.duration2 + this.fadeIn + this.fadeoutAnimationDuration2 + this.totalCycle && (this.isFirstSplash && (this.duration1 = 15 * Math.random() + 3, this.isFirstSplash = !1), 0 == this.cycle && (this.cycle = this.fadeIn + this.duration1 + this.fadeIn + this.duration2 + this.interval1 + this.interval2), this.featherMesh0.slowShow(), this.totalCycle = this.cycle * this.count + this.firstCycle, this.count++))
        }, n.prototype.show = function() {
            this.curTime = 0, this.count = 0, this.isFloatFeatherActive = !0, this.isFirstSplash = Math.random() < .3 ? !0 : !1, this.isFirstSplash ? this.duration1 = 2 * Math.random() : this.duration1 = 15 * Math.random() + 3, this.cycle = 0, this.totalCycle = 0, this.firstCycle = this.fadeIn + this.duration1 + this.fadeIn + this.duration2 + this.interval1 + this.interval2, this.featherMesh0.show()
        }, n.prototype.hide = function() {
            this.featherMesh0.hide(), this.featherMesh1.hide()
        }, n.prototype.mousemove = function(t) {
            this.mousePosition = t, this.prevIsFloatFeatherActive = this.isFloatFeatherActive;
            var e = this.position.x - this.mousePosition.x,
                i = this.position.y - this.mousePosition.y,
                r = Math.sqrt(e * e + i * i)*3.5, // cross radius
                n = this.isActive;
            r < this.rad ? (this.isFloatFeatherActive = !0, this.isActive = !0) : (this.isFloatFeatherActive = !1, this.isActive = !1), this.featherMesh0.mousemove(this.mousePosition), this.featherMesh1.mousemove(this.mousePosition), this.isActive && !n ? this.show() : !this.isActive && n && this.hide()
        }, e.exports = n
    }, {
        "./feather": 10
    }],
    9: [function(t, e, i) {
        "use strict";

        function r(t, e, i) {
            m = t, c = e, p = i;
            var r = new THREE.PlaneGeometry(c.width, c.height),
                n = new THREE.MeshBasicMaterial({
                    color: 16776960,
                    side: THREE.DoubleSide
                });
            n.opacity = 0, n.transparent = !0, l = new THREE.Mesh(r, n), t.add(l);
            var r = new THREE.BoxGeometry(10, 10, 10),
                n = new THREE.MeshBasicMaterial({
                    color: 65280,
                    side: THREE.DoubleSide
                });
            u = new THREE.Mesh(r, n);
            var a = new THREE.AmbientLight(16777215);
            t.add(a);
            var o = new THREE.HemisphereLight(16777215, 526368, 1);
            t.add(o), s = v.getJsonData(), h = v.getShapes(), f = s[0].sizeX;
            var d;
            s.forEach(function(e, i) {
                // here перья
                Modernizr.touch ? (i % 3 == 0 || i % 3 == 1) && (d = new g(t, h, e, f), _.push(d)) : (d = new g(t, h, e, f), _.push(d))
            })
        }

        function n() {
            var t = 1 / 60;
            b += t, _.forEach(function(t, e) {
                t.step()
            })
        }

        function a(t, e, i) {

            var r = new THREE.Vector2;
            r.set((t*0.85) / c.width * 2 - 1, 2 * -((e*0.85) / c.height) + 1), y.setFromCamera(r, p);
            var n = y.intersectObject(l);
            if (x = [], n && n.length) {
                var a = n[0].point;
                d = a, _.forEach(function(t, e) {
                    t.mousemove(a)
                })
            } else a = new THREE.Vector2(1e4, 1e5), _.forEach(function(t, e) {
                t.mousemove(a)
            })
        }

        function o() {
            _.forEach(function(t, e) {
                t.mousemove(new THREE.Vector2(1e4, 0))
            })
        }
        var s, h, l, c, u, p, d, f, m, g = (t("../vendor/perlin-noise"), t("./feather-collection")),
            v = t("./jsonloader"),
            y = new THREE.Raycaster,
            _ = [],
            x = [],
            b = (new THREE.Vector2(0, 0), 0);
        e.exports = {
            init: r,
            step: n,
            mousemove: a,
            mouseleave: o
        }
    }, {
        "../vendor/perlin-noise": 13,
        "./feather-collection": 8,
        "./jsonloader": 11
    }],
    10: [function(t, e, i) {
        "use strict";

        function r(t, e, i) {
            this.rad = 120;
            var r = parseInt(t.length * Math.random()),
                n = t[r],
                a = n.material.clone();
            this.material = a;
            var o = .5,
                s = 2 * o,
                h = n.geometry.clone();
            h.rotateX(-0.5 * Math.PI), THREE.Mesh.call(this, h, a), this.rotation.order = "YXZ", this.rotation.y = e.rotX, this.rotation.x = e.rotY, this.rotation.z = -e.rotZ, this.position.x = e.x * s, this.position.y = e.y * s, this.position.z = -e.z * s, this.init = this.position.clone(), this.initRotation = this.rotation.clone(), this.angleAxis = new THREE.Vector3(Math.random(), Math.random(), Math.random()), this.angleAxis.normalize(), this.TARGET_ANGLE_ROT_VELOCITY = .015 * (Math.random() / 2 + 1), this.angleRotVelocity = 0, this.initState();
            var l = e.sizeX / i * o;
            this.targetScale = l, this.scale.set(.01, .01, .01)
        }
        var n = t("../vendor/perlin-noise");
        r.prototype = Object.create(THREE.Mesh.prototype), r.prototype.initState = function() {
            this.isScaleAnimation = !1, this.position.set(this.init.x, this.init.y, this.init.z), this.rotation.set(this.initRotation.x, this.initRotation.y, this.initRotation.z), this.curTime = 0, this.angleVelocity = 0, this.velocity = new THREE.Vector3(0, 0, 0), this.isTween = !1, this.isScale = !1
        }, r.prototype.reset = function(t) {
            var e = this.init.x - t.x,
                i = this.init.y - t.y,
                r = Math.sqrt(e * e + i * i);
            if (!this.isScale && r < this.rad) {
                this.animation = !0;
                var n = this.targetScale;
                this.isTween = !0, this.isScale = !0, this.curTime = 0, this.angleVelocity = 0, this.velocity.set(0, 0, 0), this.scale.set(.01, .01, .01), this.tweenLite && this.tweenLite.pause(), this.tweenLite = TweenLite.to(this.scale, 3, {
                    x: n,
                    y: n,
                    z: n,
                    ease: Power3.easeInOut,
                    onComplete: this.tweenCompletehHandler.bind(this)
                })
            }
        }, r.prototype.slowShow = function() {
            this.animation = !0;
            var t = this.targetScale;
            this.isTween = !0, this.isScale = !0, this.curTime = 0, this.angleVelocity = 0, this.velocity.set(0, 0, 0), this.material.opacity = 1, this.position.set(this.init.x, this.init.y, this.init.z), this.scale.set(.01, .01, .01), this.rotation.set(this.initRotation.x, this.initRotation.y, this.initRotation.z), this.tweenLite && this.tweenLite.pause(), this.tweenLite = TweenLite.to(this.scale, 3, {
                x: t,
                y: t,
                z: t,
                ease: Power3.easeInOut,
                onComplete: this.tweenCompletehHandler.bind(this)
            })
        }, r.prototype.show = function() {
            this.animation = !0;
            var t = this.targetScale;
            this.isTween = !0, this.isScale = !0, this.curTime = 0, this.angleVelocity = 0, this.velocity.set(0, 0, 0), this.material.opacity = 1, this.position.set(this.init.x, this.init.y, this.init.z), this.rotation.set(this.initRotation.x, this.initRotation.y, this.initRotation.z), this.tweenLite && this.tweenLite.pause(), this.tweenLite = TweenLite.to(this.scale, .6, {
                x: t,
                y: t,
                z: t,
                ease: Power4.easeOut,
                onComplete: this.tweenCompletehHandler.bind(this)
            })
        }, r.prototype.hide = function() {
            this.isScale = !1, this.isTween = !0, this.tweenLite && this.tweenLite.pause(), this.tweenLite = TweenLite.to(this.scale, .6, {
                x: .01,
                y: .01,
                z: .01,
                ease: Power4.easeOut,
                onComplete: this.tweenCompletehHandler.bind(this)
            })
        }, r.prototype.mousemove = function(t) {
            this.mousePosition = t
        }, r.prototype.mousemove2 = function(t) {
            if (this.isScale) {
                var e = this.init.x - t.x,
                    i = this.init.y - t.y,
                    r = Math.sqrt(e * e + i * i);
                r > this.rad && (this.isScale = !1, this.isTween = !0, this.tweenLite && this.tweenLite.pause(), this.tweenLite = TweenLite.to(this.scale, .6, {
                    x: .01,
                    y: .01,
                    z: .01,
                    ease: Power4.easeOut,
                    onComplete: this.tweenCompletehHandler.bind(this)
                }))
            }
        };
        var a = Modernizr.touch ? .8 : .5,
            o = Modernizr.touch ? 120 : 80;
        r.prototype.step = function() {
            if ((!this.isTween || this.isScale) && (this.curTime += 1 / 60, this.mousePosition)) {
                var t = this,
                    e = this.mousePosition.x - this.position.x,
                    i = this.mousePosition.y - this.position.y,
                    r = Math.sqrt(e * e + i * i),
                    s = n.perlin2(this.init.x, this.curTime);
                if (r) {
                    var h = Math.atan2(i, e);
                    1 > r && (r = 1);
                    var l = a * (1 - r / o);
                    this.curTime, l += .2 * s, this.velocity.x -= l * Math.cos(h), this.velocity.y -= l * Math.sin(h)
                }
                var c = .05,
                    u = t.position.x - t.init.x,
                    p = t.position.y - t.init.y;
                this.velocity.x -= c * u, this.velocity.y -= c * p;
                var d = Math.sqrt(u * u + p * p);
                t.rotation.x = t.initRotation.x * (1 + d / 30), t.rotation.y = t.initRotation.y * (1 + d / 30 + s / 500), t.rotation.z = t.initRotation.z * (1 + d / 40 + s / 100), this.velocity.x *= .85, this.velocity.y *= .85, this.position.x += this.velocity.x, this.position.y += this.velocity.y
            }
        }, r.prototype.step2 = function() {
            this.curTime += 1 / 60;
            var t = .05,
                e = Math.PI * n.simplex2(this.curTime + this.init.y, this.init.x);
            this.velocity.x += t * Math.sin(e), this.velocity.y += t * Math.cos(e), this.velocity.x > .8 && (this.velocity.x = .8), this.velocity.x < -.8 && (this.velocity.x = -.8), this.velocity.y > .4 && (this.velocity.y = .4), this.velocity.y < -.4 && (this.velocity.y = -.4), this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.position.z = 0, this.angleRotVelocity += .1 * (this.TARGET_ANGLE_ROT_VELOCITY - this.angleRotVelocity), this.rotateOnAxis(this.angleAxis, this.TARGET_ANGLE_ROT_VELOCITY)
        }, r.prototype.scaleDown = function(t) {
            this.tweenLite && this.tweenLite.pause();
            var e = .25,
                i = t;
            if (i > 1) {
                var i = 1.8 + .6 * Math.random();
                this.tweenLite = TweenLite.to(this.scale, i, {
                    x: e,
                    y: e,
                    z: e,
                    onUpdate: this.step2.bind(this)
                }), this.tweenLite = TweenLite.to(this.material, i, {
                    opacity: 0
                })
            } else this.tweenLite = TweenLite.to(this.material, .6, {
                opacity: 0,
                onUpdate: this.step2.bind(this)
            })
        }, r.prototype.tweenCompletehHandler = function() {
            this.isTween = !1
        }, e.exports = r
    }, {
        "../vendor/perlin-noise": 13
    }],
    11: [function(t, e, i) {
        "use strict";

        function r(t) {
            u = t;
            var e = new THREE.JSONLoader,
                i = ["./json/cross/cross.json"],
                r = i.length;
            i.forEach(function(t, i) {
                e.load(t, function(t, e) {
                    e[0].side = THREE.DoubleSide, e[0].transparent = !0, e[0].depthTest = !1, e[0].depthWrite = !1, t.computeFaceNormals(), t.computeVertexNormals(), t.computeMorphNormals(), e[0].blendEquation = THREE.SubtractiveBlending, p[m] = {
                        geometry: t,
                        material: e[0]
                    }, m++, r == m && n()
                })
            })
        }

        function n() {
            a()
        }

        function a() {
            $.getJSON("json/letters.json", function(t) {
                var e = [];
                t.forEach(function(t) {
                    var i = t.letterpos,
                        r = t.posArr;
                    r.forEach(function(t) {
                        var r = t;
                        r.x += i[0], r.y += i[1], e.push(r)
                    })
                }), c = e, d = !0, f && u()
            })
        }

        function o() {
            return d
        }

        function s() {
            f = !0
        }

        function h() {
            return p
        }

        function l() {
            return c
        }
        var c, u = null,
            p = [],
            d = !1,
            f = !1,
            m = 0;
        e.exports = {
            startload: r,
            hasImageLoaded: s,
            getLoaded: o,
            getShapes: h,
            getJsonData: l
        }
    }, {}],
    12: [function(t, e, i) {
        "use strict";

        function r(t, e, i, r) {
            g = r, d = t, l = e, f = i, n(), a()
        }

        function n() {
            c = {
                uTime: {
                    type: "f",
                    value: 0
                },
                uMouse: {
                    type: "2f",
                    value: [1e4, 1e4]
                }
            }, u = new THREE.ShaderMaterial({
                uniforms: c,
                vertexShader: l.shaders.particleVx,
                fragmentShader: l.shaders.particleFs,
                depthTest: !1,
                transparent: !0,
                side: THREE.DoubleSide
            })
        }

        function a() {
            var t, e, i = 2 * M,
                r = 21845;
            m = new THREE.BufferGeometry, m.addAttribute("index", new THREE.BufferAttribute(new Uint16Array(3 * i), 1)), m.addAttribute("position", new THREE.BufferAttribute(new Float32Array(3 * i * 3), 3)), m.addAttribute("aDelay", new THREE.BufferAttribute(new Float32Array(3 * i), 1)), m.addAttribute("aTime", new THREE.BufferAttribute(new Float32Array(3 * i), 1)), m.addAttribute("aDuration", new THREE.BufferAttribute(new Float32Array(3 * i), 1)), m.addAttribute("aTranslation", new THREE.BufferAttribute(new Float32Array(3 * i * 3), 3)), m.addAttribute("aAnimation", new THREE.BufferAttribute(new Float32Array(3 * i * 3), 3)), m.addAttribute("aIsVisible", new THREE.BufferAttribute(new Float32Array(3 * i), 1));
            var n = m.attributes.index.array,
                a = m.attributes.aDelay.array,
                o = m.attributes.aTime.array,
                s = m.attributes.aDuration.array,
                h = m.attributes.aIsVisible.array;
            for (t = 0; t < n.length; t++) n[t] = t % (3 * r);
            for (t = 0; t < o.length; t += 6)
                for (var l = Math.random(), c = l + Math.random() + .5, v = c * Math.random(), e = 0; 6 > e; e++) a[t + e] = l, s[t + e] = c, o[t + e] = v, b.push(new THREE.Vector2), h[t + e] = 0;
            var y = m.attributes.position.array,
                x = m.attributes.aTranslation.array,
                w = m.attributes.aAnimation.array;
            for (t = 0; t < y.length; t += 18) {
                var T = 0,
                    S = .5,
                    E = S,
                    A = new THREE.Vector3(-S, E, 0),
                    C = new THREE.Vector3(S, E, 0),
                    P = new THREE.Vector3(S, -E, 0),
                    L = new THREE.Vector3(-S, -E, 0),
                    R = [A, L, C, L, P, C],
                    D = f[parseInt(f.length * Math.random())];
                for (_.push(D), e = 0; 18 > e; e += 3) y[t + e + 0] = R[T].x, y[t + e + 1] = R[T].y, y[t + e + 2] = R[T].z, x[t + e + 0] = D.x - g.width / 2, x[t + e + 1] = -D.y + g.height / 2, x[t + e + 2] = 0, w[t + e + 0] = 0, w[t + e + 1] = 0, w[t + e + 2] = 0, T++
            }
            m.attributes.position.needsUpdate = !0, m.attributes.index.needsUpdate = !0, p = new THREE.Mesh(m, u), d.add(p)
        }

        function o() {
            w += 1 / 60;
            for (var t, e, i, r, n, a = m.attributes.aDelay.array, o = m.attributes.aTime.array, s = m.attributes.aDuration.array, l = (m.attributes.aTranslation.array, m.attributes.aAnimation.array), c = 0, u = 0; u < o.length; u++) o[u] += 1 / 60;
            for (u = 0; u < l.length; u += 18) {
                var p = 0,
                    d = parseInt(u / 18);
                if (o[c] < a[c]) e = 2 * Math.random() - 1, t = 2 * Math.random() - 1, i = .9, r = .9, o[c] > a[c] - 1 / 60 && (b[d].x = 0, b[d].y = 0);
                else {
                    var f = .16,
                        g = Math.PI * (-0.4 + .8 * Math.abs(T.simplex3(w, _[d].x, _[d].y))),
                        x = Math.sqrt(l[u] * l[u] + l[u + 1] * l[u + 1]);
                    1 > x && (x = 1);
                    var M;
                    M = 1 - x / 100, .1 > M && (M = .1), b[d].x += f * M * Math.sin(g), b[d].y += f * M * Math.cos(g), b[d].x *= .9, b[d].y *= .9, t = b[d].x, e = b[d].y, i = .98, r = .98
                }
                var S = _[u / 18].x + l[u],
                    E = _[u / 18].y - l[u + 1],
                    A = S - v,
                    C = E - y,
                    x = h(A, C);
                if (30 > x) {
                    var P = Math.atan2(C, A);
                    1 > x && (x = 1);
                    var L = 40 / x;
                    t += L * Math.cos(P), e += L * Math.sin(P), i = .9, r = .9
                }
                for (n = 0; 18 > n; n += 3) l[u + n + 0] += t, l[u + n + 1] += e, l[u + n + 0] *= i, l[u + n + 1] *= r, o[c] > s[c] && (l[u + n + 0] = 0, l[u + n + 1] = 0), p++;
                c += 6
            }
            for (var u = 0; u < o.length; u++) o[u] > s[u] && (o[u] = 0);
            m.attributes.aAnimation.needsUpdate = !0, m.attributes.aTime.needsUpdate = !0
        }

        function s(t, e) {
            v = t*0.85, y = e*0.85;
            for (var i = m.attributes.aIsVisible.array, r = (m.attributes.aAnimation.array, m.attributes.aTime.array, 0), n = 0; n < i.length; n += 6) {
                for (var a = _[r].x - v, o = _[r].y - y, s = Math.sqrt(a * a + o * o), h = 0; 6 > h; h++)
                    45 > s ? i[n + h] = 1 : i[n + h] = 0; // sprei radius

                x[r] = s, r++
            }
            m.attributes.aIsVisible.needsUpdate = !0, m.attributes.aAnimation.needsUpdate = !0, m.attributes.aTime.needsUpdate = !0
        }

        function h(t, e) {
            return Math.sqrt(t * t + e * e)
        }
        var l, c, u, p, d, f, m, g, v, y, _ = [],
            x = [],
            b = [],
            w = 0,
            M = Modernizr.touch ? 2e3 : 5e3,
            T = t("../vendor/perlin-noise");
        e.exports = {
            init: r,
            step: o,
            onMouseMove: s
        }
    }, {
        "../vendor/perlin-noise": 13
    }],
    13: [function(t, e, i) {
        "use strict";

        function r(t, e, i) {
            this.x = t, this.y = e, this.z = i
        }

        function n(t) {
            return t * t * t * (t * (6 * t - 15) + 10)
        }

        function a(t, e, i) {
            return (1 - i) * t + i * e
        }
        var o = {};
        r.prototype.dot2 = function(t, e) {
            return this.x * t + this.y * e
        }, r.prototype.dot3 = function(t, e, i) {
            return this.x * t + this.y * e + this.z * i
        };
        var s = [new r(1, 1, 0), new r(-1, 1, 0), new r(1, -1, 0), new r(-1, -1, 0), new r(1, 0, 1), new r(-1, 0, 1), new r(1, 0, -1), new r(-1, 0, -1), new r(0, 1, 1), new r(0, -1, 1), new r(0, 1, -1), new r(0, -1, -1)],
            h = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180],
            l = new Array(512),
            c = new Array(512);
        o.seed = function(t) {
            t > 0 && 1 > t && (t *= 65536), t = Math.floor(t), 256 > t && (t |= t << 8);
            for (var e = 0; 256 > e; e++) {
                var i;
                i = 1 & e ? h[e] ^ 255 & t : h[e] ^ t >> 8 & 255, l[e] = l[e + 256] = i, c[e] = c[e + 256] = s[i % 12]
            }
        }, o.seed(0);
        var u = .5 * (Math.sqrt(3) - 1),
            p = (3 - Math.sqrt(3)) / 6,
            d = 1 / 3,
            f = 1 / 6;
        o.simplex2 = function(t, e) {
            var i, r, n, a, o, s = (t + e) * u,
                h = Math.floor(t + s),
                d = Math.floor(e + s),
                f = (h + d) * p,
                m = t - h + f,
                g = e - d + f;
            m > g ? (a = 1, o = 0) : (a = 0, o = 1);
            var v = m - a + p,
                y = g - o + p,
                _ = m - 1 + 2 * p,
                x = g - 1 + 2 * p;
            h &= 255, d &= 255;
            var b = c[h + l[d]],
                w = c[h + a + l[d + o]],
                M = c[h + 1 + l[d + 1]],
                T = .5 - m * m - g * g;
            0 > T ? i = 0 : (T *= T, i = T * T * b.dot2(m, g));
            var S = .5 - v * v - y * y;
            0 > S ? r = 0 : (S *= S, r = S * S * w.dot2(v, y));
            var E = .5 - _ * _ - x * x;
            return 0 > E ? n = 0 : (E *= E, n = E * E * M.dot2(_, x)), 70 * (i + r + n)
        }, o.simplex3 = function(t, e, i) {
            var r, n, a, o, s, h, u, p, m, g, v = (t + e + i) * d,
                y = Math.floor(t + v),
                _ = Math.floor(e + v),
                x = Math.floor(i + v),
                b = (y + _ + x) * f,
                w = t - y + b,
                M = e - _ + b,
                T = i - x + b;
            w >= M ? M >= T ? (s = 1, h = 0, u = 0, p = 1, m = 1, g = 0) : w >= T ? (s = 1, h = 0, u = 0, p = 1, m = 0, g = 1) : (s = 0, h = 0, u = 1, p = 1, m = 0, g = 1) : T > M ? (s = 0, h = 0, u = 1, p = 0, m = 1, g = 1) : T > w ? (s = 0, h = 1, u = 0, p = 0, m = 1, g = 1) : (s = 0, h = 1, u = 0, p = 1, m = 1, g = 0);
            var S = w - s + f,
                E = M - h + f,
                A = T - u + f,
                C = w - p + 2 * f,
                P = M - m + 2 * f,
                L = T - g + 2 * f,
                R = w - 1 + 3 * f,
                D = M - 1 + 3 * f,
                F = T - 1 + 3 * f;
            y &= 255, _ &= 255, x &= 255;
            var O = c[y + l[_ + l[x]]],
                k = c[y + s + l[_ + h + l[x + u]]],
                U = c[y + p + l[_ + m + l[x + g]]],
                B = c[y + 1 + l[_ + 1 + l[x + 1]]],
                V = .6 - w * w - M * M - T * T;
            0 > V ? r = 0 : (V *= V, r = V * V * O.dot3(w, M, T));
            var I = .6 - S * S - E * E - A * A;
            0 > I ? n = 0 : (I *= I, n = I * I * k.dot3(S, E, A));
            var z = .6 - C * C - P * P - L * L;
            0 > z ? a = 0 : (z *= z, a = z * z * U.dot3(C, P, L));
            var N = .6 - R * R - D * D - F * F;
            return 0 > N ? o = 0 : (N *= N, o = N * N * B.dot3(R, D, F)), 32 * (r + n + a + o)
        }, o.perlin2 = function(t, e) {
            var i = Math.floor(t),
                r = Math.floor(e);
            t -= i, e -= r, i = 255 & i, r = 255 & r;
            var o = c[i + l[r]].dot2(t, e),
                s = c[i + l[r + 1]].dot2(t, e - 1),
                h = c[i + 1 + l[r]].dot2(t - 1, e),
                u = c[i + 1 + l[r + 1]].dot2(t - 1, e - 1),
                p = n(t);
            return a(a(o, h, p), a(s, u, p), n(e))
        }, o.perlin3 = function(t, e, i) {
            var r = Math.floor(t),
                o = Math.floor(e),
                s = Math.floor(i);
            t -= r, e -= o, i -= s, r = 255 & r, o = 255 & o, s = 255 & s;
            var h = c[r + l[o + l[s]]].dot3(t, e, i),
                u = c[r + l[o + l[s + 1]]].dot3(t, e, i - 1),
                p = c[r + l[o + 1 + l[s]]].dot3(t, e - 1, i),
                d = c[r + l[o + 1 + l[s + 1]]].dot3(t, e - 1, i - 1),
                f = c[r + 1 + l[o + l[s]]].dot3(t - 1, e, i),
                m = c[r + 1 + l[o + l[s + 1]]].dot3(t - 1, e, i - 1),
                g = c[r + 1 + l[o + 1 + l[s]]].dot3(t - 1, e - 1, i),
                v = c[r + 1 + l[o + 1 + l[s + 1]]].dot3(t - 1, e - 1, i - 1),
                y = n(t),
                _ = n(e),
                x = n(i);
            return a(a(a(h, f, y), a(u, m, y), x), a(a(p, g, y), a(d, v, y), x), _)
        }, e.exports = o
    }, {}],
    14: [function(t, e, i) {
        "use strict";
        var r = function(t) {
            this.baseURL = t ? "./" + t + "/" : ".", this.shaders = {}
        };
        r.prototype = {
            files: [],
            urls: [],
            loadedFile: 0,
            setFile: function(t, e) {
                var i = {
                    url: t,
                    name: e
                };
                this.urls.push(i)
            },
            setLoadedFunction: function(t) {
                this.loaded = t
            },
            startLoad: function() {
                this.urls.forEach(function(t) {
                    var e = this.baseURL + "/" + t.url;
                    $.ajax({
                        url: e,
                        dateType: "text",
                        complete: function(e) {
                            this.shaders[t.name] = e.responseText, this.loadedHandler()
                        }.bind(this)
                    })
                }.bind(this))
            },
            loadedHandler: function() {
                this.loadedFile++, this.loadedFile == this.urls.length && this.loaded && this.loaded()
            }
        }, e.exports = r
    }, {}]
}, {}, [1]);