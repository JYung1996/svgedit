function _AwaitValue(e){this.wrapped=e}function _AsyncGenerator(e){var t,r;function resume(t,r){try{var n=e[t](r),a=n.value,i=a instanceof _AwaitValue;Promise.resolve(i?a.wrapped:a).then((function(e){i?resume("return"===t?"return":"next",e):settle(n.done?"return":"normal",e)}),(function(e){resume("throw",e)}))}catch(e){settle("throw",e)}}function settle(e,n){switch(e){case"return":t.resolve({value:n,done:!0});break;case"throw":t.reject(n);break;default:t.resolve({value:n,done:!1})}(t=t.next)?resume(t.key,t.arg):r=null}this._invoke=function send(e,n){return new Promise((function(a,i){var o={key:e,arg:n,resolve:a,reject:i,next:null};r?r=r.next=o:(t=r=o,resume(e,n))}))},"function"!=typeof e.return&&(this.return=void 0)}function asyncGeneratorStep(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,n,a,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,n,a,_next,_throw,"throw",e)}_next(void 0)}))}}"function"==typeof Symbol&&Symbol.asyncIterator&&(_AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}),_AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},_AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},_AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)};
/**
 * @file ext-markers.js
 *
 * @license Apache-2.0
 *
 * @copyright 2010 Will Schleter based on ext-arrows.js by Copyright(c) 2010 Alexis Deveria
 *
 * This extension provides for the addition of markers to the either end
 * or the middle of a line, polyline, path, polygon.
 *
 * Markers may be either a graphic or arbitary text
 *
 * to simplify the coding and make the implementation as robust as possible,
 * markers are not shared - every object has its own set of markers.
 * this relationship is maintained by a naming convention between the
 * ids of the markers and the ids of the object
 *
 * The following restrictions exist for simplicty of use and programming
 *    objects and their markers to have the same color
 *    marker size is fixed
 *    text marker font, size, and attributes are fixed
 *    an application specific attribute - se_type - is added to each marker element
 *        to store the type of marker
 *
 * @todo
 *    remove some of the restrictions above
 *    add option for keeping text aligned to horizontal
 *    add support for dimension extension lines
 *
*/
var e={name:"markers",init:function init(e){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function _callee3(){var r,n,a,i,o,s,l,u,c,m,d,h,f,p,_,k,v,g,b,y,x,w,A,L,C,S;return regeneratorRuntime.wrap((function _callee3$(G){for(;;)switch(G.prev=G.next){case 0:return C=function _buildButtonList(){var e=[];return a.each(s,(function(t,r){var n=r+"_marker_list",a=!0;Object.keys(c).forEach((function(t){var i=L(String(t));e.push({id:u+r+"_"+t,svgicon:t,icon:"markers-"+t+".png",title:i,type:"context",events:{click:w},panel:"marker_panel",list:n,isDefault:a}),a=!1}))})),e},L=function _getTitle(e){var t=r.langList.find((function(t){return t.id===e}));return t?t.title:e},A=function _setArrowFromButton3(){return(A=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(e){var t,r,n;return regeneratorRuntime.wrap((function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.id.split("_"),r=t[1],n=t[2],t[3]&&(n+="_"+t[3]),"textmarker"===n){e.next=8;break}b(r,"\\"+n),e.next=10;break;case 8:return e.next=10,y(r);case 10:case"end":return e.stop()}}),_callee2,this)})))).apply(this,arguments)},w=function _setArrowFromButton2(e){return A.apply(this,arguments)},x=function _showTextPrompt3(){return(x=_asyncToGenerator(regeneratorRuntime.mark((function _callee(e){var t,r;return regeneratorRuntime.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return"\\"===(t=a("#"+e+"_marker").val()).substr(0,1)&&(t=""),n.next=4,a.prompt("Enter text for "+e+" marker",t);case 4:(r=n.sent)&&b(e,r);case 6:case"end":return n.stop()}}),_callee)})))).apply(this,arguments)},y=function _showTextPrompt2(e){return x.apply(this,arguments)},b=function _triggerTextEntry(e,t){a("#"+e+"_marker").val(t),a("#"+e+"_marker").change()},g=function _updateReferences(e){a.each(s,(function(t,r){var n=l+r+"_"+e.id,o="marker-"+r,s=m(e,o);if(s&&s.attributes.se_type){var u=e.getAttribute(o);if(u){var c=e.id.length,d=u.substr(-c-1,c);if(e.id!==d){var f=a("#"+r+"_marker").attr("value");p(n,f),i.changeSelectedAttribute(o,"url(#"+n+")"),"line"===e.tagName&&"mid"===r&&(e=_(e)),i.call("changed",h)}}}}))},v=function _colorChanged(e){var t=e.getAttribute("stroke");a.each(s,(function(r,n){var a=m(e,"marker-"+n);if(a&&a.attributes.se_type){var i=a.lastElementChild;if(i){var o=i.getAttribute("fill"),s=i.getAttribute("stroke");o&&"none"!==o&&i.setAttribute("fill",t),s&&"none"!==s&&i.setAttribute("stroke",t)}}}))},k=function _setMarker(){var e={start_marker:"start",mid_marker:"mid",end_marker:"end"}[this.id],t="marker-"+e,r=h[0],n=m(r,t);n&&a(n).remove(),r.removeAttribute(t);var o=this.value;if(""===o&&(o="\\nomarker"),"\\nomarker"===o)return d(e,o),void i.call("changed",h);var s=l+e+"_"+r.id;p(s,o),i.changeSelectedAttribute(t,"url(#"+s+")"),"line"===r.tagName&&"mid"===e&&_(r),i.call("changed",h),d(e,o)},_=function _convertline(t){if("line"!==t.tagName)return t;var r=Number(t.getAttribute("x1")),n=Number(t.getAttribute("x2")),l=Number(t.getAttribute("y1")),u=Number(t.getAttribute("y2")),c=t.id,m=o({element:"polyline",attr:{points:r+","+l+(" "+(r+n)/2+","+(l+u)/2+" ")+n+","+u,stroke:t.getAttribute("stroke"),"stroke-width":t.getAttribute("stroke-width"),fill:"none",opacity:t.getAttribute("opacity")||1}});a.each(s,(function(e,r){var n="marker-"+r;t.getAttribute(n)&&m.setAttribute(n,t.getAttribute(n))}));var d=new e.BatchCommand;return d.addSubCommand(new e.RemoveElementCommand(t,t.parentNode)),d.addSubCommand(new e.InsertElementCommand(m)),a(t).after(m).remove(),i.clearSelection(),m.id=c,i.addToSelection([m]),e.addCommandToHistory(d),m},p=function _addMarker(e,t){var r=i.getElem(e);if(!r&&""!==t&&"\\nomarker"!==t){var n,a=h[0].getAttribute("stroke"),s=50,l=50,u="0 0 100 100",m=5,d=5;if(n="\\"===t.substr(0,1)?t.substr(1):"textmarker",c[n]){if(r=o({element:"marker",attr:{id:e,markerUnits:"strokeWidth",orient:"auto",style:"pointer-events:none",se_type:n}}),"textmarker"!==n){var f=o(c[n]),p="_o"===n.substr(-2)?"none":a;f.setAttribute("fill",p),f.setAttribute("stroke",a),f.setAttribute("stroke-width",10),r.append(f)}else{var _=o(c[n]);_.textContent=t;var k=_.getBBox(),v=k;v.x=0,v.y=0,v.width+=2,v.height+=2,_.setAttribute("x",1),_.setAttribute("y",v.height-1-k.height/4),_.setAttribute("fill",a),s=v.width/2+1,l=v.height/2+1,u=v.x+" "+v.y+" "+v.width+" "+v.height,m=v.width/10,d=v.height/10;var g=o({element:"rect",attr:{x:v.x,y:v.y,width:v.width,height:v.height,fill:"#ffffff",stroke:"none","stroke-width":0}});r.setAttribute("orient",0),r.append(g,_)}return r.setAttribute("viewBox",u),r.setAttribute("markerWidth",m),r.setAttribute("markerHeight",d),r.setAttribute("refX",s),r.setAttribute("refY",l),i.findDefs().append(r),r}}},f=function _showPanel(e){if(a("#marker_panel").toggle(e),e){var t,r,n=h[0];a.each(s,(function(e,i){var o=m(n,"marker-"+i),s=a("#"+i+"_marker");if(o){if(!o.attributes.se_type)return;t="\\"+o.attributes.se_type.textContent,r=t,"\\textmarker"===t?t=o.lastChild.textContent:s.hide()}else r=t="\\nomarker",s.hide();s.val(t),d(i,r)}))}},d=function _setIcon(e,t){"\\"!==t.substr(0,1)&&(t="\\textmarker");var r="#"+u+e+"_"+t.substr(1);n.setIcon("#cur_"+e+"_marker_list",a(r).children()),a(r).addClass("current").siblings().removeClass("current")},m=function _getLinked(e,t){var r=e.getAttribute(t);if(!r)return null;var n=r.match(/\(#(.*)\)/);return n&&2===n.length?i.getElem(n[1]):null},G.next=17,e.importLocale();case 17:return r=G.sent,n=t,a=e.$,i=n.canvas,o=i.addSVGElementFromJson,s=["start","mid","end"],l="se_marker_",u="mkr_",c={nomarker:{},leftarrow:{element:"path",attr:{d:"M0,50 L100,90 L70,50 L100,10 Z"}},rightarrow:{element:"path",attr:{d:"M100,50 L0,90 L30,50 L0,10 Z"}},textmarker:{element:"text",attr:{x:0,y:0,"stroke-width":0,stroke:"none","font-size":75,"font-family":"serif","text-anchor":"left","xml:space":"preserve"}},forwardslash:{element:"path",attr:{d:"M30,100 L70,0"}},reverseslash:{element:"path",attr:{d:"M30,0 L70,100"}},verticalslash:{element:"path",attr:{d:"M50,0 L50,100"}},box:{element:"path",attr:{d:"M20,20 L20,80 L80,80 L80,20 Z"}},star:{element:"path",attr:{d:"M10,30 L90,30 L20,90 L50,10 L80,90 Z"}},xmark:{element:"path",attr:{d:"M20,80 L80,20 M80,80 L20,20"}},triangle:{element:"path",attr:{d:"M10,80 L50,20 L80,80 Z"}},mcircle:{element:"circle",attr:{r:30,cx:50,cy:50}}},["leftarrow","rightarrow","box","star","mcircle","triangle"].forEach((function(e){c[e+"_o"]=c[e]})),S=[{type:"input",panel:"marker_panel",id:"start_marker",size:3,events:{change:k}},{type:"button-select",panel:"marker_panel",id:"start_marker_list",colnum:3,events:{change:w}},{type:"input",panel:"marker_panel",id:"mid_marker",defval:"",size:3,events:{change:k}},{type:"button-select",panel:"marker_panel",id:"mid_marker_list",colnum:3,events:{change:w}},{type:"input",panel:"marker_panel",id:"end_marker",size:3,events:{change:k}},{type:"button-select",panel:"marker_panel",id:"end_marker_list",colnum:3,events:{change:w}}],G.abrupt("return",{name:r.name,svgicons:"markers-icons.xml",callback:function callback(){a("#marker_panel").addClass("toolset").hide()},addLangData:function addLangData(e){e.importLocale,e.lang;return{data:r.langList}},selectedChanged:function selectedChanged(e){for(var t=["line","path","polyline","polygon"],r=(h=e.elems).length;r--;){var n=h[r];n&&t.includes(n.tagName)&&e.selectedElement&&!e.multiselected?f(!0):f(!1)}},elementChanged:function elementChanged(e){var t=e.elems[0];t&&(t.getAttribute("marker-start")||t.getAttribute("marker-mid")||t.getAttribute("marker-end"))&&(v(t),g(t))},buttons:C(),context_tools:r.contextTools.map((function(e,t){return Object.assign(S[t],e)}))});case 29:case"end":return G.stop()}}),_callee3)})))()}};export default e;
//# sourceMappingURL=ext-markers.js.map
