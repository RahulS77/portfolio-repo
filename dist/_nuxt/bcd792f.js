(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(t,e,n){"use strict";e.a=function(t,e){t.app;var n=t.store;window.addEventListener("resize",(function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"));var e=window.innerWidth<1280;e!==n.getters.isMobile&&n.dispatch("setDeviceType",e)}));var r=new Event("resize");window.dispatchEvent(r)}},190:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("dc093880",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";var r={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=n(70),c=n(98),l=n.n(c),d=n(279),f=n(280),v=n(281),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("v-main",[e("v-container",[e("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VContainer:f.a,VMain:v.a})},211:function(t,e,n){n(212),t.exports=n(213)},246:function(t,e,n){"use strict";n(190)},247:function(t,e,n){var r=n(58)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},268:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l})),n.d(e,"strict",(function(){return d}));var r=function(){return{isMobile:!1}},o={isMobile:function(t){return t.isMobile}},c={isMobile:function(t,e){t.isMobile=e}},l={setDeviceType:function(t,e){(0,t.commit)("isMobile",e)}},d=!1},55:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(246),n(70)),c=n(98),l=n.n(c),d=n(279),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[211,6,2,7]]]);