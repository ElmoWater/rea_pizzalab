(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{69:function(e,n,t){"use strict";var a=t(37),r=t.n(a),c=t(23),i=t.n(c),o=t(24),l=t.n(o),u=t(8),s=t.n(u),m=t(0),p=t.n(m),f=t(7),d=t(48),h=[{name:"Getr\xe4nk (1,00\u20ac)",price:1},{name:"Getr\xe4nk (1,40\u20ac)",price:1.4},{name:"Getr\xe4nk (1,50\u20ac)",price:1.5},{name:"Getr\xe4nk (1,60\u20ac)",price:1.6},{name:"Getr\xe4nk (2,00\u20ac)",price:2}],g="Base",E="1",v="2",b="3",y="4",z="5",O="6",k="Super Surprise",C="Schokopizza",S={0:0,1:1.7,2:2.4,3:2.5,4:2.1,5:2.9,6:3.6,7:1.6,8:.6},x="small",P="medium",j="large",w={1:2.9,2:4.9,3:6.9},D="wheat",T="glutenfree",G="spelt",N={1:0,2:3,3:.5},B={1:"Garlic",2:"Zucchini",3:"Onion",4:"Chickpeas",5:"Sunflower Seeds",6:"Mushroom",7:"Bell Pepper",8:"Spinach",9:"Sesame Seeds",10:"Pineapple",11:"Broccoli",12:"Cherry Tomatoes",13:"Pumpkin Seeds",14:"Caramelized Onions",15:"Eggplant",16:"Banana",17:"Sweet Potato",18:"Fresh Basil",19:"Caper",20:"Pepperoni",21:"Tahini",22:"Ruccola",23:"Peanut Butter",24:"Cashew",25:"Avocado",26:"Smoked Tofu",27:"Chia Seeds",28:"Dried Figs",29:"Walnuts",30:"Black Olives",31:"Hemp Seeds",32:"Green Olives",33:"Vegan Salami",34:"Artichoke",35:"Dried Tomatoes",36:"Tempeh",37:"Pesto",38:"Seitan Gyros"},I={1:.4,2:.4,3:.4,4:.4,5:.4,6:.4,7:.4,8:.4,9:.4,10:.5,11:.5,12:.5,13:.5,14:.5,15:.5,16:.5,17:.5,18:.6,19:.6,20:.6,21:.6,22:.7,23:.7,24:.7,25:.7,26:.7,27:.7,28:.7,29:.7,30:1,31:1,32:1,33:1,34:1.5,35:1.5,36:1.5,37:1.5,38:1.5},H=function(e){var n=e.incredience;return p.a.createElement("span",null,"+ ",B[n]," (",I[n]," \u20ac)")},V=function(e){var n=e.pizza;return p.a.createElement("div",null,"\xa0",n.incrediences.map((function(e,n){return p.a.createElement(H,{key:n,incredience:e})})))},F=function(e){return e.toFixed(2)+" \u20ac"},A=function(e){var n=e.order;return p.a.createElement("div",null,p.a.createElement("ul",null,n.foods.map((function(e,n){return p.a.createElement("li",{key:n},"Pizza ",F(e.price))}))),p.a.createElement("ul",null,n.drinks.map((function(e,n){return p.a.createElement("li",{key:n},h[e.type].name," ",F(e.price))}))),p.a.createElement("p",null,"Total: ",F(n.total)))},J=function(e){var n=e.orderHistory;return p.a.createElement("div",{className:"mt-5"},p.a.createElement("p",null,"Order History"),p.a.createElement("table",null,n.map((function(e,n){return e.foods.map((function(e,n){return p.a.createElement("tr",{key:n,style:{border:"1px solid rgb(0, 0, 0)"}},p.a.createElement("th",null,"Pizza"),p.a.createElement("th",null,F(e.price)),p.a.createElement("th",null,"19%"))}))})),n.map((function(e,n){return e.drinks.map((function(e,n){return p.a.createElement("tr",{key:n},p.a.createElement("th",null,"Drink"),p.a.createElement("th",null,F(e.price)),p.a.createElement("th",null,"19%"))}))}))),p.a.createElement("p",null,"Total: ",F(function(e){var n=0;return e.map((function(e,t){n+=e.total})),n}(n))))},M=t(99),_=function(e){var n=e.closePizza,t=Object(m.useState)(""),a=s()(t,2);a[0],a[1];return p.a.createElement(M.a,{type:"submit",onClick:function(e){e.preventDefault(),n()}},"Close Pizza")},L=function(e){var n=e.closeOrder;return p.a.createElement(M.a,{type:"submit",onClick:function(e){e.preventDefault(),n()},className:"mt-5"},"Close Order")},R=function(e){var n=e.incrediences,t=e.changeIncrediences;return p.a.createElement("input",{type:"text",value:n,onChange:function(e){t(e.target.value)}})},W=t(14),Z=t(4),$=function(e){var n=e.dough,t=(e.pizza,e.changeDough),a=function(e){t(e.target.value)};return p.a.createElement("div",null,p.a.createElement("form",null,p.a.createElement(W.a,{type:"radio",name:"dough",defaultValue:"1",value:n},p.a.createElement(Z.a,{value:"1",onChange:a},D),p.a.createElement(Z.a,{value:"2",onChange:a},T),p.a.createElement(Z.a,{value:"3",onChange:a},G))))},q=function(e){var n=e.size,t=(e.pizza,e.changeSize),a=function(e){t(e.target.value)};return p.a.createElement("div",null,p.a.createElement("form",null,p.a.createElement(W.a,{className:"mt-1",type:"radio",name:"size",defaultValue:"2",value:n},p.a.createElement(Z.a,{value:"1",onChange:a},x),p.a.createElement(Z.a,{value:"2",onChange:a},P),p.a.createElement(Z.a,{value:"3",onChange:a},j))))},K=function(e){var n=e.type,t=(e.pizza,e.changeType),a=function(e){t(e.target.value)};return p.a.createElement("div",null,p.a.createElement("form",null,p.a.createElement(W.a,{type:"radio",name:"size",defaultValue:"0",className:"mt-1",value:n},p.a.createElement(Z.a,{value:"0",onChange:a},g),p.a.createElement(Z.a,{value:"1",onChange:a},E),p.a.createElement(Z.a,{value:"2",onChange:a},v),p.a.createElement(Z.a,{value:"3",onChange:a},b),p.a.createElement(Z.a,{value:"4",onChange:a},y),p.a.createElement(Z.a,{value:"5",onChange:a},z),p.a.createElement(Z.a,{value:"6",onChange:a},O),p.a.createElement(Z.a,{value:"7",onChange:a},k),p.a.createElement(Z.a,{value:"8",onChange:a},C))))},Q=function(e){var n=e.addDrinkToOrder;return p.a.createElement("div",null,h.map((function(e,t){return p.a.createElement(M.a,{key:t,onClick:function(){n(t)},value:t},e.name)})))};t(81),t(83);function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}f.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),n.a=function(){var e={dough:1,size:2,type:0,incrediences:[],price:0},n={foods:[],drinks:[],total:0},a=Object(m.useState)(""),c=s()(a,2),o=c[0],l=c[1],u=Object(m.useState)("1"),f=s()(u,2),g=f[0],E=f[1],v=Object(m.useState)("2"),b=s()(v,2),y=b[0],z=b[1],O=Object(m.useState)("0"),k=s()(O,2),C=k[0],x=k[1],P=Object(m.useState)([]),j=s()(P,2),D=j[0],T=j[1],G=Object(m.useState)(n),B=s()(G,2),H=B[0],M=B[1];Object(m.useEffect)((function(){ee()}),[H.foods,H.drinks]);var W=Object(m.useState)(e),Z=s()(W,2),U=Z[0],Y=Z[1];Object(m.useEffect)((function(){ne()}),[U.incrediences,U.size,U.dough,U.type]);var ee=function(){var e=0;H.drinks.map((function(n){return e+=n.price})),H.foods.map((function(n){return e+=n.price})),M((function(n){return X(X({},n),{},{total:e})}))},ne=function(){var e=w[U.size]+N[U.dough]+S[U.type];U.incrediences.forEach((function(n){I[n]&&(e+=I[n])})),Y((function(n){return X(X({},n),{},{price:e})}))};return p.a.createElement("div",{className:"appContainer container align-items-center"},p.a.createElement("img",{className:"logo",src:t(85)}),p.a.createElement("h3",{className:"h3 mb-3 font-weight-normal "},"PizzaLabCalc"),p.a.createElement($,{dough:g,changeDough:function(e){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:E(e),Y((function(n){return X(X({},n),{},{dough:parseInt(e)})}));case 2:case"end":return n.stop()}}),null,null,null,Promise)},pizza:U}),p.a.createElement(q,{size:y,changeSize:function(e){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:z(e),Y((function(n){return X(X({},n),{},{size:parseInt(e)})}));case 2:case"end":return n.stop()}}),null,null,null,Promise)},pizza:U}),p.a.createElement(K,{type:C,changeType:function(e){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:x(e),Y((function(n){return X(X({},n),{},{type:parseInt(e)})}));case 2:case"end":return n.stop()}}),null,null,null,Promise)},pizza:U}),p.a.createElement(V,{pizza:U}),"Extra Incrediences: ",p.a.createElement(R,{incrediences:o,changeIncrediences:function(e){var n;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:l(e),n=e.replace(/,+$/,"").split(",").map(Number),Y((function(e){return X(X({},e),{},{incrediences:n})}));case 3:case"end":return t.stop()}}),null,null,null,Promise)}}),p.a.createElement("div",null,p.a.createElement(d.a,null,"Total: ",F(U.price))),p.a.createElement("div",null,p.a.createElement(_,{closePizza:function(){var n=[].concat(r()(H.foods),[U]);M((function(e){return X(X({},e),{},{foods:n})})),Y(e),l(""),E("1"),z("2"),x("0")}})),p.a.createElement("hr",null),p.a.createElement(A,{order:H}),p.a.createElement(Q,{addDrinkToOrder:function(e){var n=[].concat(r()(H.drinks),[{type:e,price:h[e].price}]);M((function(e){return X(X({},e),{},{drinks:n})}))}}),p.a.createElement(L,{closeOrder:function(){T([].concat(r()(D),[H])),M(n),Y(e),l(""),E("1"),z("2"),x("0")}}),p.a.createElement(J,{orderHistory:D}))}},70:function(e,n,t){e.exports=t(97)},83:function(e,n,t){var a=t(44),r=t(84);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};a(r,c);e.exports=r.locals||{}},84:function(e,n,t){(n=t(45)(!1)).push([e.i,'body {\n  background-color: #f5f5f5; \n}\n\n\n\nhtml,\n.appContainer {\n  height: 100%;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .checkbox {\n  font-weight: 400;\n}\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type="email"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type="password"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.logo {\n  width: 80px;\n  height: 80px;\n}',""]),e.exports=n},85:function(e,n,t){e.exports=t.p+"static/media/logo.736facda.png"}},[[70,1,2]]]);
//# sourceMappingURL=app.7421ab3c.chunk.js.map