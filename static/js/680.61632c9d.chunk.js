"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{9680:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,o,a,i,c,s,u,p,f,d,l,m,v,x=t(5861),h=t(9439),g=t(7757),b=t.n(g),Z=t(168),w=t(6444),j=t(1087),k=w.ZP.section(r||(r=(0,Z.Z)(["\n    padding-top: 16px;\n    padding-right: 16px;\n    padding-left: 16px;\n    padding-bottom: 16px;\n    color: #411100;\n    background-color: white; \n"]))),y=w.ZP.button(o||(o=(0,Z.Z)(["\n    font-size: 16px;\n    font-weight: 700;\n    font-family: Segoe UI;\n    padding: 8px;\n    margin-bottom: 16px;\n    color: orangered;\n    background-color: white; \n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        color: white;\n        background-color: orangered;\n        border-color: none;\n    }\n"]))),P=w.ZP.div(a||(a=(0,Z.Z)(["\n    display: flex;\n    padding-bottom: 8px;\n    margin-bottom: 16px;\n    border-bottom: 3px double;\n    border-color: orangered;\n"]))),_=w.ZP.div(i||(i=(0,Z.Z)(["\n    margin-right: 24px;\n"]))),S=w.ZP.h3(c||(c=(0,Z.Z)(["\n    font-size: 32px;\n    font-family: Segoe UI;\n    margin-bottom: 24px;\n"]))),I=w.ZP.p(s||(s=(0,Z.Z)(["\n    margin-bottom: 48px;\n    font-family: Segoe UI;\n\n"]))),U=w.ZP.h4(u||(u=(0,Z.Z)(["\n    font-size: 20px;\n    font-family: Segoe UI;\n    margin-bottom: 8px;\n"]))),z=w.ZP.p(p||(p=(0,Z.Z)(["\n    margin-bottom: 48px;\n    font-family: Segoe UI;\n\n"]))),M=w.ZP.div(f||(f=(0,Z.Z)(["\n    padding-bottom: 8px;\n    margin-bottom: 16px;\n    border-bottom: 3px double;\n    border-color: orangered;\n"]))),C=w.ZP.h4(d||(d=(0,Z.Z)(["\n    font-size: 20px;\n    font-family: Segoe UI;\n    margin-bottom: 8px;\n    text-transform: uppercase;\n    text-align: center;\n"]))),O=w.ZP.ul(l||(l=(0,Z.Z)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n\n"]))),R=w.ZP.li(m||(m=(0,Z.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 8px;\n    }\n"]))),A=(0,w.ZP)(j.OL)(v||(v=(0,Z.Z)(["\n    text-decoration: none;\n    font-size: 20px;\n    font-weight: 700;\n    font-family: Segoe UI;\n    color: #491300;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover:not(.active),\n    &:focus:not(.active) {\n        color: #ff4f0e;\n    }\n    &.active {\n        text-decoration: underline #ff4f0e;\n        color: #ff4f0e;\n    }\n"]))),G=t(7689),L=t(2791),T=t(4390),q=t(4585),E=t(7596),F=(t(5462),t(184)),H=function(n){var e=n.movie,t=e.poster_path,r=e.title,o=e.release_date,a=e.overview,i=e.vote_average,c=e.genres;return(0,F.jsxs)(P,{children:[(0,F.jsx)(_,{children:(0,F.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+t,alt:r,width:280})}),(0,F.jsxs)("div",{children:[(0,F.jsxs)(S,{children:[r," (",o.slice(0,4),")"]}),(0,F.jsxs)(I,{children:["User scores: ",Math.ceil(10*i),"%"]}),(0,F.jsx)(U,{children:"Overview"}),(0,F.jsx)(z,{children:a}),(0,F.jsx)(U,{children:"Genres"}),(0,F.jsx)(z,{children:c.map((function(n){return n.name})).join(", ")})]})]})},B=function(){var n,e,t=(0,L.useState)(null),r=(0,h.Z)(t,2),o=r[0],a=r[1],i=(0,L.useState)(!1),c=(0,h.Z)(i,2),s=c[0],u=c[1],p=(0,L.useState)(""),f=(0,h.Z)(p,2),d=f[0],l=f[1],m=(0,G.UO)().movieId;(0,L.useEffect)((function(){u(!0);var n=function(){var n=(0,x.Z)(b().mark((function n(){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T.ZP.fetchMovieInfo(m);case 3:e=n.sent,a(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),l(n.t0.message);case 10:return n.prev=10,u(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[m]);var v=(0,G.s0)(),g=(0,G.TH)();return(0,F.jsx)(F.Fragment,{children:o&&(0,F.jsxs)(k,{children:[(0,F.jsx)(y,{type:"button",onClick:function(){var n,e;return v(null!==(n=null===g||void 0===g||null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:" Go back "}),(0,F.jsx)(H,{movie:o}),(0,F.jsxs)(M,{children:[(0,F.jsx)(C,{children:"Additional information"}),(0,F.jsxs)(O,{children:[(0,F.jsx)(R,{children:(0,F.jsx)(A,{state:{from:null===(n=g.state)||void 0===n?void 0:n.from},to:"cast",children:"Cast"})}),(0,F.jsx)(R,{children:(0,F.jsx)(A,{state:{from:null===(e=g.state)||void 0===e?void 0:e.from},to:"reviews",children:"Reviews"})})]})]}),s&&(0,F.jsx)(q.a,{}),d&&E.Am.error("Please wait.."),(0,F.jsx)(G.j3,{})]})})}},4390:function(n,e,t){var r=t(5861),o=t(7757),a=t.n(o),i=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3"}),c="19de3f69b689775c27a0f6800fa7a97e",s=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/trending/movie/day?",{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/search/movie?",{params:{api_key:c,query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(e,"?"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(e,"/credits?"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(e,"/reviews?"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l={fetchMoviesTrending:s,fetchMovieSearch:u,fetchMovieInfo:p,fetchMovieCast:f,fetchMovieReviews:d};e.ZP=l},5462:function(){}}]);
//# sourceMappingURL=680.61632c9d.chunk.js.map