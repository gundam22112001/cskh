(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c787de4"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),o=n("da84"),a=n("c65b"),u=n("e330"),i=n("1626"),c=n("861d"),s=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),f=o.Error,h=u(/./.test);r({target:"RegExp",proto:!0,forced:!s},{test:function(t){var e=this.exec;if(!i(e))return h(this,t);var n=a(e,this,t);if(null!==n&&!c(n))throw new f("RegExp exec method returned something other than an Object or null");return!!n}})},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3"),n("ac1f"),n("00b4");var r=n("6b75");function o(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"0d3b":function(t,e,n){var r=n("d039"),o=n("b622"),a=n("c430"),u=o("iterator");t.exports=!r((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,n="";return t.pathname="c%20d",e.forEach((function(t,r){e["delete"]("b"),n+=r+t})),a&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[u]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},"18ed":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("d4ec"),o=n("bee2"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,[{key:"getInvoice",value:function(){return fetch("http://192.168.1.26:5001/api/Invoice/getAll").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getInvoiceByCompany",value:function(t){return fetch("http://192.168.1.26:5001/api/Invoice/getByCompany"+new URLSearchParams({companyId:t}),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getInvoiceByCode",value:function(t,e){return fetch("http://192.168.1.26:5001/api/Invoice/getByCode?"+new URLSearchParams({consignmentId:t,cusNo:e}),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getInvoiceDetail",value:function(){return fetch("http://192.168.1.26:5001/api/InvoiceDetail/getAll").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getInvoiceDetailByCompany",value:function(t){return fetch("http://192.168.1.26:5001/api/InvoiceDetail/getByCompany"+new URLSearchParams({companyId:t}),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getInvoiceDetailByCode",value:function(t,e){return fetch("http://192.168.1.26:5001/api/InvoiceDetail/getByCode"+new URLSearchParams({consignmentId:t,cusNo:e}),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"deleteInvoice",value:function(t){var e=new FormData;return e.append("id",t),fetch("http://192.168.1.26:5001/api/Invoice/deleteInvoice",{method:"DELETE",body:e}).then((function(t){return t.json()}))}},{key:"deleteInvoiceDetail",value:function(t){var e=new FormData;return e.append("id",t),fetch("http://192.168.1.26:5001/api/InvoiceDetail/deleteInvoiceDetail",{method:"DELETE",body:e}).then((function(t){return t.json()}))}}]),t}())},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,a=n("1dde"),u=a("filter");r({target:"Array",proto:!0,forced:!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("da84"),o=n("0366"),a=n("c65b"),u=n("7b0b"),i=n("9bdd"),c=n("e95a"),s=n("68ee"),f=n("07fa"),h=n("8418"),d=n("9a1f"),l=n("35a1"),v=r.Array;t.exports=function(t){var e=u(t),n=s(this),r=arguments.length,p=r>1?arguments[1]:void 0,y=void 0!==p;y&&(p=o(p,r>2?arguments[2]:void 0));var b,g,m,w,j,k,I=l(e),R=0;if(!I||this==v&&c(I))for(b=f(e),g=n?new this(b):v(b);b>R;R++)k=y?p(e[R],R):e[R],h(g,R,k);else for(w=d(e,I),j=w.next,g=n?new this:[];!(m=a(j,w)).done;R++)k=y?i(w,p,[m.value,R],!0):m.value,h(g,R,k);return g.length=R,g}},5352:function(t,e,n){"use strict";n("e260");var r=n("23e7"),o=n("da84"),a=n("c65b"),u=n("e330"),i=n("83ab"),c=n("0d3b"),s=n("cb2d"),f=n("6964"),h=n("d44e"),d=n("9ed3"),l=n("69f3"),v=n("19aa"),p=n("1626"),y=n("1a2d"),b=n("0366"),g=n("f5df"),m=n("825a"),w=n("861d"),j=n("577e"),k=n("7c73"),I=n("5c6c"),R=n("9a1f"),U=n("35a1"),L=n("d6d6"),x=n("b622"),S=n("addb"),O=x("iterator"),C="URLSearchParams",E=C+"Iterator",P=l.set,A=l.getterFor(C),D=l.getterFor(E),T=Object.getOwnPropertyDescriptor,B=function(t){if(!i)return o[t];var e=T(o,t);return e&&e.value},G=B("fetch"),F=B("Request"),q=B("Headers"),J=F&&F.prototype,M=q&&q.prototype,N=o.RegExp,Q=o.TypeError,z=o.decodeURIComponent,H=o.encodeURIComponent,W=u("".charAt),X=u([].join),$=u([].push),K=u("".replace),V=u([].shift),Y=u([].splice),Z=u("".split),_=u("".slice),tt=/\+/g,et=Array(4),nt=function(t){return et[t-1]||(et[t-1]=N("((?:%[\\da-f]{2}){"+t+"})","gi"))},rt=function(t){try{return z(t)}catch(e){return t}},ot=function(t){var e=K(t,tt," "),n=4;try{return z(e)}catch(r){while(n)e=K(e,nt(n--),rt);return e}},at=/[!'()~]|%20/g,ut={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},it=function(t){return ut[t]},ct=function(t){return K(H(t),at,it)},st=d((function(t,e){P(this,{type:E,iterator:R(A(t).entries),kind:e})}),"Iterator",(function(){var t=D(this),e=t.kind,n=t.iterator.next(),r=n.value;return n.done||(n.value="keys"===e?r.key:"values"===e?r.value:[r.key,r.value]),n}),!0),ft=function(t){this.entries=[],this.url=null,void 0!==t&&(w(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===W(t,0)?_(t,1):t:j(t)))};ft.prototype={type:C,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var e,n,r,o,u,i,c,s=U(t);if(s){e=R(t,s),n=e.next;while(!(r=a(n,e)).done){if(o=R(m(r.value)),u=o.next,(i=a(u,o)).done||(c=a(u,o)).done||!a(u,o).done)throw Q("Expected sequence with length 2");$(this.entries,{key:j(i.value),value:j(c.value)})}}else for(var f in t)y(t,f)&&$(this.entries,{key:f,value:j(t[f])})},parseQuery:function(t){if(t){var e,n,r=Z(t,"&"),o=0;while(o<r.length)e=r[o++],e.length&&(n=Z(e,"="),$(this.entries,{key:ot(V(n)),value:ot(X(n,"="))}))}},serialize:function(){var t,e=this.entries,n=[],r=0;while(r<e.length)t=e[r++],$(n,ct(t.key)+"="+ct(t.value));return X(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var ht=function(){v(this,dt);var t=arguments.length>0?arguments[0]:void 0;P(this,new ft(t))},dt=ht.prototype;if(f(dt,{append:function(t,e){L(arguments.length,2);var n=A(this);$(n.entries,{key:j(t),value:j(e)}),n.updateURL()},delete:function(t){L(arguments.length,1);var e=A(this),n=e.entries,r=j(t),o=0;while(o<n.length)n[o].key===r?Y(n,o,1):o++;e.updateURL()},get:function(t){L(arguments.length,1);for(var e=A(this).entries,n=j(t),r=0;r<e.length;r++)if(e[r].key===n)return e[r].value;return null},getAll:function(t){L(arguments.length,1);for(var e=A(this).entries,n=j(t),r=[],o=0;o<e.length;o++)e[o].key===n&&$(r,e[o].value);return r},has:function(t){L(arguments.length,1);var e=A(this).entries,n=j(t),r=0;while(r<e.length)if(e[r++].key===n)return!0;return!1},set:function(t,e){L(arguments.length,1);for(var n,r=A(this),o=r.entries,a=!1,u=j(t),i=j(e),c=0;c<o.length;c++)n=o[c],n.key===u&&(a?Y(o,c--,1):(a=!0,n.value=i));a||$(o,{key:u,value:i}),r.updateURL()},sort:function(){var t=A(this);S(t.entries,(function(t,e){return t.key>e.key?1:-1})),t.updateURL()},forEach:function(t){var e,n=A(this).entries,r=b(t,arguments.length>1?arguments[1]:void 0),o=0;while(o<n.length)e=n[o++],r(e.value,e.key,this)},keys:function(){return new st(this,"keys")},values:function(){return new st(this,"values")},entries:function(){return new st(this,"entries")}},{enumerable:!0}),s(dt,O,dt.entries,{name:"entries"}),s(dt,"toString",(function(){return A(this).serialize()}),{enumerable:!0}),h(ht,C),r({global:!0,constructor:!0,forced:!c},{URLSearchParams:ht}),!c&&p(q)){var lt=u(M.has),vt=u(M.set),pt=function(t){if(w(t)){var e,n=t.body;if(g(n)===C)return e=t.headers?new q(t.headers):new q,lt(e,"content-type")||vt(e,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),k(t,{body:I(0,j(n)),headers:I(0,e)})}return t};if(p(G)&&r({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t){return G(t,arguments.length>1?pt(arguments[1]):{})}}),p(F)){var yt=function(t){return v(this,J),new F(t,arguments.length>1?pt(arguments[1]):{})};J.constructor=yt,yt.prototype=J,r({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:yt})}}t.exports={URLSearchParams:ht,getState:A}},6964:function(t,e,n){var r=n("cb2d");t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},9861:function(t,e,n){n("5352")},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(u){o(t,"throw",u)}}},"9fa9":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("d4ec"),o=n("bee2"),a=(n("d3b7"),n("a15b"),n("d81d"),n("b64b"),function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,[{key:"getCustomersSmall",value:function(){return fetch("data/customers-small.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getCustomersMedium",value:function(){return fetch("data/customers-medium.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getCustomersLarge",value:function(){return fetch("data/customers-large.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getCustomersXLarge",value:function(){return fetch("data/customers-xlarge.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getCustomers",value:function(t){var e=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");return fetch("https://www.primefaces.org/data/customers?"+e).then((function(t){return t.json()}))}}]),t}())},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),a=n("1c7e"),u=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:u},{from:o})},addb:function(t,e,n){var r=n("4dae"),o=Math.floor,a=function(t,e){var n=t.length,c=o(n/2);return n<8?u(t,e):i(t,a(r(t,0,c),e),a(r(t,c),e),e)},u=function(t,e){var n,r,o=t.length,a=1;while(a<o){r=a,n=t[a];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==a++&&(t[r]=n)}return t},i=function(t,e,n,r){var o=e.length,a=n.length,u=0,i=0;while(u<o||i<a)t[u+i]=u<o&&i<a?r(e[u],n[i])<=0?e[u++]:n[i++]:u<o?e[u++]:n[i++];return t};t.exports=a},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),a=n("df75"),u=n("d039"),i=u((function(){a(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return a(o(t))}})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("d9e2");var r=n("06c5");function o(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,u=t},f:function(){try{i||null==n["return"]||n["return"]()}finally{if(c)throw u}}}}},bee2:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,"a",(function(){return o}))},d4ec:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d9e2");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,a=n("1dde"),u=a("map");r({target:"Array",proto:!0,forced:!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e9c0:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("d4ec"),o=n("bee2"),a=(n("d3b7"),function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,[{key:"getProductsSmall",value:function(){return fetch("data/products-small.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getProducts",value:function(){return fetch("data/products.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("data/products-orders-small.json").then((function(t){return t.json()})).then((function(t){return t.data}))}}]),t}())}}]);
//# sourceMappingURL=chunk-2c787de4.020aa095.js.map