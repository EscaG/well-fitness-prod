"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[756],{6822:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(8683),s=(n(2791),n(5717)),a=(n(3037),n(8688),n(1088),n(1626),n(7765),n(9423),n(3504)),r=n(6030),c=n(184);function o(){var e=(0,r.v9)((function(e){return e.product.currentProduct})),t={className:"center promotion-slider",arrows:!1,centerMode:!0,infinite:!0,centerPadding:"0px",lazyLoad:!0,slidesToShow:e.length>6?6:e.length-1,slidesToScroll:1,speed:500,autoplay:!0,autoplaySpeed:2e3,initialSlide:1,responsive:[{breakpoint:1300,settings:{slidesToShow:5}},{breakpoint:1100,settings:{slidesToShow:4}},{breakpoint:900,settings:{slidesToShow:3}},{breakpoint:700,settings:{slidesToShow:2}},{breakpoint:400,settings:{slidesToShow:1}}]};return(0,c.jsx)("section",{className:"watched",children:(0,c.jsx)(s.Z,(0,i.Z)((0,i.Z)({},t),{},{children:e&&e.map((function(e,t){return(0,c.jsxs)(a.rU,{to:"/product/"+encodeURI(e.name)+"/"+e._id,className:"watched__card",children:[(0,c.jsx)("div",{className:"watched__item-image",children:(0,c.jsx)("img",{className:"watched__image",src:e.gallery&&e.gallery[0].image,alt:"watched"})}),(0,c.jsxs)("div",{className:"watched__description",children:[(0,c.jsx)("div",{className:"watched__title",children:e.name}),(0,c.jsxs)("div",{className:"watched__rating",children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433 ",e.rating]}),(0,c.jsx)("div",{className:"watched__price",children:e.price.fullPrice})]})]},e._id)}))}))})}},6756:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(2982),s=n(885),a=(n(4569),n(2791)),r=n(6030),c=n(9539),o=n(6822),d=n(243),l=n(184);function u(){var e=(0,a.useState)([]),t=(0,s.Z)(e,2),n=t[0],u=t[1],f=(0,r.v9)((function(e){return e.user})),h=f.currentUser,p=f.isAuth,g=f.isLoading,m=(0,r.v9)((function(e){return e.favorites.currentFavorites}));function _(e,t){for(var n=[],i=0;i<e.length;i++)for(var s=0;s<t.length;s++)e[i]._id.includes(t[s])&&n.push(e[i]);return n}function v(e){e.length&&Promise.all(e.map((function(e){return fetch("/api/product/byid/"+e).then((function(e){return e.json()})).then((function(e){n.map((function(e){return e._id})).includes(e._id)||u((function(t){return[].concat((0,i.Z)(t),[e])}))}))})))}return(0,a.useEffect)((function(){document.body.scrollIntoView()}),[]),(0,a.useEffect)((function(){p&&v(h.favorites)}),[p]),(0,a.useEffect)((function(){p&&u(_(n,h.favorites))}),[h]),(0,a.useEffect)((function(){p||(n.length?u(_(n,m)):v(m))}),[m]),(0,l.jsxs)("article",{className:"favorites-page",children:[(0,l.jsx)("h1",{className:"favorites-page__title",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),(0,l.jsx)("div",{className:"favorites-page__grid",children:g||n.length?(0,l.jsx)(l.Fragment,{children:n.map((function(e,t){return(0,l.jsx)(c.Z,{product:e},e._id)}))}):(0,l.jsx)(d.Z,{})}),(0,l.jsxs)("div",{className:"favorites-page__watched",children:[(0,l.jsx)("h2",{className:"favorites-page__watched-title",children:"\u0412\u044b \u0441\u043c\u043e\u0442\u0440\u0435\u043b\u0438"}),(0,l.jsx)(o.Z,{})]})]})}},1088:function(e,t,n){e.exports=n.p+"static/media/first.d83930aa2dac81e78617.png"},9423:function(e,t,n){e.exports=n.p+"static/media/fourth.bb823f03e0ad8950dba7.png"},1626:function(e,t,n){e.exports=n.p+"static/media/second.8cebfbfb8ee79dca0092.png"},7765:function(e,t,n){e.exports=n.p+"static/media/third.22e381f662de32fd9472.png"}}]);
//# sourceMappingURL=756.d824c8a3.chunk.js.map