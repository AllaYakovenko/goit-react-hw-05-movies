"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{4146:function(e,r,t){t.d(r,{Z:function(){return f}});var n,a=t(168),c=t(6444),u=t(1087),s=(0,c.ZP)(u.rU)(n||(n=(0,a.Z)(["\n    text-decoration: none;\n    font-family: Segoe UI;\n    margin-left: 15;\n    color: black;\n    &:hover,\n    &:focus {\n        color: orangered;\n        text-decoration: underline;\n    }\n"]))),i=t(7689),o=t(184),f=function(e){var r=e.movies,t=(0,i.TH)();return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:r.map((function(e){var r=e.id,n=e.title,a=e.name;return(0,o.jsx)("li",{children:(0,o.jsx)(s,{to:"/movies/".concat(r),state:{from:t},children:n||a})},r)}))})})}},9544:function(e,r,t){t.r(r);var n=t(5861),a=t(9439),c=t(7757),u=t.n(c),s=t(4146),i=t(4585),o=t(2791),f=t(7596),p=t(4390),v=t(184);r.default=function(){var e=(0,o.useState)(),r=(0,a.Z)(e,2),t=r[0],c=r[1],h=(0,o.useState)(!1),d=(0,a.Z)(h,2),l=d[0],m=d[1],x=(0,o.useState)(""),k=(0,a.Z)(x,2),w=k[0],Z=k[1];return(0,o.useEffect)((function(){m(!0);var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.ZP.fetchMoviesTrending();case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Z(e.t0.message);case 10:return e.prev=10,m(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)("section",{children:[(0,v.jsx)("h2",{children:"Trending today"}),l&&(0,v.jsx)(i.a,{}),w&&f.Am.error("We have error!"),t&&(0,v.jsx)(s.Z,{movies:t})]})}},4390:function(e,r,t){var n=t(5861),a=t(7757),c=t.n(a),u=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3"}),s="19de3f69b689775c27a0f6800fa7a97e",i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day?",{params:{api_key:s}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie?",{params:{api_key:s,query:r}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"?"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits?"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews?"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h={fetchMoviesTrending:i,fetchMovieSearch:o,fetchMovieInfo:f,fetchMovieCast:p,fetchMovieReviews:v};r.ZP=h}}]);
//# sourceMappingURL=544.ee3b6c69.chunk.js.map