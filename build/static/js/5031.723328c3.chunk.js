"use strict";(self.webpackChunkarco_design_pro=self.webpackChunkarco_design_pro||[]).push([[5031],{75031:function(e,r,n){n.r(r),n.d(r,{Linter:function(){return c}});var t=n(15861),i=n(15671),o=n(43144),s=n(87757),a=n.n(s),u=n(11422),d=n(31740),l=n(32048),c=function(){function e(r){var n=this;(0,i.Z)(this,e),this.disposables=[],this.listener=Object.create(null),this.languageId=r;var t=function(e){var r,t;if(((null===(r=e.getModeId)||void 0===r?void 0:r.call(e))||(null===(t=e.getLanguageId)||void 0===t?void 0:t.call(e)))===n.languageId){var i=(0,l.debounce)(n.doValidate,500);n.listener[e.uri.toString()]=e.onDidChangeContent((function(){i(e)})),n.doValidate(e)}},o=function(e){u.editor.setModelMarkers(e,"ruleLint",[]);var r=e.uri.toString(),t=n.listener[r];t&&(t.dispose(),delete n.listener[r])};this.disposables.push(u.editor.onDidCreateModel(t)),this.disposables.push(u.editor.onWillDisposeModel(o)),this.disposables.push(u.editor.onDidChangeModelLanguage((function(e){o(e.model),t(e.model)}))),this.disposables.push({dispose:function(){for(var e in n.listener)n.listener[e].dispose()}}),u.editor.getModels().forEach(t)}return(0,o.Z)(e,[{key:"dispose",value:function(){this.disposables.forEach((function(e){return null===e||void 0===e?void 0:e.dispose()})),this.disposables=[]}},{key:"doValidate",value:function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.validate)(r);case 2:(n=e.sent)&&u.editor.setModelMarkers(r,"ruleLint",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}]),e}()},31740:function(e,r,n){n.r(r),n.d(r,{validate:function(){return p}});var t=n(1413),i=n(15861),o=n(87757),s=n.n(o),a=n(63399),u=n(11422),d=n(28438),l=n(57307),c=function(e){var r;return{startLineNumber:e.line,startColumn:e.charPositionInLine+1,endLineNumber:e.line,endColumn:e.charPositionInLine+((null===(r=e.text)||void 0===r?void 0:r.length)||0)+1}},p=function(){var e=(0,i.Z)(s().mark((function e(r){var n,i,o,p,v;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="",e.prev=1,n=r.getValue(),console.log(n),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),u.editor.setModelMarkers(r,"ruleLint",[]),e.abrupt("return");case 10:if(n.trim()){e.next=13;break}return u.editor.setModelMarkers(r,"ruleLint",[]),e.abrupt("return");case 13:return i=(0,d.createLexer)(n),o=new a.CommonTokenStream(i),p=new l.Bi(o),i.removeErrorListeners(),p.removeErrorListeners(),v=[],i.addErrorListener({syntaxError:function(e,r,n,t,i,o){v.push({message:i,severity:u.MarkerSeverity.Error,source:"validator",startLineNumber:n,startColumn:t+1,endLineNumber:n,endColumn:t+2,code:"lexer"})}}),p.addErrorListener({syntaxError:function(e,r,n,i,o,s){r&&v.push((0,t.Z)({message:o,severity:u.MarkerSeverity.Error,source:"validator",code:"parser"},c(r)))}}),p.tsl(),e.abrupt("return",v);case 23:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=5031.723328c3.chunk.js.map