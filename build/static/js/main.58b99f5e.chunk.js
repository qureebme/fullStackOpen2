(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(14),l=t(2),i=function(e){var n=e.newName,t=e.newNumber,a=e.onSubmitHandler,o=e.onChangeHandler,u=e.onChangeHandler2;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:o}),r.a.createElement("br",null),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.newSearch,t=e.onSearchHandler;return r.a.createElement("p",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},d=function(e){var n=e.showNames,t=e.persons,a=e.newSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,n(a,t)))},s={color:"green",fontSize:25,backgroundColor:"lightgrey",padding:10,borderStyle:"solid",borderRadius:5},f=function(e){var n=e.notifMessage;return r.a.createElement("div",{style:n?s:null},n)},h={color:"red",fontSize:25,backgroundColor:"lightgrey",padding:10,borderStyle:"solid",borderRadius:5},b=function(e){var n=e.errorMessage;return r.a.createElement("div",{style:n?h:null},n)},g=t(3),E=t.n(g),w="http://localhost:3001/api/persons/",p=function(){return E.a.get(w)},v=function(e){return E.a.post(w,e)},S=function(e){return E.a.delete(w+e.id)},O=function(e){return E.a.put(w+e.id,e).then(function(e){return e.data})},C=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),s=Object(l.a)(u,2),h=s[0],g=s[1],E=Object(a.useState)(""),w=Object(l.a)(E,2),C=w[0],j=w[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),H=k[0],N=k[1],M=Object(a.useState)(null),R=Object(l.a)(M,2),T=R[0],x=R[1],L=Object(a.useState)(null),D=Object(l.a)(L,2),z=D[0],A=D[1];Object(a.useEffect)(function(){p().then(function(e){return o(e.data)}).catch(function(e){return console.log("ERROR: ",e)})},[]);var J=function(e){return function(){window.confirm("Delete ".concat(e.name,"?"))&&S(e).then(function(n){o(t.filter(function(n){return n.id!==e.id})),x("Deleted ".concat(e.name)),setTimeout(function(){return x(null)},3e3)}).catch(function(n){A("".concat(e.name," no longer exists on the server")),setTimeout(function(){return A(null)},3e3)})}},B=function(e,n){if(e){var t=n.filter(function(n){return-1!==n.name.toLowerCase().indexOf(e.toLowerCase())});return t[0]?t.map(function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:J(e)},"delete"))}):"No matching contact"}};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{notifMessage:T||null}),r.a.createElement(b,{errorMessage:z||null}),r.a.createElement(m,{newSearch:H,onSearchHandler:function(e){var n=e.target.value;N(n)}}),r.a.createElement("h3",null,"Add a new contact"),r.a.createElement(i,{newName:h,newNumber:C,onChangeHandler:function(e){return g(e.target.value)},onChangeHandler2:function(e){return j(e.target.value)},onSubmitHandler:function(e){e.preventDefault();var n={name:h.trim(),number:C.trim()},a=t.filter(function(e){return e.name.toLowerCase()===n.name.toLowerCase()});if(0!==a.length){if(!window.confirm("".concat(a[0].name," is already added to phonebook, replace old number with the new one?")))return;var r=Object(c.a)({},n,{id:a[0].id});O(r).then(function(e){o(t.map(function(n){return n.id===e.id?e:n})),g(""),j(""),x("Modified ".concat(r.name)),setTimeout(function(){return x(null)},3e3)}).catch(function(e){A("".concat(r.name," no longer exists on the server")),setTimeout(function(){return A(null)},3e3)})}else v(n).then(function(e){o(t.concat(e.data)),g(""),j(""),x("Added ".concat(n.name)),setTimeout(function(){return x(null)},3e3)}).catch(function(e){return console.log("something really bad happened",e)})}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(d,{persons:t,showNames:function(e,n){return e?B(e,n):n.map(function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:J(e)},"delete"))})},showSearchMatches:B,newSearch:H}))};u.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.58b99f5e.chunk.js.map