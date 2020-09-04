function _AwaitValue(t){this.wrapped=t}function _AsyncGenerator(t){var e,r;function resume(e,r){try{var n=t[e](r),o=n.value,a=o instanceof _AwaitValue;Promise.resolve(a?o.wrapped:o).then((function(t){a?resume("return"===e?"return":"next",t):settle(n.done?"return":"normal",t)}),(function(t){resume("throw",t)}))}catch(t){settle("throw",t)}}function settle(t,n){switch(t){case"return":e.resolve({value:n,done:!0});break;case"throw":e.reject(n);break;default:e.resolve({value:n,done:!1})}(e=e.next)?resume(e.key,e.arg):r=null}this._invoke=function send(t,n){return new Promise((function(o,a){var i={key:t,arg:n,resolve:o,reject:a,next:null};r?r=r.next=i:(e=r=i,resume(t,n))}))},"function"!=typeof t.return&&(this.return=void 0)}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}"function"==typeof Symbol&&Symbol.asyncIterator&&(_AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}),_AsyncGenerator.prototype.next=function(t){return this._invoke("next",t)},_AsyncGenerator.prototype.throw=function(t){return this._invoke("throw",t)},_AsyncGenerator.prototype.return=function(t){return this._invoke("return",t)};
/**
 * @file ext-connector.js
 *
 * @license MIT
 *
 * @copyright 2010 Alexis Deveria
 *
 */
