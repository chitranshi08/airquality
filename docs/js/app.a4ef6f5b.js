(function(t){function e(e){for(var r,o,u=e[0],l=e[1],c=e[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},4956:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Airquality")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Check Air Particulate Matter In Cities")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.enterCity,expression:"enterCity"}],attrs:{type:"text",placeholder:"Please enter city name"},domProps:{value:t.enterCity},on:{input:[function(e){e.target.composing||(t.enterCity=e.target.value)},t.hideError],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getValue(e)}}}),t._m(0),t.inCorrectCity?n("p",[t._v("Please enter correct city name")]):t._e(),t.AirqualityResult?n("div",{staticClass:"resultContainer"},[n("div",{staticClass:"cityLocation"},[t._v("Location - "),n("span",{staticClass:"locationResult"},[t._v(t._s(t.location))])]),n("div",{staticClass:"result",class:[{changeColor:t.AirqualityResult>35.4}]},[t._v("Particulate Matter - "+t._s(t.AirqualityResult)+"µg/m³")])]):t._e()])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"instruction"},[t._v("Optimum Particulate Matter - "),n("span",{staticClass:"qualityResult"},[t._v("35.4µg/m³")])])}],l=(n("fb6a"),n("d3b7"),{name:"Airquality",data:function(){return{enterCity:null,response:null,AirqualityResult:null,location:null,inCorrectCity:!1}},methods:{getValue:function(){var t=this,e=this.enterCity;e=e.charAt(0).toUpperCase()+e.slice(1),fetch("https://api.openaq.org/v1/measurements?city=".concat(e,"&parameter[]=co&parameter[]=pm25")).then((function(t){return t.json()})).then((function(e){console.log(e),t.location=e.results[0].location,t.AirqualityResult=e.results[0].value})).catch((function(e){t.inCorrectCity=!0}))},hideError:function(){this.inCorrectCity=!1,this.AirqualityResult=null}}}),c=l,s=(n("e01f"),n("2877")),p=Object(s["a"])(c,o,u,!1,null,"6a20117d",null),f=p.exports,y={name:"App",components:{Airquality:f}},d=y,v=(n("034f"),Object(s["a"])(d,i,a,!1,null,null,null)),h=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,n){},e01f:function(t,e,n){"use strict";var r=n("4956"),i=n.n(r);i.a}});
//# sourceMappingURL=app.a4ef6f5b.js.map