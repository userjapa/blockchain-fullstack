(function(e){function t(t){for(var r,c,s=t[0],i=t[1],l=t[2],u=0,f=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return s.p+"js/"+({"block~blocks~transact~transaction-pool~wallet":"block~blocks~transact~transaction-pool~wallet",block:"block",blocks:"blocks",transact:"transact","transaction-pool":"transaction-pool",wallet:"wallet"}[e]||e)+"."+{"block~blocks~transact~transaction-pool~wallet":"be20d0a5",block:"53e340af",blocks:"2d12e63f",transact:"01f84e8b","transaction-pool":"aef1d77c",wallet:"e2593c30"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"565d":function(e,t,n){},b57f:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},a=Object(r["h"])("Wallet"),c=Object(r["h"])(" | "),s=Object(r["h"])("Blocks"),i=Object(r["h"])(" | "),l=Object(r["h"])("Transact"),u=Object(r["h"])(" | "),p=Object(r["h"])("Transaction pool");function f(e,t){var n=Object(r["y"])("router-link"),f=Object(r["y"])("router-view");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",o,[Object(r["i"])(n,{to:"/"},{default:Object(r["E"])((function(){return[a]})),_:1}),c,Object(r["i"])(n,{to:"/blocks"},{default:Object(r["E"])((function(){return[s]})),_:1}),i,Object(r["i"])(n,{to:"/transact"},{default:Object(r["E"])((function(){return[l]})),_:1}),u,Object(r["i"])(n,{to:"/transaction-pool"},{default:Object(r["E"])((function(){return[p]})),_:1})]),Object(r["i"])(f)],64)}n("d29b");var b=n("6b0d"),d=n.n(b);const h={},m=d()(h,[["render",f]]);var w=m,O=n("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var v=n("6c02"),k=function(){return Promise.all([n.e("block~blocks~transact~transaction-pool~wallet"),n.e("wallet")]).then(n.bind(null,"4dd7"))},g=function(){return Promise.all([n.e("block~blocks~transact~transaction-pool~wallet"),n.e("blocks")]).then(n.bind(null,"5861"))},j=function(){return Promise.all([n.e("block~blocks~transact~transaction-pool~wallet"),n.e("block")]).then(n.bind(null,"5eeb"))},E=function(){return Promise.all([n.e("block~blocks~transact~transaction-pool~wallet"),n.e("transact")]).then(n.bind(null,"0951"))},T=function(){return Promise.all([n.e("block~blocks~transact~transaction-pool~wallet"),n.e("transaction-pool")]).then(n.bind(null,"e1cb"))},R=[{path:"/",name:"Wallet",component:k},{path:"/blocks",name:"Blocks",component:g},{path:"/blocks/:hash",name:"Block",component:j},{path:"/transact",name:"Transact",component:E},{path:"/transaction-pool",name:"TransactionPool",component:T}],y=Object(v["a"])({history:Object(v["b"])("/"),routes:R}),x=y,_=n("1da1"),S=(n("96cf"),n("d9e2"),n("e9c4"),n("5502")),P=Object({NODE_ENV:"production",BASE_URL:"/"}).API_URL||"http://localhost:3000",A={ERROR:"error",SUCCESS:"success"},L=Object(S["a"])({state:{wallet:{},blocks:[],transactionPool:{}},getters:{GET_WALLET:function(e){var t=e.wallet;return t},GET_BLOCKS:function(e){var t=e.blocks;return t},GET_TRANSACTION_POOL:function(e){var t=e.transactionPool;return t}},mutations:{SET_WALLET:function(e,t){e.wallet=t},SET_BLOCKS:function(e,t){e.blocks=t},SET_TRANSACTION_POOL:function(e,t){e.transactionPool=t}},actions:{FETCH_WALLET:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,fetch("".concat(P,"/api/wallet-info"));case 4:return r=t.sent,t.next=7,r.json();case 7:if(o=t.sent,o.type!==A.ERROR){t.next=10;break}throw new Error(o.message);case 10:n("SET_WALLET",o.data),t.next=16;break;case 13:throw t.prev=13,t.t0=t["catch"](1),new Error(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},FETCH_BLOCKS:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,fetch("".concat(P,"/api/blocks"));case 4:return r=t.sent,t.next=7,r.json();case 7:if(o=t.sent,o.type!==A.ERROR){t.next=10;break}throw new Error(o.message);case 10:n("SET_BLOCKS",o.data),t.next=16;break;case 13:throw t.prev=13,t.t0=t["catch"](1),new Error(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},POST_TRANSACT:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.recipient,r=t.amount,e.prev=1,e.next=4,fetch("".concat(P,"/api/transact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({recipient:n,amount:r})});case 4:return o=e.sent,e.next=7,o.json();case 7:if(a=e.sent,a.type!==A.ERROR){e.next=10;break}throw new Error(a.message);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e["catch"](1),new Error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()},FETCH_TRANSACTION_POOL:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,fetch("".concat(P,"/api/transaction-pool-map"));case 4:return r=t.sent,t.next=7,r.json();case 7:if(o=t.sent,o.type!==A.ERROR){t.next=10;break}throw new Error(o.message);case 10:n("SET_TRANSACTION_POOL",o.data),t.next=16;break;case 13:throw t.prev=13,t.t0=t["catch"](1),new Error(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},MINE_TRANSACTIONS:function(){return Object(_["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(P,"/api/mine-transactions"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,n.type!==A.ERROR){e.next=9;break}throw new Error(n.message);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](0),new Error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}});n("565d");Object(r["c"])(w).use(L).use(x).mount("#app")},d29b:function(e,t,n){"use strict";n("b57f")}});
//# sourceMappingURL=app.8db42e3d.js.map