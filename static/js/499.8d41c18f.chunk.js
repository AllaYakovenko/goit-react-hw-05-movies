"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{499:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r,a,c,i,u,s=n(439),o=n(766),p=n(444),f=p.ZP.ul(r||(r=(0,o.Z)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),h=p.ZP.li(a||(a=(0,o.Z)(["\n    &:not(:last-child) {\n        padding-bottom: 8px;\n        margin-bottom: 16px;\n        border-bottom: 1px solid black;\n    }\n"]))),v=p.ZP.h4(c||(c=(0,o.Z)(["\n    margin-left: 24px;\n    margin-bottom: 8px;\n"]))),d=p.ZP.p(i||(i=(0,o.Z)(["\n    margin-bottom: 8px;\n"]))),l=p.ZP.p(u||(u=(0,o.Z)(["\n    text-align: center;\n"]))),m=n(791),x=n(689),Z=n(390),g=n(184),w=function(){var e=(0,m.useState)(null),t=(0,s.Z)(e,2),n=t[0],r=t[1],a=(0,x.UO)().movieId;return(0,m.useEffect)((function(){Z.ZP.fetchMovieReviews(a).then(r).catch(console.error)}),[a]),(0,g.jsxs)(g.Fragment,{children:[0===(null===n||void 0===n?void 0:n.length)&&(0,g.jsx)(l,{children:"We don't have any reviews for this movie."}),n&&(0,g.jsx)(f,{children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,g.jsxs)(h,{children:[(0,g.jsxs)(v,{children:["Author: ",n]}),(0,g.jsx)(d,{children:r})]},t)}))})]})}},390:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),i=n(912).Z.create({baseURL:"https://api.themoviedb.org/3"}),u="19de3f69b689775c27a0f6800fa7a97e",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day?",{params:{api_key:u}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie?",{params:{api_key:u,query:t}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"?"),{params:{api_key:u}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits?"),{params:{api_key:u}});case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews?"),{params:{api_key:u}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={fetchMoviesTrending:s,fetchMovieSearch:o,fetchMovieInfo:p,fetchMovieCast:f,fetchMovieReviews:h};t.ZP=v}}]);
//# sourceMappingURL=499.8d41c18f.chunk.js.map