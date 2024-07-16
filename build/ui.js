(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return d(l3, f3, t3, o3, null);
  }
  function d(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function _() {
    return { current: null };
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function g(n2, l3) {
    if (null == l3)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l3, u3, i3, o3, r3, e3, c3;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l3 = t.length, i3 = void 0, o3 = void 0, e3 = (r3 = (u3 = n2).__v).__e, (c3 = u3.__P) && (i3 = [], (o3 = h({}, r3)).__v = r3.__v + 1, L(c3, r3, o3, u3.__n, void 0 !== c3.ownerSVGElement, null != r3.__h ? [e3] : null, i3, null == e3 ? g(r3) : e3, r3.__h), M(i3, r3), r3.__e != e3 && m(r3)), t.length > l3 && t.sort(f));
    x.__r = 0;
  }
  function P(n2, l3, u3, i3, t3, o3, r3, f3, e3, a3) {
    var h3, p3, y3, _3, b3, m3, w4, x4 = i3 && i3.__k || s, P3 = x4.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (_3 = u3.__k[h3] = null == (_3 = l3[h3]) || "boolean" == typeof _3 || "function" == typeof _3 ? null : "string" == typeof _3 || "number" == typeof _3 || "bigint" == typeof _3 ? d(null, _3, null, null, _3) : v(_3) ? d(k, { children: _3 }, null, null, null) : _3.__b > 0 ? d(_3.type, _3.props, _3.key, _3.ref ? _3.ref : null, _3.__v) : _3)) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, null === (y3 = x4[h3]) || y3 && _3.key == y3.key && _3.type === y3.type)
          x4[h3] = void 0;
        else
          for (p3 = 0; p3 < P3; p3++) {
            if ((y3 = x4[p3]) && _3.key == y3.key && _3.type === y3.type) {
              x4[p3] = void 0;
              break;
            }
            y3 = null;
          }
        L(n2, _3, y3 = y3 || c, t3, o3, r3, f3, e3, a3), b3 = _3.__e, (p3 = _3.ref) && y3.ref != p3 && (w4 || (w4 = []), y3.ref && w4.push(y3.ref, null, _3), w4.push(p3, _3.__c || b3, _3)), null != b3 ? (null == m3 && (m3 = b3), "function" == typeof _3.type && _3.__k === y3.__k ? _3.__d = e3 = C(_3, e3, n2) : e3 = $(n2, _3, y3, x4, b3, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y3.__e == e3 && e3.parentNode != n2 && (e3 = g(y3));
      }
    for (u3.__e = m3, h3 = P3; h3--; )
      null != x4[h3] && ("function" == typeof u3.type && null != x4[h3].__e && x4[h3].__e == u3.__d && (u3.__d = A(i3).nextSibling), q(x4[h3], x4[h3]));
    if (w4)
      for (h3 = 0; h3 < w4.length; h3++)
        O(w4[h3], w4[++h3], w4[++h3]);
  }
  function C(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? C(i3, l3, u3) : $(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function S(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (v(n2) ? n2.some(function(n3) {
      S(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function $(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o3 || null == t3.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function A(n2) {
    var l3, u3, i3;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
        if ((u3 = n2.__k[l3]) && (i3 = A(u3)))
          return i3;
    }
    return null;
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || T(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || T(n2, o3, l3[o3], u3[o3], i3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? z : j, o3) : n2.removeEventListener(l3, o3 ? z : j, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var s3, a3, p3, y3, d3, _3, g4, m3, w4, x4, C3, S2, $3, A4, H3, I3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if ("function" == typeof I3) {
          if (m3 = u3.props, w4 = (s3 = I3.contextType) && t3[s3.__c], x4 = s3 ? w4 ? w4.props.value : s3.__ : t3, i3.__c ? g4 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in I3 && I3.prototype.render ? u3.__c = a3 = new I3(m3, x4) : (u3.__c = a3 = new b(m3, x4), a3.constructor = I3, a3.render = B), w4 && w4.sub(a3), a3.props = m3, a3.state || (a3.state = {}), a3.context = x4, a3.__n = t3, p3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != I3.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, I3.getDerivedStateFromProps(m3, a3.__s))), y3 = a3.props, d3 = a3.state, a3.__v = u3, p3)
            null == I3.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
          else {
            if (null == I3.getDerivedStateFromProps && m3 !== y3 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(m3, x4), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(m3, a3.__s, x4) || u3.__v === i3.__v) {
              for (u3.__v !== i3.__v && (a3.props = m3, a3.state = a3.__s, a3.__d = false), a3.__e = false, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), C3 = 0; C3 < a3._sb.length; C3++)
                a3.__h.push(a3._sb[C3]);
              a3._sb = [], a3.__h.length && f3.push(a3);
              break n;
            }
            null != a3.componentWillUpdate && a3.componentWillUpdate(m3, a3.__s, x4), null != a3.componentDidUpdate && a3.__h.push(function() {
              a3.componentDidUpdate(y3, d3, _3);
            });
          }
          if (a3.context = x4, a3.props = m3, a3.__P = n2, S2 = l.__r, $3 = 0, "prototype" in I3 && I3.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, S2 && S2(u3), s3 = a3.render(a3.props, a3.state, a3.context), A4 = 0; A4 < a3._sb.length; A4++)
              a3.__h.push(a3._sb[A4]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, S2 && S2(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
            } while (a3.__d && ++$3 < 25);
          a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), p3 || null == a3.getSnapshotBeforeUpdate || (_3 = a3.getSnapshotBeforeUpdate(y3, d3)), P(n2, v(H3 = null != s3 && s3.type === k && null == s3.key ? s3.props.children : s3) ? H3 : [H3], u3, i3, t3, o3, r3, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), g4 && (a3.__E = a3.__ = null), a3.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = N(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function M(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, i3, t3, o3, r3, f3, e3) {
    var s3, a3, h3, y3 = i3.props, d3 = u3.props, _3 = u3.type, k4 = 0;
    if ("svg" === _3 && (o3 = true), null != r3) {
      for (; k4 < r3.length; k4++)
        if ((s3 = r3[k4]) && "setAttribute" in s3 == !!_3 && (_3 ? s3.localName === _3 : 3 === s3.nodeType)) {
          l3 = s3, r3[k4] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === _3)
        return document.createTextNode(d3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", _3) : document.createElement(_3, d3.is && d3), r3 = null, e3 = false;
    }
    if (null === _3)
      y3 === d3 || e3 && l3.data === d3 || (l3.data = d3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || c).dangerouslySetInnerHTML, h3 = d3.dangerouslySetInnerHTML, !e3) {
        if (null != r3)
          for (y3 = {}, k4 = 0; k4 < l3.attributes.length; k4++)
            y3[l3.attributes[k4].name] = l3.attributes[k4].value;
        (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
      }
      if (H(l3, d3, y3, o3, e3), h3)
        u3.__k = [];
      else if (P(l3, v(k4 = u3.props.children) ? k4 : [k4], u3, i3, t3, o3 && "foreignObject" !== _3, r3, f3, r3 ? r3[0] : i3.__k && g(i3, 0), e3), null != r3)
        for (k4 = r3.length; k4--; )
          null != r3[k4] && p(r3[k4]);
      e3 || ("value" in d3 && void 0 !== (k4 = d3.value) && (k4 !== l3.value || "progress" === _3 && !k4 || "option" === _3 && k4 !== y3.value) && T(l3, "value", k4, y3.value, false), "checked" in d3 && void 0 !== (k4 = d3.checked) && k4 !== l3.checked && T(l3, "checked", k4, y3.checked, false));
    }
    return l3;
  }
  function O(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function q(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || O(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && q(t3[o3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function D(u3, i3, t3) {
    var o3, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], L(i3, u3 = (!o3 && t3 || i3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), M(f3, u3);
  }
  function E(n2, l3) {
    D(n2, l3, E);
  }
  function F(l3, u3, i3) {
    var t3, o3, r3, f3, e3 = h({}, l3.props);
    for (r3 in l3.type && l3.type.defaultProps && (f3 = l3.type.defaultProps), u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : e3[r3] = void 0 === u3[r3] && void 0 !== f3 ? f3[r3] : u3[r3];
    return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), d(l3.type, e3, t3 || l3.key, o3 || l3.ref, null);
  }
  function G(n2, l3) {
    var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(function(n5) {
          n5.__e = true, w(n5);
        });
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, i, t, o, r, f, e, c, s, a, v;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      v = Array.isArray;
      n = s.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, o3, r3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, b.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
      }, b.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
      }, b.prototype.render = k, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, x.__r = 0, e = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function p2(u3, i3) {
    var o3 = d2(t2++, 3);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
  }
  function y2(u3, i3) {
    var o3 = d2(t2++, 4);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__h.push(o3));
  }
  function _2(n2) {
    return o2 = 5, F2(function() {
      return { current: n2 };
    }, []);
  }
  function A2(n2, t3, r3) {
    o2 = 6, y2(function() {
      return "function" == typeof n2 ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r3 ? r3 : r3.concat(n2));
  }
  function F2(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F2(function() {
      return n2;
    }, t3);
  }
  function q2(n2) {
    var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function x2(t3, r3) {
    l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
  }
  function V() {
    var n2 = d2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
        u3 = u3.__;
      var i3 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E2(n2, t3) {
    return n2 === t3 && (0 !== n2 || 1 / n2 == 1 / t3) || n2 != n2 && t3 != t3;
  }
  function w3(n2) {
    this.props = n2;
  }
  function x3(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : C2(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, y(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
  }
  function k3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = N2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function L2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L2(n3, t3, e3);
    })), n2;
  }
  function U(n2, t3, e3) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return U(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function D2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F3(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function M2(n2) {
    var e3, r3, u3;
    function o3(o4) {
      if (e3 || (e3 = n2()).then(function(n3) {
        r3 = n3.default || n3;
      }, function(n3) {
        u3 = n3;
      }), u3)
        throw u3;
      if (!r3)
        throw e3;
      return y(r3, o4);
    }
    return o3.displayName = "Lazy", o3.__f = true, o3;
  }
  function V2() {
    this.u = null, this.o = null;
  }
  function P2(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function j3(n2) {
    var e3 = this, r3 = n2.i;
    e3.componentWillUnmount = function() {
      D(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n2.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), D(y(P2, { context: e3.context }, n2.__v), e3.l)) : e3.l && e3.componentWillUnmount();
  }
  function z3(n2, e3) {
    var r3 = y(j3, { __v: n2, i: e3 });
    return r3.containerInfo = e3, r3;
  }
  function G2(n2, t3, e3) {
    return null == t3.__k && (t3.textContent = ""), D(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function J(n2, t3, e3) {
    return E(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  function fn(n2) {
    return y.bind(null, n2);
  }
  function an(n2) {
    return !!n2 && n2.$$typeof === B3;
  }
  function sn(n2) {
    return an(n2) ? F.apply(null, arguments) : n2;
  }
  function hn(n2) {
    return !!n2.__k && (D(null, n2), true);
  }
  function vn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  function yn(n2) {
    n2();
  }
  function _n(n2) {
    return n2;
  }
  function bn() {
    return [false, yn];
  }
  function gn(n2, t3) {
    var e3 = t3(), r3 = h2({ h: { __: e3, v: t3 } }), u3 = r3[0].h, o3 = r3[1];
    return y2(function() {
      u3.__ = e3, u3.v = t3, E2(u3.__, t3()) || o3({ h: u3 });
    }, [n2, e3, t3]), p2(function() {
      return E2(u3.__, u3.v()) || o3({ h: u3 }), n2(function() {
        E2(u3.__, u3.v()) || o3({ h: u3 });
      });
    }, [n2]), e3;
  }
  var R, N2, A3, O2, T3, I2, W, B3, H2, Z, Y, $2, q3, K, tn, en, rn, un, on, ln, dn, pn, mn, Sn, Cn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (w3.prototype = new b()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
        return C2(this.props, n2) || C2(this.state, t3);
      };
      R = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
      };
      N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      A3 = function(n2, t3) {
        return null == n2 ? null : S(S(n2).map(t3));
      };
      O2 = { map: A3, forEach: A3, count: function(n2) {
        return n2 ? S(n2).length : 0;
      }, only: function(n2) {
        var t3 = S(n2);
        if (1 !== t3.length)
          throw "Children.only";
        return t3[0];
      }, toArray: S };
      T3 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o3 = t3; o3 = o3.__; )
            if ((u3 = o3.__c) && u3.__c)
              return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        T3(n2, t3, e3, r3);
      };
      I2 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I2 && I2(n2);
      }, (D2.prototype = new b()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.t && (r3.t = []), r3.t.push(e3);
        var u3 = F3(r3.__v), o3 = false, i3 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        }, c3 = true === t3.__h;
        r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, D2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, D2.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
            this.__v.__k[0] = L2(this.__b, r3, o3.__O = o3.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && y(k, null, n2.fallback);
        return i3 && (i3.__h = null), [y(k, null, e3.__a ? null : n2.children), i3];
      };
      W = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (V2.prototype = new b()).__a = function(n2) {
        var t3 = this, e3 = F3(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, V2.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = S(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          W(n2, e3, t3);
        });
      };
      B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      Y = /[A-Z0-9]/g;
      $2 = "undefined" != typeof document;
      q3 = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      K = l.event;
      l.event = function(n2) {
        return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
      };
      en = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      rn = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {};
          for (var o3 in t3) {
            var i3 = t3[o3];
            if (!("value" === o3 && "defaultValue" in t3 && null == i3 || $2 && "children" === o3 && "noscript" === e3 || "class" === o3 || "className" === o3)) {
              var l3 = o3.toLowerCase();
              "defaultValue" === o3 && "value" in t3 && null == t3.value ? o3 = "value" : "download" === o3 && true === i3 ? i3 = "" : "ondoubleclick" === l3 ? o3 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || q3(t3.type) ? "onfocus" === l3 ? o3 = "onfocusin" : "onblur" === l3 ? o3 = "onfocusout" : Z.test(o3) ? o3 = l3 : -1 === e3.indexOf("-") && H2.test(o3) ? o3 = o3.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o3 = "oninput", "oninput" === l3 && u3[o3 = l3] && (o3 = "oninputCapture"), u3[o3] = i3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = S(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = S(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = B3, rn && rn(n2);
      };
      un = l.__r;
      l.__r = function(n2) {
        un && un(n2), tn = n2.__c;
      };
      on = l.diffed;
      l.diffed = function(n2) {
        on && on(n2);
        var t3 = n2.props, e3 = n2.__e;
        null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), tn = null;
      };
      ln = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
        return tn.__n[n2.__c].props.value;
      } } } };
      dn = function(n2, t3) {
        return n2(t3);
      };
      pn = function(n2, t3) {
        return n2(t3);
      };
      mn = k;
      Sn = y2;
      Cn = { useState: h2, useId: V, useReducer: s2, useEffect: p2, useLayoutEffect: y2, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _2, useImperativeHandle: A2, useMemo: F2, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: O2, render: G2, hydrate: J, unmountComponentAtNode: hn, createPortal: z3, createElement: y, createContext: G, createFactory: fn, cloneElement: sn, createRef: _, Fragment: k, isValidElement: an, findDOMNode: vn, Component: b, PureComponent: w3, memo: x3, forwardRef: k3, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D2, SuspenseList: V2, lazy: M2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js
  function createComponent(fn2) {
    return k3(fn2);
  }
  var init_create_component = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js"() {
      init_compat_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js
  function noop() {
  }
  var init_no_op = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js"() {
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/b4c6f5d3-7a13-4eb3-be0f-8fac9882b5ca/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/b4c6f5d3-7a13-4eb3-be0f-8fac9882b5ca/loading-indicator.module.js"() {
      if (document.getElementById("90787820a8") === null) {
        const element = document.createElement("style");
        element.id = "90787820a8";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_module_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  var LoadingIndicator;
  var init_loading_indicator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_create_component();
      init_loading_indicator_module();
      LoadingIndicator = createComponent(function(_a, ref) {
        var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
        return y(
          "div",
          __spreadProps(__spreadValues({}, rest), { ref, class: loading_indicator_module_default.loadingIndicator }),
          y(
            "svg",
            { class: loading_indicator_module_default.svg, style: typeof color === "undefined" ? void 0 : {
              fill: `var(--figma-color-icon-${color})`
            } },
            y("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })
          )
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/ab35a632-11fc-4ea8-8edc-9e51cdcdceaf/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/ab35a632-11fc-4ea8-8edc-9e51cdcdceaf/button.module.js"() {
      if (document.getElementById("06655c60b0") === null) {
        const element = document.createElement("style");
        element.id = "06655c60b0";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDZDQUE2QztFQUM3QyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnV0dG9uIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTYpO1xufVxuXG4uZGlzYWJsZWQgYnV0dG9uIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGVmYXVsdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uYnJhbmQpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kZWZhdWx0Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGFuZ2VyKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xufVxuLnNlY29uZGFyeS5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZhdWx0IC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubG9hZGluZyAuY2hpbGRyZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_module_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  var Button;
  var init_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_create_component();
      init_no_op();
      init_loading_indicator();
      init_button_module();
      Button = createComponent(function(_a, ref) {
        var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick = noop, onKeyDown = noop, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "onKeyDown", "propagateEscapeKeyDown", "secondary"]);
        const handleKeyDown = T2(function(event) {
          onKeyDown(event);
          if (event.key === "Escape") {
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            event.currentTarget.blur();
          }
        }, [onKeyDown, propagateEscapeKeyDown]);
        return y(
          "div",
          { class: createClassName([
            button_module_default.button,
            secondary === true ? button_module_default.secondary : button_module_default.default,
            danger === true ? button_module_default.danger : null,
            fullWidth === true ? button_module_default.fullWidth : null,
            disabled === true ? button_module_default.disabled : null,
            loading === true ? button_module_default.loading : null
          ]) },
          loading === true ? y(
            "div",
            { class: button_module_default.loadingIndicator },
            y(LoadingIndicator, null)
          ) : null,
          y(
            "button",
            __spreadProps(__spreadValues({}, rest), { ref, disabled: disabled === true, onClick: loading === true ? void 0 : onClick, onKeyDown: handleKeyDown, tabIndex: 0 }),
            y("div", { class: button_module_default.children }, children)
          )
        );
      });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/c809f894-3102-499f-8997-cf207d1aee52/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/c809f894-3102-499f-8997-cf207d1aee52/text.module.js"() {
      if (document.getElementById("f50e3376eb") === null) {
        const element = document.createElement("style");
        element.id = "f50e3376eb";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  var Text;
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_create_component();
      init_text_module();
      Text = createComponent(function(_a) {
        var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
        return y("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
          text_module_default.text,
          text_module_default[align],
          numeric === true ? text_module_default.numeric : null
        ]) }), children);
      });
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on2(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function invokeEventHandler(name, args) {
    let invoked = false;
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
        invoked = true;
      }
    }
    if (invoked === false) {
      throw new Error(`No event handler with name \`${name}\``);
    }
  }
  var eventHandlers, currentId, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function(args) {
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = args;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const args = event.data.pluginMessage;
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = event.data.pluginMessage;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/mixed-values.js
  var MIXED_STRING;
  var init_mixed_values = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/mixed-values.js"() {
      MIXED_STRING = "999999999999999";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_mixed_values();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js
  function isKeyCodeCharacterGenerating(keyCode) {
    return keyCode === 32 || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 105 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222;
  }
  var init_is_keycode_character_generating = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js"() {
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/91a125df-7bc2-4a2b-ab78-6a8134b90d6a/textbox-multiline.module.js
  var textbox_multiline_module_default;
  var init_textbox_multiline_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/91a125df-7bc2-4a2b-ab78-6a8134b90d6a/textbox-multiline.module.js"() {
      if (document.getElementById("a46cdf8e03") === null) {
        const element = document.createElement("style");
        element.id = "a46cdf8e03";
        element.textContent = `._textboxMultiline_1b7l0_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._grow_1b7l0_6 {
  display: grid;
}

._ghost_1b7l0_10,
._grow_1b7l0_6 ._textarea_1b7l0_11 {
  grid-area: 1 / 1 / 2 / 2;
}

._ghost_1b7l0_10 {
  padding: 6px var(--space-extra-small);
  white-space: pre-wrap;
}

._textarea_1b7l0_11 {
  display: block;
  width: 100%;
  padding: 6px var(--space-extra-small);
  border-radius: var(--border-radius-2);
  background-color: transparent;
  color: var(--figma-color-text);
  resize: none;
}
._textarea_1b7l0_11::placeholder {
  color: var(--figma-color-text-tertiary);
}
._disabled_1b7l0_32 ._textarea_1b7l0_11 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}
._grow_1b7l0_6 ._textarea_1b7l0_11 {
  overflow: hidden;
}

._border_1b7l0_40 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_1b7l0_50 ._border_1b7l0_40,
._textboxMultiline_1b7l0_1:not(._disabled_1b7l0_32):hover ._border_1b7l0_40 {
  border-color: var(--figma-color-border);
}
._textboxMultiline_1b7l0_1:not(._disabled_1b7l0_32) ._textarea_1b7l0_11:focus ~ ._border_1b7l0_40 {
  top: -1px;
  bottom: -1px;
  border: 2px solid var(--figma-color-border-brand-strong);
}

._underline_1b7l0_60 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textboxMultiline_1b7l0_1:not(._disabled_1b7l0_32) ._textarea_1b7l0_11:focus ~ ._underline_1b7l0_60,
._textboxMultiline_1b7l0_1:not(._disabled_1b7l0_32):hover ._underline_1b7l0_60 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbXVsdGlsaW5lL3RleHRib3gtbXVsdGlsaW5lLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHFDQUFxQztFQUNyQyxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dGJveC90ZXh0Ym94LW11bHRpbGluZS90ZXh0Ym94LW11bHRpbGluZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3hNdWx0aWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG59XG5cbi5ncm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmdob3N0LFxuLmdyb3cgLnRleHRhcmVhIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xufVxuXG4uZ2hvc3Qge1xuICBwYWRkaW5nOiA2cHggdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi50ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNnB4IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgcmVzaXplOiBub25lO1xufVxuLnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcbn1cbi5kaXNhYmxlZCAudGV4dGFyZWEge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZ3JvdyAudGV4dGFyZWEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5oYXNCb3JkZXIgLmJvcmRlcixcbi50ZXh0Ym94TXVsdGlsaW5lOm5vdCguZGlzYWJsZWQpOmhvdmVyIC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG4udGV4dGJveE11bHRpbGluZTpub3QoLmRpc2FibGVkKSAudGV4dGFyZWE6Zm9jdXMgfiAuYm9yZGVyIHtcbiAgdG9wOiAtMXB4O1xuICBib3R0b206IC0xcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xufVxuXG4udW5kZXJsaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG4udGV4dGJveE11bHRpbGluZTpub3QoLmRpc2FibGVkKSAudGV4dGFyZWE6Zm9jdXMgfiAudW5kZXJsaW5lLFxuLnRleHRib3hNdWx0aWxpbmU6bm90KC5kaXNhYmxlZCk6aG92ZXIgLnVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */`;
        document.head.append(element);
      }
      textbox_multiline_module_default = { "textboxMultiline": "_textboxMultiline_1b7l0_1", "grow": "_grow_1b7l0_6", "ghost": "_ghost_1b7l0_10", "textarea": "_textarea_1b7l0_11", "disabled": "_disabled_1b7l0_32", "border": "_border_1b7l0_40", "hasBorder": "_hasBorder_1b7l0_50", "underline": "_underline_1b7l0_60" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-multiline/textbox-multiline.js
  var EMPTY_STRING, TextboxMultiline;
  var init_textbox_multiline = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-multiline/textbox-multiline.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_create_component();
      init_get_current_from_ref();
      init_no_op();
      init_is_keycode_character_generating();
      init_textbox_multiline_module();
      EMPTY_STRING = "";
      TextboxMultiline = createComponent(function(_a, ref) {
        var _b = _a, { grow = false, disabled = false, onBlur = noop, onFocus = noop, onInput = noop, onKeyDown = noop, onValueInput = noop, onMouseDown = noop, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, rows = 3, spellCheck = false, validateOnBlur, variant, value } = _b, rest = __objRest(_b, ["grow", "disabled", "onBlur", "onFocus", "onInput", "onKeyDown", "onValueInput", "onMouseDown", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "rows", "spellCheck", "validateOnBlur", "variant", "value"]);
        const textAreaElementRef = _2(null);
        const [originalValue, setOriginalValue] = h2(EMPTY_STRING);
        const setTextAreaElementValue = T2(function(value2) {
          const textAreaElement = getCurrentFromRef(textAreaElementRef);
          textAreaElement.value = value2;
          const inputEvent = new window.Event("input", {
            bubbles: true,
            cancelable: true
          });
          textAreaElement.dispatchEvent(inputEvent);
        }, []);
        const handleBlur = T2(function(event) {
          onBlur(event);
          if (typeof validateOnBlur !== "undefined") {
            const result = validateOnBlur(value);
            if (typeof result === "string") {
              setTextAreaElementValue(result);
              setOriginalValue(EMPTY_STRING);
              return;
            }
            if (result === false) {
              if (value !== originalValue) {
                setTextAreaElementValue(originalValue);
              }
              setOriginalValue(EMPTY_STRING);
              return;
            }
          }
          setOriginalValue(EMPTY_STRING);
        }, [onBlur, originalValue, setTextAreaElementValue, validateOnBlur, value]);
        const handleFocus = T2(function(event) {
          onFocus(event);
          setOriginalValue(value);
          event.currentTarget.select();
        }, [onFocus, value]);
        const handleInput = T2(function(event) {
          onInput(event);
          const newValue = event.currentTarget.value;
          onValueInput(newValue);
        }, [onInput, onValueInput]);
        const handleKeyDown = T2(function(event) {
          onKeyDown(event);
          if (event.key === "Escape") {
            if (revertOnEscapeKeyDown === true) {
              setTextAreaElementValue(originalValue);
              setOriginalValue(EMPTY_STRING);
            }
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            event.currentTarget.blur();
            return;
          }
          if (value === MIXED_STRING && isKeyCodeCharacterGenerating(event.keyCode) === false) {
            event.preventDefault();
            event.currentTarget.select();
          }
        }, [
          onKeyDown,
          originalValue,
          propagateEscapeKeyDown,
          revertOnEscapeKeyDown,
          setTextAreaElementValue,
          value
        ]);
        const handleMouseDown = T2(function(event) {
          onMouseDown(event);
          if (value === MIXED_STRING) {
            event.preventDefault();
            event.currentTarget.select();
          }
        }, [onMouseDown, value]);
        const refCallback = T2(function(textAreaElement) {
          textAreaElementRef.current = textAreaElement;
          if (ref === null) {
            return;
          }
          if (typeof ref === "function") {
            ref(textAreaElement);
            return;
          }
          ref.current = textAreaElement;
        }, [ref]);
        return y(
          "div",
          { class: createClassName([
            textbox_multiline_module_default.textboxMultiline,
            typeof variant === "undefined" ? null : variant === "border" ? textbox_multiline_module_default.hasBorder : null,
            grow === true ? textbox_multiline_module_default.grow : null,
            disabled === true ? textbox_multiline_module_default.disabled : null
          ]) },
          grow === true ? y("div", { class: textbox_multiline_module_default.ghost }, value === MIXED_STRING ? "Mixed" : `${value} `) : null,
          y("textarea", __spreadProps(__spreadValues({}, rest), { ref: refCallback, class: textbox_multiline_module_default.textarea, disabled: disabled === true, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseDown: handleMouseDown, placeholder, rows, spellcheck: spellCheck, tabIndex: 0, value: value === MIXED_STRING ? "Mixed" : value })),
          y("div", { class: textbox_multiline_module_default.border }),
          variant === "underline" ? y("div", { class: textbox_multiline_module_default.underline }) : null
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/0d11dee9-cee3-42cb-b8f8-a7ceb516a795/muted.module.js
  var muted_module_default;
  var init_muted_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/0d11dee9-cee3-42cb-b8f8-a7ceb516a795/muted.module.js"() {
      if (document.getElementById("a192f79a60") === null) {
        const element = document.createElement("style");
        element.id = "a192f79a60";
        element.textContent = `._muted_139yx_1 {
  color: var(--figma-color-text-secondary);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaW5saW5lLXRleHQvbXV0ZWQvbXV0ZWQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUF3QztBQUMxQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2lubGluZS10ZXh0L211dGVkL211dGVkLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXV0ZWQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      muted_module_default = { "muted": "_muted_139yx_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js
  var Muted;
  var init_muted = __esm({
    "node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js"() {
      init_preact_module();
      init_create_component();
      init_muted_module();
      Muted = createComponent(function(_a, ref) {
        var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
        return y("span", __spreadProps(__spreadValues({}, rest), { ref, class: muted_module_default.muted }), children);
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/574d391b-a89e-46b2-b12d-c642d794dab4/columns.module.js
  var columns_module_default;
  var init_columns_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/574d391b-a89e-46b2-b12d-c642d794dab4/columns.module.js"() {
      if (document.getElementById("7e493414c6") === null) {
        const element = document.createElement("style");
        element.id = "7e493414c6";
        element.textContent = `._columns_ybv3x_1 {
  display: flex;
}
._extraSmall_ybv3x_4 {
  margin-left: calc(-1 * var(--space-extra-small));
}
._small_ybv3x_7 {
  margin-left: calc(-1 * var(--space-small));
}
._medium_ybv3x_10 {
  margin-left: calc(-1 * var(--space-medium));
}
._large_ybv3x_13 {
  margin-left: calc(-1 * var(--space-large));
}
._extraLarge_ybv3x_16 {
  margin-left: calc(-1 * var(--space-extra-large));
}

._child_ybv3x_20 {
  flex-grow: 1;
}
._extraSmall_ybv3x_4 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-small);
}
._small_ybv3x_7 > ._child_ybv3x_20 {
  padding-left: var(--space-small);
}
._medium_ybv3x_10 > ._child_ybv3x_20 {
  padding-left: var(--space-medium);
}
._large_ybv3x_13 > ._child_ybv3x_20 {
  padding-left: var(--space-large);
}
._extraLarge_ybv3x_16 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbHVtbnMvY29sdW1ucy5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9sYXlvdXQvY29sdW1ucy9jb2x1bW5zLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZXh0cmFTbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpKTtcbn1cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2Utc21hbGwpKTtcbn1cbi5tZWRpdW0ge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLW1lZGl1bSkpO1xufVxuLmxhcmdlIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zcGFjZS1sYXJnZSkpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKSk7XG59XG5cbi5jaGlsZCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5leHRyYVNtYWxsID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0gPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2UgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      columns_module_default = { "columns": "_columns_ybv3x_1", "extraSmall": "_extraSmall_ybv3x_4", "small": "_small_ybv3x_7", "medium": "_medium_ybv3x_10", "large": "_large_ybv3x_13", "extraLarge": "_extraLarge_ybv3x_16", "child": "_child_ybv3x_20" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js
  var Columns;
  var init_columns = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js"() {
      init_preact_module();
      init_create_class_name();
      init_create_component();
      init_columns_module();
      Columns = createComponent(function(_a, ref) {
        var _b = _a, { children, space } = _b, rest = __objRest(_b, ["children", "space"]);
        return y("div", __spreadProps(__spreadValues({}, rest), { ref, class: createClassName([
          columns_module_default.columns,
          typeof space === "undefined" ? null : columns_module_default[space]
        ]) }), S(children).map(function(element, index) {
          return y("div", { key: index, class: columns_module_default.child }, element);
        }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/5e01f4bd-e84e-45b5-b62e-46e0cd3a5d36/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/5e01f4bd-e84e-45b5-b62e-46e0cd3a5d36/container.module.js"() {
      if (document.getElementById("1bf6404b38") === null) {
        const element = document.createElement("style");
        element.id = "1bf6404b38";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  var Container;
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_create_component();
      init_container_module();
      Container = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return y("div", __spreadProps(__spreadValues({}, rest), { ref, class: container_module_default[space] }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/0aa4f057-65b8-4b42-8331-7118cebd8b2b/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/0aa4f057-65b8-4b42-8331-7118cebd8b2b/vertical-space.module.js"() {
      if (document.getElementById("9fd0681b92") === null) {
        const element = document.createElement("style");
        element.id = "9fd0681b92";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  var VerticalSpace;
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_create_component();
      init_vertical_space_module();
      VerticalSpace = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return y("div", __spreadProps(__spreadValues({}, rest), { ref, class: vertical_space_module_default[space] }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/8c3f9312-7bc5-4448-910b-91a30c88c488/base.js
  var init_base = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/8c3f9312-7bc5-4448-910b-91a30c88c488/base.js"() {
      if (document.getElementById("df501d8314") === null) {
        const element = document.createElement("style");
        element.id = "df501d8314";
        element.innerHTML = `:root {
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  --opacity-30: 0.3;
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      D(y(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button();
      init_text();
      init_textbox_multiline();
      init_muted();
      init_columns();
      init_container();
      init_vertical_space();
      init_render();
    }
  });

  // node_modules/jotai/esm/vanilla.mjs
  function atom(read, write) {
    const key = `atom${++keyCount}`;
    const config = {
      toString: () => key
    };
    if (typeof read === "function") {
      config.read = read;
    } else {
      config.init = read;
      config.read = defaultRead;
      config.write = defaultWrite;
    }
    if (write) {
      config.write = write;
    }
    return config;
  }
  function defaultRead(get) {
    return get(this);
  }
  function defaultWrite(get, set, arg) {
    return set(
      this,
      typeof arg === "function" ? arg(get(this)) : arg
    );
  }
  var import_meta, keyCount, isSelfAtom, hasInitialValue, isActuallyWritableAtom, CONTINUE_PROMISE, PENDING, FULFILLED, REJECTED, isContinuablePromise, continuablePromiseMap, createContinuablePromise, isPromiseLike, isAtomStateInitialized, returnAtomValue, getPendingContinuablePromise, addPendingContinuablePromiseToDependency, createPending, addPendingAtom, addPendingDependent, getPendingDependents, addPendingFunction, flushPending, createStore, defaultStore, getDefaultStore;
  var init_vanilla = __esm({
    "node_modules/jotai/esm/vanilla.mjs"() {
      import_meta = {};
      keyCount = 0;
      isSelfAtom = (atom2, a3) => atom2.unstable_is ? atom2.unstable_is(a3) : a3 === atom2;
      hasInitialValue = (atom2) => "init" in atom2;
      isActuallyWritableAtom = (atom2) => !!atom2.write;
      CONTINUE_PROMISE = Symbol(
        (import_meta.env ? import_meta.env.MODE : void 0) !== "production" ? "CONTINUE_PROMISE" : ""
      );
      PENDING = "pending";
      FULFILLED = "fulfilled";
      REJECTED = "rejected";
      isContinuablePromise = (promise) => typeof promise === "object" && promise !== null && CONTINUE_PROMISE in promise;
      continuablePromiseMap = /* @__PURE__ */ new WeakMap();
      createContinuablePromise = (promise, abort, complete) => {
        if (!continuablePromiseMap.has(promise)) {
          let continuePromise;
          const p3 = new Promise((resolve, reject) => {
            let curr = promise;
            const onFulfilled = (me) => (v3) => {
              if (curr === me) {
                p3.status = FULFILLED;
                p3.value = v3;
                resolve(v3);
                complete();
              }
            };
            const onRejected = (me) => (e3) => {
              if (curr === me) {
                p3.status = REJECTED;
                p3.reason = e3;
                reject(e3);
                complete();
              }
            };
            promise.then(onFulfilled(promise), onRejected(promise));
            continuePromise = (nextPromise, nextAbort) => {
              if (nextPromise) {
                continuablePromiseMap.set(nextPromise, p3);
                curr = nextPromise;
                nextPromise.then(onFulfilled(nextPromise), onRejected(nextPromise));
                abort();
                abort = nextAbort;
              }
            };
          });
          p3.status = PENDING;
          p3[CONTINUE_PROMISE] = continuePromise;
          continuablePromiseMap.set(promise, p3);
        }
        return continuablePromiseMap.get(promise);
      };
      isPromiseLike = (x4) => typeof (x4 == null ? void 0 : x4.then) === "function";
      isAtomStateInitialized = (atomState) => "v" in atomState || "e" in atomState;
      returnAtomValue = (atomState) => {
        if ("e" in atomState) {
          throw atomState.e;
        }
        if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && !("v" in atomState)) {
          throw new Error("[Bug] atom state is not initialized");
        }
        return atomState.v;
      };
      getPendingContinuablePromise = (atomState) => {
        const value = atomState.v;
        if (isContinuablePromise(value) && value.status === PENDING) {
          return value;
        }
        return null;
      };
      addPendingContinuablePromiseToDependency = (atom2, promise, dependencyAtomState) => {
        if (!dependencyAtomState.p.has(atom2)) {
          dependencyAtomState.p.add(atom2);
          promise.then(
            () => {
              dependencyAtomState.p.delete(atom2);
            },
            () => {
              dependencyAtomState.p.delete(atom2);
            }
          );
        }
      };
      createPending = () => [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), /* @__PURE__ */ new Set()];
      addPendingAtom = (pending, atom2, atomState) => {
        if (!pending[0].has(atom2)) {
          pending[0].set(atom2, /* @__PURE__ */ new Set());
        }
        pending[1].set(atom2, atomState);
      };
      addPendingDependent = (pending, atom2, dependent) => {
        const dependents = pending[0].get(atom2);
        if (dependents) {
          dependents.add(dependent);
        }
      };
      getPendingDependents = (pending, atom2) => pending[0].get(atom2);
      addPendingFunction = (pending, fn2) => {
        pending[2].add(fn2);
      };
      flushPending = (pending) => {
        while (pending[1].size || pending[2].size) {
          pending[0].clear();
          const atomStates = new Set(pending[1].values());
          pending[1].clear();
          const functions = new Set(pending[2]);
          pending[2].clear();
          atomStates.forEach((atomState) => {
            var _a;
            return (_a = atomState.m) == null ? void 0 : _a.l.forEach((l3) => l3());
          });
          functions.forEach((fn2) => fn2());
        }
      };
      createStore = () => {
        const atomStateMap = /* @__PURE__ */ new WeakMap();
        let debugMountedAtoms;
        if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
          debugMountedAtoms = /* @__PURE__ */ new Set();
        }
        const getAtomState = (atom2) => {
          let atomState = atomStateMap.get(atom2);
          if (!atomState) {
            atomState = { d: /* @__PURE__ */ new Map(), p: /* @__PURE__ */ new Set(), n: 0 };
            atomStateMap.set(atom2, atomState);
          }
          return atomState;
        };
        const setAtomStateValueOrPromise = (atom2, atomState, valueOrPromise, abortPromise = () => {
        }, completePromise = () => {
        }) => {
          const hasPrevValue = "v" in atomState;
          const prevValue = atomState.v;
          const pendingPromise = getPendingContinuablePromise(atomState);
          if (isPromiseLike(valueOrPromise)) {
            if (pendingPromise) {
              if (pendingPromise !== valueOrPromise) {
                pendingPromise[CONTINUE_PROMISE](valueOrPromise, abortPromise);
                ++atomState.n;
              }
            } else {
              const continuablePromise = createContinuablePromise(
                valueOrPromise,
                abortPromise,
                completePromise
              );
              if (continuablePromise.status === PENDING) {
                for (const a3 of atomState.d.keys()) {
                  const aState = getAtomState(a3);
                  addPendingContinuablePromiseToDependency(
                    atom2,
                    continuablePromise,
                    aState
                  );
                }
              }
              atomState.v = continuablePromise;
              delete atomState.e;
            }
          } else {
            if (pendingPromise) {
              pendingPromise[CONTINUE_PROMISE](
                Promise.resolve(valueOrPromise),
                abortPromise
              );
            }
            atomState.v = valueOrPromise;
            delete atomState.e;
          }
          if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
            ++atomState.n;
          }
        };
        const addDependency = (pending, atom2, a3, aState) => {
          var _a;
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && a3 === atom2) {
            throw new Error("[Bug] atom cannot depend on itself");
          }
          const atomState = getAtomState(atom2);
          atomState.d.set(a3, aState.n);
          const continuablePromise = getPendingContinuablePromise(atomState);
          if (continuablePromise) {
            addPendingContinuablePromiseToDependency(atom2, continuablePromise, aState);
          }
          (_a = aState.m) == null ? void 0 : _a.t.add(atom2);
          if (pending) {
            addPendingDependent(pending, a3, atom2);
          }
        };
        const readAtomState = (pending, atom2, force) => {
          const atomState = getAtomState(atom2);
          if (!(force == null ? void 0 : force(atom2)) && isAtomStateInitialized(atomState)) {
            if (atomState.m) {
              return atomState;
            }
            if (Array.from(atomState.d).every(
              ([a3, n2]) => (
                // Recursively, read the atom state of the dependency, and
                // check if the atom epoch number is unchanged
                readAtomState(pending, a3, force).n === n2
              )
            )) {
              return atomState;
            }
          }
          atomState.d.clear();
          let isSync = true;
          const getter = (a3) => {
            if (isSelfAtom(atom2, a3)) {
              const aState2 = getAtomState(a3);
              if (!isAtomStateInitialized(aState2)) {
                if (hasInitialValue(a3)) {
                  setAtomStateValueOrPromise(a3, aState2, a3.init);
                } else {
                  throw new Error("no atom init");
                }
              }
              return returnAtomValue(aState2);
            }
            const aState = readAtomState(pending, a3, force);
            if (isSync) {
              addDependency(pending, atom2, a3, aState);
            } else {
              const pending2 = createPending();
              addDependency(pending2, atom2, a3, aState);
              mountDependencies(pending2, atom2, atomState);
              flushPending(pending2);
            }
            return returnAtomValue(aState);
          };
          let controller;
          let setSelf;
          const options = {
            get signal() {
              if (!controller) {
                controller = new AbortController();
              }
              return controller.signal;
            },
            get setSelf() {
              if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom2)) {
                console.warn("setSelf function cannot be used with read-only atom");
              }
              if (!setSelf && isActuallyWritableAtom(atom2)) {
                setSelf = (...args) => {
                  if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && isSync) {
                    console.warn("setSelf function cannot be called in sync");
                  }
                  if (!isSync) {
                    return writeAtom(atom2, ...args);
                  }
                };
              }
              return setSelf;
            }
          };
          try {
            const valueOrPromise = atom2.read(getter, options);
            setAtomStateValueOrPromise(
              atom2,
              atomState,
              valueOrPromise,
              () => controller == null ? void 0 : controller.abort(),
              () => {
                if (atomState.m) {
                  const pending2 = createPending();
                  mountDependencies(pending2, atom2, atomState);
                  flushPending(pending2);
                }
              }
            );
            return atomState;
          } catch (error) {
            delete atomState.v;
            atomState.e = error;
            ++atomState.n;
            return atomState;
          } finally {
            isSync = false;
          }
        };
        const readAtom = (atom2) => returnAtomValue(readAtomState(void 0, atom2));
        const recomputeDependents = (pending, atom2) => {
          const getDependents = (a3) => {
            var _a, _b;
            const aState = getAtomState(a3);
            const dependents = new Set((_a = aState.m) == null ? void 0 : _a.t);
            for (const atomWithPendingContinuablePromise of aState.p) {
              dependents.add(atomWithPendingContinuablePromise);
            }
            (_b = getPendingDependents(pending, a3)) == null ? void 0 : _b.forEach((dependent) => {
              dependents.add(dependent);
            });
            return dependents;
          };
          const topsortedAtoms = [];
          const markedAtoms = /* @__PURE__ */ new Set();
          const visit = (n2) => {
            if (markedAtoms.has(n2)) {
              return;
            }
            markedAtoms.add(n2);
            for (const m3 of getDependents(n2)) {
              if (n2 !== m3) {
                visit(m3);
              }
            }
            topsortedAtoms.push(n2);
          };
          visit(atom2);
          const changedAtoms = /* @__PURE__ */ new Set([atom2]);
          const isMarked = (a3) => markedAtoms.has(a3);
          for (let i3 = topsortedAtoms.length - 1; i3 >= 0; --i3) {
            const a3 = topsortedAtoms[i3];
            const aState = getAtomState(a3);
            const prevEpochNumber = aState.n;
            let hasChangedDeps = false;
            for (const dep of aState.d.keys()) {
              if (dep !== a3 && changedAtoms.has(dep)) {
                hasChangedDeps = true;
                break;
              }
            }
            if (hasChangedDeps) {
              readAtomState(pending, a3, isMarked);
              mountDependencies(pending, a3, aState);
              if (prevEpochNumber !== aState.n) {
                addPendingAtom(pending, a3, aState);
                changedAtoms.add(a3);
              }
            }
            markedAtoms.delete(a3);
          }
        };
        const writeAtomState = (pending, atom2, ...args) => {
          const getter = (a3) => returnAtomValue(readAtomState(pending, a3));
          const setter = (a3, ...args2) => {
            let r3;
            if (isSelfAtom(atom2, a3)) {
              if (!hasInitialValue(a3)) {
                throw new Error("atom not writable");
              }
              const aState = getAtomState(a3);
              const hasPrevValue = "v" in aState;
              const prevValue = aState.v;
              const v3 = args2[0];
              setAtomStateValueOrPromise(a3, aState, v3);
              mountDependencies(pending, a3, aState);
              if (!hasPrevValue || !Object.is(prevValue, aState.v)) {
                addPendingAtom(pending, a3, aState);
                recomputeDependents(pending, a3);
              }
            } else {
              r3 = writeAtomState(pending, a3, ...args2);
            }
            flushPending(pending);
            return r3;
          };
          const result = atom2.write(getter, setter, ...args);
          return result;
        };
        const writeAtom = (atom2, ...args) => {
          const pending = createPending();
          const result = writeAtomState(pending, atom2, ...args);
          flushPending(pending);
          return result;
        };
        const mountDependencies = (pending, atom2, atomState) => {
          if (atomState.m && !getPendingContinuablePromise(atomState)) {
            for (const a3 of atomState.d.keys()) {
              if (!atomState.m.d.has(a3)) {
                const aMounted = mountAtom(pending, a3);
                aMounted.t.add(atom2);
                atomState.m.d.add(a3);
              }
            }
            for (const a3 of atomState.m.d || []) {
              if (!atomState.d.has(a3)) {
                const aMounted = unmountAtom(pending, a3);
                aMounted == null ? void 0 : aMounted.t.delete(atom2);
                atomState.m.d.delete(a3);
              }
            }
          }
        };
        const mountAtom = (pending, atom2) => {
          const atomState = getAtomState(atom2);
          if (!atomState.m) {
            readAtomState(pending, atom2);
            for (const a3 of atomState.d.keys()) {
              const aMounted = mountAtom(pending, a3);
              aMounted.t.add(atom2);
            }
            atomState.m = {
              l: /* @__PURE__ */ new Set(),
              d: new Set(atomState.d.keys()),
              t: /* @__PURE__ */ new Set()
            };
            if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
              debugMountedAtoms.add(atom2);
            }
            if (isActuallyWritableAtom(atom2) && atom2.onMount) {
              const mounted = atomState.m;
              const { onMount } = atom2;
              addPendingFunction(pending, () => {
                const onUnmount = onMount(
                  (...args) => writeAtomState(pending, atom2, ...args)
                );
                if (onUnmount) {
                  mounted.u = onUnmount;
                }
              });
            }
          }
          return atomState.m;
        };
        const unmountAtom = (pending, atom2) => {
          const atomState = getAtomState(atom2);
          if (atomState.m && !atomState.m.l.size && !Array.from(atomState.m.t).some((a3) => getAtomState(a3).m)) {
            const onUnmount = atomState.m.u;
            if (onUnmount) {
              addPendingFunction(pending, onUnmount);
            }
            delete atomState.m;
            if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
              debugMountedAtoms.delete(atom2);
            }
            for (const a3 of atomState.d.keys()) {
              const aMounted = unmountAtom(pending, a3);
              aMounted == null ? void 0 : aMounted.t.delete(atom2);
            }
            const pendingPromise = getPendingContinuablePromise(atomState);
            if (pendingPromise) {
              pendingPromise[CONTINUE_PROMISE](void 0, () => {
              });
            }
            return void 0;
          }
          return atomState.m;
        };
        const subscribeAtom = (atom2, listener) => {
          const pending = createPending();
          const mounted = mountAtom(pending, atom2);
          flushPending(pending);
          const listeners = mounted.l;
          listeners.add(listener);
          return () => {
            listeners.delete(listener);
            const pending2 = createPending();
            unmountAtom(pending2, atom2);
            flushPending(pending2);
          };
        };
        if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
          const store = {
            get: readAtom,
            set: writeAtom,
            sub: subscribeAtom,
            // store dev methods (these are tentative and subject to change without notice)
            dev4_get_internal_weak_map: () => atomStateMap,
            dev4_get_mounted_atoms: () => debugMountedAtoms,
            dev4_restore_atoms: (values) => {
              const pending = createPending();
              for (const [atom2, value] of values) {
                if (hasInitialValue(atom2)) {
                  const aState = getAtomState(atom2);
                  const hasPrevValue = "v" in aState;
                  const prevValue = aState.v;
                  setAtomStateValueOrPromise(atom2, aState, value);
                  mountDependencies(pending, atom2, aState);
                  if (!hasPrevValue || !Object.is(prevValue, aState.v)) {
                    addPendingAtom(pending, atom2, aState);
                    recomputeDependents(pending, atom2);
                  }
                }
              }
              flushPending(pending);
            }
          };
          return store;
        }
        return {
          get: readAtom,
          set: writeAtom,
          sub: subscribeAtom
        };
      };
      getDefaultStore = () => {
        if (!defaultStore) {
          defaultStore = createStore();
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
            globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
            if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
              console.warn(
                "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
              );
            }
          }
        }
        return defaultStore;
      };
    }
  });

  // node_modules/jotai/esm/react.mjs
  function useAtomValue(atom2, options) {
    const store = useStore(options);
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = s2(
      (prev) => {
        const nextValue = store.get(atom2);
        if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom2) {
          return prev;
        }
        return [nextValue, store, atom2];
      },
      void 0,
      () => [store.get(atom2), store, atom2]
    );
    let value = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom2) {
      rerender();
      value = store.get(atom2);
    }
    const delay = options == null ? void 0 : options.delay;
    p2(() => {
      const unsub = store.sub(atom2, () => {
        if (typeof delay === "number") {
          setTimeout(rerender, delay);
          return;
        }
        rerender();
      });
      rerender();
      return unsub;
    }, [store, atom2, delay]);
    x2(value);
    return isPromiseLike2(value) ? use(value) : value;
  }
  function useSetAtom(atom2, options) {
    const store = useStore(options);
    const setAtom = T2(
      (...args) => {
        if ((import_meta2.env ? import_meta2.env.MODE : void 0) !== "production" && !("write" in atom2)) {
          throw new Error("not writable atom");
        }
        return store.set(atom2, ...args);
      },
      [store, atom2]
    );
    return setAtom;
  }
  function useAtom(atom2, options) {
    return [
      useAtomValue(atom2, options),
      // We do wrong type assertion here, which results in throwing an error.
      useSetAtom(atom2, options)
    ];
  }
  var import_meta2, StoreContext, useStore, isPromiseLike2, use;
  var init_react = __esm({
    "node_modules/jotai/esm/react.mjs"() {
      "use client";
      init_compat_module();
      init_vanilla();
      import_meta2 = {};
      StoreContext = G(
        void 0
      );
      useStore = (options) => {
        const store = q2(StoreContext);
        return (options == null ? void 0 : options.store) || store || getDefaultStore();
      };
      isPromiseLike2 = (x4) => typeof (x4 == null ? void 0 : x4.then) === "function";
      use = Cn.use || ((promise) => {
        if (promise.status === "pending") {
          throw promise;
        } else if (promise.status === "fulfilled") {
          return promise.value;
        } else if (promise.status === "rejected") {
          throw promise.reason;
        } else {
          promise.status = "pending";
          promise.then(
            (v3) => {
              promise.status = "fulfilled";
              promise.value = v3;
            },
            (e3) => {
              promise.status = "rejected";
              promise.reason = e3;
            }
          );
          throw promise;
        }
      });
    }
  });

  // node_modules/jotai/esm/index.mjs
  var init_esm = __esm({
    "node_modules/jotai/esm/index.mjs"() {
      init_vanilla();
      init_react();
    }
  });

  // src/atoms.ts
  var noteAtom, isSelectionAtom;
  var init_atoms = __esm({
    "src/atoms.ts"() {
      "use strict";
      init_esm();
      noteAtom = atom("");
      isSelectionAtom = atom(false);
    }
  });

  // src/Dropdown.tsx
  var Dropdown, Dropdown_default;
  var init_Dropdown = __esm({
    "src/Dropdown.tsx"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      Dropdown = ({
        options,
        selectedOption,
        onSelect,
        placeholder = "Select an option",
        renderOption
      }) => {
        const [isOpen, setIsOpen] = h2(false);
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
        const handleSelect = (option) => {
          onSelect(option);
          setIsOpen(false);
        };
        const dropdownStyles = {
          dropdownComp: {
            position: "relative",
            width: "200px"
          },
          dropdownToggle: {
            width: "100%",
            padding: "10px",
            backgroundColor: "#f8f8f8",
            border: "1px solid #ddd",
            borderRadius: "4px",
            cursor: "pointer"
          },
          dropdownMenu: {
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zIndex: 1
          },
          dropdownItem: {
            padding: "10px",
            cursor: "pointer"
          }
        };
        return /* @__PURE__ */ y("div", { style: dropdownStyles.dropdownComp }, /* @__PURE__ */ y("div", { className: "dropdown-wrapper" }, /* @__PURE__ */ y(
          "button",
          {
            style: dropdownStyles.dropdownToggle,
            onClick: toggleDropdown,
            onBlur: () => setIsOpen(false)
          },
          /* @__PURE__ */ y("div", { className: "select-dropdown-title" }, /* @__PURE__ */ y("div", { id: "dropdown-title" }, selectedOption ? selectedOption.name : placeholder))
        ), isOpen && /* @__PURE__ */ y("div", { style: dropdownStyles.dropdownMenu }, options.map((option) => /* @__PURE__ */ y(
          "div",
          {
            key: option.id,
            style: dropdownStyles.dropdownItem,
            onMouseDown: (e3) => {
              e3.preventDefault();
              handleSelect(option);
            }
          },
          renderOption ? renderOption(option) : option.name
        )))));
      };
      Dropdown_default = Dropdown;
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [note, setNote] = useAtom(noteAtom);
    const [, setIsSelection] = h2(false);
    const data = {
      note
    };
    const handleErrorClick = () => {
      emit("ERROR", data);
    };
    const handleWarningClick = () => {
      emit("WARNING", data);
    };
    const handleNoticeClick = () => {
      emit("NOTICE", data);
    };
    const handleReport = () => {
      emit("REPORT");
    };
    on2("SELECTION", () => {
      setIsSelection(true);
    });
    on2("NO_SELECTION", () => {
      setIsSelection(false);
    });
    return /* @__PURE__ */ y(Container, { space: "medium" }, /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(
      Dropdown_default,
      {
        options: [
          { id: "error", name: "Error" },
          { id: "warning", name: "Warning" },
          { id: "notice", name: "Notice" },
          { id: "report", name: "Report" }
        ],
        selectedOption: { id: "error", name: "Error" },
        onSelect: () => console.log("yey")
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "large" }), /* @__PURE__ */ y(
      Dropdown_default,
      {
        options: [
          { id: "yes", name: "Yes" },
          { id: "no", name: "No" }
        ],
        selectedOption: { id: "yes", name: "Yes" },
        onSelect: () => console.log("yey-yey")
      }
    ), /* @__PURE__ */ y("div", null, /* @__PURE__ */ y(VerticalSpace, { space: "medium" }), /* @__PURE__ */ y(Text, null, /* @__PURE__ */ y(Muted, null, "Note text:")), /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(
      TextboxMultiline,
      {
        onValueInput: setNote,
        value: note,
        variant: "border",
        style: { height: "84px" }
      }
    ), /* @__PURE__ */ y(VerticalSpace, { space: "small" }), /* @__PURE__ */ y(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ y(Columns, { space: "extraSmall" }, /* @__PURE__ */ y(
      Button,
      {
        fullWidth: true,
        onClick: handleErrorClick,
        style: { backgroundColor: "darkRed" }
      },
      "Error"
    ), /* @__PURE__ */ y(
      Button,
      {
        fullWidth: true,
        onClick: handleWarningClick,
        style: {
          backgroundColor: "darkOrange"
        }
      },
      "Warning"
    ), /* @__PURE__ */ y(
      Button,
      {
        fullWidth: true,
        onClick: handleNoticeClick,
        style: {
          backgroundColor: "lightSlateGray"
        }
      },
      "Notice"
    )), /* @__PURE__ */ y(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ y(Button, { fullWidth: true, onClick: handleReport }, "Generate report")));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_esm();
      init_atoms();
      init_Dropdown();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
