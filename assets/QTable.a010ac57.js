import{Q as ke}from"./Ripple.15150790.js";import{c as z,a as ie,b as gt,h as Ce,u as Ee,d as Ie}from"./render.1af6db0b.js";import{h as a,g as W,c as i,r as A,w as Q,a5 as bt,y as mt,K as St,J as ht,o as yt,A as Le,H as De,ag as N,X as we,ah as Me,ai as _t,I as Ne,aj as qt,aa as K}from"./index.29aa1ca1.js";import{Q as wt}from"./QSeparator.dae6cbb7.js";import{Q as kt}from"./QList.87bfc951.js";import{u as ue,a as se}from"./use-dark.986dc809.js";import{u as Ct,a as Pt,c as Qe,Q as xt}from"./QSelect.43f3a02d.js";import{g as Rt}from"./scroll.5775526a.js";import{a as Tt,h as Bt}from"./use-key-composition.0dd64b41.js";import{Q as re}from"./QBtn.fd74b821.js";import{u as Vt,a as Ot,b as $t}from"./use-fullscreen.268f54f0.js";var Ft=z({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:n,emit:l}){const g=W(),{proxy:{$q:o}}=g,v=u=>{l("click",u)};return()=>{if(e.props===void 0)return a("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:v},ie(n.default));let u,d;const c=g.vnode.key;if(c){if(u=e.props.colsMap[c],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const r=u.align==="right"?"unshift":"push";d=gt(n.default,[]),d[r](a(ke,{class:u.__iconClass,name:o.iconSet.table.arrowUp}))}else d=ie(n.default);const m={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:r=>{u.sortable===!0&&e.props.sort(u),v(r)}};return a("th",m,d)}}});const Lt=["horizontal","vertical","cell","none"];var Dt=z({name:"QMarkupTable",props:{...ue,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Lt.includes(e)}},setup(e,{slots:n}){const l=W(),g=se(e,l.proxy.$q),o=i(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(g.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>a("div",{class:o.value},[a("table",{class:"q-table"},ie(n.default))])}});function ze(e,n){return a("div",e,[a("table",{class:"q-table"},n)])}const Mt={list:kt,table:Dt},jt=["list","table","__qtable"];var At=z({name:"QVirtualScroll",props:{...Ct,type:{type:String,default:"list",validator:e=>jt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:n,attrs:l}){let g;const o=A(null),v=i(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:d,padVirtualScroll:c,onVirtualScrollEvt:m}=Pt({virtualScrollLength:v,getVirtualScrollTarget:w,getVirtualScrollEl:C}),r=i(()=>{if(v.value===0)return[];const V=($,x)=>({index:u.value.from+x,item:$});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(V):e.itemsFn(u.value.from,u.value.to-u.value.from).map(V)}),S=i(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=i(()=>e.scrollTarget!==void 0?{}:{tabindex:0});Q(v,()=>{d()}),Q(()=>e.scrollTarget,()=>{_(),h()});function C(){return o.value.$el||o.value}function w(){return g}function h(){g=Rt(C(),e.scrollTarget),g.addEventListener("scroll",m,Le.passive)}function _(){g!==void 0&&(g.removeEventListener("scroll",m,Le.passive),g=void 0)}function B(){let V=c(e.type==="list"?"div":"tbody",r.value.map(n.default));return n.before!==void 0&&(V=n.before().concat(V)),Ce(n.after,V)}return bt(()=>{d()}),mt(()=>{h()}),St(()=>{h()}),ht(()=>{_()}),yt(()=>{_()}),()=>{if(n.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?ze({ref:o,class:"q-table__middle "+S.value},B()):a(Mt[e.type],{...l,ref:o,class:[l.class,S.value],...q.value},B)}}});const pt={xs:2,sm:4,md:6,lg:10,xl:14};function je(e,n,l){return{transform:n===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Et=z({name:"QLinearProgress",props:{...ue,...Ee,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:n}){const{proxy:l}=W(),g=se(e,l.$q),o=Ie(e,pt),v=i(()=>e.indeterminate===!0||e.query===!0),u=i(()=>e.reverse!==e.query),d=i(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=i(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=i(()=>je(e.buffer!==void 0?e.buffer:1,u.value,l.$q)),r=i(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${g.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),S=i(()=>je(v.value===!0?1:e.value,u.value,l.$q)),q=i(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${v.value===!0?"in":""}determinate`),C=i(()=>({width:`${e.value*100}%`})),w=i(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const h=[a("div",{class:r.value,style:m.value}),a("div",{class:q.value,style:S.value})];return e.stripe===!0&&v.value===!1&&h.push(a("div",{class:w.value,style:C.value})),a("div",{class:c.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ce(n.default,h))}}});function It(e,n){const l=A(null),g=i(()=>e.disable===!0?null:a("span",{ref:l,class:"no-outline",tabindex:-1}));function o(v){const u=n.value;v!==void 0&&v.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():l.value!==null&&(v===void 0||u!==null&&u.contains(v.target)===!0)&&l.value.focus()}return{refocusTargetEl:g,refocusTarget:o}}var Nt={xs:30,sm:35,md:40,lg:50,xl:60};const Qt={...ue,...Ee,...Tt,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},zt=["update:modelValue"];function Ht(e,n){const{props:l,slots:g,emit:o,proxy:v}=W(),{$q:u}=v,d=se(l,u),c=A(null),{refocusTargetEl:m,refocusTarget:r}=It(l,c),S=Ie(l,Nt),q=i(()=>l.val!==void 0&&Array.isArray(l.modelValue)),C=i(()=>{const k=N(l.val);return q.value===!0?l.modelValue.findIndex(L=>N(L)===k):-1}),w=i(()=>q.value===!0?C.value>-1:N(l.modelValue)===N(l.trueValue)),h=i(()=>q.value===!0?C.value===-1:N(l.modelValue)===N(l.falseValue)),_=i(()=>w.value===!1&&h.value===!1),B=i(()=>l.disable===!0?-1:l.tabindex||0),V=i(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(d.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),$=i(()=>{const k=w.value===!0?"truthy":h.value===!0?"falsy":"indet",L=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?w.value===!0:h.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${L}`}),x=i(()=>{const k={type:"checkbox"};return l.name!==void 0&&Object.assign(k,{"^checked":w.value===!0?"checked":void 0,name:l.name,value:q.value===!0?l.val:l.trueValue}),k}),T=Bt(x),p=i(()=>{const k={tabindex:B.value,role:"checkbox","aria-label":l.label,"aria-checked":_.value===!0?"mixed":w.value===!0?"true":"false"};return l.disable===!0&&(k["aria-disabled"]="true"),k});function H(k){k!==void 0&&(De(k),r(k)),l.disable!==!0&&o("update:modelValue",U(),k)}function U(){if(q.value===!0){if(w.value===!0){const k=l.modelValue.slice();return k.splice(C.value,1),k}return l.modelValue.concat([l.val])}if(w.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(h.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function G(k){(k.keyCode===13||k.keyCode===32)&&De(k)}function F(k){(k.keyCode===13||k.keyCode===32)&&H(k)}const j=n(w,_);return Object.assign(v,{toggle:H}),()=>{const k=j();l.disable!==!0&&T(k,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const L=[a("div",{class:$.value,style:S.value},k)];m.value!==null&&L.push(m.value);const X=l.label!==void 0?Ce(g.default,[l.label]):ie(g.default);return X!==void 0&&L.push(a("div",{class:`q-${e}__label q-anchor--skip`},X)),a("div",{ref:c,class:V.value,...p.value,onClick:H,onKeydown:G,onKeyup:F},L)}}const Ut=a("div",{key:"svg",class:"q-checkbox__bg absolute"},[a("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[a("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),a("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var qe=z({name:"QCheckbox",props:Qt,emits:zt,setup(e){function n(l,g){const o=i(()=>(l.value===!0?e.checkedIcon:g.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[a("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[a(ke,{class:"q-checkbox__icon",name:o.value})])]:[Ut]}return Ht("checkbox",n)}});function Kt(e,n){return new Date(e)-new Date(n)}const Wt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Gt(e,n,l,g){const o=i(()=>{const{sortBy:d}=n.value;return d&&l.value.find(c=>c.name===d)||null}),v=i(()=>e.sortMethod!==void 0?e.sortMethod:(d,c,m)=>{const r=l.value.find(C=>C.name===c);if(r===void 0||r.field===void 0)return d;const S=m===!0?-1:1,q=typeof r.field=="function"?C=>r.field(C):C=>C[r.field];return d.sort((C,w)=>{let h=q(C),_=q(w);return h==null?-1*S:_==null?1*S:r.sort!==void 0?r.sort(h,_,C,w)*S:we(h)===!0&&we(_)===!0?(h-_)*S:Me(h)===!0&&Me(_)===!0?Kt(h,_)*S:typeof h=="boolean"&&typeof _=="boolean"?(h-_)*S:([h,_]=[h,_].map(B=>(B+"").toLocaleString().toLowerCase()),h<_?-1*S:h===_?0:S)})});function u(d){let c=e.columnSortOrder;if(_t(d)===!0)d.sortOrder&&(c=d.sortOrder),d=d.name;else{const S=l.value.find(q=>q.name===d);S!==void 0&&S.sortOrder&&(c=S.sortOrder)}let{sortBy:m,descending:r}=n.value;m!==d?(m=d,r=c==="da"):e.binaryStateSort===!0?r=!r:r===!0?c==="ad"?m=null:r=!1:c==="ad"?r=!0:m=null,g({sortBy:m,descending:r,page:1})}return{columnToSort:o,computedSortMethod:v,sort:u}}const Xt={filter:[String,Object],filterMethod:Function};function Jt(e,n){const l=i(()=>e.filterMethod!==void 0?e.filterMethod:(g,o,v,u)=>{const d=o?o.toLowerCase():"";return g.filter(c=>v.some(m=>{const r=u(m,c)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(d)!==-1}))});return Q(()=>e.filter,()=>{Ne(()=>{n({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function Yt(e,n){for(const l in n)if(n[l]!==e[l])return!1;return!0}function Ae(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Zt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function el(e,n){const{props:l,emit:g}=e,o=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length>0?l.rowsPerPageOptions[0]:5},l.pagination)),v=i(()=>{const r=l["onUpdate:pagination"]!==void 0?{...o.value,...l.pagination}:o.value;return Ae(r)}),u=i(()=>v.value.rowsNumber!==void 0);function d(r){c({pagination:r,filter:l.filter})}function c(r={}){Ne(()=>{g("request",{pagination:r.pagination||v.value,filter:r.filter||l.filter,getCellValue:n})})}function m(r,S){const q=Ae({...v.value,...r});if(Yt(v.value,q)===!0){u.value===!0&&S===!0&&d(q);return}if(u.value===!0){d(q);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?g("update:pagination",q):o.value=q}return{innerPagination:o,computedPagination:v,isServerSide:u,requestServerInteraction:c,setPagination:m}}function tl(e,n,l,g,o,v){const{props:u,emit:d,proxy:{$q:c}}=e,m=i(()=>g.value===!0?l.value.rowsNumber||0:v.value),r=i(()=>{const{page:x,rowsPerPage:T}=l.value;return(x-1)*T}),S=i(()=>{const{page:x,rowsPerPage:T}=l.value;return x*T}),q=i(()=>l.value.page===1),C=i(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),w=i(()=>S.value===0?!0:l.value.page>=C.value),h=i(()=>(u.rowsPerPageOptions.includes(n.value.rowsPerPage)?u.rowsPerPageOptions:[n.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(T=>({label:T===0?c.lang.table.allRows:""+T,value:T})));Q(C,(x,T)=>{if(x===T)return;const p=l.value.page;x&&!p?o({page:1}):x<p&&o({page:x})});function _(){o({page:1})}function B(){const{page:x}=l.value;x>1&&o({page:x-1})}function V(){const{page:x,rowsPerPage:T}=l.value;S.value>0&&x*T<m.value&&o({page:x+1})}function $(){o({page:C.value})}return u["onUpdate:pagination"]!==void 0&&d("update:pagination",{...l.value}),{firstRowIndex:r,lastRowIndex:S,isFirstPage:q,isLastPage:w,pagesNumber:C,computedRowsPerPageOptions:h,computedRowsNumber:m,firstPage:_,prevPage:B,nextPage:V,lastPage:$}}const ll={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},al=["update:selected","selection"];function nl(e,n,l,g){const o=i(()=>{const w={};return e.selected.map(g.value).forEach(h=>{w[h]=!0}),w}),v=i(()=>e.selection!=="none"),u=i(()=>e.selection==="single"),d=i(()=>e.selection==="multiple"),c=i(()=>l.value.length>0&&l.value.every(w=>o.value[g.value(w)]===!0)),m=i(()=>c.value!==!0&&l.value.some(w=>o.value[g.value(w)]===!0)),r=i(()=>e.selected.length);function S(w){return o.value[w]===!0}function q(){n("update:selected",[])}function C(w,h,_,B){n("selection",{rows:h,added:_,keys:w,evt:B});const V=u.value===!0?_===!0?h:[]:_===!0?e.selected.concat(h):e.selected.filter($=>w.includes(g.value($))===!1);n("update:selected",V)}return{hasSelectionMode:v,singleSelection:u,multipleSelection:d,allRowsSelected:c,someRowsSelected:m,rowsSelectedNumber:r,isRowSelected:S,clearSelection:q,updateSelection:C}}function pe(e){return Array.isArray(e)?e.slice():[]}const rl={expanded:Array},ol=["update:expanded"];function il(e,n){const l=A(pe(e.expanded));Q(()=>e.expanded,u=>{l.value=pe(u)});function g(u){return l.value.includes(u)}function o(u){e.expanded!==void 0?n("update:expanded",u):l.value=u}function v(u,d){const c=l.value.slice(),m=c.indexOf(u);d===!0?m===-1&&(c.push(u),o(c)):m!==-1&&(c.splice(m,1),o(c))}return{isRowExpanded:g,setExpanded:o,updateExpanded:v}}const ul={visibleColumns:Array};function sl(e,n,l){const g=i(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(c=>({name:c,label:c.toUpperCase(),field:c,align:we(d[c])?"right":"left",sortable:!0})):[]}),o=i(()=>{const{sortBy:d,descending:c}=n.value;return(e.visibleColumns!==void 0?g.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):g.value).map(r=>{const S=r.align||"right",q=`text-${S}`;return{...r,align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:q+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===d?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>q+" "+r.classes:C=>q+" "+r.classes(C):()=>q}})}),v=i(()=>{const d={};return o.value.forEach(c=>{d[c.name]=c}),d}),u=i(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(l.value===!0?1:0));return{colList:g,computedCols:o,computedColsMap:v,computedColspan:u}}const oe="q-table__bottom row items-center",He={};Qe.forEach(e=>{He[e]={}});var ql=z({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...He,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...ue,...Vt,...ul,...Xt,...Zt,...rl,...ll,...Wt},emits:["request","virtual-scroll",...Ot,...ol,...al],setup(e,{slots:n,emit:l}){const g=W(),{proxy:{$q:o}}=g,v=se(e,o),{inFullscreen:u,toggleFullscreen:d}=$t(),c=i(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=A(null),r=A(null),S=i(()=>e.grid!==!0&&e.virtualScroll===!0),q=i(()=>" q-table__card"+(v.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=i(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(v.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),w=i(()=>C.value+(e.loading===!0?" q-table--loading":""));Q(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{S.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:h,computedPagination:_,isServerSide:B,requestServerInteraction:V,setPagination:$}=el(g,E),{computedFilterMethod:x}=Jt(e,$),{isRowExpanded:T,setExpanded:p,updateExpanded:H}=il(e,l),U=i(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:s,descending:f}=_.value;return e.filter&&(t=x.value(t,e.filter,D.value,E)),We.value!==null&&(t=Ge.value(e.rows===t?t.slice():t,s,f)),t}),G=i(()=>U.value.length),F=i(()=>{let t=U.value;if(B.value===!0)return t;const{rowsPerPage:s}=_.value;return s!==0&&(Y.value===0&&e.rows!==t?t.length>Z.value&&(t=t.slice(0,Z.value)):t=t.slice(Y.value,Z.value)),t}),{hasSelectionMode:j,singleSelection:k,multipleSelection:L,allRowsSelected:X,someRowsSelected:Pe,rowsSelectedNumber:ce,isRowSelected:de,clearSelection:Ue,updateSelection:J}=nl(e,l,F,c),{colList:Ke,computedCols:D,computedColsMap:xe,computedColspan:Re}=sl(e,_,j),{columnToSort:We,computedSortMethod:Ge,sort:ve}=Gt(e,_,Ke,$),{firstRowIndex:Y,lastRowIndex:Z,isFirstPage:fe,isLastPage:ge,pagesNumber:ee,computedRowsPerPageOptions:Xe,computedRowsNumber:te,firstPage:be,prevPage:me,nextPage:Se,lastPage:he}=tl(g,h,_,B,$,G),Je=i(()=>F.value.length===0),Ye=i(()=>{const t={};return Qe.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ze(){S.value===!0&&r.value.reset()}function et(){if(e.grid===!0)return vt();const t=e.hideHeader!==!0?$e:null;if(S.value===!0){const f=n["top-row"],b=n["bottom-row"],y={default:R=>Be(R.item,n.body,R.index)};if(f!==void 0){const R=a("tbody",f({cols:D.value}));y.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(y.before=t);return b!==void 0&&(y.after=()=>a("tbody",b({cols:D.value}))),a(At,{ref:r,class:e.tableClass,style:e.tableStyle,...Ye.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:Re.value,onVirtualScroll:lt},y)}const s=[at()];return t!==null&&s.unshift(t()),ze({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function tt(t,s){if(r.value!==null){r.value.scrollTo(t,s);return}t=parseInt(t,10);const f=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(f!==null){const b=m.value.querySelector(".q-table__middle.scroll"),{offsetTop:y}=f,R=y<b.scrollTop?"decrease":"increase";b.scrollTop=y,l("virtual-scroll",{index:t,from:0,to:h.value.rowsPerPage-1,direction:R})}}function lt(t){l("virtual-scroll",t)}function Te(){return[a(Et,{class:"q-table__linear-progress",color:e.color,dark:v.value,indeterminate:!0,trackColor:"transparent"})]}function Be(t,s,f){const b=c.value(t),y=de(b);if(s!==void 0)return s(Ve({key:b,row:t,pageIndex:f,__trClass:y?"selected":""}));const R=n["body-cell"],P=D.value.map(O=>{const ae=n[`body-cell-${O.name}`],ne=ae!==void 0?ae:R;return ne!==void 0?ne(nt({key:b,row:t,pageIndex:f,col:O})):a("td",{class:O.__tdClass(t),style:O.__tdStyle(t)},E(O,t))});if(j.value===!0){const O=n["body-selection"],ae=O!==void 0?O(rt({key:b,row:t,pageIndex:f})):[a(qe,{modelValue:y,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(ne,ft)=>{J([b],[t],ne,ft)}})];P.unshift(a("td",{class:"q-table--col-auto-width"},ae))}const M={key:b,class:{selected:y}};return e.onRowClick!==void 0&&(M.class["cursor-pointer"]=!0,M.onClick=O=>{l("RowClick",O,t,f)}),e.onRowDblclick!==void 0&&(M.class["cursor-pointer"]=!0,M.onDblclick=O=>{l("RowDblclick",O,t,f)}),e.onRowContextmenu!==void 0&&(M.class["cursor-pointer"]=!0,M.onContextmenu=O=>{l("RowContextmenu",O,t,f)}),a("tr",M,P)}function at(){const t=n.body,s=n["top-row"],f=n["bottom-row"];let b=F.value.map((y,R)=>Be(y,t,R));return s!==void 0&&(b=s({cols:D.value}).concat(b)),f!==void 0&&(b=b.concat(f({cols:D.value}))),a("tbody",b)}function Ve(t){return ye(t),t.cols=t.cols.map(s=>{const f={...s};return K(f,"value",()=>E(s,t.row)),f}),t}function nt(t){return ye(t),K(t,"value",()=>E(t.col,t.row)),t}function rt(t){return ye(t),t}function ye(t){Object.assign(t,{cols:D.value,colsMap:xe.value,sort:ve,rowIndex:Y.value+t.pageIndex,color:e.color,dark:v.value,dense:e.dense}),j.value===!0&&K(t,"selected",()=>de(t.key),(s,f)=>{J([t.key],[t.row],s,f)}),K(t,"expand",()=>T(t.key),s=>{H(t.key,s)})}function E(t,s){const f=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(f,s):f}const I=i(()=>({pagination:_.value,pagesNumber:ee.value,isFirstPage:fe.value,isLastPage:ge.value,firstPage:be,prevPage:me,nextPage:Se,lastPage:he,inFullscreen:u.value,toggleFullscreen:d}));function ot(){const t=n.top,s=n["top-left"],f=n["top-right"],b=n["top-selection"],y=j.value===!0&&b!==void 0&&ce.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return a("div",{class:R},[t(I.value)]);let P;if(y===!0?P=b(I.value).slice():(P=[],s!==void 0?P.push(a("div",{class:"q-table-control"},[s(I.value)])):e.title&&P.push(a("div",{class:"q-table__control"},[a("div",{class:["q-table__title",e.titleClass]},e.title)]))),f!==void 0&&(P.push(a("div",{class:"q-table__separator col"})),P.push(a("div",{class:"q-table__control"},[f(I.value)]))),P.length!==0)return a("div",{class:R},P)}const Oe=i(()=>Pe.value===!0?null:X.value);function $e(){const t=it();return e.loading===!0&&n.loading===void 0&&t.push(a("tr",{class:"q-table__progress"},[a("th",{class:"relative-position",colspan:Re.value},Te())])),a("thead",t)}function it(){const t=n.header,s=n["header-cell"];if(t!==void 0)return t(_e({header:!0})).slice();const f=D.value.map(b=>{const y=n[`header-cell-${b.name}`],R=y!==void 0?y:s,P=_e({col:b});return R!==void 0?R(P):a(Ft,{key:b.name,props:P},()=>b.label)});if(k.value===!0&&e.grid!==!0)f.unshift(a("th",{class:"q-table--col-auto-width"}," "));else if(L.value===!0){const b=n["header-selection"],y=b!==void 0?b(_e({})):[a(qe,{color:e.color,modelValue:Oe.value,dark:v.value,dense:e.dense,"onUpdate:modelValue":Fe})];f.unshift(a("th",{class:"q-table--col-auto-width"},y))}return[a("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},f)]}function _e(t){return Object.assign(t,{cols:D.value,sort:ve,colsMap:xe.value,color:e.color,dark:v.value,dense:e.dense}),L.value===!0&&K(t,"selected",()=>Oe.value,Fe),t}function Fe(t){Pe.value===!0&&(t=!1),J(F.value.map(c.value),F.value,t)}const le=i(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Je.value===!0){if(e.hideNoData===!0)return;const f=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,b=n["no-data"],y=b!==void 0?[b({message:f,icon:o.iconSet.table.warning,filter:e.filter})]:[a(ke,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),f];return a("div",{class:oe+" q-table__bottom--nodata"},y)}const t=n.bottom;if(t!==void 0)return a("div",{class:oe},[t(I.value)]);const s=e.hideSelectedBanner!==!0&&j.value===!0&&ce.value>0?[a("div",{class:"q-table__control"},[a("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ce.value)])])]:[];if(e.hidePagination!==!0)return a("div",{class:oe+" justify-end"},ct(s));if(s.length>0)return a("div",{class:oe},s)}function st(t){$({page:1,rowsPerPage:t.value})}function ct(t){let s;const{rowsPerPage:f}=_.value,b=e.paginationLabel||o.lang.table.pagination,y=n.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(a("div",{class:"q-table__separator col"})),R===!0&&t.push(a("div",{class:"q-table__control"},[a("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),a(xt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:f,options:Xe.value,displayValue:f===0?o.lang.table.allRows:f,dark:v.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":st})])),y!==void 0)s=y(I.value);else if(s=[a("span",f!==0?{class:"q-table__bottom-item"}:{},[f?b(Y.value+1,Math.min(Z.value,te.value),te.value):b(1,G.value,te.value)])],f!==0&&ee.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),ee.value>2&&s.push(a(re,{key:"pgFirst",...P,icon:le.value[0],disable:fe.value,onClick:be})),s.push(a(re,{key:"pgPrev",...P,icon:le.value[1],disable:fe.value,onClick:me}),a(re,{key:"pgNext",...P,icon:le.value[2],disable:ge.value,onClick:Se})),ee.value>2&&s.push(a(re,{key:"pgLast",...P,icon:le.value[3],disable:ge.value,onClick:he}))}return t.push(a("div",{class:"q-table__control"},s)),t}function dt(){const t=e.gridHeader===!0?[a("table",{class:"q-table"},[$e()])]:e.loading===!0&&n.loading===void 0?Te():void 0;return a("div",{class:"q-table__middle"},t)}function vt(){const t=n.item!==void 0?n.item:s=>{const f=s.cols.map(y=>a("div",{class:"q-table__grid-item-row"},[a("div",{class:"q-table__grid-item-title"},[y.label]),a("div",{class:"q-table__grid-item-value"},[y.value])]));if(j.value===!0){const y=n["body-selection"],R=y!==void 0?y(s):[a(qe,{modelValue:s.selected,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(P,M)=>{J([s.key],[s.row],P,M)}})];f.unshift(a("div",{class:"q-table__grid-item-row"},R),a(wt,{dark:v.value}))}const b={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=y=>{l("RowClick",y,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=y=>{l("RowDblclick",y,s.row,s.pageIndex)})),a("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[a("div",b,f)])};return a("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((s,f)=>t(Ve({key:c.value(s),row:s,pageIndex:f}))))}return Object.assign(g.proxy,{requestServerInteraction:V,setPagination:$,firstPage:be,prevPage:me,nextPage:Se,lastPage:he,isRowSelected:de,clearSelection:Ue,isRowExpanded:T,setExpanded:p,sort:ve,resetVirtualScroll:Ze,scrollTo:tt,getCellValue:E}),qt(g.proxy,{filteredSortedRows:()=>U.value,computedRows:()=>F.value,computedRowsNumber:()=>te.value}),()=>{const t=[ot()],s={ref:m,class:w.value};return e.grid===!0?t.push(dt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(et(),ut()),e.loading===!0&&n.loading!==void 0&&t.push(n.loading()),a("div",s,t)}}});export{ql as Q,Qt as a,zt as b,Ht as c,qe as d,Dt as e,Nt as o,It as u};
