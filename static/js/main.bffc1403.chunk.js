(this["webpackJsonpcolour-picker-mintbean-hackathon"]=this["webpackJsonpcolour-picker-mintbean-hackathon"]||[]).push([[0],{43:function(e,t,a){e.exports=a(55)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),i=(a(48),a(24));a(49);function o(e){var t=e.hex;return r.a.createElement("div",{style:{backgroundColor:t},className:"color"},r.a.createElement("div",{className:"hex-value"},t))}a(50);var m=a(35);function u(e){var t,a=e.hex,n=e.variation,c=e.setting,l=e.settingValue;switch(n){default:t=m(a).tetrad();break;case"analogous":t=m(a).analogous();break;case"monochromatic":t=m(a).monochromatic();break;case"splitcomplement":t=m(a).splitcomplement();break;case"triad":t=m(a).triad();break;case"tetrad":t=m(a).tetrad();break;case"complement":t=m(a).complement().toHexString()}var i;return Array.isArray(t)?(i=t.map((function(e){var t,a=e.toHexString();return a={lighten:m(t=a).lighten(l).toString(),brighten:m(t).brighten(l).toString(),darken:m(t).darken(l).toString(),desaturate:m(t).desaturate(l).toString(),saturate:m(t).saturate(l).toString(),greyscale:m(t).greyscale(l).toString(),undefined:t}[c],r.a.createElement(o,{hex:a})})),r.a.createElement("div",{id:"container"},i)):r.a.createElement(o,{hex:t})}var s=a(63),v=a(64),g=a(61),d=a(62),E=a(40),h=a(35);function k(e){var t=e.changeHex,a=e.changeVariation,n=e.changeSetting,c=e.changeSettingValue,l=function(e){var t=e.target.getAttribute("value");n(t)};return r.a.createElement("div",null,r.a.createElement(s.a,{expand:"xl",bg:"dark",variant:"dark"},r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(s.a.Brand,null,"Color Palette Generator"),r.a.createElement(g.a,{onSelect:function(e){a(e)},title:"Schemes",id:"schemes"},r.a.createElement(g.a.Item,{eventKey:"analogous"},"Analogous"),r.a.createElement(g.a.Divider,null),r.a.createElement(g.a.Item,{eventKey:"monochromatic"},"Monochromatic"),r.a.createElement(g.a.Divider,null),r.a.createElement(g.a.Item,{eventKey:"complement"},"Complement"),r.a.createElement(g.a.Item,{eventKey:"splitcomplement"},"Split Complement"),r.a.createElement(g.a.Divider,null),r.a.createElement(g.a.Item,{eventKey:"triad"},"Triad"),r.a.createElement(g.a.Item,{eventKey:"tetrad"},"Tetrad")),r.a.createElement(g.a.Divider,null),r.a.createElement(v.a.Link,{value:"lighten",eventKey:"lighten",onClick:function(e){return l(e)}},"Lighten"),r.a.createElement(v.a.Link,{value:"brighten",onClick:function(e){return l(e)}},"Brighten"),r.a.createElement(v.a.Link,{value:"darken",onClick:function(e){return l(e)}},"Darken"),r.a.createElement(v.a.Link,{value:"desaturate",onClick:function(e){return l(e)}},"Desaturate"),r.a.createElement(v.a.Link,{value:"saturate",onClick:function(e){return l(e)}},"Saturate"),r.a.createElement(v.a.Link,{value:"greyscale",onClick:function(e){return l(e)}},"Greyscale"),r.a.createElement(g.a,{onSelect:function(e){return function(e){c(e)}(e)},title:"Change Value (%)"},r.a.createElement(g.a.Item,{eventKey:"2"},"10"),r.a.createElement(g.a.Item,{eventKey:"4"},"20"),r.a.createElement(g.a.Item,{eventKey:"6"},"30"),r.a.createElement(g.a.Item,{eventKey:"8"},"40"),r.a.createElement(g.a.Item,{eventKey:"12"},"50"),r.a.createElement(g.a.Item,{eventKey:"16"},"60"),r.a.createElement(g.a.Item,{eventKey:"20"},"70"),r.a.createElement(g.a.Item,{eventKey:"30"},"80"),r.a.createElement(g.a.Item,{eventKey:"40"},"90"),r.a.createElement(g.a.Item,{eventKey:"50"},"100")))),r.a.createElement(v.a.Link,{id:"random",onClick:function(){return function(){var e=h.random().toHexString();t(e)}()}},"Random"),r.a.createElement(d.a,{onChange:function(e){return function(e){e.preventDefault(),t(e.target.value)}(e)},inline:!0},r.a.createElement(E.a,{type:"text",placeholder:"#77d36a",className:"mr-sm-2"}))))}var f=function(){var e=Object(n.useState)("#5f42ad"),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("analogous"),o=Object(i.a)(l,2),m=o[0],s=o[1],v=Object(n.useState)(),g=Object(i.a)(v,2),d=g[0],E=g[1],h=Object(n.useState)(20),f=Object(i.a)(h,2),p=f[0],y=f[1];return r.a.createElement("div",{className:"App"},r.a.createElement(k,{changeSetting:E,changeVariation:s,changeHex:c,changeSettingValue:y}),r.a.createElement(u,{settingValue:p,setting:d,variation:m,hex:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.bffc1403.chunk.js.map