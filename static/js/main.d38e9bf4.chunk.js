(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=a(7),l=(a(28),a(13)),s=a(2),u=(a(29),function(e){var t=e.text,a=e.buttonText,i=e.type,c=e.onClick,l=Object(o.b)();return Object(n.useEffect)((function(){if(!c){var e=setTimeout((function(){l({type:i})}),6e3);return function(){return clearTimeout(e)}}}),[]),r.a.createElement("div",{className:"alert"},t," ",a&&r.a.createElement("button",{onClick:c},a))}),p=a(18),d=a.n(p),m=(a(30),{text:{color:"#fff",textDecoration:"none",fontWeight:"300",opacity:"0.6"}});var v=function(){var e=Object(o.c)((function(e){return e.serviceWorkerInitialized})),t=Object(o.c)((function(e){return e.serviceWorkerUpdated})),a=Object(o.c)((function(e){return e.serviceWorkerRegistration}));return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-alert"},e&&r.a.createElement(u,{text:"Service Worker is initialized for the first time",type:"SW_INIT"}),t&&r.a.createElement(u,{text:"There is a new version available.",buttonText:"Update",type:"SW_UPDATE",onClick:function(){var e=a.waiting;e&&(e.postMessage({type:"SKIP_WAITING"}),e.addEventListener("statechange",(function(e){"activated"===e.target.state&&window.location.reload()})))}})),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/react-gh-pages/",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"isServiceWorkerInitialized=1:"," ",JSON.stringify(e)),r.a.createElement(l.b,{style:m.text,to:"/react-gh-pages/about"},"Update Page"))}}),r.a.createElement(s.a,{exact:!0,path:"/react-gh-pages/about",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"isServiceWorkerUpdated=2: ",JSON.stringify(t)),r.a.createElement(l.b,{style:m.text,to:"/react-gh-pages/"},"Initialized Page"))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(19),g=a(10);var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SW_INIT":return Object(g.a)(Object(g.a)({},e),{},{serviceWorkerInitialized:!e.serviceWorkerInitialized});case"SW_UPDATE":return Object(g.a)(Object(g.a)({},e),{},{serviceWorkerUpdated:!e.serviceWorkerUpdated,serviceWorkerRegistration:t.payload});default:return e}};var h=function(){return Object(f.a)(E,{serviceWorkerInitialized:!1,serviceWorkerUpdated:!1,serviceWorkerRegistration:null})}();c.a.render(r.a.createElement(o.a,{store:h},r.a.createElement(v,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d38e9bf4.chunk.js.map