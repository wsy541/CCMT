"use strict";(self.webpackChunkarco_design_pro=self.webpackChunkarco_design_pro||[]).push([[6007,4235,4763,4624],{86129:function(e,t,r){var a=r(4519),n=r(5813),l=r(31850);function o(e){return a.isValidElement(e)?e:a.createElement(a.Fragment,null,e)}t.Z=function(e){var t=e.backup,r=e.requiredPermissions,c=e.oneOfPerm,s=(0,n.v9)((function(e){return e.userInfo}));return(0,a.useMemo)((function(){return(0,l.Z)({requiredPermissions:r,oneOfPerm:c},s.permissions)}),[c,r,s.permissions])?a.createElement(a.Fragment,null,o(e.children)):t?a.createElement(a.Fragment,null,o(t)):null}},48784:function(e,t,r){r.r(t);var a=r(29439),n=r(49521),l=(r(35749),r(29413)),o=r(3607),c=(r(36544),r(57940)),s=(r(24896),r(85745)),i=(r(70198),r(51993)),u=(r(2373),r(39230)),m=(r(43570),r(95792)),p=r(4519),d=r(99517),f=r.n(d),h=r(82399),b=r(34763),v=r(5001),y=r(30277),g=r(78278),E=m.Z.Row,T=m.Z.Col,Z=u.Z.useForm;t.default=function(e){var t=(0,p.useContext)(h.k).lang,r=(0,v.Z)(b.default),m=Z(),d=(0,a.Z)(m,1)[0],O="zh-CN"===t?8:12;return p.createElement("div",{className:g.default["search-form-wrapper"]},p.createElement(u.Z,{form:d,className:g.default["search-form"],labelAlign:"left",labelCol:{span:5},wrapperCol:{span:19}},p.createElement(E,{gutter:24},p.createElement(T,{span:O},p.createElement(u.Z.Item,{label:r["searchTable.columns.id"],field:"id"},p.createElement(i.Z,{placeholder:r["searchForm.id.placeholder"],allowClear:!0}))),p.createElement(T,{span:O},p.createElement(u.Z.Item,{label:r["searchTable.columns.name"],field:"name"},p.createElement(i.Z,{allowClear:!0,placeholder:r["searchForm.name.placeholder"]}))),p.createElement(T,{span:O},p.createElement(u.Z.Item,{label:r["searchTable.columns.contentType"],field:"contentType"},p.createElement(s.Z,{placeholder:r["searchForm.all.placeholder"],options:y.ContentType.map((function(e,t){return{label:e,value:t}})),mode:"multiple",allowClear:!0}))),p.createElement(T,{span:O},p.createElement(u.Z.Item,{label:r["searchTable.columns.filterType"],field:"filterType"},p.createElement(s.Z,{placeholder:r["searchForm.all.placeholder"],options:y.FilterType.map((function(e,t){return{label:e,value:t}})),mode:"multiple",allowClear:!0}))),p.createElement(T,{span:O},p.createElement(u.Z.Item,{label:r["searchTable.columns.createdTime"],field:"createdTime"},p.createElement(c.Z.RangePicker,{allowClear:!0,style:{width:"100%"},disabledDate:function(e){return f()(e).isAfter(f()())}}))),p.createElement(T,{span:O},p.createElement(u.Z.Item,{label:r["searchTable.columns.status"],field:"status"},p.createElement(s.Z,{placeholder:r["searchForm.all.placeholder"],options:y.Status.map((function(e,t){return{label:e,value:t}})),mode:"multiple",allowClear:!0}))))),p.createElement("div",{className:g.default["right-button"]},p.createElement(l.Z,{type:"primary",icon:p.createElement(o.Z,null),onClick:function(){var t=d.getFieldsValue();e.onSearch(t)}},r["searchTable.form.search"]),p.createElement(l.Z,{icon:p.createElement(n.Z,null),onClick:function(){d.resetFields(),e.onSearch({})}},r["searchTable.form.reset"])))}},34201:function(e,t,r){r.r(t),r.d(t,{ContentType:function(){return C},FilterType:function(){return N},Status:function(){return P}});var a=r(1413),n=r(29439),l=r(15861),o=r(87757),c=r.n(o),s=(r(47872),r(82357)),i=(r(9544),r(21680)),u=r(75800),m=(r(58186),r(3024)),p=(r(35749),r(29413)),d=r(25633),f=(r(74450),r(91862)),h=r(4519),b=r(86129),v=r(56787),y=r.n(v),g=r(5001),E=r(48784),T=r(34763),Z=r(78278),O=(r(93380),r(30277)),w=f.Z.Title,C=["\u56fe\u6587","\u6a2a\u7248\u77ed\u89c6\u9891","\u7ad6\u7248\u77ed\u89c6\u9891"],N=["\u89c4\u5219\u7b5b\u9009","\u4eba\u5de5"],P=["\u5df2\u4e0a\u7ebf","\u672a\u4e0a\u7ebf"];t.default=function(){var e=(0,g.Z)(T.default),t=function(){var e=(0,l.Z)(c().mark((function e(t,r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t,r);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),r=(0,h.useMemo)((function(){return(0,O.getColumns)(e,t)}),[e]),o=(0,h.useState)([]),f=(0,n.Z)(o,2),v=f[0],C=f[1],N=(0,h.useState)({sizeCanChange:!0,showTotal:!0,pageSize:10,current:1,pageSizeChangeResetCurrent:!0}),P=(0,n.Z)(N,2),S=P[0],j=P[1],x=(0,h.useState)(!0),k=(0,n.Z)(x,2),F=k[0],z=k[1],I=(0,h.useState)({}),D=(0,n.Z)(I,2),R=D[0],M=D[1];return(0,h.useEffect)((function(){!function(){var e=S.current,t=S.pageSize;z(!0),y().get("/api/list",{params:(0,a.Z)({page:e,pageSize:t},R)}).then((function(r){C(r.data.list),j((0,a.Z)((0,a.Z)({},S),{},{current:e,pageSize:t,total:r.data.total})),z(!1)}))}()}),[S.current,S.pageSize,JSON.stringify(R)]),h.createElement(s.Z,null,h.createElement(w,{heading:6},e["menu.list.searchTable"]),h.createElement(E.default,{onSearch:function(e){j((0,a.Z)((0,a.Z)({},S),{},{current:1})),M(e)}}),h.createElement(b.Z,{requiredPermissions:[{resource:"menu.list.searchTable",actions:["write"]}]},h.createElement("div",{className:Z.default["button-group"]},h.createElement(m.Z,null,h.createElement(p.Z,{type:"primary",icon:h.createElement(d.Z,null)},e["searchTable.operations.add"]),h.createElement(p.Z,null,e["searchTable.operations.upload"])),h.createElement(m.Z,null,h.createElement(p.Z,{icon:h.createElement(u.Z,null)},e["searchTable.operation.download"])))),h.createElement(i.Z,{rowKey:"id",loading:F,onChange:function(e){var t=e.current,r=e.pageSize;j((0,a.Z)((0,a.Z)({},S),{},{current:t,pageSize:r}))},pagination:S,columns:r,data:v}))}},34763:function(e,t,r){r.r(t);t.default={"en-US":{"menu.list":"List","menu.list.searchTable":"Search Table","searchTable.form.search":"Search","searchTable.form.reset":"Reset","searchTable.columns.id":"Collection ID","searchTable.columns.name":"Collection Name","searchTable.columns.contentType":"Content genre","searchTable.columns.filterType":"Filter method","searchTable.columns.createdTime":"Creation time","searchTable.columns.status":"Status","searchTable.columns.contentNum":"Content quantity","searchTable.columns.operations":"Operation","searchTable.columns.operations.view":"View","searchTable.columns.operations.update":"Edit","searchTable.columns.operations.offline":"Offline","searchTable.columns.operations.online":"Online","searchTable.operations.add":"New","searchTable.operations.upload":"Bulk upload","searchTable.operation.download":"Download","searchForm.id.placeholder":"Please enter the collection ID","searchForm.name.placeholder":"Please enter the collection name","searchForm.all.placeholder":"all"},"zh-CN":{"menu.list":"\u5217\u8868\u9875","menu.list.searchTable":"\u67e5\u8be2\u8868\u683c","searchTable.form.search":"\u67e5\u8be2","searchTable.form.reset":"\u91cd\u7f6e","searchTable.columns.id":"\u96c6\u5408\u7f16\u53f7","searchTable.columns.name":"\u96c6\u5408\u540d\u79f0","searchTable.columns.contentType":"\u5185\u5bb9\u4f53\u88c1","searchTable.columns.filterType":"\u7b5b\u9009\u65b9\u5f0f","searchTable.columns.createdTime":"\u521b\u5efa\u65f6\u95f4","searchTable.columns.status":"\u72b6\u6001","searchTable.columns.contentNum":"\u5185\u5bb9\u91cf","searchTable.columns.operations":"\u64cd\u4f5c","searchTable.columns.operations.view":"\u67e5\u770b","searchTable.columns.operations.update":"\u4fee\u6539","searchTable.columns.operations.online":"\u4e0a\u7ebf","searchTable.columns.operations.offline":"\u4e0b\u7ebf","searchTable.operations.add":"\u65b0\u5efa","searchTable.operations.upload":"\u6279\u91cf\u5bfc\u5165","searchTable.operation.download":"\u4e0b\u8f7d","searchForm.id.placeholder":"\u8bf7\u8f93\u5165\u96c6\u5408\u7f16\u53f7","searchForm.name.placeholder":"\u8bf7\u8f93\u5165\u96c6\u5408\u540d\u79f0","searchForm.all.placeholder":"\u5168\u90e8"}}},93380:function(e,t,r){r.r(t);var a=r(45987),n=r(29439),l=r(93433),o=r(70782),c=r.n(o),s=r(27927),i=r(99517),u=r.n(i),m=r(52239),p=["page","pageSize"],d=c().mock({"list|100":[{id:/[0-9]{8}[-][0-9]{4}/,name:function(){return c().Random.pick(["\u6bcf\u65e5\u63a8\u8350\u89c6\u9891\u96c6","\u6296\u97f3\u77ed\u89c6\u9891\u5019\u9009\u96c6","\u56fd\u9645\u65b0\u95fb\u96c6\u5408"])},"contentType|0-2":0,"filterType|0-1":0,"count|0-2000":0,"createdTime|1-60":0,"status|0-1":0}]}).list;(0,m.Z)({setup:function(){c().mock(new RegExp("/api/list"),(function(e){var t=s.parseUrl(e.url).query,r=t.page,o=void 0===r?1:r,c=t.pageSize,i=o,m=void 0===c?10:c,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,r=e.name,a=e["contentType[]"],o=e["filterType[]"],c=e["createdTime[]"],s=e["status[]"];if(t)return d.filter((function(e){return e.id===t}));var i=(0,l.Z)(d);if(r&&(i=i.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))),a&&(i=i.filter((function(e){return a.includes(e.contentType.toString())}))),o&&(i=i.filter((function(e){return o.includes(e.filterType.toString())}))),c&&2===c.length){var m=(0,n.Z)(c,2),p=m[0],f=m[1];i=i.filter((function(e){var t=u()().subtract(e.createdTime,"days").format("YYYY-MM-DD HH:mm:ss");return!u()(t).isBefore(u()(p))&&!u()(t).isAfter(u()(f))}))}return s&&s.length&&(i=i.filter((function(e){return s.includes(e.status.toString())}))),i}((0,a.Z)(t,p));return{list:f.slice((i-1)*m,i*m),total:f.length}}))}})},82357:function(e,t,r){r.d(t,{Z:function(){return y}});var a=r(4519),n=r(18707),l=r(75624),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};var s=a.forwardRef((function(e,t){var r,s=e.className,i=e.title,u=e.avatar,m=e.description,p=e.actionList,d=c(e,["className","title","avatar","description","actionList"]),f=(0,(0,a.useContext)(l.E_).getPrefixCls)("card-meta"),h=(0,n.Z)(f,s);return a.createElement("div",o({},d,{ref:t,className:h}),i||m?a.createElement("div",{className:f+"-content"},i&&a.createElement("div",{className:f+"-title"},i),m&&a.createElement("div",{className:f+"-description"},m)):null,u||p?a.createElement("div",{className:(0,n.Z)(f+"-footer ",(r={},r[f+"-footer-only-actions"]=!u,r))},u?a.createElement("div",{className:f+"-avatar"},u):null,p):null)}));s.displayName="CardMeta";var i=s;var u=a.forwardRef((function(e,t){var r,o=e.children,c=e.style,s=e.className,i=e.hoverable,u=(0,(0,a.useContext)(l.E_).getPrefixCls)("card-grid");return a.createElement("div",{ref:t,style:c,className:(0,n.Z)(u,(r={},r[u+"-hoverable"]=i,r),s)},o)}));u.displayName="CardGrid";var m=u,p=r(120),d=r(6431),f=function(){return f=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},f.apply(this,arguments)},h=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},b={size:"default",bordered:!0};var v=a.forwardRef((function(e,t){var r,o,c=(0,a.useContext)(l.E_),s=c.getPrefixCls,u=c.loadingElement,v=c.componentConfig,y=c.rtl,g=(0,d.Z)(e,b,null===v||void 0===v?void 0:v.Card),E=g.className,T=g.children,Z=g.bordered,O=g.loading,w=g.hoverable,C=g.size,N=g.title,P=g.extra,S=g.cover,j=g.actions,x=g.headerStyle,k=g.bodyStyle,F=h(g,["className","children","bordered","loading","hoverable","size","title","extra","cover","actions","headerStyle","bodyStyle"]),z=s("card"),I=j&&j.length?a.createElement("div",{className:z+"-actions"},a.createElement("div",{className:z+"-actions-right"},j.map((function(e,t){return a.createElement("span",{key:"action-"+t,className:z+"-actions-item"},e)})))):null,D=!1,R=!1,M=a.Children.map(T,(function(e){if(e&&e.type)if(e.type===m)D=!0;else if(e.type===i)return R=!0,a.cloneElement(e,{actionList:I});return e}));return a.createElement("div",f({},F,{ref:t,className:(0,n.Z)(z,z+"-size-"+C,(r={},r[z+"-loading"]=O,r[z+"-bordered"]=Z,r[z+"-hoverable"]=w,r[z+"-contain-grid"]=D,r[z+"-rtl"]=y,r),E)}),N||P?a.createElement("div",{className:(0,n.Z)(z+"-header",(o={},o[z+"-header-no-title"]=!N,o)),style:x},N&&a.createElement("div",{className:z+"-header-title"},N),P&&a.createElement("div",{className:z+"-header-extra"},P)):null,S?a.createElement("div",{className:z+"-cover"},S):null,a.createElement("div",{className:z+"-body",style:k},O?u||a.createElement(p.Z,null):M,R?null:I))}));v.Meta=i,v.Grid=m,v.displayName="Card";var y=v},47872:function(e,t,r){r(75009),r(49214)},75800:function(e,t,r){var a=r(87462),n=r(4942),l=r(4519),o=r(41506);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){var r=(0,l.useContext)(o.P).prefixCls,n=void 0===r?"arco":r,c=e.spin,i=e.className,u=s(s({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(i?i+" ":"").concat(n,"-icon ").concat(n,"-icon-download")});return c&&(u.className="".concat(u.className," ").concat(n,"-icon-loading")),delete u.spin,delete u.isIcon,l.createElement("svg",(0,a.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},u),l.createElement("path",{d:"m33.072 22.071-9.07 9.071-9.072-9.07M24 5v26m16 4v6H8v-6"}))}var u=l.forwardRef(i);u.defaultProps={isIcon:!0},u.displayName="IconDownload",t.Z=u},49521:function(e,t,r){var a=r(87462),n=r(4942),l=r(4519),o=r(41506);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){var r=(0,l.useContext)(o.P).prefixCls,n=void 0===r?"arco":r,c=e.spin,i=e.className,u=s(s({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(i?i+" ":"").concat(n,"-icon ").concat(n,"-icon-refresh")});return c&&(u.className="".concat(u.className," ").concat(n,"-icon-loading")),delete u.spin,delete u.isIcon,l.createElement("svg",(0,a.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},u),l.createElement("path",{d:"M38.837 18C36.463 12.136 30.715 8 24 8 15.163 8 8 15.163 8 24s7.163 16 16 16c7.455 0 13.72-5.1 15.496-12M40 8v10H30"}))}var u=l.forwardRef(i);u.defaultProps={isIcon:!0},u.displayName="IconRefresh",t.Z=u},15861:function(e,t,r){function a(e,t,r,a,n,l,o){try{var c=e[l](o),s=c.value}catch(i){return void r(i)}c.done?t(s):Promise.resolve(s).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,l){var o=e.apply(t,r);function c(e){a(o,n,l,c,s,"next",e)}function s(e){a(o,n,l,c,s,"throw",e)}c(void 0)}))}}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=6007.d81906d1.chunk.js.map