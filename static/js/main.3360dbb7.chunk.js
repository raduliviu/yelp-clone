(this["webpackJsonpyelp-clone"]=this["webpackJsonpyelp-clone"]||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(16),a=n.n(r),i=(n(30),n(19)),l=n.n(i),j=n(23),o=n(9),u=(n(32),n(2)),h=n(1);function d(){return Object(h.jsx)("div",{className:"searchBar",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{htmlFor:"cuisine-select",children:"Find"}),Object(h.jsxs)("select",{name:"cuisine",id:"cuisine-select",children:[Object(h.jsx)("option",{value:"",defaultValue:!0,children:"Cuisine type"}),Object(h.jsx)("option",{value:"asian",children:"Asian"}),Object(h.jsx)("option",{value:"italian",children:"Italian"})]}),Object(h.jsx)("label",{htmlFor:"city-select",children:"Near"}),Object(h.jsxs)("select",{name:"city",id:"city-select",children:[Object(h.jsx)("option",{value:"",defaultValue:!0,children:"City"}),Object(h.jsx)("option",{value:"berlin",children:"Berlin"}),Object(h.jsx)("option",{value:"hamburg",children:"Hamburg"})]})]})})}var b=n(8);function p(){return Object(h.jsxs)("header",{children:[Object(h.jsx)(b.b,{to:"/yelp-clone",children:Object(h.jsx)("h1",{id:"siteTitle",children:"Yelp"})}),Object(h.jsx)(d,{})]})}function x(e){var t;return Object(h.jsxs)("li",{className:"resultCard",children:[Object(h.jsx)("img",{src:e.result.image,alt:""}),Object(h.jsxs)("div",{className:"resultCardText",children:[Object(h.jsx)("h4",{className:"resultCardName",children:"".concat(e.index+1,". ").concat(e.result.restaurant_name)}),Object(h.jsx)("p",{children:null===(t=e.result.tag)||void 0===t?void 0:t.name})]})]})}function O(e){return Object(h.jsxs)("div",{className:"resultsList",children:[Object(h.jsx)("h3",{children:"Here's what we recommend:"}),Object(h.jsx)("ol",{children:e.searchResults.map((function(e,t){return Object(h.jsx)(b.b,{to:"/yelp-clone/".concat(t),children:Object(h.jsx)(x,{result:e,index:t})},e.restaurant_name+t)}))})]})}var m=n(42),v=n(44),f=n(43);function g(e){var t=[e.lat,e.lng];return Object(h.jsxs)(m.a,{style:{height:"50vh",width:"100%"},center:t,zoom:13,scrollWheelZoom:!1,children:[Object(h.jsx)(v.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(h.jsx)(f.a,{position:t})]})}function y(e){var t,n,c=Object(u.f)().id,s=e.searchResults[c];return console.log(s),Object(h.jsxs)("div",{className:"detailsContainer",children:[Object(h.jsx)("h2",{children:s.restaurant_name}),Object(h.jsxs)("div",{className:"detailsInfo",children:[Object(h.jsx)("img",{src:s.image,alt:""}),Object(h.jsxs)("div",{className:"restaurantInfo",children:[Object(h.jsxs)("p",{children:["Restaurant type: ",null===(t=s.tag)||void 0===t?void 0:t.name]}),Object(h.jsxs)("p",{children:["Restaurant rating: ",s.rating]}),Object(h.jsxs)("p",{children:["Restaurant price range: ",s.price_range]}),Object(h.jsxs)("p",{children:["Restaurant city: ",null===(n=s.city)||void 0===n?void 0:n.name]}),Object(h.jsxs)("p",{children:["Restaurant phone: ",s.phone]}),Object(h.jsxs)("p",{children:["Restaurant website: ",s.website]})]})]}),Object(h.jsx)("div",{className:"restaurantMap",children:Object(h.jsx)(g,{lat:s.lat,lng:s.lnt})})]})}var N=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:"unknown"},"https://mini-yelp-group2.herokuapp.com/restaurants",e.prev=2,e.next=5,fetch("https://mini-yelp-group2.herokuapp.com/restaurants");case 5:if(!(n=e.sent).ok){e.next=12;break}return e.next=9,n.json();case 9:t=e.sent,console.log(t),s(t);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),t.error=e.t0.message;case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/yelp-clone",children:Object(h.jsx)(O,{searchResults:n})}),Object(h.jsx)(u.a,{exact:!0,path:"/yelp-clone/:id",children:Object(h.jsx)(y,{searchResults:n})})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(b.a,{children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(N,{})})}),document.getElementById("root")),w()}},[[39,1,2]]]);
//# sourceMappingURL=main.3360dbb7.chunk.js.map