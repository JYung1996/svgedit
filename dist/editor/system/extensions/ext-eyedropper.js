System.register([],(function(e){"use strict";return{execute:function(){function _AwaitValue(e){this.wrapped=e}function _AsyncGenerator(e){var t,r;function resume(t,r){try{var n=e[t](r),o=n.value,i=o instanceof _AwaitValue;Promise.resolve(i?o.wrapped:o).then((function(e){i?resume("return"===t?"return":"next",e):settle(n.done?"return":"normal",e)}),(function(e){resume("throw",e)}))}catch(e){settle("throw",e)}}function settle(e,n){switch(e){case"return":t.resolve({value:n,done:!0});break;case"throw":t.reject(n);break;default:t.resolve({value:n,done:!1})}(t=t.next)?resume(t.key,t.arg):r=null}this._invoke=function send(e,n){return new Promise((function(o,i){var a={key:e,arg:n,resolve:o,reject:i,next:null};r?r=r.next=a:(t=r=a,resume(e,n))}))},"function"!=typeof e.return&&(this.return=void 0)}function asyncGeneratorStep(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}"function"==typeof Symbol&&Symbol.asyncIterator&&(_AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}),_AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},_AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},_AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)};
/**
       * @file ext-eyedropper.js
       *
       * @license MIT
       *
       * @copyright 2010 Jeff Schiller
       *
       */
e("default",{name:"eyedropper",init:function init(e){var t=this;return function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,n,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var r,n,o,i,a,s,c,u,l;return regeneratorRuntime.wrap((function _callee$(p){for(;;)switch(p.prev=p.next){case 0:return u=function _getStyle(e){if("eyedropper"!==a.getMode()){var t=o("#tool_eyedropper"),r=null;e.multiselected||!e.elems[0]||["svg","g","use"].includes(e.elems[0].nodeName)?t.addClass("disabled"):(r=e.elems[0],t.removeClass("disabled"),c.fillPaint=r.getAttribute("fill")||"black",c.fillOpacity=r.getAttribute("fill-opacity")||1,c.strokePaint=r.getAttribute("stroke"),c.strokeOpacity=r.getAttribute("stroke-opacity")||1,c.strokeWidth=r.getAttribute("stroke-width"),c.strokeDashArray=r.getAttribute("stroke-dasharray"),c.strokeLinecap=r.getAttribute("stroke-linecap"),c.strokeLinejoin=r.getAttribute("stroke-linejoin"),c.opacity=r.getAttribute("opacity")||1)}},p.next=3,e.importLocale();case 3:return r=p.sent,n=t,o=e.$,i=e.ChangeElementCommand,a=n.canvas,s=function addToHistory(e){a.undoMgr.addCommandToHistory(e)},c={fillPaint:"red",fillOpacity:1,strokePaint:"black",strokeOpacity:1,strokeWidth:5,strokeDashArray:null,opacity:1,strokeLinecap:"butt",strokeLinejoin:"miter"},l=[{id:"tool_eyedropper",icon:"eyedropper.png",type:"mode",events:{click:function click(){a.setMode("eyedropper")}}}],p.abrupt("return",{name:r.name,svgicons:"eyedropper-icon.xml",buttons:r.buttons.map((function(e,t){return Object.assign(l[t],e)})),selectedChanged:u,elementChanged:u,mouseDown:function mouseDown(e){if("eyedropper"===a.getMode()){var t=e.event.target;if(!["svg","g","use"].includes(t.nodeName)){var r={},n=function change(e,t,n){r[t]=e.getAttribute(t),e.setAttribute(t,n)};c.fillPaint&&n(t,"fill",c.fillPaint),c.fillOpacity&&n(t,"fill-opacity",c.fillOpacity),c.strokePaint&&n(t,"stroke",c.strokePaint),c.strokeOpacity&&n(t,"stroke-opacity",c.strokeOpacity),c.strokeWidth&&n(t,"stroke-width",c.strokeWidth),c.strokeDashArray&&n(t,"stroke-dasharray",c.strokeDashArray),c.opacity&&n(t,"opacity",c.opacity),c.strokeLinecap&&n(t,"stroke-linecap",c.strokeLinecap),c.strokeLinejoin&&n(t,"stroke-linejoin",c.strokeLinejoin),s(new i(t,r))}}}});case 8:case"end":return p.stop()}}),_callee)})))()}})}}}));
