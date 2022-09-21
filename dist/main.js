function i(a) {
  return a != null && typeof a == "object" && a["@@functional/placeholder"] === !0;
}
function o(a) {
  return function r(t) {
    return arguments.length === 0 || i(t) ? r : a.apply(this, arguments);
  };
}
function m(a) {
  return function r(t, u) {
    switch (arguments.length) {
      case 0:
        return r;
      case 1:
        return i(t) ? r : o(function(n) {
          return a(t, n);
        });
      default:
        return i(t) && i(u) ? r : i(t) ? o(function(n) {
          return a(n, u);
        }) : i(u) ? o(function(n) {
          return a(t, n);
        }) : a(t, u);
    }
  };
}
function g(a, r) {
  switch (a) {
    case 0:
      return function() {
        return r.apply(this, arguments);
      };
    case 1:
      return function(t) {
        return r.apply(this, arguments);
      };
    case 2:
      return function(t, u) {
        return r.apply(this, arguments);
      };
    case 3:
      return function(t, u, n) {
        return r.apply(this, arguments);
      };
    case 4:
      return function(t, u, n, c) {
        return r.apply(this, arguments);
      };
    case 5:
      return function(t, u, n, c, e) {
        return r.apply(this, arguments);
      };
    case 6:
      return function(t, u, n, c, e, s) {
        return r.apply(this, arguments);
      };
    case 7:
      return function(t, u, n, c, e, s, l) {
        return r.apply(this, arguments);
      };
    case 8:
      return function(t, u, n, c, e, s, l, p) {
        return r.apply(this, arguments);
      };
    case 9:
      return function(t, u, n, c, e, s, l, p, h) {
        return r.apply(this, arguments);
      };
    case 10:
      return function(t, u, n, c, e, s, l, p, h, x) {
        return r.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function y(a, r, t) {
  return function() {
    for (var u = [], n = 0, c = a, e = 0; e < r.length || n < arguments.length; ) {
      var s;
      e < r.length && (!i(r[e]) || n >= arguments.length) ? s = r[e] : (s = arguments[n], n += 1), u[e] = s, i(s) || (c -= 1), e += 1;
    }
    return c <= 0 ? t.apply(this, u) : g(c, y(a, u, t));
  };
}
var f = /* @__PURE__ */ m(function(r, t) {
  return r === 1 ? o(t) : g(r, y(r, [], t));
});
const d = f;
var _ = /* @__PURE__ */ o(function(r) {
  return d(r.length, r);
});
const v = _, w = v((a, r) => a + r), N = () => {
  console.log(w(10)(10));
};
N();
export {
  N as main
};
//# sourceMappingURL=main.js.map