var t={name:"connector",init:function init(t){var e=this;return function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function _next(t){asyncGeneratorStep(a,n,o,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(a,n,o,_next,_throw,"throw",t)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var r,n,o,a,i,s,c,u,l,d,f,h,g,m,v,_,p,b,y,x,k,w,A,S,B,E,I,N,G,M;return regeneratorRuntime.wrap((function _callee$(C){for(;;)switch(C.prev=C.next){case 0:return G=function _init(){a(b).find("*").each((function(){var t=this.getAttributeNS(p,"connector");if(t){this.setAttribute("class",l.substr(1));var e=t.split(" "),r=n.getStrokedBBox([o(e[0])]),i=n.getStrokedBBox([o(e[1])]);a(this).data("c_start",e[0]).data("c_end",e[1]).data("start_bb",r).data("end_bb",i),n.getEditorNS(!0)}}))},N=function _updateConnectors(t){if(I(t),x.length)for(var e=x.length;e--;){var r=x[e],o=r.connector,a=r.elem,i=r.is_start?"start":"end",s=n.getStrokedBBox([a]);s.x=r.start_x,s.y=r.start_y,d(o,i+"_bb",s),d(o,i+"_off");var c=r.is_start?"end":"start",u=d(o,c+"_bb"),l=u.x+u.width/2,f=u.y+u.height/2,h=w(l,f,s,A(i,o));B(o,r.is_start?0:"end",h.x,h.y,!0);var g=w(h.x,h.y,d(o,c+"_bb"),A(c,o));if(B(o,r.is_start?"end":0,g.x,g.y,!0),navigator.userAgent.includes("AppleWebKit")){for(var m=o.points,v=m.numberOfItems,_=[],p=0;p<v;p++)h=m.getItem(p),_[p]=h.x+","+h.y;o.setAttribute("points",_.join(" "))}}},I=function _findConnectors(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=a(b).find(l);x=[],e.each((function(){var e;function add(){t.includes(this)&&(e=!0)}var r=[];["start","end"].forEach((function(t,e){var o=d(this,"c_"+t);null==o?(o=document.getElementById(this.attributes["se:connector"].value.split(" ")[e]),d(this,"c_"+t,o.id),d(this,t+"_bb",n.getStrokedBBox([o]))):o=document.getElementById(o),r.push(o)}),this);for(var o=0;o<2;o++){var i=r[o];if(e=!1,a(i).parents().each(add),i&&i.parentNode){if(t.includes(i)||e){var s=n.getStrokedBBox([i]);x.push({elem:i,connector:this,is_start:0===o,start_x:s.x,start_y:s.y})}}else a(this).remove()}}))},E=function _updateLine(t,e){for(var r=x.length;r--;){var n=x[r],o=n.connector,a=n.is_start?"start":"end",i=d(o,a+"_bb");i.x=n.start_x+t,i.y=n.start_y+e,d(o,a+"_bb",i);var s=n.is_start?"end":"start",c=d(o,s+"_bb"),u=c.x+c.width/2,l=c.y+c.height/2,f=w(u,l,i,A(a,o));B(o,n.is_start?0:"end",f.x,f.y,!0);var h=w(f.x,f.y,d(o,s+"_bb"),A(s,o));B(o,n.is_start?"end":0,h.x,h.y,!0)}},B=function _setPoint(t,e,r,n,o){var a=t.points,s=i.createSVGPoint();s.x=r,s.y=n,"end"===e&&(e=a.numberOfItems-1);try{a.replaceItem(s,e)}catch(o){for(var c=t.getAttribute("points").split(" "),u=0;u<c.length;u++)u===e&&(c[u]=r+","+n);t.setAttribute("points",c.join(" "))}if(o){var l=a.getItem(0),d=a.getItem(a.numberOfItems-1);B(t,1,(d.x+l.x)/2,(d.y+l.y)/2)}},S=function _showPanel(t){var e=a("#connector_rules");e.length||(e=a('<style id="connector_rules"></style>').appendTo("head")),e.text(t?"#tool_clone, #tool_topath, #tool_angle, #xy_panel { display: none !important; }":""),a("#connector_panel").toggle(t)},A=function _getOffset(t,e){var r=e.getAttribute("marker-"+t),n=5*e.getAttribute("stroke-width");return r?n:0},w=function _getBBintersect(t,e,r,n){n&&(n-=0,(r=a.extend({},r)).width+=n,r.height+=n,r.x-=n/2,r.y-=n/2);var o,i=r.x+r.width/2,s=r.y+r.height/2,c=t-i,u=e-s;return{x:i+c*(o=Math.abs(u/c)<r.height/r.width?r.width/2/Math.abs(c):u?r.height/2/Math.abs(u):0),y:s+u*o}},n=(r=e).canvas,o=n.getElem,a=t.$,i=t.svgroot,s=t.importLocale,c=n.addSVGElementFromJson,u=t.selectorManager,l=".se_connector",d=a.data,C.next=14,s();case 14:return f=C.sent,b=t.svgcontent,y=!1,x=[],k=[],function(){var t=n.groupSelectedElements;n.groupSelectedElements=function(){n.removeFromSelection(a(l).toArray());for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t.apply(this,r)};var e=n.moveSelectedElements;n.moveSelectedElements=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=e.apply(this,r);return N(),o},p=n.getEditorNS()}(),M=[{id:"mode_connect",type:"mode",icon:r.curConfig.imgPath+"cut.png",includeWith:{button:"#tool_line",isDefault:!1,position:1},events:{click:function click(){n.setMode("connector")}}}],C.abrupt("return",{name:f.name,svgicons:"conn.svg",buttons:f.buttons.map((function(t,e){return Object.assign(M[e],t)})),addLangData:function addLangData(t){t.lang;return{data:f.langList}},mouseDown:function mouseDown(t){var e=t.event;h=t.start_x,g=t.start_y;var o=n.getMode(),i=r.curConfig.initStroke;if("connector"===o){if(y)return;var s=e.target,u=a(s).parents();if(-1!==a.inArray(b,u)){var l=a(s).closest("foreignObject");v=l.length?l[0]:s;var f=n.getStrokedBBox([v]),_=f.x+f.width/2,p=f.y+f.height/2;y=!0,m=c({element:"polyline",attr:{id:n.getNextId(),points:_+","+p+" "+_+","+p+" "+h+","+g,stroke:"#"+i.color,"stroke-width":v.stroke_width&&0!==v.stroke_width?v.stroke_width:i.width,fill:"none",opacity:i.opacity,style:"pointer-events:none"}}),d(m,"start_bb",f)}return{started:!0}}"select"===o&&I()},mouseMove:function mouseMove(t){var e=n.getZoom(),r=t.mouse_x/e,o=t.mouse_y/e,a=r-h,i=o-g,s=n.getMode();if("connector"===s&&y){var c=w(r,o,d(m,"start_bb"),A("start",m));h=c.x,g=c.y,B(m,0,c.x,c.y,!0),B(m,"end",r,o,!0)}else if("select"===s){for(var u=k.length;u--;){var l=k[u];l&&d(l,"c_start")&&(n.removeFromSelection([l]),n.getTransformList(l).clear())}x.length&&E(a,i)}},mouseUp:function mouseUp(t){var e=t.event.target;if("connector"===n.getMode()){var r=a(e).closest("foreignObject");r.length&&(e=r[0]);var o=a(e).parents();if(e===v)return{keep:!0,element:null,started:y=!0};if(-1===a.inArray(b,o))return a(m).remove(),{keep:!1,element:null,started:y=!1};_=e;var i=v.id,s=_.id,c=i+" "+s,d=s+" "+i;if(a(b).find(l).filter((function(){var t=this.getAttributeNS(p,"connector");return t===c||t===d})).length)return a(m).remove(),{keep:!1,element:null,started:!1};var f=n.getStrokedBBox([_]),x=w(h,g,f,A("start",m));return B(m,"end",x.x,x.y,!0),a(m).data("c_start",i).data("c_end",s).data("end_bb",f),p=n.getEditorNS(!0),m.setAttributeNS(p,"se:connector",c),m.setAttribute("class",l.substr(1)),m.setAttribute("opacity",1),n.addToSelection([m]),n.moveToBottomSelectedElement(),u.requestSelector(m).showGrips(!1),{keep:!0,element:m,started:y=!1}}},selectedChanged:function selectedChanged(t){if(a(b).find(l).length){"connector"===n.getMode()&&n.setMode("select");for(var e=(k=t.elems).length;e--;){var r=k[e];r&&d(r,"c_start")?(u.requestSelector(r).showGrips(!1),t.selectedElement&&!t.multiselected?S(!0):S(!1)):S(!1)}N()}},elementChanged:function elementChanged(t){var e=t.elems[0];if(e){if("svg"===e.tagName&&"svgcontent"===e.id&&(b=e,G()),e.getAttribute("marker-start")||e.getAttribute("marker-mid")||e.getAttribute("marker-end")){var r=e.getAttribute("marker-start"),i=e.getAttribute("marker-mid"),s=e.getAttribute("marker-end");if(m=e,a(e).data("start_off",Boolean(r)).data("end_off",Boolean(s)),"line"===e.tagName&&i){var u=Number(e.getAttribute("x1")),f=Number(e.getAttribute("x2")),h=Number(e.getAttribute("y1")),g=Number(e.getAttribute("y2")),v=e.id,_=c({element:"polyline",attr:{points:u+","+h+(" "+(u+f)/2+","+(h+g)/2+" ")+f+","+g,stroke:e.getAttribute("stroke"),"stroke-width":e.getAttribute("stroke-width"),"marker-mid":i,fill:"none",opacity:e.getAttribute("opacity")||1}});a(e).after(_).remove(),n.clearSelection(),_.id=v,n.addToSelection([_]),e=_}}if(e.getAttribute("class")===l.substr(1)){var p=o(d(e,"c_start"));N([p])}else N()}},IDsUpdated:function IDsUpdated(t){var e=[];return t.elems.forEach((function(r){"se:connector"in r.attr&&(r.attr["se:connector"]=r.attr["se:connector"].split(" ").map((function(e){return t.changes[e]})).join(" "),/. ./.test(r.attr["se:connector"])||e.push(r.attr.id))})),{remove:e}},toolButtonStateUpdate:function toolButtonStateUpdate(t){t.nostroke&&a("#mode_connect").hasClass("tool_button_current")&&r.clickSelect(),a("#mode_connect").toggleClass("disabled",t.nostroke)}});case 19:case"end":return C.stop()}}),_callee)})))()}};export default t;
//# sourceMappingURL=ext-connector.js.map
