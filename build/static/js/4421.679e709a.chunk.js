"use strict";(self.webpackChunkarco_design_pro=self.webpackChunkarco_design_pro||[]).push([[4421,1454,7021],{36960:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});n(74450);var a=n(91862),r=(n(9544),n(21680)),l=(n(63793),n(79721)),o=n(4519),i=n(5001),c=n(64696),s=n(4469);function u(){var e=(0,i.Z)(c.default),t=[{title:e["monitor.list.title.order"],render:function(e,t,n){return o.createElement("span",null,n+1)}},{title:e["monitor.list.title.cover"],dataIndex:"cover",render:function(t,n){return o.createElement("div",{className:s.default["data-statistic-list-cover-wrapper"]},o.createElement("img",{src:n.cover}),-1===n.status&&o.createElement(l.Z,{color:"red",className:s.default["data-statistic-list-cover-tag"]},e["monitor.list.tag.auditFailed"]))}},{title:e["monitor.list.title.name"],dataIndex:"name"},{dataIndex:"duration",title:e["monitor.list.title.duration"]},{dataIndex:"id",title:e["monitor.list.title.id"]}],n=[{cover:"http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/c788fc704d32cf3b1136c7d45afc2669.png~tplv-uwbnlip3yd-webp.webp",name:"\u89c6\u9891\u76f4\u64ad",duration:"00:05:19",id:"54e23ade",status:-1}];return o.createElement("div",{className:s.default[""]},o.createElement(r.Z,{columns:t,data:n,rowKey:"id",rowSelection:{type:"checkbox"},border:!1,pagination:!1}),o.createElement(a.Z.Text,{type:"secondary",className:s.default["data-statistic-list-tip"]},e["monitor.list.tip.rotations"],n.length,e["monitor.list.tip.rest"]))}},74361:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(47872);var a=n(82357),r=(n(35749),n(29413)),l=(n(50414),n(6986)),o=(n(10502),n(29523)),i=n(4519),c=n(5001),s=n(64696),u=n(36960),m=n(4469);function d(){var e=(0,c.Z)(s.default);return i.createElement(a.Z,null,i.createElement(o.Z,{defaultActiveTab:"liveMethod"},i.createElement(o.Z.TabPane,{key:"liveMethod",title:e["monitor.tab.title.liveMethod"]}),i.createElement(o.Z.TabPane,{key:"onlineUsers",title:e["monitor.tab.title.onlineUsers"]})),i.createElement("div",{className:m.default["data-statistic-content"]},i.createElement(l.Z.Group,{defaultValue:"3",type:"button"},i.createElement(l.Z,{value:"1"},e["monitor.liveMethod.normal"]),i.createElement(l.Z,{value:"2"},e["monitor.liveMethod.flowControl"]),i.createElement(l.Z,{value:"3"},e["monitor.liveMethod.video"]),i.createElement(l.Z,{value:"4"},e["monitor.liveMethod.web"])),i.createElement("div",{className:m.default["data-statistic-list-wrapper"]},i.createElement("div",{className:m.default["data-statistic-list-header"]},i.createElement(r.Z,{type:"text"},e["monitor.editCarousel"]),i.createElement(r.Z,{disabled:!0},e["monitor.startCarousel"])),i.createElement("div",{className:m.default["data-statistic-list-content"]},i.createElement(u.default,null)))))}},75164:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});n(58186);var a=n(3024),r=n(4519),l=n(5813),o=n(24491),i=n(13574),c=n(74361),s=n(97973),u=n(74167),m=n(77538),d=n(4469);n(27021);function f(){var e=(0,l.v9)((function(e){return e.userInfo}));return r.createElement("div",null,r.createElement("div",{className:d.default.layout},r.createElement("div",{className:d.default["layout-left-side"]},r.createElement(o.default,null)),r.createElement("div",{className:d.default["layout-content"]},r.createElement(a.Z,{size:16,direction:"vertical",style:{width:"100%"}},r.createElement(i.default,{userInfo:e}),r.createElement(c.default,null))),r.createElement("div",{className:d.default["layout-right-side"]},r.createElement(a.Z,{size:16,direction:"vertical",style:{width:"100%"}},r.createElement(s.default,null),r.createElement(u.default,null),r.createElement(m.default,null)))))}},27021:function(e,t,n){n.r(t);var a=n(70782),r=n.n(a);(0,n(52239).Z)({setup:function(){r().mock(new RegExp("/api/chatList"),(function(){return r().mock({"data|4-6":[{"id|+1":1,username:"\u7528\u62377352772",content:"\u9a6c\u4e0a\u5c31\u5f00\u59cb\u4e86\uff0c\u597d\u6fc0\u52a8\uff01",time:"13:09:12","isCollect|2":!0}]}).data}))}})},74167:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});n(47872);var a=n(82357),r=(n(58186),n(3024)),l=n(87462),o=n(4942),i=n(4519),c=n(41506);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){var n=(0,i.useContext)(c.P).prefixCls,a=void 0===n?"arco":n,r=e.spin,o=e.className,s=u(u({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(o?o+" ":"").concat(a,"-icon ").concat(a,"-icon-arrow-right")});return r&&(s.className="".concat(s.className," ").concat(a,"-icon-loading")),delete s.spin,delete s.isIcon,i.createElement("svg",(0,l.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},s),i.createElement("path",{d:"m27.728 11.27 12.728 12.728-12.728 12.728M5 24h34.295"}))}var d=i.forwardRef(m);d.defaultProps={isIcon:!0},d.displayName="IconArrowRight";var f=d;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){var n=(0,i.useContext)(c.P).prefixCls,a=void 0===n?"arco":n,r=e.spin,o=e.className,s=v(v({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(o?o+" ":"").concat(a,"-icon ").concat(a,"-icon-stop")});return r&&(s.className="".concat(s.className," ").concat(a,"-icon-loading")),delete s.spin,delete s.isIcon,i.createElement("svg",(0,l.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},s),i.createElement("path",{d:"M36.728 36.728c7.03-7.03 7.03-18.427 0-25.456-7.03-7.03-18.427-7.03-25.456 0m25.456 25.456c-7.03 7.03-18.427 7.03-25.456 0-7.03-7.03-7.03-18.427 0-25.456m25.456 25.456L11.272 11.272"}))}var y=i.forwardRef(b);y.defaultProps={isIcon:!0},y.displayName="IconStop";var E=y;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t){var n=(0,i.useContext)(c.P).prefixCls,a=void 0===n?"arco":n,r=e.spin,o=e.className,s=h(h({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(o?o+" ":"").concat(a,"-icon ").concat(a,"-icon-swap")});return r&&(s.className="".concat(s.className," ").concat(a,"-icon-loading")),delete s.spin,delete s.isIcon,i.createElement("svg",(0,l.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},s),i.createElement("path",{d:"M5 17h35.586c.89 0 1.337-1.077.707-1.707L33 7M43 31H7.414c-.89 0-1.337 1.077-.707 1.707L15 41"}))}var O=i.forwardRef(Z);O.defaultProps={isIcon:!0},O.displayName="IconSwap";var w=O,N=(n(35749),n(29413));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t){var n=(0,i.useContext)(c.P).prefixCls,a=void 0===n?"arco":n,r=e.spin,o=e.className,s=j(j({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(o?o+" ":"").concat(a,"-icon ").concat(a,"-icon-tags")});return r&&(s.className="".concat(s.className," ").concat(a,"-icon-loading")),delete s.spin,delete s.isIcon,i.createElement("svg",(0,l.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},s),i.createElement("path",{d:"m37.581 28.123-14.849 14.85a1 1 0 0 1-1.414 0L8.59 30.243m25.982-22.68-10.685-.628a1 1 0 0 0-.766.291L9.297 21.052a1 1 0 0 0 0 1.414L20.61 33.78a1 1 0 0 0 1.415 0l13.824-13.825a1 1 0 0 0 .291-.765l-.628-10.686a1 1 0 0 0-.94-.94Zm-6.874 7.729a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414Z"}),i.createElement("path",{fill:"currentColor",stroke:"none",d:"M27.697 15.292a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414Z"}))}var k=i.forwardRef(S);k.defaultProps={isIcon:!0},k.displayName="IconTags";var x=k,I=(n(74450),n(91862)),C=n(5001),T=n(64696);function D(){var e=(0,C.Z)(T.default);return i.createElement(a.Z,null,i.createElement(I.Z.Title,{style:{marginTop:0,marginBottom:16},heading:6},e["monitor.title.quickOperation"]),i.createElement(r.Z,{direction:"vertical",style:{width:"100%"},size:10},i.createElement(N.Z,{long:!0,icon:i.createElement(x,null)},e["monitor.quickOperation.changeClarity"]),i.createElement(N.Z,{long:!0,icon:i.createElement(w,null)},e["monitor.quickOperation.switchStream"]),i.createElement(N.Z,{long:!0,icon:i.createElement(E,null)},e["monitor.quickOperation.removeClarity"]),i.createElement(N.Z,{long:!0,icon:i.createElement(f,null)},e["monitor.quickOperation.pushFlowGasket"])))}},77538:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});n(47872);var a=n(82357),r=(n(35749),n(29413)),l=(n(2373),n(39230)),o=(n(70198),n(51993)),i=(n(74450),n(91862)),c=n(4519),s=n(5001),u=n(64696);function m(){var e=(0,s.Z)(u.default);return c.createElement(a.Z,null,c.createElement(i.Z.Title,{style:{marginTop:0,marginBottom:16},heading:6},e["monitor.title.studioInfo"]),c.createElement(l.Z,{layout:"vertical"},c.createElement(l.Z.Item,{label:e["monitor.studioInfo.label.studioTitle"],required:!0},c.createElement(o.Z,{placeholder:"\u738b\u7acb\u7fa4".concat(e["monitor.studioInfo.placeholder.studioTitle"])})),c.createElement(l.Z.Item,{label:e["monitor.studioInfo.label.onlineNotification"],required:!0},c.createElement(o.Z.TextArea,null)),c.createElement(l.Z.Item,{label:e["monitor.studioInfo.label.studioCategory"],required:!0},c.createElement(o.Z.Search,null)),c.createElement(l.Z.Item,{label:e["monitor.studioInfo.label.studioCategory"],required:!0},c.createElement(o.Z.Search,null))),c.createElement(r.Z,{type:"primary"},"\u66f4\u65b0"))}},97973:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});n(47872);var a=n(82357),r=(n(79606),n(7424)),l=(n(58186),n(3024)),o=(n(63793),n(79721)),i=(n(74450),n(91862)),c=n(4519),s=n(5001),u=n(64696);function m(){var e=(0,s.Z)(u.default),t=[{label:c.createElement("span",null,c.createElement(i.Z.Text,{style:{paddingRight:8}},e["monitor.studioStatus.mainstream"]),e["monitor.studioStatus.bitRate"]),value:"6 Mbps"},{label:e["monitor.studioStatus.frameRate"],value:"60"},{label:c.createElement("span",null,c.createElement(i.Z.Text,{style:{paddingRight:8}},e["monitor.studioStatus.hotStandby"]),e["monitor.studioStatus.bitRate"]),value:"6 Mbps"},{label:e["monitor.studioStatus.frameRate"],value:"60"},{label:c.createElement("span",null,c.createElement(i.Z.Text,{style:{paddingRight:8}},e["monitor.studioStatus.coldStandby"]),e["monitor.studioStatus.bitRate"]),value:"6 Mbps"},{label:e["monitor.studioStatus.frameRate"],value:"60"}],n=[{label:e["monitor.studioStatus.line"],value:"\u70ed\u5907"},{label:"CDN",value:"KS"},{label:e["monitor.studioStatus.play"],value:"FLV"},{label:e["monitor.studioStatus.pictureQuality"],value:"\u539f\u753b"}];return c.createElement(a.Z,null,c.createElement(l.Z,{align:"start"},c.createElement(i.Z.Title,{style:{marginTop:0,marginBottom:16},heading:6},e["monitor.studioStatus.title.studioStatus"]),c.createElement(o.Z,{color:"green"},e["monitor.studioStatus.smooth"])),c.createElement(r.Z,{colon:": ",layout:"horizontal",data:t,column:2}),c.createElement(i.Z.Title,{style:{marginBottom:16},heading:6},e["monitor.studioStatus.title.pictureInfo"]),c.createElement(r.Z,{colon:": ",layout:"horizontal",data:n,column:2}))}},13574:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});n(47872);var a=n(82357),r=(n(58186),n(3024)),l=(n(4525),n(32408)),o=n(23116),i=(n(43570),n(95792)),c=(n(74450),n(91862)),s=n(4519),u=n(5001),m=n(64696),d=n(4469);function f(e){var t=(0,u.Z)(m.default),n=e.userInfo;return s.createElement(a.Z,null,s.createElement(i.Z.Row,null,s.createElement(i.Z.Col,{span:16},s.createElement(c.Z.Title,{style:{marginTop:0,marginBottom:16},heading:6},t["monitor.title.studioPreview"])),s.createElement(i.Z.Col,{span:8,style:{textAlign:"right"}},s.createElement(o.Z,null))),s.createElement("div",{className:d.default["studio-wrapper"]},s.createElement("img",{src:"http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/c788fc704d32cf3b1136c7d45afc2669.png~tplv-uwbnlip3yd-webp.webp",className:d.default["studio-preview"]}),s.createElement("div",{className:d.default["studio-bar"]},n&&s.createElement("div",null,s.createElement(r.Z,{size:12},s.createElement(l.Z,{size:24},s.createElement("img",{src:n.avatar})),s.createElement(c.Z.Text,null,n.name,t["monitor.studioPreview.studio"]))),s.createElement(c.Z.Text,{type:"secondary"},"3,6000 ",t["monitor.studioPreview.watching"]))))}},7424:function(e,t,n){var a=n(4519),r=n(18707),l=n(75624),o=n(77084),i=n(34799),c=n(6431),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},u=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,l=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)o.push(a.value)}catch(i){r={error:i}}finally{try{a&&!a.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return o},m=function(e){return(0,i.kJ)(e)?e.reduce((function(e,t){return e+(t.span||1)}),0):0},d={layout:"horizontal",column:3,tableLayout:"auto"};function f(e){var t,n=(0,a.useContext)(l.E_),f=n.getPrefixCls,p=n.componentConfig,v=n.rtl,b=(0,c.Z)(e,d,null===p||void 0===p?void 0:p.Descriptions),y=b.style,E=b.className,g=b.column,h=b.title,Z=b.data,O=b.border,w=b.labelStyle,N=b.valueStyle,P=b.colon,j=b.layout,S=b.size,k=b.tableLayout,x=f("descriptions"),I=u((0,a.useState)(),2),C=I[0],T=I[1],D=(0,a.useRef)(null);(0,a.useEffect)((function(){return D.current=o.ZP.subscribe((function(e){for(var t=0;t<o.c4.length;t++){var n=o.c4[t];if(e[n]){T(n);break}}})),function(){o.ZP.unsubscribe(D.current)}}),[]);var R=3;(0,i.Kn)(g)&&(R=g[C]||3),(0,i.hj)(g)&&g>0&&(R=g);var M=[];if((0,i.kJ)(Z)&&Z.length>0&&R){Z.forEach((function(e){var t=M[M.length-1],n=m(t);0===n||n===R?M.push([s(s({},e),{span:e.span?e.span>R?R:e.span:1})]):t.push(s(s({},e),{span:e.span?e.span+n>R?R-n:e.span:1}))}));var z=M[M.length-1],L=m(z);L<R&&(z[z.length-1].span=z[z.length-1].span+R-L)}function q(e,t){return"inline-vertical"===j||"inline-horizontal"===j?function(e,t){return a.createElement("tr",{key:t,className:x+"-row"},e.map((function(e,t){var n=e.span>1?{colSpan:e.span}:{};return a.createElement("td",s({key:e.key||t},n,{className:x+"-item"}),a.createElement("div",{className:x+"-item-label-inline",style:w},e.label,P),a.createElement("div",{className:x+"-item-value-inline",style:N},e.value))})))}(e,t):"vertical"===j?function(e,t){return a.createElement(a.Fragment,{key:t},a.createElement("tr",{className:x+"-row"},e.map((function(e,t){var n=e.span>1?{colSpan:e.span}:{};return a.createElement("td",s({key:(e.key||t)+"_label",className:x+"-item-label"},n,{style:w}),e.label,P)}))),a.createElement("tr",{className:x+"-row"},e.map((function(e,t){var n=e.span>1?{colSpan:e.span}:{};return a.createElement("td",s({key:(e.key||t)+"_value",className:x+"-item-value"},n,{style:N}),e.value)}))))}(e,t):function(e,t){return a.createElement("tr",{key:t,className:x+"-row"},e.map((function(e,t){var n=e.span>1?{colSpan:2*e.span-1}:{};return a.createElement(a.Fragment,{key:e.key||t},a.createElement("td",{className:x+"-item-label",style:w},e.label,P),a.createElement("td",s({className:x+"-item-value"},n,{style:N}),e.value))})))}(e,t)}var B=(0,r.Z)(x,((t={})[x+"-border"]=O,t[x+"-layout-"+j]=j,t[x+"-size-"+S]=S,t[x+"-table-layout-fixed"]="fixed"===k,t[x+"-rtl"]=v,t),E);return a.createElement("div",{className:B,style:y},h&&a.createElement("div",{className:x+"-title"},h),a.createElement("div",{className:x+"-body"},a.createElement("table",{className:x+"-table",cellPadding:0,cellSpacing:0},a.createElement("tbody",null,M.map((function(e,t){return q(e,t)}))))))}f.displayName="Descriptions",t.Z=f},79606:function(e,t,n){n(75009)}}]);
//# sourceMappingURL=4421.679e709a.chunk.js.map