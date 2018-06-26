! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.0",
        n = function (a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return e.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a) {
            return n.each(this, a)
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === n.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && n.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function () {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function (b) {
                return b = +b, ha(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function (a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function (a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
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
                ATTR: function (a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function (a) {
                    return function (b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function (a) {
                    return a = a.replace(ba, ca),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function (a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Y.test(a.nodeName)
                },
                input: function (a) {
                    return X.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function () {
                    return [0]
                }),
                last: na(function (a, b) {
                    return [b - 1]
                }),
                eq: na(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
                    return a === b
                }, h, !0), l = ra(function (a) {
                    return J(b, a) > -1
                }, h, !0), m = [function (a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function (a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function (a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function (a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function (a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function (a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return u(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function (a) {
            return F(a, "nextSibling")
        },
        prev: function (a) {
            return F(a, "previousSibling")
        },
        nextAll: function (a) {
            return u(a, "nextSibling")
        },
        prevAll: function (a) {
            return u(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function (a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return v(a.firstChild)
        },
        contents: function (a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function () {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function (b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function () {
                    return n.each(arguments, function (a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function (a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function () {
                    return f && (f = []), this
                },
                disable: function () {
                    return e = g = [], f = c = "", this
                },
                disabled: function () {
                    return !f
                },
                lock: function () {
                    return e = !0, c || j.disable(), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function () {
                    return j.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function (a, b, c) {
                    return function (d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function (b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function () {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function (a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function (a, b, c) {
                return R(a, b, c)
            },
            removeData: function (a, b) {
                return S(a, b)
            },
            _data: function (a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function (a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function () {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function (a) {
                return this.each(function () {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function (a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function () {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function (a) {
                return this.each(function () {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function () {
            var a;
            l.shrinkWrapBlocks = function () {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function () {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function () {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function (b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function (a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function () {
            return ka.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function (a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function (a) {
            return Ia(this, a, !0)
        },
        remove: function (a) {
            return Ia(this, a)
        },
        text: function (a) {
            return Y(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        },
        html: function (a) {
            return Y(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return Ha(this, arguments, function (b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function () {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function () {
                    return null == b && k(), f
                },
                boxSizingReliable: function () {
                    return null == b && k(), e
                },
                pixelMarginRight: function () {
                    return null == b && k(), c
                },
                pixelPosition: function () {
                    return null == b && k(), b
                },
                reliableMarginRight: function () {
                    return null == b && k(), g
                },
                reliableMarginLeft: function () {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function (b) {
        var c = b.ownerDocument.defaultView;
        return c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function (a) {
        return a.currentStyle
    }, Sa = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ra(b),
            i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function (a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function (a, b) {
            return Y(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return cb(this, !0)
        },
        hide: function () {
            return cb(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function () {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, m.always(function () {
            m.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
                n(a).hide()
            }), m.done(function () {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function (a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function (a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function (a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function () {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function (a, b) {
            var c = n.fn[b];
            n.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            n.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function () {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function (a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function () {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function () {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function (b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function () {
                    a.clearTimeout(e)
                }
            })
        },
        function () {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb, tb, ub = n.expr.attrHandle,
        vb = /^(?:checked|selected)$/i,
        wb = l.getSetAttribute,
        xb = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d)
        }
    }), tb = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ub[b] || n.find.attr;
        xb && wb || !vb.test(b) ? ub[b] = function (a, b, d) {
            var e, f;
            return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e
        } : ub[b] = function (a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), xb && wb || (n.attrHooks.value = {
        set: function (a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : sb && sb.set(a, b, c)
        }
    }), wb || (sb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ub.id = ub.name = ub.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: sb.set
    }, n.attrHooks.contenteditable = {
        set: function (a, b, c) {
            sb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var yb = /^(?:input|select|textarea|button|object)$/i,
        zb = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = n.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Ab = /[\t\r\n\f]/g;

    function Bb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, Bb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, Bb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
                n(this).toggleClass(a.call(this, c, Bb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(void 0 === a || "boolean" === c) && (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Cb = a.location,
        Db = n.now(),
        Eb = /\?/,
        Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Fb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Gb = /#.*$/,
        Hb = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Nb = {},
        Ob = {},
        Pb = "*/".concat("*"),
        Qb = Cb.href,
        Rb = Mb.exec(Qb.toLowerCase()) || [];

    function Sb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Tb(a, b, c, d) {
        var e = {},
            f = a === Ob;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ub(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Vb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Wb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
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
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Qb,
            type: "GET",
            isLocal: Jb.test(Rb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a)
        },
        ajaxPrefilter: Sb(Nb),
        ajaxTransport: Sb(Ob),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Ib.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Tb(Ob, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function () {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function (a) {
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Xb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Yb(a) {
        while (a && 1 === a.nodeType) {
            if ("none" === Xb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function (a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a)
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var Zb = /%20/g,
        $b = /\[\]$/,
        _b = /\r?\n/g,
        ac = /^(?:submit|button|image|reset|file)$/i,
        bc = /^(?:input|select|textarea|keygen)/i;

    function cc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) cc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) cc(c, a[c], b, e);
        return d.join("&").replace(Zb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Z.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(_b, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(_b, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc()
    } : gc;
    var dc = 0,
        ec = {},
        fc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in ec) ec[a](void 0, !0)
    }), l.cors = !!fc && "withCredentials" in fc, fc = l.ajax = !!fc, fc && n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function (d, e) {
                    var f, g = b.xhr(),
                        h = ++dc;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function (a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c()
                },
                abort: function () {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function gc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function hc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function (e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ic = [],
        jc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = ic.pop() || n.expando + "_" + Db++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : b.jsonp !== !1 && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), l.createHTMLDocument = function () {
        if (!d.implementation.createHTMLDocument) return !1;
        var a = d.implementation.createHTMLDocument("");
        return a.body.innerHTML = "<form></form><form></form>", 2 === a.body.childNodes.length
    }(), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var kc = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && kc) return kc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };

    function lc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), c.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
            return Y(this, function (a, d, e) {
                var f = lc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var mc = a.jQuery,
        nc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n
    }, b || (a.jQuery = a.$ = n), n
});
(function (a, d, p) {
    a.fn.backstretch = function (c, b) {
        (c === p || 0 === c.length) && a.error("No images were supplied for Backstretch");
        0 === a(d).scrollTop() && d.scrollTo(0, 0);
        return this.each(function () {
            var d = a(this),
                g = d.data("backstretch");
            if (g) {
                if ("string" == typeof c && "function" == typeof g[c]) {
                    g[c](b);
                    return
                }
                b = a.extend(g.options, b);
                g.destroy(!0)
            }
            g = new q(this, c, b);
            d.data("backstretch", g)
        })
    };
    a.backstretch = function (c, b) {
        return a("body").backstretch(c, b).data("backstretch")
    };
    a.expr[":"].backstretch = function (c) {
        return a(c).data("backstretch") !== p
    };
    a.fn.backstretch.defaults = {
        centeredX: !0,
        centeredY: !0,
        duration: 5e3,
        fade: 0
    };
    var r = {
            left: 0,
            top: 0,
            overflow: "hidden",
            margin: 0,
            padding: 0,
            height: "100%",
            width: "100%",
            zIndex: -999999
        },
        s = {
            position: "absolute",
            display: "none",
            margin: 0,
            padding: 0,
            border: "none",
            width: "auto",
            height: "auto",
            maxHeight: "none",
            maxWidth: "none",
            zIndex: -999999
        },
        q = function (c, b, e) {
            this.options = a.extend({}, a.fn.backstretch.defaults, e || {});
            this.images = a.isArray(b) ? b : [b];
            a.each(this.images, function () {
                a("<img />")[0].src = this
            });
            this.isBody = c === document.body;
            this.$container = a(c);
            this.$root = this.isBody ? l ? a(d) : a(document) : this.$container;
            c = this.$container.children(".backstretch").first();
            this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(r).appendTo(this.$container);
            this.isBody || (c = this.$container.css("position"), b = this.$container.css("zIndex"), this.$container.css({
                position: "static" === c ? "relative" : c,
                zIndex: "auto" === b ? 0 : b,
                background: "none"
            }), this.$wrap.css({
                zIndex: -999998
            }));
            this.$wrap.css({
                position: this.isBody && l ? "fixed" : "absolute"
            });
            this.index = 0;
            this.show(this.index);
            a(d).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function () {
                this.isBody && 0 === d.pageYOffset && (d.scrollTo(0, 1), this.resize())
            }, this))
        };
    q.prototype = {
        resize: function () {
            try {
                var a = {
                        left: 0,
                        top: 0
                    },
                    b = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                    e = b,
                    g = this.isBody ? d.innerHeight ? d.innerHeight : this.$root.height() : this.$root.innerHeight(),
                    j = e / this.$img.data("ratio"),
                    f;
                j >= g ? (f = (j - g) / 2, this.options.centeredY && (a.top = "-" + f + "px")) : (j = g, e = j * this.$img.data("ratio"), f = (e - b) / 2, this.options.centeredX && (a.left = "-" + f + "px"));
                this.$wrap.css({
                    width: b,
                    height: g
                }).find("img:not(.deleteable)").css({
                    width: e,
                    height: j
                }).css(a)
            } catch (h) {}
            return this
        },
        show: function (c) {
            if (!(Math.abs(c) > this.images.length - 1)) {
                var b = this,
                    e = b.$wrap.find("img").addClass("deleteable"),
                    d = {
                        relatedTarget: b.$container[0]
                    };
                b.$container.trigger(a.Event("backstretch.before", d), [b, c]);
                this.index = c;
                clearInterval(b.interval);
                b.$img = a("<img />").css(s).bind("load", function (f) {
                    var h = this.width || a(f.target).width();
                    f = this.height || a(f.target).height();
                    a(this).data("ratio", h / f);
                    a(this).fadeIn(b.options.speed || b.options.fade, function () {
                        e.remove();
                        b.paused || b.cycle();
                        a(["after", "show"]).each(function () {
                            b.$container.trigger(a.Event("backstretch." + this, d), [b, c])
                        })
                    });
                    b.resize()
                }).appendTo(b.$wrap);
                b.$img.attr("src", b.images[c]);
                return b
            }
        },
        next: function () {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        },
        prev: function () {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        },
        pause: function () {
            this.paused = !0;
            return this
        },
        resume: function () {
            this.paused = !1;
            this.next();
            return this
        },
        cycle: function () {
            1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function () {
                this.paused || this.next()
            }, this), this.options.duration));
            return this
        },
        destroy: function (c) {
            a(d).off("resize.backstretch orientationchange.backstretch");
            clearInterval(this.interval);
            c || this.$wrap.remove();
            this.$container.removeData("backstretch")
        }
    };
    var l, f = navigator.userAgent,
        m = navigator.platform,
        e = f.match(/AppleWebKit\/([0-9]+)/),
        e = !!e && e[1],
        h = f.match(/Fennec\/([0-9]+)/),
        h = !!h && h[1],
        n = f.match(/Opera Mobi\/([0-9]+)/),
        t = !!n && n[1],
        k = f.match(/MSIE ([0-9]+)/),
        k = !!k && k[1];
    l = !((-1 < m.indexOf("iPhone") || -1 < m.indexOf("iPad") || -1 < m.indexOf("iPod")) && e && 534 > e || d.operamini && "[object OperaMini]" === {}.toString.call(d.operamini) || n && 7458 > t || -1 < f.indexOf("Android") && e && 533 > e || h && 6 > h || "palmGetResource" in d && e && 534 > e || -1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0") || k && 6 >= k)
})(jQuery, window);
(function (e) {
    "function" === typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    var y = !1,
        C = !1,
        J = 5e3,
        K = 2e3,
        x = 0,
        F = ["ms", "moz", "webkit", "o"],
        s = window.requestAnimationFrame || !1,
        v = window.cancelAnimationFrame || !1;
    if (!s)
        for (var L in F) {
            var D = F[L];
            s || (s = window[D + "RequestAnimationFrame"]);
            v || (v = window[D + "CancelAnimationFrame"] || window[D + "CancelRequestAnimationFrame"])
        }
    var z = window.MutationObserver || window.WebKitMutationObserver || !1,
        G = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "5px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: .3,
            rtlmode: "auto",
            cursordragontouch: !1,
            oneaxismousemode: "auto",
            scriptpath: function () {
                var e = document.getElementsByTagName("script"),
                    e = e[e.length - 1].src.split("?")[0];
                return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
            }()
        },
        E = !1,
        M = function () {
            if (E) return E;
            var e = document.createElement("DIV"),
                b = {
                    haspointerlock: "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document
                };
            b.isopera = "opera" in window;
            b.isopera12 = b.isopera && "getUserMedia" in navigator;
            b.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
            b.isie = "all" in document && "attachEvent" in e && !b.isopera;
            b.isieold = b.isie && !("msInterpolationMode" in e.style);
            b.isie7 = b.isie && !b.isieold && (!("documentMode" in document) || 7 == document.documentMode);
            b.isie8 = b.isie && "documentMode" in document && 8 == document.documentMode;
            b.isie9 = b.isie && "performance" in window && 9 <= document.documentMode;
            b.isie10 = b.isie && "performance" in window && 10 <= document.documentMode;
            b.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
            b.isie9mobile && (b.isie9 = !1);
            b.isie7mobile = !b.isie9mobile && b.isie7 && /iemobile/i.test(navigator.userAgent);
            b.ismozilla = "MozAppearance" in e.style;
            b.iswebkit = "WebkitAppearance" in e.style;
            b.ischrome = "chrome" in window;
            b.ischrome22 = b.ischrome && b.haspointerlock;
            b.ischrome26 = b.ischrome && "transition" in e.style;
            b.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
            b.hasmstouch = window.navigator.msPointerEnabled || !1;
            b.ismac = /^mac$/i.test(navigator.platform);
            b.isios = b.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
            b.isios4 = b.isios && !("seal" in Object);
            b.isandroid = /android/i.test(navigator.userAgent);
            b.trstyle = !1;
            b.hastransform = !1;
            b.hastranslate3d = !1;
            b.transitionstyle = !1;
            b.hastransition = !1;
            b.transitionend = !1;
            for (var h = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], k = 0; k < h.length; k++)
                if ("undefined" != typeof e.style[h[k]]) {
                    b.trstyle = h[k];
                    break
                }
            b.hastransform = !1 != b.trstyle;
            b.hastransform && (e.style[b.trstyle] = "translate3d(1px,2px,3px)", b.hastranslate3d = /translate3d/.test(e.style[b.trstyle]));
            b.transitionstyle = !1;
            b.prefixstyle = "";
            b.transitionend = !1;
            for (var h = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), l = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "), q = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "), k = 0; k < h.length; k++)
                if (h[k] in e.style) {
                    b.transitionstyle = h[k];
                    b.prefixstyle = l[k];
                    b.transitionend = q[k];
                    break
                }
            b.ischrome26 && (b.prefixstyle = l[1]);
            b.hastransition = b.transitionstyle;
            a: {
                h = ["-moz-grab", "-webkit-grab", "grab"];
                if (b.ischrome && !b.ischrome22 || b.isie) h = [];
                for (k = 0; k < h.length; k++)
                    if (l = h[k], e.style.cursor = l, e.style.cursor == l) {
                        h = l;
                        break a
                    }
                h = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
            }
            b.cursorgrabvalue = h;
            b.hasmousecapture = "setCapture" in e;
            b.hasMutationObserver = !1 !== z;
            return E = b
        },
        N = function (g, b) {
            function h() {
                var c = a.win;
                if ("zIndex" in c) return c.zIndex();
                for (; 0 < c.length && 9 != c[0].nodeType;) {
                    var b = c.css("zIndex");
                    if (!isNaN(b) && 0 != b) return parseInt(b);
                    c = c.parent()
                }
                return !1
            }

            function k(c, b, f) {
                b = c.css(b);
                c = parseFloat(b);
                return isNaN(c) ? (c = w[b] || 0, f = 3 == c ? f ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth() : 1, a.isie8 && c && (c += 1), f ? c : 0) : c
            }

            function l(c, b, f, e) {
                a._bind(c, b, function (a) {
                    a = a ? a : window.event;
                    var e = {
                        original: a,
                        target: a.target || a.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
                        deltaX: 0,
                        deltaZ: 0,
                        preventDefault: function () {
                            a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                            return !1
                        },
                        stopImmediatePropagation: function () {
                            a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.cancelBubble = !0
                        }
                    };
                    "mousewheel" == b ? (e.deltaY = -.025 * a.wheelDelta, a.wheelDeltaX && (e.deltaX = -.025 * a.wheelDeltaX)) : e.deltaY = a.detail;
                    return f.call(c, e)
                }, e)
            }

            function q(c, b, f) {
                var e, d;
                0 == c.deltaMode ? (e = -Math.floor(c.deltaX * (a.opt.mousescrollstep / 54)), d = -Math.floor(c.deltaY * (a.opt.mousescrollstep / 54))) : 1 == c.deltaMode && (e = -Math.floor(c.deltaX * a.opt.mousescrollstep), d = -Math.floor(c.deltaY * a.opt.mousescrollstep));
                b && (a.opt.oneaxismousemode && 0 == e && d) && (e = d, d = 0);
                e && (a.scrollmom && a.scrollmom.stop(), a.lastdeltax += e, a.debounced("mousewheelx", function () {
                    var c = a.lastdeltax;
                    a.lastdeltax = 0;
                    a.rail.drag || a.doScrollLeftBy(c)
                }, 15));
                if (d) {
                    if (a.opt.nativeparentscrolling && f && !a.ispage && !a.zoomactive)
                        if (0 > d) {
                            if (a.getScrollTop() >= a.page.maxh) return !0
                        } else if (0 >= a.getScrollTop()) return !0;
                    a.scrollmom && a.scrollmom.stop();
                    a.lastdeltay += d;
                    a.debounced("mousewheely", function () {
                        var c = a.lastdeltay;
                        a.lastdeltay = 0;
                        a.rail.drag || a.doScrollBy(c)
                    }, 15)
                }
                c.stopImmediatePropagation();
                return c.preventDefault()
            }
            var a = this;
            this.version = "3.5.4";
            this.name = "nicescroll";
            this.me = b;
            this.opt = {
                doc: e("body"),
                win: !1
            };
            e.extend(this.opt, G);
            this.opt.snapbackspeed = 80;
            if (g)
                for (var p in a.opt) "undefined" != typeof g[p] && (a.opt[p] = g[p]);
            this.iddoc = (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
            this.ispage = /^BODY|HTML/.test(a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName);
            this.haswrapper = !1 !== a.opt.win;
            this.win = a.opt.win || (this.ispage ? e(window) : this.doc);
            this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
            this.body = e("body");
            this.iframe = this.isfixed = this.viewport = !1;
            this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
            this.istextarea = "TEXTAREA" == this.win[0].nodeName;
            this.forcescreen = !1;
            this.canshowonmouseevent = "scroll" != a.opt.autohidemode;
            this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
            this.scroll = {
                x: 0,
                y: 0
            };
            this.scrollratio = {
                x: 0,
                y: 0
            };
            this.cursorheight = 20;
            this.scrollvaluemax = 0;
            this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.isrtlmode = !1;
            do this.id = "ascrail" + K++; while (document.getElementById(this.id));
            this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
            this.visibility = !0;
            this.hidden = this.locked = !1;
            this.cursoractive = !0;
            this.wheelprevented = !1;
            this.overflowx = a.opt.overflowx;
            this.overflowy = a.opt.overflowy;
            this.nativescrollingarea = !1;
            this.checkarea = 0;
            this.events = [];
            this.saved = {};
            this.delaylist = {};
            this.synclist = {};
            this.lastdeltay = this.lastdeltax = 0;
            this.detected = M();
            var d = e.extend({}, this.detected);
            this.ishwscroll = (this.canhwscroll = d.hastransform && a.opt.hwacceleration) && a.haswrapper;
            this.istouchcapable = !1;
            d.cantouch && (d.ischrome && !d.isios && !d.isandroid) && (this.istouchcapable = !0, d.cantouch = !1);
            d.cantouch && (d.ismozilla && !d.isios && !d.isandroid) && (this.istouchcapable = !0, d.cantouch = !1);
            a.opt.enablemouselockapi || (d.hasmousecapture = !1, d.haspointerlock = !1);
            this.delayed = function (c, b, f, e) {
                var d = a.delaylist[c],
                    h = (new Date).getTime();
                if (!e && d && d.tt) return !1;
                d && d.tt && clearTimeout(d.tt);
                if (d && d.last + f > h && !d.tt) a.delaylist[c] = {
                    last: h + f,
                    tt: setTimeout(function () {
                        a && (a.delaylist[c].tt = 0, b.call())
                    }, f)
                };
                else if (!d || !d.tt) a.delaylist[c] = {
                    last: h,
                    tt: 0
                }, setTimeout(function () {
                    b.call()
                }, 0)
            };
            this.debounced = function (c, b, f) {
                var d = a.delaylist[c];
                (new Date).getTime();
                a.delaylist[c] = b;
                d || setTimeout(function () {
                    var b = a.delaylist[c];
                    a.delaylist[c] = !1;
                    b.call()
                }, f)
            };
            var r = !1;
            this.synched = function (c, b) {
                a.synclist[c] = b;
                (function () {
                    r || (s(function () {
                        r = !1;
                        for (c in a.synclist) {
                            var b = a.synclist[c];
                            b && b.call(a);
                            a.synclist[c] = !1
                        }
                    }), r = !0)
                })();
                return c
            };
            this.unsynched = function (c) {
                a.synclist[c] && (a.synclist[c] = !1)
            };
            this.css = function (c, b) {
                for (var f in b) a.saved.css.push([c, f, c.css(f)]), c.css(f, b[f])
            };
            this.scrollTop = function (c) {
                return "undefined" == typeof c ? a.getScrollTop() : a.setScrollTop(c)
            };
            this.scrollLeft = function (c) {
                return "undefined" == typeof c ? a.getScrollLeft() : a.setScrollLeft(c)
            };
            BezierClass = function (a, b, f, d, e, h, k) {
                this.st = a;
                this.ed = b;
                this.spd = f;
                this.p1 = d || 0;
                this.p2 = e || 1;
                this.p3 = h || 0;
                this.p4 = k || 1;
                this.ts = (new Date).getTime();
                this.df = this.ed - this.st
            };
            BezierClass.prototype = {
                B2: function (a) {
                    return 3 * a * a * (1 - a)
                },
                B3: function (a) {
                    return 3 * a * (1 - a) * (1 - a)
                },
                B4: function (a) {
                    return (1 - a) * (1 - a) * (1 - a)
                },
                getNow: function () {
                    var a = 1 - ((new Date).getTime() - this.ts) / this.spd,
                        b = this.B2(a) + this.B3(a) + this.B4(a);
                    return 0 > a ? this.ed : this.st + Math.round(this.df * b)
                },
                update: function (a, b) {
                    this.st = this.getNow();
                    this.ed = a;
                    this.spd = b;
                    this.ts = (new Date).getTime();
                    this.df = this.ed - this.st;
                    return this
                }
            };
            if (this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                };
                d.hastranslate3d && d.isios && this.doc.css("-webkit-backface-visibility", "hidden");
                var t = function () {
                    var c = a.doc.css(d.trstyle);
                    return c && "matrix" == c.substr(0, 6) ? c.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
                };
                this.getScrollTop = function (c) {
                    if (!c) {
                        if (c = t()) return 16 == c.length ? -c[13] : -c[5];
                        if (a.timerscroll && a.timerscroll.bz) return a.timerscroll.bz.getNow()
                    }
                    return a.doc.translate.y
                };
                this.getScrollLeft = function (c) {
                    if (!c) {
                        if (c = t()) return 16 == c.length ? -c[12] : -c[4];
                        if (a.timerscroll && a.timerscroll.bh) return a.timerscroll.bh.getNow()
                    }
                    return a.doc.translate.x
                };
                this.notifyScrollEvent = document.createEvent ? function (a) {
                    var b = document.createEvent("UIEvents");
                    b.initUIEvent("scroll", !1, !0, window, 1);
                    a.dispatchEvent(b)
                } : document.fireEvent ? function (a) {
                    var b = document.createEventObject();
                    a.fireEvent("onscroll");
                    b.cancelBubble = !0
                } : function (a, b) {};
                d.hastranslate3d && a.opt.enabletranslate3d ? (this.setScrollTop = function (c, b) {
                    a.doc.translate.y = c;
                    a.doc.translate.ty = -1 * c + "px";
                    a.doc.css(d.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                    b || a.notifyScrollEvent(a.win[0])
                }, this.setScrollLeft = function (c, b) {
                    a.doc.translate.x = c;
                    a.doc.translate.tx = -1 * c + "px";
                    a.doc.css(d.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                    b || a.notifyScrollEvent(a.win[0])
                }) : (this.setScrollTop = function (c, b) {
                    a.doc.translate.y = c;
                    a.doc.translate.ty = -1 * c + "px";
                    a.doc.css(d.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                    b || a.notifyScrollEvent(a.win[0])
                }, this.setScrollLeft = function (c, b) {
                    a.doc.translate.x = c;
                    a.doc.translate.tx = -1 * c + "px";
                    a.doc.css(d.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                    b || a.notifyScrollEvent(a.win[0])
                })
            } else this.getScrollTop = function () {
                return a.docscroll.scrollTop()
            }, this.setScrollTop = function (c) {
                return a.docscroll.scrollTop(c)
            }, this.getScrollLeft = function () {
                return a.docscroll.scrollLeft()
            }, this.setScrollLeft = function (c) {
                return a.docscroll.scrollLeft(c)
            };
            this.getTarget = function (a) {
                return !a ? !1 : a.target ? a.target : a.srcElement ? a.srcElement : !1
            };
            this.hasParent = function (a, b) {
                if (!a) return !1;
                for (var f = a.target || a.srcElement || a || !1; f && f.id != b;) f = f.parentNode || !1;
                return !1 !== f
            };
            var w = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getOffset = function () {
                if (a.isfixed) return {
                    top: parseFloat(a.win.css("top")),
                    left: parseFloat(a.win.css("left"))
                };
                if (!a.viewport) return a.win.offset();
                var c = a.win.offset(),
                    b = a.viewport.offset();
                return {
                    top: c.top - b.top + a.viewport.scrollTop(),
                    left: c.left - b.left + a.viewport.scrollLeft()
                }
            };
            this.updateScrollBar = function (c) {
                if (a.ishwscroll) a.rail.css({
                    height: a.win.innerHeight()
                }), a.railh && a.railh.css({
                    width: a.win.innerWidth()
                });
                else {
                    var b = a.getOffset(),
                        f = b.top,
                        d = b.left,
                        f = f + k(a.win, "border-top-width", !0);
                    a.win.outerWidth();
                    a.win.innerWidth();
                    var d = d + (a.rail.align ? a.win.outerWidth() - k(a.win, "border-right-width") - a.rail.width : k(a.win, "border-left-width")),
                        e = a.opt.railoffset;
                    e && (e.top && (f += e.top), a.rail.align && e.left && (d += e.left));
                    a.locked || a.rail.css({
                        top: f,
                        left: d,
                        height: c ? c.h : a.win.innerHeight()
                    });
                    a.zoom && a.zoom.css({
                        top: f + 1,
                        left: 1 == a.rail.align ? d - 20 : d + a.rail.width + 4
                    });
                    a.railh && !a.locked && (f = b.top, d = b.left, c = a.railh.align ? f + k(a.win, "border-top-width", !0) + a.win.innerHeight() - a.railh.height : f + k(a.win, "border-top-width", !0), d += k(a.win, "border-left-width"), a.railh.css({
                        top: c,
                        left: d,
                        width: a.railh.width
                    }))
                }
            };
            this.doRailClick = function (c, b, f) {
                var d;
                a.locked || (a.cancelEvent(c), b ? (b = f ? a.doScrollLeft : a.doScrollTop, d = f ? (c.pageX - a.railh.offset().left - a.cursorwidth / 2) * a.scrollratio.x : (c.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y, b(d)) : (b = f ? a.doScrollLeftBy : a.doScrollBy, d = f ? a.scroll.x : a.scroll.y, c = f ? c.pageX - a.railh.offset().left : c.pageY - a.rail.offset().top, f = f ? a.view.w : a.view.h, d >= c ? b(f) : b(-f)))
            };
            a.hasanimationframe = s;
            a.hascancelanimationframe = v;
            a.hasanimationframe ? a.hascancelanimationframe || (v = function () {
                a.cancelAnimationFrame = !0
            }) : (s = function (a) {
                return setTimeout(a, 15 - Math.floor(+new Date / 1e3) % 16)
            }, v = clearInterval);
            this.init = function () {
                a.saved.css = [];
                if (d.isie7mobile || d.isoperamini) return !0;
                d.hasmstouch && a.css(a.ispage ? e("html") : a.win, {
                    "-ms-touch-action": "none"
                });
                a.zindex = "auto";
                a.zindex = !a.ispage && "auto" == a.opt.zindex ? h() || "auto" : a.opt.zindex;
                !a.ispage && "auto" != a.zindex && a.zindex > x && (x = a.zindex);
                a.isie && (0 == a.zindex && "auto" == a.opt.zindex) && (a.zindex = "auto");
                if (!a.ispage || !d.cantouch && !d.isieold && !d.isie9mobile) {
                    var c = a.docscroll;
                    a.ispage && (c = a.haswrapper ? a.win : a.doc);
                    d.isie9mobile || a.css(c, {
                        "overflow-y": "hidden"
                    });
                    a.ispage && d.isie7 && ("BODY" == a.doc[0].nodeName ? a.css(e("html"), {
                        "overflow-y": "hidden"
                    }) : "HTML" == a.doc[0].nodeName && a.css(e("body"), {
                        "overflow-y": "hidden"
                    }));
                    d.isios && (!a.ispage && !a.haswrapper) && a.css(e("body"), {
                        "-webkit-overflow-scrolling": "touch"
                    });
                    var b = e(document.createElement("div"));
                    b.css({
                        position: "relative",
                        top: 0,
                        "float": "right",
                        width: a.opt.cursorwidth,
                        height: "0px",
                        "background-color": a.opt.cursorcolor,
                        border: a.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": a.opt.cursorborderradius,
                        "-moz-border-radius": a.opt.cursorborderradius,
                        "border-radius": a.opt.cursorborderradius
                    });
                    b.hborder = parseFloat(b.outerHeight() - b.innerHeight());
                    a.cursor = b;
                    var f = e(document.createElement("div"));
                    f.attr("id", a.id);
                    f.addClass("nicescroll-rails");
                    var u, k, g = ["left", "right"],
                        l;
                    for (l in g) k = g[l], (u = a.opt.railpadding[k]) ? f.css("padding-" + k, u + "px") : a.opt.railpadding[k] = 0;
                    f.append(b);
                    f.width = Math.max(parseFloat(a.opt.cursorwidth), b.outerWidth()) + a.opt.railpadding.left + a.opt.railpadding.right;
                    f.css({
                        width: f.width + "px",
                        zIndex: a.zindex,
                        background: a.opt.background,
                        cursor: "default"
                    });
                    f.visibility = !0;
                    f.scrollable = !0;
                    f.align = "left" == a.opt.railalign ? 0 : 1;
                    a.rail = f;
                    b = a.rail.drag = !1;
                    a.opt.boxzoom && (!a.ispage && !d.isieold) && (b = document.createElement("div"), a.bind(b, "click", a.doZoom), a.zoom = e(b), a.zoom.css({
                        cursor: "pointer",
                        "z-index": a.zindex,
                        backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    }), a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom), d.cantouch && a.opt.gesturezoom && (a.ongesturezoom = function (c) {
                        1.5 < c.scale && a.doZoomIn(c);
                        .8 > c.scale && a.doZoomOut(c);
                        return a.cancelEvent(c)
                    }, a.bind(a.win, "gestureend", a.ongesturezoom)));
                    a.railh = !1;
                    if (a.opt.horizrailenabled) {
                        a.css(c, {
                            "overflow-x": "hidden"
                        });
                        b = e(document.createElement("div"));
                        b.css({
                            position: "relative",
                            top: 0,
                            height: a.opt.cursorwidth,
                            width: "0px",
                            "background-color": a.opt.cursorcolor,
                            border: a.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": a.opt.cursorborderradius,
                            "-moz-border-radius": a.opt.cursorborderradius,
                            "border-radius": a.opt.cursorborderradius
                        });
                        b.wborder = parseFloat(b.outerWidth() - b.innerWidth());
                        a.cursorh = b;
                        var m = e(document.createElement("div"));
                        m.attr("id", a.id + "-hr");
                        m.addClass("nicescroll-rails");
                        m.height = Math.max(parseFloat(a.opt.cursorwidth), b.outerHeight());
                        m.css({
                            height: m.height + "px",
                            zIndex: a.zindex,
                            background: a.opt.background
                        });
                        m.append(b);
                        m.visibility = !0;
                        m.scrollable = !0;
                        m.align = "top" == a.opt.railvalign ? 0 : 1;
                        a.railh = m;
                        a.railh.drag = !1
                    }
                    a.ispage ? (f.css({
                        position: "fixed",
                        top: "0px",
                        height: "100%"
                    }), f.align ? f.css({
                        right: "0px"
                    }) : f.css({
                        left: "0px"
                    }), a.body.append(f), a.railh && (m.css({
                        position: "fixed",
                        left: "0px",
                        width: "100%"
                    }), m.align ? m.css({
                        bottom: "0px"
                    }) : m.css({
                        top: "0px"
                    }), a.body.append(m))) : (a.ishwscroll ? ("static" == a.win.css("position") && a.css(a.win, {
                        position: "relative"
                    }), c = "HTML" == a.win[0].nodeName ? a.body : a.win, a.zoom && (a.zoom.css({
                        position: "absolute",
                        top: 1,
                        right: 0,
                        "margin-right": f.width + 4
                    }), c.append(a.zoom)), f.css({
                        position: "absolute",
                        top: 0
                    }), f.align ? f.css({
                        right: 0
                    }) : f.css({
                        left: 0
                    }), c.append(f), m && (m.css({
                        position: "absolute",
                        left: 0,
                        bottom: 0
                    }), m.align ? m.css({
                        bottom: 0
                    }) : m.css({
                        top: 0
                    }), c.append(m))) : (a.isfixed = "fixed" == a.win.css("position"), c = a.isfixed ? "fixed" : "absolute", a.isfixed || (a.viewport = a.getViewport(a.win[0])), a.viewport && (a.body = a.viewport, !1 == /fixed|relative|absolute/.test(a.viewport.css("position")) && a.css(a.viewport, {
                        position: "relative"
                    })), f.css({
                        position: c
                    }), a.zoom && a.zoom.css({
                        position: c
                    }), a.updateScrollBar(), a.body.append(f), a.zoom && a.body.append(a.zoom), a.railh && (m.css({
                        position: c
                    }), a.body.append(m))), d.isios && a.css(a.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }), d.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"), d.iswebkit && a.opt.disableoutline && a.win.css({
                        outline: "none"
                    }));
                    !1 === a.opt.autohidemode ? (a.autohidedom = !1, a.rail.css({
                        opacity: a.opt.cursoropacitymax
                    }), a.railh && a.railh.css({
                        opacity: a.opt.cursoropacitymax
                    })) : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode ? (a.autohidedom = e().add(a.rail), d.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)), a.railh && (a.autohidedom = a.autohidedom.add(a.railh)), a.railh && d.isie8 && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "scroll" == a.opt.autohidemode ? (a.autohidedom = e().add(a.rail), a.railh && (a.autohidedom = a.autohidedom.add(a.railh))) : "cursor" == a.opt.autohidemode ? (a.autohidedom = e().add(a.cursor), a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "hidden" == a.opt.autohidemode && (a.autohidedom = !1, a.hide(), a.locked = !1);
                    if (d.isie9mobile) a.scrollmom = new H(a), a.onmangotouch = function (c) {
                        c = a.getScrollTop();
                        var b = a.getScrollLeft();
                        if (c == a.scrollmom.lastscrolly && b == a.scrollmom.lastscrollx) return !0;
                        var f = c - a.mangotouch.sy,
                            d = b - a.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)))) {
                            var n = 0 > f ? -1 : 1,
                                e = 0 > d ? -1 : 1,
                                h = +new Date;
                            a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
                            80 < h - a.mangotouch.tm || a.mangotouch.dry != n || a.mangotouch.drx != e ? (a.scrollmom.stop(), a.scrollmom.reset(b, c), a.mangotouch.sy = c, a.mangotouch.ly = c, a.mangotouch.sx = b, a.mangotouch.lx = b, a.mangotouch.dry = n, a.mangotouch.drx = e, a.mangotouch.tm = h) : (a.scrollmom.stop(), a.scrollmom.update(a.mangotouch.sx - d, a.mangotouch.sy - f), a.mangotouch.tm = h, f = Math.max(Math.abs(a.mangotouch.ly - c), Math.abs(a.mangotouch.lx - b)), a.mangotouch.ly = c, a.mangotouch.lx = b, 2 < f && (a.mangotouch.lazy = setTimeout(function () {
                                a.mangotouch.lazy = !1;
                                a.mangotouch.dry = 0;
                                a.mangotouch.drx = 0;
                                a.mangotouch.tm = 0;
                                a.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }, f = a.getScrollTop(), m = a.getScrollLeft(), a.mangotouch = {
                        sy: f,
                        ly: f,
                        dry: 0,
                        sx: m,
                        lx: m,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    }, a.bind(a.docscroll, "scroll", a.onmangotouch);
                    else {
                        if (d.cantouch || a.istouchcapable || a.opt.touchbehavior || d.hasmstouch) {
                            a.scrollmom = new H(a);
                            a.ontouchstart = function (c) {
                                if (c.pointerType && 2 != c.pointerType) return !1;
                                a.hasmoving = !1;
                                if (!a.locked) {
                                    if (d.hasmstouch)
                                        for (var b = c.target ? c.target : !1; b;) {
                                            var f = e(b).getNiceScroll();
                                            if (0 < f.length && f[0].me == a.me) break;
                                            if (0 < f.length) return !1;
                                            if ("DIV" == b.nodeName && b.id == a.id) break;
                                            b = b.parentNode ? b.parentNode : !1
                                        }
                                    a.cancelScroll();
                                    if ((b = a.getTarget(c)) && /INPUT/i.test(b.nodeName) && /range/i.test(b.type)) return a.stopPropagation(c);
                                    !("clientX" in c) && "changedTouches" in c && (c.clientX = c.changedTouches[0].clientX, c.clientY = c.changedTouches[0].clientY);
                                    a.forcescreen && (f = c, c = {
                                        original: c.original ? c.original : c
                                    }, c.clientX = f.screenX, c.clientY = f.screenY);
                                    a.rail.drag = {
                                        x: c.clientX,
                                        y: c.clientY,
                                        sx: a.scroll.x,
                                        sy: a.scroll.y,
                                        st: a.getScrollTop(),
                                        sl: a.getScrollLeft(),
                                        pt: 2,
                                        dl: !1
                                    };
                                    if (a.ispage || !a.opt.directionlockdeadzone) a.rail.drag.dl = "f";
                                    else {
                                        var f = e(window).width(),
                                            n = e(window).height(),
                                            h = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                            k = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                                            n = Math.max(0, k - n),
                                            f = Math.max(0, h - f);
                                        a.rail.drag.ck = !a.rail.scrollable && a.railh.scrollable ? 0 < n ? "v" : !1 : a.rail.scrollable && !a.railh.scrollable ? 0 < f ? "h" : !1 : !1;
                                        a.rail.drag.ck || (a.rail.drag.dl = "f")
                                    }
                                    a.opt.touchbehavior && (a.isiframe && d.isie) && (f = a.win.position(), a.rail.drag.x += f.left, a.rail.drag.y += f.top);
                                    a.hasmoving = !1;
                                    a.lastmouseup = !1;
                                    a.scrollmom.reset(c.clientX, c.clientY);
                                    if (!d.cantouch && !this.istouchcapable && !d.hasmstouch) {
                                        if (!b || !/INPUT|SELECT|TEXTAREA/i.test(b.nodeName)) return !a.ispage && d.hasmousecapture && b.setCapture(), a.opt.touchbehavior ? (b.onclick && !b._onclick && (b._onclick = b.onclick, b.onclick = function (c) {
                                            if (a.hasmoving) return !1;
                                            b._onclick.call(this, c)
                                        }), a.cancelEvent(c)) : a.stopPropagation(c);
                                        /SUBMIT|CANCEL|BUTTON/i.test(e(b).attr("type")) && (pc = {
                                            tg: b,
                                            click: !1
                                        }, a.preventclick = pc)
                                    }
                                }
                            };
                            a.ontouchend = function (c) {
                                if (c.pointerType && 2 != c.pointerType) return !1;
                                if (a.rail.drag && 2 == a.rail.drag.pt && (a.scrollmom.doMomentum(), a.rail.drag = !1, a.hasmoving && (a.lastmouseup = !0, a.hideCursor(), d.hasmousecapture && document.releaseCapture(), !d.cantouch))) return a.cancelEvent(c)
                            };
                            var q = a.opt.touchbehavior && a.isiframe && !d.hasmousecapture;
                            a.ontouchmove = function (c, b) {
                                if (c.pointerType && 2 != c.pointerType) return !1;
                                if (a.rail.drag && 2 == a.rail.drag.pt) {
                                    if (d.cantouch && "undefined" == typeof c.original) return !0;
                                    a.hasmoving = !0;
                                    a.preventclick && !a.preventclick.click && (a.preventclick.click = a.preventclick.tg.onclick || !1, a.preventclick.tg.onclick = a.onpreventclick);
                                    c = e.extend({
                                        original: c
                                    }, c);
                                    "changedTouches" in c && (c.clientX = c.changedTouches[0].clientX, c.clientY = c.changedTouches[0].clientY);
                                    if (a.forcescreen) {
                                        var f = c;
                                        c = {
                                            original: c.original ? c.original : c
                                        };
                                        c.clientX = f.screenX;
                                        c.clientY = f.screenY
                                    }
                                    f = ofy = 0;
                                    if (q && !b) {
                                        var n = a.win.position(),
                                            f = -n.left;
                                        ofy = -n.top
                                    }
                                    var h = c.clientY + ofy,
                                        n = h - a.rail.drag.y,
                                        k = c.clientX + f,
                                        u = k - a.rail.drag.x,
                                        g = a.rail.drag.st - n;
                                    a.ishwscroll && a.opt.bouncescroll ? 0 > g ? g = Math.round(g / 2) : g > a.page.maxh && (g = a.page.maxh + Math.round((g - a.page.maxh) / 2)) : (0 > g && (h = g = 0), g > a.page.maxh && (g = a.page.maxh, h = 0));
                                    if (a.railh && a.railh.scrollable) {
                                        var l = a.rail.drag.sl - u;
                                        a.ishwscroll && a.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > a.page.maxw && (l = a.page.maxw + Math.round((l - a.page.maxw) / 2)) : (0 > l && (k = l = 0), l > a.page.maxw && (l = a.page.maxw, k = 0))
                                    }
                                    f = !1;
                                    if (a.rail.drag.dl) f = !0, "v" == a.rail.drag.dl ? l = a.rail.drag.sl : "h" == a.rail.drag.dl && (g = a.rail.drag.st);
                                    else {
                                        var n = Math.abs(n),
                                            u = Math.abs(u),
                                            m = a.opt.directionlockdeadzone;
                                        if ("v" == a.rail.drag.ck) {
                                            if (n > m && u <= .3 * n) return a.rail.drag = !1, !0;
                                            u > m && (a.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()))
                                        } else if ("h" == a.rail.drag.ck) {
                                            if (u > m && n <= .3 * u) return a.rail.drag = !1, !0;
                                            n > m && (a.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()))
                                        }
                                    }
                                    a.synched("touchmove", function () {
                                        a.rail.drag && 2 == a.rail.drag.pt && (a.prepareTransition && a.prepareTransition(0), a.rail.scrollable && a.setScrollTop(g), a.scrollmom.update(k, h), a.railh && a.railh.scrollable ? (a.setScrollLeft(l), a.showCursor(g, l)) : a.showCursor(g), d.isie10 && document.selection.clear())
                                    });
                                    d.ischrome && a.istouchcapable && (f = !1);
                                    if (f) return a.cancelEvent(c)
                                }
                            }
                        }
                        a.onmousedown = function (c, b) {
                            if (!(a.rail.drag && 1 != a.rail.drag.pt)) {
                                if (a.locked) return a.cancelEvent(c);
                                a.cancelScroll();
                                a.rail.drag = {
                                    x: c.clientX,
                                    y: c.clientY,
                                    sx: a.scroll.x,
                                    sy: a.scroll.y,
                                    pt: 1,
                                    hr: !!b
                                };
                                var f = a.getTarget(c);
                                !a.ispage && d.hasmousecapture && f.setCapture();
                                a.isiframe && !d.hasmousecapture && (a.saved.csspointerevents = a.doc.css("pointer-events"), a.css(a.doc, {
                                    "pointer-events": "none"
                                }));
                                a.hasmoving = !1;
                                return a.cancelEvent(c)
                            }
                        };
                        a.onmouseup = function (c) {
                            if (a.rail.drag && (d.hasmousecapture && document.releaseCapture(), a.isiframe && !d.hasmousecapture && a.doc.css("pointer-events", a.saved.csspointerevents), 1 == a.rail.drag.pt)) return a.rail.drag = !1, a.hasmoving && a.triggerScrollEnd(), a.cancelEvent(c)
                        };
                        a.onmousemove = function (c) {
                            if (a.rail.drag && 1 == a.rail.drag.pt) {
                                if (d.ischrome && 0 == c.which) return a.onmouseup(c);
                                a.cursorfreezed = !0;
                                a.hasmoving = !0;
                                if (a.rail.drag.hr) {
                                    a.scroll.x = a.rail.drag.sx + (c.clientX - a.rail.drag.x);
                                    0 > a.scroll.x && (a.scroll.x = 0);
                                    var b = a.scrollvaluemaxw;
                                    a.scroll.x > b && (a.scroll.x = b)
                                } else a.scroll.y = a.rail.drag.sy + (c.clientY - a.rail.drag.y), 0 > a.scroll.y && (a.scroll.y = 0), b = a.scrollvaluemax, a.scroll.y > b && (a.scroll.y = b);
                                a.synched("mousemove", function () {
                                    a.rail.drag && 1 == a.rail.drag.pt && (a.showCursor(), a.rail.drag.hr ? a.doScrollLeft(Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed))
                                });
                                return a.cancelEvent(c)
                            }
                        };
                        if (d.cantouch || a.opt.touchbehavior) a.onpreventclick = function (c) {
                            if (a.preventclick) return a.preventclick.tg.onclick = a.preventclick.click, a.preventclick = !1, a.cancelEvent(c)
                        }, a.bind(a.win, "mousedown", a.ontouchstart), a.onclick = d.isios ? !1 : function (c) {
                            return a.lastmouseup ? (a.lastmouseup = !1, a.cancelEvent(c)) : !0
                        }, a.opt.grabcursorenabled && d.cursorgrabvalue && (a.css(a.ispage ? a.doc : a.win, {
                            cursor: d.cursorgrabvalue
                        }), a.css(a.rail, {
                            cursor: d.cursorgrabvalue
                        }));
                        else {
                            var p = function (c) {
                                if (a.selectiondrag) {
                                    if (c) {
                                        var b = a.win.outerHeight();
                                        c = c.pageY - a.selectiondrag.top;
                                        0 < c && c < b && (c = 0);
                                        c >= b && (c -= b);
                                        a.selectiondrag.df = c
                                    }
                                    0 != a.selectiondrag.df && (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)), a.debounced("doselectionscroll", function () {
                                        p()
                                    }, 50))
                                }
                            };
                            a.hasTextSelected = "getSelection" in document ? function () {
                                return 0 < document.getSelection().rangeCount
                            } : "selection" in document ? function () {
                                return "None" != document.selection.type
                            } : function () {
                                return !1
                            };
                            a.onselectionstart = function (c) {
                                a.ispage || (a.selectiondrag = a.win.offset())
                            };
                            a.onselectionend = function (c) {
                                a.selectiondrag = !1
                            };
                            a.onselectiondrag = function (c) {
                                a.selectiondrag && a.hasTextSelected() && a.debounced("selectionscroll", function () {
                                    p(c)
                                }, 250)
                            }
                        }
                        d.hasmstouch && (a.css(a.rail, {
                            "-ms-touch-action": "none"
                        }), a.css(a.cursor, {
                            "-ms-touch-action": "none"
                        }), a.bind(a.win, "MSPointerDown", a.ontouchstart), a.bind(document, "MSPointerUp", a.ontouchend), a.bind(document, "MSPointerMove", a.ontouchmove), a.bind(a.cursor, "MSGestureHold", function (a) {
                            a.preventDefault()
                        }), a.bind(a.cursor, "contextmenu", function (a) {
                            a.preventDefault()
                        }));
                        this.istouchcapable && (a.bind(a.win, "touchstart", a.ontouchstart), a.bind(document, "touchend", a.ontouchend), a.bind(document, "touchcancel", a.ontouchend), a.bind(document, "touchmove", a.ontouchmove));
                        a.bind(a.cursor, "mousedown", a.onmousedown);
                        a.bind(a.cursor, "mouseup", a.onmouseup);
                        a.railh && (a.bind(a.cursorh, "mousedown", function (c) {
                            a.onmousedown(c, !0)
                        }), a.bind(a.cursorh, "mouseup", a.onmouseup));
                        if (a.opt.cursordragontouch || !d.cantouch && !a.opt.touchbehavior) a.rail.css({
                            cursor: "default"
                        }), a.railh && a.railh.css({
                            cursor: "default"
                        }), a.jqbind(a.rail, "mouseenter", function () {
                            if (!a.win.is(":visible")) return !1;
                            a.canshowonmouseevent && a.showCursor();
                            a.rail.active = !0
                        }), a.jqbind(a.rail, "mouseleave", function () {
                            a.rail.active = !1;
                            a.rail.drag || a.hideCursor()
                        }), a.opt.sensitiverail && (a.bind(a.rail, "click", function (c) {
                            a.doRailClick(c, !1, !1)
                        }), a.bind(a.rail, "dblclick", function (c) {
                            a.doRailClick(c, !0, !1)
                        }), a.bind(a.cursor, "click", function (c) {
                            a.cancelEvent(c)
                        }), a.bind(a.cursor, "dblclick", function (c) {
                            a.cancelEvent(c)
                        })), a.railh && (a.jqbind(a.railh, "mouseenter", function () {
                            if (!a.win.is(":visible")) return !1;
                            a.canshowonmouseevent && a.showCursor();
                            a.rail.active = !0
                        }), a.jqbind(a.railh, "mouseleave", function () {
                            a.rail.active = !1;
                            a.rail.drag || a.hideCursor()
                        }), a.opt.sensitiverail && (a.bind(a.railh, "click", function (c) {
                            a.doRailClick(c, !1, !0)
                        }), a.bind(a.railh, "dblclick", function (c) {
                            a.doRailClick(c, !0, !0)
                        }), a.bind(a.cursorh, "click", function (c) {
                            a.cancelEvent(c)
                        }), a.bind(a.cursorh, "dblclick", function (c) {
                            a.cancelEvent(c)
                        })));
                        !d.cantouch && !a.opt.touchbehavior ? (a.bind(d.hasmousecapture ? a.win : document, "mouseup", a.onmouseup), a.bind(document, "mousemove", a.onmousemove), a.onclick && a.bind(document, "click", a.onclick), !a.ispage && a.opt.enablescrollonselection && (a.bind(a.win[0], "mousedown", a.onselectionstart), a.bind(document, "mouseup", a.onselectionend), a.bind(a.cursor, "mouseup", a.onselectionend), a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend), a.bind(document, "mousemove", a.onselectiondrag)), a.zoom && (a.jqbind(a.zoom, "mouseenter", function () {
                            a.canshowonmouseevent && a.showCursor();
                            a.rail.active = !0
                        }), a.jqbind(a.zoom, "mouseleave", function () {
                            a.rail.active = !1;
                            a.rail.drag || a.hideCursor()
                        }))) : (a.bind(d.hasmousecapture ? a.win : document, "mouseup", a.ontouchend), a.bind(document, "mousemove", a.ontouchmove), a.onclick && a.bind(document, "click", a.onclick), a.opt.cursordragontouch && (a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mousemove", a.onmousemove), a.cursorh && a.bind(a.cursorh, "mousedown", function (c) {
                            a.onmousedown(c, !0)
                        }), a.cursorh && a.bind(a.cursorh, "mousemove", a.onmousemove)));
                        a.opt.enablemousewheel && (a.isiframe || a.bind(d.isie && a.ispage ? document : a.win, "mousewheel", a.onmousewheel), a.bind(a.rail, "mousewheel", a.onmousewheel), a.railh && a.bind(a.railh, "mousewheel", a.onmousewheelhr));
                        !a.ispage && (!d.cantouch && !/HTML|^BODY/.test(a.win[0].nodeName)) && (a.win.attr("tabindex") || a.win.attr({
                            tabindex: J++
                        }), a.jqbind(a.win, "focus", function (c) {
                            y = a.getTarget(c).id || !0;
                            a.hasfocus = !0;
                            a.canshowonmouseevent && a.noticeCursor()
                        }), a.jqbind(a.win, "blur", function (c) {
                            y = !1;
                            a.hasfocus = !1
                        }), a.jqbind(a.win, "mouseenter", function (c) {
                            C = a.getTarget(c).id || !0;
                            a.hasmousefocus = !0;
                            a.canshowonmouseevent && a.noticeCursor()
                        }), a.jqbind(a.win, "mouseleave", function () {
                            C = !1;
                            a.hasmousefocus = !1;
                            a.rail.drag || a.hideCursor()
                        }))
                    }
                    a.onkeypress = function (c) {
                        if (a.locked && 0 == a.page.maxh) return !0;
                        c = c ? c : window.e;
                        var b = a.getTarget(c);
                        if (b && /INPUT|TEXTAREA|SELECT|OPTION/.test(b.nodeName) && (!b.getAttribute("type") && !b.type || !/submit|button|cancel/i.tp) || e(b).attr("contenteditable")) return !0;
                        if (a.hasfocus || a.hasmousefocus && !y || a.ispage && !y && !C) {
                            b = c.keyCode;
                            if (a.locked && 27 != b) return a.cancelEvent(c);
                            var f = c.ctrlKey || !1,
                                n = c.shiftKey || !1,
                                d = !1;
                            switch (b) {
                                case 38:
                                case 63233:
                                    a.doScrollBy(72);
                                    d = !0;
                                    break;
                                case 40:
                                case 63235:
                                    a.doScrollBy(-72);
                                    d = !0;
                                    break;
                                case 37:
                                case 63232:
                                    a.railh && (f ? a.doScrollLeft(0) : a.doScrollLeftBy(72), d = !0);
                                    break;
                                case 39:
                                case 63234:
                                    a.railh && (f ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72), d = !0);
                                    break;
                                case 33:
                                case 63276:
                                    a.doScrollBy(a.view.h);
                                    d = !0;
                                    break;
                                case 34:
                                case 63277:
                                    a.doScrollBy(-a.view.h);
                                    d = !0;
                                    break;
                                case 36:
                                case 63273:
                                    a.railh && f ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                                    d = !0;
                                    break;
                                case 35:
                                case 63275:
                                    a.railh && f ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh);
                                    d = !0;
                                    break;
                                case 32:
                                    a.opt.spacebarenabled && (n ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h), d = !0);
                                    break;
                                case 27:
                                    a.zoomactive && (a.doZoom(), d = !0)
                            }
                            if (d) return a.cancelEvent(c)
                        }
                    };
                    a.opt.enablekeyboard && a.bind(document, d.isopera && !d.isopera12 ? "keypress" : "keydown", a.onkeypress);
                    a.bind(document, "keydown", function (c) {
                        c.ctrlKey && (a.wheelprevented = !0)
                    });
                    a.bind(document, "keyup", function (c) {
                        c.ctrlKey || (a.wheelprevented = !1)
                    });
                    a.bind(window, "resize", a.lazyResize);
                    a.bind(window, "orientationchange", a.lazyResize);
                    a.bind(window, "load", a.lazyResize);
                    if (d.ischrome && !a.ispage && !a.haswrapper) {
                        var r = a.win.attr("style"),
                            f = parseFloat(a.win.css("width")) + 1;
                        a.win.css("width", f);
                        a.synched("chromefix", function () {
                            a.win.attr("style", r)
                        })
                    }
                    a.onAttributeChange = function (c) {
                        a.lazyResize(250)
                    };
                    !a.ispage && !a.haswrapper && (!1 !== z ? (a.observer = new z(function (c) {
                        c.forEach(a.onAttributeChange)
                    }), a.observer.observe(a.win[0], {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }), a.observerremover = new z(function (c) {
                        c.forEach(function (c) {
                            if (0 < c.removedNodes.length)
                                for (var b in c.removedNodes)
                                    if (c.removedNodes[b] == a.win[0]) return a.remove()
                        })
                    }), a.observerremover.observe(a.win[0].parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (a.bind(a.win, d.isie && !d.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange), d.isie9 && a.win[0].attachEvent("onpropertychange", a.onAttributeChange), a.bind(a.win, "DOMNodeRemoved", function (c) {
                        c.target == a.win[0] && a.remove()
                    })));
                    !a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
                    a.istextarea && a.bind(a.win, "mouseup", a.lazyResize);
                    a.lazyResize(30)
                }
                if ("IFRAME" == this.doc[0].nodeName) {
                    var I = function (c) {
                        a.iframexd = !1;
                        try {
                            var b = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                        } catch (f) {
                            a.iframexd = !0, b = !1
                        }
                        if (a.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                        a.forcescreen = !0;
                        a.isiframe && (a.iframe = {
                            doc: e(b),
                            html: a.doc.contents().find("html")[0],
                            body: a.doc.contents().find("body")[0]
                        }, a.getContentSize = function () {
                            return {
                                w: Math.max(a.iframe.html.scrollWidth, a.iframe.body.scrollWidth),
                                h: Math.max(a.iframe.html.scrollHeight, a.iframe.body.scrollHeight)
                            }
                        }, a.docscroll = e(a.iframe.body));
                        !d.isios && (a.opt.iframeautoresize && !a.isiframe) && (a.win.scrollTop(0), a.doc.height(""), c = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight), a.doc.height(c));
                        a.lazyResize(30);
                        d.isie7 && a.css(e(a.iframe.html), {
                            "overflow-y": "hidden"
                        });
                        a.css(e(a.iframe.body), {
                            "overflow-y": "hidden"
                        });
                        d.isios && a.haswrapper && a.css(e(b.body), {
                            "-webkit-transform": "translate3d(0,0,0)"
                        });
                        "contentWindow" in this ? a.bind(this.contentWindow, "scroll", a.onscroll) : a.bind(b, "scroll", a.onscroll);
                        a.opt.enablemousewheel && a.bind(b, "mousewheel", a.onmousewheel);
                        a.opt.enablekeyboard && a.bind(b, d.isopera ? "keypress" : "keydown", a.onkeypress);
                        if (d.cantouch || a.opt.touchbehavior) a.bind(b, "mousedown", a.ontouchstart), a.bind(b, "mousemove", function (c) {
                            a.ontouchmove(c, !0)
                        }), a.opt.grabcursorenabled && d.cursorgrabvalue && a.css(e(b.body), {
                            cursor: d.cursorgrabvalue
                        });
                        a.bind(b, "mouseup", a.ontouchend);
                        a.zoom && (a.opt.dblclickzoom && a.bind(b, "dblclick", a.doZoom), a.ongesturezoom && a.bind(b, "gestureend", a.ongesturezoom))
                    };
                    this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
                        I.call(a.doc[0], !1)
                    }, 500);
                    a.bind(this.doc, "load", I)
                }
            };
            this.showCursor = function (c, b) {
                a.cursortimeout && (clearTimeout(a.cursortimeout), a.cursortimeout = 0);
                if (a.rail) {
                    a.autohidedom && (a.autohidedom.stop().css({
                        opacity: a.opt.cursoropacitymax
                    }), a.cursoractive = !0);
                    if (!a.rail.drag || 1 != a.rail.drag.pt) "undefined" != typeof c && !1 !== c && (a.scroll.y = Math.round(1 * c / a.scrollratio.y)), "undefined" != typeof b && (a.scroll.x = Math.round(1 * b / a.scrollratio.x));
                    a.cursor.css({
                        height: a.cursorheight,
                        top: a.scroll.y
                    });
                    a.cursorh && (!a.rail.align && a.rail.visibility ? a.cursorh.css({
                        width: a.cursorwidth,
                        left: a.scroll.x + a.rail.width
                    }) : a.cursorh.css({
                        width: a.cursorwidth,
                        left: a.scroll.x
                    }), a.cursoractive = !0);
                    a.zoom && a.zoom.stop().css({
                        opacity: a.opt.cursoropacitymax
                    })
                }
            };
            this.hideCursor = function (c) {
                !a.cursortimeout && (a.rail && a.autohidedom && !(a.hasmousefocus && "leave" == a.opt.autohidemode)) && (a.cursortimeout = setTimeout(function () {
                    if (!a.rail.active || !a.showonmouseevent) a.autohidedom.stop().animate({
                        opacity: a.opt.cursoropacitymin
                    }), a.zoom && a.zoom.stop().animate({
                        opacity: a.opt.cursoropacitymin
                    }), a.cursoractive = !1;
                    a.cursortimeout = 0
                }, c || a.opt.hidecursordelay))
            };
            this.noticeCursor = function (c, b, f) {
                a.showCursor(b, f);
                a.rail.active || a.hideCursor(c)
            };
            this.getContentSize = a.ispage ? function () {
                return {
                    w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            } : a.haswrapper ? function () {
                return {
                    w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) + parseInt(a.win.css("paddingRight")),
                    h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom"))
                }
            } : function () {
                return {
                    w: a.docscroll[0].scrollWidth,
                    h: a.docscroll[0].scrollHeight
                }
            };
            this.onResize = function (c, b) {
                if (!a || !a.win) return !1;
                if (!a.haswrapper && !a.ispage) {
                    if ("none" == a.win.css("display")) return a.visibility && a.hideRail().hideRailHr(), !1;
                    !a.hidden && !a.visibility && a.showRail().showRailHr()
                }
                var f = a.page.maxh,
                    d = a.page.maxw,
                    e = a.view.w;
                a.view = {
                    w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
                    h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight)
                };
                a.page = b ? b : a.getContentSize();
                a.page.maxh = Math.max(0, a.page.h - a.view.h);
                a.page.maxw = Math.max(0, a.page.w - a.view.w);
                if (a.page.maxh == f && a.page.maxw == d && a.view.w == e) {
                    if (a.ispage) return a;
                    f = a.win.offset();
                    if (a.lastposition && (d = a.lastposition, d.top == f.top && d.left == f.left)) return a;
                    a.lastposition = f
                }
                0 == a.page.maxh ? (a.hideRail(), a.scrollvaluemax = 0, a.scroll.y = 0, a.scrollratio.y = 0, a.cursorheight = 0, a.setScrollTop(0), a.rail.scrollable = !1) : a.rail.scrollable = !0;
                0 == a.page.maxw ? (a.hideRailHr(), a.scrollvaluemaxw = 0, a.scroll.x = 0, a.scrollratio.x = 0, a.cursorwidth = 0, a.setScrollLeft(0), a.railh.scrollable = !1) : a.railh.scrollable = !0;
                a.locked = 0 == a.page.maxh && 0 == a.page.maxw;
                if (a.locked) return a.ispage || a.updateScrollBar(a.view), !1;
                !a.hidden && !a.visibility ? a.showRail().showRailHr() : !a.hidden && !a.railh.visibility && a.showRailHr();
                a.istextarea && (a.win.css("resize") && "none" != a.win.css("resize")) && (a.view.h -= 20);
                a.cursorheight = Math.min(a.view.h, Math.round(a.view.h * (a.view.h / a.page.h)));
                a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorheight);
                a.cursorwidth = Math.min(a.view.w, Math.round(a.view.w * (a.view.w / a.page.w)));
                a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorwidth);
                a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder;
                a.railh && (a.railh.width = 0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w, a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder);
                a.ispage || a.updateScrollBar(a.view);
                a.scrollratio = {
                    x: a.page.maxw / a.scrollvaluemaxw,
                    y: a.page.maxh / a.scrollvaluemax
                };
                a.getScrollTop() > a.page.maxh ? a.doScrollTop(a.page.maxh) : (a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y)), a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)), a.cursoractive && a.noticeCursor());
                a.scroll.y && 0 == a.getScrollTop() && a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
                return a
            };
            this.resize = a.onResize;
            this.lazyResize = function (c) {
                c = isNaN(c) ? 30 : c;
                a.delayed("resize", a.resize, c);
                return a
            };
            this._bind = function (c, b, f, d) {
                a.events.push({
                    e: c,
                    n: b,
                    f: f,
                    b: d,
                    q: !1
                });
                c.addEventListener ? c.addEventListener(b, f, d || !1) : c.attachEvent ? c.attachEvent("on" + b, f) : c["on" + b] = f
            };
            this.jqbind = function (c, b, f) {
                a.events.push({
                    e: c,
                    n: b,
                    f: f,
                    q: !0
                });
                e(c).bind(b, f)
            };
            this.bind = function (c, b, f, e) {
                var h = "jquery" in c ? c[0] : c;
                "mousewheel" == b ? "onwheel" in a.win ? a._bind(h, "wheel", f, e || !1) : (c = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", l(h, c, f, e || !1), "DOMMouseScroll" == c && l(h, "MozMousePixelScroll", f, e || !1)) : h.addEventListener ? (d.cantouch && /mouseup|mousedown|mousemove/.test(b) && a._bind(h, "mousedown" == b ? "touchstart" : "mouseup" == b ? "touchend" : "touchmove", function (a) {
                    if (a.touches) {
                        if (2 > a.touches.length) {
                            var c = a.touches.length ? a.touches[0] : a;
                            c.original = a;
                            f.call(this, c)
                        }
                    } else a.changedTouches && (c = a.changedTouches[0], c.original = a, f.call(this, c))
                }, e || !1), a._bind(h, b, f, e || !1), d.cantouch && "mouseup" == b && a._bind(h, "touchcancel", f, e || !1)) : a._bind(h, b, function (c) {
                    if ((c = c || window.event || !1) && c.srcElement) c.target = c.srcElement;
                    "pageY" in c || (c.pageX = c.clientX + document.documentElement.scrollLeft, c.pageY = c.clientY + document.documentElement.scrollTop);
                    return !1 === f.call(h, c) || !1 === e ? a.cancelEvent(c) : !0
                })
            };
            this._unbind = function (a, b, f, d) {
                a.removeEventListener ? a.removeEventListener(b, f, d) : a.detachEvent ? a.detachEvent("on" + b, f) : a["on" + b] = !1
            };
            this.unbindAll = function () {
                for (var c = 0; c < a.events.length; c++) {
                    var b = a.events[c];
                    b.q ? b.e.unbind(b.n, b.f) : a._unbind(b.e, b.n, b.f, b.b)
                }
            };
            this.cancelEvent = function (a) {
                a = a.original ? a.original : a ? a : window.event || !1;
                if (!a) return !1;
                a.preventDefault && a.preventDefault();
                a.stopPropagation && a.stopPropagation();
                a.preventManipulation && a.preventManipulation();
                a.cancelBubble = !0;
                a.cancel = !0;
                return a.returnValue = !1
            };
            this.stopPropagation = function (a) {
                a = a.original ? a.original : a ? a : window.event || !1;
                if (!a) return !1;
                if (a.stopPropagation) return a.stopPropagation();
                a.cancelBubble && (a.cancelBubble = !0);
                return !1
            };
            this.showRail = function () {
                if (0 != a.page.maxh && (a.ispage || "none" != a.win.css("display"))) a.visibility = !0, a.rail.visibility = !0, a.rail.css("display", "block");
                return a
            };
            this.showRailHr = function () {
                if (!a.railh) return a;
                if (0 != a.page.maxw && (a.ispage || "none" != a.win.css("display"))) a.railh.visibility = !0, a.railh.css("display", "block");
                return a
            };
            this.hideRail = function () {
                a.visibility = !1;
                a.rail.visibility = !1;
                a.rail.css("display", "none");
                return a
            };
            this.hideRailHr = function () {
                if (!a.railh) return a;
                a.railh.visibility = !1;
                a.railh.css("display", "none");
                return a
            };
            this.show = function () {
                a.hidden = !1;
                a.locked = !1;
                return a.showRail().showRailHr()
            };
            this.hide = function () {
                a.hidden = !0;
                a.locked = !0;
                return a.hideRail().hideRailHr()
            };
            this.toggle = function () {
                return a.hidden ? a.show() : a.hide()
            };
            this.remove = function () {
                a.stop();
                a.cursortimeout && clearTimeout(a.cursortimeout);
                a.doZoomOut();
                a.unbindAll();
                d.isie9 && a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
                !1 !== a.observer && a.observer.disconnect();
                !1 !== a.observerremover && a.observerremover.disconnect();
                a.events = null;
                a.cursor && a.cursor.remove();
                a.cursorh && a.cursorh.remove();
                a.rail && a.rail.remove();
                a.railh && a.railh.remove();
                a.zoom && a.zoom.remove();
                for (var c = 0; c < a.saved.css.length; c++) {
                    var b = a.saved.css[c];
                    b[0].css(b[1], "undefined" == typeof b[2] ? "" : b[2])
                }
                a.saved = !1;
                a.me.data("__nicescroll", "");
                var f = e.nicescroll;
                f.each(function (c) {
                    if (this && this.id === a.id) {
                        delete f[c];
                        for (var b = ++c; b < f.length; b++, c++) f[c] = f[b];
                        f.length--;
                        f.length && delete f[f.length]
                    }
                });
                for (var h in a) a[h] = null, delete a[h];
                a = null
            };
            this.scrollstart = function (c) {
                this.onscrollstart = c;
                return a
            };
            this.scrollend = function (c) {
                this.onscrollend = c;
                return a
            };
            this.scrollcancel = function (c) {
                this.onscrollcancel = c;
                return a
            };
            this.zoomin = function (c) {
                this.onzoomin = c;
                return a
            };
            this.zoomout = function (c) {
                this.onzoomout = c;
                return a
            };
            this.isScrollable = function (a) {
                a = a.target ? a.target : a;
                if ("OPTION" == a.nodeName) return !0;
                for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
                    var b = e(a),
                        b = b.css("overflowY") || b.css("overflowX") || b.css("overflow") || "";
                    if (/scroll|auto/.test(b)) return a.clientHeight != a.scrollHeight;
                    a = a.parentNode ? a.parentNode : !1
                }
                return !1
            };
            this.getViewport = function (a) {
                for (a = a && a.parentNode ? a.parentNode : !1; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
                    var b = e(a);
                    if (/fixed|absolute/.test(b.css("position"))) return b;
                    var f = b.css("overflowY") || b.css("overflowX") || b.css("overflow") || "";
                    if (/scroll|auto/.test(f) && a.clientHeight != a.scrollHeight || 0 < b.getNiceScroll().length) return b;
                    a = a.parentNode ? a.parentNode : !1
                }
                return a ? e(a) : !1
            };
            this.triggerScrollEnd = function () {
                if (a.onscrollend) {
                    var c = a.getScrollLeft(),
                        b = a.getScrollTop();
                    a.onscrollend.call(a, {
                        type: "scrollend",
                        current: {
                            x: c,
                            y: b
                        },
                        end: {
                            x: c,
                            y: b
                        }
                    })
                }
            };
            this.onmousewheel = function (c) {
                if (!a.wheelprevented) {
                    if (a.locked) return a.debounced("checkunlock", a.resize, 250), !0;
                    if (a.rail.drag) return a.cancelEvent(c);
                    "auto" == a.opt.oneaxismousemode && 0 != c.deltaX && (a.opt.oneaxismousemode = !1);
                    if (a.opt.oneaxismousemode && 0 == c.deltaX && !a.rail.scrollable) return a.railh && a.railh.scrollable ? a.onmousewheelhr(c) : !0;
                    var b = +new Date,
                        f = !1;
                    a.opt.preservenativescrolling && a.checkarea + 600 < b && (a.nativescrollingarea = a.isScrollable(c), f = !0);
                    a.checkarea = b;
                    if (a.nativescrollingarea) return !0;
                    if (c = q(c, !1, f)) a.checkarea = 0;
                    return c
                }
            };
            this.onmousewheelhr = function (c) {
                if (!a.wheelprevented) {
                    if (a.locked || !a.railh.scrollable) return !0;
                    if (a.rail.drag) return a.cancelEvent(c);
                    var b = +new Date,
                        f = !1;
                    a.opt.preservenativescrolling && a.checkarea + 600 < b && (a.nativescrollingarea = a.isScrollable(c), f = !0);
                    a.checkarea = b;
                    return a.nativescrollingarea ? !0 : a.locked ? a.cancelEvent(c) : q(c, !0, f)
                }
            };
            this.stop = function () {
                a.cancelScroll();
                a.scrollmon && a.scrollmon.stop();
                a.cursorfreezed = !1;
                a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
                a.noticeCursor();
                return a
            };
            this.getTransitionSpeed = function (b) {
                var d = Math.round(10 * a.opt.scrollspeed);
                b = Math.min(d, Math.round(b / 20 * a.opt.scrollspeed));
                return 20 < b ? b : 0
            };
            a.opt.smoothscroll ? a.ishwscroll && d.hastransition && a.opt.usetransition ? (this.prepareTransition = function (b, e) {
                var f = e ? 20 < b ? b : 0 : a.getTransitionSpeed(b),
                    h = f ? d.prefixstyle + "transform " + f + "ms ease-out" : "";
                if (!a.lasttransitionstyle || a.lasttransitionstyle != h) a.lasttransitionstyle = h, a.doc.css(d.transitionstyle, h);
                return f
            }, this.doScrollLeft = function (b, d) {
                var f = a.scrollrunning ? a.newscrolly : a.getScrollTop();
                a.doScrollPos(b, f, d)
            }, this.doScrollTop = function (b, d) {
                var f = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
                a.doScrollPos(f, b, d)
            }, this.doScrollPos = function (b, e, f) {
                var h = a.getScrollTop(),
                    g = a.getScrollLeft();
                (0 > (a.newscrolly - h) * (e - h) || 0 > (a.newscrollx - g) * (b - g)) && a.cancelScroll();
                !1 == a.opt.bouncescroll && (0 > e ? e = 0 : e > a.page.maxh && (e = a.page.maxh), 0 > b ? b = 0 : b > a.page.maxw && (b = a.page.maxw));
                if (a.scrollrunning && b == a.newscrollx && e == a.newscrolly) return !1;
                a.newscrolly = e;
                a.newscrollx = b;
                a.newscrollspeed = f || !1;
                if (a.timer) return !1;
                a.timer = setTimeout(function () {
                    var f = a.getScrollTop(),
                        h = a.getScrollLeft(),
                        g, k;
                    g = b - h;
                    k = e - f;
                    g = Math.round(Math.sqrt(Math.pow(g, 2) + Math.pow(k, 2)));
                    g = a.newscrollspeed && 1 < a.newscrollspeed ? a.newscrollspeed : a.getTransitionSpeed(g);
                    a.newscrollspeed && 1 >= a.newscrollspeed && (g *= a.newscrollspeed);
                    a.prepareTransition(g, !0);
                    a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
                    0 < g && (!a.scrollrunning && a.onscrollstart && a.onscrollstart.call(a, {
                        type: "scrollstart",
                        current: {
                            x: h,
                            y: f
                        },
                        request: {
                            x: b,
                            y: e
                        },
                        end: {
                            x: a.newscrollx,
                            y: a.newscrolly
                        },
                        speed: g
                    }), d.transitionend ? a.scrollendtrapped || (a.scrollendtrapped = !0, a.bind(a.doc, d.transitionend, a.onScrollTransitionEnd, !1)) : (a.scrollendtrapped && clearTimeout(a.scrollendtrapped), a.scrollendtrapped = setTimeout(a.onScrollTransitionEnd, g)), a.timerscroll = {
                        bz: new BezierClass(f, a.newscrolly, g, 0, 0, .58, 1),
                        bh: new BezierClass(h, a.newscrollx, g, 0, 0, .58, 1)
                    }, a.cursorfreezed || (a.timerscroll.tm = setInterval(function () {
                        a.showCursor(a.getScrollTop(), a.getScrollLeft())
                    }, 60)));
                    a.synched("doScroll-set", function () {
                        a.timer = 0;
                        a.scrollendtrapped && (a.scrollrunning = !0);
                        a.setScrollTop(a.newscrolly);
                        a.setScrollLeft(a.newscrollx);
                        if (!a.scrollendtrapped) a.onScrollTransitionEnd()
                    })
                }, 50)
            }, this.cancelScroll = function () {
                if (!a.scrollendtrapped) return !0;
                var b = a.getScrollTop(),
                    e = a.getScrollLeft();
                a.scrollrunning = !1;
                d.transitionend || clearTimeout(d.transitionend);
                a.scrollendtrapped = !1;
                a._unbind(a.doc, d.transitionend, a.onScrollTransitionEnd);
                a.prepareTransition(0);
                a.setScrollTop(b);
                a.railh && a.setScrollLeft(e);
                a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
                a.timerscroll = !1;
                a.cursorfreezed = !1;
                a.showCursor(b, e);
                return a
            }, this.onScrollTransitionEnd = function () {
                a.scrollendtrapped && a._unbind(a.doc, d.transitionend, a.onScrollTransitionEnd);
                a.scrollendtrapped = !1;
                a.prepareTransition(0);
                a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
                a.timerscroll = !1;
                var b = a.getScrollTop(),
                    e = a.getScrollLeft();
                a.setScrollTop(b);
                a.railh && a.setScrollLeft(e);
                a.noticeCursor(!1, b, e);
                a.cursorfreezed = !1;
                0 > b ? b = 0 : b > a.page.maxh && (b = a.page.maxh);
                0 > e ? e = 0 : e > a.page.maxw && (e = a.page.maxw);
                if (b != a.newscrolly || e != a.newscrollx) return a.doScrollPos(e, b, a.opt.snapbackspeed);
                a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
                a.scrollrunning = !1
            }) : (this.doScrollLeft = function (b, d) {
                var f = a.scrollrunning ? a.newscrolly : a.getScrollTop();
                a.doScrollPos(b, f, d)
            }, this.doScrollTop = function (b, d) {
                var f = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
                a.doScrollPos(f, b, d)
            }, this.doScrollPos = function (b, d, f) {
                function e() {
                    if (a.cancelAnimationFrame) return !0;
                    a.scrollrunning = !0;
                    if (p = 1 - p) return a.timer = s(e) || 1;
                    var b = 0,
                        c = sy = a.getScrollTop();
                    if (a.dst.ay) {
                        var c = a.bzscroll ? a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly,
                            f = c - sy;
                        if (0 > f && c < a.newscrolly || 0 < f && c > a.newscrolly) c = a.newscrolly;
                        a.setScrollTop(c);
                        c == a.newscrolly && (b = 1)
                    } else b = 1;
                    var d = sx = a.getScrollLeft();
                    if (a.dst.ax) {
                        d = a.bzscroll ? a.dst.px + a.bzscroll.getNow() * a.dst.ax : a.newscrollx;
                        f = d - sx;
                        if (0 > f && d < a.newscrollx || 0 < f && d > a.newscrollx) d = a.newscrollx;
                        a.setScrollLeft(d);
                        d == a.newscrollx && (b += 1)
                    } else b += 1;
                    2 == b ? (a.timer = 0, a.cursorfreezed = !1, a.bzscroll = !1, a.scrollrunning = !1, 0 > c ? c = 0 : c > a.page.maxh && (c = a.page.maxh), 0 > d ? d = 0 : d > a.page.maxw && (d = a.page.maxw), d != a.newscrollx || c != a.newscrolly ? a.doScrollPos(d, c) : a.onscrollend && a.triggerScrollEnd()) : a.timer = s(e) || 1
                }
                d = "undefined" == typeof d || !1 === d ? a.getScrollTop(!0) : d;
                if (a.timer && a.newscrolly == d && a.newscrollx == b) return !0;
                a.timer && v(a.timer);
                a.timer = 0;
                var h = a.getScrollTop(),
                    g = a.getScrollLeft();
                (0 > (a.newscrolly - h) * (d - h) || 0 > (a.newscrollx - g) * (b - g)) && a.cancelScroll();
                a.newscrolly = d;
                a.newscrollx = b;
                if (!a.bouncescroll || !a.rail.visibility) 0 > a.newscrolly ? a.newscrolly = 0 : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh);
                if (!a.bouncescroll || !a.railh.visibility) 0 > a.newscrollx ? a.newscrollx = 0 : a.newscrollx > a.page.maxw && (a.newscrollx = a.page.maxw);
                a.dst = {};
                a.dst.x = b - g;
                a.dst.y = d - h;
                a.dst.px = g;
                a.dst.py = h;
                var k = Math.round(Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2)));
                a.dst.ax = a.dst.x / k;
                a.dst.ay = a.dst.y / k;
                var l = 0,
                    q = k;
                0 == a.dst.x ? (l = h, q = d, a.dst.ay = 1, a.dst.py = 0) : 0 == a.dst.y && (l = g, q = b, a.dst.ax = 1, a.dst.px = 0);
                k = a.getTransitionSpeed(k);
                f && 1 >= f && (k *= f);
                a.bzscroll = 0 < k ? a.bzscroll ? a.bzscroll.update(q, k) : new BezierClass(l, q, k, 0, 1, 0, 1) : !1;
                if (!a.timer) {
                    (h == a.page.maxh && d >= a.page.maxh || g == a.page.maxw && b >= a.page.maxw) && a.checkContentSize();
                    var p = 1;
                    a.cancelAnimationFrame = !1;
                    a.timer = 1;
                    a.onscrollstart && !a.scrollrunning && a.onscrollstart.call(a, {
                        type: "scrollstart",
                        current: {
                            x: g,
                            y: h
                        },
                        request: {
                            x: b,
                            y: d
                        },
                        end: {
                            x: a.newscrollx,
                            y: a.newscrolly
                        },
                        speed: k
                    });
                    e();
                    (h == a.page.maxh && d >= h || g == a.page.maxw && b >= g) && a.checkContentSize();
                    a.noticeCursor()
                }
            }, this.cancelScroll = function () {
                a.timer && v(a.timer);
                a.timer = 0;
                a.bzscroll = !1;
                a.scrollrunning = !1;
                return a
            }) : (this.doScrollLeft = function (b, d) {
                var f = a.getScrollTop();
                a.doScrollPos(b, f, d)
            }, this.doScrollTop = function (b, d) {
                var f = a.getScrollLeft();
                a.doScrollPos(f, b, d)
            }, this.doScrollPos = function (b, d, f) {
                var e = b > a.page.maxw ? a.page.maxw : b;
                0 > e && (e = 0);
                var h = d > a.page.maxh ? a.page.maxh : d;
                0 > h && (h = 0);
                a.synched("scroll", function () {
                    a.setScrollTop(h);
                    a.setScrollLeft(e)
                })
            }, this.cancelScroll = function () {});
            this.doScrollBy = function (b, d) {
                var f = 0,
                    f = d ? Math.floor((a.scroll.y - b) * a.scrollratio.y) : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;
                if (a.bouncescroll) {
                    var e = Math.round(a.view.h / 2);
                    f < -e ? f = -e : f > a.page.maxh + e && (f = a.page.maxh + e)
                }
                a.cursorfreezed = !1;
                py = a.getScrollTop(!0);
                if (0 > f && 0 >= py) return a.noticeCursor();
                if (f > a.page.maxh && py >= a.page.maxh) return a.checkContentSize(), a.noticeCursor();
                a.doScrollTop(f)
            };
            this.doScrollLeftBy = function (b, d) {
                var f = 0,
                    f = d ? Math.floor((a.scroll.x - b) * a.scrollratio.x) : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;
                if (a.bouncescroll) {
                    var e = Math.round(a.view.w / 2);
                    f < -e ? f = -e : f > a.page.maxw + e && (f = a.page.maxw + e)
                }
                a.cursorfreezed = !1;
                px = a.getScrollLeft(!0);
                if (0 > f && 0 >= px || f > a.page.maxw && px >= a.page.maxw) return a.noticeCursor();
                a.doScrollLeft(f)
            };
            this.doScrollTo = function (b, d) {
                d && Math.round(b * a.scrollratio.y);
                a.cursorfreezed = !1;
                a.doScrollTop(b)
            };
            this.checkContentSize = function () {
                var b = a.getContentSize();
                (b.h != a.page.h || b.w != a.page.w) && a.resize(!1, b)
            };
            a.onscroll = function (b) {
                a.rail.drag || a.cursorfreezed || a.synched("scroll", function () {
                    a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
                    a.railh && (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)));
                    a.noticeCursor()
                })
            };
            a.bind(a.docscroll, "scroll", a.onscroll);
            this.doZoomIn = function (b) {
                if (!a.zoomactive) {
                    a.zoomactive = !0;
                    a.zoomrestore = {
                        style: {}
                    };
                    var h = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                        f = a.win[0].style,
                        g;
                    for (g in h) {
                        var k = h[g];
                        a.zoomrestore.style[k] = "undefined" != typeof f[k] ? f[k] : ""
                    }
                    a.zoomrestore.style.width = a.win.css("width");
                    a.zoomrestore.style.height = a.win.css("height");
                    a.zoomrestore.padding = {
                        w: a.win.outerWidth() - a.win.width(),
                        h: a.win.outerHeight() - a.win.height()
                    };
                    d.isios4 && (a.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));
                    a.win.css({
                        position: d.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        "z-index": x + 100,
                        margin: "0px"
                    });
                    h = a.win.css("backgroundColor");
                    ("" == h || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) && a.win.css("backgroundColor", "#fff");
                    a.rail.css({
                        "z-index": x + 101
                    });
                    a.zoom.css({
                        "z-index": x + 102
                    });
                    a.zoom.css("backgroundPosition", "0px -18px");
                    a.resizeZoom();
                    a.onzoomin && a.onzoomin.call(a);
                    return a.cancelEvent(b)
                }
            };
            this.doZoomOut = function (b) {
                if (a.zoomactive) return a.zoomactive = !1, a.win.css("margin", ""), a.win.css(a.zoomrestore.style), d.isios4 && e(window).scrollTop(a.zoomrestore.scrollTop), a.rail.css({
                    "z-index": a.zindex
                }), a.zoom.css({
                    "z-index": a.zindex
                }), a.zoomrestore = !1, a.zoom.css("backgroundPosition", "0px 0px"), a.onResize(), a.onzoomout && a.onzoomout.call(a), a.cancelEvent(b)
            };
            this.doZoom = function (b) {
                return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b)
            };
            this.resizeZoom = function () {
                if (a.zoomactive) {
                    var b = a.getScrollTop();
                    a.win.css({
                        width: e(window).width() - a.zoomrestore.padding.w + "px",
                        height: e(window).height() - a.zoomrestore.padding.h + "px"
                    });
                    a.onResize();
                    a.setScrollTop(Math.min(a.page.maxh, b))
                }
            };
            this.init();
            e.nicescroll.push(this)
        },
        H = function (e) {
            var b = this;
            this.nc = e;
            this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
            this.snapy = this.snapx = !1;
            this.demuly = this.demulx = 0;
            this.lastscrolly = this.lastscrollx = -1;
            this.timer = this.chky = this.chkx = 0;
            this.time = function () {
                return +new Date
            };
            this.reset = function (e, g) {
                b.stop();
                var l = b.time();
                b.steptime = 0;
                b.lasttime = l;
                b.speedx = 0;
                b.speedy = 0;
                b.lastx = e;
                b.lasty = g;
                b.lastscrollx = -1;
                b.lastscrolly = -1
            };
            this.update = function (e, g) {
                var l = b.time();
                b.steptime = l - b.lasttime;
                b.lasttime = l;
                var l = g - b.lasty,
                    q = e - b.lastx,
                    a = b.nc.getScrollTop(),
                    p = b.nc.getScrollLeft(),
                    a = a + l,
                    p = p + q;
                b.snapx = 0 > p || p > b.nc.page.maxw;
                b.snapy = 0 > a || a > b.nc.page.maxh;
                b.speedx = q;
                b.speedy = l;
                b.lastx = e;
                b.lasty = g
            };
            this.stop = function () {
                b.nc.unsynched("domomentum2d");
                b.timer && clearTimeout(b.timer);
                b.timer = 0;
                b.lastscrollx = -1;
                b.lastscrolly = -1
            };
            this.doSnapy = function (e, g) {
                var l = !1;
                0 > g ? (g = 0, l = !0) : g > b.nc.page.maxh && (g = b.nc.page.maxh, l = !0);
                0 > e ? (e = 0, l = !0) : e > b.nc.page.maxw && (e = b.nc.page.maxw, l = !0);
                l ? b.nc.doScrollPos(e, g, b.nc.opt.snapbackspeed) : b.nc.triggerScrollEnd()
            };
            this.doMomentum = function (e) {
                var g = b.time(),
                    l = e ? g + e : b.lasttime;
                e = b.nc.getScrollLeft();
                var q = b.nc.getScrollTop(),
                    a = b.nc.page.maxh,
                    p = b.nc.page.maxw;
                b.speedx = 0 < p ? Math.min(60, b.speedx) : 0;
                b.speedy = 0 < a ? Math.min(60, b.speedy) : 0;
                l = l && 60 >= g - l;
                if (0 > q || q > a || 0 > e || e > p) l = !1;
                e = b.speedx && l ? b.speedx : !1;
                if (b.speedy && l && b.speedy || e) {
                    var d = Math.max(16, b.steptime);
                    50 < d && (e = d / 50, b.speedx *= e, b.speedy *= e, d = 50);
                    b.demulxy = 0;
                    b.lastscrollx = b.nc.getScrollLeft();
                    b.chkx = b.lastscrollx;
                    b.lastscrolly = b.nc.getScrollTop();
                    b.chky = b.lastscrolly;
                    var r = b.lastscrollx,
                        t = b.lastscrolly,
                        s = function () {
                            var c = 600 < b.time() - g ? .04 : .02;
                            if (b.speedx && (r = Math.floor(b.lastscrollx - b.speedx * (1 - b.demulxy)), b.lastscrollx = r, 0 > r || r > p)) c = .1;
                            if (b.speedy && (t = Math.floor(b.lastscrolly - b.speedy * (1 - b.demulxy)), b.lastscrolly = t, 0 > t || t > a)) c = .1;
                            b.demulxy = Math.min(1, b.demulxy + c);
                            b.nc.synched("domomentum2d", function () {
                                b.speedx && (b.nc.getScrollLeft() != b.chkx && b.stop(), b.chkx = r, b.nc.setScrollLeft(r));
                                b.speedy && (b.nc.getScrollTop() != b.chky && b.stop(), b.chky = t, b.nc.setScrollTop(t));
                                b.timer || (b.nc.hideCursor(), b.doSnapy(r, t))
                            });
                            1 > b.demulxy ? b.timer = setTimeout(s, d) : (b.stop(), b.nc.hideCursor(), b.doSnapy(r, t))
                        };
                    s()
                } else b.doSnapy(b.nc.getScrollLeft(), b.nc.getScrollTop())
            }
        },
        w = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function (g, b, h) {
            return (b = e.data(g, "__nicescroll") || !1) && b.ishwscroll ? b.getScrollTop() : w.call(g)
        },
        set: function (g, b) {
            var h = e.data(g, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollTop(parseInt(b)) : w.call(g, b);
            return this
        }
    };
    e.fn.scrollTop = function (g) {
        if ("undefined" == typeof g) {
            var b = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return b && b.ishwscroll ? b.getScrollTop() : w.call(this)
        }
        return this.each(function () {
            var b = e.data(this, "__nicescroll") || !1;
            b && b.ishwscroll ? b.setScrollTop(parseInt(g)) : w.call(e(this), g)
        })
    };
    var A = e.fn.scrollLeft;
    e.cssHooks.pageXOffset = {
        get: function (g, b, h) {
            return (b = e.data(g, "__nicescroll") || !1) && b.ishwscroll ? b.getScrollLeft() : A.call(g)
        },
        set: function (g, b) {
            var h = e.data(g, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollLeft(parseInt(b)) : A.call(g, b);
            return this
        }
    };
    e.fn.scrollLeft = function (g) {
        if ("undefined" == typeof g) {
            var b = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return b && b.ishwscroll ? b.getScrollLeft() : A.call(this)
        }
        return this.each(function () {
            var b = e.data(this, "__nicescroll") || !1;
            b && b.ishwscroll ? b.setScrollLeft(parseInt(g)) : A.call(e(this), g)
        })
    };
    var B = function (g) {
        var b = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function (e) {
            for (var g = 0, a = 0; g < b.length; g++) e.call(b[g], a++);
            return b
        };
        this.push = function (e) {
            b[b.length] = e;
            b.length++
        };
        this.eq = function (e) {
            return b[e]
        };
        if (g)
            for (var h = 0; h < g.length; h++) {
                var k = e.data(g[h], "__nicescroll") || !1;
                k && (this[this.length] = k, this.length++)
            }
        return this
    };
    (function (e, b, h) {
        for (var k = 0; k < b.length; k++) h(e, b[k])
    })(B.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (e, b) {
        e[b] = function () {
            var e = arguments;
            return this.each(function () {
                this[b].apply(this, e)
            })
        }
    });
    e.fn.getNiceScroll = function (g) {
        return "undefined" == typeof g ? new B(this) : this[g] && e.data(this[g], "__nicescroll") || !1
    };
    e.extend(e.expr[":"], {
        nicescroll: function (g) {
            return e.data(g, "__nicescroll") ? !0 : !1
        }
    });
    e.fn.niceScroll = function (g, b) {
        "undefined" == typeof b && ("object" == typeof g && !("jquery" in g)) && (b = g, g = !1);
        var h = new B;
        "undefined" == typeof b && (b = {});
        g && (b.doc = e(g), b.win = e(this));
        var k = !("doc" in b);
        !k && !("win" in b) && (b.win = e(this));
        this.each(function () {
            var g = e(this).data("__nicescroll") || !1;
            g || (b.doc = k ? e(this) : b.doc, g = new N(b, e(this)), e(this).data("__nicescroll", g));
            h.push(g)
        });
        return 1 == h.length ? h[0] : h
    };
    window.NiceScroll = {
        getjQuery: function () {
            return e
        }
    };
    e.nicescroll || (e.nicescroll = new B, e.nicescroll.options = G)
});
(function (e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
})(function (e) {
    "use strict";
    var t = {},
        n = Math.max,
        r = Math.min;
    t.c = {};
    t.c.d = e(document);
    t.c.t = function (e) {
        return e.originalEvent.touches.length - 1
    };
    t.o = function () {
        var n = this;
        this.o = null;
        this.$ = null;
        this.i = null;
        this.g = null;
        this.v = null;
        this.cv = null;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.$c = null;
        this.c = null;
        this.t = 0;
        this.isInit = false;
        this.fgColor = null;
        this.pColor = null;
        this.dH = null;
        this.cH = null;
        this.eH = null;
        this.rH = null;
        this.scale = 1;
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null;
        this.run = function () {
            var t = function (e, t) {
                var r;
                for (r in t) {
                    n.o[r] = t[r]
                }
                n._carve().init();
                n._configure()._draw()
            };
            if (this.$.data("kontroled")) return;
            this.$.data("kontroled", true);
            this.extend();
            this.o = e.extend({
                min: this.$.data("min") !== undefined ? this.$.data("min") : 0,
                max: this.$.data("max") !== undefined ? this.$.data("max") : 100,
                stopper: true,
                readOnly: this.$.data("readonly") || this.$.attr("readonly") === "readonly",
                cursor: this.$.data("cursor") === true && 30 || this.$.data("cursor") || 0,
                thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                lineCap: this.$.data("linecap") || "butt",
                width: this.$.data("width") || 200,
                height: this.$.data("height") || 200,
                displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"),
                displayPrevious: this.$.data("displayprevious"),
                fgColor: this.$.data("fgcolor") || "#87CEEB",
                inputColor: this.$.data("inputcolor"),
                font: this.$.data("font") || "Arial",
                fontWeight: this.$.data("font-weight") || "bold",
                inline: false,
                step: this.$.data("step") || 1,
                rotation: this.$.data("rotation"),
                draw: null,
                change: null,
                cancel: null,
                release: null,
                format: function (e) {
                    return e
                },
                parse: function (e) {
                    return parseFloat(e)
                }
            }, this.o);
            this.o.flip = this.o.rotation === "anticlockwise" || this.o.rotation === "acw";
            if (!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor
            }
            if (this.$.is("fieldset")) {
                this.v = {};
                this.i = this.$.find("input");
                this.i.each(function (t) {
                    var r = e(this);
                    n.i[t] = r;
                    n.v[t] = n.o.parse(r.val());
                    r.bind("change blur", function () {
                        var e = {};
                        e[t] = r.val();
                        n.val(n._validate(e))
                    })
                });
                this.$.find("legend").remove()
            } else {
                this.i = this.$;
                this.v = this.o.parse(this.$.val());
                this.v === "" && (this.v = this.o.min);
                this.$.bind("change blur", function () {
                    n.val(n._validate(n.o.parse(n.$.val())))
                })
            }!this.o.displayInput && this.$.hide();
            this.$c = e(document.createElement("canvas")).attr({
                width: this.o.width,
                height: this.o.height
            });
            this.$div = e('<div style="' + (this.o.inline ? "display:inline-block;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + "px;" + '"></div>');
            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();
            if (typeof G_vmlCanvasManager !== "undefined") {
                G_vmlCanvasManager.initElement(this.$c[0])
            }
            this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;
            if (!this.c) {
                throw {
                    name: "CanvasNotSupportedException",
                    message: "Canvas not supported. Please use excanvas on IE8.0.",
                    toString: function () {
                        return this.name + ": " + this.message
                    }
                }
            }
            this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);
            this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%");
            this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%");
            this.relative = this.relativeWidth || this.relativeHeight;
            this._carve();
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv)
            } else {
                this.cv = this.v
            }
            this.$.bind("configure", t).parent().bind("configure", t);
            this._listen()._configure()._xy().init();
            this.isInit = true;
            this.$.val(this.o.format(this.v));
            this._draw();
            return this
        };
        this._carve = function () {
            if (this.relative) {
                var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                    t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                this.w = this.h = Math.min(e, t)
            } else {
                this.w = this.o.width;
                this.h = this.o.height
            }
            this.$div.css({
                width: this.w + "px",
                height: this.h + "px"
            });
            this.$c.attr({
                width: this.w,
                height: this.h
            });
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h)
            }
            return this
        };
        this._draw = function () {
            var e = true;
            n.g = n.c;
            n.clear();
            n.dH && (e = n.dH());
            e !== false && n.draw()
        };
        this._touch = function (e) {
            var r = function (e) {
                var t = n.xy2val(e.originalEvent.touches[n.t].pageX, e.originalEvent.touches[n.t].pageY);
                if (t == n.cv) return;
                if (n.cH && n.cH(t) === false) return;
                n.change(n._validate(t));
                n._draw()
            };
            this.t = t.c.t(e);
            r(e);
            t.c.d.bind("touchmove.k", r).bind("touchend.k", function () {
                t.c.d.unbind("touchmove.k touchend.k");
                n.val(n.cv)
            });
            return this
        };
        this._mouse = function (e) {
            var r = function (e) {
                var t = n.xy2val(e.pageX, e.pageY);
                if (t == n.cv) return;
                if (n.cH && n.cH(t) === false) return;
                n.change(n._validate(t));
                n._draw()
            };
            r(e);
            t.c.d.bind("mousemove.k", r).bind("keyup.k", function (e) {
                if (e.keyCode === 27) {
                    t.c.d.unbind("mouseup.k mousemove.k keyup.k");
                    if (n.eH && n.eH() === false) return;
                    n.cancel()
                }
            }).bind("mouseup.k", function (e) {
                t.c.d.unbind("mousemove.k mouseup.k keyup.k");
                n.val(n.cv)
            });
            return this
        };
        this._xy = function () {
            var e = this.$c.offset();
            this.x = e.left;
            this.y = e.top;
            return this
        };
        this._listen = function () {
            if (!this.o.readOnly) {
                this.$c.bind("mousedown", function (e) {
                    e.preventDefault();
                    n._xy()._mouse(e)
                }).bind("touchstart", function (e) {
                    e.preventDefault();
                    n._xy()._touch(e)
                });
                this.listen()
            } else {
                this.$.attr("readonly", "readonly")
            }
            if (this.relative) {
                e(window).resize(function () {
                    n._carve().init();
                    n._draw()
                })
            }
            return this
        };
        this._configure = function () {
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;
            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6")
            } else {
                this.fgColor = this.o.fgColor
            }
            return this
        };
        this._clear = function () {
            this.$c[0].width = this.$c[0].width
        };
        this._validate = function (e) {
            var t = ~~((e < 0 ? -.5 : .5) + e / this.o.step) * this.o.step;
            return Math.round(t * 100) / 100
        };
        this.listen = function () {};
        this.extend = function () {};
        this.init = function () {};
        this.change = function (e) {};
        this.val = function (e) {};
        this.xy2val = function (e, t) {};
        this.draw = function () {};
        this.clear = function () {
            this._clear()
        };
        this.h2rgba = function (e, t) {
            var n;
            e = e.substring(1, 7);
            n = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)];
            return "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + t + ")"
        };
        this.copy = function (e, t) {
            for (var n in e) {
                t[n] = e[n]
            }
        }
    };
    t.Dial = function () {
        t.o.call(this);
        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2 * Math.PI;
        this.extend = function () {
            this.o = e.extend({
                bgColor: this.$.data("bgcolor") || "#EEEEEE",
                angleOffset: this.$.data("angleoffset") || 0,
                angleArc: this.$.data("anglearc") || 360,
                inline: true
            }, this.o)
        };
        this.val = function (e, t) {
            if (null != e) {
                e = this.o.parse(e);
                if (t !== false && e != this.v && this.rH && this.rH(e) === false) {
                    return
                }
                this.cv = this.o.stopper ? n(r(e, this.o.max), this.o.min) : e;
                this.v = this.cv;
                this.$.val(this.o.format(this.v));
                this._draw()
            } else {
                return this.v
            }
        };
        this.xy2val = function (e, t) {
            var i, s;
            i = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset;
            if (this.o.flip) {
                i = this.angleArc - i - this.PI2
            }
            if (this.angleArc != this.PI2 && i < 0 && i > -.5) {
                i = 0
            } else if (i < 0) {
                i += this.PI2
            }
            s = i * (this.o.max - this.o.min) / this.angleArc + this.o.min;
            this.o.stopper && (s = n(r(s, this.o.max), this.o.min));
            return s
        };
        this.listen = function () {
            var t = this,
                i, s, o = function (e) {
                    e.preventDefault();
                    var o = e.originalEvent,
                        u = o.detail || o.wheelDeltaX,
                        a = o.detail || o.wheelDeltaY,
                        f = t._validate(t.o.parse(t.$.val())) + (u > 0 || a > 0 ? t.o.step : u < 0 || a < 0 ? -t.o.step : 0);
                    f = n(r(f, t.o.max), t.o.min);
                    t.val(f, false);
                    if (t.rH) {
                        clearTimeout(i);
                        i = setTimeout(function () {
                            t.rH(f);
                            i = null
                        }, 100);
                        if (!s) {
                            s = setTimeout(function () {
                                if (i) t.rH(f);
                                s = null
                            }, 200)
                        }
                    }
                },
                u, a, f = 1,
                l = {
                    37: -t.o.step,
                    38: t.o.step,
                    39: t.o.step,
                    40: -t.o.step
                };
            this.$.bind("keydown", function (i) {
                var s = i.keyCode;
                if (s >= 96 && s <= 105) {
                    s = i.keyCode = s - 48
                }
                u = parseInt(String.fromCharCode(s));
                if (isNaN(u)) {
                    s !== 13 && s !== 8 && s !== 9 && s !== 189 && (s !== 190 || t.$.val().match(/\./)) && i.preventDefault();
                    if (e.inArray(s, [37, 38, 39, 40]) > -1) {
                        i.preventDefault();
                        var o = t.o.parse(t.$.val()) + l[s] * f;
                        t.o.stopper && (o = n(r(o, t.o.max), t.o.min));
                        t.change(t._validate(o));
                        t._draw();
                        a = window.setTimeout(function () {
                            f *= 2
                        }, 30)
                    }
                }
            }).bind("keyup", function (e) {
                if (isNaN(u)) {
                    if (a) {
                        window.clearTimeout(a);
                        a = null;
                        f = 1;
                        t.val(t.$.val())
                    }
                } else {
                    t.$.val() > t.o.max && t.$.val(t.o.max) || t.$.val() < t.o.min && t.$.val(t.o.min)
                }
            });
            this.$c.bind("mousewheel DOMMouseScroll", o);
            this.$.bind("mousewheel DOMMouseScroll", o)
        };
        this.init = function () {
            if (this.v < this.o.min || this.v > this.o.max) {
                this.v = this.o.min
            }
            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;
            this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
            this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
            var e = n(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
            this.o.displayInput && this.i.css({
                width: (this.w / 2 + 4 >> 0) + "px",
                height: (this.w / 3 >> 0) + "px",
                position: "absolute",
                "vertical-align": "middle",
                "margin-top": (this.w / 3 >> 0) + "px",
                "margin-left": "-" + (this.w * 3 / 4 + 2 >> 0) + "px",
                border: 0,
                background: "none",
                font: this.o.fontWeight + " " + (this.w / e >> 0) + "px " + this.o.font,
                "text-align": "center",
                color: this.o.inputColor || this.o.fgColor,
                padding: "0px",
                "-webkit-appearance": "none"
            }) || this.i.css({
                width: "0px",
                visibility: "hidden"
            })
        };
        this.change = function (e) {
            this.cv = e;
            this.$.val(this.o.format(e))
        };
        this.angle = function (e) {
            return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min)
        };
        this.arc = function (e) {
            var t, n;
            e = this.angle(e);
            if (this.o.flip) {
                t = this.endAngle + 1e-5;
                n = t - e - 1e-5
            } else {
                t = this.startAngle - 1e-5;
                n = t + e + 1e-5
            }
            this.o.cursor && (t = n - this.cursorExt) && (n = n + this.cursorExt);
            return {
                s: t,
                e: n,
                d: this.o.flip && !this.o.cursor
            }
        };
        this.draw = function () {
            var e = this.g,
                t = this.arc(this.cv),
                n, r = 1;
            e.lineWidth = this.lineWidth;
            e.lineCap = this.lineCap;
            if (this.o.bgColor !== "none") {
                e.beginPath();
                e.strokeStyle = this.o.bgColor;
                e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, true);
                e.stroke()
            }
            if (this.o.displayPrevious) {
                n = this.arc(this.v);
                e.beginPath();
                e.strokeStyle = this.pColor;
                e.arc(this.xy, this.xy, this.radius, n.s, n.e, n.d);
                e.stroke();
                r = this.cv == this.v
            }
            e.beginPath();
            e.strokeStyle = r ? this.o.fgColor : this.fgColor;
            e.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d);
            e.stroke()
        };
        this.cancel = function () {
            this.val(this.v)
        }
    };
    e.fn.dial = e.fn.knob = function (n) {
        return this.each(function () {
            var r = new t.Dial;
            r.o = n;
            r.$ = e(this);
            r.run()
        }).parent()
    }
});
(function (e) {
    var t, n, i, o, r, a, s, l = "Close",
        c = "BeforeClose",
        d = "AfterClose",
        u = "BeforeAppend",
        p = "MarkupParse",
        f = "Open",
        m = "Change",
        g = "mfp",
        h = "." + g,
        v = "mfp-ready",
        C = "mfp-removing",
        y = "mfp-prevent-close",
        w = function () {},
        b = !!window.jQuery,
        I = e(window),
        x = function (e, n) {
            t.ev.on(g + e + h, n)
        },
        k = function (t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        T = function (n, i) {
            t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        E = function (n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        },
        _ = function () {
            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
        },
        S = function () {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    w.prototype = {
        constructor: w,
        init: function () {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function (n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return t.updateItemHTML(), void 0;
            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function () {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function (e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; c.length > r; r++) {
                var d = c[r];
                d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: I.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + h, function (e) {
                27 === e.keyCode && t.close()
            }), I.on("resize" + h, function () {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var u = t.wH = I.height(),
                m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var g = t._getScrollbarSize();
                g && (m.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var C = t.st.mainClass;
            return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
        },
        close: function () {
            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function () {
            T(l);
            var n = C + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function () {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function (e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function (n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, a = 0; r.length > a; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
        },
        addGroup: function (e, n) {
            var i = function (i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function (n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (a > I.width()) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function (e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function (n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function (e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function (n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function (t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function (e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(h + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(h + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function (t, n) {
            return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function (n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var P, O, z, M = "inline",
        B = function () {
            z && (O.after(z.addClass(P)).detach(), z = null)
        };
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                t.types.push(M), x(l + "." + M, function () {
                    B()
                })
            },
            getInline: function (n, i) {
                if (B(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var F, H = "ajax",
        L = function () {
            F && i.removeClass(F)
        },
        A = function () {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
            },
            getAjax: function (n) {
                F && i.addClass(F), t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function (i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function () {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function () {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var j, N = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), x(f + n, function () {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }), x(l + n, function () {
                    e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
                }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function (e) {
                var n = 0,
                    i = e.img[0],
                    o = function (r) {
                        j && clearInterval(j), j = setInterval(function () {
                            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
                        }, r)
                    };
                o(1)
            },
            getImage: function (n, i) {
                var o = 0,
                    r = function () {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
                    },
                    a = function () {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var W, R = function () {
        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration,
                        s = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        d = function () {
                            t.content.css("visibility", "visible")
                        };
                    x("BuildControls" + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
                            r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                                r.css(t._getOffset(!0)), o = setTimeout(function () {
                                    d(), setTimeout(function () {
                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), x(c + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), x(l + i, function () {
                        t._allowZoom() && (d(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function () {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function (n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var Z = "iframe",
        q = "//about:blank",
        D = function (e) {
            if (t.currTemplate[Z]) {
                var n = t.currTemplate[Z].find("iframe");
                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                t.types.push(Z), x("BeforeChange", function (e, t, n) {
                    t !== n && (t === Z ? D() : n === Z && D(!0))
                }), x(l + "." + Z, function () {
                    D()
                })
            },
            getIframe: function (n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function () {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
            }
        }
    });
    var K = function (e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        Y = function (e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var n = t.st.gallery,
                    i = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function () {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + i, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), x("UpdateStatus" + i, function (e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }), x(p + i, function (e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
                }), x("BuildControls" + i, function () {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            s = r ? "mfpFastClick" : "click";
                        o[s](function () {
                            t.prev()
                        }), a[s](function () {
                            t.next()
                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
                    }
                }), x(m + i, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), x(l + i, function () {
                    o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }), void 0) : !1
            },
            next: function () {
                t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
            },
            prev: function () {
                t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
            },
            goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1;
                    (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
                for (e = 1;
                    (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function (n) {
                if (n = K(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        i.hasSize = !0
                    }).on("error.mfploader", function () {
                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function (e) {
                    return e.src.replace(/\.\w+$/, function (e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function (e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), x("ElementParse." + U, function (t, i) {
                            i.src = e.replaceSrc(i, n)
                        }))
                    }
                }
            }
        }),
        function () {
            var t = 1e3,
                n = "ontouchstart" in window,
                i = function () {
                    I.off("touchmove" + r + " touchend" + r)
                },
                o = "mfpFastClick",
                r = "." + o;
            e.fn.mfpFastClick = function (o) {
                return e(this).each(function () {
                    var a, s = e(this);
                    if (n) {
                        var l, c, d, u, p, f;
                        s.on("touchstart" + r, function (e) {
                            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function (e) {
                                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
                            }).on("touchend" + r, function (e) {
                                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                                    a = !1
                                }, t), o())
                            })
                        })
                    }
                    s.on("click" + r, function () {
                        a || o()
                    })
                })
            }, e.fn.destroyMfpFastClick = function () {
                e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
            }
        }(), _()
})(window.jQuery || window.Zepto);
"function" !== typeof Object.create && (Object.create = function (f) {
    function g() {}
    g.prototype = f;
    return new g
});
(function (f, g, k) {
    var l = {
        init: function (a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function () {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ? (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
        },
        logIn: function () {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function () {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function () {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay && (this.options.autoPlay = 5e3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function () {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function () {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function () {
            var a = this;
            g.setTimeout(function () {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function () {
            var a = this;
            if (!1 === a.$elem.is(":visible")) a.$elem.css({
                opacity: 0
            }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function () {
                a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                    opacity: 1
                }, 200), g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function () {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function () {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function () {
            var a, b;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function (a, b) {
                        return a[0] - b[0]
                    }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function () {
            var a = this,
                b, e;
            if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function () {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function () {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            };
            f(g).resize(a.resizer)
        },
        updatePosition: function () {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function () {
            var a = this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function (c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function () {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function () {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function () {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        },
        max: function () {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
            return a
        },
        min: function () {
            return 0
        },
        loops: function () {
            var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]), c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
        },
        buildControls: function () {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function () {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev = f("<div/>", {
                "class": "owl-prev",
                html: a.options.navigationText[0] || ""
            });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function () {
            var a = this;
            a.paginationWrapper = f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function () {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items && (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
                "class": "owl-page"
            }), g = f("<span></span>", {
                text: !0 === this.options.paginationNumbers ? a : "",
                "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
            }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
            this.checkPagination()
        },
        checkPagination: function () {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function () {
                f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
            })
        },
        checkNavigation: function () {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function () {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function () {
            this.owlControls && this.owlControls.remove()
        },
        next: function (a) {
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a)
        },
        prev: function (a) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function (a, b, e) {
            var c = this;
            if (c.isTransition) return !1;
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function () {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function () {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function () {
                c.isCss3Finish = !0
            }, c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function (a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem = this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function () {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function () {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function () {
            "stop" !== this.apStatus && this.play()
        },
        play: function () {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function () {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function (a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function (a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function (a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function (a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function (a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function (a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function () {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function () {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function () {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function () {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function () {
            this.$elem.on("dragstart.owl", function (a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function (a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function () {
            function a(a) {
                if (void 0 !== a.touches) return {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return {
                        x: a.pageX,
                        y: a.pageY
                    };
                    if (void 0 === a.pageX) return {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            }

            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
            }

            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }

            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function (a) {
                    a.stopImmediatePropagation();
                    a.stopPropagation();
                    a.preventDefault();
                    f(a.target).off("click.disable")
                }), a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off")
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
                    !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function () {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0);
            return a
        },
        closestItem: function () {
            var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function (d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) : (c = b[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function () {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function () {
            var a = this;
            a.$elem.on("owl.next", function () {
                a.next()
            });
            a.$elem.on("owl.prev", function () {
                a.prev()
            });
            a.$elem.on("owl.play", function (b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function () {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function (b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function (b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function () {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function () {
                a.stop()
            }), a.$elem.on("mouseout", function () {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function () {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ? b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
        },
        lazyPreload: function (a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem])
            }

            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function () {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function () {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "")
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a()
        },
        completeImg: function (a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function () {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function (a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function () {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g + "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function (a, b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function () {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function () {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function () {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function () {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function (a) {
            a = f.extend({}, this.userOptions, a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function (a, b) {
            var e;
            if (!a) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function (a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function (a) {
        return this.each(function () {
            if (!0 === f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.submit(function (b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function () {
            var b, c;
            return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
                b = c.element(this) && b
            })), b
        },
        removeAttrs: function (b) {
            var c = {},
                d = this;
            return a.each(b.split(/\s/), function (a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        },
        rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                case "add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;
                case "remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
                        i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                    }), i) : (delete e[j.name], f)
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                required: h
            }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                remote: h
            })), g
        }
    }), a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        },
        filled: function (b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = a.data(this[0].form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function (b) {
                var c = this.clean(b),
                    d = this.validationTargetFor(c),
                    e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            },
            showErrors: function (b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (a) {
                var b, c = 0;
                for (b in a) c++;
                return c
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function () {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            },
            clean: function (b) {
                return a(b)[0]
            },
            errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function (b) {
                var c, d = a(b),
                    e = b.type;
                return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function (a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters),
                            "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function () {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a];
                return void 0
            },
            defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function (b, c) {
                var d = this.defaultMessage(b, c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            },
            addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (b, c) {
                var d, e, f, g = this.errorsFor(b),
                    h = this.idOrName(b),
                    i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id"), i ? i.match(new RegExp("\b" + f + "\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
                }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
            },
            errorsFor: function (b) {
                var c = this.idOrName(b),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function (a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
            },
            checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function (b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function (a) {
                    return a
                },
                string: function (b, c) {
                    return !!a(b, c.form).length
                },
                "function": function (a, b) {
                    return a(b)
                }
            },
            optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function (a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        attributeRules: function (b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {},
                f = a(b);
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },
        staticRules: function (b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            },
            email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function (a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function (a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function (a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0,
                    f = 0,
                    g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                return e % 10 === 0
            },
            minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            },
            maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            },
            rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function (a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function (a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function (b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
                    url: d
                } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function (d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    }), a.format = function () {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function (d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a.extend(a.fn, {
        validateDelegate: function (b, c, d) {
            return this.bind(c, function (c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
});
! function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function (e) {
                    x.abort(e)
                }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {},
                    getResponseHeader: function () {},
                    setRequestHeader: function () {},
                    abort: function (t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function (e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                C = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                },
                _ = function (t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
                f.resetForm()
            }), t.clearForm && x.push(function () {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function () {};
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function (e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
                    name: f,
                    value: e(d).val(),
                    type: d.type
                }), a.push({
                    name: f + ".x",
                    value: o.clk_x
                }, {
                    name: f + ".y",
                    value: o.clk_y
                }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
                name: f,
                value: m[l]
            });
        else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
                for (l = 0; l < v.length; l++) a.push({
                    name: f,
                    value: v[l],
                    type: d.type
                });
            else a.push({
                name: f,
                value: "",
                type: d.type
            })
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({
                        name: a,
                        value: n[i]
                    });
                else null !== n && "undefined" != typeof n && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});
$(document).ready(function () {
    "use strict";
    $("#content-wrap, .cat-pages").niceScroll({
        cursorcolor: "#d7d7d7",
        cursorwidth: "6px",
        cursorborder: "none",
        cursorborderradius: "8px",
        horizrailenabled: false,
        autohidemode: false,
        zindex: 1e4
    });
    $("#content-wrap, .cat-pages").getNiceScroll().show(0)
});
$(document).ready(function () {
    "use strict";
    $("a.page-scroll").on("click", function (event) {
        $("a.page-scroll").addClass("disabled-button");
        var reactiveBtn = setTimeout(function () {
            $("a.page-scroll").removeClass("disabled-button")
        }, 1300);
        var contentWrap = $("#content-wrap");
        var catPages = $(".cat-pages");
        var sectionId = $(this).attr("href");
        var rmenu = $("#responsive-menu");
        var ascroll = $("a.page-scroll");
        $("#content-wrap, .cat-pages").getNiceScroll().hide(0).resize();
        ascroll.removeClass("nav-current");
        $(this).addClass("nav-current");
        rmenu.addClass("responsive-menu");
        clearTimeout(prr1);
        clearTimeout(prr2);
        clearTimeout(prr3);
        clearTimeout(prl1);
        clearTimeout(prl2);
        clearTimeout(prl3);
        clearTimeout(prn1);
        clearTimeout(prn2);
        clearTimeout(pll1);
        clearTimeout(pll2);
        clearTimeout(pll2);
        clearTimeout(plr1);
        clearTimeout(plr2);
        clearTimeout(plr3);
        clearTimeout(pln1);
        clearTimeout(pln2);
        clearTimeout(cf);
        setTimeout(function () {
            rmenu.css("opacity", "1")
        }, 100);
        if (!$(sectionId).hasClass("cat-pages-active")) {
            catPages.removeClass("cat-pages-active");
            $(sectionId).addClass("cat-pages-active");
            if ($(this).hasClass("page-right")) {
                if (contentWrap.hasClass("content-wrap-right")) {
                    catPages.css("z-index", "2").removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50");
                    var prr1 = setTimeout(function () {
                        catPages.css("display", "none");
                        $(sectionId).css({
                            display: "block",
                            "z-index": "3"
                        });
                        catPages.removeClass("cat-left-50").removeClass("cat-left-0").addClass("cat-left-25")
                    }, 300);
                    var prr2 = setTimeout(function () {
                        $(sectionId).removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50")
                    }, 350);
                    var prr3 = setTimeout(function () {
                        $("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize()
                    }, 1300)
                } else if (contentWrap.hasClass("content-wrap-left")) {
                    catPages.removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0");
                    var prl1 = setTimeout(function () {
                        catPages.css("display", "none");
                        $(sectionId).css("display", "block")
                    }, 1e3);
                    var prl2 = setTimeout(function () {
                        $(sectionId).removeClass("cat-left-50").removeClass("cat-left-0").addClass("cat-left-50")
                    }, 1050);
                    var prl3 = setTimeout(function () {
                        $("#content-wrap, .cat-pages").delay(2100).getNiceScroll().show(0).resize()
                    }, 2e3)
                } else {
                    $(sectionId).css("display", "block");
                    var prn1 = setTimeout(function () {
                        catPages.css("display", "none");
                        $(sectionId).css("display", "block").removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50").addClass("cat-pages-responsive-0")
                    }, 1);
                    var prn2 = setTimeout(function () {
                        $("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize()
                    }, 1300)
                }
                contentWrap.removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0").removeClass("content-wrap-right").addClass("content-wrap-left")
            } else {
                if (contentWrap.hasClass("content-wrap-left")) {
                    catPages.removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0");
                    var pll1 = setTimeout(function () {
                        catPages.css("display", "none");
                        $(sectionId).css("display", "block");
                        catPages.removeClass("cat-left-50").removeClass("cat-left-0").addClass("cat-left-25")
                    }, 300);
                    var pll2 = setTimeout(function () {
                        $(sectionId).removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0")
                    }, 350);
                    var pll3 = setTimeout(function () {
                        $("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize()
                    }, 1300)
                } else if (contentWrap.hasClass("content-wrap-right")) {
                    catPages.removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50");
                    var plr1 = setTimeout(function () {
                        catPages.css("display", "none");
                        $(sectionId).css("display", "block")
                    }, 1e3);
                    var plr2 = setTimeout(function () {
                        $(sectionId).removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0")
                    }, 1050);
                    var plr3 = setTimeout(function () {
                        $("#content-wrap, .cat-pages").delay(2100).getNiceScroll().show(0).resize()
                    }, 2e3)
                } else {
                    $(sectionId).css("display", "block");
                    var pln1 = setTimeout(function () {
                        $(sectionId).removeClass("cat-left-50").removeClass("cat-left-25").addClass("cat-left-0").addClass("cat-pages-responsive-0")
                    }, 1);
                    var pln2 = setTimeout(function () {
                        $("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize()
                    }, 1300)
                }
                contentWrap.removeClass("cat-left-0").removeClass("cat-left-25").addClass("cat-left-50").removeClass("content-wrap-left").addClass("content-wrap-right")
            }
        } else {
            catPages.removeClass("cat-left-0").removeClass("cat-left-50").addClass("cat-left-25");
            contentWrap.removeClass("content-wrap-left").removeClass("content-wrap-right").removeClass("cat-left-0").removeClass("cat-left-50").addClass("cat-left-25");
            catPages.removeClass("cat-pages-active");
            ascroll.removeClass("nav-current");
            setTimeout(function () {
                catPages.css("display", "none")
            }, 1e3)
        }
        if (sectionId !== "#contact") {
            var cf = setTimeout(function () {
                $("#contact").delay(1300).getNiceScroll().hide(0).resize()
            }, 1300)
        }
        return false
    })
});
$(document).ready(function () {
    "use strict";
    $("a#responsive-menu-list").on("click", function (event) {
        var contentWrap = $("#content-wrap");
        var rmenu = $("#responsive-menu").find("ul");
        clearTimeout(timeouts);
        if (rmenu.hasClass("responsive-menu-disable")) {
            rmenu.removeClass("responsive-menu-disable").css("display", "block");
        } else {
            rmenu.addClass("responsive-menu-disable").css("display", "none")
        }
        var timeouts = setTimeout(function () {
            contentWrap.css("display", "none").css("visible", "hidden")
        }, 1050);
        return false
    })
});
$(document).ready(function () {
    "use strict";
    $("a.page-scroll-responsive").on("click", function (event) {
        var contentWrap = $("#content-wrap");
        var catPages = $(".cat-pages");
        var sectionId = $(this).attr("href");
        var rmenu = $("#responsive-menu");
        var rmenul = rmenu.find("ul");
        var contact = $("#contact");
        var ascroll = $("a.page-scroll");
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(timeout5);
        $("#content-wrap, .cat-pages").getNiceScroll().hide(0);
        rmenul.addClass("responsive-menu-disable").css("display", "none");
        var timeout1 = setTimeout(function () {
            contact.css("visibility", "visible")
        }, 1e3);
        catPages.removeClass("cat-pages-responsive-0").addClass("cat-pages-responsive-100");
        var timeout2 = setTimeout(function () {
            catPages.css("display", "none");
            $(sectionId).css("display", "block")
        }, 1e3);
        var timeout3 = setTimeout(function () {
            contentWrap.removeClass("content-wrap-left").removeClass("content-wrap-right");
            $(sectionId).removeClass("cat-pages-responsive-100").addClass("cat-pages-responsive-0")
        }, 1050);
        var timeout4 = setTimeout(function () {
            $("#content-wrap, .cat-pages").delay(2e3).getNiceScroll().show(0).resize()
        }, 2100);
        if (sectionId === "#content-wrap") {
            rmenu.css("opacity", "0");
            catPages.removeClass("cat-pages-active");
            ascroll.removeClass("nav-current");
            var timeout5 = setTimeout(function () {
                rmenu.removeClass("responsive-menu")
            }, 1100)
        }
        return false
    })
});
$(document).ready(function () {
    "use strict";
    if ($(".menu ul li ul").length) {
        $(".menu ul li ul").closest("li").addClass("sub-menu")
    }
    $(".menu ul li").hover(function () {
        $(this).find("ul").css("visibility", "visible")
    }, function () {
        $(this).find("ul").css("visibility", "hidden")
    })
});
$(document).ready(function () {
    "use strict";
    $(".iconbox ul li").hover(function () {
        $(".iconbox ul li").not(this).css("opacity", ".5")
    }, function () {
        $(".iconbox ul li").css("opacity", "1")
    })
});
$(document).ready(function () {
    "use strict";
    $(".dial").knob({
        width: "100",
        height: "100",
        thickness: .05,
        fgColor: "rgba(255, 255, 255, .6)",
        bgColor: "rgba(255, 255, 255, .4)",
        inputColor: "#fff",
        readOnly: true,
        font: '28px "Poiret One"',
        fontWeight: "300",
        parse: function (v) {
            return parseInt(v, 10)
        },
        format: function (v) {
            return v + "%"
        }
    })
});
$(document).ready(function () {
    "use strict";
    $(".timeline ul li").hover(function () {
        $(".timeline ul li").not(this).css("opacity", ".5");
        $("span", this).addClass("changed")
    }, function () {
        $(".timeline ul li").css("opacity", "1");
        $("span", this).removeClass("changed")
    })
});
$(document).ready(function () {
    "use strict";
    $(".popup-ajax").magnificPopup({
        type: "ajax",
        mainClass: "mfp-fade",
        showCloseBtn: false,
        overflowY: "scroll"
    });
    $(document).on("click", ".ajax-popup-dismiss", function (e) {
        e.preventDefault();
        $.magnificPopup.close()
    });
    $(".popup-image").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        removalDelay: 300,
        mainClass: "mfp-fade",
        image: {
            verticalFit: true
        }
    });
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    })
});
$(document).ready(function () {
    "use strict";
    $(".portfolio-fliter ul a").click(function () {
        $(".portfolio-fliter ul .current").removeClass("current");
        $(this).parent().addClass("current");
        var filterVal = $(this).text().toLowerCase().replace(" ", "-");
        if (filterVal == "all") {
            $(".portfolio-items ul li img.phidden").css("opacity", "1").removeClass("phidden")
        } else {
            $(".portfolio-items ul li img").each(function () {
                if (!$(this).hasClass(filterVal)) {
                    $(this).css("opacity", ".2").addClass("phidden")
                } else {
                    $(this).css("opacity", "1").removeClass("phidden")
                }
            })
        }
        return false
    })
});
$(document).ready(function () {
    "use strict";
    $(".portfolio-items ul li").hover(function () {
        var phover = $(this).find("img");
        var phoveri = $(this).find(".portfolio-description");
        if (!phover.hasClass("phidden")) {
            phover.css("opacity", ".1");
            phoveri.css("opacity", "1");
            $("h3", phoveri).css("opacity", "1");
            $("p", phoveri).css("opacity", "1")
        }
    }, function () {
        var phover = $(this).find("img");
        var phoveri = $(this).find(".portfolio-description");
        if (!phover.hasClass("phidden")) {
            phover.css("opacity", "1");
            phoveri.css("opacity", "0");
            $("h3", phoveri).css("opacity", "0");
            $("p", phoveri).css("opacity", "0")
        }
    })
});
$(document).ready(function () {
    "use strict";
    $("#quote-slideshow").owlCarousel({
        singleItem: true,
        autoPlay: true,
        pagination: true
    })
});
$(document).ready(function () {
    "use strict";
    $(".blog ul li").hover(function () {
        $(".blog ul li").not(this).css("opacity", ".5");
        $(this).find("img").css("opacity", ".6")
    }, function () {
        $(".blog ul li").css("opacity", "1");
        $(this).find("img").css("opacity", ".8")
    })
});
$(document).ready(function () {
    "use strict";
    var contact = $("#contact");
    $("li#contact-link a").on("click", function (event) {
        contact.css("z-index", "1");
        if ($(this).parent().hasClass("page-right")) {
            contact.css("visibility", "visible")
        } else if ($("#content-wrap").css("left", "25%")) {
            contact.css("visibility", "visible")
        } else {
            setTimeout(function () {
                contact.css("visibility", "visible")
            }, 500)
        }
    });
    $("a.contact-button").on("click", function (event) {
        contact.css("z-index", "1");
        setTimeout(function () {
            contact.css("visibility", "visible")
        }, 800)
    });
    $('a[href="#contact"]').on("click", function (event) {
        contact.css("z-index", "1")
    })
});
$(document).ready(function () {
    "use strict";
    $("#contactform").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please Enter Your Name",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "Please Enter Your Email Address"
            },
            subject: {
                required: "Please Enter Your Message Subject"
            },
            message: {
                required: "Please Enter Your Message.",
                minlength: "Your Message Is Too Long!"
            }
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "contact.php",
                success: function () {
                    $("#contactform").clearForm();
                    $("#cf-success").css("display", "block").css("opacity", "1")
                },
                error: function () {
                    $("#cf-error").css("display", "block").css("opacity", "1")
                }
            })
        }
    })
});