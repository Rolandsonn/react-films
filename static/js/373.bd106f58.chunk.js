(self.webpackChunkfilms=self.webpackChunkfilms||[]).push([[373],{4373:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var s=n(4165),a=n(5861),i=n(9439),r=n(2791),c=n(7689),l=n(1087),o=n(7718),u=n(8683),_=n(3263),g="CastList_Cast__6gVVk",f="CastList_Cast__list__ntyCj",h="CastItem_CastItem__NLANB",d="CastItem_CastItem__img__jQBFU",m="CastItem_CastItem__title__XV6I5",v=n(184);function p(e){var t=e.profile_path,n=e.name;return(0,v.jsxs)("li",{className:h,children:[(0,v.jsx)("img",{className:d,src:t?"https://image.tmdb.org/t/p/w500".concat(t):o,alt:"img"}),(0,v.jsx)("h1",{className:m,children:n})]})}function x(){var e=(0,c.UO)().id,t=(0,r.useState)([]),n=(0,i.Z)(t,2),l=n[0],o=n[1];return(0,r.useEffect)((function(){var t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("826ff55be219075fe0c51d998b696b2f","&language=en-US");_.Z.get(t).then(function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data;case 2:n=e.sent,a=n.cast,o(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),(0,v.jsx)("div",{className:g,children:l.length>0?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{className:f,children:l.map((function(e){return(0,v.jsx)(p,(0,u.Z)({},e),e.id)}))})}):(0,v.jsx)("div",{children:"Cast list is empty"})})}p.defaultProps={profile_path:o};var j="ReviewsList_Reviews__K8l9z",w="ReviewsList_Reviews__list__VBwlN",S={container:"ReviewItem_container__FEZag",ReviewsItem__title:"ReviewItem_ReviewsItem__title__2GSwC",ReviewsItem__text:"ReviewItem_ReviewsItem__text__IjEeH",ReviewsItem__date:"ReviewItem_ReviewsItem__date__-Dslm"};function N(e){var t=e.author,n=(e.author_details,e.content),s=e.created_at;return(0,v.jsxs)("li",{className:S.ReviewsItem,children:[(0,v.jsx)("h1",{className:S.ReviewsItem__title,children:t}),(0,v.jsx)("p",{className:S.ReviewsItem__text,children:n}),(0,v.jsxs)("p",{className:S.ReviewsItem__date,children:["Created date:",s]})]})}function b(){var e=(0,c.UO)().id,t=(0,r.useState)([]),n=(0,i.Z)(t,2),l=n[0],o=n[1];return(0,r.useEffect)((function(){var t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("826ff55be219075fe0c51d998b696b2f","&language=en-US&page=1");_.Z.get(t).then(function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data;case 2:n=e.sent,a=n.results,o(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),(0,v.jsx)("div",{className:j,children:l.length>1?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{className:w,children:l.map((function(e){return(0,v.jsx)(N,(0,u.Z)({},e),e.id)}))})}):(0,v.jsx)("div",{className:w,children:(0,v.jsx)("h2",{children:'"No Reviews yet!!!"'})})})}N.defaultProps={avatar_path:o};var P="SingleMoviePage_container__8-hep",R="SingleMoviePage_SinglePage__JCl0x",M="SingleMoviePage_SinglePage__btn__ABuLL",C="SingleMoviePage_SinglePage__inner__yb1f7",I="SingleMoviePage_SinglePage__img__heC1U",Z="SingleMoviePage_SinglePage__list__gEA17",k="SingleMoviePage_SinglePage__list_item__m3Vml",y="SingleMoviePage_SinglePage__list_text__QNlDz",U="SingleMoviePage_SinglePage__list_about__-iVzx",V="SingleMoviePage_SinglePage__box__jOFKG",E="SingleMoviePage_SinglePage__list_title__U-Y9z",L="SingleMoviePage_SinglePage__list_subtitle__1dTdJ",A="SingleMoviePage_SinglePage__list_link__OiPlg",F="SingleMoviePage_SinglePage__text__e6LzX",B="SingleMoviePage_SinglePage__text2__cw1tX",O="SingleMoviePage_SinglePage__frame__RwQXB",z="SingleMoviePage_SinglePage__dmdb__yvJ9k",q="SingleMoviePage_SinglePage__trailer__mvQIq",G="SingleMoviePage_SinglePage__wrapper__F7ej2",Q=n(6429),X=n.n(Q);function D(){var e,t=(0,c.UO)().id,n=(0,c.s0)(),u=(0,r.useState)({}),g=(0,i.Z)(u,2),f=g[0],h=g[1],d=(0,r.useState)([]),m=(0,i.Z)(d,2),p=m[0],j=m[1],w=(0,r.useState)(!1),S=(0,i.Z)(w,2),N=S[0],Q=S[1];(0,r.useEffect)((function(){var e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("826ff55be219075fe0c51d998b696b2f","&language=en-US&");_.Z.get(e).then(function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data;case 2:n=e.sent,h(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),(0,r.useEffect)((function(){try{var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US"),e.next=3,_.Z.get(n).then((function(e){j(e.data.results)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(n){console.log(n)}}),[]);var D=null===(e=f.genres)||void 0===e?void 0:e.map((function(e){return(0,v.jsx)("div",{className:" ".concat(F),children:e.name},X().generate())})),J=f.poster_path,T=f.backdrop_path,K=f.title,W=f.vote_count,Y=f.overview,H=f.vote_average,$=f.popularity,ee=f.release_date,te=p.map((function(e){return e.key}));return(0,v.jsxs)("div",{className:R,children:[(0,v.jsx)("button",{className:M,onClick:function(){return n(-1,{replace:!0})},children:"Go Back"}),f&&(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"".concat(C," ").concat(P),children:[(0,v.jsxs)("div",{className:z,children:[(0,v.jsx)("img",{className:I,src:J&&"https://image.tmdb.org/t/p/w500".concat(J||T||o),alt:"img"}),(0,v.jsx)("button",{onClick:function(){return Q(!0)},className:q,children:"TRAILER"})]}),(0,v.jsxs)("div",{className:G,children:[(0,v.jsx)("h1",{className:E,children:K}),(0,v.jsxs)("ul",{className:Z,children:[(0,v.jsxs)("li",{className:k,children:[(0,v.jsx)("p",{className:L,children:"Vote/votes"}),(0,v.jsxs)("p",{className:F,children:[(0,v.jsx)("span",{className:B,children:H}),"/ ",W]})]}),(0,v.jsxs)("li",{className:k,children:[(0,v.jsx)("p",{className:L,children:"Popularity"}),(0,v.jsx)("p",{className:F,children:$})]}),(0,v.jsxs)("li",{className:k,children:[(0,v.jsx)("p",{className:L,children:"Release date"}),(0,v.jsx)("p",{className:F,children:ee})]}),(0,v.jsxs)("li",{className:k,children:[(0,v.jsx)("p",{className:L,children:"Genres"}),(0,v.jsx)("div",{className:V,children:D})]})]}),(0,v.jsx)("h2",{className:U,children:"About"}),(0,v.jsx)("p",{className:y,children:Y}),(0,v.jsxs)("div",{children:[(0,v.jsx)(l.rU,{className:A,to:"cast",children:"Cast"}),(0,v.jsx)(l.rU,{className:A,to:"reviews",children:"Reviews"})]})]}),(0,v.jsx)("div",{onClick:function(){return Q(!1)},className:N?"backdrop":"hidden",children:(0,v.jsx)("iframe",{className:O,width:"760",height:"415",src:"https://www.youtube.com/embed/".concat(te[te.length-1]),allowFullScreen:!0})})]})}),(0,v.jsxs)(c.Z5,{children:[(0,v.jsx)(c.AW,{path:"cast",element:(0,v.jsx)(x,{})}),(0,v.jsx)(c.AW,{path:"reviews",element:(0,v.jsx)(b,{})})]})]})}},6429:function(e,t,n){"use strict";e.exports=n(5274)},8857:function(e,t,n){"use strict";var s,a,i,r=n(5408),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function l(){i=!1}function o(e){if(e){if(e!==s){if(e.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+t.join(", "));s=e,l()}}else s!==c&&(s=c,l())}function u(){return i||(i=function(){s||o(c);for(var e,t=s.split(""),n=[],a=r.nextValue();t.length>0;)a=r.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return s||c},characters:function(e){return o(e),s},seed:function(e){r.seed(e),a!==e&&(l(),a=e)},lookup:function(e){return u()[e]},shuffled:u}},7098:function(e,t,n){"use strict";var s,a,i=n(2226);n(8857);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?s++:(s=0,a=n),t+=i(7),t+=i(e),s>0&&(t+=i(s)),t+=i(n)}},2226:function(e,t,n){"use strict";var s=n(8857),a=n(9139),i=n(2483);e.exports=function(e){for(var t,n=0,r="";!t;)r+=i(a,s.get(),1),t=e<Math.pow(16,n+1),n++;return r}},5274:function(e,t,n){"use strict";var s=n(8857),a=n(7098),i=n(6046),r=n(5347)||0;function c(){return a(r)}e.exports=c,e.exports.generate=c,e.exports.seed=function(t){return s.seed(t),e.exports},e.exports.worker=function(t){return r=t,e.exports},e.exports.characters=function(e){return void 0!==e&&s.characters(e),s.shuffled()},e.exports.isValid=i},6046:function(e,t,n){"use strict";var s=n(8857);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+s.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},9139:function(e){"use strict";var t,n="object"===typeof window&&(window.crypto||window.msCrypto);t=n&&n.getRandomValues?function(e){return n.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=t},5408:function(e){"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},5347:function(e){"use strict";e.exports=0},2483:function(e){e.exports=function(e,t,n){for(var s=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*s*n/t.length),i="";;)for(var r=e(a),c=a;c--;)if((i+=t[r[c]&s]||"").length===+n)return i}},7718:function(e,t,n){"use strict";e.exports=n.p+"static/media/default_image.7555b15218a0f4733bf7.png"}}]);
//# sourceMappingURL=373.bd106f58.chunk.js.map