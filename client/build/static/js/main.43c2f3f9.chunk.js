(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{190:function(e,t,n){},378:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(170),r=n.n(s),i=n(29),o=(n(190),n(171)),j=n.n(o),u=n(102),l=n.n(u),h=n(106),b=n(172),d=n(185),O=(n(378),n(3));var m=function(e){var t=e.socket,n=e.username,a=e.room,s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],u=Object(c.useState)([]),m=Object(i.a)(u,2),x=m[0],p=m[1],f=function(){var e=Object(b.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===o){e.next=6;break}return c={room:a,author:n,message:o,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},e.next=4,t.emit("send_message",c);case 4:p((function(e){return[].concat(Object(h.a)(e),[c])})),j("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t.on("receive_message",(function(e){p((function(t){return[].concat(Object(h.a)(t),[e])}))}))}),[t]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"chat-window",children:[Object(O.jsx)("div",{className:"chat-header",children:Object(O.jsx)("p",{children:" Chat Now"})}),Object(O.jsx)("div",{className:"chat-body",children:Object(O.jsx)(d.a,{className:"message-container",children:x.map((function(e){return Object(O.jsx)("div",{className:"message",id:n===e.author?"you":"other",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"message-content",children:Object(O.jsx)("p",{children:e.message})}),Object(O.jsxs)("div",{className:"message-meta",children:[Object(O.jsx)("p",{id:"time",children:e.time}),Object(O.jsx)("p",{id:"author",children:e.author})]})]})})}))})}),Object(O.jsxs)("div",{className:"chat-footer",children:[Object(O.jsx)("input",{type:"text",value:o,placeholder:"Hey...",onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&f()}}),Object(O.jsx)("button",{onClick:f,children:"\u25ba"})]})]})})},x=j.a.connect("http://localhost:3001");var p=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],u=Object(c.useState)(!1),l=Object(i.a)(u,2),h=l[0],b=l[1];return Object(O.jsx)("div",{className:"App",children:h?Object(O.jsx)(m,{socket:x,username:n,room:o}):Object(O.jsxs)("div",{className:"joinChatContainer",children:[Object(O.jsx)("h3",{children:"Join A Chat"}),Object(O.jsx)("input",{type:"text",placeholder:"Your Name...",onChange:function(e){a(e.target.value)}}),Object(O.jsx)("input",{type:"text",placeholder:"Group ID...",onChange:function(e){j(e.target.value)}}),Object(O.jsx)("button",{onClick:function(){""!==n&&""!==o&&(x.emit("join_room",o),b(!0))},children:"Join A Group"})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,381)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),f()}},[[380,1,2]]]);
//# sourceMappingURL=main.43c2f3f9.chunk.js.map