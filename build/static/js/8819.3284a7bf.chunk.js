"use strict";(self.webpackChunkarco_design_pro=self.webpackChunkarco_design_pro||[]).push([[8819,6133,9830],{83380:function(e,t,a){a.r(t);var n=a(4942),r=a(15861),i=a(29439),c=a(87757),l=a.n(c),s=(a(47872),a(82357)),o=(a(36287),a(73575)),d=a(23116),u=(a(4316),a(30894)),m=(a(63915),a(19050)),f=a(23743),p=(a(63793),a(79721)),v=a(94922),L=(a(35749),a(29413)),h=(a(74450),a(91862)),b=a(4519),g=a(43270),E=a.n(g),y=a(5001),Z=a(36133),k=a(29830),x=h.Z.Paragraph;t.default=function(e){var t=e.card,a=void 0===t?{}:t,c=(0,b.useState)(!1),h=(0,i.Z)(c,2),g=h[0],w=h[1],N=(0,b.useState)(a.status),C=(0,i.Z)(N,2),S=C[0],q=C[1],P=(0,b.useState)(e.loading),O=(0,i.Z)(P,2),T=O[0],j=O[1],A=(0,y.Z)(Z.default),F=function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,new Promise((function(e){return setTimeout((function(){q(1!==S?1:0),e(null)}),1e3)})).finally((function(){return j(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,b.useEffect)((function(){j(e.loading)}),[e.loading]),(0,b.useEffect)((function(){a.status!==S&&q(a.status)}),[a.status]);var R=E()(k.default["card-block"],k.default["service-card"]);return b.createElement(s.Z,{bordered:!0,className:R,size:"small",title:T?b.createElement(m.Z,{animation:!0,text:{rows:1,width:["100%"]},style:{width:"120px",height:"24px"},className:k.default["card-block-skeleton"]}):b.createElement(b.Fragment,null,b.createElement("div",{className:E()(k.default.title,(0,n.Z)({},k.default["title-more"],g))},a.frame,function(){switch(S){case 1:return b.createElement(p.Z,{color:"green",icon:b.createElement(v.Z,null),className:k.default.status,size:"small"},A["cardList.tag.opened"]);case 2:return b.createElement(p.Z,{color:"red",icon:b.createElement(f.Z,null),className:k.default.status,size:"small"},A["cardList.tag.expired"]);default:return null}}(),b.createElement(o.Z,{droplist:b.createElement(u.Z,null,["\u589e\u52a0\u8f93\u51fa\u9009\u9879"].map((function(e,t){return b.createElement(u.Z.Item,{key:t.toString()},e)}))),trigger:"click",onVisibleChange:w,popupVisible:g},b.createElement("div",{className:k.default.more},b.createElement(d.Z,null)))))},b.createElement("div",{className:k.default.content},function(){if(T)return b.createElement(m.Z,{text:{rows:3},animation:!0,className:k.default["card-block-skeleton"]});for(var e="",t=0;t<a.createdFramedatas.length;t++)e+="".concat(a.createdFramedatas[t].datas,",");return b.createElement(x,null,e)}()),b.createElement("div",{className:k.default.extra},b.createElement(b.Fragment,null,1===S?b.createElement(L.Z,{loading:T,onClick:F},A["cardList.options.cancel"]):b.createElement(L.Z,{type:"outline",loading:T,onClick:F},0===S?A["cardList.options.subscribe"]:A["cardList.options.renewal"]))))}},58819:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(29439),r=(a(47872),a(82357)),i=(a(10502),a(29523)),c=(a(70198),a(51993)),l=(a(43570),a(95792)),s=(a(74450),a(91862)),o=a(4519),d=a(5001),u=a(36133),m=a(29830),f=a(83380),p=a(82399),v=s.Z.Title,L=l.Z.Row,h=l.Z.Col;new Array(10).fill({title:"title",frame:"frame",id:1});function b(){var e=(0,d.Z)(u.default),t=(0,o.useState)(!0),a=(0,n.Z)(t,2),l=a[0],s=a[1],b=(0,o.useState)({}),g=(0,n.Z)(b,2),E=g[0],y=g[1],Z=(0,o.useContext)(p.k),k=(Z.userId,Z.setUserId,Z.token),x=(Z.setToken,(0,o.useState)("all")),w=(0,n.Z)(x,2),N=w[0],C=w[1],S=[],q=[];(0,o.useEffect)((function(){s(!0),fetch("http://182.92.125.165:8080/graphql",{method:"POST",body:JSON.stringify({query:"\n        query {\n              bookings {\n                  id\n                  frame\n                  event {\n                      id\n                      title\n                  }\n                  createdFramedatas {\n                      datas\n                  }\n              }\n          }\n        "}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+k}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){S=e.data.bookings;for(var t={},a=0;a<S.length;a++){var n="".concat(S[a].event.title);q.includes(n)?t[n].push(S[a]):(q.push(n),t[n]=[S[a]])}console.log({titleList:q}),console.log(t),y(t),console.log({bookings:S}),console.log({data:E})})).catch((function(e){console.log(e)})).finally((function(){return s(!1)}))}),[]);var P=function(e){return o.createElement(L,{gutter:24,className:m.default["card-content"]},e.map((function(e,t){return o.createElement(h,{xs:24,sm:12,md:8,lg:6,xl:6,xxl:6,key:t},o.createElement(f.default,{card:e,loading:l}))})))};return o.createElement(r.Z,null,o.createElement(v,{heading:6},e["menu.framedata.card"]),o.createElement(i.Z,{activeTab:N,type:"rounded",onChange:C,extra:o.createElement(c.Z.Search,{style:{width:"240px"},placeholder:e["cardList.tab.".concat(N,".placeholder")]})},o.createElement(i.Z.TabPane,{key:"all",title:e["cardList.tab.title.all"]}),Object.entries(E).map((function(e){var t=(0,n.Z)(e,1)[0];return o.createElement(i.Z.TabPane,{key:t,title:t})}))),o.createElement("div",{className:m.default.container},"all"===N?Object.entries(E).map((function(e){var t=(0,n.Z)(e,2),a=t[0],r=t[1];return o.createElement("div",{key:a},o.createElement(v,{heading:6},a),P(r))})):o.createElement("div",{className:m.default["single-content"]},P(E[N]))))}},36133:function(e,t,a){a.r(t);t.default={"en-US":{"menu.framedata":"Frame Data","menu.framedata.card":"Card List","cardList.tab.title.all":"All","cardList.tab.title.quality":"Content quality","cardList.tab.title.service":"Service opening","cardList.tab.title.rules":"Rule presets","cardList.tab.all.placeholder":"Search","cardList.tab.quality.placeholder":"Search queue","cardList.tab.service.placeholder":"Search service","cardList.tab.rules.placeholder":"Search rule","cardList.searchInput.placeholder":"Search service","cardList.add.quality":"Create quality inspection queue","cardList.enable":"Enable","cardList.disable":"Disable","cardList.action":"action","cardList.detail":"Detail","cardList.tab.title.announcement":"Recent Announcement","cardList.announcement.noData":"No announcement","cardList.statistic.enable":"Enable","cardList.statistic.disable":"Disable","cardList.statistic.applicationNum":"Applications","cardList.options.qualityInspection":"Quality inspection","cardList.options.remove":"Remove","cardList.options.cancel":"Cancel","cardList.options.subscribe":"Subscribe","cardList.options.renewal":"Renewal","cardList.tag.activated":"Activated","cardList.tag.opened":"Already Opened","cardList.tag.expired":"Expired"},"zh-CN":{"menu.framedata":"\u6d4b\u8bd5\u6570\u636e","menu.framedata.card":"\u539f\u59cb\u6570\u636e\u5361\u7247","cardList.tab.title.all":"\u5168\u90e8","cardList.tab.title.quality":"\u5185\u5bb9\u8d28\u68c0","cardList.tab.title.service":"\u670d\u52a1\u5f00\u901a","cardList.tab.title.rules":"\u89c4\u5219\u9884\u7f6e","cardList.tab.all.placeholder":"\u641c\u7d22","cardList.tab.quality.placeholder":"\u641c\u7d22\u961f\u5217","cardList.tab.service.placeholder":"\u641c\u7d22\u670d\u52a1","cardList.tab.rules.placeholder":"\u641c\u7d22\u89c4\u5219","cardList.searchInput.placeholder":"\u641c\u7d22\u670d\u52a1","cardList.add.quality":"\u70b9\u51fb\u521b\u5efa\u8d28\u68c0\u5185\u5bb9\u961f\u5217","cardList.enable":"\u542f\u7528","cardList.disable":"\u7981\u7528","cardList.action":"\u64cd\u4f5c","cardList.detail":"\u8be6\u7ec6\u4fe1\u606f","cardList.tab.title.announcement":"\u6700\u8fd1\u516c\u544a","cardList.announcement.noData":"\u6682\u65e0\u516c\u544a","cardList.statistic.enable":"\u5df2\u542f\u7528","cardList.statistic.disable":"\u672a\u542f\u7528","cardList.statistic.applicationNum":"\u5e94\u7528\u6570","cardList.options.qualityInspection":"\u8d28\u68c0","cardList.options.remove":"\u5220\u9664","cardList.options.cancel":"\u53d6\u6d88\u5f00\u901a","cardList.options.subscribe":"\u5f00\u901a\u670d\u52a1","cardList.options.renewal":"\u7eed\u7ea6\u670d\u52a1","cardList.tag.activated":"\u5df2\u542f\u7528","cardList.tag.opened":"\u5df2\u5f00\u901a","cardList.tag.expired":"\u5df2\u8fc7\u671f"}}},19050:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(4519),r=a(18707),i=a(34799);function c(e){var t,a=e.style,c=e.width,l=void 0===c?"60%":c,s=e.rows,o=void 0===s?3:s,d=e.className,u=e.prefixCls,m=(0,r.Z)(u+"-text",d),f=[];for(var p=0;p<o;p++)f.push(n.createElement("li",{className:u+"-text-row",key:p,style:{width:(t=p,(0,i.kJ)(l)?l[t]:o-1===t?l:void 0)}}));return n.createElement("ul",{className:m,style:a},f)}function l(e){var t,a=e.style,i=e.shape,c=void 0===i?"square":i,l=e.size,s=e.position,o=void 0===s?"left":s,d=e.className,u=e.prefixCls,m=(0,r.Z)(u+"-image",((t={})[u+"-image-"+o]=o,t[u+"-image-"+c]=c,t[u+"-image-"+l]=l,t),d);return n.createElement("div",{className:m,style:a})}var s=a(75624),o=a(6431),d=a(9485),u=function(){return u=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)};function m(e){return(0,i.Kn)(e)?e:{}}var f={text:!0,loading:!0};var p=(0,n.forwardRef)((function(e,t){var a,i=(0,n.useContext)(s.E_),p=i.getPrefixCls,v=i.componentConfig,L=i.rtl,h=(0,o.Z)(e,f,null===v||void 0===v?void 0:v.Skeleton),b=h.style,g=h.className,E=h.animation,y=h.loading,Z=h.image,k=h.text,x=h.children,w=m(Z),N=m(k),C=p("skeleton"),S=(0,r.Z)(C,((a={})[C+"-animate"]=E,a[C+"-rtl"]=L,a),g);function q(){return Z&&n.createElement("div",{className:C+"-header"},n.createElement(l,u({prefixCls:C},w)))}return n.createElement(n.Fragment,null,y?n.createElement("div",u({},(0,d.m)(h),{className:S,style:b,ref:t}),"right"!==w.position&&q(),k&&n.createElement("div",{className:C+"-content"},n.createElement(c,u({prefixCls:C},N))),"right"===w.position&&q()):x)}));p.displayName="Skeleton";var v=p},63915:function(e,t,a){a(75009)},29830:function(e,t,a){a.r(t),t.default={container:"container--josws","card-content":"card-content--YASH0","single-content":"single-content--xRlyR","card-block":"card-block--PkmEs",title:"title--JCNBe",icon:"icon--G4kYS",status:"status--_v9TP",more:"more--GE6GU","title-more":"title-more--uxXas",time:"time--ccLcH",content:"content--OnCU1",extra:"extra--SQyzl","card-block-skeleton":"card-block-skeleton--Lv1XO","add-card":"add-card--UGK0M","add-icon":"add-icon--Lru7j",description:"description--E0iML","service-card":"service-card--DYUEM","rules-card":"rules-card--CrXE7"}},15861:function(e,t,a){function n(e,t,a,n,r,i,c){try{var l=e[i](c),s=l.value}catch(o){return void a(o)}l.done?t(s):Promise.resolve(s).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,i){var c=e.apply(t,a);function l(e){n(c,r,i,l,s,"next",e)}function s(e){n(c,r,i,l,s,"throw",e)}l(void 0)}))}}a.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=8819.3284a7bf.chunk.js.map