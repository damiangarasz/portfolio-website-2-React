var Zw = Object.defineProperty;
var n0 = (a) => {
  throw TypeError(a);
};
var e_ = (a, i, r) =>
  i in a
    ? Zw(a, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (a[i] = r);
var sn = (a, i, r) => e_(a, typeof i != "symbol" ? i + "" : i, r),
  ym = (a, i, r) => i.has(a) || n0("Cannot " + r);
var V = (a, i, r) => (
    ym(a, i, "read from private field"), r ? r.call(a) : i.get(a)
  ),
  lt = (a, i, r) =>
    i.has(a)
      ? n0("Cannot add the same private member more than once")
      : i instanceof WeakSet
        ? i.add(a)
        : i.set(a, r),
  Ve = (a, i, r, l) => (
    ym(a, i, "write to private field"), l ? l.call(a, r) : i.set(a, r), r
  ),
  tn = (a, i, r) => (ym(a, i, "access private method"), r);
var Rh = (a, i, r, l) => ({
  set _(f) {
    Ve(a, i, f, r);
  },
  get _() {
    return V(a, i, l);
  },
});
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) l(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const v of m.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && l(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
      m
    );
  }
  function l(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = r(f);
    fetch(f.href, m);
  }
})();
var Ah =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  vm = { exports: {} },
  Ef = {},
  wm = { exports: {} },
  st = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0;
function t_() {
  if (r0) return st;
  r0 = 1;
  var a = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    v = Symbol.for("react.context"),
    S = Symbol.for("react.forward_ref"),
    N = Symbol.for("react.suspense"),
    M = Symbol.for("react.memo"),
    G = Symbol.for("react.lazy"),
    I = Symbol.iterator;
  function R(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (I && C[I]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var H = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $ = Object.assign,
    B = {};
  function z(C, q, pe) {
    (this.props = C),
      (this.context = q),
      (this.refs = B),
      (this.updater = pe || H);
  }
  (z.prototype.isReactComponent = {}),
    (z.prototype.setState = function (C, q) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, C, q, "setState");
    }),
    (z.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    });
  function Y() {}
  Y.prototype = z.prototype;
  function K(C, q, pe) {
    (this.props = C),
      (this.context = q),
      (this.refs = B),
      (this.updater = pe || H);
  }
  var J = (K.prototype = new Y());
  (J.constructor = K), $(J, z.prototype), (J.isPureReactComponent = !0);
  var Q = Array.isArray,
    ee = Object.prototype.hasOwnProperty,
    fe = { current: null },
    de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(C, q, pe) {
    var Qe,
      Ne = {},
      ze = null,
      $e = null;
    if (q != null)
      for (Qe in (q.ref !== void 0 && ($e = q.ref),
      q.key !== void 0 && (ze = "" + q.key),
      q))
        ee.call(q, Qe) && !de.hasOwnProperty(Qe) && (Ne[Qe] = q[Qe]);
    var me = arguments.length - 2;
    if (me === 1) Ne.children = pe;
    else if (1 < me) {
      for (var Ee = Array(me), Se = 0; Se < me; Se++)
        Ee[Se] = arguments[Se + 2];
      Ne.children = Ee;
    }
    if (C && C.defaultProps)
      for (Qe in ((me = C.defaultProps), me))
        Ne[Qe] === void 0 && (Ne[Qe] = me[Qe]);
    return {
      $$typeof: a,
      type: C,
      key: ze,
      ref: $e,
      props: Ne,
      _owner: fe.current,
    };
  }
  function je(C, q) {
    return {
      $$typeof: a,
      type: C.type,
      key: q,
      ref: C.ref,
      props: C.props,
      _owner: C._owner,
    };
  }
  function Te(C) {
    return typeof C == "object" && C !== null && C.$$typeof === a;
  }
  function ge(C) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (pe) {
        return q[pe];
      })
    );
  }
  var he = /\/+/g;
  function ce(C, q) {
    return typeof C == "object" && C !== null && C.key != null
      ? ge("" + C.key)
      : q.toString(36);
  }
  function oe(C, q, pe, Qe, Ne) {
    var ze = typeof C;
    (ze === "undefined" || ze === "boolean") && (C = null);
    var $e = !1;
    if (C === null) $e = !0;
    else
      switch (ze) {
        case "string":
        case "number":
          $e = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case a:
            case i:
              $e = !0;
          }
      }
    if ($e)
      return (
        ($e = C),
        (Ne = Ne($e)),
        (C = Qe === "" ? "." + ce($e, 0) : Qe),
        Q(Ne)
          ? ((pe = ""),
            C != null && (pe = C.replace(he, "$&/") + "/"),
            oe(Ne, q, pe, "", function (Se) {
              return Se;
            }))
          : Ne != null &&
            (Te(Ne) &&
              (Ne = je(
                Ne,
                pe +
                  (!Ne.key || ($e && $e.key === Ne.key)
                    ? ""
                    : ("" + Ne.key).replace(he, "$&/") + "/") +
                  C,
              )),
            q.push(Ne)),
        1
      );
    if ((($e = 0), (Qe = Qe === "" ? "." : Qe + ":"), Q(C)))
      for (var me = 0; me < C.length; me++) {
        ze = C[me];
        var Ee = Qe + ce(ze, me);
        $e += oe(ze, q, pe, Ee, Ne);
      }
    else if (((Ee = R(C)), typeof Ee == "function"))
      for (C = Ee.call(C), me = 0; !(ze = C.next()).done; )
        (ze = ze.value),
          (Ee = Qe + ce(ze, me++)),
          ($e += oe(ze, q, pe, Ee, Ne));
    else if (ze === "object")
      throw (
        ((q = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(C).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return $e;
  }
  function _e(C, q, pe) {
    if (C == null) return C;
    var Qe = [],
      Ne = 0;
    return (
      oe(C, Qe, "", "", function (ze) {
        return q.call(pe, ze, Ne++);
      }),
      Qe
    );
  }
  function Ae(C) {
    if (C._status === -1) {
      var q = C._result;
      (q = q()),
        q.then(
          function (pe) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = pe));
          },
          function (pe) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = pe));
          },
        ),
        C._status === -1 && ((C._status = 0), (C._result = q));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var xe = { current: null },
    j = { transition: null },
    le = {
      ReactCurrentDispatcher: xe,
      ReactCurrentBatchConfig: j,
      ReactCurrentOwner: fe,
    };
  return (
    (st.Children = {
      map: _e,
      forEach: function (C, q, pe) {
        _e(
          C,
          function () {
            q.apply(this, arguments);
          },
          pe,
        );
      },
      count: function (C) {
        var q = 0;
        return (
          _e(C, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (C) {
        return (
          _e(C, function (q) {
            return q;
          }) || []
        );
      },
      only: function (C) {
        if (!Te(C))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return C;
      },
    }),
    (st.Component = z),
    (st.Fragment = r),
    (st.Profiler = f),
    (st.PureComponent = K),
    (st.StrictMode = l),
    (st.Suspense = N),
    (st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le),
    (st.cloneElement = function (C, q, pe) {
      if (C == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            C +
            ".",
        );
      var Qe = $({}, C.props),
        Ne = C.key,
        ze = C.ref,
        $e = C._owner;
      if (q != null) {
        if (
          (q.ref !== void 0 && ((ze = q.ref), ($e = fe.current)),
          q.key !== void 0 && (Ne = "" + q.key),
          C.type && C.type.defaultProps)
        )
          var me = C.type.defaultProps;
        for (Ee in q)
          ee.call(q, Ee) &&
            !de.hasOwnProperty(Ee) &&
            (Qe[Ee] = q[Ee] === void 0 && me !== void 0 ? me[Ee] : q[Ee]);
      }
      var Ee = arguments.length - 2;
      if (Ee === 1) Qe.children = pe;
      else if (1 < Ee) {
        me = Array(Ee);
        for (var Se = 0; Se < Ee; Se++) me[Se] = arguments[Se + 2];
        Qe.children = me;
      }
      return {
        $$typeof: a,
        type: C.type,
        key: Ne,
        ref: ze,
        props: Qe,
        _owner: $e,
      };
    }),
    (st.createContext = function (C) {
      return (
        (C = {
          $$typeof: v,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (C.Provider = { $$typeof: m, _context: C }),
        (C.Consumer = C)
      );
    }),
    (st.createElement = A),
    (st.createFactory = function (C) {
      var q = A.bind(null, C);
      return (q.type = C), q;
    }),
    (st.createRef = function () {
      return { current: null };
    }),
    (st.forwardRef = function (C) {
      return { $$typeof: S, render: C };
    }),
    (st.isValidElement = Te),
    (st.lazy = function (C) {
      return { $$typeof: G, _payload: { _status: -1, _result: C }, _init: Ae };
    }),
    (st.memo = function (C, q) {
      return { $$typeof: M, type: C, compare: q === void 0 ? null : q };
    }),
    (st.startTransition = function (C) {
      var q = j.transition;
      j.transition = {};
      try {
        C();
      } finally {
        j.transition = q;
      }
    }),
    (st.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (st.useCallback = function (C, q) {
      return xe.current.useCallback(C, q);
    }),
    (st.useContext = function (C) {
      return xe.current.useContext(C);
    }),
    (st.useDebugValue = function () {}),
    (st.useDeferredValue = function (C) {
      return xe.current.useDeferredValue(C);
    }),
    (st.useEffect = function (C, q) {
      return xe.current.useEffect(C, q);
    }),
    (st.useId = function () {
      return xe.current.useId();
    }),
    (st.useImperativeHandle = function (C, q, pe) {
      return xe.current.useImperativeHandle(C, q, pe);
    }),
    (st.useInsertionEffect = function (C, q) {
      return xe.current.useInsertionEffect(C, q);
    }),
    (st.useLayoutEffect = function (C, q) {
      return xe.current.useLayoutEffect(C, q);
    }),
    (st.useMemo = function (C, q) {
      return xe.current.useMemo(C, q);
    }),
    (st.useReducer = function (C, q, pe) {
      return xe.current.useReducer(C, q, pe);
    }),
    (st.useRef = function (C) {
      return xe.current.useRef(C);
    }),
    (st.useState = function (C) {
      return xe.current.useState(C);
    }),
    (st.useSyncExternalStore = function (C, q, pe) {
      return xe.current.useSyncExternalStore(C, q, pe);
    }),
    (st.useTransition = function () {
      return xe.current.useTransition();
    }),
    (st.version = "18.2.0"),
    st
  );
}
var i0;
function ig() {
  return i0 || ((i0 = 1), (wm.exports = t_())), wm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var s0;
function n_() {
  if (s0) return Ef;
  s0 = 1;
  var a = ig(),
    i = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(S, N, M) {
    var G,
      I = {},
      R = null,
      H = null;
    M !== void 0 && (R = "" + M),
      N.key !== void 0 && (R = "" + N.key),
      N.ref !== void 0 && (H = N.ref);
    for (G in N) l.call(N, G) && !m.hasOwnProperty(G) && (I[G] = N[G]);
    if (S && S.defaultProps)
      for (G in ((N = S.defaultProps), N)) I[G] === void 0 && (I[G] = N[G]);
    return {
      $$typeof: i,
      type: S,
      key: R,
      ref: H,
      props: I,
      _owner: f.current,
    };
  }
  return (Ef.Fragment = r), (Ef.jsx = v), (Ef.jsxs = v), Ef;
}
var o0;
function r_() {
  return o0 || ((o0 = 1), (vm.exports = n_())), vm.exports;
}
var b = r_(),
  Oh = {},
  _m = { exports: {} },
  gr = {},
  Sm = { exports: {} },
  xm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a0;
function i_() {
  return (
    a0 ||
      ((a0 = 1),
      (function (a) {
        function i(j, le) {
          var C = j.length;
          j.push(le);
          e: for (; 0 < C; ) {
            var q = (C - 1) >>> 1,
              pe = j[q];
            if (0 < f(pe, le)) (j[q] = le), (j[C] = pe), (C = q);
            else break e;
          }
        }
        function r(j) {
          return j.length === 0 ? null : j[0];
        }
        function l(j) {
          if (j.length === 0) return null;
          var le = j[0],
            C = j.pop();
          if (C !== le) {
            j[0] = C;
            e: for (var q = 0, pe = j.length, Qe = pe >>> 1; q < Qe; ) {
              var Ne = 2 * (q + 1) - 1,
                ze = j[Ne],
                $e = Ne + 1,
                me = j[$e];
              if (0 > f(ze, C))
                $e < pe && 0 > f(me, ze)
                  ? ((j[q] = me), (j[$e] = C), (q = $e))
                  : ((j[q] = ze), (j[Ne] = C), (q = Ne));
              else if ($e < pe && 0 > f(me, C))
                (j[q] = me), (j[$e] = C), (q = $e);
              else break e;
            }
          }
          return le;
        }
        function f(j, le) {
          var C = j.sortIndex - le.sortIndex;
          return C !== 0 ? C : j.id - le.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          a.unstable_now = function () {
            return m.now();
          };
        } else {
          var v = Date,
            S = v.now();
          a.unstable_now = function () {
            return v.now() - S;
          };
        }
        var N = [],
          M = [],
          G = 1,
          I = null,
          R = 3,
          H = !1,
          $ = !1,
          B = !1,
          z = typeof setTimeout == "function" ? setTimeout : null,
          Y = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function J(j) {
          for (var le = r(M); le !== null; ) {
            if (le.callback === null) l(M);
            else if (le.startTime <= j)
              l(M), (le.sortIndex = le.expirationTime), i(N, le);
            else break;
            le = r(M);
          }
        }
        function Q(j) {
          if (((B = !1), J(j), !$))
            if (r(N) !== null) ($ = !0), Ae(ee);
            else {
              var le = r(M);
              le !== null && xe(Q, le.startTime - j);
            }
        }
        function ee(j, le) {
          ($ = !1), B && ((B = !1), Y(A), (A = -1)), (H = !0);
          var C = R;
          try {
            for (
              J(le), I = r(N);
              I !== null && (!(I.expirationTime > le) || (j && !ge()));

            ) {
              var q = I.callback;
              if (typeof q == "function") {
                (I.callback = null), (R = I.priorityLevel);
                var pe = q(I.expirationTime <= le);
                (le = a.unstable_now()),
                  typeof pe == "function"
                    ? (I.callback = pe)
                    : I === r(N) && l(N),
                  J(le);
              } else l(N);
              I = r(N);
            }
            if (I !== null) var Qe = !0;
            else {
              var Ne = r(M);
              Ne !== null && xe(Q, Ne.startTime - le), (Qe = !1);
            }
            return Qe;
          } finally {
            (I = null), (R = C), (H = !1);
          }
        }
        var fe = !1,
          de = null,
          A = -1,
          je = 5,
          Te = -1;
        function ge() {
          return !(a.unstable_now() - Te < je);
        }
        function he() {
          if (de !== null) {
            var j = a.unstable_now();
            Te = j;
            var le = !0;
            try {
              le = de(!0, j);
            } finally {
              le ? ce() : ((fe = !1), (de = null));
            }
          } else fe = !1;
        }
        var ce;
        if (typeof K == "function")
          ce = function () {
            K(he);
          };
        else if (typeof MessageChannel < "u") {
          var oe = new MessageChannel(),
            _e = oe.port2;
          (oe.port1.onmessage = he),
            (ce = function () {
              _e.postMessage(null);
            });
        } else
          ce = function () {
            z(he, 0);
          };
        function Ae(j) {
          (de = j), fe || ((fe = !0), ce());
        }
        function xe(j, le) {
          A = z(function () {
            j(a.unstable_now());
          }, le);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            $ || H || (($ = !0), Ae(ee));
          }),
          (a.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (je = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return r(N);
          }),
          (a.unstable_next = function (j) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var le = 3;
                break;
              default:
                le = R;
            }
            var C = R;
            R = le;
            try {
              return j();
            } finally {
              R = C;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (j, le) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var C = R;
            R = j;
            try {
              return le();
            } finally {
              R = C;
            }
          }),
          (a.unstable_scheduleCallback = function (j, le, C) {
            var q = a.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay),
                  (C = typeof C == "number" && 0 < C ? q + C : q))
                : (C = q),
              j)
            ) {
              case 1:
                var pe = -1;
                break;
              case 2:
                pe = 250;
                break;
              case 5:
                pe = 1073741823;
                break;
              case 4:
                pe = 1e4;
                break;
              default:
                pe = 5e3;
            }
            return (
              (pe = C + pe),
              (j = {
                id: G++,
                callback: le,
                priorityLevel: j,
                startTime: C,
                expirationTime: pe,
                sortIndex: -1,
              }),
              C > q
                ? ((j.sortIndex = C),
                  i(M, j),
                  r(N) === null &&
                    j === r(M) &&
                    (B ? (Y(A), (A = -1)) : (B = !0), xe(Q, C - q)))
                : ((j.sortIndex = pe), i(N, j), $ || H || (($ = !0), Ae(ee))),
              j
            );
          }),
          (a.unstable_shouldYield = ge),
          (a.unstable_wrapCallback = function (j) {
            var le = R;
            return function () {
              var C = R;
              R = le;
              try {
                return j.apply(this, arguments);
              } finally {
                R = C;
              }
            };
          });
      })(xm)),
    xm
  );
}
var l0;
function s_() {
  return l0 || ((l0 = 1), (Sm.exports = i_())), Sm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0;
function o_() {
  if (u0) return gr;
  u0 = 1;
  var a = ig(),
    i = s_();
  function r(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        o = 1;
      o < arguments.length;
      o++
    )
      t += "&args[]=" + encodeURIComponent(arguments[o]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    f = {};
  function m(e, t) {
    v(e, t), v(e + "Capture", t);
  }
  function v(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var S = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    N = Object.prototype.hasOwnProperty,
    M =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    G = {},
    I = {};
  function R(e) {
    return N.call(I, e)
      ? !0
      : N.call(G, e)
        ? !1
        : M.test(e)
          ? (I[e] = !0)
          : ((G[e] = !0), !1);
  }
  function H(e, t, o, u) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u
          ? !1
          : o !== null
            ? !o.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function $(e, t, o, u) {
    if (t === null || typeof t > "u" || H(e, t, o, u)) return !0;
    if (u) return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function B(e, t, o, u, d, h, y) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = u),
      (this.attributeNamespace = d),
      (this.mustUseProperty = o),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = h),
      (this.removeEmptyString = y);
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      z[e] = new B(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      z[t] = new B(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        z[e] = new B(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      z[e] = new B(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        z[e] = new B(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      z[e] = new B(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      z[e] = new B(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      z[e] = new B(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      z[e] = new B(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var Y = /[\-:]([a-z])/g;
  function K(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Y, K);
      z[t] = new B(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Y, K);
        z[t] = new B(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Y, K);
      z[t] = new B(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      z[e] = new B(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (z.xlinkHref = new B(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      z[e] = new B(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function J(e, t, o, u) {
    var d = z.hasOwnProperty(t) ? z[t] : null;
    (d !== null
      ? d.type !== 0
      : u ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      ($(t, o, d, u) && (o = null),
      u || d === null
        ? R(t) &&
          (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o))
        : d.mustUseProperty
          ? (e[d.propertyName] = o === null ? (d.type === 3 ? !1 : "") : o)
          : ((t = d.attributeName),
            (u = d.attributeNamespace),
            o === null
              ? e.removeAttribute(t)
              : ((d = d.type),
                (o = d === 3 || (d === 4 && o === !0) ? "" : "" + o),
                u ? e.setAttributeNS(u, t, o) : e.setAttribute(t, o))));
  }
  var Q = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ee = Symbol.for("react.element"),
    fe = Symbol.for("react.portal"),
    de = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    je = Symbol.for("react.profiler"),
    Te = Symbol.for("react.provider"),
    ge = Symbol.for("react.context"),
    he = Symbol.for("react.forward_ref"),
    ce = Symbol.for("react.suspense"),
    oe = Symbol.for("react.suspense_list"),
    _e = Symbol.for("react.memo"),
    Ae = Symbol.for("react.lazy"),
    xe = Symbol.for("react.offscreen"),
    j = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (j && e[j]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var C = Object.assign,
    q;
  function pe(e) {
    if (q === void 0)
      try {
        throw Error();
      } catch (o) {
        var t = o.stack.trim().match(/\n( *(at )?)/);
        q = (t && t[1]) || "";
      }
    return (
      `
` +
      q +
      e
    );
  }
  var Qe = !1;
  function Ne(e, t) {
    if (!e || Qe) return "";
    Qe = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (W) {
            var u = W;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (W) {
            u = W;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          u = W;
        }
        e();
      }
    } catch (W) {
      if (W && u && typeof W.stack == "string") {
        for (
          var d = W.stack.split(`
`),
            h = u.stack.split(`
`),
            y = d.length - 1,
            x = h.length - 1;
          1 <= y && 0 <= x && d[y] !== h[x];

        )
          x--;
        for (; 1 <= y && 0 <= x; y--, x--)
          if (d[y] !== h[x]) {
            if (y !== 1 || x !== 1)
              do
                if ((y--, x--, 0 > x || d[y] !== h[x])) {
                  var k =
                    `
` + d[y].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    k
                  );
                }
              while (1 <= y && 0 <= x);
            break;
          }
      }
    } finally {
      (Qe = !1), (Error.prepareStackTrace = o);
    }
    return (e = e ? e.displayName || e.name : "") ? pe(e) : "";
  }
  function ze(e) {
    switch (e.tag) {
      case 5:
        return pe(e.type);
      case 16:
        return pe("Lazy");
      case 13:
        return pe("Suspense");
      case 19:
        return pe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Ne(e.type, !1)), e;
      case 11:
        return (e = Ne(e.type.render, !1)), e;
      case 1:
        return (e = Ne(e.type, !0)), e;
      default:
        return "";
    }
  }
  function $e(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case de:
        return "Fragment";
      case fe:
        return "Portal";
      case je:
        return "Profiler";
      case A:
        return "StrictMode";
      case ce:
        return "Suspense";
      case oe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ge:
          return (e.displayName || "Context") + ".Consumer";
        case Te:
          return (e._context.displayName || "Context") + ".Provider";
        case he:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case _e:
          return (
            (t = e.displayName || null), t !== null ? t : $e(e.type) || "Memo"
          );
        case Ae:
          (t = e._payload), (e = e._init);
          try {
            return $e(e(t));
          } catch {}
      }
    return null;
  }
  function me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return $e(t);
      case 8:
        return t === A ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Ee(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Se(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ht(e) {
    var t = Se(e) ? "checked" : "value",
      o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      u = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var d = o.get,
        h = o.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (y) {
            (u = "" + y), h.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (y) {
            u = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function pt(e) {
    e._valueTracker || (e._valueTracker = ht(e));
  }
  function rt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var o = t.getValue(),
      u = "";
    return (
      e && (u = Se(e) ? (e.checked ? "true" : "false") : e.value),
      (e = u),
      e !== o ? (t.setValue(e), !0) : !1
    );
  }
  function Ke(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ke(e, t) {
    var o = t.checked;
    return C({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? e._wrapperState.initialChecked,
    });
  }
  function Oe(e, t) {
    var o = t.defaultValue == null ? "" : t.defaultValue,
      u = t.checked != null ? t.checked : t.defaultChecked;
    (o = Ee(t.value != null ? t.value : o)),
      (e._wrapperState = {
        initialChecked: u,
        initialValue: o,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Le(e, t) {
    (t = t.checked), t != null && J(e, "checked", t, !1);
  }
  function Je(e, t) {
    Le(e, t);
    var o = Ee(t.value),
      u = t.type;
    if (o != null)
      u === "number"
        ? ((o === 0 && e.value === "") || e.value != o) && (e.value = "" + o)
        : e.value !== "" + o && (e.value = "" + o);
    else if (u === "submit" || u === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? It(e, t.type, o)
      : t.hasOwnProperty("defaultValue") && It(e, t.type, Ee(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function _t(e, t, o) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var u = t.type;
      if (
        !(
          (u !== "submit" && u !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        o || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (o = e.name),
      o !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      o !== "" && (e.name = o);
  }
  function It(e, t, o) {
    (t !== "number" || Ke(e.ownerDocument) !== e) &&
      (o == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
  }
  var xt = Array.isArray;
  function gt(e, t, o, u) {
    if (((e = e.options), t)) {
      t = {};
      for (var d = 0; d < o.length; d++) t["$" + o[d]] = !0;
      for (o = 0; o < e.length; o++)
        (d = t.hasOwnProperty("$" + e[o].value)),
          e[o].selected !== d && (e[o].selected = d),
          d && u && (e[o].defaultSelected = !0);
    } else {
      for (o = "" + Ee(o), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === o) {
          (e[d].selected = !0), u && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
    return C({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function In(e, t) {
    var o = t.value;
    if (o == null) {
      if (((o = t.children), (t = t.defaultValue), o != null)) {
        if (t != null) throw Error(r(92));
        if (xt(o)) {
          if (1 < o.length) throw Error(r(93));
          o = o[0];
        }
        t = o;
      }
      t == null && (t = ""), (o = t);
    }
    e._wrapperState = { initialValue: Ee(o) };
  }
  function Sr(e, t) {
    var o = Ee(t.value),
      u = Ee(t.defaultValue);
    o != null &&
      ((o = "" + o),
      o !== e.value && (e.value = o),
      t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)),
      u != null && (e.defaultValue = "" + u);
  }
  function jr(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Bo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function zr(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Bo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Mn,
    rr = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, o, u, d) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, o, u, d);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Mn = Mn || document.createElement("div"),
            Mn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Mn.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function $r(e, t) {
    if (t) {
      var o = e.firstChild;
      if (o && o === e.lastChild && o.nodeType === 3) {
        o.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    jo = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Hn).forEach(function (e) {
    jo.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hn[t] = Hn[e]);
    });
  });
  function Wa(e, t, o) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : o || typeof t != "number" || t === 0 || (Hn.hasOwnProperty(e) && Hn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ga(e, t) {
    e = e.style;
    for (var o in t)
      if (t.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0,
          d = Wa(o, t[o], u);
        o === "float" && (o = "cssFloat"), u ? e.setProperty(o, d) : (e[o] = d);
      }
  }
  var Hu = C(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function zo(e, t) {
    if (t) {
      if (Hu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(r(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(r(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(r(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(r(62));
    }
  }
  function $o(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var qu = null;
  function Ku(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vu = null,
    os = null,
    as = null;
  function qf(e) {
    if ((e = dn(e))) {
      if (typeof Vu != "function") throw Error(r(280));
      var t = e.stateNode;
      t && ((t = Sl(t)), Vu(e.stateNode, e.type, t));
    }
  }
  function Kf(e) {
    os ? (as ? as.push(e) : (as = [e])) : (os = e);
  }
  function Vf() {
    if (os) {
      var e = os,
        t = as;
      if (((as = os = null), qf(e), t)) for (e = 0; e < t.length; e++) qf(t[e]);
    }
  }
  function Qf(e, t) {
    return e(t);
  }
  function Qu() {}
  var Ju = !1;
  function Jf(e, t, o) {
    if (Ju) return e(t, o);
    Ju = !0;
    try {
      return Qf(e, t, o);
    } finally {
      (Ju = !1), (os !== null || as !== null) && (Qu(), Vf());
    }
  }
  function Uo(e, t) {
    var o = e.stateNode;
    if (o === null) return null;
    var u = Sl(o);
    if (u === null) return null;
    o = u[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((e = e.type),
          (u = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !u);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (o && typeof o != "function") throw Error(r(231, t, typeof o));
    return o;
  }
  var Wo = !1;
  if (S)
    try {
      var Go = {};
      Object.defineProperty(Go, "passive", {
        get: function () {
          Wo = !0;
        },
      }),
        window.addEventListener("test", Go, Go),
        window.removeEventListener("test", Go, Go);
    } catch {
      Wo = !1;
    }
  function Xu(e, t, o, u, d, h, y, x, k) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(o, W);
    } catch (re) {
      this.onError(re);
    }
  }
  var Ho = !1,
    Ha = null,
    qa = !1,
    Yu = null,
    pp = {
      onError: function (e) {
        (Ho = !0), (Ha = e);
      },
    };
  function mp(e, t, o, u, d, h, y, x, k) {
    (Ho = !1), (Ha = null), Xu.apply(pp, arguments);
  }
  function gp(e, t, o, u, d, h, y, x, k) {
    if ((mp.apply(this, arguments), Ho)) {
      if (Ho) {
        var W = Ha;
        (Ho = !1), (Ha = null);
      } else throw Error(r(198));
      qa || ((qa = !0), (Yu = W));
    }
  }
  function ls(e) {
    var t = e,
      o = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (o = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? o : null;
  }
  function Zu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Xf(e) {
    if (ls(e) !== e) throw Error(r(188));
  }
  function yp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ls(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var o = e, u = t; ; ) {
      var d = o.return;
      if (d === null) break;
      var h = d.alternate;
      if (h === null) {
        if (((u = d.return), u !== null)) {
          o = u;
          continue;
        }
        break;
      }
      if (d.child === h.child) {
        for (h = d.child; h; ) {
          if (h === o) return Xf(d), e;
          if (h === u) return Xf(d), t;
          h = h.sibling;
        }
        throw Error(r(188));
      }
      if (o.return !== u.return) (o = d), (u = h);
      else {
        for (var y = !1, x = d.child; x; ) {
          if (x === o) {
            (y = !0), (o = d), (u = h);
            break;
          }
          if (x === u) {
            (y = !0), (u = d), (o = h);
            break;
          }
          x = x.sibling;
        }
        if (!y) {
          for (x = h.child; x; ) {
            if (x === o) {
              (y = !0), (o = h), (u = d);
              break;
            }
            if (x === u) {
              (y = !0), (u = h), (o = d);
              break;
            }
            x = x.sibling;
          }
          if (!y) throw Error(r(189));
        }
      }
      if (o.alternate !== u) throw Error(r(190));
    }
    if (o.tag !== 3) throw Error(r(188));
    return o.stateNode.current === o ? e : t;
  }
  function Yf(e) {
    return (e = yp(e)), e !== null ? Zf(e) : null;
  }
  function Zf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Zf(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ed = i.unstable_scheduleCallback,
    td = i.unstable_cancelCallback,
    Ka = i.unstable_shouldYield,
    vp = i.unstable_requestPaint,
    Tt = i.unstable_now,
    wp = i.unstable_getCurrentPriorityLevel,
    ec = i.unstable_ImmediatePriority,
    nd = i.unstable_UserBlockingPriority,
    qo = i.unstable_NormalPriority,
    rd = i.unstable_LowPriority,
    tc = i.unstable_IdlePriority,
    Va = null,
    Ur = null;
  function _p(e) {
    if (Ur && typeof Ur.onCommitFiberRoot == "function")
      try {
        Ur.onCommitFiberRoot(Va, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var xr = Math.clz32 ? Math.clz32 : od,
    id = Math.log,
    sd = Math.LN2;
  function od(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((id(e) / sd) | 0)) | 0;
  }
  var js = 64,
    Qa = 4194304;
  function zs(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function us(e, t) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var u = 0,
      d = e.suspendedLanes,
      h = e.pingedLanes,
      y = o & 268435455;
    if (y !== 0) {
      var x = y & ~d;
      x !== 0 ? (u = zs(x)) : ((h &= y), h !== 0 && (u = zs(h)));
    } else (y = o & ~d), y !== 0 ? (u = zs(y)) : h !== 0 && (u = zs(h));
    if (u === 0) return 0;
    if (
      t !== 0 &&
      t !== u &&
      !(t & d) &&
      ((d = u & -u), (h = t & -t), d >= h || (d === 16 && (h & 4194240) !== 0))
    )
      return t;
    if ((u & 4 && (u |= o & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= u; 0 < t; )
        (o = 31 - xr(t)), (d = 1 << o), (u |= e[o]), (t &= ~d);
    return u;
  }
  function ad(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sp(e, t) {
    for (
      var o = e.suspendedLanes,
        u = e.pingedLanes,
        d = e.expirationTimes,
        h = e.pendingLanes;
      0 < h;

    ) {
      var y = 31 - xr(h),
        x = 1 << y,
        k = d[y];
      k === -1
        ? (!(x & o) || x & u) && (d[y] = ad(x, t))
        : k <= t && (e.expiredLanes |= x),
        (h &= ~x);
    }
  }
  function Ja(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function nc() {
    var e = js;
    return (js <<= 1), !(js & 4194240) && (js = 64), e;
  }
  function Ko(e) {
    for (var t = [], o = 0; 31 > o; o++) t.push(e);
    return t;
  }
  function Vo(e, t, o) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - xr(t)),
      (e[t] = o);
  }
  function ld(e, t) {
    var o = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var u = e.eventTimes;
    for (e = e.expirationTimes; 0 < o; ) {
      var d = 31 - xr(o),
        h = 1 << d;
      (t[d] = 0), (u[d] = -1), (e[d] = -1), (o &= ~h);
    }
  }
  function Qo(e, t) {
    var o = (e.entangledLanes |= t);
    for (e = e.entanglements; o; ) {
      var u = 31 - xr(o),
        d = 1 << u;
      (d & t) | (e[u] & t) && (e[u] |= t), (o &= ~d);
    }
  }
  var mt = 0;
  function cs(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var rc,
    Xa,
    ud,
    ic,
    sc,
    Ya = !1,
    Jo = [],
    Ei = null,
    Ci = null,
    Ii = null,
    $s = new Map(),
    Xo = new Map(),
    ki = [],
    xp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function cd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ei = null;
        break;
      case "dragenter":
      case "dragleave":
        Ci = null;
        break;
      case "mouseover":
      case "mouseout":
        Ii = null;
        break;
      case "pointerover":
      case "pointerout":
        $s.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xo.delete(t.pointerId);
    }
  }
  function fs(e, t, o, u, d, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = {
          blockedOn: t,
          domEventName: o,
          eventSystemFlags: u,
          nativeEvent: h,
          targetContainers: [d],
        }),
        t !== null && ((t = dn(t)), t !== null && Xa(t)),
        e)
      : ((e.eventSystemFlags |= u),
        (t = e.targetContainers),
        d !== null && t.indexOf(d) === -1 && t.push(d),
        e);
  }
  function Ep(e, t, o, u, d) {
    switch (t) {
      case "focusin":
        return (Ei = fs(Ei, e, t, o, u, d)), !0;
      case "dragenter":
        return (Ci = fs(Ci, e, t, o, u, d)), !0;
      case "mouseover":
        return (Ii = fs(Ii, e, t, o, u, d)), !0;
      case "pointerover":
        var h = d.pointerId;
        return $s.set(h, fs($s.get(h) || null, e, t, o, u, d)), !0;
      case "gotpointercapture":
        return (
          (h = d.pointerId), Xo.set(h, fs(Xo.get(h) || null, e, t, o, u, d)), !0
        );
    }
    return !1;
  }
  function fd(e) {
    var t = qr(e.target);
    if (t !== null) {
      var o = ls(t);
      if (o !== null) {
        if (((t = o.tag), t === 13)) {
          if (((t = Zu(o)), t !== null)) {
            (e.blockedOn = t),
              sc(e.priority, function () {
                ud(o);
              });
            return;
          }
        } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Za(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var o = nl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (o === null) {
        o = e.nativeEvent;
        var u = new o.constructor(o.type, o);
        (qu = u), o.target.dispatchEvent(u), (qu = null);
      } else return (t = dn(o)), t !== null && Xa(t), (e.blockedOn = o), !1;
      t.shift();
    }
    return !0;
  }
  function dd(e, t, o) {
    Za(e) && o.delete(t);
  }
  function Cp() {
    (Ya = !1),
      Ei !== null && Za(Ei) && (Ei = null),
      Ci !== null && Za(Ci) && (Ci = null),
      Ii !== null && Za(Ii) && (Ii = null),
      $s.forEach(dd),
      Xo.forEach(dd);
  }
  function St(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ya ||
        ((Ya = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Cp)));
  }
  function vt(e) {
    function t(d) {
      return St(d, e);
    }
    if (0 < Jo.length) {
      St(Jo[0], e);
      for (var o = 1; o < Jo.length; o++) {
        var u = Jo[o];
        u.blockedOn === e && (u.blockedOn = null);
      }
    }
    for (
      Ei !== null && St(Ei, e),
        Ci !== null && St(Ci, e),
        Ii !== null && St(Ii, e),
        $s.forEach(t),
        Xo.forEach(t),
        o = 0;
      o < ki.length;
      o++
    )
      (u = ki[o]), u.blockedOn === e && (u.blockedOn = null);
    for (; 0 < ki.length && ((o = ki[0]), o.blockedOn === null); )
      fd(o), o.blockedOn === null && ki.shift();
  }
  var Us = Q.ReactCurrentBatchConfig,
    el = !0;
  function Ip(e, t, o, u) {
    var d = mt,
      h = Us.transition;
    Us.transition = null;
    try {
      (mt = 1), oc(e, t, o, u);
    } finally {
      (mt = d), (Us.transition = h);
    }
  }
  function kp(e, t, o, u) {
    var d = mt,
      h = Us.transition;
    Us.transition = null;
    try {
      (mt = 4), oc(e, t, o, u);
    } finally {
      (mt = d), (Us.transition = h);
    }
  }
  function oc(e, t, o, u) {
    if (el) {
      var d = nl(e, t, o, u);
      if (d === null) Ec(e, t, u, tl, o), cd(e, u);
      else if (Ep(d, e, t, o, u)) u.stopPropagation();
      else if ((cd(e, u), t & 4 && -1 < xp.indexOf(e))) {
        for (; d !== null; ) {
          var h = dn(d);
          if (
            (h !== null && rc(h),
            (h = nl(e, t, o, u)),
            h === null && Ec(e, t, u, tl, o),
            h === d)
          )
            break;
          d = h;
        }
        d !== null && u.stopPropagation();
      } else Ec(e, t, u, null, o);
    }
  }
  var tl = null;
  function nl(e, t, o, u) {
    if (((tl = null), (e = Ku(u)), (e = qr(e)), e !== null))
      if (((t = ls(e)), t === null)) e = null;
      else if (((o = t.tag), o === 13)) {
        if (((e = Zu(t)), e !== null)) return e;
        e = null;
      } else if (o === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (tl = e), null;
  }
  function hd(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (wp()) {
          case ec:
            return 1;
          case nd:
            return 4;
          case qo:
          case rd:
            return 16;
          case tc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Lt = null,
    Yo = null,
    Wr = null;
  function ac() {
    if (Wr) return Wr;
    var e,
      t = Yo,
      o = t.length,
      u,
      d = "value" in Lt ? Lt.value : Lt.textContent,
      h = d.length;
    for (e = 0; e < o && t[e] === d[e]; e++);
    var y = o - e;
    for (u = 1; u <= y && t[o - u] === d[h - u]; u++);
    return (Wr = d.slice(e, 1 < u ? 1 - u : void 0));
  }
  function Ws(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function kn() {
    return !0;
  }
  function lc() {
    return !1;
  }
  function Fn(e) {
    function t(o, u, d, h, y) {
      (this._reactName = o),
        (this._targetInst = d),
        (this.type = u),
        (this.nativeEvent = h),
        (this.target = y),
        (this.currentTarget = null);
      for (var x in e)
        e.hasOwnProperty(x) && ((o = e[x]), (this[x] = o ? o(h) : h[x]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? kn
          : lc),
        (this.isPropagationStopped = lc),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != "unknown" && (o.returnValue = !1),
            (this.isDefaultPrevented = kn));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
            (this.isPropagationStopped = kn));
        },
        persist: function () {},
        isPersistent: kn,
      }),
      t
    );
  }
  var ds = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    rl = Fn(ds),
    Gs = C({}, ds, { view: 0, detail: 0 }),
    pd = Fn(Gs),
    Pn,
    uc,
    cn,
    il = C({}, Gs, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== cn &&
              (cn && e.type === "mousemove"
                ? ((Pn = e.screenX - cn.screenX), (uc = e.screenY - cn.screenY))
                : (uc = Pn = 0),
              (cn = e)),
            Pn);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : uc;
      },
    }),
    cc = Fn(il),
    Pi = C({}, il, { dataTransfer: 0 }),
    sl = Fn(Pi),
    fc = C({}, Gs, { relatedTarget: 0 }),
    kt = Fn(fc),
    Ri = C({}, ds, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dc = Fn(Ri),
    Pp = C({}, ds, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hc = Fn(Pp),
    Rp = C({}, ds, { data: 0 }),
    md = Fn(Rp),
    Ap = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ol = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Hs(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ol[e])
        ? !!t[e]
        : !1;
  }
  function pc() {
    return Hs;
  }
  var yd = C({}, Gs, {
      key: function (e) {
        if (e.key) {
          var t = Ap[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ws(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? gd[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pc,
      charCode: function (e) {
        return e.type === "keypress" ? Ws(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ws(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    vd = Fn(yd),
    mc = C({}, il, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    al = Fn(mc),
    wd = C({}, Gs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pc,
    }),
    Op = Fn(wd),
    gc = C({}, ds, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yc = Fn(gc),
    Np = C({}, il, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _d = Fn(Np),
    qn = [9, 13, 27, 32],
    Zo = S && "CompositionEvent" in window,
    ii = null;
  S && "documentMode" in document && (ii = document.documentMode);
  var Sd = S && "TextEvent" in window && !ii,
    vc = S && (!Zo || (ii && 8 < ii && 11 >= ii)),
    xd = " ",
    Ed = !1;
  function Cd(e, t) {
    switch (e) {
      case "keyup":
        return qn.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Id(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var qs = !1;
  function Ks(e, t) {
    switch (e) {
      case "compositionend":
        return Id(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ed = !0), xd);
      case "textInput":
        return (e = t.data), e === xd && Ed ? null : e;
      default:
        return null;
    }
  }
  function bp(e, t) {
    if (qs)
      return e === "compositionend" || (!Zo && Cd(e, t))
        ? ((e = ac()), (Wr = Yo = Lt = null), (qs = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return vc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ll(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tp[e.type] : t === "textarea";
  }
  function wc(e, t, o, u) {
    Kf(u),
      (t = yl(t, "onChange")),
      0 < t.length &&
        ((o = new rl("onChange", "change", null, o, u)),
        e.push({ event: o, listeners: t }));
  }
  var ir = null,
    Ai = null;
  function Lp(e) {
    bd(e, 0);
  }
  function ul(e) {
    var t = Xe(e);
    if (rt(t)) return e;
  }
  function Dp(e, t) {
    if (e === "change") return t;
  }
  var hs = !1;
  if (S) {
    var Kn;
    if (S) {
      var cl = "oninput" in document;
      if (!cl) {
        var kd = document.createElement("div");
        kd.setAttribute("oninput", "return;"),
          (cl = typeof kd.oninput == "function");
      }
      Kn = cl;
    } else Kn = !1;
    hs = Kn && (!document.documentMode || 9 < document.documentMode);
  }
  function Pd() {
    ir && (ir.detachEvent("onpropertychange", Rd), (Ai = ir = null));
  }
  function Rd(e) {
    if (e.propertyName === "value" && ul(Ai)) {
      var t = [];
      wc(t, Ai, e, Ku(e)), Jf(Lp, t);
    }
  }
  function Mp(e, t, o) {
    e === "focusin"
      ? (Pd(), (ir = t), (Ai = o), ir.attachEvent("onpropertychange", Rd))
      : e === "focusout" && Pd();
  }
  function Fp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ul(Ai);
  }
  function Vs(e, t) {
    if (e === "click") return ul(t);
  }
  function T(e, t) {
    if (e === "input" || e === "change") return ul(t);
  }
  function X(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var U = typeof Object.is == "function" ? Object.is : X;
  function ve(e, t) {
    if (U(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var o = Object.keys(e),
      u = Object.keys(t);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var d = o[u];
      if (!N.call(t, d) || !U(e[d], t[d])) return !1;
    }
    return !0;
  }
  function qe(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ut(e, t) {
    var o = qe(e);
    e = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (((u = e + o.textContent.length), e <= t && u >= t))
          return { node: o, offset: t - e };
        e = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = qe(o);
    }
  }
  function Ut(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ut(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Et() {
    for (var e = window, t = Ke(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var o = typeof t.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) e = t.contentWindow;
      else break;
      t = Ke(e.document);
    }
    return t;
  }
  function ea(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Bp(e) {
    var t = Et(),
      o = e.focusedElem,
      u = e.selectionRange;
    if (
      t !== o &&
      o &&
      o.ownerDocument &&
      Ut(o.ownerDocument.documentElement, o)
    ) {
      if (u !== null && ea(o)) {
        if (
          ((t = u.start),
          (e = u.end),
          e === void 0 && (e = t),
          "selectionStart" in o)
        )
          (o.selectionStart = t),
            (o.selectionEnd = Math.min(e, o.value.length));
        else if (
          ((e = ((t = o.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var d = o.textContent.length,
            h = Math.min(u.start, d);
          (u = u.end === void 0 ? h : Math.min(u.end, d)),
            !e.extend && h > u && ((d = u), (u = h), (h = d)),
            (d = ut(o, h));
          var y = ut(o, u);
          d &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== d.node ||
              e.anchorOffset !== d.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(d.node, d.offset),
            e.removeAllRanges(),
            h > u
              ? (e.addRange(t), e.extend(y.node, y.offset))
              : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = o; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < t.length; o++)
        (e = t[o]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var sr = S && "documentMode" in document && 11 >= document.documentMode,
    si = null,
    _c = null,
    Gr = null,
    Qs = !1;
  function ta(e, t, o) {
    var u =
      o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Qs ||
      si == null ||
      si !== Ke(u) ||
      ((u = si),
      "selectionStart" in u && ea(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Gr && ve(Gr, u)) ||
        ((Gr = u),
        (u = yl(_c, "onSelect")),
        0 < u.length &&
          ((t = new rl("onSelect", "select", null, t, o)),
          e.push({ event: t, listeners: u }),
          (t.target = si))));
  }
  function ct(e, t) {
    var o = {};
    return (
      (o[e.toLowerCase()] = t.toLowerCase()),
      (o["Webkit" + e] = "webkit" + t),
      (o["Moz" + e] = "moz" + t),
      o
    );
  }
  var Js = {
      animationend: ct("Animation", "AnimationEnd"),
      animationiteration: ct("Animation", "AnimationIteration"),
      animationstart: ct("Animation", "AnimationStart"),
      transitionend: ct("Transition", "TransitionEnd"),
    },
    fl = {},
    na = {};
  S &&
    ((na = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Js.animationend.animation,
      delete Js.animationiteration.animation,
      delete Js.animationstart.animation),
    "TransitionEvent" in window || delete Js.transitionend.transition);
  function dl(e) {
    if (fl[e]) return fl[e];
    if (!Js[e]) return e;
    var t = Js[e],
      o;
    for (o in t) if (t.hasOwnProperty(o) && o in na) return (fl[e] = t[o]);
    return e;
  }
  var Ad = dl("animationend"),
    Od = dl("animationiteration"),
    ra = dl("animationstart"),
    oi = dl("transitionend"),
    ia = new Map(),
    Sc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Er(e, t) {
    ia.set(e, t), m(t, [e]);
  }
  for (var hl = 0; hl < Sc.length; hl++) {
    var pl = Sc[hl],
      ml = pl.toLowerCase(),
      Nd = pl[0].toUpperCase() + pl.slice(1);
    Er(ml, "on" + Nd);
  }
  Er(Ad, "onAnimationEnd"),
    Er(Od, "onAnimationIteration"),
    Er(ra, "onAnimationStart"),
    Er("dblclick", "onDoubleClick"),
    Er("focusin", "onFocus"),
    Er("focusout", "onBlur"),
    Er(oi, "onTransitionEnd"),
    v("onMouseEnter", ["mouseout", "mouseover"]),
    v("onMouseLeave", ["mouseout", "mouseover"]),
    v("onPointerEnter", ["pointerout", "pointerover"]),
    v("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var ai =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    ps = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ai),
    );
  function sa(e, t, o) {
    var u = e.type || "unknown-event";
    (e.currentTarget = o), gp(u, t, void 0, e), (e.currentTarget = null);
  }
  function bd(e, t) {
    t = (t & 4) !== 0;
    for (var o = 0; o < e.length; o++) {
      var u = e[o],
        d = u.event;
      u = u.listeners;
      e: {
        var h = void 0;
        if (t)
          for (var y = u.length - 1; 0 <= y; y--) {
            var x = u[y],
              k = x.instance,
              W = x.currentTarget;
            if (((x = x.listener), k !== h && d.isPropagationStopped()))
              break e;
            sa(d, x, W), (h = k);
          }
        else
          for (y = 0; y < u.length; y++) {
            if (
              ((x = u[y]),
              (k = x.instance),
              (W = x.currentTarget),
              (x = x.listener),
              k !== h && d.isPropagationStopped())
            )
              break e;
            sa(d, x, W), (h = k);
          }
      }
    }
    if (qa) throw ((e = Yu), (qa = !1), (Yu = null), e);
  }
  function At(e, t) {
    var o = t[_l];
    o === void 0 && (o = t[_l] = new Set());
    var u = e + "__bubble";
    o.has(u) || (gl(t, e, 2, !1), o.add(u));
  }
  function xc(e, t, o) {
    var u = 0;
    t && (u |= 4), gl(o, e, u, t);
  }
  var ms = "_reactListening" + Math.random().toString(36).slice(2);
  function Oi(e) {
    if (!e[ms]) {
      (e[ms] = !0),
        l.forEach(function (o) {
          o !== "selectionchange" && (ps.has(o) || xc(o, !1, e), xc(o, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ms] || ((t[ms] = !0), xc("selectionchange", !1, t));
    }
  }
  function gl(e, t, o, u) {
    switch (hd(t)) {
      case 1:
        var d = Ip;
        break;
      case 4:
        d = kp;
        break;
      default:
        d = oc;
    }
    (o = d.bind(null, t, o, e)),
      (d = void 0),
      !Wo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (d = !0),
      u
        ? d !== void 0
          ? e.addEventListener(t, o, { capture: !0, passive: d })
          : e.addEventListener(t, o, !0)
        : d !== void 0
          ? e.addEventListener(t, o, { passive: d })
          : e.addEventListener(t, o, !1);
  }
  function Ec(e, t, o, u, d) {
    var h = u;
    if (!(t & 1) && !(t & 2) && u !== null)
      e: for (;;) {
        if (u === null) return;
        var y = u.tag;
        if (y === 3 || y === 4) {
          var x = u.stateNode.containerInfo;
          if (x === d || (x.nodeType === 8 && x.parentNode === d)) break;
          if (y === 4)
            for (y = u.return; y !== null; ) {
              var k = y.tag;
              if (
                (k === 3 || k === 4) &&
                ((k = y.stateNode.containerInfo),
                k === d || (k.nodeType === 8 && k.parentNode === d))
              )
                return;
              y = y.return;
            }
          for (; x !== null; ) {
            if (((y = qr(x)), y === null)) return;
            if (((k = y.tag), k === 5 || k === 6)) {
              u = h = y;
              continue e;
            }
            x = x.parentNode;
          }
        }
        u = u.return;
      }
    Jf(function () {
      var W = h,
        re = Ku(o),
        ae = [];
      e: {
        var ne = ia.get(e);
        if (ne !== void 0) {
          var we = rl,
            Ie = e;
          switch (e) {
            case "keypress":
              if (Ws(o) === 0) break e;
            case "keydown":
            case "keyup":
              we = vd;
              break;
            case "focusin":
              (Ie = "focus"), (we = kt);
              break;
            case "focusout":
              (Ie = "blur"), (we = kt);
              break;
            case "beforeblur":
            case "afterblur":
              we = kt;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              we = cc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              we = sl;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              we = Op;
              break;
            case Ad:
            case Od:
            case ra:
              we = dc;
              break;
            case oi:
              we = yc;
              break;
            case "scroll":
              we = pd;
              break;
            case "wheel":
              we = _d;
              break;
            case "copy":
            case "cut":
            case "paste":
              we = hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              we = al;
          }
          var Pe = (t & 4) !== 0,
            jt = !Pe && e === "scroll",
            D = Pe ? (ne !== null ? ne + "Capture" : null) : ne;
          Pe = [];
          for (var O = W, F; O !== null; ) {
            F = O;
            var ue = F.stateNode;
            if (
              (F.tag === 5 &&
                ue !== null &&
                ((F = ue),
                D !== null &&
                  ((ue = Uo(O, D)), ue != null && Pe.push(Xs(O, ue, F)))),
              jt)
            )
              break;
            O = O.return;
          }
          0 < Pe.length &&
            ((ne = new we(ne, Ie, null, o, re)),
            ae.push({ event: ne, listeners: Pe }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((ne = e === "mouseover" || e === "pointerover"),
            (we = e === "mouseout" || e === "pointerout"),
            ne &&
              o !== qu &&
              (Ie = o.relatedTarget || o.fromElement) &&
              (qr(Ie) || Ie[Vn]))
          )
            break e;
          if (
            (we || ne) &&
            ((ne =
              re.window === re
                ? re
                : (ne = re.ownerDocument)
                  ? ne.defaultView || ne.parentWindow
                  : window),
            we
              ? ((Ie = o.relatedTarget || o.toElement),
                (we = W),
                (Ie = Ie ? qr(Ie) : null),
                Ie !== null &&
                  ((jt = ls(Ie)),
                  Ie !== jt || (Ie.tag !== 5 && Ie.tag !== 6)) &&
                  (Ie = null))
              : ((we = null), (Ie = W)),
            we !== Ie)
          ) {
            if (
              ((Pe = cc),
              (ue = "onMouseLeave"),
              (D = "onMouseEnter"),
              (O = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Pe = al),
                (ue = "onPointerLeave"),
                (D = "onPointerEnter"),
                (O = "pointer")),
              (jt = we == null ? ne : Xe(we)),
              (F = Ie == null ? ne : Xe(Ie)),
              (ne = new Pe(ue, O + "leave", we, o, re)),
              (ne.target = jt),
              (ne.relatedTarget = F),
              (ue = null),
              qr(re) === W &&
                ((Pe = new Pe(D, O + "enter", Ie, o, re)),
                (Pe.target = F),
                (Pe.relatedTarget = jt),
                (ue = Pe)),
              (jt = ue),
              we && Ie)
            )
              t: {
                for (Pe = we, D = Ie, O = 0, F = Pe; F; F = Ys(F)) O++;
                for (F = 0, ue = D; ue; ue = Ys(ue)) F++;
                for (; 0 < O - F; ) (Pe = Ys(Pe)), O--;
                for (; 0 < F - O; ) (D = Ys(D)), F--;
                for (; O--; ) {
                  if (Pe === D || (D !== null && Pe === D.alternate)) break t;
                  (Pe = Ys(Pe)), (D = Ys(D));
                }
                Pe = null;
              }
            else Pe = null;
            we !== null && Wt(ae, ne, we, Pe, !1),
              Ie !== null && jt !== null && Wt(ae, jt, Ie, Pe, !0);
          }
        }
        e: {
          if (
            ((ne = W ? Xe(W) : window),
            (we = ne.nodeName && ne.nodeName.toLowerCase()),
            we === "select" || (we === "input" && ne.type === "file"))
          )
            var Re = Dp;
          else if (ll(ne))
            if (hs) Re = T;
            else {
              Re = Fp;
              var Me = Mp;
            }
          else
            (we = ne.nodeName) &&
              we.toLowerCase() === "input" &&
              (ne.type === "checkbox" || ne.type === "radio") &&
              (Re = Vs);
          if (Re && (Re = Re(e, W))) {
            wc(ae, Re, o, re);
            break e;
          }
          Me && Me(e, ne, W),
            e === "focusout" &&
              (Me = ne._wrapperState) &&
              Me.controlled &&
              ne.type === "number" &&
              It(ne, "number", ne.value);
        }
        switch (((Me = W ? Xe(W) : window), e)) {
          case "focusin":
            (ll(Me) || Me.contentEditable === "true") &&
              ((si = Me), (_c = W), (Gr = null));
            break;
          case "focusout":
            Gr = _c = si = null;
            break;
          case "mousedown":
            Qs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Qs = !1), ta(ae, o, re);
            break;
          case "selectionchange":
            if (sr) break;
          case "keydown":
          case "keyup":
            ta(ae, o, re);
        }
        var Be;
        if (Zo)
          e: {
            switch (e) {
              case "compositionstart":
                var Ge = "onCompositionStart";
                break e;
              case "compositionend":
                Ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ge = "onCompositionUpdate";
                break e;
            }
            Ge = void 0;
          }
        else
          qs
            ? Cd(e, o) && (Ge = "onCompositionEnd")
            : e === "keydown" &&
              o.keyCode === 229 &&
              (Ge = "onCompositionStart");
        Ge &&
          (vc &&
            o.locale !== "ko" &&
            (qs || Ge !== "onCompositionStart"
              ? Ge === "onCompositionEnd" && qs && (Be = ac())
              : ((Lt = re),
                (Yo = "value" in Lt ? Lt.value : Lt.textContent),
                (qs = !0))),
          (Me = yl(W, Ge)),
          0 < Me.length &&
            ((Ge = new md(Ge, e, null, o, re)),
            ae.push({ event: Ge, listeners: Me }),
            Be
              ? (Ge.data = Be)
              : ((Be = Id(o)), Be !== null && (Ge.data = Be)))),
          (Be = Sd ? Ks(e, o) : bp(e, o)) &&
            ((W = yl(W, "onBeforeInput")),
            0 < W.length &&
              ((re = new md("onBeforeInput", "beforeinput", null, o, re)),
              ae.push({ event: re, listeners: W }),
              (re.data = Be)));
      }
      bd(ae, t);
    });
  }
  function Xs(e, t, o) {
    return { instance: e, listener: t, currentTarget: o };
  }
  function yl(e, t) {
    for (var o = t + "Capture", u = []; e !== null; ) {
      var d = e,
        h = d.stateNode;
      d.tag === 5 &&
        h !== null &&
        ((d = h),
        (h = Uo(e, o)),
        h != null && u.unshift(Xs(e, h, d)),
        (h = Uo(e, t)),
        h != null && u.push(Xs(e, h, d))),
        (e = e.return);
    }
    return u;
  }
  function Ys(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Wt(e, t, o, u, d) {
    for (var h = t._reactName, y = []; o !== null && o !== u; ) {
      var x = o,
        k = x.alternate,
        W = x.stateNode;
      if (k !== null && k === u) break;
      x.tag === 5 &&
        W !== null &&
        ((x = W),
        d
          ? ((k = Uo(o, h)), k != null && y.unshift(Xs(o, k, x)))
          : d || ((k = Uo(o, h)), k != null && y.push(Xs(o, k, x)))),
        (o = o.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var fn = /\r\n?/g,
    jp = /\u0000|\uFFFD/g;
  function Td(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        fn,
        `
`,
      )
      .replace(jp, "");
  }
  function oa(e, t, o) {
    if (((t = Td(t)), Td(e) !== t && o)) throw Error(r(425));
  }
  function vl() {}
  var aa = null,
    gs = null;
  function la(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ni = typeof setTimeout == "function" ? setTimeout : void 0,
    ua = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zs = typeof Promise == "function" ? Promise : void 0,
    wl =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zs < "u"
          ? function (e) {
              return Zs.resolve(null).then(e).catch(eo);
            }
          : Ni;
  function eo(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Cc(e, t) {
    var o = t,
      u = 0;
    do {
      var d = o.nextSibling;
      if ((e.removeChild(o), d && d.nodeType === 8))
        if (((o = d.data), o === "/$")) {
          if (u === 0) {
            e.removeChild(d), vt(t);
            return;
          }
          u--;
        } else (o !== "$" && o !== "$?" && o !== "$!") || u++;
      o = d;
    } while (o);
    vt(t);
  }
  function bi(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ld(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (t === 0) return e;
          t--;
        } else o === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var to = Math.random().toString(36).slice(2),
    Hr = "__reactFiber$" + to,
    Ti = "__reactProps$" + to,
    Vn = "__reactContainer$" + to,
    _l = "__reactEvents$" + to,
    w = "__reactListeners$" + to,
    no = "__reactHandles$" + to;
  function qr(e) {
    var t = e[Hr];
    if (t) return t;
    for (var o = e.parentNode; o; ) {
      if ((t = o[Vn] || o[Hr])) {
        if (
          ((o = t.alternate),
          t.child !== null || (o !== null && o.child !== null))
        )
          for (e = Ld(e); e !== null; ) {
            if ((o = e[Hr])) return o;
            e = Ld(e);
          }
        return t;
      }
      (e = o), (o = e.parentNode);
    }
    return null;
  }
  function dn(e) {
    return (
      (e = e[Hr] || e[Vn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Xe(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Sl(e) {
    return e[Ti] || null;
  }
  var Ic = [],
    ro = -1;
  function Bn(e) {
    return { current: e };
  }
  function Ot(e) {
    0 > ro || ((e.current = Ic[ro]), (Ic[ro] = null), ro--);
  }
  function Pt(e, t) {
    ro++, (Ic[ro] = e.current), (e.current = t);
  }
  var Li = {},
    hn = Bn(Li),
    jn = Bn(!1),
    Rn = Li;
  function io(e, t) {
    var o = e.type.contextTypes;
    if (!o) return Li;
    var u = e.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
      return u.__reactInternalMemoizedMaskedChildContext;
    var d = {},
      h;
    for (h in o) d[h] = t[h];
    return (
      u &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      d
    );
  }
  function zn(e) {
    return (e = e.childContextTypes), e != null;
  }
  function xl() {
    Ot(jn), Ot(hn);
  }
  function Dd(e, t, o) {
    if (hn.current !== Li) throw Error(r(168));
    Pt(hn, t), Pt(jn, o);
  }
  function Md(e, t, o) {
    var u = e.stateNode;
    if (((t = t.childContextTypes), typeof u.getChildContext != "function"))
      return o;
    u = u.getChildContext();
    for (var d in u) if (!(d in t)) throw Error(r(108, me(e) || "Unknown", d));
    return C({}, o, u);
  }
  function or(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Li),
      (Rn = hn.current),
      Pt(hn, e),
      Pt(jn, jn.current),
      !0
    );
  }
  function Fd(e, t, o) {
    var u = e.stateNode;
    if (!u) throw Error(r(169));
    o
      ? ((e = Md(e, t, Rn)),
        (u.__reactInternalMemoizedMergedChildContext = e),
        Ot(jn),
        Ot(hn),
        Pt(hn, e))
      : Ot(jn),
      Pt(jn, o);
  }
  var li = null,
    El = !1,
    kc = !1;
  function Bd(e) {
    li === null ? (li = [e]) : li.push(e);
  }
  function ys(e) {
    (El = !0), Bd(e);
  }
  function Di() {
    if (!kc && li !== null) {
      kc = !0;
      var e = 0,
        t = mt;
      try {
        var o = li;
        for (mt = 1; e < o.length; e++) {
          var u = o[e];
          do u = u(!0);
          while (u !== null);
        }
        (li = null), (El = !1);
      } catch (d) {
        throw (li !== null && (li = li.slice(e + 1)), ed(ec, Di), d);
      } finally {
        (mt = t), (kc = !1);
      }
    }
    return null;
  }
  var so = [],
    pn = 0,
    Cl = null,
    Il = 0,
    ar = [],
    lr = 0,
    vs = null,
    Kr = 1,
    Vr = "";
  function ws(e, t) {
    (so[pn++] = Il), (so[pn++] = Cl), (Cl = e), (Il = t);
  }
  function jd(e, t, o) {
    (ar[lr++] = Kr), (ar[lr++] = Vr), (ar[lr++] = vs), (vs = e);
    var u = Kr;
    e = Vr;
    var d = 32 - xr(u) - 1;
    (u &= ~(1 << d)), (o += 1);
    var h = 32 - xr(t) + d;
    if (30 < h) {
      var y = d - (d % 5);
      (h = (u & ((1 << y) - 1)).toString(32)),
        (u >>= y),
        (d -= y),
        (Kr = (1 << (32 - xr(t) + d)) | (o << d) | u),
        (Vr = h + e);
    } else (Kr = (1 << h) | (o << d) | u), (Vr = e);
  }
  function ca(e) {
    e.return !== null && (ws(e, 1), jd(e, 1, 0));
  }
  function _s(e) {
    for (; e === Cl; )
      (Cl = so[--pn]), (so[pn] = null), (Il = so[--pn]), (so[pn] = null);
    for (; e === vs; )
      (vs = ar[--lr]),
        (ar[lr] = null),
        (Vr = ar[--lr]),
        (ar[lr] = null),
        (Kr = ar[--lr]),
        (ar[lr] = null);
  }
  var mn = null,
    Qn = null,
    Nt = !1,
    Cr = null;
  function Qr(e, t) {
    var o = er(5, null, null, 0);
    (o.elementType = "DELETED"),
      (o.stateNode = t),
      (o.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [o]), (e.flags |= 16)) : t.push(o);
  }
  function kl(e, t) {
    switch (e.tag) {
      case 5:
        var o = e.type;
        return (
          (t =
            t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (mn = e), (Qn = bi(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (mn = e), (Qn = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((o = vs !== null ? { id: Kr, overflow: Vr } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: o,
                retryLane: 1073741824,
              }),
              (o = er(18, null, null, 0)),
              (o.stateNode = t),
              (o.return = e),
              (e.child = o),
              (mn = e),
              (Qn = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ui(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function $n(e) {
    if (Nt) {
      var t = Qn;
      if (t) {
        var o = t;
        if (!kl(e, t)) {
          if (ui(e)) throw Error(r(418));
          t = bi(o.nextSibling);
          var u = mn;
          t && kl(e, t)
            ? Qr(u, o)
            : ((e.flags = (e.flags & -4097) | 2), (Nt = !1), (mn = e));
        }
      } else {
        if (ui(e)) throw Error(r(418));
        (e.flags = (e.flags & -4097) | 2), (Nt = !1), (mn = e);
      }
    }
  }
  function zd(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    mn = e;
  }
  function fa(e) {
    if (e !== mn) return !1;
    if (!Nt) return zd(e), (Nt = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !la(e.type, e.memoizedProps))),
      t && (t = Qn))
    ) {
      if (ui(e)) throw (Pc(), Error(r(418)));
      for (; t; ) Qr(e, t), (t = bi(t.nextSibling));
    }
    if ((zd(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var o = e.data;
            if (o === "/$") {
              if (t === 0) {
                Qn = bi(e.nextSibling);
                break e;
              }
              t--;
            } else (o !== "$" && o !== "$!" && o !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Qn = null;
      }
    } else Qn = mn ? bi(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pc() {
    for (var e = Qn; e; ) e = bi(e.nextSibling);
  }
  function Jr() {
    (Qn = mn = null), (Nt = !1);
  }
  function Xr(e) {
    Cr === null ? (Cr = [e]) : Cr.push(e);
  }
  var $d = Q.ReactCurrentBatchConfig;
  function Ir(e, t) {
    if (e && e.defaultProps) {
      (t = C({}, t)), (e = e.defaultProps);
      for (var o in e) t[o] === void 0 && (t[o] = e[o]);
      return t;
    }
    return t;
  }
  var Ss = Bn(null),
    Pl = null,
    xs = null,
    Kt = null;
  function da() {
    Kt = xs = Pl = null;
  }
  function Rl(e) {
    var t = Ss.current;
    Ot(Ss), (e._currentValue = t);
  }
  function ur(e, t, o) {
    for (; e !== null; ) {
      var u = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        e === o)
      )
        break;
      e = e.return;
    }
  }
  function Mi(e, t) {
    (Pl = e),
      (Kt = xs = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (vn = !0), (e.firstContext = null));
  }
  function An(e) {
    var t = e._currentValue;
    if (Kt !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), xs === null)) {
        if (Pl === null) throw Error(r(308));
        (xs = e), (Pl.dependencies = { lanes: 0, firstContext: e });
      } else xs = xs.next = e;
    return t;
  }
  var Jn = null;
  function Al(e) {
    Jn === null ? (Jn = [e]) : Jn.push(e);
  }
  function gn(e, t, o, u) {
    var d = t.interleaved;
    return (
      d === null ? ((o.next = o), Al(t)) : ((o.next = d.next), (d.next = o)),
      (t.interleaved = o),
      kr(e, u)
    );
  }
  function kr(e, t) {
    e.lanes |= t;
    var o = e.alternate;
    for (o !== null && (o.lanes |= t), o = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (o = e.alternate),
        o !== null && (o.childLanes |= t),
        (o = e),
        (e = e.return);
    return o.tag === 3 ? o.stateNode : null;
  }
  var Fi = !1;
  function Rc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ud(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Pr(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Bi(e, t, o) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), ot & 2)) {
      var d = u.pending;
      return (
        d === null ? (t.next = t) : ((t.next = d.next), (d.next = t)),
        (u.pending = t),
        kr(e, o)
      );
    }
    return (
      (d = u.interleaved),
      d === null ? ((t.next = t), Al(u)) : ((t.next = d.next), (d.next = t)),
      (u.interleaved = t),
      kr(e, o)
    );
  }
  function ji(e, t, o) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (o & 4194240) !== 0))
    ) {
      var u = t.lanes;
      (u &= e.pendingLanes), (o |= u), (t.lanes = o), Qo(e, o);
    }
  }
  function Ac(e, t) {
    var o = e.updateQueue,
      u = e.alternate;
    if (u !== null && ((u = u.updateQueue), o === u)) {
      var d = null,
        h = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var y = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          };
          h === null ? (d = h = y) : (h = h.next = y), (o = o.next);
        } while (o !== null);
        h === null ? (d = h = t) : (h = h.next = t);
      } else d = h = t;
      (o = {
        baseState: u.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: h,
        shared: u.shared,
        effects: u.effects,
      }),
        (e.updateQueue = o);
      return;
    }
    (e = o.lastBaseUpdate),
      e === null ? (o.firstBaseUpdate = t) : (e.next = t),
      (o.lastBaseUpdate = t);
  }
  function Ol(e, t, o, u) {
    var d = e.updateQueue;
    Fi = !1;
    var h = d.firstBaseUpdate,
      y = d.lastBaseUpdate,
      x = d.shared.pending;
    if (x !== null) {
      d.shared.pending = null;
      var k = x,
        W = k.next;
      (k.next = null), y === null ? (h = W) : (y.next = W), (y = k);
      var re = e.alternate;
      re !== null &&
        ((re = re.updateQueue),
        (x = re.lastBaseUpdate),
        x !== y &&
          (x === null ? (re.firstBaseUpdate = W) : (x.next = W),
          (re.lastBaseUpdate = k)));
    }
    if (h !== null) {
      var ae = d.baseState;
      (y = 0), (re = W = k = null), (x = h);
      do {
        var ne = x.lane,
          we = x.eventTime;
        if ((u & ne) === ne) {
          re !== null &&
            (re = re.next =
              {
                eventTime: we,
                lane: 0,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null,
              });
          e: {
            var Ie = e,
              Pe = x;
            switch (((ne = t), (we = o), Pe.tag)) {
              case 1:
                if (((Ie = Pe.payload), typeof Ie == "function")) {
                  ae = Ie.call(we, ae, ne);
                  break e;
                }
                ae = Ie;
                break e;
              case 3:
                Ie.flags = (Ie.flags & -65537) | 128;
              case 0:
                if (
                  ((Ie = Pe.payload),
                  (ne = typeof Ie == "function" ? Ie.call(we, ae, ne) : Ie),
                  ne == null)
                )
                  break e;
                ae = C({}, ae, ne);
                break e;
              case 2:
                Fi = !0;
            }
          }
          x.callback !== null &&
            x.lane !== 0 &&
            ((e.flags |= 64),
            (ne = d.effects),
            ne === null ? (d.effects = [x]) : ne.push(x));
        } else
          (we = {
            eventTime: we,
            lane: ne,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            re === null ? ((W = re = we), (k = ae)) : (re = re.next = we),
            (y |= ne);
        if (((x = x.next), x === null)) {
          if (((x = d.shared.pending), x === null)) break;
          (ne = x),
            (x = ne.next),
            (ne.next = null),
            (d.lastBaseUpdate = ne),
            (d.shared.pending = null);
        }
      } while (!0);
      if (
        (re === null && (k = ae),
        (d.baseState = k),
        (d.firstBaseUpdate = W),
        (d.lastBaseUpdate = re),
        (t = d.shared.interleaved),
        t !== null)
      ) {
        d = t;
        do (y |= d.lane), (d = d.next);
        while (d !== t);
      } else h === null && (d.shared.lanes = 0);
      (qi |= y), (e.lanes = y), (e.memoizedState = ae);
    }
  }
  function Wd(e, t, o) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var u = e[t],
          d = u.callback;
        if (d !== null) {
          if (((u.callback = null), (u = o), typeof d != "function"))
            throw Error(r(191, d));
          d.call(u);
        }
      }
  }
  var oo = new a.Component().refs;
  function Oc(e, t, o, u) {
    (t = e.memoizedState),
      (o = o(u, t)),
      (o = o == null ? t : C({}, t, o)),
      (e.memoizedState = o),
      e.lanes === 0 && (e.updateQueue.baseState = o);
  }
  var Nl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ls(e) === e : !1;
    },
    enqueueSetState: function (e, t, o) {
      e = e._reactInternals;
      var u = bn(),
        d = Vi(e),
        h = Pr(u, d);
      (h.payload = t),
        o != null && (h.callback = o),
        (t = Bi(e, h, d)),
        t !== null && (Nr(t, e, d, u), ji(t, e, d));
    },
    enqueueReplaceState: function (e, t, o) {
      e = e._reactInternals;
      var u = bn(),
        d = Vi(e),
        h = Pr(u, d);
      (h.tag = 1),
        (h.payload = t),
        o != null && (h.callback = o),
        (t = Bi(e, h, d)),
        t !== null && (Nr(t, e, d, u), ji(t, e, d));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var o = bn(),
        u = Vi(e),
        d = Pr(o, u);
      (d.tag = 2),
        t != null && (d.callback = t),
        (t = Bi(e, d, u)),
        t !== null && (Nr(t, e, u, o), ji(t, e, u));
    },
  };
  function bl(e, t, o, u, d, h, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(u, h, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ve(o, u) || !ve(d, h)
          : !0
    );
  }
  function Nc(e, t, o) {
    var u = !1,
      d = Li,
      h = t.contextType;
    return (
      typeof h == "object" && h !== null
        ? (h = An(h))
        : ((d = zn(t) ? Rn : hn.current),
          (u = t.contextTypes),
          (h = (u = u != null) ? io(e, d) : Li)),
      (t = new t(o, h)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Nl),
      (e.stateNode = t),
      (t._reactInternals = e),
      u &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = d),
        (e.__reactInternalMemoizedMaskedChildContext = h)),
      t
    );
  }
  function Gd(e, t, o, u) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(o, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(o, u),
      t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
  }
  function bc(e, t, o, u) {
    var d = e.stateNode;
    (d.props = o), (d.state = e.memoizedState), (d.refs = oo), Rc(e);
    var h = t.contextType;
    typeof h == "object" && h !== null
      ? (d.context = An(h))
      : ((h = zn(t) ? Rn : hn.current), (d.context = io(e, h))),
      (d.state = e.memoizedState),
      (h = t.getDerivedStateFromProps),
      typeof h == "function" && (Oc(e, t, h, o), (d.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function" ||
        (typeof d.UNSAFE_componentWillMount != "function" &&
          typeof d.componentWillMount != "function") ||
        ((t = d.state),
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" &&
          d.UNSAFE_componentWillMount(),
        t !== d.state && Nl.enqueueReplaceState(d, d.state, null),
        Ol(e, o, d, u),
        (d.state = e.memoizedState)),
      typeof d.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ha(e, t, o) {
    if (
      ((e = o.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (o._owner) {
        if (((o = o._owner), o)) {
          if (o.tag !== 1) throw Error(r(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(r(147, e));
        var d = u,
          h = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === h
          ? t.ref
          : ((t = function (y) {
              var x = d.refs;
              x === oo && (x = d.refs = {}),
                y === null ? delete x[h] : (x[h] = y);
            }),
            (t._stringRef = h),
            t);
      }
      if (typeof e != "string") throw Error(r(284));
      if (!o._owner) throw Error(r(290, e));
    }
    return e;
  }
  function pa(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        r(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Tl(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Hd(e) {
    function t(D, O) {
      if (e) {
        var F = D.deletions;
        F === null ? ((D.deletions = [O]), (D.flags |= 16)) : F.push(O);
      }
    }
    function o(D, O) {
      if (!e) return null;
      for (; O !== null; ) t(D, O), (O = O.sibling);
      return null;
    }
    function u(D, O) {
      for (D = new Map(); O !== null; )
        O.key !== null ? D.set(O.key, O) : D.set(O.index, O), (O = O.sibling);
      return D;
    }
    function d(D, O) {
      return (D = Xi(D, O)), (D.index = 0), (D.sibling = null), D;
    }
    function h(D, O, F) {
      return (
        (D.index = F),
        e
          ? ((F = D.alternate),
            F !== null
              ? ((F = F.index), F < O ? ((D.flags |= 2), O) : F)
              : ((D.flags |= 2), O))
          : ((D.flags |= 1048576), O)
      );
    }
    function y(D) {
      return e && D.alternate === null && (D.flags |= 2), D;
    }
    function x(D, O, F, ue) {
      return O === null || O.tag !== 6
        ? ((O = gf(F, D.mode, ue)), (O.return = D), O)
        : ((O = d(O, F)), (O.return = D), O);
    }
    function k(D, O, F, ue) {
      var Re = F.type;
      return Re === de
        ? re(D, O, F.props.children, ue, F.key)
        : O !== null &&
            (O.elementType === Re ||
              (typeof Re == "object" &&
                Re !== null &&
                Re.$$typeof === Ae &&
                Tl(Re) === O.type))
          ? ((ue = d(O, F.props)), (ue.ref = ha(D, O, F)), (ue.return = D), ue)
          : ((ue = lu(F.type, F.key, F.props, null, D.mode, ue)),
            (ue.ref = ha(D, O, F)),
            (ue.return = D),
            ue);
    }
    function W(D, O, F, ue) {
      return O === null ||
        O.tag !== 4 ||
        O.stateNode.containerInfo !== F.containerInfo ||
        O.stateNode.implementation !== F.implementation
        ? ((O = yf(F, D.mode, ue)), (O.return = D), O)
        : ((O = d(O, F.children || [])), (O.return = D), O);
    }
    function re(D, O, F, ue, Re) {
      return O === null || O.tag !== 7
        ? ((O = As(F, D.mode, ue, Re)), (O.return = D), O)
        : ((O = d(O, F)), (O.return = D), O);
    }
    function ae(D, O, F) {
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return (O = gf("" + O, D.mode, F)), (O.return = D), O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ee:
            return (
              (F = lu(O.type, O.key, O.props, null, D.mode, F)),
              (F.ref = ha(D, null, O)),
              (F.return = D),
              F
            );
          case fe:
            return (O = yf(O, D.mode, F)), (O.return = D), O;
          case Ae:
            var ue = O._init;
            return ae(D, ue(O._payload), F);
        }
        if (xt(O) || le(O))
          return (O = As(O, D.mode, F, null)), (O.return = D), O;
        pa(D, O);
      }
      return null;
    }
    function ne(D, O, F, ue) {
      var Re = O !== null ? O.key : null;
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return Re !== null ? null : x(D, O, "" + F, ue);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case ee:
            return F.key === Re ? k(D, O, F, ue) : null;
          case fe:
            return F.key === Re ? W(D, O, F, ue) : null;
          case Ae:
            return (Re = F._init), ne(D, O, Re(F._payload), ue);
        }
        if (xt(F) || le(F)) return Re !== null ? null : re(D, O, F, ue, null);
        pa(D, F);
      }
      return null;
    }
    function we(D, O, F, ue, Re) {
      if ((typeof ue == "string" && ue !== "") || typeof ue == "number")
        return (D = D.get(F) || null), x(O, D, "" + ue, Re);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case ee:
            return (
              (D = D.get(ue.key === null ? F : ue.key) || null), k(O, D, ue, Re)
            );
          case fe:
            return (
              (D = D.get(ue.key === null ? F : ue.key) || null), W(O, D, ue, Re)
            );
          case Ae:
            var Me = ue._init;
            return we(D, O, F, Me(ue._payload), Re);
        }
        if (xt(ue) || le(ue))
          return (D = D.get(F) || null), re(O, D, ue, Re, null);
        pa(O, ue);
      }
      return null;
    }
    function Ie(D, O, F, ue) {
      for (
        var Re = null, Me = null, Be = O, Ge = (O = 0), rn = null;
        Be !== null && Ge < F.length;
        Ge++
      ) {
        Be.index > Ge ? ((rn = Be), (Be = null)) : (rn = Be.sibling);
        var ft = ne(D, Be, F[Ge], ue);
        if (ft === null) {
          Be === null && (Be = rn);
          break;
        }
        e && Be && ft.alternate === null && t(D, Be),
          (O = h(ft, O, Ge)),
          Me === null ? (Re = ft) : (Me.sibling = ft),
          (Me = ft),
          (Be = rn);
      }
      if (Ge === F.length) return o(D, Be), Nt && ws(D, Ge), Re;
      if (Be === null) {
        for (; Ge < F.length; Ge++)
          (Be = ae(D, F[Ge], ue)),
            Be !== null &&
              ((O = h(Be, O, Ge)),
              Me === null ? (Re = Be) : (Me.sibling = Be),
              (Me = Be));
        return Nt && ws(D, Ge), Re;
      }
      for (Be = u(D, Be); Ge < F.length; Ge++)
        (rn = we(Be, D, Ge, F[Ge], ue)),
          rn !== null &&
            (e &&
              rn.alternate !== null &&
              Be.delete(rn.key === null ? Ge : rn.key),
            (O = h(rn, O, Ge)),
            Me === null ? (Re = rn) : (Me.sibling = rn),
            (Me = rn));
      return (
        e &&
          Be.forEach(function (Yi) {
            return t(D, Yi);
          }),
        Nt && ws(D, Ge),
        Re
      );
    }
    function Pe(D, O, F, ue) {
      var Re = le(F);
      if (typeof Re != "function") throw Error(r(150));
      if (((F = Re.call(F)), F == null)) throw Error(r(151));
      for (
        var Me = (Re = null), Be = O, Ge = (O = 0), rn = null, ft = F.next();
        Be !== null && !ft.done;
        Ge++, ft = F.next()
      ) {
        Be.index > Ge ? ((rn = Be), (Be = null)) : (rn = Be.sibling);
        var Yi = ne(D, Be, ft.value, ue);
        if (Yi === null) {
          Be === null && (Be = rn);
          break;
        }
        e && Be && Yi.alternate === null && t(D, Be),
          (O = h(Yi, O, Ge)),
          Me === null ? (Re = Yi) : (Me.sibling = Yi),
          (Me = Yi),
          (Be = rn);
      }
      if (ft.done) return o(D, Be), Nt && ws(D, Ge), Re;
      if (Be === null) {
        for (; !ft.done; Ge++, ft = F.next())
          (ft = ae(D, ft.value, ue)),
            ft !== null &&
              ((O = h(ft, O, Ge)),
              Me === null ? (Re = ft) : (Me.sibling = ft),
              (Me = ft));
        return Nt && ws(D, Ge), Re;
      }
      for (Be = u(D, Be); !ft.done; Ge++, ft = F.next())
        (ft = we(Be, D, Ge, ft.value, ue)),
          ft !== null &&
            (e &&
              ft.alternate !== null &&
              Be.delete(ft.key === null ? Ge : ft.key),
            (O = h(ft, O, Ge)),
            Me === null ? (Re = ft) : (Me.sibling = ft),
            (Me = ft));
      return (
        e &&
          Be.forEach(function (sm) {
            return t(D, sm);
          }),
        Nt && ws(D, Ge),
        Re
      );
    }
    function jt(D, O, F, ue) {
      if (
        (typeof F == "object" &&
          F !== null &&
          F.type === de &&
          F.key === null &&
          (F = F.props.children),
        typeof F == "object" && F !== null)
      ) {
        switch (F.$$typeof) {
          case ee:
            e: {
              for (var Re = F.key, Me = O; Me !== null; ) {
                if (Me.key === Re) {
                  if (((Re = F.type), Re === de)) {
                    if (Me.tag === 7) {
                      o(D, Me.sibling),
                        (O = d(Me, F.props.children)),
                        (O.return = D),
                        (D = O);
                      break e;
                    }
                  } else if (
                    Me.elementType === Re ||
                    (typeof Re == "object" &&
                      Re !== null &&
                      Re.$$typeof === Ae &&
                      Tl(Re) === Me.type)
                  ) {
                    o(D, Me.sibling),
                      (O = d(Me, F.props)),
                      (O.ref = ha(D, Me, F)),
                      (O.return = D),
                      (D = O);
                    break e;
                  }
                  o(D, Me);
                  break;
                } else t(D, Me);
                Me = Me.sibling;
              }
              F.type === de
                ? ((O = As(F.props.children, D.mode, ue, F.key)),
                  (O.return = D),
                  (D = O))
                : ((ue = lu(F.type, F.key, F.props, null, D.mode, ue)),
                  (ue.ref = ha(D, O, F)),
                  (ue.return = D),
                  (D = ue));
            }
            return y(D);
          case fe:
            e: {
              for (Me = F.key; O !== null; ) {
                if (O.key === Me)
                  if (
                    O.tag === 4 &&
                    O.stateNode.containerInfo === F.containerInfo &&
                    O.stateNode.implementation === F.implementation
                  ) {
                    o(D, O.sibling),
                      (O = d(O, F.children || [])),
                      (O.return = D),
                      (D = O);
                    break e;
                  } else {
                    o(D, O);
                    break;
                  }
                else t(D, O);
                O = O.sibling;
              }
              (O = yf(F, D.mode, ue)), (O.return = D), (D = O);
            }
            return y(D);
          case Ae:
            return (Me = F._init), jt(D, O, Me(F._payload), ue);
        }
        if (xt(F)) return Ie(D, O, F, ue);
        if (le(F)) return Pe(D, O, F, ue);
        pa(D, F);
      }
      return (typeof F == "string" && F !== "") || typeof F == "number"
        ? ((F = "" + F),
          O !== null && O.tag === 6
            ? (o(D, O.sibling), (O = d(O, F)), (O.return = D), (D = O))
            : (o(D, O), (O = gf(F, D.mode, ue)), (O.return = D), (D = O)),
          y(D))
        : o(D, O);
    }
    return jt;
  }
  var zi = Hd(!0),
    Tc = Hd(!1),
    ao = {},
    Rr = Bn(ao),
    $i = Bn(ao),
    ma = Bn(ao);
  function Ui(e) {
    if (e === ao) throw Error(r(174));
    return e;
  }
  function Ll(e, t) {
    switch ((Pt(ma, t), Pt($i, e), Pt(Rr, ao), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : zr(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = zr(t, e));
    }
    Ot(Rr), Pt(Rr, t);
  }
  function lo() {
    Ot(Rr), Ot($i), Ot(ma);
  }
  function Lc(e) {
    Ui(ma.current);
    var t = Ui(Rr.current),
      o = zr(t, e.type);
    t !== o && (Pt($i, e), Pt(Rr, o));
  }
  function Dc(e) {
    $i.current === e && (Ot(Rr), Ot($i));
  }
  var bt = Bn(0);
  function ga(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var o = t.memoizedState;
        if (
          o !== null &&
          ((o = o.dehydrated), o === null || o.data === "$?" || o.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ya = [];
  function Mc() {
    for (var e = 0; e < ya.length; e++)
      ya[e]._workInProgressVersionPrimary = null;
    ya.length = 0;
  }
  var uo = Q.ReactCurrentDispatcher,
    Ye = Q.ReactCurrentBatchConfig,
    Es = 0,
    Dt = null,
    Mt = null,
    Vt = null,
    Dl = !1,
    va = !1,
    yn = 0,
    zp = 0;
  function Qt() {
    throw Error(r(321));
  }
  function wa(e, t) {
    if (t === null) return !1;
    for (var o = 0; o < t.length && o < e.length; o++)
      if (!U(e[o], t[o])) return !1;
    return !0;
  }
  function Ml(e, t, o, u, d, h) {
    if (
      ((Es = h),
      (Dt = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (uo.current = e === null || e.memoizedState === null ? Sa : Up),
      (e = o(u, d)),
      va)
    ) {
      h = 0;
      do {
        if (((va = !1), (yn = 0), 25 <= h)) throw Error(r(301));
        (h += 1),
          (Vt = Mt = null),
          (t.updateQueue = null),
          (uo.current = Yd),
          (e = o(u, d));
      } while (va);
    }
    if (
      ((uo.current = di),
      (t = Mt !== null && Mt.next !== null),
      (Es = 0),
      (Vt = Mt = Dt = null),
      (Dl = !1),
      t)
    )
      throw Error(r(300));
    return e;
  }
  function Fl() {
    var e = yn !== 0;
    return (yn = 0), e;
  }
  function Ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Vt === null ? (Dt.memoizedState = Vt = e) : (Vt = Vt.next = e), Vt;
  }
  function Jt() {
    if (Mt === null) {
      var e = Dt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Mt.next;
    var t = Vt === null ? Dt.memoizedState : Vt.next;
    if (t !== null) (Vt = t), (Mt = e);
    else {
      if (e === null) throw Error(r(310));
      (Mt = e),
        (e = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        Vt === null ? (Dt.memoizedState = Vt = e) : (Vt = Vt.next = e);
    }
    return Vt;
  }
  function Cs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bl(e) {
    var t = Jt(),
      o = t.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = e;
    var u = Mt,
      d = u.baseQueue,
      h = o.pending;
    if (h !== null) {
      if (d !== null) {
        var y = d.next;
        (d.next = h.next), (h.next = y);
      }
      (u.baseQueue = d = h), (o.pending = null);
    }
    if (d !== null) {
      (h = d.next), (u = u.baseState);
      var x = (y = null),
        k = null,
        W = h;
      do {
        var re = W.lane;
        if ((Es & re) === re)
          k !== null &&
            (k = k.next =
              {
                lane: 0,
                action: W.action,
                hasEagerState: W.hasEagerState,
                eagerState: W.eagerState,
                next: null,
              }),
            (u = W.hasEagerState ? W.eagerState : e(u, W.action));
        else {
          var ae = {
            lane: re,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null,
          };
          k === null ? ((x = k = ae), (y = u)) : (k = k.next = ae),
            (Dt.lanes |= re),
            (qi |= re);
        }
        W = W.next;
      } while (W !== null && W !== h);
      k === null ? (y = u) : (k.next = x),
        U(u, t.memoizedState) || (vn = !0),
        (t.memoizedState = u),
        (t.baseState = y),
        (t.baseQueue = k),
        (o.lastRenderedState = u);
    }
    if (((e = o.interleaved), e !== null)) {
      d = e;
      do (h = d.lane), (Dt.lanes |= h), (qi |= h), (d = d.next);
      while (d !== e);
    } else d === null && (o.lanes = 0);
    return [t.memoizedState, o.dispatch];
  }
  function co(e) {
    var t = Jt(),
      o = t.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = e;
    var u = o.dispatch,
      d = o.pending,
      h = t.memoizedState;
    if (d !== null) {
      o.pending = null;
      var y = (d = d.next);
      do (h = e(h, y.action)), (y = y.next);
      while (y !== d);
      U(h, t.memoizedState) || (vn = !0),
        (t.memoizedState = h),
        t.baseQueue === null && (t.baseState = h),
        (o.lastRenderedState = h);
    }
    return [h, u];
  }
  function Fc() {}
  function jl(e, t) {
    var o = Dt,
      u = Jt(),
      d = t(),
      h = !U(u.memoizedState, d);
    if (
      (h && ((u.memoizedState = d), (vn = !0)),
      (u = u.queue),
      zc($l.bind(null, o, u, e), [e]),
      u.getSnapshot !== t || h || (Vt !== null && Vt.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        fo(9, zl.bind(null, o, u, d, t), void 0, null),
        nn === null)
      )
        throw Error(r(349));
      Es & 30 || Bc(o, t, d);
    }
    return d;
  }
  function Bc(e, t, o) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: o }),
      (t = Dt.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Dt.updateQueue = t),
          (t.stores = [e]))
        : ((o = t.stores), o === null ? (t.stores = [e]) : o.push(e));
  }
  function zl(e, t, o, u) {
    (t.value = o), (t.getSnapshot = u), ci(t) && qd(e);
  }
  function $l(e, t, o) {
    return o(function () {
      ci(t) && qd(e);
    });
  }
  function ci(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var o = t();
      return !U(e, o);
    } catch {
      return !0;
    }
  }
  function qd(e) {
    var t = kr(e, 1);
    t !== null && Nr(t, e, 1, -1);
  }
  function fi(e) {
    var t = Ft();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cs,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Jd.bind(null, Dt, e)),
      [t.memoizedState, e]
    );
  }
  function fo(e, t, o, u) {
    return (
      (e = { tag: e, create: t, destroy: o, deps: u, next: null }),
      (t = Dt.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Dt.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((o = t.lastEffect),
          o === null
            ? (t.lastEffect = e.next = e)
            : ((u = o.next), (o.next = e), (e.next = u), (t.lastEffect = e))),
      e
    );
  }
  function jc() {
    return Jt().memoizedState;
  }
  function ho(e, t, o, u) {
    var d = Ft();
    (Dt.flags |= e),
      (d.memoizedState = fo(1 | t, o, void 0, u === void 0 ? null : u));
  }
  function Ul(e, t, o, u) {
    var d = Jt();
    u = u === void 0 ? null : u;
    var h = void 0;
    if (Mt !== null) {
      var y = Mt.memoizedState;
      if (((h = y.destroy), u !== null && wa(u, y.deps))) {
        d.memoizedState = fo(t, o, h, u);
        return;
      }
    }
    (Dt.flags |= e), (d.memoizedState = fo(1 | t, o, h, u));
  }
  function Kd(e, t) {
    return ho(8390656, 8, e, t);
  }
  function zc(e, t) {
    return Ul(2048, 8, e, t);
  }
  function $c(e, t) {
    return Ul(4, 2, e, t);
  }
  function Uc(e, t) {
    return Ul(4, 4, e, t);
  }
  function Vd(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Wc(e, t, o) {
    return (
      (o = o != null ? o.concat([e]) : null), Ul(4, 4, Vd.bind(null, t, e), o)
    );
  }
  function Wl() {}
  function On(e, t) {
    var o = Jt();
    t = t === void 0 ? null : t;
    var u = o.memoizedState;
    return u !== null && t !== null && wa(t, u[1])
      ? u[0]
      : ((o.memoizedState = [e, t]), e);
  }
  function Ar(e, t) {
    var o = Jt();
    t = t === void 0 ? null : t;
    var u = o.memoizedState;
    return u !== null && t !== null && wa(t, u[1])
      ? u[0]
      : ((e = e()), (o.memoizedState = [e, t]), e);
  }
  function Qd(e, t, o) {
    return Es & 21
      ? (U(o, t) ||
          ((o = nc()), (Dt.lanes |= o), (qi |= o), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (vn = !0)), (e.memoizedState = o));
  }
  function $p(e, t) {
    var o = mt;
    (mt = o !== 0 && 4 > o ? o : 4), e(!0);
    var u = Ye.transition;
    Ye.transition = {};
    try {
      e(!1), t();
    } finally {
      (mt = o), (Ye.transition = u);
    }
  }
  function _a() {
    return Jt().memoizedState;
  }
  function po(e, t, o) {
    var u = Vi(e);
    if (
      ((o = {
        lane: u,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Gc(e))
    )
      Xd(t, o);
    else if (((o = gn(e, t, o, u)), o !== null)) {
      var d = bn();
      Nr(o, e, u, d), Hc(o, t, u);
    }
  }
  function Jd(e, t, o) {
    var u = Vi(e),
      d = {
        lane: u,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Gc(e)) Xd(t, d);
    else {
      var h = e.alternate;
      if (
        e.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = t.lastRenderedReducer), h !== null)
      )
        try {
          var y = t.lastRenderedState,
            x = h(y, o);
          if (((d.hasEagerState = !0), (d.eagerState = x), U(x, y))) {
            var k = t.interleaved;
            k === null
              ? ((d.next = d), Al(t))
              : ((d.next = k.next), (k.next = d)),
              (t.interleaved = d);
            return;
          }
        } catch {
        } finally {
        }
      (o = gn(e, t, d, u)),
        o !== null && ((d = bn()), Nr(o, e, u, d), Hc(o, t, u));
    }
  }
  function Gc(e) {
    var t = e.alternate;
    return e === Dt || (t !== null && t === Dt);
  }
  function Xd(e, t) {
    va = Dl = !0;
    var o = e.pending;
    o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (e.pending = t);
  }
  function Hc(e, t, o) {
    if (o & 4194240) {
      var u = t.lanes;
      (u &= e.pendingLanes), (o |= u), (t.lanes = o), Qo(e, o);
    }
  }
  var di = {
      readContext: An,
      useCallback: Qt,
      useContext: Qt,
      useEffect: Qt,
      useImperativeHandle: Qt,
      useInsertionEffect: Qt,
      useLayoutEffect: Qt,
      useMemo: Qt,
      useReducer: Qt,
      useRef: Qt,
      useState: Qt,
      useDebugValue: Qt,
      useDeferredValue: Qt,
      useTransition: Qt,
      useMutableSource: Qt,
      useSyncExternalStore: Qt,
      useId: Qt,
      unstable_isNewReconciler: !1,
    },
    Sa = {
      readContext: An,
      useCallback: function (e, t) {
        return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: An,
      useEffect: Kd,
      useImperativeHandle: function (e, t, o) {
        return (
          (o = o != null ? o.concat([e]) : null),
          ho(4194308, 4, Vd.bind(null, t, e), o)
        );
      },
      useLayoutEffect: function (e, t) {
        return ho(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ho(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var o = Ft();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (o.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, o) {
        var u = Ft();
        return (
          (t = o !== void 0 ? o(t) : t),
          (u.memoizedState = u.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (u.queue = e),
          (e = e.dispatch = po.bind(null, Dt, e)),
          [u.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ft();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: fi,
      useDebugValue: Wl,
      useDeferredValue: function (e) {
        return (Ft().memoizedState = e);
      },
      useTransition: function () {
        var e = fi(!1),
          t = e[0];
        return (e = $p.bind(null, e[1])), (Ft().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, o) {
        var u = Dt,
          d = Ft();
        if (Nt) {
          if (o === void 0) throw Error(r(407));
          o = o();
        } else {
          if (((o = t()), nn === null)) throw Error(r(349));
          Es & 30 || Bc(u, t, o);
        }
        d.memoizedState = o;
        var h = { value: o, getSnapshot: t };
        return (
          (d.queue = h),
          Kd($l.bind(null, u, h, e), [e]),
          (u.flags |= 2048),
          fo(9, zl.bind(null, u, h, o, t), void 0, null),
          o
        );
      },
      useId: function () {
        var e = Ft(),
          t = nn.identifierPrefix;
        if (Nt) {
          var o = Vr,
            u = Kr;
          (o = (u & ~(1 << (32 - xr(u) - 1))).toString(32) + o),
            (t = ":" + t + "R" + o),
            (o = yn++),
            0 < o && (t += "H" + o.toString(32)),
            (t += ":");
        } else (o = zp++), (t = ":" + t + "r" + o.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Up = {
      readContext: An,
      useCallback: On,
      useContext: An,
      useEffect: zc,
      useImperativeHandle: Wc,
      useInsertionEffect: $c,
      useLayoutEffect: Uc,
      useMemo: Ar,
      useReducer: Bl,
      useRef: jc,
      useState: function () {
        return Bl(Cs);
      },
      useDebugValue: Wl,
      useDeferredValue: function (e) {
        var t = Jt();
        return Qd(t, Mt.memoizedState, e);
      },
      useTransition: function () {
        var e = Bl(Cs)[0],
          t = Jt().memoizedState;
        return [e, t];
      },
      useMutableSource: Fc,
      useSyncExternalStore: jl,
      useId: _a,
      unstable_isNewReconciler: !1,
    },
    Yd = {
      readContext: An,
      useCallback: On,
      useContext: An,
      useEffect: zc,
      useImperativeHandle: Wc,
      useInsertionEffect: $c,
      useLayoutEffect: Uc,
      useMemo: Ar,
      useReducer: co,
      useRef: jc,
      useState: function () {
        return co(Cs);
      },
      useDebugValue: Wl,
      useDeferredValue: function (e) {
        var t = Jt();
        return Mt === null ? (t.memoizedState = e) : Qd(t, Mt.memoizedState, e);
      },
      useTransition: function () {
        var e = co(Cs)[0],
          t = Jt().memoizedState;
        return [e, t];
      },
      useMutableSource: Fc,
      useSyncExternalStore: jl,
      useId: _a,
      unstable_isNewReconciler: !1,
    };
  function Is(e, t) {
    try {
      var o = "",
        u = t;
      do (o += ze(u)), (u = u.return);
      while (u);
      var d = o;
    } catch (h) {
      d =
        `
Error generating stack: ` +
        h.message +
        `
` +
        h.stack;
    }
    return { value: e, source: t, stack: d, digest: null };
  }
  function mo(e, t, o) {
    return { value: e, source: null, stack: o ?? null, digest: t ?? null };
  }
  function Gl(e, t) {
    try {
      console.error(t.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var Hl = typeof WeakMap == "function" ? WeakMap : Map;
  function ql(e, t, o) {
    (o = Pr(-1, o)), (o.tag = 3), (o.payload = { element: null });
    var u = t.value;
    return (
      (o.callback = function () {
        nu || ((nu = !0), (af = u)), Gl(e, t);
      }),
      o
    );
  }
  function xa(e, t, o) {
    (o = Pr(-1, o)), (o.tag = 3);
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = t.value;
      (o.payload = function () {
        return u(d);
      }),
        (o.callback = function () {
          Gl(e, t);
        });
    }
    var h = e.stateNode;
    return (
      h !== null &&
        typeof h.componentDidCatch == "function" &&
        (o.callback = function () {
          Gl(e, t),
            typeof u != "function" &&
              (Ki === null ? (Ki = new Set([this])) : Ki.add(this));
          var y = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: y !== null ? y : "",
          });
        }),
      o
    );
  }
  function Zd(e, t, o) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new Hl();
      var d = new Set();
      u.set(t, d);
    } else (d = u.get(t)), d === void 0 && ((d = new Set()), u.set(t, d));
    d.has(o) || (d.add(o), (e = Jp.bind(null, e, t, o)), t.then(e, e));
  }
  function qc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ea(e, t, o, u, d) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = d), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (o.flags |= 131072),
            (o.flags &= -52805),
            o.tag === 1 &&
              (o.alternate === null
                ? (o.tag = 17)
                : ((t = Pr(-1, 1)), (t.tag = 2), Bi(o, t, 1))),
            (o.lanes |= 1)),
        e);
  }
  var eh = Q.ReactCurrentOwner,
    vn = !1;
  function Nn(e, t, o, u) {
    t.child = e === null ? Tc(t, null, o, u) : zi(t, e.child, o, u);
  }
  function Kc(e, t, o, u, d) {
    o = o.render;
    var h = t.ref;
    return (
      Mi(t, d),
      (u = Ml(e, t, o, u, h, d)),
      (o = Fl()),
      e !== null && !vn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~d),
          ei(e, t, d))
        : (Nt && o && ca(t), (t.flags |= 1), Nn(e, t, u, d), t.child)
    );
  }
  function Yr(e, t, o, u, d) {
    if (e === null) {
      var h = o.type;
      return typeof h == "function" &&
        !mf(h) &&
        h.defaultProps === void 0 &&
        o.compare === null &&
        o.defaultProps === void 0
        ? ((t.tag = 15), (t.type = h), Vc(e, t, h, u, d))
        : ((e = lu(o.type, null, u, t, t.mode, d)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((h = e.child), !(e.lanes & d))) {
      var y = h.memoizedProps;
      if (
        ((o = o.compare), (o = o !== null ? o : ve), o(y, u) && e.ref === t.ref)
      )
        return ei(e, t, d);
    }
    return (
      (t.flags |= 1),
      (e = Xi(h, u)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Vc(e, t, o, u, d) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (ve(h, u) && e.ref === t.ref)
        if (((vn = !1), (t.pendingProps = u = h), (e.lanes & d) !== 0))
          e.flags & 131072 && (vn = !0);
        else return (t.lanes = e.lanes), ei(e, t, d);
    }
    return Kl(e, t, o, u, d);
  }
  function Qc(e, t, o) {
    var u = t.pendingProps,
      d = u.children,
      h = e !== null ? e.memoizedState : null;
    if (u.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Pt(_o, Zn),
          (Zn |= o);
      else {
        if (!(o & 1073741824))
          return (
            (e = h !== null ? h.baseLanes | o : o),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Pt(_o, Zn),
            (Zn |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (u = h !== null ? h.baseLanes : o),
          Pt(_o, Zn),
          (Zn |= u);
      }
    else
      h !== null ? ((u = h.baseLanes | o), (t.memoizedState = null)) : (u = o),
        Pt(_o, Zn),
        (Zn |= u);
    return Nn(e, t, d, o), t.child;
  }
  function th(e, t) {
    var o = t.ref;
    ((e === null && o !== null) || (e !== null && e.ref !== o)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Kl(e, t, o, u, d) {
    var h = zn(o) ? Rn : hn.current;
    return (
      (h = io(t, h)),
      Mi(t, d),
      (o = Ml(e, t, o, u, h, d)),
      (u = Fl()),
      e !== null && !vn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~d),
          ei(e, t, d))
        : (Nt && u && ca(t), (t.flags |= 1), Nn(e, t, o, d), t.child)
    );
  }
  function nh(e, t, o, u, d) {
    if (zn(o)) {
      var h = !0;
      or(t);
    } else h = !1;
    if ((Mi(t, d), t.stateNode === null))
      go(e, t), Nc(t, o, u), bc(t, o, u, d), (u = !0);
    else if (e === null) {
      var y = t.stateNode,
        x = t.memoizedProps;
      y.props = x;
      var k = y.context,
        W = o.contextType;
      typeof W == "object" && W !== null
        ? (W = An(W))
        : ((W = zn(o) ? Rn : hn.current), (W = io(t, W)));
      var re = o.getDerivedStateFromProps,
        ae =
          typeof re == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function";
      ae ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((x !== u || k !== W) && Gd(t, y, u, W)),
        (Fi = !1);
      var ne = t.memoizedState;
      (y.state = ne),
        Ol(t, u, y, d),
        (k = t.memoizedState),
        x !== u || ne !== k || jn.current || Fi
          ? (typeof re == "function" &&
              (Oc(t, o, re, u), (k = t.memoizedState)),
            (x = Fi || bl(t, o, x, u, ne, k, W))
              ? (ae ||
                  (typeof y.UNSAFE_componentWillMount != "function" &&
                    typeof y.componentWillMount != "function") ||
                  (typeof y.componentWillMount == "function" &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == "function" &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof y.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = k)),
            (y.props = u),
            (y.state = k),
            (y.context = W),
            (u = x))
          : (typeof y.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (y = t.stateNode),
        Ud(e, t),
        (x = t.memoizedProps),
        (W = t.type === t.elementType ? x : Ir(t.type, x)),
        (y.props = W),
        (ae = t.pendingProps),
        (ne = y.context),
        (k = o.contextType),
        typeof k == "object" && k !== null
          ? (k = An(k))
          : ((k = zn(o) ? Rn : hn.current), (k = io(t, k)));
      var we = o.getDerivedStateFromProps;
      (re =
        typeof we == "function" ||
        typeof y.getSnapshotBeforeUpdate == "function") ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((x !== ae || ne !== k) && Gd(t, y, u, k)),
        (Fi = !1),
        (ne = t.memoizedState),
        (y.state = ne),
        Ol(t, u, y, d);
      var Ie = t.memoizedState;
      x !== ae || ne !== Ie || jn.current || Fi
        ? (typeof we == "function" && (Oc(t, o, we, u), (Ie = t.memoizedState)),
          (W = Fi || bl(t, o, W, u, ne, Ie, k) || !1)
            ? (re ||
                (typeof y.UNSAFE_componentWillUpdate != "function" &&
                  typeof y.componentWillUpdate != "function") ||
                (typeof y.componentWillUpdate == "function" &&
                  y.componentWillUpdate(u, Ie, k),
                typeof y.UNSAFE_componentWillUpdate == "function" &&
                  y.UNSAFE_componentWillUpdate(u, Ie, k)),
              typeof y.componentDidUpdate == "function" && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof y.componentDidUpdate != "function" ||
                (x === e.memoizedProps && ne === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && ne === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = Ie)),
          (y.props = u),
          (y.state = Ie),
          (y.context = k),
          (u = W))
        : (typeof y.componentDidUpdate != "function" ||
            (x === e.memoizedProps && ne === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && ne === e.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return Jc(e, t, o, u, h, d);
  }
  function Jc(e, t, o, u, d, h) {
    th(e, t);
    var y = (t.flags & 128) !== 0;
    if (!u && !y) return d && Fd(t, o, !1), ei(e, t, h);
    (u = t.stateNode), (eh.current = t);
    var x =
      y && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = zi(t, e.child, null, h)), (t.child = zi(t, null, x, h)))
        : Nn(e, t, x, h),
      (t.memoizedState = u.state),
      d && Fd(t, o, !0),
      t.child
    );
  }
  function Zr(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Dd(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Dd(e, t.context, !1),
      Ll(e, t.containerInfo);
  }
  function Vl(e, t, o, u, d) {
    return Jr(), Xr(d), (t.flags |= 256), Nn(e, t, o, u), t.child;
  }
  var Ca = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ia(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ka(e, t, o) {
    var u = t.pendingProps,
      d = bt.current,
      h = !1,
      y = (t.flags & 128) !== 0,
      x;
    if (
      ((x = y) ||
        (x = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0),
      x
        ? ((h = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (d |= 1),
      Pt(bt, d & 1),
      e === null)
    )
      return (
        $n(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((y = u.children),
            (e = u.fallback),
            h
              ? ((u = t.mode),
                (h = t.child),
                (y = { mode: "hidden", children: y }),
                !(u & 1) && h !== null
                  ? ((h.childLanes = 0), (h.pendingProps = y))
                  : (h = uu(y, u, 0, null)),
                (e = As(e, u, o, null)),
                (h.return = t),
                (e.return = t),
                (h.sibling = e),
                (t.child = h),
                (t.child.memoizedState = Ia(o)),
                (t.memoizedState = Ca),
                e)
              : Wi(t, y))
      );
    if (((d = e.memoizedState), d !== null && ((x = d.dehydrated), x !== null)))
      return Ql(e, t, y, u, x, d, o);
    if (h) {
      (h = u.fallback), (y = t.mode), (d = e.child), (x = d.sibling);
      var k = { mode: "hidden", children: u.children };
      return (
        !(y & 1) && t.child !== d
          ? ((u = t.child),
            (u.childLanes = 0),
            (u.pendingProps = k),
            (t.deletions = null))
          : ((u = Xi(d, k)), (u.subtreeFlags = d.subtreeFlags & 14680064)),
        x !== null ? (h = Xi(x, h)) : ((h = As(h, y, o, null)), (h.flags |= 2)),
        (h.return = t),
        (u.return = t),
        (u.sibling = h),
        (t.child = u),
        (u = h),
        (h = t.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? Ia(o)
            : {
                baseLanes: y.baseLanes | o,
                cachePool: null,
                transitions: y.transitions,
              }),
        (h.memoizedState = y),
        (h.childLanes = e.childLanes & ~o),
        (t.memoizedState = Ca),
        u
      );
    }
    return (
      (h = e.child),
      (e = h.sibling),
      (u = Xi(h, { mode: "visible", children: u.children })),
      !(t.mode & 1) && (u.lanes = o),
      (u.return = t),
      (u.sibling = null),
      e !== null &&
        ((o = t.deletions),
        o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
      (t.child = u),
      (t.memoizedState = null),
      u
    );
  }
  function Wi(e, t) {
    return (
      (t = uu({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function De(e, t, o, u) {
    return (
      u !== null && Xr(u),
      zi(t, e.child, null, o),
      (e = Wi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ql(e, t, o, u, d, h, y) {
    if (o)
      return t.flags & 256
        ? ((t.flags &= -257), (u = mo(Error(r(422)))), De(e, t, y, u))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((h = u.fallback),
            (d = t.mode),
            (u = uu({ mode: "visible", children: u.children }, d, 0, null)),
            (h = As(h, d, y, null)),
            (h.flags |= 2),
            (u.return = t),
            (h.return = t),
            (u.sibling = h),
            (t.child = u),
            t.mode & 1 && zi(t, e.child, null, y),
            (t.child.memoizedState = Ia(y)),
            (t.memoizedState = Ca),
            h);
    if (!(t.mode & 1)) return De(e, t, y, null);
    if (d.data === "$!") {
      if (((u = d.nextSibling && d.nextSibling.dataset), u)) var x = u.dgst;
      return (
        (u = x), (h = Error(r(419))), (u = mo(h, u, void 0)), De(e, t, y, u)
      );
    }
    if (((x = (y & e.childLanes) !== 0), vn || x)) {
      if (((u = nn), u !== null)) {
        switch (y & -y) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        (d = d & (u.suspendedLanes | y) ? 0 : d),
          d !== 0 &&
            d !== h.retryLane &&
            ((h.retryLane = d), kr(e, d), Nr(u, e, d, -1));
      }
      return hf(), (u = mo(Error(r(421)))), De(e, t, y, u);
    }
    return d.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Xp.bind(null, e)),
        (d._reactRetry = t),
        null)
      : ((e = h.treeContext),
        (Qn = bi(d.nextSibling)),
        (mn = t),
        (Nt = !0),
        (Cr = null),
        e !== null &&
          ((ar[lr++] = Kr),
          (ar[lr++] = Vr),
          (ar[lr++] = vs),
          (Kr = e.id),
          (Vr = e.overflow),
          (vs = t)),
        (t = Wi(t, u.children)),
        (t.flags |= 4096),
        t);
  }
  function Jl(e, t, o) {
    e.lanes |= t;
    var u = e.alternate;
    u !== null && (u.lanes |= t), ur(e.return, t, o);
  }
  function hi(e, t, o, u, d) {
    var h = e.memoizedState;
    h === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: o,
          tailMode: d,
        })
      : ((h.isBackwards = t),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = u),
        (h.tail = o),
        (h.tailMode = d));
  }
  function rh(e, t, o) {
    var u = t.pendingProps,
      d = u.revealOrder,
      h = u.tail;
    if ((Nn(e, t, u.children, o), (u = bt.current), u & 2))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Jl(e, o, t);
          else if (e.tag === 19) Jl(e, o, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      u &= 1;
    }
    if ((Pt(bt, u), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (o = t.child, d = null; o !== null; )
            (e = o.alternate),
              e !== null && ga(e) === null && (d = o),
              (o = o.sibling);
          (o = d),
            o === null
              ? ((d = t.child), (t.child = null))
              : ((d = o.sibling), (o.sibling = null)),
            hi(t, !1, d, o, h);
          break;
        case "backwards":
          for (o = null, d = t.child, t.child = null; d !== null; ) {
            if (((e = d.alternate), e !== null && ga(e) === null)) {
              t.child = d;
              break;
            }
            (e = d.sibling), (d.sibling = o), (o = d), (d = e);
          }
          hi(t, !0, o, null, h);
          break;
        case "together":
          hi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function go(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function ei(e, t, o) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (qi |= t.lanes),
      !(o & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, o = Xi(e, e.pendingProps), t.child = o, o.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (o = o.sibling = Xi(e, e.pendingProps)),
          (o.return = t);
      o.sibling = null;
    }
    return t.child;
  }
  function wn(e, t, o) {
    switch (t.tag) {
      case 3:
        Zr(t), Jr();
        break;
      case 5:
        Lc(t);
        break;
      case 1:
        zn(t.type) && or(t);
        break;
      case 4:
        Ll(t, t.stateNode.containerInfo);
        break;
      case 10:
        var u = t.type._context,
          d = t.memoizedProps.value;
        Pt(Ss, u._currentValue), (u._currentValue = d);
        break;
      case 13:
        if (((u = t.memoizedState), u !== null))
          return u.dehydrated !== null
            ? (Pt(bt, bt.current & 1), (t.flags |= 128), null)
            : o & t.child.childLanes
              ? ka(e, t, o)
              : (Pt(bt, bt.current & 1),
                (e = ei(e, t, o)),
                e !== null ? e.sibling : null);
        Pt(bt, bt.current & 1);
        break;
      case 19:
        if (((u = (o & t.childLanes) !== 0), e.flags & 128)) {
          if (u) return rh(e, t, o);
          t.flags |= 128;
        }
        if (
          ((d = t.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          Pt(bt, bt.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Qc(e, t, o);
    }
    return ei(e, t, o);
  }
  var ih, Xc, Yc, sh;
  (ih = function (e, t) {
    for (var o = t.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === t) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === t) return;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }),
    (Xc = function () {}),
    (Yc = function (e, t, o, u) {
      var d = e.memoizedProps;
      if (d !== u) {
        (e = t.stateNode), Ui(Rr.current);
        var h = null;
        switch (o) {
          case "input":
            (d = ke(e, d)), (u = ke(e, u)), (h = []);
            break;
          case "select":
            (d = C({}, d, { value: void 0 })),
              (u = C({}, u, { value: void 0 })),
              (h = []);
            break;
          case "textarea":
            (d = yt(e, d)), (u = yt(e, u)), (h = []);
            break;
          default:
            typeof d.onClick != "function" &&
              typeof u.onClick == "function" &&
              (e.onclick = vl);
        }
        zo(o, u);
        var y;
        o = null;
        for (W in d)
          if (!u.hasOwnProperty(W) && d.hasOwnProperty(W) && d[W] != null)
            if (W === "style") {
              var x = d[W];
              for (y in x) x.hasOwnProperty(y) && (o || (o = {}), (o[y] = ""));
            } else
              W !== "dangerouslySetInnerHTML" &&
                W !== "children" &&
                W !== "suppressContentEditableWarning" &&
                W !== "suppressHydrationWarning" &&
                W !== "autoFocus" &&
                (f.hasOwnProperty(W)
                  ? h || (h = [])
                  : (h = h || []).push(W, null));
        for (W in u) {
          var k = u[W];
          if (
            ((x = d != null ? d[W] : void 0),
            u.hasOwnProperty(W) && k !== x && (k != null || x != null))
          )
            if (W === "style")
              if (x) {
                for (y in x)
                  !x.hasOwnProperty(y) ||
                    (k && k.hasOwnProperty(y)) ||
                    (o || (o = {}), (o[y] = ""));
                for (y in k)
                  k.hasOwnProperty(y) &&
                    x[y] !== k[y] &&
                    (o || (o = {}), (o[y] = k[y]));
              } else o || (h || (h = []), h.push(W, o)), (o = k);
            else
              W === "dangerouslySetInnerHTML"
                ? ((k = k ? k.__html : void 0),
                  (x = x ? x.__html : void 0),
                  k != null && x !== k && (h = h || []).push(W, k))
                : W === "children"
                  ? (typeof k != "string" && typeof k != "number") ||
                    (h = h || []).push(W, "" + k)
                  : W !== "suppressContentEditableWarning" &&
                    W !== "suppressHydrationWarning" &&
                    (f.hasOwnProperty(W)
                      ? (k != null && W === "onScroll" && At("scroll", e),
                        h || x === k || (h = []))
                      : (h = h || []).push(W, k));
        }
        o && (h = h || []).push("style", o);
        var W = h;
        (t.updateQueue = W) && (t.flags |= 4);
      }
    }),
    (sh = function (e, t, o, u) {
      o !== u && (t.flags |= 4);
    });
  function yo(e, t) {
    if (!Nt)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var o = null; t !== null; )
            t.alternate !== null && (o = t), (t = t.sibling);
          o === null ? (e.tail = null) : (o.sibling = null);
          break;
        case "collapsed":
          o = e.tail;
          for (var u = null; o !== null; )
            o.alternate !== null && (u = o), (o = o.sibling);
          u === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function _n(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      o = 0,
      u = 0;
    if (t)
      for (var d = e.child; d !== null; )
        (o |= d.lanes | d.childLanes),
          (u |= d.subtreeFlags & 14680064),
          (u |= d.flags & 14680064),
          (d.return = e),
          (d = d.sibling);
    else
      for (d = e.child; d !== null; )
        (o |= d.lanes | d.childLanes),
          (u |= d.subtreeFlags),
          (u |= d.flags),
          (d.return = e),
          (d = d.sibling);
    return (e.subtreeFlags |= u), (e.childLanes = o), t;
  }
  function Wp(e, t, o) {
    var u = t.pendingProps;
    switch ((_s(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _n(t), null;
      case 1:
        return zn(t.type) && xl(), _n(t), null;
      case 3:
        return (
          (u = t.stateNode),
          lo(),
          Ot(jn),
          Ot(hn),
          Mc(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (e === null || e.child === null) &&
            (fa(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Cr !== null && (cf(Cr), (Cr = null)))),
          Xc(e, t),
          _n(t),
          null
        );
      case 5:
        Dc(t);
        var d = Ui(ma.current);
        if (((o = t.type), e !== null && t.stateNode != null))
          Yc(e, t, o, u, d),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(r(166));
            return _n(t), null;
          }
          if (((e = Ui(Rr.current)), fa(t))) {
            (u = t.stateNode), (o = t.type);
            var h = t.memoizedProps;
            switch (((u[Hr] = t), (u[Ti] = h), (e = (t.mode & 1) !== 0), o)) {
              case "dialog":
                At("cancel", u), At("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                At("load", u);
                break;
              case "video":
              case "audio":
                for (d = 0; d < ai.length; d++) At(ai[d], u);
                break;
              case "source":
                At("error", u);
                break;
              case "img":
              case "image":
              case "link":
                At("error", u), At("load", u);
                break;
              case "details":
                At("toggle", u);
                break;
              case "input":
                Oe(u, h), At("invalid", u);
                break;
              case "select":
                (u._wrapperState = { wasMultiple: !!h.multiple }),
                  At("invalid", u);
                break;
              case "textarea":
                In(u, h), At("invalid", u);
            }
            zo(o, h), (d = null);
            for (var y in h)
              if (h.hasOwnProperty(y)) {
                var x = h[y];
                y === "children"
                  ? typeof x == "string"
                    ? u.textContent !== x &&
                      (h.suppressHydrationWarning !== !0 &&
                        oa(u.textContent, x, e),
                      (d = ["children", x]))
                    : typeof x == "number" &&
                      u.textContent !== "" + x &&
                      (h.suppressHydrationWarning !== !0 &&
                        oa(u.textContent, x, e),
                      (d = ["children", "" + x]))
                  : f.hasOwnProperty(y) &&
                    x != null &&
                    y === "onScroll" &&
                    At("scroll", u);
              }
            switch (o) {
              case "input":
                pt(u), _t(u, h, !0);
                break;
              case "textarea":
                pt(u), jr(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (u.onclick = vl);
            }
            (u = d), (t.updateQueue = u), u !== null && (t.flags |= 4);
          } else {
            (y = d.nodeType === 9 ? d : d.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Bo(o)),
              e === "http://www.w3.org/1999/xhtml"
                ? o === "script"
                  ? ((e = y.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof u.is == "string"
                    ? (e = y.createElement(o, { is: u.is }))
                    : ((e = y.createElement(o)),
                      o === "select" &&
                        ((y = e),
                        u.multiple
                          ? (y.multiple = !0)
                          : u.size && (y.size = u.size)))
                : (e = y.createElementNS(e, o)),
              (e[Hr] = t),
              (e[Ti] = u),
              ih(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((y = $o(o, u)), o)) {
                case "dialog":
                  At("cancel", e), At("close", e), (d = u);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  At("load", e), (d = u);
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < ai.length; d++) At(ai[d], e);
                  d = u;
                  break;
                case "source":
                  At("error", e), (d = u);
                  break;
                case "img":
                case "image":
                case "link":
                  At("error", e), At("load", e), (d = u);
                  break;
                case "details":
                  At("toggle", e), (d = u);
                  break;
                case "input":
                  Oe(e, u), (d = ke(e, u)), At("invalid", e);
                  break;
                case "option":
                  d = u;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!u.multiple }),
                    (d = C({}, u, { value: void 0 })),
                    At("invalid", e);
                  break;
                case "textarea":
                  In(e, u), (d = yt(e, u)), At("invalid", e);
                  break;
                default:
                  d = u;
              }
              zo(o, d), (x = d);
              for (h in x)
                if (x.hasOwnProperty(h)) {
                  var k = x[h];
                  h === "style"
                    ? Ga(e, k)
                    : h === "dangerouslySetInnerHTML"
                      ? ((k = k ? k.__html : void 0), k != null && rr(e, k))
                      : h === "children"
                        ? typeof k == "string"
                          ? (o !== "textarea" || k !== "") && $r(e, k)
                          : typeof k == "number" && $r(e, "" + k)
                        : h !== "suppressContentEditableWarning" &&
                          h !== "suppressHydrationWarning" &&
                          h !== "autoFocus" &&
                          (f.hasOwnProperty(h)
                            ? k != null && h === "onScroll" && At("scroll", e)
                            : k != null && J(e, h, k, y));
                }
              switch (o) {
                case "input":
                  pt(e), _t(e, u, !1);
                  break;
                case "textarea":
                  pt(e), jr(e);
                  break;
                case "option":
                  u.value != null && e.setAttribute("value", "" + Ee(u.value));
                  break;
                case "select":
                  (e.multiple = !!u.multiple),
                    (h = u.value),
                    h != null
                      ? gt(e, !!u.multiple, h, !1)
                      : u.defaultValue != null &&
                        gt(e, !!u.multiple, u.defaultValue, !0);
                  break;
                default:
                  typeof d.onClick == "function" && (e.onclick = vl);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return _n(t), null;
      case 6:
        if (e && t.stateNode != null) sh(e, t, e.memoizedProps, u);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(r(166));
          if (((o = Ui(ma.current)), Ui(Rr.current), fa(t))) {
            if (
              ((u = t.stateNode),
              (o = t.memoizedProps),
              (u[Hr] = t),
              (h = u.nodeValue !== o) && ((e = mn), e !== null))
            )
              switch (e.tag) {
                case 3:
                  oa(u.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    oa(u.nodeValue, o, (e.mode & 1) !== 0);
              }
            h && (t.flags |= 4);
          } else
            (u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u)),
              (u[Hr] = t),
              (t.stateNode = u);
        }
        return _n(t), null;
      case 13:
        if (
          (Ot(bt),
          (u = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Nt && Qn !== null && t.mode & 1 && !(t.flags & 128))
            Pc(), Jr(), (t.flags |= 98560), (h = !1);
          else if (((h = fa(t)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!h) throw Error(r(318));
              if (
                ((h = t.memoizedState),
                (h = h !== null ? h.dehydrated : null),
                !h)
              )
                throw Error(r(317));
              h[Hr] = t;
            } else
              Jr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            _n(t), (h = !1);
          } else Cr !== null && (cf(Cr), (Cr = null)), (h = !0);
          if (!h) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = o), t)
          : ((u = u !== null),
            u !== (e !== null && e.memoizedState !== null) &&
              u &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || bt.current & 1 ? Xt === 0 && (Xt = 3) : hf())),
            t.updateQueue !== null && (t.flags |= 4),
            _n(t),
            null);
      case 4:
        return (
          lo(),
          Xc(e, t),
          e === null && Oi(t.stateNode.containerInfo),
          _n(t),
          null
        );
      case 10:
        return Rl(t.type._context), _n(t), null;
      case 17:
        return zn(t.type) && xl(), _n(t), null;
      case 19:
        if ((Ot(bt), (h = t.memoizedState), h === null)) return _n(t), null;
        if (((u = (t.flags & 128) !== 0), (y = h.rendering), y === null))
          if (u) yo(h, !1);
          else {
            if (Xt !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((y = ga(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      yo(h, !1),
                      u = y.updateQueue,
                      u !== null && ((t.updateQueue = u), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      u = o,
                      o = t.child;
                    o !== null;

                  )
                    (h = o),
                      (e = u),
                      (h.flags &= 14680066),
                      (y = h.alternate),
                      y === null
                        ? ((h.childLanes = 0),
                          (h.lanes = e),
                          (h.child = null),
                          (h.subtreeFlags = 0),
                          (h.memoizedProps = null),
                          (h.memoizedState = null),
                          (h.updateQueue = null),
                          (h.dependencies = null),
                          (h.stateNode = null))
                        : ((h.childLanes = y.childLanes),
                          (h.lanes = y.lanes),
                          (h.child = y.child),
                          (h.subtreeFlags = 0),
                          (h.deletions = null),
                          (h.memoizedProps = y.memoizedProps),
                          (h.memoizedState = y.memoizedState),
                          (h.updateQueue = y.updateQueue),
                          (h.type = y.type),
                          (e = y.dependencies),
                          (h.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (o = o.sibling);
                  return Pt(bt, (bt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            h.tail !== null &&
              Tt() > xo &&
              ((t.flags |= 128), (u = !0), yo(h, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = ga(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (o = e.updateQueue),
                o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                yo(h, !0),
                h.tail === null &&
                  h.tailMode === "hidden" &&
                  !y.alternate &&
                  !Nt)
              )
                return _n(t), null;
            } else
              2 * Tt() - h.renderingStartTime > xo &&
                o !== 1073741824 &&
                ((t.flags |= 128), (u = !0), yo(h, !1), (t.lanes = 4194304));
          h.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((o = h.last),
              o !== null ? (o.sibling = y) : (t.child = y),
              (h.last = y));
        }
        return h.tail !== null
          ? ((t = h.tail),
            (h.rendering = t),
            (h.tail = t.sibling),
            (h.renderingStartTime = Tt()),
            (t.sibling = null),
            (o = bt.current),
            Pt(bt, u ? (o & 1) | 2 : o & 1),
            t)
          : (_n(t), null);
      case 22:
      case 23:
        return (
          df(),
          (u = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== u && (t.flags |= 8192),
          u && t.mode & 1
            ? Zn & 1073741824 &&
              (_n(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _n(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Gp(e, t) {
    switch ((_s(t), t.tag)) {
      case 1:
        return (
          zn(t.type) && xl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          lo(),
          Ot(jn),
          Ot(hn),
          Mc(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Dc(t), null;
      case 13:
        if (
          (Ot(bt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Jr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ot(bt), null;
      case 4:
        return lo(), null;
      case 10:
        return Rl(t.type._context), null;
      case 22:
      case 23:
        return df(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var cr = !1,
    wt = !1,
    Zc = typeof WeakSet == "function" ? WeakSet : Set,
    Ce = null;
  function Gi(e, t) {
    var o = e.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          Bt(e, t, u);
        }
      else o.current = null;
  }
  function ef(e, t, o) {
    try {
      o();
    } catch (u) {
      Bt(e, t, u);
    }
  }
  var oh = !1;
  function Pa(e, t) {
    if (((aa = el), (e = Et()), ea(e))) {
      if ("selectionStart" in e)
        var o = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          o = ((o = e.ownerDocument) && o.defaultView) || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var d = u.anchorOffset,
              h = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, h.nodeType;
            } catch {
              o = null;
              break e;
            }
            var y = 0,
              x = -1,
              k = -1,
              W = 0,
              re = 0,
              ae = e,
              ne = null;
            t: for (;;) {
              for (
                var we;
                ae !== o || (d !== 0 && ae.nodeType !== 3) || (x = y + d),
                  ae !== h || (u !== 0 && ae.nodeType !== 3) || (k = y + u),
                  ae.nodeType === 3 && (y += ae.nodeValue.length),
                  (we = ae.firstChild) !== null;

              )
                (ne = ae), (ae = we);
              for (;;) {
                if (ae === e) break t;
                if (
                  (ne === o && ++W === d && (x = y),
                  ne === h && ++re === u && (k = y),
                  (we = ae.nextSibling) !== null)
                )
                  break;
                (ae = ne), (ne = ae.parentNode);
              }
              ae = we;
            }
            o = x === -1 || k === -1 ? null : { start: x, end: k };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (
      gs = { focusedElem: e, selectionRange: o }, el = !1, Ce = t;
      Ce !== null;

    )
      if (
        ((t = Ce), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Ce = e);
      else
        for (; Ce !== null; ) {
          t = Ce;
          try {
            var Ie = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ie !== null) {
                    var Pe = Ie.memoizedProps,
                      jt = Ie.memoizedState,
                      D = t.stateNode,
                      O = D.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Pe : Ir(t.type, Pe),
                        jt,
                      );
                    D.__reactInternalSnapshotBeforeUpdate = O;
                  }
                  break;
                case 3:
                  var F = t.stateNode.containerInfo;
                  F.nodeType === 1
                    ? (F.textContent = "")
                    : F.nodeType === 9 &&
                      F.documentElement &&
                      F.removeChild(F.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (ue) {
            Bt(t, t.return, ue);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ce = e);
            break;
          }
          Ce = t.return;
        }
    return (Ie = oh), (oh = !1), Ie;
  }
  function vo(e, t, o) {
    var u = t.updateQueue;
    if (((u = u !== null ? u.lastEffect : null), u !== null)) {
      var d = (u = u.next);
      do {
        if ((d.tag & e) === e) {
          var h = d.destroy;
          (d.destroy = void 0), h !== void 0 && ef(t, o, h);
        }
        d = d.next;
      } while (d !== u);
    }
  }
  function Ra(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var o = (t = t.next);
      do {
        if ((o.tag & e) === e) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== t);
    }
  }
  function tf(e) {
    var t = e.ref;
    if (t !== null) {
      var o = e.stateNode;
      switch (e.tag) {
        case 5:
          e = o;
          break;
        default:
          e = o;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function ah(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), ah(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Hr],
          delete t[Ti],
          delete t[_l],
          delete t[w],
          delete t[no])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function lh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function uh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || lh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xl(e, t, o) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode),
        t
          ? o.nodeType === 8
            ? o.parentNode.insertBefore(e, t)
            : o.insertBefore(e, t)
          : (o.nodeType === 8
              ? ((t = o.parentNode), t.insertBefore(e, o))
              : ((t = o), t.appendChild(e)),
            (o = o._reactRootContainer),
            o != null || t.onclick !== null || (t.onclick = vl));
    else if (u !== 4 && ((e = e.child), e !== null))
      for (Xl(e, t, o), e = e.sibling; e !== null; )
        Xl(e, t, o), (e = e.sibling);
  }
  function Yl(e, t, o) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode), t ? o.insertBefore(e, t) : o.appendChild(e);
    else if (u !== 4 && ((e = e.child), e !== null))
      for (Yl(e, t, o), e = e.sibling; e !== null; )
        Yl(e, t, o), (e = e.sibling);
  }
  var on = null,
    Xn = !1;
  function pi(e, t, o) {
    for (o = o.child; o !== null; ) wo(e, t, o), (o = o.sibling);
  }
  function wo(e, t, o) {
    if (Ur && typeof Ur.onCommitFiberUnmount == "function")
      try {
        Ur.onCommitFiberUnmount(Va, o);
      } catch {}
    switch (o.tag) {
      case 5:
        wt || Gi(o, t);
      case 6:
        var u = on,
          d = Xn;
        (on = null),
          pi(e, t, o),
          (on = u),
          (Xn = d),
          on !== null &&
            (Xn
              ? ((e = on),
                (o = o.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(o)
                  : e.removeChild(o))
              : on.removeChild(o.stateNode));
        break;
      case 18:
        on !== null &&
          (Xn
            ? ((e = on),
              (o = o.stateNode),
              e.nodeType === 8
                ? Cc(e.parentNode, o)
                : e.nodeType === 1 && Cc(e, o),
              vt(e))
            : Cc(on, o.stateNode));
        break;
      case 4:
        (u = on),
          (d = Xn),
          (on = o.stateNode.containerInfo),
          (Xn = !0),
          pi(e, t, o),
          (on = u),
          (Xn = d);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !wt &&
          ((u = o.updateQueue), u !== null && ((u = u.lastEffect), u !== null))
        ) {
          d = u = u.next;
          do {
            var h = d,
              y = h.destroy;
            (h = h.tag),
              y !== void 0 && (h & 2 || h & 4) && ef(o, t, y),
              (d = d.next);
          } while (d !== u);
        }
        pi(e, t, o);
        break;
      case 1:
        if (
          !wt &&
          (Gi(o, t),
          (u = o.stateNode),
          typeof u.componentWillUnmount == "function")
        )
          try {
            (u.props = o.memoizedProps),
              (u.state = o.memoizedState),
              u.componentWillUnmount();
          } catch (x) {
            Bt(o, t, x);
          }
        pi(e, t, o);
        break;
      case 21:
        pi(e, t, o);
        break;
      case 22:
        o.mode & 1
          ? ((wt = (u = wt) || o.memoizedState !== null), pi(e, t, o), (wt = u))
          : pi(e, t, o);
        break;
      default:
        pi(e, t, o);
    }
  }
  function Zl(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var o = e.stateNode;
      o === null && (o = e.stateNode = new Zc()),
        t.forEach(function (u) {
          var d = Yp.bind(null, e, u);
          o.has(u) || (o.add(u), u.then(d, d));
        });
    }
  }
  function fr(e, t) {
    var o = t.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var d = o[u];
        try {
          var h = e,
            y = t,
            x = y;
          e: for (; x !== null; ) {
            switch (x.tag) {
              case 5:
                (on = x.stateNode), (Xn = !1);
                break e;
              case 3:
                (on = x.stateNode.containerInfo), (Xn = !0);
                break e;
              case 4:
                (on = x.stateNode.containerInfo), (Xn = !0);
                break e;
            }
            x = x.return;
          }
          if (on === null) throw Error(r(160));
          wo(h, y, d), (on = null), (Xn = !1);
          var k = d.alternate;
          k !== null && (k.return = null), (d.return = null);
        } catch (W) {
          Bt(d, t, W);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) nf(t, e), (t = t.sibling);
  }
  function nf(e, t) {
    var o = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((fr(t, e), Yn(e), u & 4)) {
          try {
            vo(3, e, e.return), Ra(3, e);
          } catch (Pe) {
            Bt(e, e.return, Pe);
          }
          try {
            vo(5, e, e.return);
          } catch (Pe) {
            Bt(e, e.return, Pe);
          }
        }
        break;
      case 1:
        fr(t, e), Yn(e), u & 512 && o !== null && Gi(o, o.return);
        break;
      case 5:
        if (
          (fr(t, e),
          Yn(e),
          u & 512 && o !== null && Gi(o, o.return),
          e.flags & 32)
        ) {
          var d = e.stateNode;
          try {
            $r(d, "");
          } catch (Pe) {
            Bt(e, e.return, Pe);
          }
        }
        if (u & 4 && ((d = e.stateNode), d != null)) {
          var h = e.memoizedProps,
            y = o !== null ? o.memoizedProps : h,
            x = e.type,
            k = e.updateQueue;
          if (((e.updateQueue = null), k !== null))
            try {
              x === "input" && h.type === "radio" && h.name != null && Le(d, h),
                $o(x, y);
              var W = $o(x, h);
              for (y = 0; y < k.length; y += 2) {
                var re = k[y],
                  ae = k[y + 1];
                re === "style"
                  ? Ga(d, ae)
                  : re === "dangerouslySetInnerHTML"
                    ? rr(d, ae)
                    : re === "children"
                      ? $r(d, ae)
                      : J(d, re, ae, W);
              }
              switch (x) {
                case "input":
                  Je(d, h);
                  break;
                case "textarea":
                  Sr(d, h);
                  break;
                case "select":
                  var ne = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!h.multiple;
                  var we = h.value;
                  we != null
                    ? gt(d, !!h.multiple, we, !1)
                    : ne !== !!h.multiple &&
                      (h.defaultValue != null
                        ? gt(d, !!h.multiple, h.defaultValue, !0)
                        : gt(d, !!h.multiple, h.multiple ? [] : "", !1));
              }
              d[Ti] = h;
            } catch (Pe) {
              Bt(e, e.return, Pe);
            }
        }
        break;
      case 6:
        if ((fr(t, e), Yn(e), u & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          (d = e.stateNode), (h = e.memoizedProps);
          try {
            d.nodeValue = h;
          } catch (Pe) {
            Bt(e, e.return, Pe);
          }
        }
        break;
      case 3:
        if (
          (fr(t, e), Yn(e), u & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            vt(t.containerInfo);
          } catch (Pe) {
            Bt(e, e.return, Pe);
          }
        break;
      case 4:
        fr(t, e), Yn(e);
        break;
      case 13:
        fr(t, e),
          Yn(e),
          (d = e.child),
          d.flags & 8192 &&
            ((h = d.memoizedState !== null),
            (d.stateNode.isHidden = h),
            !h ||
              (d.alternate !== null && d.alternate.memoizedState !== null) ||
              (tu = Tt())),
          u & 4 && Zl(e);
        break;
      case 22:
        if (
          ((re = o !== null && o.memoizedState !== null),
          e.mode & 1 ? ((wt = (W = wt) || re), fr(t, e), (wt = W)) : fr(t, e),
          Yn(e),
          u & 8192)
        ) {
          if (
            ((W = e.memoizedState !== null),
            (e.stateNode.isHidden = W) && !re && e.mode & 1)
          )
            for (Ce = e, re = e.child; re !== null; ) {
              for (ae = Ce = re; Ce !== null; ) {
                switch (((ne = Ce), (we = ne.child), ne.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vo(4, ne, ne.return);
                    break;
                  case 1:
                    Gi(ne, ne.return);
                    var Ie = ne.stateNode;
                    if (typeof Ie.componentWillUnmount == "function") {
                      (u = ne), (o = ne.return);
                      try {
                        (t = u),
                          (Ie.props = t.memoizedProps),
                          (Ie.state = t.memoizedState),
                          Ie.componentWillUnmount();
                      } catch (Pe) {
                        Bt(u, o, Pe);
                      }
                    }
                    break;
                  case 5:
                    Gi(ne, ne.return);
                    break;
                  case 22:
                    if (ne.memoizedState !== null) {
                      fh(ae);
                      continue;
                    }
                }
                we !== null ? ((we.return = ne), (Ce = we)) : fh(ae);
              }
              re = re.sibling;
            }
          e: for (re = null, ae = e; ; ) {
            if (ae.tag === 5) {
              if (re === null) {
                re = ae;
                try {
                  (d = ae.stateNode),
                    W
                      ? ((h = d.style),
                        typeof h.setProperty == "function"
                          ? h.setProperty("display", "none", "important")
                          : (h.display = "none"))
                      : ((x = ae.stateNode),
                        (k = ae.memoizedProps.style),
                        (y =
                          k != null && k.hasOwnProperty("display")
                            ? k.display
                            : null),
                        (x.style.display = Wa("display", y)));
                } catch (Pe) {
                  Bt(e, e.return, Pe);
                }
              }
            } else if (ae.tag === 6) {
              if (re === null)
                try {
                  ae.stateNode.nodeValue = W ? "" : ae.memoizedProps;
                } catch (Pe) {
                  Bt(e, e.return, Pe);
                }
            } else if (
              ((ae.tag !== 22 && ae.tag !== 23) ||
                ae.memoizedState === null ||
                ae === e) &&
              ae.child !== null
            ) {
              (ae.child.return = ae), (ae = ae.child);
              continue;
            }
            if (ae === e) break e;
            for (; ae.sibling === null; ) {
              if (ae.return === null || ae.return === e) break e;
              re === ae && (re = null), (ae = ae.return);
            }
            re === ae && (re = null),
              (ae.sibling.return = ae.return),
              (ae = ae.sibling);
          }
        }
        break;
      case 19:
        fr(t, e), Yn(e), u & 4 && Zl(e);
        break;
      case 21:
        break;
      default:
        fr(t, e), Yn(e);
    }
  }
  function Yn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var o = e.return; o !== null; ) {
            if (lh(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(r(160));
        }
        switch (u.tag) {
          case 5:
            var d = u.stateNode;
            u.flags & 32 && ($r(d, ""), (u.flags &= -33));
            var h = uh(e);
            Yl(e, h, d);
            break;
          case 3:
          case 4:
            var y = u.stateNode.containerInfo,
              x = uh(e);
            Xl(e, x, y);
            break;
          default:
            throw Error(r(161));
        }
      } catch (k) {
        Bt(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ch(e, t, o) {
    (Ce = e), Or(e);
  }
  function Or(e, t, o) {
    for (var u = (e.mode & 1) !== 0; Ce !== null; ) {
      var d = Ce,
        h = d.child;
      if (d.tag === 22 && u) {
        var y = d.memoizedState !== null || cr;
        if (!y) {
          var x = d.alternate,
            k = (x !== null && x.memoizedState !== null) || wt;
          x = cr;
          var W = wt;
          if (((cr = y), (wt = k) && !W))
            for (Ce = d; Ce !== null; )
              (y = Ce),
                (k = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? rf(d)
                  : k !== null
                    ? ((k.return = y), (Ce = k))
                    : rf(d);
          for (; h !== null; ) (Ce = h), Or(h), (h = h.sibling);
          (Ce = d), (cr = x), (wt = W);
        }
        Hi(e);
      } else
        d.subtreeFlags & 8772 && h !== null
          ? ((h.return = d), (Ce = h))
          : Hi(e);
    }
  }
  function Hi(e) {
    for (; Ce !== null; ) {
      var t = Ce;
      if (t.flags & 8772) {
        var o = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                wt || Ra(5, t);
                break;
              case 1:
                var u = t.stateNode;
                if (t.flags & 4 && !wt)
                  if (o === null) u.componentDidMount();
                  else {
                    var d =
                      t.elementType === t.type
                        ? o.memoizedProps
                        : Ir(t.type, o.memoizedProps);
                    u.componentDidUpdate(
                      d,
                      o.memoizedState,
                      u.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var h = t.updateQueue;
                h !== null && Wd(t, h, u);
                break;
              case 3:
                var y = t.updateQueue;
                if (y !== null) {
                  if (((o = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        o = t.child.stateNode;
                        break;
                      case 1:
                        o = t.child.stateNode;
                    }
                  Wd(t, y, o);
                }
                break;
              case 5:
                var x = t.stateNode;
                if (o === null && t.flags & 4) {
                  o = x;
                  var k = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && o.focus();
                      break;
                    case "img":
                      k.src && (o.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var W = t.alternate;
                  if (W !== null) {
                    var re = W.memoizedState;
                    if (re !== null) {
                      var ae = re.dehydrated;
                      ae !== null && vt(ae);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(r(163));
            }
          wt || (t.flags & 512 && tf(t));
        } catch (ne) {
          Bt(t, t.return, ne);
        }
      }
      if (t === e) {
        Ce = null;
        break;
      }
      if (((o = t.sibling), o !== null)) {
        (o.return = t.return), (Ce = o);
        break;
      }
      Ce = t.return;
    }
  }
  function fh(e) {
    for (; Ce !== null; ) {
      var t = Ce;
      if (t === e) {
        Ce = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        (o.return = t.return), (Ce = o);
        break;
      }
      Ce = t.return;
    }
  }
  function rf(e) {
    for (; Ce !== null; ) {
      var t = Ce;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var o = t.return;
            try {
              Ra(4, t);
            } catch (k) {
              Bt(t, o, k);
            }
            break;
          case 1:
            var u = t.stateNode;
            if (typeof u.componentDidMount == "function") {
              var d = t.return;
              try {
                u.componentDidMount();
              } catch (k) {
                Bt(t, d, k);
              }
            }
            var h = t.return;
            try {
              tf(t);
            } catch (k) {
              Bt(t, h, k);
            }
            break;
          case 5:
            var y = t.return;
            try {
              tf(t);
            } catch (k) {
              Bt(t, y, k);
            }
        }
      } catch (k) {
        Bt(t, t.return, k);
      }
      if (t === e) {
        Ce = null;
        break;
      }
      var x = t.sibling;
      if (x !== null) {
        (x.return = t.return), (Ce = x);
        break;
      }
      Ce = t.return;
    }
  }
  var Hp = Math.ceil,
    eu = Q.ReactCurrentDispatcher,
    sf = Q.ReactCurrentOwner,
    dr = Q.ReactCurrentBatchConfig,
    ot = 0,
    nn = null,
    Gt = null,
    an = 0,
    Zn = 0,
    _o = Bn(0),
    Xt = 0,
    So = null,
    qi = 0,
    Aa = 0,
    of = 0,
    Oa = null,
    Un = null,
    tu = 0,
    xo = 1 / 0,
    mi = null,
    nu = !1,
    af = null,
    Ki = null,
    ru = !1,
    Yt = null,
    iu = 0,
    Na = 0,
    lf = null,
    ba = -1,
    su = 0;
  function bn() {
    return ot & 6 ? Tt() : ba !== -1 ? ba : (ba = Tt());
  }
  function Vi(e) {
    return e.mode & 1
      ? ot & 2 && an !== 0
        ? an & -an
        : $d.transition !== null
          ? (su === 0 && (su = nc()), su)
          : ((e = mt),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : hd(e.type))),
            e)
      : 1;
  }
  function Nr(e, t, o, u) {
    if (50 < Na) throw ((Na = 0), (lf = null), Error(r(185)));
    Vo(e, o, u),
      (!(ot & 2) || e !== nn) &&
        (e === nn && (!(ot & 2) && (Aa |= o), Xt === 4 && Qi(e, an)),
        Sn(e, u),
        o === 1 &&
          ot === 0 &&
          !(t.mode & 1) &&
          ((xo = Tt() + 500), El && Di()));
  }
  function Sn(e, t) {
    var o = e.callbackNode;
    Sp(e, t);
    var u = us(e, e === nn ? an : 0);
    if (u === 0)
      o !== null && td(o), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = u & -u), e.callbackPriority !== t)) {
      if ((o != null && td(o), t === 1))
        e.tag === 0 ? ys(hh.bind(null, e)) : Bd(hh.bind(null, e)),
          wl(function () {
            !(ot & 6) && Di();
          }),
          (o = null);
      else {
        switch (cs(u)) {
          case 1:
            o = ec;
            break;
          case 4:
            o = nd;
            break;
          case 16:
            o = qo;
            break;
          case 536870912:
            o = tc;
            break;
          default:
            o = qo;
        }
        o = _h(o, dh.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = o);
    }
  }
  function dh(e, t) {
    if (((ba = -1), (su = 0), ot & 6)) throw Error(r(327));
    var o = e.callbackNode;
    if (Ji() && e.callbackNode !== o) return null;
    var u = us(e, e === nn ? an : 0);
    if (u === 0) return null;
    if (u & 30 || u & e.expiredLanes || t) t = ou(e, u);
    else {
      t = u;
      var d = ot;
      ot |= 2;
      var h = mh();
      (nn !== e || an !== t) && ((mi = null), (xo = Tt() + 500), Ps(e, t));
      do
        try {
          Vp();
          break;
        } catch (x) {
          ph(e, x);
        }
      while (!0);
      da(),
        (eu.current = h),
        (ot = d),
        Gt !== null ? (t = 0) : ((nn = null), (an = 0), (t = Xt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((d = Ja(e)), d !== 0 && ((u = d), (t = uf(e, d)))),
        t === 1)
      )
        throw ((o = So), Ps(e, 0), Qi(e, u), Sn(e, Tt()), o);
      if (t === 6) Qi(e, u);
      else {
        if (
          ((d = e.current.alternate),
          !(u & 30) &&
            !qp(d) &&
            ((t = ou(e, u)),
            t === 2 && ((h = Ja(e)), h !== 0 && ((u = h), (t = uf(e, h)))),
            t === 1))
        )
          throw ((o = So), Ps(e, 0), Qi(e, u), Sn(e, Tt()), o);
        switch (((e.finishedWork = d), (e.finishedLanes = u), t)) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Rs(e, Un, mi);
            break;
          case 3:
            if (
              (Qi(e, u),
              (u & 130023424) === u && ((t = tu + 500 - Tt()), 10 < t))
            ) {
              if (us(e, 0) !== 0) break;
              if (((d = e.suspendedLanes), (d & u) !== u)) {
                bn(), (e.pingedLanes |= e.suspendedLanes & d);
                break;
              }
              e.timeoutHandle = Ni(Rs.bind(null, e, Un, mi), t);
              break;
            }
            Rs(e, Un, mi);
            break;
          case 4:
            if ((Qi(e, u), (u & 4194240) === u)) break;
            for (t = e.eventTimes, d = -1; 0 < u; ) {
              var y = 31 - xr(u);
              (h = 1 << y), (y = t[y]), y > d && (d = y), (u &= ~h);
            }
            if (
              ((u = d),
              (u = Tt() - u),
              (u =
                (120 > u
                  ? 120
                  : 480 > u
                    ? 480
                    : 1080 > u
                      ? 1080
                      : 1920 > u
                        ? 1920
                        : 3e3 > u
                          ? 3e3
                          : 4320 > u
                            ? 4320
                            : 1960 * Hp(u / 1960)) - u),
              10 < u)
            ) {
              e.timeoutHandle = Ni(Rs.bind(null, e, Un, mi), u);
              break;
            }
            Rs(e, Un, mi);
            break;
          case 5:
            Rs(e, Un, mi);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return Sn(e, Tt()), e.callbackNode === o ? dh.bind(null, e) : null;
  }
  function uf(e, t) {
    var o = Oa;
    return (
      e.current.memoizedState.isDehydrated && (Ps(e, t).flags |= 256),
      (e = ou(e, t)),
      e !== 2 && ((t = Un), (Un = o), t !== null && cf(t)),
      e
    );
  }
  function cf(e) {
    Un === null ? (Un = e) : Un.push.apply(Un, e);
  }
  function qp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var o = t.updateQueue;
        if (o !== null && ((o = o.stores), o !== null))
          for (var u = 0; u < o.length; u++) {
            var d = o[u],
              h = d.getSnapshot;
            d = d.value;
            try {
              if (!U(h(), d)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((o = t.child), t.subtreeFlags & 16384 && o !== null))
        (o.return = t), (t = o);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Qi(e, t) {
    for (
      t &= ~of,
        t &= ~Aa,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var o = 31 - xr(t),
        u = 1 << o;
      (e[o] = -1), (t &= ~u);
    }
  }
  function hh(e) {
    if (ot & 6) throw Error(r(327));
    Ji();
    var t = us(e, 0);
    if (!(t & 1)) return Sn(e, Tt()), null;
    var o = ou(e, t);
    if (e.tag !== 0 && o === 2) {
      var u = Ja(e);
      u !== 0 && ((t = u), (o = uf(e, u)));
    }
    if (o === 1) throw ((o = So), Ps(e, 0), Qi(e, t), Sn(e, Tt()), o);
    if (o === 6) throw Error(r(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Rs(e, Un, mi),
      Sn(e, Tt()),
      null
    );
  }
  function ff(e, t) {
    var o = ot;
    ot |= 1;
    try {
      return e(t);
    } finally {
      (ot = o), ot === 0 && ((xo = Tt() + 500), El && Di());
    }
  }
  function ks(e) {
    Yt !== null && Yt.tag === 0 && !(ot & 6) && Ji();
    var t = ot;
    ot |= 1;
    var o = dr.transition,
      u = mt;
    try {
      if (((dr.transition = null), (mt = 1), e)) return e();
    } finally {
      (mt = u), (dr.transition = o), (ot = t), !(ot & 6) && Di();
    }
  }
  function df() {
    (Zn = _o.current), Ot(_o);
  }
  function Ps(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var o = e.timeoutHandle;
    if ((o !== -1 && ((e.timeoutHandle = -1), ua(o)), Gt !== null))
      for (o = Gt.return; o !== null; ) {
        var u = o;
        switch ((_s(u), u.tag)) {
          case 1:
            (u = u.type.childContextTypes), u != null && xl();
            break;
          case 3:
            lo(), Ot(jn), Ot(hn), Mc();
            break;
          case 5:
            Dc(u);
            break;
          case 4:
            lo();
            break;
          case 13:
            Ot(bt);
            break;
          case 19:
            Ot(bt);
            break;
          case 10:
            Rl(u.type._context);
            break;
          case 22:
          case 23:
            df();
        }
        o = o.return;
      }
    if (
      ((nn = e),
      (Gt = e = Xi(e.current, null)),
      (an = Zn = t),
      (Xt = 0),
      (So = null),
      (of = Aa = qi = 0),
      (Un = Oa = null),
      Jn !== null)
    ) {
      for (t = 0; t < Jn.length; t++)
        if (((o = Jn[t]), (u = o.interleaved), u !== null)) {
          o.interleaved = null;
          var d = u.next,
            h = o.pending;
          if (h !== null) {
            var y = h.next;
            (h.next = d), (u.next = y);
          }
          o.pending = u;
        }
      Jn = null;
    }
    return e;
  }
  function ph(e, t) {
    do {
      var o = Gt;
      try {
        if ((da(), (uo.current = di), Dl)) {
          for (var u = Dt.memoizedState; u !== null; ) {
            var d = u.queue;
            d !== null && (d.pending = null), (u = u.next);
          }
          Dl = !1;
        }
        if (
          ((Es = 0),
          (Vt = Mt = Dt = null),
          (va = !1),
          (yn = 0),
          (sf.current = null),
          o === null || o.return === null)
        ) {
          (Xt = 1), (So = t), (Gt = null);
          break;
        }
        e: {
          var h = e,
            y = o.return,
            x = o,
            k = t;
          if (
            ((t = an),
            (x.flags |= 32768),
            k !== null && typeof k == "object" && typeof k.then == "function")
          ) {
            var W = k,
              re = x,
              ae = re.tag;
            if (!(re.mode & 1) && (ae === 0 || ae === 11 || ae === 15)) {
              var ne = re.alternate;
              ne
                ? ((re.updateQueue = ne.updateQueue),
                  (re.memoizedState = ne.memoizedState),
                  (re.lanes = ne.lanes))
                : ((re.updateQueue = null), (re.memoizedState = null));
            }
            var we = qc(y);
            if (we !== null) {
              (we.flags &= -257),
                Ea(we, y, x, h, t),
                we.mode & 1 && Zd(h, W, t),
                (t = we),
                (k = W);
              var Ie = t.updateQueue;
              if (Ie === null) {
                var Pe = new Set();
                Pe.add(k), (t.updateQueue = Pe);
              } else Ie.add(k);
              break e;
            } else {
              if (!(t & 1)) {
                Zd(h, W, t), hf();
                break e;
              }
              k = Error(r(426));
            }
          } else if (Nt && x.mode & 1) {
            var jt = qc(y);
            if (jt !== null) {
              !(jt.flags & 65536) && (jt.flags |= 256),
                Ea(jt, y, x, h, t),
                Xr(Is(k, x));
              break e;
            }
          }
          (h = k = Is(k, x)),
            Xt !== 4 && (Xt = 2),
            Oa === null ? (Oa = [h]) : Oa.push(h),
            (h = y);
          do {
            switch (h.tag) {
              case 3:
                (h.flags |= 65536), (t &= -t), (h.lanes |= t);
                var D = ql(h, k, t);
                Ac(h, D);
                break e;
              case 1:
                x = k;
                var O = h.type,
                  F = h.stateNode;
                if (
                  !(h.flags & 128) &&
                  (typeof O.getDerivedStateFromError == "function" ||
                    (F !== null &&
                      typeof F.componentDidCatch == "function" &&
                      (Ki === null || !Ki.has(F))))
                ) {
                  (h.flags |= 65536), (t &= -t), (h.lanes |= t);
                  var ue = xa(h, x, t);
                  Ac(h, ue);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        yh(o);
      } catch (Re) {
        (t = Re), Gt === o && o !== null && (Gt = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function mh() {
    var e = eu.current;
    return (eu.current = di), e === null ? di : e;
  }
  function hf() {
    (Xt === 0 || Xt === 3 || Xt === 2) && (Xt = 4),
      nn === null || (!(qi & 268435455) && !(Aa & 268435455)) || Qi(nn, an);
  }
  function ou(e, t) {
    var o = ot;
    ot |= 2;
    var u = mh();
    (nn !== e || an !== t) && ((mi = null), Ps(e, t));
    do
      try {
        Kp();
        break;
      } catch (d) {
        ph(e, d);
      }
    while (!0);
    if ((da(), (ot = o), (eu.current = u), Gt !== null)) throw Error(r(261));
    return (nn = null), (an = 0), Xt;
  }
  function Kp() {
    for (; Gt !== null; ) gh(Gt);
  }
  function Vp() {
    for (; Gt !== null && !Ka(); ) gh(Gt);
  }
  function gh(e) {
    var t = wh(e.alternate, e, Zn);
    (e.memoizedProps = e.pendingProps),
      t === null ? yh(e) : (Gt = t),
      (sf.current = null);
  }
  function yh(e) {
    var t = e;
    do {
      var o = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((o = Gp(o, t)), o !== null)) {
          (o.flags &= 32767), (Gt = o);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Xt = 6), (Gt = null);
          return;
        }
      } else if (((o = Wp(o, t, Zn)), o !== null)) {
        Gt = o;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Gt = t;
        return;
      }
      Gt = t = e;
    } while (t !== null);
    Xt === 0 && (Xt = 5);
  }
  function Rs(e, t, o) {
    var u = mt,
      d = dr.transition;
    try {
      (dr.transition = null), (mt = 1), Qp(e, t, o, u);
    } finally {
      (dr.transition = d), (mt = u);
    }
    return null;
  }
  function Qp(e, t, o, u) {
    do Ji();
    while (Yt !== null);
    if (ot & 6) throw Error(r(327));
    o = e.finishedWork;
    var d = e.finishedLanes;
    if (o === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), o === e.current))
      throw Error(r(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var h = o.lanes | o.childLanes;
    if (
      (ld(e, h),
      e === nn && ((Gt = nn = null), (an = 0)),
      (!(o.subtreeFlags & 2064) && !(o.flags & 2064)) ||
        ru ||
        ((ru = !0),
        _h(qo, function () {
          return Ji(), null;
        })),
      (h = (o.flags & 15990) !== 0),
      o.subtreeFlags & 15990 || h)
    ) {
      (h = dr.transition), (dr.transition = null);
      var y = mt;
      mt = 1;
      var x = ot;
      (ot |= 4),
        (sf.current = null),
        Pa(e, o),
        nf(o, e),
        Bp(gs),
        (el = !!aa),
        (gs = aa = null),
        (e.current = o),
        ch(o),
        vp(),
        (ot = x),
        (mt = y),
        (dr.transition = h);
    } else e.current = o;
    if (
      (ru && ((ru = !1), (Yt = e), (iu = d)),
      (h = e.pendingLanes),
      h === 0 && (Ki = null),
      _p(o.stateNode),
      Sn(e, Tt()),
      t !== null)
    )
      for (u = e.onRecoverableError, o = 0; o < t.length; o++)
        (d = t[o]), u(d.value, { componentStack: d.stack, digest: d.digest });
    if (nu) throw ((nu = !1), (e = af), (af = null), e);
    return (
      iu & 1 && e.tag !== 0 && Ji(),
      (h = e.pendingLanes),
      h & 1 ? (e === lf ? Na++ : ((Na = 0), (lf = e))) : (Na = 0),
      Di(),
      null
    );
  }
  function Ji() {
    if (Yt !== null) {
      var e = cs(iu),
        t = dr.transition,
        o = mt;
      try {
        if (((dr.transition = null), (mt = 16 > e ? 16 : e), Yt === null))
          var u = !1;
        else {
          if (((e = Yt), (Yt = null), (iu = 0), ot & 6)) throw Error(r(331));
          var d = ot;
          for (ot |= 4, Ce = e.current; Ce !== null; ) {
            var h = Ce,
              y = h.child;
            if (Ce.flags & 16) {
              var x = h.deletions;
              if (x !== null) {
                for (var k = 0; k < x.length; k++) {
                  var W = x[k];
                  for (Ce = W; Ce !== null; ) {
                    var re = Ce;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vo(8, re, h);
                    }
                    var ae = re.child;
                    if (ae !== null) (ae.return = re), (Ce = ae);
                    else
                      for (; Ce !== null; ) {
                        re = Ce;
                        var ne = re.sibling,
                          we = re.return;
                        if ((ah(re), re === W)) {
                          Ce = null;
                          break;
                        }
                        if (ne !== null) {
                          (ne.return = we), (Ce = ne);
                          break;
                        }
                        Ce = we;
                      }
                  }
                }
                var Ie = h.alternate;
                if (Ie !== null) {
                  var Pe = Ie.child;
                  if (Pe !== null) {
                    Ie.child = null;
                    do {
                      var jt = Pe.sibling;
                      (Pe.sibling = null), (Pe = jt);
                    } while (Pe !== null);
                  }
                }
                Ce = h;
              }
            }
            if (h.subtreeFlags & 2064 && y !== null) (y.return = h), (Ce = y);
            else
              e: for (; Ce !== null; ) {
                if (((h = Ce), h.flags & 2048))
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vo(9, h, h.return);
                  }
                var D = h.sibling;
                if (D !== null) {
                  (D.return = h.return), (Ce = D);
                  break e;
                }
                Ce = h.return;
              }
          }
          var O = e.current;
          for (Ce = O; Ce !== null; ) {
            y = Ce;
            var F = y.child;
            if (y.subtreeFlags & 2064 && F !== null) (F.return = y), (Ce = F);
            else
              e: for (y = O; Ce !== null; ) {
                if (((x = Ce), x.flags & 2048))
                  try {
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ra(9, x);
                    }
                  } catch (Re) {
                    Bt(x, x.return, Re);
                  }
                if (x === y) {
                  Ce = null;
                  break e;
                }
                var ue = x.sibling;
                if (ue !== null) {
                  (ue.return = x.return), (Ce = ue);
                  break e;
                }
                Ce = x.return;
              }
          }
          if (
            ((ot = d),
            Di(),
            Ur && typeof Ur.onPostCommitFiberRoot == "function")
          )
            try {
              Ur.onPostCommitFiberRoot(Va, e);
            } catch {}
          u = !0;
        }
        return u;
      } finally {
        (mt = o), (dr.transition = t);
      }
    }
    return !1;
  }
  function pf(e, t, o) {
    (t = Is(o, t)),
      (t = ql(e, t, 1)),
      (e = Bi(e, t, 1)),
      (t = bn()),
      e !== null && (Vo(e, 1, t), Sn(e, t));
  }
  function Bt(e, t, o) {
    if (e.tag === 3) pf(e, e, o);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          pf(t, e, o);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (Ki === null || !Ki.has(u)))
          ) {
            (e = Is(o, e)),
              (e = xa(t, e, 1)),
              (t = Bi(t, e, 1)),
              (e = bn()),
              t !== null && (Vo(t, 1, e), Sn(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jp(e, t, o) {
    var u = e.pingCache;
    u !== null && u.delete(t),
      (t = bn()),
      (e.pingedLanes |= e.suspendedLanes & o),
      nn === e &&
        (an & o) === o &&
        (Xt === 4 || (Xt === 3 && (an & 130023424) === an && 500 > Tt() - tu)
          ? Ps(e, 0)
          : (of |= o)),
      Sn(e, t);
  }
  function vh(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Qa), (Qa <<= 1), !(Qa & 130023424) && (Qa = 4194304))
        : (t = 1));
    var o = bn();
    (e = kr(e, t)), e !== null && (Vo(e, t, o), Sn(e, o));
  }
  function Xp(e) {
    var t = e.memoizedState,
      o = 0;
    t !== null && (o = t.retryLane), vh(e, o);
  }
  function Yp(e, t) {
    var o = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode,
          d = e.memoizedState;
        d !== null && (o = d.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    u !== null && u.delete(t), vh(e, o);
  }
  var wh;
  wh = function (e, t, o) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || jn.current) vn = !0;
      else {
        if (!(e.lanes & o) && !(t.flags & 128)) return (vn = !1), wn(e, t, o);
        vn = !!(e.flags & 131072);
      }
    else (vn = !1), Nt && t.flags & 1048576 && jd(t, Il, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var u = t.type;
        go(e, t), (e = t.pendingProps);
        var d = io(t, hn.current);
        Mi(t, o), (d = Ml(null, t, u, e, d, o));
        var h = Fl();
        return (
          (t.flags |= 1),
          typeof d == "object" &&
          d !== null &&
          typeof d.render == "function" &&
          d.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              zn(u) ? ((h = !0), or(t)) : (h = !1),
              (t.memoizedState =
                d.state !== null && d.state !== void 0 ? d.state : null),
              Rc(t),
              (d.updater = Nl),
              (t.stateNode = d),
              (d._reactInternals = t),
              bc(t, u, e, o),
              (t = Jc(null, t, u, !0, h, o)))
            : ((t.tag = 0), Nt && h && ca(t), Nn(null, t, d, o), (t = t.child)),
          t
        );
      case 16:
        u = t.elementType;
        e: {
          switch (
            (go(e, t),
            (e = t.pendingProps),
            (d = u._init),
            (u = d(u._payload)),
            (t.type = u),
            (d = t.tag = au(u)),
            (e = Ir(u, e)),
            d)
          ) {
            case 0:
              t = Kl(null, t, u, e, o);
              break e;
            case 1:
              t = nh(null, t, u, e, o);
              break e;
            case 11:
              t = Kc(null, t, u, e, o);
              break e;
            case 14:
              t = Yr(null, t, u, Ir(u.type, e), o);
              break e;
          }
          throw Error(r(306, u, ""));
        }
        return t;
      case 0:
        return (
          (u = t.type),
          (d = t.pendingProps),
          (d = t.elementType === u ? d : Ir(u, d)),
          Kl(e, t, u, d, o)
        );
      case 1:
        return (
          (u = t.type),
          (d = t.pendingProps),
          (d = t.elementType === u ? d : Ir(u, d)),
          nh(e, t, u, d, o)
        );
      case 3:
        e: {
          if ((Zr(t), e === null)) throw Error(r(387));
          (u = t.pendingProps),
            (h = t.memoizedState),
            (d = h.element),
            Ud(e, t),
            Ol(t, u, null, o);
          var y = t.memoizedState;
          if (((u = y.element), h.isDehydrated))
            if (
              ((h = {
                element: u,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (t.updateQueue.baseState = h),
              (t.memoizedState = h),
              t.flags & 256)
            ) {
              (d = Is(Error(r(423)), t)), (t = Vl(e, t, u, o, d));
              break e;
            } else if (u !== d) {
              (d = Is(Error(r(424)), t)), (t = Vl(e, t, u, o, d));
              break e;
            } else
              for (
                Qn = bi(t.stateNode.containerInfo.firstChild),
                  mn = t,
                  Nt = !0,
                  Cr = null,
                  o = Tc(t, null, u, o),
                  t.child = o;
                o;

              )
                (o.flags = (o.flags & -3) | 4096), (o = o.sibling);
          else {
            if ((Jr(), u === d)) {
              t = ei(e, t, o);
              break e;
            }
            Nn(e, t, u, o);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Lc(t),
          e === null && $n(t),
          (u = t.type),
          (d = t.pendingProps),
          (h = e !== null ? e.memoizedProps : null),
          (y = d.children),
          la(u, d) ? (y = null) : h !== null && la(u, h) && (t.flags |= 32),
          th(e, t),
          Nn(e, t, y, o),
          t.child
        );
      case 6:
        return e === null && $n(t), null;
      case 13:
        return ka(e, t, o);
      case 4:
        return (
          Ll(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          e === null ? (t.child = zi(t, null, u, o)) : Nn(e, t, u, o),
          t.child
        );
      case 11:
        return (
          (u = t.type),
          (d = t.pendingProps),
          (d = t.elementType === u ? d : Ir(u, d)),
          Kc(e, t, u, d, o)
        );
      case 7:
        return Nn(e, t, t.pendingProps, o), t.child;
      case 8:
        return Nn(e, t, t.pendingProps.children, o), t.child;
      case 12:
        return Nn(e, t, t.pendingProps.children, o), t.child;
      case 10:
        e: {
          if (
            ((u = t.type._context),
            (d = t.pendingProps),
            (h = t.memoizedProps),
            (y = d.value),
            Pt(Ss, u._currentValue),
            (u._currentValue = y),
            h !== null)
          )
            if (U(h.value, y)) {
              if (h.children === d.children && !jn.current) {
                t = ei(e, t, o);
                break e;
              }
            } else
              for (h = t.child, h !== null && (h.return = t); h !== null; ) {
                var x = h.dependencies;
                if (x !== null) {
                  y = h.child;
                  for (var k = x.firstContext; k !== null; ) {
                    if (k.context === u) {
                      if (h.tag === 1) {
                        (k = Pr(-1, o & -o)), (k.tag = 2);
                        var W = h.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var re = W.pending;
                          re === null
                            ? (k.next = k)
                            : ((k.next = re.next), (re.next = k)),
                            (W.pending = k);
                        }
                      }
                      (h.lanes |= o),
                        (k = h.alternate),
                        k !== null && (k.lanes |= o),
                        ur(h.return, o, t),
                        (x.lanes |= o);
                      break;
                    }
                    k = k.next;
                  }
                } else if (h.tag === 10) y = h.type === t.type ? null : h.child;
                else if (h.tag === 18) {
                  if (((y = h.return), y === null)) throw Error(r(341));
                  (y.lanes |= o),
                    (x = y.alternate),
                    x !== null && (x.lanes |= o),
                    ur(y, o, t),
                    (y = h.sibling);
                } else y = h.child;
                if (y !== null) y.return = h;
                else
                  for (y = h; y !== null; ) {
                    if (y === t) {
                      y = null;
                      break;
                    }
                    if (((h = y.sibling), h !== null)) {
                      (h.return = y.return), (y = h);
                      break;
                    }
                    y = y.return;
                  }
                h = y;
              }
          Nn(e, t, d.children, o), (t = t.child);
        }
        return t;
      case 9:
        return (
          (d = t.type),
          (u = t.pendingProps.children),
          Mi(t, o),
          (d = An(d)),
          (u = u(d)),
          (t.flags |= 1),
          Nn(e, t, u, o),
          t.child
        );
      case 14:
        return (
          (u = t.type),
          (d = Ir(u, t.pendingProps)),
          (d = Ir(u.type, d)),
          Yr(e, t, u, d, o)
        );
      case 15:
        return Vc(e, t, t.type, t.pendingProps, o);
      case 17:
        return (
          (u = t.type),
          (d = t.pendingProps),
          (d = t.elementType === u ? d : Ir(u, d)),
          go(e, t),
          (t.tag = 1),
          zn(u) ? ((e = !0), or(t)) : (e = !1),
          Mi(t, o),
          Nc(t, u, d),
          bc(t, u, d, o),
          Jc(null, t, u, !0, e, o)
        );
      case 19:
        return rh(e, t, o);
      case 22:
        return Qc(e, t, o);
    }
    throw Error(r(156, t.tag));
  };
  function _h(e, t) {
    return ed(e, t);
  }
  function Zp(e, t, o, u) {
    (this.tag = e),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function er(e, t, o, u) {
    return new Zp(e, t, o, u);
  }
  function mf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function au(e) {
    if (typeof e == "function") return mf(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === he)) return 11;
      if (e === _e) return 14;
    }
    return 2;
  }
  function Xi(e, t) {
    var o = e.alternate;
    return (
      o === null
        ? ((o = er(e.tag, t, e.key, e.mode)),
          (o.elementType = e.elementType),
          (o.type = e.type),
          (o.stateNode = e.stateNode),
          (o.alternate = e),
          (e.alternate = o))
        : ((o.pendingProps = t),
          (o.type = e.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = e.flags & 14680064),
      (o.childLanes = e.childLanes),
      (o.lanes = e.lanes),
      (o.child = e.child),
      (o.memoizedProps = e.memoizedProps),
      (o.memoizedState = e.memoizedState),
      (o.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (o.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (o.sibling = e.sibling),
      (o.index = e.index),
      (o.ref = e.ref),
      o
    );
  }
  function lu(e, t, o, u, d, h) {
    var y = 2;
    if (((u = e), typeof e == "function")) mf(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else
      e: switch (e) {
        case de:
          return As(o.children, d, h, t);
        case A:
          (y = 8), (d |= 8);
          break;
        case je:
          return (
            (e = er(12, o, t, d | 2)), (e.elementType = je), (e.lanes = h), e
          );
        case ce:
          return (e = er(13, o, t, d)), (e.elementType = ce), (e.lanes = h), e;
        case oe:
          return (e = er(19, o, t, d)), (e.elementType = oe), (e.lanes = h), e;
        case xe:
          return uu(o, d, h, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Te:
                y = 10;
                break e;
              case ge:
                y = 9;
                break e;
              case he:
                y = 11;
                break e;
              case _e:
                y = 14;
                break e;
              case Ae:
                (y = 16), (u = null);
                break e;
            }
          throw Error(r(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = er(y, o, t, d)), (t.elementType = e), (t.type = u), (t.lanes = h), t
    );
  }
  function As(e, t, o, u) {
    return (e = er(7, e, u, t)), (e.lanes = o), e;
  }
  function uu(e, t, o, u) {
    return (
      (e = er(22, e, u, t)),
      (e.elementType = xe),
      (e.lanes = o),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function gf(e, t, o) {
    return (e = er(6, e, null, t)), (e.lanes = o), e;
  }
  function yf(e, t, o) {
    return (
      (t = er(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = o),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function em(e, t, o, u, d) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ko(0)),
      (this.expirationTimes = Ko(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ko(0)),
      (this.identifierPrefix = u),
      (this.onRecoverableError = d),
      (this.mutableSourceEagerHydrationData = null);
  }
  function vf(e, t, o, u, d, h, y, x, k) {
    return (
      (e = new em(e, t, o, x, k)),
      t === 1 ? ((t = 1), h === !0 && (t |= 8)) : (t = 0),
      (h = er(3, null, null, t)),
      (e.current = h),
      (h.stateNode = e),
      (h.memoizedState = {
        element: u,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Rc(h),
      e
    );
  }
  function tm(e, t, o) {
    var u =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: fe,
      key: u == null ? null : "" + u,
      children: e,
      containerInfo: t,
      implementation: o,
    };
  }
  function Sh(e) {
    if (!e) return Li;
    e = e._reactInternals;
    e: {
      if (ls(e) !== e || e.tag !== 1) throw Error(r(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (zn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(r(171));
    }
    if (e.tag === 1) {
      var o = e.type;
      if (zn(o)) return Md(e, o, t);
    }
    return t;
  }
  function xh(e, t, o, u, d, h, y, x, k) {
    return (
      (e = vf(o, u, !0, e, d, h, y, x, k)),
      (e.context = Sh(null)),
      (o = e.current),
      (u = bn()),
      (d = Vi(o)),
      (h = Pr(u, d)),
      (h.callback = t ?? null),
      Bi(o, h, d),
      (e.current.lanes = d),
      Vo(e, d, u),
      Sn(e, u),
      e
    );
  }
  function cu(e, t, o, u) {
    var d = t.current,
      h = bn(),
      y = Vi(d);
    return (
      (o = Sh(o)),
      t.context === null ? (t.context = o) : (t.pendingContext = o),
      (t = Pr(h, y)),
      (t.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (t.callback = u),
      (e = Bi(d, t, y)),
      e !== null && (Nr(e, d, y, h), ji(e, d, y)),
      y
    );
  }
  function fu(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Eh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var o = e.retryLane;
      e.retryLane = o !== 0 && o < t ? o : t;
    }
  }
  function wf(e, t) {
    Eh(e, t), (e = e.alternate) && Eh(e, t);
  }
  function nm() {
    return null;
  }
  var _f =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function du(e) {
    this._internalRoot = e;
  }
  (hu.prototype.render = du.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      cu(e, t, null, null);
    }),
    (hu.prototype.unmount = du.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ks(function () {
            cu(null, e, null, null);
          }),
            (t[Vn] = null);
        }
      });
  function hu(e) {
    this._internalRoot = e;
  }
  hu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ic();
      e = { blockedOn: null, target: e, priority: t };
      for (var o = 0; o < ki.length && t !== 0 && t < ki[o].priority; o++);
      ki.splice(o, 0, e), o === 0 && fd(e);
    }
  };
  function Sf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function pu(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ch() {}
  function mu(e, t, o, u, d) {
    if (d) {
      if (typeof u == "function") {
        var h = u;
        u = function () {
          var W = fu(y);
          h.call(W);
        };
      }
      var y = xh(t, u, e, 0, null, !1, !1, "", Ch);
      return (
        (e._reactRootContainer = y),
        (e[Vn] = y.current),
        Oi(e.nodeType === 8 ? e.parentNode : e),
        ks(),
        y
      );
    }
    for (; (d = e.lastChild); ) e.removeChild(d);
    if (typeof u == "function") {
      var x = u;
      u = function () {
        var W = fu(k);
        x.call(W);
      };
    }
    var k = vf(e, 0, !1, null, null, !1, !1, "", Ch);
    return (
      (e._reactRootContainer = k),
      (e[Vn] = k.current),
      Oi(e.nodeType === 8 ? e.parentNode : e),
      ks(function () {
        cu(t, k, o, u);
      }),
      k
    );
  }
  function gu(e, t, o, u, d) {
    var h = o._reactRootContainer;
    if (h) {
      var y = h;
      if (typeof d == "function") {
        var x = d;
        d = function () {
          var k = fu(y);
          x.call(k);
        };
      }
      cu(t, y, e, d);
    } else y = mu(o, t, e, d, u);
    return fu(y);
  }
  (rc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var o = zs(t.pendingLanes);
          o !== 0 &&
            (Qo(t, o | 1), Sn(t, Tt()), !(ot & 6) && ((xo = Tt() + 500), Di()));
        }
        break;
      case 13:
        ks(function () {
          var u = kr(e, 1);
          if (u !== null) {
            var d = bn();
            Nr(u, e, 1, d);
          }
        }),
          wf(e, 1);
    }
  }),
    (Xa = function (e) {
      if (e.tag === 13) {
        var t = kr(e, 134217728);
        if (t !== null) {
          var o = bn();
          Nr(t, e, 134217728, o);
        }
        wf(e, 134217728);
      }
    }),
    (ud = function (e) {
      if (e.tag === 13) {
        var t = Vi(e),
          o = kr(e, t);
        if (o !== null) {
          var u = bn();
          Nr(o, e, t, u);
        }
        wf(e, t);
      }
    }),
    (ic = function () {
      return mt;
    }),
    (sc = function (e, t) {
      var o = mt;
      try {
        return (mt = e), t();
      } finally {
        mt = o;
      }
    }),
    (Vu = function (e, t, o) {
      switch (t) {
        case "input":
          if ((Je(e, o), (t = o.name), o.type === "radio" && t != null)) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < o.length;
              t++
            ) {
              var u = o[t];
              if (u !== e && u.form === e.form) {
                var d = Sl(u);
                if (!d) throw Error(r(90));
                rt(u), Je(u, d);
              }
            }
          }
          break;
        case "textarea":
          Sr(e, o);
          break;
        case "select":
          (t = o.value), t != null && gt(e, !!o.multiple, t, !1);
      }
    }),
    (Qf = ff),
    (Qu = ks);
  var rm = { usingClientEntryPoint: !1, Events: [dn, Xe, Sl, Kf, Vf, ff] },
    Ta = {
      findFiberByHostInstance: qr,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    im = {
      bundleType: Ta.bundleType,
      version: Ta.version,
      rendererPackageName: Ta.rendererPackageName,
      rendererConfig: Ta.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Yf(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ta.findFiberByHostInstance || nm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yu.isDisabled && yu.supportsFiber)
      try {
        (Va = yu.inject(im)), (Ur = yu);
      } catch {}
  }
  return (
    (gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rm),
    (gr.createPortal = function (e, t) {
      var o =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Sf(t)) throw Error(r(200));
      return tm(e, t, null, o);
    }),
    (gr.createRoot = function (e, t) {
      if (!Sf(e)) throw Error(r(299));
      var o = !1,
        u = "",
        d = _f;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (o = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = vf(e, 1, !1, null, null, o, !1, u, d)),
        (e[Vn] = t.current),
        Oi(e.nodeType === 8 ? e.parentNode : e),
        new du(t)
      );
    }),
    (gr.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(r(188))
          : ((e = Object.keys(e).join(",")), Error(r(268, e)));
      return (e = Yf(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (gr.flushSync = function (e) {
      return ks(e);
    }),
    (gr.hydrate = function (e, t, o) {
      if (!pu(t)) throw Error(r(200));
      return gu(null, e, t, !0, o);
    }),
    (gr.hydrateRoot = function (e, t, o) {
      if (!Sf(e)) throw Error(r(405));
      var u = (o != null && o.hydratedSources) || null,
        d = !1,
        h = "",
        y = _f;
      if (
        (o != null &&
          (o.unstable_strictMode === !0 && (d = !0),
          o.identifierPrefix !== void 0 && (h = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (y = o.onRecoverableError)),
        (t = xh(t, null, e, 1, o ?? null, d, !1, h, y)),
        (e[Vn] = t.current),
        Oi(e),
        u)
      )
        for (e = 0; e < u.length; e++)
          (o = u[e]),
            (d = o._getVersion),
            (d = d(o._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [o, d])
              : t.mutableSourceEagerHydrationData.push(o, d);
      return new hu(t);
    }),
    (gr.render = function (e, t, o) {
      if (!pu(t)) throw Error(r(200));
      return gu(null, e, t, !1, o);
    }),
    (gr.unmountComponentAtNode = function (e) {
      if (!pu(e)) throw Error(r(40));
      return e._reactRootContainer
        ? (ks(function () {
            gu(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Vn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (gr.unstable_batchedUpdates = ff),
    (gr.unstable_renderSubtreeIntoContainer = function (e, t, o, u) {
      if (!pu(o)) throw Error(r(200));
      if (e == null || e._reactInternals === void 0) throw Error(r(38));
      return gu(e, t, o, !1, u);
    }),
    (gr.version = "18.2.0-next-9e3b772b8-20220608"),
    gr
  );
}
var c0;
function a_() {
  if (c0) return _m.exports;
  c0 = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (_m.exports = o_()), _m.exports;
}
var f0;
function l_() {
  if (f0) return Oh;
  f0 = 1;
  var a = a_();
  return (Oh.createRoot = a.createRoot), (Oh.hydrateRoot = a.hydrateRoot), Oh;
}
var u_ = l_(),
  ie = ig();
class c_ extends ie.Component {
  constructor() {
    super(...arguments);
    sn(this, "state", { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(r, l) {
    console.error("Error:", r, l);
  }
  render() {
    return this.state.hasError
      ? b.jsxs("div", {
          className: "error-boundary",
          children: [
            b.jsx("h2", { children: "Oh no!" }),
            b.jsxs("p", {
              children: [
                "There was an error. ",
                b.jsx("a", { href: "/", children: "Click here" }),
                " to go back to the homepage.",
              ],
            }),
          ],
        })
      : this.props.children;
  }
}
/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qh() {
  return (
    (Qh = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (a[l] = r[l]);
          }
          return a;
        }),
    Qh.apply(this, arguments)
  );
}
var Do;
(function (a) {
  (a.Pop = "POP"), (a.Push = "PUSH"), (a.Replace = "REPLACE");
})(Do || (Do = {}));
const d0 = "popstate";
function f_(a) {
  a === void 0 && (a = {});
  function i(l, f) {
    let { pathname: m, search: v, hash: S } = l.location;
    return Mm(
      "",
      { pathname: m, search: v, hash: S },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default",
    );
  }
  function r(l, f) {
    return typeof f == "string" ? f : Fm(f);
  }
  return h_(i, r, null, a);
}
function d_() {
  return Math.random().toString(36).substr(2, 8);
}
function h0(a) {
  return { usr: a.state, key: a.key };
}
function Mm(a, i, r, l) {
  return (
    r === void 0 && (r = null),
    Qh(
      { pathname: typeof a == "string" ? a : a.pathname, search: "", hash: "" },
      typeof i == "string" ? $u(i) : i,
      { state: r, key: (i && i.key) || l || d_() },
    )
  );
}
function Fm(a) {
  let { pathname: i = "/", search: r = "", hash: l = "" } = a;
  return (
    r && r !== "?" && (i += r.charAt(0) === "?" ? r : "?" + r),
    l && l !== "#" && (i += l.charAt(0) === "#" ? l : "#" + l),
    i
  );
}
function $u(a) {
  let i = {};
  if (a) {
    let r = a.indexOf("#");
    r >= 0 && ((i.hash = a.substr(r)), (a = a.substr(0, r)));
    let l = a.indexOf("?");
    l >= 0 && ((i.search = a.substr(l)), (a = a.substr(0, l))),
      a && (i.pathname = a);
  }
  return i;
}
function h_(a, i, r, l) {
  l === void 0 && (l = {});
  let { window: f = document.defaultView, v5Compat: m = !1 } = l,
    v = f.history,
    S = Do.Pop,
    N = null;
  function M() {
    (S = Do.Pop), N && N({ action: S, location: R.location });
  }
  function G(H, $) {
    S = Do.Push;
    let B = Mm(R.location, H, $),
      z = h0(B),
      Y = R.createHref(B);
    try {
      v.pushState(z, "", Y);
    } catch {
      f.location.assign(Y);
    }
    m && N && N({ action: S, location: B });
  }
  function I(H, $) {
    S = Do.Replace;
    let B = Mm(R.location, H, $),
      z = h0(B),
      Y = R.createHref(B);
    v.replaceState(z, "", Y), m && N && N({ action: S, location: B });
  }
  let R = {
    get action() {
      return S;
    },
    get location() {
      return a(f, v);
    },
    listen(H) {
      if (N) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(d0, M),
        (N = H),
        () => {
          f.removeEventListener(d0, M), (N = null);
        }
      );
    },
    createHref(H) {
      return i(f, H);
    },
    push: G,
    replace: I,
    go(H) {
      return v.go(H);
    },
  };
  return R;
}
var p0;
(function (a) {
  (a.data = "data"),
    (a.deferred = "deferred"),
    (a.redirect = "redirect"),
    (a.error = "error");
})(p0 || (p0 = {}));
function p_(a, i, r) {
  r === void 0 && (r = "/");
  let l = typeof i == "string" ? $u(i) : i,
    f = iy(l.pathname || "/", r);
  if (f == null) return null;
  let m = ry(a);
  m_(m);
  let v = null;
  for (let S = 0; v == null && S < m.length; ++S) v = C_(m[S], f);
  return v;
}
function ry(a, i, r, l) {
  return (
    i === void 0 && (i = []),
    r === void 0 && (r = []),
    l === void 0 && (l = ""),
    a.forEach((f, m) => {
      let v = {
        relativePath: f.path || "",
        caseSensitive: f.caseSensitive === !0,
        childrenIndex: m,
        route: f,
      };
      v.relativePath.startsWith("/") &&
        (wr(
          v.relativePath.startsWith(l),
          'Absolute route path "' +
            v.relativePath +
            '" nested under path ' +
            ('"' + l + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes.",
        ),
        (v.relativePath = v.relativePath.slice(l.length)));
      let S = Mo([l, v.relativePath]),
        N = r.concat(v);
      f.children &&
        f.children.length > 0 &&
        (wr(
          f.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + S + '".'),
        ),
        ry(f.children, i, N, S)),
        !(f.path == null && !f.index) &&
          i.push({ path: S, score: x_(S, f.index), routesMeta: N });
    }),
    i
  );
}
function m_(a) {
  a.sort((i, r) =>
    i.score !== r.score
      ? r.score - i.score
      : E_(
          i.routesMeta.map((l) => l.childrenIndex),
          r.routesMeta.map((l) => l.childrenIndex),
        ),
  );
}
const g_ = /^:\w+$/,
  y_ = 3,
  v_ = 2,
  w_ = 1,
  __ = 10,
  S_ = -2,
  m0 = (a) => a === "*";
function x_(a, i) {
  let r = a.split("/"),
    l = r.length;
  return (
    r.some(m0) && (l += S_),
    i && (l += v_),
    r
      .filter((f) => !m0(f))
      .reduce((f, m) => f + (g_.test(m) ? y_ : m === "" ? w_ : __), l)
  );
}
function E_(a, i) {
  return a.length === i.length && a.slice(0, -1).every((l, f) => l === i[f])
    ? a[a.length - 1] - i[i.length - 1]
    : 0;
}
function C_(a, i) {
  let { routesMeta: r } = a,
    l = {},
    f = "/",
    m = [];
  for (let v = 0; v < r.length; ++v) {
    let S = r[v],
      N = v === r.length - 1,
      M = f === "/" ? i : i.slice(f.length) || "/",
      G = I_(
        { path: S.relativePath, caseSensitive: S.caseSensitive, end: N },
        M,
      );
    if (!G) return null;
    Object.assign(l, G.params);
    let I = S.route;
    m.push({
      params: l,
      pathname: Mo([f, G.pathname]),
      pathnameBase: O_(Mo([f, G.pathnameBase])),
      route: I,
    }),
      G.pathnameBase !== "/" && (f = Mo([f, G.pathnameBase]));
  }
  return m;
}
function I_(a, i) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [r, l] = k_(a.path, a.caseSensitive, a.end),
    f = i.match(r);
  if (!f) return null;
  let m = f[0],
    v = m.replace(/(.)\/+$/, "$1"),
    S = f.slice(1);
  return {
    params: l.reduce((M, G, I) => {
      if (G === "*") {
        let R = S[I] || "";
        v = m.slice(0, m.length - R.length).replace(/(.)\/+$/, "$1");
      }
      return (M[G] = P_(S[I] || "", G)), M;
    }, {}),
    pathname: m,
    pathnameBase: v,
    pattern: a,
  };
}
function k_(a, i, r) {
  i === void 0 && (i = !1),
    r === void 0 && (r = !0),
    sy(
      a === "*" || !a.endsWith("*") || a.endsWith("/*"),
      'Route path "' +
        a +
        '" will be treated as if it were ' +
        ('"' + a.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + a.replace(/\*$/, "/*") + '".'),
    );
  let l = [],
    f =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (v, S) => (l.push(S), "([^\\/]+)"));
  return (
    a.endsWith("*")
      ? (l.push("*"),
        (f += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : (f += r ? "\\/*$" : "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
    [new RegExp(f, i ? void 0 : "i"), l]
  );
}
function P_(a, i) {
  try {
    return decodeURIComponent(a);
  } catch (r) {
    return (
      sy(
        !1,
        'The value for the URL param "' +
          i +
          '" will not be decoded because' +
          (' the string "' +
            a +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ")."),
      ),
      a
    );
  }
}
function iy(a, i) {
  if (i === "/") return a;
  if (!a.toLowerCase().startsWith(i.toLowerCase())) return null;
  let r = i.endsWith("/") ? i.length - 1 : i.length,
    l = a.charAt(r);
  return l && l !== "/" ? null : a.slice(r) || "/";
}
function wr(a, i) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(i);
}
function sy(a, i) {
  if (!a) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function R_(a, i) {
  i === void 0 && (i = "/");
  let {
    pathname: r,
    search: l = "",
    hash: f = "",
  } = typeof a == "string" ? $u(a) : a;
  return {
    pathname: r ? (r.startsWith("/") ? r : A_(r, i)) : i,
    search: N_(l),
    hash: b_(f),
  };
}
function A_(a, i) {
  let r = i.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((f) => {
      f === ".." ? r.length > 1 && r.pop() : f !== "." && r.push(f);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function oy(a, i, r, l) {
  l === void 0 && (l = !1);
  let f = typeof a == "string" ? $u(a) : Qh({}, a),
    m = a === "" || f.pathname === "",
    v = m ? "/" : f.pathname,
    S;
  if (l || v == null) S = r;
  else {
    let I = i.length - 1;
    if (v.startsWith("..")) {
      let R = v.split("/");
      for (; R[0] === ".."; ) R.shift(), (I -= 1);
      f.pathname = R.join("/");
    }
    S = I >= 0 ? i[I] : "/";
  }
  let N = R_(f, S),
    M = v && v !== "/" && v.endsWith("/"),
    G = (m || v === ".") && r.endsWith("/");
  return !N.pathname.endsWith("/") && (M || G) && (N.pathname += "/"), N;
}
const Mo = (a) => a.join("/").replace(/\/\/+/g, "/"),
  O_ = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  N_ = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  b_ = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a);
class T_ {
  constructor(i, r, l) {
    (this.status = i), (this.statusText = r || ""), (this.data = l);
  }
}
function L_(a) {
  return a instanceof T_;
}
/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bm() {
  return (
    (Bm = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (a[l] = r[l]);
          }
          return a;
        }),
    Bm.apply(this, arguments)
  );
}
const D_ = ie.createContext(null),
  M_ = ie.createContext(null),
  ay = ie.createContext(null),
  sg = ie.createContext(null),
  tp = ie.createContext(null),
  Bf = ie.createContext({ outlet: null, matches: [] }),
  ly = ie.createContext(null);
function F_(a, i) {
  let { relative: r } = i === void 0 ? {} : i;
  jf() || wr(!1);
  let { basename: l, navigator: f } = ie.useContext(sg),
    { hash: m, pathname: v, search: S } = cy(a, { relative: r }),
    N = v;
  return (
    l !== "/" && (N = v === "/" ? l : Mo([l, v])),
    f.createHref({ pathname: N, search: S, hash: m })
  );
}
function jf() {
  return ie.useContext(tp) != null;
}
function np() {
  return jf() || wr(!1), ie.useContext(tp).location;
}
function uy(a) {
  return a.filter(
    (i, r) =>
      r === 0 || (!i.route.index && i.pathnameBase !== a[r - 1].pathnameBase),
  );
}
function B_() {
  jf() || wr(!1);
  let { basename: a, navigator: i } = ie.useContext(sg),
    { matches: r } = ie.useContext(Bf),
    { pathname: l } = np(),
    f = JSON.stringify(uy(r).map((S) => S.pathnameBase)),
    m = ie.useRef(!1);
  return (
    ie.useEffect(() => {
      m.current = !0;
    }),
    ie.useCallback(
      function (S, N) {
        if ((N === void 0 && (N = {}), !m.current)) return;
        if (typeof S == "number") {
          i.go(S);
          return;
        }
        let M = oy(S, JSON.parse(f), l, N.relative === "path");
        a !== "/" &&
          (M.pathname = M.pathname === "/" ? a : Mo([a, M.pathname])),
          (N.replace ? i.replace : i.push)(M, N.state, N);
      },
      [a, i, f, l],
    )
  );
}
function cy(a, i) {
  let { relative: r } = i === void 0 ? {} : i,
    { matches: l } = ie.useContext(Bf),
    { pathname: f } = np(),
    m = JSON.stringify(uy(l).map((v) => v.pathnameBase));
  return ie.useMemo(() => oy(a, JSON.parse(m), f, r === "path"), [a, m, f, r]);
}
function j_(a, i) {
  jf() || wr(!1);
  let r = ie.useContext(ay),
    { matches: l } = ie.useContext(Bf),
    f = l[l.length - 1],
    m = f ? f.params : {};
  f && f.pathname;
  let v = f ? f.pathnameBase : "/";
  f && f.route;
  let S = np(),
    N;
  if (i) {
    var M;
    let $ = typeof i == "string" ? $u(i) : i;
    v === "/" || ((M = $.pathname) != null && M.startsWith(v)) || wr(!1),
      (N = $);
  } else N = S;
  let G = N.pathname || "/",
    I = v === "/" ? G : G.slice(v.length) || "/",
    R = p_(a, { pathname: I }),
    H = W_(
      R &&
        R.map(($) =>
          Object.assign({}, $, {
            params: Object.assign({}, m, $.params),
            pathname: Mo([v, $.pathname]),
            pathnameBase: $.pathnameBase === "/" ? v : Mo([v, $.pathnameBase]),
          }),
        ),
      l,
      r || void 0,
    );
  return i
    ? ie.createElement(
        tp.Provider,
        {
          value: {
            location: Bm(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              N,
            ),
            navigationType: Do.Pop,
          },
        },
        H,
      )
    : H;
}
function z_() {
  let a = H_(),
    i = L_(a)
      ? a.status + " " + a.statusText
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    r = a instanceof Error ? a.stack : null,
    l = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: l },
    m = { padding: "2px 4px", backgroundColor: l };
  return ie.createElement(
    ie.Fragment,
    null,
    ie.createElement("h2", null, "Unhandled Thrown Error!"),
    ie.createElement("h3", { style: { fontStyle: "italic" } }, i),
    r ? ie.createElement("pre", { style: f }, r) : null,
    ie.createElement("p", null, "💿 Hey developer 👋"),
    ie.createElement(
      "p",
      null,
      "You can provide a way better UX than this when your app throws errors by providing your own ",
      ie.createElement("code", { style: m }, "errorElement"),
      " props on ",
      ie.createElement("code", { style: m }, "<Route>"),
    ),
  );
}
class $_ extends ie.Component {
  constructor(i) {
    super(i), (this.state = { location: i.location, error: i.error });
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, r) {
    return r.location !== i.location
      ? { error: i.error, location: i.location }
      : { error: i.error || r.error, location: r.location };
  }
  componentDidCatch(i, r) {
    console.error(
      "React Router caught the following error during render",
      i,
      r,
    );
  }
  render() {
    return this.state.error
      ? ie.createElement(ly.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function U_(a) {
  let { routeContext: i, match: r, children: l } = a,
    f = ie.useContext(D_);
  return (
    f && r.route.errorElement && (f._deepestRenderedBoundaryId = r.route.id),
    ie.createElement(Bf.Provider, { value: i }, l)
  );
}
function W_(a, i, r) {
  if ((i === void 0 && (i = []), a == null))
    if (r != null && r.errors) a = r.matches;
    else return null;
  let l = a,
    f = r == null ? void 0 : r.errors;
  if (f != null) {
    let m = l.findIndex(
      (v) => v.route.id && (f == null ? void 0 : f[v.route.id]),
    );
    m >= 0 || wr(!1), (l = l.slice(0, Math.min(l.length, m + 1)));
  }
  return l.reduceRight((m, v, S) => {
    let N = v.route.id ? (f == null ? void 0 : f[v.route.id]) : null,
      M = r ? v.route.errorElement || ie.createElement(z_, null) : null,
      G = () =>
        ie.createElement(
          U_,
          {
            match: v,
            routeContext: { outlet: m, matches: i.concat(l.slice(0, S + 1)) },
          },
          N ? M : v.route.element !== void 0 ? v.route.element : m,
        );
    return r && (v.route.errorElement || S === 0)
      ? ie.createElement($_, {
          location: r.location,
          component: M,
          error: N,
          children: G(),
        })
      : G();
  }, null);
}
var jm;
(function (a) {
  (a.UseLoaderData = "useLoaderData"),
    (a.UseActionData = "useActionData"),
    (a.UseRouteError = "useRouteError"),
    (a.UseNavigation = "useNavigation"),
    (a.UseRouteLoaderData = "useRouteLoaderData"),
    (a.UseMatches = "useMatches"),
    (a.UseRevalidator = "useRevalidator");
})(jm || (jm = {}));
function G_(a) {
  let i = ie.useContext(ay);
  return i || wr(!1), i;
}
function H_() {
  var a;
  let i = ie.useContext(ly),
    r = G_(jm.UseRouteError),
    l = ie.useContext(Bf),
    f = l.matches[l.matches.length - 1];
  return (
    i ||
    (l || wr(!1),
    f.route.id || wr(!1),
    (a = r.errors) == null ? void 0 : a[f.route.id])
  );
}
function $h(a) {
  wr(!1);
}
function q_(a) {
  let {
    basename: i = "/",
    children: r = null,
    location: l,
    navigationType: f = Do.Pop,
    navigator: m,
    static: v = !1,
  } = a;
  jf() && wr(!1);
  let S = i.replace(/^\/*/, "/"),
    N = ie.useMemo(() => ({ basename: S, navigator: m, static: v }), [S, m, v]);
  typeof l == "string" && (l = $u(l));
  let {
      pathname: M = "/",
      search: G = "",
      hash: I = "",
      state: R = null,
      key: H = "default",
    } = l,
    $ = ie.useMemo(() => {
      let B = iy(M, S);
      return B == null
        ? null
        : { pathname: B, search: G, hash: I, state: R, key: H };
    }, [S, M, G, I, R, H]);
  return $ == null
    ? null
    : ie.createElement(
        sg.Provider,
        { value: N },
        ie.createElement(tp.Provider, {
          children: r,
          value: { location: $, navigationType: f },
        }),
      );
}
function Em(a) {
  let { children: i, location: r } = a,
    l = ie.useContext(M_),
    f = l && !i ? l.router.routes : zm(i);
  return j_(f, r);
}
var g0;
(function (a) {
  (a[(a.pending = 0)] = "pending"),
    (a[(a.success = 1)] = "success"),
    (a[(a.error = 2)] = "error");
})(g0 || (g0 = {}));
new Promise(() => {});
function zm(a, i) {
  i === void 0 && (i = []);
  let r = [];
  return (
    ie.Children.forEach(a, (l, f) => {
      if (!ie.isValidElement(l)) return;
      if (l.type === ie.Fragment) {
        r.push.apply(r, zm(l.props.children, i));
        return;
      }
      l.type !== $h && wr(!1);
      let m = [...i, f],
        v = {
          id: l.props.id || m.join("-"),
          caseSensitive: l.props.caseSensitive,
          element: l.props.element,
          index: l.props.index,
          path: l.props.path,
          loader: l.props.loader,
          action: l.props.action,
          errorElement: l.props.errorElement,
          hasErrorBoundary: l.props.errorElement != null,
          shouldRevalidate: l.props.shouldRevalidate,
          handle: l.props.handle,
        };
      l.props.children && (v.children = zm(l.props.children, m)), r.push(v);
    }),
    r
  );
}
/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $m() {
  return (
    ($m = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (a[l] = r[l]);
          }
          return a;
        }),
    $m.apply(this, arguments)
  );
}
function K_(a, i) {
  if (a == null) return {};
  var r = {},
    l = Object.keys(a),
    f,
    m;
  for (m = 0; m < l.length; m++)
    (f = l[m]), !(i.indexOf(f) >= 0) && (r[f] = a[f]);
  return r;
}
function V_(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function Q_(a, i) {
  return a.button === 0 && (!i || i === "_self") && !V_(a);
}
const J_ = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function X_(a) {
  let { basename: i, children: r, window: l } = a,
    f = ie.useRef();
  f.current == null && (f.current = f_({ window: l, v5Compat: !0 }));
  let m = f.current,
    [v, S] = ie.useState({ action: m.action, location: m.location });
  return (
    ie.useLayoutEffect(() => m.listen(S), [m]),
    ie.createElement(q_, {
      basename: i,
      children: r,
      location: v.location,
      navigationType: v.action,
      navigator: m,
    })
  );
}
const Um = ie.forwardRef(function (i, r) {
  let {
      onClick: l,
      relative: f,
      reloadDocument: m,
      replace: v,
      state: S,
      target: N,
      to: M,
      preventScrollReset: G,
    } = i,
    I = K_(i, J_),
    R = F_(M, { relative: f }),
    H = Y_(M, {
      replace: v,
      state: S,
      target: N,
      preventScrollReset: G,
      relative: f,
    });
  function $(B) {
    l && l(B), B.defaultPrevented || H(B);
  }
  return ie.createElement(
    "a",
    $m({}, I, { href: R, onClick: m ? l : $, ref: r, target: N }),
  );
});
function Y_(a, i) {
  let {
      target: r,
      replace: l,
      state: f,
      preventScrollReset: m,
      relative: v,
    } = i === void 0 ? {} : i,
    S = B_(),
    N = np(),
    M = cy(a, { relative: v });
  return ie.useCallback(
    (G) => {
      if (Q_(G, r)) {
        G.preventDefault();
        let I = l !== void 0 ? l : Fm(N) === Fm(M);
        S(a, { replace: I, state: f, preventScrollReset: m, relative: v });
      }
    },
    [N, S, M, l, f, r, a, m, v],
  );
}
const Z_ = () =>
    b.jsxs("div", {
      className: "w-[350px/30]",
      children: [
        b.jsx("div", {
          "data-state": "on",
          children: b.jsxs("svg", {
            className: "md:hidden",
            "aria-hidden": "true",
            fill: "#000000",
            width: "25px",
            height: "25px",
            viewBox: "0 0 1920 1920",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              b.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
              b.jsx("g", {
                id: "SVGRepo_tracerCarrier",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              b.jsx("g", {
                id: "SVGRepo_iconCarrier",
                children: b.jsx("path", {
                  d: "M1920 1411.412v225.882H0v-225.882h1920Zm0-564.706v225.882H0V846.706h1920ZM1920 282v225.882H0V282h1920Z",
                  fillRule: "evenodd",
                }),
              }),
            ],
          }),
        }),
        b.jsx("div", {
          "data-state": "off",
          className: "x-toggle",
          children: b.jsxs("svg", {
            "aria-hidden": "true",
            width: "24px",
            height: "24px",
            viewBox: "0 -0.5 21 21",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            fill: "#000000",
            children: [
              b.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
              b.jsx("g", {
                id: "SVGRepo_tracerCarrier",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              b.jsxs("g", {
                id: "SVGRepo_iconCarrier",
                children: [
                  b.jsx("title", { children: "close [#1511]" }),
                  b.jsx("desc", { children: "Created with Sketch." }),
                  b.jsx("defs", {}),
                  b.jsx("g", {
                    id: "Page-1",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: b.jsx("g", {
                      id: "Dribbble-Light-Preview",
                      transform: "translate(-419.000000, -240.000000)",
                      fill: "#000000",
                      children: b.jsx("g", {
                        id: "icons",
                        transform: "translate(56.000000, 160.000000)",
                        children: b.jsx("polygon", {
                          id: "close-[#1511]",
                          points:
                            "375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        b.jsx("nav", {
          "aria-label": "main menu hover:color",
          "aria-expanded": "false",
          children: b.jsxs("ol", {
            className: "main-menu flex cursor-pointer space-x-5",
            children: [
              b.jsxs("li", {
                children: [
                  b.jsx("span", { className: "dot", children: "•" }),
                  "Home",
                ],
              }),
              b.jsxs("li", {
                className: "learn relative",
                children: [
                  b.jsx("span", { className: "dot", children: "•" }),
                  "Games",
                  b.jsx("span", { children: "⯆" }),
                  b.jsxs("ul", {
                    className: "drop-menu absolute top-4 hidden hover:block",
                    children: [
                      b.jsx("li", {
                        className: "text-black",
                        children: b.jsx(Um, {
                          to: "/game-1",
                          children: "Game 1",
                        }),
                      }),
                      b.jsx("li", {
                        className: "text-black",
                        children: b.jsx(Um, {
                          to: "/game-2",
                          children: "Game 2",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              b.jsxs("li", {
                children: [
                  b.jsx("span", { className: "dot", children: "•" }),
                  "Help",
                ],
              }),
              b.jsxs("li", {
                children: [
                  b.jsx("span", { className: "dot", children: "•" }),
                  "Blog",
                ],
              }),
              b.jsxs("li", {
                children: [
                  b.jsx("span", { className: "dot", children: "•" }),
                  "About",
                ],
              }),
            ],
          }),
        }),
        b.jsx("a", {
          href: "#main-menu-toggle",
          tabIndex: -1,
          "aria-hidden": "true",
          hidden: !0,
        }),
      ],
    }),
  eS = [
    "krówka",
    "konik",
    "muszka",
    "prówka",
    "robaczek",
    "krokusek",
    "krokodylek",
  ],
  tS = () => {
    const [a, i] = ie.useState(""),
      [r, l] = ie.useState([]),
      [f, m] = ie.useState(!1);
    ie.useEffect(
      function () {
        const K = eS.filter((J) => J.toLowerCase().includes(a.toLowerCase()));
        l(K);
      },
      [a],
    ),
      ie.useEffect(() => {
        const Y = document.querySelector(".hint");
        a.length != 0
          ? Y &&
            (Y.classList.remove("hidden"),
            Y.classList.add("visible"),
            console.log(a))
          : Y && (Y.classList.remove("visible"), Y.classList.add("hidden"));
      }, [r]);
    const [v, S] = ie.useState("off"),
      [N, M] = ie.useState("on");
    function G() {
      S((Y) => (Y === "off" ? "on" : "off")),
        M((Y) => (Y === "on" ? "off" : "on")),
        m(!0);
    }
    const I = ie.useRef(null),
      R = ie.useRef(null);
    ie.useEffect(() => {
      function Y(K) {
        v == "on" &&
          I.current &&
          !I.current.contains(K.target) &&
          R.current &&
          !R.current.contains(K.target) &&
          (G(), m(!1));
      }
      return (
        document.addEventListener("click", Y),
        () => {
          document.removeEventListener("click", Y);
        }
      );
    }, [v]);
    let H = 1024;
    const $ = ie.useRef(25);
    let B = 300;
    const z = ie.useRef(null);
    return (
      ie.useEffect(() => {
        function Y() {
          (H = window.innerWidth), J(), (B = H * 0.13);
        }
        Y(), window.addEventListener("resize", Y);
        const K = requestAnimationFrame(J);
        function J() {
          Math.abs(B - $.current) < 5 ||
            ($.current < B ? $.current++ : $.current > B && $.current--,
            z.current && (z.current.style.width = `${$.current}px`),
            requestAnimationFrame(J));
        }
        return () => {
          window.removeEventListener("resize", Y), cancelAnimationFrame(K);
        };
      }, [f]),
      b.jsxs("div", {
        className: "absolute right-2",
        children: [
          b.jsx("form", {
            ref: I,
            onSubmit: G,
            "data-state": v,
            className: "search-bar",
            children: b.jsxs("div", {
              className: "relative",
              children: [
                b.jsx("input", {
                  onChange: (Y) => {
                    i(Y.target.value);
                  },
                  ref: z,
                  type: "search",
                  "data-state": "",
                  placeholder: "search",
                  className: "absolute right-[75px] -top-0.5 h-3 rounded-full",
                }),
                b.jsx("ul", {
                  className: "hint absolute right-[105px] top-6 hidden",
                  children: r.map((Y, K) => b.jsx("li", { children: Y }, K)),
                }),
                b.jsx("button", {
                  "data-state": "on",
                  children: b.jsxs("svg", {
                    fill: "#000000",
                    viewBox: "0 0 32 32",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      b.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
                      b.jsx("g", {
                        id: "SVGRepo_tracerCarrier",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      b.jsx("g", {
                        id: "SVGRepo_iconCarrier",
                        children: b.jsx("path", {
                          d: "M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM16.637 9.957c-0.39 0.39-0.39 1.024 0 1.414l3.617 3.617h-11.264c-0.553 0-1 0.448-1 1s0.447 1 1 1h11.327l-3.68 3.68c-0.39 0.39-0.39 1.023 0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.391-0.39-1.023-0.39-1.415 0z",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          b.jsx("button", {
            ref: R,
            onClick: () => {
              ($.current = 25), G(), console.log($.current);
            },
            "data-state": N,
            className: "lupa absolute right-20 top-1 hover:cursor-pointer",
            children: b.jsxs("svg", {
              fill: "#000000",
              viewBox: "0 0 32 32",
              version: "1.1",
              width: "20px",
              height: "20px",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                b.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
                b.jsx("g", {
                  id: "SVGRepo_tracerCarrier",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                b.jsx("g", {
                  id: "SVGRepo_iconCarrier",
                  children: b.jsx("path", {
                    d: "M31.707 30.282l-9.717-9.776c1.811-2.169 2.902-4.96 2.902-8.007 0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c3.136 0 6.002-1.158 8.197-3.067l9.703 9.764c0.39 0.39 1.024 0.39 1.415 0s0.39-1.023 0-1.415zM12.393 23.016c-5.808 0-10.517-4.709-10.517-10.517s4.708-10.517 10.517-10.517c5.808 0 10.516 4.708 10.516 10.517s-4.709 10.517-10.517 10.517z",
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  nS = () =>
    b.jsxs("header", {
      className: "relative mx-10 mt-7 flex justify-between font-medium",
      children: [
        b.jsxs("div", {
          className: "flex w-[150px]",
          children: [
            b.jsxs("svg", {
              className: "w-6",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                b.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
                b.jsx("g", {
                  id: "SVGRepo_tracerCarrier",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                b.jsxs("g", {
                  id: "SVGRepo_iconCarrier",
                  children: [
                    b.jsx("path", {
                      d: "M15 1H1V7H3.38197L4.88196 4L7.11803 4L10 9.76393L11.382 7H15V1Z",
                      fill: "#000000",
                    }),
                    b.jsx("path", {
                      d: "M15 9H12.618L11.118 12L8.88197 12L6 6.23607L4.61803 9H1V15H15V9Z",
                      fill: "#000000",
                    }),
                  ],
                }),
              ],
            }),
            b.jsx("span", { children: "Damian Garasz" }),
          ],
        }),
        b.jsx(Z_, {}),
        b.jsx(tS, {}),
        b.jsx(Um, {
          to: "/form",
          className:
            "absolute right-1 rounded-full border border-black px-2 font-normal",
          children: "Sign in",
        }),
        b.jsx("div", { className: "w-[175px]" }),
      ],
    });
var zf = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(a) {
      return (
        this.listeners.add(a),
        this.onSubscribe(),
        () => {
          this.listeners.delete(a), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  rp = typeof window > "u" || "Deno" in globalThis;
function wi() {}
function rS(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function iS(a) {
  return typeof a == "number" && a >= 0 && a !== 1 / 0;
}
function sS(a, i) {
  return Math.max(a + (i || 0) - Date.now(), 0);
}
function y0(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function oS(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function v0(a, i) {
  const {
    type: r = "all",
    exact: l,
    fetchStatus: f,
    predicate: m,
    queryKey: v,
    stale: S,
  } = a;
  if (v) {
    if (l) {
      if (i.queryHash !== og(v, i.options)) return !1;
    } else if (!Tf(i.queryKey, v)) return !1;
  }
  if (r !== "all") {
    const N = i.isActive();
    if ((r === "active" && !N) || (r === "inactive" && N)) return !1;
  }
  return !(
    (typeof S == "boolean" && i.isStale() !== S) ||
    (f && f !== i.state.fetchStatus) ||
    (m && !m(i))
  );
}
function w0(a, i) {
  const { exact: r, status: l, predicate: f, mutationKey: m } = a;
  if (m) {
    if (!i.options.mutationKey) return !1;
    if (r) {
      if (Ua(i.options.mutationKey) !== Ua(m)) return !1;
    } else if (!Tf(i.options.mutationKey, m)) return !1;
  }
  return !((l && i.state.status !== l) || (f && !f(i)));
}
function og(a, i) {
  return ((i == null ? void 0 : i.queryKeyHashFn) || Ua)(a);
}
function Ua(a) {
  return JSON.stringify(a, (i, r) =>
    Wm(r)
      ? Object.keys(r)
          .sort()
          .reduce((l, f) => ((l[f] = r[f]), l), {})
      : r,
  );
}
function Tf(a, i) {
  return a === i
    ? !0
    : typeof a != typeof i
      ? !1
      : a && i && typeof a == "object" && typeof i == "object"
        ? !Object.keys(i).some((r) => !Tf(a[r], i[r]))
        : !1;
}
function fy(a, i) {
  if (a === i) return a;
  const r = _0(a) && _0(i);
  if (r || (Wm(a) && Wm(i))) {
    const l = r ? a : Object.keys(a),
      f = l.length,
      m = r ? i : Object.keys(i),
      v = m.length,
      S = r ? [] : {};
    let N = 0;
    for (let M = 0; M < v; M++) {
      const G = r ? M : m[M];
      ((!r && l.includes(G)) || r) && a[G] === void 0 && i[G] === void 0
        ? ((S[G] = void 0), N++)
        : ((S[G] = fy(a[G], i[G])), S[G] === a[G] && a[G] !== void 0 && N++);
    }
    return f === v && N === f ? a : S;
  }
  return i;
}
function aS(a, i) {
  if (!i || Object.keys(a).length !== Object.keys(i).length) return !1;
  for (const r in a) if (a[r] !== i[r]) return !1;
  return !0;
}
function _0(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function Wm(a) {
  if (!S0(a)) return !1;
  const i = a.constructor;
  if (i === void 0) return !0;
  const r = i.prototype;
  return !(
    !S0(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(a) !== Object.prototype
  );
}
function S0(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function lS(a) {
  return new Promise((i) => {
    setTimeout(i, a);
  });
}
function uS(a, i, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(a, i)
    : r.structuralSharing !== !1
      ? fy(a, i)
      : i;
}
function cS(a, i, r = 0) {
  const l = [...a, i];
  return r && l.length > r ? l.slice(1) : l;
}
function fS(a, i, r = 0) {
  const l = [i, ...a];
  return r && l.length > r ? l.slice(0, -1) : l;
}
var ag = Symbol();
function dy(a, i) {
  return !a.queryFn && i != null && i.initialPromise
    ? () => i.initialPromise
    : !a.queryFn || a.queryFn === ag
      ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`))
      : a.queryFn;
}
var Ba,
  Ro,
  Nu,
  V0,
  dS =
    ((V0 = class extends zf {
      constructor() {
        super();
        lt(this, Ba);
        lt(this, Ro);
        lt(this, Nu);
        Ve(this, Nu, (i) => {
          if (!rp && window.addEventListener) {
            const r = () => i();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        V(this, Ro) || this.setEventListener(V(this, Nu));
      }
      onUnsubscribe() {
        var i;
        this.hasListeners() ||
          ((i = V(this, Ro)) == null || i.call(this), Ve(this, Ro, void 0));
      }
      setEventListener(i) {
        var r;
        Ve(this, Nu, i),
          (r = V(this, Ro)) == null || r.call(this),
          Ve(
            this,
            Ro,
            i((l) => {
              typeof l == "boolean" ? this.setFocused(l) : this.onFocus();
            }),
          );
      }
      setFocused(i) {
        V(this, Ba) !== i && (Ve(this, Ba, i), this.onFocus());
      }
      onFocus() {
        const i = this.isFocused();
        this.listeners.forEach((r) => {
          r(i);
        });
      }
      isFocused() {
        var i;
        return typeof V(this, Ba) == "boolean"
          ? V(this, Ba)
          : ((i = globalThis.document) == null ? void 0 : i.visibilityState) !==
              "hidden";
      }
    }),
    (Ba = new WeakMap()),
    (Ro = new WeakMap()),
    (Nu = new WeakMap()),
    V0),
  hy = new dS(),
  bu,
  Ao,
  Tu,
  Q0,
  hS =
    ((Q0 = class extends zf {
      constructor() {
        super();
        lt(this, bu, !0);
        lt(this, Ao);
        lt(this, Tu);
        Ve(this, Tu, (i) => {
          if (!rp && window.addEventListener) {
            const r = () => i(!0),
              l = () => i(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", l, !1),
              () => {
                window.removeEventListener("online", r),
                  window.removeEventListener("offline", l);
              }
            );
          }
        });
      }
      onSubscribe() {
        V(this, Ao) || this.setEventListener(V(this, Tu));
      }
      onUnsubscribe() {
        var i;
        this.hasListeners() ||
          ((i = V(this, Ao)) == null || i.call(this), Ve(this, Ao, void 0));
      }
      setEventListener(i) {
        var r;
        Ve(this, Tu, i),
          (r = V(this, Ao)) == null || r.call(this),
          Ve(this, Ao, i(this.setOnline.bind(this)));
      }
      setOnline(i) {
        V(this, bu) !== i &&
          (Ve(this, bu, i),
          this.listeners.forEach((l) => {
            l(i);
          }));
      }
      isOnline() {
        return V(this, bu);
      }
    }),
    (bu = new WeakMap()),
    (Ao = new WeakMap()),
    (Tu = new WeakMap()),
    Q0),
  Jh = new hS();
function pS() {
  let a, i;
  const r = new Promise((f, m) => {
    (a = f), (i = m);
  });
  (r.status = "pending"), r.catch(() => {});
  function l(f) {
    Object.assign(r, f), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (f) => {
      l({ status: "fulfilled", value: f }), a(f);
    }),
    (r.reject = (f) => {
      l({ status: "rejected", reason: f }), i(f);
    }),
    r
  );
}
function mS(a) {
  return Math.min(1e3 * 2 ** a, 3e4);
}
function py(a) {
  return (a ?? "online") === "online" ? Jh.isOnline() : !0;
}
var my = class extends Error {
  constructor(a) {
    super("CancelledError"),
      (this.revert = a == null ? void 0 : a.revert),
      (this.silent = a == null ? void 0 : a.silent);
  }
};
function Cm(a) {
  return a instanceof my;
}
function gy(a) {
  let i = !1,
    r = 0,
    l = !1,
    f;
  const m = pS(),
    v = (B) => {
      var z;
      l || (R(new my(B)), (z = a.abort) == null || z.call(a));
    },
    S = () => {
      i = !0;
    },
    N = () => {
      i = !1;
    },
    M = () =>
      hy.isFocused() &&
      (a.networkMode === "always" || Jh.isOnline()) &&
      a.canRun(),
    G = () => py(a.networkMode) && a.canRun(),
    I = (B) => {
      var z;
      l ||
        ((l = !0),
        (z = a.onSuccess) == null || z.call(a, B),
        f == null || f(),
        m.resolve(B));
    },
    R = (B) => {
      var z;
      l ||
        ((l = !0),
        (z = a.onError) == null || z.call(a, B),
        f == null || f(),
        m.reject(B));
    },
    H = () =>
      new Promise((B) => {
        var z;
        (f = (Y) => {
          (l || M()) && B(Y);
        }),
          (z = a.onPause) == null || z.call(a);
      }).then(() => {
        var B;
        (f = void 0), l || (B = a.onContinue) == null || B.call(a);
      }),
    $ = () => {
      if (l) return;
      let B;
      const z = r === 0 ? a.initialPromise : void 0;
      try {
        B = z ?? a.fn();
      } catch (Y) {
        B = Promise.reject(Y);
      }
      Promise.resolve(B)
        .then(I)
        .catch((Y) => {
          var fe;
          if (l) return;
          const K = a.retry ?? (rp ? 0 : 3),
            J = a.retryDelay ?? mS,
            Q = typeof J == "function" ? J(r, Y) : J,
            ee =
              K === !0 ||
              (typeof K == "number" && r < K) ||
              (typeof K == "function" && K(r, Y));
          if (i || !ee) {
            R(Y);
            return;
          }
          r++,
            (fe = a.onFail) == null || fe.call(a, r, Y),
            lS(Q)
              .then(() => (M() ? void 0 : H()))
              .then(() => {
                i ? R(Y) : $();
              });
        });
    };
  return {
    promise: m,
    cancel: v,
    continue: () => (f == null || f(), m),
    cancelRetry: S,
    continueRetry: N,
    canStart: G,
    start: () => (G() ? $() : H().then($), m),
  };
}
function gS() {
  let a = [],
    i = 0,
    r = (S) => {
      S();
    },
    l = (S) => {
      S();
    },
    f = (S) => setTimeout(S, 0);
  const m = (S) => {
      i
        ? a.push(S)
        : f(() => {
            r(S);
          });
    },
    v = () => {
      const S = a;
      (a = []),
        S.length &&
          f(() => {
            l(() => {
              S.forEach((N) => {
                r(N);
              });
            });
          });
    };
  return {
    batch: (S) => {
      let N;
      i++;
      try {
        N = S();
      } finally {
        i--, i || v();
      }
      return N;
    },
    batchCalls:
      (S) =>
      (...N) => {
        m(() => {
          S(...N);
        });
      },
    schedule: m,
    setNotifyFunction: (S) => {
      r = S;
    },
    setBatchNotifyFunction: (S) => {
      l = S;
    },
    setScheduler: (S) => {
      f = S;
    },
  };
}
var Ln = gS(),
  ja,
  J0,
  yy =
    ((J0 = class {
      constructor() {
        lt(this, ja);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          iS(this.gcTime) &&
            Ve(
              this,
              ja,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            );
      }
      updateGcTime(a) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          a ?? (rp ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        V(this, ja) && (clearTimeout(V(this, ja)), Ve(this, ja, void 0));
      }
    }),
    (ja = new WeakMap()),
    J0),
  Lu,
  Du,
  ni,
  Gn,
  Mf,
  za,
  Si,
  Ds,
  X0,
  yS =
    ((X0 = class extends yy {
      constructor(i) {
        super();
        lt(this, Si);
        lt(this, Lu);
        lt(this, Du);
        lt(this, ni);
        lt(this, Gn);
        lt(this, Mf);
        lt(this, za);
        Ve(this, za, !1),
          Ve(this, Mf, i.defaultOptions),
          this.setOptions(i.options),
          (this.observers = []),
          Ve(this, ni, i.cache),
          (this.queryKey = i.queryKey),
          (this.queryHash = i.queryHash),
          Ve(this, Lu, wS(this.options)),
          (this.state = i.state ?? V(this, Lu)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var i;
        return (i = V(this, Gn)) == null ? void 0 : i.promise;
      }
      setOptions(i) {
        (this.options = { ...V(this, Mf), ...i }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          V(this, ni).remove(this);
      }
      setData(i, r) {
        const l = uS(this.state.data, i, this.options);
        return (
          tn(this, Si, Ds).call(this, {
            data: l,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          l
        );
      }
      setState(i, r) {
        tn(this, Si, Ds).call(this, {
          type: "setState",
          state: i,
          setStateOptions: r,
        });
      }
      cancel(i) {
        var l, f;
        const r = (l = V(this, Gn)) == null ? void 0 : l.promise;
        return (
          (f = V(this, Gn)) == null || f.cancel(i),
          r ? r.then(wi).catch(wi) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(V(this, Lu));
      }
      isActive() {
        return this.observers.some((i) => oS(i.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === ag ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((i) => i.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(i = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !sS(this.state.dataUpdatedAt, i)
        );
      }
      onFocus() {
        var r;
        const i = this.observers.find((l) => l.shouldFetchOnWindowFocus());
        i == null || i.refetch({ cancelRefetch: !1 }),
          (r = V(this, Gn)) == null || r.continue();
      }
      onOnline() {
        var r;
        const i = this.observers.find((l) => l.shouldFetchOnReconnect());
        i == null || i.refetch({ cancelRefetch: !1 }),
          (r = V(this, Gn)) == null || r.continue();
      }
      addObserver(i) {
        this.observers.includes(i) ||
          (this.observers.push(i),
          this.clearGcTimeout(),
          V(this, ni).notify({
            type: "observerAdded",
            query: this,
            observer: i,
          }));
      }
      removeObserver(i) {
        this.observers.includes(i) &&
          ((this.observers = this.observers.filter((r) => r !== i)),
          this.observers.length ||
            (V(this, Gn) &&
              (V(this, za)
                ? V(this, Gn).cancel({ revert: !0 })
                : V(this, Gn).cancelRetry()),
            this.scheduleGc()),
          V(this, ni).notify({
            type: "observerRemoved",
            query: this,
            observer: i,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          tn(this, Si, Ds).call(this, { type: "invalidate" });
      }
      fetch(i, r) {
        var N, M, G;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (V(this, Gn))
            return V(this, Gn).continueRetry(), V(this, Gn).promise;
        }
        if ((i && this.setOptions(i), !this.options.queryFn)) {
          const I = this.observers.find((R) => R.options.queryFn);
          I && this.setOptions(I.options);
        }
        const l = new AbortController(),
          f = (I) => {
            Object.defineProperty(I, "signal", {
              enumerable: !0,
              get: () => (Ve(this, za, !0), l.signal),
            });
          },
          m = () => {
            const I = dy(this.options, r),
              R = { queryKey: this.queryKey, meta: this.meta };
            return (
              f(R),
              Ve(this, za, !1),
              this.options.persister ? this.options.persister(I, R, this) : I(R)
            );
          },
          v = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: m,
          };
        f(v),
          (N = this.options.behavior) == null || N.onFetch(v, this),
          Ve(this, Du, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((M = v.fetchOptions) == null ? void 0 : M.meta)) &&
            tn(this, Si, Ds).call(this, {
              type: "fetch",
              meta: (G = v.fetchOptions) == null ? void 0 : G.meta,
            });
        const S = (I) => {
          var R, H, $, B;
          (Cm(I) && I.silent) ||
            tn(this, Si, Ds).call(this, { type: "error", error: I }),
            Cm(I) ||
              ((H = (R = V(this, ni).config).onError) == null ||
                H.call(R, I, this),
              (B = ($ = V(this, ni).config).onSettled) == null ||
                B.call($, this.state.data, I, this)),
            this.scheduleGc();
        };
        return (
          Ve(
            this,
            Gn,
            gy({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: v.fetchFn,
              abort: l.abort.bind(l),
              onSuccess: (I) => {
                var R, H, $, B;
                if (I === void 0) {
                  S(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(I);
                } catch (z) {
                  S(z);
                  return;
                }
                (H = (R = V(this, ni).config).onSuccess) == null ||
                  H.call(R, I, this),
                  (B = ($ = V(this, ni).config).onSettled) == null ||
                    B.call($, I, this.state.error, this),
                  this.scheduleGc();
              },
              onError: S,
              onFail: (I, R) => {
                tn(this, Si, Ds).call(this, {
                  type: "failed",
                  failureCount: I,
                  error: R,
                });
              },
              onPause: () => {
                tn(this, Si, Ds).call(this, { type: "pause" });
              },
              onContinue: () => {
                tn(this, Si, Ds).call(this, { type: "continue" });
              },
              retry: v.options.retry,
              retryDelay: v.options.retryDelay,
              networkMode: v.options.networkMode,
              canRun: () => !0,
            }),
          ),
          V(this, Gn).start()
        );
      }
    }),
    (Lu = new WeakMap()),
    (Du = new WeakMap()),
    (ni = new WeakMap()),
    (Gn = new WeakMap()),
    (Mf = new WeakMap()),
    (za = new WeakMap()),
    (Si = new WeakSet()),
    (Ds = function (i) {
      const r = (l) => {
        switch (i.type) {
          case "failed":
            return {
              ...l,
              fetchFailureCount: i.failureCount,
              fetchFailureReason: i.error,
            };
          case "pause":
            return { ...l, fetchStatus: "paused" };
          case "continue":
            return { ...l, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...l,
              ...vS(l.data, this.options),
              fetchMeta: i.meta ?? null,
            };
          case "success":
            return {
              ...l,
              data: i.data,
              dataUpdateCount: l.dataUpdateCount + 1,
              dataUpdatedAt: i.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!i.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const f = i.error;
            return Cm(f) && f.revert && V(this, Du)
              ? { ...V(this, Du), fetchStatus: "idle" }
              : {
                  ...l,
                  error: f,
                  errorUpdateCount: l.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: l.fetchFailureCount + 1,
                  fetchFailureReason: f,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...l, isInvalidated: !0 };
          case "setState":
            return { ...l, ...i.state };
        }
      };
      (this.state = r(this.state)),
        Ln.batch(() => {
          this.observers.forEach((l) => {
            l.onQueryUpdate();
          }),
            V(this, ni).notify({ query: this, type: "updated", action: i });
        });
    }),
    X0);
function vS(a, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: py(i.networkMode) ? "fetching" : "paused",
    ...(a === void 0 && { error: null, status: "pending" }),
  };
}
function wS(a) {
  const i =
      typeof a.initialData == "function" ? a.initialData() : a.initialData,
    r = i !== void 0,
    l = r
      ? typeof a.initialDataUpdatedAt == "function"
        ? a.initialDataUpdatedAt()
        : a.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (l ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var ns,
  Y0,
  _S =
    ((Y0 = class extends zf {
      constructor(i = {}) {
        super();
        lt(this, ns);
        (this.config = i), Ve(this, ns, new Map());
      }
      build(i, r, l) {
        const f = r.queryKey,
          m = r.queryHash ?? og(f, r);
        let v = this.get(m);
        return (
          v ||
            ((v = new yS({
              cache: this,
              queryKey: f,
              queryHash: m,
              options: i.defaultQueryOptions(r),
              state: l,
              defaultOptions: i.getQueryDefaults(f),
            })),
            this.add(v)),
          v
        );
      }
      add(i) {
        V(this, ns).has(i.queryHash) ||
          (V(this, ns).set(i.queryHash, i),
          this.notify({ type: "added", query: i }));
      }
      remove(i) {
        const r = V(this, ns).get(i.queryHash);
        r &&
          (i.destroy(),
          r === i && V(this, ns).delete(i.queryHash),
          this.notify({ type: "removed", query: i }));
      }
      clear() {
        Ln.batch(() => {
          this.getAll().forEach((i) => {
            this.remove(i);
          });
        });
      }
      get(i) {
        return V(this, ns).get(i);
      }
      getAll() {
        return [...V(this, ns).values()];
      }
      find(i) {
        const r = { exact: !0, ...i };
        return this.getAll().find((l) => v0(r, l));
      }
      findAll(i = {}) {
        const r = this.getAll();
        return Object.keys(i).length > 0 ? r.filter((l) => v0(i, l)) : r;
      }
      notify(i) {
        Ln.batch(() => {
          this.listeners.forEach((r) => {
            r(i);
          });
        });
      }
      onFocus() {
        Ln.batch(() => {
          this.getAll().forEach((i) => {
            i.onFocus();
          });
        });
      }
      onOnline() {
        Ln.batch(() => {
          this.getAll().forEach((i) => {
            i.onOnline();
          });
        });
      }
    }),
    (ns = new WeakMap()),
    Y0),
  rs,
  nr,
  $a,
  is,
  Po,
  Z0,
  SS =
    ((Z0 = class extends yy {
      constructor(i) {
        super();
        lt(this, is);
        lt(this, rs);
        lt(this, nr);
        lt(this, $a);
        (this.mutationId = i.mutationId),
          Ve(this, nr, i.mutationCache),
          Ve(this, rs, []),
          (this.state = i.state || vy()),
          this.setOptions(i.options),
          this.scheduleGc();
      }
      setOptions(i) {
        (this.options = i), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(i) {
        V(this, rs).includes(i) ||
          (V(this, rs).push(i),
          this.clearGcTimeout(),
          V(this, nr).notify({
            type: "observerAdded",
            mutation: this,
            observer: i,
          }));
      }
      removeObserver(i) {
        Ve(
          this,
          rs,
          V(this, rs).filter((r) => r !== i),
        ),
          this.scheduleGc(),
          V(this, nr).notify({
            type: "observerRemoved",
            mutation: this,
            observer: i,
          });
      }
      optionalRemove() {
        V(this, rs).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : V(this, nr).remove(this));
      }
      continue() {
        var i;
        return (
          ((i = V(this, $a)) == null ? void 0 : i.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(i) {
        var f, m, v, S, N, M, G, I, R, H, $, B, z, Y, K, J, Q, ee, fe, de;
        Ve(
          this,
          $a,
          gy({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(i)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, je) => {
              tn(this, is, Po).call(this, {
                type: "failed",
                failureCount: A,
                error: je,
              });
            },
            onPause: () => {
              tn(this, is, Po).call(this, { type: "pause" });
            },
            onContinue: () => {
              tn(this, is, Po).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => V(this, nr).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          l = !V(this, $a).canStart();
        try {
          if (!r) {
            tn(this, is, Po).call(this, {
              type: "pending",
              variables: i,
              isPaused: l,
            }),
              await ((m = (f = V(this, nr).config).onMutate) == null
                ? void 0
                : m.call(f, i, this));
            const je = await ((S = (v = this.options).onMutate) == null
              ? void 0
              : S.call(v, i));
            je !== this.state.context &&
              tn(this, is, Po).call(this, {
                type: "pending",
                context: je,
                variables: i,
                isPaused: l,
              });
          }
          const A = await V(this, $a).start();
          return (
            await ((M = (N = V(this, nr).config).onSuccess) == null
              ? void 0
              : M.call(N, A, i, this.state.context, this)),
            await ((I = (G = this.options).onSuccess) == null
              ? void 0
              : I.call(G, A, i, this.state.context)),
            await ((H = (R = V(this, nr).config).onSettled) == null
              ? void 0
              : H.call(
                  R,
                  A,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((B = ($ = this.options).onSettled) == null
              ? void 0
              : B.call($, A, null, i, this.state.context)),
            tn(this, is, Po).call(this, { type: "success", data: A }),
            A
          );
        } catch (A) {
          try {
            throw (
              (await ((Y = (z = V(this, nr).config).onError) == null
                ? void 0
                : Y.call(z, A, i, this.state.context, this)),
              await ((J = (K = this.options).onError) == null
                ? void 0
                : J.call(K, A, i, this.state.context)),
              await ((ee = (Q = V(this, nr).config).onSettled) == null
                ? void 0
                : ee.call(
                    Q,
                    void 0,
                    A,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((de = (fe = this.options).onSettled) == null
                ? void 0
                : de.call(fe, void 0, A, i, this.state.context)),
              A)
            );
          } finally {
            tn(this, is, Po).call(this, { type: "error", error: A });
          }
        } finally {
          V(this, nr).runNext(this);
        }
      }
    }),
    (rs = new WeakMap()),
    (nr = new WeakMap()),
    ($a = new WeakMap()),
    (is = new WeakSet()),
    (Po = function (i) {
      const r = (l) => {
        switch (i.type) {
          case "failed":
            return {
              ...l,
              failureCount: i.failureCount,
              failureReason: i.error,
            };
          case "pause":
            return { ...l, isPaused: !0 };
          case "continue":
            return { ...l, isPaused: !1 };
          case "pending":
            return {
              ...l,
              context: i.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: i.isPaused,
              status: "pending",
              variables: i.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...l,
              data: i.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...l,
              data: void 0,
              error: i.error,
              failureCount: l.failureCount + 1,
              failureReason: i.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = r(this.state)),
        Ln.batch(() => {
          V(this, rs).forEach((l) => {
            l.onMutationUpdate(i);
          }),
            V(this, nr).notify({ mutation: this, type: "updated", action: i });
        });
    }),
    Z0);
function vy() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Br,
  Ff,
  ey,
  xS =
    ((ey = class extends zf {
      constructor(i = {}) {
        super();
        lt(this, Br);
        lt(this, Ff);
        (this.config = i), Ve(this, Br, new Map()), Ve(this, Ff, Date.now());
      }
      build(i, r, l) {
        const f = new SS({
          mutationCache: this,
          mutationId: ++Rh(this, Ff)._,
          options: i.defaultMutationOptions(r),
          state: l,
        });
        return this.add(f), f;
      }
      add(i) {
        const r = Nh(i),
          l = V(this, Br).get(r) ?? [];
        l.push(i),
          V(this, Br).set(r, l),
          this.notify({ type: "added", mutation: i });
      }
      remove(i) {
        var l;
        const r = Nh(i);
        if (V(this, Br).has(r)) {
          const f =
            (l = V(this, Br).get(r)) == null
              ? void 0
              : l.filter((m) => m !== i);
          f && (f.length === 0 ? V(this, Br).delete(r) : V(this, Br).set(r, f));
        }
        this.notify({ type: "removed", mutation: i });
      }
      canRun(i) {
        var l;
        const r =
          (l = V(this, Br).get(Nh(i))) == null
            ? void 0
            : l.find((f) => f.state.status === "pending");
        return !r || r === i;
      }
      runNext(i) {
        var l;
        const r =
          (l = V(this, Br).get(Nh(i))) == null
            ? void 0
            : l.find((f) => f !== i && f.state.isPaused);
        return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
      }
      clear() {
        Ln.batch(() => {
          this.getAll().forEach((i) => {
            this.remove(i);
          });
        });
      }
      getAll() {
        return [...V(this, Br).values()].flat();
      }
      find(i) {
        const r = { exact: !0, ...i };
        return this.getAll().find((l) => w0(r, l));
      }
      findAll(i = {}) {
        return this.getAll().filter((r) => w0(i, r));
      }
      notify(i) {
        Ln.batch(() => {
          this.listeners.forEach((r) => {
            r(i);
          });
        });
      }
      resumePausedMutations() {
        const i = this.getAll().filter((r) => r.state.isPaused);
        return Ln.batch(() =>
          Promise.all(i.map((r) => r.continue().catch(wi))),
        );
      }
    }),
    (Br = new WeakMap()),
    (Ff = new WeakMap()),
    ey);
function Nh(a) {
  var i;
  return (
    ((i = a.options.scope) == null ? void 0 : i.id) ?? String(a.mutationId)
  );
}
function x0(a) {
  return {
    onFetch: (i, r) => {
      var G, I, R, H, $;
      const l = i.options,
        f =
          (R =
            (I = (G = i.fetchOptions) == null ? void 0 : G.meta) == null
              ? void 0
              : I.fetchMore) == null
            ? void 0
            : R.direction,
        m = ((H = i.state.data) == null ? void 0 : H.pages) || [],
        v = (($ = i.state.data) == null ? void 0 : $.pageParams) || [];
      let S = { pages: [], pageParams: [] },
        N = 0;
      const M = async () => {
        let B = !1;
        const z = (J) => {
            Object.defineProperty(J, "signal", {
              enumerable: !0,
              get: () => (
                i.signal.aborted
                  ? (B = !0)
                  : i.signal.addEventListener("abort", () => {
                      B = !0;
                    }),
                i.signal
              ),
            });
          },
          Y = dy(i.options, i.fetchOptions),
          K = async (J, Q, ee) => {
            if (B) return Promise.reject();
            if (Q == null && J.pages.length) return Promise.resolve(J);
            const fe = {
              queryKey: i.queryKey,
              pageParam: Q,
              direction: ee ? "backward" : "forward",
              meta: i.options.meta,
            };
            z(fe);
            const de = await Y(fe),
              { maxPages: A } = i.options,
              je = ee ? fS : cS;
            return {
              pages: je(J.pages, de, A),
              pageParams: je(J.pageParams, Q, A),
            };
          };
        if (f && m.length) {
          const J = f === "backward",
            Q = J ? ES : E0,
            ee = { pages: m, pageParams: v },
            fe = Q(l, ee);
          S = await K(ee, fe, J);
        } else {
          const J = a ?? m.length;
          do {
            const Q = N === 0 ? (v[0] ?? l.initialPageParam) : E0(l, S);
            if (N > 0 && Q == null) break;
            (S = await K(S, Q)), N++;
          } while (N < J);
        }
        return S;
      };
      i.options.persister
        ? (i.fetchFn = () => {
            var B, z;
            return (z = (B = i.options).persister) == null
              ? void 0
              : z.call(
                  B,
                  M,
                  {
                    queryKey: i.queryKey,
                    meta: i.options.meta,
                    signal: i.signal,
                  },
                  r,
                );
          })
        : (i.fetchFn = M);
    },
  };
}
function E0(a, { pages: i, pageParams: r }) {
  const l = i.length - 1;
  return i.length > 0 ? a.getNextPageParam(i[l], i, r[l], r) : void 0;
}
function ES(a, { pages: i, pageParams: r }) {
  var l;
  return i.length > 0
    ? (l = a.getPreviousPageParam) == null
      ? void 0
      : l.call(a, i[0], i, r[0], r)
    : void 0;
}
var qt,
  Oo,
  No,
  Mu,
  Fu,
  bo,
  Bu,
  ju,
  ty,
  CS =
    ((ty = class {
      constructor(a = {}) {
        lt(this, qt);
        lt(this, Oo);
        lt(this, No);
        lt(this, Mu);
        lt(this, Fu);
        lt(this, bo);
        lt(this, Bu);
        lt(this, ju);
        Ve(this, qt, a.queryCache || new _S()),
          Ve(this, Oo, a.mutationCache || new xS()),
          Ve(this, No, a.defaultOptions || {}),
          Ve(this, Mu, new Map()),
          Ve(this, Fu, new Map()),
          Ve(this, bo, 0);
      }
      mount() {
        Rh(this, bo)._++,
          V(this, bo) === 1 &&
            (Ve(
              this,
              Bu,
              hy.subscribe(async (a) => {
                a &&
                  (await this.resumePausedMutations(), V(this, qt).onFocus());
              }),
            ),
            Ve(
              this,
              ju,
              Jh.subscribe(async (a) => {
                a &&
                  (await this.resumePausedMutations(), V(this, qt).onOnline());
              }),
            ));
      }
      unmount() {
        var a, i;
        Rh(this, bo)._--,
          V(this, bo) === 0 &&
            ((a = V(this, Bu)) == null || a.call(this),
            Ve(this, Bu, void 0),
            (i = V(this, ju)) == null || i.call(this),
            Ve(this, ju, void 0));
      }
      isFetching(a) {
        return V(this, qt).findAll({ ...a, fetchStatus: "fetching" }).length;
      }
      isMutating(a) {
        return V(this, Oo).findAll({ ...a, status: "pending" }).length;
      }
      getQueryData(a) {
        var r;
        const i = this.defaultQueryOptions({ queryKey: a });
        return (r = V(this, qt).get(i.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(a) {
        const i = this.getQueryData(a.queryKey);
        if (i === void 0) return this.fetchQuery(a);
        {
          const r = this.defaultQueryOptions(a),
            l = V(this, qt).build(this, r);
          return (
            a.revalidateIfStale &&
              l.isStaleByTime(y0(r.staleTime, l)) &&
              this.prefetchQuery(r),
            Promise.resolve(i)
          );
        }
      }
      getQueriesData(a) {
        return V(this, qt)
          .findAll(a)
          .map(({ queryKey: i, state: r }) => {
            const l = r.data;
            return [i, l];
          });
      }
      setQueryData(a, i, r) {
        const l = this.defaultQueryOptions({ queryKey: a }),
          f = V(this, qt).get(l.queryHash),
          m = f == null ? void 0 : f.state.data,
          v = rS(i, m);
        if (v !== void 0)
          return V(this, qt)
            .build(this, l)
            .setData(v, { ...r, manual: !0 });
      }
      setQueriesData(a, i, r) {
        return Ln.batch(() =>
          V(this, qt)
            .findAll(a)
            .map(({ queryKey: l }) => [l, this.setQueryData(l, i, r)]),
        );
      }
      getQueryState(a) {
        var r;
        const i = this.defaultQueryOptions({ queryKey: a });
        return (r = V(this, qt).get(i.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(a) {
        const i = V(this, qt);
        Ln.batch(() => {
          i.findAll(a).forEach((r) => {
            i.remove(r);
          });
        });
      }
      resetQueries(a, i) {
        const r = V(this, qt),
          l = { type: "active", ...a };
        return Ln.batch(
          () => (
            r.findAll(a).forEach((f) => {
              f.reset();
            }),
            this.refetchQueries(l, i)
          ),
        );
      }
      cancelQueries(a, i = {}) {
        const r = { revert: !0, ...i },
          l = Ln.batch(() =>
            V(this, qt)
              .findAll(a)
              .map((f) => f.cancel(r)),
          );
        return Promise.all(l).then(wi).catch(wi);
      }
      invalidateQueries(a, i = {}) {
        return Ln.batch(() => {
          if (
            (V(this, qt)
              .findAll(a)
              .forEach((l) => {
                l.invalidate();
              }),
            (a == null ? void 0 : a.refetchType) === "none")
          )
            return Promise.resolve();
          const r = {
            ...a,
            type:
              (a == null ? void 0 : a.refetchType) ??
              (a == null ? void 0 : a.type) ??
              "active",
          };
          return this.refetchQueries(r, i);
        });
      }
      refetchQueries(a, i = {}) {
        const r = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
          l = Ln.batch(() =>
            V(this, qt)
              .findAll(a)
              .filter((f) => !f.isDisabled())
              .map((f) => {
                let m = f.fetch(void 0, r);
                return (
                  r.throwOnError || (m = m.catch(wi)),
                  f.state.fetchStatus === "paused" ? Promise.resolve() : m
                );
              }),
          );
        return Promise.all(l).then(wi);
      }
      fetchQuery(a) {
        const i = this.defaultQueryOptions(a);
        i.retry === void 0 && (i.retry = !1);
        const r = V(this, qt).build(this, i);
        return r.isStaleByTime(y0(i.staleTime, r))
          ? r.fetch(i)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(a) {
        return this.fetchQuery(a).then(wi).catch(wi);
      }
      fetchInfiniteQuery(a) {
        return (a.behavior = x0(a.pages)), this.fetchQuery(a);
      }
      prefetchInfiniteQuery(a) {
        return this.fetchInfiniteQuery(a).then(wi).catch(wi);
      }
      ensureInfiniteQueryData(a) {
        return (a.behavior = x0(a.pages)), this.ensureQueryData(a);
      }
      resumePausedMutations() {
        return Jh.isOnline()
          ? V(this, Oo).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return V(this, qt);
      }
      getMutationCache() {
        return V(this, Oo);
      }
      getDefaultOptions() {
        return V(this, No);
      }
      setDefaultOptions(a) {
        Ve(this, No, a);
      }
      setQueryDefaults(a, i) {
        V(this, Mu).set(Ua(a), { queryKey: a, defaultOptions: i });
      }
      getQueryDefaults(a) {
        const i = [...V(this, Mu).values()],
          r = {};
        return (
          i.forEach((l) => {
            Tf(a, l.queryKey) && Object.assign(r, l.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(a, i) {
        V(this, Fu).set(Ua(a), { mutationKey: a, defaultOptions: i });
      }
      getMutationDefaults(a) {
        const i = [...V(this, Fu).values()];
        let r = {};
        return (
          i.forEach((l) => {
            Tf(a, l.mutationKey) && (r = { ...r, ...l.defaultOptions });
          }),
          r
        );
      }
      defaultQueryOptions(a) {
        if (a._defaulted) return a;
        const i = {
          ...V(this, No).queries,
          ...this.getQueryDefaults(a.queryKey),
          ...a,
          _defaulted: !0,
        };
        return (
          i.queryHash || (i.queryHash = og(i.queryKey, i)),
          i.refetchOnReconnect === void 0 &&
            (i.refetchOnReconnect = i.networkMode !== "always"),
          i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
          !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
          i.enabled !== !0 && i.queryFn === ag && (i.enabled = !1),
          i
        );
      }
      defaultMutationOptions(a) {
        return a != null && a._defaulted
          ? a
          : {
              ...V(this, No).mutations,
              ...((a == null ? void 0 : a.mutationKey) &&
                this.getMutationDefaults(a.mutationKey)),
              ...a,
              _defaulted: !0,
            };
      }
      clear() {
        V(this, qt).clear(), V(this, Oo).clear();
      }
    }),
    (qt = new WeakMap()),
    (Oo = new WeakMap()),
    (No = new WeakMap()),
    (Mu = new WeakMap()),
    (Fu = new WeakMap()),
    (bo = new WeakMap()),
    (Bu = new WeakMap()),
    (ju = new WeakMap()),
    ty),
  To,
  Lo,
  vr,
  Fs,
  Bs,
  Uh,
  Gm,
  ny,
  IS =
    ((ny = class extends zf {
      constructor(r, l) {
        super();
        lt(this, Bs);
        lt(this, To);
        lt(this, Lo);
        lt(this, vr);
        lt(this, Fs);
        Ve(this, To, r),
          this.setOptions(l),
          this.bindMethods(),
          tn(this, Bs, Uh).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(r) {
        var f;
        const l = this.options;
        (this.options = V(this, To).defaultMutationOptions(r)),
          aS(this.options, l) ||
            V(this, To)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: V(this, vr),
                observer: this,
              }),
          l != null &&
          l.mutationKey &&
          this.options.mutationKey &&
          Ua(l.mutationKey) !== Ua(this.options.mutationKey)
            ? this.reset()
            : ((f = V(this, vr)) == null ? void 0 : f.state.status) ===
                "pending" && V(this, vr).setOptions(this.options);
      }
      onUnsubscribe() {
        var r;
        this.hasListeners() ||
          (r = V(this, vr)) == null ||
          r.removeObserver(this);
      }
      onMutationUpdate(r) {
        tn(this, Bs, Uh).call(this), tn(this, Bs, Gm).call(this, r);
      }
      getCurrentResult() {
        return V(this, Lo);
      }
      reset() {
        var r;
        (r = V(this, vr)) == null || r.removeObserver(this),
          Ve(this, vr, void 0),
          tn(this, Bs, Uh).call(this),
          tn(this, Bs, Gm).call(this);
      }
      mutate(r, l) {
        var f;
        return (
          Ve(this, Fs, l),
          (f = V(this, vr)) == null || f.removeObserver(this),
          Ve(
            this,
            vr,
            V(this, To).getMutationCache().build(V(this, To), this.options),
          ),
          V(this, vr).addObserver(this),
          V(this, vr).execute(r)
        );
      }
    }),
    (To = new WeakMap()),
    (Lo = new WeakMap()),
    (vr = new WeakMap()),
    (Fs = new WeakMap()),
    (Bs = new WeakSet()),
    (Uh = function () {
      var l;
      const r = ((l = V(this, vr)) == null ? void 0 : l.state) ?? vy();
      Ve(this, Lo, {
        ...r,
        isPending: r.status === "pending",
        isSuccess: r.status === "success",
        isError: r.status === "error",
        isIdle: r.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (Gm = function (r) {
      Ln.batch(() => {
        var l, f, m, v, S, N, M, G;
        if (V(this, Fs) && this.hasListeners()) {
          const I = V(this, Lo).variables,
            R = V(this, Lo).context;
          (r == null ? void 0 : r.type) === "success"
            ? ((f = (l = V(this, Fs)).onSuccess) == null ||
                f.call(l, r.data, I, R),
              (v = (m = V(this, Fs)).onSettled) == null ||
                v.call(m, r.data, null, I, R))
            : (r == null ? void 0 : r.type) === "error" &&
              ((N = (S = V(this, Fs)).onError) == null ||
                N.call(S, r.error, I, R),
              (G = (M = V(this, Fs)).onSettled) == null ||
                G.call(M, void 0, r.error, I, R));
        }
        this.listeners.forEach((I) => {
          I(V(this, Lo));
        });
      });
    }),
    ny),
  wy = ie.createContext(void 0),
  kS = (a) => {
    const i = ie.useContext(wy);
    if (!i)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return i;
  },
  PS = ({ client: a, children: i }) => (
    ie.useEffect(
      () => (
        a.mount(),
        () => {
          a.unmount();
        }
      ),
      [a],
    ),
    b.jsx(wy.Provider, { value: a, children: i })
  );
function RS(a, i) {
  return typeof a == "function" ? a(...i) : !!a;
}
function AS() {}
function OS(a, i) {
  const r = kS(),
    [l] = ie.useState(() => new IS(r, a));
  ie.useEffect(() => {
    l.setOptions(a);
  }, [l, a]);
  const f = ie.useSyncExternalStore(
      ie.useCallback((v) => l.subscribe(Ln.batchCalls(v)), [l]),
      () => l.getCurrentResult(),
      () => l.getCurrentResult(),
    ),
    m = ie.useCallback(
      (v, S) => {
        l.mutate(v, S).catch(AS);
      },
      [l],
    );
  if (f.error && RS(l.options.throwOnError, [f.error])) throw f.error;
  return { ...f, mutate: m, mutateAsync: f.mutate };
}
async function NS(a, i, r) {
  const l = await fetch("https://formspree.io/f/myzyoyzv", {
    method: "POST",
    headers: {},
    body: JSON.stringify({ name: a, email: i, message: r }),
  });
  if (!l.ok) throw new Error("Response się wykrzaczył lol");
  return l.json();
}
function bS() {
  const a = OS({
      mutationFn: (r) => NS(r.get("name"), r.get("email"), r.get("message")),
      onSuccess: () => {
        console.log("ja jebie");
      },
      onError: (r) => {
        console.error("Error occurred:", r);
      },
    }),
    i = (r) => {
      r.preventDefault();
      const l = new FormData(r.currentTarget);
      a.mutate(l);
    };
  return b.jsxs("div", {
    className:
      "dancing-script-form m-auto mt-10 w-[350px] rounded-sm border border-black shadow-md",
    children: [
      b.jsx("h2", {
        className: "my-4 text-center text-3xl",
        children: "Contact",
      }),
      a.isSuccess
        ? b.jsx("h2", { className: "text-xl", children: "Submitted!" })
        : b.jsxs("form", {
            className: "m-auto flex w-[300px] flex-col gap-2",
            onSubmit: i,
            children: [
              b.jsx("label", {
                htmlFor: "email",
                className: "sr-only",
                children: "Your Email:",
              }),
              b.jsx("input", {
                className: "form-imput lato rounded-sm",
                type: "email",
                id: "email",
                name: "email",
                placeholder: "email",
              }),
              b.jsx("label", {
                htmlFor: "message",
                className: "sr-only",
                children: "Your message:",
              }),
              b.jsx("textarea", {
                className: "form-imput lato rounded-sm",
                id: "message",
                name: "message",
                placeholder: "type something...",
              }),
              b.jsx("button", {
                className: "my-3 border shadow",
                children: "Submit",
              }),
            ],
          }),
    ],
  });
}
const _y = {},
  TS = {
    background:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Background/Background.png",
    pierwszyPlan:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/gotowce/pierwszy-plan.png",
    trzeciPlan:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/gotowce/trzeci-plan.png",
    drugiPlan:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/gotowce/drugi-plan.png",
    heroIdle:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Idle/Idle-Sheet.png",
    heroWalkR:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Run/Run-R.png",
    heroWalkL:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Run/Run-L.png",
    heroJump:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Jumlp-All/Jump-All-Sheet.png",
    heroDead:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Dead/Dead-Sheet.png",
    beeIdle:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Mob/Small%20Bee/Fly/Fly-Sheet.png",
    heroAttack:
      "https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Attack-01/Attack-01-Sheet.png",
  };
Object.entries(TS).forEach(([a, i]) => {
  const r = new Image();
  (r.src = i), (_y[a] = r);
});
function LS() {
  return _y;
}
function DS() {
  return (
    ie.useEffect(() => {
      const a = document.querySelector("#game_canvas");
      if (!a) {
        console.error("Canvas element nie został znaleziony.");
        return;
      }
      const i = a.getContext("2d");
      if (!i) {
        console.error("Nie udało się uzyskać kontekstu 2D dla canvas.");
        return;
      }
      const r = LS();
      class l {
        constructor() {
          sn(this, "pierwszy");
          sn(this, "drugi");
          sn(this, "trzeci");
          (this.pierwszy = -50), (this.drugi = -50), (this.trzeci = -50);
        }
        drawPierwszy() {
          i.drawImage(r.pierwszyPlan, this.pierwszy, -245, 2e4, 400);
        }
        drawDrugi() {
          i.drawImage(r.drugiPlan, this.drugi, -270);
        }
        drawTrzeci() {
          i.drawImage(r.trzeciPlan, this.trzeci, -50);
        }
      }
      const f = new l(),
        m = {
          lewo: { pressed: !1 },
          prawo: { pressed: !1 },
          skok: { pressed: !1 },
          atak: { pressed: !1 },
        };
      class v {
        constructor({ img: B, pos: z }) {
          sn(this, "img");
          sn(this, "pos");
          sn(this, "frame");
          sn(this, "currWidth");
          sn(this, "maxframes");
          sn(this, "state");
          sn(this, "velocity");
          sn(this, "weight");
          sn(this, "switched");
          sn(this, "isJumping");
          sn(this, "moving");
          (this.img = B),
            (this.pos = z),
            (this.frame = 0),
            (this.currWidth = 64),
            (this.maxframes = 3),
            (this.state = "idle"),
            (this.velocity = 0),
            (this.weight = 2),
            (this.switched = !1),
            (this.isJumping = !1),
            (this.moving = !1);
        }
        isStanding() {
          return this.pos.y >= 75;
        }
        jump() {
          m.skok.pressed &&
            this.isStanding() &&
            ((this.velocity = -5),
            (this.img = r.heroJump),
            (this.maxframes = 15),
            (this.isJumping = !0)),
            (this.pos.y += this.velocity),
            this.isStanding()
              ? ((this.velocity = 0),
                (this.img = r.heroIdle),
                (this.maxframes = 3),
                (this.isJumping = !1))
              : (this.velocity += this.weight);
        }
        dead() {
          (this.img = r.heroDead), console.log(this.img);
        }
        draw() {
          this.frame < this.maxframes ? this.frame++ : (this.frame = 0),
            !m.prawo.pressed &&
              !m.skok.pressed &&
              this.isJumping == !1 &&
              ((S.img = r.heroIdle), (S.maxframes = 3), (S.currWidth = 64)),
            !m.lewo.pressed &&
              !m.skok.pressed &&
              this.isJumping == !1 &&
              ((S.img = r.heroIdle), (S.maxframes = 3), (S.currWidth = 64)),
            m.prawo.pressed && m.skok.pressed && this.isJumping == !1
              ? ((this.maxframes = 15),
                (this.currWidth = 64),
                this.pos.x >= 100 ? (this.pos.x = 100) : (this.pos.x += 5),
                (f.drugi -= 2),
                (f.trzeci -= 0.5),
                (f.pierwszy -= 4))
              : m.lewo.pressed && m.skok.pressed && this.isJumping == !1
                ? ((this.maxframes = 15),
                  (this.img = r.heroWalkR),
                  (this.currWidth = 64),
                  this.pos.x >= 100 ? (this.pos.x = 100) : (this.pos.x += 5),
                  (f.drugi -= 2),
                  (f.trzeci -= 0.5),
                  (f.pierwszy -= 4))
                : m.prawo.pressed && this.isJumping == !1
                  ? ((this.maxframes = 4),
                    (this.img = r.heroWalkR),
                    (this.currWidth = 80),
                    this.pos.x >= 100 ? (this.pos.x = 100) : (this.pos.x += 5),
                    (f.drugi -= 2),
                    (f.trzeci -= 0.5),
                    (f.pierwszy -= 4))
                  : m.lewo.pressed &&
                    this.isJumping == !1 &&
                    ((S.img = r.heroWalkL),
                    (this.currWidth = 80),
                    (S.maxframes = 4),
                    S.pos.x <= -10
                      ? (S.pos.x = -10)
                      : ((S.pos.x -= 5),
                        (f.drugi += 2),
                        (f.trzeci += 0.5),
                        (f.pierwszy += 4))),
            i.drawImage(
              this.img,
              this.frame * this.currWidth,
              0,
              this.currWidth,
              80,
              this.pos.x,
              this.pos.y,
              this.currWidth,
              80,
            ),
            this.jump();
        }
      }
      const S = new v({ img: r.heroIdle, pos: { x: 50, y: 75 } });
      class N {
        constructor({ img: B, pos: z }) {
          sn(this, "img");
          sn(this, "pos");
          sn(this, "frame");
          sn(this, "maxframes");
          (this.img = B),
            (this.pos = z),
            (this.frame = 0),
            (this.maxframes = 2);
        }
        show() {
          this.frame < this.maxframes ? this.frame++ : (this.frame = 0),
            i.drawImage(
              this.img,
              this.frame * 64,
              0,
              64,
              64,
              this.pos.x,
              this.pos.y,
              64,
              64,
            );
        }
      }
      const M = new N({ img: r.beeIdle, pos: { x: 250, y: 75 } });
      function G() {
        M.pos.x <= -50 ? (M.pos.x = 280) : (M.pos.x -= 3),
          S.pos.x >= M.pos.x && S.isJumping == !1 && S.dead();
      }
      window.addEventListener("keydown", I),
        window.addEventListener("keyup", R);
      function I($) {
        $.key == "ArrowRight" || $.key == "d" || $.key == "D"
          ? (m.prawo.pressed = !0)
          : $.key == "ArrowLeft" || $.key == "a" || $.key == "A"
            ? (m.lewo.pressed = !0)
            : $.key == "w" || $.key == "W" || $.key == "ArrowUp"
              ? (m.skok.pressed = !0)
              : $.keyCode == 32 && (m.atak.pressed = !0);
      }
      function R($) {
        $.key == "ArrowRight" || $.key == "d" || $.key == "D"
          ? ((m.prawo.pressed = !1), (S.moving = !1))
          : $.key == "ArrowLeft" || $.key == "a" || $.key == "A"
            ? ((m.lewo.pressed = !1), (S.moving = !1))
            : $.key == "w" || $.key == "W" || $.key == "ArrowUp"
              ? ((m.skok.pressed = !1), (S.moving = !1))
              : $.keyCode == 32 && (m.atak.pressed = !1);
      }
      function H() {
        i.clearRect(0, 0, a.width, a.height),
          i.drawImage(r.background, 0, 0, 600, 200),
          f.drawTrzeci(),
          f.drawDrugi(),
          f.drawPierwszy(),
          S.draw(),
          M.show(),
          G();
      }
      setInterval(H, 100);
    }, []),
    b.jsxs("div", {
      className: "board",
      children: [
        b.jsx("canvas", {
          id: "game_canvas",
          className: "game_canvas mx-auto mt-10 w-[750px] border border-black",
        }),
        b.jsx("div", {
          className: "mt-4 text-center",
          children:
            "Sterowanie: | a - left | d - right | w - jump | space - attack |",
        }),
      ],
    })
  );
}
function Im(a) {
  const i = { isLegal: !0, legalSquares: [] };
  switch (a.pieceId) {
    case "br":
    case "wr":
      i.legalSquares = f(a.startBoardId);
      break;
    case "bn":
    case "wn":
      i.legalSquares = v(a.startBoardId);
      break;
    case "bb":
    case "wb":
      i.legalSquares = m(a.startBoardId);
      break;
    case "bq":
    case "wq":
      i.legalSquares = S(a.startBoardId);
      break;
    case "bk":
    case "wk":
      i.legalSquares = N(
        a.startBoardId,
        a.pieceId,
        !0,
        a.doesItMove,
        a.doesItFree,
      );
      break;
    case "bp":
      i.legalSquares = G(a.startBoardId, !1, !1);
      break;
    case "wp":
      i.legalSquares = G(a.startBoardId, !0, !1);
      break;
  }
  i.isLegal = i.legalSquares.includes(a.targetBoardId);
  function r(I, R) {
    return I - R;
  }
  function l(I, R) {
    return R - I;
  }
  function f(I) {
    const R = a.occupatedSquares,
      H = [],
      $ = Math.floor((I - 1) / 8) + 1,
      B = ((I - 1) % 8) + 1;
    H.push(a.startBoardId);
    function z() {
      const K = [],
        J = I;
      K.push(J);
      for (let A = 1; A <= 8; A++) A !== $ && K.push((A - 1) * 8 + B);
      K.sort(r);
      const Q = [],
        ee = [];
      K.map((A) => {
        A < J ? Q.push(A) : A > J && ee.push(A);
      }),
        Q.sort(l);
      function fe() {
        for (let A of Q)
          if (!R.includes(A)) H.push(A);
          else if (R.includes(A)) {
            H.push(A);
            return;
          }
      }
      fe();
      function de() {
        for (let A of ee)
          if (!R.includes(A)) H.push(A);
          else if (R.includes(A)) {
            H.push(A);
            return;
          }
      }
      de();
    }
    z();
    function Y() {
      const K = [],
        J = I;
      K.push(J);
      for (let A = 1; A <= 8; A++) A !== B && K.push(($ - 1) * 8 + A);
      K.sort(r);
      const Q = [],
        ee = [];
      K.map((A) => {
        A < J ? Q.push(A) : A > J && ee.push(A);
      }),
        Q.sort(l);
      function fe() {
        for (let A of Q)
          if (!R.includes(A)) H.push(A);
          else if (R.includes(A)) {
            H.push(A);
            return;
          }
      }
      fe();
      function de() {
        for (let A of ee)
          if (!R.includes(A)) H.push(A);
          else if (R.includes(A)) {
            H.push(A);
            return;
          }
      }
      de();
    }
    return Y(), H;
  }
  function m(I) {
    const R = a.occupatedSquares,
      H = [],
      $ = [],
      B = [],
      z = [],
      Y = [],
      K = Math.floor((I - 1) / 8) + 1,
      J = ((I - 1) % 8) + 1;
    Y.push(a.startBoardId);
    let Q = K + 1,
      ee = J + 1;
    for (; Q <= 8 && ee <= 8; ) B.push((Q - 1) * 8 + ee), Q++, ee++;
    function fe() {
      for (let Te of B)
        if (!R.includes(Te)) Y.push(Te);
        else if (R.includes(Te)) {
          Y.push(Te);
          return;
        }
    }
    for (fe(), Q = K + 1, ee = J - 1; Q <= 8 && ee >= 1; )
      z.push((Q - 1) * 8 + ee), Q++, ee--;
    function de() {
      for (let Te of z)
        if (!R.includes(Te)) Y.push(Te);
        else if (R.includes(Te)) {
          Y.push(Te);
          return;
        }
    }
    for (de(), Q = K - 1, ee = J + 1; Q >= 1 && ee <= 8; )
      H.push((Q - 1) * 8 + ee), Q--, ee++;
    function A() {
      for (let Te of H)
        if (!R.includes(Te)) Y.push(Te);
        else if (R.includes(Te)) {
          Y.push(Te);
          return;
        }
    }
    for (A(), Q = K - 1, ee = J - 1; Q >= 1 && ee >= 1; )
      $.push((Q - 1) * 8 + ee), Q--, ee--;
    function je() {
      for (let Te of $)
        if (!R.includes(Te)) Y.push(Te);
        else if (R.includes(Te)) {
          Y.push(Te);
          return;
        }
    }
    return je(), Y;
  }
  function v(I) {
    const R = [],
      H = Math.floor((I - 1) / 8) + 1,
      $ = ((I - 1) % 8) + 1;
    R.push(a.startBoardId);
    const B = [
      { r: -2, k: -1 },
      { r: -2, k: 1 },
      { r: -1, k: -2 },
      { r: -1, k: 2 },
      { r: 1, k: -2 },
      { r: 1, k: 2 },
      { r: 2, k: -1 },
      { r: 2, k: 1 },
    ];
    for (const z of B) {
      const Y = H + z.r,
        K = $ + z.k;
      Y >= 1 && Y <= 8 && K >= 1 && K <= 8 && R.push((Y - 1) * 8 + K);
    }
    return R;
  }
  function S(I) {
    const R = a.occupatedSquares,
      H = [],
      $ = [],
      B = [],
      z = [],
      Y = [],
      K = Math.floor((I - 1) / 8) + 1,
      J = ((I - 1) % 8) + 1;
    Y.push(a.startBoardId);
    let Q = K + 1,
      ee = J + 1;
    for (; Q <= 8 && ee <= 8; ) B.push((Q - 1) * 8 + ee), Q++, ee++;
    function fe() {
      for (let he of B)
        if (!R.includes(he)) Y.push(he);
        else if (R.includes(he)) {
          Y.push(he);
          return;
        }
    }
    for (fe(), Q = K + 1, ee = J - 1; Q <= 8 && ee >= 1; )
      z.push((Q - 1) * 8 + ee), Q++, ee--;
    function de() {
      for (let he of z)
        if (!R.includes(he)) Y.push(he);
        else if (R.includes(he)) {
          Y.push(he);
          return;
        }
    }
    for (de(), Q = K - 1, ee = J + 1; Q >= 1 && ee <= 8; )
      H.push((Q - 1) * 8 + ee), Q--, ee++;
    function A() {
      for (let he of H)
        if (!R.includes(he)) Y.push(he);
        else if (R.includes(he)) {
          Y.push(he);
          return;
        }
    }
    for (A(), Q = K - 1, ee = J - 1; Q >= 1 && ee >= 1; )
      $.push((Q - 1) * 8 + ee), Q--, ee--;
    function je() {
      for (let he of $)
        if (!R.includes(he)) Y.push(he);
        else if (R.includes(he)) {
          Y.push(he);
          return;
        }
    }
    je();
    function Te() {
      const he = [],
        ce = I;
      he.push(ce);
      for (let j = 1; j <= 8; j++) j !== K && he.push((j - 1) * 8 + J);
      he.sort(r);
      const oe = [],
        _e = [];
      he.map((j) => {
        j < ce ? oe.push(j) : j > ce && _e.push(j);
      }),
        oe.sort(l);
      function Ae() {
        for (let j of oe)
          if (!R.includes(j)) Y.push(j);
          else if (R.includes(j)) {
            Y.push(j);
            return;
          }
      }
      Ae();
      function xe() {
        for (let j of _e)
          if (!R.includes(j)) Y.push(j);
          else if (R.includes(j)) {
            Y.push(j);
            return;
          }
      }
      xe();
    }
    Te();
    function ge() {
      const he = [],
        ce = I;
      he.push(ce);
      for (let j = 1; j <= 8; j++) j !== J && he.push((K - 1) * 8 + j);
      he.sort(r);
      const oe = [],
        _e = [];
      he.map((j) => {
        j < ce ? oe.push(j) : j > ce && _e.push(j);
      }),
        oe.sort(l);
      function Ae() {
        for (let j of oe)
          if (!R.includes(j)) Y.push(j);
          else if (R.includes(j)) {
            Y.push(j);
            return;
          }
      }
      Ae();
      function xe() {
        for (let j of _e)
          if (!R.includes(j)) Y.push(j);
          else if (R.includes(j)) {
            Y.push(j);
            return;
          }
      }
      xe();
    }
    return ge(), Y;
  }
  function N(I, R, H, $, B) {
    const z = [],
      Y = Math.floor((I - 1) / 8) + 1,
      K = ((I - 1) % 8) + 1;
    z.push(a.startBoardId);
    const J = [
        { r: -1, k: 0 },
        { r: 1, k: 0 },
        { r: 0, k: -1 },
        { r: 0, k: 1 },
        { r: -1, k: -1 },
        { r: -1, k: 1 },
        { r: 1, k: -1 },
        { r: 1, k: 1 },
      ],
      Q = [
        { r: 0, k: -2 },
        { r: 0, k: 2 },
      ];
    for (const ee of J) {
      const fe = Y + ee.r,
        de = K + ee.k;
      fe >= 1 && fe <= 8 && de >= 1 && de <= 8 && z.push((fe - 1) * 8 + de);
    }
    for (const ee of Q) {
      const fe = Y + ee.r,
        de = K + ee.k;
      fe >= 1 &&
        fe <= 8 &&
        de >= 1 &&
        de <= 8 &&
        a.startBoardId == 61 &&
        z.push((fe - 1) * 8 + de);
    }
    if (R == "wk" && H) {
      const ee = M();
      if (ee) {
        const fe = ee == null ? void 0 : ee.indexOf(I);
        if ((ee == null || ee.splice(fe, 1), ee)) {
          for (let de of ee)
            if (z.includes(de)) {
              const A = z.indexOf(de);
              z.splice(A, 1);
            }
        }
      }
    }
    return z || [0];
  }
  function M() {
    const I = [];
    for (let R of a.kingCollisions.pieces)
      switch (Object.values(R)[0]) {
        case "br":
          let H = f(Number(Object.keys(R)[0]));
          for (let J of H) I.includes(J) || I.push(J);
          break;
        case "bn":
          let $ = v(Number(Object.keys(R)[0]));
          for (let J of $) I.includes(J) || I.push(J);
          break;
        case "bb":
          let B = m(Number(Object.keys(R)[0]));
          for (let J of B) I.includes(J) || I.push(J);
          break;
        case "bq":
          let z = S(Number(Object.keys(R)[0]));
          for (let J of z) I.includes(J) || I.push(J);
          break;
        case "bk":
          let Y = N(
            Number(Object.keys(R)[0]),
            a.pieceId,
            !1,
            a.doesItMove,
            a.doesItFree,
          );
          if (!Y) return;
          for (let J of Y) I.includes(J) || I.push(J);
          break;
        case "bp":
          let K = G(Number(Object.keys(R)[0]), !1, !0);
          for (let J of K) I.includes(J) || I.push(J);
          break;
      }
    return I;
  }
  function G(I, R, H) {
    const $ = [],
      B = Math.floor((I - 1) / 8) + 1,
      z = ((I - 1) % 8) + 1;
    $.push(a.startBoardId);
    const Y = R ? -1 : 1,
      K = B + Y;
    if (
      H == !1 &&
      (K >= 1 && K <= 8 && $.push((K - 1) * 8 + z),
      (R && B === 7) || (!R && B === 2))
    ) {
      const J = B + 2 * Y;
      $.push((J - 1) * 8 + z);
    }
    for (const J of [-1, 1]) {
      const Q = z + J;
      K >= 1 && K <= 8 && Q >= 1 && Q <= 8 && $.push((K - 1) * 8 + Q);
    }
    return $;
  }
  return i;
}
var Cf = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var MS = Cf.exports,
  C0;
function FS() {
  return (
    C0 ||
      ((C0 = 1),
      (function (a, i) {
        (function () {
          var r,
            l = "4.17.21",
            f = 200,
            m =
              "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            v = "Expected a function",
            S = "Invalid `variable` option passed into `_.template`",
            N = "__lodash_hash_undefined__",
            M = 500,
            G = "__lodash_placeholder__",
            I = 1,
            R = 2,
            H = 4,
            $ = 1,
            B = 2,
            z = 1,
            Y = 2,
            K = 4,
            J = 8,
            Q = 16,
            ee = 32,
            fe = 64,
            de = 128,
            A = 256,
            je = 512,
            Te = 30,
            ge = "...",
            he = 800,
            ce = 16,
            oe = 1,
            _e = 2,
            Ae = 3,
            xe = 1 / 0,
            j = 9007199254740991,
            le = 17976931348623157e292,
            C = NaN,
            q = 4294967295,
            pe = q - 1,
            Qe = q >>> 1,
            Ne = [
              ["ary", de],
              ["bind", z],
              ["bindKey", Y],
              ["curry", J],
              ["curryRight", Q],
              ["flip", je],
              ["partial", ee],
              ["partialRight", fe],
              ["rearg", A],
            ],
            ze = "[object Arguments]",
            $e = "[object Array]",
            me = "[object AsyncFunction]",
            Ee = "[object Boolean]",
            Se = "[object Date]",
            ht = "[object DOMException]",
            pt = "[object Error]",
            rt = "[object Function]",
            Ke = "[object GeneratorFunction]",
            ke = "[object Map]",
            Oe = "[object Number]",
            Le = "[object Null]",
            Je = "[object Object]",
            _t = "[object Promise]",
            It = "[object Proxy]",
            xt = "[object RegExp]",
            gt = "[object Set]",
            yt = "[object String]",
            In = "[object Symbol]",
            Sr = "[object Undefined]",
            jr = "[object WeakMap]",
            Bo = "[object WeakSet]",
            zr = "[object ArrayBuffer]",
            Mn = "[object DataView]",
            rr = "[object Float32Array]",
            $r = "[object Float64Array]",
            Hn = "[object Int8Array]",
            jo = "[object Int16Array]",
            Wa = "[object Int32Array]",
            Ga = "[object Uint8Array]",
            Hu = "[object Uint8ClampedArray]",
            zo = "[object Uint16Array]",
            $o = "[object Uint32Array]",
            qu = /\b__p \+= '';/g,
            Ku = /\b(__p \+=) '' \+/g,
            Vu = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            os = /&(?:amp|lt|gt|quot|#39);/g,
            as = /[&<>"']/g,
            qf = RegExp(os.source),
            Kf = RegExp(as.source),
            Vf = /<%-([\s\S]+?)%>/g,
            Qf = /<%([\s\S]+?)%>/g,
            Qu = /<%=([\s\S]+?)%>/g,
            Ju = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Jf = /^\w*$/,
            Uo =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Wo = /[\\^$.*+?()[\]{}|]/g,
            Go = RegExp(Wo.source),
            Xu = /^\s+/,
            Ho = /\s/,
            Ha = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            qa = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Yu = /,? & /,
            pp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            mp = /[()=,{}\[\]\/\s]/,
            gp = /\\(\\)?/g,
            ls = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            Zu = /\w*$/,
            Xf = /^[-+]0x[0-9a-f]+$/i,
            yp = /^0b[01]+$/i,
            Yf = /^\[object .+?Constructor\]$/,
            Zf = /^0o[0-7]+$/i,
            ed = /^(?:0|[1-9]\d*)$/,
            td = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Ka = /($^)/,
            vp = /['\n\r\u2028\u2029\\]/g,
            Tt = "\\ud800-\\udfff",
            wp = "\\u0300-\\u036f",
            ec = "\\ufe20-\\ufe2f",
            nd = "\\u20d0-\\u20ff",
            qo = wp + ec + nd,
            rd = "\\u2700-\\u27bf",
            tc = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Va = "\\xac\\xb1\\xd7\\xf7",
            Ur = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            _p = "\\u2000-\\u206f",
            xr =
              " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            id = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            sd = "\\ufe0e\\ufe0f",
            od = Va + Ur + _p + xr,
            js = "['’]",
            Qa = "[" + Tt + "]",
            zs = "[" + od + "]",
            us = "[" + qo + "]",
            ad = "\\d+",
            Sp = "[" + rd + "]",
            Ja = "[" + tc + "]",
            nc = "[^" + Tt + od + ad + rd + tc + id + "]",
            Ko = "\\ud83c[\\udffb-\\udfff]",
            Vo = "(?:" + us + "|" + Ko + ")",
            ld = "[^" + Tt + "]",
            Qo = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            mt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            cs = "[" + id + "]",
            rc = "\\u200d",
            Xa = "(?:" + Ja + "|" + nc + ")",
            ud = "(?:" + cs + "|" + nc + ")",
            ic = "(?:" + js + "(?:d|ll|m|re|s|t|ve))?",
            sc = "(?:" + js + "(?:D|LL|M|RE|S|T|VE))?",
            Ya = Vo + "?",
            Jo = "[" + sd + "]?",
            Ei =
              "(?:" +
              rc +
              "(?:" +
              [ld, Qo, mt].join("|") +
              ")" +
              Jo +
              Ya +
              ")*",
            Ci = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            Ii = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            $s = Jo + Ya + Ei,
            Xo = "(?:" + [Sp, Qo, mt].join("|") + ")" + $s,
            ki = "(?:" + [ld + us + "?", us, Qo, mt, Qa].join("|") + ")",
            xp = RegExp(js, "g"),
            cd = RegExp(us, "g"),
            fs = RegExp(Ko + "(?=" + Ko + ")|" + ki + $s, "g"),
            Ep = RegExp(
              [
                cs +
                  "?" +
                  Ja +
                  "+" +
                  ic +
                  "(?=" +
                  [zs, cs, "$"].join("|") +
                  ")",
                ud + "+" + sc + "(?=" + [zs, cs + Xa, "$"].join("|") + ")",
                cs + "?" + Xa + "+" + ic,
                cs + "+" + sc,
                Ii,
                Ci,
                ad,
                Xo,
              ].join("|"),
              "g",
            ),
            fd = RegExp("[" + rc + Tt + qo + sd + "]"),
            Za =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            dd = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            Cp = -1,
            St = {};
          (St[rr] =
            St[$r] =
            St[Hn] =
            St[jo] =
            St[Wa] =
            St[Ga] =
            St[Hu] =
            St[zo] =
            St[$o] =
              !0),
            (St[ze] =
              St[$e] =
              St[zr] =
              St[Ee] =
              St[Mn] =
              St[Se] =
              St[pt] =
              St[rt] =
              St[ke] =
              St[Oe] =
              St[Je] =
              St[xt] =
              St[gt] =
              St[yt] =
              St[jr] =
                !1);
          var vt = {};
          (vt[ze] =
            vt[$e] =
            vt[zr] =
            vt[Mn] =
            vt[Ee] =
            vt[Se] =
            vt[rr] =
            vt[$r] =
            vt[Hn] =
            vt[jo] =
            vt[Wa] =
            vt[ke] =
            vt[Oe] =
            vt[Je] =
            vt[xt] =
            vt[gt] =
            vt[yt] =
            vt[In] =
            vt[Ga] =
            vt[Hu] =
            vt[zo] =
            vt[$o] =
              !0),
            (vt[pt] = vt[rt] = vt[jr] = !1);
          var Us = {
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            },
            el = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            },
            Ip = {
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            },
            kp = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            oc = parseFloat,
            tl = parseInt,
            nl = typeof Ah == "object" && Ah && Ah.Object === Object && Ah,
            hd =
              typeof self == "object" && self && self.Object === Object && self,
            Lt = nl || hd || Function("return this")(),
            Yo = i && !i.nodeType && i,
            Wr = Yo && !0 && a && !a.nodeType && a,
            ac = Wr && Wr.exports === Yo,
            Ws = ac && nl.process,
            kn = (function () {
              try {
                var T = Wr && Wr.require && Wr.require("util").types;
                return T || (Ws && Ws.binding && Ws.binding("util"));
              } catch {}
            })(),
            lc = kn && kn.isArrayBuffer,
            Fn = kn && kn.isDate,
            ds = kn && kn.isMap,
            rl = kn && kn.isRegExp,
            Gs = kn && kn.isSet,
            pd = kn && kn.isTypedArray;
          function Pn(T, X, U) {
            switch (U.length) {
              case 0:
                return T.call(X);
              case 1:
                return T.call(X, U[0]);
              case 2:
                return T.call(X, U[0], U[1]);
              case 3:
                return T.call(X, U[0], U[1], U[2]);
            }
            return T.apply(X, U);
          }
          function uc(T, X, U, ve) {
            for (var qe = -1, ut = T == null ? 0 : T.length; ++qe < ut; ) {
              var Ut = T[qe];
              X(ve, Ut, U(Ut), T);
            }
            return ve;
          }
          function cn(T, X) {
            for (
              var U = -1, ve = T == null ? 0 : T.length;
              ++U < ve && X(T[U], U, T) !== !1;

            );
            return T;
          }
          function il(T, X) {
            for (
              var U = T == null ? 0 : T.length;
              U-- && X(T[U], U, T) !== !1;

            );
            return T;
          }
          function cc(T, X) {
            for (var U = -1, ve = T == null ? 0 : T.length; ++U < ve; )
              if (!X(T[U], U, T)) return !1;
            return !0;
          }
          function Pi(T, X) {
            for (
              var U = -1, ve = T == null ? 0 : T.length, qe = 0, ut = [];
              ++U < ve;

            ) {
              var Ut = T[U];
              X(Ut, U, T) && (ut[qe++] = Ut);
            }
            return ut;
          }
          function sl(T, X) {
            var U = T == null ? 0 : T.length;
            return !!U && Hs(T, X, 0) > -1;
          }
          function fc(T, X, U) {
            for (var ve = -1, qe = T == null ? 0 : T.length; ++ve < qe; )
              if (U(X, T[ve])) return !0;
            return !1;
          }
          function kt(T, X) {
            for (
              var U = -1, ve = T == null ? 0 : T.length, qe = Array(ve);
              ++U < ve;

            )
              qe[U] = X(T[U], U, T);
            return qe;
          }
          function Ri(T, X) {
            for (var U = -1, ve = X.length, qe = T.length; ++U < ve; )
              T[qe + U] = X[U];
            return T;
          }
          function dc(T, X, U, ve) {
            var qe = -1,
              ut = T == null ? 0 : T.length;
            for (ve && ut && (U = T[++qe]); ++qe < ut; ) U = X(U, T[qe], qe, T);
            return U;
          }
          function Pp(T, X, U, ve) {
            var qe = T == null ? 0 : T.length;
            for (ve && qe && (U = T[--qe]); qe--; ) U = X(U, T[qe], qe, T);
            return U;
          }
          function hc(T, X) {
            for (var U = -1, ve = T == null ? 0 : T.length; ++U < ve; )
              if (X(T[U], U, T)) return !0;
            return !1;
          }
          var Rp = mc("length");
          function md(T) {
            return T.split("");
          }
          function Ap(T) {
            return T.match(pp) || [];
          }
          function gd(T, X, U) {
            var ve;
            return (
              U(T, function (qe, ut, Ut) {
                if (X(qe, ut, Ut)) return (ve = ut), !1;
              }),
              ve
            );
          }
          function ol(T, X, U, ve) {
            for (
              var qe = T.length, ut = U + (ve ? 1 : -1);
              ve ? ut-- : ++ut < qe;

            )
              if (X(T[ut], ut, T)) return ut;
            return -1;
          }
          function Hs(T, X, U) {
            return X === X ? ul(T, X, U) : ol(T, yd, U);
          }
          function pc(T, X, U, ve) {
            for (var qe = U - 1, ut = T.length; ++qe < ut; )
              if (ve(T[qe], X)) return qe;
            return -1;
          }
          function yd(T) {
            return T !== T;
          }
          function vd(T, X) {
            var U = T == null ? 0 : T.length;
            return U ? gc(T, X) / U : C;
          }
          function mc(T) {
            return function (X) {
              return X == null ? r : X[T];
            };
          }
          function al(T) {
            return function (X) {
              return T == null ? r : T[X];
            };
          }
          function wd(T, X, U, ve, qe) {
            return (
              qe(T, function (ut, Ut, Et) {
                U = ve ? ((ve = !1), ut) : X(U, ut, Ut, Et);
              }),
              U
            );
          }
          function Op(T, X) {
            var U = T.length;
            for (T.sort(X); U--; ) T[U] = T[U].value;
            return T;
          }
          function gc(T, X) {
            for (var U, ve = -1, qe = T.length; ++ve < qe; ) {
              var ut = X(T[ve]);
              ut !== r && (U = U === r ? ut : U + ut);
            }
            return U;
          }
          function yc(T, X) {
            for (var U = -1, ve = Array(T); ++U < T; ) ve[U] = X(U);
            return ve;
          }
          function Np(T, X) {
            return kt(X, function (U) {
              return [U, T[U]];
            });
          }
          function _d(T) {
            return T && T.slice(0, cl(T) + 1).replace(Xu, "");
          }
          function qn(T) {
            return function (X) {
              return T(X);
            };
          }
          function Zo(T, X) {
            return kt(X, function (U) {
              return T[U];
            });
          }
          function ii(T, X) {
            return T.has(X);
          }
          function Sd(T, X) {
            for (var U = -1, ve = T.length; ++U < ve && Hs(X, T[U], 0) > -1; );
            return U;
          }
          function vc(T, X) {
            for (var U = T.length; U-- && Hs(X, T[U], 0) > -1; );
            return U;
          }
          function xd(T, X) {
            for (var U = T.length, ve = 0; U--; ) T[U] === X && ++ve;
            return ve;
          }
          var Ed = al(Us),
            Cd = al(el);
          function Id(T) {
            return "\\" + kp[T];
          }
          function qs(T, X) {
            return T == null ? r : T[X];
          }
          function Ks(T) {
            return fd.test(T);
          }
          function bp(T) {
            return Za.test(T);
          }
          function Tp(T) {
            for (var X, U = []; !(X = T.next()).done; ) U.push(X.value);
            return U;
          }
          function ll(T) {
            var X = -1,
              U = Array(T.size);
            return (
              T.forEach(function (ve, qe) {
                U[++X] = [qe, ve];
              }),
              U
            );
          }
          function wc(T, X) {
            return function (U) {
              return T(X(U));
            };
          }
          function ir(T, X) {
            for (var U = -1, ve = T.length, qe = 0, ut = []; ++U < ve; ) {
              var Ut = T[U];
              (Ut === X || Ut === G) && ((T[U] = G), (ut[qe++] = U));
            }
            return ut;
          }
          function Ai(T) {
            var X = -1,
              U = Array(T.size);
            return (
              T.forEach(function (ve) {
                U[++X] = ve;
              }),
              U
            );
          }
          function Lp(T) {
            var X = -1,
              U = Array(T.size);
            return (
              T.forEach(function (ve) {
                U[++X] = [ve, ve];
              }),
              U
            );
          }
          function ul(T, X, U) {
            for (var ve = U - 1, qe = T.length; ++ve < qe; )
              if (T[ve] === X) return ve;
            return -1;
          }
          function Dp(T, X, U) {
            for (var ve = U + 1; ve--; ) if (T[ve] === X) return ve;
            return ve;
          }
          function hs(T) {
            return Ks(T) ? Pd(T) : Rp(T);
          }
          function Kn(T) {
            return Ks(T) ? Rd(T) : md(T);
          }
          function cl(T) {
            for (var X = T.length; X-- && Ho.test(T.charAt(X)); );
            return X;
          }
          var kd = al(Ip);
          function Pd(T) {
            for (var X = (fs.lastIndex = 0); fs.test(T); ) ++X;
            return X;
          }
          function Rd(T) {
            return T.match(fs) || [];
          }
          function Mp(T) {
            return T.match(Ep) || [];
          }
          var Fp = function T(X) {
              X = X == null ? Lt : Vs.defaults(Lt.Object(), X, Vs.pick(Lt, dd));
              var U = X.Array,
                ve = X.Date,
                qe = X.Error,
                ut = X.Function,
                Ut = X.Math,
                Et = X.Object,
                ea = X.RegExp,
                Bp = X.String,
                sr = X.TypeError,
                si = U.prototype,
                _c = ut.prototype,
                Gr = Et.prototype,
                Qs = X["__core-js_shared__"],
                ta = _c.toString,
                ct = Gr.hasOwnProperty,
                Js = 0,
                fl = (function () {
                  var n = /[^.]+$/.exec(
                    (Qs && Qs.keys && Qs.keys.IE_PROTO) || "",
                  );
                  return n ? "Symbol(src)_1." + n : "";
                })(),
                na = Gr.toString,
                dl = ta.call(Et),
                Ad = Lt._,
                Od = ea(
                  "^" +
                    ta
                      .call(ct)
                      .replace(Wo, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?",
                      ) +
                    "$",
                ),
                ra = ac ? X.Buffer : r,
                oi = X.Symbol,
                ia = X.Uint8Array,
                Sc = ra ? ra.allocUnsafe : r,
                Er = wc(Et.getPrototypeOf, Et),
                hl = Et.create,
                pl = Gr.propertyIsEnumerable,
                ml = si.splice,
                Nd = oi ? oi.isConcatSpreadable : r,
                ai = oi ? oi.iterator : r,
                ps = oi ? oi.toStringTag : r,
                sa = (function () {
                  try {
                    var n = hi(Et, "defineProperty");
                    return n({}, "", {}), n;
                  } catch {}
                })(),
                bd = X.clearTimeout !== Lt.clearTimeout && X.clearTimeout,
                At = ve && ve.now !== Lt.Date.now && ve.now,
                xc = X.setTimeout !== Lt.setTimeout && X.setTimeout,
                ms = Ut.ceil,
                Oi = Ut.floor,
                gl = Et.getOwnPropertySymbols,
                Ec = ra ? ra.isBuffer : r,
                Xs = X.isFinite,
                yl = si.join,
                Ys = wc(Et.keys, Et),
                Wt = Ut.max,
                fn = Ut.min,
                jp = ve.now,
                Td = X.parseInt,
                oa = Ut.random,
                vl = si.reverse,
                aa = hi(X, "DataView"),
                gs = hi(X, "Map"),
                la = hi(X, "Promise"),
                Ni = hi(X, "Set"),
                ua = hi(X, "WeakMap"),
                Zs = hi(Et, "create"),
                wl = ua && new ua(),
                eo = {},
                Cc = Hi(aa),
                bi = Hi(gs),
                Ld = Hi(la),
                to = Hi(Ni),
                Hr = Hi(ua),
                Ti = oi ? oi.prototype : r,
                Vn = Ti ? Ti.valueOf : r,
                _l = Ti ? Ti.toString : r;
              function w(n) {
                if (Ht(n) && !Ze(n) && !(n instanceof Xe)) {
                  if (n instanceof dn) return n;
                  if (ct.call(n, "__wrapped__")) return rf(n);
                }
                return new dn(n);
              }
              var no = (function () {
                function n() {}
                return function (s) {
                  if (!zt(s)) return {};
                  if (hl) return hl(s);
                  n.prototype = s;
                  var c = new n();
                  return (n.prototype = r), c;
                };
              })();
              function qr() {}
              function dn(n, s) {
                (this.__wrapped__ = n),
                  (this.__actions__ = []),
                  (this.__chain__ = !!s),
                  (this.__index__ = 0),
                  (this.__values__ = r);
              }
              (w.templateSettings = {
                escape: Vf,
                evaluate: Qf,
                interpolate: Qu,
                variable: "",
                imports: { _: w },
              }),
                (w.prototype = qr.prototype),
                (w.prototype.constructor = w),
                (dn.prototype = no(qr.prototype)),
                (dn.prototype.constructor = dn);
              function Xe(n) {
                (this.__wrapped__ = n),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = q),
                  (this.__views__ = []);
              }
              function Sl() {
                var n = new Xe(this.__wrapped__);
                return (
                  (n.__actions__ = On(this.__actions__)),
                  (n.__dir__ = this.__dir__),
                  (n.__filtered__ = this.__filtered__),
                  (n.__iteratees__ = On(this.__iteratees__)),
                  (n.__takeCount__ = this.__takeCount__),
                  (n.__views__ = On(this.__views__)),
                  n
                );
              }
              function Ic() {
                if (this.__filtered__) {
                  var n = new Xe(this);
                  (n.__dir__ = -1), (n.__filtered__ = !0);
                } else (n = this.clone()), (n.__dir__ *= -1);
                return n;
              }
              function ro() {
                var n = this.__wrapped__.value(),
                  s = this.__dir__,
                  c = Ze(n),
                  p = s < 0,
                  g = c ? n.length : 0,
                  _ = ih(0, g, this.__views__),
                  E = _.start,
                  P = _.end,
                  L = P - E,
                  Z = p ? P : E - 1,
                  te = this.__iteratees__,
                  se = te.length,
                  ye = 0,
                  be = fn(L, this.__takeCount__);
                if (!c || (!p && g == L && be == L))
                  return Fc(n, this.__actions__);
                var Ue = [];
                e: for (; L-- && ye < be; ) {
                  Z += s;
                  for (var tt = -1, We = n[Z]; ++tt < se; ) {
                    var it = te[tt],
                      at = it.iteratee,
                      Tr = it.type,
                      tr = at(We);
                    if (Tr == _e) We = tr;
                    else if (!tr) {
                      if (Tr == oe) continue e;
                      break e;
                    }
                  }
                  Ue[ye++] = We;
                }
                return Ue;
              }
              (Xe.prototype = no(qr.prototype)),
                (Xe.prototype.constructor = Xe);
              function Bn(n) {
                var s = -1,
                  c = n == null ? 0 : n.length;
                for (this.clear(); ++s < c; ) {
                  var p = n[s];
                  this.set(p[0], p[1]);
                }
              }
              function Ot() {
                (this.__data__ = Zs ? Zs(null) : {}), (this.size = 0);
              }
              function Pt(n) {
                var s = this.has(n) && delete this.__data__[n];
                return (this.size -= s ? 1 : 0), s;
              }
              function Li(n) {
                var s = this.__data__;
                if (Zs) {
                  var c = s[n];
                  return c === N ? r : c;
                }
                return ct.call(s, n) ? s[n] : r;
              }
              function hn(n) {
                var s = this.__data__;
                return Zs ? s[n] !== r : ct.call(s, n);
              }
              function jn(n, s) {
                var c = this.__data__;
                return (
                  (this.size += this.has(n) ? 0 : 1),
                  (c[n] = Zs && s === r ? N : s),
                  this
                );
              }
              (Bn.prototype.clear = Ot),
                (Bn.prototype.delete = Pt),
                (Bn.prototype.get = Li),
                (Bn.prototype.has = hn),
                (Bn.prototype.set = jn);
              function Rn(n) {
                var s = -1,
                  c = n == null ? 0 : n.length;
                for (this.clear(); ++s < c; ) {
                  var p = n[s];
                  this.set(p[0], p[1]);
                }
              }
              function io() {
                (this.__data__ = []), (this.size = 0);
              }
              function zn(n) {
                var s = this.__data__,
                  c = mn(s, n);
                if (c < 0) return !1;
                var p = s.length - 1;
                return c == p ? s.pop() : ml.call(s, c, 1), --this.size, !0;
              }
              function xl(n) {
                var s = this.__data__,
                  c = mn(s, n);
                return c < 0 ? r : s[c][1];
              }
              function Dd(n) {
                return mn(this.__data__, n) > -1;
              }
              function Md(n, s) {
                var c = this.__data__,
                  p = mn(c, n);
                return (
                  p < 0 ? (++this.size, c.push([n, s])) : (c[p][1] = s), this
                );
              }
              (Rn.prototype.clear = io),
                (Rn.prototype.delete = zn),
                (Rn.prototype.get = xl),
                (Rn.prototype.has = Dd),
                (Rn.prototype.set = Md);
              function or(n) {
                var s = -1,
                  c = n == null ? 0 : n.length;
                for (this.clear(); ++s < c; ) {
                  var p = n[s];
                  this.set(p[0], p[1]);
                }
              }
              function Fd() {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new Bn(),
                    map: new (gs || Rn)(),
                    string: new Bn(),
                  });
              }
              function li(n) {
                var s = Ql(this, n).delete(n);
                return (this.size -= s ? 1 : 0), s;
              }
              function El(n) {
                return Ql(this, n).get(n);
              }
              function kc(n) {
                return Ql(this, n).has(n);
              }
              function Bd(n, s) {
                var c = Ql(this, n),
                  p = c.size;
                return c.set(n, s), (this.size += c.size == p ? 0 : 1), this;
              }
              (or.prototype.clear = Fd),
                (or.prototype.delete = li),
                (or.prototype.get = El),
                (or.prototype.has = kc),
                (or.prototype.set = Bd);
              function ys(n) {
                var s = -1,
                  c = n == null ? 0 : n.length;
                for (this.__data__ = new or(); ++s < c; ) this.add(n[s]);
              }
              function Di(n) {
                return this.__data__.set(n, N), this;
              }
              function so(n) {
                return this.__data__.has(n);
              }
              (ys.prototype.add = ys.prototype.push = Di),
                (ys.prototype.has = so);
              function pn(n) {
                var s = (this.__data__ = new Rn(n));
                this.size = s.size;
              }
              function Cl() {
                (this.__data__ = new Rn()), (this.size = 0);
              }
              function Il(n) {
                var s = this.__data__,
                  c = s.delete(n);
                return (this.size = s.size), c;
              }
              function ar(n) {
                return this.__data__.get(n);
              }
              function lr(n) {
                return this.__data__.has(n);
              }
              function vs(n, s) {
                var c = this.__data__;
                if (c instanceof Rn) {
                  var p = c.__data__;
                  if (!gs || p.length < f - 1)
                    return p.push([n, s]), (this.size = ++c.size), this;
                  c = this.__data__ = new or(p);
                }
                return c.set(n, s), (this.size = c.size), this;
              }
              (pn.prototype.clear = Cl),
                (pn.prototype.delete = Il),
                (pn.prototype.get = ar),
                (pn.prototype.has = lr),
                (pn.prototype.set = vs);
              function Kr(n, s) {
                var c = Ze(n),
                  p = !c && La(n),
                  g = !c && !p && Eo(n),
                  _ = !c && !p && !g && vu(n),
                  E = c || p || g || _,
                  P = E ? yc(n.length, Bp) : [],
                  L = P.length;
                for (var Z in n)
                  (s || ct.call(n, Z)) &&
                    !(
                      E &&
                      (Z == "length" ||
                        (g && (Z == "offset" || Z == "parent")) ||
                        (_ &&
                          (Z == "buffer" ||
                            Z == "byteLength" ||
                            Z == "byteOffset")) ||
                        cr(Z, L))
                    ) &&
                    P.push(Z);
                return P;
              }
              function Vr(n) {
                var s = n.length;
                return s ? n[ya(0, s - 1)] : r;
              }
              function ws(n, s) {
                return Yn(On(n), ui(s, 0, n.length));
              }
              function jd(n) {
                return Yn(On(n));
              }
              function ca(n, s, c) {
                ((c !== r && !gi(n[s], c)) || (c === r && !(s in n))) &&
                  Qr(n, s, c);
              }
              function _s(n, s, c) {
                var p = n[s];
                (!(ct.call(n, s) && gi(p, c)) || (c === r && !(s in n))) &&
                  Qr(n, s, c);
              }
              function mn(n, s) {
                for (var c = n.length; c--; ) if (gi(n[c][0], s)) return c;
                return -1;
              }
              function Qn(n, s, c, p) {
                return (
                  Xr(n, function (g, _, E) {
                    s(p, g, c(g), E);
                  }),
                  p
                );
              }
              function Nt(n, s) {
                return n && Ar(s, xn(s), n);
              }
              function Cr(n, s) {
                return n && Ar(s, pr(s), n);
              }
              function Qr(n, s, c) {
                s == "__proto__" && sa
                  ? sa(n, s, {
                      configurable: !0,
                      enumerable: !0,
                      value: c,
                      writable: !0,
                    })
                  : (n[s] = c);
              }
              function kl(n, s) {
                for (
                  var c = -1, p = s.length, g = U(p), _ = n == null;
                  ++c < p;

                )
                  g[c] = _ ? r : lm(n, s[c]);
                return g;
              }
              function ui(n, s, c) {
                return (
                  n === n &&
                    (c !== r && (n = n <= c ? n : c),
                    s !== r && (n = n >= s ? n : s)),
                  n
                );
              }
              function $n(n, s, c, p, g, _) {
                var E,
                  P = s & I,
                  L = s & R,
                  Z = s & H;
                if ((c && (E = g ? c(n, p, g, _) : c(n)), E !== r)) return E;
                if (!zt(n)) return n;
                var te = Ze(n);
                if (te) {
                  if (((E = sh(n)), !P)) return On(n, E);
                } else {
                  var se = wn(n),
                    ye = se == rt || se == Ke;
                  if (Eo(n)) return jc(n, P);
                  if (se == Je || se == ze || (ye && !g)) {
                    if (((E = L || ye ? {} : yo(n)), !P))
                      return L ? $p(n, Cr(E, n)) : Qd(n, Nt(E, n));
                  } else {
                    if (!vt[se]) return g ? n : {};
                    E = _n(n, se, P);
                  }
                }
                _ || (_ = new pn());
                var be = _.get(n);
                if (be) return be;
                _.set(n, E),
                  $g(n)
                    ? n.forEach(function (We) {
                        E.add($n(We, s, c, We, n, _));
                      })
                    : jg(n) &&
                      n.forEach(function (We, it) {
                        E.set(it, $n(We, s, c, it, n, _));
                      });
                var Ue = Z ? (L ? Ca : Vl) : L ? pr : xn,
                  tt = te ? r : Ue(n);
                return (
                  cn(tt || n, function (We, it) {
                    tt && ((it = We), (We = n[it])),
                      _s(E, it, $n(We, s, c, it, n, _));
                  }),
                  E
                );
              }
              function zd(n) {
                var s = xn(n);
                return function (c) {
                  return fa(c, n, s);
                };
              }
              function fa(n, s, c) {
                var p = c.length;
                if (n == null) return !p;
                for (n = Et(n); p--; ) {
                  var g = c[p],
                    _ = s[g],
                    E = n[g];
                  if ((E === r && !(g in n)) || !_(E)) return !1;
                }
                return !0;
              }
              function Pc(n, s, c) {
                if (typeof n != "function") throw new sr(v);
                return wo(function () {
                  n.apply(r, c);
                }, s);
              }
              function Jr(n, s, c, p) {
                var g = -1,
                  _ = sl,
                  E = !0,
                  P = n.length,
                  L = [],
                  Z = s.length;
                if (!P) return L;
                c && (s = kt(s, qn(c))),
                  p
                    ? ((_ = fc), (E = !1))
                    : s.length >= f && ((_ = ii), (E = !1), (s = new ys(s)));
                e: for (; ++g < P; ) {
                  var te = n[g],
                    se = c == null ? te : c(te);
                  if (((te = p || te !== 0 ? te : 0), E && se === se)) {
                    for (var ye = Z; ye--; ) if (s[ye] === se) continue e;
                    L.push(te);
                  } else _(s, se, p) || L.push(te);
                }
                return L;
              }
              var Xr = Jd(ur),
                $d = Jd(Mi, !0);
              function Ir(n, s) {
                var c = !0;
                return (
                  Xr(n, function (p, g, _) {
                    return (c = !!s(p, g, _)), c;
                  }),
                  c
                );
              }
              function Ss(n, s, c) {
                for (var p = -1, g = n.length; ++p < g; ) {
                  var _ = n[p],
                    E = s(_);
                  if (E != null && (P === r ? E === E && !br(E) : c(E, P)))
                    var P = E,
                      L = _;
                }
                return L;
              }
              function Pl(n, s, c, p) {
                var g = n.length;
                for (
                  c = et(c),
                    c < 0 && (c = -c > g ? 0 : g + c),
                    p = p === r || p > g ? g : et(p),
                    p < 0 && (p += g),
                    p = c > p ? 0 : Wg(p);
                  c < p;

                )
                  n[c++] = s;
                return n;
              }
              function xs(n, s) {
                var c = [];
                return (
                  Xr(n, function (p, g, _) {
                    s(p, g, _) && c.push(p);
                  }),
                  c
                );
              }
              function Kt(n, s, c, p, g) {
                var _ = -1,
                  E = n.length;
                for (c || (c = Gp), g || (g = []); ++_ < E; ) {
                  var P = n[_];
                  s > 0 && c(P)
                    ? s > 1
                      ? Kt(P, s - 1, c, p, g)
                      : Ri(g, P)
                    : p || (g[g.length] = P);
                }
                return g;
              }
              var da = Gc(),
                Rl = Gc(!0);
              function ur(n, s) {
                return n && da(n, s, xn);
              }
              function Mi(n, s) {
                return n && Rl(n, s, xn);
              }
              function An(n, s) {
                return Pi(s, function (c) {
                  return Os(n[c]);
                });
              }
              function Jn(n, s) {
                s = ci(s, n);
                for (var c = 0, p = s.length; n != null && c < p; )
                  n = n[Or(s[c++])];
                return c && c == p ? n : r;
              }
              function Al(n, s, c) {
                var p = s(n);
                return Ze(n) ? p : Ri(p, c(n));
              }
              function gn(n) {
                return n == null
                  ? n === r
                    ? Sr
                    : Le
                  : ps && ps in Et(n)
                    ? rh(n)
                    : uh(n);
              }
              function kr(n, s) {
                return n > s;
              }
              function Fi(n, s) {
                return n != null && ct.call(n, s);
              }
              function Rc(n, s) {
                return n != null && s in Et(n);
              }
              function Ud(n, s, c) {
                return n >= fn(s, c) && n < Wt(s, c);
              }
              function Pr(n, s, c) {
                for (
                  var p = c ? fc : sl,
                    g = n[0].length,
                    _ = n.length,
                    E = _,
                    P = U(_),
                    L = 1 / 0,
                    Z = [];
                  E--;

                ) {
                  var te = n[E];
                  E && s && (te = kt(te, qn(s))),
                    (L = fn(te.length, L)),
                    (P[E] =
                      !c && (s || (g >= 120 && te.length >= 120))
                        ? new ys(E && te)
                        : r);
                }
                te = n[0];
                var se = -1,
                  ye = P[0];
                e: for (; ++se < g && Z.length < L; ) {
                  var be = te[se],
                    Ue = s ? s(be) : be;
                  if (
                    ((be = c || be !== 0 ? be : 0),
                    !(ye ? ii(ye, Ue) : p(Z, Ue, c)))
                  ) {
                    for (E = _; --E; ) {
                      var tt = P[E];
                      if (!(tt ? ii(tt, Ue) : p(n[E], Ue, c))) continue e;
                    }
                    ye && ye.push(Ue), Z.push(be);
                  }
                }
                return Z;
              }
              function Bi(n, s, c, p) {
                return (
                  ur(n, function (g, _, E) {
                    s(p, c(g), _, E);
                  }),
                  p
                );
              }
              function ji(n, s, c) {
                (s = ci(s, n)), (n = Yl(n, s));
                var p = n == null ? n : n[Or(Yt(s))];
                return p == null ? r : Pn(p, n, c);
              }
              function Ac(n) {
                return Ht(n) && gn(n) == ze;
              }
              function Ol(n) {
                return Ht(n) && gn(n) == zr;
              }
              function Wd(n) {
                return Ht(n) && gn(n) == Se;
              }
              function oo(n, s, c, p, g) {
                return n === s
                  ? !0
                  : n == null || s == null || (!Ht(n) && !Ht(s))
                    ? n !== n && s !== s
                    : Oc(n, s, c, p, oo, g);
              }
              function Oc(n, s, c, p, g, _) {
                var E = Ze(n),
                  P = Ze(s),
                  L = E ? $e : wn(n),
                  Z = P ? $e : wn(s);
                (L = L == ze ? Je : L), (Z = Z == ze ? Je : Z);
                var te = L == Je,
                  se = Z == Je,
                  ye = L == Z;
                if (ye && Eo(n)) {
                  if (!Eo(s)) return !1;
                  (E = !0), (te = !1);
                }
                if (ye && !te)
                  return (
                    _ || (_ = new pn()),
                    E || vu(n) ? Kl(n, s, c, p, g, _) : nh(n, s, L, c, p, g, _)
                  );
                if (!(c & $)) {
                  var be = te && ct.call(n, "__wrapped__"),
                    Ue = se && ct.call(s, "__wrapped__");
                  if (be || Ue) {
                    var tt = be ? n.value() : n,
                      We = Ue ? s.value() : s;
                    return _ || (_ = new pn()), g(tt, We, c, p, _);
                  }
                }
                return ye ? (_ || (_ = new pn()), Jc(n, s, c, p, g, _)) : !1;
              }
              function Nl(n) {
                return Ht(n) && wn(n) == ke;
              }
              function bl(n, s, c, p) {
                var g = c.length,
                  _ = g,
                  E = !p;
                if (n == null) return !_;
                for (n = Et(n); g--; ) {
                  var P = c[g];
                  if (E && P[2] ? P[1] !== n[P[0]] : !(P[0] in n)) return !1;
                }
                for (; ++g < _; ) {
                  P = c[g];
                  var L = P[0],
                    Z = n[L],
                    te = P[1];
                  if (E && P[2]) {
                    if (Z === r && !(L in n)) return !1;
                  } else {
                    var se = new pn();
                    if (p) var ye = p(Z, te, L, n, s, se);
                    if (!(ye === r ? oo(te, Z, $ | B, p, se) : ye)) return !1;
                  }
                }
                return !0;
              }
              function Nc(n) {
                if (!zt(n) || ef(n)) return !1;
                var s = Os(n) ? Od : Yf;
                return s.test(Hi(n));
              }
              function Gd(n) {
                return Ht(n) && gn(n) == xt;
              }
              function bc(n) {
                return Ht(n) && wn(n) == gt;
              }
              function ha(n) {
                return Ht(n) && Ih(n.length) && !!St[gn(n)];
              }
              function pa(n) {
                return typeof n == "function"
                  ? n
                  : n == null
                    ? mr
                    : typeof n == "object"
                      ? Ze(n)
                        ? Rr(n[0], n[1])
                        : ao(n)
                      : e0(n);
              }
              function Tl(n) {
                if (!Pa(n)) return Ys(n);
                var s = [];
                for (var c in Et(n))
                  ct.call(n, c) && c != "constructor" && s.push(c);
                return s;
              }
              function Hd(n) {
                if (!zt(n)) return lh(n);
                var s = Pa(n),
                  c = [];
                for (var p in n)
                  (p == "constructor" && (s || !ct.call(n, p))) || c.push(p);
                return c;
              }
              function zi(n, s) {
                return n < s;
              }
              function Tc(n, s) {
                var c = -1,
                  p = hr(n) ? U(n.length) : [];
                return (
                  Xr(n, function (g, _, E) {
                    p[++c] = s(g, _, E);
                  }),
                  p
                );
              }
              function ao(n) {
                var s = Jl(n);
                return s.length == 1 && s[0][2]
                  ? Ra(s[0][0], s[0][1])
                  : function (c) {
                      return c === n || bl(c, n, s);
                    };
              }
              function Rr(n, s) {
                return Zc(n) && vo(s)
                  ? Ra(Or(n), s)
                  : function (c) {
                      var p = lm(c, n);
                      return p === r && p === s ? um(c, n) : oo(s, p, $ | B);
                    };
              }
              function $i(n, s, c, p, g) {
                n !== s &&
                  da(
                    s,
                    function (_, E) {
                      if ((g || (g = new pn()), zt(_)))
                        ma(n, s, E, c, $i, p, g);
                      else {
                        var P = p ? p(Xn(n, E), _, E + "", n, s, g) : r;
                        P === r && (P = _), ca(n, E, P);
                      }
                    },
                    pr,
                  );
              }
              function ma(n, s, c, p, g, _, E) {
                var P = Xn(n, c),
                  L = Xn(s, c),
                  Z = E.get(L);
                if (Z) {
                  ca(n, c, Z);
                  return;
                }
                var te = _ ? _(P, L, c + "", n, s, E) : r,
                  se = te === r;
                if (se) {
                  var ye = Ze(L),
                    be = !ye && Eo(L),
                    Ue = !ye && !be && vu(L);
                  (te = L),
                    ye || be || Ue
                      ? Ze(P)
                        ? (te = P)
                        : Zt(P)
                          ? (te = On(P))
                          : be
                            ? ((se = !1), (te = jc(L, !0)))
                            : Ue
                              ? ((se = !1), (te = $c(L, !0)))
                              : (te = [])
                      : xf(L) || La(L)
                        ? ((te = P),
                          La(P)
                            ? (te = Gg(P))
                            : (!zt(P) || Os(P)) && (te = yo(L)))
                        : (se = !1);
                }
                se && (E.set(L, te), g(te, L, p, _, E), E.delete(L)),
                  ca(n, c, te);
              }
              function Ui(n, s) {
                var c = n.length;
                if (c) return (s += s < 0 ? c : 0), cr(s, c) ? n[s] : r;
              }
              function Ll(n, s, c) {
                s.length
                  ? (s = kt(s, function (_) {
                      return Ze(_)
                        ? function (E) {
                            return Jn(E, _.length === 1 ? _[0] : _);
                          }
                        : _;
                    }))
                  : (s = [mr]);
                var p = -1;
                s = kt(s, qn(De()));
                var g = Tc(n, function (_, E, P) {
                  var L = kt(s, function (Z) {
                    return Z(_);
                  });
                  return { criteria: L, index: ++p, value: _ };
                });
                return Op(g, function (_, E) {
                  return Vd(_, E, c);
                });
              }
              function lo(n, s) {
                return Lc(n, s, function (c, p) {
                  return um(n, p);
                });
              }
              function Lc(n, s, c) {
                for (var p = -1, g = s.length, _ = {}; ++p < g; ) {
                  var E = s[p],
                    P = Jn(n, E);
                  c(P, E) && Mt(_, ci(E, n), P);
                }
                return _;
              }
              function Dc(n) {
                return function (s) {
                  return Jn(s, n);
                };
              }
              function bt(n, s, c, p) {
                var g = p ? pc : Hs,
                  _ = -1,
                  E = s.length,
                  P = n;
                for (n === s && (s = On(s)), c && (P = kt(n, qn(c))); ++_ < E; )
                  for (
                    var L = 0, Z = s[_], te = c ? c(Z) : Z;
                    (L = g(P, te, L, p)) > -1;

                  )
                    P !== n && ml.call(P, L, 1), ml.call(n, L, 1);
                return n;
              }
              function ga(n, s) {
                for (var c = n ? s.length : 0, p = c - 1; c--; ) {
                  var g = s[c];
                  if (c == p || g !== _) {
                    var _ = g;
                    cr(g) ? ml.call(n, g, 1) : Cs(n, g);
                  }
                }
                return n;
              }
              function ya(n, s) {
                return n + Oi(oa() * (s - n + 1));
              }
              function Mc(n, s, c, p) {
                for (
                  var g = -1, _ = Wt(ms((s - n) / (c || 1)), 0), E = U(_);
                  _--;

                )
                  (E[p ? _ : ++g] = n), (n += c);
                return E;
              }
              function uo(n, s) {
                var c = "";
                if (!n || s < 1 || s > j) return c;
                do s % 2 && (c += n), (s = Oi(s / 2)), s && (n += n);
                while (s);
                return c;
              }
              function Ye(n, s) {
                return Zl(Xl(n, s, mr), n + "");
              }
              function Es(n) {
                return Vr(wu(n));
              }
              function Dt(n, s) {
                var c = wu(n);
                return Yn(c, ui(s, 0, c.length));
              }
              function Mt(n, s, c, p) {
                if (!zt(n)) return n;
                s = ci(s, n);
                for (
                  var g = -1, _ = s.length, E = _ - 1, P = n;
                  P != null && ++g < _;

                ) {
                  var L = Or(s[g]),
                    Z = c;
                  if (
                    L === "__proto__" ||
                    L === "constructor" ||
                    L === "prototype"
                  )
                    return n;
                  if (g != E) {
                    var te = P[L];
                    (Z = p ? p(te, L, P) : r),
                      Z === r && (Z = zt(te) ? te : cr(s[g + 1]) ? [] : {});
                  }
                  _s(P, L, Z), (P = P[L]);
                }
                return n;
              }
              var Vt = wl
                  ? function (n, s) {
                      return wl.set(n, s), n;
                    }
                  : mr,
                Dl = sa
                  ? function (n, s) {
                      return sa(n, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: fm(s),
                        writable: !0,
                      });
                    }
                  : mr;
              function va(n) {
                return Yn(wu(n));
              }
              function yn(n, s, c) {
                var p = -1,
                  g = n.length;
                s < 0 && (s = -s > g ? 0 : g + s),
                  (c = c > g ? g : c),
                  c < 0 && (c += g),
                  (g = s > c ? 0 : (c - s) >>> 0),
                  (s >>>= 0);
                for (var _ = U(g); ++p < g; ) _[p] = n[p + s];
                return _;
              }
              function zp(n, s) {
                var c;
                return (
                  Xr(n, function (p, g, _) {
                    return (c = s(p, g, _)), !c;
                  }),
                  !!c
                );
              }
              function Qt(n, s, c) {
                var p = 0,
                  g = n == null ? p : n.length;
                if (typeof s == "number" && s === s && g <= Qe) {
                  for (; p < g; ) {
                    var _ = (p + g) >>> 1,
                      E = n[_];
                    E !== null && !br(E) && (c ? E <= s : E < s)
                      ? (p = _ + 1)
                      : (g = _);
                  }
                  return g;
                }
                return wa(n, s, mr, c);
              }
              function wa(n, s, c, p) {
                var g = 0,
                  _ = n == null ? 0 : n.length;
                if (_ === 0) return 0;
                s = c(s);
                for (
                  var E = s !== s, P = s === null, L = br(s), Z = s === r;
                  g < _;

                ) {
                  var te = Oi((g + _) / 2),
                    se = c(n[te]),
                    ye = se !== r,
                    be = se === null,
                    Ue = se === se,
                    tt = br(se);
                  if (E) var We = p || Ue;
                  else
                    Z
                      ? (We = Ue && (p || ye))
                      : P
                        ? (We = Ue && ye && (p || !be))
                        : L
                          ? (We = Ue && ye && !be && (p || !tt))
                          : be || tt
                            ? (We = !1)
                            : (We = p ? se <= s : se < s);
                  We ? (g = te + 1) : (_ = te);
                }
                return fn(_, pe);
              }
              function Ml(n, s) {
                for (var c = -1, p = n.length, g = 0, _ = []; ++c < p; ) {
                  var E = n[c],
                    P = s ? s(E) : E;
                  if (!c || !gi(P, L)) {
                    var L = P;
                    _[g++] = E === 0 ? 0 : E;
                  }
                }
                return _;
              }
              function Fl(n) {
                return typeof n == "number" ? n : br(n) ? C : +n;
              }
              function Ft(n) {
                if (typeof n == "string") return n;
                if (Ze(n)) return kt(n, Ft) + "";
                if (br(n)) return _l ? _l.call(n) : "";
                var s = n + "";
                return s == "0" && 1 / n == -xe ? "-0" : s;
              }
              function Jt(n, s, c) {
                var p = -1,
                  g = sl,
                  _ = n.length,
                  E = !0,
                  P = [],
                  L = P;
                if (c) (E = !1), (g = fc);
                else if (_ >= f) {
                  var Z = s ? null : Nn(n);
                  if (Z) return Ai(Z);
                  (E = !1), (g = ii), (L = new ys());
                } else L = s ? [] : P;
                e: for (; ++p < _; ) {
                  var te = n[p],
                    se = s ? s(te) : te;
                  if (((te = c || te !== 0 ? te : 0), E && se === se)) {
                    for (var ye = L.length; ye--; )
                      if (L[ye] === se) continue e;
                    s && L.push(se), P.push(te);
                  } else g(L, se, c) || (L !== P && L.push(se), P.push(te));
                }
                return P;
              }
              function Cs(n, s) {
                return (
                  (s = ci(s, n)),
                  (n = Yl(n, s)),
                  n == null || delete n[Or(Yt(s))]
                );
              }
              function Bl(n, s, c, p) {
                return Mt(n, s, c(Jn(n, s)), p);
              }
              function co(n, s, c, p) {
                for (
                  var g = n.length, _ = p ? g : -1;
                  (p ? _-- : ++_ < g) && s(n[_], _, n);

                );
                return c
                  ? yn(n, p ? 0 : _, p ? _ + 1 : g)
                  : yn(n, p ? _ + 1 : 0, p ? g : _);
              }
              function Fc(n, s) {
                var c = n;
                return (
                  c instanceof Xe && (c = c.value()),
                  dc(
                    s,
                    function (p, g) {
                      return g.func.apply(g.thisArg, Ri([p], g.args));
                    },
                    c,
                  )
                );
              }
              function jl(n, s, c) {
                var p = n.length;
                if (p < 2) return p ? Jt(n[0]) : [];
                for (var g = -1, _ = U(p); ++g < p; )
                  for (var E = n[g], P = -1; ++P < p; )
                    P != g && (_[g] = Jr(_[g] || E, n[P], s, c));
                return Jt(Kt(_, 1), s, c);
              }
              function Bc(n, s, c) {
                for (
                  var p = -1, g = n.length, _ = s.length, E = {};
                  ++p < g;

                ) {
                  var P = p < _ ? s[p] : r;
                  c(E, n[p], P);
                }
                return E;
              }
              function zl(n) {
                return Zt(n) ? n : [];
              }
              function $l(n) {
                return typeof n == "function" ? n : mr;
              }
              function ci(n, s) {
                return Ze(n) ? n : Zc(n, s) ? [n] : ch(Ct(n));
              }
              var qd = Ye;
              function fi(n, s, c) {
                var p = n.length;
                return (c = c === r ? p : c), !s && c >= p ? n : yn(n, s, c);
              }
              var fo =
                bd ||
                function (n) {
                  return Lt.clearTimeout(n);
                };
              function jc(n, s) {
                if (s) return n.slice();
                var c = n.length,
                  p = Sc ? Sc(c) : new n.constructor(c);
                return n.copy(p), p;
              }
              function ho(n) {
                var s = new n.constructor(n.byteLength);
                return new ia(s).set(new ia(n)), s;
              }
              function Ul(n, s) {
                var c = s ? ho(n.buffer) : n.buffer;
                return new n.constructor(c, n.byteOffset, n.byteLength);
              }
              function Kd(n) {
                var s = new n.constructor(n.source, Zu.exec(n));
                return (s.lastIndex = n.lastIndex), s;
              }
              function zc(n) {
                return Vn ? Et(Vn.call(n)) : {};
              }
              function $c(n, s) {
                var c = s ? ho(n.buffer) : n.buffer;
                return new n.constructor(c, n.byteOffset, n.length);
              }
              function Uc(n, s) {
                if (n !== s) {
                  var c = n !== r,
                    p = n === null,
                    g = n === n,
                    _ = br(n),
                    E = s !== r,
                    P = s === null,
                    L = s === s,
                    Z = br(s);
                  if (
                    (!P && !Z && !_ && n > s) ||
                    (_ && E && L && !P && !Z) ||
                    (p && E && L) ||
                    (!c && L) ||
                    !g
                  )
                    return 1;
                  if (
                    (!p && !_ && !Z && n < s) ||
                    (Z && c && g && !p && !_) ||
                    (P && c && g) ||
                    (!E && g) ||
                    !L
                  )
                    return -1;
                }
                return 0;
              }
              function Vd(n, s, c) {
                for (
                  var p = -1,
                    g = n.criteria,
                    _ = s.criteria,
                    E = g.length,
                    P = c.length;
                  ++p < E;

                ) {
                  var L = Uc(g[p], _[p]);
                  if (L) {
                    if (p >= P) return L;
                    var Z = c[p];
                    return L * (Z == "desc" ? -1 : 1);
                  }
                }
                return n.index - s.index;
              }
              function Wc(n, s, c, p) {
                for (
                  var g = -1,
                    _ = n.length,
                    E = c.length,
                    P = -1,
                    L = s.length,
                    Z = Wt(_ - E, 0),
                    te = U(L + Z),
                    se = !p;
                  ++P < L;

                )
                  te[P] = s[P];
                for (; ++g < E; ) (se || g < _) && (te[c[g]] = n[g]);
                for (; Z--; ) te[P++] = n[g++];
                return te;
              }
              function Wl(n, s, c, p) {
                for (
                  var g = -1,
                    _ = n.length,
                    E = -1,
                    P = c.length,
                    L = -1,
                    Z = s.length,
                    te = Wt(_ - P, 0),
                    se = U(te + Z),
                    ye = !p;
                  ++g < te;

                )
                  se[g] = n[g];
                for (var be = g; ++L < Z; ) se[be + L] = s[L];
                for (; ++E < P; ) (ye || g < _) && (se[be + c[E]] = n[g++]);
                return se;
              }
              function On(n, s) {
                var c = -1,
                  p = n.length;
                for (s || (s = U(p)); ++c < p; ) s[c] = n[c];
                return s;
              }
              function Ar(n, s, c, p) {
                var g = !c;
                c || (c = {});
                for (var _ = -1, E = s.length; ++_ < E; ) {
                  var P = s[_],
                    L = p ? p(c[P], n[P], P, c, n) : r;
                  L === r && (L = n[P]), g ? Qr(c, P, L) : _s(c, P, L);
                }
                return c;
              }
              function Qd(n, s) {
                return Ar(n, go(n), s);
              }
              function $p(n, s) {
                return Ar(n, ei(n), s);
              }
              function _a(n, s) {
                return function (c, p) {
                  var g = Ze(c) ? uc : Qn,
                    _ = s ? s() : {};
                  return g(c, n, De(p, 2), _);
                };
              }
              function po(n) {
                return Ye(function (s, c) {
                  var p = -1,
                    g = c.length,
                    _ = g > 1 ? c[g - 1] : r,
                    E = g > 2 ? c[2] : r;
                  for (
                    _ = n.length > 3 && typeof _ == "function" ? (g--, _) : r,
                      E && wt(c[0], c[1], E) && ((_ = g < 3 ? r : _), (g = 1)),
                      s = Et(s);
                    ++p < g;

                  ) {
                    var P = c[p];
                    P && n(s, P, p, _);
                  }
                  return s;
                });
              }
              function Jd(n, s) {
                return function (c, p) {
                  if (c == null) return c;
                  if (!hr(c)) return n(c, p);
                  for (
                    var g = c.length, _ = s ? g : -1, E = Et(c);
                    (s ? _-- : ++_ < g) && p(E[_], _, E) !== !1;

                  );
                  return c;
                };
              }
              function Gc(n) {
                return function (s, c, p) {
                  for (var g = -1, _ = Et(s), E = p(s), P = E.length; P--; ) {
                    var L = E[n ? P : ++g];
                    if (c(_[L], L, _) === !1) break;
                  }
                  return s;
                };
              }
              function Xd(n, s, c) {
                var p = s & z,
                  g = Sa(n);
                function _() {
                  var E = this && this !== Lt && this instanceof _ ? g : n;
                  return E.apply(p ? c : this, arguments);
                }
                return _;
              }
              function Hc(n) {
                return function (s) {
                  s = Ct(s);
                  var c = Ks(s) ? Kn(s) : r,
                    p = c ? c[0] : s.charAt(0),
                    g = c ? fi(c, 1).join("") : s.slice(1);
                  return p[n]() + g;
                };
              }
              function di(n) {
                return function (s) {
                  return dc(Yg(Xg(s).replace(xp, "")), n, "");
                };
              }
              function Sa(n) {
                return function () {
                  var s = arguments;
                  switch (s.length) {
                    case 0:
                      return new n();
                    case 1:
                      return new n(s[0]);
                    case 2:
                      return new n(s[0], s[1]);
                    case 3:
                      return new n(s[0], s[1], s[2]);
                    case 4:
                      return new n(s[0], s[1], s[2], s[3]);
                    case 5:
                      return new n(s[0], s[1], s[2], s[3], s[4]);
                    case 6:
                      return new n(s[0], s[1], s[2], s[3], s[4], s[5]);
                    case 7:
                      return new n(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
                  }
                  var c = no(n.prototype),
                    p = n.apply(c, s);
                  return zt(p) ? p : c;
                };
              }
              function Up(n, s, c) {
                var p = Sa(n);
                function g() {
                  for (
                    var _ = arguments.length, E = U(_), P = _, L = Wi(g);
                    P--;

                  )
                    E[P] = arguments[P];
                  var Z = _ < 3 && E[0] !== L && E[_ - 1] !== L ? [] : ir(E, L);
                  if (((_ -= Z.length), _ < c))
                    return eh(n, s, mo, g.placeholder, r, E, Z, r, r, c - _);
                  var te = this && this !== Lt && this instanceof g ? p : n;
                  return Pn(te, this, E);
                }
                return g;
              }
              function Yd(n) {
                return function (s, c, p) {
                  var g = Et(s);
                  if (!hr(s)) {
                    var _ = De(c, 3);
                    (s = xn(s)),
                      (c = function (P) {
                        return _(g[P], P, g);
                      });
                  }
                  var E = n(s, c, p);
                  return E > -1 ? g[_ ? s[E] : E] : r;
                };
              }
              function Is(n) {
                return Zr(function (s) {
                  var c = s.length,
                    p = c,
                    g = dn.prototype.thru;
                  for (n && s.reverse(); p--; ) {
                    var _ = s[p];
                    if (typeof _ != "function") throw new sr(v);
                    if (g && !E && ka(_) == "wrapper") var E = new dn([], !0);
                  }
                  for (p = E ? p : c; ++p < c; ) {
                    _ = s[p];
                    var P = ka(_),
                      L = P == "wrapper" ? Ia(_) : r;
                    L &&
                    Gi(L[0]) &&
                    L[1] == (de | J | ee | A) &&
                    !L[4].length &&
                    L[9] == 1
                      ? (E = E[ka(L[0])].apply(E, L[3]))
                      : (E = _.length == 1 && Gi(_) ? E[P]() : E.thru(_));
                  }
                  return function () {
                    var Z = arguments,
                      te = Z[0];
                    if (E && Z.length == 1 && Ze(te))
                      return E.plant(te).value();
                    for (
                      var se = 0, ye = c ? s[se].apply(this, Z) : te;
                      ++se < c;

                    )
                      ye = s[se].call(this, ye);
                    return ye;
                  };
                });
              }
              function mo(n, s, c, p, g, _, E, P, L, Z) {
                var te = s & de,
                  se = s & z,
                  ye = s & Y,
                  be = s & (J | Q),
                  Ue = s & je,
                  tt = ye ? r : Sa(n);
                function We() {
                  for (var it = arguments.length, at = U(it), Tr = it; Tr--; )
                    at[Tr] = arguments[Tr];
                  if (be)
                    var tr = Wi(We),
                      Lr = xd(at, tr);
                  if (
                    (p && (at = Wc(at, p, g, be)),
                    _ && (at = Wl(at, _, E, be)),
                    (it -= Lr),
                    be && it < Z)
                  ) {
                    var en = ir(at, tr);
                    return eh(
                      n,
                      s,
                      mo,
                      We.placeholder,
                      c,
                      at,
                      en,
                      P,
                      L,
                      Z - it,
                    );
                  }
                  var yi = se ? c : this,
                    bs = ye ? yi[n] : n;
                  return (
                    (it = at.length),
                    P ? (at = on(at, P)) : Ue && it > 1 && at.reverse(),
                    te && L < it && (at.length = L),
                    this &&
                      this !== Lt &&
                      this instanceof We &&
                      (bs = tt || Sa(bs)),
                    bs.apply(yi, at)
                  );
                }
                return We;
              }
              function Gl(n, s) {
                return function (c, p) {
                  return Bi(c, n, s(p), {});
                };
              }
              function Hl(n, s) {
                return function (c, p) {
                  var g;
                  if (c === r && p === r) return s;
                  if ((c !== r && (g = c), p !== r)) {
                    if (g === r) return p;
                    typeof c == "string" || typeof p == "string"
                      ? ((c = Ft(c)), (p = Ft(p)))
                      : ((c = Fl(c)), (p = Fl(p))),
                      (g = n(c, p));
                  }
                  return g;
                };
              }
              function ql(n) {
                return Zr(function (s) {
                  return (
                    (s = kt(s, qn(De()))),
                    Ye(function (c) {
                      var p = this;
                      return n(s, function (g) {
                        return Pn(g, p, c);
                      });
                    })
                  );
                });
              }
              function xa(n, s) {
                s = s === r ? " " : Ft(s);
                var c = s.length;
                if (c < 2) return c ? uo(s, n) : s;
                var p = uo(s, ms(n / hs(s)));
                return Ks(s) ? fi(Kn(p), 0, n).join("") : p.slice(0, n);
              }
              function Zd(n, s, c, p) {
                var g = s & z,
                  _ = Sa(n);
                function E() {
                  for (
                    var P = -1,
                      L = arguments.length,
                      Z = -1,
                      te = p.length,
                      se = U(te + L),
                      ye = this && this !== Lt && this instanceof E ? _ : n;
                    ++Z < te;

                  )
                    se[Z] = p[Z];
                  for (; L--; ) se[Z++] = arguments[++P];
                  return Pn(ye, g ? c : this, se);
                }
                return E;
              }
              function qc(n) {
                return function (s, c, p) {
                  return (
                    p && typeof p != "number" && wt(s, c, p) && (c = p = r),
                    (s = Ns(s)),
                    c === r ? ((c = s), (s = 0)) : (c = Ns(c)),
                    (p = p === r ? (s < c ? 1 : -1) : Ns(p)),
                    Mc(s, c, p, n)
                  );
                };
              }
              function Ea(n) {
                return function (s, c) {
                  return (
                    (typeof s == "string" && typeof c == "string") ||
                      ((s = ti(s)), (c = ti(c))),
                    n(s, c)
                  );
                };
              }
              function eh(n, s, c, p, g, _, E, P, L, Z) {
                var te = s & J,
                  se = te ? E : r,
                  ye = te ? r : E,
                  be = te ? _ : r,
                  Ue = te ? r : _;
                (s |= te ? ee : fe),
                  (s &= ~(te ? fe : ee)),
                  s & K || (s &= ~(z | Y));
                var tt = [n, s, g, be, se, Ue, ye, P, L, Z],
                  We = c.apply(r, tt);
                return Gi(n) && pi(We, tt), (We.placeholder = p), fr(We, n, s);
              }
              function vn(n) {
                var s = Ut[n];
                return function (c, p) {
                  if (
                    ((c = ti(c)),
                    (p = p == null ? 0 : fn(et(p), 292)),
                    p && Xs(c))
                  ) {
                    var g = (Ct(c) + "e").split("e"),
                      _ = s(g[0] + "e" + (+g[1] + p));
                    return (
                      (g = (Ct(_) + "e").split("e")),
                      +(g[0] + "e" + (+g[1] - p))
                    );
                  }
                  return s(c);
                };
              }
              var Nn =
                Ni && 1 / Ai(new Ni([, -0]))[1] == xe
                  ? function (n) {
                      return new Ni(n);
                    }
                  : pm;
              function Kc(n) {
                return function (s) {
                  var c = wn(s);
                  return c == ke ? ll(s) : c == gt ? Lp(s) : Np(s, n(s));
                };
              }
              function Yr(n, s, c, p, g, _, E, P) {
                var L = s & Y;
                if (!L && typeof n != "function") throw new sr(v);
                var Z = p ? p.length : 0;
                if (
                  (Z || ((s &= ~(ee | fe)), (p = g = r)),
                  (E = E === r ? E : Wt(et(E), 0)),
                  (P = P === r ? P : et(P)),
                  (Z -= g ? g.length : 0),
                  s & fe)
                ) {
                  var te = p,
                    se = g;
                  p = g = r;
                }
                var ye = L ? r : Ia(n),
                  be = [n, s, c, p, g, te, se, _, E, P];
                if (
                  (ye && ah(be, ye),
                  (n = be[0]),
                  (s = be[1]),
                  (c = be[2]),
                  (p = be[3]),
                  (g = be[4]),
                  (P = be[9] =
                    be[9] === r ? (L ? 0 : n.length) : Wt(be[9] - Z, 0)),
                  !P && s & (J | Q) && (s &= ~(J | Q)),
                  !s || s == z)
                )
                  var Ue = Xd(n, s, c);
                else
                  s == J || s == Q
                    ? (Ue = Up(n, s, P))
                    : (s == ee || s == (z | ee)) && !g.length
                      ? (Ue = Zd(n, s, c, p))
                      : (Ue = mo.apply(r, be));
                var tt = ye ? Vt : pi;
                return fr(tt(Ue, be), n, s);
              }
              function Vc(n, s, c, p) {
                return n === r || (gi(n, Gr[c]) && !ct.call(p, c)) ? s : n;
              }
              function Qc(n, s, c, p, g, _) {
                return (
                  zt(n) &&
                    zt(s) &&
                    (_.set(s, n), $i(n, s, r, Qc, _), _.delete(s)),
                  n
                );
              }
              function th(n) {
                return xf(n) ? r : n;
              }
              function Kl(n, s, c, p, g, _) {
                var E = c & $,
                  P = n.length,
                  L = s.length;
                if (P != L && !(E && L > P)) return !1;
                var Z = _.get(n),
                  te = _.get(s);
                if (Z && te) return Z == s && te == n;
                var se = -1,
                  ye = !0,
                  be = c & B ? new ys() : r;
                for (_.set(n, s), _.set(s, n); ++se < P; ) {
                  var Ue = n[se],
                    tt = s[se];
                  if (p)
                    var We = E
                      ? p(tt, Ue, se, s, n, _)
                      : p(Ue, tt, se, n, s, _);
                  if (We !== r) {
                    if (We) continue;
                    ye = !1;
                    break;
                  }
                  if (be) {
                    if (
                      !hc(s, function (it, at) {
                        if (!ii(be, at) && (Ue === it || g(Ue, it, c, p, _)))
                          return be.push(at);
                      })
                    ) {
                      ye = !1;
                      break;
                    }
                  } else if (!(Ue === tt || g(Ue, tt, c, p, _))) {
                    ye = !1;
                    break;
                  }
                }
                return _.delete(n), _.delete(s), ye;
              }
              function nh(n, s, c, p, g, _, E) {
                switch (c) {
                  case Mn:
                    if (
                      n.byteLength != s.byteLength ||
                      n.byteOffset != s.byteOffset
                    )
                      return !1;
                    (n = n.buffer), (s = s.buffer);
                  case zr:
                    return !(
                      n.byteLength != s.byteLength || !_(new ia(n), new ia(s))
                    );
                  case Ee:
                  case Se:
                  case Oe:
                    return gi(+n, +s);
                  case pt:
                    return n.name == s.name && n.message == s.message;
                  case xt:
                  case yt:
                    return n == s + "";
                  case ke:
                    var P = ll;
                  case gt:
                    var L = p & $;
                    if ((P || (P = Ai), n.size != s.size && !L)) return !1;
                    var Z = E.get(n);
                    if (Z) return Z == s;
                    (p |= B), E.set(n, s);
                    var te = Kl(P(n), P(s), p, g, _, E);
                    return E.delete(n), te;
                  case In:
                    if (Vn) return Vn.call(n) == Vn.call(s);
                }
                return !1;
              }
              function Jc(n, s, c, p, g, _) {
                var E = c & $,
                  P = Vl(n),
                  L = P.length,
                  Z = Vl(s),
                  te = Z.length;
                if (L != te && !E) return !1;
                for (var se = L; se--; ) {
                  var ye = P[se];
                  if (!(E ? ye in s : ct.call(s, ye))) return !1;
                }
                var be = _.get(n),
                  Ue = _.get(s);
                if (be && Ue) return be == s && Ue == n;
                var tt = !0;
                _.set(n, s), _.set(s, n);
                for (var We = E; ++se < L; ) {
                  ye = P[se];
                  var it = n[ye],
                    at = s[ye];
                  if (p)
                    var Tr = E
                      ? p(at, it, ye, s, n, _)
                      : p(it, at, ye, n, s, _);
                  if (!(Tr === r ? it === at || g(it, at, c, p, _) : Tr)) {
                    tt = !1;
                    break;
                  }
                  We || (We = ye == "constructor");
                }
                if (tt && !We) {
                  var tr = n.constructor,
                    Lr = s.constructor;
                  tr != Lr &&
                    "constructor" in n &&
                    "constructor" in s &&
                    !(
                      typeof tr == "function" &&
                      tr instanceof tr &&
                      typeof Lr == "function" &&
                      Lr instanceof Lr
                    ) &&
                    (tt = !1);
                }
                return _.delete(n), _.delete(s), tt;
              }
              function Zr(n) {
                return Zl(Xl(n, r, Aa), n + "");
              }
              function Vl(n) {
                return Al(n, xn, go);
              }
              function Ca(n) {
                return Al(n, pr, ei);
              }
              var Ia = wl
                ? function (n) {
                    return wl.get(n);
                  }
                : pm;
              function ka(n) {
                for (
                  var s = n.name + "",
                    c = eo[s],
                    p = ct.call(eo, s) ? c.length : 0;
                  p--;

                ) {
                  var g = c[p],
                    _ = g.func;
                  if (_ == null || _ == n) return g.name;
                }
                return s;
              }
              function Wi(n) {
                var s = ct.call(w, "placeholder") ? w : n;
                return s.placeholder;
              }
              function De() {
                var n = w.iteratee || dm;
                return (
                  (n = n === dm ? pa : n),
                  arguments.length ? n(arguments[0], arguments[1]) : n
                );
              }
              function Ql(n, s) {
                var c = n.__data__;
                return Ce(s)
                  ? c[typeof s == "string" ? "string" : "hash"]
                  : c.map;
              }
              function Jl(n) {
                for (var s = xn(n), c = s.length; c--; ) {
                  var p = s[c],
                    g = n[p];
                  s[c] = [p, g, vo(g)];
                }
                return s;
              }
              function hi(n, s) {
                var c = qs(n, s);
                return Nc(c) ? c : r;
              }
              function rh(n) {
                var s = ct.call(n, ps),
                  c = n[ps];
                try {
                  n[ps] = r;
                  var p = !0;
                } catch {}
                var g = na.call(n);
                return p && (s ? (n[ps] = c) : delete n[ps]), g;
              }
              var go = gl
                  ? function (n) {
                      return n == null
                        ? []
                        : ((n = Et(n)),
                          Pi(gl(n), function (s) {
                            return pl.call(n, s);
                          }));
                    }
                  : mm,
                ei = gl
                  ? function (n) {
                      for (var s = []; n; ) Ri(s, go(n)), (n = Er(n));
                      return s;
                    }
                  : mm,
                wn = gn;
              ((aa && wn(new aa(new ArrayBuffer(1))) != Mn) ||
                (gs && wn(new gs()) != ke) ||
                (la && wn(la.resolve()) != _t) ||
                (Ni && wn(new Ni()) != gt) ||
                (ua && wn(new ua()) != jr)) &&
                (wn = function (n) {
                  var s = gn(n),
                    c = s == Je ? n.constructor : r,
                    p = c ? Hi(c) : "";
                  if (p)
                    switch (p) {
                      case Cc:
                        return Mn;
                      case bi:
                        return ke;
                      case Ld:
                        return _t;
                      case to:
                        return gt;
                      case Hr:
                        return jr;
                    }
                  return s;
                });
              function ih(n, s, c) {
                for (var p = -1, g = c.length; ++p < g; ) {
                  var _ = c[p],
                    E = _.size;
                  switch (_.type) {
                    case "drop":
                      n += E;
                      break;
                    case "dropRight":
                      s -= E;
                      break;
                    case "take":
                      s = fn(s, n + E);
                      break;
                    case "takeRight":
                      n = Wt(n, s - E);
                      break;
                  }
                }
                return { start: n, end: s };
              }
              function Xc(n) {
                var s = n.match(qa);
                return s ? s[1].split(Yu) : [];
              }
              function Yc(n, s, c) {
                s = ci(s, n);
                for (var p = -1, g = s.length, _ = !1; ++p < g; ) {
                  var E = Or(s[p]);
                  if (!(_ = n != null && c(n, E))) break;
                  n = n[E];
                }
                return _ || ++p != g
                  ? _
                  : ((g = n == null ? 0 : n.length),
                    !!g && Ih(g) && cr(E, g) && (Ze(n) || La(n)));
              }
              function sh(n) {
                var s = n.length,
                  c = new n.constructor(s);
                return (
                  s &&
                    typeof n[0] == "string" &&
                    ct.call(n, "index") &&
                    ((c.index = n.index), (c.input = n.input)),
                  c
                );
              }
              function yo(n) {
                return typeof n.constructor == "function" && !Pa(n)
                  ? no(Er(n))
                  : {};
              }
              function _n(n, s, c) {
                var p = n.constructor;
                switch (s) {
                  case zr:
                    return ho(n);
                  case Ee:
                  case Se:
                    return new p(+n);
                  case Mn:
                    return Ul(n, c);
                  case rr:
                  case $r:
                  case Hn:
                  case jo:
                  case Wa:
                  case Ga:
                  case Hu:
                  case zo:
                  case $o:
                    return $c(n, c);
                  case ke:
                    return new p();
                  case Oe:
                  case yt:
                    return new p(n);
                  case xt:
                    return Kd(n);
                  case gt:
                    return new p();
                  case In:
                    return zc(n);
                }
              }
              function Wp(n, s) {
                var c = s.length;
                if (!c) return n;
                var p = c - 1;
                return (
                  (s[p] = (c > 1 ? "& " : "") + s[p]),
                  (s = s.join(c > 2 ? ", " : " ")),
                  n.replace(
                    Ha,
                    `{
/* [wrapped with ` +
                      s +
                      `] */
`,
                  )
                );
              }
              function Gp(n) {
                return Ze(n) || La(n) || !!(Nd && n && n[Nd]);
              }
              function cr(n, s) {
                var c = typeof n;
                return (
                  (s = s ?? j),
                  !!s &&
                    (c == "number" || (c != "symbol" && ed.test(n))) &&
                    n > -1 &&
                    n % 1 == 0 &&
                    n < s
                );
              }
              function wt(n, s, c) {
                if (!zt(c)) return !1;
                var p = typeof s;
                return (
                  p == "number"
                    ? hr(c) && cr(s, c.length)
                    : p == "string" && s in c
                )
                  ? gi(c[s], n)
                  : !1;
              }
              function Zc(n, s) {
                if (Ze(n)) return !1;
                var c = typeof n;
                return c == "number" ||
                  c == "symbol" ||
                  c == "boolean" ||
                  n == null ||
                  br(n)
                  ? !0
                  : Jf.test(n) || !Ju.test(n) || (s != null && n in Et(s));
              }
              function Ce(n) {
                var s = typeof n;
                return s == "string" ||
                  s == "number" ||
                  s == "symbol" ||
                  s == "boolean"
                  ? n !== "__proto__"
                  : n === null;
              }
              function Gi(n) {
                var s = ka(n),
                  c = w[s];
                if (typeof c != "function" || !(s in Xe.prototype)) return !1;
                if (n === c) return !0;
                var p = Ia(c);
                return !!p && n === p[0];
              }
              function ef(n) {
                return !!fl && fl in n;
              }
              var oh = Qs ? Os : gm;
              function Pa(n) {
                var s = n && n.constructor,
                  c = (typeof s == "function" && s.prototype) || Gr;
                return n === c;
              }
              function vo(n) {
                return n === n && !zt(n);
              }
              function Ra(n, s) {
                return function (c) {
                  return c == null ? !1 : c[n] === s && (s !== r || n in Et(c));
                };
              }
              function tf(n) {
                var s = O(n, function (p) {
                    return c.size === M && c.clear(), p;
                  }),
                  c = s.cache;
                return s;
              }
              function ah(n, s) {
                var c = n[1],
                  p = s[1],
                  g = c | p,
                  _ = g < (z | Y | de),
                  E =
                    (p == de && c == J) ||
                    (p == de && c == A && n[7].length <= s[8]) ||
                    (p == (de | A) && s[7].length <= s[8] && c == J);
                if (!(_ || E)) return n;
                p & z && ((n[2] = s[2]), (g |= c & z ? 0 : K));
                var P = s[3];
                if (P) {
                  var L = n[3];
                  (n[3] = L ? Wc(L, P, s[4]) : P),
                    (n[4] = L ? ir(n[3], G) : s[4]);
                }
                return (
                  (P = s[5]),
                  P &&
                    ((L = n[5]),
                    (n[5] = L ? Wl(L, P, s[6]) : P),
                    (n[6] = L ? ir(n[5], G) : s[6])),
                  (P = s[7]),
                  P && (n[7] = P),
                  p & de && (n[8] = n[8] == null ? s[8] : fn(n[8], s[8])),
                  n[9] == null && (n[9] = s[9]),
                  (n[0] = s[0]),
                  (n[1] = g),
                  n
                );
              }
              function lh(n) {
                var s = [];
                if (n != null) for (var c in Et(n)) s.push(c);
                return s;
              }
              function uh(n) {
                return na.call(n);
              }
              function Xl(n, s, c) {
                return (
                  (s = Wt(s === r ? n.length - 1 : s, 0)),
                  function () {
                    for (
                      var p = arguments,
                        g = -1,
                        _ = Wt(p.length - s, 0),
                        E = U(_);
                      ++g < _;

                    )
                      E[g] = p[s + g];
                    g = -1;
                    for (var P = U(s + 1); ++g < s; ) P[g] = p[g];
                    return (P[s] = c(E)), Pn(n, this, P);
                  }
                );
              }
              function Yl(n, s) {
                return s.length < 2 ? n : Jn(n, yn(s, 0, -1));
              }
              function on(n, s) {
                for (var c = n.length, p = fn(s.length, c), g = On(n); p--; ) {
                  var _ = s[p];
                  n[p] = cr(_, c) ? g[_] : r;
                }
                return n;
              }
              function Xn(n, s) {
                if (
                  !(s === "constructor" && typeof n[s] == "function") &&
                  s != "__proto__"
                )
                  return n[s];
              }
              var pi = nf(Vt),
                wo =
                  xc ||
                  function (n, s) {
                    return Lt.setTimeout(n, s);
                  },
                Zl = nf(Dl);
              function fr(n, s, c) {
                var p = s + "";
                return Zl(n, Wp(p, fh(Xc(p), c)));
              }
              function nf(n) {
                var s = 0,
                  c = 0;
                return function () {
                  var p = jp(),
                    g = ce - (p - c);
                  if (((c = p), g > 0)) {
                    if (++s >= he) return arguments[0];
                  } else s = 0;
                  return n.apply(r, arguments);
                };
              }
              function Yn(n, s) {
                var c = -1,
                  p = n.length,
                  g = p - 1;
                for (s = s === r ? p : s; ++c < s; ) {
                  var _ = ya(c, g),
                    E = n[_];
                  (n[_] = n[c]), (n[c] = E);
                }
                return (n.length = s), n;
              }
              var ch = tf(function (n) {
                var s = [];
                return (
                  n.charCodeAt(0) === 46 && s.push(""),
                  n.replace(Uo, function (c, p, g, _) {
                    s.push(g ? _.replace(gp, "$1") : p || c);
                  }),
                  s
                );
              });
              function Or(n) {
                if (typeof n == "string" || br(n)) return n;
                var s = n + "";
                return s == "0" && 1 / n == -xe ? "-0" : s;
              }
              function Hi(n) {
                if (n != null) {
                  try {
                    return ta.call(n);
                  } catch {}
                  try {
                    return n + "";
                  } catch {}
                }
                return "";
              }
              function fh(n, s) {
                return (
                  cn(Ne, function (c) {
                    var p = "_." + c[0];
                    s & c[1] && !sl(n, p) && n.push(p);
                  }),
                  n.sort()
                );
              }
              function rf(n) {
                if (n instanceof Xe) return n.clone();
                var s = new dn(n.__wrapped__, n.__chain__);
                return (
                  (s.__actions__ = On(n.__actions__)),
                  (s.__index__ = n.__index__),
                  (s.__values__ = n.__values__),
                  s
                );
              }
              function Hp(n, s, c) {
                (c ? wt(n, s, c) : s === r) ? (s = 1) : (s = Wt(et(s), 0));
                var p = n == null ? 0 : n.length;
                if (!p || s < 1) return [];
                for (var g = 0, _ = 0, E = U(ms(p / s)); g < p; )
                  E[_++] = yn(n, g, (g += s));
                return E;
              }
              function eu(n) {
                for (
                  var s = -1, c = n == null ? 0 : n.length, p = 0, g = [];
                  ++s < c;

                ) {
                  var _ = n[s];
                  _ && (g[p++] = _);
                }
                return g;
              }
              function sf() {
                var n = arguments.length;
                if (!n) return [];
                for (var s = U(n - 1), c = arguments[0], p = n; p--; )
                  s[p - 1] = arguments[p];
                return Ri(Ze(c) ? On(c) : [c], Kt(s, 1));
              }
              var dr = Ye(function (n, s) {
                  return Zt(n) ? Jr(n, Kt(s, 1, Zt, !0)) : [];
                }),
                ot = Ye(function (n, s) {
                  var c = Yt(s);
                  return (
                    Zt(c) && (c = r),
                    Zt(n) ? Jr(n, Kt(s, 1, Zt, !0), De(c, 2)) : []
                  );
                }),
                nn = Ye(function (n, s) {
                  var c = Yt(s);
                  return (
                    Zt(c) && (c = r), Zt(n) ? Jr(n, Kt(s, 1, Zt, !0), r, c) : []
                  );
                });
              function Gt(n, s, c) {
                var p = n == null ? 0 : n.length;
                return p
                  ? ((s = c || s === r ? 1 : et(s)), yn(n, s < 0 ? 0 : s, p))
                  : [];
              }
              function an(n, s, c) {
                var p = n == null ? 0 : n.length;
                return p
                  ? ((s = c || s === r ? 1 : et(s)),
                    (s = p - s),
                    yn(n, 0, s < 0 ? 0 : s))
                  : [];
              }
              function Zn(n, s) {
                return n && n.length ? co(n, De(s, 3), !0, !0) : [];
              }
              function _o(n, s) {
                return n && n.length ? co(n, De(s, 3), !0) : [];
              }
              function Xt(n, s, c, p) {
                var g = n == null ? 0 : n.length;
                return g
                  ? (c &&
                      typeof c != "number" &&
                      wt(n, s, c) &&
                      ((c = 0), (p = g)),
                    Pl(n, s, c, p))
                  : [];
              }
              function So(n, s, c) {
                var p = n == null ? 0 : n.length;
                if (!p) return -1;
                var g = c == null ? 0 : et(c);
                return g < 0 && (g = Wt(p + g, 0)), ol(n, De(s, 3), g);
              }
              function qi(n, s, c) {
                var p = n == null ? 0 : n.length;
                if (!p) return -1;
                var g = p - 1;
                return (
                  c !== r &&
                    ((g = et(c)), (g = c < 0 ? Wt(p + g, 0) : fn(g, p - 1))),
                  ol(n, De(s, 3), g, !0)
                );
              }
              function Aa(n) {
                var s = n == null ? 0 : n.length;
                return s ? Kt(n, 1) : [];
              }
              function of(n) {
                var s = n == null ? 0 : n.length;
                return s ? Kt(n, xe) : [];
              }
              function Oa(n, s) {
                var c = n == null ? 0 : n.length;
                return c ? ((s = s === r ? 1 : et(s)), Kt(n, s)) : [];
              }
              function Un(n) {
                for (
                  var s = -1, c = n == null ? 0 : n.length, p = {};
                  ++s < c;

                ) {
                  var g = n[s];
                  p[g[0]] = g[1];
                }
                return p;
              }
              function tu(n) {
                return n && n.length ? n[0] : r;
              }
              function xo(n, s, c) {
                var p = n == null ? 0 : n.length;
                if (!p) return -1;
                var g = c == null ? 0 : et(c);
                return g < 0 && (g = Wt(p + g, 0)), Hs(n, s, g);
              }
              function mi(n) {
                var s = n == null ? 0 : n.length;
                return s ? yn(n, 0, -1) : [];
              }
              var nu = Ye(function (n) {
                  var s = kt(n, zl);
                  return s.length && s[0] === n[0] ? Pr(s) : [];
                }),
                af = Ye(function (n) {
                  var s = Yt(n),
                    c = kt(n, zl);
                  return (
                    s === Yt(c) ? (s = r) : c.pop(),
                    c.length && c[0] === n[0] ? Pr(c, De(s, 2)) : []
                  );
                }),
                Ki = Ye(function (n) {
                  var s = Yt(n),
                    c = kt(n, zl);
                  return (
                    (s = typeof s == "function" ? s : r),
                    s && c.pop(),
                    c.length && c[0] === n[0] ? Pr(c, r, s) : []
                  );
                });
              function ru(n, s) {
                return n == null ? "" : yl.call(n, s);
              }
              function Yt(n) {
                var s = n == null ? 0 : n.length;
                return s ? n[s - 1] : r;
              }
              function iu(n, s, c) {
                var p = n == null ? 0 : n.length;
                if (!p) return -1;
                var g = p;
                return (
                  c !== r &&
                    ((g = et(c)), (g = g < 0 ? Wt(p + g, 0) : fn(g, p - 1))),
                  s === s ? Dp(n, s, g) : ol(n, yd, g, !0)
                );
              }
              function Na(n, s) {
                return n && n.length ? Ui(n, et(s)) : r;
              }
              var lf = Ye(ba);
              function ba(n, s) {
                return n && n.length && s && s.length ? bt(n, s) : n;
              }
              function su(n, s, c) {
                return n && n.length && s && s.length ? bt(n, s, De(c, 2)) : n;
              }
              function bn(n, s, c) {
                return n && n.length && s && s.length ? bt(n, s, r, c) : n;
              }
              var Vi = Zr(function (n, s) {
                var c = n == null ? 0 : n.length,
                  p = kl(n, s);
                return (
                  ga(
                    n,
                    kt(s, function (g) {
                      return cr(g, c) ? +g : g;
                    }).sort(Uc),
                  ),
                  p
                );
              });
              function Nr(n, s) {
                var c = [];
                if (!(n && n.length)) return c;
                var p = -1,
                  g = [],
                  _ = n.length;
                for (s = De(s, 3); ++p < _; ) {
                  var E = n[p];
                  s(E, p, n) && (c.push(E), g.push(p));
                }
                return ga(n, g), c;
              }
              function Sn(n) {
                return n == null ? n : vl.call(n);
              }
              function dh(n, s, c) {
                var p = n == null ? 0 : n.length;
                return p
                  ? (c && typeof c != "number" && wt(n, s, c)
                      ? ((s = 0), (c = p))
                      : ((s = s == null ? 0 : et(s)),
                        (c = c === r ? p : et(c))),
                    yn(n, s, c))
                  : [];
              }
              function uf(n, s) {
                return Qt(n, s);
              }
              function cf(n, s, c) {
                return wa(n, s, De(c, 2));
              }
              function qp(n, s) {
                var c = n == null ? 0 : n.length;
                if (c) {
                  var p = Qt(n, s);
                  if (p < c && gi(n[p], s)) return p;
                }
                return -1;
              }
              function Qi(n, s) {
                return Qt(n, s, !0);
              }
              function hh(n, s, c) {
                return wa(n, s, De(c, 2), !0);
              }
              function ff(n, s) {
                var c = n == null ? 0 : n.length;
                if (c) {
                  var p = Qt(n, s, !0) - 1;
                  if (gi(n[p], s)) return p;
                }
                return -1;
              }
              function ks(n) {
                return n && n.length ? Ml(n) : [];
              }
              function df(n, s) {
                return n && n.length ? Ml(n, De(s, 2)) : [];
              }
              function Ps(n) {
                var s = n == null ? 0 : n.length;
                return s ? yn(n, 1, s) : [];
              }
              function ph(n, s, c) {
                return n && n.length
                  ? ((s = c || s === r ? 1 : et(s)), yn(n, 0, s < 0 ? 0 : s))
                  : [];
              }
              function mh(n, s, c) {
                var p = n == null ? 0 : n.length;
                return p
                  ? ((s = c || s === r ? 1 : et(s)),
                    (s = p - s),
                    yn(n, s < 0 ? 0 : s, p))
                  : [];
              }
              function hf(n, s) {
                return n && n.length ? co(n, De(s, 3), !1, !0) : [];
              }
              function ou(n, s) {
                return n && n.length ? co(n, De(s, 3)) : [];
              }
              var Kp = Ye(function (n) {
                  return Jt(Kt(n, 1, Zt, !0));
                }),
                Vp = Ye(function (n) {
                  var s = Yt(n);
                  return Zt(s) && (s = r), Jt(Kt(n, 1, Zt, !0), De(s, 2));
                }),
                gh = Ye(function (n) {
                  var s = Yt(n);
                  return (
                    (s = typeof s == "function" ? s : r),
                    Jt(Kt(n, 1, Zt, !0), r, s)
                  );
                });
              function yh(n) {
                return n && n.length ? Jt(n) : [];
              }
              function Rs(n, s) {
                return n && n.length ? Jt(n, De(s, 2)) : [];
              }
              function Qp(n, s) {
                return (
                  (s = typeof s == "function" ? s : r),
                  n && n.length ? Jt(n, r, s) : []
                );
              }
              function Ji(n) {
                if (!(n && n.length)) return [];
                var s = 0;
                return (
                  (n = Pi(n, function (c) {
                    if (Zt(c)) return (s = Wt(c.length, s)), !0;
                  })),
                  yc(s, function (c) {
                    return kt(n, mc(c));
                  })
                );
              }
              function pf(n, s) {
                if (!(n && n.length)) return [];
                var c = Ji(n);
                return s == null
                  ? c
                  : kt(c, function (p) {
                      return Pn(s, r, p);
                    });
              }
              var Bt = Ye(function (n, s) {
                  return Zt(n) ? Jr(n, s) : [];
                }),
                Jp = Ye(function (n) {
                  return jl(Pi(n, Zt));
                }),
                vh = Ye(function (n) {
                  var s = Yt(n);
                  return Zt(s) && (s = r), jl(Pi(n, Zt), De(s, 2));
                }),
                Xp = Ye(function (n) {
                  var s = Yt(n);
                  return (
                    (s = typeof s == "function" ? s : r), jl(Pi(n, Zt), r, s)
                  );
                }),
                Yp = Ye(Ji);
              function wh(n, s) {
                return Bc(n || [], s || [], _s);
              }
              function _h(n, s) {
                return Bc(n || [], s || [], Mt);
              }
              var Zp = Ye(function (n) {
                var s = n.length,
                  c = s > 1 ? n[s - 1] : r;
                return (
                  (c = typeof c == "function" ? (n.pop(), c) : r), pf(n, c)
                );
              });
              function er(n) {
                var s = w(n);
                return (s.__chain__ = !0), s;
              }
              function mf(n, s) {
                return s(n), n;
              }
              function au(n, s) {
                return s(n);
              }
              var Xi = Zr(function (n) {
                var s = n.length,
                  c = s ? n[0] : 0,
                  p = this.__wrapped__,
                  g = function (_) {
                    return kl(_, n);
                  };
                return s > 1 ||
                  this.__actions__.length ||
                  !(p instanceof Xe) ||
                  !cr(c)
                  ? this.thru(g)
                  : ((p = p.slice(c, +c + (s ? 1 : 0))),
                    p.__actions__.push({ func: au, args: [g], thisArg: r }),
                    new dn(p, this.__chain__).thru(function (_) {
                      return s && !_.length && _.push(r), _;
                    }));
              });
              function lu() {
                return er(this);
              }
              function As() {
                return new dn(this.value(), this.__chain__);
              }
              function uu() {
                this.__values__ === r && (this.__values__ = Ug(this.value()));
                var n = this.__index__ >= this.__values__.length,
                  s = n ? r : this.__values__[this.__index__++];
                return { done: n, value: s };
              }
              function gf() {
                return this;
              }
              function yf(n) {
                for (var s, c = this; c instanceof qr; ) {
                  var p = rf(c);
                  (p.__index__ = 0),
                    (p.__values__ = r),
                    s ? (g.__wrapped__ = p) : (s = p);
                  var g = p;
                  c = c.__wrapped__;
                }
                return (g.__wrapped__ = n), s;
              }
              function em() {
                var n = this.__wrapped__;
                if (n instanceof Xe) {
                  var s = n;
                  return (
                    this.__actions__.length && (s = new Xe(this)),
                    (s = s.reverse()),
                    s.__actions__.push({ func: au, args: [Sn], thisArg: r }),
                    new dn(s, this.__chain__)
                  );
                }
                return this.thru(Sn);
              }
              function vf() {
                return Fc(this.__wrapped__, this.__actions__);
              }
              var tm = _a(function (n, s, c) {
                ct.call(n, c) ? ++n[c] : Qr(n, c, 1);
              });
              function Sh(n, s, c) {
                var p = Ze(n) ? cc : Ir;
                return c && wt(n, s, c) && (s = r), p(n, De(s, 3));
              }
              function xh(n, s) {
                var c = Ze(n) ? Pi : xs;
                return c(n, De(s, 3));
              }
              var cu = Yd(So),
                fu = Yd(qi);
              function Eh(n, s) {
                return Kt(mu(n, s), 1);
              }
              function wf(n, s) {
                return Kt(mu(n, s), xe);
              }
              function nm(n, s, c) {
                return (c = c === r ? 1 : et(c)), Kt(mu(n, s), c);
              }
              function _f(n, s) {
                var c = Ze(n) ? cn : Xr;
                return c(n, De(s, 3));
              }
              function du(n, s) {
                var c = Ze(n) ? il : $d;
                return c(n, De(s, 3));
              }
              var hu = _a(function (n, s, c) {
                ct.call(n, c) ? n[c].push(s) : Qr(n, c, [s]);
              });
              function Sf(n, s, c, p) {
                (n = hr(n) ? n : wu(n)), (c = c && !p ? et(c) : 0);
                var g = n.length;
                return (
                  c < 0 && (c = Wt(g + c, 0)),
                  kh(n)
                    ? c <= g && n.indexOf(s, c) > -1
                    : !!g && Hs(n, s, c) > -1
                );
              }
              var pu = Ye(function (n, s, c) {
                  var p = -1,
                    g = typeof s == "function",
                    _ = hr(n) ? U(n.length) : [];
                  return (
                    Xr(n, function (E) {
                      _[++p] = g ? Pn(s, E, c) : ji(E, s, c);
                    }),
                    _
                  );
                }),
                Ch = _a(function (n, s, c) {
                  Qr(n, c, s);
                });
              function mu(n, s) {
                var c = Ze(n) ? kt : Tc;
                return c(n, De(s, 3));
              }
              function gu(n, s, c, p) {
                return n == null
                  ? []
                  : (Ze(s) || (s = s == null ? [] : [s]),
                    (c = p ? r : c),
                    Ze(c) || (c = c == null ? [] : [c]),
                    Ll(n, s, c));
              }
              var rm = _a(
                function (n, s, c) {
                  n[c ? 0 : 1].push(s);
                },
                function () {
                  return [[], []];
                },
              );
              function Ta(n, s, c) {
                var p = Ze(n) ? dc : wd,
                  g = arguments.length < 3;
                return p(n, De(s, 4), c, g, Xr);
              }
              function im(n, s, c) {
                var p = Ze(n) ? Pp : wd,
                  g = arguments.length < 3;
                return p(n, De(s, 4), c, g, $d);
              }
              function yu(n, s) {
                var c = Ze(n) ? Pi : xs;
                return c(n, F(De(s, 3)));
              }
              function e(n) {
                var s = Ze(n) ? Vr : Es;
                return s(n);
              }
              function t(n, s, c) {
                (c ? wt(n, s, c) : s === r) ? (s = 1) : (s = et(s));
                var p = Ze(n) ? ws : Dt;
                return p(n, s);
              }
              function o(n) {
                var s = Ze(n) ? jd : va;
                return s(n);
              }
              function u(n) {
                if (n == null) return 0;
                if (hr(n)) return kh(n) ? hs(n) : n.length;
                var s = wn(n);
                return s == ke || s == gt ? n.size : Tl(n).length;
              }
              function d(n, s, c) {
                var p = Ze(n) ? hc : zp;
                return c && wt(n, s, c) && (s = r), p(n, De(s, 3));
              }
              var h = Ye(function (n, s) {
                  if (n == null) return [];
                  var c = s.length;
                  return (
                    c > 1 && wt(n, s[0], s[1])
                      ? (s = [])
                      : c > 2 && wt(s[0], s[1], s[2]) && (s = [s[0]]),
                    Ll(n, Kt(s, 1), [])
                  );
                }),
                y =
                  At ||
                  function () {
                    return Lt.Date.now();
                  };
              function x(n, s) {
                if (typeof s != "function") throw new sr(v);
                return (
                  (n = et(n)),
                  function () {
                    if (--n < 1) return s.apply(this, arguments);
                  }
                );
              }
              function k(n, s, c) {
                return (
                  (s = c ? r : s),
                  (s = n && s == null ? n.length : s),
                  Yr(n, de, r, r, r, r, s)
                );
              }
              function W(n, s) {
                var c;
                if (typeof s != "function") throw new sr(v);
                return (
                  (n = et(n)),
                  function () {
                    return (
                      --n > 0 && (c = s.apply(this, arguments)),
                      n <= 1 && (s = r),
                      c
                    );
                  }
                );
              }
              var re = Ye(function (n, s, c) {
                  var p = z;
                  if (c.length) {
                    var g = ir(c, Wi(re));
                    p |= ee;
                  }
                  return Yr(n, p, s, c, g);
                }),
                ae = Ye(function (n, s, c) {
                  var p = z | Y;
                  if (c.length) {
                    var g = ir(c, Wi(ae));
                    p |= ee;
                  }
                  return Yr(s, p, n, c, g);
                });
              function ne(n, s, c) {
                s = c ? r : s;
                var p = Yr(n, J, r, r, r, r, r, s);
                return (p.placeholder = ne.placeholder), p;
              }
              function we(n, s, c) {
                s = c ? r : s;
                var p = Yr(n, Q, r, r, r, r, r, s);
                return (p.placeholder = we.placeholder), p;
              }
              function Ie(n, s, c) {
                var p,
                  g,
                  _,
                  E,
                  P,
                  L,
                  Z = 0,
                  te = !1,
                  se = !1,
                  ye = !0;
                if (typeof n != "function") throw new sr(v);
                (s = ti(s) || 0),
                  zt(c) &&
                    ((te = !!c.leading),
                    (se = "maxWait" in c),
                    (_ = se ? Wt(ti(c.maxWait) || 0, s) : _),
                    (ye = "trailing" in c ? !!c.trailing : ye));
                function be(en) {
                  var yi = p,
                    bs = g;
                  return (p = g = r), (Z = en), (E = n.apply(bs, yi)), E;
                }
                function Ue(en) {
                  return (Z = en), (P = wo(it, s)), te ? be(en) : E;
                }
                function tt(en) {
                  var yi = en - L,
                    bs = en - Z,
                    t0 = s - yi;
                  return se ? fn(t0, _ - bs) : t0;
                }
                function We(en) {
                  var yi = en - L,
                    bs = en - Z;
                  return L === r || yi >= s || yi < 0 || (se && bs >= _);
                }
                function it() {
                  var en = y();
                  if (We(en)) return at(en);
                  P = wo(it, tt(en));
                }
                function at(en) {
                  return (P = r), ye && p ? be(en) : ((p = g = r), E);
                }
                function Tr() {
                  P !== r && fo(P), (Z = 0), (p = L = g = P = r);
                }
                function tr() {
                  return P === r ? E : at(y());
                }
                function Lr() {
                  var en = y(),
                    yi = We(en);
                  if (((p = arguments), (g = this), (L = en), yi)) {
                    if (P === r) return Ue(L);
                    if (se) return fo(P), (P = wo(it, s)), be(L);
                  }
                  return P === r && (P = wo(it, s)), E;
                }
                return (Lr.cancel = Tr), (Lr.flush = tr), Lr;
              }
              var Pe = Ye(function (n, s) {
                  return Pc(n, 1, s);
                }),
                jt = Ye(function (n, s, c) {
                  return Pc(n, ti(s) || 0, c);
                });
              function D(n) {
                return Yr(n, je);
              }
              function O(n, s) {
                if (
                  typeof n != "function" ||
                  (s != null && typeof s != "function")
                )
                  throw new sr(v);
                var c = function () {
                  var p = arguments,
                    g = s ? s.apply(this, p) : p[0],
                    _ = c.cache;
                  if (_.has(g)) return _.get(g);
                  var E = n.apply(this, p);
                  return (c.cache = _.set(g, E) || _), E;
                };
                return (c.cache = new (O.Cache || or)()), c;
              }
              O.Cache = or;
              function F(n) {
                if (typeof n != "function") throw new sr(v);
                return function () {
                  var s = arguments;
                  switch (s.length) {
                    case 0:
                      return !n.call(this);
                    case 1:
                      return !n.call(this, s[0]);
                    case 2:
                      return !n.call(this, s[0], s[1]);
                    case 3:
                      return !n.call(this, s[0], s[1], s[2]);
                  }
                  return !n.apply(this, s);
                };
              }
              function ue(n) {
                return W(2, n);
              }
              var Re = qd(function (n, s) {
                  s =
                    s.length == 1 && Ze(s[0])
                      ? kt(s[0], qn(De()))
                      : kt(Kt(s, 1), qn(De()));
                  var c = s.length;
                  return Ye(function (p) {
                    for (var g = -1, _ = fn(p.length, c); ++g < _; )
                      p[g] = s[g].call(this, p[g]);
                    return Pn(n, this, p);
                  });
                }),
                Me = Ye(function (n, s) {
                  var c = ir(s, Wi(Me));
                  return Yr(n, ee, r, s, c);
                }),
                Be = Ye(function (n, s) {
                  var c = ir(s, Wi(Be));
                  return Yr(n, fe, r, s, c);
                }),
                Ge = Zr(function (n, s) {
                  return Yr(n, A, r, r, r, s);
                });
              function rn(n, s) {
                if (typeof n != "function") throw new sr(v);
                return (s = s === r ? s : et(s)), Ye(n, s);
              }
              function ft(n, s) {
                if (typeof n != "function") throw new sr(v);
                return (
                  (s = s == null ? 0 : Wt(et(s), 0)),
                  Ye(function (c) {
                    var p = c[s],
                      g = fi(c, 0, s);
                    return p && Ri(g, p), Pn(n, this, g);
                  })
                );
              }
              function Yi(n, s, c) {
                var p = !0,
                  g = !0;
                if (typeof n != "function") throw new sr(v);
                return (
                  zt(c) &&
                    ((p = "leading" in c ? !!c.leading : p),
                    (g = "trailing" in c ? !!c.trailing : g)),
                  Ie(n, s, { leading: p, maxWait: s, trailing: g })
                );
              }
              function sm(n) {
                return k(n, 1);
              }
              function Nv(n, s) {
                return Me($l(s), n);
              }
              function bv() {
                if (!arguments.length) return [];
                var n = arguments[0];
                return Ze(n) ? n : [n];
              }
              function Tv(n) {
                return $n(n, H);
              }
              function Lv(n, s) {
                return (s = typeof s == "function" ? s : r), $n(n, H, s);
              }
              function Dv(n) {
                return $n(n, I | H);
              }
              function Mv(n, s) {
                return (s = typeof s == "function" ? s : r), $n(n, I | H, s);
              }
              function Fv(n, s) {
                return s == null || fa(n, s, xn(s));
              }
              function gi(n, s) {
                return n === s || (n !== n && s !== s);
              }
              var Bv = Ea(kr),
                jv = Ea(function (n, s) {
                  return n >= s;
                }),
                La = Ac(
                  (function () {
                    return arguments;
                  })(),
                )
                  ? Ac
                  : function (n) {
                      return (
                        Ht(n) && ct.call(n, "callee") && !pl.call(n, "callee")
                      );
                    },
                Ze = U.isArray,
                zv = lc ? qn(lc) : Ol;
              function hr(n) {
                return n != null && Ih(n.length) && !Os(n);
              }
              function Zt(n) {
                return Ht(n) && hr(n);
              }
              function $v(n) {
                return n === !0 || n === !1 || (Ht(n) && gn(n) == Ee);
              }
              var Eo = Ec || gm,
                Uv = Fn ? qn(Fn) : Wd;
              function Wv(n) {
                return Ht(n) && n.nodeType === 1 && !xf(n);
              }
              function Gv(n) {
                if (n == null) return !0;
                if (
                  hr(n) &&
                  (Ze(n) ||
                    typeof n == "string" ||
                    typeof n.splice == "function" ||
                    Eo(n) ||
                    vu(n) ||
                    La(n))
                )
                  return !n.length;
                var s = wn(n);
                if (s == ke || s == gt) return !n.size;
                if (Pa(n)) return !Tl(n).length;
                for (var c in n) if (ct.call(n, c)) return !1;
                return !0;
              }
              function Hv(n, s) {
                return oo(n, s);
              }
              function qv(n, s, c) {
                c = typeof c == "function" ? c : r;
                var p = c ? c(n, s) : r;
                return p === r ? oo(n, s, r, c) : !!p;
              }
              function om(n) {
                if (!Ht(n)) return !1;
                var s = gn(n);
                return (
                  s == pt ||
                  s == ht ||
                  (typeof n.message == "string" &&
                    typeof n.name == "string" &&
                    !xf(n))
                );
              }
              function Kv(n) {
                return typeof n == "number" && Xs(n);
              }
              function Os(n) {
                if (!zt(n)) return !1;
                var s = gn(n);
                return s == rt || s == Ke || s == me || s == It;
              }
              function Bg(n) {
                return typeof n == "number" && n == et(n);
              }
              function Ih(n) {
                return typeof n == "number" && n > -1 && n % 1 == 0 && n <= j;
              }
              function zt(n) {
                var s = typeof n;
                return n != null && (s == "object" || s == "function");
              }
              function Ht(n) {
                return n != null && typeof n == "object";
              }
              var jg = ds ? qn(ds) : Nl;
              function Vv(n, s) {
                return n === s || bl(n, s, Jl(s));
              }
              function Qv(n, s, c) {
                return (c = typeof c == "function" ? c : r), bl(n, s, Jl(s), c);
              }
              function Jv(n) {
                return zg(n) && n != +n;
              }
              function Xv(n) {
                if (oh(n)) throw new qe(m);
                return Nc(n);
              }
              function Yv(n) {
                return n === null;
              }
              function Zv(n) {
                return n == null;
              }
              function zg(n) {
                return typeof n == "number" || (Ht(n) && gn(n) == Oe);
              }
              function xf(n) {
                if (!Ht(n) || gn(n) != Je) return !1;
                var s = Er(n);
                if (s === null) return !0;
                var c = ct.call(s, "constructor") && s.constructor;
                return (
                  typeof c == "function" && c instanceof c && ta.call(c) == dl
                );
              }
              var am = rl ? qn(rl) : Gd;
              function e1(n) {
                return Bg(n) && n >= -j && n <= j;
              }
              var $g = Gs ? qn(Gs) : bc;
              function kh(n) {
                return typeof n == "string" || (!Ze(n) && Ht(n) && gn(n) == yt);
              }
              function br(n) {
                return typeof n == "symbol" || (Ht(n) && gn(n) == In);
              }
              var vu = pd ? qn(pd) : ha;
              function t1(n) {
                return n === r;
              }
              function n1(n) {
                return Ht(n) && wn(n) == jr;
              }
              function r1(n) {
                return Ht(n) && gn(n) == Bo;
              }
              var i1 = Ea(zi),
                s1 = Ea(function (n, s) {
                  return n <= s;
                });
              function Ug(n) {
                if (!n) return [];
                if (hr(n)) return kh(n) ? Kn(n) : On(n);
                if (ai && n[ai]) return Tp(n[ai]());
                var s = wn(n),
                  c = s == ke ? ll : s == gt ? Ai : wu;
                return c(n);
              }
              function Ns(n) {
                if (!n) return n === 0 ? n : 0;
                if (((n = ti(n)), n === xe || n === -xe)) {
                  var s = n < 0 ? -1 : 1;
                  return s * le;
                }
                return n === n ? n : 0;
              }
              function et(n) {
                var s = Ns(n),
                  c = s % 1;
                return s === s ? (c ? s - c : s) : 0;
              }
              function Wg(n) {
                return n ? ui(et(n), 0, q) : 0;
              }
              function ti(n) {
                if (typeof n == "number") return n;
                if (br(n)) return C;
                if (zt(n)) {
                  var s = typeof n.valueOf == "function" ? n.valueOf() : n;
                  n = zt(s) ? s + "" : s;
                }
                if (typeof n != "string") return n === 0 ? n : +n;
                n = _d(n);
                var c = yp.test(n);
                return c || Zf.test(n)
                  ? tl(n.slice(2), c ? 2 : 8)
                  : Xf.test(n)
                    ? C
                    : +n;
              }
              function Gg(n) {
                return Ar(n, pr(n));
              }
              function o1(n) {
                return n ? ui(et(n), -j, j) : n === 0 ? n : 0;
              }
              function Ct(n) {
                return n == null ? "" : Ft(n);
              }
              var a1 = po(function (n, s) {
                  if (Pa(s) || hr(s)) {
                    Ar(s, xn(s), n);
                    return;
                  }
                  for (var c in s) ct.call(s, c) && _s(n, c, s[c]);
                }),
                Hg = po(function (n, s) {
                  Ar(s, pr(s), n);
                }),
                Ph = po(function (n, s, c, p) {
                  Ar(s, pr(s), n, p);
                }),
                l1 = po(function (n, s, c, p) {
                  Ar(s, xn(s), n, p);
                }),
                u1 = Zr(kl);
              function c1(n, s) {
                var c = no(n);
                return s == null ? c : Nt(c, s);
              }
              var f1 = Ye(function (n, s) {
                  n = Et(n);
                  var c = -1,
                    p = s.length,
                    g = p > 2 ? s[2] : r;
                  for (g && wt(s[0], s[1], g) && (p = 1); ++c < p; )
                    for (
                      var _ = s[c], E = pr(_), P = -1, L = E.length;
                      ++P < L;

                    ) {
                      var Z = E[P],
                        te = n[Z];
                      (te === r || (gi(te, Gr[Z]) && !ct.call(n, Z))) &&
                        (n[Z] = _[Z]);
                    }
                  return n;
                }),
                d1 = Ye(function (n) {
                  return n.push(r, Qc), Pn(qg, r, n);
                });
              function h1(n, s) {
                return gd(n, De(s, 3), ur);
              }
              function p1(n, s) {
                return gd(n, De(s, 3), Mi);
              }
              function m1(n, s) {
                return n == null ? n : da(n, De(s, 3), pr);
              }
              function g1(n, s) {
                return n == null ? n : Rl(n, De(s, 3), pr);
              }
              function y1(n, s) {
                return n && ur(n, De(s, 3));
              }
              function v1(n, s) {
                return n && Mi(n, De(s, 3));
              }
              function w1(n) {
                return n == null ? [] : An(n, xn(n));
              }
              function _1(n) {
                return n == null ? [] : An(n, pr(n));
              }
              function lm(n, s, c) {
                var p = n == null ? r : Jn(n, s);
                return p === r ? c : p;
              }
              function S1(n, s) {
                return n != null && Yc(n, s, Fi);
              }
              function um(n, s) {
                return n != null && Yc(n, s, Rc);
              }
              var x1 = Gl(function (n, s, c) {
                  s != null &&
                    typeof s.toString != "function" &&
                    (s = na.call(s)),
                    (n[s] = c);
                }, fm(mr)),
                E1 = Gl(function (n, s, c) {
                  s != null &&
                    typeof s.toString != "function" &&
                    (s = na.call(s)),
                    ct.call(n, s) ? n[s].push(c) : (n[s] = [c]);
                }, De),
                C1 = Ye(ji);
              function xn(n) {
                return hr(n) ? Kr(n) : Tl(n);
              }
              function pr(n) {
                return hr(n) ? Kr(n, !0) : Hd(n);
              }
              function I1(n, s) {
                var c = {};
                return (
                  (s = De(s, 3)),
                  ur(n, function (p, g, _) {
                    Qr(c, s(p, g, _), p);
                  }),
                  c
                );
              }
              function k1(n, s) {
                var c = {};
                return (
                  (s = De(s, 3)),
                  ur(n, function (p, g, _) {
                    Qr(c, g, s(p, g, _));
                  }),
                  c
                );
              }
              var P1 = po(function (n, s, c) {
                  $i(n, s, c);
                }),
                qg = po(function (n, s, c, p) {
                  $i(n, s, c, p);
                }),
                R1 = Zr(function (n, s) {
                  var c = {};
                  if (n == null) return c;
                  var p = !1;
                  (s = kt(s, function (_) {
                    return (_ = ci(_, n)), p || (p = _.length > 1), _;
                  })),
                    Ar(n, Ca(n), c),
                    p && (c = $n(c, I | R | H, th));
                  for (var g = s.length; g--; ) Cs(c, s[g]);
                  return c;
                });
              function A1(n, s) {
                return Kg(n, F(De(s)));
              }
              var O1 = Zr(function (n, s) {
                return n == null ? {} : lo(n, s);
              });
              function Kg(n, s) {
                if (n == null) return {};
                var c = kt(Ca(n), function (p) {
                  return [p];
                });
                return (
                  (s = De(s)),
                  Lc(n, c, function (p, g) {
                    return s(p, g[0]);
                  })
                );
              }
              function N1(n, s, c) {
                s = ci(s, n);
                var p = -1,
                  g = s.length;
                for (g || ((g = 1), (n = r)); ++p < g; ) {
                  var _ = n == null ? r : n[Or(s[p])];
                  _ === r && ((p = g), (_ = c)), (n = Os(_) ? _.call(n) : _);
                }
                return n;
              }
              function b1(n, s, c) {
                return n == null ? n : Mt(n, s, c);
              }
              function T1(n, s, c, p) {
                return (
                  (p = typeof p == "function" ? p : r),
                  n == null ? n : Mt(n, s, c, p)
                );
              }
              var Vg = Kc(xn),
                Qg = Kc(pr);
              function L1(n, s, c) {
                var p = Ze(n),
                  g = p || Eo(n) || vu(n);
                if (((s = De(s, 4)), c == null)) {
                  var _ = n && n.constructor;
                  g
                    ? (c = p ? new _() : [])
                    : zt(n)
                      ? (c = Os(_) ? no(Er(n)) : {})
                      : (c = {});
                }
                return (
                  (g ? cn : ur)(n, function (E, P, L) {
                    return s(c, E, P, L);
                  }),
                  c
                );
              }
              function D1(n, s) {
                return n == null ? !0 : Cs(n, s);
              }
              function M1(n, s, c) {
                return n == null ? n : Bl(n, s, $l(c));
              }
              function F1(n, s, c, p) {
                return (
                  (p = typeof p == "function" ? p : r),
                  n == null ? n : Bl(n, s, $l(c), p)
                );
              }
              function wu(n) {
                return n == null ? [] : Zo(n, xn(n));
              }
              function B1(n) {
                return n == null ? [] : Zo(n, pr(n));
              }
              function j1(n, s, c) {
                return (
                  c === r && ((c = s), (s = r)),
                  c !== r && ((c = ti(c)), (c = c === c ? c : 0)),
                  s !== r && ((s = ti(s)), (s = s === s ? s : 0)),
                  ui(ti(n), s, c)
                );
              }
              function z1(n, s, c) {
                return (
                  (s = Ns(s)),
                  c === r ? ((c = s), (s = 0)) : (c = Ns(c)),
                  (n = ti(n)),
                  Ud(n, s, c)
                );
              }
              function $1(n, s, c) {
                if (
                  (c && typeof c != "boolean" && wt(n, s, c) && (s = c = r),
                  c === r &&
                    (typeof s == "boolean"
                      ? ((c = s), (s = r))
                      : typeof n == "boolean" && ((c = n), (n = r))),
                  n === r && s === r
                    ? ((n = 0), (s = 1))
                    : ((n = Ns(n)), s === r ? ((s = n), (n = 0)) : (s = Ns(s))),
                  n > s)
                ) {
                  var p = n;
                  (n = s), (s = p);
                }
                if (c || n % 1 || s % 1) {
                  var g = oa();
                  return fn(
                    n + g * (s - n + oc("1e-" + ((g + "").length - 1))),
                    s,
                  );
                }
                return ya(n, s);
              }
              var U1 = di(function (n, s, c) {
                return (s = s.toLowerCase()), n + (c ? Jg(s) : s);
              });
              function Jg(n) {
                return cm(Ct(n).toLowerCase());
              }
              function Xg(n) {
                return (n = Ct(n)), n && n.replace(td, Ed).replace(cd, "");
              }
              function W1(n, s, c) {
                (n = Ct(n)), (s = Ft(s));
                var p = n.length;
                c = c === r ? p : ui(et(c), 0, p);
                var g = c;
                return (c -= s.length), c >= 0 && n.slice(c, g) == s;
              }
              function G1(n) {
                return (n = Ct(n)), n && Kf.test(n) ? n.replace(as, Cd) : n;
              }
              function H1(n) {
                return (n = Ct(n)), n && Go.test(n) ? n.replace(Wo, "\\$&") : n;
              }
              var q1 = di(function (n, s, c) {
                  return n + (c ? "-" : "") + s.toLowerCase();
                }),
                K1 = di(function (n, s, c) {
                  return n + (c ? " " : "") + s.toLowerCase();
                }),
                V1 = Hc("toLowerCase");
              function Q1(n, s, c) {
                (n = Ct(n)), (s = et(s));
                var p = s ? hs(n) : 0;
                if (!s || p >= s) return n;
                var g = (s - p) / 2;
                return xa(Oi(g), c) + n + xa(ms(g), c);
              }
              function J1(n, s, c) {
                (n = Ct(n)), (s = et(s));
                var p = s ? hs(n) : 0;
                return s && p < s ? n + xa(s - p, c) : n;
              }
              function X1(n, s, c) {
                (n = Ct(n)), (s = et(s));
                var p = s ? hs(n) : 0;
                return s && p < s ? xa(s - p, c) + n : n;
              }
              function Y1(n, s, c) {
                return (
                  c || s == null ? (s = 0) : s && (s = +s),
                  Td(Ct(n).replace(Xu, ""), s || 0)
                );
              }
              function Z1(n, s, c) {
                return (
                  (c ? wt(n, s, c) : s === r) ? (s = 1) : (s = et(s)),
                  uo(Ct(n), s)
                );
              }
              function ew() {
                var n = arguments,
                  s = Ct(n[0]);
                return n.length < 3 ? s : s.replace(n[1], n[2]);
              }
              var tw = di(function (n, s, c) {
                return n + (c ? "_" : "") + s.toLowerCase();
              });
              function nw(n, s, c) {
                return (
                  c && typeof c != "number" && wt(n, s, c) && (s = c = r),
                  (c = c === r ? q : c >>> 0),
                  c
                    ? ((n = Ct(n)),
                      n &&
                      (typeof s == "string" || (s != null && !am(s))) &&
                      ((s = Ft(s)), !s && Ks(n))
                        ? fi(Kn(n), 0, c)
                        : n.split(s, c))
                    : []
                );
              }
              var rw = di(function (n, s, c) {
                return n + (c ? " " : "") + cm(s);
              });
              function iw(n, s, c) {
                return (
                  (n = Ct(n)),
                  (c = c == null ? 0 : ui(et(c), 0, n.length)),
                  (s = Ft(s)),
                  n.slice(c, c + s.length) == s
                );
              }
              function sw(n, s, c) {
                var p = w.templateSettings;
                c && wt(n, s, c) && (s = r),
                  (n = Ct(n)),
                  (s = Ph({}, s, p, Vc));
                var g = Ph({}, s.imports, p.imports, Vc),
                  _ = xn(g),
                  E = Zo(g, _),
                  P,
                  L,
                  Z = 0,
                  te = s.interpolate || Ka,
                  se = "__p += '",
                  ye = ea(
                    (s.escape || Ka).source +
                      "|" +
                      te.source +
                      "|" +
                      (te === Qu ? ls : Ka).source +
                      "|" +
                      (s.evaluate || Ka).source +
                      "|$",
                    "g",
                  ),
                  be =
                    "//# sourceURL=" +
                    (ct.call(s, "sourceURL")
                      ? (s.sourceURL + "").replace(/\s/g, " ")
                      : "lodash.templateSources[" + ++Cp + "]") +
                    `
`;
                n.replace(ye, function (We, it, at, Tr, tr, Lr) {
                  return (
                    at || (at = Tr),
                    (se += n.slice(Z, Lr).replace(vp, Id)),
                    it &&
                      ((P = !0),
                      (se +=
                        `' +
__e(` +
                        it +
                        `) +
'`)),
                    tr &&
                      ((L = !0),
                      (se +=
                        `';
` +
                        tr +
                        `;
__p += '`)),
                    at &&
                      (se +=
                        `' +
((__t = (` +
                        at +
                        `)) == null ? '' : __t) +
'`),
                    (Z = Lr + We.length),
                    We
                  );
                }),
                  (se += `';
`);
                var Ue = ct.call(s, "variable") && s.variable;
                if (!Ue)
                  se =
                    `with (obj) {
` +
                    se +
                    `
}
`;
                else if (mp.test(Ue)) throw new qe(S);
                (se = (L ? se.replace(qu, "") : se)
                  .replace(Ku, "$1")
                  .replace(Vu, "$1;")),
                  (se =
                    "function(" +
                    (Ue || "obj") +
                    `) {
` +
                    (Ue
                      ? ""
                      : `obj || (obj = {});
`) +
                    "var __t, __p = ''" +
                    (P ? ", __e = _.escape" : "") +
                    (L
                      ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                      : `;
`) +
                    se +
                    `return __p
}`);
                var tt = Zg(function () {
                  return ut(_, be + "return " + se).apply(r, E);
                });
                if (((tt.source = se), om(tt))) throw tt;
                return tt;
              }
              function ow(n) {
                return Ct(n).toLowerCase();
              }
              function aw(n) {
                return Ct(n).toUpperCase();
              }
              function lw(n, s, c) {
                if (((n = Ct(n)), n && (c || s === r))) return _d(n);
                if (!n || !(s = Ft(s))) return n;
                var p = Kn(n),
                  g = Kn(s),
                  _ = Sd(p, g),
                  E = vc(p, g) + 1;
                return fi(p, _, E).join("");
              }
              function uw(n, s, c) {
                if (((n = Ct(n)), n && (c || s === r)))
                  return n.slice(0, cl(n) + 1);
                if (!n || !(s = Ft(s))) return n;
                var p = Kn(n),
                  g = vc(p, Kn(s)) + 1;
                return fi(p, 0, g).join("");
              }
              function cw(n, s, c) {
                if (((n = Ct(n)), n && (c || s === r)))
                  return n.replace(Xu, "");
                if (!n || !(s = Ft(s))) return n;
                var p = Kn(n),
                  g = Sd(p, Kn(s));
                return fi(p, g).join("");
              }
              function fw(n, s) {
                var c = Te,
                  p = ge;
                if (zt(s)) {
                  var g = "separator" in s ? s.separator : g;
                  (c = "length" in s ? et(s.length) : c),
                    (p = "omission" in s ? Ft(s.omission) : p);
                }
                n = Ct(n);
                var _ = n.length;
                if (Ks(n)) {
                  var E = Kn(n);
                  _ = E.length;
                }
                if (c >= _) return n;
                var P = c - hs(p);
                if (P < 1) return p;
                var L = E ? fi(E, 0, P).join("") : n.slice(0, P);
                if (g === r) return L + p;
                if ((E && (P += L.length - P), am(g))) {
                  if (n.slice(P).search(g)) {
                    var Z,
                      te = L;
                    for (
                      g.global || (g = ea(g.source, Ct(Zu.exec(g)) + "g")),
                        g.lastIndex = 0;
                      (Z = g.exec(te));

                    )
                      var se = Z.index;
                    L = L.slice(0, se === r ? P : se);
                  }
                } else if (n.indexOf(Ft(g), P) != P) {
                  var ye = L.lastIndexOf(g);
                  ye > -1 && (L = L.slice(0, ye));
                }
                return L + p;
              }
              function dw(n) {
                return (n = Ct(n)), n && qf.test(n) ? n.replace(os, kd) : n;
              }
              var hw = di(function (n, s, c) {
                  return n + (c ? " " : "") + s.toUpperCase();
                }),
                cm = Hc("toUpperCase");
              function Yg(n, s, c) {
                return (
                  (n = Ct(n)),
                  (s = c ? r : s),
                  s === r ? (bp(n) ? Mp(n) : Ap(n)) : n.match(s) || []
                );
              }
              var Zg = Ye(function (n, s) {
                  try {
                    return Pn(n, r, s);
                  } catch (c) {
                    return om(c) ? c : new qe(c);
                  }
                }),
                pw = Zr(function (n, s) {
                  return (
                    cn(s, function (c) {
                      (c = Or(c)), Qr(n, c, re(n[c], n));
                    }),
                    n
                  );
                });
              function mw(n) {
                var s = n == null ? 0 : n.length,
                  c = De();
                return (
                  (n = s
                    ? kt(n, function (p) {
                        if (typeof p[1] != "function") throw new sr(v);
                        return [c(p[0]), p[1]];
                      })
                    : []),
                  Ye(function (p) {
                    for (var g = -1; ++g < s; ) {
                      var _ = n[g];
                      if (Pn(_[0], this, p)) return Pn(_[1], this, p);
                    }
                  })
                );
              }
              function gw(n) {
                return zd($n(n, I));
              }
              function fm(n) {
                return function () {
                  return n;
                };
              }
              function yw(n, s) {
                return n == null || n !== n ? s : n;
              }
              var vw = Is(),
                ww = Is(!0);
              function mr(n) {
                return n;
              }
              function dm(n) {
                return pa(typeof n == "function" ? n : $n(n, I));
              }
              function _w(n) {
                return ao($n(n, I));
              }
              function Sw(n, s) {
                return Rr(n, $n(s, I));
              }
              var xw = Ye(function (n, s) {
                  return function (c) {
                    return ji(c, n, s);
                  };
                }),
                Ew = Ye(function (n, s) {
                  return function (c) {
                    return ji(n, c, s);
                  };
                });
              function hm(n, s, c) {
                var p = xn(s),
                  g = An(s, p);
                c == null &&
                  !(zt(s) && (g.length || !p.length)) &&
                  ((c = s), (s = n), (n = this), (g = An(s, xn(s))));
                var _ = !(zt(c) && "chain" in c) || !!c.chain,
                  E = Os(n);
                return (
                  cn(g, function (P) {
                    var L = s[P];
                    (n[P] = L),
                      E &&
                        (n.prototype[P] = function () {
                          var Z = this.__chain__;
                          if (_ || Z) {
                            var te = n(this.__wrapped__),
                              se = (te.__actions__ = On(this.__actions__));
                            return (
                              se.push({ func: L, args: arguments, thisArg: n }),
                              (te.__chain__ = Z),
                              te
                            );
                          }
                          return L.apply(n, Ri([this.value()], arguments));
                        });
                  }),
                  n
                );
              }
              function Cw() {
                return Lt._ === this && (Lt._ = Ad), this;
              }
              function pm() {}
              function Iw(n) {
                return (
                  (n = et(n)),
                  Ye(function (s) {
                    return Ui(s, n);
                  })
                );
              }
              var kw = ql(kt),
                Pw = ql(cc),
                Rw = ql(hc);
              function e0(n) {
                return Zc(n) ? mc(Or(n)) : Dc(n);
              }
              function Aw(n) {
                return function (s) {
                  return n == null ? r : Jn(n, s);
                };
              }
              var Ow = qc(),
                Nw = qc(!0);
              function mm() {
                return [];
              }
              function gm() {
                return !1;
              }
              function bw() {
                return {};
              }
              function Tw() {
                return "";
              }
              function Lw() {
                return !0;
              }
              function Dw(n, s) {
                if (((n = et(n)), n < 1 || n > j)) return [];
                var c = q,
                  p = fn(n, q);
                (s = De(s)), (n -= q);
                for (var g = yc(p, s); ++c < n; ) s(c);
                return g;
              }
              function Mw(n) {
                return Ze(n) ? kt(n, Or) : br(n) ? [n] : On(ch(Ct(n)));
              }
              function Fw(n) {
                var s = ++Js;
                return Ct(n) + s;
              }
              var Bw = Hl(function (n, s) {
                  return n + s;
                }, 0),
                jw = vn("ceil"),
                zw = Hl(function (n, s) {
                  return n / s;
                }, 1),
                $w = vn("floor");
              function Uw(n) {
                return n && n.length ? Ss(n, mr, kr) : r;
              }
              function Ww(n, s) {
                return n && n.length ? Ss(n, De(s, 2), kr) : r;
              }
              function Gw(n) {
                return vd(n, mr);
              }
              function Hw(n, s) {
                return vd(n, De(s, 2));
              }
              function qw(n) {
                return n && n.length ? Ss(n, mr, zi) : r;
              }
              function Kw(n, s) {
                return n && n.length ? Ss(n, De(s, 2), zi) : r;
              }
              var Vw = Hl(function (n, s) {
                  return n * s;
                }, 1),
                Qw = vn("round"),
                Jw = Hl(function (n, s) {
                  return n - s;
                }, 0);
              function Xw(n) {
                return n && n.length ? gc(n, mr) : 0;
              }
              function Yw(n, s) {
                return n && n.length ? gc(n, De(s, 2)) : 0;
              }
              return (
                (w.after = x),
                (w.ary = k),
                (w.assign = a1),
                (w.assignIn = Hg),
                (w.assignInWith = Ph),
                (w.assignWith = l1),
                (w.at = u1),
                (w.before = W),
                (w.bind = re),
                (w.bindAll = pw),
                (w.bindKey = ae),
                (w.castArray = bv),
                (w.chain = er),
                (w.chunk = Hp),
                (w.compact = eu),
                (w.concat = sf),
                (w.cond = mw),
                (w.conforms = gw),
                (w.constant = fm),
                (w.countBy = tm),
                (w.create = c1),
                (w.curry = ne),
                (w.curryRight = we),
                (w.debounce = Ie),
                (w.defaults = f1),
                (w.defaultsDeep = d1),
                (w.defer = Pe),
                (w.delay = jt),
                (w.difference = dr),
                (w.differenceBy = ot),
                (w.differenceWith = nn),
                (w.drop = Gt),
                (w.dropRight = an),
                (w.dropRightWhile = Zn),
                (w.dropWhile = _o),
                (w.fill = Xt),
                (w.filter = xh),
                (w.flatMap = Eh),
                (w.flatMapDeep = wf),
                (w.flatMapDepth = nm),
                (w.flatten = Aa),
                (w.flattenDeep = of),
                (w.flattenDepth = Oa),
                (w.flip = D),
                (w.flow = vw),
                (w.flowRight = ww),
                (w.fromPairs = Un),
                (w.functions = w1),
                (w.functionsIn = _1),
                (w.groupBy = hu),
                (w.initial = mi),
                (w.intersection = nu),
                (w.intersectionBy = af),
                (w.intersectionWith = Ki),
                (w.invert = x1),
                (w.invertBy = E1),
                (w.invokeMap = pu),
                (w.iteratee = dm),
                (w.keyBy = Ch),
                (w.keys = xn),
                (w.keysIn = pr),
                (w.map = mu),
                (w.mapKeys = I1),
                (w.mapValues = k1),
                (w.matches = _w),
                (w.matchesProperty = Sw),
                (w.memoize = O),
                (w.merge = P1),
                (w.mergeWith = qg),
                (w.method = xw),
                (w.methodOf = Ew),
                (w.mixin = hm),
                (w.negate = F),
                (w.nthArg = Iw),
                (w.omit = R1),
                (w.omitBy = A1),
                (w.once = ue),
                (w.orderBy = gu),
                (w.over = kw),
                (w.overArgs = Re),
                (w.overEvery = Pw),
                (w.overSome = Rw),
                (w.partial = Me),
                (w.partialRight = Be),
                (w.partition = rm),
                (w.pick = O1),
                (w.pickBy = Kg),
                (w.property = e0),
                (w.propertyOf = Aw),
                (w.pull = lf),
                (w.pullAll = ba),
                (w.pullAllBy = su),
                (w.pullAllWith = bn),
                (w.pullAt = Vi),
                (w.range = Ow),
                (w.rangeRight = Nw),
                (w.rearg = Ge),
                (w.reject = yu),
                (w.remove = Nr),
                (w.rest = rn),
                (w.reverse = Sn),
                (w.sampleSize = t),
                (w.set = b1),
                (w.setWith = T1),
                (w.shuffle = o),
                (w.slice = dh),
                (w.sortBy = h),
                (w.sortedUniq = ks),
                (w.sortedUniqBy = df),
                (w.split = nw),
                (w.spread = ft),
                (w.tail = Ps),
                (w.take = ph),
                (w.takeRight = mh),
                (w.takeRightWhile = hf),
                (w.takeWhile = ou),
                (w.tap = mf),
                (w.throttle = Yi),
                (w.thru = au),
                (w.toArray = Ug),
                (w.toPairs = Vg),
                (w.toPairsIn = Qg),
                (w.toPath = Mw),
                (w.toPlainObject = Gg),
                (w.transform = L1),
                (w.unary = sm),
                (w.union = Kp),
                (w.unionBy = Vp),
                (w.unionWith = gh),
                (w.uniq = yh),
                (w.uniqBy = Rs),
                (w.uniqWith = Qp),
                (w.unset = D1),
                (w.unzip = Ji),
                (w.unzipWith = pf),
                (w.update = M1),
                (w.updateWith = F1),
                (w.values = wu),
                (w.valuesIn = B1),
                (w.without = Bt),
                (w.words = Yg),
                (w.wrap = Nv),
                (w.xor = Jp),
                (w.xorBy = vh),
                (w.xorWith = Xp),
                (w.zip = Yp),
                (w.zipObject = wh),
                (w.zipObjectDeep = _h),
                (w.zipWith = Zp),
                (w.entries = Vg),
                (w.entriesIn = Qg),
                (w.extend = Hg),
                (w.extendWith = Ph),
                hm(w, w),
                (w.add = Bw),
                (w.attempt = Zg),
                (w.camelCase = U1),
                (w.capitalize = Jg),
                (w.ceil = jw),
                (w.clamp = j1),
                (w.clone = Tv),
                (w.cloneDeep = Dv),
                (w.cloneDeepWith = Mv),
                (w.cloneWith = Lv),
                (w.conformsTo = Fv),
                (w.deburr = Xg),
                (w.defaultTo = yw),
                (w.divide = zw),
                (w.endsWith = W1),
                (w.eq = gi),
                (w.escape = G1),
                (w.escapeRegExp = H1),
                (w.every = Sh),
                (w.find = cu),
                (w.findIndex = So),
                (w.findKey = h1),
                (w.findLast = fu),
                (w.findLastIndex = qi),
                (w.findLastKey = p1),
                (w.floor = $w),
                (w.forEach = _f),
                (w.forEachRight = du),
                (w.forIn = m1),
                (w.forInRight = g1),
                (w.forOwn = y1),
                (w.forOwnRight = v1),
                (w.get = lm),
                (w.gt = Bv),
                (w.gte = jv),
                (w.has = S1),
                (w.hasIn = um),
                (w.head = tu),
                (w.identity = mr),
                (w.includes = Sf),
                (w.indexOf = xo),
                (w.inRange = z1),
                (w.invoke = C1),
                (w.isArguments = La),
                (w.isArray = Ze),
                (w.isArrayBuffer = zv),
                (w.isArrayLike = hr),
                (w.isArrayLikeObject = Zt),
                (w.isBoolean = $v),
                (w.isBuffer = Eo),
                (w.isDate = Uv),
                (w.isElement = Wv),
                (w.isEmpty = Gv),
                (w.isEqual = Hv),
                (w.isEqualWith = qv),
                (w.isError = om),
                (w.isFinite = Kv),
                (w.isFunction = Os),
                (w.isInteger = Bg),
                (w.isLength = Ih),
                (w.isMap = jg),
                (w.isMatch = Vv),
                (w.isMatchWith = Qv),
                (w.isNaN = Jv),
                (w.isNative = Xv),
                (w.isNil = Zv),
                (w.isNull = Yv),
                (w.isNumber = zg),
                (w.isObject = zt),
                (w.isObjectLike = Ht),
                (w.isPlainObject = xf),
                (w.isRegExp = am),
                (w.isSafeInteger = e1),
                (w.isSet = $g),
                (w.isString = kh),
                (w.isSymbol = br),
                (w.isTypedArray = vu),
                (w.isUndefined = t1),
                (w.isWeakMap = n1),
                (w.isWeakSet = r1),
                (w.join = ru),
                (w.kebabCase = q1),
                (w.last = Yt),
                (w.lastIndexOf = iu),
                (w.lowerCase = K1),
                (w.lowerFirst = V1),
                (w.lt = i1),
                (w.lte = s1),
                (w.max = Uw),
                (w.maxBy = Ww),
                (w.mean = Gw),
                (w.meanBy = Hw),
                (w.min = qw),
                (w.minBy = Kw),
                (w.stubArray = mm),
                (w.stubFalse = gm),
                (w.stubObject = bw),
                (w.stubString = Tw),
                (w.stubTrue = Lw),
                (w.multiply = Vw),
                (w.nth = Na),
                (w.noConflict = Cw),
                (w.noop = pm),
                (w.now = y),
                (w.pad = Q1),
                (w.padEnd = J1),
                (w.padStart = X1),
                (w.parseInt = Y1),
                (w.random = $1),
                (w.reduce = Ta),
                (w.reduceRight = im),
                (w.repeat = Z1),
                (w.replace = ew),
                (w.result = N1),
                (w.round = Qw),
                (w.runInContext = T),
                (w.sample = e),
                (w.size = u),
                (w.snakeCase = tw),
                (w.some = d),
                (w.sortedIndex = uf),
                (w.sortedIndexBy = cf),
                (w.sortedIndexOf = qp),
                (w.sortedLastIndex = Qi),
                (w.sortedLastIndexBy = hh),
                (w.sortedLastIndexOf = ff),
                (w.startCase = rw),
                (w.startsWith = iw),
                (w.subtract = Jw),
                (w.sum = Xw),
                (w.sumBy = Yw),
                (w.template = sw),
                (w.times = Dw),
                (w.toFinite = Ns),
                (w.toInteger = et),
                (w.toLength = Wg),
                (w.toLower = ow),
                (w.toNumber = ti),
                (w.toSafeInteger = o1),
                (w.toString = Ct),
                (w.toUpper = aw),
                (w.trim = lw),
                (w.trimEnd = uw),
                (w.trimStart = cw),
                (w.truncate = fw),
                (w.unescape = dw),
                (w.uniqueId = Fw),
                (w.upperCase = hw),
                (w.upperFirst = cm),
                (w.each = _f),
                (w.eachRight = du),
                (w.first = tu),
                hm(
                  w,
                  (function () {
                    var n = {};
                    return (
                      ur(w, function (s, c) {
                        ct.call(w.prototype, c) || (n[c] = s);
                      }),
                      n
                    );
                  })(),
                  { chain: !1 },
                ),
                (w.VERSION = l),
                cn(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (n) {
                    w[n].placeholder = w;
                  },
                ),
                cn(["drop", "take"], function (n, s) {
                  (Xe.prototype[n] = function (c) {
                    c = c === r ? 1 : Wt(et(c), 0);
                    var p =
                      this.__filtered__ && !s ? new Xe(this) : this.clone();
                    return (
                      p.__filtered__
                        ? (p.__takeCount__ = fn(c, p.__takeCount__))
                        : p.__views__.push({
                            size: fn(c, q),
                            type: n + (p.__dir__ < 0 ? "Right" : ""),
                          }),
                      p
                    );
                  }),
                    (Xe.prototype[n + "Right"] = function (c) {
                      return this.reverse()[n](c).reverse();
                    });
                }),
                cn(["filter", "map", "takeWhile"], function (n, s) {
                  var c = s + 1,
                    p = c == oe || c == Ae;
                  Xe.prototype[n] = function (g) {
                    var _ = this.clone();
                    return (
                      _.__iteratees__.push({ iteratee: De(g, 3), type: c }),
                      (_.__filtered__ = _.__filtered__ || p),
                      _
                    );
                  };
                }),
                cn(["head", "last"], function (n, s) {
                  var c = "take" + (s ? "Right" : "");
                  Xe.prototype[n] = function () {
                    return this[c](1).value()[0];
                  };
                }),
                cn(["initial", "tail"], function (n, s) {
                  var c = "drop" + (s ? "" : "Right");
                  Xe.prototype[n] = function () {
                    return this.__filtered__ ? new Xe(this) : this[c](1);
                  };
                }),
                (Xe.prototype.compact = function () {
                  return this.filter(mr);
                }),
                (Xe.prototype.find = function (n) {
                  return this.filter(n).head();
                }),
                (Xe.prototype.findLast = function (n) {
                  return this.reverse().find(n);
                }),
                (Xe.prototype.invokeMap = Ye(function (n, s) {
                  return typeof n == "function"
                    ? new Xe(this)
                    : this.map(function (c) {
                        return ji(c, n, s);
                      });
                })),
                (Xe.prototype.reject = function (n) {
                  return this.filter(F(De(n)));
                }),
                (Xe.prototype.slice = function (n, s) {
                  n = et(n);
                  var c = this;
                  return c.__filtered__ && (n > 0 || s < 0)
                    ? new Xe(c)
                    : (n < 0 ? (c = c.takeRight(-n)) : n && (c = c.drop(n)),
                      s !== r &&
                        ((s = et(s)),
                        (c = s < 0 ? c.dropRight(-s) : c.take(s - n))),
                      c);
                }),
                (Xe.prototype.takeRightWhile = function (n) {
                  return this.reverse().takeWhile(n).reverse();
                }),
                (Xe.prototype.toArray = function () {
                  return this.take(q);
                }),
                ur(Xe.prototype, function (n, s) {
                  var c = /^(?:filter|find|map|reject)|While$/.test(s),
                    p = /^(?:head|last)$/.test(s),
                    g = w[p ? "take" + (s == "last" ? "Right" : "") : s],
                    _ = p || /^find/.test(s);
                  g &&
                    (w.prototype[s] = function () {
                      var E = this.__wrapped__,
                        P = p ? [1] : arguments,
                        L = E instanceof Xe,
                        Z = P[0],
                        te = L || Ze(E),
                        se = function (it) {
                          var at = g.apply(w, Ri([it], P));
                          return p && ye ? at[0] : at;
                        };
                      te &&
                        c &&
                        typeof Z == "function" &&
                        Z.length != 1 &&
                        (L = te = !1);
                      var ye = this.__chain__,
                        be = !!this.__actions__.length,
                        Ue = _ && !ye,
                        tt = L && !be;
                      if (!_ && te) {
                        E = tt ? E : new Xe(this);
                        var We = n.apply(E, P);
                        return (
                          We.__actions__.push({
                            func: au,
                            args: [se],
                            thisArg: r,
                          }),
                          new dn(We, ye)
                        );
                      }
                      return Ue && tt
                        ? n.apply(this, P)
                        : ((We = this.thru(se)),
                          Ue ? (p ? We.value()[0] : We.value()) : We);
                    });
                }),
                cn(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (n) {
                    var s = si[n],
                      c = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                      p = /^(?:pop|shift)$/.test(n);
                    w.prototype[n] = function () {
                      var g = arguments;
                      if (p && !this.__chain__) {
                        var _ = this.value();
                        return s.apply(Ze(_) ? _ : [], g);
                      }
                      return this[c](function (E) {
                        return s.apply(Ze(E) ? E : [], g);
                      });
                    };
                  },
                ),
                ur(Xe.prototype, function (n, s) {
                  var c = w[s];
                  if (c) {
                    var p = c.name + "";
                    ct.call(eo, p) || (eo[p] = []),
                      eo[p].push({ name: s, func: c });
                  }
                }),
                (eo[mo(r, Y).name] = [{ name: "wrapper", func: r }]),
                (Xe.prototype.clone = Sl),
                (Xe.prototype.reverse = Ic),
                (Xe.prototype.value = ro),
                (w.prototype.at = Xi),
                (w.prototype.chain = lu),
                (w.prototype.commit = As),
                (w.prototype.next = uu),
                (w.prototype.plant = yf),
                (w.prototype.reverse = em),
                (w.prototype.toJSON =
                  w.prototype.valueOf =
                  w.prototype.value =
                    vf),
                (w.prototype.first = w.prototype.head),
                ai && (w.prototype[ai] = gf),
                w
              );
            },
            Vs = Fp();
          Wr ? (((Wr.exports = Vs)._ = Vs), (Yo._ = Vs)) : (Lt._ = Vs);
        }).call(MS);
      })(Cf, Cf.exports)),
    Cf.exports
  );
}
var Ts = FS();
const Hm = "RFC3986",
  qm = {
    RFC1738: (a) => String(a).replace(/%20/g, "+"),
    RFC3986: (a) => String(a),
  },
  BS = "RFC1738",
  jS = Array.isArray,
  Zi = (() => {
    const a = [];
    for (let i = 0; i < 256; ++i)
      a.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    return a;
  })(),
  km = 1024,
  zS = (a, i, r, l, f) => {
    if (a.length === 0) return a;
    let m = a;
    if (
      (typeof a == "symbol"
        ? (m = Symbol.prototype.toString.call(a))
        : typeof a != "string" && (m = String(a)),
      r === "iso-8859-1")
    )
      return escape(m).replace(/%u[0-9a-f]{4}/gi, function (S) {
        return "%26%23" + parseInt(S.slice(2), 16) + "%3B";
      });
    let v = "";
    for (let S = 0; S < m.length; S += km) {
      const N = m.length >= km ? m.slice(S, S + km) : m,
        M = [];
      for (let G = 0; G < N.length; ++G) {
        let I = N.charCodeAt(G);
        if (
          I === 45 ||
          I === 46 ||
          I === 95 ||
          I === 126 ||
          (I >= 48 && I <= 57) ||
          (I >= 65 && I <= 90) ||
          (I >= 97 && I <= 122) ||
          (f === BS && (I === 40 || I === 41))
        ) {
          M[M.length] = N.charAt(G);
          continue;
        }
        if (I < 128) {
          M[M.length] = Zi[I];
          continue;
        }
        if (I < 2048) {
          M[M.length] = Zi[192 | (I >> 6)] + Zi[128 | (I & 63)];
          continue;
        }
        if (I < 55296 || I >= 57344) {
          M[M.length] =
            Zi[224 | (I >> 12)] +
            Zi[128 | ((I >> 6) & 63)] +
            Zi[128 | (I & 63)];
          continue;
        }
        (G += 1),
          (I = 65536 + (((I & 1023) << 10) | (N.charCodeAt(G) & 1023))),
          (M[M.length] =
            Zi[240 | (I >> 18)] +
            Zi[128 | ((I >> 12) & 63)] +
            Zi[128 | ((I >> 6) & 63)] +
            Zi[128 | (I & 63)]);
      }
      v += M.join("");
    }
    return v;
  };
function $S(a) {
  return !a || typeof a != "object"
    ? !1
    : !!(a.constructor && a.constructor.isBuffer && a.constructor.isBuffer(a));
}
function I0(a, i) {
  if (jS(a)) {
    const r = [];
    for (let l = 0; l < a.length; l += 1) r.push(i(a[l]));
    return r;
  }
  return i(a);
}
const US = Object.prototype.hasOwnProperty,
  Sy = {
    brackets(a) {
      return String(a) + "[]";
    },
    comma: "comma",
    indices(a, i) {
      return String(a) + "[" + i + "]";
    },
    repeat(a) {
      return String(a);
    },
  },
  es = Array.isArray,
  WS = Array.prototype.push,
  xy = function (a, i) {
    WS.apply(a, es(i) ? i : [i]);
  },
  GS = Date.prototype.toISOString,
  un = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: zS,
    encodeValuesOnly: !1,
    format: Hm,
    formatter: qm[Hm],
    indices: !1,
    serializeDate(a) {
      return GS.call(a);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  };
function HS(a) {
  return (
    typeof a == "string" ||
    typeof a == "number" ||
    typeof a == "boolean" ||
    typeof a == "symbol" ||
    typeof a == "bigint"
  );
}
const Pm = {};
function Ey(a, i, r, l, f, m, v, S, N, M, G, I, R, H, $, B, z, Y) {
  let K = a,
    J = Y,
    Q = 0,
    ee = !1;
  for (; (J = J.get(Pm)) !== void 0 && !ee; ) {
    const Te = J.get(a);
    if (((Q += 1), typeof Te < "u")) {
      if (Te === Q) throw new RangeError("Cyclic object value");
      ee = !0;
    }
    typeof J.get(Pm) > "u" && (Q = 0);
  }
  if (
    (typeof M == "function"
      ? (K = M(i, K))
      : K instanceof Date
        ? (K = R == null ? void 0 : R(K))
        : r === "comma" &&
          es(K) &&
          (K = I0(K, function (Te) {
            return Te instanceof Date ? (R == null ? void 0 : R(Te)) : Te;
          })),
    K === null)
  ) {
    if (m) return N && !B ? N(i, un.encoder, z, "key", H) : i;
    K = "";
  }
  if (HS(K) || $S(K)) {
    if (N) {
      const Te = B ? i : N(i, un.encoder, z, "key", H);
      return [
        ($ == null ? void 0 : $(Te)) +
          "=" +
          ($ == null ? void 0 : $(N(K, un.encoder, z, "value", H))),
      ];
    }
    return [
      ($ == null ? void 0 : $(i)) + "=" + ($ == null ? void 0 : $(String(K))),
    ];
  }
  const fe = [];
  if (typeof K > "u") return fe;
  let de;
  if (r === "comma" && es(K))
    B && N && (K = I0(K, N)),
      (de = [{ value: K.length > 0 ? K.join(",") || null : void 0 }]);
  else if (es(M)) de = M;
  else {
    const Te = Object.keys(K);
    de = G ? Te.sort(G) : Te;
  }
  const A = S ? String(i).replace(/\./g, "%2E") : String(i),
    je = l && es(K) && K.length === 1 ? A + "[]" : A;
  if (f && es(K) && K.length === 0) return je + "[]";
  for (let Te = 0; Te < de.length; ++Te) {
    const ge = de[Te],
      he = typeof ge == "object" && typeof ge.value < "u" ? ge.value : K[ge];
    if (v && he === null) continue;
    const ce = I && S ? ge.replace(/\./g, "%2E") : ge,
      oe = es(K)
        ? typeof r == "function"
          ? r(je, ce)
          : je
        : je + (I ? "." + ce : "[" + ce + "]");
    Y.set(a, Q);
    const _e = new WeakMap();
    _e.set(Pm, Y),
      xy(
        fe,
        Ey(
          he,
          oe,
          r,
          l,
          f,
          m,
          v,
          S,
          r === "comma" && B && es(K) ? null : N,
          M,
          G,
          I,
          R,
          H,
          $,
          B,
          z,
          _e,
        ),
      );
  }
  return fe;
}
function qS(a = un) {
  if (typeof a.allowEmptyArrays < "u" && typeof a.allowEmptyArrays != "boolean")
    throw new TypeError(
      "`allowEmptyArrays` option can only be `true` or `false`, when provided",
    );
  if (typeof a.encodeDotInKeys < "u" && typeof a.encodeDotInKeys != "boolean")
    throw new TypeError(
      "`encodeDotInKeys` option can only be `true` or `false`, when provided",
    );
  if (
    a.encoder !== null &&
    typeof a.encoder < "u" &&
    typeof a.encoder != "function"
  )
    throw new TypeError("Encoder has to be a function.");
  const i = a.charset || un.charset;
  if (
    typeof a.charset < "u" &&
    a.charset !== "utf-8" &&
    a.charset !== "iso-8859-1"
  )
    throw new TypeError(
      "The charset option must be either utf-8, iso-8859-1, or undefined",
    );
  let r = Hm;
  if (typeof a.format < "u") {
    if (!US.call(qm, a.format))
      throw new TypeError("Unknown format option provided.");
    r = a.format;
  }
  const l = qm[r];
  let f = un.filter;
  (typeof a.filter == "function" || es(a.filter)) && (f = a.filter);
  let m;
  if (
    (a.arrayFormat && a.arrayFormat in Sy
      ? (m = a.arrayFormat)
      : "indices" in a
        ? (m = a.indices ? "indices" : "repeat")
        : (m = un.arrayFormat),
    "commaRoundTrip" in a && typeof a.commaRoundTrip != "boolean")
  )
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  const v =
    typeof a.allowDots > "u"
      ? a.encodeDotInKeys
        ? !0
        : un.allowDots
      : !!a.allowDots;
  return {
    addQueryPrefix:
      typeof a.addQueryPrefix == "boolean"
        ? a.addQueryPrefix
        : un.addQueryPrefix,
    allowDots: v,
    allowEmptyArrays:
      typeof a.allowEmptyArrays == "boolean"
        ? !!a.allowEmptyArrays
        : un.allowEmptyArrays,
    arrayFormat: m,
    charset: i,
    charsetSentinel:
      typeof a.charsetSentinel == "boolean"
        ? a.charsetSentinel
        : un.charsetSentinel,
    commaRoundTrip: !!a.commaRoundTrip,
    delimiter: typeof a.delimiter > "u" ? un.delimiter : a.delimiter,
    encode: typeof a.encode == "boolean" ? a.encode : un.encode,
    encodeDotInKeys:
      typeof a.encodeDotInKeys == "boolean"
        ? a.encodeDotInKeys
        : un.encodeDotInKeys,
    encoder: typeof a.encoder == "function" ? a.encoder : un.encoder,
    encodeValuesOnly:
      typeof a.encodeValuesOnly == "boolean"
        ? a.encodeValuesOnly
        : un.encodeValuesOnly,
    filter: f,
    format: r,
    formatter: l,
    serializeDate:
      typeof a.serializeDate == "function" ? a.serializeDate : un.serializeDate,
    skipNulls: typeof a.skipNulls == "boolean" ? a.skipNulls : un.skipNulls,
    sort: typeof a.sort == "function" ? a.sort : null,
    strictNullHandling:
      typeof a.strictNullHandling == "boolean"
        ? a.strictNullHandling
        : un.strictNullHandling,
  };
}
function KS(a, i = {}) {
  let r = a;
  const l = qS(i);
  let f, m;
  typeof l.filter == "function"
    ? ((m = l.filter), (r = m("", r)))
    : es(l.filter) && ((m = l.filter), (f = m));
  const v = [];
  if (typeof r != "object" || r === null) return "";
  const S = Sy[l.arrayFormat],
    N = S === "comma" && l.commaRoundTrip;
  f || (f = Object.keys(r)), l.sort && f.sort(l.sort);
  const M = new WeakMap();
  for (let R = 0; R < f.length; ++R) {
    const H = f[R];
    (l.skipNulls && r[H] === null) ||
      xy(
        v,
        Ey(
          r[H],
          H,
          S,
          N,
          l.allowEmptyArrays,
          l.strictNullHandling,
          l.skipNulls,
          l.encodeDotInKeys,
          l.encode ? l.encoder : null,
          l.filter,
          l.sort,
          l.allowDots,
          l.serializeDate,
          l.format,
          l.formatter,
          l.encodeValuesOnly,
          l.charset,
          M,
        ),
      );
  }
  const G = v.join(l.delimiter);
  let I = l.addQueryPrefix === !0 ? "?" : "";
  return (
    l.charsetSentinel &&
      (l.charset === "iso-8859-1"
        ? (I += "utf8=%26%2310003%3B&")
        : (I += "utf8=%E2%9C%93&")),
    G.length > 0 ? I + G : ""
  );
}
const Cu = "4.87.3";
let k0 = !1,
  Nf,
  Cy,
  Iy,
  Km,
  ky,
  Py,
  Ry,
  Ay,
  Oy;
function VS(a, i = { auto: !1 }) {
  if (k0)
    throw new Error(
      `you must \`import 'openai/shims/${a.kind}'\` before importing anything else from openai`,
    );
  if (Nf)
    throw new Error(
      `can't \`import 'openai/shims/${a.kind}'\` after \`import 'openai/shims/${Nf}'\``,
    );
  (k0 = i.auto),
    (Nf = a.kind),
    (Cy = a.fetch),
    (Iy = a.FormData),
    (Km = a.File),
    (ky = a.ReadableStream),
    (Py = a.getMultipartRequestOptions),
    (Ry = a.getDefaultAgent),
    (Ay = a.fileFromPath),
    (Oy = a.isFsReadStream);
}
class QS {
  constructor(i) {
    this.body = i;
  }
  get [Symbol.toStringTag]() {
    return "MultipartBody";
  }
}
function JS({ manuallyImported: a } = {}) {
  const i = a
    ? "You may need to use polyfills"
    : "Add one of these imports before your first `import … from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";
  let r, l, f, m;
  try {
    (r = fetch), (l = Request), (f = Response), (m = Headers);
  } catch (v) {
    throw new Error(
      `this environment is missing the following Web Fetch API type: ${v.message}. ${i}`,
    );
  }
  return {
    kind: "web",
    fetch: r,
    Request: l,
    Response: f,
    Headers: m,
    FormData:
      typeof FormData < "u"
        ? FormData
        : class {
            constructor() {
              throw new Error(
                `file uploads aren't supported in this environment yet as 'FormData' is undefined. ${i}`,
              );
            }
          },
    Blob:
      typeof Blob < "u"
        ? Blob
        : class {
            constructor() {
              throw new Error(
                `file uploads aren't supported in this environment yet as 'Blob' is undefined. ${i}`,
              );
            }
          },
    File:
      typeof File < "u"
        ? File
        : class {
            constructor() {
              throw new Error(
                `file uploads aren't supported in this environment yet as 'File' is undefined. ${i}`,
              );
            }
          },
    ReadableStream:
      typeof ReadableStream < "u"
        ? ReadableStream
        : class {
            constructor() {
              throw new Error(
                `streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${i}`,
              );
            }
          },
    getMultipartRequestOptions: async (v, S) => ({ ...S, body: new QS(v) }),
    getDefaultAgent: (v) => {},
    fileFromPath: () => {
      throw new Error(
        "The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads",
      );
    },
    isFsReadStream: (v) => !1,
  };
}
Nf || VS(JS(), { auto: !0 });
class He extends Error {}
class Dn extends He {
  constructor(i, r, l, f) {
    super(`${Dn.makeMessage(i, r, l)}`),
      (this.status = i),
      (this.headers = f),
      (this.request_id = f == null ? void 0 : f["x-request-id"]),
      (this.error = r);
    const m = r;
    (this.code = m == null ? void 0 : m.code),
      (this.param = m == null ? void 0 : m.param),
      (this.type = m == null ? void 0 : m.type);
  }
  static makeMessage(i, r, l) {
    const f =
      r != null && r.message
        ? typeof r.message == "string"
          ? r.message
          : JSON.stringify(r.message)
        : r
          ? JSON.stringify(r)
          : l;
    return i && f
      ? `${i} ${f}`
      : i
        ? `${i} status code (no body)`
        : f || "(no status code or body)";
  }
  static generate(i, r, l, f) {
    if (!i || !f) return new ip({ message: l, cause: Qm(r) });
    const m = r == null ? void 0 : r.error;
    return i === 400
      ? new Ny(i, m, l, f)
      : i === 401
        ? new by(i, m, l, f)
        : i === 403
          ? new Ty(i, m, l, f)
          : i === 404
            ? new Ly(i, m, l, f)
            : i === 409
              ? new Dy(i, m, l, f)
              : i === 422
                ? new My(i, m, l, f)
                : i === 429
                  ? new Fy(i, m, l, f)
                  : i >= 500
                    ? new By(i, m, l, f)
                    : new Dn(i, m, l, f);
  }
}
class ri extends Dn {
  constructor({ message: i } = {}) {
    super(void 0, void 0, i || "Request was aborted.", void 0);
  }
}
class ip extends Dn {
  constructor({ message: i, cause: r }) {
    super(void 0, void 0, i || "Connection error.", void 0),
      r && (this.cause = r);
  }
}
class lg extends ip {
  constructor({ message: i } = {}) {
    super({ message: i ?? "Request timed out." });
  }
}
class Ny extends Dn {}
class by extends Dn {}
class Ty extends Dn {}
class Ly extends Dn {}
class Dy extends Dn {}
class My extends Dn {}
class Fy extends Dn {}
class By extends Dn {}
class jy extends He {
  constructor() {
    super("Could not parse response content as the length limit was reached");
  }
}
class zy extends He {
  constructor() {
    super(
      "Could not parse response content as the request was rejected by the content filter",
    );
  }
}
var bh = function (a, i, r, l, f) {
    if (l === "m") throw new TypeError("Private method is not writable");
    if (l === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof i == "function" ? a !== i || !f : !i.has(a))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return l === "a" ? f.call(a, r) : f ? (f.value = r) : i.set(a, r), r;
  },
  Da = function (a, i, r, l) {
    if (r === "a" && !l)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof i == "function" ? a !== i || !l : !i.has(a))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return r === "m" ? l : r === "a" ? l.call(a) : l ? l.value : i.get(a);
  },
  Mr;
class sp {
  constructor() {
    Mr.set(this, void 0),
      (this.buffer = new Uint8Array()),
      bh(this, Mr, null, "f");
  }
  decode(i) {
    if (i == null) return [];
    const r =
      i instanceof ArrayBuffer
        ? new Uint8Array(i)
        : typeof i == "string"
          ? new TextEncoder().encode(i)
          : i;
    let l = new Uint8Array(this.buffer.length + r.length);
    l.set(this.buffer), l.set(r, this.buffer.length), (this.buffer = l);
    const f = [];
    let m;
    for (; (m = XS(this.buffer, Da(this, Mr, "f"))) != null; ) {
      if (m.carriage && Da(this, Mr, "f") == null) {
        bh(this, Mr, m.index, "f");
        continue;
      }
      if (
        Da(this, Mr, "f") != null &&
        (m.index !== Da(this, Mr, "f") + 1 || m.carriage)
      ) {
        f.push(this.decodeText(this.buffer.slice(0, Da(this, Mr, "f") - 1))),
          (this.buffer = this.buffer.slice(Da(this, Mr, "f"))),
          bh(this, Mr, null, "f");
        continue;
      }
      const v = Da(this, Mr, "f") !== null ? m.preceding - 1 : m.preceding,
        S = this.decodeText(this.buffer.slice(0, v));
      f.push(S),
        (this.buffer = this.buffer.slice(m.index)),
        bh(this, Mr, null, "f");
    }
    return f;
  }
  decodeText(i) {
    if (i == null) return "";
    if (typeof i == "string") return i;
    if (typeof Buffer < "u") {
      if (i instanceof Buffer) return i.toString();
      if (i instanceof Uint8Array) return Buffer.from(i).toString();
      throw new He(
        `Unexpected: received non-Uint8Array (${i.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`,
      );
    }
    if (typeof TextDecoder < "u") {
      if (i instanceof Uint8Array || i instanceof ArrayBuffer)
        return (
          this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8")),
          this.textDecoder.decode(i)
        );
      throw new He(
        `Unexpected: received non-Uint8Array/ArrayBuffer (${i.constructor.name}) in a web platform. Please report this error.`,
      );
    }
    throw new He(
      "Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.",
    );
  }
  flush() {
    return this.buffer.length
      ? this.decode(`
`)
      : [];
  }
}
Mr = new WeakMap();
sp.NEWLINE_CHARS = new Set([
  `
`,
  "\r",
]);
sp.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function XS(a, i) {
  for (let f = i ?? 0; f < a.length; f++) {
    if (a[f] === 10) return { preceding: f, index: f + 1, carriage: !1 };
    if (a[f] === 13) return { preceding: f, index: f + 1, carriage: !0 };
  }
  return null;
}
function YS(a) {
  for (let l = 0; l < a.length - 1; l++) {
    if ((a[l] === 10 && a[l + 1] === 10) || (a[l] === 13 && a[l + 1] === 13))
      return l + 2;
    if (
      a[l] === 13 &&
      a[l + 1] === 10 &&
      l + 3 < a.length &&
      a[l + 2] === 13 &&
      a[l + 3] === 10
    )
      return l + 4;
  }
  return -1;
}
function $y(a) {
  if (a[Symbol.asyncIterator]) return a;
  const i = a.getReader();
  return {
    async next() {
      try {
        const r = await i.read();
        return r != null && r.done && i.releaseLock(), r;
      } catch (r) {
        throw (i.releaseLock(), r);
      }
    },
    async return() {
      const r = i.cancel();
      return i.releaseLock(), await r, { done: !0, value: void 0 };
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}
class ss {
  constructor(i, r) {
    (this.iterator = i), (this.controller = r);
  }
  static fromSSEResponse(i, r) {
    let l = !1;
    async function* f() {
      if (l)
        throw new Error(
          "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
        );
      l = !0;
      let m = !1;
      try {
        for await (const v of ZS(i, r))
          if (!m) {
            if (v.data.startsWith("[DONE]")) {
              m = !0;
              continue;
            }
            if (v.event === null || v.event.startsWith("response.")) {
              let S;
              try {
                S = JSON.parse(v.data);
              } catch (N) {
                throw (
                  (console.error("Could not parse message into JSON:", v.data),
                  console.error("From chunk:", v.raw),
                  N)
                );
              }
              if (S && S.error) throw new Dn(void 0, S.error, void 0, void 0);
              yield S;
            } else {
              let S;
              try {
                S = JSON.parse(v.data);
              } catch (N) {
                throw (
                  (console.error("Could not parse message into JSON:", v.data),
                  console.error("From chunk:", v.raw),
                  N)
                );
              }
              if (v.event == "error")
                throw new Dn(void 0, S.error, S.message, void 0);
              yield { event: v.event, data: S };
            }
          }
        m = !0;
      } catch (v) {
        if (v instanceof Error && v.name === "AbortError") return;
        throw v;
      } finally {
        m || r.abort();
      }
    }
    return new ss(f, r);
  }
  static fromReadableStream(i, r) {
    let l = !1;
    async function* f() {
      const v = new sp(),
        S = $y(i);
      for await (const N of S) for (const M of v.decode(N)) yield M;
      for (const N of v.flush()) yield N;
    }
    async function* m() {
      if (l)
        throw new Error(
          "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
        );
      l = !0;
      let v = !1;
      try {
        for await (const S of f()) v || (S && (yield JSON.parse(S)));
        v = !0;
      } catch (S) {
        if (S instanceof Error && S.name === "AbortError") return;
        throw S;
      } finally {
        v || r.abort();
      }
    }
    return new ss(m, r);
  }
  [Symbol.asyncIterator]() {
    return this.iterator();
  }
  tee() {
    const i = [],
      r = [],
      l = this.iterator(),
      f = (m) => ({
        next: () => {
          if (m.length === 0) {
            const v = l.next();
            i.push(v), r.push(v);
          }
          return m.shift();
        },
      });
    return [
      new ss(() => f(i), this.controller),
      new ss(() => f(r), this.controller),
    ];
  }
  toReadableStream() {
    const i = this;
    let r;
    const l = new TextEncoder();
    return new ky({
      async start() {
        r = i[Symbol.asyncIterator]();
      },
      async pull(f) {
        try {
          const { value: m, done: v } = await r.next();
          if (v) return f.close();
          const S = l.encode(
            JSON.stringify(m) +
              `
`,
          );
          f.enqueue(S);
        } catch (m) {
          f.error(m);
        }
      },
      async cancel() {
        var f;
        await ((f = r.return) == null ? void 0 : f.call(r));
      },
    });
  }
}
async function* ZS(a, i) {
  if (!a.body)
    throw (
      (i.abort(), new He("Attempted to iterate over a response with no body"))
    );
  const r = new tx(),
    l = new sp(),
    f = $y(a.body);
  for await (const m of ex(f))
    for (const v of l.decode(m)) {
      const S = r.decode(v);
      S && (yield S);
    }
  for (const m of l.flush()) {
    const v = r.decode(m);
    v && (yield v);
  }
}
async function* ex(a) {
  let i = new Uint8Array();
  for await (const r of a) {
    if (r == null) continue;
    const l =
      r instanceof ArrayBuffer
        ? new Uint8Array(r)
        : typeof r == "string"
          ? new TextEncoder().encode(r)
          : r;
    let f = new Uint8Array(i.length + l.length);
    f.set(i), f.set(l, i.length), (i = f);
    let m;
    for (; (m = YS(i)) !== -1; ) yield i.slice(0, m), (i = i.slice(m));
  }
  i.length > 0 && (yield i);
}
class tx {
  constructor() {
    (this.event = null), (this.data = []), (this.chunks = []);
  }
  decode(i) {
    if ((i.endsWith("\r") && (i = i.substring(0, i.length - 1)), !i)) {
      if (!this.event && !this.data.length) return null;
      const m = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks,
      };
      return (this.event = null), (this.data = []), (this.chunks = []), m;
    }
    if ((this.chunks.push(i), i.startsWith(":"))) return null;
    let [r, l, f] = nx(i, ":");
    return (
      f.startsWith(" ") && (f = f.substring(1)),
      r === "event" ? (this.event = f) : r === "data" && this.data.push(f),
      null
    );
  }
}
function nx(a, i) {
  const r = a.indexOf(i);
  return r !== -1
    ? [a.substring(0, r), i, a.substring(r + i.length)]
    : [a, "", ""];
}
const Uy = (a) =>
    a != null &&
    typeof a == "object" &&
    typeof a.url == "string" &&
    typeof a.blob == "function",
  Wy = (a) =>
    a != null &&
    typeof a == "object" &&
    typeof a.name == "string" &&
    typeof a.lastModified == "number" &&
    op(a),
  op = (a) =>
    a != null &&
    typeof a == "object" &&
    typeof a.size == "number" &&
    typeof a.type == "string" &&
    typeof a.text == "function" &&
    typeof a.slice == "function" &&
    typeof a.arrayBuffer == "function",
  rx = (a) => Wy(a) || Uy(a) || Oy(a);
async function Gy(a, i, r) {
  var f;
  if (((a = await a), Wy(a))) return a;
  if (Uy(a)) {
    const m = await a.blob();
    i || (i = new URL(a.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
    const v = op(m) ? [await m.arrayBuffer()] : [m];
    return new Km(v, i, r);
  }
  const l = await ix(a);
  if ((i || (i = ox(a) ?? "unknown_file"), !(r != null && r.type))) {
    const m = (f = l[0]) == null ? void 0 : f.type;
    typeof m == "string" && (r = { ...r, type: m });
  }
  return new Km(l, i, r);
}
async function ix(a) {
  var r;
  let i = [];
  if (typeof a == "string" || ArrayBuffer.isView(a) || a instanceof ArrayBuffer)
    i.push(a);
  else if (op(a)) i.push(await a.arrayBuffer());
  else if (ax(a)) for await (const l of a) i.push(l);
  else
    throw new Error(
      `Unexpected data type: ${typeof a}; constructor: ${(r = a == null ? void 0 : a.constructor) == null ? void 0 : r.name}; props: ${sx(a)}`,
    );
  return i;
}
function sx(a) {
  return `[${Object.getOwnPropertyNames(a)
    .map((r) => `"${r}"`)
    .join(", ")}]`;
}
function ox(a) {
  var i;
  return (
    Rm(a.name) ||
    Rm(a.filename) ||
    ((i = Rm(a.path)) == null ? void 0 : i.split(/[\\/]/).pop())
  );
}
const Rm = (a) => {
    if (typeof a == "string") return a;
    if (typeof Buffer < "u" && a instanceof Buffer) return String(a);
  },
  ax = (a) =>
    a != null &&
    typeof a == "object" &&
    typeof a[Symbol.asyncIterator] == "function",
  P0 = (a) =>
    a &&
    typeof a == "object" &&
    a.body &&
    a[Symbol.toStringTag] === "MultipartBody",
  zu = async (a) => {
    const i = await lx(a.body);
    return Py(i, a);
  },
  lx = async (a) => {
    const i = new Iy();
    return (
      await Promise.all(Object.entries(a || {}).map(([r, l]) => Vm(i, r, l))), i
    );
  },
  Vm = async (a, i, r) => {
    if (r !== void 0) {
      if (r == null)
        throw new TypeError(
          `Received null for "${i}"; to pass null in FormData, you must use the string 'null'`,
        );
      if (typeof r == "string" || typeof r == "number" || typeof r == "boolean")
        a.append(i, String(r));
      else if (rx(r)) {
        const l = await Gy(r);
        a.append(i, l);
      } else if (Array.isArray(r))
        await Promise.all(r.map((l) => Vm(a, i + "[]", l)));
      else if (typeof r == "object")
        await Promise.all(
          Object.entries(r).map(([l, f]) => Vm(a, `${i}[${l}]`, f)),
        );
      else
        throw new TypeError(
          `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${r} instead`,
        );
    }
  };
var Pu = {
    GJS_DEBUG_TOPICS: "JS ERROR;JS LOG",
    LESSOPEN: "| /usr/bin/lesspipe %s",
    USER: "damian",
    npm_config_user_agent:
      "npm/10.9.0 node/v22.11.0 linux x64 workspaces/false",
    FONTCONFIG_PATH: "/etc/fonts",
    GIO_MODULE_DIR: "/home/damian/snap/code/common/.cache/gio-modules",
    XDG_SESSION_TYPE: "x11",
    GIT_ASKPASS:
      "/snap/code/187/usr/share/code/resources/app/extensions/git/dist/askpass.sh",
    GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: "",
    npm_node_execpath: "/home/damian/.nvm/versions/node/v22.11.0/bin/node",
    GDK_BACKEND_VSCODE_SNAP_ORIG: "",
    SHLVL: "1",
    npm_config_noproxy: "",
    HOME: "/home/damian",
    CHROME_DESKTOP: "code.desktop",
    LOCPATH_VSCODE_SNAP_ORIG: "",
    TERM_PROGRAM_VERSION: "1.98.2",
    DESKTOP_SESSION: "ubuntu",
    GTK_PATH: "/snap/code/187/usr/lib/x86_64-linux-gnu/gtk-3.0",
    NVM_BIN: "/home/damian/.nvm/versions/node/v22.11.0/bin",
    npm_package_json:
      "/home/damian/Dokumenty/webowe nauka/projekty-moje/portfolio-website-2-React/package.json",
    NVM_INC: "/home/damian/.nvm/versions/node/v22.11.0/include/node",
    XDG_DATA_HOME_VSCODE_SNAP_ORIG: "",
    GTK_IM_MODULE_FILE:
      "/home/damian/snap/code/common/.cache/immodules/immodules.cache",
    GIO_LAUNCHED_DESKTOP_FILE:
      "/var/lib/snapd/desktop/applications/code_code.desktop",
    GNOME_SHELL_SESSION_MODE: "ubuntu",
    GTK_MODULES: "gail:atk-bridge",
    GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: "",
    VSCODE_GIT_ASKPASS_MAIN:
      "/snap/code/187/usr/share/code/resources/app/extensions/git/dist/askpass-main.js",
    VSCODE_GIT_ASKPASS_NODE: "/snap/code/187/usr/share/code/code",
    MANAGERPID: "2462",
    npm_config_userconfig: "/home/damian/.npmrc",
    npm_config_local_prefix:
      "/home/damian/Dokumenty/webowe nauka/projekty-moje/portfolio-website-2-React",
    SYSTEMD_EXEC_PID: "2831",
    GSM_SKIP_SSH_AGENT_WORKAROUND: "true",
    DBUS_SESSION_BUS_ADDRESS: "unix:path=/run/user/1000/bus",
    COLORTERM: "truecolor",
    GIO_LAUNCHED_DESKTOP_FILE_PID: "7892",
    COLOR: "1",
    VOLTA_HOME: "/home/damian/.volta",
    NVM_DIR: "/home/damian/.nvm",
    DEBUGINFOD_URLS: "https://debuginfod.ubuntu.com ",
    LOGNAME: "damian",
    JOURNAL_STREAM: "8:25113",
    _: "/home/damian/.nvm/versions/node/v22.11.0/bin/npm",
    npm_config_prefix: "/home/damian/.nvm/versions/node/v22.11.0",
    npm_config_npm_version: "10.9.0",
    XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: "/etc/xdg/xdg-ubuntu:/etc/xdg",
    MEMORY_PRESSURE_WATCH:
      "/sys/fs/cgroup/user.slice/user-1000.slice/user@1000.service/session.slice/org.gnome.Shell@x11.service/memory.pressure",
    XDG_SESSION_CLASS: "user",
    XDG_DATA_DIRS_VSCODE_SNAP_ORIG:
      "/usr/share/ubuntu:/usr/share/gnome:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop",
    USERNAME: "damian",
    TERM: "xterm-256color",
    npm_config_cache: "/home/damian/.npm",
    GNOME_DESKTOP_SESSION_ID: "this-is-deprecated",
    WINDOWPATH: "2",
    npm_config_node_gyp:
      "/home/damian/.nvm/versions/node/v22.11.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",
    PATH: "/home/damian/Dokumenty/webowe nauka/projekty-moje/portfolio-website-2-React/node_modules/.bin:/home/damian/Dokumenty/webowe nauka/projekty-moje/node_modules/.bin:/home/damian/Dokumenty/webowe nauka/node_modules/.bin:/home/damian/Dokumenty/node_modules/.bin:/home/damian/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/damian/.nvm/versions/node/v22.11.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/damian/.nvm/versions/node/v22.11.0/bin:/home/damian/.volta/bin:/home/damian/.volta/bin:/home/damian/.volta/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin",
    SESSION_MANAGER:
      "local/damian-Legion-5-15ARH7:@/tmp/.ICE-unix/2789,unix/damian-Legion-5-15ARH7:/tmp/.ICE-unix/2789",
    GTK_EXE_PREFIX: "/snap/code/187/usr",
    INVOCATION_ID: "1af45bac383a4883b2eeb01492539f22",
    NODE: "/home/damian/.nvm/versions/node/v22.11.0/bin/node",
    npm_package_name: "citr-v8-project",
    XDG_MENU_PREFIX: "gnome-",
    BAMF_DESKTOP_FILE_HINT:
      "/var/lib/snapd/desktop/applications/code_code.desktop",
    XDG_RUNTIME_DIR: "/run/user/1000",
    GDK_BACKEND: "x11",
    DISPLAY: ":0",
    LOCPATH: "/snap/code/187/usr/lib/locale",
    LANG: "pl_PL.UTF-8",
    XDG_CURRENT_DESKTOP: "Unity",
    GIO_MODULE_DIR_VSCODE_SNAP_ORIG: "",
    XDG_DATA_HOME: "/home/damian/snap/code/187/.local/share",
    XMODIFIERS: "@im=ibus",
    XDG_SESSION_DESKTOP: "ubuntu",
    XAUTHORITY: "/run/user/1000/gdm/Xauthority",
    LS_COLORS:
      "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=00:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.avif=01;35:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:*~=00;90:*#=00;90:*.bak=00;90:*.crdownload=00;90:*.dpkg-dist=00;90:*.dpkg-new=00;90:*.dpkg-old=00;90:*.dpkg-tmp=00;90:*.old=00;90:*.orig=00;90:*.part=00;90:*.rej=00;90:*.rpmnew=00;90:*.rpmorig=00;90:*.rpmsave=00;90:*.swp=00;90:*.tmp=00;90:*.ucf-dist=00;90:*.ucf-new=00;90:*.ucf-old=00;90:",
    VSCODE_GIT_IPC_HANDLE: "/run/user/1000/vscode-git-e6dff17001.sock",
    TERM_PROGRAM: "vscode",
    npm_lifecycle_script: "vite build",
    SSH_AUTH_SOCK: "/run/user/1000/keyring/ssh",
    GSETTINGS_SCHEMA_DIR:
      "/home/damian/snap/code/187/.local/share/glib-2.0/schemas",
    ORIGINAL_XDG_CURRENT_DESKTOP: "ubuntu:GNOME",
    SHELL: "/bin/bash",
    npm_package_version: "8.0.0",
    npm_lifecycle_event: "build",
    QT_ACCESSIBILITY: "1",
    GDMSESSION: "ubuntu",
    LESSCLOSE: "/usr/bin/lesspipe %s %s",
    GTK_PATH_VSCODE_SNAP_ORIG: "",
    FONTCONFIG_FILE: "/etc/fonts/fonts.conf",
    GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: "",
    GPG_AGENT_INFO: "/run/user/1000/gnupg/S.gpg-agent:0:1",
    GJS_DEBUG_OUTPUT: "stderr",
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: "",
    QT_IM_MODULE: "ibus",
    npm_config_globalconfig:
      "/home/damian/.nvm/versions/node/v22.11.0/etc/npmrc",
    npm_config_init_module: "/home/damian/.npm-init.js",
    PWD: "/home/damian/Dokumenty/webowe nauka/projekty-moje/portfolio-website-2-React",
    npm_execpath:
      "/home/damian/.nvm/versions/node/v22.11.0/lib/node_modules/npm/bin/npm-cli.js",
    XDG_CONFIG_DIRS: "/etc/xdg/xdg-ubuntu:/etc/xdg",
    NVM_CD_FLAGS: "",
    XDG_DATA_DIRS:
      "/home/damian/snap/code/187/.local/share:/home/damian/snap/code/187:/snap/code/187/usr/share:/usr/share/ubuntu:/usr/share/gnome:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop",
    npm_config_global_prefix: "/home/damian/.nvm/versions/node/v22.11.0",
    npm_command: "run-script",
    NODE_ENV: "production",
    MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=",
    INIT_CWD:
      "/home/damian/Dokumenty/webowe nauka/projekty-moje/portfolio-website-2-React",
    EDITOR: "vi",
  },
  ux = function (a, i, r, l, f) {
    if (typeof i == "function" ? a !== i || !f : !i.has(a))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return i.set(a, r), r;
  },
  cx = function (a, i, r, l) {
    if (r === "a" && !l)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof i == "function" ? a !== i || !l : !i.has(a))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return r === "m" ? l : r === "a" ? l.call(a) : l ? l.value : i.get(a);
  },
  Th;
async function Hy(a) {
  var v;
  const { response: i } = a;
  if (a.options.stream)
    return (
      Ru("response", i.status, i.url, i.headers, i.body),
      a.options.__streamClass
        ? a.options.__streamClass.fromSSEResponse(i, a.controller)
        : ss.fromSSEResponse(i, a.controller)
    );
  if (i.status === 204) return null;
  if (a.options.__binaryResponse) return i;
  const r = i.headers.get("content-type"),
    l = (v = r == null ? void 0 : r.split(";")[0]) == null ? void 0 : v.trim();
  if (
    (l == null ? void 0 : l.includes("application/json")) ||
    (l == null ? void 0 : l.endsWith("+json"))
  ) {
    const S = await i.json();
    return Ru("response", i.status, i.url, i.headers, S), qy(S, i);
  }
  const m = await i.text();
  return Ru("response", i.status, i.url, i.headers, m), m;
}
function qy(a, i) {
  return !a || typeof a != "object" || Array.isArray(a)
    ? a
    : Object.defineProperty(a, "_request_id", {
        value: i.headers.get("x-request-id"),
        enumerable: !1,
      });
}
class ap extends Promise {
  constructor(i, r = Hy) {
    super((l) => {
      l(null);
    }),
      (this.responsePromise = i),
      (this.parseResponse = r);
  }
  _thenUnwrap(i) {
    return new ap(this.responsePromise, async (r) =>
      qy(i(await this.parseResponse(r), r), r.response),
    );
  }
  asResponse() {
    return this.responsePromise.then((i) => i.response);
  }
  async withResponse() {
    const [i, r] = await Promise.all([this.parse(), this.asResponse()]);
    return { data: i, response: r, request_id: r.headers.get("x-request-id") };
  }
  parse() {
    return (
      this.parsedPromise ||
        (this.parsedPromise = this.responsePromise.then(this.parseResponse)),
      this.parsedPromise
    );
  }
  then(i, r) {
    return this.parse().then(i, r);
  }
  catch(i) {
    return this.parse().catch(i);
  }
  finally(i) {
    return this.parse().finally(i);
  }
}
class fx {
  constructor({
    baseURL: i,
    maxRetries: r = 2,
    timeout: l = 6e5,
    httpAgent: f,
    fetch: m,
  }) {
    (this.baseURL = i),
      (this.maxRetries = Am("maxRetries", r)),
      (this.timeout = Am("timeout", l)),
      (this.httpAgent = f),
      (this.fetch = m ?? Cy);
  }
  authHeaders(i) {
    return {};
  }
  defaultHeaders(i) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": this.getUserAgent(),
      ...yx(),
      ...this.authHeaders(i),
    };
  }
  validateHeaders(i, r) {}
  defaultIdempotencyKey() {
    return `stainless-node-retry-${Sx()}`;
  }
  get(i, r) {
    return this.methodRequest("get", i, r);
  }
  post(i, r) {
    return this.methodRequest("post", i, r);
  }
  patch(i, r) {
    return this.methodRequest("patch", i, r);
  }
  put(i, r) {
    return this.methodRequest("put", i, r);
  }
  delete(i, r) {
    return this.methodRequest("delete", i, r);
  }
  methodRequest(i, r, l) {
    return this.request(
      Promise.resolve(l).then(async (f) => {
        const m =
          f && op(f == null ? void 0 : f.body)
            ? new DataView(await f.body.arrayBuffer())
            : (f == null ? void 0 : f.body) instanceof DataView
              ? f.body
              : (f == null ? void 0 : f.body) instanceof ArrayBuffer
                ? new DataView(f.body)
                : f && ArrayBuffer.isView(f == null ? void 0 : f.body)
                  ? new DataView(f.body.buffer)
                  : f == null
                    ? void 0
                    : f.body;
        return { method: i, path: r, ...f, body: m };
      }),
    );
  }
  getAPIList(i, r, l) {
    return this.requestAPIList(r, { method: "get", path: i, ...l });
  }
  calculateContentLength(i) {
    if (typeof i == "string") {
      if (typeof Buffer < "u") return Buffer.byteLength(i, "utf8").toString();
      if (typeof TextEncoder < "u")
        return new TextEncoder().encode(i).length.toString();
    } else if (ArrayBuffer.isView(i)) return i.byteLength.toString();
    return null;
  }
  buildRequest(i, { retryCount: r = 0 } = {}) {
    var $;
    i = { ...i };
    const { method: l, path: f, query: m, headers: v = {} } = i,
      S =
        ArrayBuffer.isView(i.body) ||
        (i.__binaryRequest && typeof i.body == "string")
          ? i.body
          : P0(i.body)
            ? i.body.body
            : i.body
              ? JSON.stringify(i.body, null, 2)
              : null,
      N = this.calculateContentLength(S),
      M = this.buildURL(f, m);
    "timeout" in i && Am("timeout", i.timeout),
      (i.timeout = i.timeout ?? this.timeout);
    const G = i.httpAgent ?? this.httpAgent ?? Ry(M),
      I = i.timeout + 1e3;
    typeof (($ = G == null ? void 0 : G.options) == null
      ? void 0
      : $.timeout) == "number" &&
      I > (G.options.timeout ?? 0) &&
      (G.options.timeout = I),
      this.idempotencyHeader &&
        l !== "get" &&
        (i.idempotencyKey || (i.idempotencyKey = this.defaultIdempotencyKey()),
        (v[this.idempotencyHeader] = i.idempotencyKey));
    const R = this.buildHeaders({
      options: i,
      headers: v,
      contentLength: N,
      retryCount: r,
    });
    return {
      req: {
        method: l,
        ...(S && { body: S }),
        headers: R,
        ...(G && { agent: G }),
        signal: i.signal ?? null,
      },
      url: M,
      timeout: i.timeout,
    };
  }
  buildHeaders({ options: i, headers: r, contentLength: l, retryCount: f }) {
    const m = {};
    l && (m["content-length"] = l);
    const v = this.defaultHeaders(i);
    return (
      N0(m, v),
      N0(m, r),
      P0(i.body) && Nf !== "node" && delete m["content-type"],
      Dh(v, "x-stainless-retry-count") === void 0 &&
        Dh(r, "x-stainless-retry-count") === void 0 &&
        (m["x-stainless-retry-count"] = String(f)),
      Dh(v, "x-stainless-timeout") === void 0 &&
        Dh(r, "x-stainless-timeout") === void 0 &&
        i.timeout &&
        (m["x-stainless-timeout"] = String(i.timeout)),
      this.validateHeaders(m, r),
      m
    );
  }
  async prepareOptions(i) {}
  async prepareRequest(i, { url: r, options: l }) {}
  parseHeaders(i) {
    return i
      ? Symbol.iterator in i
        ? Object.fromEntries(Array.from(i).map((r) => [...r]))
        : { ...i }
      : {};
  }
  makeStatusError(i, r, l, f) {
    return Dn.generate(i, r, l, f);
  }
  request(i, r = null) {
    return new ap(this.makeRequest(i, r));
  }
  async makeRequest(i, r) {
    var I, R;
    const l = await i,
      f = l.maxRetries ?? this.maxRetries;
    r == null && (r = f), await this.prepareOptions(l);
    const {
      req: m,
      url: v,
      timeout: S,
    } = this.buildRequest(l, { retryCount: f - r });
    if (
      (await this.prepareRequest(m, { url: v, options: l }),
      Ru("request", v, l, m.headers),
      (I = l.signal) != null && I.aborted)
    )
      throw new ri();
    const N = new AbortController(),
      M = await this.fetchWithTimeout(v, m, S, N).catch(Qm);
    if (M instanceof Error) {
      if ((R = l.signal) != null && R.aborted) throw new ri();
      if (r) return this.retryRequest(l, r);
      throw M.name === "AbortError" ? new lg() : new ip({ cause: M });
    }
    const G = hx(M.headers);
    if (!M.ok) {
      if (r && this.shouldRetry(M)) {
        const K = `retrying, ${r} attempts remaining`;
        return (
          Ru(`response (error; ${K})`, M.status, v, G),
          this.retryRequest(l, r, G)
        );
      }
      const H = await M.text().catch((K) => Qm(K).message),
        $ = vx(H),
        B = $ ? void 0 : H;
      throw (
        (Ru(
          `response (error; ${r ? "(error; no more retries left)" : "(error; not retryable)"})`,
          M.status,
          v,
          G,
          B,
        ),
        this.makeStatusError(M.status, $, B, G))
      );
    }
    return { response: M, options: l, controller: N };
  }
  requestAPIList(i, r) {
    const l = this.makeRequest(r, null);
    return new dx(this, l, i);
  }
  buildURL(i, r) {
    const l = _x(i)
        ? new URL(i)
        : new URL(
            this.baseURL +
              (this.baseURL.endsWith("/") && i.startsWith("/")
                ? i.slice(1)
                : i),
          ),
      f = this.defaultQuery();
    return (
      Vy(f) || (r = { ...f, ...r }),
      typeof r == "object" &&
        r &&
        !Array.isArray(r) &&
        (l.search = this.stringifyQuery(r)),
      l.toString()
    );
  }
  stringifyQuery(i) {
    return Object.entries(i)
      .filter(([r, l]) => typeof l < "u")
      .map(([r, l]) => {
        if (
          typeof l == "string" ||
          typeof l == "number" ||
          typeof l == "boolean"
        )
          return `${encodeURIComponent(r)}=${encodeURIComponent(l)}`;
        if (l === null) return `${encodeURIComponent(r)}=`;
        throw new He(
          `Cannot stringify type ${typeof l}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
        );
      })
      .join("&");
  }
  async fetchWithTimeout(i, r, l, f) {
    const { signal: m, ...v } = r || {};
    m && m.addEventListener("abort", () => f.abort());
    const S = setTimeout(() => f.abort(), l),
      N = { signal: f.signal, ...v };
    return (
      N.method && (N.method = N.method.toUpperCase()),
      this.fetch.call(void 0, i, N).finally(() => {
        clearTimeout(S);
      })
    );
  }
  shouldRetry(i) {
    const r = i.headers.get("x-should-retry");
    return r === "true"
      ? !0
      : r === "false"
        ? !1
        : i.status === 408 ||
          i.status === 409 ||
          i.status === 429 ||
          i.status >= 500;
  }
  async retryRequest(i, r, l) {
    let f;
    const m = l == null ? void 0 : l["retry-after-ms"];
    if (m) {
      const S = parseFloat(m);
      Number.isNaN(S) || (f = S);
    }
    const v = l == null ? void 0 : l["retry-after"];
    if (v && !f) {
      const S = parseFloat(v);
      Number.isNaN(S) ? (f = Date.parse(v) - Date.now()) : (f = S * 1e3);
    }
    if (!(f && 0 <= f && f < 60 * 1e3)) {
      const S = i.maxRetries ?? this.maxRetries;
      f = this.calculateDefaultRetryTimeoutMillis(r, S);
    }
    return await $f(f), this.makeRequest(i, r - 1);
  }
  calculateDefaultRetryTimeoutMillis(i, r) {
    const m = r - i,
      v = Math.min(0.5 * Math.pow(2, m), 8),
      S = 1 - Math.random() * 0.25;
    return v * S * 1e3;
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${Cu}`;
  }
}
class Ky {
  constructor(i, r, l, f) {
    Th.set(this, void 0),
      ux(this, Th, i),
      (this.options = f),
      (this.response = r),
      (this.body = l);
  }
  hasNextPage() {
    return this.getPaginatedItems().length ? this.nextPageInfo() != null : !1;
  }
  async getNextPage() {
    const i = this.nextPageInfo();
    if (!i)
      throw new He(
        "No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.",
      );
    const r = { ...this.options };
    if ("params" in i && typeof r.query == "object")
      r.query = { ...r.query, ...i.params };
    else if ("url" in i) {
      const l = [
        ...Object.entries(r.query || {}),
        ...i.url.searchParams.entries(),
      ];
      for (const [f, m] of l) i.url.searchParams.set(f, m);
      (r.query = void 0), (r.path = i.url.toString());
    }
    return await cx(this, Th, "f").requestAPIList(this.constructor, r);
  }
  async *iterPages() {
    let i = this;
    for (yield i; i.hasNextPage(); ) (i = await i.getNextPage()), yield i;
  }
  async *[((Th = new WeakMap()), Symbol.asyncIterator)]() {
    for await (const i of this.iterPages())
      for (const r of i.getPaginatedItems()) yield r;
  }
}
class dx extends ap {
  constructor(i, r, l) {
    super(r, async (f) => new l(i, f.response, await Hy(f), f.options));
  }
  async *[Symbol.asyncIterator]() {
    const i = await this;
    for await (const r of i) yield r;
  }
}
const hx = (a) =>
    new Proxy(Object.fromEntries(a.entries()), {
      get(i, r) {
        const l = r.toString();
        return i[l.toLowerCase()] || i[l];
      },
    }),
  px = {
    method: !0,
    path: !0,
    query: !0,
    body: !0,
    headers: !0,
    maxRetries: !0,
    stream: !0,
    timeout: !0,
    httpAgent: !0,
    signal: !0,
    idempotencyKey: !0,
    __metadata: !0,
    __binaryRequest: !0,
    __binaryResponse: !0,
    __streamClass: !0,
  },
  Cn = (a) =>
    typeof a == "object" &&
    a !== null &&
    !Vy(a) &&
    Object.keys(a).every((i) => Qy(px, i)),
  mx = () => {
    var i;
    if (typeof Deno < "u" && Deno.build != null)
      return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": Cu,
        "X-Stainless-OS": A0(Deno.build.os),
        "X-Stainless-Arch": R0(Deno.build.arch),
        "X-Stainless-Runtime": "deno",
        "X-Stainless-Runtime-Version":
          typeof Deno.version == "string"
            ? Deno.version
            : (((i = Deno.version) == null ? void 0 : i.deno) ?? "unknown"),
      };
    if (typeof EdgeRuntime < "u")
      return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": Cu,
        "X-Stainless-OS": "Unknown",
        "X-Stainless-Arch": `other:${EdgeRuntime}`,
        "X-Stainless-Runtime": "edge",
        "X-Stainless-Runtime-Version": process.version,
      };
    if (
      Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
    )
      return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": Cu,
        "X-Stainless-OS": A0(process.platform),
        "X-Stainless-Arch": R0(process.arch),
        "X-Stainless-Runtime": "node",
        "X-Stainless-Runtime-Version": process.version,
      };
    const a = gx();
    return a
      ? {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": Cu,
          "X-Stainless-OS": "Unknown",
          "X-Stainless-Arch": "unknown",
          "X-Stainless-Runtime": `browser:${a.browser}`,
          "X-Stainless-Runtime-Version": a.version,
        }
      : {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": Cu,
          "X-Stainless-OS": "Unknown",
          "X-Stainless-Arch": "unknown",
          "X-Stainless-Runtime": "unknown",
          "X-Stainless-Runtime-Version": "unknown",
        };
  };
function gx() {
  if (typeof navigator > "u" || !navigator) return null;
  const a = [
    { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    {
      key: "safari",
      pattern:
        /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
    },
  ];
  for (const { key: i, pattern: r } of a) {
    const l = r.exec(navigator.userAgent);
    if (l) {
      const f = l[1] || 0,
        m = l[2] || 0,
        v = l[3] || 0;
      return { browser: i, version: `${f}.${m}.${v}` };
    }
  }
  return null;
}
const R0 = (a) =>
    a === "x32"
      ? "x32"
      : a === "x86_64" || a === "x64"
        ? "x64"
        : a === "arm"
          ? "arm"
          : a === "aarch64" || a === "arm64"
            ? "arm64"
            : a
              ? `other:${a}`
              : "unknown",
  A0 = (a) => (
    (a = a.toLowerCase()),
    a.includes("ios")
      ? "iOS"
      : a === "android"
        ? "Android"
        : a === "darwin"
          ? "MacOS"
          : a === "win32"
            ? "Windows"
            : a === "freebsd"
              ? "FreeBSD"
              : a === "openbsd"
                ? "OpenBSD"
                : a === "linux"
                  ? "Linux"
                  : a
                    ? `Other:${a}`
                    : "Unknown"
  );
let O0;
const yx = () => O0 ?? (O0 = mx()),
  vx = (a) => {
    try {
      return JSON.parse(a);
    } catch {
      return;
    }
  },
  wx = /^[a-z][a-z0-9+.-]*:/i,
  _x = (a) => wx.test(a),
  $f = (a) => new Promise((i) => setTimeout(i, a)),
  Am = (a, i) => {
    if (typeof i != "number" || !Number.isInteger(i))
      throw new He(`${a} must be an integer`);
    if (i < 0) throw new He(`${a} must be a positive integer`);
    return i;
  },
  Qm = (a) => {
    if (a instanceof Error) return a;
    if (typeof a == "object" && a !== null)
      try {
        return new Error(JSON.stringify(a));
      } catch {}
    return new Error(a);
  },
  Lh = (a) => {
    var i, r, l, f;
    if (typeof process < "u")
      return (
        ((i = Pu == null ? void 0 : Pu[a]) == null ? void 0 : i.trim()) ??
        void 0
      );
    if (typeof Deno < "u")
      return (f =
        (l = (r = Deno.env) == null ? void 0 : r.get) == null
          ? void 0
          : l.call(r, a)) == null
        ? void 0
        : f.trim();
  };
function Vy(a) {
  if (!a) return !0;
  for (const i in a) return !1;
  return !0;
}
function Qy(a, i) {
  return Object.prototype.hasOwnProperty.call(a, i);
}
function N0(a, i) {
  for (const r in i) {
    if (!Qy(i, r)) continue;
    const l = r.toLowerCase();
    if (!l) continue;
    const f = i[r];
    f === null ? delete a[l] : f !== void 0 && (a[l] = f);
  }
}
const b0 = new Set(["authorization", "api-key"]);
function Ru(a, ...i) {
  if (typeof process < "u" && (Pu == null ? void 0 : Pu.DEBUG) === "true") {
    const r = i.map((l) => {
      if (!l) return l;
      if (l.headers) {
        const m = { ...l, headers: { ...l.headers } };
        for (const v in l.headers)
          b0.has(v.toLowerCase()) && (m.headers[v] = "REDACTED");
        return m;
      }
      let f = null;
      for (const m in l)
        b0.has(m.toLowerCase()) && (f ?? (f = { ...l }), (f[m] = "REDACTED"));
      return f ?? l;
    });
    console.log(`OpenAI:DEBUG:${a}`, ...r);
  }
}
const Sx = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (a) => {
      const i = (Math.random() * 16) | 0;
      return (a === "x" ? i : (i & 3) | 8).toString(16);
    }),
  xx = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof navigator < "u",
  Ex = (a) => typeof (a == null ? void 0 : a.get) == "function",
  Dh = (a, i) => {
    var l;
    const r = i.toLowerCase();
    if (Ex(a)) {
      const f =
        ((l = i[0]) == null ? void 0 : l.toUpperCase()) +
        i
          .substring(1)
          .replace(/([^\w])(\w)/g, (m, v, S) => v + S.toUpperCase());
      for (const m of [i, r, i.toUpperCase(), f]) {
        const v = a.get(m);
        if (v) return v;
      }
    }
    for (const [f, m] of Object.entries(a))
      if (f.toLowerCase() === r)
        return Array.isArray(m)
          ? (m.length <= 1 ||
              console.warn(
                `Received ${m.length} entries for the ${i} header, using the first entry.`,
              ),
            m[0])
          : m;
  };
function Om(a) {
  return a != null && typeof a == "object" && !Array.isArray(a);
}
class ug extends Ky {
  constructor(i, r, l, f) {
    super(i, r, l, f), (this.data = l.data || []), (this.object = l.object);
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  nextPageParams() {
    return null;
  }
  nextPageInfo() {
    return null;
  }
}
class _r extends Ky {
  constructor(i, r, l, f) {
    super(i, r, l, f),
      (this.data = l.data || []),
      (this.has_more = l.has_more || !1);
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    return this.has_more === !1 ? !1 : super.hasNextPage();
  }
  nextPageParams() {
    const i = this.nextPageInfo();
    if (!i) return null;
    if ("params" in i) return i.params;
    const r = Object.fromEntries(i.url.searchParams);
    return Object.keys(r).length ? r : null;
  }
  nextPageInfo() {
    var l;
    const i = this.getPaginatedItems();
    if (!i.length) return null;
    const r = (l = i[i.length - 1]) == null ? void 0 : l.id;
    return r ? { params: { after: r } } : null;
  }
}
class dt {
  constructor(i) {
    this._client = i;
  }
}
let Jy = class extends dt {
    list(i, r = {}, l) {
      return Cn(r)
        ? this.list(i, {}, r)
        : this._client.getAPIList(`/chat/completions/${i}/messages`, Cx, {
            query: r,
            ...l,
          });
    }
  },
  lp = class extends dt {
    constructor() {
      super(...arguments), (this.messages = new Jy(this._client));
    }
    create(i, r) {
      return this._client.post("/chat/completions", {
        body: i,
        ...r,
        stream: i.stream ?? !1,
      });
    }
    retrieve(i, r) {
      return this._client.get(`/chat/completions/${i}`, r);
    }
    update(i, r, l) {
      return this._client.post(`/chat/completions/${i}`, { body: r, ...l });
    }
    list(i = {}, r) {
      return Cn(i)
        ? this.list({}, i)
        : this._client.getAPIList("/chat/completions", up, { query: i, ...r });
    }
    del(i, r) {
      return this._client.delete(`/chat/completions/${i}`, r);
    }
  };
class up extends _r {}
class Cx extends _r {}
lp.ChatCompletionsPage = up;
lp.Messages = Jy;
let cp = class extends dt {
  constructor() {
    super(...arguments), (this.completions = new lp(this._client));
  }
};
cp.Completions = lp;
cp.ChatCompletionsPage = up;
class Xy extends dt {
  create(i, r) {
    return this._client.post("/audio/speech", {
      body: i,
      ...r,
      headers: {
        Accept: "application/octet-stream",
        ...(r == null ? void 0 : r.headers),
      },
      __binaryResponse: !0,
    });
  }
}
class Yy extends dt {
  create(i, r) {
    return this._client.post(
      "/audio/transcriptions",
      zu({ body: i, ...r, __metadata: { model: i.model } }),
    );
  }
}
class Zy extends dt {
  create(i, r) {
    return this._client.post(
      "/audio/translations",
      zu({ body: i, ...r, __metadata: { model: i.model } }),
    );
  }
}
class Uf extends dt {
  constructor() {
    super(...arguments),
      (this.transcriptions = new Yy(this._client)),
      (this.translations = new Zy(this._client)),
      (this.speech = new Xy(this._client));
  }
}
Uf.Transcriptions = Yy;
Uf.Translations = Zy;
Uf.Speech = Xy;
class cg extends dt {
  create(i, r) {
    return this._client.post("/batches", { body: i, ...r });
  }
  retrieve(i, r) {
    return this._client.get(`/batches/${i}`, r);
  }
  list(i = {}, r) {
    return Cn(i)
      ? this.list({}, i)
      : this._client.getAPIList("/batches", fg, { query: i, ...r });
  }
  cancel(i, r) {
    return this._client.post(`/batches/${i}/cancel`, r);
  }
}
class fg extends _r {}
cg.BatchesPage = fg;
class dg extends dt {
  create(i, r) {
    return this._client.post("/assistants", {
      body: i,
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  retrieve(i, r) {
    return this._client.get(`/assistants/${i}`, {
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  update(i, r, l) {
    return this._client.post(`/assistants/${i}`, {
      body: r,
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  list(i = {}, r) {
    return Cn(i)
      ? this.list({}, i)
      : this._client.getAPIList("/assistants", hg, {
          query: i,
          ...r,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(r == null ? void 0 : r.headers),
          },
        });
  }
  del(i, r) {
    return this._client.delete(`/assistants/${i}`, {
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
}
class hg extends _r {}
dg.AssistantsPage = hg;
function T0(a) {
  return typeof a.parse == "function";
}
const Au = (a) => (a == null ? void 0 : a.role) === "assistant",
  ev = (a) => (a == null ? void 0 : a.role) === "function",
  tv = (a) => (a == null ? void 0 : a.role) === "tool";
var vi = function (a, i, r, l, f) {
    if (l === "m") throw new TypeError("Private method is not writable");
    if (l === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof i == "function" ? a !== i || !f : !i.has(a))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return l === "a" ? f.call(a, r) : f ? (f.value = r) : i.set(a, r), r;
  },
  $t = function (a, i, r, l) {
    if (r === "a" && !l)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof i == "function" ? a !== i || !l : !i.has(a))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return r === "m" ? l : r === "a" ? l.call(a) : l ? l.value : i.get(a);
  },
  Jm,
  Wh,
  Gh,
  If,
  kf,
  Hh,
  Pf,
  Ms,
  Rf,
  Xh,
  Yh,
  Iu,
  nv;
class pg {
  constructor() {
    Jm.add(this),
      (this.controller = new AbortController()),
      Wh.set(this, void 0),
      Gh.set(this, () => {}),
      If.set(this, () => {}),
      kf.set(this, void 0),
      Hh.set(this, () => {}),
      Pf.set(this, () => {}),
      Ms.set(this, {}),
      Rf.set(this, !1),
      Xh.set(this, !1),
      Yh.set(this, !1),
      Iu.set(this, !1),
      vi(
        this,
        Wh,
        new Promise((i, r) => {
          vi(this, Gh, i, "f"), vi(this, If, r, "f");
        }),
        "f",
      ),
      vi(
        this,
        kf,
        new Promise((i, r) => {
          vi(this, Hh, i, "f"), vi(this, Pf, r, "f");
        }),
        "f",
      ),
      $t(this, Wh, "f").catch(() => {}),
      $t(this, kf, "f").catch(() => {});
  }
  _run(i) {
    setTimeout(() => {
      i().then(
        () => {
          this._emitFinal(), this._emit("end");
        },
        $t(this, Jm, "m", nv).bind(this),
      );
    }, 0);
  }
  _connected() {
    this.ended || ($t(this, Gh, "f").call(this), this._emit("connect"));
  }
  get ended() {
    return $t(this, Rf, "f");
  }
  get errored() {
    return $t(this, Xh, "f");
  }
  get aborted() {
    return $t(this, Yh, "f");
  }
  abort() {
    this.controller.abort();
  }
  on(i, r) {
    return (
      ($t(this, Ms, "f")[i] || ($t(this, Ms, "f")[i] = [])).push({
        listener: r,
      }),
      this
    );
  }
  off(i, r) {
    const l = $t(this, Ms, "f")[i];
    if (!l) return this;
    const f = l.findIndex((m) => m.listener === r);
    return f >= 0 && l.splice(f, 1), this;
  }
  once(i, r) {
    return (
      ($t(this, Ms, "f")[i] || ($t(this, Ms, "f")[i] = [])).push({
        listener: r,
        once: !0,
      }),
      this
    );
  }
  emitted(i) {
    return new Promise((r, l) => {
      vi(this, Iu, !0, "f"),
        i !== "error" && this.once("error", l),
        this.once(i, r);
    });
  }
  async done() {
    vi(this, Iu, !0, "f"), await $t(this, kf, "f");
  }
  _emit(i, ...r) {
    if ($t(this, Rf, "f")) return;
    i === "end" && (vi(this, Rf, !0, "f"), $t(this, Hh, "f").call(this));
    const l = $t(this, Ms, "f")[i];
    if (
      (l &&
        (($t(this, Ms, "f")[i] = l.filter((f) => !f.once)),
        l.forEach(({ listener: f }) => f(...r))),
      i === "abort")
    ) {
      const f = r[0];
      !$t(this, Iu, "f") && !(l != null && l.length) && Promise.reject(f),
        $t(this, If, "f").call(this, f),
        $t(this, Pf, "f").call(this, f),
        this._emit("end");
      return;
    }
    if (i === "error") {
      const f = r[0];
      !$t(this, Iu, "f") && !(l != null && l.length) && Promise.reject(f),
        $t(this, If, "f").call(this, f),
        $t(this, Pf, "f").call(this, f),
        this._emit("end");
    }
  }
  _emitFinal() {}
}
(Wh = new WeakMap()),
  (Gh = new WeakMap()),
  (If = new WeakMap()),
  (kf = new WeakMap()),
  (Hh = new WeakMap()),
  (Pf = new WeakMap()),
  (Ms = new WeakMap()),
  (Rf = new WeakMap()),
  (Xh = new WeakMap()),
  (Yh = new WeakMap()),
  (Iu = new WeakMap()),
  (Jm = new WeakSet()),
  (nv = function (i) {
    if (
      (vi(this, Xh, !0, "f"),
      i instanceof Error && i.name === "AbortError" && (i = new ri()),
      i instanceof ri)
    )
      return vi(this, Yh, !0, "f"), this._emit("abort", i);
    if (i instanceof He) return this._emit("error", i);
    if (i instanceof Error) {
      const r = new He(i.message);
      return (r.cause = i), this._emit("error", r);
    }
    return this._emit("error", new He(String(i)));
  });
function mg(a) {
  return (a == null ? void 0 : a.$brand) === "auto-parseable-response-format";
}
function Wf(a) {
  return (a == null ? void 0 : a.$brand) === "auto-parseable-tool";
}
function Ix(a, i) {
  return !i || !rv(i)
    ? {
        ...a,
        choices: a.choices.map((r) => ({
          ...r,
          message: {
            ...r.message,
            parsed: null,
            ...(r.message.tool_calls
              ? { tool_calls: r.message.tool_calls }
              : void 0),
          },
        })),
      }
    : gg(a, i);
}
function gg(a, i) {
  const r = a.choices.map((l) => {
    var f;
    if (l.finish_reason === "length") throw new jy();
    if (l.finish_reason === "content_filter") throw new zy();
    return {
      ...l,
      message: {
        ...l.message,
        ...(l.message.tool_calls
          ? {
              tool_calls:
                ((f = l.message.tool_calls) == null
                  ? void 0
                  : f.map((m) => Px(i, m))) ?? void 0,
            }
          : void 0),
        parsed:
          l.message.content && !l.message.refusal
            ? kx(i, l.message.content)
            : null,
      },
    };
  });
  return { ...a, choices: r };
}
function kx(a, i) {
  var r, l;
  return ((r = a.response_format) == null ? void 0 : r.type) !== "json_schema"
    ? null
    : ((l = a.response_format) == null ? void 0 : l.type) === "json_schema"
      ? "$parseRaw" in a.response_format
        ? a.response_format.$parseRaw(i)
        : JSON.parse(i)
      : null;
}
function Px(a, i) {
  var l;
  const r =
    (l = a.tools) == null
      ? void 0
      : l.find((f) => {
          var m;
          return (
            ((m = f.function) == null ? void 0 : m.name) === i.function.name
          );
        });
  return {
    ...i,
    function: {
      ...i.function,
      parsed_arguments: Wf(r)
        ? r.$parseRaw(i.function.arguments)
        : r != null && r.function.strict
          ? JSON.parse(i.function.arguments)
          : null,
    },
  };
}
function Rx(a, i) {
  var l;
  if (!a) return !1;
  const r =
    (l = a.tools) == null
      ? void 0
      : l.find((f) => {
          var m;
          return (
            ((m = f.function) == null ? void 0 : m.name) === i.function.name
          );
        });
  return Wf(r) || (r == null ? void 0 : r.function.strict) || !1;
}
function rv(a) {
  var i;
  return mg(a.response_format)
    ? !0
    : (((i = a.tools) == null
        ? void 0
        : i.some(
            (r) => Wf(r) || (r.type === "function" && r.function.strict === !0),
          )) ?? !1);
}
function Ax(a) {
  for (const i of a ?? []) {
    if (i.type !== "function")
      throw new He(
        `Currently only \`function\` tool types support auto-parsing; Received \`${i.type}\``,
      );
    if (i.function.strict !== !0)
      throw new He(
        `The \`${i.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`,
      );
  }
}
var yr = function (a, i, r, l) {
    if (r === "a" && !l)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof i == "function" ? a !== i || !l : !i.has(a))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return r === "m" ? l : r === "a" ? l.call(a) : l ? l.value : i.get(a);
  },
  Wn,
  Xm,
  Zh,
  Ym,
  Zm,
  eg,
  iv,
  tg;
const L0 = 10;
class sv extends pg {
  constructor() {
    super(...arguments),
      Wn.add(this),
      (this._chatCompletions = []),
      (this.messages = []);
  }
  _addChatCompletion(i) {
    var l;
    this._chatCompletions.push(i), this._emit("chatCompletion", i);
    const r = (l = i.choices[0]) == null ? void 0 : l.message;
    return r && this._addMessage(r), i;
  }
  _addMessage(i, r = !0) {
    if (("content" in i || (i.content = null), this.messages.push(i), r)) {
      if ((this._emit("message", i), (ev(i) || tv(i)) && i.content))
        this._emit("functionCallResult", i.content);
      else if (Au(i) && i.function_call)
        this._emit("functionCall", i.function_call);
      else if (Au(i) && i.tool_calls)
        for (const l of i.tool_calls)
          l.type === "function" && this._emit("functionCall", l.function);
    }
  }
  async finalChatCompletion() {
    await this.done();
    const i = this._chatCompletions[this._chatCompletions.length - 1];
    if (!i) throw new He("stream ended without producing a ChatCompletion");
    return i;
  }
  async finalContent() {
    return await this.done(), yr(this, Wn, "m", Xm).call(this);
  }
  async finalMessage() {
    return await this.done(), yr(this, Wn, "m", Zh).call(this);
  }
  async finalFunctionCall() {
    return await this.done(), yr(this, Wn, "m", Ym).call(this);
  }
  async finalFunctionCallResult() {
    return await this.done(), yr(this, Wn, "m", Zm).call(this);
  }
  async totalUsage() {
    return await this.done(), yr(this, Wn, "m", eg).call(this);
  }
  allChatCompletions() {
    return [...this._chatCompletions];
  }
  _emitFinal() {
    const i = this._chatCompletions[this._chatCompletions.length - 1];
    i && this._emit("finalChatCompletion", i);
    const r = yr(this, Wn, "m", Zh).call(this);
    r && this._emit("finalMessage", r);
    const l = yr(this, Wn, "m", Xm).call(this);
    l && this._emit("finalContent", l);
    const f = yr(this, Wn, "m", Ym).call(this);
    f && this._emit("finalFunctionCall", f);
    const m = yr(this, Wn, "m", Zm).call(this);
    m != null && this._emit("finalFunctionCallResult", m),
      this._chatCompletions.some((v) => v.usage) &&
        this._emit("totalUsage", yr(this, Wn, "m", eg).call(this));
  }
  async _createChatCompletion(i, r, l) {
    const f = l == null ? void 0 : l.signal;
    f &&
      (f.aborted && this.controller.abort(),
      f.addEventListener("abort", () => this.controller.abort())),
      yr(this, Wn, "m", iv).call(this, r);
    const m = await i.chat.completions.create(
      { ...r, stream: !1 },
      { ...l, signal: this.controller.signal },
    );
    return this._connected(), this._addChatCompletion(gg(m, r));
  }
  async _runChatCompletion(i, r, l) {
    for (const f of r.messages) this._addMessage(f, !1);
    return await this._createChatCompletion(i, r, l);
  }
  async _runFunctions(i, r, l) {
    var R;
    const f = "function",
      { function_call: m = "auto", stream: v, ...S } = r,
      N = typeof m != "string" && (m == null ? void 0 : m.name),
      { maxChatCompletions: M = L0 } = l || {},
      G = {};
    for (const H of r.functions) G[H.name || H.function.name] = H;
    const I = r.functions.map((H) => ({
      name: H.name || H.function.name,
      parameters: H.parameters,
      description: H.description,
    }));
    for (const H of r.messages) this._addMessage(H, !1);
    for (let H = 0; H < M; ++H) {
      const B =
        (R = (
          await this._createChatCompletion(
            i,
            {
              ...S,
              function_call: m,
              functions: I,
              messages: [...this.messages],
            },
            l,
          )
        ).choices[0]) == null
          ? void 0
          : R.message;
      if (!B) throw new He("missing message in ChatCompletion response");
      if (!B.function_call) return;
      const { name: z, arguments: Y } = B.function_call,
        K = G[z];
      if (K) {
        if (N && N !== z) {
          const fe = `Invalid function_call: ${JSON.stringify(z)}. ${JSON.stringify(N)} requested. Please try again`;
          this._addMessage({ role: f, name: z, content: fe });
          continue;
        }
      } else {
        const fe = `Invalid function_call: ${JSON.stringify(z)}. Available options are: ${I.map((de) => JSON.stringify(de.name)).join(", ")}. Please try again`;
        this._addMessage({ role: f, name: z, content: fe });
        continue;
      }
      let J;
      try {
        J = T0(K) ? await K.parse(Y) : Y;
      } catch (fe) {
        this._addMessage({
          role: f,
          name: z,
          content: fe instanceof Error ? fe.message : String(fe),
        });
        continue;
      }
      const Q = await K.function(J, this),
        ee = yr(this, Wn, "m", tg).call(this, Q);
      if ((this._addMessage({ role: f, name: z, content: ee }), N)) return;
    }
  }
  async _runTools(i, r, l) {
    var H, $, B;
    const f = "tool",
      { tool_choice: m = "auto", stream: v, ...S } = r,
      N =
        typeof m != "string" &&
        ((H = m == null ? void 0 : m.function) == null ? void 0 : H.name),
      { maxChatCompletions: M = L0 } = l || {},
      G = r.tools.map((z) => {
        if (Wf(z)) {
          if (!z.$callback)
            throw new He(
              "Tool given to `.runTools()` that does not have an associated function",
            );
          return {
            type: "function",
            function: {
              function: z.$callback,
              name: z.function.name,
              description: z.function.description || "",
              parameters: z.function.parameters,
              parse: z.$parseRaw,
              strict: !0,
            },
          };
        }
        return z;
      }),
      I = {};
    for (const z of G)
      z.type === "function" &&
        (I[z.function.name || z.function.function.name] = z.function);
    const R =
      "tools" in r
        ? G.map((z) =>
            z.type === "function"
              ? {
                  type: "function",
                  function: {
                    name: z.function.name || z.function.function.name,
                    parameters: z.function.parameters,
                    description: z.function.description,
                    strict: z.function.strict,
                  },
                }
              : z,
          )
        : void 0;
    for (const z of r.messages) this._addMessage(z, !1);
    for (let z = 0; z < M; ++z) {
      const K =
        ($ = (
          await this._createChatCompletion(
            i,
            { ...S, tool_choice: m, tools: R, messages: [...this.messages] },
            l,
          )
        ).choices[0]) == null
          ? void 0
          : $.message;
      if (!K) throw new He("missing message in ChatCompletion response");
      if (!((B = K.tool_calls) != null && B.length)) return;
      for (const J of K.tool_calls) {
        if (J.type !== "function") continue;
        const Q = J.id,
          { name: ee, arguments: fe } = J.function,
          de = I[ee];
        if (de) {
          if (N && N !== ee) {
            const ge = `Invalid tool_call: ${JSON.stringify(ee)}. ${JSON.stringify(N)} requested. Please try again`;
            this._addMessage({ role: f, tool_call_id: Q, content: ge });
            continue;
          }
        } else {
          const ge = `Invalid tool_call: ${JSON.stringify(ee)}. Available options are: ${Object.keys(
            I,
          )
            .map((he) => JSON.stringify(he))
            .join(", ")}. Please try again`;
          this._addMessage({ role: f, tool_call_id: Q, content: ge });
          continue;
        }
        let A;
        try {
          A = T0(de) ? await de.parse(fe) : fe;
        } catch (ge) {
          const he = ge instanceof Error ? ge.message : String(ge);
          this._addMessage({ role: f, tool_call_id: Q, content: he });
          continue;
        }
        const je = await de.function(A, this),
          Te = yr(this, Wn, "m", tg).call(this, je);
        if ((this._addMessage({ role: f, tool_call_id: Q, content: Te }), N))
          return;
      }
    }
  }
}
(Wn = new WeakSet()),
  (Xm = function () {
    return yr(this, Wn, "m", Zh).call(this).content ?? null;
  }),
  (Zh = function () {
    let i = this.messages.length;
    for (; i-- > 0; ) {
      const r = this.messages[i];
      if (Au(r)) {
        const { function_call: l, ...f } = r,
          m = { ...f, content: r.content ?? null, refusal: r.refusal ?? null };
        return l && (m.function_call = l), m;
      }
    }
    throw new He(
      "stream ended without producing a ChatCompletionMessage with role=assistant",
    );
  }),
  (Ym = function () {
    var i, r;
    for (let l = this.messages.length - 1; l >= 0; l--) {
      const f = this.messages[l];
      if (Au(f) && f != null && f.function_call) return f.function_call;
      if (Au(f) && (i = f == null ? void 0 : f.tool_calls) != null && i.length)
        return (r = f.tool_calls.at(-1)) == null ? void 0 : r.function;
    }
  }),
  (Zm = function () {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      const r = this.messages[i];
      if (
        (ev(r) && r.content != null) ||
        (tv(r) &&
          r.content != null &&
          typeof r.content == "string" &&
          this.messages.some((l) => {
            var f;
            return (
              l.role === "assistant" &&
              ((f = l.tool_calls) == null
                ? void 0
                : f.some(
                    (m) => m.type === "function" && m.id === r.tool_call_id,
                  ))
            );
          }))
      )
        return r.content;
    }
  }),
  (eg = function () {
    const i = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
    for (const { usage: r } of this._chatCompletions)
      r &&
        ((i.completion_tokens += r.completion_tokens),
        (i.prompt_tokens += r.prompt_tokens),
        (i.total_tokens += r.total_tokens));
    return i;
  }),
  (iv = function (i) {
    if (i.n != null && i.n > 1)
      throw new He(
        "ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.",
      );
  }),
  (tg = function (i) {
    return typeof i == "string"
      ? i
      : i === void 0
        ? "undefined"
        : JSON.stringify(i);
  });
class Lf extends sv {
  static runFunctions(i, r, l) {
    const f = new Lf(),
      m = {
        ...l,
        headers: {
          ...(l == null ? void 0 : l.headers),
          "X-Stainless-Helper-Method": "runFunctions",
        },
      };
    return f._run(() => f._runFunctions(i, r, m)), f;
  }
  static runTools(i, r, l) {
    const f = new Lf(),
      m = {
        ...l,
        headers: {
          ...(l == null ? void 0 : l.headers),
          "X-Stainless-Helper-Method": "runTools",
        },
      };
    return f._run(() => f._runTools(i, r, m)), f;
  }
  _addMessage(i, r = !0) {
    super._addMessage(i, r),
      Au(i) && i.content && this._emit("content", i.content);
  }
}
const ov = 1,
  av = 2,
  lv = 4,
  uv = 8,
  cv = 16,
  fv = 32,
  dv = 64,
  hv = 128,
  pv = 256,
  mv = hv | pv,
  gv = cv | fv | mv | dv,
  yv = ov | av | gv,
  vv = lv | uv,
  Ox = yv | vv,
  En = {
    STR: ov,
    NUM: av,
    ARR: lv,
    OBJ: uv,
    NULL: cv,
    BOOL: fv,
    NAN: dv,
    INFINITY: hv,
    MINUS_INFINITY: pv,
    INF: mv,
    SPECIAL: gv,
    ATOM: yv,
    COLLECTION: vv,
    ALL: Ox,
  };
class Nx extends Error {}
class bx extends Error {}
function Tx(a, i = En.ALL) {
  if (typeof a != "string")
    throw new TypeError(`expecting str, got ${typeof a}`);
  if (!a.trim()) throw new Error(`${a} is empty`);
  return Lx(a.trim(), i);
}
const Lx = (a, i) => {
    const r = a.length;
    let l = 0;
    const f = (R) => {
        throw new Nx(`${R} at position ${l}`);
      },
      m = (R) => {
        throw new bx(`${R} at position ${l}`);
      },
      v = () => (
        I(),
        l >= r && f("Unexpected end of input"),
        a[l] === '"'
          ? S()
          : a[l] === "{"
            ? N()
            : a[l] === "["
              ? M()
              : a.substring(l, l + 4) === "null" ||
                  (En.NULL & i &&
                    r - l < 4 &&
                    "null".startsWith(a.substring(l)))
                ? ((l += 4), null)
                : a.substring(l, l + 4) === "true" ||
                    (En.BOOL & i &&
                      r - l < 4 &&
                      "true".startsWith(a.substring(l)))
                  ? ((l += 4), !0)
                  : a.substring(l, l + 5) === "false" ||
                      (En.BOOL & i &&
                        r - l < 5 &&
                        "false".startsWith(a.substring(l)))
                    ? ((l += 5), !1)
                    : a.substring(l, l + 8) === "Infinity" ||
                        (En.INFINITY & i &&
                          r - l < 8 &&
                          "Infinity".startsWith(a.substring(l)))
                      ? ((l += 8), 1 / 0)
                      : a.substring(l, l + 9) === "-Infinity" ||
                          (En.MINUS_INFINITY & i &&
                            1 < r - l &&
                            r - l < 9 &&
                            "-Infinity".startsWith(a.substring(l)))
                        ? ((l += 9), -1 / 0)
                        : a.substring(l, l + 3) === "NaN" ||
                            (En.NAN & i &&
                              r - l < 3 &&
                              "NaN".startsWith(a.substring(l)))
                          ? ((l += 3), NaN)
                          : G()
      ),
      S = () => {
        const R = l;
        let H = !1;
        for (l++; l < r && (a[l] !== '"' || (H && a[l - 1] === "\\")); )
          (H = a[l] === "\\" ? !H : !1), l++;
        if (a.charAt(l) == '"')
          try {
            return JSON.parse(a.substring(R, ++l - Number(H)));
          } catch ($) {
            m(String($));
          }
        else if (En.STR & i)
          try {
            return JSON.parse(a.substring(R, l - Number(H)) + '"');
          } catch {
            return JSON.parse(a.substring(R, a.lastIndexOf("\\")) + '"');
          }
        f("Unterminated string literal");
      },
      N = () => {
        l++, I();
        const R = {};
        try {
          for (; a[l] !== "}"; ) {
            if ((I(), l >= r && En.OBJ & i)) return R;
            const H = S();
            I(), l++;
            try {
              const $ = v();
              Object.defineProperty(R, H, {
                value: $,
                writable: !0,
                enumerable: !0,
                configurable: !0,
              });
            } catch ($) {
              if (En.OBJ & i) return R;
              throw $;
            }
            I(), a[l] === "," && l++;
          }
        } catch {
          if (En.OBJ & i) return R;
          f("Expected '}' at end of object");
        }
        return l++, R;
      },
      M = () => {
        l++;
        const R = [];
        try {
          for (; a[l] !== "]"; ) R.push(v()), I(), a[l] === "," && l++;
        } catch {
          if (En.ARR & i) return R;
          f("Expected ']' at end of array");
        }
        return l++, R;
      },
      G = () => {
        if (l === 0) {
          a === "-" && En.NUM & i && f("Not sure what '-' is");
          try {
            return JSON.parse(a);
          } catch (H) {
            if (En.NUM & i)
              try {
                return a[a.length - 1] === "."
                  ? JSON.parse(a.substring(0, a.lastIndexOf(".")))
                  : JSON.parse(a.substring(0, a.lastIndexOf("e")));
              } catch {}
            m(String(H));
          }
        }
        const R = l;
        for (a[l] === "-" && l++; a[l] && !",]}".includes(a[l]); ) l++;
        l == r && !(En.NUM & i) && f("Unterminated number literal");
        try {
          return JSON.parse(a.substring(R, l));
        } catch {
          a.substring(R, l) === "-" && En.NUM & i && f("Not sure what '-' is");
          try {
            return JSON.parse(a.substring(R, a.lastIndexOf("e")));
          } catch ($) {
            m(String($));
          }
        }
      },
      I = () => {
        for (
          ;
          l < r &&
          ` 
\r	`.includes(a[l]);

        )
          l++;
      };
    return v();
  },
  D0 = (a) => Tx(a, En.ALL ^ En.NUM);
var _u = function (a, i, r, l, f) {
    if (l === "m") throw new TypeError("Private method is not writable");
    if (l === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof i == "function" ? a !== i || !f : !i.has(a))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return l === "a" ? f.call(a, r) : f ? (f.value = r) : i.set(a, r), r;
  },
  Rt = function (a, i, r, l) {
    if (r === "a" && !l)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof i == "function" ? a !== i || !l : !i.has(a))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return r === "m" ? l : r === "a" ? l.call(a) : l ? l.value : i.get(a);
  },
  ln,
  Ls,
  Su,
  Co,
  Nm,
  Mh,
  bm,
  Tm,
  Lm,
  Fh,
  Dm,
  M0;
class Df extends sv {
  constructor(i) {
    super(),
      ln.add(this),
      Ls.set(this, void 0),
      Su.set(this, void 0),
      Co.set(this, void 0),
      _u(this, Ls, i, "f"),
      _u(this, Su, [], "f");
  }
  get currentChatCompletionSnapshot() {
    return Rt(this, Co, "f");
  }
  static fromReadableStream(i) {
    const r = new Df(null);
    return r._run(() => r._fromReadableStream(i)), r;
  }
  static createChatCompletion(i, r, l) {
    const f = new Df(r);
    return (
      f._run(() =>
        f._runChatCompletion(
          i,
          { ...r, stream: !0 },
          {
            ...l,
            headers: {
              ...(l == null ? void 0 : l.headers),
              "X-Stainless-Helper-Method": "stream",
            },
          },
        ),
      ),
      f
    );
  }
  async _createChatCompletion(i, r, l) {
    var v;
    super._createChatCompletion;
    const f = l == null ? void 0 : l.signal;
    f &&
      (f.aborted && this.controller.abort(),
      f.addEventListener("abort", () => this.controller.abort())),
      Rt(this, ln, "m", Nm).call(this);
    const m = await i.chat.completions.create(
      { ...r, stream: !0 },
      { ...l, signal: this.controller.signal },
    );
    this._connected();
    for await (const S of m) Rt(this, ln, "m", bm).call(this, S);
    if ((v = m.controller.signal) != null && v.aborted) throw new ri();
    return this._addChatCompletion(Rt(this, ln, "m", Fh).call(this));
  }
  async _fromReadableStream(i, r) {
    var v;
    const l = r == null ? void 0 : r.signal;
    l &&
      (l.aborted && this.controller.abort(),
      l.addEventListener("abort", () => this.controller.abort())),
      Rt(this, ln, "m", Nm).call(this),
      this._connected();
    const f = ss.fromReadableStream(i, this.controller);
    let m;
    for await (const S of f)
      m &&
        m !== S.id &&
        this._addChatCompletion(Rt(this, ln, "m", Fh).call(this)),
        Rt(this, ln, "m", bm).call(this, S),
        (m = S.id);
    if ((v = f.controller.signal) != null && v.aborted) throw new ri();
    return this._addChatCompletion(Rt(this, ln, "m", Fh).call(this));
  }
  [((Ls = new WeakMap()),
  (Su = new WeakMap()),
  (Co = new WeakMap()),
  (ln = new WeakSet()),
  (Nm = function () {
    this.ended || _u(this, Co, void 0, "f");
  }),
  (Mh = function (r) {
    let l = Rt(this, Su, "f")[r.index];
    return (
      l ||
      ((l = {
        content_done: !1,
        refusal_done: !1,
        logprobs_content_done: !1,
        logprobs_refusal_done: !1,
        done_tool_calls: new Set(),
        current_tool_call_index: null,
      }),
      (Rt(this, Su, "f")[r.index] = l),
      l)
    );
  }),
  (bm = function (r) {
    var f, m, v, S, N, M, G, I, R, H, $, B, z, Y, K;
    if (this.ended) return;
    const l = Rt(this, ln, "m", M0).call(this, r);
    this._emit("chunk", r, l);
    for (const J of r.choices) {
      const Q = l.choices[J.index];
      J.delta.content != null &&
        ((f = Q.message) == null ? void 0 : f.role) === "assistant" &&
        (m = Q.message) != null &&
        m.content &&
        (this._emit("content", J.delta.content, Q.message.content),
        this._emit("content.delta", {
          delta: J.delta.content,
          snapshot: Q.message.content,
          parsed: Q.message.parsed,
        })),
        J.delta.refusal != null &&
          ((v = Q.message) == null ? void 0 : v.role) === "assistant" &&
          (S = Q.message) != null &&
          S.refusal &&
          this._emit("refusal.delta", {
            delta: J.delta.refusal,
            snapshot: Q.message.refusal,
          }),
        ((N = J.logprobs) == null ? void 0 : N.content) != null &&
          ((M = Q.message) == null ? void 0 : M.role) === "assistant" &&
          this._emit("logprobs.content.delta", {
            content: (G = J.logprobs) == null ? void 0 : G.content,
            snapshot: ((I = Q.logprobs) == null ? void 0 : I.content) ?? [],
          }),
        ((R = J.logprobs) == null ? void 0 : R.refusal) != null &&
          ((H = Q.message) == null ? void 0 : H.role) === "assistant" &&
          this._emit("logprobs.refusal.delta", {
            refusal: ($ = J.logprobs) == null ? void 0 : $.refusal,
            snapshot: ((B = Q.logprobs) == null ? void 0 : B.refusal) ?? [],
          });
      const ee = Rt(this, ln, "m", Mh).call(this, Q);
      Q.finish_reason &&
        (Rt(this, ln, "m", Lm).call(this, Q),
        ee.current_tool_call_index != null &&
          Rt(this, ln, "m", Tm).call(this, Q, ee.current_tool_call_index));
      for (const fe of J.delta.tool_calls ?? [])
        ee.current_tool_call_index !== fe.index &&
          (Rt(this, ln, "m", Lm).call(this, Q),
          ee.current_tool_call_index != null &&
            Rt(this, ln, "m", Tm).call(this, Q, ee.current_tool_call_index)),
          (ee.current_tool_call_index = fe.index);
      for (const fe of J.delta.tool_calls ?? []) {
        const de = (z = Q.message.tool_calls) == null ? void 0 : z[fe.index];
        de != null &&
          de.type &&
          ((de == null ? void 0 : de.type) === "function"
            ? this._emit("tool_calls.function.arguments.delta", {
                name: (Y = de.function) == null ? void 0 : Y.name,
                index: fe.index,
                arguments: de.function.arguments,
                parsed_arguments: de.function.parsed_arguments,
                arguments_delta:
                  ((K = fe.function) == null ? void 0 : K.arguments) ?? "",
              })
            : (de == null || de.type, void 0));
      }
    }
  }),
  (Tm = function (r, l) {
    var v, S, N;
    if (Rt(this, ln, "m", Mh).call(this, r).done_tool_calls.has(l)) return;
    const m = (v = r.message.tool_calls) == null ? void 0 : v[l];
    if (!m) throw new Error("no tool call snapshot");
    if (!m.type) throw new Error("tool call snapshot missing `type`");
    if (m.type === "function") {
      const M =
        (N = (S = Rt(this, Ls, "f")) == null ? void 0 : S.tools) == null
          ? void 0
          : N.find(
              (G) =>
                G.type === "function" && G.function.name === m.function.name,
            );
      this._emit("tool_calls.function.arguments.done", {
        name: m.function.name,
        index: l,
        arguments: m.function.arguments,
        parsed_arguments: Wf(M)
          ? M.$parseRaw(m.function.arguments)
          : M != null && M.function.strict
            ? JSON.parse(m.function.arguments)
            : null,
      });
    } else m.type;
  }),
  (Lm = function (r) {
    var f, m;
    const l = Rt(this, ln, "m", Mh).call(this, r);
    if (r.message.content && !l.content_done) {
      l.content_done = !0;
      const v = Rt(this, ln, "m", Dm).call(this);
      this._emit("content.done", {
        content: r.message.content,
        parsed: v ? v.$parseRaw(r.message.content) : null,
      });
    }
    r.message.refusal &&
      !l.refusal_done &&
      ((l.refusal_done = !0),
      this._emit("refusal.done", { refusal: r.message.refusal })),
      (f = r.logprobs) != null &&
        f.content &&
        !l.logprobs_content_done &&
        ((l.logprobs_content_done = !0),
        this._emit("logprobs.content.done", { content: r.logprobs.content })),
      (m = r.logprobs) != null &&
        m.refusal &&
        !l.logprobs_refusal_done &&
        ((l.logprobs_refusal_done = !0),
        this._emit("logprobs.refusal.done", { refusal: r.logprobs.refusal }));
  }),
  (Fh = function () {
    if (this.ended) throw new He("stream has ended, this shouldn't happen");
    const r = Rt(this, Co, "f");
    if (!r) throw new He("request ended without sending any chunks");
    return (
      _u(this, Co, void 0, "f"), _u(this, Su, [], "f"), Dx(r, Rt(this, Ls, "f"))
    );
  }),
  (Dm = function () {
    var l;
    const r = (l = Rt(this, Ls, "f")) == null ? void 0 : l.response_format;
    return mg(r) ? r : null;
  }),
  (M0 = function (r) {
    var l, f, m, v;
    let S = Rt(this, Co, "f");
    const { choices: N, ...M } = r;
    S ? Object.assign(S, M) : (S = _u(this, Co, { ...M, choices: [] }, "f"));
    for (const {
      delta: G,
      finish_reason: I,
      index: R,
      logprobs: H = null,
      ...$
    } of r.choices) {
      let B = S.choices[R];
      if (
        (B ||
          (B = S.choices[R] =
            { finish_reason: I, index: R, message: {}, logprobs: H, ...$ }),
        H)
      )
        if (!B.logprobs) B.logprobs = Object.assign({}, H);
        else {
          const { content: fe, refusal: de, ...A } = H;
          Object.assign(B.logprobs, A),
            fe &&
              ((l = B.logprobs).content ?? (l.content = []),
              B.logprobs.content.push(...fe)),
            de &&
              ((f = B.logprobs).refusal ?? (f.refusal = []),
              B.logprobs.refusal.push(...de));
        }
      if (
        I &&
        ((B.finish_reason = I), Rt(this, Ls, "f") && rv(Rt(this, Ls, "f")))
      ) {
        if (I === "length") throw new jy();
        if (I === "content_filter") throw new zy();
      }
      if ((Object.assign(B, $), !G)) continue;
      const {
        content: z,
        refusal: Y,
        function_call: K,
        role: J,
        tool_calls: Q,
        ...ee
      } = G;
      if (
        (Object.assign(B.message, ee),
        Y && (B.message.refusal = (B.message.refusal || "") + Y),
        J && (B.message.role = J),
        K &&
          (B.message.function_call
            ? (K.name && (B.message.function_call.name = K.name),
              K.arguments &&
                ((m = B.message.function_call).arguments ?? (m.arguments = ""),
                (B.message.function_call.arguments += K.arguments)))
            : (B.message.function_call = K)),
        z &&
          ((B.message.content = (B.message.content || "") + z),
          !B.message.refusal &&
            Rt(this, ln, "m", Dm).call(this) &&
            (B.message.parsed = D0(B.message.content))),
        Q)
      ) {
        B.message.tool_calls || (B.message.tool_calls = []);
        for (const { index: fe, id: de, type: A, function: je, ...Te } of Q) {
          const ge = (v = B.message.tool_calls)[fe] ?? (v[fe] = {});
          Object.assign(ge, Te),
            de && (ge.id = de),
            A && (ge.type = A),
            je &&
              (ge.function ??
                (ge.function = { name: je.name ?? "", arguments: "" })),
            je != null && je.name && (ge.function.name = je.name),
            je != null &&
              je.arguments &&
              ((ge.function.arguments += je.arguments),
              Rx(Rt(this, Ls, "f"), ge) &&
                (ge.function.parsed_arguments = D0(ge.function.arguments)));
        }
      }
    }
    return S;
  }),
  Symbol.asyncIterator)]() {
    const i = [],
      r = [];
    let l = !1;
    return (
      this.on("chunk", (f) => {
        const m = r.shift();
        m ? m.resolve(f) : i.push(f);
      }),
      this.on("end", () => {
        l = !0;
        for (const f of r) f.resolve(void 0);
        r.length = 0;
      }),
      this.on("abort", (f) => {
        l = !0;
        for (const m of r) m.reject(f);
        r.length = 0;
      }),
      this.on("error", (f) => {
        l = !0;
        for (const m of r) m.reject(f);
        r.length = 0;
      }),
      {
        next: async () =>
          i.length
            ? { value: i.shift(), done: !1 }
            : l
              ? { value: void 0, done: !0 }
              : new Promise((m, v) => r.push({ resolve: m, reject: v })).then(
                  (m) =>
                    m ? { value: m, done: !1 } : { value: void 0, done: !0 },
                ),
        return: async () => (this.abort(), { value: void 0, done: !0 }),
      }
    );
  }
  toReadableStream() {
    return new ss(
      this[Symbol.asyncIterator].bind(this),
      this.controller,
    ).toReadableStream();
  }
}
function Dx(a, i) {
  const {
      id: r,
      choices: l,
      created: f,
      model: m,
      system_fingerprint: v,
      ...S
    } = a,
    N = {
      ...S,
      id: r,
      choices: l.map(
        ({ message: M, finish_reason: G, index: I, logprobs: R, ...H }) => {
          if (!G) throw new He(`missing finish_reason for choice ${I}`);
          const {
              content: $ = null,
              function_call: B,
              tool_calls: z,
              ...Y
            } = M,
            K = M.role;
          if (!K) throw new He(`missing role for choice ${I}`);
          if (B) {
            const { arguments: J, name: Q } = B;
            if (J == null)
              throw new He(`missing function_call.arguments for choice ${I}`);
            if (!Q) throw new He(`missing function_call.name for choice ${I}`);
            return {
              ...H,
              message: {
                content: $,
                function_call: { arguments: J, name: Q },
                role: K,
                refusal: M.refusal ?? null,
              },
              finish_reason: G,
              index: I,
              logprobs: R,
            };
          }
          return z
            ? {
                ...H,
                index: I,
                finish_reason: G,
                logprobs: R,
                message: {
                  ...Y,
                  role: K,
                  content: $,
                  refusal: M.refusal ?? null,
                  tool_calls: z.map((J, Q) => {
                    const { function: ee, type: fe, id: de, ...A } = J,
                      { arguments: je, name: Te, ...ge } = ee || {};
                    if (de == null)
                      throw new He(`missing choices[${I}].tool_calls[${Q}].id
${Bh(a)}`);
                    if (fe == null)
                      throw new He(`missing choices[${I}].tool_calls[${Q}].type
${Bh(a)}`);
                    if (Te == null)
                      throw new He(`missing choices[${I}].tool_calls[${Q}].function.name
${Bh(a)}`);
                    if (je == null)
                      throw new He(`missing choices[${I}].tool_calls[${Q}].function.arguments
${Bh(a)}`);
                    return {
                      ...A,
                      id: de,
                      type: fe,
                      function: { ...ge, name: Te, arguments: je },
                    };
                  }),
                },
              }
            : {
                ...H,
                message: {
                  ...Y,
                  content: $,
                  role: K,
                  refusal: M.refusal ?? null,
                },
                finish_reason: G,
                index: I,
                logprobs: R,
              };
        },
      ),
      created: f,
      model: m,
      object: "chat.completion",
      ...(v ? { system_fingerprint: v } : {}),
    };
  return Ix(N, i);
}
function Bh(a) {
  return JSON.stringify(a);
}
class Ou extends Df {
  static fromReadableStream(i) {
    const r = new Ou(null);
    return r._run(() => r._fromReadableStream(i)), r;
  }
  static runFunctions(i, r, l) {
    const f = new Ou(null),
      m = {
        ...l,
        headers: {
          ...(l == null ? void 0 : l.headers),
          "X-Stainless-Helper-Method": "runFunctions",
        },
      };
    return f._run(() => f._runFunctions(i, r, m)), f;
  }
  static runTools(i, r, l) {
    const f = new Ou(r),
      m = {
        ...l,
        headers: {
          ...(l == null ? void 0 : l.headers),
          "X-Stainless-Helper-Method": "runTools",
        },
      };
    return f._run(() => f._runTools(i, r, m)), f;
  }
}
let wv = class extends dt {
  parse(i, r) {
    return (
      Ax(i.tools),
      this._client.chat.completions
        .create(i, {
          ...r,
          headers: {
            ...(r == null ? void 0 : r.headers),
            "X-Stainless-Helper-Method": "beta.chat.completions.parse",
          },
        })
        ._thenUnwrap((l) => gg(l, i))
    );
  }
  runFunctions(i, r) {
    return i.stream
      ? Ou.runFunctions(this._client, i, r)
      : Lf.runFunctions(this._client, i, r);
  }
  runTools(i, r) {
    return i.stream
      ? Ou.runTools(this._client, i, r)
      : Lf.runTools(this._client, i, r);
  }
  stream(i, r) {
    return Df.createChatCompletion(this._client, i, r);
  }
};
class ng extends dt {
  constructor() {
    super(...arguments), (this.completions = new wv(this._client));
  }
}
(function (a) {
  a.Completions = wv;
})(ng || (ng = {}));
class _v extends dt {
  create(i, r) {
    return this._client.post("/realtime/sessions", {
      body: i,
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
}
class yg extends dt {
  constructor() {
    super(...arguments), (this.sessions = new _v(this._client));
  }
}
yg.Sessions = _v;
var Fe = function (a, i, r, l) {
    if (r === "a" && !l)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof i == "function" ? a !== i || !l : !i.has(a))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return r === "m" ? l : r === "a" ? l.call(a) : l ? l.value : i.get(a);
  },
  Dr = function (a, i, r, l, f) {
    if (l === "m") throw new TypeError("Private method is not writable");
    if (l === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof i == "function" ? a !== i || !f : !i.has(a))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return l === "a" ? f.call(a, r) : f ? (f.value = r) : i.set(a, r), r;
  },
  Tn,
  rg,
  ts,
  qh,
  _i,
  Fa,
  ku,
  Ma,
  ep,
  Fr,
  Kh,
  Vh,
  bf,
  Af,
  Of,
  F0,
  B0,
  j0,
  z0,
  $0,
  U0,
  W0;
class xi extends pg {
  constructor() {
    super(...arguments),
      Tn.add(this),
      rg.set(this, []),
      ts.set(this, {}),
      qh.set(this, {}),
      _i.set(this, void 0),
      Fa.set(this, void 0),
      ku.set(this, void 0),
      Ma.set(this, void 0),
      ep.set(this, void 0),
      Fr.set(this, void 0),
      Kh.set(this, void 0),
      Vh.set(this, void 0),
      bf.set(this, void 0);
  }
  [((rg = new WeakMap()),
  (ts = new WeakMap()),
  (qh = new WeakMap()),
  (_i = new WeakMap()),
  (Fa = new WeakMap()),
  (ku = new WeakMap()),
  (Ma = new WeakMap()),
  (ep = new WeakMap()),
  (Fr = new WeakMap()),
  (Kh = new WeakMap()),
  (Vh = new WeakMap()),
  (bf = new WeakMap()),
  (Tn = new WeakSet()),
  Symbol.asyncIterator)]() {
    const i = [],
      r = [];
    let l = !1;
    return (
      this.on("event", (f) => {
        const m = r.shift();
        m ? m.resolve(f) : i.push(f);
      }),
      this.on("end", () => {
        l = !0;
        for (const f of r) f.resolve(void 0);
        r.length = 0;
      }),
      this.on("abort", (f) => {
        l = !0;
        for (const m of r) m.reject(f);
        r.length = 0;
      }),
      this.on("error", (f) => {
        l = !0;
        for (const m of r) m.reject(f);
        r.length = 0;
      }),
      {
        next: async () =>
          i.length
            ? { value: i.shift(), done: !1 }
            : l
              ? { value: void 0, done: !0 }
              : new Promise((m, v) => r.push({ resolve: m, reject: v })).then(
                  (m) =>
                    m ? { value: m, done: !1 } : { value: void 0, done: !0 },
                ),
        return: async () => (this.abort(), { value: void 0, done: !0 }),
      }
    );
  }
  static fromReadableStream(i) {
    const r = new xi();
    return r._run(() => r._fromReadableStream(i)), r;
  }
  async _fromReadableStream(i, r) {
    var m;
    const l = r == null ? void 0 : r.signal;
    l &&
      (l.aborted && this.controller.abort(),
      l.addEventListener("abort", () => this.controller.abort())),
      this._connected();
    const f = ss.fromReadableStream(i, this.controller);
    for await (const v of f) Fe(this, Tn, "m", Af).call(this, v);
    if ((m = f.controller.signal) != null && m.aborted) throw new ri();
    return this._addRun(Fe(this, Tn, "m", Of).call(this));
  }
  toReadableStream() {
    return new ss(
      this[Symbol.asyncIterator].bind(this),
      this.controller,
    ).toReadableStream();
  }
  static createToolAssistantStream(i, r, l, f, m) {
    const v = new xi();
    return (
      v._run(() =>
        v._runToolAssistantStream(i, r, l, f, {
          ...m,
          headers: {
            ...(m == null ? void 0 : m.headers),
            "X-Stainless-Helper-Method": "stream",
          },
        }),
      ),
      v
    );
  }
  async _createToolAssistantStream(i, r, l, f, m) {
    var M;
    const v = m == null ? void 0 : m.signal;
    v &&
      (v.aborted && this.controller.abort(),
      v.addEventListener("abort", () => this.controller.abort()));
    const S = { ...f, stream: !0 },
      N = await i.submitToolOutputs(r, l, S, {
        ...m,
        signal: this.controller.signal,
      });
    this._connected();
    for await (const G of N) Fe(this, Tn, "m", Af).call(this, G);
    if ((M = N.controller.signal) != null && M.aborted) throw new ri();
    return this._addRun(Fe(this, Tn, "m", Of).call(this));
  }
  static createThreadAssistantStream(i, r, l) {
    const f = new xi();
    return (
      f._run(() =>
        f._threadAssistantStream(i, r, {
          ...l,
          headers: {
            ...(l == null ? void 0 : l.headers),
            "X-Stainless-Helper-Method": "stream",
          },
        }),
      ),
      f
    );
  }
  static createAssistantStream(i, r, l, f) {
    const m = new xi();
    return (
      m._run(() =>
        m._runAssistantStream(i, r, l, {
          ...f,
          headers: {
            ...(f == null ? void 0 : f.headers),
            "X-Stainless-Helper-Method": "stream",
          },
        }),
      ),
      m
    );
  }
  currentEvent() {
    return Fe(this, Kh, "f");
  }
  currentRun() {
    return Fe(this, Vh, "f");
  }
  currentMessageSnapshot() {
    return Fe(this, _i, "f");
  }
  currentRunStepSnapshot() {
    return Fe(this, bf, "f");
  }
  async finalRunSteps() {
    return await this.done(), Object.values(Fe(this, ts, "f"));
  }
  async finalMessages() {
    return await this.done(), Object.values(Fe(this, qh, "f"));
  }
  async finalRun() {
    if ((await this.done(), !Fe(this, Fa, "f")))
      throw Error("Final run was not received.");
    return Fe(this, Fa, "f");
  }
  async _createThreadAssistantStream(i, r, l) {
    var S;
    const f = l == null ? void 0 : l.signal;
    f &&
      (f.aborted && this.controller.abort(),
      f.addEventListener("abort", () => this.controller.abort()));
    const m = { ...r, stream: !0 },
      v = await i.createAndRun(m, { ...l, signal: this.controller.signal });
    this._connected();
    for await (const N of v) Fe(this, Tn, "m", Af).call(this, N);
    if ((S = v.controller.signal) != null && S.aborted) throw new ri();
    return this._addRun(Fe(this, Tn, "m", Of).call(this));
  }
  async _createAssistantStream(i, r, l, f) {
    var N;
    const m = f == null ? void 0 : f.signal;
    m &&
      (m.aborted && this.controller.abort(),
      m.addEventListener("abort", () => this.controller.abort()));
    const v = { ...l, stream: !0 },
      S = await i.create(r, v, { ...f, signal: this.controller.signal });
    this._connected();
    for await (const M of S) Fe(this, Tn, "m", Af).call(this, M);
    if ((N = S.controller.signal) != null && N.aborted) throw new ri();
    return this._addRun(Fe(this, Tn, "m", Of).call(this));
  }
  static accumulateDelta(i, r) {
    for (const [l, f] of Object.entries(r)) {
      if (!i.hasOwnProperty(l)) {
        i[l] = f;
        continue;
      }
      let m = i[l];
      if (m == null) {
        i[l] = f;
        continue;
      }
      if (l === "index" || l === "type") {
        i[l] = f;
        continue;
      }
      if (typeof m == "string" && typeof f == "string") m += f;
      else if (typeof m == "number" && typeof f == "number") m += f;
      else if (Om(m) && Om(f)) m = this.accumulateDelta(m, f);
      else if (Array.isArray(m) && Array.isArray(f)) {
        if (m.every((v) => typeof v == "string" || typeof v == "number")) {
          m.push(...f);
          continue;
        }
        for (const v of f) {
          if (!Om(v))
            throw new Error(
              `Expected array delta entry to be an object but got: ${v}`,
            );
          const S = v.index;
          if (S == null)
            throw (
              (console.error(v),
              new Error(
                "Expected array delta entry to have an `index` property",
              ))
            );
          if (typeof S != "number")
            throw new Error(
              `Expected array delta entry \`index\` property to be a number but got ${S}`,
            );
          const N = m[S];
          N == null ? m.push(v) : (m[S] = this.accumulateDelta(N, v));
        }
        continue;
      } else
        throw Error(
          `Unhandled record type: ${l}, deltaValue: ${f}, accValue: ${m}`,
        );
      i[l] = m;
    }
    return i;
  }
  _addRun(i) {
    return i;
  }
  async _threadAssistantStream(i, r, l) {
    return await this._createThreadAssistantStream(r, i, l);
  }
  async _runAssistantStream(i, r, l, f) {
    return await this._createAssistantStream(r, i, l, f);
  }
  async _runToolAssistantStream(i, r, l, f, m) {
    return await this._createToolAssistantStream(l, i, r, f, m);
  }
}
(Af = function (i) {
  if (!this.ended)
    switch (
      (Dr(this, Kh, i, "f"), Fe(this, Tn, "m", j0).call(this, i), i.event)
    ) {
      case "thread.created":
        break;
      case "thread.run.created":
      case "thread.run.queued":
      case "thread.run.in_progress":
      case "thread.run.requires_action":
      case "thread.run.completed":
      case "thread.run.incomplete":
      case "thread.run.failed":
      case "thread.run.cancelling":
      case "thread.run.cancelled":
      case "thread.run.expired":
        Fe(this, Tn, "m", W0).call(this, i);
        break;
      case "thread.run.step.created":
      case "thread.run.step.in_progress":
      case "thread.run.step.delta":
      case "thread.run.step.completed":
      case "thread.run.step.failed":
      case "thread.run.step.cancelled":
      case "thread.run.step.expired":
        Fe(this, Tn, "m", B0).call(this, i);
        break;
      case "thread.message.created":
      case "thread.message.in_progress":
      case "thread.message.delta":
      case "thread.message.completed":
      case "thread.message.incomplete":
        Fe(this, Tn, "m", F0).call(this, i);
        break;
      case "error":
        throw new Error(
          "Encountered an error event in event processing - errors should be processed earlier",
        );
    }
}),
  (Of = function () {
    if (this.ended) throw new He("stream has ended, this shouldn't happen");
    if (!Fe(this, Fa, "f")) throw Error("Final run has not been received");
    return Fe(this, Fa, "f");
  }),
  (F0 = function (i) {
    const [r, l] = Fe(this, Tn, "m", $0).call(this, i, Fe(this, _i, "f"));
    Dr(this, _i, r, "f"), (Fe(this, qh, "f")[r.id] = r);
    for (const f of l) {
      const m = r.content[f.index];
      (m == null ? void 0 : m.type) == "text" &&
        this._emit("textCreated", m.text);
    }
    switch (i.event) {
      case "thread.message.created":
        this._emit("messageCreated", i.data);
        break;
      case "thread.message.in_progress":
        break;
      case "thread.message.delta":
        if ((this._emit("messageDelta", i.data.delta, r), i.data.delta.content))
          for (const f of i.data.delta.content) {
            if (f.type == "text" && f.text) {
              let m = f.text,
                v = r.content[f.index];
              if (v && v.type == "text") this._emit("textDelta", m, v.text);
              else
                throw Error(
                  "The snapshot associated with this text delta is not text or missing",
                );
            }
            if (f.index != Fe(this, ku, "f")) {
              if (Fe(this, Ma, "f"))
                switch (Fe(this, Ma, "f").type) {
                  case "text":
                    this._emit(
                      "textDone",
                      Fe(this, Ma, "f").text,
                      Fe(this, _i, "f"),
                    );
                    break;
                  case "image_file":
                    this._emit(
                      "imageFileDone",
                      Fe(this, Ma, "f").image_file,
                      Fe(this, _i, "f"),
                    );
                    break;
                }
              Dr(this, ku, f.index, "f");
            }
            Dr(this, Ma, r.content[f.index], "f");
          }
        break;
      case "thread.message.completed":
      case "thread.message.incomplete":
        if (Fe(this, ku, "f") !== void 0) {
          const f = i.data.content[Fe(this, ku, "f")];
          if (f)
            switch (f.type) {
              case "image_file":
                this._emit("imageFileDone", f.image_file, Fe(this, _i, "f"));
                break;
              case "text":
                this._emit("textDone", f.text, Fe(this, _i, "f"));
                break;
            }
        }
        Fe(this, _i, "f") && this._emit("messageDone", i.data),
          Dr(this, _i, void 0, "f");
    }
  }),
  (B0 = function (i) {
    const r = Fe(this, Tn, "m", z0).call(this, i);
    switch ((Dr(this, bf, r, "f"), i.event)) {
      case "thread.run.step.created":
        this._emit("runStepCreated", i.data);
        break;
      case "thread.run.step.delta":
        const l = i.data.delta;
        if (
          l.step_details &&
          l.step_details.type == "tool_calls" &&
          l.step_details.tool_calls &&
          r.step_details.type == "tool_calls"
        )
          for (const m of l.step_details.tool_calls)
            m.index == Fe(this, ep, "f")
              ? this._emit(
                  "toolCallDelta",
                  m,
                  r.step_details.tool_calls[m.index],
                )
              : (Fe(this, Fr, "f") &&
                  this._emit("toolCallDone", Fe(this, Fr, "f")),
                Dr(this, ep, m.index, "f"),
                Dr(this, Fr, r.step_details.tool_calls[m.index], "f"),
                Fe(this, Fr, "f") &&
                  this._emit("toolCallCreated", Fe(this, Fr, "f")));
        this._emit("runStepDelta", i.data.delta, r);
        break;
      case "thread.run.step.completed":
      case "thread.run.step.failed":
      case "thread.run.step.cancelled":
      case "thread.run.step.expired":
        Dr(this, bf, void 0, "f"),
          i.data.step_details.type == "tool_calls" &&
            Fe(this, Fr, "f") &&
            (this._emit("toolCallDone", Fe(this, Fr, "f")),
            Dr(this, Fr, void 0, "f")),
          this._emit("runStepDone", i.data, r);
        break;
    }
  }),
  (j0 = function (i) {
    Fe(this, rg, "f").push(i), this._emit("event", i);
  }),
  (z0 = function (i) {
    switch (i.event) {
      case "thread.run.step.created":
        return (Fe(this, ts, "f")[i.data.id] = i.data), i.data;
      case "thread.run.step.delta":
        let r = Fe(this, ts, "f")[i.data.id];
        if (!r)
          throw Error("Received a RunStepDelta before creation of a snapshot");
        let l = i.data;
        if (l.delta) {
          const f = xi.accumulateDelta(r, l.delta);
          Fe(this, ts, "f")[i.data.id] = f;
        }
        return Fe(this, ts, "f")[i.data.id];
      case "thread.run.step.completed":
      case "thread.run.step.failed":
      case "thread.run.step.cancelled":
      case "thread.run.step.expired":
      case "thread.run.step.in_progress":
        Fe(this, ts, "f")[i.data.id] = i.data;
        break;
    }
    if (Fe(this, ts, "f")[i.data.id]) return Fe(this, ts, "f")[i.data.id];
    throw new Error("No snapshot available");
  }),
  ($0 = function (i, r) {
    let l = [];
    switch (i.event) {
      case "thread.message.created":
        return [i.data, l];
      case "thread.message.delta":
        if (!r)
          throw Error(
            "Received a delta with no existing snapshot (there should be one from message creation)",
          );
        let f = i.data;
        if (f.delta.content)
          for (const m of f.delta.content)
            if (m.index in r.content) {
              let v = r.content[m.index];
              r.content[m.index] = Fe(this, Tn, "m", U0).call(this, m, v);
            } else (r.content[m.index] = m), l.push(m);
        return [r, l];
      case "thread.message.in_progress":
      case "thread.message.completed":
      case "thread.message.incomplete":
        if (r) return [r, l];
        throw Error("Received thread message event with no existing snapshot");
    }
    throw Error("Tried to accumulate a non-message event");
  }),
  (U0 = function (i, r) {
    return xi.accumulateDelta(r, i);
  }),
  (W0 = function (i) {
    switch ((Dr(this, Vh, i.data, "f"), i.event)) {
      case "thread.run.created":
        break;
      case "thread.run.queued":
        break;
      case "thread.run.in_progress":
        break;
      case "thread.run.requires_action":
      case "thread.run.cancelled":
      case "thread.run.failed":
      case "thread.run.completed":
      case "thread.run.expired":
        Dr(this, Fa, i.data, "f"),
          Fe(this, Fr, "f") &&
            (this._emit("toolCallDone", Fe(this, Fr, "f")),
            Dr(this, Fr, void 0, "f"));
        break;
    }
  });
class vg extends dt {
  create(i, r, l) {
    return this._client.post(`/threads/${i}/messages`, {
      body: r,
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  retrieve(i, r, l) {
    return this._client.get(`/threads/${i}/messages/${r}`, {
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  update(i, r, l, f) {
    return this._client.post(`/threads/${i}/messages/${r}`, {
      body: l,
      ...f,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(f == null ? void 0 : f.headers),
      },
    });
  }
  list(i, r = {}, l) {
    return Cn(r)
      ? this.list(i, {}, r)
      : this._client.getAPIList(`/threads/${i}/messages`, wg, {
          query: r,
          ...l,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(l == null ? void 0 : l.headers),
          },
        });
  }
  del(i, r, l) {
    return this._client.delete(`/threads/${i}/messages/${r}`, {
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
}
class wg extends _r {}
vg.MessagesPage = wg;
class _g extends dt {
  retrieve(i, r, l, f = {}, m) {
    return Cn(f)
      ? this.retrieve(i, r, l, {}, f)
      : this._client.get(`/threads/${i}/runs/${r}/steps/${l}`, {
          query: f,
          ...m,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(m == null ? void 0 : m.headers),
          },
        });
  }
  list(i, r, l = {}, f) {
    return Cn(l)
      ? this.list(i, r, {}, l)
      : this._client.getAPIList(`/threads/${i}/runs/${r}/steps`, Sg, {
          query: l,
          ...f,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(f == null ? void 0 : f.headers),
          },
        });
  }
}
class Sg extends _r {}
_g.RunStepsPage = Sg;
class Gf extends dt {
  constructor() {
    super(...arguments), (this.steps = new _g(this._client));
  }
  create(i, r, l) {
    const { include: f, ...m } = r;
    return this._client.post(`/threads/${i}/runs`, {
      query: { include: f },
      body: m,
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
      stream: r.stream ?? !1,
    });
  }
  retrieve(i, r, l) {
    return this._client.get(`/threads/${i}/runs/${r}`, {
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  update(i, r, l, f) {
    return this._client.post(`/threads/${i}/runs/${r}`, {
      body: l,
      ...f,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(f == null ? void 0 : f.headers),
      },
    });
  }
  list(i, r = {}, l) {
    return Cn(r)
      ? this.list(i, {}, r)
      : this._client.getAPIList(`/threads/${i}/runs`, xg, {
          query: r,
          ...l,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(l == null ? void 0 : l.headers),
          },
        });
  }
  cancel(i, r, l) {
    return this._client.post(`/threads/${i}/runs/${r}/cancel`, {
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  async createAndPoll(i, r, l) {
    const f = await this.create(i, r, l);
    return await this.poll(i, f.id, l);
  }
  createAndStream(i, r, l) {
    return xi.createAssistantStream(i, this._client.beta.threads.runs, r, l);
  }
  async poll(i, r, l) {
    const f = {
      ...(l == null ? void 0 : l.headers),
      "X-Stainless-Poll-Helper": "true",
    };
    for (
      l != null &&
      l.pollIntervalMs &&
      (f["X-Stainless-Custom-Poll-Interval"] = l.pollIntervalMs.toString());
      ;

    ) {
      const { data: m, response: v } = await this.retrieve(i, r, {
        ...l,
        headers: { ...(l == null ? void 0 : l.headers), ...f },
      }).withResponse();
      switch (m.status) {
        case "queued":
        case "in_progress":
        case "cancelling":
          let S = 5e3;
          if (l != null && l.pollIntervalMs) S = l.pollIntervalMs;
          else {
            const N = v.headers.get("openai-poll-after-ms");
            if (N) {
              const M = parseInt(N);
              isNaN(M) || (S = M);
            }
          }
          await $f(S);
          break;
        case "requires_action":
        case "incomplete":
        case "cancelled":
        case "completed":
        case "failed":
        case "expired":
          return m;
      }
    }
  }
  stream(i, r, l) {
    return xi.createAssistantStream(i, this._client.beta.threads.runs, r, l);
  }
  submitToolOutputs(i, r, l, f) {
    return this._client.post(`/threads/${i}/runs/${r}/submit_tool_outputs`, {
      body: l,
      ...f,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(f == null ? void 0 : f.headers),
      },
      stream: l.stream ?? !1,
    });
  }
  async submitToolOutputsAndPoll(i, r, l, f) {
    const m = await this.submitToolOutputs(i, r, l, f);
    return await this.poll(i, m.id, f);
  }
  submitToolOutputsStream(i, r, l, f) {
    return xi.createToolAssistantStream(
      i,
      r,
      this._client.beta.threads.runs,
      l,
      f,
    );
  }
}
class xg extends _r {}
Gf.RunsPage = xg;
Gf.Steps = _g;
Gf.RunStepsPage = Sg;
class Uu extends dt {
  constructor() {
    super(...arguments),
      (this.runs = new Gf(this._client)),
      (this.messages = new vg(this._client));
  }
  create(i = {}, r) {
    return Cn(i)
      ? this.create({}, i)
      : this._client.post("/threads", {
          body: i,
          ...r,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(r == null ? void 0 : r.headers),
          },
        });
  }
  retrieve(i, r) {
    return this._client.get(`/threads/${i}`, {
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  update(i, r, l) {
    return this._client.post(`/threads/${i}`, {
      body: r,
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  del(i, r) {
    return this._client.delete(`/threads/${i}`, {
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  createAndRun(i, r) {
    return this._client.post("/threads/runs", {
      body: i,
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
      stream: i.stream ?? !1,
    });
  }
  async createAndRunPoll(i, r) {
    const l = await this.createAndRun(i, r);
    return await this.runs.poll(l.thread_id, l.id, r);
  }
  createAndRunStream(i, r) {
    return xi.createThreadAssistantStream(i, this._client.beta.threads, r);
  }
}
Uu.Runs = Gf;
Uu.RunsPage = xg;
Uu.Messages = vg;
Uu.MessagesPage = wg;
class Wu extends dt {
  constructor() {
    super(...arguments),
      (this.realtime = new yg(this._client)),
      (this.chat = new ng(this._client)),
      (this.assistants = new dg(this._client)),
      (this.threads = new Uu(this._client));
  }
}
Wu.Realtime = yg;
Wu.Assistants = dg;
Wu.AssistantsPage = hg;
Wu.Threads = Uu;
class Sv extends dt {
  create(i, r) {
    return this._client.post("/completions", {
      body: i,
      ...r,
      stream: i.stream ?? !1,
    });
  }
}
class xv extends dt {
  create(i, r) {
    return this._client.post("/embeddings", { body: i, ...r });
  }
}
let Eg = class extends dt {
  create(i, r) {
    return this._client.post("/files", zu({ body: i, ...r }));
  }
  retrieve(i, r) {
    return this._client.get(`/files/${i}`, r);
  }
  list(i = {}, r) {
    return Cn(i)
      ? this.list({}, i)
      : this._client.getAPIList("/files", Cg, { query: i, ...r });
  }
  del(i, r) {
    return this._client.delete(`/files/${i}`, r);
  }
  content(i, r) {
    return this._client.get(`/files/${i}/content`, {
      ...r,
      headers: {
        Accept: "application/binary",
        ...(r == null ? void 0 : r.headers),
      },
      __binaryResponse: !0,
    });
  }
  retrieveContent(i, r) {
    return this._client.get(`/files/${i}/content`, r);
  }
  async waitForProcessing(
    i,
    { pollInterval: r = 5e3, maxWait: l = 30 * 60 * 1e3 } = {},
  ) {
    const f = new Set(["processed", "error", "deleted"]),
      m = Date.now();
    let v = await this.retrieve(i);
    for (; !v.status || !f.has(v.status); )
      if ((await $f(r), (v = await this.retrieve(i)), Date.now() - m > l))
        throw new lg({
          message: `Giving up on waiting for file ${i} to finish processing after ${l} milliseconds.`,
        });
    return v;
  }
};
class Cg extends _r {}
Eg.FileObjectsPage = Cg;
class Ig extends dt {
  list(i, r = {}, l) {
    return Cn(r)
      ? this.list(i, {}, r)
      : this._client.getAPIList(`/fine_tuning/jobs/${i}/checkpoints`, kg, {
          query: r,
          ...l,
        });
  }
}
class kg extends _r {}
Ig.FineTuningJobCheckpointsPage = kg;
class Gu extends dt {
  constructor() {
    super(...arguments), (this.checkpoints = new Ig(this._client));
  }
  create(i, r) {
    return this._client.post("/fine_tuning/jobs", { body: i, ...r });
  }
  retrieve(i, r) {
    return this._client.get(`/fine_tuning/jobs/${i}`, r);
  }
  list(i = {}, r) {
    return Cn(i)
      ? this.list({}, i)
      : this._client.getAPIList("/fine_tuning/jobs", Pg, { query: i, ...r });
  }
  cancel(i, r) {
    return this._client.post(`/fine_tuning/jobs/${i}/cancel`, r);
  }
  listEvents(i, r = {}, l) {
    return Cn(r)
      ? this.listEvents(i, {}, r)
      : this._client.getAPIList(`/fine_tuning/jobs/${i}/events`, Rg, {
          query: r,
          ...l,
        });
  }
}
class Pg extends _r {}
class Rg extends _r {}
Gu.FineTuningJobsPage = Pg;
Gu.FineTuningJobEventsPage = Rg;
Gu.Checkpoints = Ig;
Gu.FineTuningJobCheckpointsPage = kg;
class Hf extends dt {
  constructor() {
    super(...arguments), (this.jobs = new Gu(this._client));
  }
}
Hf.Jobs = Gu;
Hf.FineTuningJobsPage = Pg;
Hf.FineTuningJobEventsPage = Rg;
class Ev extends dt {
  createVariation(i, r) {
    return this._client.post("/images/variations", zu({ body: i, ...r }));
  }
  edit(i, r) {
    return this._client.post("/images/edits", zu({ body: i, ...r }));
  }
  generate(i, r) {
    return this._client.post("/images/generations", { body: i, ...r });
  }
}
class Ag extends dt {
  retrieve(i, r) {
    return this._client.get(`/models/${i}`, r);
  }
  list(i) {
    return this._client.getAPIList("/models", Og, i);
  }
  del(i, r) {
    return this._client.delete(`/models/${i}`, r);
  }
}
class Og extends ug {}
Ag.ModelsPage = Og;
class Cv extends dt {
  create(i, r) {
    return this._client.post("/moderations", { body: i, ...r });
  }
}
function Mx(a, i) {
  return !i || !Bx(i)
    ? {
        ...a,
        output_parsed: null,
        output: a.output.map((r) =>
          r.type === "function_call"
            ? { ...r, parsed_arguments: null }
            : r.type === "message"
              ? {
                  ...r,
                  content: r.content.map((l) => ({ ...l, parsed: null })),
                }
              : r,
        ),
      }
    : Iv(a, i);
}
function Iv(a, i) {
  const r = a.output.map((f) => {
      if (f.type === "function_call")
        return { ...f, parsed_arguments: $x(i, f) };
      if (f.type === "message") {
        const m = f.content.map((v) =>
          v.type === "output_text" ? { ...v, parsed: Fx(i, v.text) } : v,
        );
        return { ...f, content: m };
      }
      return f;
    }),
    l = Object.assign({}, a, { output: r });
  return (
    Object.getOwnPropertyDescriptor(a, "output_text") || kv(l),
    Object.defineProperty(l, "output_parsed", {
      enumerable: !0,
      get() {
        for (const f of l.output)
          if (f.type === "message") {
            for (const m of f.content)
              if (m.type === "output_text" && m.parsed !== null)
                return m.parsed;
          }
        return null;
      },
    }),
    l
  );
}
function Fx(a, i) {
  var r, l, f, m;
  return ((l = (r = a.text) == null ? void 0 : r.format) == null
    ? void 0
    : l.type) !== "json_schema"
    ? null
    : "$parseRaw" in ((f = a.text) == null ? void 0 : f.format)
      ? ((m = a.text) == null ? void 0 : m.format).$parseRaw(i)
      : JSON.parse(i);
}
function Bx(a) {
  var i;
  return !!mg((i = a.text) == null ? void 0 : i.format);
}
function jx(a) {
  return (a == null ? void 0 : a.$brand) === "auto-parseable-tool";
}
function zx(a, i) {
  return a.find((r) => r.type === "function" && r.name === i);
}
function $x(a, i) {
  const r = zx(a.tools ?? [], i.name);
  return {
    ...i,
    ...i,
    parsed_arguments: jx(r)
      ? r.$parseRaw(i.arguments)
      : r != null && r.strict
        ? JSON.parse(i.arguments)
        : null,
  };
}
function kv(a) {
  const i = [];
  for (const r of a.output)
    if (r.type === "message")
      for (const l of r.content) l.type === "output_text" && i.push(l.text);
  a.output_text = i.join("");
}
class Ng extends dt {
  list(i, r = {}, l) {
    return Cn(r)
      ? this.list(i, {}, r)
      : this._client.getAPIList(`/responses/${i}/input_items`, bg, {
          query: r,
          ...l,
        });
  }
}
class bg extends _r {}
Ng.ResponseItemListDataPage = bg;
var xu = function (a, i, r, l, f) {
    if (l === "m") throw new TypeError("Private method is not writable");
    if (l === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof i == "function" ? a !== i || !f : !i.has(a))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return l === "a" ? f.call(a, r) : f ? (f.value = r) : i.set(a, r), r;
  },
  Io = function (a, i, r, l) {
    if (r === "a" && !l)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof i == "function" ? a !== i || !l : !i.has(a))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return r === "m" ? l : r === "a" ? l.call(a) : l ? l.value : i.get(a);
  },
  Eu,
  jh,
  ko,
  zh,
  G0,
  H0,
  q0,
  K0;
class Tg extends pg {
  constructor(i) {
    super(),
      Eu.add(this),
      jh.set(this, void 0),
      ko.set(this, void 0),
      zh.set(this, void 0),
      xu(this, jh, i, "f");
  }
  static createResponse(i, r, l) {
    const f = new Tg(r);
    return (
      f._run(() =>
        f._createResponse(i, r, {
          ...l,
          headers: {
            ...(l == null ? void 0 : l.headers),
            "X-Stainless-Helper-Method": "stream",
          },
        }),
      ),
      f
    );
  }
  async _createResponse(i, r, l) {
    var v;
    const f = l == null ? void 0 : l.signal;
    f &&
      (f.aborted && this.controller.abort(),
      f.addEventListener("abort", () => this.controller.abort())),
      Io(this, Eu, "m", G0).call(this);
    const m = await i.responses.create(
      { ...r, stream: !0 },
      { ...l, signal: this.controller.signal },
    );
    this._connected();
    for await (const S of m) Io(this, Eu, "m", H0).call(this, S);
    if ((v = m.controller.signal) != null && v.aborted) throw new ri();
    return Io(this, Eu, "m", q0).call(this);
  }
  [((jh = new WeakMap()),
  (ko = new WeakMap()),
  (zh = new WeakMap()),
  (Eu = new WeakSet()),
  (G0 = function () {
    this.ended || xu(this, ko, void 0, "f");
  }),
  (H0 = function (r) {
    if (this.ended) return;
    const l = Io(this, Eu, "m", K0).call(this, r);
    switch ((this._emit("event", r), r.type)) {
      case "response.output_text.delta": {
        const f = l.output[r.output_index];
        if (!f) throw new He(`missing output at index ${r.output_index}`);
        if (f.type === "message") {
          const m = f.content[r.content_index];
          if (!m) throw new He(`missing content at index ${r.content_index}`);
          if (m.type !== "output_text")
            throw new He(`expected content to be 'output_text', got ${m.type}`);
          this._emit("response.output_text.delta", { ...r, snapshot: m.text });
        }
        break;
      }
      case "response.function_call_arguments.delta": {
        const f = l.output[r.output_index];
        if (!f) throw new He(`missing output at index ${r.output_index}`);
        f.type === "function_call" &&
          this._emit("response.function_call_arguments.delta", {
            ...r,
            snapshot: f.arguments,
          });
        break;
      }
      default:
        this._emit(r.type, r);
        break;
    }
  }),
  (q0 = function () {
    if (this.ended) throw new He("stream has ended, this shouldn't happen");
    const r = Io(this, ko, "f");
    if (!r) throw new He("request ended without sending any events");
    xu(this, ko, void 0, "f");
    const l = Ux(r, Io(this, jh, "f"));
    return xu(this, zh, l, "f"), l;
  }),
  (K0 = function (r) {
    let l = Io(this, ko, "f");
    if (!l) {
      if (r.type !== "response.created")
        throw new He(
          `When snapshot hasn't been set yet, expected 'response.created' event, got ${r.type}`,
        );
      return (l = xu(this, ko, r.response, "f")), l;
    }
    switch (r.type) {
      case "response.output_item.added": {
        l.output.push(r.item);
        break;
      }
      case "response.content_part.added": {
        const f = l.output[r.output_index];
        if (!f) throw new He(`missing output at index ${r.output_index}`);
        f.type === "message" && f.content.push(r.part);
        break;
      }
      case "response.output_text.delta": {
        const f = l.output[r.output_index];
        if (!f) throw new He(`missing output at index ${r.output_index}`);
        if (f.type === "message") {
          const m = f.content[r.content_index];
          if (!m) throw new He(`missing content at index ${r.content_index}`);
          if (m.type !== "output_text")
            throw new He(`expected content to be 'output_text', got ${m.type}`);
          m.text += r.delta;
        }
        break;
      }
      case "response.function_call_arguments.delta": {
        const f = l.output[r.output_index];
        if (!f) throw new He(`missing output at index ${r.output_index}`);
        f.type === "function_call" && (f.arguments += r.delta);
        break;
      }
      case "response.completed": {
        xu(this, ko, r.response, "f");
        break;
      }
    }
    return l;
  }),
  Symbol.asyncIterator)]() {
    const i = [],
      r = [];
    let l = !1;
    return (
      this.on("event", (f) => {
        const m = r.shift();
        m ? m.resolve(f) : i.push(f);
      }),
      this.on("end", () => {
        l = !0;
        for (const f of r) f.resolve(void 0);
        r.length = 0;
      }),
      this.on("abort", (f) => {
        l = !0;
        for (const m of r) m.reject(f);
        r.length = 0;
      }),
      this.on("error", (f) => {
        l = !0;
        for (const m of r) m.reject(f);
        r.length = 0;
      }),
      {
        next: async () =>
          i.length
            ? { value: i.shift(), done: !1 }
            : l
              ? { value: void 0, done: !0 }
              : new Promise((m, v) => r.push({ resolve: m, reject: v })).then(
                  (m) =>
                    m ? { value: m, done: !1 } : { value: void 0, done: !0 },
                ),
        return: async () => (this.abort(), { value: void 0, done: !0 }),
      }
    );
  }
  async finalResponse() {
    await this.done();
    const i = Io(this, zh, "f");
    if (!i) throw new He("stream ended without producing a ChatCompletion");
    return i;
  }
}
function Ux(a, i) {
  return Mx(a, i);
}
class fp extends dt {
  constructor() {
    super(...arguments), (this.inputItems = new Ng(this._client));
  }
  create(i, r) {
    return this._client
      .post("/responses", { body: i, ...r, stream: i.stream ?? !1 })
      ._thenUnwrap(
        (l) => ("object" in l && l.object === "response" && kv(l), l),
      );
  }
  retrieve(i, r = {}, l) {
    return Cn(r)
      ? this.retrieve(i, {}, r)
      : this._client.get(`/responses/${i}`, { query: r, ...l });
  }
  del(i, r) {
    return this._client.delete(`/responses/${i}`, {
      ...r,
      headers: { Accept: "*/*", ...(r == null ? void 0 : r.headers) },
    });
  }
  parse(i, r) {
    return this._client.responses.create(i, r)._thenUnwrap((l) => Iv(l, i));
  }
  stream(i, r) {
    return Tg.createResponse(this._client, i, r);
  }
}
fp.InputItems = Ng;
fp.ResponseItemListDataPage = bg;
class Pv extends dt {
  create(i, r, l) {
    return this._client.post(`/uploads/${i}/parts`, zu({ body: r, ...l }));
  }
}
class Lg extends dt {
  constructor() {
    super(...arguments), (this.parts = new Pv(this._client));
  }
  create(i, r) {
    return this._client.post("/uploads", { body: i, ...r });
  }
  cancel(i, r) {
    return this._client.post(`/uploads/${i}/cancel`, r);
  }
  complete(i, r, l) {
    return this._client.post(`/uploads/${i}/complete`, { body: r, ...l });
  }
}
Lg.Parts = Pv;
const Wx = async (a) => {
  const i = await Promise.allSettled(a),
    r = i.filter((f) => f.status === "rejected");
  if (r.length) {
    for (const f of r) console.error(f.reason);
    throw new Error(`${r.length} promise(s) failed - see the above errors`);
  }
  const l = [];
  for (const f of i) f.status === "fulfilled" && l.push(f.value);
  return l;
};
class dp extends dt {
  create(i, r, l) {
    return this._client.post(`/vector_stores/${i}/files`, {
      body: r,
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  retrieve(i, r, l) {
    return this._client.get(`/vector_stores/${i}/files/${r}`, {
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  update(i, r, l, f) {
    return this._client.post(`/vector_stores/${i}/files/${r}`, {
      body: l,
      ...f,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(f == null ? void 0 : f.headers),
      },
    });
  }
  list(i, r = {}, l) {
    return Cn(r)
      ? this.list(i, {}, r)
      : this._client.getAPIList(`/vector_stores/${i}/files`, hp, {
          query: r,
          ...l,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(l == null ? void 0 : l.headers),
          },
        });
  }
  del(i, r, l) {
    return this._client.delete(`/vector_stores/${i}/files/${r}`, {
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  async createAndPoll(i, r, l) {
    const f = await this.create(i, r, l);
    return await this.poll(i, f.id, l);
  }
  async poll(i, r, l) {
    const f = {
      ...(l == null ? void 0 : l.headers),
      "X-Stainless-Poll-Helper": "true",
    };
    for (
      l != null &&
      l.pollIntervalMs &&
      (f["X-Stainless-Custom-Poll-Interval"] = l.pollIntervalMs.toString());
      ;

    ) {
      const m = await this.retrieve(i, r, { ...l, headers: f }).withResponse(),
        v = m.data;
      switch (v.status) {
        case "in_progress":
          let S = 5e3;
          if (l != null && l.pollIntervalMs) S = l.pollIntervalMs;
          else {
            const N = m.response.headers.get("openai-poll-after-ms");
            if (N) {
              const M = parseInt(N);
              isNaN(M) || (S = M);
            }
          }
          await $f(S);
          break;
        case "failed":
        case "completed":
          return v;
      }
    }
  }
  async upload(i, r, l) {
    const f = await this._client.files.create(
      { file: r, purpose: "assistants" },
      l,
    );
    return this.create(i, { file_id: f.id }, l);
  }
  async uploadAndPoll(i, r, l) {
    const f = await this.upload(i, r, l);
    return await this.poll(i, f.id, l);
  }
  content(i, r, l) {
    return this._client.getAPIList(
      `/vector_stores/${i}/files/${r}/content`,
      Dg,
      {
        ...l,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(l == null ? void 0 : l.headers),
        },
      },
    );
  }
}
class hp extends _r {}
class Dg extends ug {}
dp.VectorStoreFilesPage = hp;
dp.FileContentResponsesPage = Dg;
class Rv extends dt {
  create(i, r, l) {
    return this._client.post(`/vector_stores/${i}/file_batches`, {
      body: r,
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  retrieve(i, r, l) {
    return this._client.get(`/vector_stores/${i}/file_batches/${r}`, {
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  cancel(i, r, l) {
    return this._client.post(`/vector_stores/${i}/file_batches/${r}/cancel`, {
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  async createAndPoll(i, r, l) {
    const f = await this.create(i, r);
    return await this.poll(i, f.id, l);
  }
  listFiles(i, r, l = {}, f) {
    return Cn(l)
      ? this.listFiles(i, r, {}, l)
      : this._client.getAPIList(
          `/vector_stores/${i}/file_batches/${r}/files`,
          hp,
          {
            query: l,
            ...f,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...(f == null ? void 0 : f.headers),
            },
          },
        );
  }
  async poll(i, r, l) {
    const f = {
      ...(l == null ? void 0 : l.headers),
      "X-Stainless-Poll-Helper": "true",
    };
    for (
      l != null &&
      l.pollIntervalMs &&
      (f["X-Stainless-Custom-Poll-Interval"] = l.pollIntervalMs.toString());
      ;

    ) {
      const { data: m, response: v } = await this.retrieve(i, r, {
        ...l,
        headers: f,
      }).withResponse();
      switch (m.status) {
        case "in_progress":
          let S = 5e3;
          if (l != null && l.pollIntervalMs) S = l.pollIntervalMs;
          else {
            const N = v.headers.get("openai-poll-after-ms");
            if (N) {
              const M = parseInt(N);
              isNaN(M) || (S = M);
            }
          }
          await $f(S);
          break;
        case "failed":
        case "cancelled":
        case "completed":
          return m;
      }
    }
  }
  async uploadAndPoll(i, { files: r, fileIds: l = [] }, f) {
    if (r == null || r.length == 0)
      throw new Error(
        "No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead",
      );
    const m = (f == null ? void 0 : f.maxConcurrency) ?? 5,
      v = Math.min(m, r.length),
      S = this._client,
      N = r.values(),
      M = [...l];
    async function G(R) {
      for (let H of R) {
        const $ = await S.files.create({ file: H, purpose: "assistants" }, f);
        M.push($.id);
      }
    }
    const I = Array(v).fill(N).map(G);
    return await Wx(I), await this.createAndPoll(i, { file_ids: M });
  }
}
class Fo extends dt {
  constructor() {
    super(...arguments),
      (this.files = new dp(this._client)),
      (this.fileBatches = new Rv(this._client));
  }
  create(i, r) {
    return this._client.post("/vector_stores", {
      body: i,
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  retrieve(i, r) {
    return this._client.get(`/vector_stores/${i}`, {
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  update(i, r, l) {
    return this._client.post(`/vector_stores/${i}`, {
      body: r,
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
  list(i = {}, r) {
    return Cn(i)
      ? this.list({}, i)
      : this._client.getAPIList("/vector_stores", Mg, {
          query: i,
          ...r,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(r == null ? void 0 : r.headers),
          },
        });
  }
  del(i, r) {
    return this._client.delete(`/vector_stores/${i}`, {
      ...r,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(r == null ? void 0 : r.headers),
      },
    });
  }
  search(i, r, l) {
    return this._client.getAPIList(`/vector_stores/${i}/search`, Fg, {
      body: r,
      method: "post",
      ...l,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...(l == null ? void 0 : l.headers),
      },
    });
  }
}
class Mg extends _r {}
class Fg extends ug {}
Fo.VectorStoresPage = Mg;
Fo.VectorStoreSearchResponsesPage = Fg;
Fo.Files = dp;
Fo.VectorStoreFilesPage = hp;
Fo.FileContentResponsesPage = Dg;
Fo.FileBatches = Rv;
var Av;
class nt extends fx {
  constructor({
    baseURL: i = Lh("OPENAI_BASE_URL"),
    apiKey: r = Lh("OPENAI_API_KEY"),
    organization: l = Lh("OPENAI_ORG_ID") ?? null,
    project: f = Lh("OPENAI_PROJECT_ID") ?? null,
    ...m
  } = {}) {
    if (r === void 0)
      throw new He(
        "The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).",
      );
    const v = {
      apiKey: r,
      organization: l,
      project: f,
      ...m,
      baseURL: i || "https://api.openai.com/v1",
    };
    if (!v.dangerouslyAllowBrowser && xx())
      throw new He(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);
    super({
      baseURL: v.baseURL,
      timeout: v.timeout ?? 6e5,
      httpAgent: v.httpAgent,
      maxRetries: v.maxRetries,
      fetch: v.fetch,
    }),
      (this.completions = new Sv(this)),
      (this.chat = new cp(this)),
      (this.embeddings = new xv(this)),
      (this.files = new Eg(this)),
      (this.images = new Ev(this)),
      (this.audio = new Uf(this)),
      (this.moderations = new Cv(this)),
      (this.models = new Ag(this)),
      (this.fineTuning = new Hf(this)),
      (this.vectorStores = new Fo(this)),
      (this.beta = new Wu(this)),
      (this.batches = new cg(this)),
      (this.uploads = new Lg(this)),
      (this.responses = new fp(this)),
      (this._options = v),
      (this.apiKey = r),
      (this.organization = l),
      (this.project = f);
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  defaultHeaders(i) {
    return {
      ...super.defaultHeaders(i),
      "OpenAI-Organization": this.organization,
      "OpenAI-Project": this.project,
      ...this._options.defaultHeaders,
    };
  }
  authHeaders(i) {
    return { Authorization: `Bearer ${this.apiKey}` };
  }
  stringifyQuery(i) {
    return KS(i, { arrayFormat: "brackets" });
  }
}
Av = nt;
nt.OpenAI = Av;
nt.DEFAULT_TIMEOUT = 6e5;
nt.OpenAIError = He;
nt.APIError = Dn;
nt.APIConnectionError = ip;
nt.APIConnectionTimeoutError = lg;
nt.APIUserAbortError = ri;
nt.NotFoundError = Ly;
nt.ConflictError = Dy;
nt.RateLimitError = Fy;
nt.BadRequestError = Ny;
nt.AuthenticationError = by;
nt.InternalServerError = By;
nt.PermissionDeniedError = Ty;
nt.UnprocessableEntityError = My;
nt.toFile = Gy;
nt.fileFromPath = Ay;
nt.Completions = Sv;
nt.Chat = cp;
nt.ChatCompletionsPage = up;
nt.Embeddings = xv;
nt.Files = Eg;
nt.FileObjectsPage = Cg;
nt.Images = Ev;
nt.Audio = Uf;
nt.Moderations = Cv;
nt.Models = Ag;
nt.ModelsPage = Og;
nt.FineTuning = Hf;
nt.VectorStores = Fo;
nt.VectorStoresPage = Mg;
nt.VectorStoreSearchResponsesPage = Fg;
nt.Beta = Wu;
nt.Batches = cg;
nt.BatchesPage = fg;
nt.Uploads = Lg;
nt.Responses = fp;
async function Gx(a) {
  const l = (
    await new nt().chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: `We play chess; 
                you play black; 
                you can not play castling; 
                chess board is numered from 1 to 64; 
                1 = a8, 2 = b8, 3 = c8 , 4 = d8 , 5 = e8 , 6 = f8 , 7 = g8 , 8 = h8 , 
                9 = a7 , 10 = b7 , 11 = c7 , 12 = d7 , 13 = e7 , 14 = f7 , 15 = g7 , 16 = h7 , 
                17 = a6 , 18 = b6 , 19 = c6 , 20 = d6 , 21 = e6 , 22 = f6 , 23 = g6 , 24 = h6 ,
                 25 = a5 , 26 = b5 , 27 = c5 , 28 = d5 , 29 = e5 , 30 = f5 , 31 = g5 , 32 = h5 , 
                 33 = a4 , 34 = b4 , 35 = c4 , 36 = d4 , 37 = e4 , 38 = f4 , 39 = g4 , 40 = h4 , 
                 41 = a3 , 42 = b3 , 43 = c3 , 44 = d3 , 45 = e3 , 46 = f3 , 47 = g3 , 48 = h3 , 
                 49 = a2 , 50 = b2 , 51 = c2 , 52 = d2 , 53 = e2 , 54 = f2 , 55 = g2 , 56 = h2 , 
                 57 = a1 , 58 = b1 , 59 = c1 , 60 = d1 , 61 = e1 , 62 = f1 , 63 = g1 , 64 = h1;
                those are names for pieces: 
                br = black rook, wr = white rook,
                bn = black knight, wn = white knight,
                bb = black bishop, wb = white bishop,
                bq = black queen, wq = white queen,
                bk = black king, wk = white king, 
                bp = black pawn, wp = white pawn, 
                I have make a move only black pieces;
                Thats how board looks like now: ${a};
                for making a move just simply say for example [9, 17] which means 9 goes to 17 nothing more nothing less; dont write anything but numbers in []`,
        },
      ],
    })
  ).choices[0].message.content;
  let f;
  return l && (f = l.match(/\d+/g)), f;
}
function Hx() {
  const a = ie.useRef(null),
    i = ie.useRef(null),
    r = ie.useRef(!1),
    [l, f] = ie.useState(!1),
    [m, v] = ie.useState(0),
    [S, N] = ie.useState(() => [
      { 1: "br" },
      { 2: "bn" },
      { 3: "bb" },
      { 4: "bq" },
      { 5: "bk" },
      { 6: "bb" },
      { 7: "bn" },
      { 8: "br" },
      { 9: "bp" },
      { 10: "bp" },
      { 11: "bp" },
      { 12: "bp" },
      { 13: "bp" },
      { 14: "bp" },
      { 15: "bp" },
      { 16: "bp" },
      { 17: "" },
      { 18: "" },
      { 19: "" },
      { 20: "" },
      { 21: "" },
      { 22: "" },
      { 23: "" },
      { 24: "" },
      { 25: "" },
      { 26: "" },
      { 27: "" },
      { 28: "" },
      { 29: "" },
      { 30: "" },
      { 31: "" },
      { 32: "" },
      { 33: "" },
      { 34: "" },
      { 35: "" },
      { 36: "" },
      { 37: "" },
      { 38: "" },
      { 39: "" },
      { 40: "" },
      { 41: "" },
      { 42: "" },
      { 43: "" },
      { 44: "" },
      { 45: "" },
      { 46: "" },
      { 47: "" },
      { 48: "" },
      { 49: "wp" },
      { 50: "wp" },
      { 51: "wp" },
      { 52: "wp" },
      { 53: "wp" },
      { 54: "wp" },
      { 55: "wp" },
      { 56: "wp" },
      { 57: "wr" },
      { 58: "wn" },
      { 59: "wb" },
      { 60: "wq" },
      { 61: "wk" },
      { 62: "wb" },
      { 63: "wn" },
      { 64: "wr" },
    ]),
    [M, G] = ie.useState(() => !1),
    [I, R] = ie.useState(() => !1),
    [H, $] = ie.useState(() => !1),
    [B, z] = ie.useState(() => !1),
    [Y, K] = ie.useState(() => !1);
  function J() {
    const ge = [];
    for (let he = 58; he <= 60; he++) {
      const ce = document.querySelector(`#s${he}`);
      ge.push(ce);
    }
    for (let he of ge)
      return !(
        he &&
        he.children[0] &&
        he.children[0].getAttribute("class") == "myImage"
      );
    return new Error("lol");
  }
  function Q() {
    const ge = [];
    for (let he = 62; he <= 63; he++) {
      const ce = document.querySelector(`#s${he}`);
      ge.push(ce);
    }
    for (let he of ge)
      return !(
        he &&
        he.children[0] &&
        he.children[0].getAttribute("class") == "myImage"
      );
    return new Error("lol");
  }
  ie.useEffect(() => {
    z(!0);
    const ge = sessionStorage.getItem("king"),
      he = ge && JSON.parse(ge) ? JSON.parse(ge) : "";
    he && G(he);
  }, []);
  const [ee, fe] = ie.useState("white");
  ie.useEffect(() => {
    const ge = JSON.stringify(M);
    sessionStorage.setItem("king", ge);
  }, [M]);
  const de = ie.useRef((ge) => {}),
    [A, je] = ie.useState({
      pieceId: "",
      startBoardId: 0,
      startBoardDivId: "",
      targetBoardId: 0,
      occupatedSquares: [],
      collision: !1,
      kingCollisions: { pieces: [] },
      doesItMove: { king: M, leftRook: I, rightRook: H },
      doesItFree: { left: B, right: Y },
    });
  ie.useState(!1);
  const Te = ie.useRef(!0);
  ie.useEffect(() => {
    if (Te.current) {
      Te.current = !1;
      return;
    }
    if (
      (sessionStorage.setItem("value", JSON.stringify(S)),
      ee != "white" && ee == "black")
    ) {
      async function ge() {
        const he = await Gx(JSON.stringify(S));
        if (!he) return;
        const ce = Number(he[0]),
          oe = Number(he[1]);
        if (
          (console.log("from:", ce, "to:", oe),
          S[ce - 1][ce.toString()] == "" || S[ce - 1][ce.toString()][0] == "w")
        )
          ge();
        else {
          let _e = function () {
              N((C) => {
                const q = Ts.cloneDeep(C);
                return (
                  (q[ce - 1][ce.toString()] = ""),
                  (q[oe - 1][oe.toString()] = S[ce - 1][ce.toString()]),
                  sessionStorage.setItem("value", JSON.stringify(q)),
                  fe("white"),
                  q
                );
              });
            },
            Ae = function () {
              ge();
            };
          const xe = Ts.cloneDeep(A);
          (xe.startBoardId = ce),
            (xe.targetBoardId = oe),
            (xe.pieceId = S[ce - 1][ce.toString()]);
          const j = document.querySelectorAll(".myImage");
          for (let C of j) {
            const q = C.parentElement,
              pe = Number(q == null ? void 0 : q.id.slice(1));
            xe.occupatedSquares.push(pe);
          }
          const le = Im(xe);
          console.log(le),
            le.isLegal && le.legalSquares.includes(oe)
              ? Object.values(S)[ce - 1][ce] == "bp"
                ? (oe - 9 == ce || oe - 7 == ce) &&
                  Object.values(S)[oe - 1][oe].slice(0, 1) == "w"
                  ? _e()
                  : oe - 8 == ce && Object.values(S)[oe - 1][oe] == ""
                    ? (console.log("tutaj "), _e())
                    : oe - 16 == ce &&
                        Object.values(S)[oe - 1][oe] == "" &&
                        Object.values(S)[oe - 9][oe - 8] == ""
                      ? _e()
                      : (console.log(Object.values(S)[oe - 1][oe].slice(0, 1)),
                        Ae())
                : Object.values(S)[oe - 1][oe].slice(0, 1) == "b"
                  ? Ae()
                  : _e()
              : le.isLegal == !1 && ge();
        }
      }
      ge();
    }
  }, [ee]),
    ie.useEffect(() => {
      const ge = Im(A);
      A.pieceId == "wp" || A.pieceId == "bp"
        ? ge.legalSquares.map((ce) => {
            var j;
            const oe = document.querySelector(`#s${ce}`);
            function _e() {
              const le = document.createElement("img");
              le.setAttribute("src", "./img/Game-2/dot.png"),
                le.setAttribute("class", "dot"),
                (le.style.pointerEvents = "none"),
                (le.style.position = "absolute"),
                oe == null || oe.appendChild(le);
            }
            const Ae = [25, 26, 27, 28, 29, 30, 31, 32],
              xe = [33, 34, 35, 36, 37, 38, 39, 40];
            if (A.startBoardId + 16 == ce || A.startBoardId - 16 == ce)
              if (A.startBoardId < 32) {
                const le = document.querySelector(`#s${ce - 8} > img`);
                (le == null ? void 0 : le.getAttribute("class")) != "myImage" &&
                  _e();
              } else {
                const le = document.querySelector(`#s${ce + 8} > img`);
                (le == null ? void 0 : le.getAttribute("class")) != "myImage" &&
                  _e();
              }
            else if (A.startBoardId - 8 == ce || A.startBoardId + 8 == ce)
              ((j = oe == null ? void 0 : oe.children[0]) == null
                ? void 0
                : j.getAttribute("class")) != "myImage" && _e();
            else {
              const le = document.querySelector(`#s${ce}`);
              let C;
              le != null &&
                le.children[0] &&
                (C = le == null ? void 0 : le.children[0].getAttribute("src"));
              let q;
              C && (q = C.match(/(\w{1}).\.png$/)),
                q &&
                (le == null ? void 0 : le.children[0]) instanceof HTMLElement &&
                q[1] != A.pieceId.slice(0, 1)
                  ? le instanceof HTMLElement &&
                    (le.style.backgroundColor = "rgba(255, 255, 51, 0.5)")
                  : A.startBoardId - 1 == m &&
                      Ae.includes(A.startBoardId) &&
                      ce == A.startBoardId - 9
                    ? document.querySelector(`#s${ce}`) && _e()
                    : A.startBoardId + 1 == m &&
                        Ae.includes(A.startBoardId) &&
                        ce == A.startBoardId - 7
                      ? document.querySelector(`#s${ce}`) && _e()
                      : A.startBoardId - 1 == m &&
                          xe.includes(A.startBoardId) &&
                          ce == A.startBoardId + 7
                        ? document.querySelector(`#s${ce}`) && _e()
                        : A.startBoardId + 1 == m &&
                          xe.includes(A.startBoardId) &&
                          ce == A.startBoardId + 9 &&
                          document.querySelector(`#s${ce}`) &&
                          _e();
            }
          })
        : ge.legalSquares.map((ce) => {
            const oe = document.querySelector(`#s${ce}`),
              _e = document.querySelector(`#s${ce}`);
            let Ae;
            _e != null &&
              _e.children[0] &&
              (Ae = _e == null ? void 0 : _e.children[0].getAttribute("src"));
            let xe;
            if (
              (Ae && (xe = Ae.match(/(\w{1}).\.png$/)),
              (oe == null ? void 0 : oe.children[0]) == null)
            ) {
              const j = document.createElement("img");
              j.setAttribute("src", "./img/Game-2/dot.png"),
                j.setAttribute("class", "dot"),
                (j.style.pointerEvents = "none"),
                (j.style.position = "absolute"),
                oe == null || oe.appendChild(j);
            } else
              oe != null &&
                oe.children[0] &&
                (oe == null ? void 0 : oe.children[0].getAttribute("class")) ==
                  "myImage" &&
                xe &&
                (_e == null ? void 0 : _e.children[0]) instanceof HTMLElement &&
                xe[1] != A.pieceId.slice(0, 1) &&
                oe &&
                (oe.style.backgroundColor = "rgba(255, 255, 51, 0.5)");
          });
    }, [A]),
    ie.useEffect(() => {
      const ge = sessionStorage.getItem("value");
      let he;
      ge && (he = JSON.parse(ge)),
        he &&
          he.map((ce) => {
            const oe = Number(Object.keys(ce)),
              _e = Object.values(ce)[0],
              Ae = document.querySelector(`#s${oe}`),
              xe =
                Ae && Ae.children[0] && Ae.children[0].tagName
                  ? Ae.children[0].tagName
                  : "";
            if (Ae && xe == "IMG") {
              const j = document.querySelector(`#s${oe} .myImage`),
                le = j == null ? void 0 : j.getAttribute("src"),
                C =
                  le && le.match(/(\w{2})\.png$/)
                    ? le.match(/(\w{2})\.png$/)
                    : "",
                q = C && C[1] ? C[1] : "";
              if (j && _e != q && _e != "") {
                Ae.removeChild(j);
                const pe = document.createElement("img");
                pe.setAttribute("src", `./img/Game-2/${_e}.png`),
                  pe.setAttribute("class", "myImage"),
                  Ae.appendChild(pe);
              } else j && _e == "" && Ae.removeChild(j);
            } else if (Ae && xe == "" && _e != "") {
              const j = document.createElement("img");
              j.setAttribute("src", `./img/Game-2/${_e}.png`),
                j.setAttribute("class", "myImage"),
                Ae.appendChild(j);
            } else if (Ae && xe.length >= 1 && _e == "") {
              const j = document.querySelector(`#s${oe} .myImage`);
              j && Ae.removeChild(j);
            }
          });
    }, [S]),
    ie.useEffect(() => {
      const ge = document.querySelectorAll(".myImage");
      for (let he of ge) {
        const ce = he.parentElement,
          oe = Number(ce == null ? void 0 : ce.id.slice(1));
        je((_e) => {
          const Ae = Ts.cloneDeep(_e);
          return Ae.occupatedSquares.push(oe), Ae;
        });
      }
    }, [l]),
    ie.useEffect(() => {
      const ge = [],
        he = [];
      for (let ce = 1; ce <= 64; ce++) {
        const oe = document.querySelector(`#s${ce}`);
        if (oe != null && oe.children[0]) {
          const _e = oe.children[0].getAttribute("src");
          let Ae;
          _e && (Ae = _e.match(/(\w{2})\.png$/));
          const xe = {};
          Ae && (xe[ce.toString()] = Ae[1]), Ae && ge.push(xe);
        }
      }
      ge.map((ce) => {
        Object.values(ce)[0].slice(0, 1) == "b" && he.push(ce);
      }),
        je((ce) => {
          const oe = Ts.cloneDeep(ce);
          return (oe.kingCollisions.pieces = he), oe;
        });
    }, []),
    ie.useEffect(() => {
      const ge = document.querySelectorAll(".chess-grid > div");
      if (!ge) return;
      function he(oe) {
        var Qe;
        if ((oe.preventDefault(), ee == "black")) return;
        const _e = document.querySelector(".chess-grid");
        function Ae(Ne) {
          Ne.preventDefault();
        }
        if ((_e.addEventListener("contextmenu", Ae), oe.button !== 0)) return;
        (r.current = !1), (a.current = oe.target);
        const xe = (window.innerWidth * 0.6) / 8,
          j = xe / 2;
        if (a.current == null) return;
        if (
          ((i.current = a.current.parentElement),
          a.current.className == "myImage")
        ) {
          const Ne = (Qe = i.current) == null ? void 0 : Qe.getAttribute("id");
          je((ke) => {
            const Oe = Ts.cloneDeep(ke);
            return Ne && (Oe.startBoardDivId = Ne), Oe;
          }),
            je((ke) => {
              const Oe = Ts.cloneDeep(ke);
              if (Ne) {
                const Le = Ne.slice(1);
                Oe.startBoardId = Number(Le);
              }
              return Oe;
            }),
            i.current && (i.current.innerHTML = "");
          const ze = a.current.getAttribute("src"),
            $e = document.createElement("img");
          ze && ($e.src = ze),
            ($e.style.position = "absolute"),
            ($e.style.width = xe + "px"),
            ($e.style.pointerEvents = "none"),
            ($e.style.left = oe.clientX - j + "px"),
            ($e.style.top = oe.clientY - j + "px"),
            ($e.className = "temp");
          const me = document.getElementsByClassName("chess-grid"),
            Ee = me[0].offsetTop,
            Se = me[0].offsetLeft,
            ht = window.innerWidth * 0.6,
            pt = function (ke) {
              ($e.style.left = ke.clientX - j + "px"),
                ($e.style.top = ke.clientY - j + "px");
            };
          window.addEventListener("mousemove", pt);
          const rt = document.querySelector(".chess-grid");
          rt == null || rt.appendChild($e);
          const Ke = function (ke) {
            var Oe;
            if (
              (ke.clientX < Se ||
                ke.clientX > Se + ht ||
                ke.clientY < Ee ||
                ke.clientY > Ee + ht) &&
              r.current == !1
            ) {
              je((yt) => {
                const In = Ts.cloneDeep(yt);
                return (In.startBoardDivId = ""), In;
              });
              const Le = document.querySelector(".temp"),
                Je = (Oe = i.current) == null ? void 0 : Oe.getAttribute("id"),
                _t = document.getElementById("" + Je);
              if (a.current == null) return;
              const It = a.current.getAttribute("src"),
                xt = document.createElement("img");
              if (
                ((xt.className = "myImage"),
                It && (xt.src = It),
                document.querySelector(`#${Je} > .myImage`))
              )
                return;
              _t == null || _t.appendChild(xt),
                Le && (rt == null || rt.removeChild(Le));
              for (let yt = 1; yt <= 64; yt++) {
                const In = document.querySelector(`#s${yt} > .dot`),
                  Sr = document.querySelector(`#s${yt}`);
                Sr == null || Sr.removeAttribute("style"),
                  In && (Sr == null || Sr.removeChild(In));
              }
            }
          };
          window.addEventListener("mousemove", Ke);
        }
        const le = document.querySelector(".temp"),
          C = le == null ? void 0 : le.getAttribute("src");
        let q;
        C && (q = C.match(/(\w{2})\.png$/));
        let pe = "";
        if ((q && (pe = q[1]), pe[0] != "b")) {
          if (
            (je((Ne) => {
              const ze = Ts.cloneDeep(Ne);
              return pe && (ze.pieceId = pe), ze;
            }),
            A.pieceId == "wk" && A.startBoardId == 61)
          ) {
            const Ne = document.querySelector("#s60"),
              ze = document.querySelector("#s62");
            ((Ne && Ne.children[0] == null) ||
              (Ne &&
                Ne.children[0] &&
                Ne.children[0].getAttribute("class") != "myImage")) &&
              z(!0),
              ((ze && ze.children[0] == null) ||
                (ze &&
                  ze.children[0] &&
                  ze.children[0].getAttribute("class") != "myImage")) &&
                K(!0);
          }
          return () => {
            _e.removeEventListener("contextmenu", Ae);
          };
        }
      }
      for (let oe of ge) oe.addEventListener("mousedown", he);
      function ce(oe) {
        const _e = document.querySelector(".temp");
        if (!_e || ee == "black") return;
        const Ae = document.querySelector(".chess-grid"),
          xe = oe.target,
          j = xe.getAttribute("id"),
          le = xe.parentElement,
          C = le == null ? void 0 : le.getAttribute("id");
        if (j) {
          const me = j.slice(1);
          A.targetBoardId = Number(me);
        } else if (C) {
          const me = C.slice(1);
          A.targetBoardId = Number(me);
        }
        const q = Im(A);
        function pe() {
          var rt;
          const me = Number(A.startBoardDivId.slice(1)),
            Ee = A.startBoardDivId.slice(1),
            Se = A.targetBoardId,
            ht = A.targetBoardId.toString();
          A.pieceId == "wk" && me != Se && G((Ke) => (Ke == !1, !0));
          const pt = A.pieceId;
          if (
            (N((Ke) => {
              const ke = sessionStorage.getItem("value"),
                Oe = ke && JSON.parse(ke) ? JSON.parse(ke) : "";
              let Le;
              return (
                Oe ? (Le = Oe) : (Le = Ke.map((Je) => ({ ...Je }))),
                (Le[me - 1][Ee] = ""),
                (Le[Se - 1][ht] = pt),
                Le
              );
            }),
            xe.tagName == "DIV")
          ) {
            const Ke = _e == null ? void 0 : _e.getAttribute("src"),
              ke = "" + j,
              Oe = document.getElementById(ke),
              Le = document.createElement("img");
            (Le.className = "myImage"),
              Ke && (Le.src = Ke),
              Oe == null || Oe.appendChild(Le),
              _e && (Ae == null || Ae.removeChild(_e));
          } else {
            const Ke = document.querySelector(".temp"),
              ke = Ke == null ? void 0 : Ke.getAttribute("src"),
              Oe = document.createElement("img");
            if (!ke) return;
            Oe.setAttribute("src", ke), (Oe.className = "myImage");
            const Le =
                (rt = xe.parentElement) == null
                  ? void 0
                  : rt.getAttribute("id"),
              Je = document.querySelector(`#${Le} > img`),
              _t = document.querySelector(`#${Le}`);
            Je && (_t == null || _t.removeChild(Je)),
              _t == null || _t.appendChild(Oe);
            const It = document.querySelector(".chess-grid");
            Ke && (It == null || It.removeChild(Ke));
          }
          fe("black");
        }
        async function Qe() {
          const me = oe.clientX,
            Ee = oe.clientY,
            Se = document.createElement("div");
          if (
            ((Se.style.position = "absolute"),
            (Se.style.top = Ee + "px"),
            (Se.style.left = me + "px"),
            (Se.style.cursor = "pointer"),
            (Se.style.height = "70px"),
            (Se.style.display = "flex"),
            (Se.style.backgroundColor = "#dce8e0"),
            Se.setAttribute("class", "przemianaTemp"),
            A.pieceId == "wp")
          ) {
            const ke = document.createElement("img");
            ke.setAttribute("src", "./img/Game-2/wr.png");
            const Oe = document.createElement("img");
            Oe.setAttribute("src", "./img/Game-2/wb.png");
            const Le = document.createElement("img");
            Le.setAttribute("src", "./img/Game-2/wn.png");
            const Je = document.createElement("img");
            Je.setAttribute("src", "./img/Game-2/wq.png"),
              Se.appendChild(ke),
              Se.appendChild(Oe),
              Se.appendChild(Le),
              Se.appendChild(Je);
          } else {
            const ke = document.createElement("img");
            ke.setAttribute("src", "./img/Game-2/br.png");
            const Oe = document.createElement("img");
            Oe.setAttribute("src", "./img/Game-2/bb.png");
            const Le = document.createElement("img");
            Le.setAttribute("src", "./img/Game-2/bn.png");
            const Je = document.createElement("img");
            Je.setAttribute("src", "./img/Game-2/bq.png"),
              Se.appendChild(ke),
              Se.appendChild(Oe),
              Se.appendChild(Le),
              Se.appendChild(Je);
          }
          const ht = document.querySelector(".chess-grid");
          ht == null || ht.appendChild(Se);
          const pt = document.querySelector(".temp");
          pt && (ht == null || ht.removeChild(pt));
          const rt = document.querySelectorAll(".przemianaTemp > img");
          function Ke(ke) {
            return new Promise((Oe) => {
              de.current = (Le) => {
                const Je = Le.target;
                Oe(Je);
              };
              for (let Le of ke) Le.addEventListener("click", de.current);
            });
          }
          return (
            Ke(rt).then((ke) => {
              var zr;
              let Oe;
              ke && (Oe = ke.getAttribute("src"));
              const Le = document.createElement("img");
              Le.setAttribute("class", "myImage"),
                Oe && Le.setAttribute("src", Oe);
              const Je = xe.tagName;
              let _t;
              if (Je == "IMG") {
                _t =
                  (zr = xe.parentElement) == null
                    ? void 0
                    : zr.getAttribute("id");
                const Mn = document.querySelector(`#${_t} > img`),
                  rr = document.querySelector(`#${_t}`);
                Mn && (rr == null || rr.removeChild(Mn));
              } else _t = xe.getAttribute("id");
              let It;
              _t && (It = document.querySelector(`#${_t}`)),
                It == null || It.children,
                It && It.appendChild(Le);
              const xt = document.querySelector(".przemianaTemp");
              xt && (ht == null || ht.removeChild(xt));
              const gt = Number(A.startBoardDivId.slice(1)),
                yt = A.startBoardDivId.slice(1),
                In = A.targetBoardId,
                Sr = A.targetBoardId.toString();
              let jr;
              Oe && (jr = Oe.match(/(\w{2})\.png$/));
              let Bo = "";
              jr && (Bo = jr[1]),
                N((Mn) => {
                  const rr = sessionStorage.getItem("value"),
                    $r = rr && JSON.parse(rr) ? JSON.parse(rr) : "";
                  let Hn;
                  return (
                    $r ? (Hn = $r) : (Hn = Mn.map((jo) => ({ ...jo }))),
                    (Hn[gt - 1][yt] = ""),
                    (Hn[In - 1][Sr] = Bo),
                    Hn
                  );
                });
            }),
            fe("black"),
            () => {
              for (let ke of rt) ke.removeEventListener("click", de.current);
            }
          );
        }
        function Ne() {
          const me = _e == null ? void 0 : _e.getAttribute("src"),
            Ee = "" + j,
            Se = document.getElementById(Ee),
            ht = document.createElement("img");
          (ht.className = "myImage"),
            me && (ht.src = me),
            Se == null || Se.appendChild(ht),
            _e && (Ae == null || Ae.removeChild(_e));
          const pt = `#s${m}`,
            rt = document.querySelector(`${pt} > img`),
            Ke = document.querySelector(pt);
          rt && (Ke == null || Ke.removeChild(rt));
          const ke = Number(A.startBoardDivId.slice(1)),
            Oe = A.startBoardDivId.slice(1),
            Le = A.targetBoardId,
            Je = A.targetBoardId.toString(),
            _t = A.pieceId;
          N((It) => {
            const xt = sessionStorage.getItem("value"),
              gt = xt && JSON.parse(xt) ? JSON.parse(xt) : "";
            let yt;
            return (
              gt ? (yt = gt) : (yt = It.map((In) => ({ ...In }))),
              (yt[ke - 1][Oe] = ""),
              (yt[Le - 1][Je] = _t),
              A.pieceId == "wp"
                ? (yt[Le + 7].bp = "")
                : A.pieceId == "bp" && (yt[Le - 9].bp = ""),
              yt
            );
          }),
            fe("black");
        }
        function ze() {
          const me = document.querySelector(".temp"),
            Ee = me == null ? void 0 : me.getAttribute("src"),
            Se = document.createElement("img");
          if (!Ee) return;
          Se.setAttribute("src", Ee), (Se.className = "myImage");
          const ht = "#s" + A.startBoardId,
            pt = document.querySelector(ht);
          pt == null || pt.appendChild(Se);
          const rt = document.querySelector(".chess-grid");
          me && (rt == null || rt.removeChild(me));
        }
        function $e(me) {
          if (me == "lewa") {
            const Ke = document.querySelector("#s57"),
              ke = document.querySelector("#s57 .myImage");
            ke && (Ke == null || Ke.removeChild(ke));
            const Oe = document.querySelector("#s60"),
              Le = document.createElement("img");
            Le.setAttribute("src", "./img/Game-2/wr.png"),
              Le.setAttribute("class", "myImage"),
              Oe == null || Oe.appendChild(Le);
            const Je = document.querySelector("#s61"),
              _t = document.querySelector("#s61 .myImage");
            _t && (Je == null || Je.removeChild(_t));
            const It = document.querySelector("#s59"),
              xt = document.createElement("img");
            xt.setAttribute("src", "./img/Game-2/wk.png"),
              xt.setAttribute("class", "myImage"),
              It == null || It.appendChild(xt);
            const gt = document.querySelector(".chess-grid"),
              yt = document.querySelector(".temp");
            yt && (gt == null || gt.removeChild(yt));
          } else if (me == "prawa") {
            const Ke = document.querySelector("#s64"),
              ke = document.querySelector("#s64 .myImage");
            ke && (Ke == null || Ke.removeChild(ke));
            const Oe = document.querySelector("#s62"),
              Le = document.createElement("img");
            Le.setAttribute("src", "./img/Game-2/wr.png"),
              Le.setAttribute("class", "myImage"),
              Oe == null || Oe.appendChild(Le);
            const Je = document.querySelector("#s61"),
              _t = document.querySelector("#s61 .myImage");
            _t && (Je == null || Je.removeChild(_t));
            const It = document.querySelector("#s63"),
              xt = document.createElement("img");
            xt.setAttribute("src", "./img/Game-2/wk.png"),
              xt.setAttribute("class", "myImage"),
              It == null || It.appendChild(xt);
            const gt = document.querySelector(".chess-grid"),
              yt = document.querySelector(".temp");
            yt && (gt == null || gt.removeChild(yt));
          }
          const Ee = Number(A.startBoardDivId.slice(1)),
            Se = A.startBoardDivId.slice(1),
            ht = A.targetBoardId,
            pt = A.targetBoardId.toString(),
            rt = A.pieceId;
          N((Ke) => {
            const ke = sessionStorage.getItem("value"),
              Oe = ke && JSON.parse(ke) ? JSON.parse(ke) : "";
            let Le;
            if (
              (Oe ? (Le = Oe) : (Le = Ke.map((Je) => ({ ...Je }))),
              (Le[Ee - 1][Se] = ""),
              (Le[ht - 1][pt] = rt),
              me == "lewa")
            )
              (Le[56][57] = ""), (Le[59][60] = "wr");
            else if (me == "prawa") (Le[63][64] = ""), (Le[61][62] = "wr");
            else throw new Error("roszada no bueno");
            return Le;
          }),
            fe("black");
        }
        if (q.isLegal)
          if (xe.tagName == "DIV")
            if (A.pieceId == "wp" || A.pieceId == "bp") {
              const me = Number(xe.id.slice(1)),
                Ee = [25, 26, 27, 28, 29, 30, 31, 32],
                Se = [33, 34, 35, 36, 37, 38, 39, 40],
                ht = [9, 10, 11, 12, 13, 14, 15, 16],
                pt = [49, 50, 51, 52, 53, 54, 55, 56],
                rt = document.querySelector(`#s${A.startBoardId + 8} > img`);
              let Ke;
              rt && (Ke = rt.getAttribute("class"));
              const ke = document.querySelector(
                `#s${A.startBoardId - 8} > img`,
              );
              let Oe;
              ke && (Oe = ke.getAttribute("class")),
                Math.abs(A.startBoardId - me) == 8
                  ? (A.pieceId == "wp" && ht.includes(A.startBoardId)) ||
                    (A.pieceId == "bp" && pt.includes(A.startBoardId))
                    ? (Qe(), v(0))
                    : (v(0), pe())
                  : Math.abs(A.startBoardId - me) == 16 &&
                      Oe &&
                      Oe == "myImage" &&
                      pt.includes(A.startBoardId)
                    ? ze()
                    : Math.abs(A.startBoardId - me) == 16 &&
                        Oe &&
                        Oe != "myImage" &&
                        pt.includes(A.startBoardId)
                      ? (v(me), pe())
                      : Math.abs(A.startBoardId - me) == 16 &&
                          Ke &&
                          Ke == "myImage" &&
                          ht.includes(A.startBoardId)
                        ? ze()
                        : Math.abs(A.startBoardId - me) == 16 &&
                            Ke &&
                            Ke != "myImage" &&
                            ht.includes(A.startBoardId)
                          ? (v(me), pe())
                          : (A.startBoardId - 1 == m &&
                                Ee.includes(A.startBoardId) &&
                                A.targetBoardId + 9 == A.startBoardId) ||
                              (A.startBoardId + 1 == m &&
                                Ee.includes(A.startBoardId) &&
                                A.targetBoardId + 7 == A.startBoardId) ||
                              (A.startBoardId - 1 == m &&
                                Se.includes(A.startBoardId) &&
                                A.targetBoardId - 7 == A.startBoardId) ||
                              (A.startBoardId + 1 == m &&
                                Se.includes(A.startBoardId) &&
                                A.targetBoardId - 9 == A.startBoardId)
                            ? Ne()
                            : ze();
            } else
              A.pieceId == "wk" &&
              A.targetBoardId == 59 &&
              M == !1 &&
              I == !1 &&
              J()
                ? (v(0), q.legalSquares.push(59), $e("lewa"))
                : A.pieceId == "wk" &&
                    A.targetBoardId == 63 &&
                    M == !1 &&
                    H == !1 &&
                    Q()
                  ? (v(0), q.legalSquares.push(59), $e("prawa"))
                  : A.startBoardId == A.targetBoardId
                    ? (v(0), ze())
                    : (v(0), pe());
          else {
            let me = A.pieceId;
            const Ee = me;
            let Se;
            const ht = xe.getAttribute("src");
            let pt;
            if (
              (ht && (pt = ht.match(/(\w{2})\.png$/)),
              pt && (Se = pt[1]),
              (Se = Se == null ? void 0 : Se.slice(0, 1)),
              (me = me.slice(0, 1)),
              me == Se)
            )
              ze();
            else if (me != Se && Ee != "wp" && Ee != "bp") v(0), pe();
            else if (Ee == "wp" || Ee == "bp") {
              if (!xe.parentElement) return;
              const rt = Number(xe.parentElement.id.slice(1)),
                Ke = [9, 10, 11, 12, 13, 14, 15, 16],
                ke = [49, 50, 51, 52, 53, 54, 55, 56];
              Math.abs(A.startBoardId - rt) == 8 ||
              Math.abs(A.startBoardId - rt) == 16 ||
              Math.abs(rt - A.startBoardId) == 16 ||
              Math.abs(rt - A.startBoardId) == 8
                ? ze()
                : (A.pieceId == "wp" && Ke.includes(A.startBoardId)) ||
                    (A.pieceId == "bp" && ke.includes(A.startBoardId))
                  ? (Qe(), v(0))
                  : (v(0), pe());
            }
          }
        else ze();
        for (let me = 1; me <= 64; me++) {
          const Ee = document.querySelector(`#s${me} > .dot`),
            Se = document.querySelector(`#s${me}`);
          Se == null || Se.removeAttribute("style"),
            Ee && (Se == null || Se.removeChild(Ee));
        }
        (r.current = !0),
          je((me) => {
            const Ee = Ts.cloneDeep(me);
            return (
              (Ee.pieceId = ""),
              (Ee.startBoardId = 0),
              (Ee.startBoardDivId = ""),
              (Ee.targetBoardId = 0),
              (Ee.occupatedSquares = []),
              (Ee.collision = !1),
              Ee
            );
          }),
          f(!l);
      }
      for (let oe of ge) oe.addEventListener("mouseup", ce);
      return () => {
        for (let oe of ge) oe.removeEventListener("mousedown", he);
        for (let oe of ge) oe.removeEventListener("mouseup", ce);
      };
    });
}
function qx() {
  ie.useEffect(() => {
    const r = document.querySelectorAll(".chess-grid div");
    function l(f) {
      f.preventDefault();
    }
    for (let f of r) f.addEventListener("dragstart", l);
    return () => {
      for (let f of r) f.removeEventListener("dragstart", l);
    };
  });
  const [a, i] = ie.useState(() => {
    let r = window.innerWidth * 0.6;
    return r >= 580 && (r = 580), { width: r + "px", height: r + "px" };
  });
  return (
    ie.useEffect(() => {
      function r() {
        let l = window.innerWidth * 0.6;
        l >= 580 && (l = 580);
        const f = { width: l + "px", height: l + "px" };
        i(f);
      }
      return (
        window.addEventListener("resize", r),
        () => {
          window.removeEventListener("resize", r);
        }
      );
    }),
    Hx(),
    b.jsxs("div", {
      className: "chess-grid mx-auto",
      style: a,
      children: [
        b.jsx("div", {
          id: "s1",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/br.png",
          }),
        }),
        b.jsx("div", {
          id: "s2",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bn.png",
          }),
        }),
        b.jsx("div", {
          id: "s3",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bb.png",
          }),
        }),
        b.jsx("div", {
          id: "s4",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bq.png",
          }),
        }),
        b.jsx("div", {
          id: "s5",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bk.png",
          }),
        }),
        b.jsx("div", {
          id: "s6",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bb.png",
          }),
        }),
        b.jsx("div", {
          id: "s7",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bn.png",
          }),
        }),
        b.jsx("div", {
          id: "s8",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/br.png",
          }),
        }),
        b.jsx("div", {
          id: "s9",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bp.png",
          }),
        }),
        b.jsx("div", {
          id: "s10",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bp.png",
          }),
        }),
        b.jsx("div", {
          id: "s11",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bp.png",
          }),
        }),
        b.jsx("div", {
          id: "s12",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bp.png",
          }),
        }),
        b.jsx("div", {
          id: "s13",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bp.png",
          }),
        }),
        b.jsx("div", {
          id: "s14",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bp.png",
          }),
        }),
        b.jsx("div", {
          id: "s15",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bp.png",
          }),
        }),
        b.jsx("div", {
          id: "s16",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/bp.png",
          }),
        }),
        b.jsx("div", { id: "s17", className: "relative" }),
        b.jsx("div", { id: "s18", className: "relative" }),
        b.jsx("div", { id: "s19", className: "relative" }),
        b.jsx("div", { id: "s20", className: "relative" }),
        b.jsx("div", { id: "s21", className: "relative" }),
        b.jsx("div", { id: "s22", className: "relative" }),
        b.jsx("div", { id: "s23", className: "relative" }),
        b.jsx("div", { id: "s24", className: "relative" }),
        b.jsx("div", { id: "s25", className: "relative" }),
        b.jsx("div", { id: "s26", className: "relative" }),
        b.jsx("div", { id: "s27", className: "relative" }),
        b.jsx("div", { id: "s28", className: "relative" }),
        b.jsx("div", { id: "s29", className: "relative" }),
        b.jsx("div", { id: "s30", className: "relative" }),
        b.jsx("div", { id: "s31", className: "relative" }),
        b.jsx("div", { id: "s32", className: "relative" }),
        b.jsx("div", { id: "s33", className: "relative" }),
        b.jsx("div", { id: "s34", className: "relative" }),
        b.jsx("div", { id: "s35", className: "relative" }),
        b.jsx("div", { id: "s36", className: "relative" }),
        b.jsx("div", { id: "s37", className: "relative" }),
        b.jsx("div", { id: "s38", className: "relative" }),
        b.jsx("div", { id: "s39", className: "relative" }),
        b.jsx("div", { id: "s40", className: "relative" }),
        b.jsx("div", { id: "s41", className: "relative" }),
        b.jsx("div", { id: "s42", className: "relative" }),
        b.jsx("div", { id: "s43", className: "relative" }),
        b.jsx("div", { id: "s44", className: "relative" }),
        b.jsx("div", { id: "s45", className: "relative" }),
        b.jsx("div", { id: "s46", className: "relative" }),
        b.jsx("div", { id: "s47", className: "relative" }),
        b.jsx("div", { id: "s48", className: "relative" }),
        b.jsx("div", {
          id: "s49",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wp.png",
          }),
        }),
        b.jsx("div", {
          id: "s50",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wp.png",
          }),
        }),
        b.jsx("div", {
          id: "s51",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wp.png",
          }),
        }),
        b.jsx("div", {
          id: "s52",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wp.png",
          }),
        }),
        b.jsx("div", {
          id: "s53",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wp.png",
          }),
        }),
        b.jsx("div", {
          id: "s54",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wp.png",
          }),
        }),
        b.jsx("div", {
          id: "s55",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wp.png",
          }),
        }),
        b.jsx("div", {
          id: "s56",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wp.png",
          }),
        }),
        b.jsx("div", {
          id: "s57",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wr.png",
          }),
        }),
        b.jsx("div", {
          id: "s58",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wn.png",
          }),
        }),
        b.jsx("div", {
          id: "s59",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wb.png",
          }),
        }),
        b.jsx("div", {
          id: "s60",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wq.png",
          }),
        }),
        b.jsx("div", {
          id: "s61",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wk.png",
          }),
        }),
        b.jsx("div", {
          id: "s62",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wb.png",
          }),
        }),
        b.jsx("div", {
          id: "s63",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wn.png",
          }),
        }),
        b.jsx("div", {
          id: "s64",
          className: "relative",
          children: b.jsx("img", {
            className: "myImage",
            src: "./img/Game-2/wr.png",
          }),
        }),
      ],
    })
  );
}
const Kx = new CS(),
  Vx = () =>
    b.jsx(c_, {
      children: b.jsx(X_, {
        children: b.jsxs(PS, {
          client: Kx,
          children: [
            b.jsx(nS, {}),
            b.jsx(Em, {
              children: b.jsx($h, { path: "/form", element: b.jsx(bS, {}) }),
            }),
            b.jsx(Em, {
              children: b.jsx($h, { path: "/game-1", element: b.jsx(DS, {}) }),
            }),
            b.jsx(Em, {
              children: b.jsx($h, { path: "/game-2", element: b.jsx(qx, {}) }),
            }),
          ],
        }),
      }),
    }),
  Ov = document.getElementById("root");
if (Ov == null) throw new Error("lol nie działa, container oddał null");
const Qx = u_.createRoot(Ov);
Qx.render(b.jsx(Vx, {}));
