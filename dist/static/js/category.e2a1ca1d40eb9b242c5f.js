webpackJsonp([10],{"+Y8I":function(t,a){},"035s":function(t,a){},Hwmd:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("035s"),s=(e.n(n),e("igmb")),o=(e.n(s),e("TFhR")),r=e("7+uW"),i=e("mtWM"),c=e.n(i),d=e("U/rD");new r.default({el:"#app",data:{topLists:null,topIndex:0,listData:null,rankData:null},created:function(){this.getTopLists(),this.getSubList(0)},methods:{getTopLists:function(){var t=this;c.a.post(o.a.topList).then(function(a){t.topLists=a.data.lists}).catch(function(t){console.log(t)})},getSubList:function(t,a){var e=this;this.topIndex=t,0===t?this.getRank():c.a.post(o.a.subList,{id:a}).then(function(t){e.listData=t.data.data}).catch(function(t){console.log(t)})},getRank:function(){var t=this;c.a.post(o.a.rank).then(function(a){t.rankData=a.data.data}).catch(function(t){console.log(t)})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&"+t.id}},mixins:[d.a]})},TFhR:function(t,a,e){"use strict";var n={hotLists:"index/hotLists",banner:"index/banner",topList:"category/topList",subList:"category/subList",rank:"category/rank",searchList:"search/list",details:"goods/details",deal:"goods/deal",evaluation:"goods/evaluation",addCart:"cart/add",updateCart:"cart/update",listCart:"cart/list",reduceCart:"cart/reduce",removeCart:"cart/remove",mrremoveCart:"cart/mrremove",addressSetdefault:"address/setDefault",addressUpdate:"address/update",addressList:"address/list",addressRemove:"address/remove",addressAdd:"address/add"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058/"+n[s]);a.a=n},"U/rD":function(t,a,e){"use strict";var n=e("mw3O"),s=e.n(n).a.parse(location.search.substr(1)).index,o=[{name:"有赞",href:"index.html",icon:"icon-home"},{name:"分类",href:"category.html",icon:"icon-category"},{name:"购物车",href:"cart.html",icon:"icon-cart"},{name:"我",href:"member.html",icon:"icon-user"}],r={data:function(){return{navConfig:o,curIndex:parseInt(s)||0}},methods:{changNav:function(t,a){location.href=t.href+"?index="+a}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.navConfig,function(a,n){return e("li",{key:a.id,class:{active:n==t.curIndex},on:{click:function(e){t.changNav(a,n)}}},[e("a",[e("i",{class:a.icon}),e("div",[t._v(t._s(a.name))])])])}))])},staticRenderFns:[]};var c={filters:{adjust:function(t){var a=new Number(t);if(a||0===a)return t.toFixed(2)}},components:{Foot:e("VU/8")(r,i,!1,function(t){e("+Y8I")},null,null).exports}};a.a=c},igmb:function(t,a){}},["Hwmd"]);
//# sourceMappingURL=category.e2a1ca1d40eb9b242c5f.js.map