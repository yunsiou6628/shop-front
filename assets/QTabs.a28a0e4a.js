import{R as Ie,Q as K}from"./Ripple.b280e37f.js";import{h as Ae,a as Be}from"./render.8ea1afb5.js";import{i as $e,r as y,c as h,o as N,y as V,D as be,q as Me,h as m,E as Pe,G as Ee,H as ze,g as ee,a as Fe,I as E,z as Z,A as ce,w as O,v as Oe,J as We,K as je}from"./index.c246fae3.js";import{c as he}from"./create.c71cb389.js";import{u as Qe,a as de}from"./use-timeout.d8d8ce16.js";import{r as De}from"./rtl.4b414a6d.js";let He=0;const et=["click","keydown"],tt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${He++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function at(e,A,g,o){const n=$e(be,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:L}=ee(),R=y(null),k=y(null),f=y(null),v=h(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),b=h(()=>n.currentModel.value===e.name),_=h(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(b.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0&&o.linkClass.value!==""?` ${o.linkClass.value}`:"")),B=h(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),z=h(()=>e.disable===!0||n.hasFocus.value===!0?-1:e.tabindex||0);function $(i,w){if(w!==!0&&R.value!==null&&R.value.focus(),e.disable!==!0){let C;if(o!==void 0)if(o.hasRouterLink.value===!0)C=()=>{i.__qNavigate=!0,n.avoidRouteWatcher=!0;const T=o.navigateToRouterLink(i);T===!1?n.avoidRouteWatcher=!1:T.then(S=>{n.avoidRouteWatcher=!1,S===void 0&&n.updateModel({name:e.name,fromRoute:!0})})};else{g("click",i);return}else C=()=>{n.updateModel({name:e.name,fromRoute:!1})};g("click",i,C),i.defaultPrevented!==!0&&C()}}function F(i){Pe(i,[13,32])?$(i,!0):Ee(i)!==!0&&i.keyCode>=35&&i.keyCode<=40&&i.altKey!==!0&&i.metaKey!==!0&&n.onKbdNavigate(i.keyCode,L.$el)===!0&&ze(i),g("keydown",i)}function M(){const i=n.tabProps.value.narrowIndicator,w=[],C=m("div",{ref:f,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&w.push(m(K,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&w.push(m("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&w.push(e.alertIcon!==void 0?m(K,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):m("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),i===!0&&w.push(C);const T=[m("div",{class:"q-focus-helper",tabindex:-1,ref:R}),m("div",{class:B.value},Ae(A.default,w))];return i===!1&&T.push(C),T}const q={name:h(()=>e.name),rootRef:k,tabIndicatorRef:f,routerProps:o};N(()=>{n.unregisterTab(q),n.recalculateScroll()}),V(()=>{n.registerTab(q),n.recalculateScroll()});function P(i,w){const C={ref:k,class:_.value,tabindex:z.value,role:"tab","aria-selected":b.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:$,onKeydown:F,...w};return Me(m(i,C,M()),[[Ie,v.value]])}return{renderTab:P,$tabs:n}}function Ke(){const e=y(!Fe.value);return e.value===!1&&V(()=>{e.value=!0}),e}const ge=typeof ResizeObserver!="undefined",fe=ge===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ne=he({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:A}){let g=null,o,n={width:-1,height:-1};function L(f){f===!0||e.debounce===0||e.debounce==="0"?R():g===null&&(g=setTimeout(R,e.debounce))}function R(){if(clearTimeout(g),g=null,o){const{offsetWidth:f,offsetHeight:v}=o;(f!==n.width||v!==n.height)&&(n={width:f,height:v},A("resize",n))}}const k=ee();if(Object.assign(k.proxy,{trigger:L}),ge===!0){let f;return V(()=>{E(()=>{o=k.proxy.$el.parentNode,o&&(f=new ResizeObserver(L),f.observe(o),R())})}),N(()=>{clearTimeout(g),f!==void 0&&(f.disconnect!==void 0?f.disconnect():o&&f.unobserve(o))}),Z}else{let b=function(){clearTimeout(g),v!==void 0&&(v.removeEventListener!==void 0&&v.removeEventListener("resize",L,ce.passive),v=void 0)},_=function(){b(),o&&o.contentDocument&&(v=o.contentDocument.defaultView,v.addEventListener("resize",L,ce.passive),R())};const f=Ke();let v;return V(()=>{E(()=>{o=k.proxy.$el,o&&_()})}),N(b),()=>{if(f.value===!0)return m("object",{style:fe.style,tabindex:-1,type:"text/html",data:fe.url,"aria-hidden":"true",onLoad:_})}}}});function Ve(e,A,g){const o=g===!0?["left","right"]:["top","bottom"];return`absolute-${A===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const Ue=["left","center","right","justify"],ve=()=>{};var nt=he({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ue.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:A,emit:g}){const o=ee(),{proxy:{$q:n}}=o,{registerTick:L}=Qe(),{registerTimeout:R,removeTimeout:k}=de(),{registerTimeout:f}=de(),v=y(null),b=y(null),_=y(e.modelValue),B=y(!1),z=y(!0),$=y(!1),F=y(!1),M=h(()=>n.platform.is.desktop===!0||e.mobileArrows===!0),q=[],P=y(!1);let i=!1,w,C,T,S=M.value===!0?ae:Z;const me=h(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ve(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),we=h(()=>`q-tabs__content--align-${B.value===!0?"left":F.value===!0?"justify":e.align}`),Te=h(()=>`q-tabs row no-wrap items-center q-tabs--${B.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${M.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ce=h(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+we.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(n.platform.is.mobile===!0?" scroll":"")),W=h(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),j=h(()=>e.vertical!==!0&&n.lang.rtl===!0),U=h(()=>De===!1&&j.value===!0);O(j,S),O(()=>e.modelValue,t=>{G({name:t,setCurrent:!0,skipEmit:!0})}),O(()=>e.outsideArrows,()=>{E(Q())}),O(M,t=>{S=t===!0?ae:Z,E(Q())});function G({name:t,setCurrent:a,skipEmit:l,fromRoute:u}){_.value!==t&&(l!==!0&&g("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(ye(_.value,t),_.value=t)),u!==void 0&&(i=u)}function Q(){L(()=>{o.isDeactivated!==!0&&o.isUnmounted!==!0&&te({width:v.value.offsetWidth,height:v.value.offsetHeight})})}function te(t){if(W.value===void 0||b.value===null)return;const a=t[W.value.container],l=Math.min(b.value[W.value.scroll],Array.prototype.reduce.call(b.value.children,(r,c)=>r+(c[W.value.content]||0),0)),u=a>0&&l>a;B.value!==u&&(B.value=u),u===!0&&E(S);const d=a<parseInt(e.breakpoint,10);F.value!==d&&(F.value=d)}function ye(t,a){const l=t!=null&&t!==""?q.find(d=>d.name.value===t):null,u=a!=null&&a!==""?q.find(d=>d.name.value===a):null;if(l&&u){const d=l.tabIndicatorRef.value,r=u.tabIndicatorRef.value;clearTimeout(w),d.style.transition="none",d.style.transform="none",r.style.transition="none",r.style.transform="none";const c=d.getBoundingClientRect(),s=r.getBoundingClientRect();r.style.transform=e.vertical===!0?`translate3d(0,${c.top-s.top}px,0) scale3d(1,${s.height?c.height/s.height:1},1)`:`translate3d(${c.left-s.left}px,0,0) scale3d(${s.width?c.width/s.width:1},1,1)`,E(()=>{w=setTimeout(()=>{r.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",r.style.transform="none"},70)})}u&&B.value===!0&&D(u.rootRef.value)}function D(t){const{left:a,width:l,top:u,height:d}=b.value.getBoundingClientRect(),r=t.getBoundingClientRect();let c=e.vertical===!0?r.top-u:r.left-a;if(c<0){b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(c),S();return}c+=e.vertical===!0?r.height-d:r.width-l,c>0&&(b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(c),S())}function ae(){const t=b.value;if(t!==null){const a=t.getBoundingClientRect(),l=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);j.value===!0?(z.value=Math.ceil(l+a.width)<t.scrollWidth-1,$.value=l>0):(z.value=l>0,$.value=e.vertical===!0?Math.ceil(l+a.height)<t.scrollHeight:Math.ceil(l+a.width)<t.scrollWidth)}}function ne(t){I(),re(t),C=setInterval(()=>{re(t)===!0&&I()},5)}function oe(){ne(U.value===!0?Number.MAX_SAFE_INTEGER:0)}function le(){ne(U.value===!0?0:Number.MAX_SAFE_INTEGER)}function I(){clearInterval(C)}function Re(t,a){const l=Array.prototype.filter.call(b.value.children,s=>s===a||s.matches&&s.matches(".q-tab.q-focusable")===!0),u=l.length;if(u===0)return;if(t===36)return D(l[0]),!0;if(t===35)return D(l[u-1]),!0;const d=t===(e.vertical===!0?38:37),r=t===(e.vertical===!0?40:39),c=d===!0?-1:r===!0?1:void 0;if(c!==void 0){const s=j.value===!0?-1:1,x=l.indexOf(a)+c*s;return x>=0&&x<u&&(D(l[x]),l[x].focus({preventScroll:!0})),!0}}const _e=h(()=>U.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function re(t){const a=b.value,{get:l,set:u}=_e.value;let d=!1,r=l(a);const c=t<r?-1:1;return r+=c*5,r<0?(d=!0,r=0):(c===-1&&r<=t||c===1&&r>=t)&&(d=!0,r=t),u(a,r),S(),d}function J(){return q.filter(t=>t.routerProps!==void 0&&t.routerProps.hasRouterLink.value===!0)}function qe(){let t=null,a=i;const l={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:u}=o.proxy.$route,d=_.value;let r=a===!0?ve:s=>{d===s.name.value&&(a=!0,r=ve)};const c=J();for(const s of c){const x=s.routerProps.exact.value===!0;if(s.routerProps[x===!0?"linkIsExactActive":"linkIsActive"].value!==!0||l.exact===!0&&x!==!0){r(s);continue}const X=s.routerProps.linkRoute.value,p=X.hash;if(x===!0){if(u===p){t=s.name.value;break}else if(u!==""&&p!==""){r(s);continue}}const Y=X.matched.length,ue=X.href.length-p.length;if(Y===l.matchedLen?ue>l.hrefLen:Y>l.matchedLen){t=s.name.value,Object.assign(l,{matchedLen:Y,hrefLen:ue,exact:x});continue}r(s)}(a===!0||t!==null)&&G({name:t,setCurrent:!0,fromRoute:!0})}function Se(t){if(k(),P.value!==!0&&v.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&v.value.contains(a)===!0&&(P.value=!0)}}function xe(){R(()=>{P.value=!1},30)}function H(){ie.avoidRouteWatcher!==!0&&f(qe)}function Le(t){q.push(t),J().length>0&&(T===void 0&&(T=O(()=>o.proxy.$route,H)),H())}function ke(t){q.splice(q.indexOf(t),1),T!==void 0&&(J().length===0&&(T(),T=void 0),H())}const ie={currentModel:_,tabProps:me,hasFocus:P,registerTab:Le,unregisterTab:ke,verifyRouteModel:H,updateModel:G,recalculateScroll:Q,onKbdNavigate:Re,avoidRouteWatcher:!1};Oe(be,ie),N(()=>{clearTimeout(w),T!==void 0&&T()});let se=!1;return We(()=>{se=!0}),je(()=>{se===!0&&Q()}),()=>{const t=[m(Ne,{onResize:te}),m("div",{ref:b,class:Ce.value,onScroll:S},Be(A.default))];return M.value===!0&&t.push(m(K,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(z.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:oe,onTouchstartPassive:oe,onMouseup:I,onMouseleave:I,onTouchend:I}),m(K,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+($.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:le,onTouchstartPassive:le,onMouseup:I,onMouseleave:I,onTouchend:I})),m("div",{ref:v,class:Te.value,role:"tablist",onFocusin:Se,onFocusout:xe},t)}}});export{Ne as Q,nt as a,et as b,at as c,tt as u};
