window.Semblance = {
    Vero: {
        API: {}
    },
    Util: {}
};
var Base64;
Array.prototype.toJSON && delete Array.prototype.toJSON, Date.now || (Date.now = function () {
    return (new Date).valueOf()
}), Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
    "use strict";
    var t, r, o, n;
    if (null === this) throw new TypeError;
    if (n = Object(this), r = n.length >>> 0, 0 === r) return -1;
    if (o = 0, arguments.length > 1 && (o = Number(arguments[1]), o !== o ? o = 0 : 0 !== o && Infinity !== o && -Infinity !== o && (o = (o > 0 || -1) * Math.floor(Math.abs(o)))), o >= r) return -1;
    for (t = o >= 0 ? o : Math.max(r - Math.abs(o), 0); t < r;) {
        if (t in n && n[t] === e) return t;
        t++
    }
    return -1
}), Array.prototype.map || (Array.prototype.map = function (e, t) {
    var r, o, n, i, s, a, u;
    if (n = void 0, r = void 0, i = void 0, null === this) throw new TypeError(" this is null or not defined");
    if (o = Object(this), a = o.length >>> 0, "function" != typeof e) throw new TypeError(e + " is not a function");
    for (t && (n = t), r = new Array(a), i = 0; i < a;) s = void 0, u = void 0, i in o && (s = o[i], u = e.call(n, s, i, o), r[i] = u), i++;
    return r
}), Array.prototype.filter || (Array.prototype.filter = function (e) {
    "use strict";
    var t, r, o, n, i, s;
    if (null === this) throw new TypeError;
    if (n = Object(this), r = n.length >>> 0, "function" != typeof e) throw new TypeError;
    for (o = [], i = arguments[1], t = 0; t < r;) t in n && (s = n[t], e.call(i, s, t, n) && o.push(s)), t++;
    return o
}), Semblance.Util.EmailChecker = {
    check: function (e) {
        return null != e && (e = e.toString(), e.indexOf(".") > 2 && e.indexOf("@") > 0)
    }
}, Semblance.Util.QueryString = function () {
    var e, t, r, o, n, i;
    for (n = {}, o = window.location.search.substring(1), i = o.split("&"), t = 0; t < i.length;) r = i[t].split("="), "undefined" == typeof n[r[0]] ? n[r[0]] = r[1] : "string" == typeof n[r[0]] ? (e = [n[r[0]], r[1]], n[r[0]] = e) : n[r[0]].push(r[1]), t++;
    return n
}(), Semblance.Util.Cookies = {
    create: function (e, t, r, o) {
        var n, i, s;
        n = "", s = "", r ? (i = new Date, i.setTime(i.getTime() + 24 * r * 60 * 60 * 1e3), s = "; expires=" + i.toGMTString()) : s = "", n = null != o ? e + "=" + t + s + "; path=/; domain=." + o + ";" : e + "=" + t + s + "; path=/", document.cookie = n
    },
    read: function (e) {
        var t, r, o, n;
        for (n = e + "=", r = document.cookie.split(";"), o = 0; o < r.length;) {
            for (t = r[o];
                " " === t.charAt(0);) t = t.substring(1, t.length);
            if (0 === t.indexOf(n)) return t.substring(n.length, t.length);
            o++
        }
        return null
    },
    destroy: function (e) {
        this.create(e, "", -1)
    }
}, Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
        var t, r, o, n, i, s, a, u, c;
        for (c = "", t = void 0, r = void 0, o = void 0, n = void 0, i = void 0, s = void 0, a = void 0, u = 0, e = Base64._utf8_encode(e); u < e.length;) t = e.charCodeAt(u++), r = e.charCodeAt(u++), o = e.charCodeAt(u++), n = t >> 2, i = (3 & t) << 4 | r >> 4, s = (15 & r) << 2 | o >> 6, a = 63 & o, isNaN(r) ? s = a = 64 : isNaN(o) && (a = 64), c = c + Base64._keyStr.charAt(n) + Base64._keyStr.charAt(i) + Base64._keyStr.charAt(s) + Base64._keyStr.charAt(a);
        return c
    },
    decode: function (e) {
        var t, r, o, n, i, s, a, u, c;
        for (c = "", t = void 0, r = void 0, o = void 0, n = void 0, i = void 0, s = void 0, a = void 0, u = 0, e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length;) n = Base64._keyStr.indexOf(e.charAt(u++)), i = Base64._keyStr.indexOf(e.charAt(u++)), s = Base64._keyStr.indexOf(e.charAt(u++)), a = Base64._keyStr.indexOf(e.charAt(u++)), t = n << 2 | i >> 4, r = (15 & i) << 4 | s >> 2, o = (3 & s) << 6 | a, c += String.fromCharCode(t), 64 !== s && (c += String.fromCharCode(r)), 64 !== a && (c += String.fromCharCode(o));
        return c = Base64._utf8_decode(c)
    },
    _utf8_encode: function (e) {
        var t, r, o;
        for (e = e.replace(/\r\n/g, "\n"), o = "", r = 0; r < e.length;) t = e.charCodeAt(r), t < 128 ? o += String.fromCharCode(t) : t > 127 && t < 2048 ? (o += String.fromCharCode(t >> 6 | 192), o += String.fromCharCode(63 & t | 128)) : (o += String.fromCharCode(t >> 12 | 224), o += String.fromCharCode(t >> 6 & 63 | 128), o += String.fromCharCode(63 & t | 128)), r++;
        return o
    },
    _utf8_decode: function (e) {
        var t, r, o, n, i;
        for (i = "", n = 0, t = 0, r = 0, o = 0; n < e.length;) t = e.charCodeAt(n), t < 128 ? (i += String.fromCharCode(t), n++) : t > 191 && t < 224 ? (r = e.charCodeAt(n + 1), i += String.fromCharCode((31 & t) << 6 | 63 & r), n += 2) : (r = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), i += String.fromCharCode((15 & t) << 12 | (63 & r) << 6 | 63 & o), n += 3);
        return i
    }
}, window.console || (window.console = {
    log: function () {
        return {}
    }
}), window.veroCallback = function (e) {
    var t;
    if (t = window._veroq, 200 === e.status) return t.command_store.removeJob(e.job_id)
}, window.veroCallback__ = function (e) {};
var extend = function (e, t) {
        function r() {
            this.constructor = e
        }
        for (var o in t) hasProp.call(t, o) && (e[o] = t[o]);
        return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
    },
    hasProp = {}.hasOwnProperty;
