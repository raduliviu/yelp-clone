(this["webpackJsonpyelp-clone"]=this["webpackJsonpyelp-clone"]||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(16),a=n.n(r),i=(n(30),n(19)),l=n.n(i),o=n(23),j=n(9),u=(n(32),n(2)),h=n(1);function d(e){return Object(h.jsx)("div",{className:"searchBar",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{htmlFor:"cuisine-select",children:"Find"}),Object(h.jsxs)("select",{onChange:function(t){e.getCuisines(t.target.value)},name:"cuisine",id:"cuisine-select",children:[Object(h.jsx)("option",{value:"",defaultValue:!0,children:"Cuisine type"}),Object(h.jsx)("option",{value:"American",children:"American"}),Object(h.jsx)("option",{value:"Italian",children:"Italian"}),Object(h.jsx)("option",{value:"Mexican",children:"Mexican"}),Object(h.jsx)("option",{value:"Vegan",children:"Vegan"}),Object(h.jsx)("option",{value:"German",children:"German"}),Object(h.jsx)("option",{value:"French",children:"French"})]}),Object(h.jsx)("label",{htmlFor:"city-select",children:"Near"}),Object(h.jsxs)("select",{onChange:function(t){e.getCities(t.target.value)},name:"city",id:"city-select",children:[Object(h.jsx)("option",{value:"",defaultValue:!0,children:"City"}),Object(h.jsx)("option",{value:"Frankfurt",children:"Frankfurt"}),Object(h.jsx)("option",{value:"Berlin",children:"Berlin"}),Object(h.jsx)("option",{value:"M\xfcnich",children:"M\xfcnich"}),Object(h.jsx)("option",{value:"Bonn",children:"Bonn"}),Object(h.jsx)("option",{value:"K\xf6ln",children:"K\xf6ln"}),Object(h.jsx)("option",{value:"Stuttgart",children:"Stuttgart"}),Object(h.jsx)("option",{value:"Jenna",children:"Jenna"}),Object(h.jsx)("option",{value:"Los Angeles",children:"Los Angeles"})]})]})})}var b=n(8);function x(e){return Object(h.jsxs)("header",{children:[Object(h.jsx)(b.b,{to:"/yelp-clone",children:Object(h.jsx)("h1",{id:"siteTitle",children:"Yelp"})}),Object(h.jsx)(d,{getCuisines:e.getCuisines,getCities:e.getCities,searchResults:e.searchResults})]})}function p(e){var t;return Object(h.jsxs)("li",{className:"resultCard",children:[Object(h.jsx)("img",{src:e.result.image,alt:""}),Object(h.jsxs)("div",{className:"resultCardText",children:[Object(h.jsx)("h4",{className:"resultCardName",children:"".concat(e.index+1,". ").concat(e.result.restaurant_name)}),Object(h.jsx)("p",{children:null===(t=e.result.tag)||void 0===t?void 0:t.name})]})]})}function O(e){return Object(h.jsxs)("div",{className:"resultsList",children:[Object(h.jsx)("h3",{children:"Here's what we recommend:"}),Object(h.jsx)("ol",{children:e.searchResults.map((function(e,t){return Object(h.jsx)(b.b,{to:"/yelp-clone/".concat(t),children:Object(h.jsx)(p,{result:e,index:t})},e.restaurant_name+t)}))})]})}var v=n(42),g=n(44),m=n(43);function f(e){var t=[e.lat,e.lng];return Object(h.jsxs)(v.a,{style:{height:"50vh",width:"100%"},center:t,zoom:13,scrollWheelZoom:!1,children:[Object(h.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(h.jsx)(m.a,{position:t})]})}function y(e){var t,n,c=Object(u.f)().id,s=e.searchResults[c];return console.log(s),Object(h.jsxs)("div",{className:"detailsContainer",children:[Object(h.jsx)("h2",{children:s.restaurant_name}),Object(h.jsxs)("div",{className:"detailsInfo",children:[Object(h.jsx)("img",{src:s.image,alt:""}),Object(h.jsxs)("div",{className:"restaurantInfo",children:[Object(h.jsxs)("p",{children:["Restaurant type: ",null===(t=s.tag)||void 0===t?void 0:t.name]}),Object(h.jsxs)("p",{children:["Restaurant rating: ",s.rating]}),Object(h.jsxs)("p",{children:["Restaurant price range: ",s.price_range]}),Object(h.jsxs)("p",{children:["Restaurant city: ",null===(n=s.city)||void 0===n?void 0:n.name]}),Object(h.jsxs)("p",{children:["Restaurant phone: ",s.phone]}),Object(h.jsxs)("p",{children:["Restaurant website: ",s.website]})]})]}),Object(h.jsx)("div",{className:"restaurantMap",children:Object(h.jsx)(f,{lat:s.lat,lng:s.lnt})})]})}var C=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),a=Object(j.a)(r,2),i=a[0],d=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:"unknown"},"https://mini-yelp-group2.herokuapp.com/restaurants",e.prev=2,e.next=5,fetch("https://mini-yelp-group2.herokuapp.com/restaurants");case 5:if(!(n=e.sent).ok){e.next=13;break}return e.next=9,n.json();case 9:t=e.sent,console.log(t),s(t),d(t);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),t.error=e.t0.message;case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{getCuisines:function(e){var t=n.filter((function(t){return t.tag.name===e}));d(t)},getCities:function(e){var t=n.filter((function(t){return t.city.name===e}));d(t)},searchResults:n}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/yelp-clone",children:Object(h.jsx)(O,{searchResults:i})}),Object(h.jsx)(u.a,{exact:!0,path:"/yelp-clone/:id",children:Object(h.jsx)(y,{searchResults:n})})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(b.a,{children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(C,{})})}),document.getElementById("root")),R()}},[[39,1,2]]]);
//# sourceMappingURL=main.145782b3.chunk.js.map