(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{56:function(e,n,t){"use strict";var a=t(28),r=t.n(a),c=t(17),i=t.n(c),u=t(18),o=t.n(u),l=t(5),p=t.n(l),s=t(0),m=t.n(s),d=t(3),f=t(30),h=t(12),y=[{name:"Cola (1,60\u20ac)",price:1.6},{name:"Beer (2,00\u20ac)",price:2},{name:"Getr\xe4nk (1,40\u20ac)",price:1.4},{name:"Getr\xe4nk (1,50\u20ac)",price:1.5}],v="Base",g="1",E="2",k="3",z="4",O="5",b="6",C="Super Surprise",S="Schokopizza",P={0:0,1:1.7,2:2.4,3:2.5,4:2.1,5:2.9,6:3.6,7:1.6,8:.6},j="small",w="medium",D="large",T={1:2.9,2:4.9,3:6.9},x="wheat",B="glutenfree",I="spelt",G={1:0,2:3,3:.5},F={1:"Garlic",2:"Zucchini",3:"Onion",4:"Chickpeas",5:"Sunflower Seeds",6:"Mushroom",7:"Bell Pepper",8:"Spinach",9:"Sesame Seeds",10:"Pineapple",11:"Broccoli",12:"Cherry Tomatoes",13:"Pumpkin Seeds",14:"Caramelized Onions",15:"Eggplant",16:"Banana",17:"Sweet Potato",18:"Fresh Basil",19:"Caper",20:"Pepperoni",21:"Tahini",22:"Ruccola",23:"Peanut Butter",24:"Cashew",25:"Avocado",26:"Smoked Tofu",27:"Chia Seeds",28:"Dried Figs",29:"Walnuts",30:"Black Olives",31:"Hemp Seeds",32:"Green Olives",33:"Vegan Salami",34:"Artichoke",35:"Dried Tomatoes",36:"Tempeh",37:"Pesto",38:"Seitan Gyros"},A={1:.4,2:.4,3:.4,4:.4,5:.4,6:.4,7:.4,8:.4,9:.4,10:.5,11:.5,12:.5,13:.5,14:.5,15:.5,16:.5,17:.5,18:.6,19:.6,20:.6,21:.6,22:.7,23:.7,24:.7,25:.7,26:.7,27:.7,28:.7,29:.7,30:1,31:1,32:1,33:1,34:1.5,35:1.5,36:1.5,37:1.5,38:1.5},J=function(e){var n=e.incredience;return m.a.createElement("li",null,F[n]," (",A[n]," \u20ac)")},H=function(e){var n=e.pizza;return m.a.createElement("ul",null,n.incrediences.map((function(e,n){return m.a.createElement(J,{key:n,incredience:e})})))},L=function(e){return e.toFixed(2)+"\u20ac"},M=function(e){var n=e.order;return m.a.createElement("div",null,m.a.createElement("ul",null,n.foods.map((function(e,n){return m.a.createElement("li",{key:n},"Pizza ",L(e.price))}))),m.a.createElement("ul",null,n.drinks.map((function(e,n){return m.a.createElement("li",{key:n},y[e.type].name," ",L(e.price))}))),m.a.createElement("p",null,"Total: ",L(n.total)))},N=function(e){var n=e.closePizza,t=Object(s.useState)(""),a=p()(t,2);a[0],a[1];return m.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),n()}},"Click")},R=function(e){var n=e.closeOrder;return m.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),n()}},"Close Order")},V=function(e){var n=e.incrediences,t=e.changeIncrediences;return m.a.createElement("input",{type:"text",value:n,onChange:function(e){t(e.target.value)}})},W=function(e){var n=e.pizza,t=e.changeDough,a=function(e){t(e.target.value)};return m.a.createElement("div",null,m.a.createElement("form",null,m.a.createElement("input",{type:"radio",value:"1",name:"dough",checked:1===n.dough,onChange:a})," ",x,m.a.createElement("input",{type:"radio",value:"2",name:"dough",checked:2===n.dough,onChange:a})," ",B,m.a.createElement("input",{type:"radio",value:"3",name:"dough",checked:3===n.dough,onChange:a})," ",I))},Z=function(e){var n=e.pizza,t=e.changeSize,a=function(e){t(e.target.value)};return m.a.createElement("div",null,m.a.createElement("form",null,m.a.createElement("input",{type:"radio",value:"2",name:"size",checked:2===n.size,onChange:a})," ",w,m.a.createElement("input",{type:"radio",value:"1",name:"size",checked:1===n.size,onChange:a})," ",j,m.a.createElement("input",{type:"radio",value:"3",name:"size",checked:3===n.size,onChange:a})," ",D))},$=function(e){var n=e.pizza,t=e.changeType,a=function(e){t(e.target.value)};return m.a.createElement("div",null,m.a.createElement("form",null,m.a.createElement("input",{type:"radio",value:"0",name:"type",checked:0===n.type,onChange:a})," ",v,m.a.createElement("input",{type:"radio",value:"1",name:"type",checked:1===n.type,onChange:a})," ",g,m.a.createElement("input",{type:"radio",value:"2",name:"type",checked:2===n.type,onChange:a})," ",E,m.a.createElement("input",{type:"radio",value:"3",name:"type",checked:3===n.type,onChange:a})," ",k,m.a.createElement("input",{type:"radio",value:"4",name:"type",checked:4===n.type,onChange:a})," ",z,m.a.createElement("input",{type:"radio",value:"5",name:"type",checked:5===n.type,onChange:a})," ",O,m.a.createElement("input",{type:"radio",value:"6",name:"type",checked:6===n.type,onChange:a})," ",b,m.a.createElement("input",{type:"radio",value:"7",name:"type",checked:7===n.type,onChange:a})," ",C,m.a.createElement("input",{type:"radio",value:"8",name:"type",checked:8===n.type,onChange:a})," ",S))},q=function(e){var n=e.addDrinkToOrder;return m.a.createElement("div",null,y.map((function(e,t){return m.a.createElement("button",{key:t,onClick:function(){n(t)},value:t},e.name)})))};function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?K(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var U=d.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}});n.a=function(){var e={dough:1,size:2,type:0,incrediences:[],price:0},n={foods:[],drinks:[],total:0},t=Object(s.useState)(""),a=p()(t,2),c=a[0],u=a[1],o=Object(s.useState)([]),l=p()(o,2),d=l[0],v=l[1];Object(s.useEffect)((function(){console.log(d)}),[d]);var g=Object(s.useState)(n),E=p()(g,2),k=E[0],z=E[1];Object(s.useEffect)((function(){j()}),[k.foods,k.drinks]);var O=Object(s.useState)(e),b=p()(O,2),C=b[0],S=b[1];Object(s.useEffect)((function(){w()}),[C.incrediences,C.size,C.dough,C.type]);var j=function(){var e=0;k.drinks.map((function(n){return e+=n.price})),k.foods.map((function(n){return e+=n.price})),z((function(n){return Q(Q({},n),{},{total:e})}))},w=function(){var e=T[C.size]+G[C.dough]+P[C.type];C.incrediences.forEach((function(n){A[n]&&(e+=A[n])})),S((function(n){return Q(Q({},n),{},{price:e})}))};return m.a.createElement(h.a,{style:U.container},m.a.createElement(f.a,null,"PizzaLabCalc"),m.a.createElement(W,{changeDough:function(e){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:S((function(n){return Q(Q({},n),{},{dough:parseInt(e)})}));case 1:case"end":return n.stop()}}),null,null,null,Promise)},pizza:C}),m.a.createElement(Z,{changeSize:function(e){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:S((function(n){return Q(Q({},n),{},{size:parseInt(e)})}));case 1:case"end":return n.stop()}}),null,null,null,Promise)},pizza:C}),m.a.createElement($,{changeType:function(e){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:S((function(n){return Q(Q({},n),{},{type:parseInt(e)})}));case 1:case"end":return n.stop()}}),null,null,null,Promise)},pizza:C}),m.a.createElement(H,{pizza:C}),m.a.createElement(f.a,null,"Total: ",L(C.price)),m.a.createElement(V,{incrediences:c,changeIncrediences:function(e){var n;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:u(e),n=e.replace(/,+$/,"").split(",").map(Number),S((function(e){return Q(Q({},e),{},{incrediences:n})}));case 3:case"end":return t.stop()}}),null,null,null,Promise)}}),m.a.createElement(N,{closePizza:function(){var n=[].concat(r()(k.foods),[C]);z((function(e){return Q(Q({},e),{},{foods:n})})),S(e),u("")}}),m.a.createElement("hr",null),m.a.createElement(M,{order:k}),m.a.createElement(q,{addDrinkToOrder:function(e){var n=[].concat(r()(k.drinks),[{type:e,price:y[e].price}]);z((function(e){return Q(Q({},e),{},{drinks:n})}))}}),m.a.createElement(R,{closeOrder:function(){v([].concat(r()(d),[k])),z(n),S(e),u("")}}))}},57:function(e,n,t){e.exports=t(77)}},[[57,1,2]]]);
//# sourceMappingURL=app.8df6bec3.chunk.js.map