(this["webpackJsonpdecision-maker"]=this["webpackJsonpdecision-maker"]||[]).push([[0],{11:function(e,t,a){},16:function(e,t,a){},21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),o=(a(26),a(6)),s=a(1),i=a(9),m=a(12),u=a(20);a(16);function E(){return l.a.createElement("div",{className:"container"},l.a.createElement(o.b,{to:"/",className:"header-link"},l.a.createElement("h1",{className:"header-text"},"LEARNABLE TASK")))}function d(e){var t=e.label,a=e.name,n=e.id,c=e.placeholder,r=e.onChange;return l.a.createElement("div",{className:"input-container"},l.a.createElement("h2",{className:"input-label"},t),l.a.createElement("input",{type:"text",name:a,id:n,placeholder:c,className:"input",onChange:r}))}a(11);function h(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=function(e){c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},e.target.name,e.target.value)))},s=["A","B","C"];return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"body"},l.a.createElement(d,{label:"Question",name:"Question",placeholder:"Q: Enter your question here",id:"Question"}),l.a.createElement("h2",{className:"input-label"},"Options"),s.map((function(e,t){return l.a.createElement(d,{key:t,name:e,onChange:r,placeholder:"".concat(e,":")})})),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:function(){s.push("D")},className:"btn"},l.a.createElement("span",{className:"plus"},"+")," Option"),l.a.createElement(o.b,{to:{pathname:"/result",state:a}},l.a.createElement("input",{type:"submit",value:"Answer!",className:"submit-button btn"})))))}function b(e){var t=e.location.state,a=[],n=function(e){var t=Object.keys(e);return e[t[t.length*Math.random()<<0]]}(t);for(var c in t)a.push(l.a.createElement("h3",{key:c,className:n===t[c]?"selected":""},c,". ",t[c]));return l.a.createElement("div",{className:"results-container"},l.a.createElement(E,null),l.a.createElement("div",null,l.a.createElement("div",{className:"result-text-container"},l.a.createElement("h1",{className:"result-header-dark"},"Easy Decision Maker"),l.a.createElement("p",null,"When the decision is too hard or too simple use the Easy Decision Maker")),l.a.createElement("div",{className:"results-page-container"},l.a.createElement("div",{className:"results"},l.a.createElement("h2",{className:"result-header"},"Hello?"),a),l.a.createElement("div",{className:"buttons"},l.a.createElement("div",null,l.a.createElement(o.b,{to:"/"},l.a.createElement("button",{className:"btn button"},"Ask Again?"))),l.a.createElement("div",null,l.a.createElement("button",{className:"btn button"},"Ask another random question?")),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return document.location.reload()},className:"btn button"},"Get another random answer?"))))))}function p(){return l.a.createElement("main",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/result",component:b}),l.a.createElement(s.a,{path:"/",component:h})))}function v(){return l.a.createElement(o.a,null,l.a.createElement(p,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.228b2212.chunk.js.map