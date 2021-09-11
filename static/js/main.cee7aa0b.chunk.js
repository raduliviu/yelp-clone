(this["webpackJsonpyelp-clone"]=this["webpackJsonpyelp-clone"]||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),s=n.n(r),i=(n(30),n(19)),l=n.n(i),o=n(23),h=n(9),j=(n(32),n(2)),p=n(1);function u(){return Object(p.jsxs)("div",{className:"searchBar",children:[Object(p.jsx)("div",{children:"Find "}),Object(p.jsx)("input",{className:"searchInput",type:"search"}),Object(p.jsx)("div",{children:"Near "}),Object(p.jsx)("input",{className:"searchInput",type:"search"}),Object(p.jsx)("button",{id:"searchButton",children:"Search"})]})}var b=n(8);function d(){return Object(p.jsxs)("header",{children:[Object(p.jsx)(b.b,{to:"/yelp-clone",children:Object(p.jsx)("h1",{id:"siteTitle",children:"Yelp"})}),Object(p.jsx)(u,{})]})}function m(e){return Object(p.jsxs)("li",{className:"resultCard",children:[Object(p.jsx)("img",{src:"https://via.placeholder.com/200",alt:""}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{className:"resultCardName",children:"".concat(e.index+1,". ").concat(e.result.restaurant_name)}),Object(p.jsx)("p",{children:e.result.tag.name})]})]})}function x(e){return Object(p.jsxs)("div",{className:"resultsList",children:[Object(p.jsx)("h3",{children:"Here's what we recommend:"}),Object(p.jsx)("ol",{children:e.searchResults.map((function(e,t){return Object(p.jsx)(b.b,{to:"/yelp-clone/".concat(t),children:Object(p.jsx)(m,{result:e,index:t})},e.restaurant_name+t)}))})]})}var g=n(42),O=n(44),f=n(43);function v(e){var t=[e.lat,e.lng];return Object(p.jsxs)(g.a,{style:{height:"50vh",width:"50vw"},center:t,zoom:13,scrollWheelZoom:!1,children:[Object(p.jsx)(O.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(p.jsx)(f.a,{position:t})]})}function y(e){var t=Object(j.f)().id,n=e.searchResults[t];return console.log(n),Object(p.jsxs)("div",{children:[Object(p.jsx)(b.b,{to:"/yelp-clone",children:" - Go back "}),Object(p.jsx)("img",{src:"",alt:""}),Object(p.jsxs)("h3",{children:["Name: ",n.restaurant_name]}),Object(p.jsxs)("p",{children:["Restaurant type: ",n.tag.name]}),Object(p.jsxs)("p",{children:["Restaurant rating: ",n.rating]}),Object(p.jsxs)("p",{children:["Restaurant price range: ",n.price_range]}),Object(p.jsxs)("p",{children:["Restaurant city: ",n.city.name]}),Object(p.jsxs)("p",{children:["Restaurant phone: ",n.phone]}),Object(p.jsxs)("p",{children:["Restaurant website: ",n.website]}),Object(p.jsx)(v,{lat:n.lat,lng:n.lng})]})}var w=function(){var e=Object(a.useState)([{restaurant_name:"Vapiano",tag:{id:1,name:"Italian"},city:{id:2,name:"Berlin"},price_range:"expensive",lat:52.51295712182467,lng:13.391373237178277,phone:"1234567",image:"https://blablabla.com",rating:"5/10",website:"https://vapiano.com"},{restaurant_name:"Burgeramt",tag:{id:1,name:"Burger"},city:{id:2,name:"Berlin"},price_range:"cheap",lat:52.5145872638687,lng:13.46038104530701,phone:"1234567",image:"https://blablabla.com",rating:"8/10",website:"https://burgeramt.com"},{restaurant_name:"Sahara",tag:{id:1,name:"African"},city:{id:2,name:"Berlin"},price_range:"cheap",lat:52.48981395843291,lng:13.428881634837806,phone:"1234567",image:"https://blablabla.com",rating:"10/10",website:"https://sahara.com"},{restaurant_name:"Risa",tag:{id:1,name:"Chicken"},city:{id:2,name:"Berlin"},price_range:"medium",lat:52.54458123510735,lng:13.411456517998799,phone:"1234567",image:"https://blablabla.com",rating:"7/10",website:"https://risachicken.com"}]),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:"unknown"},"http://mini-yelp-group2.herokuapp.com/restaurants",e.prev=2,e.next=5,fetch("http://mini-yelp-group2.herokuapp.com/restaurants",{cache:"no-cache",mode:"no-cors"});case 5:if(!(n=e.sent).ok){e.next=11;break}return e.next=9,n.json();case 9:t=e.sent,c(t);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),t.error=e.t0.message;case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(d,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/yelp-clone",children:Object(p.jsx)(x,{searchResults:n})}),Object(p.jsx)(j.a,{exact:!0,path:"/yelp-clone/:id",children:Object(p.jsx)(y,{searchResults:n})})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(b.a,{children:Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(w,{})})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.cee7aa0b.chunk.js.map