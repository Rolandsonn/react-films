"use strict";(self.webpackChunkfilms=self.webpackChunkfilms||[]).push([[92],{92:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(4165),i=n(3433),a=n(5861),c=n(9439),s=n(2791),o={MoviePage:"HomePage_MoviePage__i925D"},u=n(3263),l=n(531),d=n(4365),f=n(9402),v=n(8683),h=[{id:28,name:"Drama"},{id:35,name:"Adventure"},{id:14,name:"Western"},{id:36,name:"Action"},{id:53,name:"Thriller"},{id:37,name:"Horror"}],p="CategoriesItem_btn__9r9cZ",m=n(184),g=function(e){var t=e.name,n=e.getCategoryId,r=e.id;return(0,m.jsx)("li",{children:(0,m.jsx)("button",{id:r,onClick:function(e){n(e.target.id)},className:p,children:t})})},_="CategoriesList_list__Hme7r",x=function(e){var t=e.getCategoryId;(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="\n      https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("826ff55be219075fe0c51d998b696b2f","&language=en-US"),e.prev=1,e.next=4,u.Z.get(t).then((function(e){return console.log(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Smth wrong with api get genres"+e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var n=h.map((function(e){return(0,m.jsx)(g,(0,v.Z)((0,v.Z)({},e),{},{getCategoryId:t}),e.id)}));return(0,m.jsx)("ul",{className:_,children:n})};function w(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],v=t[1],h=(0,s.useState)(null),p=(0,c.Z)(h,2),g=p[0],_=p[1],w=(0,s.useState)(1),j=(0,c.Z)(w,2),Z=j[0],b=j[1],M=(0,s.useState)(),k=(0,c.Z)(M,2),I=(k[0],k[1],"826ff55be219075fe0c51d998b696b2f");(0,s.useEffect)((function(){var e="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(I,"&page=").concat(Z),t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get(e).then((function(e){var t=e.data;v((function(e){return[].concat((0,i.Z)(n),(0,i.Z)(t.results))}))}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();t()}),[Z]),(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/4/list/".concat(g,"?page=").concat(Z,"&api_key=").concat(I)).then((function(e){v(e.data.results)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Smth wrong with api get full trends"+e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();g&&e()}),[g]);return(0,m.jsxs)("div",{className:o.MoviePage,children:[(0,m.jsxs)("div",{className:o.rap,children:[(0,m.jsx)(x,{getCategoryId:function(e){_(e)}}),(0,m.jsx)(d.Z,{data:n}),(0,m.jsx)(f.Z,{onClick:function(){b((function(e){return e+1}))}})]}),n.length>0&&(0,m.jsx)(l.Z,{})]})}},531:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(9439),i=n(2791),a="BtnUp_wrapper__ZiwH7",c="BtnUp_scrollInvisible__LPHlk",s="BtnUp_ScrollBtn__useyS",o=n(184);function u(){var e=(0,i.useState)(0),t=(0,r.Z)(e,2),n=t[0],u=t[1];(0,i.useEffect)((function(){var e=function(){return u(window.pageYOffset)};return window.removeEventListener("scroll",e),window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);var l=function(){window.scrollTo({top:0,right:-1,behavior:"smooth"})};return(0,o.jsx)("div",{className:a,children:n>400?(0,o.jsx)("button",{className:s,onClick:l,children:(0,o.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",viewBox:"0 0 32 32",children:[(0,o.jsx)("title",{children:"circle-up"}),(0,o.jsx)("path",{d:"M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"}),(0,o.jsx)("path",{d:"M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"})]})}):(0,o.jsx)("button",{className:c,onClick:l,children:(0,o.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",viewBox:"0 0 32 32",children:[(0,o.jsx)("title",{children:"circle-up"}),(0,o.jsx)("path",{d:"M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"}),(0,o.jsx)("path",{d:"M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"})]})})})}},9402:function(e,t,n){n.d(t,{Z:function(){return a}});n(2791);var r="LoadMoreBtn_LoadMoreBtn__+cgyz",i=n(184);function a(e){var t=e.onClick;return(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:r,onClick:t,children:"Load More"})})}},4365:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(8683),i=(n(2791),"MovieList_list__akjgi"),a=n(1087),c=n(7718),s="MovieItem_MovieItem__img__J34W7",o="MovieItem_MovieItem__title__OMZl6",u="MovieItem_MovieItem__rating__IERx+",l="MovieItem_container__QSXWj",d="MovieItem_box__hiFkw",f="MovieItem_content__9dvxl",v=n(184);function h(e){var t=e.poster_path,n=e.backdrop_path,r=e.title,i=e.vote_average,h=e.id,p=e.name,m=e.vote_count;return(0,v.jsx)("li",{className:l,children:(0,v.jsxs)(a.rU,{className:d,to:"/movies/".concat(h),children:[(0,v.jsx)("b",{}),(0,v.jsx)("img",{className:s,src:t?"https://image.tmdb.org/t/p/w500".concat(t||n):c,alt:"img"}),(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("h1",{className:o,children:r||p}),(0,v.jsxs)("p",{className:u,children:["Vote/Votes: ",Math.round(i),"/ ",(0,v.jsx)("span",{children:m})]})]})]})})}function p(e){var t=e.data.map((function(e){return(0,v.jsx)(h,(0,r.Z)({},e),e.id)}));return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{className:i,children:t})})}},7718:function(e,t,n){e.exports=n.p+"static/media/default_image.7555b15218a0f4733bf7.png"}}]);
//# sourceMappingURL=92.7b34a6d0.chunk.js.map