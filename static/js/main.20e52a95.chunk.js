(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{22:function(n,t,e){n.exports=e(34)},32:function(n,t,e){},34:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(8),a=e.n(i),c=e(4),u=e(7),s=e(13),d=e(16);function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(e,!0).forEach((function(t){Object(d.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(e).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var p=[{id:0,name:"To Do",tasks:[{id:0,name:"Hello",text:"World"}],sortBy:0},{id:1,name:"In process",tasks:[],sortBy:0},{id:2,name:"Done",tasks:[],sortBy:0}],m=function(n,t,e){return e?n.name>t.name?1:t.name>n.name?-1:0:n.name<t.name?1:t.name<n.name?-1:0},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.id,o=t.name,i=t.text,a=t.boardId;switch(e){case"ADD_TODO":return n.map((function(n){return n.id===a?f({},n,{tasks:[].concat(Object(s.a)(n.tasks),[{id:r,name:o,text:i}]).sort((function(t,e){return m(t,e,n.sortBy)}))}):n}));case"DELETE_TODO":return n.map((function(n){return f({},n,{tasks:n.tasks.filter((function(n){return n.id!==r}))})}));case"SORT_TODO":return n.map((function(n){return n.id===a?f({},n,{sortBy:(n.sortBy+1)%2,tasks:n.tasks.sort((function(t,e){return m(e,t,n.sortBy)}))}):n}));case"EDIT_TODO_NAME":return n.map((function(n){return f({},n,{tasks:n.tasks.map((function(n){return n.id===r?f({},n,{name:o}):n}))})}));case"EDIT_TODO_TEXT":return n.map((function(n){return f({},n,{tasks:n.tasks.map((function(n){return n.id===r?f({},n,{text:i}):n}))})}));case"MOVE_TODO":var c;return n.map((function(n){return n.tasks.map((function(n){return n.id===r&&(c=n),null}))})),n.map((function(n){return f({},n,{tasks:n.tasks.filter((function(n){return n.id!==r}))})})).map((function(n){return n.id===a?f({},n,{tasks:[].concat(Object(s.a)(n.tasks),[c]).sort((function(t,e){return m(t,e,n.sortBy)}))}):n}));default:return n}},O=Object(u.b)({boards:b}),v=(e(32),e(1)),E=e(2),k=1;function g(){var n=Object(v.a)(["\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    color: #2DCD72;\n    cursor: pointer;\n    user-select: none;\n    visibility: ",";\n"]);return g=function(){return n},n}function y(){var n=Object(v.a)(["\n    align-self: center;\n    justify-self: center;\n    text-decoration: underline;\n    color: blue;\n    cursor: pointer;\n    user-select: none;\n"]);return y=function(){return n},n}function D(){var n=Object(v.a)(["\n    align-self: center;\n    justify-self: center;\n"]);return D=function(){return n},n}function j(){var n=Object(v.a)(["\n    background-color: white;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    display: grid;\n    grid-template-rows: 1fr, 1fr;\n    padding: 8px;\n    position: relative;\n"]);return j=function(){return n},n}var w=E.a.div(j()),h=E.a.div(D()),T=E.a.div(y()),x=E.a.div(g(),(function(n){return n.isLocked?"hidden":"visible"})),_=Object(c.b)()((function(n){var t=n.name,e=n.dispatch,r=n.id,i=n.isLocked;return o.a.createElement(w,null,o.a.createElement(x,{onClick:function(){e({type:"SORT_TODO",boardId:r})},isLocked:i},"Sort (\u0410-\u044f)"),o.a.createElement(h,null,t),o.a.createElement(T,{onClick:function(){e(function(n,t,e){return{type:"ADD_TODO",id:k++,name:n,text:t,boardId:e}}("\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0441\u044e \u0440\u0430\u0431\u043e\u0442\u0443","\u041d\u0443\u0436\u043d\u043e \u043f\u043e\u0439\u0442\u0438 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u043d\u0430\u0447\u0430\u0442\u043e\u0435",r))}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"))})),I=e(19);function L(){var n=Object(v.a)(["\n    min-width: 100px;\n    height: 20px;\n    color: #000;\n"]);return L=function(){return n},n}function B(){var n=Object(v.a)(["\n    position: absolute;\n    top: 20;\n    left: 0;\n    min-width: 100px;\n    visibility: ",";\n    z-index: -101;\n"]);return B=function(){return n},n}function S(){var n=Object(v.a)(["\n    position: relative;\n    color: #bdb9b9;\n    font-size: 14px;\n    cursor: pointer;\n    z-index: 100;\n"]);return S=function(){return n},n}function C(){var n=Object(v.a)(["\n    color: #ef5050;\n    font-size: 14px;\n    cursor: pointer;\n    margin-right: 8px;\n"]);return C=function(){return n},n}function P(){var n=Object(v.a)(["\n    font-size: 14px;\n    word-wrap: break-word;\n"]);return P=function(){return n},n}function z(){var n=Object(v.a)(["\n    font-weight: 900;\n    font-size: 16px;\n    word-wrap: break-word;\n"]);return z=function(){return n},n}function M(){var n=Object(v.a)(["\n    background-color: white;\n    margin: 8px;\n    padding: 8px;\n"]);return M=function(){return n},n}var N=E.a.div(M()),X=E.a.div(z()),W=E.a.div(P()),A=E.a.span(C()),R=E.a.span(S()),V=E.a.div(B(),(function(n){return n.isDown?"visible":"hidden"})),F=E.a.div(L()),J=Object(c.b)((function(n){return{boards:n.boards}}))((function(n){var t=n.name,e=n.description,i=n.id,a=n.boardId,c=n.dispatch,u=n.boards,s=n.isLocked,d=Object(r.useState)(!1),l=Object(I.a)(d,2),f=l[0],p=l[1],m=u.filter((function(n){return n.id!==a}));return o.a.createElement(N,null,o.a.createElement(X,{suppressContentEditableWarning:!0,contentEditable:!s,onBlur:function(n){c(function(n,t){return{type:"EDIT_TODO_NAME",id:n,name:t}}(i,n.currentTarget.textContent))}},t),o.a.createElement(W,{suppressContentEditableWarning:!0,contentEditable:!s,onBlur:function(n){c(function(n,t){return{type:"EDIT_TODO_TEXT",id:n,text:t}}(i,n.currentTarget.textContent))}},e),o.a.createElement("div",null,o.a.createElement(A,{onClick:function(){c(function(n){return{type:"DELETE_TODO",id:n}}(i))}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),o.a.createElement(R,{onMouseOver:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},"\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u2193",o.a.createElement(V,{isDown:f},m.map((function(n){return o.a.createElement(F,{onClick:function(){return c(function(n,t){return{type:"MOVE_TODO",id:n,boardId:t}}(i,n.id))},key:n.id},n.name)}))))))}));function U(){var n=Object(v.a)(["\n    background-color: #F2F2F2;\n    border-radius: 8px;\n    margin: 8px;\n"]);return U=function(){return n},n}var H=E.a.div(U()),$=function(n){var t=n.name,e=n.data,r=n.id,i=n.isLocked;return o.a.createElement(H,null,o.a.createElement(_,{name:t,id:r,isLocked:i}),e.map((function(n){return o.a.createElement(J,{key:n.id,name:n.name,description:n.text,id:n.id,boardId:r,isLocked:i})})))};function q(){var n=Object(v.a)(["\n  min-height: 100%;\n  display: grid;\n  grid-template-columns: 33% 33% 33%;\n  grid-template-rows: auto;\n  background-color: #E5E5E6;\n"]);return q=function(){return n},n}var G=E.a.div(q()),K=Object(c.b)((function(n){return{boards:n.boards}}))((function(n){var t=n.boards;return o.a.createElement(G,null,t.map((function(n){return o.a.createElement($,{key:n.id,id:n.id,name:n.name,data:n.tasks,isLocked:2===n.id})})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=Object(u.c)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(o.a.createElement(c.a,{store:Q},o.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.20e52a95.chunk.js.map