var q = !0
  , s = null
  , A = !1;
window.keyshotVR = function(R, u, S, T, ia, C, ja, ka, la, ma, na, H, I, oa, pa, qa, U, ra, sa, ta, V, ua, va,imgsrcArr) {
    function M(a, e, b) {
        a.removeEventListener ? a.removeEventListener(e, b, A) : a.detachEvent && (a.detachEvent("on" + e, a["e" + e + b]),
        a["e" + e + b] = s)
    }
    function m(a, e, b) {
        a.addEventListener ? a.addEventListener(e, b, A) : a.attachEvent && (a["e" + e + b] = b,
        a.attachEvent("on" + e, function() {
            a["e" + e + b]()
        }))
    }
    function W() {
        var a = A;
        -1 != navigator.platform.toString().indexOf("Win") && -1 != navigator.appVersion.indexOf("MSIE") && (a = q);
        return a
    }
    function wa() {
        var a = document.getElementById(R)
          , b = a.requestFullScreen || a.webkitRequestFullScreen || a.mozRequestFullScreen || a.msRequestFullScreen;
        "undefined" != typeof b && b && b.call(a)
    }
    function xa(h) {
        a.ja = A;
        h.pointerId in a.F && delete a.F[h.pointerId];
        X(h)
    }
    function ya(h) {
        a.ja && (a.F[h.pointerId] = [h.pageX, h.pageY],
        Y(h))
    }
    function za(h) {
        a.ja = q;
        a.F[h.pointerId] = [h.pageX, h.pageY];
        Z(h)
    }
    function $() {
        a.o ? (setTimeout(function() {
            a.t(A)
        }, 20),
        setTimeout(function() {
            a.t(q)
        }, 120)) : (setTimeout(function() {
            a.t(q)
        }, 20),
        setTimeout(function() {
            a.t(A)
        }, 120))
    }
    function F() {
        var a = {
            x: 0,
            y: 0
        }
          , b = r;
        if (b.offsetParent) {
            do
                a.x += b.offsetLeft,
                a.y += b.offsetTop;
            while (b = b.offsetParent)
        }
        return a
    }
    function aa() {
        var h = c.g;
        c.g = Math.min(v.width / w.width, v.height / w.height);
        h != c.g && a.Q(a.v() * h / c.g);
        a.o ? (p.setAttribute("height", ""),
        //p.style[J] = "translate(" + -w.width / 2 + "px," + -w.height / 2 + "px) scale(" + c.g + ") translate(" + 0.5 * v.width / c.g + "px," + 0.5 * v.height / c.g + "px) translate(" + c.i + "px," + c.j + "px) scale(" + c.m + ")",
        p.style["max-width"] = "",
        p.style.width = "",
        p.style.height = "",
        r.style["background-color"] = a.backgroundColor) : (p.removeAttribute("height"),
        p.style[J] = "scale(" + c.m + ")",
        p.style.width = "100%",
        p.style.height = "auto",
        r.style["background-color"] = "")
    }
    function K() {
        a.Oa(a.k.offsetWidth, a.k.offsetHeight)
    }
    function ba(a, b) {
        l.start.x = a;
        l.start.y = b;
        l.a.x = a;
        l.a.y = b;
        i.a.x = a;
        i.a.y = b
    }
    function ca(a, b) {
        l.b.x = a - l.a.x;
        l.b.y = b - l.a.y;
        l.m.x = a;
        l.m.y = b;
        l.a.x = a;
        l.a.y = b
    }
    function E(h) {
        h || (h = window.event);
        var b = 0;
        h.keyCode ? b = h.keyCode : h.which && (b = h.which);
        1 == b ? j.d |= 1 : 1 < b && (j.d |= 2);
        a.ta(h);
        h.preventDefault ? h.preventDefault() : h.returnValue = A
    }
    function G(h) {
        h || (h = window.event);
        var b = F();
        a.cursor.x = h.pageX - b.x + k.left;
        a.cursor.y = h.pageY - b.y + k.top;
        h.preventDefault ? h.preventDefault() : h.returnValue = A;
        0 < j.d && (1 == j.d ? ca(h.pageX, h.pageY) : 2 == j.d ? (h = a.cursor.y - D.start.y,
        b = a.v(),
        a.Q(c.s * Math.exp(h / 200)),
        h = a.v(),
        c.i += parseFloat(a.e * b - a.e * h),
        c.j += parseFloat(a.f * b - a.f * h)) : 3 == j.d && (b = a.cursor.x - D.start.x,
        h = a.cursor.y - D.start.y,
        c.i += parseFloat((b - c.l.x) / c.g),
        c.j += parseFloat((h - c.l.y) / c.g),
        c.l.x = b,
        c.l.y = h))
    }
    function L(h) {
        h || (h = window.event);
        var b = 0;
        h.keyCode ? b = h.keyCode : h.which && (b = h.which);
        1 == b ? j.d &= -2 : 1 < b && (j.d &= -3);
        a.ta(h);
        h.preventDefault ? h.preventDefault() : h.returnValue = A
    }
    function N(b) {
        b || (b = window.event);
        a.Da(0 < (b.detail ? -1 * b.detail : b.wheelDelta / 40) ? 1 : -1);
        b.preventDefault ? b.preventDefault() : b.returnValue = A
    }
    function Z(b) {
        b || (b = window.event);
        var e = da()
          , d = F();
        a.cursor.x = e[0].pageX - d.x + k.left;
        a.cursor.y = e[0].pageY - d.y + k.top;
        if (1 == e.length && e[0])
            if (j.start.x = e[0].pageX,
            j.start.y = e[0].pageY,
            j.a.x = e[0].pageX,
            j.a.y = e[0].pageY,
            a.na = e[0].target,
            a.na == a.K)
                j.d = 1,
                ba(e[0].pageX, e[0].pageY);
            else
                for (var f = a.na; f && f != a.K; ) {
                    if (f.onclick)
                        f.onclick();
                    f = f.parentNode
                }
        if (2 == e.length && e[0] && e[1]) {
            j.d = 3;
            j.$.x = e[0].pageX - d.x + k.left;
            j.$.y = e[0].pageY - d.y + k.top;
            j.aa.x = e[1].pageX - d.x + k.left;
            j.aa.y = e[1].pageY - d.y + k.top;
            var f = e[0].pageX - e[1].pageX
              , g = e[0].pageY - e[1].pageY
              , i = (e[0].pageX - d.x + k.left + (e[1].pageX - d.x + k.left)) / 2
              , e = (e[0].pageY - d.y + k.top + (e[1].pageY - d.y + k.top)) / 2;
            c.ma = A;
            c.Pa = Math.sqrt(f * f + g * g);
            c.s = a.v();
            a.e = parseFloat(i - 0.5 * v.width);
            a.f = parseFloat(e - 0.5 * v.height);
            a.e *= parseFloat(a.O);
            a.f *= parseFloat(a.O);
            a.e -= parseFloat(c.i);
            a.f -= parseFloat(c.j);
            a.e /= parseFloat(c.s);
            a.f /= parseFloat(c.s)
        }
        b.preventDefault()
    }
    function Y(b) {
        b || (b = window.event);
        var e = da()
          , d = F();
        a.cursor.x = e[0].pageX - d.x + k.left;
        a.cursor.y = e[0].pageY - d.y + k.top;
        1 == e.length && e[0] && (j.a.x = e[0].pageX,
        j.a.y = e[0].pageY,
        0 <= j.d && ca(j.a.x, j.a.y));
        if (2 == e.length && e[0] && e[1]) {
            var f = a.v()
              , g = e[0].pageX - e[1].pageX
              , i = e[0].pageY - e[1].pageY;
            a.Q(c.s / c.Pa * Math.sqrt(g * g + i * i));
            g = a.v();
            i = a.f * f - a.f * g;
            c.i += a.e * f - a.e * g;
            c.j += i;
            f = (a.cursor.x + e[1].pageX - d.x + k.left) / 2 - (j.$.x + j.aa.x) / 2;
            e = (a.cursor.y + e[1].pageY - d.y + k.top) / 2 - (j.$.y + j.aa.y) / 2;
            c.ma == A && (c.l.x = f,
            c.l.y = e,
            c.ma = q);
            c.i += (f - c.l.x) / c.g;
            c.j += (e - c.l.y) / c.g;
            c.l.x = f;
            c.l.y = e
        }
        b.preventDefault()
    }
    function da() {
        if (!W())
            return window.event.touches;
        var b = [];
        for (id in a.F) {
            var e = a.F[id]
              , d = {};
            d.pageX = e[0];
            d.pageY = e[1];
            d.target = a.K;
            d.preventDefault = function() {}
            ;
            b.push(d)
        }
        return b
    }
    function X(b) {
        b.preventDefault();
        a.na = s;
        j.d = 0;
        var e = (new Date).getTime()
          , d = e - (O || e + 1);
        clearTimeout(P);
        500 > d && 0 < d || (O = e,
        P = setTimeout(function() {
            clearTimeout(P)
        }, 500, [b]));
        O = e
    }
    function Aa(a) {
        a.preventDefault();
        j.d = 0
    }
    function Q() {
        Ba(Q);
        a.U == a.X && (1 == j.d ? 0.01 < i.J ? (i.b.x = 0.4 * (l.a.x - i.a.x),
        i.b.y = 0.4 * (l.a.y - i.a.y),
        i.a.x += i.b.x,
        i.a.y += i.b.y,
        a.ia(i.b.x, i.b.y)) : (a.ia(l.b.x, l.b.y),
        l.b.x = 0,
        l.b.y = 0) : 0.01 < i.J && (i.b.x *= i.J,
        i.b.y *= i.J,
        0.055 > i.b.x * i.b.x + i.b.y * i.b.y && (i.b.x = 0,
        i.b.y = 0,
        l.b.x = 0,
        l.b.y = 0,
        l.a.x = i.a.x,
        l.a.y = i.a.y),
        (0 != i.b.x || 0 != i.b.y) && a.ia(i.b.x, i.b.y)));
        a.ya();
        var b = 0;
        if (-1 == a.ea) {
            for (var e = 1, e = 0; e < a.r.length; e++) {
                var c = a.B[e];
                if (0 == a.w[c] && a.r[e].complete && a.r[e].width == w.width && a.r[e].height == w.height) {
                    a.D[c] = a.w[c];
                    a.w[c] = -1;
                    if (a.U == a.X) {
                        var f = a.r.length + a.wa;
                        f > d.q && (f = d.q);
                        if (f -= b)
                            for (var g = 0; g < f; g++)
                                a.da()
                    }
                    d.I = q;
                    0 == e && a.ya()
                }
                -1 != a.D[c] && b++
            }
            e = parseFloat(b / d.q);
            a.Na(e);
            b == d.q && (a.ea = 0,
            a.Ma())
        }
    }
    function ea(a) {
        a = a ? a : window.event;
        13 == a.keyCode && ($(),
        a.preventDefault ? a.preventDefault() : a.returnValue = A)
    }
    var B = "/"
      , fa = window.location.href,
      _ga=fa.indexOf("//"),
      _htp=fa.substr(0, _ga + 2),
      _fa=fa.substr(_ga+2),
      _va=_fa.indexOf("/");
    0 <= _va && (B = _htp+_fa.substr(0, _va + 1));
    this.ja = A;
    this.F = [];
    this.ya = function() {
        if (d.I) {
            d.I = A;
            var b = parseInt(d.S * d.c + d.R);
            -1 == a.D[b] || ha.setAttribute("src", a.C[b])
        }
        if (c.m != c.a || c.i != c.ua || c.j != c.va)
            c.a = c.m,
            c.ua = c.i,
            c.va = c.j,
            aa()
    }
    ;
    this.Xa = function(b) {
        for (var e = -1E3, c = b, f = parseFloat(parseInt(b % d.c)), g = parseFloat(parseInt(b / d.c)), f = f / d.c, f = f * 2 * Math.PI, g = g / d.h, g = g * Math.PI, b = Math.sin(f), f = Math.cos(f), g = Math.cos(g), i = Math.sqrt(b * b + f * f + g * g), b = b / i, f = f / i, g = g / i, i = 0; i < a.r.length; i++) {
            var j = a.B[i];
            if (-1 != a.D[j]) {
                var k = a.Aa[j].Ta
                  , k = b * k.x + f * k.y + g * k.Ua;
                e < k && (e = k,
                c = j)
            }
        }
        return c
    }
    ;
    this.da = function() {
        if (a.la < d.q) {
            var b = new Image
              , e = a.B[a.la];
            a.w[e] = 0;
            b.src = a.C[e];
            a.r.push(b);
            var c = parseInt(e % d.c)
              , f = parseInt(e / d.c)
              , c = c / d.c
              , c = c * 2 * Math.PI
              , f = f / d.h
              , f = f * Math.PI
              , b = Math.sin(c)
              , c = Math.cos(c)
              , f = Math.cos(f)
              , g = Math.sqrt(b * b + c * c + f * f);
            a.Aa[e] = {
                Ta: {
                    x: b / g,
                    y: c / g,
                    Ua: f / g
                }
            };
            a.la++
        }
    }
    ;
    this.Ca = function() {
        for (var b = d.oa, e = d.pa, c = 2, f = parseFloat(d.c / c), g = parseFloat(d.h / c), i = d.q, j = 0, k = 0, m = 0, n = 0, l = 0; a.M < i; ) {
            var p = parseInt(b % d.c)
              , r = parseInt(e % d.h)
              , l = parseInt(r * d.c + p);
            a.C[l] || (a.B[a.M] = l,
            a.M++,
            a.C[l] = a.sa(p, r));
            0 == j && (b += f,
            k++);
            1 == j && (e += g,
            m++);
            n++;
            if (n >= c)
                if (n = 0,
                0 == j)
                    j = 1,
                    k = 0;
                else if (1 == j && (b += f,
                k++,
                k >= c / 2)) {
                    c *= 2;
                    b = d.oa;
                    e = d.pa;
                    f = parseFloat(d.c / c);
                    g = parseFloat(d.h / c);
                    if (1 > f && 1 > g) {
                        for (b = 0; b < i; b++)
                            e = parseInt(b % d.c),
                            c = parseInt(b / d.c),
                            l = parseInt(c * d.c + e),
                            a.C[l] || (a.B[a.M] = l,
                            a.M++,
                            a.C[l] = a.sa(e, c));
                        break
                    }
                    j = m = k = 0
                }
        }
    }
    ;
    this.sa = function(b, e) {
        /*var arr = {
            0:"qktojcb4Qwa2QNvQARBdPw",
            1:"hk-gaVtWTx-89LLFquh1vQ",
            2:"oTEJZwfaT2qgQrLeaXu9VQ",
            3:"6Fj3JIBbQmelR6N7Ckoclg",
            4:"7e3ZhGoYQ7COJ42zyjAMJg",
            5:"YHmZfQN6RBO3wwT064jfvg",
            6:"CfYWAAm6RlWgrEMD_9GJ8g",
            7:"YXgJvbsMTxiPtehkGYbB8Q",
            8:"OO6p51f3Sr-xhR1uutB8KA",
            9:"vXUa43PmQQeELS_NqKBRvA",
            10:"PLkFmpJDTRGycanM7liy8w",
            11:"8GdguWXHS9C_kkdGrsDzcA",
            12:"aA2gu-IQR-OD5t6QzAn1xg",
            13:"auq1KJpBQk2R6QUFwG9-2g",
            14:"FUgdBEccTQ6TcsRu-DRLyw",
            15:"CfYWAAm6RlWgrEMD_9GJ8g"
        }*/
        var arr=imgsrcArr;
        var cc =  arr[b];
        if(!cc){
            cc=b;
        } 
        //return B + a.u + "/" + cc + "." + ta
        return "/" + a.u + "/" + cc + "." + ta
        //return B + a.u + "/" + parseInt(e) + "_" + parseInt(b) + "." + ta
    }
    ;
    this.ia = function(b, e) {
        var b = b * (1 < d.c ? a.Ra : 0)
          , e = e * (1 < d.h ? a.Sa : 0)
          , c = Math.sqrt(b * b + e * e);
        if (1E-4 < c && (d.ba += b,
        d.ca += e,
        d.z += c,
        1 < d.z)) {
            var c = parseInt(d.z)
              , f = Math.atan2(d.ba, d.ca);
            d.z -= c;
            d.ba = 0;
            d.ca = 0;
            0 > f && (f += 2 * Math.PI);
            f += Math.PI / 8;
            f = parseInt(f / (Math.PI / 4));
            0 > f && (f += 8);
            f %= 8;
            if (0 != x[f]) {
                var g = d.R
                  , g = g + c * x[f];
                if (d.za) {
                    for (; 0 > g; )
                        g += d.c;
                    for (; g >= d.c; )
                        g -= d.c
                } else
                    g >= d.c && (g = d.c - 1),
                    0 > g && (g = 0);
                d.R != g && (d.R = g,
                d.I = q)
            }
            if (0 != y[f]) {
                g = d.S;
                g += c * y[f];
                if (d.Ba) {
                    for (; 0 > g; )
                        g += d.h;
                    for (; g >= d.h; )
                        g -= d.h
                } else
                    g >= d.h && (g = d.h - 1),
                    0 > g && (g = 0);
                d.S != g && (d.S = g,
                d.I = q)
            }
        }
    }
    ;
    this.Qa = function() {
        a.t(!a.o);
        a.o ? a.H.setAttribute("src", B + a.u + "/files/GoFixedSizeIcon.png") : a.H.setAttribute("src", B + a.u + "/files/GoFullScreenIcon.png")
    }
    ;
    this.t = function(b) {
        a.o = b;
        a.o ? (t.style.position = "absolute",
        b = F(),
        t.style.left = window.pageXOffset - b.x + k.left + "px",
        t.style.top = window.pageYOffset - b.y + k.top + "px") : (t.style.position = "relative",
        t.style.left = "0px",
        t.style.top = "0px",
        document.body.style.overflow = "");
        K()
    }
    ;
    this.Fa = function() {
        var b = new Image;
        b.src = a.L.src;
        a.r[a.W] = b;
        b = a.B[a.W];
        a.D[b] = a.w[b];
        a.w[b] = -1;
        a.W++;
        d.I = q;
        a.W == d.q && (a.ea = 0,
        a.Ga())
    }
    ;
    var P, O = s;
    this.ta = function(b) {
        var e = F();
        a.cursor.x = b.pageX - e.x + k.left;
        a.cursor.y = b.pageY - e.y + k.top;
        1 == j.d ? ba(b.pageX, b.pageY) : 2 == j.d ? (D.start.x = a.cursor.x,
        D.start.y = a.cursor.y,
        c.s = a.v(),
        a.e = a.cursor.x - 0.5 * v.width,
        a.f = a.cursor.y - 0.5 * v.height,
        a.e *= a.O,
        a.f *= a.O,
        a.e -= c.i,
        a.f -= c.j,
        a.e /= c.s,
        a.f /= c.s) : 3 == j.d && (D.start.x = a.cursor.x,
        D.start.y = a.cursor.y,
        c.l.x = 0,
        c.l.y = 0)
    }
    ;
    this.Da = function(b) {
        a.Q(c.m * Math.exp(-b / 50))
    }
    ;
    this.v = function() {
        return c.m
    }
    ;
    this.Q = function(a) {
        a > c.ga / c.g && (a = c.ga / c.g);
        a < c.ha / c.g && (a = c.ha / c.g);
        c.m = a
    }
    ;
    this.Wa = function(a, b, c, d) {
        k.left = a;
        k.top = b;
        k.right = c;
        k.bottom = d;
        K()
    }
    ;
    this.Oa = function(b, c) {
        a.o && (b = window.innerWidth,
        c = window.innerHeight);
        var d = b - k.left - k.right
          , f = c - k.top - k.bottom;
        v.width = d;
        v.height = f;
        r.style.width = d + "px";
        r.style.height = f + "px";
        r.style.left = k.left + "px";
        r.style.top = k.top + "px";
        aa();
        n.style.width = b + "px";
        n.style.height = c + "px";
        n.xa && n.xa(b, c)
    }
    ;
    this.T = function(a) {
        m(a, "mousedown", E);
        m(a, "mousemove", G);
        m(a, "mouseup", L)
    }
    ;
    this.Z = function(a) {
        M(a, "mousedown", E);
        M(a, "mousemove", G);
        M(a, "mouseup", L)
    }
    ;
    this.Ma = function() {
        a.p && (a.p.style.visibility = "hidden",
        a.Z(a.p),
        a.Z(a.N),
        a.Z(a.n))
    }
    ;
    this.Ga = function() {
        a.A.style.visibility = "hidden";
        a.Z(a.A)
    }
    ;
    var Ba = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 10)
    }
    ;
    this.ra = function() {
        a.p = document.createElement("div");
        a.T(a.p);
        a.p.V = function() {
            this.parentNode && (this.style.left = "16px",
            this.style.top = "16px")
        }
        ;
        b = "position:absolute;";
        b += "left: 0px;";
        b += "top:  0px;";
        b += "width: 80px;";
        b += "height: 80px;";
        b += z + "transform-origin: 50% 50%;";
        b += "visibility: inherit;";
        a.p.setAttribute("style", b);
        a.N = document.createElement("div");
        a.T(a.N);
        b = "position:absolute;";
        b += "left: 0px;";
        b += "top:  29px;";
        b += "width: 80px;";
        b += "height: 80px;";
        b += z + "transform-origin: 50% 50%;";
        b += "opacity: 1.0;";
        b += "visibility: inherit;";
        b += "border: 0px solid #000000;";
        b += "color: #ffffff;";
        b += "text-align: left;";
        b += "white-space: nowrap;";
        b += "padding: 0px 0px 0px 0px;";
        b += "overflow: hidden;";
        a.N.setAttribute("style", b);
        a.n = document.createElement("div");
        a.T(a.n);
        a.n.Y = {
            Ia: 0,
            Ja: 0,
            fa: 0,
            Ka: 1,
            La: 1,
            Za: 1
        };
        b = "position:absolute;";
        b += "left: 0px;";
        b += "top:  0px;";
        b += "width: 80px;";
        b += "height: 80px;";
        b += z + "transform-origin: 50% 50%;";
        b += "opacity: 1.0;";
        b += "visibility: inherit;";
        b += "border: 0px solid #000000;";
        b += "color: #ffffff;";
        b += "text-align: left;";
        b += "white-space: nowrap;";
        b += "padding: 0px 0px 0px 0px;";
        b += "overflow: hidden;";
        var c = ua;
        "" == c && (c = "ks_logo.png");
        a.n.setAttribute("style", b);
        // a.n.innerHTML = '<img src="' + B + a.u + "/" + c + '"></img>';
        a.p.appendChild(a.n);
        a.p.appendChild(a.N);
        n.appendChild(a.p);
        a.t(a.o);
        setTimeout(function() {
            a.t(a.o)
        }, 10)
    }
    ;
    this.Na = function(b) {
        if (a.p) {
            a.N.innerHTML = "<center>" + parseInt(100 * b) + "</center>";
            a.n.Y.fa += 2.1;
            b = "";
            if (a.n.Y)
                var c = a.n.Y
                  , b = b + ("translate(" + c.Ia + "px," + c.Ja + "px) rotate(" + c.fa + "deg) scale(" + c.Ka + "," + c.La + ") ");
            a.n.style[J] = b + "scale(1.0,1.0)"
        }
    }
    ;
    this.qa = function() {
        m(window, "resize", K);
        va && m(n, "dblclick", wa);
        if (W())
            if (m(window, "mousewheel", N),
            m(window, "keydown", ea),
            /Tablet PC/i.test(navigator.userAgent) && window.Va) {
                var b = new MSGesture;
                b.target = a.k;
                a.k.Ea = b;
                a.k.Ea.pointerType = s;
                a.k.$a = [];
                m(a.k, "MSPointerDown", za);
                m(a.k, "MSPointerMove", ya);
                m(a.k, "MSPointerUp", xa)
            } else
                m(n, "mousedown", E),
                m(p, "mousedown", E),
                m(n, "mousemove", G),
                m(p, "mousemove", G),
                m(document, "mouseup", L);
        else
            n.addEventListener && (m(document, "mouseup", L),
            m(n, "mousewheel", N),
            m(document, "keydown", ea),
            m(n, "mousedown", E),
            m(p, "mousedown", E),
            m(n, "mousemove", G),
            m(n, "touchstart", Z),
            m(n, "touchmove", Y),
            m(n, "touchcancel", Aa),
            m(n, "touchend", X),
            m(n, "DOMMouseScroll", N),
            m(window, "orientationchange", $));
        Q()
    }
    ;
    if (document.createElement("canvas").getContext) {
        var a = this
          , t = a.k = s
          , r = s
          , ha = s
          , n = s
          , p = s;
        a.o = U;
        a.u = u;
        a.Ya = A;
        a.X = A;
        a.U = sa;
        a.ab = 0;
        a.M = 0;
        a.Ra = parseFloat(ma);
        a.Sa = parseFloat(na);
        a.wa = 1;
        a.W = 0;
        a.ea = -1;
        var k = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
          , d = {
            R: 0,
            S: 0,
            c: 1,
            h: 1,
            oa: 0,
            pa: 0,
            z: 0,
            ba: 0,
            ca: 0,
            I: A,
            q: 0,
            za: q,
            Ba: A
        };
        H || (H = 0);
        I || (I = 0);
        d.oa = H;
        d.pa = I;
        d.R = H;
        d.S = I;
        d.c = C;
        d.h = ja;
        d.za = ka;
        d.Ba = la;
        d.q = d.c * d.h;
        var w = {
            width: 0,
            height: 0
        };
        w.width = S;
        w.height = T;
        var z = ""
          , J = "transform"
          , v = {
            x: 640,
            y: 480
        }
          , c = {
            m: 1,
            s: 1,
            a: -1,
            i: 0,
            j: 0,
            ua: -1,
            va: -1,
            g: 1,
            ha: 1,
            ga: 1,
            l: {
                x: 0,
                y: 0
            },
            ma: A
        };
        c.ha = parseFloat(oa);
        c.ga = parseFloat(pa);
        var l = {
            start: {
                x: 0,
                y: 0
            },
            a: {
                x: 0,
                y: 0
            },
            Ha: {
                x: 0,
                y: 0
            },
            m: {
                x: 0,
                y: 0
            },
            b: {
                x: 0,
                y: 0
            }
        }
          , D = {
            start: {
                x: 0,
                y: 0
            }
        }
          , j = {
            d: 0,
            start: {
                x: 0,
                y: 0
            },
            a: {
                x: 0,
                y: 0
            },
            Ha: {
                x: 0,
                y: 0
            },
            m: {
                x: 0,
                y: 0
            },
            b: {
                x: 0,
                y: 0
            },
            $: {
                x: 0,
                y: 0
            },
            aa: {
                x: 0,
                y: 0
            }
        }
          , i = {
            a: {
                x: 0,
                y: 0
            },
            b: {
                x: 0,
                y: 0
            },
            J: 0.96
        };
        i.J = qa;
        a.cursor = {
            x: 0,
            y: 0
        };
        var x = []
          , y = [];
        x[0] = 0;
        y[0] = 1;
        x[1] = 1;
        y[1] = 1;
        x[2] = 1;
        y[2] = 0;
        x[3] = 1;
        y[3] = -1;
        x[4] = 0;
        y[4] = -1;
        x[5] = -1;
        y[5] = -1;
        x[6] = -1;
        y[6] = 0;
        x[7] = -1;
        y[7] = 1;
        a.e = 0;
        a.f = 0;
        a.la = 0;
        a.r = [];
        a.B = [];
        a.w = [];
        a.D = [];
        a.Aa = [];
        for (u = 0; u < d.q; u++)
            a.w[u] = -1,
            a.D[u] = -1;
        a.C = [];
        u = ["Webkit", "Moz", "0", "ms", "Ms"];
        for (C = 0; C < u.length; C++)
            "undefined" != typeof document.documentElement.style[u[C] + "Transform"] && (z = "-" + u[C].toLowerCase() + "-",
            J = u[C] + "Transform");
        var b = "";
        a.k = document.getElementById(R);
        b = "width: " + S + "px;";
        b += "height: " + T + "px;";
        b += "max-width: 100%;";
        a.k.setAttribute("style", b);
        t = document.createElement("div");
        t.setAttribute("id", "viewwindow");
        b = "top:  0px;";
        b += "left: 0px;";
        b += "position: relative;";
        t.setAttribute("style", b);
        a.k.appendChild(t);
        r = document.createElement("div");
        r.setAttribute("id", "turntable");
        b = "top:  0px;";
        b += "left: 0px;";
        b += "overflow: hidden;";
        b += "position:absolute;";
        b += z + "user-select: none;";
        r.setAttribute("style", b);
        t.appendChild(r);
        p = document.createElement("img");
        p.setAttribute("id", "backbuffer");
        b = "top:  0px;";
        b += "left: 0px;";
        b += "position:absolute;";
        b += z + "user-select: none;";
        p.setAttribute("style", b);
        r.appendChild(p);
        ha = p;
        n = document.createElement("div");
        a.K = n;
        b = "top:  0px;";
        b += "left: 0px;";
        b += "width:  100px;";
        b += "height: 100px;";
        b += "overflow: hidden;";
        b += "position:absolute;";
        b += "z-index: 522;";
        b += z + "user-select: none;";
        n.setAttribute("style", b);
        t.appendChild(n);
        n.xa = function(a, b) {
            var c = [];
            for (c.push(this); 0 < c.length; ) {
                var d = c.pop();
                d.V && d.V(a, b);
                if (d.hasChildNodes())
                    for (var g = 0; g < d.childNodes.length; g++)
                        c.push(d.childNodes[g])
            }
        }
        ;
        this.A = document.createElement("div");
        b = "position:absolute;";
        b += "left: 0px;";
        b += "top:  0px;";
        b += "width: 256px;";
        b += "height: 256px;";
        b += "opacity: 0.0;";
        b += z + "transform-origin: 50% 50%;";
        b += "visibility: inherit;";
        this.A.setAttribute("style", b);
        this.L = document.createElement("img");
        this.L.setAttribute("width", 256);
        this.L.setAttribute("height", 256);
        this.L.onload = function() {
            a.Fa()
        }
        ;
        a.T(this.A);
        this.A.appendChild(this.L);
        n.appendChild(this.A);
        this.backgroundColor = r.style.backgroundColor = ia;
        ra && (a.P = document.createElement("div"),
        b = "position:absolute;",
        b += "width: 38px;",
        b += "height: 32px;",
        b += z + "transform-origin: 50% 50%;",
        b += "visibility: inherit;",
        b += "cursor: pointer;",
        a.P.setAttribute("style", b),
        a.H = document.createElement("img"),
        a.o ? a.H.setAttribute("src", B + a.u + "/files/GoFixedSizeIcon.png") : a.H.setAttribute("src", B + a.u + "/files/GoFullScreenIcon.png"),
        a.H.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 38px;height: 32px;"),
        a.P.appendChild(a.H),
        a.P.V = function(a, b) {
            this.style.left = a - 38 + "px";
            this.style.top = b - 32 + "px"
        }
        ,
        a.P.onclick = function() {
            a.Qa()
        }
        ,
        a.K.appendChild(a.P));
        a.U ? (a.G = document.createElement("div"),
        b = "position:absolute;",
        b += "width: 92px;",
        b += "height: 92px;",
        b += z + "transform-origin: 50% 50%;",
        b += "visibility: inherit;",
        b += "cursor: pointer;",
        a.G.setAttribute("style", b),
        a.ka = document.createElement("img"),
        a.ka.setAttribute("src", B + a.u + "/files/play_arrow.png"),
        a.ka.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 92px;height: 92px;"),
        a.G.appendChild(a.ka),
        a.G.V = function(a, b) {
            this.style.left = 0.5 * a - 46 + "px";
            this.style.top = 0.5 * b - 46 + "px"
        }
        ,
        a.G.onclick = function() {
            a.G.style.visibility = "hidden";
            V && a.ra();
            a.X = q;
            for (var b = 0; b < a.wa; b++)
                a.da();
            a.qa()
        }
        ,
        a.K.appendChild(a.G)) : (a.U = q,
        a.X = q,
        V && a.ra(),
        a.qa());
        a.t(U);
        a.O = 1 / c.g;
        a.Q(a.O);
        this.Ca();
        a.da();
        setTimeout(function() {
            Q()
        }, 10);
        setTimeout(function() {
            K()
        }, 15)
    } else
        alert("Your browser must support HTML5 to show KeyShotVR")
}
;
