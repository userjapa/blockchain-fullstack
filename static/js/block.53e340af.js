(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["block"],{"5eeb":function(t,e,c){"use strict";c.r(e);var s=c("7a23"),n={class:"home flex flex-col m-10 mt-0"},a=Object(s["g"])("h2",{class:"text-2xl font-bold mb-2"},"Block",-1),l={class:"flex justify-center"},b={class:"flex flex-col items-center mb-2"},o={class:"flex items-center"},i=Object(s["g"])("div",{class:"w-32 text-right"},[Object(s["g"])("h3",{class:"font-bold text-lg"},"Hash")],-1),r={style:{width:"200px"},class:"text-left ml-3 truncate"},u={class:"flex items-center"},f=Object(s["g"])("div",{class:"w-32 text-right"},[Object(s["g"])("h3",{class:"font-bold text-lg"},"Last hash")],-1),O={style:{width:"200px"},class:"text-left ml-3 truncate"},d={class:"flex items-center"},j=Object(s["g"])("div",{class:"w-32 text-right"},[Object(s["g"])("h3",{class:"font-bold text-lg"},"Nonce")],-1),h={style:{width:"200px"},class:"text-left ml-3"},g={class:"flex items-center"},v=Object(s["g"])("div",{class:"w-32 text-right"},[Object(s["g"])("h3",{class:"font-bold text-lg"},"Difficulty")],-1),x={style:{width:"200px"},class:"text-left ml-3"},p=Object(s["g"])("div",null,[Object(s["g"])("h3",{class:"font-bold text-lg"},"Data")],-1);function k(t,e,c,k,m,y){var w=Object(s["y"])("Transactions");return Object(s["s"])(),Object(s["f"])("div",n,[Object(s["g"])("div",null,[a,Object(s["g"])("div",l,[Object(s["g"])("button",{class:"bg-blue-500 text-white my-2 px-5 py-2 rounded",onClick:e[0]||(e[0]=function(){return t.updateBooks&&t.updateBooks.apply(t,arguments)})}," Update "),Object(s["g"])("button",{class:"bg-yellow-500 text-white my-2 ml-2 px-5 py-2 rounded",onClick:e[1]||(e[1]=function(e){return t.$router.go(-1)})}," Back ")])]),Object(s["g"])("div",b,[Object(s["g"])("div",o,[i,Object(s["g"])("div",r,Object(s["A"])(t.block.hash),1)]),Object(s["g"])("div",u,[f,Object(s["g"])("div",O,Object(s["A"])(t.block.lastHash),1)]),Object(s["g"])("div",d,[j,Object(s["g"])("div",h,Object(s["A"])(t.block.nonce),1)]),Object(s["g"])("div",g,[v,Object(s["g"])("div",x,Object(s["A"])(t.block.difficulty),1)])]),p,Object(s["i"])(w,{transactions:t.block.data},null,8,["transactions"])])}var m=c("5530"),y=c("d4ec"),w=c("bee2"),A=c("262e"),B=c("2caf"),C=(c("7db0"),c("d3b7"),c("9ab4")),_=c("ce1f"),T=c("5502"),$=c("c102"),H=function(t){Object(A["a"])(c,t);var e=Object(B["a"])(c);function c(){return Object(y["a"])(this,c),e.apply(this,arguments)}return Object(w["a"])(c,[{key:"updateBooks",value:function(){var t=this;this.fetchBlocks().then((function(){t.block=t.blocks.find((function(e){return e.hash===t.block_hash}))})).catch((function(t){return alert(t.message)}))}},{key:"beforeCreate",value:function(){if(this.block_hash=this.$route.params.hash,!this.block_hash)return this.$router.go(-1)}},{key:"beforeMount",value:function(){var t=this;if(this.block=this.blocks.find((function(e){return e.hash===t.block_hash})),!this.block)return this.$router.go(-1)}}]),c}(_["b"]);H=Object(C["a"])([Object(_["a"])({computed:Object(m["a"])({},Object(T["c"])({blocks:"GET_BLOCKS"})),components:{Transactions:$["a"]},methods:Object(m["a"])({},Object(T["b"])({fetchBlocks:"FETCH_BLOCKS"}))})],H);var L=H,M=c("6b0d"),S=c.n(M);const D=S()(L,[["render",k]]);e["default"]=D},"7db0":function(t,e,c){"use strict";var s=c("23e7"),n=c("b727").find,a=c("44d2"),l="find",b=!0;l in[]&&Array(1)[l]((function(){b=!1})),s({target:"Array",proto:!0,forced:b},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(l)},c102:function(t,e,c){"use strict";c("b64b");var s=c("7a23"),n={class:"flex flex-col border-8 p-3"},a={class:"text-left flex"},l=Object(s["g"])("div",null,[Object(s["g"])("span",{class:"font-bold mr-2"},"From:")],-1),b={class:"flex-1 truncate"},o={class:"w-32 ml-2"},i={class:"flex-1 truncate"},r={class:"w-32 ml-2"};function u(t,e,c,u,f,O){return Object(s["s"])(),Object(s["f"])("div",null,[Object(s["g"])("div",n,[(Object(s["s"])(!0),Object(s["f"])(s["a"],null,Object(s["x"])(t.transactions,(function(t,e){return Object(s["s"])(),Object(s["f"])("div",{class:"border-2 px-4 py-2",key:"transaction-".concat(e)},[Object(s["g"])("div",a,[l,Object(s["g"])("div",b,Object(s["A"])(t.input.address),1),Object(s["g"])("div",o," | Balance: "+Object(s["A"])(t.input.amount),1)]),(Object(s["s"])(!0),Object(s["f"])(s["a"],null,Object(s["x"])(Object.keys(t.outputMap),(function(e,c){return Object(s["s"])(),Object(s["f"])("div",{class:"ml-6 text-left flex",key:"recipient-".concat(c)},[Object(s["g"])("div",i," To: "+Object(s["A"])(e),1),Object(s["g"])("div",r," | Sent: "+Object(s["A"])(t.outputMap[e]),1)])})),128))])})),128))])])}var f=c("bee2"),O=c("d4ec"),d=c("262e"),j=c("2caf"),h=c("9ab4"),g=c("ce1f"),v=function(t){Object(d["a"])(c,t);var e=Object(j["a"])(c);function c(){return Object(O["a"])(this,c),e.apply(this,arguments)}return Object(f["a"])(c)}(g["b"]);v=Object(h["a"])([Object(g["a"])({props:{transactions:[]}})],v);var x=v,p=c("6b0d"),k=c.n(p);const m=k()(x,[["render",u]]);e["a"]=m}}]);
//# sourceMappingURL=block.53e340af.js.map