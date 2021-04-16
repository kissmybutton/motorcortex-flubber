!(function (e) {
  var t = window.webpackHotUpdate;
  window.webpackHotUpdate = function (e, n) {
    !(function (e, t) {
      if (!w[e] || !x[e]) return;
      for (var n in ((x[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (m[n] = t[n]);
      0 == --g && 0 === y && O();
    })(e, n),
      t && t(e, n);
  };
  var n,
    i = !0,
    r = "2640c1b461b4b0147daa",
    s = {},
    o = [],
    a = [];
  function l(e) {
    var t = T[e];
    if (!t) return S;
    var i = function (i) {
        return (
          t.hot.active
            ? (T[i]
                ? -1 === T[i].parents.indexOf(e) && T[i].parents.push(e)
                : ((o = [e]), (n = i)),
              -1 === t.children.indexOf(i) && t.children.push(i))
            : (console.warn(
                "[HMR] unexpected require(" + i + ") from disposed module " + e
              ),
              (o = [])),
          S(i)
        );
      },
      r = function (e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return S[e];
          },
          set: function (t) {
            S[e] = t;
          },
        };
      };
    for (var s in S)
      Object.prototype.hasOwnProperty.call(S, s) &&
        "e" !== s &&
        "t" !== s &&
        Object.defineProperty(i, s, r(s));
    return (
      (i.e = function (e) {
        return (
          "ready" === p && h("prepare"),
          y++,
          S.e(e).then(t, function (e) {
            throw (t(), e);
          })
        );
        function t() {
          y--, "prepare" === p && (b[e] || E(e), 0 === y && 0 === g && O());
        }
      }),
      (i.t = function (e, t) {
        return 1 & t && (e = i(e)), S.t(e, -2 & t);
      }),
      i
    );
  }
  function c(t) {
    var i = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _selfInvalidated: !1,
      _disposeHandlers: [],
      _main: n !== t,
      active: !0,
      accept: function (e, t) {
        if (void 0 === e) i._selfAccepted = !0;
        else if ("function" == typeof e) i._selfAccepted = e;
        else if ("object" == typeof e)
          for (var n = 0; n < e.length; n++)
            i._acceptedDependencies[e[n]] = t || function () {};
        else i._acceptedDependencies[e] = t || function () {};
      },
      decline: function (e) {
        if (void 0 === e) i._selfDeclined = !0;
        else if ("object" == typeof e)
          for (var t = 0; t < e.length; t++) i._declinedDependencies[e[t]] = !0;
        else i._declinedDependencies[e] = !0;
      },
      dispose: function (e) {
        i._disposeHandlers.push(e);
      },
      addDisposeHandler: function (e) {
        i._disposeHandlers.push(e);
      },
      removeDisposeHandler: function (e) {
        var t = i._disposeHandlers.indexOf(e);
        t >= 0 && i._disposeHandlers.splice(t, 1);
      },
      invalidate: function () {
        switch (((this._selfInvalidated = !0), p)) {
          case "idle":
            ((m = {})[t] = e[t]), h("ready");
            break;
          case "ready":
            M(t);
            break;
          case "prepare":
          case "check":
          case "dispose":
          case "apply":
            (v = v || []).push(t);
        }
      },
      check: C,
      apply: P,
      status: function (e) {
        if (!e) return p;
        u.push(e);
      },
      addStatusHandler: function (e) {
        u.push(e);
      },
      removeStatusHandler: function (e) {
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      },
      data: s[t],
    };
    return (n = void 0), i;
  }
  var u = [],
    p = "idle";
  function h(e) {
    p = e;
    for (var t = 0; t < u.length; t++) u[t].call(null, e);
  }
  var d,
    m,
    f,
    v,
    g = 0,
    y = 0,
    b = {},
    x = {},
    w = {};
  function k(e) {
    return +e + "" === e ? +e : e;
  }
  function C(e) {
    if ("idle" !== p) throw new Error("check() is only allowed in idle status");
    return (
      (i = e),
      h("check"),
      ((t = 1e4),
      (t = t || 1e4),
      new Promise(function (e, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"));
        try {
          var i = new XMLHttpRequest(),
            s = S.p + "" + r + ".hot-update.json";
          i.open("GET", s, !0), (i.timeout = t), i.send(null);
        } catch (e) {
          return n(e);
        }
        i.onreadystatechange = function () {
          if (4 === i.readyState)
            if (0 === i.status)
              n(new Error("Manifest request to " + s + " timed out."));
            else if (404 === i.status) e();
            else if (200 !== i.status && 304 !== i.status)
              n(new Error("Manifest request to " + s + " failed."));
            else {
              try {
                var t = JSON.parse(i.responseText);
              } catch (e) {
                return void n(e);
              }
              e(t);
            }
        };
      })).then(function (e) {
        if (!e) return h(I() ? "ready" : "idle"), null;
        (x = {}), (b = {}), (w = e.c), (f = e.h), h("prepare");
        var t = new Promise(function (e, t) {
          d = { resolve: e, reject: t };
        });
        m = {};
        return E(0), "prepare" === p && 0 === y && 0 === g && O(), t;
      })
    );
    var t;
  }
  function E(e) {
    w[e]
      ? ((x[e] = !0),
        g++,
        (function (e) {
          var t = document.createElement("script");
          (t.charset = "utf-8"),
            (t.src = S.p + "" + e + "." + r + ".hot-update.js"),
            document.head.appendChild(t);
        })(e))
      : (b[e] = !0);
  }
  function O() {
    h("ready");
    var e = d;
    if (((d = null), e))
      if (i)
        Promise.resolve()
          .then(function () {
            return P(i);
          })
          .then(
            function (t) {
              e.resolve(t);
            },
            function (t) {
              e.reject(t);
            }
          );
      else {
        var t = [];
        for (var n in m)
          Object.prototype.hasOwnProperty.call(m, n) && t.push(k(n));
        e.resolve(t);
      }
  }
  function P(t) {
    if ("ready" !== p)
      throw new Error("apply() is only allowed in ready status");
    return (function t(i) {
      var a, l, c, u, p;
      function d(e) {
        for (
          var t = [e],
            n = {},
            i = t.map(function (e) {
              return { chain: [e], id: e };
            });
          i.length > 0;

        ) {
          var r = i.pop(),
            s = r.id,
            o = r.chain;
          if ((u = T[s]) && (!u.hot._selfAccepted || u.hot._selfInvalidated)) {
            if (u.hot._selfDeclined)
              return { type: "self-declined", chain: o, moduleId: s };
            if (u.hot._main)
              return { type: "unaccepted", chain: o, moduleId: s };
            for (var a = 0; a < u.parents.length; a++) {
              var l = u.parents[a],
                c = T[l];
              if (c) {
                if (c.hot._declinedDependencies[s])
                  return {
                    type: "declined",
                    chain: o.concat([l]),
                    moduleId: s,
                    parentId: l,
                  };
                -1 === t.indexOf(l) &&
                  (c.hot._acceptedDependencies[s]
                    ? (n[l] || (n[l] = []), g(n[l], [s]))
                    : (delete n[l],
                      t.push(l),
                      i.push({ chain: o.concat([l]), id: l })));
              }
            }
          }
        }
        return {
          type: "accepted",
          moduleId: e,
          outdatedModules: t,
          outdatedDependencies: n,
        };
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          -1 === e.indexOf(i) && e.push(i);
        }
      }
      I();
      var y = {},
        b = [],
        x = {},
        C = function () {
          console.warn(
            "[HMR] unexpected require(" + O.moduleId + ") to disposed module"
          );
        };
      for (var E in m)
        if (Object.prototype.hasOwnProperty.call(m, E)) {
          var O;
          (p = k(E)), (O = m[E] ? d(p) : { type: "disposed", moduleId: E });
          var P = !1,
            M = !1,
            A = !1,
            _ = "";
          switch (
            (O.chain && (_ = "\nUpdate propagation: " + O.chain.join(" -> ")),
            O.type)
          ) {
            case "self-declined":
              i.onDeclined && i.onDeclined(O),
                i.ignoreDeclined ||
                  (P = new Error(
                    "Aborted because of self decline: " + O.moduleId + _
                  ));
              break;
            case "declined":
              i.onDeclined && i.onDeclined(O),
                i.ignoreDeclined ||
                  (P = new Error(
                    "Aborted because of declined dependency: " +
                      O.moduleId +
                      " in " +
                      O.parentId +
                      _
                  ));
              break;
            case "unaccepted":
              i.onUnaccepted && i.onUnaccepted(O),
                i.ignoreUnaccepted ||
                  (P = new Error(
                    "Aborted because " + p + " is not accepted" + _
                  ));
              break;
            case "accepted":
              i.onAccepted && i.onAccepted(O), (M = !0);
              break;
            case "disposed":
              i.onDisposed && i.onDisposed(O), (A = !0);
              break;
            default:
              throw new Error("Unexception type " + O.type);
          }
          if (P) return h("abort"), Promise.reject(P);
          if (M)
            for (p in ((x[p] = m[p]),
            g(b, O.outdatedModules),
            O.outdatedDependencies))
              Object.prototype.hasOwnProperty.call(O.outdatedDependencies, p) &&
                (y[p] || (y[p] = []), g(y[p], O.outdatedDependencies[p]));
          A && (g(b, [O.moduleId]), (x[p] = C));
        }
      var L,
        D = [];
      for (l = 0; l < b.length; l++)
        (p = b[l]),
          T[p] &&
            T[p].hot._selfAccepted &&
            x[p] !== C &&
            !T[p].hot._selfInvalidated &&
            D.push({
              module: p,
              parents: T[p].parents.slice(),
              errorHandler: T[p].hot._selfAccepted,
            });
      h("dispose"),
        Object.keys(w).forEach(function (e) {
          !1 === w[e] &&
            (function (e) {
              delete installedChunks[e];
            })(e);
        });
      var B,
        j,
        V = b.slice();
      for (; V.length > 0; )
        if (((p = V.pop()), (u = T[p]))) {
          var N = {},
            F = u.hot._disposeHandlers;
          for (c = 0; c < F.length; c++) (a = F[c])(N);
          for (
            s[p] = N, u.hot.active = !1, delete T[p], delete y[p], c = 0;
            c < u.children.length;
            c++
          ) {
            var $ = T[u.children[c]];
            $ && (L = $.parents.indexOf(p)) >= 0 && $.parents.splice(L, 1);
          }
        }
      for (p in y)
        if (Object.prototype.hasOwnProperty.call(y, p) && (u = T[p]))
          for (j = y[p], c = 0; c < j.length; c++)
            (B = j[c]),
              (L = u.children.indexOf(B)) >= 0 && u.children.splice(L, 1);
      h("apply"), void 0 !== f && ((r = f), (f = void 0));
      for (p in ((m = void 0), x))
        Object.prototype.hasOwnProperty.call(x, p) && (e[p] = x[p]);
      var z = null;
      for (p in y)
        if (Object.prototype.hasOwnProperty.call(y, p) && (u = T[p])) {
          j = y[p];
          var R = [];
          for (l = 0; l < j.length; l++)
            if (((B = j[l]), (a = u.hot._acceptedDependencies[B]))) {
              if (-1 !== R.indexOf(a)) continue;
              R.push(a);
            }
          for (l = 0; l < R.length; l++) {
            a = R[l];
            try {
              a(j);
            } catch (e) {
              i.onErrored &&
                i.onErrored({
                  type: "accept-errored",
                  moduleId: p,
                  dependencyId: j[l],
                  error: e,
                }),
                i.ignoreErrored || z || (z = e);
            }
          }
        }
      for (l = 0; l < D.length; l++) {
        var H = D[l];
        (p = H.module), (o = H.parents), (n = p);
        try {
          S(p);
        } catch (e) {
          if ("function" == typeof H.errorHandler)
            try {
              H.errorHandler(e);
            } catch (t) {
              i.onErrored &&
                i.onErrored({
                  type: "self-accept-error-handler-errored",
                  moduleId: p,
                  error: t,
                  originalError: e,
                }),
                i.ignoreErrored || z || (z = t),
                z || (z = e);
            }
          else
            i.onErrored &&
              i.onErrored({
                type: "self-accept-errored",
                moduleId: p,
                error: e,
              }),
              i.ignoreErrored || z || (z = e);
        }
      }
      if (z) return h("fail"), Promise.reject(z);
      if (v)
        return t(i).then(function (e) {
          return (
            b.forEach(function (t) {
              e.indexOf(t) < 0 && e.push(t);
            }),
            e
          );
        });
      return (
        h("idle"),
        new Promise(function (e) {
          e(b);
        })
      );
    })((t = t || {}));
  }
  function I() {
    if (v) return m || (m = {}), v.forEach(M), (v = void 0), !0;
  }
  function M(t) {
    Object.prototype.hasOwnProperty.call(m, t) || (m[t] = e[t]);
  }
  var T = {};
  function S(t) {
    if (T[t]) return T[t].exports;
    var n = (T[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: c(t),
      parents: ((a = o), (o = []), a),
      children: [],
    });
    return e[t].call(n.exports, n, n.exports, l(t)), (n.l = !0), n.exports;
  }
  (S.m = e),
    (S.c = T),
    (S.d = function (e, t, n) {
      S.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (S.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (S.t = function (e, t) {
      if ((1 & t && (e = S(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (S.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          S.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (S.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return S.d(t, "a", t), t;
    }),
    (S.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (S.p = ""),
    (S.h = function () {
      return r;
    }),
    l(3)((S.s = 3));
})([
  function (e, t, n) {
    !(function (e, t, n) {
      "use strict";
      function i(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var r = i(t),
        s = i(n);
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function c(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e;
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t &&
            (function (e, t) {
              (
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                }
              )(e, t);
            })(e, t);
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function v(e, t) {
        return !t || ("object" != typeof t && "function" != typeof t)
          ? f(e)
          : t;
      }
      function g(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = m(e);
          if (t) {
            var r = m(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return v(this, n);
        };
      }
      function y(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = m(e));

        );
        return e;
      }
      function b(e, t, n) {
        return (b =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var i = y(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      function x(e, t, n, i) {
        return (x =
          "undefined" != typeof Reflect && Reflect.set
            ? Reflect.set
            : function (e, t, n, i) {
                var r,
                  s = y(e, t);
                if (s) {
                  if ((r = Object.getOwnPropertyDescriptor(s, t)).set)
                    return r.set.call(i, n), !0;
                  if (!r.writable) return !1;
                }
                if ((r = Object.getOwnPropertyDescriptor(i, t))) {
                  if (!r.writable) return !1;
                  (r.value = n), Object.defineProperty(i, t, r);
                } else u(i, t, n);
                return !0;
              })(e, t, n, i);
      }
      function w(e, t, n, i, r) {
        if (!x(e, t, n, i || e) && r) throw new Error("failed to set property");
        return n;
      }
      function k(e, t) {
        return (
          E(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                i = !0,
                r = !1,
                s = void 0;
              try {
                for (
                  var o, a = e[Symbol.iterator]();
                  !(i = (o = a.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (s = e);
              } finally {
                try {
                  i || null == a.return || a.return();
                } finally {
                  if (r) throw s;
                }
              }
              return n;
            }
          })(e, t) ||
          P(e, t) ||
          M()
        );
      }
      function C(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return I(e);
          })(e) ||
          O(e) ||
          P(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function E(e) {
        if (Array.isArray(e)) return e;
      }
      function O(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }
      function P(e, t) {
        if (e) {
          if ("string" == typeof e) return I(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? I(e, t)
              : void 0
          );
        }
      }
      function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function M() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function T(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t);
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      function S(e, t, n, i) {
        var r = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  t.kind === n &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var n = e.prototype;
              ["method", "field"].forEach(function (i) {
                t.forEach(function (t) {
                  var r = t.placement;
                  if (t.kind === i && ("static" === r || "prototype" === r)) {
                    var s = "static" === r ? e : n;
                    this.defineClassElement(s, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var i = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === i ? void 0 : i.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function (e, t) {
              var n = [],
                i = [],
                r = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, r);
                }, this),
                e.forEach(function (e) {
                  if (!L(e)) return n.push(e);
                  var t = this.decorateElement(e, r);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    i.push.apply(i, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: i };
              var s = this.decorateConstructor(n, t);
              return i.push.apply(i, s.finishers), (s.finishers = i), s;
            },
            addElementPlacement: function (e, t, n) {
              var i = t[e.placement];
              if (!n && -1 !== i.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              i.push(e.key);
            },
            decorateElement: function (e, t) {
              for (
                var n = [], i = [], r = e.decorators, s = r.length - 1;
                s >= 0;
                s--
              ) {
                var o = t[e.placement];
                o.splice(o.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, r[s])(a) || a);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && i.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var u = 0; u < c.length; u++)
                    this.addElementPlacement(c[u], t);
                  n.push.apply(n, c);
                }
              }
              return { element: e, finishers: i, extras: n };
            },
            decorateConstructor: function (e, t) {
              for (var n = [], i = t.length - 1; i >= 0; i--) {
                var r = this.fromClassDescriptor(e),
                  s = this.toClassDescriptor((0, t[i])(r) || r);
                if (
                  (void 0 !== s.finisher && n.push(s.finisher),
                  void 0 !== s.elements)
                ) {
                  e = s.elements;
                  for (var o = 0; o < e.length - 1; o++)
                    for (var a = o + 1; a < e.length; a++)
                      if (
                        e[o].key === e[a].key &&
                        e[o].placement === e[a].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[o].key + ")"
                        );
                }
              }
              return { elements: e, finishers: n };
            },
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e), E(t) || O(t) || P(t) || M()).map(function (e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var n = T(e.key),
                i = String(e.placement);
              if ("static" !== i && "prototype" !== i && "own" !== i)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    i +
                    '"'
                );
              var r = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var s = {
                kind: t,
                key: n,
                placement: i,
                descriptor: Object.assign({}, r),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      r,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (s.initializer = e.initializer)),
                s
              );
            },
            toElementFinisherExtras: function (e) {
              return {
                element: this.toElementDescriptor(e),
                finisher: B(e, "finisher"),
                extras: this.toElementDescriptors(e.extras),
              };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var n = B(e, "finisher");
              return {
                elements: this.toElementDescriptors(e.elements),
                finisher: n,
              };
            },
            runClassFinishers: function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = (0, t[n])(e);
                if (void 0 !== i) {
                  if ("function" != typeof i)
                    throw new TypeError("Finishers must return a constructor.");
                  e = i;
                }
              }
              return e;
            },
            disallowProperty: function (e, t, n) {
              if (void 0 !== e[t])
                throw new TypeError(n + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (i) for (var s = 0; s < i.length; s++) r = i[s](r);
        var o = t(function (e) {
            r.initializeInstanceElements(e, a.elements);
          }, n),
          a = r.decorateClass(
            (function (e) {
              for (
                var t = [],
                  n = function (e) {
                    return (
                      "method" === e.kind &&
                      e.key === s.key &&
                      e.placement === s.placement
                    );
                  },
                  i = 0;
                i < e.length;
                i++
              ) {
                var r,
                  s = e[i];
                if ("method" === s.kind && (r = t.find(n)))
                  if (D(s.descriptor) || D(r.descriptor)) {
                    if (L(s) || L(r))
                      throw new ReferenceError(
                        "Duplicated methods (" + s.key + ") can't be decorated."
                      );
                    r.descriptor = s.descriptor;
                  } else {
                    if (L(s)) {
                      if (L(r))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            s.key +
                            ")."
                        );
                      r.decorators = s.decorators;
                    }
                    _(s, r);
                  }
                else t.push(s);
              }
              return t;
            })(o.d.map(A)),
            e
          );
        return (
          r.initializeClassElements(o.F, a.elements),
          r.runClassFinishers(o.F, a.finishers)
        );
      }
      function A(e) {
        var t,
          n = T(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = { set: e.value, configurable: !0, enumerable: !1 })
          : "field" === e.kind &&
            (t = { configurable: !0, writable: !0, enumerable: !0 });
        var i = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (i.decorators = e.decorators),
          "field" === e.kind && (i.initializer = e.value),
          i
        );
      }
      function _(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function L(e) {
        return e.decorators && e.decorators.length;
      }
      function D(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function B(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      var j = [
          {
            key: "info",
            style: "color: #666;",
            level: 5,
            consoleMethod: "log",
          },
          {
            key: "notice",
            style: "background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",
            level: 4,
            consoleMethod: "log",
          },
          {
            key: "warning",
            style: "color: black; background: orange;",
            level: 2,
            consoleMethod: "warn",
          },
          {
            key: "error",
            style: "color: black; background: red;",
            level: 1,
            consoleMethod: "error",
          },
        ],
        V = "data-motorcortex2-id",
        N = "closed",
        F = "MotorCortex",
        $ = {
          staggerPreface: "@stagger",
          mathExpPreface: "@expression",
          attibuteValue: "@attribute",
          patternValue: "@pattern",
          dynamicDuration: "dynamic",
          totalElements: "total",
          elementIndex: "index",
          initParams: "initParams",
        };
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      var z = new window.AudioContext();
      function R(e) {
        return "number" == typeof e && isFinite(e);
      }
      function H(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }
      function q(e) {
        return "string" == typeof e || e instanceof String;
      }
      function G(e) {
        return "object" === o(e);
      }
      function W(e) {
        return e && "[object Function]" === {}.toString.call(e);
      }
      function U(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var J = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi");
      function K(e) {
        if (null === e && void 0 === e)
          return { result: !0, analysis: { width: null, height: null } };
        if (!G(e))
          return {
            result: !1,
            errors: [
              'originalDims should be an object containing the "width" and "height" keys',
            ],
          };
        if (
          !Object.prototype.hasOwnProperty.call(e, "width") ||
          !Object.prototype.hasOwnProperty.call(e, "height")
        )
          return {
            result: !1,
            errors: [
              'originalDims should be an object containing both the "width" and "height" keys',
            ],
          };
        if (!q(e.width))
          return {
            result: !1,
            errors: ["originalDims.width should be defined either on px or %."],
          };
        if (!q(e.height))
          return {
            result: !1,
            errors: [
              "originalDims.height should be defined either on px or %.",
            ],
          };
        var t = e.width.match(J)[0],
          n = e.width.substring(t.length);
        if (!R(Number(t)) || ("%" !== n && "px" !== n))
          return {
            result: !1,
            errors: ["originalDims.width should be defined either on px or %."],
          };
        var i = e.height.match(J)[0],
          r = e.height.substring(i.length);
        return !R(Number(i)) || ("%" != r && "px" != r)
          ? {
              result: !1,
              errors: [
                "originalDims.heigth should be defined either on px or %.",
              ],
            }
          : { result: !0, analysis: X(e) };
      }
      function X(e) {
        var t = null,
          n = null;
        if (G(e) && null != e) {
          if (Object.prototype.hasOwnProperty.call(e, "width") && q(e.width)) {
            var i = e.width.match(J)[0],
              r = e.width.substring(i.length);
            !R(Number(i)) ||
              ("%" !== r && "px" !== r) ||
              (t = { number: Number(i), unit: r });
          }
          if (
            Object.prototype.hasOwnProperty.call(e, "height") &&
            q(e.height)
          ) {
            var s = e.height.match(J)[0],
              o = e.height.substring(s.length);
            !R(Number(s)) ||
              ("%" !== o && "px" !== o) ||
              (n = { number: Number(s), unit: o });
          }
        }
        return { width: t, height: n };
      }
      function Q(e) {
        var t = e.replace(/ /g, "");
        return /.*\((.*)\).*/.exec(t)[1].split(",");
      }
      function Z(e, t) {
        return Math.round(e / t) * t;
      }
      function Y(e) {
        var t = e.split("___");
        return { mcid: t[0], attribute: t[1] };
      }
      function ee() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function te() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = e ? "_" : "-";
        return ""
          .concat(ee())
          .concat(ee())
          .concat(t)
          .concat(ee())
          .concat(t)
          .concat(ee());
      }
      function ne(e, t) {
        return "".concat(e).concat("___").concat(t);
      }
      function ie(e, t, n) {
        for (var i = t.split("."), r = e, s = 0; s < i.length - 1; s++) {
          if (!Object.prototype.hasOwnProperty.call(r, i[s])) return !1;
          r = r[i[s]];
        }
        return (
          !!Object.prototype.hasOwnProperty.call(r, i[i.length - 1]) &&
          ((r[i[i.length - 1]] = n), !0)
        );
      }
      var re = new ((function () {
        function e(t) {
          a(this, e);
          var n = 2;
          t &&
            Object.prototype.hasOwnProperty.call(t, "logLevel") &&
            (n = t.logLevel);
          for (var i = 0; i < j.length; i++) {
            var r = j[i];
            n >= r.level
              ? (this[r.key] = window.console[r.consoleMethod].bind(
                  window.console,
                  "MotorCortex - ".concat(r.key, ": ")
                ))
              : (this[r.key] = function () {});
          }
          this.log =
            n >= 3
              ? window.console.log.bind(window.console, "MotorCortex - ")
              : function () {};
        }
        return (
          c(e, [
            {
              key: "validateProps",
              value: function (e, t, n) {
                var i = t(e);
                if (i.length > 0) {
                  for (
                    var r = "Error on plugin's \""
                        .concat(n.plugin_npm_name, '" "')
                        .concat(
                          n.ClassName,
                          '" instantiation. Errors (op props):'
                        ),
                      s = 0;
                    s < i.length;
                    s++
                  )
                    r += "\n - "
                      .concat(i[s].message, ". ")
                      .concat(i[s].actual, " provided");
                  return this.error(r), { result: !1, errors: i };
                }
                return { result: !0 };
              },
            },
            {
              key: "getElementByMCID",
              value: function (e, t) {
                return e.rootElement.querySelectorAll(
                  "[".concat(V, '="').concat(t, '"]')
                )[0];
              },
            },
            {
              key: "buildInitialValuesValidationRules",
              value: function (e) {
                var t = JSON.parse(JSON.stringify(e));
                return (
                  (function e(t) {
                    if (
                      (("string" == typeof t || t instanceof String) &&
                        (t = { type: t }),
                      (t.optional = !0),
                      "object" === t.type)
                    )
                      for (var n in t.props) e(t.props[n]);
                  })(t),
                  t
                );
              },
            },
            {
              key: "systoleDiastoleProjections",
              value: function (e, t, n) {
                for (var i = [], r = 0; r < e.length; r++) {
                  var s = e[r],
                    o = s.parentMillisecond - n;
                  (o = o * t + n),
                    1 !== t &&
                      i.push({
                        id: s.incident.id,
                        start: o,
                        end: o + s.incident.duration * t,
                        startDelta: o - s.millisecond,
                      });
                }
                return i;
              },
            },
          ]),
          e
        );
      })())();
      function se(e) {
        return e.result
          ? { result: !0, execute: e.execute }
          : { result: !1, errors: e.errors };
      }
      var oe = (function () {
        function e(t) {
          a(this, e),
            (this.runTimeInfo = t.runTimeInfo),
            (this.context = t.context),
            this.onInitialise(),
            (this.getIncidentById = t.getIncidentById);
        }
        return (
          c(
            e,
            [
              { key: "onInitialise", value: function () {} },
              {
                key: "_resize",
                value: function () {
                  re.log("Please overwite the _resize method of the Channel");
                },
              },
              {
                key: "addIncidents",
                value: function (e) {
                  return se(this.checkAddition(e));
                },
              },
              {
                key: "editIncidents",
                value: function (e, t) {
                  return se(this.checkEdit(e, t));
                },
              },
              {
                key: "removeIncidents",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return se(this.checkDelete(e, t));
                },
              },
              { key: "recalcScratchValues", value: function (e) {} },
              {
                key: "checkAddition",
                value: function (e) {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "checkEdit",
                value: function (e, t) {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "checkDelete",
                value: function (e) {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "checkResizedIncidents",
                value: function (e) {
                  return { result: !0, execute: function () {} };
                },
              },
              { key: "moveTo", value: function (e, t, n) {} },
            ],
            [
              {
                key: "type",
                get: function () {
                  return "plain";
                },
              },
            ]
          ),
          e
        );
      })();
      function ae(e) {
        e.descriptor.value = function (e) {
          this.duration *= e;
        };
      }
      var le = "up",
        ce = "down",
        ue = "native.tree.bypass",
        pe = S(null, function (e) {
          return {
            F: function t() {
              var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              a(this, t),
                e(this),
                (this.parentNode = null),
                (this.isNode = !1),
                Object.prototype.hasOwnProperty.call(n, "id")
                  ? (this.id = n.id)
                  : (this.id = te()),
                (this.props = n);
            },
            d: [
              {
                kind: "get",
                key: "name",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "name"
                  )
                    ? this.props.name
                    : null;
                },
              },
              {
                kind: "set",
                key: "name",
                value: function (e) {
                  this.props.name = e;
                },
              },
              {
                kind: "get",
                key: "delay",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "delay"
                  )
                    ? this.props.delay
                    : 0;
                },
              },
              {
                kind: "set",
                key: "delay",
                value: function (e) {
                  0 !== e && (this.props.delay = e);
                },
              },
              {
                kind: "get",
                key: "hiatus",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "hiatus"
                  )
                    ? this.props.hiatus
                    : 0;
                },
              },
              {
                kind: "set",
                key: "hiatus",
                value: function (e) {
                  0 !== e && (this.props.hiatus = e);
                },
              },
              {
                kind: "get",
                key: "repeats",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "repeats"
                  )
                    ? this.props.repeats
                    : 1;
                },
              },
              {
                kind: "set",
                key: "repeats",
                value: function (e) {
                  this.props.repeats = e;
                },
              },
              {
                kind: "get",
                key: "duration",
                value: function () {
                  return (
                    this.repeats *
                    (this.delay + this.props.duration + this.hiatus)
                  );
                },
              },
              {
                kind: "set",
                key: "duration",
                value: function (e) {
                  var t = e / this.duration;
                  (this.props.duration *= t),
                    (this.hiatus *= t),
                    (this.delay *= t);
                },
              },
              {
                kind: "method",
                key: "setNewDuration",
                value: function (e) {
                  (this.duration = e),
                    this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                      selfExecute: !1,
                      direction: le,
                    });
                },
              },
              {
                kind: "method",
                decorators: [ae],
                key: "systoleDiastole",
                value: function () {},
              },
              {
                kind: "get",
                key: "hasParent",
                value: function () {
                  return null !== this.parentNode;
                },
              },
              {
                kind: "method",
                key: "attachToNode",
                value: function (e) {
                  this.parentNode = e;
                },
              },
              {
                kind: "method",
                key: "detachFromParent",
                value: function () {
                  this.parentNode = null;
                },
              },
              {
                kind: "method",
                key: "putMessageOnPipe",
                value: function (e, t, n) {
                  var i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  if (
                    (Object.prototype.hasOwnProperty.call(i, "direction") ||
                      (i.direction = ce),
                    i.direction !== ce ||
                      Object.prototype.hasOwnProperty.call(
                        i,
                        "positionDelta"
                      ) ||
                      (i.positionDelta = 0),
                    i.selfExecute)
                  ) {
                    var r = "handle".concat(U(e)),
                      s = "function" == typeof this[r];
                    if (s) {
                      var o = this[r](n, t);
                      if (o !== ue) {
                        var a = { response: o, responder: this };
                        return i.direction === le
                          ? a
                          : [
                              h(
                                h({}, a),
                                {},
                                { positionDelta: i.positionDelta }
                              ),
                            ];
                      }
                    }
                  }
                  return i.direction === le
                    ? this.hasParent
                      ? this.parentNode.putMessageOnPipe(e, t, n, {
                          selfExecute: !0,
                          direction: le,
                        })
                      : { response: !1, responder: null }
                    : [];
                },
              },
              {
                kind: "method",
                key: "bypass",
                value: function () {
                  return ue;
                },
              },
              {
                kind: "get",
                key: "positionOnPyramidion",
                value: function () {
                  return this.getPositionOnPyramidion();
                },
              },
              {
                kind: "method",
                key: "getPositionOnPyramidion",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  if (this.hasParent) {
                    var t = this.putMessageOnPipe(
                      "getPositionOnPyramidion",
                      { delta: e, id: this.id },
                      "Parent",
                      { selfExecute: !1, direction: le }
                    );
                    return t.response;
                  }
                  return e;
                },
              },
            ],
          };
        }),
        he = "Leaf has already been attached to another Node",
        de = "Negative positioning of childs on nodes is not allowed",
        me = "The Leaf with the requested id couldn't be found on the Tree",
        fe = S(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = g(i);
              function i() {
                var t,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  a(this, i),
                  (t = n.call(this, r)),
                  e(f(t)),
                  (t.isNode = !0),
                  (t.children = {}),
                  (t.calculatedDuration = 0),
                  t
                );
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return this.calculatedDuration;
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (e) {
                    var t = e / this.duration;
                    for (var n in (this.props &&
                      Object.prototype.hasOwnProperty.call(
                        this.props,
                        "duration"
                      ) &&
                      (this.props.duration = e),
                    (this.calculatedDuration = e),
                    this.children)) {
                      var i = this.children[n];
                      this.editPosition(i.id, i.position * t, !0),
                        i.leaf.systoleDiastole(t);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "setNewDuration",
                  value: function (e) {
                    (this.duration = e),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: le,
                      });
                  },
                },
                {
                  kind: "method",
                  key: "_calculateDuration",
                  value: function () {
                    var e = 0;
                    for (var t in this.children) {
                      var n = this.children[t];
                      n.position + n.leaf.duration > e &&
                        (e = n.position + n.leaf.duration);
                    }
                    return (
                      e !== this.calculatedDuration &&
                      (this.props &&
                        Object.prototype.hasOwnProperty.call(
                          this.props,
                          "duration"
                        ) &&
                        (this.props.duration = e),
                      (this.calculatedDuration = e),
                      !0)
                    );
                  },
                },
                {
                  kind: "method",
                  decorators: [ae],
                  key: "systoleDiastole",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "handleRecalcDuration",
                  value: function (e, t) {
                    return (
                      !this._calculateDuration() ||
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: le,
                      })
                    );
                  },
                },
                {
                  kind: "method",
                  key: "getLeafById",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (Object.prototype.hasOwnProperty.call(this.children, e))
                      return this.children[e].leaf;
                    if (t) return null;
                    for (var n in this.children) {
                      var i = this.children[n].leaf;
                      if (i.isNode) {
                        var r = i.getLeafById(e);
                        if (null != r) return r;
                      }
                    }
                    return null;
                  },
                },
                {
                  kind: "method",
                  key: "getLeafPosition",
                  value: function (e) {
                    if (Object.prototype.hasOwnProperty.call(this.children, e))
                      return this.children[e].position;
                    var t = this.putMessageOnPipe(
                      "getLeafPosition",
                      { id: e },
                      "Groups",
                      { selfExecute: !1, direction: ce }
                    );
                    return t.length > 0
                      ? t[0].positionDelta + t[0].response
                      : void 0;
                  },
                },
                {
                  kind: "method",
                  key: "handleGetLeafPosition",
                  value: function (e, t) {
                    return this.getLeafPosition(t.id);
                  },
                },
                {
                  kind: "method",
                  key: "checkAddition",
                  value: function (e, t) {
                    return e.hasParent
                      ? { result: !1, reason: he }
                      : t < 0
                      ? { result: !1, reason: de }
                      : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "addChild",
                  value: function (e, t) {
                    return e.hasParent
                      ? { result: !1, reason: he }
                      : ((this.children[e.id] = {
                          id: e.id,
                          leaf: e,
                          position: t,
                        }),
                        e.attachToNode(this),
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !0,
                          direction: le,
                        }),
                        { result: !0 });
                  },
                },
                {
                  kind: "method",
                  key: "checkRemoveChild",
                  value: function (e) {
                    return Object.prototype.hasOwnProperty.call(
                      this.children,
                      e
                    )
                      ? { result: !0 }
                      : { result: !1, reason: me };
                  },
                },
                {
                  kind: "method",
                  key: "removeChild",
                  value: function (e) {
                    return (
                      this.children[e].leaf.detachFromParent(),
                      delete this.children[e],
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "checkEditPosition",
                  value: function (e, t) {
                    return t < 0
                      ? { result: !1, reason: de }
                      : Object.prototype.hasOwnProperty.call(this.children, e)
                      ? { result: !0 }
                      : { result: !1, reason: me };
                  },
                },
                {
                  kind: "method",
                  key: "editPosition",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if (Object.prototype.hasOwnProperty.call(this.children, e))
                      return (
                        (this.children[e].position = t),
                        n ||
                          this.putMessageOnPipe(
                            "recalcDuration",
                            {},
                            "Groups",
                            { selfExecute: !0, direction: le }
                          ),
                        { result: !0 }
                      );
                  },
                },
                {
                  kind: "method",
                  key: "putMessageOnPipe",
                  value: function (e, t, i) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    if (
                      (Object.prototype.hasOwnProperty.call(r, "direction") ||
                        (r.direction = ce),
                      r.direction !== ce ||
                        Object.prototype.hasOwnProperty.call(
                          r,
                          "positionDelta"
                        ) ||
                        (r.positionDelta = 0),
                      r.direction === le)
                    )
                      return b(m(n.prototype), "putMessageOnPipe", this).call(
                        this,
                        e,
                        t,
                        i,
                        r
                      );
                    var s = b(m(n.prototype), "putMessageOnPipe", this).call(
                      this,
                      e,
                      t,
                      i,
                      r
                    );
                    if (s.length > 0) return s;
                    for (var o in this.children) {
                      var a = this.children[o].leaf,
                        l = h(
                          h({}, r),
                          {},
                          {
                            selfExecute: !0,
                            positionDelta:
                              r.positionDelta + this.children[o].position,
                          }
                        );
                      s.push.apply(s, C(a.putMessageOnPipe(e, t, i, l)));
                    }
                    return s;
                  },
                },
                {
                  kind: "method",
                  key: "handleGetPositionOnPyramidion",
                  value: function (e, t) {
                    var n = t.delta + this.getLeafPosition(t.id);
                    return this.getPositionOnPyramidion(n);
                  },
                },
              ],
            };
          },
          pe
        );
      function ve(e) {
        e.descriptor.value = function (e) {
          void 0 === this.blockID && (this.blockID = te()),
            this.DescriptiveIncident.putMessageOnPipe(
              "setBlock",
              {
                id: this.blockID,
                description: e,
                incidentId: this.DescriptiveIncident.id,
                realIncidentId: this.id,
              },
              "rootClip",
              { selfExecute: !0, direction: le }
            );
        };
      }
      function ge(e) {
        e.descriptor.value = function () {
          this.DescriptiveIncident.putMessageOnPipe(
            "unBlock",
            { id: this.blockID },
            "rootClip",
            { selfExecute: !0, direction: le }
          );
        };
      }
      var ye = S(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = g(i);
              function i(t, r) {
                var s;
                return (
                  a(this, i),
                  (s = n.call(this, r)),
                  e(f(s)),
                  (s.mc_plugin_npm_name = "motor-cortex-js"),
                  (s.plugin_channel_class = oe),
                  (s.hasIncidents = !0),
                  s.onGroupInitialise(),
                  (s.calculatedDuration = 0),
                  s
                );
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "method",
                  key: "onGroupInitialise",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "handleAddIncident",
                  value: function (e, t) {
                    if (this.id === e) {
                      var n = (0, t.incidentFromDescription)(
                        t.incident,
                        t.contextData,
                        t.audio
                      );
                      return null === n ? this.bypass() : n;
                    }
                    return this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "handleMoveIncident",
                  value: function (e, t) {
                    if (this.id === e) {
                      var n = this.getLeafById(t.incidentId, !0);
                      return null === n ? this.bypass() : n;
                    }
                    return this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "handleRemoveIncident",
                  value: function (e, t) {
                    if (this.id === e) {
                      var n = this.getLeafById(t.incidentId, !0);
                      return null === n ? this.bypass() : n;
                    }
                    return this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "handleResize",
                  value: function (e) {
                    return this.id === e ? this : this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "removeChild",
                  value: function (e) {
                    this.children[e].leaf.lastWish(),
                      b(m(n.prototype), "removeChild", this).call(this, e);
                  },
                },
                {
                  kind: "method",
                  key: "getIncidentsByChannel",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n = {};
                    for (var i in ((n["motor-cortex-js"] = [
                      {
                        millisecond: e,
                        parentMillisecond: t,
                        incident: this,
                        id: this.id,
                      },
                    ]),
                    this.children)) {
                      var r = this.children[i],
                        s = r.leaf.getIncidentsByChannel(e + r.position, e);
                      for (var o in s)
                        Object.prototype.hasOwnProperty.call(n, o)
                          ? (n[o] = n[o].concat(s[o]))
                          : (n[o] = s[o]);
                    }
                    return n;
                  },
                },
                {
                  kind: "method",
                  key: "lastWish",
                  value: function () {
                    for (var e in this.children)
                      this.children[e].leaf.lastWish();
                  },
                },
                {
                  kind: "method",
                  decorators: [ve],
                  key: "setBlock",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [ge],
                  key: "unblock",
                  value: function () {},
                },
              ],
            };
          },
          fe
        ),
        be = (function (e) {
          d(n, e);
          var t = g(n);
          function n() {
            return a(this, n), t.apply(this, arguments);
          }
          return (
            c(n, [
              {
                key: "onInitialise",
                value: function () {
                  (this.incidents = []), (this.incidentsById = {});
                },
              },
              {
                key: "_incidentById",
                value: function (e) {
                  return this.incidentsById[e];
                },
              },
              {
                key: "_resize",
                value: function (e) {
                  for (var t = 0; t < this.incidents.length; t++)
                    this.incidents[t].millisecond *= e;
                },
              },
              {
                key: "checkAddition",
                value: function (e) {
                  for (var t = [], n = {}, i = [], r = 0; r < e.length; r++)
                    (n[e[r].id] = e[r].incident),
                      i.push({ id: e[r].id, millisecond: e[r].millisecond }),
                      Object.prototype.hasOwnProperty.call(
                        this.incidentsById,
                        e[r].id
                      ) &&
                        (re.error(
                          "Incident with the id ".concat(
                            e[r].id,
                            " already exists. Addition is rejected."
                          )
                        ),
                        t.push({
                          type: "Already existing id",
                          meta: { id: e[r].id },
                        }));
                  if (t.length > 0) return { result: !1, errors: t };
                  var s = this;
                  return {
                    result: !0,
                    execute: function () {
                      var t;
                      (s.incidentsById = Object.assign(s.incidentsById, n)),
                        (t = s.incidents).push.apply(t, i),
                        s.incidents.sort(function (e, t) {
                          return e.millisecond - t.millisecond;
                        });
                      for (var r = 0; r < e.length; r++)
                        s._incidentById(e[r].id)._onGetContextOnce(s.context);
                    },
                  };
                },
              },
              {
                key: "checkEdit",
                value: function (e, t) {
                  var n = this.incidents;
                  return {
                    result: !0,
                    execute: function () {
                      for (var i, r = 0; r < e.length; r++) {
                        i = e[r].id;
                        for (var s = 0; s < n.length; s++)
                          if (n[s].id === i) {
                            n[s].millisecond += t;
                            break;
                          }
                      }
                      n.sort(function (e, t) {
                        return e.millisecond - t.millisecond;
                      });
                    },
                  };
                },
              },
              {
                key: "checkDelete",
                value: function (e) {
                  for (var t = this, n = [], i = 0; i < e.length; i++)
                    n.push(e[i].id);
                  return {
                    result: !0,
                    execute: function () {
                      var e = t.incidents.filter(function (e) {
                        return !n.includes(e.id);
                      });
                      t.incidents = e;
                      for (var i = 0; i < n.length; i++)
                        delete t.incidentsById[n[i]];
                    },
                  };
                },
              },
              {
                key: "checkResizedIncidents",
                value: function (e) {
                  var t = this.incidents;
                  return {
                    result: !0,
                    execute: function () {
                      for (var n, i = 0; i < e.length; i++) {
                        n = e[i].id;
                        for (var r = 0; r < t.length; r++)
                          if (t[r].id === n) {
                            t[r].millisecond += e[i].startDelta;
                            break;
                          }
                      }
                      t.sort(function (e, t) {
                        return e.millisecond - t.millisecond;
                      });
                    },
                  };
                },
              },
              {
                key: "moveTo",
                value: function (e, t, n) {
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  if (i)
                    for (var r = 0; r < this.incidents.length; r++) {
                      var s = this.incidents[r],
                        o = this._incidentById(s.id);
                      t < s.millisecond
                        ? o.onProgress(0, 0, n, !0)
                        : t > s.millisecond + o.duration
                        ? o.onProgress(1, o.duration, n, !0)
                        : o.onProgress(
                            (t - s.millisecond) / o.duration,
                            t - s.millisecond,
                            n,
                            !0
                          );
                    }
                  else {
                    var a,
                      l = this;
                    a =
                      t > e
                        ? this.incidents.filter(function (n) {
                            return (
                              (n.millisecond + l._incidentById(n.id).duration >=
                                e &&
                                n.millisecond +
                                  l._incidentById(n.id).duration <=
                                  t) ||
                              (l._incidentById(n.id).duration + n.millisecond >=
                                t &&
                                n.millisecond <= t)
                            );
                          })
                        : this.incidents.filter(function (n) {
                            return (
                              (n.millisecond + l._incidentById(n.id).duration >=
                                t &&
                                n.millisecond +
                                  l._incidentById(n.id).duration <=
                                  e) ||
                              (l._incidentById(n.id).duration + n.millisecond >=
                                e &&
                                n.millisecond <= e)
                            );
                          });
                    for (var c = 0; c < a.length; c++) {
                      var u = a[c],
                        p = this._incidentById(u.id),
                        h = (t - u.millisecond) / p.duration >= 1,
                        d = h ? 1 : (t - u.millisecond) / p.duration,
                        m = h ? p.duration : t - u.millisecond;
                      p.onProgress(d, m, n, !1);
                    }
                  }
                },
              },
            ]),
            n
          );
        })(oe),
        xe = "function" == typeof Float32Array;
      function we(e, t) {
        return 1 - 3 * t + 3 * e;
      }
      function ke(e, t) {
        return 3 * t - 6 * e;
      }
      function Ce(e) {
        return 3 * e;
      }
      function Ee(e, t, n) {
        return ((we(t, n) * e + ke(t, n)) * e + Ce(t)) * e;
      }
      function Oe(e, t, n) {
        return 3 * we(t, n) * e * e + 2 * ke(t, n) * e + Ce(t);
      }
      function Pe(e) {
        return e;
      }
      var Ie = function (e, t, n, i) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1))
          throw new Error("bezier x values must be in [0, 1] range");
        if (e === t && n === i) return Pe;
        for (
          var r = xe ? new Float32Array(11) : new Array(11), s = 0;
          s < 11;
          ++s
        )
          r[s] = Ee(0.1 * s, e, n);
        function o(t) {
          for (var i = 0, s = 1; 10 !== s && r[s] <= t; ++s) i += 0.1;
          --s;
          var o = i + ((t - r[s]) / (r[s + 1] - r[s])) * 0.1,
            a = Oe(o, e, n);
          return a >= 0.001
            ? (function (e, t, n, i) {
                for (var r = 0; r < 4; ++r) {
                  var s = Oe(t, n, i);
                  if (0 === s) return t;
                  t -= (Ee(t, n, i) - e) / s;
                }
                return t;
              })(t, o, e, n)
            : 0 === a
            ? o
            : (function (e, t, n, i, r) {
                var s,
                  o,
                  a = 0;
                do {
                  (s = Ee((o = t + (n - t) / 2), i, r) - e) > 0
                    ? (n = o)
                    : (t = o);
                } while (Math.abs(s) > 1e-7 && ++a < 10);
                return o;
              })(t, i, i + 0.1, e, n);
        }
        return function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : Ee(o(e), t, i);
        };
      };
      function Me(e) {
        e.descriptor.value = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = {};
          return (
            (n[this.mc_plugin_npm_name] = [
              {
                millisecond: e,
                parentMillisecond: t,
                incident: this,
                id: this.id,
              },
            ]),
            n
          );
        };
      }
      var Te = S(null, function (e) {
          return {
            F: function t() {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = arguments.length > 2 ? arguments[2] : void 0;
              a(this, t),
                e(this),
                (this.attrs = n),
                (this.props = i),
                (this.dna = r),
                (this.context = r.context),
                (this.mcid = r.mcid),
                (this.id = i.id || te()),
                (this.modelId = i.modelId),
                (this.gotContext = !1),
                (this.plugin_channel_class = oe),
                (this.mc_plugin_npm_name = "motor-cortex-js"),
                Object.prototype.hasOwnProperty.call(
                  i,
                  "plugin_channel_class"
                ) && (this.plugin_channel_class = i.plugin_channel_class),
                Object.prototype.hasOwnProperty.call(i, "mc_plugin_npm_name") &&
                  (this.mc_plugin_npm_name = i.mc_plugin_npm_name),
                (this.hasIncidents = !1),
                (this.initialValues = {}),
                (this.userDefinedInitialValues = n.initialValues || {}),
                (this.pureInitialValues = null),
                (this.autoGenerated = !1),
                this.onInitialise();
            },
            d: [
              {
                kind: "get",
                key: "selector",
                value: function () {
                  return this.props.selector;
                },
              },
              {
                kind: "get",
                key: "animAttributes",
                value: function () {
                  return this.attrs.animatedAttrs;
                },
              },
              {
                kind: "set",
                key: "animAttributes",
                value: function (e) {
                  this.attrs.animatedAttrs[this.attributeKey] = e;
                },
              },
              {
                kind: "method",
                key: "getScratchValue",
                value: function () {
                  return 0;
                },
              },
              {
                kind: "get",
                key: "element",
                value: function () {
                  return null === this.context
                    ? []
                    : this.context.getElementByMCID
                    ? this.context.getElementByMCID(this.mcid)
                    : this.context.getElements(this.selector)[0];
                },
              },
              {
                kind: "get",
                key: "attributeKey",
                value: function () {
                  return Object.keys(this.attrs.animatedAttrs)[0];
                },
              },
              {
                kind: "get",
                key: "targetValue",
                value: function () {
                  return this.animAttributes[this.attributeKey];
                },
              },
              {
                kind: "method",
                key: "getElementAttribute",
                value: function (e) {
                  return this.element.getAttribute(e);
                },
              },
              {
                kind: "method",
                decorators: [Me],
                key: "getIncidentsByChannel",
                value: function () {},
              },
              {
                kind: "method",
                key: "hasUserDefinedInitialValue",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.userDefinedInitialValues,
                    this.attributeKey
                  );
                },
              },
              {
                kind: "method",
                key: "setInitialValue",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  if (
                    (t &&
                      (this.pureInitialValues = JSON.parse(JSON.stringify(e))),
                    this.hasUserDefinedInitialValue())
                  )
                    if (G(this.targetValue)) {
                      for (var n in this.userDefinedInitialValues[
                        this.attributeKey
                      ])
                        e[n] = this.userDefinedInitialValues[this.attributeKey][
                          n
                        ];
                      this.initialValues[this.attributeKey] = e;
                    } else
                      this.initialValues[
                        this.attributeKey
                      ] = this.userDefinedInitialValues[this.attributeKey];
                  else this.initialValues[this.attributeKey] = e;
                },
              },
              {
                kind: "get",
                key: "initialValue",
                value: function () {
                  return this.initialValues[this.attributeKey];
                },
              },
              {
                kind: "method",
                key: "_onGetContextOnce",
                value: function () {
                  try {
                    if (!0 === this.context.fragment) return;
                    this.gotContext ||
                      (this.onGetContext(), (this.gotContext = !0));
                  } catch (e) {
                    re.error(e), re.error(this.mcid);
                  }
                },
              },
              {
                kind: "method",
                key: "onGetContext",
                value: function () {
                  re.info(
                    'Overwritte the "onGetContext" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "lastWish", value: function () {} },
              {
                kind: "method",
                key: "onInitialise",
                value: function () {
                  re.info(
                    'Overwritte the "onInialise" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "onProgress", value: function (e, t) {} },
              {
                kind: "method",
                decorators: [ve],
                key: "setBlock",
                value: function () {},
              },
              {
                kind: "method",
                decorators: [ge],
                key: "unblock",
                value: function () {},
              },
            ],
          };
        }),
        Se = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e, i, r) {
            var s;
            return (
              a(this, n),
              ((s = t.call(this, e, i, r)).runTimeInfo = {
                currentMillisecond: 0,
              }),
              s
            );
          }
          return (
            c(n, [
              {
                key: "duration",
                get: function () {
                  return this.DescriptiveIncident.realClip.duration;
                },
                set: function (e) {
                  this.DescriptiveIncident.realClip._resize(
                    e / this.realClip.duration
                  );
                },
              },
              {
                key: "lastWish",
                value: function () {
                  this.ownClip && this.ownClip.ownContext.unmount();
                },
              },
              {
                key: "onGetContext",
                value: function () {
                  var e = this,
                    t = this.DescriptiveIncident.realClip.exportConstructionArguments(),
                    n = re.getElementByMCID(this.context, this.mcid),
                    i = h(
                      h({}, t.props),
                      {},
                      {
                        selector: void 0,
                        host: n,
                        containerParams:
                          this.DescriptiveIncident.props.containerParams || {},
                        originalDims:
                          this.DescriptiveIncident.constructor.originalDims ||
                          {},
                      }
                    );
                  (this.ownClip = new this.DescriptiveIncident.constructor.Incident(
                    t.attrs,
                    i
                  )),
                    (this.ownClip.DescriptiveIncident = this.DescriptiveIncident),
                    this.DescriptiveIncident.realClip.addContext(
                      {
                        clipId: this.id,
                        context: this.ownClip.context,
                        unblock: function () {
                          return e.unblock();
                        },
                      },
                      !0
                    );
                },
              },
              {
                key: "onProgress",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  if (
                    !1 !==
                    this.DescriptiveIncident.realClip.context.contextLoaded
                  ) {
                    for (var i in this.DescriptiveIncident.realClip
                      .instantiatedChannels) {
                      var r = this.DescriptiveIncident.realClip
                        .instantiatedChannels[i];
                      r.moveTo(
                        this.runTimeInfo.currentMillisecond,
                        t,
                        this.id,
                        n
                      );
                    }
                    (this.runTimeInfo.currentMillisecond = t),
                      this.ownClip.onAfterProgress(e, t);
                  } else this.setBlock();
                },
              },
            ]),
            n
          );
        })(Te);
      function Ae(e) {
        var t = new e.Incident(
          e.attrs,
          h(h({}, e.props), {}, { id: e.id || te() }),
          { context: e.context, mcid: e.mcid }
        );
        return (
          (t.mc_plugin_npm_name = e.plugin_npm_name),
          (t.plugin_channel_class = e.Channel),
          (t.DescriptiveIncident = e.DescriptiveIncident),
          t
        );
      }
      var _e = {
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
          easeInSine: function (e) {
            return -1 * Math.cos(e * (Math.PI / 2)) + 1;
          },
          easeOutSine: function (e) {
            return Math.sin(e * (Math.PI / 2));
          },
          easeInOutSine: function (e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1);
          },
          easeInExpo: function (e) {
            return 0 == e ? 1 : 1 * Math.pow(2, 10 * (e - 1));
          },
          easeOutExpo: function (e) {
            return 1 == e ? 1 : 1 * (1 - Math.pow(2, -10 * e));
          },
          easeInOutExpo: function (e) {
            return 0 == e || 1 == e
              ? e
              : (e /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (2 - Math.pow(2, -10 * --e));
          },
          easeInCirc: function (e) {
            return e >= 1 ? e : -(Math.sqrt(1 - (e /= 1) * e) - 1);
          },
          easeOutCirc: function (e) {
            return Math.sqrt(1 - (e = e / 1 - 1) * e);
          },
          easeInOutCirc: function (e) {
            return (e /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - e * e) - 1)
              : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
          },
          easeInElastic: function (e) {
            if (0 == e || 1 == e) return e;
            var t = (0.3 / (2 * Math.PI)) * Math.asin(1);
            return (
              -Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((1 * e - t) * (2 * Math.PI)) / 0.3)
            );
          },
          easeOutElastic: function (e) {
            if (0 == e || 1 == e) return e;
            var t = (0.3 / (2 * Math.PI)) * Math.asin(1);
            return (
              Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / 0.3) +
              1
            );
          },
          easeInOutElastic: function (e) {
            if (0 == e || 1 == e) return e;
            var t = 0.3 * 1.5,
              n = (t / (2 * Math.PI)) * Math.asin(1);
            return e < 1
              ? Math.pow(2, 10 * (e -= 1)) *
                  Math.sin(((e - n) * (2 * Math.PI)) / t) *
                  -0.5
              : Math.pow(2, -10 * (e -= 1)) *
                  Math.sin(((e - n) * (2 * Math.PI)) / t) *
                  0.5 +
                  1;
          },
          easeInBack: function (e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t);
          },
          easeOutBack: function (e) {
            var t = 1.70158;
            return (e -= -1) * e * ((t + 1) * e + t) + 1;
          },
          easeInOutBack: function (e) {
            var t = 1.70158;
            return (e /= 0.5) < 1
              ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
              : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
          },
          easeInBounce: function (e) {
            return 1 - _e.easeOutBounce(1 - e);
          },
          easeOutBounce: function (e) {
            return e < 1 / 2.75
              ? 7.5625 * e * e * 1
              : e < 2 / 2.75
              ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
              : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
          },
          easeInOutBounce: function (e) {
            return e < 0.5
              ? 0.5 * _e.easeInBounce(2 * e)
              : 0.5 * (_e.easeOutBounce(2 * e - 1) + 1);
          },
        },
        Le = S(
          null,
          function (e, t) {
            return {
              F: (function (t) {
                d(i, t);
                var n = g(i);
                function i(t, r, s, o) {
                  var l;
                  return (
                    a(this, i),
                    (l = n.call(this, {
                      id: "".concat(t.incidentId, "_").concat(s),
                    })),
                    e(f(l)),
                    (l.contexts = {}),
                    (l.constructionIngredients = t),
                    (l.mcid = s),
                    (l._duration = o.realClip.duration),
                    (l.DescriptiveIncident = o),
                    (l.mc_plugin_npm_name = t.plugin_npm_name),
                    (l.plugin_channel_class = t.Channel),
                    l.addContext(r),
                    o.realClip.subscribeToDurationChange(function (e) {
                      (l._duration = e),
                        l.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !0,
                          direction: le,
                        });
                    }),
                    (l.easing = _e.linear),
                    Object.prototype.hasOwnProperty.call(
                      l.DescriptiveIncident.props,
                      "easing"
                    ) &&
                      (Array.isArray(l.DescriptiveIncident.props.easing)
                        ? (l.easing = Ie(
                            l.DescriptiveIncident.props.easing[0],
                            l.DescriptiveIncident.props.easing[1],
                            l.DescriptiveIncident.props.easing[2],
                            l.DescriptiveIncident.props.easing[3]
                          ))
                        : (l.easing = _e[l.DescriptiveIncident.props.easing])),
                    l
                  );
                }
                return i;
              })(t),
              d: [
                {
                  kind: "get",
                  key: "originalContext",
                  value: function () {
                    return this.contexts[this.originalContextKey];
                  },
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return this._duration;
                  },
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (e, t, n) {
                    var i =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      r = this.easing(e) || 0,
                      s = r * this.duration;
                    !1 !== this.originalContext.context.contextLoaded &&
                      this.contexts[n].onProgress(r, s, i);
                  },
                },
                {
                  kind: "method",
                  key: "addContext",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    0 === Object.keys(this.contexts).length &&
                      (this.originalContextKey = e.clipId);
                    var n = h(
                      h({}, this.constructionIngredients),
                      {},
                      {
                        context: e.context,
                        mcid: this.mcid,
                        Incident: Se,
                        DescriptiveIncident: this.DescriptiveIncident,
                      }
                    );
                    (this.contexts[e.clipId] = Ae(n)),
                      t && this.contexts[e.clipId]._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  key: "handleAddContext",
                  value: function (e, t) {
                    return this.addContext(t, !0), !0;
                  },
                },
                {
                  kind: "method",
                  key: "handleContextLoaded",
                  value: function (e, t) {
                    this._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  decorators: [Me],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "gotContext",
                  value: function () {
                    for (var e in this.contexts) this.contexts[e].gotContext();
                  },
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    if (!1 !== this.originalContext.contextLoaded)
                      for (var e in this.contexts)
                        this.contexts[e]._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  key: "lastWish",
                  value: function () {
                    for (var e in this.contexts) this.contexts[e].lastWish();
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    if (!1 !== this.originalContext.contextLoaded)
                      for (var e in this.contexts)
                        this.contexts[e].onGetContext();
                  },
                },
              ],
            };
          },
          pe
        ),
        De = S(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = g(i);
              function i(t, r, s, o) {
                var l;
                if (
                  (a(this, i),
                  (l = n.call(
                    this,
                    h(
                      h({}, t.props),
                      {},
                      {
                        id:
                          null !== o
                            ? ""
                                .concat(t.incidentId, "_")
                                .concat(s, "_")
                                .concat(o)
                            : "".concat(t.incidentId, "_").concat(s),
                      }
                    )
                  )),
                  e(f(l)),
                  (l.contexts = {}),
                  (l.constructionIngredients = t),
                  (l.mcid = s),
                  (l.attribute = o),
                  (l.mc_plugin_npm_name = t.plugin_npm_name),
                  (l.plugin_channel_class = t.Channel),
                  (l.DescriptiveIncident = t.DescriptiveIncident),
                  l.addContext(r),
                  null !== o)
                ) {
                  var c =
                    l.constructionIngredients.attrs.animatedAttrs[l.attribute];
                  Array.isArray(c)
                    ? (l.originalAnimatedAttributeValue = C(c))
                    : G(c)
                    ? (l.originalAnimatedAttributeValue = h({}, c))
                    : (l.originalAnimatedAttributeValue = c);
                }
                return (
                  (l.easing = _e.linear),
                  Object.prototype.hasOwnProperty.call(l.props, "easing") &&
                    (Array.isArray(l.props.easing)
                      ? (l.easing = Ie(
                          l.props.easing[0],
                          l.props.easing[1],
                          l.props.easing[2],
                          l.props.easing[3]
                        ))
                      : (l.easing = _e[l.props.easing])),
                  l
                );
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "get",
                  key: "originalContext",
                  value: function () {
                    return this.contexts[this.originalContextKey];
                  },
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return b(m(n.prototype), "duration", this);
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (e) {
                    for (var t in (w(m(n.prototype), "duration", e, this, !0),
                    this.contexts))
                      this.contexts[t].duration = e;
                  },
                },
                {
                  kind: "method",
                  key: "addContext",
                  value: function (e) {
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = !1;
                    0 === Object.keys(this.contexts).length &&
                      ((this.originalContextKey = e.clipId),
                      (this.originalClipContext = e.context),
                      (n = !0));
                    var i = h(
                        h({}, this.constructionIngredients),
                        {},
                        { context: e.context, mcid: this.mcid }
                      ),
                      r = Ae(i);
                    (this.contexts[e.clipId] = r),
                      n ||
                        null == this.attribute ||
                        this.contexts[e.clipId].setInitialValue(
                          this.initialValue
                        ),
                      t &&
                        this.contexts[e.clipId].context.contextLoaded &&
                        this.contexts[e.clipId]._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  key: "handleAddContext",
                  value: function (e, t) {
                    return this.addContext(t, !0), !0;
                  },
                },
                {
                  kind: "method",
                  key: "handleContextLoaded",
                  value: function (e, t) {
                    return this._onGetContextOnce(), !0;
                  },
                },
                {
                  kind: "method",
                  decorators: [Me],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (e, t, n) {
                    var i =
                      t % (this.delay + this.props.duration + this.hiatus);
                    0 !== t &&
                      0 === i &&
                      (i = this.delay + this.props.duration);
                    var r = i - this.delay;
                    r < 0
                      ? (r = 0)
                      : r > this.props.duration && (r = this.props.duration);
                    var s = r / this.props.duration,
                      o = this.easing(s),
                      a = o * this.props.duration;
                    if (null != n)
                      !1 !== this.originalContext.context.contextLoaded &&
                        this.contexts[n].onProgress(o, a);
                    else
                      for (var l in this.contexts)
                        (this.originalContextKey === l &&
                          !0 === this.originalContext.fragment) ||
                          this.contexts[l].onProgress(o, a);
                  },
                },
                {
                  kind: "get",
                  key: "animatedAttributeValue",
                  value: function () {
                    return this.constructionIngredients.attrs.animatedAttrs[
                      this.attribute
                    ];
                  },
                },
                {
                  kind: "set",
                  key: "animatedAttributeValue",
                  value: function (e) {
                    this.constructionIngredients.attrs.animatedAttrs[
                      this.attribute
                    ] = e;
                  },
                },
                {
                  kind: "method",
                  key: "gotContext",
                  value: function () {
                    for (var e in this.contexts) this.contexts[e].gotContext();
                  },
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    if (!1 !== this.originalContext.context.contextLoaded)
                      for (var e in this.contexts)
                        this.contexts[e]._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  key: "lastWish",
                  value: function () {
                    for (var e in this.contexts) this.contexts[e].lastWish();
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    if (!1 !== this.originalContext.contextLoaded)
                      for (var e in this.contexts)
                        this.contexts[e].context.contextLoaded &&
                          this.contexts[e].onGetContext();
                  },
                },
                {
                  kind: "get",
                  key: "initialValue",
                  value: function () {
                    return this.originalContext.initialValue;
                  },
                },
                {
                  kind: "get",
                  key: "scratchValue",
                  value: function () {
                    return this.originalContext.scratchValue;
                  },
                },
                {
                  kind: "get",
                  key: "pureInitialValues",
                  value: function () {
                    return this.originalContext.pureInitialValues;
                  },
                },
                {
                  kind: "method",
                  key: "setInitialValue",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                    for (var n in (null === e && (e = this.getScratchValue()),
                    this.contexts))
                      this.contexts[n].setInitialValue(
                        JSON.parse(JSON.stringify(e)),
                        t
                      );
                  },
                },
                {
                  kind: "method",
                  key: "getScratchValue",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    if (!this.originalContext.context.contextLoaded) return 0;
                    if (null != e) return this.contexts[e].getScratchValue();
                    var t = Object.keys(this.contexts);
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.originalClipContext,
                        "nonFragmentedContext"
                      )
                    ) {
                      var n = h(
                          h({}, this.constructionIngredients),
                          {},
                          {
                            context: this.originalClipContext
                              .nonFragmentedContext,
                            mcid: this.mcid,
                          }
                        ),
                        i = Ae(n);
                      return i.getScratchValue();
                    }
                    return 1 === t.length
                      ? this.originalContext.getScratchValue()
                      : this.contexts[t[1]].getScratchValue();
                  },
                },
                {
                  kind: "method",
                  key: "setCompoAttrKeyValue",
                  value: function (e, t) {
                    for (var n in this.contexts)
                      (this.contexts[n].attrs.animatedAttrs[this.attribute][
                        e
                      ] = t),
                        this.contexts[n].lastWish(),
                        this.contexts[n].onGetContext();
                  },
                },
                {
                  kind: "method",
                  key: "play",
                  value: function (e, t, n) {
                    return this.contexts[n].play(t);
                  },
                },
                {
                  kind: "method",
                  key: "stop",
                  value: function (e) {
                    this.contexts[e].stop();
                  },
                },
              ],
            };
          },
          pe
        ),
        Be = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e, i, r, s) {
            var o,
              l =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : null;
            return (
              a(this, n),
              ((o = t.call(
                this,
                {},
                { id: "".concat(e.id, "_").concat(r) }
              )).mcid = r),
              (o.selector = s),
              (o.dynamicValues = null !== l ? l : { attrs: [], props: [] }),
              o.setUp(e, i),
              o
            );
          }
          return (
            c(n, [
              {
                key: "setUp",
                value: function (e, t) {
                  var n = e.attrs,
                    i = e.props;
                  if (this.dynamicValues.attrs.length > 0) {
                    n = JSON.parse(JSON.stringify(e.attrs));
                    for (var r = 0; r < this.dynamicValues.attrs.length; r++)
                      ie(
                        n,
                        this.dynamicValues.attrs[r].path,
                        this.dynamicValues.attrs[r].value
                      );
                  }
                  if (this.dynamicValues.props.length > 0) {
                    i = JSON.parse(JSON.stringify(e.props));
                    for (var s = 0; s < this.dynamicValues.props.length; s++)
                      ie(
                        i,
                        this.dynamicValues.props[s].path,
                        this.dynamicValues.props[s].value
                      );
                  }
                  for (var o in n.animatedAttrs) {
                    var a = {};
                    a[o] = n.animatedAttrs[o];
                    var l = h(h({}, n), {}, { animatedAttrs: a }),
                      c = h(h({}, i), {}, { selector: this.selector }),
                      u = {
                        incidentId: e.id,
                        attrs: l,
                        props: c,
                        Incident: e.constructor.Incident,
                        plugin_npm_name: e.constructor.plugin_npm_name,
                        Channel: e.constructor.Channel,
                        DescriptiveIncident: e,
                      },
                      p = new De(u, t, this.mcid, o);
                    this.addChild(p, 0);
                  }
                },
              },
            ]),
            n
          );
        })(ye);
      function je(e, t) {
        for (var n = [], i = 0; i < e.length; i++)
          n.push({ path: e[i].path, value: e[i].values[t] });
        return n;
      }
      function Ve(e, t) {
        for (var n = [], i = 0; i < e.length; i++)
          n.push({ path: e[i].path, value: e[i].values[t] });
        return n;
      }
      var Ne = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e, i) {
            var r;
            return (
              a(this, n),
              ((r = t.call(this, {}, { id: e.id })).contexts = {}),
              (r.contexts[i.clipId] = i.context),
              (r.originalContextKey = i.clipId),
              (r.initParams = i.context.initParams),
              (r.instantiatedCopiesContexts = i.instantiatedCopiesContexts),
              (r.descriptiveIncident = e),
              (r.staggerAttrs = []),
              (r.staggerProps = []),
              r.setUp(e, i),
              r
            );
          }
          return (
            c(n, [
              {
                key: "originalContext",
                get: function () {
                  return this.contexts[this.originalContextKey];
                },
              },
              {
                key: "parsePropsDynamicValues",
                value: function (e, t) {
                  for (var n = 0; n < e.propsStaggers.length; n++)
                    this.staggerProps.push({
                      path: e.propsStaggers[n].path,
                      values: e.propsStaggers[n].stagger.calculateValues(
                        t,
                        this.initParams
                      ),
                    });
                },
              },
              {
                key: "parseAttrsDynamicValues",
                value: function (e, t) {
                  for (var n = 0; n < e.attributesStaggers.length; n++)
                    this.staggerAttrs.push({
                      path: e.attributesStaggers[n].path,
                      values: e.attributesStaggers[n].stagger.calculateValues(
                        t,
                        this.initParams
                      ),
                    });
                },
              },
              {
                key: "setUp",
                value: function (e, t) {
                  var n,
                    i,
                    r = this.originalContext.getElements(e.selector());
                  this.parsePropsDynamicValues(e, r),
                    this.parseAttrsDynamicValues(e, r);
                  for (var s = 0; s < r.length; s++) {
                    for (var o in ((n = r[s]),
                    (i = this._getElementMCID(n)),
                    this.instantiatedCopiesContexts))
                      this._setElementMCID(
                        this.instantiatedCopiesContexts[o],
                        this.instantiatedCopiesContexts[o].getElements(
                          e.selector()
                        )[s],
                        i
                      );
                    this._createElementIncident(n, e, t, s, r.length, i);
                  }
                },
              },
              {
                key: "handleRecalcDuration",
                value: function (e, t) {
                  var i = b(m(n.prototype), "handleRecalcDuration", this).call(
                    this,
                    e,
                    t
                  );
                  return (
                    this.descriptiveIncident.propsStaggers.length > 0 &&
                      (this.descriptiveIncident.dynamicDurationValue =
                        1 * this.duration),
                    i
                  );
                },
              },
              {
                key: "lastWish",
                value: function () {
                  this.descriptiveIncident.propsStaggers.length > 0 &&
                    ((this.descriptiveIncident.dynamicDurationValue = null),
                    this.descriptiveIncident.putMessageOnPipe(
                      "setDurationDynamic",
                      {},
                      "Groups",
                      { selfExecute: !1, direction: le }
                    )),
                    b(m(n.prototype), "lastWish", this).call(this);
                },
              },
              {
                key: "_getElementMCID",
                value: function (e) {
                  var t = this.originalContext.getMCID(e);
                  return (
                    t || ((t = te(!0)), this.originalContext.setMCID(e, t)), t
                  );
                },
              },
              {
                key: "_setElementMCID",
                value: function (e, t, n) {
                  e.getMCID(t) || e.setMCID(t, n);
                },
              },
              {
                key: "_createElementIncident",
                value: function (e, t, n, i, r, s) {
                  if (
                    Object.prototype.hasOwnProperty.call(
                      t.attrs,
                      "animatedAttrs"
                    )
                  ) {
                    var o = new Be(
                      t,
                      n,
                      s,
                      n.context.getElementSelectorByMCID(s),
                      {
                        attrs: je(this.staggerAttrs, i),
                        props: Ve(this.staggerProps, i),
                      }
                    );
                    this.addChild(o, 0);
                  } else {
                    var a = t.attrs,
                      l = h({}, t.props),
                      c = {
                        incidentId: t.id,
                        attrs: a,
                        props: l,
                        Incident: t.constructor.Incident,
                        plugin_npm_name: t.constructor.plugin_npm_name,
                        Channel: t.constructor.Channel,
                        DescriptiveIncident: t,
                      },
                      u = new De(c, n, s, null);
                    this.addChild(u, 0);
                  }
                },
              },
            ]),
            n
          );
        })(ye),
        Fe = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e, i) {
            var r;
            return (
              a(this, n), ((r = t.call(this, e, i)).realClip = e.realClip), r
            );
          }
          return (
            c(n, [
              {
                key: "_createElementIncident",
                value: function (e, t, n, i, r, s) {
                  var o = t.realClip.exportConstructionArguments(),
                    a = {
                      incidentId: t.id,
                      attrs: o.attrs,
                      props: h(
                        h({}, o.props),
                        {},
                        {
                          selector: n.context.getElementSelectorByMCID(s),
                          runTimeInfo: t.runTimeInfo,
                        }
                      ),
                      Incident: t.constructor.Incident,
                      plugin_npm_name: t.constructor.plugin_npm_name,
                      Channel: be,
                      DescriptiveIncident: t,
                    },
                    l = new Le(a, n, s, t);
                  this.addChild(l, 0);
                },
              },
              {
                key: "duration",
                get: function () {
                  return b(m(n.prototype), "duration", this);
                },
                set: function (e) {
                  this.realClip._resize(e / this.realClip.duration),
                    (this._duration = e);
                },
              },
            ]),
            n
          );
        })(Ne),
        $e = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : F,
            r =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : window;
          Object.prototype.hasOwnProperty.call(r, i) || (r[i] = {});
          for (var s = r[i], o = e.split("."), a = 0; a < o.length - 1; a++)
            Object.prototype.hasOwnProperty.call(s, o[a]) || (s[o[a]] = {}),
              (s = s[o[a]]);
          return !(
            (Object.prototype.hasOwnProperty.call(s, o[o.length - 1]) &&
              !1 === n) ||
            ((s[o[o.length - 1]] = t), 0)
          );
        };
      function ze(e) {
        var t = {},
          n = [],
          i = Array.isArray(e),
          r = i ? e.length : 0,
          s = null;
        return new Proxy(e, {
          keywords: [
            "setValue",
            "_getFromProxy",
            "__createPathProxies",
            "hasOwnProperty",
            "pushValue",
            "removePathKey",
            "removeKey",
            "restoreKey",
            "getKeys",
            "exportFlattened",
            "isArray",
            "push",
            "sortBy",
            "findIndex",
          ],
          get: function (o, a) {
            return "length" === a && i
              ? r
              : this.keywords.indexOf(a) >= 0
              ? this[a]
              : n.indexOf(a) >= 0
              ? void 0
              : (i && null !== s && (a = s[a]),
                Object.prototype.hasOwnProperty.call(t, a) ? t[a] : e[a]);
          },
          isArray: function () {
            return i;
          },
          _getFromProxy: function (e) {
            return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
          },
          set: function () {
            return !1;
          },
          sortBy: function (e) {
            if (((s = null), !i)) return !1;
            s = (function (e, t) {
              for (var n = [], i = 0; i < e.length; i++) n.push([e[i], i]);
              n.sort(function (e, n) {
                return e[0][t] < n[0][t] ? -1 : 1;
              });
              var r = [];
              for (var s in n) r.push(n[s][1]);
              return r;
            })(this, e);
          },
          __createPathProxies: function (n) {
            for (var r = t, o = e, a = 0; a < n.length - 1; a++) {
              var l = i && null !== s ? s[n[a]] : n[a];
              if (0 === a ? void 0 === r[l] : void 0 === r._getFromProxy(l)) {
                var c = ze((void 0 !== o && o[l]) || {});
                0 === a ? (r[l] = c) : r.setValue(l, c);
              }
              (r = r[l]), (o = void 0 !== o ? o[l] : {});
            }
            return { currentObject: r, currentRealObect: o };
          },
          findIndex: function (e) {
            if (!i) return null;
            for (var t = 0; t < r; t++) if (e(this[t])) return t;
            return null;
          },
          setValue: function (e, t) {
            var i = e.split("."),
              r = this.__createPathProxies(i).currentObject,
              s = t;
            if (("object" === o(t) && (s = ze(t)), 1 === i.length)) {
              r[i[i.length - 1]] = s;
              var a = n.indexOf(i[i.length - 1]);
              a > -1 && n.splice(a, 1);
            } else
              r.setValue(i[i.length - 1], s), r.restoreKey(i[i.length - 1]);
            return !0;
          },
          pushValue: function (t, n) {
            var i = t.split("."),
              r = this.__createPathProxies(i),
              s = r.currentObject;
            if (void 0 === r.currentRealObect) return !1;
            var o = i[i.length - 1],
              a = s[o],
              l = e[o];
            if (("" === t && ((a = this), (l = e)), 1 !== i.length))
              return s.pushValue(o, n);
            var c = !1;
            if (void 0 !== a) {
              if (((c = !0), !a.isArray())) return !1;
            } else if (!Array.isArray(l)) return !1;
            if (!c) {
              var u = ze(l);
              (s[o] = u), (a = s[o]);
            }
            return a.push(n), !0;
          },
          push: function (e) {
            return (
              !!this.isArray() &&
              ("object" === o(e) ? (t[r] = ze(e)) : (t[r] = e), (r += 1), !0)
            );
          },
          removePathKey: function (e) {
            var t = e.split(".");
            return (
              this.__createPathProxies(t).currentObject.removeKey(
                t[t.length - 1]
              ),
              !0
            );
          },
          removeKey: function (e) {
            n.push(e);
          },
          restoreKey: function (e) {
            var t = n.indexOf(e);
            t > -1 && n.splice(t, 1);
          },
          hasOwnProperty: function (e) {
            return !(n.indexOf(e) > -1) && void 0 !== this[e];
          },
          getKeys: function () {
            if (i) return [];
            for (
              var r = [],
                s = Object.keys(e),
                o = Object.keys(t),
                a = [].concat(C(s), C(o)),
                l = a.filter(function (e, t) {
                  return a.indexOf(e) === t;
                }),
                c = 0;
              c < l.length;
              c++
            )
              n.indexOf(l[c]) < 0 && r.push(l[c]);
            return r;
          },
          exportFlattened: function () {
            var n;
            if (i)
              if (((n = []), null !== s))
                for (var r = 0; r < s.length; r++) {
                  var a = s[r];
                  if (Object.prototype.hasOwnProperty.call(t, a)) {
                    var l = t[a];
                    if ("object" === o(l))
                      try {
                        n[r] = t[a].exportFlattened();
                      } catch (e) {
                        n[r] = l;
                      }
                    else n[r] = l;
                  } else n[r] = e[a];
                }
              else {
                n = C(e);
                for (var c = 0, u = Object.entries(t); c < u.length; c++) {
                  var p = k(u[c], 2),
                    h = p[0],
                    d = p[1];
                  if ("object" === o(d))
                    try {
                      n[h] = t[h].exportFlattened();
                    } catch (e) {
                      n[h] = d;
                    }
                  else n[h] = d;
                }
              }
            else {
              n = {};
              for (var m = this.getKeys(), f = 0; f < m.length; f++) {
                var v = m[f];
                void 0 !== t[v]
                  ? "object" === o(t[v])
                    ? (n[v] = t[v].exportFlattened())
                    : (n[v] = t[v])
                  : (n[v] = e[v]);
              }
            }
            return n;
          },
        });
      }
      var Re = "6.3.6",
        He = function e(t, n, i = {}) {
          for (let s in n)
            if (
              "object" == typeof (r = n[s]) &&
              !Array.isArray(r) &&
              null != r &&
              Object.keys(r).length > 0
            )
              (t[s] = t[s] || {}), e(t[s], n[s], i);
            else {
              if (!0 === i.skipIfExist && void 0 !== t[s]) continue;
              t[s] = n[s];
            }
          var r;
          return t;
        },
        qe = {
          required: "The '{field}' field is required.",
          string: "The '{field}' field must be a string.",
          stringEmpty: "The '{field}' field must not be empty.",
          stringMin:
            "The '{field}' field length must be greater than or equal to {expected} characters long.",
          stringMax:
            "The '{field}' field length must be less than or equal to {expected} characters long.",
          stringLength:
            "The '{field}' field length must be {expected} characters long.",
          stringPattern:
            "The '{field}' field fails to match the required pattern.",
          stringContains:
            "The '{field}' field must contain the '{expected}' text.",
          stringEnum:
            "The '{field}' field does not match any of the allowed values.",
          stringNumeric: "The '{field}' field must be a numeric string.",
          stringAlpha: "The '{field}' field must be an alphabetic string.",
          stringAlphanum: "The '{field}' field must be an alphanumeric string.",
          stringAlphadash: "The '{field}' field must be an alphadash string.",
          stringHex: "The '{field}' field must be a hex string.",
          stringSingleLine: "The '{field}' field must be a single line string.",
          stringBase64: "The '{field}' field must be a base64 string.",
          number: "The '{field}' field must be a number.",
          numberMin:
            "The '{field}' field must be greater than or equal to {expected}.",
          numberMax:
            "The '{field}' field must be less than or equal to {expected}.",
          numberEqual: "The '{field}' field must be equal to {expected}.",
          numberNotEqual: "The '{field}' field can't be equal to {expected}.",
          numberInteger: "The '{field}' field must be an integer.",
          numberPositive: "The '{field}' field must be a positive number.",
          numberNegative: "The '{field}' field must be a negative number.",
          array: "The '{field}' field must be an array.",
          arrayEmpty: "The '{field}' field must not be an empty array.",
          arrayMin:
            "The '{field}' field must contain at least {expected} items.",
          arrayMax:
            "The '{field}' field must contain less than or equal to {expected} items.",
          arrayLength: "The '{field}' field must contain {expected} items.",
          arrayContains:
            "The '{field}' field must contain the '{expected}' item.",
          arrayUnique:
            "The '{actual}' value in '{field}' field does not unique the '{expected}' values.",
          arrayEnum:
            "The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",
          tuple: "The '{field}' field must be an array.",
          tupleEmpty: "The '{field}' field must not be an empty array.",
          tupleLength: "The '{field}' field must contain {expected} items.",
          boolean: "The '{field}' field must be a boolean.",
          currency: "The '{field}' must be a valid currency format",
          date: "The '{field}' field must be a Date.",
          dateMin:
            "The '{field}' field must be greater than or equal to {expected}.",
          dateMax:
            "The '{field}' field must be less than or equal to {expected}.",
          enumValue:
            "The '{field}' field value '{expected}' does not match any of the allowed values.",
          equalValue:
            "The '{field}' field value must be equal to '{expected}'.",
          equalField:
            "The '{field}' field value must be equal to '{expected}' field value.",
          forbidden: "The '{field}' field is forbidden.",
          function: "The '{field}' field must be a function.",
          email: "The '{field}' field must be a valid e-mail.",
          emailEmpty: "The '{field}' field must not be empty.",
          emailMin:
            "The '{field}' field length must be greater than or equal to {expected} characters long.",
          emailMax:
            "The '{field}' field length must be less than or equal to {expected} characters long.",
          luhn: "The '{field}' field must be a valid checksum luhn.",
          mac: "The '{field}' field must be a valid MAC address.",
          object: "The '{field}' must be an Object.",
          objectStrict:
            "The object '{field}' contains forbidden keys: '{actual}'.",
          objectMinProps:
            "The object '{field}' must contain at least {expected} properties.",
          objectMaxProps:
            "The object '{field}' must contain {expected} properties at most.",
          url: "The '{field}' field must be a valid URL.",
          urlEmpty: "The '{field}' field must not be empty.",
          uuid: "The '{field}' field must be a valid UUID.",
          uuidVersion:
            "The '{field}' field must be a valid UUID version provided.",
          classInstanceOf:
            "The '{field}' field must be an instance of the '{expected}' class.",
          objectID: "The '{field}' field must be an valid ObjectID",
        },
        Ge = function () {
          const e = [];
          return e.push("\n\t\treturn value;\n\t"), { source: e.join("\n") };
        },
        We = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          if (
            (r.push(
              `\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({
                type: "array",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`
            ),
            !1 === e.empty &&
              r.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "arrayEmpty",
                  actual: "value",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.min &&
              r.push(
                `\n\t\t\tif (len < ${e.min}) {\n\t\t\t\t${this.makeError({
                  type: "arrayMin",
                  expected: e.min,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.max &&
              r.push(
                `\n\t\t\tif (len > ${e.max}) {\n\t\t\t\t${this.makeError({
                  type: "arrayMax",
                  expected: e.max,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.length &&
              r.push(
                `\n\t\t\tif (len !== ${e.length}) {\n\t\t\t\t${this.makeError({
                  type: "arrayLength",
                  expected: e.length,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.contains &&
              r.push(
                `\n\t\t\tif (value.indexOf(${JSON.stringify(
                  e.contains
                )}) === -1) {\n\t\t\t\t${this.makeError({
                  type: "arrayContains",
                  expected: JSON.stringify(e.contains),
                  actual: "value",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.unique &&
              r.push(
                `\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError(
                  {
                    type: "arrayUnique",
                    expected:
                      "Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",
                    actual: "value",
                    messages: t,
                  }
                )}\n\t\t\t}\n\t\t`
              ),
            null != e.enum)
          ) {
            const n = JSON.stringify(e.enum);
            r.push(
              `\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError(
                {
                  type: "arrayEnum",
                  expected: '"' + e.enum.join(", ") + '"',
                  actual: "value[i]",
                  messages: t,
                }
              )}\n\t\t\t\t}\n\t\t\t}\n\t\t`
            );
          }
          if (null != e.items) {
            r.push(
              "\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t"
            );
            const t = n + "[]",
              s = this.getRuleFromSchema(e.items),
              o =
                'arr[i] = context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)';
            r.push(this.compileRule(s, i, t, o, "arr[i]")),
              r.push("\n\t\t\t}\n\t\t");
          }
          return r.push("\n\t\treturn value;\n\t"), { source: r.join("\n") };
        },
        Ue = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          let s = !1;
          return (
            r.push("\n\t\tvar origValue = value;\n\t"),
            !0 === e.convert &&
              ((s = !0),
              r.push(
                '\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t'
              )),
            r.push(
              `\n\t\tif (typeof value !== "boolean") {\n\t\t\t${this.makeError({
                type: "boolean",
                actual: "origValue",
                messages: t,
              })}\n\t\t}\n\t\t\n\t\treturn value;\n\t`
            ),
            { sanitized: s, source: r.join("\n") }
          );
        },
        Je = function ({ schema: e, messages: t, index: n }, i, r) {
          const s = [],
            o = e.instanceOf.name ? e.instanceOf.name : "<UnknowClass>";
          return (
            r.customs[n]
              ? (r.customs[n].schema = e)
              : (r.customs[n] = { schema: e }),
            s.push(
              `\n\t\tif (!(value instanceof context.customs[${n}].schema.instanceOf))\n\t\t\t${this.makeError(
                {
                  type: "classInstanceOf",
                  actual: "value",
                  expected: "'" + o + "'",
                  messages: t,
                }
              )}\n\t`
            ),
            s.push("\n\t\treturn value;\n\t"),
            { source: s.join("\n") }
          );
        },
        Ke = function ({ schema: e, messages: t, index: n }, i, r) {
          const s = [];
          return (
            s.push(
              `\n\t\t${this.makeCustomValidator({
                fnName: "check",
                path: i,
                schema: e,
                messages: t,
                context: r,
                ruleIndex: n,
              })}\n\t\treturn value;\n\t`
            ),
            { source: s.join("\n") }
          );
        },
        Xe = function ({ schema: e, messages: t }, n, i) {
          const r = e.currencySymbol || null,
            s = e.thousandSeparator || ",",
            o = e.decimalSeparator || ".",
            a = e.customRegex;
          let l = !e.symbolOptional,
            c = "(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$"
              .replace(/~1/g, r ? `\\${r}${l ? "" : "?"}` : "")
              .replace("~2", s)
              .replace("~3", o);
          const u = [];
          return (
            u.push(
              `\n\t\tif (!value.match(${
                a || new RegExp(c)
              })) {\n\t\t\t${this.makeError({
                type: "currency",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\treturn value;\n\t`
            ),
            { source: u.join("\n") }
          );
        },
        Qe = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          let s = !1;
          return (
            r.push("\n\t\tvar origValue = value;\n\t"),
            !0 === e.convert &&
              ((s = !0),
              r.push(
                "\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t"
              )),
            r.push(
              `\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError(
                { type: "date", actual: "origValue", messages: t }
              )}\n\n\t\treturn value;\n\t`
            ),
            { sanitized: s, source: r.join("\n") }
          );
        };
      const Ze = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        Ye = /^\S+@\S+\.\S+$/;
      var et = function ({ schema: e, messages: t }, n, i) {
          const r = [],
            s = "precise" == e.mode ? Ze : Ye;
          let o = !1;
          return (
            r.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\t`
            ),
            e.empty
              ? r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t")
              : r.push(
                  `\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({
                    type: "emailEmpty",
                    actual: "value",
                    messages: t,
                  })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
                ),
            e.normalize &&
              ((o = !0),
              r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),
            null != e.min &&
              r.push(
                `\n\t\t\tif (value.length < ${
                  e.min
                }) {\n\t\t\t\t${this.makeError({
                  type: "emailMin",
                  expected: e.min,
                  actual: "value.length",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.max &&
              r.push(
                `\n\t\t\tif (value.length > ${
                  e.max
                }) {\n\t\t\t\t${this.makeError({
                  type: "emailMax",
                  expected: e.max,
                  actual: "value.length",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            r.push(
              `\n\t\tif (!${s.toString()}.test(value)) {\n\t\t\t${this.makeError(
                { type: "email", actual: "value", messages: t }
              )}\n\t\t}\n\n\t\treturn value;\n\t`
            ),
            { sanitized: o, source: r.join("\n") }
          );
        },
        tt = function ({ schema: e, messages: t }, n, i) {
          return {
            source: `\n\t\t\tif (${JSON.stringify(
              e.values || []
            )}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({
              type: "enumValue",
              expected: '"' + e.values.join(", ") + '"',
              actual: "value",
              messages: t,
            })}\n\t\t\t\n\t\t\treturn value;\n\t\t`,
          };
        },
        nt = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          return (
            e.field
              ? (e.strict
                  ? r.push(
                      `\n\t\t\t\tif (value !== parent["${e.field}"])\n\t\t\t`
                    )
                  : r.push(
                      `\n\t\t\t\tif (value != parent["${e.field}"])\n\t\t\t`
                    ),
                r.push(
                  `\n\t\t\t\t${this.makeError({
                    type: "equalField",
                    actual: "value",
                    expected: JSON.stringify(e.field),
                    messages: t,
                  })}\n\t\t`
                ))
              : (e.strict
                  ? r.push(
                      `\n\t\t\t\tif (value !== ${JSON.stringify(
                        e.value
                      )})\n\t\t\t`
                    )
                  : r.push(
                      `\n\t\t\t\tif (value != ${JSON.stringify(
                        e.value
                      )})\n\t\t\t`
                    ),
                r.push(
                  `\n\t\t\t\t${this.makeError({
                    type: "equalValue",
                    actual: "value",
                    expected: JSON.stringify(e.value),
                    messages: t,
                  })}\n\t\t`
                )),
            r.push("\n\t\treturn value;\n\t"),
            { source: r.join("\n") }
          );
        },
        it = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          return (
            r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),
            e.remove
              ? r.push("\n\t\t\treturn undefined;\n\t\t")
              : r.push(
                  `\n\t\t\t${this.makeError({
                    type: "forbidden",
                    actual: "value",
                    messages: t,
                  })}\n\t\t`
                ),
            r.push("\n\t\t}\n\n\t\treturn value;\n\t"),
            { source: r.join("\n") }
          );
        },
        rt = function ({ schema: e, messages: t }, n, i) {
          return {
            source: `\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError(
              { type: "function", actual: "value", messages: t }
            )}\n\n\t\t\treturn value;\n\t\t`,
          };
        },
        st = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          r.push(
            "\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t"
          );
          for (let t = 0; t < e.rules.length; t++) {
            r.push(
              "\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t"
            );
            const s = this.getRuleFromSchema(e.rules[t]);
            r.push(
              this.compileRule(
                s,
                i,
                n,
                "var tmpVal = context.fn[%%INDEX%%](value, field, parent, errors, context);",
                "tmpVal"
              )
            ),
              r.push(
                "\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t"
              );
          }
          return (
            r.push(
              "\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\t\t\n\t\treturn newVal;\n\t"
            ),
            { source: r.join("\n") }
          );
        },
        ot = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          r.push("\n\t\tvar origValue = value;\n\t");
          let s = !1;
          return (
            !0 === e.convert &&
              ((s = !0),
              r.push(
                '\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t'
              )),
            r.push(
              `\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError(
                { type: "number", actual: "origValue", messages: t }
              )}\n\t\t\treturn value;\n\t\t}\n\t`
            ),
            null != e.min &&
              r.push(
                `\n\t\t\tif (value < ${e.min}) {\n\t\t\t\t${this.makeError({
                  type: "numberMin",
                  expected: e.min,
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.max &&
              r.push(
                `\n\t\t\tif (value > ${e.max}) {\n\t\t\t\t${this.makeError({
                  type: "numberMax",
                  expected: e.max,
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.equal &&
              r.push(
                `\n\t\t\tif (value !== ${e.equal}) {\n\t\t\t\t${this.makeError({
                  type: "numberEqual",
                  expected: e.equal,
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.notEqual &&
              r.push(
                `\n\t\t\tif (value === ${
                  e.notEqual
                }) {\n\t\t\t\t${this.makeError({
                  type: "numberNotEqual",
                  expected: e.notEqual,
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.integer &&
              r.push(
                `\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({
                  type: "numberInteger",
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.positive &&
              r.push(
                `\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({
                  type: "numberPositive",
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.negative &&
              r.push(
                `\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({
                  type: "numberNegative",
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            r.push("\n\t\treturn value;\n\t"),
            { sanitized: s, source: r.join("\n") }
          );
        };
      const at = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/,
        lt = /["'\\\n\r\u2028\u2029]/g;
      function ct(e) {
        return e.replace(lt, function (e) {
          switch (e) {
            case '"':
            case "'":
            case "\\":
              return "\\" + e;
            case "\n":
              return "\\n";
            case "\r":
              return "\\r";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
          }
        });
      }
      var ut = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          r.push(
            `\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError(
              { type: "object", actual: "value", messages: t }
            )}\n\t\t\treturn value;\n\t\t}\n\t`
          );
          const s = e.properties || e.props;
          if (s) {
            r.push("var parentObj = value;"),
              r.push("var parentField = field;");
            const o = Object.keys(s);
            for (let e = 0; e < o.length; e++) {
              const t = o[e],
                a = ct(t),
                l = at.test(a) ? "." + a : `['${a}']`,
                c = "parentObj" + l,
                u = (n ? n + "." : "") + t;
              r.push("\n// Field: " + ct(u)),
                r.push(`field = parentField ? parentField + "${l}" : "${a}";`),
                r.push(`value = ${c};`);
              const p = this.getRuleFromSchema(s[t]),
                h = `\n\t\t\t\t${c} = context.fn[%%INDEX%%](value, field, parentObj, errors, context);\n\t\t\t`;
              r.push(this.compileRule(p, i, u, h, c));
            }
            if (e.strict) {
              const n = Object.keys(s);
              r.push(
                `\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(
                  n
                )}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`
              ),
                "remove" == e.strict
                  ? r.push(
                      "\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"
                    )
                  : r.push(
                      `\n\t\t\t\t\t${this.makeError({
                        type: "objectStrict",
                        expected: '"' + n.join(", ") + '"',
                        actual: "invalidProps.join(', ')",
                        messages: t,
                      })}\n\t\t\t\t`
                    ),
                r.push("\n\t\t\t\t}\n\t\t\t");
            }
          }
          return (
            (null == e.minProps && null == e.maxProps) ||
              (e.strict
                ? r.push(
                    `\n\t\t\t\tprops = Object.keys(${
                      s ? "parentObj" : "value"
                    });\n\t\t\t`
                  )
                : r.push(
                    `\n\t\t\t\tvar props = Object.keys(${
                      s ? "parentObj" : "value"
                    });\n\t\t\t\t${s ? "field = parentField;" : ""}\n\t\t\t`
                  )),
            null != e.minProps &&
              r.push(
                `\n\t\t\tif (props.length < ${
                  e.minProps
                }) {\n\t\t\t\t${this.makeError({
                  type: "objectMinProps",
                  expected: e.minProps,
                  actual: "props.length",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.maxProps &&
              r.push(
                `\n\t\t\tif (props.length > ${
                  e.maxProps
                }) {\n\t\t\t\t${this.makeError({
                  type: "objectMaxProps",
                  expected: e.maxProps,
                  actual: "props.length",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            s
              ? r.push("\n\t\t\treturn parentObj;\n\t\t")
              : r.push("\n\t\t\treturn value;\n\t\t"),
            { source: r.join("\n") }
          );
        },
        pt = function ({ schema: e, messages: t, index: n }, i, r) {
          const s = [];
          return (
            r.customs[n]
              ? (r.customs[n].schema = e)
              : (r.customs[n] = { schema: e }),
            s.push(
              `\n\t\tconst ObjectID = context.customs[${n}].schema.ObjectID;\n\t\tif (!ObjectID.isValid(value)) {\n\t\t\t${this.makeError(
                { type: "objectID", actual: "value", messages: t }
              )}\n\t\t\treturn;\n\t\t}\n\t`
            ),
            !0 === e.convert
              ? s.push("return new ObjectID(value)")
              : "hexString" === e.convert
              ? s.push("return value.toString()")
              : s.push("return value"),
            { source: s.join("\n") }
          );
        };
      const ht = /^-?[0-9]\d*(\.\d+)?$/,
        dt = /^[a-zA-Z]+$/,
        mt = /^[a-zA-Z0-9]+$/,
        ft = /^[a-zA-Z0-9_-]+$/,
        vt = /^[0-9a-fA-F]+$/,
        gt = /^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
      var yt = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          let s = !1;
          if (
            (!0 === e.convert &&
              ((s = !0),
              r.push(
                '\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t'
              )),
            r.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`
            ),
            e.trim && ((s = !0), r.push("\n\t\t\tvalue = value.trim();\n\t\t")),
            e.trimLeft &&
              ((s = !0), r.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),
            e.trimRight &&
              ((s = !0), r.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),
            e.padStart)
          ) {
            s = !0;
            const t = null != e.padChar ? e.padChar : " ";
            r.push(
              `\n\t\t\tvalue = value.padStart(${e.padStart}, ${JSON.stringify(
                t
              )});\n\t\t`
            );
          }
          if (e.padEnd) {
            s = !0;
            const t = null != e.padChar ? e.padChar : " ";
            r.push(
              `\n\t\t\tvalue = value.padEnd(${e.padEnd}, ${JSON.stringify(
                t
              )});\n\t\t`
            );
          }
          if (
            (e.lowercase &&
              ((s = !0), r.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),
            e.uppercase &&
              ((s = !0), r.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),
            e.localeLowercase &&
              ((s = !0),
              r.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),
            e.localeUppercase &&
              ((s = !0),
              r.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),
            r.push("\n\t\t\tvar len = value.length;\n\t"),
            !1 === e.empty &&
              r.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "stringEmpty",
                  actual: "value",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.min &&
              r.push(
                `\n\t\t\tif (len < ${e.min}) {\n\t\t\t\t${this.makeError({
                  type: "stringMin",
                  expected: e.min,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.max &&
              r.push(
                `\n\t\t\tif (len > ${e.max}) {\n\t\t\t\t${this.makeError({
                  type: "stringMax",
                  expected: e.max,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.length &&
              r.push(
                `\n\t\t\tif (len !== ${e.length}) {\n\t\t\t\t${this.makeError({
                  type: "stringLength",
                  expected: e.length,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.pattern)
          ) {
            let n = e.pattern;
            "string" == typeof e.pattern &&
              (n = new RegExp(e.pattern, e.patternFlags));
            const i = `\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError(
              {
                type: "stringPattern",
                expected: `"${n.toString().replace(/"/g, "\\$&")}"`,
                actual: "origValue",
                messages: t,
              }
            )}\n\t\t`;
            r.push(
              `\n\t\t\tif (${e.empty} === true && len === 0) {\n\t\t\t\t// Do nothing\n\t\t\t} else {\n\t\t\t\t${i}\n\t\t\t}\n\t\t`
            );
          }
          if (
            (null != e.contains &&
              r.push(
                `\n\t\t\tif (value.indexOf("${
                  e.contains
                }") === -1) {\n\t\t\t\t${this.makeError({
                  type: "stringContains",
                  expected: '"' + e.contains + '"',
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.enum)
          ) {
            const n = JSON.stringify(e.enum);
            r.push(
              `\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError(
                {
                  type: "stringEnum",
                  expected: '"' + e.enum.join(", ") + '"',
                  actual: "origValue",
                  messages: t,
                }
              )}\n\t\t\t}\n\t\t`
            );
          }
          return (
            !0 === e.numeric &&
              r.push(
                `\n\t\t\tif (!${ht.toString()}.test(value) ) {\n\t\t\t\t${this.makeError(
                  { type: "stringNumeric", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.alpha &&
              r.push(
                `\n\t\t\tif(!${dt.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlpha", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.alphanum &&
              r.push(
                `\n\t\t\tif(!${mt.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphanum", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.alphadash &&
              r.push(
                `\n\t\t\tif(!${ft.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphadash", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.hex &&
              r.push(
                `\n\t\t\tif(value.length % 2 !== 0 || !${vt.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringHex", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.singleLine &&
              r.push(
                `\n\t\t\tif(value.includes("\\n")) {\n\t\t\t\t${this.makeError({
                  type: "stringSingleLine",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.base64 &&
              r.push(
                `\n\t\t\tif(!${gt.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringBase64", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            r.push("\n\t\treturn value;\n\t"),
            { sanitized: s, source: r.join("\n") }
          );
        },
        bt = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          if (null != e.items) {
            if (!Array.isArray(e.items))
              throw new Error(
                `Invalid '${e.type}' schema. The 'items' field must be an array.`
              );
            if (0 === e.items.length)
              throw new Error(
                `Invalid '${e.type}' schema. The 'items' field must not be an empty array.`
              );
          }
          if (
            (r.push(
              `\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({
                type: "tuple",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`
            ),
            !1 === e.empty &&
              r.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "tupleEmpty",
                  actual: "value",
                  messages: t,
                })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
              ),
            null != e.items)
          ) {
            r.push(
              `\n\t\t\tif (${
                e.empty
              } !== false && len === 0) {\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (len !== ${
                e.items.length
              }) {\n\t\t\t\t${this.makeError({
                type: "tupleLength",
                expected: e.items.length,
                actual: "len",
                messages: t,
              })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
            ),
              r.push(
                "\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t"
              );
            for (let t = 0; t < e.items.length; t++) {
              const s = `${n}[${t}]`,
                o = this.getRuleFromSchema(e.items[t]),
                a = `\n\t\t\tarr[${t}] = context.fn[%%INDEX%%](arr[${t}], (parentField ? parentField : "") + "[" + ${t} + "]", parent, errors, context);\n\t\t`;
              r.push(this.compileRule(o, i, s, a, `arr[${t}]`));
            }
          }
          return r.push("\n\t\treturn value;\n\t"), { source: r.join("\n") };
        };
      const xt = /^https?:\/\/\S+/;
      var wt = function ({ schema: e, messages: t }, n, i) {
        const r = [];
        return (
          r.push(
            `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
              type: "string",
              actual: "value",
              messages: t,
            })}\n\t\t\treturn value;\n\t\t}\n\t`
          ),
          e.empty
            ? r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t")
            : r.push(
                `\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({
                  type: "urlEmpty",
                  actual: "value",
                  messages: t,
                })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
              ),
          r.push(
            `\n\t\tif (!${xt.toString()}.test(value)) {\n\t\t\t${this.makeError(
              { type: "url", actual: "value", messages: t }
            )}\n\t\t}\n\n\t\treturn value;\n\t`
          ),
          { source: r.join("\n") }
        );
      };
      const kt = /^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;
      var Ct = function ({ schema: e, messages: t }, n) {
        const i = [];
        return (
          i.push(
            `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
              type: "string",
              actual: "value",
              messages: t,
            })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${kt.toString()}.test(val)) {\n\t\t\t${this.makeError(
              { type: "uuid", actual: "value", messages: t }
            )}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`
          ),
          parseInt(e.version) < 7 &&
            i.push(
              `\n\t\t\tif (${
                e.version
              } !== version) {\n\t\t\t\t${this.makeError({
                type: "uuidVersion",
                expected: e.version,
                actual: "version",
                messages: t,
              })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
            ),
          i.push(
            `\n\t\tswitch (version) {\n\t\tcase 0:\n\t\tcase 1:\n\t\tcase 2:\n\t\tcase 6:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {\n\t\t\t\t${this.makeError(
              { type: "uuid", actual: "value", messages: t }
            )}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`
          ),
          { source: i.join("\n") }
        );
      };
      const Et = /^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;
      var Ot = function ({ schema: e, messages: t }, n, i) {
          return {
            source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
              { type: "string", actual: "value", messages: t }
            )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${Et.toString()}.test(v)) {\n\t\t\t\t${this.makeError(
              { type: "mac", actual: "value", messages: t }
            )}\n\t\t\t}\n\t\t\t\n\t\t\treturn value;\n\t\t`,
          };
        },
        Pt = function ({ schema: e, messages: t }, n, i) {
          return {
            source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
              { type: "string", actual: "value", messages: t }
            )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError(
              { type: "luhn", actual: "value", messages: t }
            )}\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`,
          };
        };
      function It(e) {
        var t = { exports: {} };
        return e(t, t.exports), t.exports;
      }
      function Mt(e) {
        throw new Error(
          'Could not dynamically require "' +
            e +
            '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
        );
      }
      let Tt, St, At, _t;
      var Lt = function (e) {
          Tt ||
            ((Tt = Mt("prettier")),
            (St = {
              parser: "babel",
              useTabs: !1,
              printWidth: 120,
              trailingComma: "none",
              tabWidth: 4,
              singleQuote: !1,
              semi: !0,
              bracketSpacing: !0,
            }),
            (At = Mt("cli-highlight")),
            (_t = {
              language: "js",
              theme: At.fromJson({
                keyword: ["white", "bold"],
                built_in: "magenta",
                literal: "cyan",
                number: "magenta",
                regexp: "red",
                string: ["yellow", "bold"],
                symbol: "plain",
                class: "blue",
                attr: "plain",
                function: ["white", "bold"],
                title: "plain",
                params: "green",
                comment: "grey",
              }),
            }));
          const t = Tt.format(e, St);
          return At.highlight(t, _t);
        },
        Dt = "INUMBER",
        Bt = "IOP1",
        jt = "IOP2",
        Vt = "IOP3",
        Nt = "IVAR",
        Ft = "IVARNAME",
        $t = "IFUNCALL",
        zt = "IFUNDEF",
        Rt = "IEXPR",
        Ht = "IEXPREVAL",
        qt = "IMEMBER",
        Gt = "IENDSTATEMENT",
        Wt = "IARRAY";
      function Ut(e, t) {
        (this.type = e), (this.value = null != t ? t : 0);
      }
      function Jt(e) {
        return new Ut(Bt, e);
      }
      function Kt(e) {
        return new Ut(jt, e);
      }
      function Xt(e) {
        return new Ut(Vt, e);
      }
      function Qt(e, t, n) {
        var i,
          r,
          s,
          o,
          a,
          l,
          c = [];
        if (Yt(e)) return en(e, n);
        for (var u = e.length, p = 0; p < u; p++) {
          var h = e[p],
            d = h.type;
          if (d === Dt || d === Ft) c.push(h.value);
          else if (d === jt)
            (r = c.pop()),
              (i = c.pop()),
              "and" === h.value
                ? c.push(!!i && !!Qt(r, t, n))
                : "or" === h.value
                ? c.push(!!i || !!Qt(r, t, n))
                : "=" === h.value
                ? ((o = t.binaryOps[h.value]), c.push(o(i, Qt(r, t, n), n)))
                : ((o = t.binaryOps[h.value]), c.push(o(en(i, n), en(r, n))));
          else if (d === Vt)
            (s = c.pop()),
              (r = c.pop()),
              (i = c.pop()),
              "?" === h.value
                ? c.push(Qt(i ? r : s, t, n))
                : ((o = t.ternaryOps[h.value]),
                  c.push(o(en(i, n), en(r, n), en(s, n))));
          else if (d === Nt)
            if (h.value in t.functions) c.push(t.functions[h.value]);
            else if (
              h.value in t.unaryOps &&
              t.parser.isOperatorEnabled(h.value)
            )
              c.push(t.unaryOps[h.value]);
            else {
              var m = n[h.value];
              if (void 0 === m)
                throw new Error("undefined variable: " + h.value);
              c.push(m);
            }
          else if (d === Bt)
            (i = c.pop()), (o = t.unaryOps[h.value]), c.push(o(en(i, n)));
          else if (d === $t) {
            for (l = h.value, a = []; l-- > 0; ) a.unshift(en(c.pop(), n));
            if (!(o = c.pop()).apply || !o.call)
              throw new Error(o + " is not a function");
            c.push(o.apply(void 0, a));
          } else if (d === zt)
            c.push(
              (function () {
                for (var e = c.pop(), i = [], r = h.value; r-- > 0; )
                  i.unshift(c.pop());
                var s = c.pop(),
                  o = function () {
                    for (
                      var r = Object.assign({}, n), s = 0, o = i.length;
                      s < o;
                      s++
                    )
                      r[i[s]] = arguments[s];
                    return Qt(e, t, r);
                  };
                return (
                  Object.defineProperty(o, "name", { value: s, writable: !1 }),
                  (n[s] = o),
                  o
                );
              })()
            );
          else if (d === Rt) c.push(Zt(h, t));
          else if (d === Ht) c.push(h);
          else if (d === qt) (i = c.pop()), c.push(i[h.value]);
          else if (d === Gt) c.pop();
          else {
            if (d !== Wt) throw new Error("invalid Expression");
            for (l = h.value, a = []; l-- > 0; ) a.unshift(c.pop());
            c.push(a);
          }
        }
        if (c.length > 1) throw new Error("invalid Expression (parity)");
        return 0 === c[0] ? 0 : en(c[0], n);
      }
      function Zt(e, t, n) {
        return Yt(e)
          ? e
          : {
              type: Ht,
              value: function (n) {
                return Qt(e.value, t, n);
              },
            };
      }
      function Yt(e) {
        return e && e.type === Ht;
      }
      function en(e, t) {
        return Yt(e) ? e.value(t) : e;
      }
      function tn(e, t) {
        for (var n, i, r, s, o, a, l = [], c = 0; c < e.length; c++) {
          var u = e[c],
            p = u.type;
          if (p === Dt)
            "number" == typeof u.value && u.value < 0
              ? l.push("(" + u.value + ")")
              : Array.isArray(u.value)
              ? l.push("[" + u.value.map(nn).join(", ") + "]")
              : l.push(nn(u.value));
          else if (p === jt)
            (i = l.pop()),
              (n = l.pop()),
              (s = u.value),
              t
                ? "^" === s
                  ? l.push("Math.pow(" + n + ", " + i + ")")
                  : "and" === s
                  ? l.push("(!!" + n + " && !!" + i + ")")
                  : "or" === s
                  ? l.push("(!!" + n + " || !!" + i + ")")
                  : "||" === s
                  ? l.push(
                      "(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }((" +
                        n +
                        "),(" +
                        i +
                        ")))"
                    )
                  : "==" === s
                  ? l.push("(" + n + " === " + i + ")")
                  : "!=" === s
                  ? l.push("(" + n + " !== " + i + ")")
                  : "[" === s
                  ? l.push(n + "[(" + i + ") | 0]")
                  : l.push("(" + n + " " + s + " " + i + ")")
                : "[" === s
                ? l.push(n + "[" + i + "]")
                : l.push("(" + n + " " + s + " " + i + ")");
          else if (p === Vt) {
            if (
              ((r = l.pop()),
              (i = l.pop()),
              (n = l.pop()),
              "?" !== (s = u.value))
            )
              throw new Error("invalid Expression");
            l.push("(" + n + " ? " + i + " : " + r + ")");
          } else if (p === Nt || p === Ft) l.push(u.value);
          else if (p === Bt)
            (n = l.pop()),
              "-" === (s = u.value) || "+" === s
                ? l.push("(" + s + n + ")")
                : t
                ? "not" === s
                  ? l.push("(!" + n + ")")
                  : "!" === s
                  ? l.push("fac(" + n + ")")
                  : l.push(s + "(" + n + ")")
                : "!" === s
                ? l.push("(" + n + "!)")
                : l.push("(" + s + " " + n + ")");
          else if (p === $t) {
            for (a = u.value, o = []; a-- > 0; ) o.unshift(l.pop());
            (s = l.pop()), l.push(s + "(" + o.join(", ") + ")");
          } else if (p === zt) {
            for (i = l.pop(), a = u.value, o = []; a-- > 0; )
              o.unshift(l.pop());
            (n = l.pop()),
              t
                ? l.push(
                    "(" +
                      n +
                      " = function(" +
                      o.join(", ") +
                      ") { return " +
                      i +
                      " })"
                  )
                : l.push("(" + n + "(" + o.join(", ") + ") = " + i + ")");
          } else if (p === qt) (n = l.pop()), l.push(n + "." + u.value);
          else if (p === Wt) {
            for (a = u.value, o = []; a-- > 0; ) o.unshift(l.pop());
            l.push("[" + o.join(", ") + "]");
          } else if (p === Rt) l.push("(" + tn(u.value, t) + ")");
          else if (p !== Gt) throw new Error("invalid Expression");
        }
        return (
          l.length > 1 && (l = t ? [l.join(",")] : [l.join(";")]), String(l[0])
        );
      }
      function nn(e) {
        return "string" == typeof e
          ? JSON.stringify(e)
              .replace(/\u2028/g, "\\u2028")
              .replace(/\u2029/g, "\\u2029")
          : e;
      }
      function rn(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n] === t) return !0;
        return !1;
      }
      function sn(e, t, n) {
        for (
          var i = !!(n = n || {}).withMembers, r = null, s = 0;
          s < e.length;
          s++
        ) {
          var o = e[s];
          o.type === Nt || o.type === Ft
            ? i || rn(t, o.value)
              ? null !== r
                ? (rn(t, r) || t.push(r), (r = o.value))
                : (r = o.value)
              : t.push(o.value)
            : o.type === qt && i && null !== r
            ? (r += "." + o.value)
            : o.type === Rt
            ? sn(o.value, t, n)
            : null !== r && (rn(t, r) || t.push(r), (r = null));
        }
        null === r || rn(t, r) || t.push(r);
      }
      function on(e, t) {
        (this.tokens = e),
          (this.parser = t),
          (this.unaryOps = t.unaryOps),
          (this.binaryOps = t.binaryOps),
          (this.ternaryOps = t.ternaryOps),
          (this.functions = t.functions);
      }
      (Ut.prototype.toString = function () {
        switch (this.type) {
          case Dt:
          case Bt:
          case jt:
          case Vt:
          case Nt:
          case Ft:
          case Gt:
            return this.value;
          case $t:
            return "CALL " + this.value;
          case zt:
            return "DEF " + this.value;
          case Wt:
            return "ARRAY " + this.value;
          case qt:
            return "." + this.value;
          default:
            return "Invalid Instruction";
        }
      }),
        (on.prototype.simplify = function (e) {
          return (
            (e = e || {}),
            new on(
              (function e(t, n, i, r, s) {
                for (var o, a, l, c, u = [], p = [], h = 0; h < t.length; h++) {
                  var d = t[h],
                    m = d.type;
                  if (m === Dt || m === Ft)
                    Array.isArray(d.value)
                      ? u.push.apply(
                          u,
                          e(
                            d.value
                              .map(function (e) {
                                return new Ut(Dt, e);
                              })
                              .concat(new Ut(Wt, d.value.length)),
                            n,
                            i,
                            r,
                            s
                          )
                        )
                      : u.push(d);
                  else if (m === Nt && s.hasOwnProperty(d.value))
                    (d = new Ut(Dt, s[d.value])), u.push(d);
                  else if (m === jt && u.length > 1)
                    (a = u.pop()),
                      (o = u.pop()),
                      (c = i[d.value]),
                      (d = new Ut(Dt, c(o.value, a.value))),
                      u.push(d);
                  else if (m === Vt && u.length > 2)
                    (l = u.pop()),
                      (a = u.pop()),
                      (o = u.pop()),
                      "?" === d.value
                        ? u.push(o.value ? a.value : l.value)
                        : ((c = r[d.value]),
                          (d = new Ut(Dt, c(o.value, a.value, l.value))),
                          u.push(d));
                  else if (m === Bt && u.length > 0)
                    (o = u.pop()),
                      (c = n[d.value]),
                      (d = new Ut(Dt, c(o.value))),
                      u.push(d);
                  else if (m === Rt) {
                    for (; u.length > 0; ) p.push(u.shift());
                    p.push(new Ut(Rt, e(d.value, n, i, r, s)));
                  } else if (m === qt && u.length > 0)
                    (o = u.pop()), u.push(new Ut(Dt, o.value[d.value]));
                  else {
                    for (; u.length > 0; ) p.push(u.shift());
                    p.push(d);
                  }
                }
                for (; u.length > 0; ) p.push(u.shift());
                return p;
              })(
                this.tokens,
                this.unaryOps,
                this.binaryOps,
                this.ternaryOps,
                e
              ),
              this.parser
            )
          );
        }),
        (on.prototype.substitute = function (e, t) {
          return (
            t instanceof on || (t = this.parser.parse(String(t))),
            new on(
              (function e(t, n, i) {
                for (var r = [], s = 0; s < t.length; s++) {
                  var o = t[s],
                    a = o.type;
                  if (a === Nt && o.value === n)
                    for (var l = 0; l < i.tokens.length; l++) {
                      var c,
                        u = i.tokens[l];
                      (c =
                        u.type === Bt
                          ? Jt(u.value)
                          : u.type === jt
                          ? Kt(u.value)
                          : u.type === Vt
                          ? Xt(u.value)
                          : new Ut(u.type, u.value)),
                        r.push(c);
                    }
                  else
                    a === Rt ? r.push(new Ut(Rt, e(o.value, n, i))) : r.push(o);
                }
                return r;
              })(this.tokens, e, t),
              this.parser
            )
          );
        }),
        (on.prototype.evaluate = function (e) {
          return (e = e || {}), Qt(this.tokens, this, e);
        }),
        (on.prototype.toString = function () {
          return tn(this.tokens, !1);
        }),
        (on.prototype.symbols = function (e) {
          e = e || {};
          var t = [];
          return sn(this.tokens, t, e), t;
        }),
        (on.prototype.variables = function (e) {
          e = e || {};
          var t = [];
          sn(this.tokens, t, e);
          var n = this.functions;
          return t.filter(function (e) {
            return !(e in n);
          });
        }),
        (on.prototype.toJSFunction = function (e, t) {
          var n = this,
            i = new Function(
              e,
              "with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return " +
                tn(this.simplify(t).tokens, !0) +
                "; }"
            );
          return function () {
            return i.apply(n, arguments);
          };
        });
      var an = "TEOF",
        ln = "TOP",
        cn = "TNUMBER",
        un = "TSTRING",
        pn = "TPAREN",
        hn = "TBRACKET",
        dn = "TCOMMA",
        mn = "TNAME",
        fn = "TSEMICOLON";
      function vn(e, t, n) {
        (this.type = e), (this.value = t), (this.index = n);
      }
      function gn(e, t) {
        (this.pos = 0),
          (this.current = null),
          (this.unaryOps = e.unaryOps),
          (this.binaryOps = e.binaryOps),
          (this.ternaryOps = e.ternaryOps),
          (this.consts = e.consts),
          (this.expression = t),
          (this.savedPosition = 0),
          (this.savedCurrent = null),
          (this.options = e.options),
          (this.parser = e);
      }
      (vn.prototype.toString = function () {
        return this.type + ": " + this.value;
      }),
        (gn.prototype.newToken = function (e, t, n) {
          return new vn(e, t, null != n ? n : this.pos);
        }),
        (gn.prototype.save = function () {
          (this.savedPosition = this.pos), (this.savedCurrent = this.current);
        }),
        (gn.prototype.restore = function () {
          (this.pos = this.savedPosition), (this.current = this.savedCurrent);
        }),
        (gn.prototype.next = function () {
          return this.pos >= this.expression.length
            ? this.newToken(an, "EOF")
            : this.isWhitespace() || this.isComment()
            ? this.next()
            : this.isRadixInteger() ||
              this.isNumber() ||
              this.isOperator() ||
              this.isString() ||
              this.isParen() ||
              this.isBracket() ||
              this.isComma() ||
              this.isSemicolon() ||
              this.isNamedOp() ||
              this.isConst() ||
              this.isName()
            ? this.current
            : void this.parseError(
                'Unknown character "' + this.expression.charAt(this.pos) + '"'
              );
        }),
        (gn.prototype.isString = function () {
          var e = !1,
            t = this.pos,
            n = this.expression.charAt(t);
          if ("'" === n || '"' === n)
            for (
              var i = this.expression.indexOf(n, t + 1);
              i >= 0 && this.pos < this.expression.length;

            ) {
              if (
                ((this.pos = i + 1), "\\" !== this.expression.charAt(i - 1))
              ) {
                var r = this.expression.substring(t + 1, i);
                (this.current = this.newToken(un, this.unescape(r), t)),
                  (e = !0);
                break;
              }
              i = this.expression.indexOf(n, i + 1);
            }
          return e;
        }),
        (gn.prototype.isParen = function () {
          var e = this.expression.charAt(this.pos);
          return (
            ("(" === e || ")" === e) &&
            ((this.current = this.newToken(pn, e)), this.pos++, !0)
          );
        }),
        (gn.prototype.isBracket = function () {
          var e = this.expression.charAt(this.pos);
          return !(
            ("[" !== e && "]" !== e) ||
            !this.isOperatorEnabled("[") ||
            ((this.current = this.newToken(hn, e)), this.pos++, 0)
          );
        }),
        (gn.prototype.isComma = function () {
          return (
            "," === this.expression.charAt(this.pos) &&
            ((this.current = this.newToken(dn, ",")), this.pos++, !0)
          );
        }),
        (gn.prototype.isSemicolon = function () {
          return (
            ";" === this.expression.charAt(this.pos) &&
            ((this.current = this.newToken(fn, ";")), this.pos++, !0)
          );
        }),
        (gn.prototype.isConst = function () {
          for (var e = this.pos, t = e; t < this.expression.length; t++) {
            var n = this.expression.charAt(t);
            if (
              n.toUpperCase() === n.toLowerCase() &&
              (t === this.pos ||
                ("_" !== n && "." !== n && (n < "0" || n > "9")))
            )
              break;
          }
          if (t > e) {
            var i = this.expression.substring(e, t);
            if (i in this.consts)
              return (
                (this.current = this.newToken(cn, this.consts[i])),
                (this.pos += i.length),
                !0
              );
          }
          return !1;
        }),
        (gn.prototype.isNamedOp = function () {
          for (var e = this.pos, t = e; t < this.expression.length; t++) {
            var n = this.expression.charAt(t);
            if (
              n.toUpperCase() === n.toLowerCase() &&
              (t === this.pos || ("_" !== n && (n < "0" || n > "9")))
            )
              break;
          }
          if (t > e) {
            var i = this.expression.substring(e, t);
            if (
              this.isOperatorEnabled(i) &&
              (i in this.binaryOps ||
                i in this.unaryOps ||
                i in this.ternaryOps)
            )
              return (
                (this.current = this.newToken(ln, i)),
                (this.pos += i.length),
                !0
              );
          }
          return !1;
        }),
        (gn.prototype.isName = function () {
          for (
            var e = this.pos, t = e, n = !1;
            t < this.expression.length;
            t++
          ) {
            var i = this.expression.charAt(t);
            if (i.toUpperCase() === i.toLowerCase()) {
              if (t === this.pos && ("$" === i || "_" === i)) {
                "_" === i && (n = !0);
                continue;
              }
              if (t === this.pos || !n || ("_" !== i && (i < "0" || i > "9")))
                break;
            } else n = !0;
          }
          if (n) {
            var r = this.expression.substring(e, t);
            return (
              (this.current = this.newToken(mn, r)), (this.pos += r.length), !0
            );
          }
          return !1;
        }),
        (gn.prototype.isWhitespace = function () {
          for (
            var e = !1, t = this.expression.charAt(this.pos);
            !(
              (" " !== t && "\t" !== t && "\n" !== t && "\r" !== t) ||
              ((e = !0), this.pos++, this.pos >= this.expression.length)
            );

          )
            t = this.expression.charAt(this.pos);
          return e;
        });
      var yn = /^[0-9a-f]{4}$/i;
      function bn(e, t, n) {
        (this.parser = e),
          (this.tokens = t),
          (this.current = null),
          (this.nextToken = null),
          this.next(),
          (this.savedCurrent = null),
          (this.savedNextToken = null),
          (this.allowMemberAccess = !1 !== n.allowMemberAccess);
      }
      (gn.prototype.unescape = function (e) {
        var t = e.indexOf("\\");
        if (t < 0) return e;
        for (var n = e.substring(0, t); t >= 0; ) {
          var i = e.charAt(++t);
          switch (i) {
            case "'":
              n += "'";
              break;
            case '"':
              n += '"';
              break;
            case "\\":
              n += "\\";
              break;
            case "/":
              n += "/";
              break;
            case "b":
              n += "\b";
              break;
            case "f":
              n += "\f";
              break;
            case "n":
              n += "\n";
              break;
            case "r":
              n += "\r";
              break;
            case "t":
              n += "\t";
              break;
            case "u":
              var r = e.substring(t + 1, t + 5);
              yn.test(r) || this.parseError("Illegal escape sequence: \\u" + r),
                (n += String.fromCharCode(parseInt(r, 16))),
                (t += 4);
              break;
            default:
              throw this.parseError('Illegal escape sequence: "\\' + i + '"');
          }
          ++t;
          var s = e.indexOf("\\", t);
          (n += e.substring(t, s < 0 ? e.length : s)), (t = s);
        }
        return n;
      }),
        (gn.prototype.isComment = function () {
          return (
            "/" === this.expression.charAt(this.pos) &&
            "*" === this.expression.charAt(this.pos + 1) &&
            ((this.pos = this.expression.indexOf("*/", this.pos) + 2),
            1 === this.pos && (this.pos = this.expression.length),
            !0)
          );
        }),
        (gn.prototype.isRadixInteger = function () {
          var e,
            t,
            n = this.pos;
          if (
            n >= this.expression.length - 2 ||
            "0" !== this.expression.charAt(n)
          )
            return !1;
          if ((++n, "x" === this.expression.charAt(n)))
            (e = 16), (t = /^[0-9a-f]$/i), ++n;
          else {
            if ("b" !== this.expression.charAt(n)) return !1;
            (e = 2), (t = /^[01]$/i), ++n;
          }
          for (var i = !1, r = n; n < this.expression.length; ) {
            var s = this.expression.charAt(n);
            if (!t.test(s)) break;
            n++, (i = !0);
          }
          return (
            i &&
              ((this.current = this.newToken(
                cn,
                parseInt(this.expression.substring(r, n), e)
              )),
              (this.pos = n)),
            i
          );
        }),
        (gn.prototype.isNumber = function () {
          for (
            var e, t = !1, n = this.pos, i = n, r = n, s = !1, o = !1;
            n < this.expression.length &&
            (((e = this.expression.charAt(n)) >= "0" && e <= "9") ||
              (!s && "." === e));

          )
            "." === e ? (s = !0) : (o = !0), n++, (t = o);
          if ((t && (r = n), "e" === e || "E" === e)) {
            n++;
            for (var a = !0, l = !1; n < this.expression.length; ) {
              if (
                ((e = this.expression.charAt(n)),
                !a || ("+" !== e && "-" !== e))
              ) {
                if (!(e >= "0" && e <= "9")) break;
                (l = !0), (a = !1);
              } else a = !1;
              n++;
            }
            l || (n = r);
          }
          return (
            t
              ? ((this.current = this.newToken(
                  cn,
                  parseFloat(this.expression.substring(i, n))
                )),
                (this.pos = n))
              : (this.pos = r),
            t
          );
        }),
        (gn.prototype.isOperator = function () {
          var e = this.pos,
            t = this.expression.charAt(this.pos);
          if (
            "+" === t ||
            "-" === t ||
            "*" === t ||
            "/" === t ||
            "%" === t ||
            "^" === t ||
            "?" === t ||
            ":" === t ||
            "." === t
          )
            this.current = this.newToken(ln, t);
          else if ("∙" === t || "•" === t)
            this.current = this.newToken(ln, "*");
          else if (">" === t)
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(ln, ">=")), this.pos++)
              : (this.current = this.newToken(ln, ">"));
          else if ("<" === t)
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(ln, "<=")), this.pos++)
              : (this.current = this.newToken(ln, "<"));
          else if ("|" === t) {
            if ("|" !== this.expression.charAt(this.pos + 1)) return !1;
            (this.current = this.newToken(ln, "||")), this.pos++;
          } else if ("=" === t)
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(ln, "==")), this.pos++)
              : (this.current = this.newToken(ln, t));
          else {
            if ("!" !== t) return !1;
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(ln, "!=")), this.pos++)
              : (this.current = this.newToken(ln, t));
          }
          return (
            this.pos++,
            !!this.isOperatorEnabled(this.current.value) || ((this.pos = e), !1)
          );
        }),
        (gn.prototype.isOperatorEnabled = function (e) {
          return this.parser.isOperatorEnabled(e);
        }),
        (gn.prototype.getCoordinates = function () {
          var e,
            t = 0,
            n = -1;
          do {
            t++, (e = this.pos - n), (n = this.expression.indexOf("\n", n + 1));
          } while (n >= 0 && n < this.pos);
          return { line: t, column: e };
        }),
        (gn.prototype.parseError = function (e) {
          var t = this.getCoordinates();
          throw new Error(
            "parse error [" + t.line + ":" + t.column + "]: " + e
          );
        }),
        (bn.prototype.next = function () {
          return (
            (this.current = this.nextToken),
            (this.nextToken = this.tokens.next())
          );
        }),
        (bn.prototype.tokenMatches = function (e, t) {
          return (
            void 0 === t ||
            (Array.isArray(t)
              ? rn(t, e.value)
              : "function" == typeof t
              ? t(e)
              : e.value === t)
          );
        }),
        (bn.prototype.save = function () {
          (this.savedCurrent = this.current),
            (this.savedNextToken = this.nextToken),
            this.tokens.save();
        }),
        (bn.prototype.restore = function () {
          this.tokens.restore(),
            (this.current = this.savedCurrent),
            (this.nextToken = this.savedNextToken);
        }),
        (bn.prototype.accept = function (e, t) {
          return !(
            this.nextToken.type !== e ||
            !this.tokenMatches(this.nextToken, t) ||
            (this.next(), 0)
          );
        }),
        (bn.prototype.expect = function (e, t) {
          if (!this.accept(e, t)) {
            var n = this.tokens.getCoordinates();
            throw new Error(
              "parse error [" +
                n.line +
                ":" +
                n.column +
                "]: Expected " +
                (t || e)
            );
          }
        }),
        (bn.prototype.parseAtom = function (e) {
          var t = this.tokens.unaryOps;
          if (
            this.accept(mn) ||
            this.accept(ln, function (e) {
              return e.value in t;
            })
          )
            e.push(new Ut(Nt, this.current.value));
          else if (this.accept(cn)) e.push(new Ut(Dt, this.current.value));
          else if (this.accept(un)) e.push(new Ut(Dt, this.current.value));
          else if (this.accept(pn, "("))
            this.parseExpression(e), this.expect(pn, ")");
          else {
            if (!this.accept(hn, "["))
              throw new Error("unexpected " + this.nextToken);
            if (this.accept(hn, "]")) e.push(new Ut(Wt, 0));
            else {
              var n = this.parseArrayList(e);
              e.push(new Ut(Wt, n));
            }
          }
        }),
        (bn.prototype.parseExpression = function (e) {
          var t = [];
          this.parseUntilEndStatement(e, t) ||
            (this.parseVariableAssignmentExpression(t),
            this.parseUntilEndStatement(e, t) || this.pushExpression(e, t));
        }),
        (bn.prototype.pushExpression = function (e, t) {
          for (var n = 0, i = t.length; n < i; n++) e.push(t[n]);
        }),
        (bn.prototype.parseUntilEndStatement = function (e, t) {
          return (
            !!this.accept(fn) &&
            (!this.nextToken ||
              this.nextToken.type === an ||
              (this.nextToken.type === pn && ")" === this.nextToken.value) ||
              t.push(new Ut(Gt)),
            this.nextToken.type !== an && this.parseExpression(t),
            e.push(new Ut(Rt, t)),
            !0)
          );
        }),
        (bn.prototype.parseArrayList = function (e) {
          for (var t = 0; !this.accept(hn, "]"); )
            for (this.parseExpression(e), ++t; this.accept(dn); )
              this.parseExpression(e), ++t;
          return t;
        }),
        (bn.prototype.parseVariableAssignmentExpression = function (e) {
          for (this.parseConditionalExpression(e); this.accept(ln, "="); ) {
            var t = e.pop(),
              n = [],
              i = e.length - 1;
            if (t.type !== $t) {
              if (t.type !== Nt && t.type !== qt)
                throw new Error("expected variable for assignment");
              this.parseVariableAssignmentExpression(n),
                e.push(new Ut(Ft, t.value)),
                e.push(new Ut(Rt, n)),
                e.push(Kt("="));
            } else {
              if (!this.tokens.isOperatorEnabled("()="))
                throw new Error("function definition is not permitted");
              for (var r = 0, s = t.value + 1; r < s; r++) {
                var o = i - r;
                e[o].type === Nt && (e[o] = new Ut(Ft, e[o].value));
              }
              this.parseVariableAssignmentExpression(n),
                e.push(new Ut(Rt, n)),
                e.push(new Ut(zt, t.value));
            }
          }
        }),
        (bn.prototype.parseConditionalExpression = function (e) {
          for (this.parseOrExpression(e); this.accept(ln, "?"); ) {
            var t = [],
              n = [];
            this.parseConditionalExpression(t),
              this.expect(ln, ":"),
              this.parseConditionalExpression(n),
              e.push(new Ut(Rt, t)),
              e.push(new Ut(Rt, n)),
              e.push(Xt("?"));
          }
        }),
        (bn.prototype.parseOrExpression = function (e) {
          for (this.parseAndExpression(e); this.accept(ln, "or"); ) {
            var t = [];
            this.parseAndExpression(t), e.push(new Ut(Rt, t)), e.push(Kt("or"));
          }
        }),
        (bn.prototype.parseAndExpression = function (e) {
          for (this.parseComparison(e); this.accept(ln, "and"); ) {
            var t = [];
            this.parseComparison(t), e.push(new Ut(Rt, t)), e.push(Kt("and"));
          }
        });
      var xn = ["==", "!=", "<", "<=", ">=", ">", "in"];
      bn.prototype.parseComparison = function (e) {
        for (this.parseAddSub(e); this.accept(ln, xn); ) {
          var t = this.current;
          this.parseAddSub(e), e.push(Kt(t.value));
        }
      };
      var wn = ["+", "-", "||"];
      bn.prototype.parseAddSub = function (e) {
        for (this.parseTerm(e); this.accept(ln, wn); ) {
          var t = this.current;
          this.parseTerm(e), e.push(Kt(t.value));
        }
      };
      var kn = ["*", "/", "%"];
      function Cn(e, t) {
        return Number(e) + Number(t);
      }
      function En(e, t) {
        return e - t;
      }
      function On(e, t) {
        return e * t;
      }
      function Pn(e, t) {
        return e / t;
      }
      function In(e, t) {
        return e % t;
      }
      function Mn(e, t) {
        return Array.isArray(e) && Array.isArray(t) ? e.concat(t) : "" + e + t;
      }
      function Tn(e, t) {
        return e === t;
      }
      function Sn(e, t) {
        return e !== t;
      }
      function An(e, t) {
        return e > t;
      }
      function _n(e, t) {
        return e < t;
      }
      function Ln(e, t) {
        return e >= t;
      }
      function Dn(e, t) {
        return e <= t;
      }
      function Bn(e, t) {
        return Boolean(e && t);
      }
      function jn(e, t) {
        return Boolean(e || t);
      }
      function Vn(e, t) {
        return rn(t, e);
      }
      function Nn(e) {
        return (Math.exp(e) - Math.exp(-e)) / 2;
      }
      function Fn(e) {
        return (Math.exp(e) + Math.exp(-e)) / 2;
      }
      function $n(e) {
        return e === 1 / 0
          ? 1
          : e === -1 / 0
          ? -1
          : (Math.exp(e) - Math.exp(-e)) / (Math.exp(e) + Math.exp(-e));
      }
      function zn(e) {
        return e === -1 / 0 ? e : Math.log(e + Math.sqrt(e * e + 1));
      }
      function Rn(e) {
        return Math.log(e + Math.sqrt(e * e - 1));
      }
      function Hn(e) {
        return Math.log((1 + e) / (1 - e)) / 2;
      }
      function qn(e) {
        return Math.log(e) * Math.LOG10E;
      }
      function Gn(e) {
        return -e;
      }
      function Wn(e) {
        return !e;
      }
      function Un(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      function Jn(e) {
        return Math.random() * (e || 1);
      }
      function Kn(e) {
        return Qn(e + 1);
      }
      (bn.prototype.parseTerm = function (e) {
        for (this.parseFactor(e); this.accept(ln, kn); ) {
          var t = this.current;
          this.parseFactor(e), e.push(Kt(t.value));
        }
      }),
        (bn.prototype.parseFactor = function (e) {
          var t = this.tokens.unaryOps;
          if (
            (this.save(),
            this.accept(ln, function (e) {
              return e.value in t;
            }))
          ) {
            if ("-" !== this.current.value && "+" !== this.current.value) {
              if (this.nextToken.type === pn && "(" === this.nextToken.value)
                return this.restore(), void this.parseExponential(e);
              if (
                this.nextToken.type === fn ||
                this.nextToken.type === dn ||
                this.nextToken.type === an ||
                (this.nextToken.type === pn && ")" === this.nextToken.value)
              )
                return this.restore(), void this.parseAtom(e);
            }
            var n = this.current;
            this.parseFactor(e), e.push(Jt(n.value));
          } else this.parseExponential(e);
        }),
        (bn.prototype.parseExponential = function (e) {
          for (this.parsePostfixExpression(e); this.accept(ln, "^"); )
            this.parseFactor(e), e.push(Kt("^"));
        }),
        (bn.prototype.parsePostfixExpression = function (e) {
          for (this.parseFunctionCall(e); this.accept(ln, "!"); )
            e.push(Jt("!"));
        }),
        (bn.prototype.parseFunctionCall = function (e) {
          var t = this.tokens.unaryOps;
          if (
            this.accept(ln, function (e) {
              return e.value in t;
            })
          ) {
            var n = this.current;
            this.parseAtom(e), e.push(Jt(n.value));
          } else
            for (this.parseMemberExpression(e); this.accept(pn, "("); )
              if (this.accept(pn, ")")) e.push(new Ut($t, 0));
              else {
                var i = this.parseArgumentList(e);
                e.push(new Ut($t, i));
              }
        }),
        (bn.prototype.parseArgumentList = function (e) {
          for (var t = 0; !this.accept(pn, ")"); )
            for (this.parseExpression(e), ++t; this.accept(dn); )
              this.parseExpression(e), ++t;
          return t;
        }),
        (bn.prototype.parseMemberExpression = function (e) {
          for (
            this.parseAtom(e);
            this.accept(ln, ".") || this.accept(hn, "[");

          ) {
            var t = this.current;
            if ("." === t.value) {
              if (!this.allowMemberAccess)
                throw new Error(
                  'unexpected ".", member access is not permitted'
                );
              this.expect(mn), e.push(new Ut(qt, this.current.value));
            } else {
              if ("[" !== t.value)
                throw new Error("unexpected symbol: " + t.value);
              if (!this.tokens.isOperatorEnabled("["))
                throw new Error('unexpected "[]", arrays are disabled');
              this.parseExpression(e), this.expect(hn, "]"), e.push(Kt("["));
            }
          }
        });
      var Xn = [
        0.9999999999999971,
        57.15623566586292,
        -59.59796035547549,
        14.136097974741746,
        -0.4919138160976202,
        3399464998481189e-20,
        4652362892704858e-20,
        -9837447530487956e-20,
        0.0001580887032249125,
        -0.00021026444172410488,
        0.00021743961811521265,
        -0.0001643181065367639,
        8441822398385275e-20,
        -26190838401581408e-21,
        36899182659531625e-22,
      ];
      function Qn(e) {
        var t, n;
        if (
          (function (e) {
            return isFinite(e) && e === Math.round(e);
          })(e)
        ) {
          if (e <= 0) return isFinite(e) ? 1 / 0 : NaN;
          if (e > 171) return 1 / 0;
          for (var i = e - 2, r = e - 1; i > 1; ) (r *= i), i--;
          return 0 === r && (r = 1), r;
        }
        if (e < 0.5) return Math.PI / (Math.sin(Math.PI * e) * Qn(1 - e));
        if (e >= 171.35) return 1 / 0;
        if (e > 85) {
          var s = e * e,
            o = s * e,
            a = o * e,
            l = a * e;
          return (
            Math.sqrt((2 * Math.PI) / e) *
            Math.pow(e / Math.E, e) *
            (1 +
              1 / (12 * e) +
              1 / (288 * s) -
              139 / (51840 * o) -
              571 / (2488320 * a) +
              163879 / (209018880 * l) +
              5246819 / (75246796800 * l * e))
          );
        }
        --e, (n = Xn[0]);
        for (var c = 1; c < Xn.length; ++c) n += Xn[c] / (e + c);
        return (
          (t = e + 4.7421875 + 0.5),
          Math.sqrt(2 * Math.PI) * Math.pow(t, e + 0.5) * Math.exp(-t) * n
        );
      }
      function Zn(e) {
        return Array.isArray(e) ? e.length : String(e).length;
      }
      function Yn() {
        for (var e = 0, t = 0, n = 0; n < arguments.length; n++) {
          var i,
            r = Math.abs(arguments[n]);
          t < r
            ? ((e = e * (i = t / r) * i + 1), (t = r))
            : (e += r > 0 ? (i = r / t) * i : r);
        }
        return t === 1 / 0 ? 1 / 0 : t * Math.sqrt(e);
      }
      function ei(e, t, n) {
        return e ? t : n;
      }
      function ti(e, t) {
        return void 0 === t || 0 == +t
          ? Math.round(e)
          : ((e = +e),
            (t = -+t),
            isNaN(e) || "number" != typeof t || t % 1 != 0
              ? NaN
              : ((e = e.toString().split("e")),
                +(
                  (e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] - t : -t))))
                    .toString()
                    .split("e"))[0] +
                  "e" +
                  (e[1] ? +e[1] + t : t)
                )));
      }
      function ni(e, t, n) {
        return n && (n[e] = t), t;
      }
      function ii(e, t) {
        return e[0 | t];
      }
      function ri(e) {
        return 1 === arguments.length && Array.isArray(e)
          ? Math.max.apply(Math, e)
          : Math.max.apply(Math, arguments);
      }
      function si(e) {
        return 1 === arguments.length && Array.isArray(e)
          ? Math.min.apply(Math, e)
          : Math.min.apply(Math, arguments);
      }
      function oi(e, t) {
        if ("function" != typeof e)
          throw new Error("First argument to map is not a function");
        if (!Array.isArray(t))
          throw new Error("Second argument to map is not an array");
        return t.map(function (t, n) {
          return e(t, n);
        });
      }
      function ai(e, t, n) {
        if ("function" != typeof e)
          throw new Error("First argument to fold is not a function");
        if (!Array.isArray(n))
          throw new Error("Second argument to fold is not an array");
        return n.reduce(function (t, n, i) {
          return e(t, n, i);
        }, t);
      }
      function li(e, t) {
        if ("function" != typeof e)
          throw new Error("First argument to filter is not a function");
        if (!Array.isArray(t))
          throw new Error("Second argument to filter is not an array");
        return t.filter(function (t, n) {
          return e(t, n);
        });
      }
      function ci(e, t) {
        if (!Array.isArray(t) && "string" != typeof t)
          throw new Error(
            "Second argument to indexOf is not a string or array"
          );
        return t.indexOf(e);
      }
      function ui(e, t) {
        if (!Array.isArray(t))
          throw new Error("Second argument to join is not an array");
        return t.join(e);
      }
      function pi(e) {
        return (e > 0) - (e < 0) || +e;
      }
      function hi(e) {
        return e < 0 ? -Math.pow(-e, 1 / 3) : Math.pow(e, 1 / 3);
      }
      function di(e) {
        return Math.exp(e) - 1;
      }
      function mi(e) {
        return Math.log(1 + e);
      }
      function fi(e) {
        return Math.log(e) / Math.LN2;
      }
      function vi(e) {
        (this.options = e || {}),
          (this.unaryOps = {
            sin: Math.sin,
            cos: Math.cos,
            tan: Math.tan,
            asin: Math.asin,
            acos: Math.acos,
            atan: Math.atan,
            sinh: Math.sinh || Nn,
            cosh: Math.cosh || Fn,
            tanh: Math.tanh || $n,
            asinh: Math.asinh || zn,
            acosh: Math.acosh || Rn,
            atanh: Math.atanh || Hn,
            sqrt: Math.sqrt,
            cbrt: Math.cbrt || hi,
            log: Math.log,
            log2: Math.log2 || fi,
            ln: Math.log,
            lg: Math.log10 || qn,
            log10: Math.log10 || qn,
            expm1: Math.expm1 || di,
            log1p: Math.log1p || mi,
            abs: Math.abs,
            ceil: Math.ceil,
            floor: Math.floor,
            round: Math.round,
            trunc: Math.trunc || Un,
            "-": Gn,
            "+": Number,
            exp: Math.exp,
            not: Wn,
            length: Zn,
            "!": Kn,
            sign: Math.sign || pi,
          }),
          (this.binaryOps = {
            "+": Cn,
            "-": En,
            "*": On,
            "/": Pn,
            "%": In,
            "^": Math.pow,
            "||": Mn,
            "==": Tn,
            "!=": Sn,
            ">": An,
            "<": _n,
            ">=": Ln,
            "<=": Dn,
            and: Bn,
            or: jn,
            in: Vn,
            "=": ni,
            "[": ii,
          }),
          (this.ternaryOps = { "?": ei }),
          (this.functions = {
            random: Jn,
            fac: Kn,
            min: si,
            max: ri,
            hypot: Math.hypot || Yn,
            pyt: Math.hypot || Yn,
            pow: Math.pow,
            atan2: Math.atan2,
            if: ei,
            gamma: Qn,
            roundTo: ti,
            map: oi,
            fold: ai,
            filter: li,
            indexOf: ci,
            join: ui,
          }),
          (this.consts = { E: Math.E, PI: Math.PI, true: !0, false: !1 });
      }
      (vi.prototype.parse = function (e) {
        var t = [],
          n = new bn(this, new gn(this, e), {
            allowMemberAccess: this.options.allowMemberAccess,
          });
        return n.parseExpression(t), n.expect(an, "EOF"), new on(t, this);
      }),
        (vi.prototype.evaluate = function (e, t) {
          return this.parse(e).evaluate(t);
        });
      var gi = new vi();
      (vi.parse = function (e) {
        return gi.parse(e);
      }),
        (vi.evaluate = function (e, t) {
          return gi.parse(e).evaluate(t);
        });
      var yi = {
        "+": "add",
        "-": "subtract",
        "*": "multiply",
        "/": "divide",
        "%": "remainder",
        "^": "power",
        "!": "factorial",
        "<": "comparison",
        ">": "comparison",
        "<=": "comparison",
        ">=": "comparison",
        "==": "comparison",
        "!=": "comparison",
        "||": "concatenate",
        and: "logical",
        or: "logical",
        not: "logical",
        "?": "conditional",
        ":": "conditional",
        "=": "assignment",
        "[": "array",
        "()=": "fndef",
      };
      vi.prototype.isOperatorEnabled = function (e) {
        var t = (function (e) {
            return yi.hasOwnProperty(e) ? yi[e] : e;
          })(e),
          n = this.options.operators || {};
        return !(t in n) || !!n[t];
      };
      var bi = function (e) {
          e = e.replace(/ /g, "");
          var t = /\(([^\(\)]|\(([^\(\)]|\(([^\(\)]|\(([^\(\)])*\))*\))*\))*\)/.exec(
            e
          );
          if (void 0 === t) return { result: !1 };
          var n = e.split(")");
          return { result: !0, unit: n[n.length - 1], expression: t[0] };
        },
        xi = (function () {
          function e(t) {
            a(this, e), (this.expressionProps = t);
          }
          return (
            c(e, [
              {
                key: "resize",
                value: function (e) {
                  var t = bi(this.expressionProps.expression),
                    n = "(".concat(t.expression, "*").concat(e, ")");
                  return ""
                    .concat($.mathExpPreface, "(")
                    .concat(n, ")")
                    .concat(this.expressionProps.unit);
                },
              },
              {
                key: "calculateValues",
                value: function (e, t) {
                  for (
                    var n,
                      i = e.length,
                      r = new vi().parse(this.expressionProps.expression),
                      s = [],
                      o =
                        (u((n = {}), $.totalElements, i),
                        u(n, $.initParams, t),
                        n),
                      a = 0;
                    a < i;
                    a++
                  ) {
                    o[$.elementIndex] = a;
                    try {
                      var l = r.evaluate(o);
                      if (null == l) {
                        re.error(
                          "".concat(
                            this.expressionProps.expression,
                            " is not a valid mathematical expression. Returning 0"
                          )
                        ),
                          s.push(0);
                        continue;
                      }
                      var c = "".concat(l).concat(this.expressionProps.unit);
                      "amount" === this.expressionProps.type &&
                        (c = parseFloat(c)),
                        s.push(c);
                    } catch (e) {
                      re.error(
                        "".concat(
                          this.expressionProps.expression,
                          " is not a valid mathematical expression. Returning 0"
                        )
                      ),
                        s.push(0);
                    }
                  }
                  return s;
                },
              },
            ]),
            e
          );
        })();
      function wi(e) {
        return (
          (e = e.replace(/ /g, "")),
          /^@stagger\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+))\)$/.test(
            e
          )
        );
      }
      var ki = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (((e = e.replace(/ /g, "")), t && !wi(e))) return !1;
          var n = /.*\((.*)\).*/,
            i = n.exec(e)[1],
            r = i.split(",");
          return {
            start: r[0],
            end: r[1],
            startFraction: 1 * r[2] || 0,
            easing: r[3] || "linear",
            mode: r[4] || "linear",
            reverse: "true" === r[5],
          };
        },
        Ci = (function () {
          function e(t) {
            a(this, e), (this.staggerProps = t);
          }
          return (
            c(e, [
              {
                key: "resize",
                value: function (e) {
                  return (
                    (this.staggerProps.from *= e),
                    (this.staggerProps.to *= e),
                    !0 === this.staggerProps.integer &&
                      ((this.staggerProps.from = Math.round(
                        this.staggerProps.from
                      )),
                      (this.staggerProps.to = Math.round(
                        this.staggerProps.to
                      ))),
                    "@stagger("
                      .concat(this.staggerProps.from)
                      .concat(this.staggerProps.unit, ", ")
                      .concat(this.staggerProps.to)
                      .concat(this.staggerProps.unit, ", ")
                      .concat(this.staggerProps.fraction || 0, ", ")
                      .concat(this.staggerProps.easing || "linear", ", ")
                      .concat(this.staggerProps.mode || "linear", ", ")
                      .concat(this.staggerProps.reverse || !1, ")")
                  );
                },
              },
              {
                key: "calculateValues",
                value: function (e) {
                  for (
                    var t,
                      n,
                      i,
                      r,
                      s = (function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : "linear",
                          i =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          r = [];
                        if ("linear" === n)
                          for (var s = 0; s < e; s++) {
                            var o = s / (e - 1),
                              a = o < t ? o + 1 - t + 1 / (e - 1) : o - t;
                            i && (a = 1 - a), r.push(a);
                          }
                        else if ("omni" === n)
                          for (var l = 1 - t, c = 0; c < e; c++) {
                            var u = Math.abs(c / (e - 1) - t) / l;
                            i && (u = 1 - u), r.push(u);
                          }
                        return r;
                      })(
                        e.length,
                        this.staggerProps.fraction,
                        this.staggerProps.mode,
                        this.staggerProps.reverse
                      ),
                      o = [],
                      a = 0;
                    a < s.length;
                    a++
                  ) {
                    var l =
                      ((t = this.staggerProps.from),
                      (n = this.staggerProps.to),
                      (i = s[a]),
                      (r = this.staggerProps.easing) || (r = "linear"),
                      _e[r](i) * (n - t) + t);
                    !0 === this.staggerProps.integer && (l = Math.round(l)),
                      "measurement" === this.staggerProps.type &&
                        (l += this.staggerProps.unit),
                      o.push(l);
                  }
                  return o;
                },
              },
            ]),
            e
          );
        })(),
        Ei = wi,
        Oi = new RegExp(
          /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,
          "gi"
        ),
        Pi = new RegExp(/^[-+]?\d+$/),
        Ii = new (class {
          constructor(e) {
            if (
              ((this.opts = {}),
              (this.defaults = {}),
              (this.messages = Object.assign({}, qe)),
              (this.rules = {
                any: Ge,
                array: We,
                boolean: Ue,
                class: Je,
                custom: Ke,
                currency: Xe,
                date: Qe,
                email: et,
                enum: tt,
                equal: nt,
                forbidden: it,
                function: rt,
                multi: st,
                number: ot,
                object: ut,
                objectID: pt,
                string: yt,
                tuple: bt,
                url: wt,
                uuid: Ct,
                mac: Ot,
                luhn: Pt,
              }),
              (this.aliases = {}),
              (this.cache = new Map()),
              e)
            ) {
              if (
                (He(this.opts, e),
                e.defaults && He(this.defaults, e.defaults),
                e.messages)
              )
                for (const t in e.messages) this.addMessage(t, e.messages[t]);
              if (e.aliases)
                for (const t in e.aliases) this.alias(t, e.aliases[t]);
              if (e.customRules)
                for (const t in e.customRules) this.add(t, e.customRules[t]);
              if (e.plugins) {
                const t = e.plugins;
                if (!Array.isArray(t))
                  throw new Error("Plugins type must be array");
                t.forEach(this.plugin.bind(this));
              }
            }
          }
          validate(e, t) {
            return this.compile(t)(e);
          }
          wrapRequiredCheckSourceCode(e, t, n, i) {
            const r = [];
            let s,
              o = !0 === e.schema.optional || "forbidden" === e.schema.type,
              a =
                !0 === e.schema.optional ||
                !0 === e.schema.nullable ||
                "forbidden" === e.schema.type;
            if (null != e.schema.default) {
              let t;
              (o = !1),
                !0 !== e.schema.nullable && (a = !1),
                "function" == typeof e.schema.default
                  ? (n.customs[e.index] || (n.customs[e.index] = {}),
                    (n.customs[e.index].defaultFn = e.schema.default),
                    (t = `context.customs[${e.index}].defaultFn()`))
                  : (t = JSON.stringify(e.schema.default)),
                (s = `\n\t\t\t\tvalue = ${t};\n\t\t\t\t${i} = value;\n\t\t\t`);
            } else
              s = this.makeError({
                type: "required",
                actual: "value",
                messages: e.messages,
              });
            return (
              r.push(
                `\n\t\t\tif (value === undefined) { ${
                  o ? "\n// allow undefined\n" : s
                } }\n\t\t\telse if (value === null) { ${
                  a ? "\n// allow null\n" : s
                } }\n\t\t\t${t ? `else { ${t} }` : ""}\n\t\t`
              ),
              r.join("\n")
            );
          }
          compile(e) {
            if (null === e || "object" != typeof e)
              throw new Error("Invalid schema.");
            const t = this,
              n = { index: 0, rules: [], fn: [], customs: {} };
            if ((this.cache.clear(), !0 !== e.$$root))
              if (Array.isArray(e)) e = this.getRuleFromSchema(e).schema;
              else {
                const t = Object.assign({}, e);
                (e = { type: "object", strict: t.$$strict, properties: t }),
                  delete t.$$strict;
              }
            const i = ["var errors = [];", "var field;", "var parent = null;"],
              r = this.getRuleFromSchema(e);
            i.push(
              this.compileRule(
                r,
                n,
                null,
                "context.fn[%%INDEX%%](value, field, null, errors, context);",
                "value"
              )
            ),
              i.push("if (errors.length) {"),
              i.push(
                '\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message)\n\t\t\t\t\terr.message = err.message\n\t\t\t\t\t\t.replace(/\\{field\\}/g, err.field || "")\n\t\t\t\t\t\t.replace(/\\{expected\\}/g, err.expected != null ? err.expected : "")\n\t\t\t\t\t\t.replace(/\\{actual\\}/g, err.actual != null ? err.actual : "");\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t'
              ),
              i.push("}"),
              i.push("return true;");
            const s = i.join("\n"),
              o = new Function("value", "context", s);
            if (this.opts.debug) {
              let e = function (e) {
                return e;
              };
              "undefined" == typeof window && (e = Lt),
                n.fn.forEach((t, n) =>
                  console.log(e(`// Context.fn[${n}]\n` + t.toString()))
                ),
                console.log(e("// Main check function\n" + o.toString()));
            }
            return (
              this.cache.clear(),
              function (e) {
                return (n.data = e), o.call(t, e, n);
              }
            );
          }
          compileRule(e, t, n, i, r) {
            const s = [],
              o = this.cache.get(e.schema);
            if (o)
              ((e = o).cycle = !0),
                (e.cycleStack = []),
                s.push(
                  this.wrapRequiredCheckSourceCode(
                    e,
                    `\n\t\t\t\tvar rule = context.rules[${
                      e.index
                    }];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace(
                      /%%INDEX%%/g,
                      e.index
                    )}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,
                    t,
                    r
                  )
                );
            else {
              this.cache.set(e.schema, e),
                (e.index = t.index),
                (t.rules[t.index] = e);
              const o = null != n ? n : "$$root";
              t.index++;
              const a = e.ruleFunction.call(this, e, n, t);
              a.source = a.source.replace(/%%INDEX%%/g, e.index);
              const l = new Function(
                "value",
                "field",
                "parent",
                "errors",
                "context",
                a.source
              );
              (t.fn[e.index] = l),
                s.push(
                  this.wrapRequiredCheckSourceCode(
                    e,
                    i.replace(/%%INDEX%%/g, e.index),
                    t,
                    r
                  )
                ),
                s.push(
                  this.makeCustomValidator({
                    vName: r,
                    path: o,
                    schema: e.schema,
                    context: t,
                    messages: e.messages,
                    ruleIndex: e.index,
                  })
                );
            }
            return s.join("\n");
          }
          getRuleFromSchema(e) {
            if ("string" == typeof e) e = this.parseShortHand(e);
            else if (Array.isArray(e)) {
              if (0 == e.length) throw new Error("Invalid schema.");
              (e = { type: "multi", rules: e }).rules
                .map((e) => this.getRuleFromSchema(e))
                .every((e) => 1 == e.schema.optional) && (e.optional = !0);
            }
            if (e.$$type) {
              const t = e.$$type,
                n = this.getRuleFromSchema(t).schema;
              delete e.$$type;
              const i = Object.assign({}, e);
              for (const t in e) delete e[t];
              He(e, n, { skipIfExist: !0 }), (e.props = i);
            }
            const t = this.aliases[e.type];
            t && (delete e.type, (e = He(e, t, { skipIfExist: !0 })));
            const n = this.rules[e.type];
            if (!n)
              throw new Error(
                "Invalid '" + e.type + "' type in validator schema."
              );
            return {
              messages: Object.assign({}, this.messages, e.messages),
              schema: He(e, this.defaults[e.type], { skipIfExist: !0 }),
              ruleFunction: n,
            };
          }
          parseShortHand(e) {
            const t = e.split("|").map((e) => e.trim());
            let n,
              i = t[0];
            return (
              (n = i.endsWith("[]")
                ? this.getRuleFromSchema({
                    type: "array",
                    items: i.slice(0, -2),
                  }).schema
                : { type: t[0] }),
              t.slice(1).map((e) => {
                const t = e.indexOf(":");
                if (-1 !== t) {
                  const i = e.substr(0, t).trim();
                  let r = e.substr(t + 1).trim();
                  "true" === r || "false" === r
                    ? (r = "true" === r)
                    : Number.isNaN(Number(r)) || (r = Number(r)),
                    (n[i] = r);
                } else e.startsWith("no-") ? (n[e.slice(3)] = !1) : (n[e] = !0);
              }),
              n
            );
          }
          makeError({
            type: e,
            field: t,
            expected: n,
            actual: i,
            messages: r,
          }) {
            const s = { type: `"${e}"`, message: `"${r[e]}"` };
            return (
              (s.field = t ? `"${t}"` : "field"),
              null != n && (s.expected = n),
              null != i && (s.actual = i),
              `errors.push({ ${Object.keys(s)
                .map((e) => `${e}: ${s[e]}`)
                .join(", ")} });`
            );
          }
          makeCustomValidator({
            vName: e = "value",
            fnName: t = "custom",
            ruleIndex: n,
            path: i,
            schema: r,
            context: s,
            messages: o,
          }) {
            const a = "rule" + n,
              l = "fnCustomErrors" + n;
            if ("function" == typeof r[t]) {
              if (
                (s.customs[n]
                  ? ((s.customs[n].messages = o), (s.customs[n].schema = r))
                  : (s.customs[n] = { messages: o, schema: r }),
                this.opts.useNewCustomCheckerFunction)
              )
                return `\n               const ${a} = context.customs[${n}];\n\t\t\t\t\tconst ${l} = [];\n\t\t\t\t\t${e} = ${a}.schema.${t}.call(this, ${e}, ${l} , ${a}.schema, "${i}", parent, context);\n\t\t\t\t\tif (Array.isArray(${l} )) {\n                  ${l} .forEach(err => errors.push(Object.assign({ message: ${a}.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`;
              const c = "res_" + a;
              return `\n\t\t\t\tconst ${a} = context.customs[${n}];\n\t\t\t\tconst ${c} = ${a}.schema.${t}.call(this, ${e}, ${a}.schema, "${i}", parent, context);\n\t\t\t\tif (Array.isArray(${c})) {\n\t\t\t\t\t${c}.forEach(err => errors.push(Object.assign({ message: ${a}.messages[err.type], field }, err)));\n\t\t\t\t}\n\t\t`;
            }
            return "";
          }
          add(e, t) {
            this.rules[e] = t;
          }
          addMessage(e, t) {
            this.messages[e] = t;
          }
          alias(e, t) {
            if (this.rules[e])
              throw new Error("Alias name must not be a rule name");
            this.aliases[e] = t;
          }
          plugin(e) {
            if ("function" != typeof e)
              throw new Error("Plugin fn type must be function");
            return e(this);
          }
        })({
          messages: {
            color:
              "The '{field}' field must be an a valid color! Actual: {actual}",
            measurement:
              "The '{field}' must be a measurement with specs that are not met. You've either provided wrong value/units or an invalid @ expression. Actual: {actual}",
          },
        });
      Ii.add("amount", function (e, t, n) {
        var i = e.schema;
        return (
          e.messages,
          {
            source: "\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = "
              .concat(Ei, ";\n      const staggerAnalyser = ")
              .concat(ki, ';\n      const easingKeys = "')
              .concat(
                Object.keys(_e).join(","),
                "\".split(','); // todo check for simpler expression\n      const validateExpression = "
              )
              .concat(bi, ";\n      const attributeRegexp = /^")
              .concat(
                $.attibuteValue,
                "\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^"
              )
              .concat(
                $.patternValue,
                "\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = "
              )
              .concat(
                Q,
                ";\n\n      function isNumeric(n) {\n        return !isNaN(parseFloat(n)) && isFinite(n);\n      }\n\n      if(typeof value === 'string' || value instanceof String){\n        if(value.trim().startsWith('"
              )
              .concat(
                $.staggerPreface,
                "')){\n          const staggerValid = staggerValidation(value);\n          if(staggerValid === false){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The " + $.staggerPreface + " expression is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            const analysis = staggerAnalyser(value, false);\n            if(!isNumeric(analysis.start)){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      $.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n              return;\n            } else {\n              startNumberPart = analysis.start*1;\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n                if("
              )
              .concat(i.min, " > analysis.start){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      $.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n                if("
              )
              .concat(i.max, " < analysis.start){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      $.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n               if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n                if(!analysis.start.match("
              )
              .concat(Pi, ")){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      $.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                  return;\n                }\n              }\n            }\n\n            if(!isNumeric(analysis.end)){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      $.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n              return;\n            } else {\n              endNumberPart = analysis.end*1;\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n                if("
              )
              .concat(i.min, " > analysis.end){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      $.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n                if("
              )
              .concat(i.max, " < analysis.end){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      $.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n               if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n                if(!analysis.end.match("
              )
              .concat(Pi, ")){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      $.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                  return;\n                }\n              }\n            }\n\n            if(analysis.startFraction < 0 || analysis.startFraction > 1){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.startFraction",
                  messages: {
                    amount:
                      "The " +
                      $.staggerPreface +
                      " fraction must be a number >=0 and <=1",
                  },
                }),
                ";\n              return;\n            }\n\n            if(easingKeys.indexOf(analysis.easing) < 0){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.startFraction",
                  messages: {
                    amount:
                      "The provided " +
                      $.staggerPreface +
                      " easing is not recognised by the system",
                  },
                }),
                ";\n              return;\n            }\n\n            if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.mode",
                  messages: {
                    amount:
                      $.staggerPreface +
                      " mode can only be either linear or omni",
                  },
                }),
                ";\n              return;\n            }\n\n            if(analysis.reverse !== true && analysis.reverse !== false){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.reverse",
                  messages: {
                    amount:
                      $.staggerPreface +
                      " reverse needs to be either true or false",
                  },
                }),
                ";\n              return;\n            }\n\n            return value;\n          }\n        } else if(value.trim().startsWith('"
              )
              .concat(
                $.patternValue,
                "')){\n          if(!patternRegexp.test(value.replace(/ /g, ''))){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + $.patternValue + " expression is invalid",
                  },
                }),
                ";\n            return;\n          }\n          const patternValues = extractParenthesisAttrsAsArray(value);\n          for(let i=0; i<patternValues.length; i++){\n            const valToCheck = patternValues[i];\n            if(!isNumeric(valToCheck)){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: { amount: "The provided value is not a number" },
                }),
                ";\n              return;\n            } else {\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n                if("
              )
              .concat(i.min, " > valToCheck){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: {
                    amount:
                      "The provided value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n                if("
              )
              .concat(i.max, " < valToCheck){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: {
                    amount:
                      "The provided start value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n               if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n                if(!valToCheck.match("
              )
              .concat(Pi, ")){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: { amount: "The provided value is not an integer" },
                }),
                ";\n                  return;\n                }\n              }\n          }\n        }\n        return value;\n      }  else if(value.trim().startsWith('"
              )
              .concat(
                $.attibuteValue,
                "')){\n          if(!attributeRegexp.test(value)){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + $.attibuteValue + " expression is invalid",
                  },
                }),
                ";\n            return;\n          }\n\n          return value;\n        } else if(value.trim().startsWith('"
              )
              .concat(
                $.mathExpPreface,
                "')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The " + $.expressionPreface + " expression is invalid",
                  },
                }),
                ';\n            return;\n          } else {\n            if(validity.unit !== ""){\n              '
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The " +
                      $.expressionPreface +
                      " expression includes units",
                  },
                }),
                ";\n              return;\n            }\n\n            return value;\n          }\n        }\n      }\n\n\n      if(typeof value !== 'number'){\n        "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: { amount: "The provided value is not a number" },
                }),
                ";\n        return;\n      }\n      if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n        if("
              )
              .concat(i.max, " < value){\n          ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The provided amount is bigger than the maximum accepted value",
                  },
                }),
                ";\n          return;\n        }\n      }\n      if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n        if("
              )
              .concat(i.min, " > value){\n          ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The provided amount is lower than the minimum accepted value",
                  },
                }),
                ";\n          return;\n        }\n      }\n      if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n        if(value !== parseInt(value, 10)){\n          "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: { amount: "The provided amount is not an integer" },
                }),
                ";\n          return;\n        }\n      }\n      return value;\n\n    "
              ),
          }
        );
      }),
        Ii.add("measurement", function (e, t, n) {
          var i = e.schema,
            r = e.messages,
            s = new RegExp(
              "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)(" +
                i.units.join("|") +
                ")$",
              "gi"
            ),
            o = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi");
          return {
            source: "\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = "
              .concat(Ei, ";\n      const staggerAnalyser = ")
              .concat(ki, ';\n      const easingKeys = "')
              .concat(
                Object.keys(_e).join(","),
                "\".split(',');\n      const validateExpression = "
              )
              .concat(bi, ";\n      const validUnits = ['")
              .concat(
                i.units.join("','"),
                "'];\n      const attributeRegexp = /^"
              )
              .concat(
                $.attibuteValue,
                "\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^"
              )
              .concat(
                $.patternValue,
                "\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = "
              )
              .concat(
                Q,
                ";\n\n      if(typeof value !== 'string' && !(value instanceof String)){\n        "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n        return ;\n      }\n\n      if(value.trim().startsWith('"
              )
              .concat(
                $.attibuteValue,
                "')){\n        if(!attributeRegexp.test(value)){\n          "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + $.attibuteValue + " expression is invalid",
                  },
                }),
                ";\n          return;\n        }\n\n        return value;\n      } else if(value.trim().startsWith('"
              )
              .concat(
                $.staggerPreface,
                "')){\n        const staggerValid = staggerValidation(value);\n        if(staggerValid === false){\n          "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: {
                    measurement:
                      "The " + $.staggerPreface + " expression is invalid",
                  },
                }),
                ";\n          return;\n        } else {\n          const analysis = staggerAnalyser(value, false);\n          if(!analysis.start.match("
              )
              .concat(s, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      $.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            var numberPart = analysis.start.match("
              )
              .concat(
                o,
                ")[0];\n            startNumberPart = numberPart;\n            startUnits = analysis.start.toString().substring(numberPart.length);\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n              if("
              )
              .concat(i.min, " > numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      $.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n              if("
              )
              .concat(i.max, " < numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      $.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n             if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n              if(!numberPart.match("
              )
              .concat(Pi, ")){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      $.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                return;\n              }\n            }\n          }\n\n          if(!analysis.end.match("
              )
              .concat(s, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      $.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            var numberPart = analysis.end.match("
              )
              .concat(
                o,
                ")[0];\n            endNumberPart = numberPart;\n            endUnits = analysis.end.toString().substring(numberPart.length);\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n              if("
              )
              .concat(i.min, " > numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      $.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n              if("
              )
              .concat(i.max, " < numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      $.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n             if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n              if(!numberPart.match("
              )
              .concat(Pi, ")){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      $.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                return;\n              }\n            }\n          }\n\n          if(startUnits !== endUnits){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.startFraction",
                  messages: {
                    measurement:
                      "The " +
                      $.staggerPreface +
                      " start and end must always have the same units",
                  },
                }),
                ";\n            return;\n          }\n\n          if(analysis.startFraction < 0 || analysis.startFraction > 1){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.startFraction",
                  messages: {
                    measurement:
                      "The " +
                      $.staggerPreface +
                      " fraction must be a number >=0 and <=1",
                  },
                }),
                ";\n            return;\n          }\n\n          if(easingKeys.indexOf(analysis.easing) < 0){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.startFraction",
                  messages: {
                    measurement:
                      "The provided " +
                      $.staggerPreface +
                      " easing is not recognised by the system",
                  },
                }),
                ";\n            return;\n          }\n\n          if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.mode",
                  messages: {
                    measurement:
                      $.staggerPreface +
                      " mode can only be either linear or omni",
                  },
                }),
                ";\n            return;\n          }\n\n          if(analysis.reverse !== true && analysis.reverse !== false){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.reverse",
                  messages: {
                    measurement:
                      $.staggerPreface +
                      " reverse needs to be either true or false",
                  },
                }),
                ";\n            return;\n          }\n\n          return value;\n        }\n      } else if(value.trim().startsWith('"
              )
              .concat(
                $.patternValue,
                "')){\n        if(!patternRegexp.test(value.replace(/ /g, ''))){\n          "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + $.patternValue + " expression is invalid",
                  },
                }),
                ";\n          return;\n        }\n        const patternValues = extractParenthesisAttrsAsArray(value);\n        for(let i=0; i<patternValues.length; i++){\n          const valToCheck = patternValues[i];\n          if(!valToCheck.match("
              )
              .concat(s, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: { measurement: "The provided value is invalid" },
                }),
                ";\n            return;\n          } else {\n            var numberPart = valToCheck.match("
              )
              .concat(o, ")[0];\n            if(")
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n              if("
              )
              .concat(i.min, " > numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: {
                    measurement:
                      "The provided value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n              if("
              )
              .concat(i.max, " < numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: {
                    measurement:
                      "The provided value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n             if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n              if(!numberPart.match("
              )
              .concat(Pi, ")){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: {
                    measurement: "The provided value is not an integer",
                  },
                }),
                ";\n                return;\n              }\n            }\n          }\n        }\n        return value;\n      } else if(value.trim().startsWith('"
              )
              .concat(
                $.mathExpPreface,
                "')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: {
                    measurement:
                      "The " + $.expressionPreface + " expression is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            if(validUnits.indexOf(validity.unit) < 0){\n              "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: {
                    measurement:
                      "The " +
                      $.expressionPreface +
                      " expression has non-supported units",
                  },
                }),
                ";\n              return;\n            }\n\n            return value;\n          }\n        }\n\n\n      if(!value.match("
              )
              .concat(s, ")){\n        ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n      } else {\n        var numberPart = value.match("
              )
              .concat(o, ")[0];\n        if(")
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n          if("
              )
              .concat(i.min, " > numberPart){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n          }\n        }\n        if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n          if("
              )
              .concat(i.max, " < numberPart){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n          }\n        }\n         if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n          if(!numberPart.match("
              )
              .concat(Pi, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n          }\n        }\n      }\n      return value;\n    "
              ),
          };
        }),
        Ii.add("html", function (e, t, n) {
          e.schema;
          var i = e.messages;
          return {
            source: "\n      if(value === null){\n        ".concat(
              this.makeError({ type: "html", actual: "value", messages: i }),
              "\n      } else {\n        return value;\n      }\n    "
            ),
          };
        }),
        Ii.add("css", function (e, t, n) {
          e.schema;
          var i = e.messages;
          return {
            source: "\n      if(value === null){\n        ".concat(
              this.makeError({ type: "css", actual: "value", messages: i }),
              "\n      } else {\n        return value;\n      }\n    "
            ),
          };
        }),
        Ii.add("color", function (e, t, n) {
          e.schema;
          var i = e.messages;
          return {
            source: "\n      if(typeof value !== 'string' && !(value instanceof String)){\n        "
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: i,
                }),
                "\n        return ;\n      }\n      if(!value.match("
              )
              .concat(
                Oi,
                ') && [\n          "aliceblue",\n          "antiquewhite",\n          "aqua",\n          "aquamarine",\n          "azure",\n          "beige",\n          "bisque",\n          "black",\n          "blanchedalmond",\n          "blue",\n          "blueviolet",\n          "brown",\n          "burlywood",\n          "cadetblue",\n          "chartreuse",\n          "chocolate",\n          "coral",\n          "cornflowerblue",\n          "cornsilk",\n          "crimson",\n          "cyan",\n          "darkblue",\n          "darkcyan",\n          "darkgoldenrod",\n          "darkgray",\n          "darkgrey",\n          "darkgreen",\n          "darkkhaki",\n          "darkmagenta",\n          "darkolivegreen",\n          "darkorange",\n          "darkorchid",\n          "darkred",\n          "darksalmon",\n          "darkseagreen",\n          "darkslateblue",\n          "darkslategray",\n          "darkslategrey",\n          "darkturquoise",\n          "darkviolet",\n          "deeppink",\n          "deepskyblue",\n          "dimgray",\n          "dimgrey",\n          "dodgerblue",\n          "firebrick",\n          "floralwhite",\n          "forestgreen",\n          "fuchsia",\n          "gainsboro",\n          "ghostwhite",\n          "gold",\n          "goldenrod",\n          "gray",\n          "grey",\n          "green",\n          "greenyellow",\n          "honeydew",\n          "hotpink",\n          "indianred",\n          "indigo",\n          "ivory",\n          "khaki",\n          "lavender",\n          "lavenderblush",\n          "lawngreen",\n          "lemonchiffon",\n          "lightblue",\n          "lightcoral",\n          "lightcyan",\n          "lightgoldenrodyellow",\n          "lightgray",\n          "lightgrey",\n          "lightgreen",\n          "lightpink",\n          "lightsalmon",\n          "lightseagreen",\n          "lightskyblue",\n          "lightslategray",\n          "lightslategrey",\n          "lightsteelblue",\n          "lightyellow",\n          "lime",\n          "limegreen",\n          "linen",\n          "magenta",\n          "maroon",\n          "mediumaquamarine",\n          "mediumblue",\n          "mediumorchid",\n          "mediumpurple",\n          "mediumseagreen",\n          "mediumslateblue",\n          "mediumspringgreen",\n          "mediumturquoise",\n          "mediumvioletred",\n          "midnightblue",\n          "mintcream",\n          "mistyrose",\n          "moccasin",\n          "navajowhite",\n          "navy",\n          "oldlace",\n          "olive",\n          "olivedrab",\n          "orange",\n          "orangered",\n          "orchid",\n          "palegoldenrod",\n          "palegreen",\n          "paleturquoise",\n          "palevioletred",\n          "papayawhip",\n          "peachpuff",\n          "peru",\n          "pink",\n          "plum",\n          "powderblue",\n          "purple",\n          "rebeccapurple",\n          "red",\n          "rosybrown",\n          "royalblue",\n          "saddlebrown",\n          "salmon",\n          "sandybrown",\n          "seagreen",\n          "seashell",\n          "sienna",\n          "silver",\n          "skyblue",\n          "slateblue",\n          "slategray",\n          "slategrey",\n          "snow",\n          "springgreen",\n          "steelblue",\n          "tan",\n          "teal",\n          "thistle",\n          "tomato",\n          "turquoise",\n          "violet",\n          "wheat",\n          "white",\n          "whitesmoke",\n          "yellow",\n          "yellowgreen",\n        ].indexOf(value.toLowerCase()) < 0){\n        '
              )
              .concat(
                this.makeError({ type: "color", actual: "value", messages: i }),
                "\n      }\n      return value;\n    "
              ),
          };
        });
      var Mi = [
          "cm",
          "mm",
          "in",
          "px",
          "pt",
          "pc",
          "em",
          "ex",
          "ch",
          "rem",
          "vw",
          "vh",
          "vmin",
          "vmax",
          "%",
        ],
        Ti = [
          {
            type: "string",
            optional: !0,
            default: "linear",
            enum: [
              "linear",
              "easeInQuad",
              "easeOutQuad",
              "easeInOutQuad",
              "easeInCubic",
              "easeOutCubic",
              "easeInOutCubic",
              "easeInQuart",
              "easeOutQuart",
              "easeInOutQuart",
              "easeInQuint",
              "easeOutQuint",
              "easeInOutQuint",
              "easeInSine",
              "easeOutSine",
              "easeInOutSine",
              "easeInExpo",
              "easeOutExpo",
              "easeInOutExpo",
              "easeInCirc",
              "easeOutCirc",
              "easeInOutCirc",
              "easeInElastic",
              "easeOutElastic",
              "easeInOutElastic",
              "easeInBack",
              "easeOutBack",
              "easeInOutBack",
              "easeInBounce",
              "easeOutBounce",
              "easeInOutBounce",
            ],
          },
          { type: "array", optional: !0, length: 4, items: { type: "number" } },
        ],
        Si = { type: "string", empty: !1, trim: !0, optional: !0 },
        Ai = { type: "string", empty: !1, trim: !0, optional: !0 },
        _i = { type: "string", empty: !1, optional: !1 },
        Li = { type: "amount", optional: !1, integer: !0, min: 0 },
        Di = { type: "amount", optional: !0, integer: !0, min: 0 },
        Bi = { type: "html", optional: !0 },
        ji = { type: "css", optional: !0 },
        Vi = {
          type: "array",
          optional: !0,
          items: { type: "object", props: { type: "string", src: "string" } },
        },
        Ni = {
          type: "array",
          items: {
            type: "object",
            strict: !0,
            props: {
              src: "string",
              id: "string",
              mcid: { type: "string", optional: !0 },
              classes: { type: "array", optional: !0, items: "string" },
              base64: { type: "boolean", optional: !0 },
              startValues: {
                optional: !0,
                type: "object",
                props: {
                  gain: { optional: !0, type: "number" },
                  pan: { optional: !0, type: "number" },
                },
              },
            },
          },
          optional: !0,
        },
        Fi = Ii.compile({
          id: Si,
          name: Ai,
          selector: h(h({}, _i), {}, { optional: !0 }),
          easing: Ti,
          duration: Li,
          startFrom: { type: "amount", integer: !0, min: 0, optional: !0 },
          repeats: { type: "amount", integer: !0, min: 1, optional: !0 },
          hiatus: { type: "amount", integer: !0, min: 0, optional: !0 },
          delay: { type: "amount", integer: !0, min: 0, optional: !0 },
        }),
        $i = {
          type: "object",
          optional: !0,
          props: {
            width: { type: "measurement", units: Mi, optional: !0 },
            height: { type: "measurement", units: Mi, optional: !0 },
          },
        },
        zi = { type: "string", enum: ["on", "off", "only"], optional: !0 },
        Ri = Ii.compile({
          props: [
            {
              type: "object",
              strict: !0,
              props: {
                id: Si,
                name: Ai,
                selector: h(h({}, _i), {}, { optional: !0 }),
                easing: Ti,
                duration: Di,
                html: Bi,
                css: ji,
                audioSources: Ni,
                audio: zi,
                containerParams: $i,
                fonts: Vi,
                initParams: { type: "object", optional: !0 },
              },
            },
            {
              type: "object",
              strict: !0,
              props: {
                id: Si,
                name: Ai,
                host: { type: "any", optional: !1 },
                duration: Di,
                html: Bi,
                css: ji,
                audioSources: Ni,
                audio: zi,
                containerParams: $i,
                fonts: Vi,
                initParams: { type: "object", optional: !0 },
              },
            },
            {
              type: "object",
              strict: !0,
              props: {
                root: { type: "boolean", optional: !0 },
                name: Ai,
                id: Si,
                audioSources: Ni,
                audio: h(h({}, zi), {}, { enum: ["on"] }),
              },
            },
          ],
        }),
        Hi = Ii.compile({
          selector: h(h({}, _i), {}, { optional: !0, strict: !0 }),
          name: Ai,
        }),
        qi = Ii.compile({
          selector: h(h({}, _i), {}, { strict: !0, optional: !0 }),
          name: Ai,
          repeats: { type: "amount", integer: !0, min: 1, optional: !0 },
          hiatus: { type: "amount", integer: !0, min: 0, optional: !0 },
          delay: { type: "amount", integer: !0, min: 0, optional: !0 },
        });
      function Gi(e) {
        var t = new e.Class(e.attrs, e.props);
        if (!1 === t.result) return t;
        if (Object.prototype.hasOwnProperty.call(e, "incidents"))
          for (var n in e.incidents) {
            var i = e.incidents[n],
              r = Gi(i.leaf);
            if (!1 === r.result) return r;
            var s = t.addIncident(r, i.position);
            if (!1 === s.result) return s;
          }
        return t;
      }
      function Wi(e) {
        e.descriptor.value = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.exportLiveDefinition();
          for (var i in e) $e(i, e[i], !0, "attrs", n);
          for (var r in t) $e(r, t[r], !0, "props", n);
          return Gi(n);
        };
      }
      Ii.compile({ selector: _i, duration: Li });
      var Ui = "mc.descriptive.decisionAuthority";
      function Ji(e) {
        e.descriptor.value = function (e) {
          if (null !== this.constructor.attrsValidationRules) {
            var t = this.constructor.attrsValidationMethod(e);
            if (t.length > 0) return { result: !1, errors: t };
          }
          return !0 ===
            this.putMessageOnPipe("checkForClip", {}, Ui, {
              selfExecute: !0,
              direction: le,
            }).response
            ? this.manageEditAttrProps(e, "attrs")
            : ((this.attrs = e), { result: !0 });
        };
      }
      function Ki(e) {
        e.descriptor.value = function (e) {
          var t = re.validateProps(
            e,
            this.constructor.propsValidationRules,
            this.constructor
          );
          return t.result
            ? !0 ===
              this.putMessageOnPipe("checkForClip", {}, Ui, {
                selfExecute: !0,
                direction: le,
              }).response
              ? this.manageEditAttrProps(e, "props")
              : ((this.props = e), { result: !0 })
            : t;
        };
      }
      function Xi(e) {
        e.descriptor.value = function () {
          return null !== this.props.host && void 0 !== this.props.host
            ? [this.props.host]
            : this.hasParent &&
              this.putMessageOnPipe("checkForClip", {}, Ui, {
                selfExecute: !0,
                direction: le,
              }).response
            ? this.putMessageOnPipe(
                "getElements",
                { selector: this.selector() },
                Ui,
                { selfExecute: !1, direction: le }
              ).response
            : [];
        };
      }
      function Qi(e) {
        e.descriptor.value = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { check: !0 };
          if ("dynamic" === this.duration)
            return {
              result: !1,
              reason:
                "Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable",
            };
          if (e === this.duration)
            return { result: !0, meta: { unprocessed: !0 } };
          if (e <= 0) return { result: !1, reason: "Size must always be > 0" };
          if (t.check && this.hasParent) {
            var n = this.putMessageOnPipe(
              "checkResize",
              { id: this.id, newSize: e, fraction: e / this.duration },
              Ui,
              { selfExecute: !1, direction: le }
            );
            if (!n.response.result) return n.response;
          }
          return this.setNewDuration(e), { result: !0 };
        };
      }
      function Zi(e) {
        e.descriptor.value = function () {
          return null === this.inheritedSelector
            ? Object.prototype.hasOwnProperty.call(this.props, "selector")
              ? this.props.selector
              : null
            : Object.prototype.hasOwnProperty.call(this.props, "selector")
            ? "&" === this.props.selector.charAt(0)
              ? this.inheritedSelector + this.props.selector.substring(1)
              : ""
                  .concat(this.inheritedSelector, " ")
                  .concat(this.props.selector)
            : this.inheritedSelector;
        };
      }
      var Yi = (function () {
          function e(t) {
            a(this, e), (this.expressionProps = t);
          }
          return (
            c(e, [
              {
                key: "calculateValues",
                value: function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n].getAttribute(this.expressionProps.attribute);
                    H(i) && (i = parseFloat(i)), t.push(i);
                  }
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        er = (function () {
          function e(t) {
            a(this, e), (this.patternProps = t);
          }
          return (
            c(e, [
              {
                key: "calculateValues",
                value: function (e) {
                  for (
                    var t = this.patternProps.pattern.length, n = [], i = 0;
                    i < e.length;
                    i++
                  )
                    n.push(this.patternProps.pattern[i % t]);
                  return n;
                },
              },
              {
                key: "resize",
                value: function (e) {
                  if ("amount" !== this.patternProps.type)
                    return ""
                      .concat($.patternValue, "(")
                      .concat(this.patternProps.pattern.join(), ")");
                  for (
                    var t = [], n = 0;
                    n < this.patternProps.pattern.length;
                    n++
                  )
                    t.push(e * this.patternProps.pattern[n]);
                  return "".concat($.patternValue, "(").concat(t.join(), ")");
                },
              },
            ]),
            e
          );
        })(),
        tr = function e(t) {
          return (
            a(this, e),
            "expression" === t.dynamicType
              ? new xi(t)
              : "stagger" === t.dynamicType
              ? new Ci(t)
              : "attribute" === t.dynamicType
              ? new Yi(t)
              : "pattern" === t.dynamicType
              ? new er(t)
              : (re.error(
                  'dynamicType must be either "stgger" or "expression". '.concat(
                    t.dynamicType,
                    " provided"
                  )
                ),
                !1)
          );
        },
        nr = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
        ir = function (e) {
          var t = [];
          return (
            (function e(n) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              if (!n) return [];
              for (var r = 0, s = Object.entries(n); r < s.length; r++) {
                var o = k(s[r], 2),
                  a = o[0],
                  l = o[1];
                if (!(l instanceof Element))
                  if (G(l))
                    e(
                      l,
                      ""
                        .concat(i)
                        .concat("" === i ? "" : ".")
                        .concat(a)
                    );
                  else if (q(l)) {
                    var c = l.trim();
                    if (c.startsWith($.staggerPreface)) {
                      var u = ki(c, !1),
                        p = u.start.match(nr)[0],
                        h = u.end.match(nr)[0],
                        d = u.start.toString().substring(p.length),
                        m = {
                          dynamicType: "stagger",
                          path: ""
                            .concat(i)
                            .concat("" === i ? "" : ".")
                            .concat(a),
                          from: 1 * p,
                          to: 1 * h,
                          mode: u.mode,
                          unit: d,
                          fraction: u.startFraction,
                          easing: u.easing,
                          reverse: u.reverse,
                          type: "" === d ? "amount" : "measurement",
                        };
                      t.push(m);
                    } else if (c.startsWith($.attibuteValue)) {
                      var f = {
                        dynamicType: "attribute",
                        path: ""
                          .concat(i)
                          .concat("" === i ? "" : ".")
                          .concat(a),
                        unit: "",
                        type: "measurement",
                        attribute: /\(([^\)]+)\)/.exec(c)[1],
                      };
                      t.push(f);
                    } else if (c.startsWith($.mathExpPreface)) {
                      var v = bi(c),
                        g = {
                          dynamicType: "expression",
                          path: ""
                            .concat(i)
                            .concat("" === i ? "" : ".")
                            .concat(a),
                          unit: v.unit,
                          type: "" === v.unit ? "amount" : "measurement",
                          expression: v.expression,
                        };
                      t.push(g);
                    } else if (c.startsWith($.patternValue)) {
                      for (
                        var y = Q(c), b = !0, x = [], w = 0;
                        w < y.length;
                        w++
                      ) {
                        if (!H(y[w])) {
                          b = !1;
                          break;
                        }
                        x.push(parseFloat(y[w]));
                      }
                      b && (y = x);
                      var C = {
                        dynamicType: "pattern",
                        path: ""
                          .concat(i)
                          .concat("" === i ? "" : ".")
                          .concat(a),
                        unit: "",
                        type: b ? "amount" : "measurement",
                        pattern: y,
                      };
                      t.push(C);
                    }
                  }
              }
            })(e),
            t
          );
        };
      function rr(e) {
        e.descriptor.value = function () {
          for (var e = ir(this.props), t = 0; t < e.length; t++)
            this.propsStaggers.push({ path: e[t].path, stagger: new tr(e[t]) });
          for (var n = ir(this.attrs), i = 0; i < n.length; i++)
            this.attributesStaggers.push({
              path: n[i].path,
              stagger: new tr(n[i]),
            });
        };
      }
      var sr = S(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = g(i);
              function i() {
                var t,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  s =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                a(this, i),
                  null === s
                    ? ((t = n.call(this, r)),
                      e(f(t)),
                      (t.attrs = {}),
                      (t.props = r))
                    : ((t = n.call(this, s)),
                      e(f(t)),
                      (t.attrs = r),
                      (t.props = s));
                var o = re.validateProps(t.props, Hi, t.constructor);
                return o.result
                  ? ((t._inheritedSelector = null),
                    (t.attributesStaggers = []),
                    (t.propsStaggers = []),
                    t.setupDynamicValues(),
                    (t.passiveAddition = !0),
                    t._buildTree(),
                    (t.passiveAddition = !1),
                    v(t))
                  : v(t, o);
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "field",
                  static: !0,
                  key: "Incident",
                  value: function () {
                    return ye;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "plugin_npm_name",
                  value: function () {
                    return "motor-cortex-js";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "version",
                  value: function () {
                    return Re;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "Channel",
                  value: function () {
                    return oe;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "ClassName",
                  value: function () {
                    return "Group";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "isGroup",
                  value: function () {
                    return !0;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "attrsValidationRules",
                  value: function () {
                    return null;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "propsValidationRules",
                  value: function () {
                    return Hi;
                  },
                },
                {
                  kind: "method",
                  decorators: [Ji],
                  key: "editAttributes",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ki],
                  key: "editProperties",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Qi],
                  key: "resize",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Wi],
                  key: "clone",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Zi],
                  key: "selector",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Xi],
                  key: "getElements",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [rr],
                  key: "setupDynamicValues",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "_buildTree",
                  value: function () {
                    this.buildTree();
                  },
                },
                {
                  kind: "method",
                  key: "_calculateDuration",
                  value: function () {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      t = 0;
                    for (var n in this.children) {
                      var i = this.children[n];
                      if (
                        (!0 === e &&
                          !0 === i.leaf.constructor.isGroup &&
                          i.leaf._calculateDuration(!0),
                        "dynamic" === i.leaf.duration)
                      ) {
                        t = "dynamic";
                        break;
                      }
                      i.position + i.leaf.duration > t &&
                        (t = i.position + i.leaf.duration);
                    }
                    return (
                      t !== this.calculatedDuration &&
                      (this.props &&
                        Object.prototype.hasOwnProperty.call(
                          this.props,
                          "duration"
                        ) &&
                        (this.props.duration = t),
                      (this.calculatedDuration = t),
                      !0)
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_rebuildTree",
                  value: function () {
                    for (var e in this.children) {
                      var t = this.children[e];
                      !0 === t.leaf.passive && this.removeIncident(t.id);
                    }
                    (this.passiveAddition = !0),
                      this.buildTree(),
                      (this.passiveAddition = !1);
                  },
                },
                { kind: "method", key: "buildTree", value: function () {} },
                {
                  kind: "method",
                  key: "manageEditAttrProps",
                  value: function (e, t) {
                    var n = this.parentNode,
                      i = n.getLeafPosition(this.id),
                      r = JSON.parse(JSON.stringify(this[t]));
                    (this[t] = e),
                      n.removeIncident(this.id),
                      this._rebuildTree();
                    var s = n.addIncident(this, i);
                    return (
                      s.result ||
                        ((this[t] = r),
                        this._rebuildTree(),
                        n.addIncident(this, i)),
                      s
                    );
                  },
                },
                {
                  kind: "method",
                  key: "detachFromParent",
                  value: function () {
                    b(m(n.prototype), "detachFromParent", this).call(this),
                      (this.inheritedSelector = null);
                  },
                },
                {
                  kind: "get",
                  key: "inheritedSelector",
                  value: function () {
                    return this._inheritedSelector;
                  },
                },
                {
                  kind: "set",
                  key: "inheritedSelector",
                  value: function (e) {
                    for (var t in ((this._inheritedSelector = e),
                    this.children))
                      this.children[t].leaf.inheritedSelector = this.selector();
                  },
                },
                {
                  kind: "get",
                  key: "selectorToPassToChildren",
                  value: function () {
                    return this.selector();
                  },
                },
                {
                  kind: "method",
                  key: "exportDefinition",
                  value: function () {
                    var e = {
                      ClassName: this.constructor.ClassName,
                      version: this.constructor.version,
                      plugin:
                        this.constructor.plugin ||
                        this.constructor.plugin_npm_name,
                      plugin_npm_name: this.constructor.plugin_npm_name,
                      attrs: this.attrs,
                      props: this.props,
                      incidents: {},
                      duration: this.duration,
                    };
                    for (var t in this.children) {
                      var n = this.children[t];
                      !0 !== n.leaf.passive &&
                        (e.incidents[t] = {
                          id: n.id,
                          position: n.position,
                          leaf: n.leaf.exportDefinition(),
                        });
                    }
                    return e;
                  },
                },
                {
                  kind: "method",
                  key: "exportLiveDefinition",
                  value: function () {
                    var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      t = JSON.parse(JSON.stringify(this.props));
                    !1 === e && delete t.id;
                    var n = {
                      Class: this.constructor,
                      attrs: JSON.parse(JSON.stringify(this.attrs)),
                      props: t,
                      incidents: {},
                    };
                    for (var i in this.children) {
                      var r = this.children[i];
                      !0 !== r.leaf.passive &&
                        (n.incidents[i] = {
                          position: r.position,
                          leaf: r.leaf.exportLiveDefinition(e),
                        });
                    }
                    return n;
                  },
                },
                {
                  kind: "method",
                  key: "addIncident",
                  value: function (e, t) {
                    var i,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : { check: !0 };
                    if (
                      ((e.inheritedSelector = this.selectorToPassToChildren),
                      !0 === r.check)
                    ) {
                      var s = b(m(n.prototype), "checkAddition", this).call(
                        this,
                        e,
                        t
                      );
                      if (!s.result) return (e.inheritedSelector = null), s;
                      if (
                        !0 ===
                        (i = this.putMessageOnPipe("checkForClip", {}, Ui, {
                          selfExecute: !0,
                          direction: le,
                        })).response
                      ) {
                        var o = e.putMessageOnPipe(
                          "checkForInvalidSelectors",
                          {},
                          null,
                          { selfExecute: !0, direction: ce }
                        );
                        if (o.length > 0) {
                          for (var a = [], l = 0; l < o.length; l++)
                            a.push(o[l].response);
                          return { result: !1, errors: a };
                        }
                      }
                      var c = this.putMessageOnPipe(
                        "checkAddition",
                        { incident: e, millisecond: t, parentGroupId: this.id },
                        Ui,
                        { selfExecute: !0, direction: le }
                      );
                      if (!c.response.result)
                        return (e.inheritedSelector = null), c.response;
                    }
                    !0 === this.passiveAddition && (e.passive = !0);
                    var u = this.addChild(e, t);
                    return (
                      u.result || (e.inheritedSelector = null),
                      "dynamic" === e.duration &&
                        i &&
                        this._calculateDuration(!0),
                      u
                    );
                  },
                },
                {
                  kind: "method",
                  key: "moveIncident",
                  value: function (e, t) {
                    var i = e;
                    "object" === o(e) && (i = e.id);
                    var r = b(m(n.prototype), "checkEditPosition", this).call(
                      this,
                      i,
                      t
                    );
                    if (!r.result) return r;
                    var s = t - this.getLeafPosition(i);
                    if (0 === s) return { result: !0 };
                    var a = this.putMessageOnPipe(
                      "checkMove",
                      {
                        id: i,
                        millisecond: t,
                        positionDelta: s,
                        parentGroupId: this.id,
                      },
                      Ui,
                      { selfExecute: !0, direction: le }
                    );
                    return a.response.result
                      ? this.editPosition(i, t)
                      : a.response;
                  },
                },
                {
                  kind: "method",
                  key: "removeIncident",
                  value: function (e) {
                    var t = e;
                    "object" === o(e) && (t = e.id);
                    var i = b(m(n.prototype), "checkRemoveChild", this).call(
                      this,
                      t
                    );
                    if (!i.result) return i;
                    var r = this.putMessageOnPipe(
                      "checkDeletion",
                      { id: t, parentGroupId: this.id },
                      Ui,
                      { selfExecute: !0, direction: le }
                    );
                    return r.response.result ? this.removeChild(t) : r.response;
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckForClip",
                  value: function (e, t) {
                    return !!this.hasParent && this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckAddition",
                  value: function (e, t) {
                    return this.hasParent ? this.bypass() : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckMove",
                  value: function (e, t) {
                    return this.hasParent ? this.bypass() : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckDeletion",
                  value: function (e, t) {
                    return this.hasParent ? this.bypass() : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckResize",
                  value: function (e, t) {
                    return this.hasParent ? this.bypass() : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "handleSetDurationDynamic",
                  value: function (e, t) {
                    (this.calculatedDuration = "dynamic"),
                      this.putMessageOnPipe(
                        "setDurationDynamic",
                        {},
                        "Groups",
                        { selfExecute: !1, direction: le }
                      );
                  },
                },
              ],
            };
          },
          fe
        ),
        or = {
          isCombo: function (e) {
            return e.incidentClass.isCombo;
          },
          getItem: function (e, t) {
            return (function (e) {
              for (
                var t,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : window,
                  i = (e =
                    (arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : F) +
                    "." +
                    e).split("."),
                  r = 0;
                r < i.length;
                r++
              ) {
                if (!Object.prototype.hasOwnProperty.call(n, i[r])) return;
                (t = n[i[r]]), (n = n[i[r]]);
              }
              return t;
            })(t.join("."), "attrs", e);
          },
          getRepeatPosition: function (e, t, n, i) {
            return i * (t || 0) + (i + 1) * (e || 0) + i * n;
          },
          refersToOwnSelector: function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              i = t;
            !1 === Array.isArray(t) && (i = t.split("."));
            var r = this.getItem(e, i.slice(0, 2 + n));
            return (
              ("" === r.props.selector ||
                void 0 === r.props.selector ||
                null === r.props.selector) &&
              ("props" === i[2] ||
                !this.isCombo(r) ||
                this.refersToOwnSelector(e, i, n + 3))
            );
          },
          cascadeSelectors: function (e, t) {
            for (
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "",
                i = [],
                r = 0;
              r < t.length;
              r++
            ) {
              var s = t[r],
                o = void 0;
              if (
                ((o = Object.prototype.hasOwnProperty.call(s.props, "selector")
                  ? "".concat(e, " ").concat(s.props.selector)
                  : e),
                i.push({
                  path: ""
                    .concat(n)
                    .concat("" === n ? "" : ".")
                    .concat(r, ".props.selector"),
                  value: o,
                }),
                this.isCombo(s))
              ) {
                var a = this.cascadeSelectors(
                  o,
                  s.attrs.incidents,
                  ""
                    .concat(n)
                    .concat("" === n ? "" : ".")
                    .concat(r, ".attrs.incidents")
                );
                i = i.concat(a);
              }
            }
            return i;
          },
          createDescriptiveIncidentLikeObject: function (e, t, n, i, r) {
            return {
              constructor: {
                Incident: e.incidentClass.targetClass.Incident,
                plugin_npm_name: e.incidentClass.targetClass.plugin_npm_name,
                Channel: e.incidentClass.targetClass.Channel,
                isClip: !1,
              },
              attrs: i || e.attrs,
              props: r || e.props,
              selector: function () {
                return e.props.selector;
              },
              id: e.props.id,
              audioClip: null,
              audio: "no",
              dynamicDurationValue: null,
              putMessageOnPipe: function () {},
              attributesStaggers: t,
              propsStaggers: n,
            };
          },
          parseElementsDynamics: function (e, t, n, i, r) {
            for (
              var s = "incidents.".concat(r, ".attrs"),
                o = "incidents.".concat(r, ".props"),
                a = ze(t),
                l = ze(n),
                c = 0;
              c < e.length;
              c++
            )
              if (0 === e[c].path.indexOf(s)) {
                var u = e[c].path.substring(s.length + 1);
                a.setValue(u, e[c].values[i]);
              } else if (0 === e[c].path.indexOf(o)) {
                var p = e[c].path.substring(o.length + 1);
                l.setValue(p, e[c].values[i]);
              }
            return {
              incidentAttrs: a.exportFlattened(),
              incidentProps: l.exportFlattened(),
            };
          },
          getStaggersForChild: function (e, t, n) {
            for (var i = [], r = [], s = 0; s < e.length; s++)
              "position" === n &&
              0 === e[s].path.indexOf("incidents.".concat(t, ".").concat(n))
                ? r.push({ path: "position", stagger: e[s].stagger })
                : 0 === e[s].path.indexOf("incidents.".concat(t, ".").concat(n))
                ? r.push({
                    path: e[s].path.substring(
                      "incidents.".concat(t, ".").concat(n).length + 1
                    ),
                    stagger: e[s].stagger,
                  })
                : i.push(e[s]);
            return { identifiedDynamics: r, remainingDynamics: i };
          },
          createElementProxy: function (e, t, n, i, r) {
            for (
              var s = ze(e),
                o = this.cascadeSelectors(
                  t,
                  e.attrs.incidents,
                  "attrs.incidents"
                ),
                a = 0;
              a < i.length;
              a++
            )
              s.setValue("attrs.".concat(i[a].path), i[a].values[n]);
            for (var l = 0; l < r.length; l++)
              s.setValue("props.".concat(r[l].path), r[l].values[n]);
            for (var c = 0; c < o.length; c++)
              s.setValue(o[c].path, o[c].value);
            return s;
          },
        },
        ar = (function (e) {
          d(n, e);
          var t = g(n);
          function n() {
            return a(this, n), t.apply(this, arguments);
          }
          return (
            c(n, [
              {
                key: "parseAttrsDynamicValues",
                value: function (e, t) {
                  this.childrenStaggers = [];
                  for (var n = 0; n < e.attributesStaggers.length; n++)
                    or.refersToOwnSelector(e, e.attributesStaggers[n].path)
                      ? this.staggerAttrs.push({
                          path: e.attributesStaggers[n].path,
                          values: e.attributesStaggers[
                            n
                          ].stagger.calculateValues(t, this.initParams),
                        })
                      : this.childrenStaggers.push(e.attributesStaggers[n]);
                },
              },
              {
                key: "handleRecalcDuration",
                value: function (e, t) {
                  var i = b(m(n.prototype), "handleRecalcDuration", this).call(
                    this,
                    e,
                    t
                  );
                  return (
                    (this.descriptiveIncident.dynamicDurationValue =
                      1 * this.duration),
                    i
                  );
                },
              },
              {
                key: "lastWish",
                value: function () {
                  (this.descriptiveIncident.dynamicDurationValue = null),
                    this.descriptiveIncident.putMessageOnPipe(
                      "setDurationDynamic",
                      {},
                      "Groups",
                      { selfExecute: !1, direction: le }
                    ),
                    b(m(n.prototype), "lastWish", this).call(this);
                },
              },
              {
                key: "_createElementIncident",
                value: function (e, t, n, i, r, s) {
                  for (
                    var o = this,
                      a = or.createElementProxy(
                        t,
                        n.context.getElementSelectorByMCID(s),
                        i,
                        this.staggerAttrs,
                        this.staggerProps
                      ),
                      l = 0;
                    l < this.staggerAttrs.length;
                    l++
                  )
                    a.setValue(
                      "attrs.".concat(this.staggerAttrs[l].path),
                      this.staggerAttrs[l].values[i]
                    );
                  for (
                    var c = Ae({
                        id: ""
                          .concat(this.id, "_element")
                          .concat("-")
                          .concat(i),
                        attrs: {},
                        props: {},
                        Incident: sr.Incident,
                        plugin_npm_name: sr.plugin_npm_name,
                        Channel: sr.Channel,
                        DescriptiveIncident: new sr(),
                      }),
                      u = function (e) {
                        var t = Ae({
                            id: ""
                              .concat(o.id, "_element")
                              .concat("-")
                              .concat(i, "_repeat")
                              .concat("-")
                              .concat(e),
                            attrs: {},
                            props: {},
                            Incident: sr.Incident,
                            plugin_npm_name: sr.plugin_npm_name,
                            Channel: sr.Channel,
                            DescriptiveIncident: new sr(),
                          }),
                          s = o.childrenStaggers;
                        a.attrs.incidents.forEach(function (l, c) {
                          var u = or.parseElementsDynamics(
                              o.staggerAttrs,
                              l.attrs,
                              l.props,
                              i,
                              c
                            ),
                            p = u.incidentAttrs,
                            h = u.incidentProps,
                            d = or.getStaggersForChild(s, c, "attrs"),
                            m = or.getStaggersForChild(
                              d.remainingDynamics,
                              c,
                              "props"
                            ),
                            f = or.getStaggersForChild(
                              d.remainingDynamics,
                              c,
                              "position"
                            );
                          (s = m.remainingDynamics),
                            a.setValue(
                              "attrs.incidents.".concat(c, ".props.id"),
                              ""
                                .concat(o.id, "_element")
                                .concat("-")
                                .concat(i, "_repeat")
                                .concat("-")
                                .concat(e, "_incident")
                                .concat("-")
                                .concat(c)
                            );
                          var v = lr(
                              or.createDescriptiveIncidentLikeObject(
                                l,
                                d.identifiedDynamics,
                                m.identifiedDynamics,
                                p,
                                h
                              ),
                              n
                            ),
                            g = l.position;
                          1 === f.identifiedDynamics.length &&
                            (g = f.identifiedDynamics[0].stagger.calculateValues(
                              new Array(r),
                              o.initParams
                            )[i]),
                            t.addChild(v, g);
                        }),
                          c.addChild(
                            t,
                            or.getRepeatPosition(
                              a.props.delay,
                              a.props.hiatus,
                              t.duration,
                              e
                            )
                          );
                      },
                      p = 0;
                    p < (a.props.repeats || 1);
                    p++
                  )
                    u(p);
                  this.addChild(c, 0);
                },
              },
            ]),
            n
          );
        })(Ne);
      function lr(e, t) {
        var n,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ((i && "off" === e.audio) || (!i && "only" === e.audio)) return null;
        if (
          Object.prototype.hasOwnProperty.call(e.props, "selector") &&
          ((!i && "~" === e.props.selector.charAt(0)) ||
            (i && "~" !== e.props.selector.charAt(0) && !e.constructor.isClip))
        )
          return null;
        if (e.constructor.isClip) {
          if (!Object.prototype.hasOwnProperty.call(e.props, "selector") || i)
            return i ? e.audioClip : e.realClip;
          (n = new Fe(e, t)).plugin_channel_class = oe;
        } else if (e.constructor.isCombo) n = new ar(e, t);
        else if (e.constructor.isGroup)
          for (var r in ((n = Ae({
            id: e.id,
            attrs: e.attrs,
            props: e.props,
            Incident: e.constructor.Incident,
            plugin_npm_name: e.constructor.plugin_npm_name,
            Channel: e.constructor.Channel,
            DescriptiveIncident: e,
          })),
          e.children)) {
            var s = lr(e.children[r].leaf, t);
            null !== s && n.addChild(s, e.children[r].position);
          }
        else n = new Ne(e, t);
        return n;
      }
      var cr = "@kissmybutton/self-contained-incidents",
        ur = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e, i) {
            var r;
            return (
              a(this, n),
              ((r = t.call(this, e, i)).attrs = e),
              (r.props = i),
              (r.isTheClip = !0),
              (r.blockingWaitings = {}),
              (r.instantiatedChannels = {}),
              (r.isHostedClip = !0),
              (r.instantiatedCopiesContexts = {}),
              (r.instantiatedCopiesUnblockingMethods = []),
              r.onClipInitialise(),
              (r.runTimeInfo = r.props.runTimeInfo),
              (r.durationSubs = []),
              (r.audioClip = !1),
              r
            );
          }
          return (
            c(n, [
              {
                key: "contextReady",
                get: function () {
                  return this.context.contextLoaded;
                },
              },
              { key: "onClipInitialise", value: function () {} },
              {
                key: "contextLoading",
                value: function () {
                  this.context.contextLoaded = !1;
                },
              },
              {
                key: "contextLoaded",
                value: function () {
                  for (var e in ((this.context.contextLoaded = !0),
                  this.putMessageOnPipe(
                    "contextLoaded",
                    {},
                    {},
                    { selfExecute: !1, direction: ce }
                  ),
                  this.instantiatedChannels))
                    this.instantiatedChannels[e].recalcScratchValues();
                  for (
                    var t = 0;
                    t < this.instantiatedCopiesUnblockingMethods.length;
                    t++
                  )
                    this.instantiatedCopiesUnblockingMethods[t]();
                  this.unblock();
                },
              },
              {
                key: "getElements",
                value: function (e) {
                  if (null !== this.props.host && void 0 !== this.props.host)
                    return this.context.getElements(e);
                  var t = [];
                  for (var n in this.instantiatedCopiesContexts)
                    for (
                      var i = this.instantiatedCopiesContexts[n].getElements(e),
                        r = 0;
                      r < i.length;
                      r++
                    )
                      t.push(i[r]);
                  return t;
                },
              },
              {
                key: "addContext",
                value: function (e) {
                  (this.instantiatedCopiesContexts[e.clipId] = e.context),
                    (e.instantiatedCopiesContexts = this.instantiatedCopiesContexts),
                    this.instantiatedCopiesUnblockingMethods.push(e.unblock);
                  var t = this.putMessageOnPipe(
                    "addContext",
                    e,
                    {},
                    { selfExecute: !1, direction: ce }
                  );
                  if (
                    1 === Object.keys(this.instantiatedCopiesContexts).length
                  ) {
                    for (var n in this.instantiatedChannels)
                      this.instantiatedChannels[n].recalcScratchValues(
                        e.clipId
                      );
                    this.context.nonFragmentedContext = e.context;
                  }
                  return t;
                },
              },
              {
                key: "exportConstructionArguments",
                value: function () {
                  return { attrs: this.attrs, props: this.props };
                },
              },
              {
                key: "_resize",
                value: function (e) {
                  for (var t in this.instantiatedChannels)
                    this.instantiatedChannels[t]._resize(e);
                  this.setNewDuration(this.duration * e);
                  for (var n = 0; n < this.durationSubs.length; n++)
                    this.durationSubs[n](this.duration);
                },
              },
              {
                key: "addIncident",
                value: function (e) {
                  for (
                    var t = this,
                      n = this.putMessageOnPipe(
                        "addIncident",
                        {
                          incident: e.incident,
                          millisecond: e.millisecond,
                          parentGroupId: e.parentGroupId,
                          incidentFromDescription: lr,
                          contextData: {
                            clipId: this.id,
                            context: this.context,
                            instantiatedCopiesContexts: this
                              .instantiatedCopiesContexts,
                          },
                          audio: this.audioClip,
                        },
                        e.parentGroupId,
                        { selfExecute: !0, direction: ce }
                      ),
                      i = {},
                      r = 0;
                    r < n.length;
                    r++
                  ) {
                    var s = n[r].response.getIncidentsByChannel(
                      n[r].positionDelta + e.millisecond
                    );
                    for (var o in s) {
                      var a;
                      Object.prototype.hasOwnProperty.call(i, o) || (i[o] = []),
                        (a = i[o]).push.apply(a, C(s[o]));
                    }
                  }
                  var l = this.checkAddition(i);
                  return l.result
                    ? {
                        result: !0,
                        execute: function () {
                          l.execute();
                          for (var i = 0; i < n.length; i++)
                            for (var r in (n[i].responder.addChild(
                              n[i].response,
                              e.millisecond
                            ),
                            n[i].responder.putMessageOnPipe(
                              "recalcDuration",
                              {},
                              "Groups",
                              { selfExecute: !0, direction: le }
                            ),
                            t.instantiatedCopiesContexts))
                              n[i].responder.putMessageOnPipe(
                                "addContext",
                                {
                                  clipId: r,
                                  context: t.instantiatedCopiesContexts[r],
                                },
                                "ContextAwareIncidents",
                                { selfExecute: !1, direction: ce }
                              );
                        },
                      }
                    : l;
                },
              },
              {
                key: "checkAddition",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "all-or-nothing",
                    n = !0,
                    i = [],
                    r = [];
                  for (var s in e) {
                    Object.prototype.hasOwnProperty.call(
                      this.instantiatedChannels,
                      s
                    ) ||
                      (this.instantiatedChannels[s] = new e[
                        s
                      ][0].incident.plugin_channel_class({
                        runTimeInfo: this.runTimeInfo,
                        context: this.context,
                        subscribe: this.props.subscribe,
                      }));
                    var o = this.instantiatedChannels[s].addIncidents(e[s], t);
                    (n = n && o.result),
                      o.result ? r.push(o.execute) : (i = i.concat(o.errors));
                  }
                  var a = function () {
                    for (var e = 0; e < r.length; e++) r[e]();
                  };
                  return { result: n, errors: i, execute: a };
                },
              },
              {
                key: "moveIncident",
                value: function (e) {
                  for (
                    var t = this.putMessageOnPipe(
                        "moveIncident",
                        {
                          incidentId: e.id,
                          millisecond: e.millisecond,
                          parentGroupId: e.parentGroupId,
                          contextData: {
                            clipId: this.id,
                            context: this.context,
                          },
                          audio: this.audioClip,
                        },
                        e.parentGroupId,
                        { selfExecute: !0, direction: ce }
                      ),
                      n = {},
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var r = t[i].response.getIncidentsByChannel(
                      t[i].positionDelta + e.millisecond
                    );
                    for (var s in r) {
                      var o;
                      Object.prototype.hasOwnProperty.call(n, s) || (n[s] = []),
                        (o = n[s]).push.apply(o, C(r[s]));
                    }
                  }
                  var a = this.checkMove(n, e.positionDelta);
                  return a.result
                    ? {
                        result: !0,
                        execute: function () {
                          a.execute();
                          for (var n = 0; n < t.length; n++)
                            t[n].responder.editPosition(
                              t[n].response.id,
                              e.millisecond
                            ),
                              t[n].responder.putMessageOnPipe(
                                "recalcDuration",
                                {},
                                "Groups",
                                { selfExecute: !0, direction: le }
                              );
                        },
                      }
                    : a;
                },
              },
              {
                key: "checkMove",
                value: function (e, t) {
                  var n = !0,
                    i = [],
                    r = [];
                  for (var s in e) {
                    var o = this.instantiatedChannels[s].editIncidents(e[s], t);
                    (n = n && o.result),
                      o.result ? r.push(o.execute) : (i = i.concat(o.errors));
                  }
                  return {
                    result: n,
                    errors: i,
                    execute: function () {
                      for (var e = 0; e < r.length; e++) r[e]();
                    },
                  };
                },
              },
              {
                key: "removeIncident",
                value: function (e) {
                  for (
                    var t = this.putMessageOnPipe(
                        "removeIncident",
                        {
                          incidentId: e.id,
                          parentGroupId: e.parentGroupId,
                          contextData: {
                            clipId: this.id,
                            context: this.context,
                          },
                          audio: this.audioClip,
                        },
                        e.parentGroupId,
                        { selfExecute: !0, direction: ce }
                      ),
                      n = {},
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var r = t[i].response.getIncidentsByChannel();
                    for (var s in r) {
                      var o;
                      Object.prototype.hasOwnProperty.call(n, s) || (n[s] = []),
                        (o = n[s]).push.apply(o, C(r[s]));
                    }
                  }
                  var a = this.checkDelete(n);
                  return a.result
                    ? {
                        result: !0,
                        execute: function () {
                          a.execute();
                          for (var e = 0; e < t.length; e++)
                            t[e].responder.removeChild(t[e].response.id),
                              t[e].responder.putMessageOnPipe(
                                "recalcDuration",
                                {},
                                "Groups",
                                { selfExecute: !0, direction: le }
                              );
                        },
                      }
                    : a;
                },
              },
              {
                key: "checkDelete",
                value: function (e) {
                  var t = !0,
                    n = [],
                    i = [];
                  for (var r in e) {
                    var s = this.instantiatedChannels[r].removeIncidents(e[r]);
                    (t = t && s.result),
                      s.result ? i.push(s.execute) : (n = n.concat(s.errors));
                  }
                  return {
                    result: t,
                    errors: n,
                    execute: function () {
                      for (var e = 0; e < i.length; e++) i[e]();
                    },
                  };
                },
              },
              {
                key: "resizeIncident",
                value: function (e) {
                  for (
                    var t = this.putMessageOnPipe(
                        "resize",
                        {
                          incidentId: e.id,
                          newSize: e.newSize,
                          fraction: e.fraction,
                          contextData: {
                            clipId: this.id,
                            context: this.context,
                          },
                          audio: this.audioClip,
                        },
                        e.id,
                        { selfExecute: !1, direction: ce }
                      ),
                      n = {},
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var r = t[i].response.getIncidentsByChannel(
                      t[i].positionDelta
                    );
                    for (var s in r) {
                      var o;
                      Object.prototype.hasOwnProperty.call(n, s) || (n[s] = []),
                        (o = n[s]).push.apply(o, C(r[s]));
                    }
                  }
                  var a = 0;
                  t.length > 0 && (a = t[0].positionDelta);
                  var l = this.checkResize(e.fraction, n, a);
                  return l.result
                    ? {
                        result: !0,
                        execute: function () {
                          l.execute();
                          for (var n = 0; n < t.length; n++)
                            t[n].responder.setNewDuration(e.newSize);
                        },
                      }
                    : l;
                },
              },
              {
                key: "checkResize",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    i = !0,
                    r = [],
                    s = [];
                  for (var o in t) {
                    var a = re.systoleDiastoleProjections(t[o], e, n),
                      l = this.instantiatedChannels[o].checkResizedIncidents(a);
                    (i = i && l.result),
                      l.result ? s.push(l.execute) : (r = r.concat(l.errors));
                  }
                  var c = function () {
                    for (var e = 0; e < s.length; e++) s[e]();
                  };
                  return { result: i, errors: r, execute: c };
                },
              },
              {
                key: "context",
                get: function () {
                  var e;
                  return (
                    (this.ownContext.contextLoaded =
                      null === (e = this.ownContext.contextLoaded) ||
                      void 0 === e ||
                      e),
                    this.ownContext
                  );
                },
              },
              {
                key: "getIncidentsByChannel",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t = {};
                  return (
                    (t[cr] = [{ millisecond: e, incident: this, id: this.id }]),
                    t
                  );
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.volume = parseFloat(e);
                },
              },
              { key: "_onGetContextOnce", value: function (e) {} },
              {
                key: "handleRecalcDuration",
                value: function (e, t) {
                  if (this._calculateDuration())
                    for (var n = 0; n < this.durationSubs.length; n++)
                      this.durationSubs[n](this.duration);
                  return !0;
                },
              },
              {
                key: "onProgress",
                value: function (e, t, n) {
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  if (!1 !== this.contextReady) {
                    for (var r in (n || (n = this.id),
                    this.instantiatedChannels)) {
                      var s = this.instantiatedChannels[r];
                      s.moveTo(this.runTimeInfo.currentMillisecond, t, n, i);
                    }
                    this.onAfterProgress(e, t);
                  } else this.setBlock();
                },
              },
              { key: "onAfterProgress", value: function (e, t) {} },
              {
                key: "flash",
                value: function () {
                  for (var e in this.instantiatedChannels)
                    this.instantiatedChannels[e].moveTo(
                      0,
                      this.runTimeInfo.currentMillisecond,
                      this.id,
                      !0
                    );
                },
              },
              {
                key: "subscribeToDurationChange",
                value: function (e) {
                  this.durationSubs.push(e);
                },
              },
              { key: "handleSetBlockingWaiting", value: function (e, t) {} },
              { key: "handleRemoveBlockingWaiting", value: function (e, t) {} },
            ]),
            n
          );
        })(ye),
        pr = (function () {
          function e() {
            a(this, e),
              (this.output = z.createGain()),
              (this.gainNode = z.createGain()),
              z.createStereoPanner &&
                (this.pannerNode = z.createStereoPanner()),
              z.createStereoPanner
                ? (this.pannerNode.connect(this.gainNode),
                  this.gainNode.connect(this.output),
                  (this.input = this.pannerNode))
                : (this.gainNode.connect(this.output),
                  (this.input = this.gainNode));
          }
          return (
            c(e, [
              {
                key: "connect",
                value: function (e) {
                  this.output.connect(e);
                },
              },
              {
                key: "disconnect",
                value: function () {
                  this.output.disconnect();
                },
              },
            ]),
            e
          );
        })();
      function hr(e) {
        for (
          var t = window.atob(e), n = t.length, i = new Uint8Array(n), r = 0;
          r < n;
          r++
        )
          i[r] = t.charCodeAt(r);
        return i.buffer;
      }
      var dr = /\[data(-mcid="+\w+")+\]/g,
        mr = (function () {
          function e() {
            a(this, e), (this.subscribers = []);
          }
          return (
            c(e, [
              {
                key: "sub",
                value: function (e, t) {
                  this.subscribers.push(t);
                },
              },
              {
                key: "pub",
                value: function (e) {
                  for (var t = 0; t < this.subscribers.length; t++)
                    this.subscribers[t](e);
                },
              },
            ]),
            e
          );
        })(),
        fr = (function () {
          function e() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = arguments.length > 1 ? arguments[1] : void 0;
            a(this, e),
              (this.totalSources = n.length),
              (this.audioSources = {}),
              (this.elementsByMCID = {});
            for (
              var r = function (e) {
                  var r = n[e],
                    s = {
                      mcid: r.mcid || te(),
                      id: r.id,
                      src: r.src,
                      classes: r.classes || [],
                      base64: r.base64 || !1,
                      pubSub: new mr(),
                      soundLoaded: !1,
                      startValues: r.startValues || {},
                    };
                  if (
                    ((t.audioSources[s.id] = s),
                    (t.elementsByMCID[s.mcid] = s),
                    r.base64)
                  )
                    z.decodeAudioData(hr(r.src), function (e) {
                      t._setBuffer(s, e, i);
                    });
                  else {
                    var o = new XMLHttpRequest();
                    o.open("GET", s.src, !0),
                      (o.responseType = "arraybuffer"),
                      (t.soundLoaded = !1),
                      (o.onload = function () {
                        z.decodeAudioData(
                          o.response,
                          function (e) {
                            t._setBuffer(s, e, i);
                          },
                          t.onError
                        );
                      }),
                      o.send();
                  }
                },
                s = 0;
              s < n.length;
              s++
            )
              r(s);
            this.context = {
              document: document,
              window: window,
              rootElement: document.body,
              unmount: function () {},
              masterNode: i,
              audioContext: z,
              getElements: this.getElements.bind(this),
              getMCID: this.getMCID.bind(this),
              setMCID: this.setMCID.bind(this),
              getElementSelectorByMCID: this.getElementSelectorByMCID.bind(
                this
              ),
              getElementByMCID: this.getElementByMCID.bind(this),
            };
          }
          return (
            c(e, [
              {
                key: "_setBuffer",
                value: function (e, t, n) {
                  (e.soundLoaded = !0),
                    (e.buffer = t),
                    (e.effectsAudioNode = new pr()),
                    e.effectsAudioNode.connect(n.input),
                    e.pubSub.pub();
                },
              },
              {
                key: "getElementByMCID",
                value: function (e) {
                  return Object.prototype.hasOwnProperty.call(
                    this.elementsByMCID,
                    e
                  )
                    ? this.elementsByMCID[e]
                    : null;
                },
              },
              {
                key: "getElements",
                value: function (e) {
                  if ("~" !== e.charAt(0)) {
                    if (dr.exec(e)) {
                      var t = e.split('"')[1];
                      return this.elementsByMCID[t];
                    }
                    return [];
                  }
                  if ("#" === (e = e.substr(1)).charAt(0))
                    return Object.prototype.hasOwnProperty.call(
                      this.audioSources,
                      e.substr(1)
                    )
                      ? [this.audioSources[e.substr(1)]]
                      : [];
                  if ("." === e.charAt(0)) {
                    var n = e.substr(1),
                      i = [];
                    for (var r in this.audioSources)
                      r.classes.indexOf(n) >= 0 && i.push(r);
                    return i;
                  }
                },
              },
              {
                key: "getMCID",
                value: function (e) {
                  return e.mcid;
                },
              },
              {
                key: "setMCID",
                value: function (e, t) {
                  e.mcid = t;
                },
              },
              {
                key: "getElementSelectorByMCID",
                value: function (e) {
                  return '[data-mcid="'.concat(e, '"]');
                },
              },
            ]),
            e
          );
        })(),
        vr = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e, i) {
            var r;
            a(this, n),
              ((r = t.call(this, e, i)).audioNode = new pr()),
              r.audioNode.connect(z.destination);
            var s = new fr(r.props.audioSources, r.audioNode);
            return (
              (r.ownContext = h(h({}, s.context), {}, { isHostedClip: !0 })),
              (r.audioClip = !0),
              r
            );
          }
          return (
            c(n, [
              {
                key: "onProgress",
                value: function (e, t, i) {
                  var r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  b(m(n.prototype), "onProgress", this).call(
                    this,
                    e,
                    t,
                    this.id,
                    r
                  );
                },
              },
              {
                key: "_onGetContextOnce",
                value: function (e) {
                  this.audioNode.disconnect(),
                    (this.parentClipContext = e),
                    this.audioNode.connect(e.masterNode.input);
                },
              },
              {
                key: "lastWish",
                value: function () {
                  this.audioNode.output.disconnect(),
                    this.audioNode.output.connect(z.destination);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.audioNode.output.gain.value = e;
                },
              },
            ]),
            n
          );
        })(ur),
        gr = (function (e) {
          d(n, e);
          var t = g(n);
          function n() {
            return a(this, n), t.apply(this, arguments);
          }
          return (
            c(n, [
              {
                key: "onProgress",
                value: function (e) {
                  var t = this;
                  if (!this.element.soundLoaded)
                    return (
                      this.setBlock("loading sound"),
                      this.element.pubSub.sub(this.id, function () {
                        t.unblock();
                      }),
                      !1
                    );
                  if ("gain" === this.attributeKey) {
                    var n =
                      (this.targetValue - this.initialValues) * e +
                      this.initialValues;
                    this.element.effectsAudioNode.gainNode.gain.value = n;
                  } else if ("pan" === this.attributeKey) {
                    var i =
                      (this.targetValue - this.initialValues) * e +
                      this.initialValues;
                    this.element.effectsAudioNode.pannerNode.pan.value = i;
                  }
                },
              },
              {
                key: "getScratchValue",
                value: function () {
                  return "pan" === this.attributeKey
                    ? Object.prototype.hasOwnProperty.call(
                        this.element.startValues,
                        "pan"
                      )
                      ? this.element.startValues.pan
                      : 0
                    : "gain" === this.attributeKey
                    ? Object.prototype.hasOwnProperty.call(
                        this.element.startValues,
                        "gain"
                      )
                      ? this.element.startValues.gain
                      : 1
                    : void 0;
                },
              },
            ]),
            n
          );
        })(Te),
        yr = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e) {
            var i;
            return (
              a(this, n),
              ((i = t.call(this, e)).playingIncidentsIds = []),
              (i.transitioned = !1),
              e.subscribe(te(), i._stateChange.bind(f(i)), 0, 1, !0),
              i
            );
          }
          return (
            c(n, [
              {
                key: "_stateChange",
                value: function (e, t) {
                  ("paused" !== t && "idle" !== t && "blocked" !== t) ||
                    (this._stopPlayingIncidents(), (this.transitioned = !0));
                },
              },
              {
                key: "_stopPlayingIncidents",
                value: function () {
                  for (var e = 0; e < this.playingIncidentsIds.length; e++) {
                    var t = this.playingIncidentsIds[e].split("|||");
                    this._incidentById(t[0]).stop(t[1]);
                  }
                  this.playingIncidentsIds = [];
                },
              },
              {
                key: "moveTo",
                value: function (e, t, n) {
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  if ("transitional" === this.runTimeInfo.state || i) {
                    (this.transitioned = !0), this._stopPlayingIncidents();
                    for (var r = 0; r < this.incidents.length; r++) {
                      var s = this.incidents[r],
                        o = s.id,
                        a = s.millisecond,
                        l = this._incidentById(o),
                        c = void 0,
                        u = void 0;
                      t < a
                        ? ((c = 0), (u = 0))
                        : t > a + l.duration
                        ? ((c = 1), (u = l.duration))
                        : (c = (u = t - a) / l.duration),
                        l.onProgress(c, u, n, !0);
                    }
                  } else {
                    this.transitioned && ((e = 0), (this.transitioned = !1));
                    for (var p = this.incidents, h = 0; h < p.length; h++) {
                      var d = p[h],
                        m = d.millisecond,
                        f = this._incidentById(d.id),
                        v = f.duration,
                        g = m + v,
                        y = "".concat(d.id).concat("|||").concat(n);
                      if (m >= e && m < t && g > t) {
                        var b = (t - m) / v >= 1,
                          x = b ? 1 : (t - m) / v,
                          w = b ? v : t - m,
                          k = f.play(x, w, n);
                        k && this.playingIncidentsIds.push(y);
                      } else if (g > e && g <= t) {
                        f.stop(n);
                        var C = this.playingIncidentsIds.indexOf(y);
                        C > -1 && this.playingIncidentsIds.splice(C, 1);
                      }
                    }
                    this.runTimeInfo.currentMillisecond = t;
                  }
                },
              },
            ]),
            n
          );
        })(be),
        br = S(null, function (e) {
          return {
            F: function t() {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = arguments.length > 2 ? arguments[2] : void 0;
              a(this, t),
                e(this),
                (this.attrs = n),
                (this.props = i),
                (this.dna = r),
                (this.context = r.context),
                (this.mcid = r.mcid),
                (this.id = i.id || te()),
                (this.modelId = i.modelId),
                (this.gotContext = !1),
                (this.plugin_channel_class = yr),
                (this.mc_plugin_npm_name = "motor-cortex-js-media-playback"),
                Object.prototype.hasOwnProperty.call(
                  i,
                  "plugin_channel_class"
                ) && (this.plugin_channel_class = i.plugin_channel_class),
                Object.prototype.hasOwnProperty.call(i, "mc_plugin_npm_name") &&
                  (this.mc_plugin_npm_name = i.mc_plugin_npm_name),
                (this.hasIncidents = !1),
                (this.autoGenerated = !1),
                this.onInitialise(n, i);
            },
            d: [
              {
                kind: "get",
                key: "selector",
                value: function () {
                  return this.props.selector;
                },
              },
              {
                kind: "get",
                key: "element",
                value: function () {
                  return this.context.getElementByMCID(this.mcid);
                },
              },
              {
                kind: "method",
                decorators: [Me],
                key: "getIncidentsByChannel",
                value: function () {},
              },
              {
                kind: "method",
                key: "_onGetContextOnce",
                value: function () {
                  try {
                    if (!0 === this.context.fragment) return;
                    this.gotContext ||
                      (this.onGetContext(), (this.gotContext = !0));
                  } catch (e) {
                    re.error(e), re.error(this.mcid);
                  }
                },
              },
              {
                kind: "method",
                key: "onGetContext",
                value: function () {
                  re.info(
                    'Overwritte the "onGetContext" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "lastWish", value: function () {} },
              {
                kind: "method",
                key: "onInitialise",
                value: function () {
                  re.info(
                    'Overwritte the "onInialise" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "onProgress", value: function (e, t) {} },
              {
                kind: "method",
                key: "play",
                value: function (e) {
                  return !0;
                },
              },
              { kind: "method", key: "stop", value: function () {} },
              {
                kind: "method",
                decorators: [ve],
                key: "setBlock",
                value: function () {},
              },
              {
                kind: "method",
                decorators: [ge],
                key: "unblock",
                value: function () {},
              },
            ],
          };
        }),
        xr = {
          npm_name: "@kissmybutton/motorcortex-soundsystem",
          name: "Internal MotorCortex Soundsystem",
          incidents: [
            {
              exportable: (function (e) {
                d(n, e);
                var t = g(n);
                function n() {
                  return a(this, n), t.apply(this, arguments);
                }
                return (
                  c(n, [
                    {
                      key: "play",
                      value: function (e) {
                        var t = this;
                        if (!this.element.soundLoaded)
                          return (
                            this.setBlock("loading sound"),
                            this.element.pubSub.sub(this.id, function () {
                              t.unblock();
                            }),
                            !1
                          );
                        var n = 0;
                        return (
                          Object.prototype.hasOwnProperty.call(
                            this.props,
                            "startFrom"
                          ) && (n = this.props.startFrom),
                          (this.audioNode = z.createBufferSource()),
                          (this.audioNode.buffer = this.element.buffer),
                          this.audioNode.connect(
                            this.element.effectsAudioNode.input
                          ),
                          this.audioNode.start(0, (e + n) / 1e3),
                          !0
                        );
                      },
                    },
                    {
                      key: "stop",
                      value: function () {
                        this.audioNode.stop();
                      },
                    },
                  ]),
                  n
                );
              })(br),
              name: "AudioPlayback",
            },
            { exportable: gr, name: "AudioEffect" },
          ],
          Clip: { exportable: vr },
          audio: "only",
        },
        wr = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            a(this, e),
              (this.realArray = []),
              null != t && (this.realArray = t);
          }
          return (
            c(e, [
              {
                key: "_hasOwnProperty",
                value: function (e) {
                  return Object.prototype.hasOwnProperty.call(
                    this.realArray,
                    e
                  );
                },
              },
              {
                key: "_get",
                value: function (e) {
                  return this.realArray[e];
                },
              },
              {
                key: "_set",
                value: function (e, t) {
                  this.realArray[e] = t;
                },
              },
              {
                key: "_keys",
                value: function () {
                  return Object.keys(this.realArray);
                },
              },
              {
                key: "_delete",
                value: function (e) {
                  return delete this.realArray[e];
                },
              },
              {
                key: "_export",
                value: function () {
                  return this.realArray;
                },
              },
            ]),
            e
          );
        })(),
        kr = (function () {
          function e(t) {
            a(this, e),
              (this.originalArray = t),
              (this.extraArray = {}),
              (this.addedKeys = []),
              (this.removedKeys = []);
          }
          return (
            c(e, [
              {
                key: "_hasOwnProperty",
                value: function (e) {
                  return (
                    Object.prototype.hasOwnProperty.call(
                      this.originalArray,
                      e
                    ) ||
                    Object.prototype.hasOwnProperty.call(this.extraArray, e)
                  );
                },
              },
              {
                key: "_get",
                value: function (e) {
                  return Object.prototype.hasOwnProperty.call(
                    this.extraArray,
                    e
                  )
                    ? this.extraArray[e]
                    : Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        e
                      )
                    ? this.originalArray[e]
                    : void 0;
                },
              },
              {
                key: "_set",
                value: function (e, t) {
                  (this.extraArray[e] = t),
                    Object.prototype.hasOwnProperty.call(
                      this.originalArray,
                      e
                    ) || this.addedKeys.push(e);
                  var n = this.removedKeys.indexOf(e);
                  n > -1 && this.removedKeys.splice(n, 1);
                },
              },
              {
                key: "_keys",
                value: function () {
                  for (
                    var e = Object.keys(this.originalArray).concat(
                        this.addedKeys
                      ),
                      t = 0;
                    t < this.removedKeys.length;
                    t++
                  ) {
                    var n = this.removedKeys.indexOf(this.removedKeys[t]);
                    e.splice(n, 1);
                  }
                  return e;
                },
              },
              {
                key: "_delete",
                value: function (e) {
                  var t = this.addedKeys.indexOf(e);
                  return t > -1
                    ? (this.addedKeys.splice(t), delete this.extraArray[e])
                    : this.removedKeys.push(e);
                },
              },
              {
                key: "_export",
                value: function () {
                  for (var e in this.extraArray)
                    this.originalArray[e] = this.extraArray[e];
                  for (var t = 0; t < this.removedKeys.length; t++)
                    delete this.originalArray[this.removedKeys[t]];
                  return this.originalArray;
                },
              },
            ]),
            e
          );
        })();
      function Cr(e, t, n, i) {
        var r = !1;
        for (var s in t)
          Object.prototype.hasOwnProperty.call(n, s) ||
            ((r = !0), (i[s] = t[s]));
        return (e.animatedAttributeValue = i), r;
      }
      function Er(e, t, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          s = e[i],
          o = t._get(s.id);
        o.setInitialValue(n, r);
        var a = Cr(
          o,
          o.initialValue,
          o.originalAnimatedAttributeValue,
          JSON.parse(JSON.stringify(o.animatedAttributeValue))
        );
        a && (o.lastWish(), o.onGetContext()),
          a &&
            i < e.length - 1 &&
            Er(e, t, o.animatedAttributeValue, i + 1, !1);
      }
      var Or = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            a(this, e),
              (this.lanes = {}),
              t.lanes && (this.lanes = t.lanes),
              (this.comboAttributes = {}),
              null != t.comboAttributes &&
                (this.comboAttributes = t.comboAttributes),
              (this.runTimeInfo = t.runTimeInfo),
              (this.belongingLaneKeysByAnimationId = {}),
              t.belongingLaneKeysByAnimationId &&
                (this.belongingLaneKeysByAnimationId =
                  t.belongingLaneKeysByAnimationId),
              (this.incidentsById = new wr({})),
              t.incidentsById && (this.incidentsById = t.incidentsById);
          }
          return (
            c(e, [
              {
                key: "_resize",
                value: function (e) {
                  for (
                    var t = Object.keys(this.lanes), n = 0;
                    n < t.length;
                    n++
                  )
                    for (
                      var i = t[n], r = this.lanes[i], s = 0;
                      s < r.length;
                      s++
                    )
                      r[s].millisecond = r[s].millisecond * e;
                },
              },
              {
                key: "createTestLanesSanbox",
                value: function () {
                  var t = {
                    lanes: ze(this.lanes),
                    belongingLaneKeysByAnimationId: ze(
                      this.belongingLaneKeysByAnimationId
                    ),
                    incidentsById: new kr(this.incidentsById._export()),
                  };
                  return (
                    this.comboAttributes &&
                      (t.comboAttributes = this.comboAttributes),
                    new e(t)
                  );
                },
              },
              {
                key: "getLane",
                value: function (e, t) {
                  return this.lanes[ne(e, t)];
                },
              },
              {
                key: "applySandboxChanges",
                value: function (e) {
                  (this.lanes = e.lanes.exportFlattened()),
                    (this.belongingLaneKeysByAnimationId = e.belongingLaneKeysByAnimationId.exportFlattened()),
                    (this.incidentsById = new wr(e.incidentsById._export()));
                },
              },
              {
                key: "laneExists",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i = ne(e, t);
                  return (
                    !!this.lanes.hasOwnProperty(i) ||
                    (n && this.lanes.setValue(i, []), !1)
                  );
                },
              },
              {
                key: "getOverlappingAnims",
                value: function (e, t, n) {
                  var i = this,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [],
                    s =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : null;
                  return Array.from(this.lanes[ne(t, n)] || []).filter(
                    function (t) {
                      var n = e.incident.duration;
                      null != s && (n = s);
                      var o = i.incidentsById._get(t.id).duration;
                      return (
                        t.id !== e.incident.id &&
                        !r.includes(t.id) &&
                        ((t.millisecond >= e.millisecond &&
                          t.millisecond < n + e.millisecond) ||
                          (t.millisecond + o > e.millisecond &&
                            t.millisecond + o <= n + e.millisecond) ||
                          (t.millisecond < e.millisecond &&
                            t.millisecond + o > n + e.millisecond))
                      );
                    }
                  );
                },
              },
              {
                key: "addElementToLane",
                value: function (e, t, n, i) {
                  var r = this,
                    s = [],
                    o = ne(e, t);
                  this.incidentsById._set(i.id, i);
                  var a = { millisecond: n, id: i.id };
                  this.laneExists(e, t, !0),
                    this.lanes.pushValue(o, a),
                    this.lanes[o].sortBy("millisecond");
                  var l = this.lanes[o],
                    c = this.lanes[o].findIndex(function (e) {
                      return e.id === i.id;
                    });
                  return (
                    Object.prototype.hasOwnProperty.call(i.id) ||
                      this.belongingLaneKeysByAnimationId.setValue(i.id, []),
                    this.belongingLaneKeysByAnimationId.pushValue(i.id, o),
                    0 === c
                      ? this.lanes[o].length > 1
                        ? s.push(function () {
                            i.setInitialValue(
                              r.incidentsById._get(l[1].id).pureInitialValues
                            );
                          })
                        : s.push(function () {
                            i.setInitialValue();
                          })
                      : s.push(function () {
                          i.setInitialValue(
                            r.incidentsById._get(l[c - 1].id)
                              .animatedAttributeValue
                          );
                        }),
                    Object.prototype.hasOwnProperty.call(
                      this.comboAttributes,
                      t
                    ) &&
                      s.push(function () {
                        return Er(l, r.incidentsById, i.initialValue, c);
                      }),
                    c + 1 < l.length &&
                      s.push(function () {
                        r.incidentsById
                          ._get(l[c + 1].id)
                          .setInitialValue(i.animatedAttributeValue),
                          r.incidentsById._get(l[c + 1].id).gotContext &&
                            (r.incidentsById._get(l[c + 1].id).lastWish(),
                            r.incidentsById._get(l[c + 1].id).onGetContext());
                      }),
                    s
                  );
                },
              },
              {
                key: "updateLane",
                value: function (e, t) {
                  for (var n = this, i = {}, r = 0; r < e.length; r++)
                    for (
                      var s = this.belongingLaneKeysByAnimationId[e[r]], o = 0;
                      o < s.length;
                      o++
                    ) {
                      var a = s[o];
                      Object.prototype.hasOwnProperty.call(i, a) ||
                        (i[a] = {
                          animations: [],
                          lane: this.lanes[a],
                          laneData: Y(s[o]),
                        }),
                        i[a].animations.push(e[r]);
                    }
                  for (var l in i) {
                    var c = i[l],
                      u = c.laneData,
                      p = c.lane,
                      h = c.animations,
                      d = C(p);
                    d.sort(function (e, t) {
                      return e.millisecond - t.millisecond;
                    });
                    for (
                      var m = Object.prototype.hasOwnProperty.call(
                          this.comboAttributes,
                          u.attribute
                        ),
                        f = 0;
                      f < p.length;
                      f++
                    )
                      h.includes(p[f].id) && (p[f].millisecond += t);
                    p.sort(function (e, t) {
                      return e.millisecond - t.millisecond;
                    }),
                      (this.lanes[l] = p);
                    for (
                      var v = function (e) {
                          var t = h[e],
                            i = d.findIndex(function (e) {
                              return e.id === t;
                            }),
                            r = p.findIndex(function (e) {
                              return e.id === t;
                            });
                          if (i === r && r <= 1) return "continue";
                          var s = n.incidentsById._get(p[r].id);
                          if (i + 1 < p.length)
                            if (0 === i)
                              if (m)
                                Er(
                                  p,
                                  n.incidentsById,
                                  s.pureInitialValues,
                                  0,
                                  !0
                                );
                              else {
                                var o = n.incidentsById._get(d[1].id);
                                o.setInitialValue(s.pureInitialValues),
                                  o.onGetContext();
                              }
                            else if (m) {
                              var a = r > i ? i : r;
                              Er(
                                p,
                                n.incidentsById,
                                n.incidentsById._get(d[i - 1].id)
                                  .animatedAttributeValue,
                                a,
                                !0
                              );
                            } else
                              n.incidentsById
                                ._get(d[i + 1].id)
                                .setInitialValue(
                                  n.incidentsById._get(d[i - 1].id)
                                    .animatedAttributeValue
                                ),
                                n.incidentsById
                                  ._get(d[i + 1].id)
                                  .onGetContext();
                          if (
                            (0 === r
                              ? m
                                ? Er(
                                    p,
                                    n.incidentsById,
                                    n.incidentsById._get(d[0].id)
                                      .pureInitialValues,
                                    r,
                                    !0
                                  )
                                : (s.setInitialValue(
                                    n.incidentsById._get(d[0].id)
                                      .pureInitialValues
                                  ),
                                  s.onGetContext())
                              : m
                              ? Er(
                                  p,
                                  n.incidentsById,
                                  n.incidentsById._get(p[r - 1].id)
                                    .animatedAttributeValue,
                                  r,
                                  !0
                                )
                              : (s.setInitialValue(
                                  n.incidentsById._get(p[r - 1].id)
                                    .animatedAttributeValue
                                ),
                                s.onGetContext()),
                            r + 1 >= p.length)
                          )
                            return "continue";
                          if (m)
                            return (
                              Er(
                                p,
                                n.incidentsById,
                                s.animatedAttributeValue,
                                r + 1,
                                !0
                              ),
                              "continue"
                            );
                          var l = n.incidentsById._get(p[r + 1].id);
                          l.setInitialValue(s.animatedAttributeValue),
                            l.onGetContext();
                        },
                        g = 0;
                      g < h.length;
                      g++
                    )
                      v(g);
                  }
                },
              },
              {
                key: "deleteAnimations",
                value: function (e) {
                  for (var t = {}, n = 0; n < e.length; n++) {
                    for (
                      var i = e[n],
                        r = this.belongingLaneKeysByAnimationId[i],
                        s = 0;
                      s < r.length;
                      s++
                    ) {
                      for (
                        var o = this.lanes[r[s]], a = -1, l = 0;
                        l < o.length;
                        l++
                      )
                        if (o[l].id === i) {
                          a = l;
                          break;
                        }
                      for (
                        var c = h({}, o[a]),
                          u = this.incidentsById._get(c.id),
                          p = Y(r[s]),
                          d = [],
                          m = 0;
                        m < o.length;
                        m++
                      )
                        o[m].id !== i && d.push(o[m]);
                      if (
                        ((this.lanes[r[s]] = d),
                        0 !== (o = this.lanes[r[s]]).length)
                      ) {
                        t[r[s]] = Y(r[s]);
                        var f = this.incidentsById._get(c.id).pureInitialValues;
                        if (!(a >= o.length || !1 === f))
                          if (
                            Object.prototype.hasOwnProperty.call(
                              this.comboAttributes,
                              p.attribute
                            )
                          )
                            Er(o, this.incidentsById, f, a, !0);
                          else {
                            var v = this.incidentsById._get(o[a].id);
                            v.setInitialValue(f), v.onGetContext();
                          }
                      } else
                        u.onProgress(0, 0),
                          delete this.lanes[r[s]],
                          Object.prototype.hasOwnProperty.call(t, r[s]) &&
                            delete t[r[s]];
                    }
                    delete this.belongingLaneKeysByAnimationId[e[n]];
                  }
                  return t;
                },
              },
              {
                key: "recalcScratchValues",
                value: function (e) {
                  for (
                    var t = Object.keys(this.lanes), n = 0;
                    n < t.length;
                    n++
                  ) {
                    var i = t[n],
                      r = this.lanes[i];
                    if (r.length > 0) {
                      var s = this.incidentsById._get(r[0].id),
                        o = s.getScratchValue(e),
                        a = Y(i);
                      Object.prototype.hasOwnProperty.call(
                        this.comboAttributes,
                        a.attribute
                      )
                        ? Er(r, this.incidentsById, o, 0, !0)
                        : s.setInitialValue(o),
                        s.lastWish(),
                        s.onGetContext();
                    }
                  }
                },
              },
            ]),
            e
          );
        })(),
        Pr = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e) {
            var i;
            return (
              a(this, n),
              ((i = t.call(this, e)).comboAttributes = {}),
              (i.fixedAttributeName = "_"),
              null != e.comboAttributes &&
                (i.comboAttributes = e.comboAttributes),
              (i.LanesHandler = new Or({
                comboAttributes: i.comboAttributes,
                runTimeInfo: i.runTimeInfo,
              })),
              i
            );
          }
          return (
            c(n, [
              {
                key: "setComboAttributes",
                value: function (e) {
                  (this.comboAttributes = e),
                    (this.LanesHandler = new Or({
                      comboAttributes: this.comboAttributes,
                    }));
                },
              },
              {
                key: "lanes",
                get: function () {
                  return this.LanesHandler.lanes;
                },
              },
              {
                key: "incidentsById",
                get: function () {
                  return this.LanesHandler.incidentsById;
                },
              },
              {
                key: "_resize",
                value: function (e) {
                  this.LanesHandler._resize(e);
                },
              },
              {
                key: "checkAddition",
                value: function (e) {
                  for (
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "all-or-nothing",
                      i = this.LanesHandler.createTestLanesSanbox(),
                      r = [],
                      s = [],
                      o = [],
                      a = function (n) {
                        var a = !1,
                          l = e[n],
                          c = l.incident,
                          u = c.mcid,
                          p = c.attribute || t.fixedAttributeName;
                        i.laneExists(u, p), r.push({ mcid: u, attribute: p });
                        var h = i.getOverlappingAnims(l, u, p);
                        if (
                          (h.length > 0 &&
                            ((a = !0),
                            o.push({
                              type:
                                "unauthorised, overlapping incidents on the same element",
                              meta: {
                                element_mcid: u,
                                attribute: p,
                                incident: l,
                                overlappingAnims: h,
                              },
                            })),
                          !a)
                        ) {
                          var d = i.addElementToLane(u, p, l.millisecond, c);
                          s.push(function () {
                            for (var e = 0; e < d.length; e++) d[e]();
                            c._onGetContextOnce();
                          });
                        }
                      },
                      l = 0;
                    l < e.length;
                    l++
                  )
                    a(l);
                  if (o.length > 0 && "all-or-nothing" === n)
                    return { result: !1, errors: o };
                  var c = this.LanesHandler,
                    u = function () {
                      for (var e = 0; e < r.length; e++) {
                        var t = ne(r[e].mcid, r[e].attribute),
                          n = i.lanes[t].exportFlattened();
                        n.sort(function (e, t) {
                          return e.millisecond - t.millisecond;
                        }),
                          i.lanes.setValue(t, n);
                      }
                      for (var o = 0; o < s.length; o++) s[o]();
                      c.applySandboxChanges(i);
                    };
                  return { result: !0, errors: o, execute: u };
                },
              },
              {
                key: "checkEdit",
                value: function (e, t) {
                  for (var n = [], i = 0; i < e.length; i++) n.push(e[i].id);
                  for (
                    var r = this.LanesHandler.createTestLanesSanbox(),
                      s = [],
                      o = 0;
                    o < e.length;
                    o++
                  )
                    for (
                      var a = e[o].incident.id,
                        l = e[o].incident.mcid,
                        c = e[o].incident.attribute || this.fixedAttributeName,
                        u = r.getLane(l, c),
                        p = 0;
                      p < u.length;
                      p++
                    )
                      if (u[p].id === a) {
                        var d = h({}, u[p]);
                        (d.millisecond += t),
                          (d.incident = r.incidentsById._get(d.id));
                        var m = r.getOverlappingAnims(d, l, c, n);
                        m.length > 0 &&
                          s.push({
                            type:
                              "anauthorised, overlapping animations on the same element",
                            meta: {
                              element_mcid: l,
                              attribute: c,
                              newAnimation: d,
                              overlappingAnims: m,
                            },
                          });
                        break;
                      }
                  if (s.length > 0) return { result: !1, errors: s };
                  var f = this;
                  return {
                    result: !0,
                    execute: function () {
                      f.LanesHandler.updateLane(n, t);
                    },
                  };
                },
              },
              {
                key: "checkResizedIncidents",
                value: function (e) {
                  for (
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = [],
                      i = 0;
                    i < e.length;
                    i++
                  )
                    n.push(e[i].id);
                  for (
                    var r = this.LanesHandler.createTestLanesSanbox(),
                      s = [],
                      o = 0;
                    o < e.length;
                    o++
                  )
                    for (
                      var a = this.LanesHandler.incidentsById._get(e[o].id),
                        l = a.mcid,
                        c = a.attribute || this.fixedAttributeName,
                        u = r.getLane(l, c),
                        p = { mcid: l, attribute: c },
                        d = e[o].end - e[o].start,
                        m = 0;
                      m < u.length;
                      m++
                    )
                      if (u[m].id === e[o].id) {
                        if (!t) {
                          var f = u[m],
                            v = h({}, f);
                          (v.millisecond += e[o].startDelta),
                            (v.incident = r.incidentsById._get(v.id));
                          var g = r.getOverlappingAnims(
                            v,
                            p.mcid,
                            p.attribute,
                            n,
                            d
                          );
                          g.length > 0 &&
                            s.push({
                              type:
                                "anauthorised overlapping animations on the same element",
                              meta: {
                                element_mcid: p.mcid,
                                attribute: p.attribute,
                                newAnimation: v,
                                overlappingAnims: g,
                              },
                            });
                        }
                        break;
                      }
                  if (s.length > 0) return { result: !1, errors: s };
                  var y = this,
                    b = function () {
                      for (var t = 0; t < e.length; t++)
                        y.LanesHandler.updateLane([e[t].id], e[t].startDelta);
                    };
                  return { execute: b, result: !0 };
                },
              },
              {
                key: "checkDelete",
                value: function (e) {
                  for (var t = [], n = 0; n < e.length; n++) t.push(e[n].id);
                  var i = this;
                  return {
                    result: !0,
                    execute: function () {
                      i.LanesHandler.deleteAnimations(t);
                    },
                  };
                },
              },
              {
                key: "recalcScratchValues",
                value: function (e) {
                  this.LanesHandler.recalcScratchValues(e);
                },
              },
              {
                key: "slipIntoLaneForwards",
                value: function (e, t, n, i) {
                  var r = this,
                    s =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4],
                    o = e.filter(function (e) {
                      var i =
                        r.incidentsById._get(e.id).duration + e.millisecond;
                      return (
                        (i >= t && i <= n) || (i >= n && e.millisecond <= n)
                      );
                    });
                  if (0 === o.length) {
                    if (s && 0 === t) {
                      var a = this.incidentsById._get(e[0].id);
                      a.onProgress(0, 0, i);
                    }
                    return !0;
                  }
                  var l = o.length - 1,
                    c = this.incidentsById._get(o[l].id),
                    u = o[l].millisecond,
                    p = 1,
                    h = c.duration;
                  c.duration + u > n && (p = (h = n - u) / c.duration),
                    c.onProgress(p, h, i);
                },
              },
              {
                key: "slipToLaneBackwards",
                value: function (e, t, n, i) {
                  var r = this,
                    s = e.filter(function (e) {
                      var i =
                        r.incidentsById._get(e.id).duration + e.millisecond;
                      return (
                        (i <= n && i >= t) ||
                        (e.millisecond >= t && e.millisecond <= n) ||
                        (e.millisecond < t && i > n)
                      );
                    });
                  if (0 === s.length) return !0;
                  var o = this.incidentsById._get(s[0].id),
                    a = s[0].millisecond,
                    l = 0,
                    c = 0;
                  a < n && ((l = (n - a) / o.duration), (c = n - a)),
                    o.onProgress(l, c, i);
                },
              },
              {
                key: "moveTo",
                value: function (e, t, n) {
                  for (
                    var i =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      r = Object.keys(this.lanes),
                      s = 0;
                    s < r.length;
                    s++
                  ) {
                    var o = this.lanes[r[s]];
                    e <= t
                      ? this.slipIntoLaneForwards(o, e, t, n, i)
                      : this.slipToLaneBackwards(o, e, t, n, i);
                  }
                },
              },
            ]),
            n
          );
        })(oe);
      u(Pr, "type", "attributes");
      var Ir = (function () {
          function e() {
            a(this, e), (this.customEntities = {});
          }
          return (
            c(e, [
              {
                key: "calcClipDims",
                value: function (e) {
                  var t = { use: !1, width: null, height: null };
                  return Object.prototype.hasOwnProperty.call(
                    e,
                    "originalDims"
                  ) &&
                    null !== e.originalDims.width &&
                    void 0 !== e.originalDims.width &&
                    null !== e.originalDims.height &&
                    void 0 !== e.originalDims.height
                    ? {
                        use: !0,
                        width:
                          e.originalDims.width.number +
                          e.originalDims.width.unit,
                        height:
                          e.originalDims.height.number +
                          e.originalDims.height.unit,
                      }
                    : (Object.prototype.hasOwnProperty.call(
                        e,
                        "containerParams"
                      ) &&
                        (Object.prototype.hasOwnProperty.call(
                          e.containerParams,
                          "width"
                        ) &&
                          ((t.use = !0), (t.width = e.containerParams.width)),
                        Object.prototype.hasOwnProperty.call(
                          e.containerParams,
                          "height"
                        ) &&
                          ((t.use = !0),
                          (t.height = e.containerParams.height))),
                      t);
                },
              },
              {
                key: "scalingCalculator",
                value: function (e) {
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      e,
                      "containerParams"
                    ) ||
                    !Object.prototype.hasOwnProperty.call(e, "originalDims")
                  )
                    return { width: 1, height: 1 };
                  if (
                    !(
                      (null !== e.originalDims.width &&
                        void 0 !== e.originalDims.width) ||
                      (null !== e.originalDims.height &&
                        void 0 !== e.originalDims.height)
                    )
                  )
                    return { width: 1, height: 1 };
                  var t = X(e.containerParams),
                    n = null,
                    i = null;
                  return (
                    null !== t.width &&
                      null !== e.originalDims.width &&
                      (t.width.unit === e.originalDims.width.unit
                        ? (n = t.width.number / e.originalDims.width.number)
                        : re.warning(
                            "containerParams and originalDims width of Incident have different dimensions.\n          containerParams.width will be ignored"
                          )),
                    null !== t.height &&
                      null !== e.originalDims.height &&
                      (t.height.unit === e.originalDims.height.unit
                        ? (i = t.height.number / e.originalDims.height.number)
                        : re.warning(
                            "containerParams and originalDims height of Incident have different dimensions.\n          containerParams.width will be ignored"
                          )),
                    null === n && null === i
                      ? { width: 1, height: 1 }
                      : ((null !== n) & (null === i)
                          ? (i = n)
                          : (null !== i) & (null === n) && (n = i),
                        { width: n, height: i })
                  );
                },
              },
              {
                key: "getElementByMCID",
                value: function (e) {
                  if (
                    Object.prototype.hasOwnProperty.call(this.customEntities, e)
                  )
                    return this.customEntities[e];
                  if (
                    Object.prototype.hasOwnProperty.call(this.elementsByMCID, e)
                  )
                    return this.elementsByMCID[e];
                  var t = this.context.rootElement.querySelector(
                    this.getElementSelectorByMCID(e)
                  );
                  return (this.elementsByMCID[e] = t), t;
                },
              },
              {
                key: "getElements",
                value: function (e) {
                  if (null == e || "" === e) return [];
                  if ("!" === e.charAt(0)) {
                    if ("#" === (e = e.substr(1)).charAt(0))
                      return [this.customEntities[e.substr(1)]];
                    if ("." === e.charAt(0)) {
                      var t = [];
                      for (var n in this.customEntities) {
                        var i = this.customEntities[n];
                        i.classes.indexOf(e.substr(1)) > -1 && t.push(i);
                      }
                      return t;
                    }
                  }
                  return Array.from(
                    this.context.rootElement.querySelectorAll(e)
                  );
                },
              },
              {
                key: "getMCID",
                value: function (e) {
                  return !0 === e.customEntity ? e.id : e.getAttribute(V);
                },
              },
              {
                key: "setMCID",
                value: function (e, t) {
                  e.setAttribute(V, t);
                },
              },
              {
                key: "getElementSelectorByMCID",
                value: function (e) {
                  return Object.prototype.hasOwnProperty.call(
                    this.customEntities,
                    e
                  )
                    ? "!#".concat(e)
                    : "[".concat(V, '="').concat(e, '"]');
                },
              },
              {
                key: "setCustomEntity",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [];
                  return Object.prototype.hasOwnProperty.call(
                    this.customEntities,
                    e
                  )
                    ? (re.error(
                        "Clip "
                          .concat(
                            this.id,
                            " already has custom Entity with id: "
                          )
                          .concat(e)
                      ),
                      !1)
                    : ((this.customEntities[e] = {
                        id: e,
                        entity: t,
                        classes: n,
                        customEntity: !0,
                      }),
                      !0);
                },
              },
            ]),
            e
          );
        })(),
        Mr = It(function (e, t) {
          var n = /[|\\{}()[\]^$+*?.]/g;
          t.escapeRegExpChars = function (e) {
            return e ? String(e).replace(n, "\\$&") : "";
          };
          var i = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&#34;",
              "'": "&#39;",
            },
            r = /[&<>'"]/g;
          function s(e) {
            return i[e] || e;
          }
          (t.escapeXML = function (e) {
            return null == e ? "" : String(e).replace(r, s);
          }),
            (t.escapeXML.toString = function () {
              return (
                Function.prototype.toString.call(this) +
                ';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'
              );
            }),
            (t.shallowCopy = function (e, t) {
              for (var n in (t = t || {})) e[n] = t[n];
              return e;
            }),
            (t.shallowCopyFromList = function (e, t, n) {
              for (var i = 0; i < n.length; i++) {
                var r = n[i];
                void 0 !== t[r] && (e[r] = t[r]);
              }
              return e;
            }),
            (t.cache = {
              _data: {},
              set: function (e, t) {
                this._data[e] = t;
              },
              get: function (e) {
                return this._data[e];
              },
              remove: function (e) {
                delete this._data[e];
              },
              reset: function () {
                this._data = {};
              },
            }),
            (t.hyphenToCamel = function (e) {
              return e.replace(/-[a-z]/g, function (e) {
                return e[1].toUpperCase();
              });
            });
        }),
        Tr = It(function (e, t) {
          /**
           * @file Embedded JavaScript templating engine. {@link http://ejs.co}
           * @author Matthew Eernisse <mde@fleegix.org>
           * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
           * @project EJS
           * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
           */
          var n = s.default,
            i = !1,
            o = "locals",
            a = [
              "delimiter",
              "scope",
              "context",
              "debug",
              "compileDebug",
              "client",
              "_with",
              "rmWhitespace",
              "strict",
              "filename",
              "async",
            ],
            l = a.concat("cache"),
            c = /^\uFEFF/;
          function u(e, n) {
            var i;
            if (
              n.some(function (n) {
                return (
                  (i = t.resolveInclude(e, n, !0)), r.default.existsSync(i)
                );
              })
            )
              return i;
          }
          function p(e, n) {
            var i,
              r = e.filename,
              s = arguments.length > 1;
            if (e.cache) {
              if (!r) throw new Error("cache option requires a filename");
              if ((i = t.cache.get(r))) return i;
              s || (n = d(r).toString().replace(c, ""));
            } else if (!s) {
              if (!r)
                throw new Error(
                  "Internal EJS error: no file name or template provided"
                );
              n = d(r).toString().replace(c, "");
            }
            return (i = t.compile(n, e)), e.cache && t.cache.set(r, i), i;
          }
          function h(e, n, i) {
            var r;
            if (!i) {
              if ("function" == typeof t.promiseImpl)
                return new t.promiseImpl(function (t, i) {
                  try {
                    t((r = p(e)(n)));
                  } catch (e) {
                    i(e);
                  }
                });
              throw new Error("Please provide a callback function");
            }
            try {
              r = p(e)(n);
            } catch (e) {
              return i(e);
            }
            i(null, r);
          }
          function d(e) {
            return t.fileLoader(e);
          }
          function m(e, n) {
            var i = Mr.shallowCopy({}, n);
            if (
              ((i.filename = (function (e, n) {
                var i,
                  s,
                  o = n.views,
                  a = /^[A-Za-z]+:\\|^\//.exec(e);
                if (a && a.length)
                  (e = e.replace(/^\/*/, "")),
                    (i = Array.isArray(n.root)
                      ? u(e, n.root)
                      : t.resolveInclude(e, n.root || "/", !0));
                else if (
                  (n.filename &&
                    ((s = t.resolveInclude(e, n.filename)),
                    r.default.existsSync(s) && (i = s)),
                  !i && Array.isArray(o) && (i = u(e, o)),
                  !i && "function" != typeof n.includer)
                )
                  throw new Error(
                    'Could not find the include file "' +
                      n.escapeFunction(e) +
                      '"'
                  );
                return i;
              })(e, i)),
              "function" == typeof n.includer)
            ) {
              var s = n.includer(e, i.filename);
              if (s && (s.filename && (i.filename = s.filename), s.template))
                return p(i, s.template);
            }
            return p(i);
          }
          function f(e, t, n, i, r) {
            var s = t.split("\n"),
              o = Math.max(i - 3, 0),
              a = Math.min(s.length, i + 3),
              l = r(n),
              c = s
                .slice(o, a)
                .map(function (e, t) {
                  var n = t + o + 1;
                  return (n == i ? " >> " : "    ") + n + "| " + e;
                })
                .join("\n");
            throw (
              ((e.path = l),
              (e.message =
                (l || "ejs") + ":" + i + "\n" + c + "\n\n" + e.message),
              e)
            );
          }
          function v(e) {
            return e.replace(/;(\s*$)/, "$1");
          }
          function g(e, n) {
            n = n || {};
            var i = {};
            (this.templateText = e),
              (this.mode = null),
              (this.truncate = !1),
              (this.currentLine = 1),
              (this.source = ""),
              (i.client = n.client || !1),
              (i.escapeFunction = n.escape || n.escapeFunction || Mr.escapeXML),
              (i.compileDebug = !1 !== n.compileDebug),
              (i.debug = !!n.debug),
              (i.filename = n.filename),
              (i.openDelimiter = n.openDelimiter || t.openDelimiter || "<"),
              (i.closeDelimiter = n.closeDelimiter || t.closeDelimiter || ">"),
              (i.delimiter = n.delimiter || t.delimiter || "%"),
              (i.strict = n.strict || !1),
              (i.context = n.context),
              (i.cache = n.cache || !1),
              (i.rmWhitespace = n.rmWhitespace),
              (i.root = n.root),
              (i.includer = n.includer),
              (i.outputFunctionName = n.outputFunctionName),
              (i.localsName = n.localsName || t.localsName || o),
              (i.views = n.views),
              (i.async = n.async),
              (i.destructuredLocals = n.destructuredLocals),
              (i.legacyInclude =
                void 0 === n.legacyInclude || !!n.legacyInclude),
              i.strict
                ? (i._with = !1)
                : (i._with = void 0 === n._with || n._with),
              (this.opts = i),
              (this.regex = this.createRegex());
          }
          (t.cache = Mr.cache),
            (t.fileLoader = r.default.readFileSync),
            (t.localsName = o),
            (t.promiseImpl = new Function("return this;")().Promise),
            (t.resolveInclude = function (e, t, i) {
              var r = n.dirname,
                s = n.extname,
                o = (0, n.resolve)(i ? t : r(t), e);
              return s(e) || (o += ".ejs"), o;
            }),
            (t.compile = function (e, t) {
              return (
                t &&
                  t.scope &&
                  (i ||
                    (console.warn(
                      "`scope` option is deprecated and will be removed in EJS 3"
                    ),
                    (i = !0)),
                  t.context || (t.context = t.scope),
                  delete t.scope),
                new g(e, t).compile()
              );
            }),
            (t.render = function (e, t, n) {
              var i = t || {},
                r = n || {};
              return (
                2 == arguments.length && Mr.shallowCopyFromList(r, i, a),
                p(r, e)(i)
              );
            }),
            (t.renderFile = function () {
              var e,
                t,
                n,
                i = Array.prototype.slice.call(arguments),
                r = i.shift(),
                s = { filename: r };
              return (
                "function" == typeof arguments[arguments.length - 1] &&
                  (e = i.pop()),
                i.length
                  ? ((t = i.shift()),
                    i.length
                      ? Mr.shallowCopy(s, i.pop())
                      : (t.settings &&
                          (t.settings.views && (s.views = t.settings.views),
                          t.settings["view cache"] && (s.cache = !0),
                          (n = t.settings["view options"]) &&
                            Mr.shallowCopy(s, n)),
                        Mr.shallowCopyFromList(s, t, l)),
                    (s.filename = r))
                  : (t = {}),
                h(s, t, e)
              );
            }),
            (t.Template = g),
            (t.clearCache = function () {
              t.cache.reset();
            }),
            (g.modes = {
              EVAL: "eval",
              ESCAPED: "escaped",
              RAW: "raw",
              COMMENT: "comment",
              LITERAL: "literal",
            }),
            (g.prototype = {
              createRegex: function () {
                var e = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",
                  t = Mr.escapeRegExpChars(this.opts.delimiter),
                  n = Mr.escapeRegExpChars(this.opts.openDelimiter),
                  i = Mr.escapeRegExpChars(this.opts.closeDelimiter);
                return (
                  (e = e.replace(/%/g, t).replace(/</g, n).replace(/>/g, i)),
                  new RegExp(e)
                );
              },
              compile: function () {
                var e,
                  t,
                  i,
                  r = this.opts,
                  s = "",
                  o = "",
                  a = r.escapeFunction,
                  l = r.filename ? JSON.stringify(r.filename) : "undefined";
                if (!this.source) {
                  if (
                    (this.generateSource(),
                    (s +=
                      '  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n'),
                    r.outputFunctionName &&
                      (s += "  var " + r.outputFunctionName + " = __append;\n"),
                    r.destructuredLocals && r.destructuredLocals.length)
                  ) {
                    for (
                      var c =
                          "  var __locals = (" + r.localsName + " || {}),\n",
                        u = 0;
                      u < r.destructuredLocals.length;
                      u++
                    ) {
                      var p = r.destructuredLocals[u];
                      u > 0 && (c += ",\n  "), (c += p + " = __locals." + p);
                    }
                    s += c + ";\n";
                  }
                  !1 !== r._with &&
                    ((s += "  with (" + r.localsName + " || {}) {\n"),
                    (o += "  }\n")),
                    (o += "  return __output;\n"),
                    (this.source = s + this.source + o);
                }
                (e = r.compileDebug
                  ? "var __line = 1\n  , __lines = " +
                    JSON.stringify(this.templateText) +
                    "\n  , __filename = " +
                    l +
                    ";\ntry {\n" +
                    this.source +
                    "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n"
                  : this.source),
                  r.client &&
                    ((e = "escapeFn = escapeFn || " + a.toString() + ";\n" + e),
                    r.compileDebug &&
                      (e = "rethrow = rethrow || " + f.toString() + ";\n" + e)),
                  r.strict && (e = '"use strict";\n' + e),
                  r.debug && console.log(e),
                  r.compileDebug &&
                    r.filename &&
                    (e = e + "\n//# sourceURL=" + l + "\n");
                try {
                  if (r.async)
                    try {
                      i = new Function(
                        "return (async function(){}).constructor;"
                      )();
                    } catch (e) {
                      throw e instanceof SyntaxError
                        ? new Error(
                            "This environment does not support async/await"
                          )
                        : e;
                    }
                  else i = Function;
                  t = new i(r.localsName + ", escapeFn, include, rethrow", e);
                } catch (e) {
                  throw (
                    (e instanceof SyntaxError &&
                      (r.filename && (e.message += " in " + r.filename),
                      (e.message += " while compiling ejs\n\n"),
                      (e.message +=
                        "If the above error is not helpful, you may want to try EJS-Lint:\n"),
                      (e.message += "https://github.com/RyanZim/EJS-Lint"),
                      r.async ||
                        ((e.message += "\n"),
                        (e.message +=
                          "Or, if you meant to create an async function, pass `async: true` as an option."))),
                    e)
                  );
                }
                var h = r.client
                  ? t
                  : function (e) {
                      return t.apply(r.context, [
                        e || {},
                        a,
                        function (t, n) {
                          var i = Mr.shallowCopy({}, e);
                          return n && (i = Mr.shallowCopy(i, n)), m(t, r)(i);
                        },
                        f,
                      ]);
                    };
                if (r.filename && "function" == typeof Object.defineProperty) {
                  var d = r.filename,
                    v = n.basename(d, n.extname(d));
                  try {
                    Object.defineProperty(h, "name", {
                      value: v,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                    });
                  } catch (e) {}
                }
                return h;
              },
              generateSource: function () {
                this.opts.rmWhitespace &&
                  (this.templateText = this.templateText
                    .replace(/[\r\n]+/g, "\n")
                    .replace(/^\s+|\s+$/gm, "")),
                  (this.templateText = this.templateText
                    .replace(/[ \t]*<%_/gm, "<%_")
                    .replace(/_%>[ \t]*/gm, "_%>"));
                var e = this,
                  t = this.parseTemplateText(),
                  n = this.opts.delimiter,
                  i = this.opts.openDelimiter,
                  r = this.opts.closeDelimiter;
                t &&
                  t.length &&
                  t.forEach(function (s, o) {
                    var a;
                    if (
                      0 === s.indexOf(i + n) &&
                      0 !== s.indexOf(i + n + n) &&
                      (a = t[o + 2]) != n + r &&
                      a != "-" + n + r &&
                      a != "_" + n + r
                    )
                      throw new Error(
                        'Could not find matching close tag for "' + s + '".'
                      );
                    e.scanLine(s);
                  });
              },
              parseTemplateText: function () {
                for (
                  var e,
                    t = this.templateText,
                    n = this.regex,
                    i = n.exec(t),
                    r = [];
                  i;

                )
                  0 !== (e = i.index) &&
                    (r.push(t.substring(0, e)), (t = t.slice(e))),
                    r.push(i[0]),
                    (t = t.slice(i[0].length)),
                    (i = n.exec(t));
                return t && r.push(t), r;
              },
              _addOutput: function (e) {
                if (
                  (this.truncate &&
                    ((e = e.replace(/^(?:\r\n|\r|\n)/, "")),
                    (this.truncate = !1)),
                  !e)
                )
                  return e;
                (e = (e = (e = (e = e.replace(/\\/g, "\\\\")).replace(
                  /\n/g,
                  "\\n"
                )).replace(/\r/g, "\\r")).replace(/"/g, '\\"')),
                  (this.source += '    ; __append("' + e + '")\n');
              },
              scanLine: function (e) {
                var t,
                  n = this.opts.delimiter,
                  i = this.opts.openDelimiter,
                  r = this.opts.closeDelimiter;
                switch (((t = e.split("\n").length - 1), e)) {
                  case i + n:
                  case i + n + "_":
                    this.mode = g.modes.EVAL;
                    break;
                  case i + n + "=":
                    this.mode = g.modes.ESCAPED;
                    break;
                  case i + n + "-":
                    this.mode = g.modes.RAW;
                    break;
                  case i + n + "#":
                    this.mode = g.modes.COMMENT;
                    break;
                  case i + n + n:
                    (this.mode = g.modes.LITERAL),
                      (this.source +=
                        '    ; __append("' +
                        e.replace(i + n + n, i + n) +
                        '")\n');
                    break;
                  case n + n + r:
                    (this.mode = g.modes.LITERAL),
                      (this.source +=
                        '    ; __append("' +
                        e.replace(n + n + r, n + r) +
                        '")\n');
                    break;
                  case n + r:
                  case "-" + n + r:
                  case "_" + n + r:
                    this.mode == g.modes.LITERAL && this._addOutput(e),
                      (this.mode = null),
                      (this.truncate =
                        0 === e.indexOf("-") || 0 === e.indexOf("_"));
                    break;
                  default:
                    if (this.mode) {
                      switch (this.mode) {
                        case g.modes.EVAL:
                        case g.modes.ESCAPED:
                        case g.modes.RAW:
                          e.lastIndexOf("//") > e.lastIndexOf("\n") &&
                            (e += "\n");
                      }
                      switch (this.mode) {
                        case g.modes.EVAL:
                          this.source += "    ; " + e + "\n";
                          break;
                        case g.modes.ESCAPED:
                          this.source +=
                            "    ; __append(escapeFn(" + v(e) + "))\n";
                          break;
                        case g.modes.RAW:
                          this.source += "    ; __append(" + v(e) + ")\n";
                          break;
                        case g.modes.COMMENT:
                          break;
                        case g.modes.LITERAL:
                          this._addOutput(e);
                      }
                    } else this._addOutput(e);
                }
                this.opts.compileDebug &&
                  t &&
                  ((this.currentLine += t),
                  (this.source += "    ; __line = " + this.currentLine + "\n"));
              },
            }),
            (t.escapeXML = Mr.escapeXML),
            (t.__express = t.renderFile),
            (t.VERSION = "3.1.6"),
            (t.name = "ejs"),
            "undefined" != typeof window && (window.ejs = t);
        });
      function Sr(e, t) {
        return W(e) ? e(t) : Tr.render(e, { initParams: t });
      }
      var Ar = (function (e) {
          d(n, e);
          var t = g(n);
          function n() {
            var e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if ((a(this, n), (e = t.call(this)), !G(i)))
              return (
                re.error(
                  "ContextHandler expects an object on its constructor. ".concat(
                    o(i),
                    " passed"
                  )
                ),
                v(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "html"))
              return (
                re.error(
                  "ContextHandler expects the html key on its constructor properties which is missing"
                ),
                v(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "css"))
              return (
                re.error(
                  "ContextHandler expects the css key on its constructor properties which is missing"
                ),
                v(e, !1)
              );
            if (
              (Object.prototype.hasOwnProperty.call(i, "initParams") ||
                re.info("ContextHandler got null initParams"),
              !Object.prototype.hasOwnProperty.call(i, "host"))
            )
              return (
                re.error(
                  "ContextHandler expects the host key on its constructor properties which is missing"
                ),
                v(e, !1)
              );
            e.isDOM = !0;
            var r = i.host.ownerDocument;
            if (
              !r.getElementById(
                "@kissmybutton/motorcortex/iframeContextHandler/css"
              )
            ) {
              var s =
                  "\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",
                l = r.createElement("style");
              (l.id = "@kissmybutton/motorcortex/iframeContextHandler/css"),
                (l.type = "text/css");
              var c = r.head || r.getElementsByTagName("head")[0];
              l.styleSheet
                ? (l.styleSheet.cssText = s)
                : l.appendChild(r.createTextNode(s)),
                c.appendChild(l);
            }
            var u = r.createElement("iframe");
            i.host.appendChild(u);
            var p = e.scalingCalculator(i),
              h = e.calcClipDims(i);
            u.setAttribute("seamless", "seamless"),
              !0 === h.use &&
                (null !== h.width && u.setAttribute("width", h.width),
                null !== h.height && u.setAttribute("height", h.height)),
              (u.style.transform = "scale("
                .concat(p.width, ", ")
                .concat(p.height, ")")),
              (u.style.transformOrigin = "top left"),
              (u.style.position = "absolute"),
              (u.src = "");
            var d = u.contentWindow || u.contentDocument;
            d.document && (d = d.document), d.write(Sr(i.html, i.initParams));
            var m =
                "\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",
              g = d.createElement("style");
            (g.type = "text/css"),
              g.styleSheet
                ? (g.styleSheet.cssText = Sr(i.css, i.initParams) + m)
                : g.appendChild(r.createTextNode(Sr(i.css, i.initParams) + m));
            var y = d.head || d.getElementsByTagName("head")[0];
            if (
              (y.appendChild(g),
              Object.prototype.hasOwnProperty.call(i, "fonts"))
            )
              for (var b = 0; b < i.fonts.length; b++) {
                var x = i.fonts[b];
                if ("google-font" === x.type) {
                  var w = d.createElement("link");
                  w.setAttribute("rel", "stylesheet"),
                    w.setAttribute("href", x.src),
                    y.appendChild(w);
                }
              }
            return (
              (e.rootElement = u),
              d.close(),
              (e.context = {
                document: d,
                window: u.contentWindow || u,
                clipContainer: u,
                rootElement: d.body,
                unmount: function () {
                  i.host.removeChild(u);
                },
                getElements: e.getElements.bind(f(e)),
                getMCID: e.getMCID.bind(f(e)),
                setMCID: e.setMCID.bind(f(e)),
                getElementSelectorByMCID: e.getElementSelectorByMCID.bind(f(e)),
                getElementByMCID: e.getElementByMCID.bind(f(e)),
                setCustomEntity: e.setCustomEntity.bind(f(e)),
              }),
              (e.elementsByMCID = {}),
              e
            );
          }
          return n;
        })(Ir),
        _r = (function (e) {
          d(n, e);
          var t = g(n);
          function n() {
            var e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if ((a(this, n), (e = t.call(this)), !G(i)))
              return (
                re.error(
                  "ContextHandler expects an object on its constructor. ".concat(
                    o(i),
                    " passed"
                  )
                ),
                v(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "html"))
              return (
                re.error(
                  "ContextHandler expects the html key on its constructor properties which is missing"
                ),
                v(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "css"))
              return (
                re.error(
                  "ContextHandler expects the css key on its constructor properties which is missing"
                ),
                v(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "host"))
              return (
                re.error(
                  "ContextHandler expects the host key on its constructor properties which is missing"
                ),
                v(e, !1)
              );
            e.isDOM = !0;
            var r = i.host.shadowRoot;
            r || (r = i.host.attachShadow({ mode: "open" }));
            var s = document.createElement("div"),
              l = e.scalingCalculator(i),
              c = e.calcClipDims(i);
            s.setAttribute("data-motorocortex-container", "true"),
              !0 === c.use &&
                (null !== c.width && (s.style.width = c.width),
                null !== c.height && (s.style.height = c.height)),
              (s.style.transform = "scale("
                .concat(l.width, ", ")
                .concat(l.height, ")")),
              (s.style.transformOrigin = "top left"),
              (s.style.position = "absolute"),
              (s.style.overflow = "hidden"),
              (s.innerHTML = Sr(i.html, i.initParams)),
              r.appendChild(s);
            var u = document.createElement("slot");
            r.appendChild(u);
            var p = document.createElement("style");
            if (
              ((p.type = "text/css"),
              p.styleSheet
                ? (p.styleSheet.cssText = Sr(i.css, i.initParams))
                : p.appendChild(
                    document.createTextNode(
                      "[data-motorocortex-container] { all: initial; }" +
                        Sr(i.css, i.initParams)
                    )
                  ),
              r.appendChild(p),
              (e.fontTags = []),
              Object.prototype.hasOwnProperty.call(i, "fonts"))
            )
              for (var h = 0; h < i.fonts.length; h++) {
                var d = i.fonts[h];
                if ("google-font" === d.type) {
                  var m = document.createElement("link");
                  m.setAttribute("rel", "stylesheet"),
                    m.setAttribute("href", d.src),
                    document.getElementsByTagName("head")[0].appendChild(m),
                    e.fontTags.push(m);
                }
              }
            return (
              (s.style.overflow = "hidden"),
              (e.rootElement = s),
              (e.context = {
                document: document,
                window: window,
                clipContainer: e.rootElement,
                rootElement: s,
                unmount: function () {
                  try {
                    r.innerHTML = "";
                    for (var e = 0; e < this.fontTags.length; e++)
                      document
                        .getElementsByTagName("head")[0]
                        .removeChild(this.fontTags[e]);
                  } catch (e) {
                    re.warning(
                      "The element of the Clip to be removed seems not to exist any more"
                    );
                  }
                },
                getElements: e.getElements.bind(f(e)),
                getMCID: e.getMCID.bind(f(e)),
                setMCID: e.setMCID.bind(f(e)),
                getElementSelectorByMCID: e.getElementSelectorByMCID.bind(f(e)),
                getElementByMCID: e.getElementByMCID.bind(f(e)),
                setCustomEntity: e.setCustomEntity.bind(f(e)),
              }),
              (e.elementsByMCID = {}),
              e
            );
          }
          return n;
        })(Ir),
        Lr = (function (e) {
          d(n, e);
          var t = g(n);
          function n() {
            var e,
              i,
              r,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            a(this, n),
              null === o ? ((i = {}), (r = s)) : ((i = s), (r = o)),
              (e = t.call(this, i, r)),
              (r = h(
                h({}, r),
                {},
                {
                  html: "" !== e.html ? e.html : r.html,
                  css: "" !== e.css ? e.css : r.css,
                  fonts: e.fonts.length > 0 ? e.fonts : r.fonts,
                }
              ));
            var l = N;
            e.clipType = l;
            var c = new (document.head.createShadowRoot ||
            document.head.attachShadow
              ? _r
              : Ar)(r);
            return (
              (e.ownContext = h(
                h({}, c.context),
                {},
                { isHostedClip: e.isHostedClip, initParams: r.initParams }
              )),
              (e.iframe = c.iframeElement),
              (e.forceExportIncidents = !0),
              e.onAfterRender(),
              e
            );
          }
          return (
            c(n, [
              { key: "onAfterRender", value: function () {} },
              {
                key: "html",
                get: function () {
                  return "";
                },
              },
              {
                key: "css",
                get: function () {
                  return "";
                },
              },
              {
                key: "fonts",
                get: function () {
                  return [];
                },
              },
              {
                key: "rootElement",
                get: function () {
                  return this.ownContext.clipContainer;
                },
              },
              {
                key: "exportConstructionArguments",
                value: function () {
                  return {
                    attrs: this.attrs,
                    props: h(
                      h({}, this.props),
                      {},
                      {
                        host: void 0,
                        html:
                          !0 === this.DescriptiveIncident.constructor.customClip
                            ? ""
                            : this.ownContext.rootElement.innerHTML,
                      }
                    ),
                  };
                },
              },
              {
                key: "setCustomEntity",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [];
                  return this.context.setCustomEntity(e, t, n);
                },
              },
            ]),
            n
          );
        })(ur),
        Dr = (function (e) {
          d(n, e);
          var t = g(n);
          function n() {
            var e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            a(this, n), (e = t.call(this));
            var r = h({}, i);
            if (!G(r))
              return (
                re.error(
                  "HTMLFragmentContextHandler expects an object on its constructor. ".concat(
                    o(r),
                    " passed"
                  )
                ),
                v(e, !1)
              );
            Object.prototype.hasOwnProperty.call(r, "html") || (r.html = ""),
              (e.isDOM = !0);
            var s = document.createDocumentFragment(),
              l = document.createElement("div");
            return (
              Object.prototype.hasOwnProperty.call(r, "containerParams") &&
                (Object.prototype.hasOwnProperty.call(r, "width") &&
                  (l.style.width = r.containerParams.width),
                Object.prototype.hasOwnProperty.call(r, "height") &&
                  (l.style.height = r.containerParams.height)),
              (l.innerHTML = Sr(r.html, r.initParams)),
              s.appendChild(l),
              (l.style.overflow = "hidden"),
              (e.rootElement = l),
              (e.context = {
                document: document,
                window: window,
                clipContainer: e.rootElement,
                rootElement: l,
                unmount: function () {
                  r.host.removeChild(s);
                },
                getElements: e.getElements.bind(f(e)),
                getMCID: e.getMCID.bind(f(e)),
                setMCID: e.setMCID.bind(f(e)),
                getElementSelectorByMCID: e.getElementSelectorByMCID.bind(f(e)),
                getElementByMCID: e.getElementByMCID.bind(f(e)),
                setCustomEntity: e.setCustomEntity.bind(f(e)),
                fragment: !0,
              }),
              (e.elementsByMCID = {}),
              e
            );
          }
          return n;
        })(Ir),
        Br = (function (e) {
          d(n, e);
          var t = g(n);
          function n() {
            var e,
              i,
              r,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            a(this, n),
              null === o ? ((i = {}), (r = s)) : ((i = s), (r = o)),
              (e = t.call(this, i, r));
            var l = new Dr(
              h(
                h({}, r),
                {},
                {
                  html: Object.prototype.hasOwnProperty.call(r, "html")
                    ? r.html
                    : e.html,
                  css: Object.prototype.hasOwnProperty.call(r, "css")
                    ? r.css
                    : e.css,
                  fonts: Object.prototype.hasOwnProperty.call(r, "fonts")
                    ? r.fonts
                    : e.fonts,
                }
              )
            );
            return (
              (e.ownContext = h(h({}, l.context), {}, { isHostedClip: !1 })),
              (e.iframe = l.iframeElement),
              (e.forceExportIncidents = !0),
              e.onDOMCLipInitialise(),
              e
            );
          }
          return (
            c(n, [
              {
                key: "exportConstructionArguments",
                value: function () {
                  return {
                    attrs: this.attrs,
                    props: h(
                      h({}, this.props),
                      {},
                      { html: this.ownContext.rootElement.innerHTML }
                    ),
                  };
                },
              },
              { key: "onDOMCLipInitialise", value: function () {} },
              {
                key: "rootElement",
                get: function () {
                  return this.ownContext.clipContainer;
                },
              },
            ]),
            n
          );
        })(ur),
        jr = (function () {
          function e() {
            a(this, e);
          }
          return (
            c(e, [
              {
                key: "duration",
                get: function () {
                  return 0;
                },
              },
              {
                key: "addIncident",
                value: function () {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "moveIncident",
                value: function () {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "removeIncident",
                value: function () {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "resizeIncident",
                value: function () {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "getIncidentsByChannel",
                value: function () {
                  return {};
                },
              },
              { key: "flash", value: function () {} },
              { key: "_resize", value: function () {} },
              { key: "onProgress", value: function () {} },
            ]),
            e
          );
        })(),
        Vr = (function () {
          function e(t) {
            a(this, e),
              (this.runTimeInfo = {
                currentMillisecond: 0,
                state: "transitional",
              }),
              (this.id = te()),
              (this.realClip = t.descriptiveIncident.realClip);
            var n = t.descriptiveIncident.realClip.exportConstructionArguments(),
              i = h(
                h({}, n.props),
                {},
                { selector: void 0, host: t.host, id: this.id }
              );
            (this.ownClip = new t.descriptiveIncident.constructor.Incident(
              n.attrs,
              i
            )),
              t.descriptiveIncident.realClip.addContext(
                {
                  clipId: this.id,
                  context: this.ownClip.ownContext,
                  synchronize: t.synchronize,
                  runTimeInfo: this.runTimeInfo,
                },
                !0
              );
          }
          return (
            c(e, [
              {
                key: "onProgress",
                value: function (e, t) {
                  for (var n in this.realClip.instantiatedChannels)
                    this.realClip.instantiatedChannels[n].moveTo(
                      this.runTimeInfo.currentMillisecond,
                      t,
                      this.id,
                      !0
                    );
                  this.runTimeInfo.currentMillisecond = t;
                },
              },
            ]),
            e
          );
        })(),
        Nr = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e) {
            var i,
              r,
              s,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            a(this, n),
              null === o ? ((r = {}), (s = e)) : ((r = e), (s = o)),
              ((i = t.call(this, r, s)).initParams = s.initParams || {});
            var l = i._validateProps();
            if (!l.result) return v(i, l);
            (i.isTheRootClip = !1),
              (i.isExportableToJSONFormat = !0),
              Object.prototype.hasOwnProperty.call(s, "html") &&
                W(s.html) &&
                (i.isExportableToJSONFormat = !1);
            var c = {
              id: i.id,
              attrs: r,
              props: h(
                h({}, s),
                {},
                {
                  html: Object.prototype.hasOwnProperty.call(s, "html")
                    ? s.html
                    : i.html,
                  css: Object.prototype.hasOwnProperty.call(s, "css")
                    ? s.css
                    : i.css,
                  fonts: Object.prototype.hasOwnProperty.call(s, "fonts")
                    ? s.fonts
                    : i.fonts,
                  runTimeInfo: i.runTimeInfo,
                  subscribe: i.subscribe.bind(f(i)),
                }
              ),
              plugin_npm_name: i.constructor.plugin_npm_name,
              Channel: i.constructor.Channel,
              DescriptiveIncident: f(i),
            };
            if (
              ((i.audio = "on"),
              Object.prototype.hasOwnProperty.call(i.constructor, "audio") &&
                (i.audio = i.constructor.audio),
              Object.prototype.hasOwnProperty.call(s, "audio") &&
                (i.audio = s.audio),
              Object.prototype.hasOwnProperty.call(s, "selector") &&
                void 0 !== s.selector &&
                !0 !== i.constructor.customClip)
            )
              c.Incident = Br;
            else if (
              Object.prototype.hasOwnProperty.call(s, "selector") &&
              void 0 !== s.selector &&
              !0 === i.constructor.customClip
            ) {
              delete c.props.selector;
              var u = new Br({ html: '<div id="clip-container"></div>' });
              (c.props.host = u.rootElement),
                (c.Incident = i.constructor.Incident);
            } else
              "only" === i.audio && !0 !== i.props.root
                ? (i.isTheRootClip = !1)
                : ((i.isTheRootClip = !0),
                  (i.blockingWaitings = {}),
                  (c.Incident = i.constructor.Incident));
            if (
              ("on" === i.audio || "off" === i.audio
                ? (i.realClip = Ae(c))
                : (i.realClip = new jr()),
              "on" === i.audio || "only" === i.audio)
            ) {
              var p = {
                id: i.id,
                attrs: {},
                props: {
                  audioSources: Object.prototype.hasOwnProperty.call(
                    s,
                    "audioSources"
                  )
                    ? s.audioSources
                    : i.audioSources,
                  runTimeInfo: i.runTimeInfo,
                  subscribe: i.subscribe.bind(f(i)),
                },
                plugin_npm_name: i.constructor.plugin_npm_name,
                Channel: i.constructor.Channel,
                Incident: vr,
                DescriptiveIncident: f(i),
              };
              i.audioClip = Ae(p);
            } else (i.audio = "off"), (i.audioClip = new jr());
            return (
              (i.passiveAddition = !0),
              i._buildTree(),
              (i.passiveAddition = !1),
              i
            );
          }
          return (
            c(n, [
              {
                key: "_validateProps",
                value: function () {
                  return re.validateProps(
                    { props: this.props },
                    Ri,
                    this.constructor,
                    this.id
                  );
                },
              },
              {
                key: "selectorToPassToChildren",
                get: function () {
                  return null;
                },
              },
              {
                key: "inheritedSelector",
                get: function () {
                  return this._inheritedSelector;
                },
                set: function (e) {
                  this._inheritedSelector = e;
                },
              },
              {
                key: "html",
                get: function () {
                  return "";
                },
              },
              {
                key: "css",
                get: function () {
                  return "";
                },
              },
              {
                key: "fonts",
                get: function () {
                  return [];
                },
              },
              {
                key: "audioSources",
                get: function () {
                  return [];
                },
              },
              {
                key: "exportLiveDefinition",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = b(m(n.prototype), "exportLiveDefinition", this).call(
                      this,
                      e
                    );
                  return (
                    this.constructor.isAnimation &&
                      (t.props.duration = this.duration),
                    W(this.props.html) && (t.props.html = this.props.html),
                    W(this.props.css) && (t.props.css = this.props.css),
                    t
                  );
                },
              },
              {
                key: "_buildTree",
                value: function () {
                  if (void 0 !== this.realClip) {
                    var e = this.props.duration;
                    this.buildTree(),
                      e &&
                        this.constructor.isAnimation &&
                        this.duration !== e &&
                        this.resize(e);
                  }
                },
              },
              {
                key: "resize",
                value: function (e) {
                  return (
                    this.realClip._resize(e / this.duration),
                    this.audioClip._resize(e / this.duration),
                    (this.duration = e),
                    this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                      selfExecute: !1,
                      direction: le,
                    }),
                    this.putMessageOnPipe("flash", {}, "RootClip", {
                      selfExecute: !0,
                      direction: le,
                    }),
                    { result: !0 }
                  );
                },
              },
              {
                key: "manageEditAttrProps",
                value: function (e, t) {
                  return {
                    result: !1,
                    errors: [
                      "Clips attributes and properties can not be edited",
                    ],
                  };
                },
              },
              {
                key: "handleCheckForClip",
                value: function (e, t) {
                  return !0;
                },
              },
              {
                key: "handleGetElements",
                value: function (e, t) {
                  return this.realClip.getElements(t.selector);
                },
              },
              {
                key: "handleCheckAddition",
                value: function (e, t) {
                  var n = this.realClip.addIncident(t),
                    i = this.audioClip.addIncident(t);
                  return !0 === n.result && !0 === i.result
                    ? (n.execute(),
                      i.execute(),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 })
                    : n;
                },
              },
              {
                key: "handleCheckMove",
                value: function (e, t) {
                  var n = this.realClip.moveIncident(t),
                    i = this.audioClip.moveIncident(t);
                  return !0 === n.result && !0 === i.result
                    ? (n.execute(),
                      i.execute(),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 })
                    : n;
                },
              },
              {
                key: "handleCheckDeletion",
                value: function (e, t) {
                  var n = this.realClip.removeIncident(t),
                    i = this.audioClip.removeIncident(t);
                  return !0 === n.result && !0 === i.result
                    ? (n.execute(),
                      i.execute(),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 })
                    : n;
                },
              },
              {
                key: "handleCheckResize",
                value: function (e, t) {
                  var n = this.realClip.resizeIncident(t),
                    i = this.audioClip.resizeIncident(t);
                  return !0 === n.result && !0 === i.result
                    ? (n.execute(),
                      i.execute(),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 })
                    : n;
                },
              },
              {
                key: "handleFlash",
                value: function (e, t) {
                  if (!this.isTheRootClip) return this.bypass();
                  this.flash();
                },
              },
              {
                key: "exportDefinition",
                value: function () {
                  var e = b(m(n.prototype), "exportDefinition", this).call(
                    this
                  );
                  return (
                    this.constructor.isAnimation &&
                      (e.props.duration = this.duration),
                    e
                  );
                },
              },
              {
                key: "handleSetBlock",
                value: function (e, t) {
                  if (!this.isTheRootClip) return this.bypass();
                  "transitional" !== this.runTimeInfo.state &&
                    ("blocked" !== this.runTimeInfo.state &&
                      (this.statusBeforeBlock = this.runTimeInfo.state),
                    (this.blockingWaitings[t.id] = t),
                    this.block());
                },
              },
              {
                key: "handleUnBlock",
                value: function (e, t) {
                  if (!this.isTheRootClip) return this.bypass();
                  Object.prototype.hasOwnProperty.call(
                    this.blockingWaitings,
                    t.id
                  ) &&
                    (delete this.blockingWaitings[t.id],
                    0 === Object.keys(this.blockingWaitings).length &&
                      ("playing" === this.statusBeforeBlock
                        ? ((this.previousTimeStamp = -1), this.play())
                        : this.arm()));
                },
              },
              {
                key: "stop",
                value: function () {
                  b(m(n.prototype), "stop", this).call(this),
                    (this.blockingWaitings = {});
                },
              },
              {
                key: "onProgress",
                value: function (e, t) {
                  this.realClip.onProgress(e, t),
                    this.audioClip.onProgress(e, t);
                },
              },
              {
                key: "paste",
                value: function (e) {
                  return this.isTheRootClip
                    ? new Vr({ host: e, descriptiveIncident: this })
                    : null;
                },
              },
              {
                key: "flash",
                value: function () {
                  this.realClip.flash();
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  return e < 0 || e > 1
                    ? {
                        result: !1,
                        errors: [{ type: "invalid volume number" }],
                      }
                    : "off" === this.audio
                    ? {
                        result: !1,
                        errors: [
                          { type: "can not set volume of Clip with audio off" },
                        ],
                      }
                    : (this.audioClip.setVolume(e), { result: !0 });
                },
              },
            ]),
            n
          );
        })(
          (function (e) {
            d(n, e);
            var t = g(n);
            function n(e, i) {
              var r;
              return (
                a(this, n),
                ((r = t.call(this, e, i)).runTimeInfo = {
                  currentMillisecond: 0,
                  state: "idle",
                }),
                (r.listeners = {}),
                (r.previousTimeStamp = -1),
                (r.speed = 1),
                r
              );
            }
            return (
              c(n, [
                {
                  key: "_setState",
                  value: function (e) {
                    if (e !== this.runTimeInfo.state)
                      for (var t in ((this.runTimeInfo.state = e),
                      this.putMessageOnPipe("setState", e, "Clips", {
                        selfExecute: !1,
                        direction: ce,
                      }),
                      this.listeners))
                        this.listeners[t].funct(
                          this.runTimeInfo.currentMillisecond,
                          e
                        );
                  },
                },
                {
                  key: "handleSetState",
                  value: function (e, t) {
                    this._setState(t);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    if (
                      "idle" === this.runTimeInfo.state ||
                      "paused" === this.runTimeInfo.state ||
                      "armed" === this.runTimeInfo.state ||
                      "transitional" === this.runTimeInfo.state ||
                      "blocked" === this.runTimeInfo.state
                    ) {
                      if ("paused" === this.runTimeInfo.state) {
                        var n = new Date().getTime() - this.pauseMoment;
                        this.previousTimeStamp += n;
                      }
                      this._setState("playing"),
                        this.onPlay(),
                        t ||
                          window.requestAnimationFrame(function (t) {
                            e.step(t);
                          });
                    }
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    "playing" === this.runTimeInfo.state &&
                      (this._setState("paused"),
                      (this.pauseMoment = new Date().getTime()),
                      this.onWait());
                  },
                },
                {
                  key: "arm",
                  value: function () {
                    ("transitional" !== this.runTimeInfo.state &&
                      "blocked" !== this.runTimeInfo.state) ||
                      this._setState("armed");
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    this._setState("idle"), (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this._setState("transitional"),
                      (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "block",
                  value: function () {
                    this._setState("blocked"), (this.previousTimeStamp = -1);
                  },
                },
                { key: "onPlay", value: function () {} },
                { key: "onWait", value: function () {} },
                {
                  key: "playableProgress",
                  value: function (e, t) {
                    if (this.isTheRootClip) {
                      for (var n in this.listeners) {
                        var i = this.listeners[n];
                        !0 !== i.onlyOnStateChange &&
                          (Math.abs(
                            t +
                              i.cavaDelta -
                              this.runTimeInfo.currentMillisecond
                          ) > i.threshold
                            ? (i.funct(Z(t, i.roundTo), this.runTimeInfo.state),
                              (i.cavaDelta = 0))
                            : (i.cavaDelta += Math.abs(
                                t - this.runTimeInfo.currentMillisecond
                              )));
                      }
                      return (
                        this.onProgress(e, t),
                        (this.runTimeInfo.currentMillisecond = t),
                        !0
                      );
                    }
                    return !1;
                  },
                },
                {
                  key: "executionSpeed",
                  set: function (e) {
                    if (!this.isTheRootClip) return !1;
                    this.speed = parseFloat(e);
                  },
                },
                {
                  key: "step",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if ("playing" === this.runTimeInfo.state) {
                      var n = this;
                      -1 === this.previousTimeStamp &&
                        (this.previousTimeStamp = e);
                      var i = {
                        milliseconds: Math.round(
                          this.runTimeInfo.currentMillisecond +
                            (e - this.previousTimeStamp) * this.speed
                        ),
                        fraction:
                          (this.runTimeInfo.currentMillisecond +
                            (e - this.previousTimeStamp) * this.speed) /
                          this.duration,
                      };
                      if (i.fraction >= 1)
                        return (
                          this.playableProgress(1, this.duration),
                          void this.complete()
                        );
                      if (i.fraction < 0)
                        return (
                          this.playableProgress(0, 0), void this.complete()
                        );
                      this.playableProgress(i.fraction, i.milliseconds),
                        (this.previousTimeStamp = e),
                        t || window.requestAnimationFrame(n.step.bind(n));
                    }
                  },
                },
                {
                  key: "subscribe",
                  value: function (e, t, n, i) {
                    var r =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4];
                    n || (n = 0),
                      i || (i = 1),
                      (this.listeners[e] = {
                        funct: t,
                        threshold: n,
                        roundTo: i,
                        cavaDelta: 0,
                        onlyOnStateChange: r,
                      });
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    Object.prototype.hasOwnProperty.call(this.listeners, e) &&
                      delete this.listeners[e];
                  },
                },
                {
                  key: "subscribeToDurationChange",
                  value: function (e) {
                    return (
                      !!this.isTheRootClip &&
                      (this.realClip.subscribeToDurationChange(e), !0)
                    );
                  },
                },
              ]),
              n
            );
          })(sr)
        );
      u(Nr, "isClip", !0),
        u(Nr, "Incident", Lr),
        u(Nr, "plugin_npm_name", "@kissmybutton/self-contained-incidents"),
        u(Nr, "version", Re),
        u(Nr, "Channel", be),
        u(Nr, "ClassName", "HTMLClip"),
        u(Nr, "propsValidationRules", Ri);
      var Fr = Ii.compile({
          incidents: {
            type: "array",
            items: {
              type: "object",
              props: {
                position: { type: "amount", integer: !0, min: 0, optional: !1 },
                attrs: { type: "object", optional: !1 },
                props: { type: "object", optional: !1 },
                incidentClass: { type: "any", optional: !1 },
              },
            },
          },
        }),
        $r = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e, i) {
            var r;
            a(this, n),
              null !== (r = t.call(this, e, i)).incidents &&
                ((r.attrs.incidents = r.incidents),
                (r.attributesStaggers = []),
                (r.propsStaggers = []),
                r.setupDynamicValues());
            var s = re.validateProps(r.props, qi, r.constructor);
            if (!s.result) return v(r, s);
            var o = Fr(r.attrs);
            if (o.length > 0)
              return (
                re.error(
                  "The provided attributes for Combo Incident are invalid"
                ),
                v(r, { result: !1, errors: o })
              );
            for (var l = [], c = 0; c < r.attrs.length; c++) {
              var u = r.attrs[c];
              if (null !== u.incidentClass.attrsValidationRules) {
                var p = u.incidentClass.attrsValidationMethod(u.attrs);
                p.length > 0 && l.concat(p.errors);
              }
              var h = re.validateProps(
                u.props,
                u.incidentClass.propsValidationRules,
                u.incidentClass
              );
              !1 === h.result && l.concat(h.errors);
            }
            return l.length > 0
              ? v(r, { result: !1, errors: l })
              : ((r.dynamicDurationValue = null), r);
          }
          return (
            c(n, [
              {
                key: "incidents",
                get: function () {
                  return null;
                },
              },
              {
                key: "duration",
                get: function () {
                  return null !== this.dynamicDurationValue
                    ? this.dynamicDurationValue
                    : "dynamic";
                },
              },
              {
                key: "addIncident",
                value: function () {
                  var e =
                    "Combos don't accept any Incidents to be added on their timeline externally";
                  return re.error(e), { result: !1, errors: [e] };
                },
              },
              {
                key: "moveIncident",
                value: function () {
                  var e =
                    "Combo Incidents don't allow external manipulation of their Incidents";
                  return re.error(e), { result: !1, errors: [e] };
                },
              },
              {
                key: "removeIncident",
                value: function () {
                  var e =
                    "Combo Incidents don't allow external manipulation of their Incidents";
                  return re.error(e), { result: !1, errors: [e] };
                },
              },
              {
                key: "handleCheckAddition",
                value: function (e, t) {
                  return !1;
                },
              },
              {
                key: "handleCheckMove",
                value: function (e, t) {
                  return !1;
                },
              },
              {
                key: "handleCheckDeletion",
                value: function (e, t) {
                  return !1;
                },
              },
              {
                key: "handleCheckResize",
                value: function (e, t) {
                  return !1;
                },
              },
              {
                key: "exportDefinition",
                value: function () {
                  var e = h(
                    h({}, this.attrs),
                    {},
                    {
                      incidents: (function e(t) {
                        for (var n = [], i = 0; i < t.length; i++) {
                          var r = t[i],
                            s = r.attrs;
                          "Combo" === r.incidentClass.ClassName &&
                            (s = h(
                              h({}, s),
                              {},
                              { incidents: e(s.incidents) }
                            )),
                            n.push({
                              ClassName:
                                r.incidentClass.ClassName ||
                                r.incidentClass.targetClass.ClassName,
                              plugin_npm_name:
                                r.incidentClass.plugin_npm_name ||
                                r.incidentClass.targetClass.plugin_npm_name,
                              version:
                                r.incidentClass.version ||
                                r.incidentClass.targetClass.version,
                              attrs: s,
                              props: JSON.parse(JSON.stringify(r.props)),
                              position: r.position,
                            });
                        }
                        return n;
                      })(this.attrs.incidents),
                    }
                  );
                  return {
                    ClassName: this.constructor.ClassName,
                    version: this.constructor.version,
                    plugin:
                      this.constructor.plugin ||
                      this.constructor.plugin_npm_name,
                    plugin_npm_name: this.constructor.plugin_npm_name,
                    attrs: e,
                    props: JSON.parse(JSON.stringify(this.props)),
                    incidents: {},
                    duration: this.duration,
                  };
                },
              },
              {
                key: "exportLiveDefinition",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = this.attrs;
                  null !== this.incidents &&
                    (t = h(h({}, this.attrs), {}, { incidents: void 0 }));
                  var n = JSON.parse(JSON.stringify(this.props));
                  !1 === e && delete n.id;
                  var i = {
                    Class: this.constructor,
                    attrs: t,
                    props: n,
                    incidents: {},
                  };
                  return i;
                },
              },
            ]),
            n
          );
        })(sr);
      u($r, "isCombo", !0),
        u($r, "ClassName", "Combo"),
        u($r, "attrsValidationRules", null),
        u($r, "propsValidationRules", qi);
      var zr = S(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = g(i);
              function i(t, r) {
                var s;
                a(this, i),
                  void 0 === r && ((r = t), (t = {})),
                  (s = n.call(this, r)),
                  e(f(s));
                var o = re.validateProps(r, Fi, s.constructor, s.id);
                return o.result
                  ? ((s.inheritedSelector = null),
                    (s.attrs = t),
                    Object.prototype.hasOwnProperty.call(r, "duration") ||
                      (r.duration = 0),
                    (s.props = r),
                    (s.attributesStaggers = []),
                    (s.propsStaggers = []),
                    s.setupDynamicValues(),
                    (s.dynamicDurationValue = null),
                    (s.passive = !1),
                    s)
                  : v(s, o);
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "field",
                  static: !0,
                  key: "Incident",
                  value: function () {
                    return Te;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "plugin_npm_name",
                  value: function () {
                    return "motor-cortex-js-attribute";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "version",
                  value: function () {
                    return Re;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "Channel",
                  value: function () {
                    return Pr;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "ClassName",
                  value: function () {
                    return "Incident";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "attrsValidationRules",
                  value: function () {
                    return null;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "propsValidationRules",
                  value: function () {
                    return Fi;
                  },
                },
                {
                  kind: "method",
                  decorators: [Ji],
                  key: "editAttributes",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ki],
                  key: "editProperties",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Qi],
                  key: "resize",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Wi],
                  key: "clone",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Zi],
                  key: "selector",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Xi],
                  key: "getElements",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [rr],
                  key: "setupDynamicValues",
                  value: function () {},
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return null !== this.dynamicDurationValue
                      ? this.dynamicDurationValue
                      : this.propsStaggers.length > 0
                      ? "dynamic"
                      : b(m(n.prototype), "duration", this);
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (e) {
                    if (this.propsStaggers.length > 0) {
                      for (var t = 0; t < this.propsStaggers.length; t++)
                        if ("repeats" !== this.propsStaggers[t].path) {
                          var i = this.propsStaggers[t].stagger.resize(
                            e / this.duration
                          );
                          ie(this.props, this.propsStaggers[t].path, i);
                        }
                      this.dynamicDurationValue = e;
                    } else w(m(n.prototype), "duration", e, this, !0);
                  },
                },
                {
                  kind: "method",
                  key: "manageEditAttrProps",
                  value: function (e, t) {
                    var n = this.parentNode,
                      i = n.getLeafPosition(this.id);
                    n.removeIncident(this.id);
                    var r = JSON.parse(JSON.stringify(this[t]));
                    this[t] = e;
                    var s = n.addIncident(this, i);
                    return (
                      s.result ||
                        (n.removeIncident(this.id),
                        (this[t] = r),
                        n.addIncident(this, i)),
                      s
                    );
                  },
                },
                {
                  kind: "method",
                  key: "detachFromParent",
                  value: function () {
                    b(m(n.prototype), "detachFromParent", this).call(this),
                      (this.inheritedSelector = null);
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckForInvalidSelectors",
                  value: function () {
                    var e = this.selector();
                    return null === e
                      ? {
                          id: this.id,
                          ClassName: this.constructor.ClassName,
                          plugin_npm_name: this.constructor.plugin_npm_name,
                          error: "null selector",
                        }
                      : "&" === e.charAt(0)
                      ? {
                          id: this.id,
                          ClassName: this.constructor.ClassName,
                          plugin_npm_name: this.constructor.plugin_npm_name,
                          error: "relative selector with no inherited selector",
                          selector: e,
                        }
                      : this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "exportDefinition",
                  value: function () {
                    return {
                      ClassName: this.constructor.ClassName,
                      version: this.constructor.version,
                      plugin:
                        this.constructor.plugin ||
                        this.constructor.plugin_npm_name,
                      plugin_npm_name: this.constructor.plugin_npm_name,
                      attrs: this.attrs,
                      props: this.props,
                    };
                  },
                },
                {
                  kind: "method",
                  key: "exportLiveDefinition",
                  value: function () {
                    var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      t = JSON.parse(JSON.stringify(this.props));
                    return (
                      !1 === e && delete t.id,
                      {
                        Class: this.constructor,
                        attrs: JSON.parse(JSON.stringify(this.attrs)),
                        props: t,
                      }
                    );
                  },
                },
              ],
            };
          },
          pe
        ),
        Rr = (function () {
          var e = function (e, t) {
              return e.startsWith("on") && "function" == typeof t;
            },
            t = function (e) {
              return e.substr(2).toLowerCase();
            },
            n = function (e) {
              return "function" == typeof e;
            };
          function i(e) {
            var t = document.createElement("div");
            return (t.innerHTML = e.trim()), t.firstChild;
          }
          function r(n, i) {
            if (!i) return n;
            for (var r = 0, s = Object.entries(i); r < s.length; r++) {
              var o = k(s[r], 2),
                a = o[0],
                l = o[1];
              if (e(a)) n.addEventListener(t(a), l);
              else if ("class" === a) {
                var c,
                  u = Array.isArray(l) ? l : l.split(" ");
                (c = n.classList).add.apply(c, C(u));
              } else n.setAttribute(a, l);
            }
            return n;
          }
          return function (e, t) {
            for (
              var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), l = 2;
              l < s;
              l++
            )
              a[l - 2] = arguments[l];
            if (n(e)) return e(h(h({}, t), {}, { children: a }));
            var c = r(document.createElement(e), t);
            return (
              a.flat().forEach(function (e) {
                if (!1 !== e) {
                  var t = "object" === o(e) ? e : i(e.toString());
                  null !== t && c.appendChild(t);
                }
              }),
              c.outerHTML
            );
          };
        })(),
        Hr = (function () {
          function e(t) {
            if (
              (a(this, e), !Object.prototype.hasOwnProperty.call(t, "incident"))
            )
              return (
                re.error(
                  'Journey constructor expects an Incident on its properties on the key "incident"'
                ),
                !1
              );
            (this.memory = t.capsuleMemory),
              (this.stations = []),
              (this.incident = t.incident),
              (this.startMillisecond =
                1 * this.incident.runTimeInfo.currentMillisecond),
              (this.startState = "".concat(this.incident.runTimeInfo.state)),
              this.incident.stop();
          }
          return (
            c(e, [
              {
                key: "station",
                value: function (e) {
                  this.stations.length > 0 &&
                    this.stations[this.stations.length - 1],
                    this.stations.push(e),
                    this.incident.playableProgress(
                      e / this.incident.duration,
                      e
                    );
                },
              },
              {
                key: "destination",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                  null != e
                    ? this.station(e)
                    : (e = this.stations[this.stations.length - 1]),
                    this.incident.playableProgress(
                      e / this.incident.duration,
                      e
                    ),
                    "playing" === this.startState ||
                    ("blocked" === this.startState &&
                      "playing" === this.incident.statusBeforeBlock)
                      ? this.incident.play()
                      : e >= this.incident.duration
                      ? this.incident.complete()
                      : this.incident.arm(),
                    this.memory.push(this.exportJourneyLog);
                },
              },
              {
                key: "exportJourneyLog",
                value: function () {
                  return {
                    startMillisecond: this.startMillisecond,
                    startState: this.startState,
                    stations: this.stations,
                  };
                },
              },
            ]),
            e
          );
        })(),
        qr = (function () {
          function e() {
            a(this, e), (this.memory = []);
          }
          return (
            c(e, [
              {
                key: "startJourney",
                value: function (e) {
                  return e
                    ? new Hr({ incident: e, capsuleMemory: this.memory })
                    : (re.error(
                        "startJourney expects an Incident as an argument"
                      ),
                      !1);
                },
              },
            ]),
            e
          );
        })(),
        Gr = (function (e) {
          d(n, e);
          var t = g(n);
          function n(e) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            a(this, n);
            var r = { audio: "only", audioSources: e };
            return null !== i && (r.id = i), t.call(this, r);
          }
          return n;
        })(Nr);
      function Wr(e) {
        if (
          (Object.prototype.hasOwnProperty.call(e, "default") &&
            (e = e.default),
          Object.prototype.hasOwnProperty.call(e, "npm_name") ||
            (e.npm_name = "plugin_".concat(new Date().getTime())),
          !(function (e) {
            Object.prototype.hasOwnProperty.call(e, "default") &&
              (e = e.default);
            var t = e.npm_name,
              n = !0;
            if (
              (Object.prototype.hasOwnProperty.call(e, "name") ||
                re.notice(
                  "Notice on plugin ".concat(
                    t,
                    '. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin'
                  )
                ),
              Object.prototype.hasOwnProperty.call(e, "incidents") ||
                Object.prototype.hasOwnProperty.call(e, "Clip") ||
                (re.error(
                  "Error on plugin ".concat(
                    t,
                    '. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".'
                  )
                ),
                (n = !1)),
              Object.prototype.hasOwnProperty.call(e, "incidents") &&
                !Array.isArray(e.incidents))
            )
              re.error(
                "Error on plugin ".concat(
                  t,
                  '. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation'
                )
              ),
                (n = !1);
            else if (Object.prototype.hasOwnProperty.call(e, "incidents"))
              for (var i = 0; i < e.incidents.length; i++) {
                var r = e.incidents[i];
                "object" === o(r.exportable) &&
                  Object.prototype.hasOwnProperty.call(
                    r.exportable,
                    "default"
                  ) &&
                  (r.exportable = r.exportable.default);
                var s = r.exportable.prototype;
                s instanceof sr ||
                  s instanceof Nr ||
                  s instanceof Te ||
                  s instanceof br ||
                  (re.error(
                    "Error on plugin "
                      .concat(
                        t,
                        ". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                "
                      )
                      .concat(
                        r.exportable.constructor.name,
                        " doesn't.\n                Please refer to documentation"
                      )
                  ),
                  (n = !1)),
                  s instanceof Nr &&
                    (Object.prototype.hasOwnProperty.call(r, "originalDims")
                      ? !1 === K(r.originalDims).result &&
                        (re.error(
                          "Error on plugin "
                            .concat(
                              t,
                              ". Invalid originalDims value passed on "
                            )
                            .concat(r.name)
                        ),
                        (n = !1))
                      : re.log(
                          "Warning on plugin ".concat(
                            t,
                            '. It\'s always good to provide originalDims\n            when exposing Incidents extending DOMClip. By defining their original dims the users\n            of your plugin will be able to define the desired dimensions of your Incident by\n            the "containerParams object"'
                          )
                        )),
                  Object.prototype.hasOwnProperty.call(r, "name") ||
                    (re.error(
                      "Error on plugin ".concat(
                        t,
                        '. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\n                Please refer to documentation'
                      )
                    ),
                    (n = !1));
              }
            return n;
          })(e))
        )
          return !1;
        var t = {};
        if (Object.prototype.hasOwnProperty.call(e, "Clip"))
          if (Object.prototype.hasOwnProperty.call(e.Clip, "exportable")) {
            var n,
              i,
              r,
              s =
                ((i = n = (function (e) {
                  d(n, e);
                  var t = g(n);
                  function n() {
                    return a(this, n), t.apply(this, arguments);
                  }
                  return n;
                })(Nr)),
                u(n, "Incident", e.Clip.exportable),
                u(n, "plugin", e.npm_name),
                u(n, "version", e.version || "*"),
                u(n, "audio", e.audio || "off"),
                u(n, "customClip", !0),
                i);
            Object.prototype.hasOwnProperty.call(
              e.Clip,
              "attributesValidationRules"
            ) && (r = Ii.compile(e.Clip.attributesValidationRules)),
              (t.Clip = function t(n, i) {
                a(this, t);
                var o,
                  l = n,
                  c = i;
                if (
                  (void 0 === i && ((l = {}), (c = n)),
                  Object.prototype.hasOwnProperty.call(
                    e.Clip,
                    "attributesValidationRules"
                  ))
                ) {
                  var u = r(l);
                  if (u.length > 0) {
                    for (
                      var p = "Error on plugin's \"".concat(
                          e.npm_name,
                          '" Clip instantiation. Errors:'
                        ),
                        h = 0;
                      h < u.length;
                      h++
                    )
                      p += "\n - "
                        .concat(u[h].message, ". ")
                        .concat(u[h].actual, " provided");
                    return (
                      re.error(p), re.log("breaking"), { result: !1, errors: u }
                    );
                  }
                  re.log("instantiating"),
                    ((o = new s(l, c)).attrsValidationRules =
                      e.Clip.attributesValidationRules),
                    (o.attrsValidationMethod = r);
                } else
                  re.log("instantiating"),
                    ((o = new s(l, c)).attrsValidationRules = null),
                    re.warning(
                      "It's always good to provide attributesValidationRules to the exported incidents. "
                        .concat(e.npm_name, ".")
                        .concat(o.constructor.name, " doesn't provide it")
                    );
                return o;
              });
          } else {
            var l,
              c,
              p =
                ((c = l = (function (e) {
                  d(n, e);
                  var t = g(n);
                  function n() {
                    return a(this, n), t.apply(this, arguments);
                  }
                  return n;
                })(Nr)),
                u(l, "Incident", e.Clip),
                u(l, "plugin", e.npm_name),
                u(l, "version", e.version || "*"),
                u(l, "audio", e.audio || "off"),
                u(l, "customClip", !0),
                c);
            re.warning(
              "It's always good to provide attributesValidationRules to the exported incidents. ".concat(
                e.npm_name,
                ".Clip doesn't provide it"
              )
            ),
              (t.Clip = p);
          }
        var h = Pr;
        if (
          (Object.prototype.hasOwnProperty.call(e, "compositeAttributes") &&
            (h = (function (t) {
              d(i, t);
              var n = g(i);
              function i(t) {
                return (
                  a(this, i),
                  (t.comboAttributes = e.compositeAttributes),
                  n.call(this, t)
                );
              }
              return i;
            })(Pr)),
          Object.prototype.hasOwnProperty.call(e, "incidents"))
        )
          for (
            var m = function (n) {
                var i = e.incidents[n].exportable,
                  r = null,
                  s = null,
                  o = !1;
                if (
                  Object.prototype.hasOwnProperty.call(
                    e.incidents[n],
                    "attributesValidationRules"
                  )
                ) {
                  o = !0;
                  var l = JSON.parse(
                    JSON.stringify(e.incidents[n].attributesValidationRules)
                  );
                  Object.prototype.hasOwnProperty.call(
                    e.incidents[n].attributesValidationRules,
                    "animatedAttrs"
                  ) &&
                    (l.initialValues = re.buildInitialValuesValidationRules(
                      l.animatedAttrs
                    )),
                    (s = l),
                    (r = Ii.compile(l));
                }
                var c,
                  p,
                  m = void 0;
                if (i.prototype instanceof Te)
                  (p = c = (function (e) {
                    d(n, e);
                    var t = g(n);
                    function n() {
                      return a(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })(zr)),
                    u(c, "Incident", i),
                    u(c, "plugin_npm_name", e.npm_name),
                    u(c, "plugin", e.npm_name),
                    u(c, "version", e.version || "*"),
                    u(c, "ClassName", e.incidents[n].name),
                    u(c, "Channel", h),
                    u(c, "audio", e.audio ? e.audio : "off"),
                    u(c, "attrsValidationRules", s),
                    u(c, "attrsValidationMethod", r),
                    (m = p);
                else if (i.prototype instanceof br) {
                  var f, v;
                  (v = f = (function (e) {
                    d(n, e);
                    var t = g(n);
                    function n() {
                      return a(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })(zr)),
                    u(f, "Incident", i),
                    u(f, "plugin_npm_name", "@kissmybutton/media-playback"),
                    u(f, "plugin", e.npm_name),
                    u(f, "version", e.version || "*"),
                    u(f, "ClassName", e.incidents[n].name),
                    u(f, "Channel", yr),
                    u(f, "audio", e.audio ? e.audio : "off"),
                    u(f, "attrsValidationRules", s),
                    u(f, "attrsValidationMethod", r),
                    (m = v);
                } else if (i.prototype instanceof Nr) {
                  var y, b;
                  (b = y = (function (e) {
                    d(n, e);
                    var t = g(n);
                    function n() {
                      return a(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })(i)),
                    u(y, "plugin", e.npm_name),
                    u(y, "version", e.version || "*"),
                    u(y, "ClassName", e.incidents[n].name),
                    u(y, "audio", e.audio ? e.audio : "on"),
                    u(
                      y,
                      "originalDims",
                      K(e.incidents[n].originalDims).analysis
                    ),
                    u(y, "attrsValidationRules", s),
                    u(y, "attrsValidationMethod", r),
                    u(y, "isAnimation", !0),
                    (m = b);
                } else if (i.prototype instanceof sr) {
                  var x, w;
                  (w = x = (function (e) {
                    d(n, e);
                    var t = g(n);
                    function n() {
                      return a(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })(i)),
                    u(x, "plugin", e.npm_name),
                    u(x, "version", e.version || "*"),
                    u(x, "ClassName", e.incidents[n].name),
                    u(x, "attrsValidationRules", s),
                    u(x, "attrsValidationMethod", r),
                    (m = w);
                }
                Object.defineProperty(t, e.incidents[n].name, {
                  enumerable: !0,
                  get: function () {
                    var t = function t(i, s) {
                      var l;
                      if ((a(this, t), o)) {
                        var c = r(i);
                        if (c.length > 0) {
                          for (
                            var u = "Error on plugin's \""
                                .concat(e.npm_name, '" "')
                                .concat(
                                  e.incidents[n].name,
                                  '" instantiation. Errors:'
                                ),
                              p = 0;
                            p < c.length;
                            p++
                          )
                            u += "\n - "
                              .concat(c[p].message, ". ")
                              .concat(c[p].actual, " provided");
                          return re.error(u), { result: !1, errors: c };
                        }
                      }
                      return (
                        (l = new m(i, s)).result &&
                          !o &&
                          re.warning(
                            "It's always good to provide attributesValidationRules to the exported incidents. ".concat(
                              e.npm_name,
                              " doesn't provide it"
                            )
                          ),
                        l
                      );
                    };
                    return u(t, "targetClass", m), t;
                  },
                });
              },
              f = 0;
            f < e.incidents.length;
            f++
          )
            m(f);
        return t;
      }
      window.fs = {};
      var Ur = { createDOMElement: Rr, easings: _e, clipFromDefinition: Gi },
        Jr = Wr(xr),
        Kr = Jr.Clip,
        Xr = Jr.AudioEffect,
        Qr = Jr.AudioPlayback,
        Zr = Gr,
        Yr = {
          version: Re,
          Effect: Te,
          utils: Ur,
          HTMLClip: Nr,
          Group: sr,
          Combo: $r,
          BrowserClip: Lr,
          loadPlugin: Wr,
          AudioClip: Zr,
          CoreAudioClip: Kr,
          AudioPlayback: Qr,
          AudioEffect: Xr,
          MediaPlayback: br,
          TimeCapsule: qr,
        };
      (e.AudioClip = Zr),
        (e.AudioEffect = Xr),
        (e.AudioPlayback = Qr),
        (e.BrowserClip = Lr),
        (e.Combo = $r),
        (e.CoreAudioClip = Kr),
        (e.Effect = Te),
        (e.Group = sr),
        (e.HTMLClip = Nr),
        (e.MediaPlayback = br),
        (e.TimeCapsule = qr),
        (e.default = Yr),
        (e.loadPlugin = Wr),
        (e.utils = Ur),
        Object.defineProperty(e, "__esModule", { value: !0 });
    })(t, n(4), n(5));
  },
  function (e, t, n) {
    e.exports = (function (e) {
      "use strict";
      var t = (function (e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      })(e);
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var a = function (e) {
          return document.getElementById(e);
        },
        l = function (e) {
          return document.createElement(e);
        },
        c = function () {
          var e;
          return (e = document).addEventListener.apply(e, arguments);
        },
        u = function () {
          var e;
          return (e = document).removeEventListener.apply(e, arguments);
        },
        p = (function (e, t) {
          return (
            (function (e) {
              var t = (e.exports = {});
              (t.playSVG =
                '\n  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">\n    <path fill="#999" fill-rule="nonzero" d="M16.224 8.515L2.582.245A1.7 1.7 0 0 0 0 1.702V18.24a1.7 1.7 0 0 0 2.582 1.455l13.642-8.27a1.7 1.7 0 0 0 0-2.91z"/>\n</svg>\n\n'),
                (t.dcSVG =
                  '\n  <svg class="svg" style="transform:scale(0.55)" version="1.0" xmlns="http://www.w3.org/2000/svg"\n width="1705.000000pt" height="1903.000000pt" viewBox="0 0 1705.000000 1903.000000"\n preserveAspectRatio="xMidYMid meet">\n<metadata>\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n</metadata>\n<g transform="translate(0.000000,1903.000000) scale(0.100000,-0.100000)"\nfill="#000000" stroke="none">\n<path d="M0 9515 l0 -9515 1583 0 1582 0 4430 4655 c2437 2561 4457 4687 4490\n4726 33 38 1164 1227 2513 2642 l2452 2572 0 2192 c0 1206 -2 2193 -4 2193 -3\n0 -1597 -1652 -3542 -3671 l-3538 -3671 -31 35 c-16 20 -1497 1683 -3290 3696\nl-3260 3661 -1692 0 -1693 0 0 -9515z m5504 2412 c1253 -1413 2279 -2574 2282\n-2580 3 -9 -3274 -3438 -4597 -4811 -5 -6 -9 1968 -9 4999 l0 5010 24 -25 c13\n-14 1048 -1181 2300 -2593z"/>\n<path d="M13924 7584 c-34 -17 -2029 -2158 -2029 -2178 0 -15 5121 -5400 5141\n-5404 12 -3 14 295 14 2241 l0 2245 -1478 1543 c-813 849 -1490 1550 -1505\n1557 -38 16 -105 15 -143 -4z"/>\n</g>\n</svg>\n'),
                (t.pauseSVG =
                  '\n  <svg class="svg" style="transform:scale(1.5)" width="100%" height="100%" viewBox="0 0 36 36" >\n    <path id="pause-icon" data-state="playing" d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" />\n  </svg>\n'),
                (t.replaySVG =
                  '\n  <svg class="svg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">\n    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">\n      <path d="M5356.3,4203.8c-1247.8-153.1-2324.2-811.3-3000.7-1839.7c-379.4-578.2-596.5-1209-660.5-1933.4l-27.4-294.8H883.9c-431.9,0-783.9-6.9-783.9-18.3c0-9.2,477.6-493.7,1062.7-1078.7l1062.7-1062.7L3288.1-961.1C3873.1-376,4350.8,108.5,4350.8,117.6c0,11.4-356.5,18.3-790.7,18.3h-793l18.3,189.7C2831,876.3,2991,1338,3288.1,1779.1C4122.3,3026.9,5706,3472.5,7065.8,2841.8C7639.4,2578.9,8197,2035,8487.3,1461.4C8581,1274,8709,896.9,8754.7,666.1c48-246.8,54.8-811.3,9.1-1055.8C8567.3-1491.3,7788-2394,6720.7-2750.5c-315.4-107.4-541.6-139.4-941.6-139.4c-287.9,0-415.9,11.4-598.8,50.3c-523.3,112-973.6,335.9-1371.2,681c-75.4,68.6-148.5,123.4-160,123.4c-9.1,0-187.4-169.1-393.1-374.8c-434.2-434.2-420.5-363.4-105.1-628.5c852.4-710.7,1972.3-1055.8,3046.4-937c1627.2,176,2977.8,1257,3489.8,2790.4c457.1,1368.9,169.1,2843-777,3969.7C8322.7,3484,7417.8,4000.4,6503.6,4160.4C6197.4,4213,5619.2,4235.8,5356.3,4203.8z"/>\n      <path d="M4990.7,124.5c0-1503.8,4.6-1794,32-1778c16,9.1,505.1,413.6,1085.6,895.8C7113.8,78.8,7161.8,122.2,7122.9,161c-80,75.4-2109.4,1757.5-2120.8,1757.5C4995.3,1918.5,4990.7,1111.8,4990.7,124.5z"/>\n    </g></g>\n  </svg>\n'),
                (t.volumeSVG =
                  '\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.374 286.374" enable-background="new 0 0 286.374 286.374" xml:space="preserve">\n    <g id="Volume_2">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M233.636,26.767l-33.372,28.5c25.659,21.07,42.006,52.616,42.006,87.92\n        c0,35.305-16.347,66.851-42.006,87.921l33.372,28.499c32.324-28.869,52.738-70.268,52.738-116.421\n        C286.374,97.034,265.96,55.635,233.636,26.767z M177.737,74.513l-34.69,29.64c15.14,6.818,27.19,21.681,27.19,39.034\n        s-12.05,32.216-27.19,39.034l34.69,29.64c21.294-15.717,36.051-40.586,36.051-68.674C213.788,115.099,199.03,90.23,177.737,74.513z\n         M108.672,48.317L44.746,98.441H17.898C4.671,98.441,0,103.268,0,116.34v53.695c0,13.072,4.951,17.898,17.898,17.898h26.848\n        l63.926,50.068c7.668,4.948,16.558,6.505,16.558-7.365V55.683C125.23,41.813,116.34,43.37,108.672,48.317z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n'),
                (t.volumeMuteSVG =
                  '\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.277 286.277" enable-background="new 0 0 286.277 286.277" xml:space="preserve">\n    <g id="Volume_none">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M245.102,143.151l36.98-37.071c5.593-5.605,5.593-14.681,0-20.284\n        l-10.124-10.142c-5.593-5.604-14.655-5.604-20.247,0l-36.98,37.071l-36.977-37.043c-5.594-5.603-14.654-5.603-20.247,0\n        l-10.124,10.143c-5.594,5.603-5.594,14.679,0,20.282l36.987,37.053l-36.961,37.051c-5.591,5.604-5.591,14.681,0,20.284\n        l10.126,10.141c5.593,5.604,14.654,5.604,20.247,0l36.96-37.05l36.97,37.035c5.592,5.605,14.654,5.605,20.247,0l10.124-10.141\n        c5.593-5.603,5.593-14.68,0-20.282L245.102,143.151z M108.674,48.296L44.747,98.42H17.9c-13.228,0-17.899,4.826-17.899,17.898\n        L0,142.719l0.001,27.295c0,13.072,4.951,17.898,17.899,17.898h26.847l63.927,50.068c7.667,4.948,16.557,6.505,16.557-7.365V55.662\n        C125.23,41.792,116.341,43.349,108.674,48.296z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n'),
                (t.settingsSVG =
                  '\n  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <path fill="#999" fill-rule="nonzero" d="M17.812 7.52h-1.474a7.09 7.09 0 0 0-.604-1.456l1.043-1.042a1.187 1.187 0 0 0 0-1.68l-1.12-1.118a1.188 1.188 0 0 0-1.68 0l-1.043 1.042a7.05 7.05 0 0 0-1.455-.604V1.188C11.48.531 10.948 0 10.292 0H8.708c-.656 0-1.187.532-1.187 1.188v1.474a7.1 7.1 0 0 0-1.456.604L5.022 2.224a1.187 1.187 0 0 0-1.68 0l-1.12 1.12a1.188 1.188 0 0 0 0 1.68l1.044 1.042c-.256.46-.458.949-.604 1.455H1.188C.531 7.52 0 8.052 0 8.708v1.584c0 .656.532 1.187 1.188 1.187h1.474c.146.507.348.995.604 1.456L2.22 13.979a1.188 1.188 0 0 0 0 1.68l1.12 1.119a1.223 1.223 0 0 0 1.68 0l1.043-1.043c.462.255.95.458 1.457.605v1.472c0 .656.531 1.188 1.187 1.188h1.584c.656 0 1.187-.532 1.187-1.188V16.34c.506-.147.995-.35 1.456-.604l1.043 1.043a1.188 1.188 0 0 0 1.68 0l1.119-1.12a1.187 1.187 0 0 0 0-1.679l-1.043-1.043c.256-.461.458-.95.604-1.456h1.474A1.188 1.188 0 0 0 19 10.29V8.709c0-.656-.532-1.187-1.188-1.187zM9.5 13.459a3.958 3.958 0 1 1 0-7.916 3.958 3.958 0 0 1 0 7.916z"/>\n</svg>\n\n'),
                (t.arrowRightSVG =
                  '\n  <svg class="svg arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n  </svg>\n'),
                (t.arrowLeftSVG =
                  '\n  <svg class="svg arrow" class="svg" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n  </svg> \n'),
                (t.fullScreenSVG =
                  '\n <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M18.802 1.942A1.746 1.746 0 0 0 17.06.2h-4.537a.99.99 0 1 0 0 1.98h4.102c.11 0 .198.088.198.197v2.588a.99.99 0 1 0 1.98 0V1.942zM.198 4.965a.99.99 0 0 0 1.98 0v-2.59a.198.198 0 0 1 .197-.199h4.102a.99.99 0 0 0 0-1.979H1.944C.983.2.204.978.202 1.94L.198 4.965zM18.802 17.056v-3.023a.99.99 0 1 0-1.98 0v2.592c0 .11-.088.198-.197.198h-4.102a.99.99 0 1 0 0 1.98h4.533c.964-.001 1.746-.783 1.746-1.747zM.198 17.056a1.746 1.746 0 0 0 1.746 1.742h4.533a.99.99 0 1 0 0-1.979H2.375a.198.198 0 0 1-.198-.194v-2.592a.99.99 0 1 0-1.98 0v3.023z"/>\n        <rect width="10.651" height="6.117" x="4.174" y="6.441" rx="1.954"/>\n    </g>\n</svg>\n\n'),
                (t.loopSVG =
                  '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M16.773 15.476H16.3a1.25 1.25 0 0 0 0 2.5h.478a6.944 6.944 0 0 0 .98-13.823.251.251 0 0 1-.208-.246V1.93A1.25 1.25 0 0 0 15.584.906l-4.778 3.341a1.25 1.25 0 0 0 .717 2.274h4.764c2.829 0 4.963 1.925 4.963 4.478a4.482 4.482 0 0 1-4.477 4.477zM6.247 17.845c.12.02.208.124.208.246v1.976a1.249 1.249 0 0 0 1.966 1.024l4.773-3.34a1.251 1.251 0 0 0-.717-2.275H7.713c-2.829 0-4.963-1.925-4.963-4.476a4.482 4.482 0 0 1 4.477-4.479h.478a1.25 1.25 0 1 0 0-2.5h-.478a6.945 6.945 0 0 0-.98 13.824z"/>\n    </g>\n</svg>\n'),
                (t.loadingSVG =
                  '<svg class="lds-spinner" style="transform:scale(.3)" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(30 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(60 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(90 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(120 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(150 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(180 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(210 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(240 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(270 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(300 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(330 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n  </rect>\n</g></svg>');
            })((t = { exports: {} })),
            t.exports
          );
        })(),
        h = {
          name: "mc-player",
          set playerName(e) {
            this.name += "-" + e;
          },
        },
        d = function (e, t) {
          return {
            default: {
              "settings-background-color": "whitesmoke",
              "hms-background-color": "whitesmoke",
              "background-color": "whitesmoke",
              "grad-height": "0px",
              color: "black",
              "svg-color": "black",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "red",
              "cursor-color": "red",
              "speedbar-cursor-color": "red",
              "button-opacity": "1",
              "hover-color": "rgba(200, 200, 200, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "red",
              "preview-border": "2px solid #fff",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            dark: {
              "settings-background-color": "black",
              "hms-background-color": "black",
              "background-color": "black",
              "grad-height": "0px",
              color: "white",
              "svg-color": "white",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "red",
              "cursor-color": "red",
              "speedbar-cursor-color": "red",
              "button-opacity": "1",
              "hover-color": "rgba(90, 90, 90, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "red",
              "preview-border": "2px solid rgba(0,0,0,1)",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            whiteGold: {
              "settings-background-color": "white",
              "hms-background-color": "white",
              "background-color": "white",
              "grad-height": "0px",
              color: "#a17f1a",
              "svg-color": "#a17f1a",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "#a17f1a",
              "cursor-color": "#a17f1a",
              "speedbar-cursor-color": "#a17f1a",
              "button-opacity": "1",
              "hover-color": "rgba(200, 200, 200, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#a17f1a",
              "preview-border": "2px solid #808086",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            darkGold: {
              "settings-background-color": "black",
              "hms-background-color": "black",
              "background-color": "black",
              "grad-height": "0px",
              color: "#a17f1a",
              "svg-color": "#a17f1a",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "#a17f1a",
              "cursor-color": "#a17f1a",
              "speedbar-cursor-color": "#a17f1a",
              "button-opacity": "1",
              "hover-color": "rgba(90, 90, 90, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#a17f1a",
              "preview-border": "2px solid #808086",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            transparent: {
              "background-color": "transparent",
              "settings-background-color": "rgba(0,0,0,0.9)",
              "hms-background-color": "rgba(0,0,0,0.5)",
              "preview-border": "2px solid #fff",
              color: "#e8eaeb",
              "grad-height": "200px",
              "svg-color": "#e8eaeb",
              "loopbar-color": "#cfcfd0",
              "totalbar-color": "#797979",
              "speedbar-color": "#999",
              "runningbar-color": "red",
              "cursor-color": "#9e2d11",
              "cursor-style::before":
                '\n        box-shadow: 0px 0px 6px 6px red;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        background-color: red;\n        position: relative;\n        left: -2px;\n        top: -2px;\n    ',
              "cursor-style::after":
                '\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        box-shadow: 0px 0px 6px 6px red;\n        content: "";\n        display: block;\n        position: absolute;\n        background-color: red;\n        right: -2px;\n        bottom: -2px;\n    ',
              "speedbar-cursor-color": "red",
              "button-opacity": "1",
              "hover-color": "rgba(200, 200, 200, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "red",
              border: "1px solid rgba(255,255,255,0.1)",
              "svg-selected-color": "red",
              "loopbar-boundaries-style":
                "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
              "loopbar-boundaries-style::before":
                '\n            width: 16px;\n        height: 5px;\n        background: #ff0000;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
              "loopbar-boundaries-style::after":
                '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #ff0000;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
              "theme-style": "\n        #".concat(
                t,
                "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
              ),
            },
            "mc-green": {
              "background-color": "#141416",
              "settings-background-color": "rgba(0,0,0,0.9)",
              "hms-background-color": "rgba(0,0,0,0.5)",
              "preview-border": "2px solid #254a42",
              color: "#999",
              "grad-height": "0px",
              "svg-color": "#999",
              "loopbar-color": "rgba(0,184,139,0.2)",
              "loopbar-boundaries-color": "#00b88b",
              "totalbar-color": "rgba(255, 255, 255, 0.11)",
              "speedbar-color": "#999",
              "runningbar-color": "#00b88b",
              "cursor-color": "#00b88b",
              "speedbar-cursor-color": "#00b88b",
              "button-opacity": "1",
              "hover-color": "rgba(0,184,139,0.2)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#00b88b",
              border: "1px solid rgba(255,255,255,0.1)",
              "controls-border": "1px solid #151515",
              "svg-selected-color": "#00b88b",
              "loopbar-boundaries-style":
                "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
              "loopbar-boundaries-style::before":
                '\n            width: 16px;\n        height: 5px;\n        background: #00b88b;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
              "loopbar-boundaries-style::after":
                '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #00b88b;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
              "theme-style": "\n        #".concat(
                t,
                "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
              ),
            },
            "mc-blue": {
              "background-color": "#141416",
              "settings-background-color": "rgba(0,0,0,0.9)",
              "hms-background-color": "rgba(0,0,0,0.5)",
              "preview-border": "2px solid #254453",
              color: "#999",
              "grad-height": "0px",
              "svg-color": "#999",
              "loopbar-color": "rgba(0,153,225,0.2)",
              "loopbar-boundaries-color": "#0099e1",
              "totalbar-color": "rgba(255, 255, 255, 0.11)",
              "speedbar-color": "#999",
              "runningbar-color": "#0099e1",
              "cursor-color": "#0099e1",
              "speedbar-cursor-color": "#0099e1",
              "button-opacity": "1",
              "hover-color": "rgba(0,153,225,0.2)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#0099e1",
              border: "1px solid rgba(255,255,255,0.1)",
              "controls-border": "1px solid #151515",
              "svg-selected-color": "#0099e1",
              "loopbar-boundaries-style":
                "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
              "loopbar-boundaries-style::before":
                '\n            width: 16px;\n        height: 5px;\n        background: #0099e1;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
              "loopbar-boundaries-style::after":
                '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #0099e1;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
              "theme-style": "\n        #".concat(
                t,
                "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
              ),
            },
            "on-top": {
              "background-height": "100%",
              "pointer-event-panel-height": "calc(100% - 44px)",
              "controls-bottom": "0px",
              "settings-panel-bottom": "48px",
              "controls-position": "0px",
            },
            "position-bottom": {
              "background-height": "calc(100% - 44px)",
              "pointer-event-panel-height": "calc(100% - 44px)",
              "controls-bottom": "-0px",
              "settings-panel-bottom": "48px",
              "controls-position": "40px",
            },
          }[e];
        },
        m = a,
        f = l,
        v = c,
        g = u,
        y = a,
        b = function (e, t, i) {
          if (void 0 !== n(i)) {
            if (!1 === i) {
              (e.elements.volumeBarActive.style.width =
                100 * e.settings.previousVolume + "%"),
                e.clip.setVolume(e.settings.previousVolume),
                (e.settings.volumeMute = !1);
              var r = document.createElement("span");
              (r.innerHTML = p.volumeSVG),
                e.elements.volumeBtn
                  .getElementsByTagName("svg")[0]
                  .replaceWith(r);
            } else if (!0 === i) {
              (e.settings.volumeMute = !0),
                (e.elements.volumeBarActive.style.width = "0%"),
                e.clip.setVolume(0);
              var s = document.createElement("span");
              (s.innerHTML = p.volumeMuteSVG),
                e.elements.volumeBtn
                  .getElementsByTagName("svg")[0]
                  .replaceWith(s);
            }
            (e.options.muted = e.settings.volumeMute),
              e.eventBroadcast("mute-change", e.settings.volumeMute);
          }
          if (void 0 !== n(t)) {
            if (
              ((e.settings.volume = t),
              e.settings.volume > 0 && (e.settings.previousVolume = t),
              (e.elements.volumeBarActive.style.width =
                100 * e.settings.volume + "%"),
              e.clip.setVolume(e.settings.volume),
              e.settings.volume > 0)
            ) {
              e.settings.volumeMute = !1;
              var o = document.createElement("span");
              (o.innerHTML = p.volumeSVG),
                e.elements.volumeBtn
                  .getElementsByTagName("svg")[0]
                  .replaceWith(o);
            } else if (0 === e.settings.volume) {
              e.settings.volumeMute = !0;
              var a = document.createElement("span");
              (a.innerHTML = p.volumeMuteSVG),
                e.elements.volumeBtn
                  .getElementsByTagName("svg")[0]
                  .replaceWith(a);
            }
            (e.options.volume = e.settings.volume),
              e.eventBroadcast("volume-change", e.settings.volume),
              e.eventBroadcast("mute-change", e.settings.volumeMute);
          }
        },
        x = c,
        w = u,
        k = c,
        C = u,
        E = c,
        O = u,
        P = a,
        I = c,
        M = u,
        T = function (e, t) {
          t && t.preventDefault();
          var n = P("".concat(e.name, "-show-indicator-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (e.elements.indicator.style.visibility = "hidden"))
            : ((n.checked = !0),
              (e.elements.indicator.style.visibility = "visible")),
            e.eventBroadcast("show-indicator-change", n.checked);
        },
        S = function (e, t) {
          t && t.preventDefault();
          var n = P("".concat(e.name, "-pointer-events-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (e.elements.mcPlayer.style.pointerEvents = "none"),
              (e.elements.pointerEventPanel.style.pointerEvents = "auto"),
              (P("".concat(e.name, "-controls")).style.pointerEvents = "auto"),
              (e.elements.settingsPanel.style.pointerEvents = "auto"))
            : ((n.checked = !0),
              (e.options.pointerEvents = !1),
              (e.elements.mcPlayer.style.pointerEvents = "none"),
              (e.elements.pointerEventPanel.style.pointerEvents = "none"),
              (P("".concat(e.name, "-controls")).style.pointerEvents = "auto"),
              (e.elements.settingsPanel.style.pointerEvents = "auto")),
            e.eventBroadcast("show-pointer-events-change", n.checked);
        },
        A = function (e, t) {
          t && t.preventDefault(),
            e.elements.volumeControl.classList.toggle(
              "".concat(e.name, "-volume-width-transition")
            ),
            e.elements.volumeControl.classList.toggle(
              "".concat(e.name, "-hide")
            );
          var n = P("".concat(e.name, "-show-volume-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (e.elements.volumeControl.style.visibility = "hidden"),
              (e.elements.timeDisplay.style.left = "45px"))
            : ((n.checked = !0),
              (e.elements.volumeControl.style.visibility = "visible"),
              (e.elements.timeDisplay.style.left = "")),
            e.eventBroadcast("show-volume-change", n.checked);
        },
        _ = function (e, t) {
          t && t.preventDefault();
          var n = P("".concat(e.name, "-show-preview-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (P("".concat(e.name, "-hover-display")).style.visibility =
                "hidden"),
              (P("".concat(e.name, "-hover-display")).style.display = "none"),
              (e.options.preview = !1))
            : (e.previewClip || e.createPreviewDisplay(),
              (n.checked = !0),
              (P("".concat(e.name, "-hover-display")).style.visibility =
                "visible"),
              (P("".concat(e.name, "-hover-display")).style.display = "flex"),
              (e.options.preview = !0)),
            e.eventBroadcast("show-preview-change", n.checked);
        },
        L = function (e, t) {
          "showIndicator" === t
            ? T(e)
            : "showPointerEvents" === t
            ? S(e)
            : "showVolume" === t
            ? A(e)
            : "showPreview" === t && _(e);
        },
        D = a,
        B = c,
        j = u,
        V = a,
        N = function (e) {
          (e.settings.loopActivated = !e.settings.loopActivated),
            e.eventBroadcast("loop-change", e.settings.loopActivated),
            e.elements.loopButton.classList.toggle("svg-selected"),
            e.elements.loopBarStart.classList.toggle("m-fadeOut"),
            e.elements.loopBarEnd.classList.toggle("m-fadeOut"),
            e.elements.loopBarStart.classList.toggle("m-fadeIn"),
            e.elements.loopBarStart.classList.toggle(
              "".concat(e.name, "-hide")
            ),
            e.elements.loopBarEnd.classList.toggle("m-fadeIn"),
            e.elements.loopBarEnd.classList.toggle("".concat(e.name, "-hide")),
            V("".concat(e.name, "-loop-time")).classList.toggle("m-fadeOut"),
            V("".concat(e.name, "-loop-time")).classList.toggle("m-fadeIn"),
            V("".concat(e.name, "-loop-time")).classList.toggle(
              "".concat(e.name, "-hide")
            ),
            (e.elements.loopEndTime.innerHTML = e.settings.loopEndMillisecond),
            (e.elements.loopStartTime.innerHTML =
              e.settings.loopStartMillisecond),
            (e.settings.needsUpdate = !0),
            e.settings.loopActivated ||
              ((e.elements.loopBar.style.left = "0%"),
              (e.elements.loopBar.style.width = "100%"),
              (e.settings.loopStartMillisecond = 0),
              (e.settings.loopEndMillisecond = e.clip.duration),
              (e.settings.loopLastPositionXPxls = 0),
              (e.settings.loopLastPositionXPercentage = 0),
              (e.elements.runningBar.style.width =
                (e.clip.runTimeInfo.currentMillisecond / e.clip.duration) *
                  100 +
                "%"));
        },
        F = N,
        $ = a;
      function z(e, t) {
        for (var n = t.parentNode; null != n; ) {
          if (n == e) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      var R = function (e) {
          var t = e.clip.props.host.className.includes("full-screen");
          e.clip.props.host !== e.options.host &&
            !t &&
            e.clip.props.host.appendChild(e.elements.mcPlayer),
            e.clip.props.host !== e.options.host &&
              t &&
              e.options.host.appendChild(e.elements.mcPlayer),
            t ? e.exitFullscreen() : e.launchIntoFullscreen(e.clip.props.host);
        },
        H = R,
        q = function () {
          var e = new Date().getTime();
          return "xxxxxxxx-xxxx".replace(/[xy]/g, function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            e = Math.floor(e / 16);
            var i = Math.random() > 0.5,
              r = ("x" == t ? n : (3 & n) | 8).toString(16);
            return i ? r.toUpperCase() : r;
          });
        },
        G = a,
        W = c,
        U = u,
        J = function (e) {
          return document.querySelectorAll(e);
        },
        K = a,
        X = new t.default.TimeCapsule(),
        Q = a,
        Z = function (e) {
          return document.getElementsByTagName(e);
        },
        Y = l,
        ee = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          function i(e) {
            return "number" == typeof e && isFinite(e);
          }
          var r = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
            s = null,
            o = null;
          if (Object.prototype.hasOwnProperty.call(e, "width")) {
            var a = e.width.match(r)[0],
              l = e.width.substring(a.length);
            s =
              !i(Number(a)) || ("%" !== l && "px" !== l)
                ? null
                : { number: Number(a), unit: l };
          }
          if (Object.prototype.hasOwnProperty.call(e, "height")) {
            var c = e.height.match(r)[0],
              u = e.height.substring(c.length);
            o =
              !i(Number(c)) || ("%" !== u && "px" !== u)
                ? null
                : { number: Number(c), unit: u };
          }
          var p = 1,
            h = 1;
          null !== s &&
            "px" === s.unit &&
            s.number !== t.width &&
            (p = t.width / s.number),
            null !== o &&
              "px" === o.unit &&
              o.number !== t.height &&
              (h = t.height / o.number);
          var d = 1;
          d = n ? (h > p ? h : p) : h <= p ? h : p;
          var m = {};
          if (null !== s) {
            var f;
            f = "px" === s.unit ? s.number * d : (s.number / 100) * t.width * d;
            var v = t.width - f;
            m.left = v / 2;
          }
          if (null !== s) {
            var g;
            g =
              "px" === o.unit ? o.number * d : (o.number / 100) * t.height * d;
            var y = t.height - g;
            m.top = y / 2;
          }
          return { scale: d, position: m };
        };
      return (function () {
        function e(t) {
          var n,
            i = this;
          for (var r in ((function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          (t.id = t.id || Date.now()),
          (t.preview = t.preview || !1),
          (t.showVolume = t.showVolume || !1),
          (t.showIndicator = t.showIndicator || !1),
          (t.theme = t.theme || "transparent on-top"),
          (t.host = t.host || t.clip.props.host),
          (t.buttons = t.buttons || {}),
          (t.timeFormat = t.timeFormat || "ss"),
          (t.backgroundColor = t.backgroundColor || "black"),
          (t.fullscreen = t.fullscreen || !1),
          (t.scaleToFit = null === (n = t.scaleToFit) || void 0 === n || n),
          void 0 === t.pointerEvents || null === t.pointerEvents
            ? (t.pointerEvents = !1)
            : (t.pointerEvents = Boolean(t.pointerEvents)),
          (t.onMillisecondChange = t.onMillisecondChange || null),
          (t.speedValues = t.speedValues || [-2, -1, -0.5, 0, 0.5, 1, 2]),
          (t.muted = t.muted || !1),
          (t.controls = 0 != t.controls),
          (t.loop = t.loop || !1),
          (t.volume = void 0 !== t.volume ? t.volume : 1),
          (t.currentScript = t.currentScript || null),
          t.speedValues))
            isFinite(t.speedValues[r]) || t.speedValues.splice(r, 1);
          t.speedValues.sort(function (e, t) {
            return e - t;
          }),
            (this.className = h.name),
            (h.playerName = t.id),
            (this.options = t),
            (this.id = this.options.id),
            (this.name = h.name),
            (this.previewClip = null),
            (this.clip = t.clip),
            (this.clipClass = t.clipClass),
            (this.state = this.clip.runTimeInfo.state),
            (this.listeners = {}),
            (this.previewScale = 0.25),
            (this.settings = {
              volume: 1,
              journey: null,
              previousVolume: 1,
              volumeMute: !1,
              needsUpdate: !0,
              resizeLoop: !1,
              loopJourney: !1,
              previewJourney: null,
              loopActivated: !1,
              requestingLoop: !1,
              playAfterResize: !1,
              loopStartMillisecond: 0,
              loopLastPositionXPxls: 0,
              loopLastPositionXPercentage: 0,
              loopEndMillisecond: this.clip.duration,
              controls: !0,
            }),
            (function (e) {
              e.elements = {};
              var t = e.clip.props.host;
              t.offsetWidth ||
                (t.style.width = e.clip.props.containerParams.width),
                t.offsetHeight ||
                  (t.style.height = e.clip.props.containerParams.height);
              var n = document.createElement("link");
              (n.rel = "preconnect"), (n.href = "https://fonts.gstatic.com");
              var i = document.createElement("link");
              (i.rel = "stylesheet"),
                (i.href =
                  "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
              var r = document.getElementsByTagName("head")[0];
              if (
                (r.appendChild(n),
                r.appendChild(i),
                (t.style.display = "flex"),
                (t.style.justifyContent = "center"),
                (t.style.alignItems = "center"),
                (t.style.overflow = "hidden"),
                (e.clip.props.host.style.position = "relative"),
                (e.clip.props.host.style.zIndex = "0"),
                (e.elements.mcPlayer = f("div")),
                (e.elements.mcPlayer.id = "".concat(e.name)),
                (e.elements.mcPlayer.className = "".concat(e.className)),
                (e.elements.mcPlayer.innerHTML = (function (e) {
                  return '\n  <div\n    class="pointer-event-panel"\n    id="'
                    .concat(
                      e.name,
                      '-pointer-event-panel"\n  ></div>\n  <div\n    class="pointer-event-panel"\n    id="'
                    )
                    .concat(
                      e.name,
                      '-listener-helper"\n  ></div>\n  <div class="background"></div>\n  <div id="'
                    )
                    .concat(
                      e.name,
                      '-controls">\n    <div class="grad"></div>\n    <div id="'
                    )
                    .concat(e.name, '-totalbar">\n      <div id="')
                    .concat(e.name, '-hover-display">\n        <div id="')
                    .concat(
                      e.name,
                      '-hover-display-border"> </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-hover-display-clip"> </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-hover-millisecond"></div>\n      </div>\n      <div id="'
                    )
                    .concat(
                      e.name,
                      '-loopbar">\n        <div\n          class="'
                    )
                    .concat(e.name, '-loop-boundaries"\n          id="')
                    .concat(
                      e.name,
                      '-loopbar-start"\n        ></div>\n        <div\n          class="'
                    )
                    .concat(e.name, '-loop-boundaries"\n          id="')
                    .concat(
                      e.name,
                      '-loopbar-end"\n        ></div>\n        <div id="'
                    )
                    .concat(e.name, '-helperbar"></div>\n        <div id="')
                    .concat(e.name, '-runningbar">\n          <div id="')
                    .concat(
                      e.name,
                      '-cursor"></div>\n        </div>\n      </div>\n    </div>\n    <div id="'
                    )
                    .concat(e.name, '-left-controls">\n      <div id="')
                    .concat(e.name, '-status-btn">\n        ')
                    .concat(e.svg.playSVG, '\n        <span id="')
                    .concat(
                      e.name,
                      '-indicator"></span>\n      </div>\n      <div id="'
                    )
                    .concat(e.name, '-volume">\n        <div id="')
                    .concat(e.name, '-volume-btn">\n          ')
                    .concat(
                      e.svg.volumeSVG,
                      '\n        </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-volumebar-helper"></div>\n        <div id="'
                    )
                    .concat(e.name, '-volumebar">\n            <div id="')
                    .concat(
                      e.name,
                      '-volumebar-active">\n              <div id="'
                    )
                    .concat(
                      e.name,
                      '-volume-cursor"></div>\n            </div>\n        </div>\n      </div>\n      <div id="'
                    )
                    .concat(e.name, '-time-display">\n        <span id="')
                    .concat(
                      e.name,
                      '-time-current"></span>\n        <span id="'
                    )
                    .concat(
                      e.name,
                      '-time-separator"></span>\n        <span id="'
                    )
                    .concat(
                      e.name,
                      '-time-total"></span>\n      </div>\n    </div>\n    <div id="'
                    )
                    .concat(
                      e.name,
                      '-right-controls">\n      <div\n        id="'
                    )
                    .concat(
                      e.name,
                      '-loop-btn-container"\n      >\n        <div\n          id="'
                    )
                    .concat(e.name, '-loop-btn"\n        >')
                    .concat(
                      e.svg.loopSVG,
                      '</div>\n        <div\n          id="'
                    )
                    .concat(
                      e.name,
                      '-loop-time"\n        >\n          <span\n            id="'
                    )
                    .concat(e.name, '-loopbar-start-time"\n            class="')
                    .concat(
                      e.name,
                      '-loopbar-time"\n          ></span>\n          <span>:</span>\n          <span\n            id="'
                    )
                    .concat(e.name, '-loopbar-end-time"\n            class="')
                    .concat(
                      e.name,
                      '-loopbar-time"\n          ></span>\n        </div>\n      </div>\n      <div\n        id="'
                    )
                    .concat(e.name, '-settings-btn"\n      >')
                    .concat(
                      e.svg.settingsSVG,
                      '</div>\n      <div\n        id="'
                    )
                    .concat(e.name, '-dc-btn"\n      >\n        ')
                    .concat(
                      e.svg.dcSVG,
                      '\n      </div>\n      \n      <div\n        id="'
                    )
                    .concat(e.name, '-full-screen-btn"\n      >')
                    .concat(
                      e.svg.fullScreenSVG,
                      '</div>\n    </div>\n    \n\n  </div>\n  <div id="'
                    )
                    .concat(e.name, '-settings-panel">\n    <ul id="')
                    .concat(e.name, '-main-settings">\n      <li id="')
                    .concat(
                      e.name,
                      '-settings-pointer-events">\n        <label>Pointer Events</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-pointer-events-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-preview">\n        <label>Show Preview</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-show-preview-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-indicator">\n        <label>Show Indicator</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-show-indicator-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-volume">\n        <label>Show Volume</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-show-volume-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-speed-show">\n        <label>Speed</label>\n        <div class="'
                    )
                    .concat(e.name, '-speed-btn">')
                    .concat(e.svg.arrowRightSVG, '</div>\n        <span id="')
                    .concat(
                      e.name,
                      '-speed-current"></span>\n      </li>\n    </ul>\n    <ul id="'
                    )
                    .concat(e.name, '-speed-settings">\n      <li id="')
                    .concat(
                      e.name,
                      '-settings-speed-hide">\n        <div class="'
                    )
                    .concat(e.name, '-speed-btn">')
                    .concat(e.svg.arrowLeftSVG, "</div>\n        <label id=")
                    .concat(
                      e.name,
                      '-speed-runtime>Speed</label>\n      </li>\n      <li>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-speed-value-helperbar"></div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-speed-value-bar">\n          <div\n            class="'
                    )
                    .concat(e.name, '-speed-value-step"\n            id="')
                    .concat(
                      e.name,
                      '-speed-cursor"\n          >\n            <div></div>\n          </div>\n        </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-speed-value">\n        </div>\n      </li>\n    </ul>\n  </div>\n'
                    );
                })({ svg: p, name: e.name })),
                "string" == typeof e.options.host)
              ) {
                var s = document.querySelectorAll(e.options.host);
                for (var o in s)
                  isNaN(o) || s[o].appendChild(e.elements.mcPlayer);
              } else e.options.host.appendChild(e.elements.mcPlayer);
              for (var a in ((e.elements.pointerEventPanel = m(
                "".concat(e.name, "-pointer-event-panel")
              )),
              (e.elements.listenerHelper = m(
                "".concat(e.name, "-listener-helper")
              )),
              (e.elements.loopBar = m("".concat(e.name, "-loopbar"))),
              (e.elements.totalBar = m("".concat(e.name, "-totalbar"))),
              (e.elements.indicator = m("".concat(e.name, "-indicator"))),
              (e.elements.loopButton = m("".concat(e.name, "-loop-btn"))),
              (e.elements.volumeBar = m("".concat(e.name, "-volumebar"))),
              (e.elements.totalTime = m("".concat(e.name, "-time-total"))),
              (e.elements.volumeControl = m("".concat(e.name, "-volume"))),
              (e.elements.volumeBtn = m("".concat(e.name, "-volume-btn"))),
              (e.elements.runningBar = m("".concat(e.name, "-runningbar"))),
              (e.elements.loopBarEnd = m("".concat(e.name, "-loopbar-end"))),
              (e.elements.statusButton = m("".concat(e.name, "-status-btn"))),
              (e.elements.speedBar = m("".concat(e.name, "-speed-value-bar"))),
              (e.elements.currentTime = m("".concat(e.name, "-time-current"))),
              (e.elements.timeDisplay = m("".concat(e.name, "-time-display"))),
              (e.elements.speedCurrent = m(
                "".concat(e.name, "-speed-current")
              )),
              (e.elements.loopBarStart = m(
                "".concat(e.name, "-loopbar-start")
              )),
              (e.elements.volumeCursor = m(
                "".concat(e.name, "-volume-cursor")
              )),
              (e.elements.settingsButton = m(
                "".concat(e.name, "-settings-btn")
              )),
              (e.elements.donkeyclipButton = m("".concat(e.name, "-dc-btn"))),
              (e.elements.timeSeparator = m(
                "".concat(e.name, "-time-separator")
              )),
              (e.elements.settingsPanel = m(
                "".concat(e.name, "-settings-panel")
              )),
              (e.elements.settingsMainPanel = m(
                "".concat(e.name, "-main-settings")
              )),
              (e.elements.fullScreenButton = m(
                "".concat(e.name, "-full-screen-btn")
              )),
              (e.elements.volumeBarHelper = m(
                "".concat(e.name, "-volumebar-helper")
              )),
              (e.elements.volumeBarActive = m(
                "".concat(e.name, "-volumebar-active")
              )),
              (e.elements.settingsSpeedPanel = m(
                "".concat(e.name, "-speed-settings")
              )),
              (e.elements.settingsShowVolume = m(
                "".concat(e.name, "-settings-volume")
              )),
              (e.elements.settingsShowPreview = m(
                "".concat(e.name, "-settings-preview")
              )),
              (e.elements.settingsPointerEvents = m(
                "".concat(e.name, "-settings-pointer-events")
              )),
              (e.elements.speedBarHelper = m(
                "".concat(e.name, "-speed-value-helperbar")
              )),
              (e.elements.settingsShowIndicator = m(
                "".concat(e.name, "-settings-indicator")
              )),
              (e.elements.settingsSpeedButtonShow = m(
                "".concat(e.name, "-settings-speed-show")
              )),
              (e.elements.settingsSpeedButtonHide = m(
                "".concat(e.name, "-settings-speed-hide")
              )),
              (e.elements.volumeBarActive.style.width =
                100 * e.settings.volume + "%"),
              (e.elements.currentTime.innerHTML = e.timeFormat(0)),
              (e.elements.totalTime.innerHTML = e.timeFormat(e.clip.duration)),
              (e.elements.timeSeparator.innerHTML = "/"),
              e.elements.settingsPanel.classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              e.options.showIndicator
                ? ((e.elements.indicator.style.visibility = "visible"),
                  (e.elements.statusButton.style.width = "35px"),
                  (e.elements.statusButton.style.height = "20px"),
                  (e.elements.statusButton.style.bottom = "5px"))
                : (e.elements.indicator.style.visibility = "hidden"),
              (e.elements.indicator.innerHTML = e.clip.runTimeInfo.state),
              (e.elements.settingsSpeedPanel.style.display = "none"),
              e.elements.settingsSpeedPanel
                .getElementsByTagName("li")[1]
                .classList.add("no-hover"),
              (e.elements.loopBarStart.style.left = "0%"),
              e.elements.loopBarStart.classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              (e.elements.loopBarEnd.style.left = "100%"),
              e.elements.loopBarEnd.classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              (e.elements.loopStartTime = m(
                "".concat(e.name, "-loopbar-start-time")
              )),
              (e.elements.loopEndTime = m(
                "".concat(e.name, "-loopbar-end-time")
              )),
              (e.elements.editableLoopStartTime = document.createElement(
                "input"
              )),
              (e.elements.editableLoopStartTime.type = "text"),
              (e.elements.editableLoopStartTime.size =
                m("".concat(e.name, "-time-total")).innerHTML.length + 1),
              (e.elements.editableLoopStartTime.maxLength = m(
                "".concat(e.name, "-time-total")
              ).innerHTML.length),
              (e.elements.editableLoopStartTime.style.height = m(
                "".concat(e.name, "-time-total")
              ).offsetHeight),
              (e.elements.editableLoopStartTime.value = m(
                "".concat(e.name, "-loopbar-start-time")
              ).innerHTML),
              (e.elements.editableLoopStartTime.style.fontSize = "8px"),
              (e.elements.editableLoopEndTime = document.createElement(
                "input"
              )),
              (e.elements.editableLoopEndTime.type = "text"),
              (e.elements.editableLoopEndTime.size =
                m("".concat(e.name, "-time-total")).innerHTML.length + 1),
              (e.elements.editableLoopEndTime.maxLength = m(
                "".concat(e.name, "-time-total")
              ).innerHTML.length),
              (e.elements.editableLoopEndTime.style.height = m(
                "".concat(e.name, "-time-total")
              ).offsetHeight),
              (e.elements.editableLoopEndTime.value = m(
                "".concat(e.name, "-loopbar-start-time")
              ).innerHTML),
              (e.elements.editableLoopEndTime.pattern = "d*"),
              (e.elements.editableLoopEndTime.style.fontSize = "8px"),
              m("".concat(e.name, "-loop-time")).classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              m("".concat(e.name, "-hover-display")).classList.add("m-fadeOut"),
              (m("".concat(e.name, "-show-volume-checkbox")).checked =
                e.options.showVolume),
              (m("".concat(e.name, "-show-indicator-checkbox")).checked =
                e.options.showIndicator),
              (m("".concat(e.name, "-show-preview-checkbox")).checked =
                e.options.preview),
              (m("".concat(e.name, "-pointer-events-checkbox")).checked =
                e.options.pointerEvents),
              e.options.pointerEvents
                ? ((e.elements.mcPlayer.style.pointerEvents = "none"),
                  (e.elements.pointerEventPanel.style.pointerEvents = "none"),
                  (m("".concat(e.name, "-controls")).style.pointerEvents =
                    "auto"),
                  (e.elements.settingsPanel.style.pointerEvents = "auto"))
                : ((e.elements.mcPlayer.style.pointerEvents = "none"),
                  (e.elements.pointerEventPanel.style.pointerEvents = "auto"),
                  (m("".concat(e.name, "-controls")).style.pointerEvents =
                    "auto"),
                  (e.elements.settingsPanel.style.pointerEvents = "auto")),
              (e.elements.listenerHelper.style.pointerEvents = "none"),
              e.options.showVolume
                ? ((e.elements.timeDisplay.style.left = ""),
                  (e.elements.volumeControl.style.visibility = "visible"))
                : ((e.elements.timeDisplay.style.left = "45px"),
                  (e.elements.volumeControl.style.visibility = "hidden"),
                  e.elements.volumeControl.classList.toggle(
                    "".concat(e.name, "-hide")
                  ),
                  e.elements.volumeControl.classList.toggle(
                    "".concat(e.name, "-volume-width-transition")
                  )),
              e.options.speedValues)) {
                var l = f("div");
                l.className = "".concat(e.name, "-speed-value-step");
                var c = f("div");
                (c.className = "".concat(e.name, "-speed-value")),
                  (c.dataset.speedValue = e.options.speedValues[a]),
                  (c.innerHTML = e.options.speedValues[a]),
                  (c.dataset.zone = a),
                  m("".concat(e.name, "-speed-value")).prepend(c),
                  e.elements.speedBar.prepend(l);
              }
              !1 === e.options.buttons.fullScreen &&
                e.elements.fullScreenButton.remove(),
                !1 === e.options.buttons.settings &&
                  e.elements.settingsButton.remove(),
                !1 === e.options.buttons.donkeyclip &&
                  e.elements.donkeyclipButton.remove(),
                !1 === e.options.buttons.loop && e.elements.loopButton.remove();
            })(this),
            this.setTheme(),
            this.setSpeed(),
            this.subscribeToTimer(),
            this.subscribeToDurationChange(),
            this.addEventListeners(),
            this.scaleClipHost(),
            this.eventBroadcast("state-change", this.state),
            this.options.preview && this.createPreviewDisplay(),
            (this.resizeTimeout = setTimeout(function () {}, 20)),
            window.addEventListener("resize", function () {
              clearTimeout(i.resizeTimeout),
                (i.resizeTimeout = setTimeout(function () {
                  i.options.preview && i.setPreviewDimentions(),
                    i.options.scaleToFit && i.scaleClipHost();
                }, 20));
            }),
            this.changeSettings(t, !0);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "changeSettings",
              value: function (e, t) {
                (e.theme = e.theme || "transparent on-top"),
                  (e.speed = e.speed || 1),
                  (e.volume = e.volume || 1),
                  (e.clip = e.clip || this.clip),
                  e.clip !== this.options.clip &&
                    ((t = !0),
                    (this.clip = e.clip),
                    (this.options.clip = e.clip)),
                  !1 === e.controls
                    ? (Q(this.name).style.display = "none")
                    : !0 === e.controls &&
                      (Q(this.name).style.display = "unset"),
                  void 0 !== e.loop &&
                    (this.options.loop !== e.loop ||
                      (t && this.options.loop)) &&
                    F(this),
                  void 0 !== e.fullscreen &&
                    (this.options.fullscreen !== e.fullscreen ||
                      (t && this.options.fullscreen)) &&
                    H(this),
                  void 0 !== e.muted &&
                    (this.options.muted !== e.muted ||
                      (t && this.options.muted)) &&
                    b(this, void 0, e.mute),
                  void 0 !== e.volume &&
                    (this.options.volume !== e.volume ||
                      (t && this.options.volume)) &&
                    b(this, e.volume, void 0),
                  void 0 !== e.speed &&
                    (this.options.speed !== e.speed ||
                      (t && this.options.speed)) &&
                    (function (e, t) {
                      var n;
                      (t = parseFloat(t) || 1),
                        e.eventBroadcast("speed-change", t),
                        (n = 1 == t ? "Normal" : t),
                        (e.clip.executionSpeed = t),
                        (e.elements.speedCurrent.innerHTML = n);
                    })(this, e.speed),
                  void 0 !== e.scaleToFit &&
                    (this.options.scaleToFit !== e.scaleToFit ||
                      (t && this.options.scaleToFit)) &&
                    ((this.options.scaleToFit = e.scaleToFit),
                    this.scaleClipHost()),
                  void 0 !== e.showVolume &&
                    this.options.showVolume !== e.showVolume &&
                    L(this, "showVolume"),
                  void 0 !== e.preview &&
                    this.options.preview !== e.preview &&
                    L(this, "showPreview"),
                  void 0 !== e.theme &&
                    this.options.theme !== e.theme &&
                    ((this.options.theme = e.theme), this.setTheme()),
                  (this.options = o(o({}, this.options), e));
              },
            },
            {
              key: "scaleClipHost",
              value: function () {
                if (this.options.scaleToFit) {
                  var e = this.clip.props.containerParams.width,
                    t = this.clip.props.containerParams.height,
                    n = ee(
                      { width: e, height: t },
                      {
                        width: this.clip.props.host.offsetWidth,
                        height: this.clip.props.host.offsetHeight,
                      },
                      "cover" === this.options.scaleToFit
                    );
                  (this.clip.realClip.rootElement.style.transform = "scale(".concat(
                    n.scale
                  )),
                    (this.clip.realClip.rootElement.style.left =
                      n.position.left + "px"),
                    (this.clip.realClip.rootElement.style.top =
                      n.position.top + "px");
                } else
                  (this.clip.realClip.rootElement.style.transform = "scale(1)"),
                    (this.clip.realClip.rootElement.style.left = "0px"),
                    (this.clip.realClip.rootElement.style.top = "0px");
                this.eventBroadcast("scale-change", this.options.scaleToFit);
              },
            },
            {
              key: "createLoop",
              value: function (e, t) {
                (this.settings.loopStartMillisecond = e),
                  (this.settings.loopEndMillisecond = t),
                  (this.elements.loopBar.style.left =
                    (e / this.clip.duration) * 100 + "%"),
                  (this.elements.loopBar.style.width =
                    ((t - e) / this.clip.duration) * 100 + "%"),
                  this.createJourney(e),
                  (this.elements.runningBar.style.width = "0%"),
                  !this.settings.loopActivated && F(this);
              },
            },
            {
              key: "createJourney",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = this.clip;
                setTimeout(function () {
                  var r = n.before,
                    s = void 0 === r ? null : r,
                    o = n.after,
                    a = void 0 === o ? null : o;
                  s && i[s](),
                    (t.settings.journey = X.startJourney(i)),
                    t.settings.journey.station(e),
                    t.settings.journey.destination(),
                    a && i[a]();
                }, 0);
              },
            },
            {
              key: "millisecondChange",
              value: function (e, t, n, i) {
                var r =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4];
                if (
                  (this.state !== t &&
                    ((this.state = t), this.eventBroadcast("state-change", t)),
                  !this.settings.needsUpdate)
                )
                  return this.clip.pause(), 1;
                var s = this.settings,
                  o = s.loopActivated,
                  a = s.loopEndMillisecond,
                  l = s.loopStartMillisecond,
                  c = this.clip.duration,
                  u = this.elements,
                  p = u.totalBar,
                  h = u.loopBar,
                  d = h.offsetWidth,
                  m = h.offsetLeft / p.offsetWidth,
                  f = e - c * m,
                  v = (c / p.offsetWidth) * d;
                return e >= a && o && this.clip.speed >= 0
                  ? (this.createJourney(l + 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : e >= a && o && this.clip.speed < 0
                  ? (this.createJourney(a - 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : e <= l && o && this.clip.speed >= 0
                  ? (this.createJourney(l + 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : e <= l && o && this.clip.speed < 0
                  ? (this.createJourney(a - 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : (i &&
                      this.createJourney(e, {
                        after: this.settings.playAfterResize ? "play" : null,
                      }),
                    (this.elements.runningBar.style.width =
                      (f / v) * 100 + "%"),
                    (this.elements.currentTime.innerHTML = this.timeFormat(e)),
                    void (
                      this.options.onMillisecondChange &&
                      r &&
                      this.options.onMillisecondChange(e)
                    ));
              },
            },
            {
              key: "eventBroadcast",
              value: function (e, t) {
                var n = Q("".concat(this.name, "-controls"));
                "state-change" === e
                  ? (this.options.currentScript &&
                      (this.options.currentScript.dataset.status = t),
                    "paused" === t ||
                    "idle" === t ||
                    "transitional" === t ||
                    "armed" === t ||
                    "blocked" === t
                      ? (n.classList.value.includes("force-show-controls") ||
                          n.classList.toggle("force-show-controls"),
                        (this.elements.statusButton.innerHTML = p.playSVG),
                        this.elements.statusButton.appendChild(
                          this.elements.indicator
                        ),
                        (this.elements.indicator.innerHTML = "".concat(
                          t.charAt(0).toUpperCase() + t.slice(1)
                        )),
                        (this.elements.pointerEventPanel.innerHTML =
                          "blocked" === t
                            ? '\n            <div style="width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;">'.concat(
                                p.loadingSVG,
                                "</div>"
                              )
                            : ""))
                      : (n.classList.value.includes("force-show-controls") &&
                          n.classList.toggle("force-show-controls"),
                        (this.elements.statusButton.innerHTML = p.pauseSVG),
                        this.elements.statusButton.appendChild(
                          this.elements.indicator
                        ),
                        (this.elements.indicator.innerHTML = "Playing"),
                        (this.elements.pointerEventPanel.innerHTML = ""),
                        "playing" === t &&
                        this.clip.runTimeInfo.currentMillisecond ===
                          this.clip.duration &&
                        this.clip.speed >= 0
                          ? this.createJourney(1, { after: "play" })
                          : (("playing" === t &&
                              0 === this.clip.runTimeInfo.currentMillisecond &&
                              this.clip.speed < 0) ||
                              ("playing" === t &&
                                this.clip.runTimeInfo.currentMillisecond ===
                                  this.clip.duration &&
                                this.clip.speed < 0)) &&
                            this.createJourney(this.clip.duration - 1, {
                              after: "play",
                            })))
                  : "duration-change" === e
                  ? ((this.elements.totalTime.innerHTML = this.timeFormat(
                      this.clip.duration
                    )),
                    (this.settings.loopEndMillisecond = this.clip.duration),
                    (this.elements.pointerEventPanel.innerHTML = ""),
                    this.millisecondChange(
                      this.clip.runTimeInfo.currentMillisecond
                    ))
                  : this.options.currentScript &&
                    ("volume-change" === e
                      ? ((this.options.volume = t),
                        (this.options.currentScript.dataset.volume = t))
                      : "speed-change" === e
                      ? ((this.options.speed = t),
                        (this.options.currentScript.dataset.speed = t))
                      : "mute-change" === e
                      ? t
                        ? ((this.options.muted = !0),
                          (this.options.currentScript.dataset.muted = ""))
                        : ((this.options.muted = !1),
                          delete this.options.currentScript.dataset.muted)
                      : "loop-change" === e
                      ? t
                        ? ((this.options.loop = !0),
                          (this.options.currentScript.dataset.loop = ""))
                        : ((this.options.loop = !1),
                          delete this.options.currentScript.dataset.loop)
                      : "scale-change" === e
                      ? t
                        ? ((this.options.scaleToFit = !0),
                          (this.options.currentScript.dataset.scaleToFit = ""))
                        : ((this.options.scaleToFit = !1),
                          delete this.options.currentScript.dataset.scaleToFit)
                      : "show-volume-change" === e
                      ? t
                        ? ((this.options.showVolume = !0),
                          (this.options.currentScript.dataset.showVolume = ""))
                        : ((this.options.showVolume = !1),
                          delete this.options.currentScript.dataset.showVolume)
                      : "show-preview-change" === e &&
                        (t
                          ? ((this.options.preview = !0),
                            (this.options.currentScript.dataset.preview = ""))
                          : ((this.options.preview = !1),
                            delete this.options.currentScript.dataset
                              .preview)));
              },
            },
            {
              key: "subscribeToDurationChange",
              value: function () {
                this.clip.subscribeToDurationChange(
                  this.subscribeToDurationChangeCallback.bind(this)
                );
              },
            },
            {
              key: "subscribeToDurationChangeCallback",
              value: function () {
                this.eventBroadcast("duration-change");
              },
            },
            {
              key: "subscribeToTimer",
              value: function () {
                this.clip.subscribe(this.id, this.millisecondChange.bind(this));
              },
            },
            {
              key: "handleDragStart",
              value: function () {
                (this.settings.needsUpdate = !0),
                  (this.settings.journey = X.startJourney(this.clip));
              },
            },
            {
              key: "timeFormat",
              value: function (e) {
                if ("ss" === this.options.timeFormat) {
                  var t = e / 1e3 / 60 / 60,
                    n = (t % 1) * 60,
                    i = (n % 1) * 60,
                    r = ("0" + parseInt(t)).slice(-2),
                    s = ("0" + parseInt(n)).slice(-2),
                    o = ("0" + parseInt(i)).slice(-2);
                  return ""
                    .concat("00" === r ? "" : r + ":")
                    .concat(s, ":")
                    .concat(o);
                }
                return e;
              },
            },
            {
              key: "handleDrag",
              value: function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                isFinite(e) || (e = 0);
                var n = this.clip.duration,
                  i = this.settings.journey,
                  r = this.elements,
                  s = r.loopBar,
                  o = r.totalBar,
                  a = r.runningBar,
                  l = r.currentTime,
                  c = e + s.offsetLeft,
                  u = Math.round((n * c) / o.offsetWidth);
                (l.innerHTML = this.timeFormat(u)),
                  (a.style.width = (e / s.offsetWidth) * 100 + "%"),
                  i.station(u),
                  this.options.onMillisecondChange &&
                    t &&
                    this.options.onMillisecondChange(u);
              },
            },
            {
              key: "handleDragEnd",
              value: function () {
                this.settings.journey.destination();
              },
            },
            {
              key: "createProgressDrag",
              value: function (e) {
                this.handleDragStart(),
                  this.handleDrag(e),
                  this.handleDragEnd();
              },
            },
            {
              key: "addEventListeners",
              value: function () {
                var e;
                ((e = this).listeners.onCursorMoveLoopEnd = function (t) {
                  t.preventDefault();
                  var n =
                    (t.clientX || ((t.touches || [])[0] || {}).clientX) -
                    e.elements.totalBar.getBoundingClientRect().left;
                  n < 0
                    ? (n = 0)
                    : n > e.elements.totalBar.offsetWidth &&
                      (n = e.elements.totalBar.offsetWidth),
                    e.elements.runningBar.offsetWidth >=
                      e.elements.loopBar.offsetWidth &&
                      (e.elements.runningBar.style.width =
                        e.elements.loopBar.offsetWidth + "px"),
                    e.settings.loopLastPositionXPxls - n < 0
                      ? (e.elements.loopBar.style.width =
                          Math.abs(e.settings.loopLastPositionXPxls - n) + "px")
                      : ((e.elements.loopBar.style.left = n + "px"),
                        (e.settings.loopLastPositionXPxls = n)),
                    (e.settings.loopEndMillisecond = Math.round(
                      (e.clip.duration *
                        ((parseFloat(e.elements.loopBar.style.left) || 0) +
                          parseFloat(e.elements.loopBar.style.width))) /
                        e.elements.totalBar.offsetWidth
                    )),
                    e.settings.loopEndMillisecond <
                      e.clip.runTimeInfo.currentMillisecond &&
                      (e.settings.loopJourney = !0),
                    e.settings.loopStartMillisecond >
                      e.settings.loopEndMillisecond &&
                      ((e.settings.loopStartMillisecond =
                        e.settings.loopEndMillisecond),
                      (e.settings.loopJourney = !0)),
                    (e.elements.loopEndTime.innerHTML =
                      e.settings.loopEndMillisecond),
                    (e.elements.loopStartTime.innerHTML =
                      e.settings.loopStartMillisecond);
                }),
                  (e.listeners.onMouseUpLoopEnd = function (t) {
                    if (
                      ((e.elements.listenerHelper.style.pointerEvents = "none"),
                      (e.settings.resizeLoop = !1),
                      t.preventDefault(),
                      (e.elements.runningBar.style.width =
                        (e.elements.runningBar.offsetWidth /
                          e.elements.loopBar.offsetWidth) *
                          100 +
                        "%"),
                      (e.elements.loopBar.style.left =
                        (e.elements.loopBar.offsetLeft /
                          e.elements.totalBar.offsetWidth) *
                          100 +
                        "%"),
                      (e.elements.loopBar.style.width =
                        (e.elements.loopBar.offsetWidth /
                          e.elements.totalBar.offsetWidth) *
                          100 +
                        "%"),
                      e.settings.loopJourney &&
                        (e.createProgressDrag(
                          e.elements.runningBar.offsetWidth
                        ),
                        (e.settings.loopJourney = !1)),
                      C("mouseup", e.listeners.onMouseUpLoopEnd, !1),
                      C("touchend", e.listeners.onMouseUpLoopEnd, !1),
                      C("mousemove", e.listeners.onCursorMoveLoopEnd, !1),
                      C("touchmove", e.listeners.onCursorMoveLoopEnd, !1),
                      e.elements.loopBar.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.elements.loopBar.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDown,
                        { passive: !0 },
                        !1
                      ),
                      e.settings.playAfterResize)
                    ) {
                      var n;
                      if ("idle" === e.clip.runTimeInfo.state)
                        (n =
                          e.clip.speed >= 0
                            ? e.settings.loopStartMillisecond + 1
                            : e.settings.loopEndMillisecond - 1),
                          (e.settings.needsUpdate = !0),
                          e.createJourney(n, {
                            before: "pause",
                            after: "play",
                          });
                      else if ("completed" === e.clip.runTimeInfo.state) {
                        var i;
                        (i =
                          e.clip.speed >= 0
                            ? e.settings.loopStartMillisecond + 1
                            : e.settings.loopEndMillisecond - 1),
                          (e.settings.needsUpdate = !0),
                          e.createJourney(i, {
                            before: "pause",
                            after: "play",
                          });
                      } else e.clip.play();
                      e.settings.playAfterResize = !1;
                    }
                  }),
                  (e.listeners.onMouseDownLoopEnd = function (t) {
                    (e.elements.listenerHelper.style.pointerEvents = "auto"),
                      (e.settings.resizeLoop = !0),
                      (e.settings.needsUpdate = !0),
                      "playing" === e.clip.runTimeInfo.state &&
                        (e.clip.pause(), (e.settings.playAfterResize = !0)),
                      t.preventDefault(),
                      (e.elements.runningBar.style.width =
                        e.elements.runningBar.offsetWidth + "px"),
                      (e.elements.loopBar.style.left =
                        e.elements.loopBar.offsetLeft + "px"),
                      (e.elements.loopBar.style.width =
                        e.elements.loopBar.offsetWidth + "px"),
                      e.elements.loopBar.removeEventListener(
                        "mousedown",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.elements.loopBar.removeEventListener(
                        "touchstart",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.listeners.onCursorMoveLoopEnd(t),
                      k("mouseup", e.listeners.onMouseUpLoopEnd, !1),
                      k("touchend", e.listeners.onMouseUpLoopEnd, !1),
                      k("mousemove", e.listeners.onCursorMoveLoopEnd, !1),
                      k("touchmove", e.listeners.onCursorMoveLoopEnd, !1);
                  }),
                  e.elements.loopBarEnd.addEventListener(
                    "mousedown",
                    e.listeners.onMouseDownLoopEnd,
                    !1
                  ),
                  e.elements.loopBarEnd.addEventListener(
                    "touchstart",
                    e.listeners.onMouseDownLoopEnd,
                    { passive: !1 },
                    !1
                  ),
                  (function (e) {
                    (e.listeners.onCursorMove = function (t) {
                      t.preventDefault();
                      var n =
                        (t.clientX || ((t.touches || [])[0] || {}).clientX) -
                        e.elements.loopBar.getBoundingClientRect().left;
                      n < 0
                        ? (n = 0)
                        : n > e.elements.loopBar.offsetWidth &&
                          (n = e.elements.loopBar.offsetWidth),
                        e.handleDrag(n);
                    }),
                      (e.listeners.onMouseUp = function () {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "none"),
                          O("mouseup", e.listeners.onMouseUp, !1),
                          O("touchend", e.listeners.onMouseUp, !1),
                          O("mousemove", e.listeners.onCursorMove, !1),
                          O("touchmove", e.listeners.onCursorMove, !1),
                          e.handleDragEnd(e.settings);
                      }),
                      (e.listeners.onMouseDown = function (t) {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "auto"),
                          "playing" === e.clip.runTimeInfo.state &&
                            (e.settings.playAfterResize = !0),
                          e.handleDragStart(e.clip),
                          e.listeners.onCursorMove(t),
                          E("mouseup", e.listeners.onMouseUp, !1),
                          E("touchend", e.listeners.onMouseUp, !1),
                          E("mousemove", e.listeners.onCursorMove, !1),
                          E("touchmove", e.listeners.onCursorMove, !1);
                      }),
                      e.elements.loopBar.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.elements.loopBar.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDown,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    (e.listeners.onCursorMoveLoopStart = function (t) {
                      t.preventDefault();
                      var n = t.clientX || ((t.touches || [])[0] || {}).clientX,
                        i = e.elements.totalBar.getBoundingClientRect(),
                        r = Math.round(n - i.left),
                        s = Math.round(
                          (e.settings.loopEndMillisecond / e.clip.duration) *
                            e.elements.totalBar.offsetWidth
                        );
                      r < 0
                        ? (r = 0)
                        : r > e.elements.totalBar.offsetWidth &&
                          (r = e.elements.totalBar.offsetWidth);
                      var o =
                        (e.clip.runTimeInfo.currentMillisecond /
                          e.clip.duration) *
                          e.elements.totalBar.offsetWidth -
                        r;
                      (e.elements.loopBar.style.left = r + "px"),
                        (e.elements.loopBar.style.width = s - r + "px"),
                        (e.elements.runningBar.style.width = o + "px"),
                        (e.settings.loopLastPositionXPxls = r),
                        (e.settings.loopStartMillisecond = Math.round(
                          (e.clip.duration * e.elements.loopBar.offsetLeft) /
                            e.elements.totalBar.offsetWidth
                        )),
                        e.settings.loopEndMillisecond <
                          e.settings.loopStartMillisecond &&
                          ((e.settings.loopEndMillisecond =
                            e.settings.loopStartMillisecond),
                          (e.elements.loopBar.style.width = "0px"),
                          (e.elements.runningBar.style.width = "0px")),
                        (e.elements.loopEndTime.innerHTML =
                          e.settings.loopEndMillisecond),
                        (e.elements.loopStartTime.innerHTML =
                          e.settings.loopStartMillisecond),
                        e.settings.loopStartMillisecond >
                          e.clip.runTimeInfo.currentMillisecond &&
                          (e.settings.loopJourney = !0);
                    }),
                      (e.listeners.onMouseUpLoopStart = function (t) {
                        var n;
                        (e.elements.listenerHelper.style.pointerEvents =
                          "none"),
                          (e.settings.resizeLoop = !1),
                          t.preventDefault(),
                          e.settings.loopJourney &&
                            (e.createProgressDrag(
                              e.elements.runningBar.offsetWidth
                            ),
                            (e.settings.loopJourney = !1)),
                          (e.elements.loopBar.style.left =
                            (e.elements.loopBar.offsetLeft /
                              e.elements.totalBar.offsetWidth) *
                              100 +
                            "%"),
                          (e.elements.loopBar.style.width =
                            (e.elements.loopBar.offsetWidth /
                              e.elements.totalBar.offsetWidth) *
                              100 +
                            "%"),
                          (e.settings.loopStartMillisecond = Math.round(
                            (e.clip.duration * e.elements.loopBar.offsetLeft) /
                              e.elements.totalBar.offsetWidth
                          )),
                          (e.elements.runningBar.style.width =
                            (e.elements.runningBar.offsetWidth /
                              e.elements.loopBar.offsetWidth) *
                              100 +
                            "%"),
                          w("mouseup", e.listeners.onMouseUpLoopStart, !1),
                          w("touchend", e.listeners.onMouseUpLoopStart, !1),
                          w("mousemove", e.listeners.onCursorMoveLoopStart, !1),
                          w("touchmove", e.listeners.onCursorMoveLoopStart, !1),
                          e.elements.loopBar.addEventListener(
                            "mousedown",
                            e.listeners.onMouseDown,
                            !1
                          ),
                          e.elements.loopBar.addEventListener(
                            "touchstart",
                            e.listeners.onMouseDown,
                            { passive: !0 },
                            !1
                          ),
                          e.settings.playAfterResize &&
                            ("idle" === e.clip.runTimeInfo.state
                              ? ((n =
                                  e.clip.speed >= 0
                                    ? e.settings.loopStartMillisecond + 1
                                    : e.settings.loopEndMillisecond - 1),
                                (e.settings.needsUpdate = !0),
                                e.createJourney(n, {
                                  before: "pause",
                                  after: "play",
                                }))
                              : e.clip.play(),
                            (e.settings.playAfterResize = !1));
                      }),
                      (e.listeners.onMouseDownLoopStart = function (t) {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "auto"),
                          (e.settings.resizeLoop = !0),
                          t.preventDefault(),
                          (e.settings.needsUpdate = !0),
                          "playing" === e.clip.runTimeInfo.state &&
                            (e.clip.pause(), (e.settings.playAfterResize = !0)),
                          e.elements.loopBar.removeEventListener(
                            "mousedown",
                            e.listeners.onMouseDown,
                            !1
                          ),
                          e.elements.loopBar.removeEventListener(
                            "touchstart",
                            e.listeners.onMouseDown,
                            !1
                          ),
                          e.listeners.onCursorMoveLoopStart(t),
                          x("mouseup", e.listeners.onMouseUpLoopStart, !1),
                          x("touchend", e.listeners.onMouseUpLoopStart, !1),
                          x("mousemove", e.listeners.onCursorMoveLoopStart, !1),
                          x("touchmove", e.listeners.onCursorMoveLoopStart, !1);
                      }),
                      e.elements.loopBarStart.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDownLoopStart,
                        !1
                      ),
                      e.elements.loopBarStart.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDownLoopStart,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    (e.listeners.editableLoopStartTime = function () {
                      (e.elements.editableLoopStartTime.value =
                        e.elements.loopStartTime.innerHTML),
                        e.elements.loopStartTime.replaceWith(
                          e.elements.editableLoopStartTime
                        ),
                        e.elements.editableLoopStartTime.focus();
                    }),
                      (e.listeners.editableLoopEndTime = function () {
                        (e.elements.editableLoopEndTime.value =
                          e.elements.loopEndTime.innerHTML),
                          e.elements.loopEndTime.replaceWith(
                            e.elements.editableLoopEndTime
                          ),
                          e.elements.editableLoopEndTime.focus();
                      }),
                      (e.elements.editableLoopEndTime.onkeydown = e.elements.editableLoopStartTime.onkeydown = function (
                        t
                      ) {
                        t.preventDefault(),
                          13 === t.keyCode &&
                            (e.elements.editableLoopStartTime.onfocusout(),
                            e.elements.editableLoopEndTime.onfocusout()),
                          8 === t.keyCode &&
                            (t.target.value = t.target.value
                              .toString()
                              .substring(
                                0,
                                t.target.value.toString().length - 1
                              )),
                          13 === t.keyCode && t.target.blur();
                        var n = parseFloat(
                          (t.target.value || 0).toString() + t.key
                        );
                        if (!(n > e.clip.duration))
                          if (
                            ((t.target.value = n),
                            t.target === e.elements.editableLoopStartTime)
                          ) {
                            var i = e.elements.totalBar.getBoundingClientRect(),
                              r = {
                                preventDefault: function () {},
                                clientX:
                                  (e.elements.totalBar.offsetWidth /
                                    e.clip.duration) *
                                    t.target.value +
                                  i.left,
                              };
                            e.listeners.onMouseDownLoopStart(r),
                              e.listeners.onCursorMoveLoopStart(r),
                              e.listeners.onMouseUpLoopStart(r);
                          } else if (
                            t.target === e.elements.editableLoopEndTime
                          ) {
                            var s = e.elements.totalBar.getBoundingClientRect(),
                              o = {
                                preventDefault: function () {},
                                clientX:
                                  (e.elements.totalBar.offsetWidth /
                                    e.clip.duration) *
                                    t.target.value +
                                  s.left,
                              };
                            e.listeners.onMouseDownLoopEnd(o),
                              e.listeners.onCursorMoveLoopEnd(o),
                              e.listeners.onMouseUpLoopEnd(o);
                          }
                      }),
                      (e.elements.loopStartTime.onclick =
                        e.listeners.editableLoopStartTime),
                      (e.elements.loopEndTime.onclick =
                        e.listeners.editableLoopEndTime),
                      (e.elements.editableLoopStartTime.onfocusout = function () {
                        e.elements.editableLoopStartTime.replaceWith(
                          e.elements.loopStartTime
                        );
                      }),
                      (e.elements.editableLoopEndTime.onfocusout = function () {
                        e.elements.editableLoopEndTime.replaceWith(
                          e.elements.loopEndTime
                        );
                      });
                  })(this),
                  (function (e) {
                    var t = !1;
                    e.elements.volumeBtn.onclick = function () {
                      if (e.settings.volumeMute) {
                        (e.elements.volumeBarActive.style.width =
                          100 * e.settings.previousVolume + "%"),
                          e.clip.setVolume(e.settings.previousVolume),
                          (e.settings.volumeMute = !1);
                        var t = document.createElement("span");
                        (t.innerHTML = p.volumeSVG),
                          e.elements.volumeBtn
                            .getElementsByTagName("svg")[0]
                            .replaceWith(t);
                      } else {
                        (e.settings.volumeMute = !0),
                          (e.elements.volumeBarActive.style.width = "0%"),
                          e.clip.setVolume(0);
                        var n = document.createElement("span");
                        (n.innerHTML = p.volumeMuteSVG),
                          e.elements.volumeBtn
                            .getElementsByTagName("svg")[0]
                            .replaceWith(n);
                      }
                      e.eventBroadcast(
                        "volume-change",
                        e.settings.previousVolume
                      ),
                        e.eventBroadcast("mute-change", e.settings.volumeMute);
                    };
                    var n = !1;
                    (e.elements.volumeBtn.onmouseover = function () {
                      (n = !0),
                        e.elements.volumeCursor.classList.add(
                          "".concat(e.name, "-volume-cursor-transition")
                        ),
                        e.elements.volumeBar.classList.add(
                          "".concat(e.name, "-volume-width-transition")
                        ),
                        e.elements.volumeBarHelper.classList.add(
                          "".concat(e.name, "-volume-width-transition")
                        ),
                        e.elements.timeDisplay.classList.add(
                          "".concat(e.name, "-time-width-transition")
                        );
                    }),
                      (y(
                        "".concat(e.name, "-left-controls")
                      ).onmouseout = function () {
                        if (n && !t) {
                          var i =
                            event.toElement ||
                            event.relatedTarget ||
                            event.target;
                          (function (e, t) {
                            for (var n = t.parentNode; null != n; ) {
                              if (n == e) return !0;
                              n = n.parentNode;
                            }
                            return !1;
                          })(y("".concat(e.name, "-left-controls")), i) ||
                            i === y("".concat(e.name, "-left-controls")) ||
                            ((n = !1),
                            e.elements.volumeCursor.classList.remove(
                              "".concat(e.name, "-volume-cursor-transition")
                            ),
                            e.elements.volumeBar.classList.remove(
                              "".concat(e.name, "-volume-width-transition")
                            ),
                            e.elements.volumeBarHelper.classList.remove(
                              "".concat(e.name, "-volume-width-transition")
                            ),
                            e.elements.timeDisplay.classList.remove(
                              "".concat(e.name, "-time-width-transition")
                            ));
                        }
                      }),
                      (e.listeners.onCursorMoveVolumeBar = function (t) {
                        t.preventDefault();
                        var n =
                          (t.clientX || ((t.touches || [])[0] || {}).clientX) -
                          e.elements.volumeBarHelper.getBoundingClientRect()
                            .left;
                        if (
                          (n < 0
                            ? (n = 0)
                            : n > e.elements.volumeBarHelper.offsetWidth &&
                              (n = e.elements.volumeBarHelper.offsetWidth),
                          (e.settings.volume = Number(
                            (
                              n / e.elements.volumeBarHelper.offsetWidth
                            ).toFixed(2)
                          )),
                          (e.elements.volumeBarActive.style.width =
                            100 * e.settings.volume + "%"),
                          e.clip.setVolume(e.settings.volume),
                          e.settings.volume > 0)
                        ) {
                          e.settings.volumeMute = !1;
                          var i = document.createElement("span");
                          (i.innerHTML = p.volumeSVG),
                            e.elements.volumeBtn
                              .getElementsByTagName("svg")[0]
                              .replaceWith(i);
                        } else if (0 === e.settings.volume) {
                          e.settings.volumeMute = !0;
                          var r = document.createElement("span");
                          (r.innerHTML = p.volumeMuteSVG),
                            e.elements.volumeBtn
                              .getElementsByTagName("svg")[0]
                              .replaceWith(r);
                        }
                        e.eventBroadcast("volume-change", e.settings.volume),
                          e.eventBroadcast(
                            "mute-change",
                            e.settings.volumeMute
                          );
                      }),
                      (e.listeners.onMouseUpVolumeBar = function (n) {
                        (t = !1),
                          (e.elements.listenerHelper.style.pointerEvents =
                            "none"),
                          n.preventDefault(),
                          e.settings.volume > 0 &&
                            (e.settings.previousVolume = e.settings.volume),
                          g("mouseup", e.listeners.onMouseUpVolumeBar, !1),
                          g("touchend", e.listeners.onMouseUpVolumeBar, !1),
                          g("mousemove", e.listeners.onCursorMoveVolumeBar, !1),
                          g("touchmove", e.listeners.onCursorMoveVolumeBar, !1);
                      }),
                      (e.listeners.onMouseDownVolumeBar = function (n) {
                        (t = !0),
                          (e.elements.listenerHelper.style.pointerEvents =
                            "auto"),
                          n.preventDefault(),
                          e.listeners.onCursorMoveVolumeBar(n),
                          v("mouseup", e.listeners.onMouseUpVolumeBar, !1),
                          v("touchend", e.listeners.onMouseUpVolumeBar, !1),
                          v("mousemove", e.listeners.onCursorMoveVolumeBar, !1),
                          v("touchmove", e.listeners.onCursorMoveVolumeBar, !1);
                      }),
                      e.elements.volumeBarHelper.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDownVolumeBar,
                        !1
                      ),
                      e.elements.volumeCursor.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDownVolumeBar,
                        !1
                      ),
                      e.elements.volumeBarHelper.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDownVolumeBar,
                        { passive: !1 },
                        !1
                      ),
                      e.elements.volumeCursor.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDownVolumeBar,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    e.elements.statusButton.onclick = function (t) {
                      return (
                        t.preventDefault(),
                        "playing" === e.clip.runTimeInfo.state
                          ? e.clip.pause()
                          : ("paused" !== e.clip.runTimeInfo.state &&
                              "idle" !== e.clip.runTimeInfo.state &&
                              "transitional" !== e.clip.runTimeInfo.state &&
                              "armed" !== e.clip.runTimeInfo.state) ||
                            e.clip.play(),
                        !1
                      );
                    };
                  })(this),
                  (function (e) {
                    (e.elements.settingsShowIndicator.onclick = function (t) {
                      return T(e, t);
                    }),
                      (e.elements.settingsPointerEvents.onclick = function (t) {
                        return S(e, t);
                      }),
                      (e.elements.settingsShowVolume.onclick = function (t) {
                        return A(e, t);
                      }),
                      (e.elements.settingsShowPreview.onclick = function (t) {
                        return _(e, t);
                      }),
                      (e.elements.settingsButton.onclick = function (t) {
                        t.preventDefault();
                        var n = P("".concat(e.name, "-controls")),
                          i = function t(n) {
                            if (e.elements.settingsPanel.contains(n.target))
                              return !0;
                            e.elements.settingsPanel.classList.toggle(
                              "".concat(e.name, "-hide")
                            ),
                              e.elements.settingsPanel.classList.toggle(
                                "m-fadeOut"
                              ),
                              e.elements.settingsPanel.classList.toggle(
                                "m-fadeIn"
                              ),
                              e.elements.settingsPanel.className.includes(
                                "m-fadeOut"
                              ) &&
                                (M("click", t, !1),
                                e.eventBroadcast("state-change", e.state));
                          };
                        e.elements.settingsPanel.className.includes("m-fadeOut")
                          ? (n.classList.value.includes(
                              "force-show-controls"
                            ) || n.classList.toggle("force-show-controls"),
                            I("click", i, !1))
                          : M("click", i, !1);
                      });
                  })(this),
                  (function (e) {
                    e.elements.settingsSpeedButtonShow.onclick = e.elements.settingsSpeedButtonHide.onclick = function (
                      t
                    ) {
                      t.preventDefault(),
                        e.elements.settingsPanel.classList.toggle(
                          "".concat(e.name, "-settings-speed-panel")
                        ),
                        e.elements.settingsPanel.className.includes(
                          "".concat(e.name, "-settings-speed-panel")
                        )
                          ? ((e.elements.settingsMainPanel.style.display =
                              "none"),
                            (e.elements.settingsSpeedPanel.style.display =
                              "block"))
                          : ((e.elements.settingsSpeedPanel.style.display =
                              "none"),
                            (e.elements.settingsMainPanel.style.display =
                              "block"));
                    };
                    var t = function (t) {
                        t.preventDefault();
                        var n = e.elements.speedBar.getBoundingClientRect(),
                          i =
                            (t.clientY ||
                              ((t.touches || [])[0] || {}).clientY) - n.top;
                        (i -= 8) < 0
                          ? (i = 0)
                          : i > e.elements.speedBar.offsetHeight - 16 &&
                            (i = e.elements.speedBar.offsetHeight - 16);
                        var r =
                            -1 *
                            ((i = Math.floor(i)) /
                              (16 * (e.options.speedValues.length - 1)) -
                              1),
                          s = 1 / (e.options.speedValues.length - 1),
                          o = e.calculateSpeed(s, e.options.speedValues, r);
                        (D("".concat(e.name, "-speed-runtime")).innerHTML =
                          o + "0"),
                          (D("".concat(e.name, "-speed-cursor")).style.top =
                            i + "px"),
                          (e.clip.executionSpeed = o),
                          e.eventBroadcast(
                            "speed-change",
                            e.clip.executionSpeed
                          );
                      },
                      n = function n(i) {
                        var r;
                        (e.elements.listenerHelper.style.pointerEvents =
                          "none"),
                          i.preventDefault(),
                          j("mouseup", n, !1),
                          j("touchend", n, !1),
                          j("mousemove", t, !1),
                          j("touchmove", t, !1),
                          (D("".concat(e.name, "-speed-runtime")).innerHTML =
                            "Speed"),
                          (r = 1 == e.clip.speed ? "Normal" : e.clip.speed),
                          (e.elements.speedCurrent.innerHTML = r);
                      },
                      i = function (i) {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "auto"),
                          i.preventDefault(),
                          t(i),
                          B("mouseup", n, !1),
                          B("touchend", n, !1),
                          B("mousemove", t, !1),
                          B("touchmove", t, !1);
                      };
                    e.elements.speedBarHelper.addEventListener(
                      "mousedown",
                      i,
                      !1
                    ),
                      e.elements.speedBarHelper.addEventListener(
                        "touchstart",
                        i,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    e.elements.loopButton.onclick = function () {
                      return N(e);
                    };
                  })(this),
                  (function (e) {
                    ($(
                      "".concat(e.name, "-controls")
                    ).onmouseover = function () {
                      e.settings.loopActivated &&
                        (e.elements.loopBarStart.classList.remove("m-fadeOut"),
                        e.elements.loopBarEnd.classList.remove("m-fadeOut"),
                        e.elements.loopBarStart.classList.add("m-fadeIn"),
                        e.elements.loopBarEnd.classList.add("m-fadeIn"));
                    }),
                      ($("".concat(e.name, "-controls")).onmouseout = function (
                        t
                      ) {
                        var n = t.toElement || t.relatedTarget || t.target;
                        z(this, n) ||
                          n === this ||
                          (e.settings.loopActivated &&
                            (e.elements.loopBarStart.classList.add("m-fadeOut"),
                            e.elements.loopBarEnd.classList.add("m-fadeOut"),
                            e.elements.loopBarStart.classList.remove(
                              "m-fadeIn"
                            ),
                            e.elements.loopBarEnd.classList.remove(
                              "m-fadeIn"
                            )));
                      });
                    var t = !1;
                    ($("".concat(e.name, "-controls")).ontouchstart = function (
                      n
                    ) {
                      var i = n.toElement || n.relatedTarget || n.target;
                      z(e.elements.statusButton, i) ||
                        i === e.elements.statusButton ||
                        z(e.elements.settingsButton, i) ||
                        i === e.elements.settingsButton ||
                        z(e.elements.fullScreenButton, i) ||
                        i === e.elements.fullScreenButton ||
                        z(e.elements.loopButton, i) ||
                        i === e.elements.loopButton ||
                        z(e.elements.totalBar, i) ||
                        i === e.elements.totalBar ||
                        (e.elements.settings.showVolume &&
                          ((e.elements.volumeControl.className = "".concat(
                            e.name,
                            "-volume-width-transition"
                          )),
                          (e.elements.volumeBar.className = "".concat(
                            e.name,
                            "-volume-width-transition"
                          )),
                          (e.elements.volumeBarHelper.className = "".concat(
                            e.name,
                            "-volume-width-transition"
                          ))),
                        (e.elements.timeDisplay.className = "".concat(
                          e.name,
                          "-time-width-transition"
                        )),
                        (e.elements.volumeCursor.className = "".concat(
                          e.name,
                          "-volume-cursor-transition"
                        )),
                        (t = !0));
                    }),
                      window.addEventListener("touchstart", function (n) {
                        var i = n.toElement || n.relatedTarget || n.target;
                        z($("".concat(e.name, "-controls")), i) ||
                          i === $("".concat(e.name, "-controls")) ||
                          (t &&
                            ((e.elements.volumeControl.className = ""),
                            (e.elements.volumeBar.className = ""),
                            (e.elements.volumeBarHelper.className = ""),
                            (e.elements.timeDisplay.className = ""),
                            (e.elements.volumeCursor.className = "")));
                      });
                  })(this),
                  (function (e) {
                    e.elements.fullScreenButton.onclick = function () {
                      return R(e);
                    };
                  })(this),
                  (function (e) {
                    e.elements.donkeyclipButton.addEventListener(
                      "click",
                      function () {
                        var t = q(),
                          n = window.open(
                            "https://donkeyclip.com?u=".concat(t)
                          ),
                          i = e.clip.exportDefinition(),
                          r = e.clipClass;
                        window.addEventListener(
                          "message",
                          function (e) {
                            e.data === t &&
                              n.postMessage(
                                JSON.stringify({
                                  definition: i,
                                  clipClass: r,
                                  u: t,
                                }),
                                "*"
                              );
                          },
                          !1
                        );
                      }
                    );
                  })(this),
                  (function (e) {
                    if (
                      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      )
                    ) {
                      var t = function () {
                          e.options.preview &&
                            (G(
                              "".concat(e.name, "-hover-display")
                            ).classList.toggle("m-fadeIn"),
                            G(
                              "".concat(e.name, "-hover-display")
                            ).classList.toggle("m-fadeOut"),
                            (e.elements.loopBar.onmousemove = i));
                        },
                        n = function n() {
                          e.options.preview &&
                            (t(),
                            (e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = t),
                            (e.elements.loopBar.onmousemove = i),
                            U("mouseup", n, !1),
                            U("touchend", n, !1),
                            U("mousemove", i, !1),
                            U("touchmove", i, !1));
                        };
                      (e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = t),
                        (e.elements.loopBar.onmousedown = function () {
                          e.options.preview &&
                            ((e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = null),
                            (e.elements.loopBar.onmousemove = null),
                            W("mouseup", n, !1),
                            W("touchend", n, !1),
                            W("mousemove", i, !1),
                            W("touchmove", i, !1));
                        }),
                        (e.elements.loopBar.onmouseup = function () {
                          e.options.preview &&
                            (U("mouseup", n, !1),
                            U("touchend", n, !1),
                            U("mousemove", i, !1),
                            U("touchmove", i, !1),
                            (e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = t),
                            (e.elements.loopBar.onmousemove = i));
                        });
                      var i = function (t) {
                        var n = t.clientX,
                          i = e.elements.loopBar.getBoundingClientRect();
                        if (
                          n - i.left + e.settings.loopLastPositionXPxls >
                            e.settings.loopLastPositionXPxls +
                              e.elements.loopBar.offsetWidth &&
                          !e.settings.resizeLoop
                        )
                          G(
                            "".concat(e.name, "-hover-millisecond")
                          ).innerHTML = e.timeFormat(
                            e.settings.loopEndMillisecond
                          );
                        else if (n - i.left < 0 && !e.settings.resizeLoop)
                          G(
                            "".concat(e.name, "-hover-millisecond")
                          ).innerHTML = e.timeFormat(
                            e.settings.loopStartMillisecond
                          );
                        else {
                          var r = n - i.left + e.settings.loopLastPositionXPxls;
                          r < 0 && (r = 0);
                          var s =
                              G("".concat(e.name, "-hover-display"))
                                .offsetWidth / 2,
                            o =
                              G("".concat(e.name, "-hover-display"))
                                .offsetWidth / 2,
                            a = r - o;
                          r - s < 0
                            ? (a = 0)
                            : r + s > e.elements.totalBar.offsetWidth &&
                              (a = e.elements.totalBar.offsetWidth - o - s);
                          var l = Math.round(
                            (r / e.elements.totalBar.offsetWidth) *
                              e.clip.duration
                          );
                          if (e.options.preview) {
                            var c = l / e.clip.duration;
                            e.previewClip.onProgress(c, l);
                          }
                          (G(
                            "".concat(e.name, "-hover-millisecond")
                          ).innerHTML = e.timeFormat(l)),
                            (G("".concat(e.name, "-hover-display")).style.left =
                              a + "px");
                        }
                      };
                    }
                  })(this),
                  (function (e) {
                    document.addEventListener("fullscreenchange", function () {
                      e.elements.mcPlayer.classList.toggle("full-screen"),
                        e.clip.props.host.classList.toggle("full-screen"),
                        e.options.preview && e.setPreviewDimentions();
                    }),
                      document.addEventListener(
                        "webkitfullscreenchange",
                        function () {
                          e.elements.mcPlayer.classList.toggle("full-screen"),
                            e.clip.props.host.classList.toggle("full-screen"),
                            e.options.preview && e.setPreviewDimentions();
                        }
                      ),
                      document.addEventListener(
                        "mozfullscreenchange",
                        function () {
                          e.elements.mcPlayer.classList.toggle("full-screen"),
                            e.clip.props.host.classList.toggle("full-screen"),
                            e.options.preview && e.setPreviewDimentions();
                        }
                      ),
                      document.addEventListener(
                        "MSFullscreenChange",
                        function () {
                          e.elements.mcPlayer.classList.toggle("full-screen"),
                            e.clip.props.host.classList.toggle("full-screen"),
                            e.options.preview && e.setPreviewDimentions();
                        }
                      ),
                      J("body")[0].addEventListener("click", function (t) {
                        if (
                          t.target.className ===
                          "".concat(e.name, "-speed-value")
                        ) {
                          var n = t.target.dataset.speedValue;
                          (e.clip.executionSpeed = t.target.dataset.speedValue),
                            (n = 1 == e.clip.speed ? "Normal" : e.clip.speed),
                            (e.elements.speedCurrent.innerHTML = n);
                          var i = 1 / (e.options.speedValues.length - 1),
                            r =
                              -1 *
                              (t.target.dataset.zone * i - 1) *
                              (16 * (e.options.speedValues.length - 1));
                          K("".concat(e.name, "-speed-cursor")).style.top =
                            r + "px";
                        }
                      });
                  })(this);
              },
            },
            {
              key: "launchIntoFullscreen",
              value: function (e) {
                this.options.preview && this.setPreviewDimentions(),
                  e.requestFullscreen
                    ? e.requestFullscreen()
                    : e.mozRequestFullScreen
                    ? e.mozRequestFullScreen()
                    : e.webkitRequestFullscreen
                    ? e.webkitRequestFullscreen()
                    : e.msRequestFullscreen && e.msRequestFullscreen();
              },
            },
            {
              key: "exitFullscreen",
              value: function () {
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen &&
                    document.webkitExitFullscreen();
              },
            },
            {
              key: "setTheme",
              value: function () {
                Q(this.name + "-style") &&
                  Z("head")[0].removeChild(Q(this.name + "-style")),
                  this.options.theme.replace(/\s\s+/g, " "),
                  this.options.theme.trim(),
                  this.options.theme.includes("on-top") ||
                    this.options.theme.includes("position-bottom") ||
                    (this.options.theme += " on-top");
                var e = {};
                for (var t in this.options.theme.split(" ")) {
                  var n = d(this.options.theme.split(" ")[t], this.name);
                  for (var i in n || {}) e[i] = n[i];
                }
                var r = (function (e, t, n) {
                    return "\n#"
                      .concat(t, ", #")
                      .concat(
                        t,
                        " *{\n  font-family:'Ubuntu' !important;\n}\n#"
                      )
                      .concat(t, " .background {\n  background-color: ")
                      .concat(n.backgroundColor, ";\n  width:100%;\n  height:")
                      .concat(
                        e["background-height"],
                        ";;\n  position:absolute;\n  top:0px;\n  left:0px;\n  z-index:-2000;\n}\n\n#"
                      )
                      .concat(t, " .full-screen #")
                      .concat(
                        t,
                        "-controls {\n  position:fixed;\n  left:0px;\n  bottom:0px;\n}\n\n#"
                      )
                      .concat(t, " .full-screen #")
                      .concat(
                        t,
                        "-settings-panel {\n  position:fixed;\n  bottom: 45px;\n}\n\n#"
                      )
                      .concat(t, " .svg,#")
                      .concat(t, " .svg *,#")
                      .concat(t, " svg,#")
                      .concat(t, " svg *  {\n  fill: ")
                      .concat(e["svg-color"], ";\n}\n\n#")
                      .concat(t, " .svg.arrow * {\n  stroke: ")
                      .concat(e["svg-color"], ";\n  fill: transparent;\n}\n\n#")
                      .concat(t, " .pointer-event-panel {\n  height: ")
                      .concat(
                        e["pointer-event-panel-height"],
                        ";\n  display:flex;\n  align-items:center;\n  justify-content:center;\n}\n#"
                      )
                      .concat(
                        t,
                        "-pointer-event-panel{\n  width:100%;\n  position:absolute;\n  z-index:100;\n}\n#"
                      )
                      .concat(
                        t,
                        "-listener-helper{\n  width:100%;\n  height:calc( 100% - 45px );\n  position:absolute;\n  z-index:110;\n}\n#"
                      )
                      .concat(t, " .svg-selected svg{\n  fill: ")
                      .concat(e["svg-selected-color"], ";\n  stroke: ")
                      .concat(e["svg-selected-color"], ";\n}\n#")
                      .concat(
                        t,
                        "-hover-display{\n  display: flex;\n  visibility:hidden;\n  opacity:0;\n  background-color: black;\n  position: absolute;\n  bottom: 30px;\n  left: 0px;\n  align-items: flex-end;\n  justify-content: center;\n}\n#"
                      )
                      .concat(
                        t,
                        "-hover-display-clip{\n  width:100%;\n  height:100%;\n  overflow:hidden;\n  position:relative;\n}\n#"
                      )
                      .concat(t, "-hover-display-border{\n  border: ")
                      .concat(
                        e["preview-border"],
                        ";\n  position:absolute;\n  width:calc(100% - 4px);\n  height:calc(100% - 4px);\n  z-index:2;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-hover-millisecond {\n  font-weight:bold;\n  padding:3px;\n  height:18px;\n  margin:0px;\n  line-height:12px;\n  font-size:10px;\n  text-align: center;\n  min-width:20px;\n  max-width:100px;\n  z-index:2;\n  position:absolute;\n  bottom:-25px;\n}\n#"
                      )
                      .concat(t, ",\n#")
                      .concat(t, " ::before,\n#")
                      .concat(t, " :::after,\n#")
                      .concat(t, " div,\n#")
                      .concat(t, " p,\n#")
                      .concat(t, " span,\n#")
                      .concat(t, " ul,\n#")
                      .concat(
                        t,
                        " li {\n  font-weight: 400;\n  line-height: 1.9 !important;\n  color: "
                      )
                      .concat(
                        e.color,
                        ';\n  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;\n  box-sizing:border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n#'
                      )
                      .concat(
                        t,
                        " {\n  line-height: 1.9;\n  font-size: 12px;\n  overflow:hidden;\n  height: calc(100% + "
                      )
                      .concat(
                        e["controls-position"],
                        ");\n  width:100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  color: "
                      )
                      .concat(e.color, ";\n  pointer-events:auto;\n}\n\n#")
                      .concat(
                        t,
                        " .force-show-controls {\n  opacity:1 !important;\n}\n\n"
                      )
                      .concat(
                        n.theme.includes("position-bottom")
                          ? "\n    #".concat(
                              t,
                              "-controls {\n      opacity:1 !important;\n    }\n    "
                            )
                          : "#"
                              .concat(t, ":hover #")
                              .concat(
                                t,
                                "-controls {\n  opacity:1 !important;\n}\n"
                              ),
                        "\n\n#"
                      )
                      .concat(t, ":hover {\n  pointer-events:none;\n}\n\n#")
                      .concat(
                        t,
                        "-settings-speed-hide {\n  text-align:right;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .grad {\n  pointer-events:none !important;\n  background-image: linear-gradient(\n    rgba(0,0,0,00.001),\n    rgba(0,0,0,00.004),\n    rgba(0,0,0,00.007),\n    rgba(0,0,0,00.01),\n    rgba(0,0,0,0.04),\n    rgba(0,0,0,0.07),\n    rgba(0,0,0,0.1),\n    rgba(0,0,0,0.15),\n    rgba(0,0,0,0.2),\n    rgba(0,0,0,0.25),\n    rgba(0,0,0,0.3),\n    rgba(0,0,0,0.35),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.45),\n    rgba(0,0,0,0.5),\n    rgba(0,0,0,0.55),\n    rgba(0,0,0,0.6),\n    rgba(0,0,0,0.65),\n    rgba(0,0,0,0.7),\n    rgba(0,0,0,0.75),\n    rgba(0,0,0,0.8),\n    rgba(0,0,0,0.88)\n  );\n  position:absolute;\n  width:100%;\n  height:"
                      )
                      .concat(
                        e["grad-height"],
                        ";\n  left:0px;\n  bottom:0px;\n  z-index:-1;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-controls {\n  touch-action: none;\n  background-color: "
                      )
                      .concat(e["background-color"], ";\n  border: ")
                      .concat(
                        e["controls-border"],
                        ";\n  position: absolute;\n  bottom: "
                      )
                      .concat(
                        e["controls-bottom"],
                        ";\n  left: 0px;\n  width: 100%;\n  z-index:100;\n  height: 44px;\n  opacity:0;\n  display:flex;\n  border-radius: 6px;\n  align-items:center;\n  -webkit-transition: opacity 0.2s ease;\n  -moz-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-totalbar {\n  width: calc(100% - 20px);\n  height: 5px;\n  margin: 0px 10px 0px 10px;\n  background-color: "
                      )
                      .concat(
                        e["totalbar-color"],
                        ";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-loopbar {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: "
                      )
                      .concat(e["loopbar-color"], ";\n}\n\n#")
                      .concat(t, " .")
                      .concat(t, "-loop-boundaries::before {\n  ")
                      .concat(e["loopbar-boundaries-style::before"], "\n\n}\n#")
                      .concat(t, " .")
                      .concat(
                        t,
                        "-loop-boundaries {\n  transform:translate(-50%,-37%);\n  position:absolute;\n  width:18px;\n  background-color:"
                      )
                      .concat(
                        e["loopbar-boundaries-color"],
                        ";\n  height:18px;\n  border-radius:10px;\n  z-index:40;\n  "
                      )
                      .concat(e["loopbar-boundaries-style"], "\n}\n\n#")
                      .concat(t, " .")
                      .concat(t, "-loop-boundaries::after {\n  ")
                      .concat(
                        e["loopbar-boundaries-style::after"],
                        "\n\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-helperbar {\n  position: absolute;\n  height: 20px;\n  top: -10px;\n  left: 0px;\n  right: 0px;\n  z-index:2;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-runningbar {\n  position: relative;\n  width: 0px;\n  max-width:100%;\n  height: 100%;\n  background-color: "
                      )
                      .concat(e["runningbar-color"], ";\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  overflow:hidden;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e["cursor-color"],
                        ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-cursor::before {\n  ")
                      .concat(e["cursor-style::before"], "\n}\n\n#")
                      .concat(t, " #")
                      .concat(t, "-cursor::after {\n  ")
                      .concat(e["cursor-style::after"], "\n}\n\n#")
                      .concat(t, " #")
                      .concat(t, "-left-controls,#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-right-controls {\n    display: flex;\n    align-items:center;\n    height: 100%;\n    padding: 5px 5px 0px;\n}\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-right-controls {\n  position:absolute;\n  right:0px;\n}\n\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-left-controls > div,#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-right-controls > div {\n  display: inline-flex;\n  align-items:center;\n  margin:0 10px 0 10px;\n  overflow:hidden;\n}\n\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-time-display span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-status-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n}\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-status-btn svg{\n  width:20px;\n  height:18px;\n}\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-volume {\n  opacity: ")
                      .concat(
                        e["button-opacity"],
                        ";\n  position: relative;\n}\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volume-btn {\n  width: 20px;\n  height: 15px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volumebar {\n  width: 0px;\n  height: 3px;\n  background-color: "
                      )
                      .concat(
                        e["loopbar-color"],
                        ";\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n  position:relative;\n  left:5px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volumebar-helper {\n  position: absolute;\n    width: 0px;\n    height: 15px;\n    bottom: 0px;\n    z-index: 10;\n    left: 25px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volumebar-active {\n  position: relative;\n  width: 0%;\n  height: 100%;\n  background-color: "
                      )
                      .concat(
                        e.color,
                        ";\n  position:relative;\n  bottom:0px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volume-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e.color,
                        ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#"
                      )
                      .concat(t, " .")
                      .concat(
                        t,
                        "-loopbar-time {\n  width:auto;\n  height:12px;\n  background-color:"
                      )
                      .concat(
                        e["background-color"],
                        ";\n  line-height:10px;\n  font-size:10px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-loop-time {\n  margin: 7px;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-dc-btn {\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    width: 20px;\n    height: 15px;\n    margin: 7px 10px 5px 0px;\n    transform: scale(1.5,1.5);\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-loop-btn {\n  opacity: ")
                      .concat(
                        e["button-opacity"],
                        ";\n  display:flex;\n  align-items:center;\n}\n\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-btn {\n  overflow:hidden;\n  opacity: "
                      )
                      .concat(e["button-opacity"], ";\n}\n\n#")
                      .concat(t, " #")
                      .concat(t, "-full-screen-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n}\n\n#")
                      .concat(t, " .")
                      .concat(t, "-speed-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n  height: 14px;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel {\n  touch-action: none;\n  box-sizing: border-box;\n  position: absolute;\n  z-index:102;\n  background-color: "
                      )
                      .concat(e["settings-background-color"], ";\n  bottom: ")
                      .concat(e["settings-panel-bottom"], ";\n  border: ")
                      .concat(
                        e.border,
                        ";\n  right: 8px;\n  width: 167px;\n  padding: 5px;\n  margin: 0px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " .")
                      .concat(t, "-hide {\n  display:none !important;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-value-bar {\n  position: relative;\n  width: 5px;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-color"],
                        ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: "
                      )
                      .concat(
                        16 * n.speedValues.length,
                        "px;\n  float: left;\n  margin-right:15px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-value-helperbar {\n  position: absolute;\n  width: 25px;\n  height: "
                      )
                      .concat(
                        16 * n.speedValues.length,
                        "px;\n  float: left;\n  left: 18px;\n  z-index:10;\n}\n\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-speed-value-bar:hover,\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-value-helperbar {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-volumebar:hover,\n#")
                      .concat(t, " #")
                      .concat(t, "-volumebar-helper:hover,\n#")
                      .concat(t, " #")
                      .concat(t, "-volume-btn:hover,\n#")
                      .concat(t, " #")
                      .concat(t, "-volumebar:active,\n#")
                      .concat(t, " #")
                      .concat(t, "-volumebar-helper:active,\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volume-btn:active {\n  cursor:pointer;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-cursor {\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-cursor-color"],
                        ";\n  top: 0px;\n  left: 0px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-cursor div {\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-cursor-color"],
                        ";\n  left: -2.5px;\n  top: -4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-time-separator{\n  margin:0 3px;\n}\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-cursor:hover {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, " .")
                      .concat(
                        t,
                        "-speed-value-step {\n  width: 16px;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-color"],
                        ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: 2px;\n  margin-top: 7px;\n  margin-bottom: 7px;\n  float: left;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-value {\n  display: inline-block;\n  box-sizing: border-box;\n  height: "
                      )
                      .concat(
                        16 * n.speedValues.length,
                        "px;\n  text-align: left;\n}\n\n#"
                      )
                      .concat(t, " .")
                      .concat(
                        t,
                        "-speed-value {\n  box-sizing: border-box;\n  height: 16px;\n  font-size: 12px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-indicator {\n  font-size: 8px !important;\n  position: absolute;\n  bottom: -3px;\n  color: "
                      )
                      .concat(e.color, ";\n}\n\n\n#")
                      .concat(t, " #")
                      .concat(t, "-speed-settings li.no-hover { \n  height: ")
                      .concat(
                        16 * n.speedValues.length + 10 - 2,
                        "px !important; \n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-panel.")
                      .concat(
                        t,
                        "-settings-speed-panel {\n  overflow: hidden;\n  width: 92px;\n  position:absolute;\n  z-index:120;\n  /*height: "
                      )
                      .concat(
                        16 * n.speedValues.length + 32 + 20,
                        "px;*/\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-panel.")
                      .concat(t, "-settings-speed-panel .")
                      .concat(t, "-speed-btn {\n  float: left;\n}\n\n#")
                      .concat(t, " .")
                      .concat(
                        t,
                        "-settings-speed-panel ul:first-child {\n  text-align: right;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-current {\n  float: right;\n  padding-right: 10px\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-panel .")
                      .concat(t, "-speed-btn {\n  float: right;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-panel.")
                      .concat(
                        t,
                        "-settings-speed-panel ul li {\n  min-width: 70px;\n  display: flex;\n  height: 32px;\n  align-items: center;\n  justify-content:center;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li.no-hover:hover {\n  background-color: transparent;\n  cursor: default;\n}\n\n#"
                      )
                      .concat(t, " div.")
                      .concat(t, "-speed-value:hover {\n  background-color: ")
                      .concat(e["hover-color"], ";\n  cursor: pointer;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li {\n  /*position: relative;\n  width: 100%;\n  min-width: 154px;*/\n  list-style-type: none;\n  margin: 0px;\n  padding: 5px;\n  display: flex;\n  height:32px;\n  align-items:center;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li label {\n  margin: 0px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .switch {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 18px;\n}\n\n#"
                      )
                      .concat(t, " .switch input {\n  display: none;\n}\n\n#")
                      .concat(
                        t,
                        " .settings-switch {\n  position: absolute;\n  right: 24px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .settings-switch::after {\n  clear: both;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: "
                      )
                      .concat(
                        e["slider-off-color"],
                        ";\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n#"
                      )
                      .concat(
                        t,
                        ' .slider:before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 1px;\n  bottom: 1px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n#'
                      )
                      .concat(
                        t,
                        " input:checked+.slider {\n  background-color: "
                      )
                      .concat(e["slider-on-color"], ";\n}\n\n#")
                      .concat(
                        t,
                        " input:focus+.slider {\n  box-shadow: 0 0 1px "
                      )
                      .concat(e["slider-on-color"], ";\n}\n\n#")
                      .concat(
                        t,
                        " input:checked+.slider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n\n/* Rounded sliders */\n\n#"
                      )
                      .concat(
                        t,
                        " .slider.round {\n  border-radius: 34px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .slider.round:before {\n  border-radius: 50%;\n}\n\n\n#"
                      )
                      .concat(
                        t,
                        " .m-fadeOut {\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .m-fadeIn {\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li:hover {\n  background-color: "
                      )
                      .concat(e["hover-color"], ";\n  cursor: pointer;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li label:hover {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-loopbar:hover {\n  cursor: pointer;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-status-btn:hover {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-controls:active #")
                      .concat(t, "-cursor,\n#")
                      .concat(t, " #")
                      .concat(t, "-controls:hover #")
                      .concat(
                        t,
                        "-cursor  {\n  width: 16px;\n  height: 16px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-volume .")
                      .concat(
                        t,
                        "-volume-cursor-transition {\n  width: 12px;\n  height: 12px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-volume .")
                      .concat(
                        t,
                        "-volume-width-transition\n {\n  width: 50px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-time-display.")
                      .concat(
                        t,
                        "-time-width-transition {\n  position:relative;\n  left: 10px;\n  -webkit-transition: left 0.3s ease;\n  -moz-transition: left 0.3s ease;\n  transition: left 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-speed:hover .")
                      .concat(
                        t,
                        "-speed-btn {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-status-btn:hover {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-loop-btn:hover,\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-dc-btn:hover\n {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-full-screen-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n"
                      )
                      .concat(e["theme-style"], "\n");
                  })(e, this.name, this.options),
                  s = Y("style");
                (s.id = this.name + "-style"),
                  s.styleSheet
                    ? (s.styleSheet.cssText = r)
                    : s.appendChild(document.createTextNode(r)),
                  Z("head")[0].appendChild(s),
                  this.eventBroadcast("theme-change", this.options.theme);
              },
            },
            {
              key: "setSpeed",
              value: function () {
                var e,
                  t = this;
                (e = 1 == this.clip.speed ? "Normal" : this.clip.speed),
                  (this.elements.speedCurrent.innerHTML = e);
                var n =
                  -1 *
                  ((function () {
                    for (var e = 0; e < t.options.speedValues.length - 1; e++)
                      if (
                        t.options.speedValues[e] <= t.clip.speed &&
                        t.options.speedValues[e + 1] > t.clip.speed
                      )
                        return (
                          e +
                          Math.abs(
                            (t.clip.speed - t.options.speedValues[e]) /
                              (t.options.speedValues[e] -
                                t.options.speedValues[e + 1])
                          )
                        );
                  })() *
                    (1 / (this.options.speedValues.length - 1)) -
                    1) *
                  (this.options.speedValues.length - 1) *
                  16;
                Q("".concat(this.name, "-speed-cursor")).style.top = n + "px";
              },
            },
            {
              key: "calculateSpeed",
              value: function (e, t, n) {
                var i = Math.floor(n / e);
                if (i === t.length - 1) return t[i].toFixed(1);
                var r = (
                  ((n / e) % 1) * Math.abs(t[i] - t[i + 1]) +
                  t[i]
                ).toFixed(1);
                return 0 == r ? "0.0" : r;
              },
            },
            {
              key: "createPreviewDisplay",
              value: function () {
                this.previewClip = this.clip.paste(
                  Q("".concat(this.name, "-hover-display-clip"))
                );
                var e = Q("".concat(this.name, "-hover-display"));
                (window.previewClip = this.previewClip),
                  (e.style.position = "absolute"),
                  (e.style.background = this.options.backgroundColor),
                  (e.style.zIndex = 1),
                  this.setPreviewDimentions();
              },
            },
            {
              key: "setPreviewDimentions",
              value: function () {
                var e = this.clip.props.host,
                  t = this.previewClip.ownClip.props.host,
                  n = e.offsetWidth,
                  i = e.offsetHeight,
                  r = n * this.previewScale;
                r > 300 && ((r = 300), (this.previewScale = r / n));
                var s = n * this.previewScale,
                  o = i * this.previewScale,
                  a = ee(
                    {
                      width: this.clip.props.containerParams.width,
                      height: this.clip.props.containerParams.height,
                    },
                    { width: s, height: o },
                    "cover" === this.options.scaleToFit
                  );
                (this.previewClip.ownClip.rootElement.style.transform = "scale(".concat(
                  a.scale
                )),
                  (this.previewClip.ownClip.rootElement.style.left =
                    a.position.left + "px"),
                  (this.previewClip.ownClip.rootElement.style.top =
                    a.position.top + "px"),
                  (Q("".concat(this.name, "-hover-display")).style.width =
                    s + "px"),
                  (Q("".concat(this.name, "-hover-display")).style.height =
                    o + "px"),
                  (t.style.boxSizing = "border-box");
              },
            },
          ]) && i(t.prototype, n),
          e
        );
      })();
    })(n(0));
  },
  function (e, t, n) {
    (function (t) {
      e.exports = (function (e) {
        "use strict";
        var n = (function (e) {
            return e && "object" == typeof e && "default" in e
              ? e
              : { default: e };
          })(e),
          i = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0,
          },
          r = [
            5760,
            6158,
            8192,
            8193,
            8194,
            8195,
            8196,
            8197,
            8198,
            8199,
            8200,
            8201,
            8202,
            8239,
            8287,
            12288,
            65279,
          ];
        function s(e) {
          return e >= 48 && e <= 57;
        }
        function o(e) {
          return (e >= 48 && e <= 57) || 43 === e || 45 === e || 46 === e;
        }
        function a(e) {
          (this.index = 0),
            (this.path = e),
            (this.max = e.length),
            (this.result = []),
            (this.param = 0),
            (this.err = ""),
            (this.segmentStart = 0),
            (this.data = []);
        }
        function l(e) {
          for (
            ;
            e.index < e.max &&
            (10 === (t = e.path.charCodeAt(e.index)) ||
              13 === t ||
              8232 === t ||
              8233 === t ||
              32 === t ||
              9 === t ||
              11 === t ||
              12 === t ||
              160 === t ||
              (t >= 5760 && r.indexOf(t) >= 0));

          )
            e.index++;
          var t;
        }
        function c(e) {
          var t = e.path.charCodeAt(e.index);
          return 48 === t
            ? ((e.param = 0), void e.index++)
            : 49 === t
            ? ((e.param = 1), void e.index++)
            : void (e.err =
                "SvgPath: arc flag can be 0 or 1 only (at pos " +
                e.index +
                ")");
        }
        function u(e) {
          var t,
            n = e.index,
            i = n,
            r = e.max,
            o = !1,
            a = !1,
            l = !1,
            c = !1;
          if (i >= r) e.err = "SvgPath: missed param (at pos " + i + ")";
          else if (
            ((43 !== (t = e.path.charCodeAt(i)) && 45 !== t) ||
              (t = ++i < r ? e.path.charCodeAt(i) : 0),
            s(t) || 46 === t)
          ) {
            if (46 !== t) {
              if (
                ((o = 48 === t),
                (t = ++i < r ? e.path.charCodeAt(i) : 0),
                o && i < r && t && s(t))
              )
                return void (e.err =
                  "SvgPath: numbers started with `0` such as `09` are illegal (at pos " +
                  n +
                  ")");
              for (; i < r && s(e.path.charCodeAt(i)); ) i++, (a = !0);
              t = i < r ? e.path.charCodeAt(i) : 0;
            }
            if (46 === t) {
              for (c = !0, i++; s(e.path.charCodeAt(i)); ) i++, (l = !0);
              t = i < r ? e.path.charCodeAt(i) : 0;
            }
            if (101 === t || 69 === t) {
              if (c && !a && !l)
                return void (e.err =
                  "SvgPath: invalid float exponent (at pos " + i + ")");
              if (
                ((43 !== (t = ++i < r ? e.path.charCodeAt(i) : 0) &&
                  45 !== t) ||
                  i++,
                !(i < r && s(e.path.charCodeAt(i))))
              )
                return void (e.err =
                  "SvgPath: invalid float exponent (at pos " + i + ")");
              for (; i < r && s(e.path.charCodeAt(i)); ) i++;
            }
            (e.index = i), (e.param = parseFloat(e.path.slice(n, i)) + 0);
          } else
            e.err =
              "SvgPath: param should start with 0..9 or `.` (at pos " + i + ")";
        }
        function p(e) {
          var t, n;
          n = (t = e.path[e.segmentStart]).toLowerCase();
          var r = e.data;
          if (
            ("m" === n &&
              r.length > 2 &&
              (e.result.push([t, r[0], r[1]]),
              (r = r.slice(2)),
              (n = "l"),
              (t = "m" === t ? "l" : "L")),
            "r" === n)
          )
            e.result.push([t].concat(r));
          else
            for (
              ;
              r.length >= i[n] &&
              (e.result.push([t].concat(r.splice(0, i[n]))), i[n]);

            );
        }
        function h(e) {
          var t,
            n,
            r,
            s,
            a,
            h = e.max;
          if (
            ((e.segmentStart = e.index),
            (n = 97 == (32 | (t = e.path.charCodeAt(e.index)))),
            (function (e) {
              switch (32 | e) {
                case 109:
                case 122:
                case 108:
                case 104:
                case 118:
                case 99:
                case 115:
                case 113:
                case 116:
                case 97:
                case 114:
                  return !0;
              }
              return !1;
            })(t))
          )
            if (
              ((s = i[e.path[e.index].toLowerCase()]),
              e.index++,
              l(e),
              (e.data = []),
              s)
            ) {
              for (r = !1; ; ) {
                for (a = s; a > 0; a--) {
                  if ((!n || (3 !== a && 4 !== a) ? u(e) : c(e), e.err.length))
                    return;
                  e.data.push(e.param),
                    l(e),
                    (r = !1),
                    e.index < h &&
                      44 === e.path.charCodeAt(e.index) &&
                      (e.index++, l(e), (r = !0));
                }
                if (!r) {
                  if (e.index >= e.max) break;
                  if (!o(e.path.charCodeAt(e.index))) break;
                }
              }
              p(e);
            } else p(e);
          else
            e.err =
              "SvgPath: bad command " +
              e.path[e.index] +
              " (at pos " +
              e.index +
              ")";
        }
        function d() {
          if (!(this instanceof d)) return new d();
          (this.queue = []), (this.cache = null);
        }
        (d.prototype.matrix = function (e) {
          return (
            (1 === e[0] &&
              0 === e[1] &&
              0 === e[2] &&
              1 === e[3] &&
              0 === e[4] &&
              0 === e[5]) ||
              ((this.cache = null), this.queue.push(e)),
            this
          );
        }),
          (d.prototype.translate = function (e, t) {
            return (
              (0 === e && 0 === t) ||
                ((this.cache = null), this.queue.push([1, 0, 0, 1, e, t])),
              this
            );
          }),
          (d.prototype.scale = function (e, t) {
            return (
              (1 === e && 1 === t) ||
                ((this.cache = null), this.queue.push([e, 0, 0, t, 0, 0])),
              this
            );
          }),
          (d.prototype.rotate = function (e, t, n) {
            var i, r, s;
            return (
              0 !== e &&
                (this.translate(t, n),
                (i = (e * Math.PI) / 180),
                (r = Math.cos(i)),
                (s = Math.sin(i)),
                this.queue.push([r, s, -s, r, 0, 0]),
                (this.cache = null),
                this.translate(-t, -n)),
              this
            );
          }),
          (d.prototype.skewX = function (e) {
            return (
              0 !== e &&
                ((this.cache = null),
                this.queue.push([
                  1,
                  0,
                  Math.tan((e * Math.PI) / 180),
                  1,
                  0,
                  0,
                ])),
              this
            );
          }),
          (d.prototype.skewY = function (e) {
            return (
              0 !== e &&
                ((this.cache = null),
                this.queue.push([
                  1,
                  Math.tan((e * Math.PI) / 180),
                  0,
                  1,
                  0,
                  0,
                ])),
              this
            );
          }),
          (d.prototype.toArray = function () {
            if (this.cache) return this.cache;
            if (!this.queue.length)
              return (this.cache = [1, 0, 0, 1, 0, 0]), this.cache;
            if (((this.cache = this.queue[0]), 1 === this.queue.length))
              return this.cache;
            for (var e = 1; e < this.queue.length; e++)
              this.cache =
                ((t = this.cache),
                (n = this.queue[e]),
                [
                  t[0] * n[0] + t[2] * n[1],
                  t[1] * n[0] + t[3] * n[1],
                  t[0] * n[2] + t[2] * n[3],
                  t[1] * n[2] + t[3] * n[3],
                  t[0] * n[4] + t[2] * n[5] + t[4],
                  t[1] * n[4] + t[3] * n[5] + t[5],
                ]);
            var t, n;
            return this.cache;
          }),
          (d.prototype.calc = function (e, t, n) {
            var i;
            return this.queue.length
              ? (this.cache || (this.cache = this.toArray()),
                [
                  e * (i = this.cache)[0] + t * i[2] + (n ? 0 : i[4]),
                  e * i[1] + t * i[3] + (n ? 0 : i[5]),
                ])
              : [e, t];
          });
        var m = d,
          f = {
            matrix: !0,
            scale: !0,
            rotate: !0,
            translate: !0,
            skewX: !0,
            skewY: !0,
          },
          v = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
          g = /[\s,]+/,
          y = 2 * Math.PI;
        function b(e, t, n, i) {
          var r = e * n + t * i;
          return (
            r > 1 && (r = 1),
            r < -1 && (r = -1),
            (e * i - t * n < 0 ? -1 : 1) * Math.acos(r)
          );
        }
        function x(e, t) {
          var n = (4 / 3) * Math.tan(t / 4),
            i = Math.cos(e),
            r = Math.sin(e),
            s = Math.cos(e + t),
            o = Math.sin(e + t);
          return [i, r, i - r * n, r + i * n, s + o * n, o - s * n, s, o];
        }
        var w = 1e-10,
          k = Math.PI / 180;
        function C(e, t, n) {
          if (!(this instanceof C)) return new C(e, t, n);
          (this.rx = e), (this.ry = t), (this.ax = n);
        }
        (C.prototype.transform = function (e) {
          var t = Math.cos(this.ax * k),
            n = Math.sin(this.ax * k),
            i = [
              this.rx * (e[0] * t + e[2] * n),
              this.rx * (e[1] * t + e[3] * n),
              this.ry * (-e[0] * n + e[2] * t),
              this.ry * (-e[1] * n + e[3] * t),
            ],
            r = i[0] * i[0] + i[2] * i[2],
            s = i[1] * i[1] + i[3] * i[3],
            o =
              ((i[0] - i[3]) * (i[0] - i[3]) + (i[2] + i[1]) * (i[2] + i[1])) *
              ((i[0] + i[3]) * (i[0] + i[3]) + (i[2] - i[1]) * (i[2] - i[1])),
            a = (r + s) / 2;
          if (o < w * a)
            return (this.rx = this.ry = Math.sqrt(a)), (this.ax = 0), this;
          var l = i[0] * i[1] + i[2] * i[3],
            c = a + (o = Math.sqrt(o)) / 2,
            u = a - o / 2;
          return (
            (this.ax =
              Math.abs(l) < w && Math.abs(c - s) < w
                ? 90
                : (180 *
                    Math.atan(
                      Math.abs(l) > Math.abs(c - s) ? (c - r) / l : l / (c - s)
                    )) /
                  Math.PI),
            this.ax >= 0
              ? ((this.rx = Math.sqrt(c)), (this.ry = Math.sqrt(u)))
              : ((this.ax += 90),
                (this.rx = Math.sqrt(u)),
                (this.ry = Math.sqrt(c))),
            this
          );
        }),
          (C.prototype.isDegenerate = function () {
            return this.rx < w * this.ry || this.ry < w * this.rx;
          });
        var E = C;
        function O(e) {
          if (!(this instanceof O)) return new O(e);
          var t = (function (e) {
            var t = new a(e),
              n = t.max;
            for (l(t); t.index < n && !t.err.length; ) h(t);
            return (
              t.err.length
                ? (t.result = [])
                : t.result.length &&
                  ("mM".indexOf(t.result[0][0]) < 0
                    ? ((t.err = "SvgPath: string should start with `M` or `m`"),
                      (t.result = []))
                    : (t.result[0][0] = "M")),
              { err: t.err, segments: t.result }
            );
          })(e);
          (this.segments = t.segments), (this.err = t.err), (this.__stack = []);
        }
        (O.from = function (e) {
          if ("string" == typeof e) return new O(e);
          if (e instanceof O) {
            var t = new O("");
            return (
              (t.err = e.err),
              (t.segments = e.segments.map(function (e) {
                return e.slice();
              })),
              (t.__stack = e.__stack.map(function (e) {
                return m().matrix(e.toArray());
              })),
              t
            );
          }
          throw new Error("SvgPath.from: invalid param type " + e);
        }),
          (O.prototype.__matrix = function (e) {
            var t,
              n = this;
            e.queue.length &&
              this.iterate(function (i, r, s, o) {
                var a, l, c, u;
                switch (i[0]) {
                  case "v":
                    l =
                      0 === (a = e.calc(0, i[1], !0))[0]
                        ? ["v", a[1]]
                        : ["l", a[0], a[1]];
                    break;
                  case "V":
                    l =
                      (a = e.calc(s, i[1], !1))[0] === e.calc(s, o, !1)[0]
                        ? ["V", a[1]]
                        : ["L", a[0], a[1]];
                    break;
                  case "h":
                    l =
                      0 === (a = e.calc(i[1], 0, !0))[1]
                        ? ["h", a[0]]
                        : ["l", a[0], a[1]];
                    break;
                  case "H":
                    l =
                      (a = e.calc(i[1], o, !1))[1] === e.calc(s, o, !1)[1]
                        ? ["H", a[0]]
                        : ["L", a[0], a[1]];
                    break;
                  case "a":
                  case "A":
                    var p = e.toArray(),
                      h = E(i[1], i[2], i[3]).transform(p);
                    if (
                      (p[0] * p[3] - p[1] * p[2] < 0 &&
                        (i[5] = i[5] ? "0" : "1"),
                      (a = e.calc(i[6], i[7], "a" === i[0])),
                      ("A" === i[0] && i[6] === s && i[7] === o) ||
                        ("a" === i[0] && 0 === i[6] && 0 === i[7]))
                    ) {
                      l = ["a" === i[0] ? "l" : "L", a[0], a[1]];
                      break;
                    }
                    l = h.isDegenerate()
                      ? ["a" === i[0] ? "l" : "L", a[0], a[1]]
                      : [i[0], h.rx, h.ry, h.ax, i[4], i[5], a[0], a[1]];
                    break;
                  case "m":
                    (u = r > 0),
                      (l = ["m", (a = e.calc(i[1], i[2], u))[0], a[1]]);
                    break;
                  default:
                    for (
                      l = [(c = i[0])], u = c.toLowerCase() === c, t = 1;
                      t < i.length;
                      t += 2
                    )
                      (a = e.calc(i[t], i[t + 1], u)), l.push(a[0], a[1]);
                }
                n.segments[r] = l;
              }, !0);
          }),
          (O.prototype.__evaluateStack = function () {
            var e, t;
            if (this.__stack.length) {
              if (1 === this.__stack.length)
                return this.__matrix(this.__stack[0]), void (this.__stack = []);
              for (e = m(), t = this.__stack.length; --t >= 0; )
                e.matrix(this.__stack[t].toArray());
              this.__matrix(e), (this.__stack = []);
            }
          }),
          (O.prototype.toString = function () {
            var e,
              t,
              n = [];
            this.__evaluateStack();
            for (var i = 0; i < this.segments.length; i++)
              (t = this.segments[i][0]),
                (e =
                  i > 0 &&
                  "m" !== t &&
                  "M" !== t &&
                  t === this.segments[i - 1][0]),
                (n = n.concat(
                  e ? this.segments[i].slice(1) : this.segments[i]
                ));
            return n
              .join(" ")
              .replace(/ ?([achlmqrstvz]) ?/gi, "$1")
              .replace(/ \-/g, "-")
              .replace(/zm/g, "z m");
          }),
          (O.prototype.translate = function (e, t) {
            return this.__stack.push(m().translate(e, t || 0)), this;
          }),
          (O.prototype.scale = function (e, t) {
            return this.__stack.push(m().scale(e, t || 0 === t ? t : e)), this;
          }),
          (O.prototype.rotate = function (e, t, n) {
            return this.__stack.push(m().rotate(e, t || 0, n || 0)), this;
          }),
          (O.prototype.skewX = function (e) {
            return this.__stack.push(m().skewX(e)), this;
          }),
          (O.prototype.skewY = function (e) {
            return this.__stack.push(m().skewY(e)), this;
          }),
          (O.prototype.matrix = function (e) {
            return this.__stack.push(m().matrix(e)), this;
          }),
          (O.prototype.transform = function (e) {
            return e.trim()
              ? (this.__stack.push(
                  (function (e) {
                    var t,
                      n,
                      i = new m();
                    return (
                      e.split(v).forEach(function (e) {
                        if (e.length)
                          if (void 0 === f[e])
                            switch (
                              ((n = e.split(g).map(function (e) {
                                return +e || 0;
                              })),
                              t)
                            ) {
                              case "matrix":
                                return void (6 === n.length && i.matrix(n));
                              case "scale":
                                return void (1 === n.length
                                  ? i.scale(n[0], n[0])
                                  : 2 === n.length && i.scale(n[0], n[1]));
                              case "rotate":
                                return void (1 === n.length
                                  ? i.rotate(n[0], 0, 0)
                                  : 3 === n.length &&
                                    i.rotate(n[0], n[1], n[2]));
                              case "translate":
                                return void (1 === n.length
                                  ? i.translate(n[0], 0)
                                  : 2 === n.length && i.translate(n[0], n[1]));
                              case "skewX":
                                return void (1 === n.length && i.skewX(n[0]));
                              case "skewY":
                                return void (1 === n.length && i.skewY(n[0]));
                            }
                          else t = e;
                      }),
                      i
                    );
                  })(e)
                ),
                this)
              : this;
          }),
          (O.prototype.round = function (e) {
            var t,
              n = 0,
              i = 0,
              r = 0,
              s = 0;
            return (
              (e = e || 0),
              this.__evaluateStack(),
              this.segments.forEach(function (o) {
                var a = o[0].toLowerCase() === o[0];
                switch (o[0]) {
                  case "H":
                  case "h":
                    return (
                      a && (o[1] += r),
                      (r = o[1] - o[1].toFixed(e)),
                      void (o[1] = +o[1].toFixed(e))
                    );
                  case "V":
                  case "v":
                    return (
                      a && (o[1] += s),
                      (s = o[1] - o[1].toFixed(e)),
                      void (o[1] = +o[1].toFixed(e))
                    );
                  case "Z":
                  case "z":
                    return (r = n), void (s = i);
                  case "M":
                  case "m":
                    return (
                      a && ((o[1] += r), (o[2] += s)),
                      (r = o[1] - o[1].toFixed(e)),
                      (s = o[2] - o[2].toFixed(e)),
                      (n = r),
                      (i = s),
                      (o[1] = +o[1].toFixed(e)),
                      void (o[2] = +o[2].toFixed(e))
                    );
                  case "A":
                  case "a":
                    return (
                      a && ((o[6] += r), (o[7] += s)),
                      (r = o[6] - o[6].toFixed(e)),
                      (s = o[7] - o[7].toFixed(e)),
                      (o[1] = +o[1].toFixed(e)),
                      (o[2] = +o[2].toFixed(e)),
                      (o[3] = +o[3].toFixed(e + 2)),
                      (o[6] = +o[6].toFixed(e)),
                      void (o[7] = +o[7].toFixed(e))
                    );
                  default:
                    return (
                      (t = o.length),
                      a && ((o[t - 2] += r), (o[t - 1] += s)),
                      (r = o[t - 2] - o[t - 2].toFixed(e)),
                      (s = o[t - 1] - o[t - 1].toFixed(e)),
                      void o.forEach(function (t, n) {
                        n && (o[n] = +o[n].toFixed(e));
                      })
                    );
                }
              }),
              this
            );
          }),
          (O.prototype.iterate = function (e, t) {
            var n,
              i,
              r,
              s = this.segments,
              o = {},
              a = !1,
              l = 0,
              c = 0,
              u = 0,
              p = 0;
            if (
              (t || this.__evaluateStack(),
              s.forEach(function (t, n) {
                var i = e(t, n, l, c);
                Array.isArray(i) && ((o[n] = i), (a = !0));
                var r = t[0] === t[0].toLowerCase();
                switch (t[0]) {
                  case "m":
                  case "M":
                    return (
                      (l = t[1] + (r ? l : 0)),
                      (c = t[2] + (r ? c : 0)),
                      (u = l),
                      void (p = c)
                    );
                  case "h":
                  case "H":
                    return void (l = t[1] + (r ? l : 0));
                  case "v":
                  case "V":
                    return void (c = t[1] + (r ? c : 0));
                  case "z":
                  case "Z":
                    return (l = u), void (c = p);
                  default:
                    (l = t[t.length - 2] + (r ? l : 0)),
                      (c = t[t.length - 1] + (r ? c : 0));
                }
              }),
              !a)
            )
              return this;
            for (r = [], n = 0; n < s.length; n++)
              if (void 0 !== o[n])
                for (i = 0; i < o[n].length; i++) r.push(o[n][i]);
              else r.push(s[n]);
            return (this.segments = r), this;
          }),
          (O.prototype.abs = function () {
            return (
              this.iterate(function (e, t, n, i) {
                var r,
                  s = e[0],
                  o = s.toUpperCase();
                if (s !== o)
                  switch (((e[0] = o), s)) {
                    case "v":
                      return void (e[1] += i);
                    case "a":
                      return (e[6] += n), void (e[7] += i);
                    default:
                      for (r = 1; r < e.length; r++) e[r] += r % 2 ? n : i;
                  }
              }, !0),
              this
            );
          }),
          (O.prototype.rel = function () {
            return (
              this.iterate(function (e, t, n, i) {
                var r,
                  s = e[0],
                  o = s.toLowerCase();
                if (s !== o && (0 !== t || "M" !== s))
                  switch (((e[0] = o), s)) {
                    case "V":
                      return void (e[1] -= i);
                    case "A":
                      return (e[6] -= n), void (e[7] -= i);
                    default:
                      for (r = 1; r < e.length; r++) e[r] -= r % 2 ? n : i;
                  }
              }, !0),
              this
            );
          }),
          (O.prototype.unarc = function () {
            return (
              this.iterate(function (e, t, n, i) {
                var r,
                  s,
                  o,
                  a = [],
                  l = e[0];
                return "A" !== l && "a" !== l
                  ? null
                  : ("a" === l
                      ? ((s = n + e[6]), (o = i + e[7]))
                      : ((s = e[6]), (o = e[7])),
                    0 ===
                    (r = (function (e, t, n, i, r, s, o, a, l) {
                      var c = Math.sin((l * y) / 360),
                        u = Math.cos((l * y) / 360),
                        p = (u * (e - n)) / 2 + (c * (t - i)) / 2,
                        h = (-c * (e - n)) / 2 + (u * (t - i)) / 2;
                      if (0 === p && 0 === h) return [];
                      if (0 === o || 0 === a) return [];
                      (o = Math.abs(o)), (a = Math.abs(a));
                      var d = (p * p) / (o * o) + (h * h) / (a * a);
                      d > 1 && ((o *= Math.sqrt(d)), (a *= Math.sqrt(d)));
                      var m = (function (e, t, n, i, r, s, o, a, l, c) {
                          var u = (c * (e - n)) / 2 + (l * (t - i)) / 2,
                            p = (-l * (e - n)) / 2 + (c * (t - i)) / 2,
                            h = o * o,
                            d = a * a,
                            m = u * u,
                            f = p * p,
                            v = h * d - h * f - d * m;
                          v < 0 && (v = 0), (v /= h * f + d * m);
                          var g =
                              (((v = Math.sqrt(v) * (r === s ? -1 : 1)) * o) /
                                a) *
                              p,
                            x = ((v * -a) / o) * u,
                            w = c * g - l * x + (e + n) / 2,
                            k = l * g + c * x + (t + i) / 2,
                            C = (u - g) / o,
                            E = (p - x) / a,
                            O = (-u - g) / o,
                            P = (-p - x) / a,
                            I = b(1, 0, C, E),
                            M = b(C, E, O, P);
                          return (
                            0 === s && M > 0 && (M -= y),
                            1 === s && M < 0 && (M += y),
                            [w, k, I, M]
                          );
                        })(e, t, n, i, r, s, o, a, c, u),
                        f = [],
                        v = m[2],
                        g = m[3],
                        w = Math.max(Math.ceil(Math.abs(g) / (y / 4)), 1);
                      g /= w;
                      for (var k = 0; k < w; k++) f.push(x(v, g)), (v += g);
                      return f.map(function (e) {
                        for (var t = 0; t < e.length; t += 2) {
                          var n = e[t + 0],
                            i = e[t + 1],
                            r = u * (n *= o) - c * (i *= a),
                            s = c * n + u * i;
                          (e[t + 0] = r + m[0]), (e[t + 1] = s + m[1]);
                        }
                        return e;
                      });
                    })(n, i, s, o, e[4], e[5], e[1], e[2], e[3])).length
                      ? [["a" === e[0] ? "l" : "L", e[6], e[7]]]
                      : (r.forEach(function (e) {
                          a.push(["C", e[2], e[3], e[4], e[5], e[6], e[7]]);
                        }),
                        a));
              }),
              this
            );
          }),
          (O.prototype.unshort = function () {
            var e,
              t,
              n,
              i,
              r,
              s = this.segments;
            return (
              this.iterate(function (o, a, l, c) {
                var u,
                  p = o[0],
                  h = p.toUpperCase();
                a &&
                  ("T" === h
                    ? ((u = "t" === p),
                      "Q" === (n = s[a - 1])[0]
                        ? ((e = n[1] - l), (t = n[2] - c))
                        : "q" === n[0]
                        ? ((e = n[1] - n[3]), (t = n[2] - n[4]))
                        : ((e = 0), (t = 0)),
                      (i = -e),
                      (r = -t),
                      u || ((i += l), (r += c)),
                      (s[a] = [u ? "q" : "Q", i, r, o[1], o[2]]))
                    : "S" === h &&
                      ((u = "s" === p),
                      "C" === (n = s[a - 1])[0]
                        ? ((e = n[3] - l), (t = n[4] - c))
                        : "c" === n[0]
                        ? ((e = n[3] - n[5]), (t = n[4] - n[6]))
                        : ((e = 0), (t = 0)),
                      (i = -e),
                      (r = -t),
                      u || ((i += l), (r += c)),
                      (s[a] = [u ? "c" : "C", i, r, o[1], o[2], o[3], o[4]])));
              }),
              this
            );
          });
        var P = O;
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== t || ("undefined" != typeof self && self);
        var I,
          M = (function (e, t) {
            return (
              (function (e, t) {
                !(function (e) {
                  var t = {
                      a: 7,
                      c: 6,
                      h: 1,
                      l: 2,
                      m: 2,
                      q: 4,
                      s: 4,
                      t: 2,
                      v: 1,
                      z: 0,
                    },
                    n = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
                    i = function (e) {
                      var i = [];
                      return (
                        e.replace(n, function (e, n, r) {
                          var o = n.toLowerCase();
                          for (
                            r = s(r),
                              "m" === o &&
                                r.length > 2 &&
                                (i.push([n].concat(r.splice(0, 2))),
                                (o = "l"),
                                (n = "m" === n ? "l" : "L"));
                            r.length >= 0;

                          ) {
                            if (r.length === t[o])
                              return r.unshift(n), i.push(r);
                            if (r.length < t[o])
                              throw new Error("malformed path data");
                            i.push([n].concat(r.splice(0, t[o])));
                          }
                        }),
                        i
                      );
                    },
                    r = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
                  function s(e) {
                    var t = e.match(r);
                    return t ? t.map(Number) : [];
                  }
                  var o = function (e, t, n, i, r, s, o, l) {
                    return new a(e, t, n, i, r, s, o, l);
                  };
                  function a(e, t, n, i, r, s, o, a) {
                    (this.a = { x: e, y: t }),
                      (this.b = { x: n, y: i }),
                      (this.c = { x: r, y: s }),
                      (this.d = { x: o, y: a }),
                      null != o && null != a
                        ? ((this.getArcLength = x),
                          (this.getPoint = h),
                          (this.getDerivative = c))
                        : ((this.getArcLength = d),
                          (this.getPoint = p),
                          (this.getDerivative = l)),
                      this.init();
                  }
                  function l(e, t, n) {
                    return {
                      x: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
                      y: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1]),
                    };
                  }
                  function c(e, t, n) {
                    return p(
                      [3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])],
                      [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])],
                      n
                    );
                  }
                  function u(e, t, n, i, r) {
                    for (
                      var s = 1, o = e / t, a = (e - n(i, r, o)) / t;
                      s > 0.001;

                    ) {
                      var l = n(i, r, o + a),
                        c = n(i, r, o - a),
                        u = Math.abs(e - l) / t,
                        p = Math.abs(e - c) / t;
                      u < s
                        ? ((s = u), (o += a))
                        : p < s
                        ? ((s = p), (o -= a))
                        : (a /= 2);
                    }
                    return o;
                  }
                  function p(e, t, n) {
                    return {
                      x:
                        (1 - n) * (1 - n) * e[0] +
                        2 * (1 - n) * n * e[1] +
                        n * n * e[2],
                      y:
                        (1 - n) * (1 - n) * t[0] +
                        2 * (1 - n) * n * t[1] +
                        n * n * t[2],
                    };
                  }
                  function h(e, t, n) {
                    return {
                      x:
                        (1 - n) * (1 - n) * (1 - n) * e[0] +
                        3 * (1 - n) * (1 - n) * n * e[1] +
                        3 * (1 - n) * n * n * e[2] +
                        n * n * n * e[3],
                      y:
                        (1 - n) * (1 - n) * (1 - n) * t[0] +
                        3 * (1 - n) * (1 - n) * n * t[1] +
                        3 * (1 - n) * n * n * t[2] +
                        n * n * n * t[3],
                    };
                  }
                  function d(e, t, n) {
                    void 0 === n && (n = 1);
                    var i = e[0] - 2 * e[1] + e[2],
                      r = t[0] - 2 * t[1] + t[2],
                      s = 2 * e[1] - 2 * e[0],
                      o = 2 * t[1] - 2 * t[0],
                      a = 4 * (i * i + r * r),
                      l = 4 * (i * s + r * o),
                      c = s * s + o * o;
                    if (0 === a)
                      return (
                        n *
                        Math.sqrt(
                          Math.pow(e[2] - e[0], 2) + Math.pow(t[2] - t[0], 2)
                        )
                      );
                    var u = l / (2 * a),
                      p = n + u,
                      h = c / a - u * u;
                    return (
                      (Math.sqrt(a) / 2) *
                      (p * Math.sqrt(p * p + h) -
                        u * Math.sqrt(u * u + h) +
                        h *
                          Math.log(
                            Math.abs(
                              (p + Math.sqrt(p * p + h)) /
                                (u + Math.sqrt(u * u + h))
                            )
                          ))
                    );
                  }
                  a.prototype = {
                    constructor: a,
                    init: function () {
                      this.length = this.getArcLength(
                        [this.a.x, this.b.x, this.c.x, this.d.x],
                        [this.a.y, this.b.y, this.c.y, this.d.y]
                      );
                    },
                    getTotalLength: function () {
                      return this.length;
                    },
                    getPointAtLength: function (e) {
                      var t = u(
                        e,
                        this.length,
                        this.getArcLength,
                        [this.a.x, this.b.x, this.c.x, this.d.x],
                        [this.a.y, this.b.y, this.c.y, this.d.y]
                      );
                      return this.getPoint(
                        [this.a.x, this.b.x, this.c.x, this.d.x],
                        [this.a.y, this.b.y, this.c.y, this.d.y],
                        t
                      );
                    },
                    getTangentAtLength: function (e) {
                      var t = u(
                          e,
                          this.length,
                          this.getArcLength,
                          [this.a.x, this.b.x, this.c.x, this.d.x],
                          [this.a.y, this.b.y, this.c.y, this.d.y]
                        ),
                        n = this.getDerivative(
                          [this.a.x, this.b.x, this.c.x, this.d.x],
                          [this.a.y, this.b.y, this.c.y, this.d.y],
                          t
                        ),
                        i = Math.sqrt(n.x * n.x + n.y * n.y);
                      return i > 0
                        ? { x: n.x / i, y: n.y / i }
                        : { x: 0, y: 0 };
                    },
                    getPropertiesAtLength: function (e) {
                      var t,
                        n = u(
                          e,
                          this.length,
                          this.getArcLength,
                          [this.a.x, this.b.x, this.c.x, this.d.x],
                          [this.a.y, this.b.y, this.c.y, this.d.y]
                        ),
                        i = this.getDerivative(
                          [this.a.x, this.b.x, this.c.x, this.d.x],
                          [this.a.y, this.b.y, this.c.y, this.d.y],
                          n
                        ),
                        r = Math.sqrt(i.x * i.x + i.y * i.y);
                      t = r > 0 ? { x: i.x / r, y: i.y / r } : { x: 0, y: 0 };
                      var s = this.getPoint(
                        [this.a.x, this.b.x, this.c.x, this.d.x],
                        [this.a.y, this.b.y, this.c.y, this.d.y],
                        n
                      );
                      return { x: s.x, y: s.y, tangentX: t.x, tangentY: t.y };
                    },
                  };
                  var m = [
                      [],
                      [],
                      [-0.5773502691896257, 0.5773502691896257],
                      [0, -0.7745966692414834, 0.7745966692414834],
                      [
                        -0.33998104358485626,
                        0.33998104358485626,
                        -0.8611363115940526,
                        0.8611363115940526,
                      ],
                      [
                        0,
                        -0.5384693101056831,
                        0.5384693101056831,
                        -0.906179845938664,
                        0.906179845938664,
                      ],
                      [
                        0.6612093864662645,
                        -0.6612093864662645,
                        -0.2386191860831969,
                        0.2386191860831969,
                        -0.932469514203152,
                        0.932469514203152,
                      ],
                      [
                        0,
                        0.4058451513773972,
                        -0.4058451513773972,
                        -0.7415311855993945,
                        0.7415311855993945,
                        -0.9491079123427585,
                        0.9491079123427585,
                      ],
                      [
                        -0.1834346424956498,
                        0.1834346424956498,
                        -0.525532409916329,
                        0.525532409916329,
                        -0.7966664774136267,
                        0.7966664774136267,
                        -0.9602898564975363,
                        0.9602898564975363,
                      ],
                      [
                        0,
                        -0.8360311073266358,
                        0.8360311073266358,
                        -0.9681602395076261,
                        0.9681602395076261,
                        -0.3242534234038089,
                        0.3242534234038089,
                        -0.6133714327005904,
                        0.6133714327005904,
                      ],
                      [
                        -0.14887433898163122,
                        0.14887433898163122,
                        -0.4333953941292472,
                        0.4333953941292472,
                        -0.6794095682990244,
                        0.6794095682990244,
                        -0.8650633666889845,
                        0.8650633666889845,
                        -0.9739065285171717,
                        0.9739065285171717,
                      ],
                      [
                        0,
                        -0.26954315595234496,
                        0.26954315595234496,
                        -0.5190961292068118,
                        0.5190961292068118,
                        -0.7301520055740494,
                        0.7301520055740494,
                        -0.8870625997680953,
                        0.8870625997680953,
                        -0.978228658146057,
                        0.978228658146057,
                      ],
                      [
                        -0.1252334085114689,
                        0.1252334085114689,
                        -0.3678314989981802,
                        0.3678314989981802,
                        -0.5873179542866175,
                        0.5873179542866175,
                        -0.7699026741943047,
                        0.7699026741943047,
                        -0.9041172563704749,
                        0.9041172563704749,
                        -0.9815606342467192,
                        0.9815606342467192,
                      ],
                      [
                        0,
                        -0.2304583159551348,
                        0.2304583159551348,
                        -0.44849275103644687,
                        0.44849275103644687,
                        -0.6423493394403402,
                        0.6423493394403402,
                        -0.8015780907333099,
                        0.8015780907333099,
                        -0.9175983992229779,
                        0.9175983992229779,
                        -0.9841830547185881,
                        0.9841830547185881,
                      ],
                      [
                        -0.10805494870734367,
                        0.10805494870734367,
                        -0.31911236892788974,
                        0.31911236892788974,
                        -0.5152486363581541,
                        0.5152486363581541,
                        -0.6872929048116855,
                        0.6872929048116855,
                        -0.827201315069765,
                        0.827201315069765,
                        -0.9284348836635735,
                        0.9284348836635735,
                        -0.9862838086968123,
                        0.9862838086968123,
                      ],
                      [
                        0,
                        -0.20119409399743451,
                        0.20119409399743451,
                        -0.3941513470775634,
                        0.3941513470775634,
                        -0.5709721726085388,
                        0.5709721726085388,
                        -0.7244177313601701,
                        0.7244177313601701,
                        -0.8482065834104272,
                        0.8482065834104272,
                        -0.937273392400706,
                        0.937273392400706,
                        -0.9879925180204854,
                        0.9879925180204854,
                      ],
                      [
                        -0.09501250983763744,
                        0.09501250983763744,
                        -0.2816035507792589,
                        0.2816035507792589,
                        -0.45801677765722737,
                        0.45801677765722737,
                        -0.6178762444026438,
                        0.6178762444026438,
                        -0.755404408355003,
                        0.755404408355003,
                        -0.8656312023878318,
                        0.8656312023878318,
                        -0.9445750230732326,
                        0.9445750230732326,
                        -0.9894009349916499,
                        0.9894009349916499,
                      ],
                      [
                        0,
                        -0.17848418149584785,
                        0.17848418149584785,
                        -0.3512317634538763,
                        0.3512317634538763,
                        -0.5126905370864769,
                        0.5126905370864769,
                        -0.6576711592166907,
                        0.6576711592166907,
                        -0.7815140038968014,
                        0.7815140038968014,
                        -0.8802391537269859,
                        0.8802391537269859,
                        -0.9506755217687678,
                        0.9506755217687678,
                        -0.9905754753144174,
                        0.9905754753144174,
                      ],
                      [
                        -0.0847750130417353,
                        0.0847750130417353,
                        -0.2518862256915055,
                        0.2518862256915055,
                        -0.41175116146284263,
                        0.41175116146284263,
                        -0.5597708310739475,
                        0.5597708310739475,
                        -0.6916870430603532,
                        0.6916870430603532,
                        -0.8037049589725231,
                        0.8037049589725231,
                        -0.8926024664975557,
                        0.8926024664975557,
                        -0.9558239495713977,
                        0.9558239495713977,
                        -0.9915651684209309,
                        0.9915651684209309,
                      ],
                      [
                        0,
                        -0.16035864564022537,
                        0.16035864564022537,
                        -0.31656409996362983,
                        0.31656409996362983,
                        -0.46457074137596094,
                        0.46457074137596094,
                        -0.600545304661681,
                        0.600545304661681,
                        -0.7209661773352294,
                        0.7209661773352294,
                        -0.8227146565371428,
                        0.8227146565371428,
                        -0.9031559036148179,
                        0.9031559036148179,
                        -0.96020815213483,
                        0.96020815213483,
                        -0.9924068438435844,
                        0.9924068438435844,
                      ],
                      [
                        -0.07652652113349734,
                        0.07652652113349734,
                        -0.22778585114164507,
                        0.22778585114164507,
                        -0.37370608871541955,
                        0.37370608871541955,
                        -0.5108670019508271,
                        0.5108670019508271,
                        -0.636053680726515,
                        0.636053680726515,
                        -0.7463319064601508,
                        0.7463319064601508,
                        -0.8391169718222188,
                        0.8391169718222188,
                        -0.912234428251326,
                        0.912234428251326,
                        -0.9639719272779138,
                        0.9639719272779138,
                        -0.9931285991850949,
                        0.9931285991850949,
                      ],
                      [
                        0,
                        -0.1455618541608951,
                        0.1455618541608951,
                        -0.2880213168024011,
                        0.2880213168024011,
                        -0.4243421202074388,
                        0.4243421202074388,
                        -0.5516188358872198,
                        0.5516188358872198,
                        -0.6671388041974123,
                        0.6671388041974123,
                        -0.7684399634756779,
                        0.7684399634756779,
                        -0.8533633645833173,
                        0.8533633645833173,
                        -0.9200993341504008,
                        0.9200993341504008,
                        -0.9672268385663063,
                        0.9672268385663063,
                        -0.9937521706203895,
                        0.9937521706203895,
                      ],
                      [
                        -0.06973927331972223,
                        0.06973927331972223,
                        -0.20786042668822127,
                        0.20786042668822127,
                        -0.34193582089208424,
                        0.34193582089208424,
                        -0.469355837986757,
                        0.469355837986757,
                        -0.5876404035069116,
                        0.5876404035069116,
                        -0.6944872631866827,
                        0.6944872631866827,
                        -0.7878168059792081,
                        0.7878168059792081,
                        -0.8658125777203002,
                        0.8658125777203002,
                        -0.926956772187174,
                        0.926956772187174,
                        -0.9700604978354287,
                        0.9700604978354287,
                        -0.9942945854823992,
                        0.9942945854823992,
                      ],
                      [
                        0,
                        -0.1332568242984661,
                        0.1332568242984661,
                        -0.26413568097034495,
                        0.26413568097034495,
                        -0.3903010380302908,
                        0.3903010380302908,
                        -0.5095014778460075,
                        0.5095014778460075,
                        -0.6196098757636461,
                        0.6196098757636461,
                        -0.7186613631319502,
                        0.7186613631319502,
                        -0.8048884016188399,
                        0.8048884016188399,
                        -0.8767523582704416,
                        0.8767523582704416,
                        -0.9329710868260161,
                        0.9329710868260161,
                        -0.9725424712181152,
                        0.9725424712181152,
                        -0.9947693349975522,
                        0.9947693349975522,
                      ],
                      [
                        -0.06405689286260563,
                        0.06405689286260563,
                        -0.1911188674736163,
                        0.1911188674736163,
                        -0.3150426796961634,
                        0.3150426796961634,
                        -0.4337935076260451,
                        0.4337935076260451,
                        -0.5454214713888396,
                        0.5454214713888396,
                        -0.6480936519369755,
                        0.6480936519369755,
                        -0.7401241915785544,
                        0.7401241915785544,
                        -0.820001985973903,
                        0.820001985973903,
                        -0.8864155270044011,
                        0.8864155270044011,
                        -0.9382745520027328,
                        0.9382745520027328,
                        -0.9747285559713095,
                        0.9747285559713095,
                        -0.9951872199970213,
                        0.9951872199970213,
                      ],
                    ],
                    f = [
                      [],
                      [],
                      [1, 1],
                      [
                        0.8888888888888888,
                        0.5555555555555556,
                        0.5555555555555556,
                      ],
                      [
                        0.6521451548625461,
                        0.6521451548625461,
                        0.34785484513745385,
                        0.34785484513745385,
                      ],
                      [
                        0.5688888888888889,
                        0.47862867049936647,
                        0.47862867049936647,
                        0.23692688505618908,
                        0.23692688505618908,
                      ],
                      [
                        0.3607615730481386,
                        0.3607615730481386,
                        0.46791393457269104,
                        0.46791393457269104,
                        0.17132449237917036,
                        0.17132449237917036,
                      ],
                      [
                        0.4179591836734694,
                        0.3818300505051189,
                        0.3818300505051189,
                        0.27970539148927664,
                        0.27970539148927664,
                        0.1294849661688697,
                        0.1294849661688697,
                      ],
                      [
                        0.362683783378362,
                        0.362683783378362,
                        0.31370664587788727,
                        0.31370664587788727,
                        0.22238103445337448,
                        0.22238103445337448,
                        0.10122853629037626,
                        0.10122853629037626,
                      ],
                      [
                        0.3302393550012598,
                        0.1806481606948574,
                        0.1806481606948574,
                        0.08127438836157441,
                        0.08127438836157441,
                        0.31234707704000286,
                        0.31234707704000286,
                        0.26061069640293544,
                        0.26061069640293544,
                      ],
                      [
                        0.29552422471475287,
                        0.29552422471475287,
                        0.26926671930999635,
                        0.26926671930999635,
                        0.21908636251598204,
                        0.21908636251598204,
                        0.1494513491505806,
                        0.1494513491505806,
                        0.06667134430868814,
                        0.06667134430868814,
                      ],
                      [
                        0.2729250867779006,
                        0.26280454451024665,
                        0.26280454451024665,
                        0.23319376459199048,
                        0.23319376459199048,
                        0.18629021092773426,
                        0.18629021092773426,
                        0.1255803694649046,
                        0.1255803694649046,
                        0.05566856711617366,
                        0.05566856711617366,
                      ],
                      [
                        0.24914704581340277,
                        0.24914704581340277,
                        0.2334925365383548,
                        0.2334925365383548,
                        0.20316742672306592,
                        0.20316742672306592,
                        0.16007832854334622,
                        0.16007832854334622,
                        0.10693932599531843,
                        0.10693932599531843,
                        0.04717533638651183,
                        0.04717533638651183,
                      ],
                      [
                        0.2325515532308739,
                        0.22628318026289723,
                        0.22628318026289723,
                        0.2078160475368885,
                        0.2078160475368885,
                        0.17814598076194574,
                        0.17814598076194574,
                        0.13887351021978725,
                        0.13887351021978725,
                        0.09212149983772845,
                        0.09212149983772845,
                        0.04048400476531588,
                        0.04048400476531588,
                      ],
                      [
                        0.2152638534631578,
                        0.2152638534631578,
                        0.2051984637212956,
                        0.2051984637212956,
                        0.18553839747793782,
                        0.18553839747793782,
                        0.15720316715819355,
                        0.15720316715819355,
                        0.12151857068790319,
                        0.12151857068790319,
                        0.08015808715976021,
                        0.08015808715976021,
                        0.03511946033175186,
                        0.03511946033175186,
                      ],
                      [
                        0.2025782419255613,
                        0.19843148532711158,
                        0.19843148532711158,
                        0.1861610000155622,
                        0.1861610000155622,
                        0.16626920581699392,
                        0.16626920581699392,
                        0.13957067792615432,
                        0.13957067792615432,
                        0.10715922046717194,
                        0.10715922046717194,
                        0.07036604748810812,
                        0.07036604748810812,
                        0.03075324199611727,
                        0.03075324199611727,
                      ],
                      [
                        0.1894506104550685,
                        0.1894506104550685,
                        0.18260341504492358,
                        0.18260341504492358,
                        0.16915651939500254,
                        0.16915651939500254,
                        0.14959598881657674,
                        0.14959598881657674,
                        0.12462897125553388,
                        0.12462897125553388,
                        0.09515851168249279,
                        0.09515851168249279,
                        0.062253523938647894,
                        0.062253523938647894,
                        0.027152459411754096,
                        0.027152459411754096,
                      ],
                      [
                        0.17944647035620653,
                        0.17656270536699264,
                        0.17656270536699264,
                        0.16800410215645004,
                        0.16800410215645004,
                        0.15404576107681028,
                        0.15404576107681028,
                        0.13513636846852548,
                        0.13513636846852548,
                        0.11188384719340397,
                        0.11188384719340397,
                        0.08503614831717918,
                        0.08503614831717918,
                        0.0554595293739872,
                        0.0554595293739872,
                        0.02414830286854793,
                        0.02414830286854793,
                      ],
                      [
                        0.1691423829631436,
                        0.1691423829631436,
                        0.16427648374583273,
                        0.16427648374583273,
                        0.15468467512626524,
                        0.15468467512626524,
                        0.14064291467065065,
                        0.14064291467065065,
                        0.12255520671147846,
                        0.12255520671147846,
                        0.10094204410628717,
                        0.10094204410628717,
                        0.07642573025488905,
                        0.07642573025488905,
                        0.0497145488949698,
                        0.0497145488949698,
                        0.02161601352648331,
                        0.02161601352648331,
                      ],
                      [
                        0.1610544498487837,
                        0.15896884339395434,
                        0.15896884339395434,
                        0.15276604206585967,
                        0.15276604206585967,
                        0.1426067021736066,
                        0.1426067021736066,
                        0.12875396253933621,
                        0.12875396253933621,
                        0.11156664554733399,
                        0.11156664554733399,
                        0.09149002162245,
                        0.09149002162245,
                        0.06904454273764123,
                        0.06904454273764123,
                        0.0448142267656996,
                        0.0448142267656996,
                        0.019461788229726478,
                        0.019461788229726478,
                      ],
                      [
                        0.15275338713072584,
                        0.15275338713072584,
                        0.14917298647260374,
                        0.14917298647260374,
                        0.14209610931838204,
                        0.14209610931838204,
                        0.13168863844917664,
                        0.13168863844917664,
                        0.11819453196151841,
                        0.11819453196151841,
                        0.10193011981724044,
                        0.10193011981724044,
                        0.08327674157670475,
                        0.08327674157670475,
                        0.06267204833410907,
                        0.06267204833410907,
                        0.04060142980038694,
                        0.04060142980038694,
                        0.017614007139152118,
                        0.017614007139152118,
                      ],
                      [
                        0.14608113364969041,
                        0.14452440398997005,
                        0.14452440398997005,
                        0.13988739479107315,
                        0.13988739479107315,
                        0.13226893863333747,
                        0.13226893863333747,
                        0.12183141605372853,
                        0.12183141605372853,
                        0.10879729916714838,
                        0.10879729916714838,
                        0.09344442345603386,
                        0.09344442345603386,
                        0.0761001136283793,
                        0.0761001136283793,
                        0.057134425426857205,
                        0.057134425426857205,
                        0.036953789770852494,
                        0.036953789770852494,
                        0.016017228257774335,
                        0.016017228257774335,
                      ],
                      [
                        0.13925187285563198,
                        0.13925187285563198,
                        0.13654149834601517,
                        0.13654149834601517,
                        0.13117350478706238,
                        0.13117350478706238,
                        0.12325237681051242,
                        0.12325237681051242,
                        0.11293229608053922,
                        0.11293229608053922,
                        0.10041414444288096,
                        0.10041414444288096,
                        0.08594160621706773,
                        0.08594160621706773,
                        0.06979646842452049,
                        0.06979646842452049,
                        0.052293335152683286,
                        0.052293335152683286,
                        0.03377490158481415,
                        0.03377490158481415,
                        0.0146279952982722,
                        0.0146279952982722,
                      ],
                      [
                        0.13365457218610619,
                        0.1324620394046966,
                        0.1324620394046966,
                        0.12890572218808216,
                        0.12890572218808216,
                        0.12304908430672953,
                        0.12304908430672953,
                        0.11499664022241136,
                        0.11499664022241136,
                        0.10489209146454141,
                        0.10489209146454141,
                        0.09291576606003515,
                        0.09291576606003515,
                        0.07928141177671895,
                        0.07928141177671895,
                        0.06423242140852585,
                        0.06423242140852585,
                        0.04803767173108467,
                        0.04803767173108467,
                        0.030988005856979445,
                        0.030988005856979445,
                        0.013411859487141771,
                        0.013411859487141771,
                      ],
                      [
                        0.12793819534675216,
                        0.12793819534675216,
                        0.1258374563468283,
                        0.1258374563468283,
                        0.12167047292780339,
                        0.12167047292780339,
                        0.1155056680537256,
                        0.1155056680537256,
                        0.10744427011596563,
                        0.10744427011596563,
                        0.09761865210411388,
                        0.09761865210411388,
                        0.08619016153195327,
                        0.08619016153195327,
                        0.0733464814110803,
                        0.0733464814110803,
                        0.05929858491543678,
                        0.05929858491543678,
                        0.04427743881741981,
                        0.04427743881741981,
                        0.028531388628933663,
                        0.028531388628933663,
                        0.0123412297999872,
                        0.0123412297999872,
                      ],
                    ],
                    v = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
                  function g(e, t) {
                    return v[e][t];
                  }
                  function y(e, t, n) {
                    var i,
                      r,
                      s,
                      o = n.length - 1;
                    if (0 === o) return 0;
                    if (0 === e) {
                      for (r = 0, s = 0; s <= o; s++)
                        r +=
                          g(o, s) *
                          Math.pow(1 - t, o - s) *
                          Math.pow(t, s) *
                          n[s];
                      return r;
                    }
                    for (i = new Array(o), s = 0; s < o; s++)
                      i[s] = o * (n[s + 1] - n[s]);
                    return y(e - 1, t, i);
                  }
                  function b(e, t, n) {
                    var i = y(1, n, e),
                      r = y(1, n, t),
                      s = i * i + r * r;
                    return Math.sqrt(s);
                  }
                  function x(e, t, n) {
                    var i, r, s, o;
                    for (
                      void 0 === n && (n = 1), i = n / 2, r = 0, s = 0;
                      s < 20;
                      s++
                    )
                      (o = i * m[20][s] + i), (r += f[20][s] * b(e, t, o));
                    return i * r;
                  }
                  var w = 2 * Math.PI;
                  function k(e, t, n, i) {
                    var r = e * n + t * i;
                    return (
                      r > 1 && (r = 1),
                      r < -1 && (r = -1),
                      (e * i - t * n < 0 ? -1 : 1) * Math.acos(r)
                    );
                  }
                  function C(e, t) {
                    var n = (4 / 3) * Math.tan(t / 4),
                      i = Math.cos(e),
                      r = Math.sin(e),
                      s = Math.cos(e + t),
                      o = Math.sin(e + t);
                    return [
                      i,
                      r,
                      i - r * n,
                      r + i * n,
                      s + o * n,
                      o - s * n,
                      s,
                      o,
                    ];
                  }
                  var E = function (e, t, n, i, r, s, o, a, l) {
                      var c = Math.sin((r * w) / 360),
                        u = Math.cos((r * w) / 360),
                        p = (u * (e - a)) / 2 + (c * (t - l)) / 2,
                        h = (-c * (e - a)) / 2 + (u * (t - l)) / 2;
                      if (0 === p && 0 === h) return [];
                      if (0 === n || 0 === i) return [];
                      (n = Math.abs(n)), (i = Math.abs(i));
                      var d = (p * p) / (n * n) + (h * h) / (i * i);
                      d > 1 && ((n *= Math.sqrt(d)), (i *= Math.sqrt(d)));
                      var m = (function (e, t, n, i, r, s, o, a, l, c) {
                          var u = (c * (e - n)) / 2 + (l * (t - i)) / 2,
                            p = (-l * (e - n)) / 2 + (c * (t - i)) / 2,
                            h = o * o,
                            d = a * a,
                            m = u * u,
                            f = p * p,
                            v = h * d - h * f - d * m;
                          v < 0 && (v = 0), (v /= h * f + d * m);
                          var g =
                              (((v = Math.sqrt(v) * (r === s ? -1 : 1)) * o) /
                                a) *
                              p,
                            y = ((v * -a) / o) * u,
                            b = c * g - l * y + (e + n) / 2,
                            x = l * g + c * y + (t + i) / 2,
                            C = (u - g) / o,
                            E = (p - y) / a,
                            O = (-u - g) / o,
                            P = (-p - y) / a,
                            I = k(1, 0, C, E),
                            M = k(C, E, O, P);
                          return (
                            0 === s && M > 0 && (M -= w),
                            1 === s && M < 0 && (M += w),
                            [b, x, I, M]
                          );
                        })(e, t, a, l, s, o, n, i, c, u),
                        f = [],
                        v = m[2],
                        g = m[3],
                        y = Math.max(Math.ceil(Math.abs(g) / (w / 4)), 1);
                      g /= y;
                      for (var b = 0; b < y; b++) f.push(C(v, g)), (v += g);
                      return f.map(function (e) {
                        for (var t = 0; t < e.length; t += 2) {
                          var r = e[t + 0],
                            s = e[t + 1],
                            o = u * (r *= n) - c * (s *= i),
                            a = c * r + u * s;
                          (e[t + 0] = o + m[0]), (e[t + 1] = a + m[1]);
                        }
                        return e;
                      });
                    },
                    O = function (e, t, n, i, r, s, o, a, l) {
                      return new P(e, t, n, i, r, s, o, a, l);
                    };
                  function P(e, t, n, i, r, s, a, l, c) {
                    var u = 0,
                      p = [],
                      h = [];
                    E(e, t, n, i, r, s, a, l, c).forEach(function (e) {
                      var t = new o(
                          e[0],
                          e[1],
                          e[2],
                          e[3],
                          e[4],
                          e[5],
                          e[6],
                          e[7]
                        ),
                        n = t.getTotalLength();
                      (u += n), p.push(n), h.push(t);
                    }),
                      (this.length = u),
                      (this.partialLengths = p),
                      (this.curves = h);
                  }
                  P.prototype = {
                    constructor: P,
                    init: function () {},
                    getTotalLength: function () {
                      return this.length;
                    },
                    getPointAtLength: function (e) {
                      e < 0 ? (e = 0) : e > this.length && (e = this.length);
                      for (
                        var t = this.partialLengths.length - 1;
                        this.partialLengths[t] >= e &&
                        this.partialLengths[t] > 0;

                      )
                        t--;
                      t < this.partialLengths.length - 1 && t++;
                      for (var n = 0, i = 0; i < t; i++)
                        n += this.partialLengths[i];
                      return this.curves[t].getPointAtLength(e - n);
                    },
                    getTangentAtLength: function (e) {
                      e < 0 ? (e = 0) : e > this.length && (e = this.length);
                      for (
                        var t = this.partialLengths.length - 1;
                        this.partialLengths[t] >= e &&
                        this.partialLengths[t] > 0;

                      )
                        t--;
                      t < this.partialLengths.length - 1 && t++;
                      for (var n = 0, i = 0; i < t; i++)
                        n += this.partialLengths[i];
                      return this.curves[t].getTangentAtLength(e - n);
                    },
                    getPropertiesAtLength: function (e) {
                      var t = this.getTangentAtLength(e),
                        n = this.getPointAtLength(e);
                      return { x: n.x, y: n.y, tangentX: t.x, tangentY: t.y };
                    },
                  };
                  var I = function (e, t, n, i) {
                    return new M(e, t, n, i);
                  };
                  function M(e, t, n, i) {
                    (this.x0 = e), (this.x1 = t), (this.y0 = n), (this.y1 = i);
                  }
                  (M.prototype.getTotalLength = function () {
                    return Math.sqrt(
                      Math.pow(this.x0 - this.x1, 2) +
                        Math.pow(this.y0 - this.y1, 2)
                    );
                  }),
                    (M.prototype.getPointAtLength = function (e) {
                      var t =
                          e /
                          Math.sqrt(
                            Math.pow(this.x0 - this.x1, 2) +
                              Math.pow(this.y0 - this.y1, 2)
                          ),
                        n = (this.x1 - this.x0) * t,
                        i = (this.y1 - this.y0) * t;
                      return { x: this.x0 + n, y: this.y0 + i };
                    }),
                    (M.prototype.getTangentAtLength = function () {
                      var e = Math.sqrt(
                        (this.x1 - this.x0) * (this.x1 - this.x0) +
                          (this.y1 - this.y0) * (this.y1 - this.y0)
                      );
                      return {
                        x: (this.x1 - this.x0) / e,
                        y: (this.y1 - this.y0) / e,
                      };
                    }),
                    (M.prototype.getPropertiesAtLength = function (e) {
                      var t = this.getPointAtLength(e),
                        n = this.getTangentAtLength();
                      return { x: t.x, y: t.y, tangentX: n.x, tangentY: n.y };
                    }),
                    (e.svgPathProperties = function (e) {
                      var t = 0,
                        n = [],
                        r = [];
                      function s(e) {
                        if (!e) return null;
                        for (
                          var a, l, c = i(e), u = [0, 0], p = [0, 0], h = 0;
                          h < c.length;
                          h++
                        )
                          "M" === c[h][0]
                            ? ((l = [(u = [c[h][1], c[h][2]])[0], u[1]]),
                              r.push(null))
                            : "m" === c[h][0]
                            ? ((l = [
                                (u = [c[h][1] + u[0], c[h][2] + u[1]])[0],
                                u[1],
                              ]),
                              r.push(null))
                            : "L" === c[h][0]
                            ? ((t += Math.sqrt(
                                Math.pow(u[0] - c[h][1], 2) +
                                  Math.pow(u[1] - c[h][2], 2)
                              )),
                              r.push(new I(u[0], c[h][1], u[1], c[h][2])),
                              (u = [c[h][1], c[h][2]]))
                            : "l" === c[h][0]
                            ? ((t += Math.sqrt(
                                Math.pow(c[h][1], 2) + Math.pow(c[h][2], 2)
                              )),
                              r.push(
                                new I(
                                  u[0],
                                  c[h][1] + u[0],
                                  u[1],
                                  c[h][2] + u[1]
                                )
                              ),
                              (u = [c[h][1] + u[0], c[h][2] + u[1]]))
                            : "H" === c[h][0]
                            ? ((t += Math.abs(u[0] - c[h][1])),
                              r.push(new I(u[0], c[h][1], u[1], u[1])),
                              (u[0] = c[h][1]))
                            : "h" === c[h][0]
                            ? ((t += Math.abs(c[h][1])),
                              r.push(new I(u[0], u[0] + c[h][1], u[1], u[1])),
                              (u[0] = c[h][1] + u[0]))
                            : "V" === c[h][0]
                            ? ((t += Math.abs(u[1] - c[h][1])),
                              r.push(new I(u[0], u[0], u[1], c[h][1])),
                              (u[1] = c[h][1]))
                            : "v" === c[h][0]
                            ? ((t += Math.abs(c[h][1])),
                              r.push(new I(u[0], u[0], u[1], u[1] + c[h][1])),
                              (u[1] = c[h][1] + u[1]))
                            : "z" === c[h][0] || "Z" === c[h][0]
                            ? ((t += Math.sqrt(
                                Math.pow(l[0] - u[0], 2) +
                                  Math.pow(l[1] - u[1], 2)
                              )),
                              r.push(new I(u[0], l[0], u[1], l[1])),
                              (u = [l[0], l[1]]))
                            : "C" === c[h][0]
                            ? ((a = new o(
                                u[0],
                                u[1],
                                c[h][1],
                                c[h][2],
                                c[h][3],
                                c[h][4],
                                c[h][5],
                                c[h][6]
                              )),
                              (t += a.getTotalLength()),
                              (u = [c[h][5], c[h][6]]),
                              r.push(a))
                            : "c" === c[h][0]
                            ? ((a = new o(
                                u[0],
                                u[1],
                                u[0] + c[h][1],
                                u[1] + c[h][2],
                                u[0] + c[h][3],
                                u[1] + c[h][4],
                                u[0] + c[h][5],
                                u[1] + c[h][6]
                              )),
                              (t += a.getTotalLength()),
                              (u = [c[h][5] + u[0], c[h][6] + u[1]]),
                              r.push(a))
                            : "S" === c[h][0]
                            ? ((a =
                                h > 0 &&
                                ["C", "c", "S", "s"].indexOf(c[h - 1][0]) > -1
                                  ? new o(
                                      u[0],
                                      u[1],
                                      2 * u[0] - c[h - 1][c[h - 1].length - 4],
                                      2 * u[1] - c[h - 1][c[h - 1].length - 3],
                                      c[h][1],
                                      c[h][2],
                                      c[h][3],
                                      c[h][4]
                                    )
                                  : new o(
                                      u[0],
                                      u[1],
                                      u[0],
                                      u[1],
                                      c[h][1],
                                      c[h][2],
                                      c[h][3],
                                      c[h][4]
                                    )),
                              (t += a.getTotalLength()),
                              (u = [c[h][3], c[h][4]]),
                              r.push(a))
                            : "s" === c[h][0]
                            ? ((a =
                                h > 0 &&
                                ["C", "c", "S", "s"].indexOf(c[h - 1][0]) > -1
                                  ? new o(
                                      u[0],
                                      u[1],
                                      u[0] + a.d.x - a.c.x,
                                      u[1] + a.d.y - a.c.y,
                                      u[0] + c[h][1],
                                      u[1] + c[h][2],
                                      u[0] + c[h][3],
                                      u[1] + c[h][4]
                                    )
                                  : new o(
                                      u[0],
                                      u[1],
                                      u[0],
                                      u[1],
                                      u[0] + c[h][1],
                                      u[1] + c[h][2],
                                      u[0] + c[h][3],
                                      u[1] + c[h][4]
                                    )),
                              (t += a.getTotalLength()),
                              (u = [c[h][3] + u[0], c[h][4] + u[1]]),
                              r.push(a))
                            : "Q" === c[h][0]
                            ? ((a =
                                u[0] != c[h][1] && u[1] != c[h][2]
                                  ? new o(
                                      u[0],
                                      u[1],
                                      c[h][1],
                                      c[h][2],
                                      c[h][3],
                                      c[h][4]
                                    )
                                  : new I(c[h][1], c[h][3], c[h][2], c[h][4])),
                              (t += a.getTotalLength()),
                              r.push(a),
                              (u = [c[h][3], c[h][4]]),
                              (p = [c[h][1], c[h][2]]))
                            : "q" === c[h][0]
                            ? ((a =
                                0 != c[h][1] || 0 != c[h][2]
                                  ? new o(
                                      u[0],
                                      u[1],
                                      u[0] + c[h][1],
                                      u[1] + c[h][2],
                                      u[0] + c[h][3],
                                      u[1] + c[h][4]
                                    )
                                  : new I(
                                      u[0] + c[h][1],
                                      u[0] + c[h][3],
                                      u[1] + c[h][2],
                                      u[1] + c[h][4]
                                    )),
                              (t += a.getTotalLength()),
                              (p = [u[0] + c[h][1], u[1] + c[h][2]]),
                              (u = [c[h][3] + u[0], c[h][4] + u[1]]),
                              r.push(a))
                            : "T" === c[h][0]
                            ? ((a =
                                h > 0 &&
                                ["Q", "q", "T", "t"].indexOf(c[h - 1][0]) > -1
                                  ? new o(
                                      u[0],
                                      u[1],
                                      2 * u[0] - p[0],
                                      2 * u[1] - p[1],
                                      c[h][1],
                                      c[h][2]
                                    )
                                  : new I(u[0], c[h][1], u[1], c[h][2])),
                              r.push(a),
                              (t += a.getTotalLength()),
                              (p = [2 * u[0] - p[0], 2 * u[1] - p[1]]),
                              (u = [c[h][1], c[h][2]]))
                            : "t" === c[h][0]
                            ? ((a =
                                h > 0 &&
                                ["Q", "q", "T", "t"].indexOf(c[h - 1][0]) > -1
                                  ? new o(
                                      u[0],
                                      u[1],
                                      2 * u[0] - p[0],
                                      2 * u[1] - p[1],
                                      u[0] + c[h][1],
                                      u[1] + c[h][2]
                                    )
                                  : new I(
                                      u[0],
                                      u[0] + c[h][1],
                                      u[1],
                                      u[1] + c[h][2]
                                    )),
                              (t += a.getTotalLength()),
                              (p = [2 * u[0] - p[0], 2 * u[1] - p[1]]),
                              (u = [c[h][1] + u[0], c[h][2] + u[0]]),
                              r.push(a))
                            : "A" === c[h][0]
                            ? ((a = new O(
                                u[0],
                                u[1],
                                c[h][1],
                                c[h][2],
                                c[h][3],
                                c[h][4],
                                c[h][5],
                                c[h][6],
                                c[h][7]
                              )),
                              (t += a.getTotalLength()),
                              (u = [c[h][6], c[h][7]]),
                              r.push(a))
                            : "a" === c[h][0] &&
                              ((a = new O(
                                u[0],
                                u[1],
                                c[h][1],
                                c[h][2],
                                c[h][3],
                                c[h][4],
                                c[h][5],
                                u[0] + c[h][6],
                                u[1] + c[h][7]
                              )),
                              (t += a.getTotalLength()),
                              (u = [u[0] + c[h][6], u[1] + c[h][7]]),
                              r.push(a)),
                            n.push(t);
                        return s;
                      }
                      (s.getTotalLength = function () {
                        return t;
                      }),
                        (s.getPointAtLength = function (e) {
                          var t = a(e);
                          return r[t.i].getPointAtLength(t.fraction);
                        }),
                        (s.getTangentAtLength = function (e) {
                          var t = a(e);
                          return r[t.i].getTangentAtLength(t.fraction);
                        }),
                        (s.getPropertiesAtLength = function (e) {
                          var t = a(e);
                          return r[t.i].getPropertiesAtLength(t.fraction);
                        });
                      var a = function (e) {
                        e < 0 ? (e = 0) : e > t && (e = t);
                        for (var i = n.length - 1; n[i] >= e && n[i] > 0; ) i--;
                        return i++, { fraction: e - n[i - 1], i: i };
                      };
                      return s(e);
                    }),
                    (e.parse = i),
                    (e.Bezier = o),
                    Object.defineProperty(e, "__esModule", { value: !0 });
                })(t);
              })((t = { exports: {} }), t.exports),
              t.exports
            );
          })(),
          T =
            (I = M) &&
            I.__esModule &&
            Object.prototype.hasOwnProperty.call(I, "default")
              ? I.default
              : I;
        function S(e, t) {
          return Math.sqrt(
            (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1])
          );
        }
        function A(e, t, n) {
          return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
        }
        function _(e) {
          return "number" == typeof e && isFinite(e);
        }
        const L =
          'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n';
        function D(e, t) {
          const n = e.length + t,
            i =
              (function (e) {
                for (
                  var t,
                    n,
                    i = -1,
                    r = e.length,
                    s = e[r - 1],
                    o = s[0],
                    a = s[1],
                    l = 0;
                  ++i < r;

                )
                  (t = o),
                    (n = a),
                    (t -= o = (s = e[i])[0]),
                    (n -= a = s[1]),
                    (l += Math.sqrt(t * t + n * n));
                return l;
              })(e) / t;
          let r = 0,
            s = 0,
            o = i / 2;
          for (; e.length < n; ) {
            let t = e[r],
              n = e[(r + 1) % e.length],
              a = S(t, n);
            o <= s + a
              ? (e.splice(r + 1, 0, a ? A(t, n, (o - s) / a) : t.slice(0)),
                (o += i))
              : ((s += a), r++);
          }
        }
        function B(e, t) {
          let n, i, r;
          if ("string" == typeof e) {
            let n = (function (e, t) {
              let n = (function (e) {
                return new P(e).abs();
              })(e);
              return (
                (function (e) {
                  let t = e.segments || [],
                    n = [];
                  if (!t.length || "M" !== t[0][0]) return !1;
                  for (let e = 0; e < t.length; e++) {
                    let [i, r, s] = t[e];
                    if (("M" === i && e) || "Z" === i) break;
                    if ("M" === i || "L" === i) n.push([r, s]);
                    else if ("H" === i) n.push([r, n[n.length - 1][1]]);
                    else {
                      if ("V" !== i) return !1;
                      n.push([n[n.length - 1][0], r]);
                    }
                  }
                  return !!n.length && { ring: n };
                })(n) ||
                (function (e, t) {
                  let n,
                    i,
                    r = (function (e) {
                      return e
                        .toString()
                        .split("M")
                        .map((e, t) => ((e = e.trim()), t && e ? "M" + e : e))
                        .filter((e) => e);
                    })(e)[0],
                    s = [],
                    o = 3;
                  if (!r) throw new TypeError(L);
                  (i = (function (e) {
                    if (
                      "undefined" != typeof window &&
                      window &&
                      window.document
                    )
                      try {
                        let t = window.document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        );
                        return t.setAttributeNS(null, "d", e), t;
                      } catch (e) {}
                    return T(e);
                  })(r)),
                    (n = i.getTotalLength()),
                    t && _(t) && t > 0 && (o = Math.max(o, Math.ceil(n / t)));
                  for (let e = 0; e < o; e++) {
                    let t = i.getPointAtLength((n * e) / o);
                    s.push([t.x, t.y]);
                  }
                  return { ring: s, skipBisect: !0 };
                })(n, t)
              );
            })(e, t);
            (e = n.ring), (r = n.skipBisect);
          } else if (!Array.isArray(e)) throw new TypeError(L);
          if (
            ((n = e.slice(0)),
            !(function (e) {
              return e.every(function (e) {
                return Array.isArray(e) && e.length >= 2 && _(e[0]) && _(e[1]);
              });
            })(n))
          )
            throw new TypeError(L);
          return (
            n.length > 1 && S(n[0], n[n.length - 1]) < 1e-9 && n.pop(),
            (i = (function (e) {
              for (var t, n = -1, i = e.length, r = e[i - 1], s = 0; ++n < i; )
                (t = r), (r = e[n]), (s += t[1] * r[0] - t[0] * r[1]);
              return s / 2;
            })(n)),
            i > 0 && n.reverse(),
            !r &&
              t &&
              _(t) &&
              t > 0 &&
              (function (e, t = 1 / 0) {
                for (let n = 0; n < e.length; n++) {
                  let i = e[n],
                    r = n === e.length - 1 ? e[0] : e[n + 1];
                  for (; S(i, r) > t; )
                    (r = A(i, r, 0.5)), e.splice(n + 1, 0, r);
                }
              })(n, t),
            n
          );
        }
        function j(e, t) {
          return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
        }
        var V, N;
        1 === (V = j).length &&
          ((N = V),
          (V = function (e, t) {
            return j(N(e), t);
          }));
        class F extends n.default.Effect {
          onGetContext() {
            this.interpolator = (function (
              e,
              t,
              { maxSegmentLength: n = 10, string: i = !0 } = {}
            ) {
              let r = (function (e, t, n) {
                let i;
                return (
                  (i = e.length - t.length),
                  D(e, i < 0 ? -1 * i : 0),
                  D(t, i > 0 ? i : 0),
                  (function (e, t) {
                    let n,
                      i,
                      r,
                      s = e.length,
                      o = 1 / 0;
                    for (let r = 0; r < s; r++)
                      (i = 0),
                        t.forEach(function (t, n) {
                          let o = S(e[(r + n) % s], t);
                          i += o * o;
                        }),
                        i < o && ((o = i), (n = r));
                    n && ((r = e.splice(0, n)), e.splice(e.length, 0, ...r));
                  })(e, t),
                  (function (e, t, n) {
                    let i = e.map((e, n) =>
                      (function (e, t) {
                        return function (n) {
                          return e.map((e, i) => e + n * (t[i] - e));
                        };
                      })(e, t[n])
                    );
                    return function (e) {
                      let t = i.map((t) => t(e));
                      return n ? "M" + t.join("L") + "Z" : t;
                    };
                  })(e, t, n)
                );
              })(B(e, n), B(t, n), i);
              return !i || ("string" != typeof e && "string" != typeof t)
                ? r
                : (n) =>
                    n < 1e-4 && "string" == typeof e
                      ? e
                      : 1 - n < 1e-4 && "string" == typeof t
                      ? t
                      : r(n);
            })(this.initialValue, this.animAttributes.d);
          }
          getScratchValue() {
            return this.element.getAttribute("d");
          }
          onProgress(e) {
            this.element.setAttribute("d", this.interpolator(e));
          }
        }
        return {
          npm_name: "@kissmybutton/motorcortex-flubber",
          version: "1.1.8",
          incidents: [
            {
              exportable: F,
              name: "Flubber",
              attributesValidationRules: {
                animatedAttrs: {
                  type: "object",
                  props: { d: { type: "any" } },
                },
              },
            },
          ],
        };
      })(n(0));
    }.call(this, n(7)));
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0),
      r = n.n(i),
      s = n(1),
      o = n.n(s),
      a = n(2),
      l = n.n(a);
    const c = r.a.loadPlugin(l.a),
      u = new r.a.HTMLClip({
        id: "my-clip",
        host: document.getElementById("clip"),
        html:
          '\n    <div class="wrapper">\n      <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px">\n        <g transform="scale(30)">\n          <path id="flubber" d="M1,0 L2,2 L0,2 Z"></path>\n        </g>\n      </svg>\n    </div>',
        css:
          "\n    .wrapper{\n      background:white;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      width:100%;\n      height:100%;\n    }\n    #flubber{\n      fill: #8b00ff;\n      display:block;\n    }\n  ",
        containerParams: { width: "400px", height: "300px" },
      }),
      p = new c.Flubber(
        {
          animatedAttrs: {
            d: [
              [0, 0],
              [2, 0],
              [2, 1],
              [1, 2],
              [0, 1],
            ],
          },
        },
        { selector: "#flubber", duration: 2e3 }
      ),
      h = new c.Flubber(
        {
          animatedAttrs: { d: "M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" },
        },
        { selector: "#flubber", duration: 2e3 }
      );
    u.addIncident(p, 0), u.addIncident(h, 2e3), new o.a({ clip: u });
  },
  function (e, t) {},
  function (e, t, n) {
    (function (e) {
      function n(e, t) {
        for (var n = 0, i = e.length - 1; i >= 0; i--) {
          var r = e[i];
          "." === r
            ? e.splice(i, 1)
            : ".." === r
            ? (e.splice(i, 1), n++)
            : n && (e.splice(i, 1), n--);
        }
        if (t) for (; n--; n) e.unshift("..");
        return e;
      }
      function i(e, t) {
        if (e.filter) return e.filter(t);
        for (var n = [], i = 0; i < e.length; i++)
          t(e[i], i, e) && n.push(e[i]);
        return n;
      }
      (t.resolve = function () {
        for (var t = "", r = !1, s = arguments.length - 1; s >= -1 && !r; s--) {
          var o = s >= 0 ? arguments[s] : e.cwd();
          if ("string" != typeof o)
            throw new TypeError("Arguments to path.resolve must be strings");
          o && ((t = o + "/" + t), (r = "/" === o.charAt(0)));
        }
        return (
          (r ? "/" : "") +
            (t = n(
              i(t.split("/"), function (e) {
                return !!e;
              }),
              !r
            ).join("/")) || "."
        );
      }),
        (t.normalize = function (e) {
          var s = t.isAbsolute(e),
            o = "/" === r(e, -1);
          return (
            (e = n(
              i(e.split("/"), function (e) {
                return !!e;
              }),
              !s
            ).join("/")) ||
              s ||
              (e = "."),
            e && o && (e += "/"),
            (s ? "/" : "") + e
          );
        }),
        (t.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(
            i(e, function (e, t) {
              if ("string" != typeof e)
                throw new TypeError("Arguments to path.join must be strings");
              return e;
            }).join("/")
          );
        }),
        (t.relative = function (e, n) {
          function i(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++);
            for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
            return t > n ? [] : e.slice(t, n - t + 1);
          }
          (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
          for (
            var r = i(e.split("/")),
              s = i(n.split("/")),
              o = Math.min(r.length, s.length),
              a = o,
              l = 0;
            l < o;
            l++
          )
            if (r[l] !== s[l]) {
              a = l;
              break;
            }
          var c = [];
          for (l = a; l < r.length; l++) c.push("..");
          return (c = c.concat(s.slice(a))).join("/");
        }),
        (t.sep = "/"),
        (t.delimiter = ":"),
        (t.dirname = function (e) {
          if (("string" != typeof e && (e += ""), 0 === e.length)) return ".";
          for (
            var t = e.charCodeAt(0),
              n = 47 === t,
              i = -1,
              r = !0,
              s = e.length - 1;
            s >= 1;
            --s
          )
            if (47 === (t = e.charCodeAt(s))) {
              if (!r) {
                i = s;
                break;
              }
            } else r = !1;
          return -1 === i
            ? n
              ? "/"
              : "."
            : n && 1 === i
            ? "/"
            : e.slice(0, i);
        }),
        (t.basename = function (e, t) {
          var n = (function (e) {
            "string" != typeof e && (e += "");
            var t,
              n = 0,
              i = -1,
              r = !0;
            for (t = e.length - 1; t >= 0; --t)
              if (47 === e.charCodeAt(t)) {
                if (!r) {
                  n = t + 1;
                  break;
                }
              } else -1 === i && ((r = !1), (i = t + 1));
            return -1 === i ? "" : e.slice(n, i);
          })(e);
          return (
            t &&
              n.substr(-1 * t.length) === t &&
              (n = n.substr(0, n.length - t.length)),
            n
          );
        }),
        (t.extname = function (e) {
          "string" != typeof e && (e += "");
          for (
            var t = -1, n = 0, i = -1, r = !0, s = 0, o = e.length - 1;
            o >= 0;
            --o
          ) {
            var a = e.charCodeAt(o);
            if (47 !== a)
              -1 === i && ((r = !1), (i = o + 1)),
                46 === a
                  ? -1 === t
                    ? (t = o)
                    : 1 !== s && (s = 1)
                  : -1 !== t && (s = -1);
            else if (!r) {
              n = o + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === i ||
            0 === s ||
            (1 === s && t === i - 1 && t === n + 1)
            ? ""
            : e.slice(t, i);
        });
      var r =
        "b" === "ab".substr(-1)
          ? function (e, t, n) {
              return e.substr(t, n);
            }
          : function (e, t, n) {
              return t < 0 && (t = e.length + t), e.substr(t, n);
            };
    }.call(this, n(6)));
  },
  function (e, t) {
    var n,
      i,
      r = (e.exports = {});
    function s() {
      throw new Error("setTimeout has not been defined");
    }
    function o() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === s || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : s;
      } catch (e) {
        n = s;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        i = o;
      }
    })();
    var l,
      c = [],
      u = !1,
      p = -1;
    function h() {
      u &&
        l &&
        ((u = !1), l.length ? (c = l.concat(c)) : (p = -1), c.length && d());
    }
    function d() {
      if (!u) {
        var e = a(h);
        u = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++p < t; ) l && l[p].run();
          (p = -1), (t = c.length);
        }
        (l = null),
          (u = !1),
          (function (e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === o || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(e);
            try {
              i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(e);
      }
    }
    function m(e, t) {
      (this.fun = e), (this.array = t);
    }
    function f() {}
    (r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new m(e, t)), 1 !== c.length || u || a(d);
    }),
      (m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = f),
      (r.addListener = f),
      (r.once = f),
      (r.off = f),
      (r.removeListener = f),
      (r.removeAllListeners = f),
      (r.emit = f),
      (r.prependListener = f),
      (r.prependOnceListener = f),
      (r.listeners = function (e) {
        return [];
      }),
      (r.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
]);
