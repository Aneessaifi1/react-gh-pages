(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(33)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=n(7),s=(n(28),n(13)),l=n(2),u=(n(29),function(e){var t=e.text,n=e.buttonText,o=e.type,i=e.onClick,s=Object(c.b)();return Object(a.useEffect)((function(){if(!i){var e=setTimeout((function(){s({type:o})}),6e3);return function(){return clearTimeout(e)}}}),[]),r.a.createElement("div",{className:"alert"},t," ",n&&r.a.createElement("button",{onClick:i},n))}),d=n(18),p=n.n(d),f=(n(30),{text:{color:"#fff",textDecoration:"none",fontWeight:"300",opacity:"0.6"}});var v=function(){var e=Object(c.c)((function(e){return e.serviceWorkerInitialized})),t=Object(c.c)((function(e){return e.serviceWorkerUpdated})),n=Object(c.c)((function(e){return e.serviceWorkerRegistration}));return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-alert"},e&&r.a.createElement(u,{text:"Service Worker is initialized for the first time",type:"SW_INIT"}),t&&r.a.createElement(u,{text:"There is a new version available.",buttonText:"Update",type:"SW_UPDATE",onClick:function(){var e=n.waiting;e&&(e.postMessage({type:"SKIP_WAITING"}),e.addEventListener("statechange",(function(e){"activated"===e.target.state&&window.location.reload()})))}})),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/react-gh-pages/",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"isServiceWorkerInitialized=====1:"," ",JSON.stringify(e)),r.a.createElement(s.b,{style:f.text,to:"/react-gh-pages/about"},"Update Page"))}}),r.a.createElement(l.a,{exact:!0,path:"/react-gh-pages/about",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"isServiceWorkerUpdated=2: ",JSON.stringify(t)),r.a.createElement(s.b,{style:f.text,to:"/react-gh-pages/"},"Initialized Page"))}})))))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=n(19),W=n(10);var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SW_INIT":return Object(W.a)(Object(W.a)({},e),{},{serviceWorkerInitialized:!e.serviceWorkerInitialized});case"SW_UPDATE":return Object(W.a)(Object(W.a)({},e),{},{serviceWorkerUpdated:!e.serviceWorkerUpdated,serviceWorkerRegistration:t.payload});default:return e}};var w=function(){return Object(m.a)(b,{serviceWorkerInitialized:!1,serviceWorkerUpdated:!1,serviceWorkerRegistration:null})}();i.a.render(r.a.createElement(c.a,{store:w},r.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-gh-pages",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-gh-pages","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}({onSuccess:function(){return w.dispatch({type:"SW_INIT"})},onUpdate:function(e){return w.dispatch({type:"SW_UPDATE",payload:e})}})}},[[20,1,2]]]);
//# sourceMappingURL=main.ef17b4f6.chunk.js.map