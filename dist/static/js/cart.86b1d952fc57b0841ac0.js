webpackJsonp([6],{"+Y8I":function(t,e){},0:function(t,e){},"0C+S":function(t,e){},1:function(t,e){},2:function(t,e){},NW8W:function(t,e){},TFhR:function(t,e,n){"use strict";var i={hotLists:"index/hotLists",banner:"index/banner",topList:"category/topList",subList:"category/subList",rank:"category/rank",searchList:"search/list",details:"goods/details",deal:"goods/deal",evaluation:"goods/evaluation",addCart:"cart/add",updateCart:"cart/update",listCart:"cart/list",reduceCart:"cart/reduce",removeCart:"cart/remove",mrremoveCart:"cart/mrremove",addressSetdefault:"address/setDefault",addressUpdate:"address/update",addressList:"address/list",addressRemove:"address/remove",addressAdd:"address/add"};for(var o in i)i.hasOwnProperty(o)&&(i[o]="http://rap2api.taobao.org/app/mock/7058/"+i[o]);e.a=i},"U/rD":function(t,e,n){"use strict";var i=n("mw3O"),o=n.n(i).a.parse(location.search.substr(1)).index,s=[{name:"有赞",href:"index.html",icon:"icon-home"},{name:"分类",href:"category.html",icon:"icon-category"},{name:"购物车",href:"cart.html",icon:"icon-cart"},{name:"我",href:"member.html",icon:"icon-user"}],r={data:function(){return{navConfig:s,curIndex:parseInt(o)||0}},methods:{changNav:function(t,e){location.href=t.href+"?index="+e}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,i){return n("li",{key:e.id,class:{active:i==t.curIndex},on:{click:function(n){t.changNav(e,i)}}},[n("a",[n("i",{class:e.icon}),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var a={filters:{adjust:function(t){var e=new Number(t);if(e||0===e)return t.toFixed(2)}},components:{Foot:n("VU/8")(r,c,!1,function(t){n("+Y8I")},null,null).exports}};e.a=a},eC21:function(t,e){},gWPi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("NW8W"),n("0C+S"),n("eC21");var i=n("7+uW"),o=n("U/rD"),s=(n("mtWM"),n("TFhR")),r=n("4BB4"),c=n("Zrlr"),a=n.n(c),d=n("wxAW"),h=n.n(d),u=n("wI4f"),f=(n("/2yO"),function(){function t(){a()(this,t)}return h()(t,null,[{key:"add",value:function(t){return Object(u.a)(s.a.addCart,{id:t,number:1})}},{key:"reduce",value:function(t){return Object(u.a)(s.a.reduceCart,{id:t,number:1})}}]),t}()),l=n("8+8L");i.a.use(l.a),new i.a({el:".container",data:{lists:null,total:0,number:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:""},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(t){return t.checked})},set:function(t){this.lists.forEach(function(e){e.checked=t,e.goodsList.forEach(function(e){e.checked=t})})}},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(t){this.editingShop&&(this.editingShop.removeChecked=t,this.editingShop.goodsList.forEach(function(e){e.removeChecked=t}))}},selectLists:function(){if(this.lists&&this.lists.length){var t=[],e=0;return this.lists.forEach(function(n){n.goodsList.forEach(function(n){n.checked&&(t.push(n),e+=n.price*n.number)})}),this.total=e,this.number=t.length,t}return[]},removeLists:function(){if(this.editingShop){var t=[];return this.editingShop.goodsList.forEach(function(e){e.removeChecked&&t.push(e)}),t}return[]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.$http.get("static/data.json").then(function(e){var n=e.data.cart.list.cartList;n.forEach(function(t){t.checked=!0,t.removeChecked=!1,t.editing=!1,t.editingMsg="编辑",t.goodsList.forEach(function(t){t.checked=!0,t.removeChecked=!1})}),t.lists=n})},selectGood:function(t,e){var n=this.editingShop?"removeChecked":"checked";e[n]=!e[n],t[n]=t.goodsList.every(function(t){return t[n]})},selectShop:function(t){var e=this.editingShop?"removeChecked":"checked";t[e]=!t[e],t.goodsList.forEach(function(n){n[e]=t[e]})},selectAll:function(){var t=this.editingShop?"allRemoveSelected":"allSelected";this[t]=!this[t]},edit:function(t,e){t.editing=!t.editing,t.editingMsg=t.editing?"完成":"编辑",this.lists.forEach(function(n,i){e!==i&&(n.editing=!1,n.editingMsg=t.editing?"":"编辑")}),this.editingShop=t.editing?t:null,this.editingShopIndex=t.editing?e:-1},reduce:function(t){1!==t.number&&f.reduce(t.id).then(function(e){t.number--})},add:function(t){f.add(t.id).then(function(e){t.number++})},remove:function(t,e,n,i){this.removePopup=!0,this.removeData={shop:t,shopIndex:e,good:n,goodIndex:i},this.removeMsg="确定要删除该商品吗？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定将所选 "+this.removeLists.length+" 个商品删除？"},removeConfirm:function(){var t=this;if("确定要删除该商品吗？"===this.removeMsg){var e=this.removeData,n=e.shop,i=e.shopIndex,o=(e.good,e.goodIndex);this.$http.get("static/data.json").then(function(e){n.goodsList.splice(o,1),n.goodsList.length||(t.lists.splice(i,1),t.removeShop()),t.removePopup=!1})}else{var s=[];this.removeLists.forEach(function(t){s.push(t.id)}),this.$http.get("static/data.json").then(function(e){var n=[];t.editingShop.goodsList.forEach(function(e){-1===t.removeLists.findIndex(function(t){return t.id==e.id})&&n.push(e)}),n.length?t.editingShop.goodsList=n:(t.lists.splice(t.editingShopIndex,1),t.removeShop()),t.removePopup=!1})}},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(t){t.editing=!1,t.editingMsg="编辑"})},start:function(t,e){e.startX=t.changedTouches[0].clientX},end:function(t,e,n,i){var o=t.changedTouches[0].clientX,s="0";n.startX-o>100&&(s="-60px"),o-n.startX>100&&(s="0px"),Object(r.a)(this.$refs["goods-"+e+"-"+i],{left:s})}},mixins:[o.a]})},wI4f:function(t,e,n){"use strict";var i=n("//Fk"),o=n.n(i),s=n("mtWM"),r=n.n(s);e.a=function(t,e){return new o.a(function(n,i){r.a.post(t,e).then(function(t){var e=t.data.status;200===e?n(t):300===e&&(location.href="login.html",n(t))}).catch(function(t){i(t)})})}}},["gWPi"]);
//# sourceMappingURL=cart.86b1d952fc57b0841ac0.js.map