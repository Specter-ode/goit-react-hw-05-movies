"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[546],{8546:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(8683),a=t(5861),i=t(885),c=t(7757),o=t.n(c),s="MovieDetailsPage_btn__VtrW5",u="MovieDetailsPage_outlet__pZp+P",l="MovieDetailsPage_link__rhdjc",f="MovieDetailsPage_activeLink__XM0zo MovieDetailsPage_link__rhdjc",p="MovieDetails_item__9ATw3",v="MovieDetails_description__n2kBz",d="MovieDetails_img__D3WH9",h="MovieDetails_title__RBndM",m=t(184),_=function(e){var r=e.id,t=e.title,n=e.poster_path,a=e.release_date,i=e.vote_average,c=e.overview,o=e.genres,s=(10*i).toFixed(),u=new Date(a).getFullYear(),l=o.map((function(e){return e.name})).join(", ");return n=n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg",(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("img",{src:n,alt:t,className:d,width:"232"}),(0,m.jsxs)("div",{className:v,children:[(0,m.jsxs)("h2",{className:h,children:[t," (",u,")"]}),(0,m.jsxs)("p",{children:["User score: ",s||"Sorry, information not avalaible","%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:c||"Sorry, information not avalaible"}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:l.length>0?l:"Sorry, information not avalaible"})]})]},r)},b=t(3243),g=t(2791),j=t(501),w=t(6871),x=t(3323),y=function(e){return e.isActive?f:l},k=function(){var e=(0,g.useState)({movie:{},loading:!1,error:null}),r=(0,i.Z)(e,2),t=r[0],c=r[1],l=(0,w.UO)().movieId,f=(0,w.s0)();(0,g.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!0})})),e.prev=1,e.next=4,(0,b.Pg)(l);case 4:r=e.sent,console.log("data: ",r),c((function(e){return(0,n.Z)((0,n.Z)({},e),{},{movie:r})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c((function(r){return(0,n.Z)((0,n.Z)({},r),{},{error:e.t0})}));case 12:return e.prev=12,c((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1})})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]);var p=t.movie,v=t.loading,d=t.error,h=Object.keys(p).length>0;return(0,m.jsxs)("main",{children:[v&&(0,m.jsx)(x.Z,{}),d&&(0,m.jsx)("p",{children:"Movies not found, try again"}),h&&(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{className:s,type:"button",onClick:function(){return f(-1)},children:"Go Back"}),(0,m.jsx)(_,(0,n.Z)({},p)),(0,m.jsxs)("ul",{className:u,children:[(0,m.jsx)(j.OL,{to:"/movies/".concat(l,"/cast"),className:y,children:"Cast"}),(0,m.jsx)(j.OL,{to:"/movies/".concat(l,"/reviews"),className:y,children:"Reviews"})]})]}),(0,m.jsx)(w.j3,{})]})}},3243:function(e,r,t){t.d(r,{Df:function(){return s},M1:function(){return f},Pg:function(){return l},tx:function(){return p},zi:function(){return u}});var n=t(5861),a=t(7757),i=t.n(a),c=t(4569),o=t.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"34dbf9d1a3fd74b10bf7ab9eec59866f",language:"en-US"}}),s=function(){var e=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/trending/movie/week");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n,a,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,o("/search/movie",{params:{query:r,page:t}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},8683:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,{Z:function(){return i}})}}]);
//# sourceMappingURL=546.d3eb2696.chunk.js.map