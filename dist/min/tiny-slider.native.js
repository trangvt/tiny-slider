var tinySlider=function(){"use strict";function t(t){function f(){gn.wrap(yt,Et),gn.wrap(Et,gt),o(gt,{"data-tns-role":"wrapper"}),o(Et,{"data-tns-role":"content-wrapper"});var t=Lt&&Tt?k():Tt?Tt+Mt:0;0!==t&&(Et.style.cssText="margin: 0 "+t+"px"),ht=pn()}function b(){bt=fn(),ft=Yt-bt-Ct,Lt||(Vt=vn()),ut=hn(),Rt=Ft||"page"===t.slideBy?bt:t.slideBy}function y(){""===yt.id?yt.id=dt=n():dt=yt.id;var t="";mt&&(t+=mt+" "),Gt&&(t+="autoheight"),o(yt,{"data-tns-role":"content","data-tns-mode":pt,"data-tns-features":t});var e=h?h+": translate3d("+-_t*Vt+"px, 0px, 0px)":"left: "+-_t*Vt+"px";yt.style.cssText+="width: "+(Vt+1)*Yt+"px; "+e}function g(){navigator.msMaxTouchPoints&&(gt.classList.add("ms-touch"),gt.addEventListener("scroll",nt,!1))}function E(){for(var t=0;t<wt;t++){var n=xt[t];n.id=dt+"item"+t,o(n,{style:"width: "+Vt+"px","aria-hidden":"true"}),n.innerHTML='<div data-tns-role="item-wrapper" style="margin-right: '+Mt+'px">'+n.innerHTML+"</div>"}if(qt||Tt){for(var e=document.createDocumentFragment(),a=document.createDocumentFragment(),i=Kt;i--;){var r=i%wt,s=xt[r].cloneNode(!0),c=xt[wt-1-r].cloneNode(!0);d(s,"id"),d(c,"id"),e.insertBefore(s,e.firstChild),a.appendChild(c)}yt.appendChild(e),yt.insertBefore(a,yt.firstChild),xt=yt.children}}function x(){St&&(t.controlsContainer||(gn.append(gt,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+dt+'" type="button">'+At[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+dt+'" type="button">'+At[1]+"</button></div>"),Pt=gt.querySelector('[data-tns-role="controls"]')),st=Pt.querySelector('[data-controls="prev"]'),ct=Pt.querySelector('[data-controls="next"]'),i(Pt,"tabindex")||(o(Pt,{"aria-label":"Carousel Navigation"}),o(Pt.children,{"aria-controls":dt,tabindex:"-1"})))}function w(){if(Nt){if(!t.navContainer){for(var n="",e=0;e<wt;e++)n+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+dt+"item"+e+'" type="button"></button>';Ot&&(n+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Bt[0]+"</button>"),n='<div data-tns-role="nav" aria-label="Carousel Pagination">'+n+"</div>",gn.append(gt,n),kt=gt.querySelector('[data-tns-role="nav"]')}if(lt=kt.querySelectorAll("[data-slide]"),!i(kt,"aria-label")){o(kt,{"aria-label":"Carousel Pagination"});for(var a=0;a<wt;a++)o(lt[a],{tabindex:"-1","aria-selected":"false","aria-controls":dt+"item"+a})}for(var r=ut;r<wt;r++)o(lt[r],{hidden:""});Jt=ut}}function M(){Ot&&(kt||(gn.append(gt,'<div data-tns-role="nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Bt[0]+"</button></div>"),kt=gt.querySelector('[data-tns-role="nav"]')),an=kt.querySelector("[data-action]"),K())}function T(){for(var t=_t;t<_t+bt;t++)o(xt[t],{"aria-hidden":"false"});St&&(o(ct,{tabindex:"0"}),(_t===Ct&&!qt||zt)&&(st.disabled=!0)),Nt&&o(lt[0],{tabindex:"0","aria-selected":"true"})}function C(){if(p&&yt.addEventListener(p,F,!1),Xt&&(yt.addEventListener("touchstart",et,!1),yt.addEventListener("touchmove",at,!1),yt.addEventListener("touchend",it,!1),yt.addEventListener("touchcancel",it,!1)),Nt)for(var t=0;t<wt;t++)lt[t].addEventListener("click",V,!1),lt[t].addEventListener("keydown",tt,!1);if(St&&(st.addEventListener("click",U,!1),ct.addEventListener("click",X,!1),st.addEventListener("keydown",_,!1),ct.addEventListener("keydown",_,!1)),Ot&&(an.addEventListener("click",J,!1),St&&(st.addEventListener("click",Q,!1),ct.addEventListener("click",Q,!1)),Nt))for(var n=0;n<wt;n++)lt[n].addEventListener("click",Q,!1);Dt&&document.addEventListener("keydown",Z,!1),window.addEventListener("resize",rt,!1),window.addEventListener("scroll",ot,!1)}function L(){if(Ut&&gn.isInViewport(yt)){for(var t=[],n=_t-1;n<_t+bt+1;n++){for(var e=xt[n].querySelectorAll('[data-tns-role="lazy-img"]'),a=e.length;a--;t.unshift(e[a]));t.unshift()}for(var i=t.length;i--;){var o=t[i];o.classList.contains("loaded")||(o.src=r(o,"data-src"),o.classList.add("loaded"))}}}function S(){if(Gt){for(var t=[],n=_t;n<_t+bt;n++)for(var e=xt[n].querySelectorAll("img"),a=e.length;a--;)t.push(e[a]);0===t.length?D():A(t)}}function A(t){for(var n=t.length;n--;)u(t[n])&&t.splice(n,1);0===t.length?D():setTimeout(function(){A(t)},16)}function P(){f(),b(),y(),g(),E(),x(),w(),M(),T(),C(),N(),L(),S()}function N(){wt<=bt?(Nt=St=Ot=qt=zt=!1,_t=Kt,kt&&c(kt),Pt&&c(Pt),an&&c(an)):(Nt=t.nav,St=t.controls,Ot=t.autoplay,qt=!t.rewind&&t.loop,zt=t.rewind,Nt&&l(kt),St&&l(Pt),Ot&&l(an))}function k(){return ht=ht||pn(),(ht%Lt+Mt)/2}function D(){for(var t,n=[],e=_t;e<_t+bt;e++)n.push(xt[e].offsetHeight);t=Math.max.apply(null,n),v&&z(1),yt.style.height=t+"px"}function I(){gt.style.msScrollSnapPointsX="snapInterval(0%, "+Vt+")"}function O(){var t,n,e,a;_t!==tn&&(_t>tn?(t=tn,n=Math.min(tn+bt,_t),e=Math.max(tn+bt,_t),a=_t+bt):(t=Math.max(_t+bt,tn),n=tn+bt,e=_t,a=Math.min(_t+bt,tn))),tn=_t,Rt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),a=Math.round(a));for(var i=t;i<n;i++)o(xt[i],{"aria-hidden":"true"});for(var r=e;r<a;r++)o(xt[r],{"aria-hidden":"false"})}function W(){if(ut!==Jt)if(ut>Jt)for(var t=Jt;t<ut;t++)d(lt[t],"hidden");else for(var n=ut;n<Jt;n++)o(lt[n],{hidden:""});Jt=ut}function H(){if(Nt){if(Qt===-1){for(var n=_t;n<Kt;)n+=wt;n=(n-Kt)%wt,t.navContainer?Zt=n:(Zt=Math.floor(n/bt),qt||wt%bt===0||_t!==ft||(Zt+=1))}else Zt=Qt,Qt=-1;Zt!==$t&&(o(lt[$t],{tabindex:"-1","aria-selected":"false"}),o(lt[Zt],{tabindex:"0","aria-selected":"true"}),$t=Zt)}}function B(){if(St&&!qt)if(_t===Ct||!zt&&_t===ft){var t=_t===Ct?st:ct,n=_t===Ct?ct:st;$(t,n),t.disabled=!0,o(t,{tabindex:"-1"}),n.disabled=!1,o(n,{tabindex:"0"})}else st.disabled=!1,ct.disabled=!1}function z(t){yt.style[v]=It*t/1e3+"s"}function q(t,n){v&&z(t),bn(n)}function G(){var t=Rt+Ct,n=Yt-bt-Rt-1;if(_t<t||_t>n){var e=_t-wt,a=_t+wt;_t=e>=t&&e<=n?e:a,q(0)}}function j(t){o(yt,{"aria-busy":"true"}),q(t),p||F()}function F(t){p&&"height"===t.propertyName||(qt&&G(),O(),H(),B(),L(),S(),d(yt,"aria-busy"))}function R(t){if("true"!==r(yt,"aria-busy")){var n=_t+t*Rt,e=Math.abs(t*Rt);_t=qt?n:Math.max(Ct,Math.min(n,ft)),j(e)}}function U(){R(-1)}function X(){R(zt&&_t===wt-bt?(bt-wt)/Rt:1)}function V(n){if("true"!==r(yt,"aria-busy")){for(var e,a,i=n.target||n.srcElement;gn.indexOf(lt,i)===-1;)i=i.parentNode;e=Qt=Number(r(i,"data-slide")),_t=t.navContainer?e+Kt:e*bt+Kt,_t=qt?_t:Math.min(_t,ft),a=Math.abs(_t-tn),j(a)}}function K(){en=setInterval(function(){R(Ht)},Wt),an.setAttribute("data-action","stop"),an.innerHTML="<span hidden>Stop Animation</span>"+Bt[1],rn=!0}function Y(){clearInterval(en),an.setAttribute("data-action","start"),an.innerHTML="<span hidden>Stop Animation</span>"+Bt[0],rn=!1}function J(){rn?Y():K()}function Q(){rn&&Y()}function Z(t){t=t||window.event,t.keyCode===m.LEFT?R(-1):t.keyCode===m.RIGHT&&R(zt&&_t===wt-bt?(bt-wt)/Rt:1)}function $(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function _(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case m.LEFT:case m.UP:case m.HOME:case m.PAGEUP:e!==st&&st.disabled!==!0&&$(e,st);break;case m.RIGHT:case m.DOWN:case m.END:case m.PAGEDOWN:e!==ct&&ct.disabled!==!0&&$(e,ct);break;case m.ENTER:case m.SPACE:e===ct?X():U()}}function tt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,a=r(e,"data-slide");switch(n){case m.LEFT:case m.PAGEUP:a>0&&$(e,e.previousElementSibling);break;case m.UP:case m.HOME:0!==a&&$(e,lt[0]);break;case m.RIGHT:case m.PAGEDOWN:a<ut-1&&$(e,e.nextElementSibling);break;case m.DOWN:case m.END:a<ut-1&&$(e,lt[ut-1]);break;case m.ENTER:case m.SPACE:V(t)}}function nt(){q(0,yt.scrollLeft())}function et(t){var n=t.changedTouches[0];ln=parseInt(n.clientX),un=parseInt(n.clientY),on=Number(yt.style[h].slice(12,-13))}function at(t){var n=t.changedTouches[0];dn=parseInt(n.clientX)-ln,sn=parseInt(n.clientY)-un,"horizontal"===a(e(sn,dn),15)&&(cn=!0,t.preventDefault(),q(0,on+dn))}function it(t){var n=t.changedTouches[0];if(dn=parseInt(n.clientX)-ln,cn&&0!==dn){cn=!1,t.preventDefault();var e=-(on+dn)/Vt;e=dn>0?Math.floor(e):Math.ceil(e),_t=Math.max(Ct,Math.min(e,ft));var a=-_t*Vt;qt||Tt||!Lt||(a=Math.max(-(Vt*wt-ht),a)),q(1,a),p||F()}}function rt(){clearTimeout(vt),vt=setTimeout(function(){var t=pn();ht!==t&&(ht=t,b(),N(),Lt&&!Tt||mn(),W(),navigator.msMaxTouchPoints&&I(),q(0),p||F())},100)}function ot(){nn||window.requestAnimationFrame(function(){L(),nn=!1}),nn=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",direction:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideByPage:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var dt,st,ct,lt,ut,ft,vt,ht,pt=t.mode,mt=t.direction,bt=t.items,yt=t.container,gt=document.createElement("div"),Et=document.createElement("div"),xt=yt.children,wt=xt.length,Mt=t.gutter,Tt=t.edgePadding,Ct=Tt?1:0,Lt=t.fixedWidth,St=t.controls,At=t.controlsText,Pt=!!t.controlsContainer&&t.controlsContainer,Nt=t.nav,kt=!!t.navContainer&&t.navContainer,Dt=t.arrowKeys,It=v?t.speed:0,Ot=t.autoplay,Wt=t.autoplayTimeout,Ht="forward"===t.autoplayDirection?1:-1,Bt=t.autoplayText,zt=t.rewind,qt=!t.rewind&&t.loop,Gt=t.autoHeight,jt=!Lt&&t.responsive,Ft=t.slideByPage,Rt=Ft||"page"===t.slideBy?bt:t.slideBy,Ut=t.lazyload,Xt=t.touch,Vt=Lt||0,Kt=qt?Math.ceil(1.5*wt):Tt?1:0,Yt=wt+2*Kt,Jt=wt,Qt=-1,Zt=0,$t=0,_t=Kt,tn=_t,nn=!1;if(Ot)var en,an,rn=!1;if(Xt)var on,dn,sn,cn,ln=0,un=0;var fn=function(){return Lt?function(){return Math.max(1,Math.min(wt,Math.floor(ht/Lt)))}:function(){var n=t.items,e="object"==typeof jt&&Object.keys(jt);if(e)for(var a=0;a<e.length;a++)ht>=e[a]&&(n=jt[e[a]]);return Math.max(1,Math.min(wt,n))}}(),vn=function(){return navigator.appVersion.indexOf("MSIE 8")>0?function(){return Math.round((ht+Mt)/bt)}:function(){return(ht+Mt)/bt}}(),hn=function(){return t.navContainer?function(){return wt}:function(){return Math.ceil(wt/bt)}}(),pn=function(){return Lt?function(){return gt.clientWidth}:function(){return Et.clientWidth}}(),mn=function(){return Lt?Tt?function(){Et.style.cssText="margin: 0px "+k()+"px"}:void 0:function(){yt.style.width=(Vt+1)*Yt+"px";for(var t=Yt;t--;)xt[t].style.width=Vt+"px"}}(),bn=function(){return h?function(t){var n=t||-Vt*_t;yt.style[h]="translate3d("+n+"px, 0, 0)"}:function(t){var n=t||-Vt*_t;yt.style.left=n+"px"}}();return{init:P,destory:function(){if(gn.unwrap(gt),gn.unwrap(Et),gt=Et=null,d(yt,["id","style","data-tns-role","data-tns-features"]),qt)for(var n=Kt;n--;)xt[0].remove(),xt[xt.length-1].remove();d(xt,["id","style","aria-hidden"]),dt=wt=null,St&&(t.controlsContainer?(d(Pt,["aria-label"]),d(Pt.children,["aria-controls","tabindex"]),s(Pt)):(Pt.remove(),Pt=st=ct=null)),Nt&&(t.navContainer?(d(kt,["aria-label"]),d(lt,["aria-selected","aria-controls","tabindex"]),s(kt)):(kt.remove(),kt=null),lt=null),Ot&&(t.navContainer||null===kt?s(an):(kt.remove(),kt=null)),s(yt),Dt&&document.removeEventListener("keydown",Z,!1),window.removeEventListener("resize",rt,!1),window.removeEventListener("scroll",ot,!1)},hasAttr:i,getAttr:r,setAttrs:o,removeAttrs:d,removeEvents:s,getSlideId:n,toDegree:e,getPanDirection:a,hideElement:c,showElement:l,mode:pt,direction:mt,gutter:Mt,edgePadding:Tt,fixedWidth:Lt,controls:St,nav:Nt,rewind:zt,loop:qt,autoHeight:Gt,slideBy:Rt,lazyload:Ut,touch:Xt,speed:It,items:fn(),cloneCount:Kt,navCountVisible:function(){return ut},index:function(){return _t},slideWidth:function(){return Vt},slideContainer:yt,slideItems:xt,slideCount:wt,controlsContainer:function(){return Pt},prevButton:function(){return st},nextButton:function(){return ct},navContainer:function(){return kt},allNavs:function(){return lt}}}function n(){return window.tinySliderNumber=window.tinySliderNumber?window.tinySliderNumber++:1,"tns"+window.tinySliderNumber}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function a(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function i(t,n){return t.hasAttribute(n)}function r(t,n){return t.getAttribute(n)}function o(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var a in n)t[e].setAttribute(a,n[a])}function d(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,a=t.length;a--;)for(var i=e;i--;)t[a].removeAttribute(n[i])}function s(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function c(t){i(t,"hidden")||o(t,{hidden:""})}function l(t){i(t,"hidden")&&d(t,"hidden")}function u(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(){var t,n=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==n.style[t])return e[t];return!1}var v=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),h=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),p=f(),m={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
