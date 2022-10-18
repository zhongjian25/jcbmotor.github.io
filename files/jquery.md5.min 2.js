$define([],function(n){n.extend({md5Sign:function(n){return r("CE"+encodeURIComponent(n.toUpperCase()+"CE"))}});var u=0,o=8;function r(n){return c(t(e(n),n.length*o))}function t(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;for(var t=1732584193,e=-271733879,u=-1732584194,o=271733878,c=0;c<n.length;c+=16){var f=t,i=e,a=u,h=o;e=C(e=C(e=C(e=C(e=A(e=A(e=A(e=A(e=v(e=v(e=v(e=v(e=d(e=d(e=d(e=d(e,u=d(u,o=d(o,t=d(t,e,u,o,n[c+0],7,-680876936),e,u,n[c+1],12,-389564586),t,e,n[c+2],17,606105819),o,t,n[c+3],22,-1044525330),u=d(u,o=d(o,t=d(t,e,u,o,n[c+4],7,-176418897),e,u,n[c+5],12,1200080426),t,e,n[c+6],17,-1473231341),o,t,n[c+7],22,-45705983),u=d(u,o=d(o,t=d(t,e,u,o,n[c+8],7,1770035416),e,u,n[c+9],12,-1958414417),t,e,n[c+10],17,-42063),o,t,n[c+11],22,-1990404162),u=d(u,o=d(o,t=d(t,e,u,o,n[c+12],7,1804603682),e,u,n[c+13],12,-40341101),t,e,n[c+14],17,-1502002290),o,t,n[c+15],22,1236535329),u=v(u,o=v(o,t=v(t,e,u,o,n[c+1],5,-165796510),e,u,n[c+6],9,-1069501632),t,e,n[c+11],14,643717713),o,t,n[c+0],20,-373897302),u=v(u,o=v(o,t=v(t,e,u,o,n[c+5],5,-701558691),e,u,n[c+10],9,38016083),t,e,n[c+15],14,-660478335),o,t,n[c+4],20,-405537848),u=v(u,o=v(o,t=v(t,e,u,o,n[c+9],5,568446438),e,u,n[c+14],9,-1019803690),t,e,n[c+3],14,-187363961),o,t,n[c+8],20,1163531501),u=v(u,o=v(o,t=v(t,e,u,o,n[c+13],5,-1444681467),e,u,n[c+2],9,-51403784),t,e,n[c+7],14,1735328473),o,t,n[c+12],20,-1926607734),u=A(u,o=A(o,t=A(t,e,u,o,n[c+5],4,-378558),e,u,n[c+8],11,-2022574463),t,e,n[c+11],16,1839030562),o,t,n[c+14],23,-35309556),u=A(u,o=A(o,t=A(t,e,u,o,n[c+1],4,-1530992060),e,u,n[c+4],11,1272893353),t,e,n[c+7],16,-155497632),o,t,n[c+10],23,-1094730640),u=A(u,o=A(o,t=A(t,e,u,o,n[c+13],4,681279174),e,u,n[c+0],11,-358537222),t,e,n[c+3],16,-722521979),o,t,n[c+6],23,76029189),u=A(u,o=A(o,t=A(t,e,u,o,n[c+9],4,-640364487),e,u,n[c+12],11,-421815835),t,e,n[c+15],16,530742520),o,t,n[c+2],23,-995338651),u=C(u,o=C(o,t=C(t,e,u,o,n[c+0],6,-198630844),e,u,n[c+7],10,1126891415),t,e,n[c+14],15,-1416354905),o,t,n[c+5],21,-57434055),u=C(u,o=C(o,t=C(t,e,u,o,n[c+12],6,1700485571),e,u,n[c+3],10,-1894986606),t,e,n[c+10],15,-1051523),o,t,n[c+1],21,-2054922799),u=C(u,o=C(o,t=C(t,e,u,o,n[c+8],6,1873313359),e,u,n[c+15],10,-30611744),t,e,n[c+6],15,-1560198380),o,t,n[c+13],21,1309151649),u=C(u,o=C(o,t=C(t,e,u,o,n[c+4],6,-145523070),e,u,n[c+11],10,-1120210379),t,e,n[c+2],15,718787259),o,t,n[c+9],21,-343485551),t=g(t,f),e=g(e,i),u=g(u,a),o=g(o,h)}return Array(t,e,u,o)}function f(n,r,t,e,u,o){return g(function c(n,r){return n<<r|n>>>32-r}(g(g(r,n),g(e,o)),u),t)}function d(n,r,t,e,u,o,c){return f(r&t|~r&e,n,r,u,o,c)}function v(n,r,t,e,u,o,c){return f(r&e|t&~e,n,r,u,o,c)}function A(n,r,t,e,u,o,c){return f(r^t^e,n,r,u,o,c)}function C(n,r,t,e,u,o,c){return f(t^(r|~e),n,r,u,o,c)}function g(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function e(n){for(var r=Array(),t=(1<<o)-1,e=0;e<n.length*o;e+=o)r[e>>5]|=(n.charCodeAt(e/o)&t)<<e%32;return r}function c(n){for(var r=u?"0123456789ABCDEF":"0123456789abcdef",t="",e=0;e<4*n.length;e++)t+=r.charAt(n[e>>2]>>e%4*8+4&15)+r.charAt(n[e>>2]>>e%4*8&15);return t}return n});