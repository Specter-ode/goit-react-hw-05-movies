"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[602],{7665:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(501),a="MoviesList_list__0Owr9",s="MoviesList_items__u7yPt",u="MoviesList_title__PB2c8",i="MoviesList_items__img__Y6zFP",c=n(184),o=function(e){var t=e.movies.map((function(e){var t=e.id,n=e.title,a=e.poster_path;return a=a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg",(0,c.jsx)("li",{className:s,children:(0,c.jsxs)(r.rU,{to:"/movies/".concat(t),children:[(0,c.jsx)("img",{src:a,alt:n,className:i,width:"200"}),(0,c.jsx)("p",{className:u,children:n})]})},t)}));return(0,c.jsx)("ul",{className:a,children:t})}},9602:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(5861),a=n(885),s=n(7757),u=n.n(s),i=n(2791),c=n(501),o=n(3243),f="MovieSearchForm_btn__akjwk",p="MovieSearchForm_form__PD1EN",v="MovieSearchForm_input__L3jrA",h=n(184),l=function(e){var t=e.catchSubmitInfo,n=(0,i.useState)(""),r=(0,a.Z)(n,2),s=r[0],u=r[1];return(0,h.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault(),t(s),u("")},children:[(0,h.jsx)("label",{children:(0,h.jsx)("input",{className:v,name:"search",value:s,onChange:function(e){u(e.target.value)}})}),(0,h.jsx)("button",{className:f,type:"submit",children:"search"})]})},m=n(7665),d=n(3323),_=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],f=(0,i.useState)(!1),p=(0,a.Z)(f,2),v=p[0],_=p[1],x=(0,i.useState)(null),w=(0,a.Z)(x,2),b=w[0],g=w[1],j=(0,c.lr)(),k=(0,a.Z)(j,2),y=k[0],Z=k[1],S=y.get("query");console.log("query: ",S),(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,(0,o.zi)(S);case 4:t=e.sent,s(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g(e.t0.message);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();S&&e()}),[S]);return(0,h.jsxs)("div",{children:[b&&(0,h.jsx)("p",{children:"Movies not found, try again"}),(0,h.jsx)(l,{catchSubmitInfo:function(e){Z({query:e})}}),v&&(0,h.jsx)(d.Z,{}),n.length>0&&(0,h.jsx)(m.Z,{movies:n})]})},x=function(){return(0,h.jsxs)("main",{children:[(0,h.jsx)("h2",{children:"Search movie"}),(0,h.jsx)(_,{})]})}},3243:function(e,t,n){n.d(t,{Df:function(){return c},M1:function(){return p},Pg:function(){return f},tx:function(){return v},zi:function(){return o}});var r=n(5861),a=n(7757),s=n.n(a),u=n(4569),i=n.n(u)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"34dbf9d1a3fd74b10bf7ab9eec59866f",language:"en-US"}}),c=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/trending/movie/week");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,u=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,e.next=3,i("/search/movie",{params:{query:t,page:n}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.2edf5002.chunk.js.map