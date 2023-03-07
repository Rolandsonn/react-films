"use strict";(self.webpackChunkfilms=self.webpackChunkfilms||[]).push([[832],{2832:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(4165),a=n(3433),c=n(5861),s=n(9439),i=n(2791),o=n(3263),l={MoviePage:"MoviePage_MoviePage__m0Fio"},u=n(531),h="Searchbar_SearchBar__qLyNr",_="Searchbar_SearchBar__searchForm__TEshU",d="Searchbar_SearchBar__searchFormBtn__QkwDi",v="Searchbar_SearchBar__searchFormButtonLabel__Uik7n",m="Searchbar_SearchBar__searchFormInput__Lnjeo",f=n(184);function p(e){var t=e.onSubmit,n=(0,i.useState)(""),r=(0,s.Z)(n,2),a=r[0],c=r[1];return(0,f.jsx)("div",{className:h,children:(0,f.jsxs)("form",{className:_,onSubmit:function(e){e.preventDefault(),t(a),c("")},children:[(0,f.jsx)("button",{type:"submit",onClick:function(){return t(a)},className:d,children:(0,f.jsx)("span",{className:v,children:"Search"})}),(0,f.jsx)("input",{className:m,type:"text",onChange:function(e){var t=e.target;c(t.value)},value:a,placeholder:"Search movies"})]})})}var x=n(4365),g=n(9402);function j(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],h=t[1],_=(0,i.useState)([]),d=(0,s.Z)(_,2),v=d[0],m=d[1],j=(0,i.useState)(1),w=(0,s.Z)(j,2),b=w[0],M=w[1];(0,i.useEffect)((function(){var e="https://api.themoviedb.org/3/search/movie?api_key=".concat("826ff55be219075fe0c51d998b696b2f","&language=en-US&page=").concat(b,"&include_adult=false&query=").concat(n),t=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get(e).then((function(e){var t=e.data;m((function(e){return[].concat((0,a.Z)(v),(0,a.Z)(t.results))}))}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();t()}),[n,b]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"".concat(l.MoviePage," "),children:[(0,f.jsx)(p,{onChange:function(e){h(e.currentTarget.value)},onSubmit:function(e){h(e)},data:n}),(0,f.jsxs)("div",{className:l.MoviePage__wrapper,children:[(0,f.jsx)(x.Z,{data:v}),v.length>0&&(0,f.jsx)(g.Z,{onClick:function(){M((function(e){return e+1}))}})]})]}),v.length>0&&(0,f.jsx)(u.Z,{})]})}},531:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(9439),a=n(2791),c="BtnUp_wrapper__ZiwH7",s="BtnUp_scrollInvisible__LPHlk",i="BtnUp_ScrollBtn__useyS",o=n(184);function l(){var e=(0,a.useState)(0),t=(0,r.Z)(e,2),n=t[0],l=t[1];(0,a.useEffect)((function(){var e=function(){return l(window.pageYOffset)};return window.removeEventListener("scroll",e),window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);var u=function(){window.scrollTo({top:0,right:-1,behavior:"smooth"})};return(0,o.jsx)("div",{className:c,children:n>400?(0,o.jsx)("button",{className:i,onClick:u,children:(0,o.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",viewBox:"0 0 32 32",children:[(0,o.jsx)("title",{children:"circle-up"}),(0,o.jsx)("path",{d:"M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"}),(0,o.jsx)("path",{d:"M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"})]})}):(0,o.jsx)("button",{className:s,onClick:u,children:(0,o.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",viewBox:"0 0 32 32",children:[(0,o.jsx)("title",{children:"circle-up"}),(0,o.jsx)("path",{d:"M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"}),(0,o.jsx)("path",{d:"M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"})]})})})}},9402:function(e,t,n){n.d(t,{Z:function(){return c}});n(2791);var r="LoadMoreBtn_LoadMoreBtn__+cgyz",a=n(184);function c(e){var t=e.onClick;return(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:r,onClick:t,children:"Load More"})})}},4365:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(8683),a=(n(2791),"MovieList_list__akjgi"),c=n(1087),s=n(7718),i="MovieItem_MovieItem__img__J34W7",o="MovieItem_MovieItem__title__OMZl6",l="MovieItem_MovieItem__rating__IERx+",u="MovieItem_container__QSXWj",h="MovieItem_box__hiFkw",_="MovieItem_content__9dvxl",d=n(184);function v(e){var t=e.poster_path,n=e.backdrop_path,r=e.title,a=e.vote_average,v=e.id,m=e.name,f=e.vote_count;return(0,d.jsx)("li",{className:u,children:(0,d.jsxs)(c.rU,{className:h,to:"/movies/".concat(v),children:[(0,d.jsx)("b",{}),(0,d.jsx)("img",{className:i,src:t?"https://image.tmdb.org/t/p/w500".concat(t||n):s,alt:"img"}),(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("h1",{className:o,children:r||m}),(0,d.jsxs)("p",{className:l,children:["Vote/Votes: ",Math.round(a),"/ ",(0,d.jsx)("span",{children:f})]})]})]})})}function m(e){var t=e.data.map((function(e){return(0,d.jsx)(v,(0,r.Z)({},e),e.id)}));return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:a,children:t})})}},7718:function(e,t,n){e.exports=n.p+"static/media/default_image.7555b15218a0f4733bf7.png"}}]);
//# sourceMappingURL=832.672fa01a.chunk.js.map