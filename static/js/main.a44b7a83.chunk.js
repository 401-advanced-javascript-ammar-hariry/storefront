(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,n){e.exports=n(60)},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=n(9),u=n(12),l=n(31),s=n(32),p={categories:[{name:"electronics",displayName:"Elecronics"},{name:"food",displayName:"Food"},{name:"clothing",displayName:"Clothing"}],products:[{name:"TV",category:"electronics",price:699,inStock:5},{name:"Radio",category:"electronics",price:99,inStock:15},{name:"Shirt",category:"clothing",price:9,inStock:25},{name:"Socks",category:"clothing",price:12,inStock:10},{name:"Apples",category:"food",price:.99,inStock:500},{name:"Eggs",category:"food",price:1.99,inStock:12},{name:"Bread",category:"food",price:2.39,inStock:90}],activeCategory:""},m={products:[{name:"TV "},{name:"Radio "},{name:"Shirt "},{name:"Socks "},{name:"Apples "},{name:"Eggs "},{name:"Bread "}]},d=n(36),f={results:[]},y=Object(u.combineReducers)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"Active":var r=(e=p).products.filter((function(e){return e.category===a})),c=e.categories.filter((function(e){return e.name===a}))[0].displayName;return{categories:e.categories,products:r,activeCategory:c};default:return e}},productsCart:function(){var e=arguments.length>1?arguments[1]:void 0,t=e.type,n=e.payload,a=e.status;switch(t){case"ADD":return{payload:n,status:a,totalCart:m.totalCart};default:return{status:!0}}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET":return{results:a};case"PUT":return e;case"POST":var r=[].concat(Object(d.a)(e.results),[a]);return{results:r};case"DELETE":default:return e}}}),g=Object(u.createStore)(y,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(s.a))),E=n(75),h=n(83),v=n(77),b=n(78),k=n(79),S=n(80),j=Object(E.a)({root:{maxWidth:600,display:"inline-block",margin:8,textAlign:"center"},h3:{textAlign:"center"},btn:{maxWidth:50,margin:3,padding:50}}),O={active:function(e){return{type:"Active",payload:e}}},C=Object(i.b)((function(e){return{counter:e.product}}),O)((function(e){var t=j();return r.a.createElement("section",null,r.a.createElement(h.a,{className:t.root},r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Browse Our Categories"))),r.a.createElement("ul",null,e.counter.categories.map((function(n,a){return r.a.createElement(S.a,{key:a,onClick:function(){return e.active(n.name)},className:t.btn,variant:"outlined",color:"primary"},n.name)})))))})),A=n(81),N=n(82),x=n(13),T=n.n(x),w=n(24),D=n(21),q=n.n(D),B="https://api401-todo.herokuapp.com/product",P=function(e){return function(){var t=Object(w.a)(T.a.mark((function t(n){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.quantity=1,t.abrupt("return",q.a.post(B).send(e).set("X-API-Key","foobar").set("Accept","application/json").then((function(e){n(W(e.body))})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){return function(e){return q.a.get(B).then((function(t){console.log(t.body),e(F(t.body))}))}},R=function(e,t,n){return function(){var a=Object(w.a)(T.a.mark((function a(r){return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.quantity=parseInt(e),a.abrupt("return",q.a.put("".concat(B,"/").concat(n)).send(t).set("Accept","application/json").then((function(e){r(G(e))})));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},W=function(e){return{type:"POST",payload:e}},F=function(e){return{type:"GET",payload:e}},G=function(e){return{type:"PUT",payload:e}},J=function(e){return{type:"DELETE",payload:e}};var L,M=Object(i.b)((function(e){return{cart:e.cart}}),(function(e,t){return{get:function(){return e(I())},put:function(t,n){return e(R(t,n))},post:function(t){return e(P(t))}}}))((function(e){return r.a.createElement(S.a,{onClick:function(){return e.post(e.body)},size:"small",variant:"contained",color:"primary"},"Add To Cart")})),U=Object(E.a)({root:{maxWidth:150,display:"inline-block",margin:8},media:{height:140},h3:{textAlign:"center"}}),V={addToCart:function(e){return{type:"ADD",payload:e,status:!1}}},$=Object(i.b)((function(e){return{products:e.product}}),V)((function(e){var t=U();return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:t.products},r.a.createElement("h1",{className:t.h3},e.products.activeCategory),r.a.createElement("h3",null,"In our Store:"),r.a.createElement("ul",{className:t.right},e.products.products.map((function(e,n){return r.a.createElement(h.a,{key:n,className:t.root},r.a.createElement(v.a,null,r.a.createElement(A.a,{className:t.media,image:"/static/images/cards/contemplative-reptile.jpg",title:"Contemplative Reptile"}),r.a.createElement(b.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},"price: ",e.price,"$"),r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},"in Stock: ",e.inStock))),r.a.createElement(N.a,null,r.a.createElement(M,{body:e})))}))),r.a.createElement("section",null)))})),_=Object(i.b)((function(e){return{data:e.data}}),(function(e,t){return{get:function(){return e(I())},put:function(t,n,a){return e(R(t,n,a))},post:function(t){return e(P(t))},delete:function(t){return e(function(e){return function(){var t=Object(w.a)(T.a.mark((function t(n){var a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.a.delete("".concat(B,"/").concat(e));case 2:a=t.sent,n(J(a.body));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=function(e){L=e.target.value};return Object(a.useEffect)((function(){e.get()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,"cart (",e.data.results.length,")"),r.a.createElement("section",{style:{float:"right"}},e.data.results.map((function(n,a){return r.a.createElement("div",{key:a},r.a.createElement("h3",null,"Title:  ",n.name),"category :",n.category,"price: ",n.price,"inStock: ",n.inStock,"quantity: ",n.quantity,r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},"Price: ",n.price,"$ - Quantity: ",r.a.createElement("input",{onChange:t,className:"inNum",type:"number",name:"quantity",placeholder:n.quantity})),r.a.createElement(S.a,{onClick:function(){e.delete(n._id),e.get()}},"Delete"),r.a.createElement(S.a,{onClick:function(){e.put(L,n,n._id),e.get()}},"update"))}))))}));var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(_,null)),r.a.createElement(C,null),r.a.createElement($,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:g},r.a.createElement(z,null))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a44b7a83.chunk.js.map