Semblance.Vero.API.BaseListener = function () {
    function e() {}
    return e.prototype.load = function (e, t) {}, e.prototype.target = function () {
        return this._target || this.defaultTarget()
    }, e.prototype.setupTarget = function (e) {
        var t;
        if (t = null != e ? (this._target = e, e) : this.target(), null != t) return t._vero_delegate = this
    }, e.prototype.log = function (e) {
        if (null != window.__vero) return window.__vero.log(e)
    }, e
}(), Semblance.Vero.API.KISSMetricsListener = function (e) {
    function t() {
        return t.__super__.constructor.apply(this, arguments)
    }
    return extend(t, e), t.prototype.load = function (e, t) {
        return this.target()._track = this.target().record, this.target().record = this.track, this.target()._identify = this.target().identify, this.target().identify = this.identify, this.target()._set = this.target().set, this.target().set = this.set, e.log("Listening for KISSMetrics events...")
    }, t.prototype.track = function (e, t, r) {
        var o;
        return o = this._vero_delegate, o.target()._track(e, t, r), o.log("KM.record: " + e), window._veroq.push(["track", e, t])
    }, t.prototype.identify = function (e) {
        var t;
        if (t = this._vero_delegate, t.target()._identify(e), t.log("KM.identify: " + e), Semblance.Util.EmailChecker.check(e)) return window._veroq.push(["user", {
            email: e
        }])
    }, t.prototype.set = function (e) {
        var t;
        return t = this._vero_delegate, t.target()._set(e), t.log("KM.set: " + JSON.stringify(e)), window._veroq.push(["user", e])
    }, t.prototype.defaultTarget = function () {
        return window.KM
    }, t
}(Semblance.Vero.API.BaseListener), Semblance.Vero.API.MixpanelListener = function (e) {
    function t() {
        return t.__super__.constructor.apply(this, arguments)
    }
    return extend(t, e), t.prototype.load = function (e, t) {
        return this.target()._track = this.target().track, this.target().track = this.track, this.target()._identify = this.target().identify, this.target().identify = this.identify, this.target()._register = this.target().register, this.target().register = this.register, e.log("Listening for Mixpanel events...")
    }, t.prototype.track = function (e, t) {
        var r;
        return r = this._vero_delegate, r.target()._track(e, t), r.log("mixpanel.track: " + e), window._veroq.push(["track", e, t])
    }, t.prototype.identify = function (e) {
        var t;
        if (t = this._vero_delegate, t.target()._identify(e), t.log("mixpanel.identify: " + e), Semblance.Util.EmailChecker.check(e)) return window._veroq.push(["user", {
            email: e
        }])
    }, t.prototype.register = function (e) {
        var t;
        return t = this._vero_delegate, t.target()._register(e), t.log("mixpanel.register: " + JSON.stringify(e)), window._veroq.push(["user", e])
    }, t.prototype.defaultTarget = function () {
        return window.mixpanel
    }, t
}(Semblance.Vero.API.BaseListener), Semblance.Vero.API.Listeners = function () {
    function e() {}
    return e.prototype.sources = {
        kissmetrics: Semblance.Vero.API.KISSMetricsListener,
        mixpanel: Semblance.Vero.API.MixpanelListener
    }, e.prototype.load = function (e, t) {
        var r;
        return r = new this.sources[e], r.setupTarget(t), r.load(r, this.delegate)
    }, e.prototype.attach_to_mixpanel = function () {
        return window.__vero.listeners.load("mixpanel", this)
    }, e.prototype.attach_to_kissmetrics = function () {
        return window.__vero.listeners.load("kissmetrics")
    }, e
}(), Semblance.Vero.API.Networking = function () {
    function e(e) {
        null == e && (e = null), this._domain = null != e ? e : this.defaultDomain()
    }
    return e.prototype.defaultDomain = function () {
        return "https://api.getvero.com"
    }, e.prototype.setCredentials = function (e) {
        return !!this.validateCredentialsObject(e) && (this.api_key = e.api_key)
    }, e.prototype.send = function (e, t) {
        var r, o;
        return e = e + "&callback=veroCallback&job_id=" + t, o = document.createElement("script"), o.src = e, r = document.getElementsByTagName("script")[0], r.parentNode.insertBefore(o, r)
    }, e.prototype.buildTrackUrl = function (e, t, r, o, n) {
        var i;
        return i = {
            event_name: e,
            api_key: this.api_key,
            development_mode: o,
            identity: t,
            data: r,
            extras: n
        }, i = JSON.stringify(i), i = encodeURIComponent(i), this._domain + "/api/v2/events/track.json?params=" + i
    }, e.prototype.buildUserUrl = function (e, t, r, o) {
        var n;
        return n = {
            api_key: this.api_key,
            data: r,
            development_mode: o
        }, null != e && (n.id = e), null != t && (n.email = t), n = JSON.stringify(n), n = encodeURIComponent(n), this._domain + "/api/v2/users/track.json?params=" + n
    }, e.prototype.buildTagsUrl = function (e, t, r) {
        var o;
        return o = {
            id: e,
            api_key: this.api_key,
            development_mode: r
        }, null != t && null != t.add && (o.add = t.add), null != t && null != t.remove && (o.remove = t.remove), o = JSON.stringify(o), o = encodeURIComponent(o), this._domain + "/api/v2/users/tags/edit.json?params=" + o
    }, e.prototype.buildReidentifyUrl = function (e, t, r) {
        var o;
        return o = {
            api_key: this.api_key,
            id: e,
            new_id: t,
            development_mode: r
        }, o = JSON.stringify(o), o = encodeURIComponent(o), this._domain + "/api/v2/users/reidentify.json?params=" + o
    }, e.prototype.buildUnsubscribeUrl = function (e) {
        var t;
        return t = {
            api_key: this.api_key,
            id: e
        }, t = JSON.stringify(t), t = encodeURIComponent(t), this._domain + "/api/v2/users/unsubscribe.json?params=" + t
    }, e.prototype.buildResubscribeUrl = function (e) {
        var t;
        return t = {
            api_key: this.api_key,
            id: e
        }, t = JSON.stringify(t), t = encodeURIComponent(t), this._domain + "/api/v2/users/resubscribe.json?params=" + t
    }, e.prototype.validateCredentialsObject = function (e) {
        return null != e && null != e.api_key
    }, e
}(), Semblance.Vero.API.Processor = function () {
    function e(e) {
        this.vero = e
    }
    return e.prototype.currentUser = function () {
        return this.vero.current_user
    }, e.prototype.networking = function () {
        return this.vero.networking
    }, e.prototype.processJob = function (e) {
        var t, r, o, n;
        if (this.vero.command_store.lockJob(e), n = this.vero.command_store.find(e), null != n) return o = n.command, r = this[o.splice(0, 1)], t = o, t.push(e), r.apply(this, t)
    }, e.prototype.events_track = function (e, t, r, o) {
        var n, i, s;
        return s = this.currentUser().toObject(), this.currentUser().isIdentified() ? (n = this.vero.development_mode, i = this.networking().buildTrackUrl(e, s, t, n, r), this.networking().send(i, o)) : this.vero.command_store.unlockJob()
    }, e.prototype.users_track = function (e, t) {
        var r, o;
        if (this.currentUser().update(e), o = this.currentUser().toObject()) return r = this.networking().buildUserUrl(o.id, o.email, o, this.vero.development_mode), this.networking().send(r, t), this.vero.processStoredCommands(), this.vero.trackVisitIfRequired()
    }, e.prototype.users_tags = function (e, t) {
        var r, o, n;
        if (n = this.currentUser().toObject()) return o = n.id || n.email, r = this.networking().buildTagsUrl(o, e, this.vero.development_mode), this.networking().send(r, t)
    }, e.prototype.users_unsubscribe = function (e, t) {
        var r, o;
        return null == e && (o = this.currentUser().toObject(), e = o.id), r = this.networking().buildUnsubscribeUrl(e), this.networking().send(r, t)
    }, e.prototype.users_resubscribe = function (e, t) {
        var r, o;
        return null == e && (o = this.currentUser().toObject(), e = o.id), r = this.networking().buildResubscribeUrl(e), this.networking().send(r, t)
    }, e.prototype.users_reidentify = function (e, t, r) {
        var o, n, i;
        return null == t && (i = this.currentUser().toObject(), null != i && (t = i.id)), this.currentUser().update({
            id: e
        }), null != t && null != e ? (n = this.networking().buildReidentifyUrl(t, e, this.vero.development_mode), this.networking().send(n, r)) : (o = this.vero.command_store.unlockJob(), this.vero.command_store.removeJob(o))
    }, e
}(), Semblance.Vero.API.Store = function () {
    function e() {
        this.cookieDomain = null, this.maxCookieSize = 2048, this._store = this.fetchAll(), this._locked_jobs = [], null == this._store && (this._store = [])
    }
    return e.prototype.storeWithJobId = function (e, t) {
        return e = {
            command: e,
            job_id: t
        }, this._store.push(e), t
    }, e.prototype.store = function (e) {
        return this.storeWithJobId(e, this.getNextJobId())
    }, e.prototype.shift = function () {
        return 0 === this._store.length ? null : this._store.shift()
    }, e.prototype.find = function (e) {
        var t, r;
        if (t = this.indexOfJobWithId(e), t >= 0) return r = JSON.stringify(this._store[t]), JSON.parse(r)
    }, e.prototype.removeJob = function (e) {
        var t;
        if (t = this.indexOfJobWithId(e), t >= 0) return this._store.splice(t, 1)
    }, e.prototype.length = function () {
        return this.getStore().length
    }, e.prototype.lockJob = function (e) {
        return this._locked_jobs.push(e)
    }, e.prototype.unlockJob = function () {
        return this._locked_jobs.pop()
    }, e.prototype.availableJobIds = function () {
        var e, t, r, o, n;
        for (n = [], o = this.jobIds(), t = 0, r = o.length; t < r; t++) e = o[t], this._locked_jobs.indexOf(e) < 0 && n.push(e);
        return n
    }, e.prototype.jobIds = function () {
        return this.getStore().map(function (e) {
            return e.job_id
        })
    }, e.prototype.save = function () {
        return this.saveToCookie(this._store)
    }, e.prototype.saveToCookie = function (e) {
        return Semblance.Util.Cookies.create(this.cookieKey(), this.encodeValue(e, this.maxCookieSize), null, this.cookieDomain)
    }, e.prototype.readFromCookie = function () {
        var e;
        return e = Semblance.Util.Cookies.read(this.cookieKey()), null != e ? this.decodeValue(e) : []
    }, e.prototype.encodeValue = function (e, t) {
        var r, o, n;
        for (null == t && (t = 2048), n = e.slice(), r = JSON.stringify(n), o = encodeURIComponent(r); o.length > t;) n.shift(), r = JSON.stringify(n), o = encodeURIComponent(r);
        return o
    }, e.prototype.decodeValue = function (e) {
        return JSON.parse(decodeURIComponent(e))
    }, e.prototype.fetchAll = function () {
        var e;
        return e = this.readFromCookie(), this.saveToCookie([]), e
    }, e.prototype.purge = function () {
        return this._store = [], Semblance.Util.Cookies.destroy(this.cookieKey())
    }, e.prototype.getStore = function () {
        return this._store
    }, e.prototype.getNextJobId = function () {
        return Date.now() + "_" + Math.floor(1e4 * Math.random())
    }, e.prototype.indexOfJobWithId = function (e) {
        var t, r, o, n, i, s;
        for (r = -1, t = 0, s = this._store, o = 0, i = s.length; o < i; o++) {
            if (n = s[o], "" + n.job_id == "" + e) {
                r = t;
                break
            }
            t += 1
        }
        return r
    }, e.prototype.cookieKey = function () {
        return "__veroc4"
    }, e
}();
var slice = [].slice;
Semblance.Vero.API.User = function () {
    function e() {
        this.user_cookie = "__vero_user", this.cookieDomain = null, this.clear()
    }
    return e.prototype.clear = function () {
        return this.user = {}
    }, e.prototype.purge = function () {
        return this.user = {}, Semblance.Util.Cookies.destroy(this.user_cookie)
    }, e.prototype.update = function (e) {
        if (null != e && "" !== e) return this.user = this._merge(this.user, e), this.updateCookie(), this.user
    }, e.prototype.toObject = function () {
        var e, t;
        return t = this.isIdentified() ? this.user : null != (e = this.readCookie()) ? this._merge(this.user, {
            id: e
        }) : null, t && isNaN(parseInt(t.timezone)) && (t.timezone = this._userTimezone()), t
    }, e.prototype.isIdentified = function () {
        var e, t;
        return null != this.user && (t = null != this.user.id, e = Semblance.Util.EmailChecker.check(this.user.email), t || e)
    }, e.prototype.updateCookie = function () {
        var e;
        if (e = null != this.user.id ? this.user.id : this.user.email, null != e && "" !== e) return Semblance.Util.Cookies.create(this.user_cookie, e, 731, this.cookieDomain)
    }, e.prototype.readCookie = function () {
        return Semblance.Util.Cookies.read(this.user_cookie)
    }, e.prototype.email = function () {
        return this.user.email
    }, e.prototype.id = function () {
        return this.user.id
    }, e.prototype._merge = function () {
        var e, t, r, o, n, i, s, a;
        for (e = arguments[0], i = 2 <= arguments.length ? slice.call(arguments, 1) : [], t = 0, o = i.length; t < o; t++) {
            n = i[t];
            for (r in n) a = n[r], !this.dedupe || "email" !== r && "id" !== r || (a = this._dedupeValue(a)), s = "email" === r ? !!a : null != a, s && (e[r] = a)
        }
        return e
    }, e.prototype._userTimezone = function () {
        var e;
        return e = new Date, -(e.getTimezoneOffset() / 60)
    }, e.prototype._dedupeValue = function (e) {
        return null != e && null != e.trim && (e = e.toLowerCase().trim()), e
    }, e
}();
var unloadVeroq;
Semblance.Vero.API.Vero = function () {
    function e() {
        this.order = 0, this.networking = new Semblance.Vero.API.Networking, this.listeners = new Semblance.Vero.API.Listeners, this.processor = new Semblance.Vero.API.Processor(this), this.current_user = new Semblance.Vero.API.User, this.command_store = new Semblance.Vero.API.Store, this.development_mode = !1, this.response = null, this.ready = !1, this.conversion_cookie = null
    }
    return e.prototype.setup = function () {
        var e, t;
        if (this.cleanupOldCookies(), e = window._veroq, t = e === this || "undefined" == typeof e, t || (e = this.processInitCommand(e)), window._veroq = this, !t) return this.processVeroArray(e)
    }, e.prototype.push = function (e) {
        var t;
        return t = this.processCommand(e), t["function"] !== this.init && this.checkLibIsReady(), t["function"].apply(this, t.arguments), "function" == typeof t.callback && t.callback(this, !0), this.log("VERO::" + t.functionName + ": " + JSON.stringify(t.arguments))
    }, e.prototype.processCommand = function (e) {
        var t, r, o, n, i;
        return null != e && e.constructor === Array && e.length > 0 ? (i = o = n = null, i = e.shift(), t = e[e.length - 1], r = null === t || "function" == typeof t, r && (n = e.pop()), o = e, {
            functionName: i,
            "function": this[i],
            arguments: o,
            callback: n
        }) : null
    }, e.prototype.processInitCommand = function (e) {
        var t;
        return t = null, e = e.filter(function (e) {
            return "init" !== e[0] || (t = e, !1)
        }), null != t && this.push(t), e
    }, e.prototype.cleanupOldCookies = function () {
        var e, t, r, o, n;
        for (e = ["__veroc", "__veroc1", "__veroc2", "__veroc3"], n = [], r = 0, o = e.length; r < o; r++) t = e[r], n.push(Semblance.Util.Cookies.destroy(t));
        return n
    }, e.prototype.processVeroArray = function (e) {
        var t, r, o, n;
        for (n = [], t = r = 0, o = e.length; 0 <= o ? r < o : r > o; t = 0 <= o ? ++r : --r) n.push(this.push(e.shift()));
        return n
    }, e.prototype.processStoredCommands = function () {
        var e, t, r, o, n;
        for (o = this.command_store.availableJobIds(), n = [], e = 0, r = o.length; e < r; e++) t = o[e], n.push(this.processor.processJob(t));
        return n
    }, e.prototype.trackVisitIfRequired = function () {
        if (null == Semblance.Util.Cookies.read("__vero_visit")) return Semblance.Util.Cookies.create("__vero_visit", !0, null, this.cookieDomain), this.track("Visited site")
    }, e.prototype.checkParamsForConversion = function () {
        var e;
        return e = Semblance.Util.QueryString.vero_conv, this.conversion_cookie = null != e && "" !== e ? (Semblance.Util.Cookies.create("__vero_conv", e, null, this.cookieDomain), e) : Semblance.Util.Cookies.read("__vero_conv")
    }, e.prototype.checkParamsForCredentials = function () {
        var e, t, r;
        if (r = Semblance.Util.QueryString.vero_id, t = Semblance.Util.QueryString.vero_e, e = {}, null != r && "" !== r && (r = decodeURIComponent(r), r = r.replace("%40", "@"), e.id = r), null != t && (t = decodeURIComponent(t), t = t.replace("%40", "@"), Semblance.Util.EmailChecker.check(t) && (e.email = t)), null != e.id || null != e.email) return this.user(e)
    }, e.prototype.checkLibIsReady = function () {
        if (!this.ready) return this.log("Vero: You must run init before you can perform an other actions.", !0)
    }, e.prototype.log = function (e, t) {
        return null == t && (t = !1), !(!this.development_mode && !t) && (console.log(e), !0)
    }, e.prototype.timeForEvent = function (e) {
        var t;
        return t = null != e.time ? e.time : Date.now(), t += this.order
    }, e.prototype.getNavigator = function () {
        return window.navigator
    }, e.prototype.domain = function (e) {
        return this.networking._domain = e
    }, e.prototype.dev_mode = function (e) {
        return this.development_mode = e
    }, e.prototype.cookie_domain = function (e) {
        return this.cookieDomain = this.current_user.cookieDomain = this.command_store.cookieDomain = e, e
    }, e.prototype.userCookie = function (e) {
        return this.user_cookie = this.current_user.user_cookie = e
    }, e.prototype.maxCookieSize = function (e) {
        return this.command_store.maxCookieSize = e
    }, e.prototype.enableDedupe = function (e) {
        return this.dedupe = this.current_user.dedupe = e, e
    }, e.prototype.clearUser = function () {
        return Semblance.Util.Cookies.destroy("__vero_user"), this.current_user.clear()
    }, e.prototype.init = function (e) {
        if (this.networking.setCredentials(e)) return this.order = 0, null != e.cookie_domain && this.cookie_domain(e.cookie_domain), null != e.dedupe && this.enableDedupe(e.dedupe), null != e.user && this.user(e.user), null != e.development_mode && this.dev_mode(e.development_mode), null != e.domain && this.domain(e.domain), null != e.user_cookie && this.userCookie(e.user_cookie), null != e.maxCookieSize && this.maxCookieSize(e.maxCookieSize), this.ready = !0, this.processStoredCommands(), this.checkParamsForCredentials(), this.checkParamsForConversion(), this.trackVisitIfRequired()
    }, e.prototype.track = function (e, t, r) {
        var o;
        return null == t && (t = {}), null == r && (r = {}), this.order += 1, r.time = this.timeForEvent(r), r.order = this.order, this.conversion_cookie && (r.vero_conv = this.conversion_cookie), t.userAgent = this.getNavigator().userAgent, t.platform = this.getNavigator().platform, t.language = this.getNavigator().language, o = this.command_store.store(["events_track", e, t, r]), this.processor.processJob(o)
    }, e.prototype.trackOnce = function (e, t, r, o) {
        var n;
        return null == r && (r = {}), null == o && (o = {}), this.order += 1, o.time = this.timeForEvent(o), o.order = this.order, this.conversion_cookie && (o.vero_conv = this.conversion_cookie), r.userAgent = this.getNavigator().userAgent, r.platform = this.getNavigator().platform, r.language = this.getNavigator().language, n = this.command_store.storeWithJobId(["events_track", e, r, o], t), this.processor.processJob(n)
    }, e.prototype.trackPageview = function () {
        return this.track("viewed_page", {
            url: window.location.href
        }, {
            time: Date.now()
        })
    }, e.prototype.user = function (e) {
        var t;
        return null == e && (e = null), null !== e && (e.userAgent = this.getNavigator().userAgent, e.platform = this.getNavigator().platform, e.language = this.getNavigator().language), t = this.command_store.store(["users_track", e]), this.processor.processJob(t)
    }, e.prototype.tags = function (e) {
        var t;
        return null == e && (e = null), t = this.command_store.store(["users_tags", e]), this.processor.processJob(t)
    }, e.prototype.reidentify = function (e, t) {
        var r;
        return null == t && (t = null), r = this.command_store.store(["users_reidentify", e, t]), this.processor.processJob(r)
    }, e.prototype.unsubscribe = function (e) {
        var t;
        return null == e && (e = null), t = this.command_store.store(["users_unsubscribe", e]), this.processor.processJob(t)
    }, e.prototype.resubscribe = function (e) {
        var t;
        return null == e && (e = null), t = this.command_store.store(["users_resubscribe", e]), this.processor.processJob(t)
    }, e
}(), window.__vero = new Semblance.Vero.API.Vero, unloadVeroq = function () {
    return window.__vero.command_store.save()
}, window.addEventListener ? window.addEventListener("unload", unloadVeroq, !1) : window.attachEvent && window.attachEvent("unload", unloadVeroq), __vero.setup();