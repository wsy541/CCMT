"use strict";(self.webpackChunkarco_design_pro=self.webpackChunkarco_design_pro||[]).push([[4966,7832,7159,1406],{47563:function(e,t,n){n.r(t);var a=n(29439),r=(n(9544),n(21680)),i=(n(48774),n(11426)),o=(n(47872),n(82357)),l=(n(37801),n(73458)),c=(n(58186),n(3024)),s=(n(35749),n(29413)),u=(n(43570),n(95792)),m=(n(74450),n(91862)),f=n(4519),d=n(56787),p=n.n(d),y=n(5001),v=n(70627),b=n(22239),g=n(61406);n(77159);t.default=function(){var e=(0,y.Z)(v.default),t=(0,f.useState)(!1),n=(0,a.Z)(t,2),d=n[0],E=n[1],h=(0,f.useState)({status:1}),x=(0,a.Z)(h,2),Z=x[0],P=x[1],N=(0,f.useState)(!1),O=(0,a.Z)(N,2),C=O[0],j=O[1],w=(0,f.useState)({}),S=(0,a.Z)(w,2),k=S[0],R=S[1],I=(0,f.useState)(!1),z=(0,a.Z)(I,2),D=z[0],T=z[1],_=(0,f.useState)([]),A=(0,a.Z)(_,2),B=A[0],q=A[1];return(0,f.useEffect)((function(){E(!0),p().get("/api/basicProfile").then((function(e){P(e.data||{})})).finally((function(){E(!1)})),j(!0),p().get("/api/basicProfile").then((function(e){R(e.data||{})})).finally((function(){j(!1)})),T(!0),p().get("/api/adjustment").then((function(e){q(e.data)})).finally((function(){T(!1)}))}),[]),f.createElement("div",{className:g.default.container},f.createElement(o.Z,null,f.createElement(u.Z.Row,{justify:"space-between",align:"center"},f.createElement(u.Z.Col,{span:16},f.createElement(m.Z.Title,{heading:6},e["basicProfile.title.form"])),f.createElement(u.Z.Col,{span:8,style:{textAlign:"right"}},f.createElement(c.Z,null,f.createElement(s.Z,null,e["basicProfile.cancel"]),f.createElement(s.Z,{type:"primary"},e["basicProfile.goBack"])))),f.createElement(l.Z,{current:Z.status,lineless:!0,className:g.default.steps},f.createElement(l.Z.Step,{title:e["basicProfile.steps.commit"]}),f.createElement(l.Z.Step,{title:e["basicProfile.steps.approval"]}),f.createElement(l.Z.Step,{title:e["basicProfile.steps.finish"]}))),f.createElement(b.default,{title:e["basicProfile.title.currentParams"],data:Z,type:"current",loading:d}),f.createElement(b.default,{title:e["basicProfile.title.originParams"],data:k,type:"origin",loading:C}),f.createElement(o.Z,null,f.createElement(m.Z.Title,{heading:6},e["basicProfile.adjustment.record"]),f.createElement(r.Z,{loading:D,data:B,columns:[{dataIndex:"contentId",title:e["basicProfile.adjustment.contentId"]},{dataIndex:"content",title:e["basicProfile.adjustment.content"]},{dataIndex:"status",title:e["basicProfile.adjustment.status"],render:function(t){return t?f.createElement(i.Z,{status:"success",text:e["basicProfile.adjustment.success"]}):f.createElement(i.Z,{status:"processing",text:e["basicProfile.adjustment.waiting"]})}},{dataIndex:"updatedTime",title:e["basicProfile.adjustment.updatedTime"]},{title:e["basicProfile.adjustment.operation"],headerCellStyle:{paddingLeft:"15px"},render:function(){return f.createElement(s.Z,{type:"text"},e["basicProfile.adjustment.operation.view"])}}]})))}},77159:function(e,t,n){n.r(t);var a=n(70782),r=n.n(a);(0,n(52239).Z)({setup:function(){r().mock(new RegExp("/api/basicProfile"),(function(){return{status:2,video:{mode:"\u81ea\u5b9a\u4e49",acquisition:{resolution:"720*1280",frameRate:15},encoding:{resolution:"720*1280",rate:{min:300,max:800,default:1500},frameRate:15,profile:"high"}},audio:{mode:"\u81ea\u5b9a\u4e49",acquisition:{channels:8},encoding:{channels:8,rate:128,profile:"ACC-LC"}}}})),r().mock(new RegExp("/api/adjustment"),(function(){return new Array(2).fill("0").map((function(){return{contentId:"".concat(r().Random.pick(["\u89c6\u9891\u7c7b","\u97f3\u9891\u7c7b"])).concat(r().Random.natural(1e3,9999)),content:"\u89c6\u9891\u53c2\u6570\u53d8\u66f4\uff0c\u97f3\u9891\u53c2\u6570\u53d8\u66f4",status:r().Random.natural(0,1),updatedTime:r().Random.datetime("yyyy-MM-dd HH:mm:ss")}}))}))}})},11426:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(4519),r=n(26678),i=n(18707),o=n(75624),l=n(34799),c=n(14328),s=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(l){r={error:l}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o};function u(e){var t,n=e.prefixCls,o=e.maxCount,l=e.count,u=e.className,m=e.style,f=s((0,a.useState)(!1),2),d=f[0],p=f[1],y=l!==(0,c.Z)(l);return a.createElement(r.Z,{classNames:"badge-zoom",in:l>0,timeout:300,appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEntered:function(){p(!0)}},a.createElement("span",{className:u,style:m},a.createElement("span",{key:l,className:(0,i.Z)((t={},t[n+"-number-text"]=d&&y,t))},o&&l>o?o+"+":l)))}var m=n(6431),f=function(){return f=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},f.apply(this,arguments)},d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},p=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(l){r={error:l}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o},y=["red","orangered","orange","gold","lime","green","cyan","arcoblue","purple","pinkpurple","magenta","gray"],v={count:0,maxCount:99};var b=(0,a.forwardRef)((function(e,t){var n,c=(0,a.useContext)(o.E_),s=c.getPrefixCls,b=c.componentConfig,g=c.rtl,E=(0,m.Z)(e,v,null===b||void 0===b?void 0:b.Badge),h=E.count,x=E.text,Z=E.className,P=E.dotClassName,N=E.dot,O=E.maxCount,C=E.color,j=E.dotStyle,w=E.offset,S=E.style,k=E.status,R=E.children,I=d(E,["count","text","className","dotClassName","dot","maxCount","color","dotStyle","offset","style","status","children"]),z=s("badge"),D=f({},j||{}),T=p(w||[],2),_=T[0],A=T[1];return _&&(D.marginRight=-_),A&&(D.marginTop=A),a.createElement("span",f({className:(0,i.Z)(z,(n={},n[z+"-status"]=k,n[z+"-no-children"]=!R,n[z+"-rtl"]=g,n),Z),ref:t,style:S},I),R,function(){var e,t;if((0,l.Kn)(h))return a.createElement("span",{className:(0,i.Z)(z+"-custom-dot",P),style:D},h);var n=!C||y.indexOf(C)>-1?{}:{backgroundColor:C};return!x||C||k?k||C&&h<=0?a.createElement("span",{className:z+"-status-wrapper"},a.createElement("span",{className:(0,i.Z)(z+"-status-dot",(e={},e[z+"-status-"+k]=k,e[z+"-color-"+C]=C,e),P),style:f(f({},n),D)}),x&&a.createElement("span",{className:z+"-status-text"},x)):(N||C)&&h>0?a.createElement(r.Z,{classNames:"badge-zoom",in:N||!!C,timeout:200,appear:!0,mountOnEnter:!0,unmountOnExit:!0},a.createElement("span",{className:(0,i.Z)(z+"-dot",(t={},t[z+"-color-"+C]=C,t),P),style:f(f({},n),D)})):a.createElement(u,{prefixCls:z,className:(0,i.Z)(z+"-number",P),style:f(f({},n),D),maxCount:O,count:h}):a.createElement("span",{className:(0,i.Z)(z+"-text",P),style:D},x)}())}));b.displayName="Badge";var g=b},48774:function(e,t,n){n(75009)},73458:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(4519),r=n(18707),i=n(98537),o=n(27585);var l=(0,a.forwardRef)((function(e,t){var n,l,c=e.style,s=e.className,u=e.prefixCls,m=e.index,f=void 0===m?1:m,d=e.current,p=void 0===d?1:d,y=e.status,v=e.title,b=e.description,g=e.icon,E=e.nextStepError,h=e.type,x=e.customDot,Z=e.labelPlacement,P=e.disabled,N=e.onClick,O=e.onChange,C=e.direction,j=e.id,w=e.lineless;y?l=y:(p<f&&(l="wait"),p===f&&(l="process"),p>f&&(l="finish"));var S=(0,r.Z)(u+"-item",u+"-item-"+l,((n={})[u+"-item-custom"]=!!g,n[u+"-item-next-error"]=E,n[u+"-item-disabled"]=P,n[u+"-item-active"]=f===p,n),s),k=function(e){if("dot"===h)return null;var t=f;return g?t=g:"finish"===e?t=a.createElement(i.Z,null):"error"===e&&(t=a.createElement(o.Z,null)),a.createElement("div",{className:u+"-icon"},t)}(l),R=a.createElement("div",{className:u+"-item-icon"},k),I=x?x(R,{index:f,status:l,title:v,description:b}):R;return a.createElement("div",{ref:t,className:S,style:c,onClick:function(e){P||(O&&p!==f&&O(f,j),N&&N(f,j,e))}},!w&&("vertical"===Z||"vertical"===C)&&a.createElement("div",{className:u+"-item-tail"}),"arrow"!==h&&I,a.createElement("div",{className:u+"-item-content"},a.createElement("div",{className:u+"-item-title"},v),b&&a.createElement("div",{className:u+"-item-description"},b)))}));l.displayName="Step";var c=l,s=n(75624),u=n(6431),m=n(9485),f=function(){return f=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},f.apply(this,arguments)},d={current:1,type:"default",size:"default",direction:"horizontal",labelPlacement:"horizontal"};var p=(0,a.forwardRef)((function(e,t){var n,i=(0,a.useContext)(s.E_),o=i.getPrefixCls,l=i.componentConfig,c=i.rtl,p=(0,u.Z)(e,d,null===l||void 0===l?void 0:l.Steps),y=p.className,v=p.style,b=p.children,g=p.current,E=void 0===g?1:g,h=p.status,x=p.onChange,Z=p.type,P=p.size,N=p.direction,O=p.labelPlacement,C=p.customDot,j=p.lineless,w=o("steps"),S=O;"dot"===Z&&(S="vertical"===N?"horizontal":"vertical"),"navigation"===Z&&(S="horizontal");var k=N;"navigation"!==Z&&"arrow"!==Z||(k="horizontal");var R=(0,r.Z)(w,w+"-"+k,w+"-label-"+S,w+"-size-"+P,((n={})[w+"-change-onclick"]="function"===typeof x,n[w+"-mode-"+Z]="default"!==Z,n[w+"-lineless"]=j,n[w+"-rtl"]=c,n),y);return a.createElement("div",f({ref:t,style:v,className:R},(0,m.m)(p)),a.Children.toArray(b).filter((function(e){return e&&e.type&&"Step"===e.type.displayName})).map((function(e,t){if(t+=1,e){var n=f({prefixCls:w,type:Z,index:t,current:E,status:E===t?h:void 0,customDot:C,labelPlacement:S,direction:k,onChange:x,lineless:j},e.props);return"error"===h&&E===t+1&&(n.nextStepError=!0),a.cloneElement(e,n)}return null})))}));p.displayName="Steps",p.Step=c;var y=p},37801:function(e,t,n){n(75009)},98537:function(e,t,n){var a=n(87462),r=n(4942),i=n(4519),o=n(41506);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){var n=(0,i.useContext)(o.P).prefixCls,r=void 0===n?"arco":n,l=e.spin,s=e.className,u=c(c({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(s?s+" ":"").concat(r,"-icon ").concat(r,"-icon-check")});return l&&(u.className="".concat(u.className," ").concat(r,"-icon-loading")),delete u.spin,delete u.isIcon,i.createElement("svg",(0,a.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},u),i.createElement("path",{d:"M41.678 11.05 19.05 33.678 6.322 20.95"}))}var u=i.forwardRef(s);u.defaultProps={isIcon:!0},u.displayName="IconCheck",t.Z=u},61406:function(e,t,n){n.r(t),t.default={container:"container--ditxh",steps:"steps--q6i6E"}}}]);
//# sourceMappingURL=4966.a0c711c9.chunk.js.map