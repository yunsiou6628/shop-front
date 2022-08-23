import{o as ie,a6 as Q,P as m,A as c,H as Te,ae as be,r as b,c as r,w as z,h as g,T as U,g as qe,I as Ee}from"./index.29aa1ca1.js";import{a as xe,u as Se}from"./use-timeout.c83cb5b2.js";import{u as ke,a as He,b as Be,e as Le,d as Ce,r as G,g as J,f as Pe,h as _e}from"./focusout.de0b4893.js";import{b as ze,a as Me,h as Fe}from"./scroll.5775526a.js";import{c as De,a as Ve}from"./render.1af6db0b.js";import{c as Ae}from"./Ripple.15150790.js";import{a as Re}from"./focus-manager.d6507951.js";function $e(e,t,l){let i;function s(){i!==void 0&&(Q.remove(i),i=void 0)}return ie(()=>{e.value===!0&&s()}),{removeFromHistory:s,addToHistory(){i={condition:()=>l.value===!0,handler:t},Q.add(i)}}}let w=0,M,F,y,D=!1,N,Z,f;function We(e){Oe(e)&&Te(e)}function Oe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=be(e),l=e.shiftKey&&!e.deltaX,i=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),s=l||i?e.deltaY:e.deltaX;for(let a=0;a<t.length;a++){const n=t[a];if(Fe(n,i))return i?s<0&&n.scrollTop===0?!0:s>0&&n.scrollTop+n.clientHeight===n.scrollHeight:s<0&&n.scrollLeft===0?!0:s>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function ee(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function q(e){D!==!0&&(D=!0,requestAnimationFrame(()=>{D=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:i}=document.scrollingElement;(y===void 0||t!==window.innerHeight)&&(y=l-t,document.scrollingElement.scrollTop=i),i>y&&(document.scrollingElement.scrollTop-=Math.ceil((i-y)/8))}))}function te(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:s}=window.getComputedStyle(t);M=ze(window),F=Me(window),N=t.style.left,Z=t.style.top,t.style.left=`-${M}px`,t.style.top=`-${F}px`,s!=="hidden"&&(s==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,m.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",q,c.passiveCapture),window.visualViewport.addEventListener("scroll",q,c.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ee,c.passiveCapture))}m.is.desktop===!0&&m.is.mac===!0&&window[`${e}EventListener`]("wheel",We,c.notPassive),e==="remove"&&(m.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",q,c.passiveCapture),window.visualViewport.removeEventListener("scroll",q,c.passiveCapture)):window.removeEventListener("scroll",ee,c.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=N,t.style.top=Z,window.scrollTo(M,F),y=void 0)}function Ie(e){let t="add";if(e===!0){if(w++,f!==void 0){clearTimeout(f),f=void 0;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(t="remove",m.is.ios===!0&&m.is.nativeMobile===!0){clearTimeout(f),f=setTimeout(()=>{te(t),f=void 0},100);return}}te(t)}function Xe(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Ie(t))}}}let E=0;const Ye={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},oe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ze=De({name:"QDialog",inheritAttrs:!1,props:{...ke,...He,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Be,"shake","click","escape-key"],setup(e,{slots:t,emit:l,attrs:i}){const s=qe(),a=b(null),n=b(!1),V=b(!1),v=b(!1);let x,d=null,p,S;const A=r(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:R}=Xe(),{registerTimeout:$,removeTimeout:W}=xe(),{registerTick:ne,removeTick:O}=Se(),{showPortal:I,hidePortal:X,portalIsAccessible:le,renderPortal:se}=Le(s,a,pe,!0),{hide:T}=Ce({showing:n,hideOnRouteChange:A,handleShow:he,handleHide:ge,processOnMount:!0}),{addToHistory:ae,removeFromHistory:re}=$e(n,T,A),ue=r(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ye[e.position]}`+(v.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),ce=r(()=>"q-transition--"+(e.transitionShow===void 0?oe[e.position][0]:e.transitionShow)),de=r(()=>"q-transition--"+(e.transitionHide===void 0?oe[e.position][1]:e.transitionHide)),fe=r(()=>V.value===!0?de.value:ce.value),Y=r(()=>`--q-transition-duration: ${e.transitionDuration}ms`),k=r(()=>n.value===!0&&e.seamless!==!0),me=r(()=>e.autoClose===!0?{onClick:we}:{}),ve=r(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${k.value===!0?"modal":"seamless"}`,i.class]);z(n,o=>{Ee(()=>{V.value=o})}),z(()=>e.maximized,o=>{n.value===!0&&L(o)}),z(k,o=>{R(o),o===!0?(Pe(C),_e(B)):(G(C),J(B))});function he(o){W(),O(),ae(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,L(e.maximized),I(),v.value=!0,e.noFocus!==!0&&(document.activeElement!==null&&document.activeElement.blur(),ne(h)),$(()=>{if(s.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:u,bottom:P}=document.activeElement.getBoundingClientRect(),{innerHeight:j}=window,_=window.visualViewport!==void 0?window.visualViewport.height:j;u>0&&P>_/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-_,P>=j?1/0:Math.ceil(document.scrollingElement.scrollTop+P-_/2))),document.activeElement.scrollIntoView()}S=!0,a.value.click(),S=!1}I(!0),v.value=!1,l("show",o)},e.transitionDuration)}function ge(o){W(),O(),re(),K(!0),v.value=!0,X(),d!==null&&(d.focus(),d=null),$(()=>{X(!0),v.value=!1,l("hide",o)},e.transitionDuration)}function h(o){Re(()=>{let u=a.value;u===null||u.contains(document.activeElement)===!0||(u=u.querySelector(o||"[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function H(){h(),l("shake");const o=a.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),clearTimeout(x),x=setTimeout(()=>{a.value!==null&&(o.classList.remove("q-animate--scale"),h())},170))}function B(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&H():(l("escape-key"),T()))}function K(o){clearTimeout(x),(o===!0||n.value===!0)&&(L(!1),e.seamless!==!0&&(R(!1),G(C),J(B))),o!==!0&&(d=null)}function L(o){o===!0?p!==!0&&(E<1&&document.body.classList.add("q-body--dialog"),E++,p=!0):p===!0&&(E<2&&document.body.classList.remove("q-body--dialog"),E--,p=!1)}function we(o){S!==!0&&(T(o),l("click",o))}function ye(o){e.persistent!==!0&&e.noBackdropDismiss!==!0?T(o):e.noShake!==!0&&H()}function C(o){e.allowFocusOutside!==!0&&le.value===!0&&Ae(a.value,o.target)!==!0&&h('[tabindex]:not([tabindex="-1"])')}Object.assign(s.proxy,{focus:h,shake:H,__updateRefocusTarget(o){d=o||null}}),ie(K);function pe(){return g("div",{...i,class:ve.value},[g(U,{name:"q-transition--fade",appear:!0},()=>k.value===!0?g("div",{class:"q-dialog__backdrop fixed-full",style:Y.value,"aria-hidden":"true",onMousedown:ye}):null),g(U,{name:fe.value,appear:!0},()=>n.value===!0?g("div",{ref:a,class:ue.value,style:Y.value,tabindex:-1,...me.value},Ve(t.default)):null)])}return se}});export{Ze as Q};
