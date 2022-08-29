import{c as A}from"./create.c71cb389.js";import{a as H,b as gt,h as ke,u as Ee,c as Qe}from"./render.8ea1afb5.js";import{c as u,h as n,g as U,r as j,w as z,a4 as bt,y as mt,K as St,J as ht,o as yt,A as pe,H as Le,af as N,X as we,ag as Me,ah as _t,I as Ie,ai as qt,a9 as G}from"./index.c246fae3.js";import{Q as Ce}from"./Ripple.b280e37f.js";import{Q as wt}from"./QSeparator.fdab95b7.js";import{Q as kt}from"./QList.93a1f3be.js";import{u as ue,a as se}from"./use-dark.a64dcf6d.js";import{u as Ct,a as Pt,c as Ne,Q as xt}from"./QSelect.5e053b9b.js";import{g as Rt}from"./scroll.ea5a40f8.js";import{a as Tt,h as Bt}from"./use-key-composition.f1caf0a8.js";import{Q as oe}from"./QBtn.0ec4fc58.js";import{u as Vt,a as Ot,b as $t}from"./use-fullscreen.18114e91.js";var wl=A({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const l=U(),v=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return n("td",{class:v.value},H(a.default));const o=l.vnode.key,c=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(c===void 0)return;const{row:i}=e.props;return n("td",{class:v.value+c.__tdClass(i),style:c.__tdStyle(i)},H(a.default))}}}),Ft=A({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const v=U(),{proxy:{$q:o}}=v,c=i=>{l("click",i)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:c},H(a.default));let i,f;const d=v.vnode.key;if(d){if(i=e.props.colsMap[d],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const r=i.align==="right"?"unshift":"push";f=gt(a.default,[]),f[r](n(Ce,{class:i.__iconClass,name:o.iconSet.table.arrowUp}))}else f=H(a.default);const m={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:r=>{i.sortable===!0&&e.props.sort(i),c(r)}};return n("th",m,f)}}});const pt=["horizontal","vertical","cell","none"];var Lt=A({name:"QMarkupTable",props:{...ue,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>pt.includes(e)}},setup(e,{slots:a}){const l=U(),v=se(e,l.proxy.$q),o=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(v.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:o.value},[n("table",{class:"q-table"},H(a.default))])}});function He(e,a){return n("div",e,[n("table",{class:"q-table"},a)])}const Mt={list:kt,table:Lt},Dt=["list","table","__qtable"];var jt=A({name:"QVirtualScroll",props:{...Ct,type:{type:String,default:"list",validator:e=>Dt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let v;const o=j(null),c=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:f,padVirtualScroll:d,onVirtualScrollEvt:m}=Pt({virtualScrollLength:c,getVirtualScrollTarget:w,getVirtualScrollEl:C}),r=u(()=>{if(c.value===0)return[];const V=($,x)=>({index:i.value.from+x,item:$});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(V):e.itemsFn(i.value.from,i.value.to-i.value.from).map(V)}),S=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});z(c,()=>{f()}),z(()=>e.scrollTarget,()=>{_(),h()});function C(){return o.value.$el||o.value}function w(){return v}function h(){v=Rt(C(),e.scrollTarget),v.addEventListener("scroll",m,pe.passive)}function _(){v!==void 0&&(v.removeEventListener("scroll",m,pe.passive),v=void 0)}function B(){let V=d(e.type==="list"?"div":"tbody",r.value.map(a.default));return a.before!==void 0&&(V=a.before().concat(V)),ke(a.after,V)}return bt(()=>{f()}),mt(()=>{h()}),St(()=>{h()}),ht(()=>{_()}),yt(()=>{_()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:o,class:"q-table__middle "+S.value},B()):n(Mt[e.type],{...l,ref:o,class:[l.class,S.value],...q.value},B)}}});const At={xs:2,sm:4,md:6,lg:10,xl:14};function De(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Et=A({name:"QLinearProgress",props:{...ue,...Ee,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=U(),v=se(e,l.$q),o=Qe(e,At),c=u(()=>e.indeterminate===!0||e.query===!0),i=u(()=>e.reverse!==e.query),f=u(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=u(()=>De(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),r=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),S=u(()=>De(c.value===!0?1:e.value,i.value,l.$q)),q=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${c.value===!0?"in":""}determinate`),C=u(()=>({width:`${e.value*100}%`})),w=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const h=[n("div",{class:r.value,style:m.value}),n("div",{class:q.value,style:S.value})];return e.stripe===!0&&c.value===!1&&h.push(n("div",{class:w.value,style:C.value})),n("div",{class:d.value,style:f.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},ke(a.default,h))}}});function Qt(e,a){const l=j(null),v=u(()=>e.disable===!0?null:n("span",{ref:l,class:"no-outline",tabindex:-1}));function o(c){const i=a.value;c!==void 0&&c.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():l.value!==null&&(c===void 0||i!==null&&i.contains(c.target)===!0)&&l.value.focus()}return{refocusTargetEl:v,refocusTarget:o}}var It={xs:30,sm:35,md:40,lg:50,xl:60};const Nt={...ue,...Ee,...Tt,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Ht=["update:modelValue"];function zt(e,a){const{props:l,slots:v,emit:o,proxy:c}=U(),{$q:i}=c,f=se(l,i),d=j(null),{refocusTargetEl:m,refocusTarget:r}=Qt(l,d),S=Qe(l,It),q=u(()=>l.val!==void 0&&Array.isArray(l.modelValue)),C=u(()=>{const k=N(l.val);return q.value===!0?l.modelValue.findIndex(p=>N(p)===k):-1}),w=u(()=>q.value===!0?C.value>-1:N(l.modelValue)===N(l.trueValue)),h=u(()=>q.value===!0?C.value===-1:N(l.modelValue)===N(l.falseValue)),_=u(()=>w.value===!1&&h.value===!1),B=u(()=>l.disable===!0?-1:l.tabindex||0),V=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(f.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),$=u(()=>{const k=w.value===!0?"truthy":h.value===!0?"falsy":"indet",p=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?w.value===!0:h.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${p}`}),x=u(()=>{const k={type:"checkbox"};return l.name!==void 0&&Object.assign(k,{"^checked":w.value===!0?"checked":void 0,name:l.name,value:q.value===!0?l.val:l.trueValue}),k}),T=Bt(x),E=u(()=>{const k={tabindex:B.value,role:"checkbox","aria-label":l.label,"aria-checked":_.value===!0?"mixed":w.value===!0?"true":"false"};return l.disable===!0&&(k["aria-disabled"]="true"),k});function K(k){k!==void 0&&(Le(k),r(k)),l.disable!==!0&&o("update:modelValue",W(),k)}function W(){if(q.value===!0){if(w.value===!0){const k=l.modelValue.slice();return k.splice(C.value,1),k}return l.modelValue.concat([l.val])}if(w.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(h.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function X(k){(k.keyCode===13||k.keyCode===32)&&Le(k)}function F(k){(k.keyCode===13||k.keyCode===32)&&K(k)}const D=a(w,_);return Object.assign(c,{toggle:K}),()=>{const k=D();l.disable!==!0&&T(k,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const p=[n("div",{class:$.value,style:S.value},k)];m.value!==null&&p.push(m.value);const J=l.label!==void 0?ke(v.default,[l.label]):H(v.default);return J!==void 0&&p.push(n("div",{class:`q-${e}__label q-anchor--skip`},J)),n("div",{ref:d,class:V.value,...E.value,onClick:K,onKeydown:X,onKeyup:F},p)}}const Ut=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var qe=A({name:"QCheckbox",props:Nt,emits:Ht,setup(e){function a(l,v){const o=u(()=>(l.value===!0?e.checkedIcon:v.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(Ce,{class:"q-checkbox__icon",name:o.value})])]:[Ut]}return zt("checkbox",a)}});function Kt(e,a){return new Date(e)-new Date(a)}const Wt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Gt(e,a,l,v){const o=u(()=>{const{sortBy:f}=a.value;return f&&l.value.find(d=>d.name===f)||null}),c=u(()=>e.sortMethod!==void 0?e.sortMethod:(f,d,m)=>{const r=l.value.find(C=>C.name===d);if(r===void 0||r.field===void 0)return f;const S=m===!0?-1:1,q=typeof r.field=="function"?C=>r.field(C):C=>C[r.field];return f.sort((C,w)=>{let h=q(C),_=q(w);return h==null?-1*S:_==null?1*S:r.sort!==void 0?r.sort(h,_,C,w)*S:we(h)===!0&&we(_)===!0?(h-_)*S:Me(h)===!0&&Me(_)===!0?Kt(h,_)*S:typeof h=="boolean"&&typeof _=="boolean"?(h-_)*S:([h,_]=[h,_].map(B=>(B+"").toLocaleString().toLowerCase()),h<_?-1*S:h===_?0:S)})});function i(f){let d=e.columnSortOrder;if(_t(f)===!0)f.sortOrder&&(d=f.sortOrder),f=f.name;else{const S=l.value.find(q=>q.name===f);S!==void 0&&S.sortOrder&&(d=S.sortOrder)}let{sortBy:m,descending:r}=a.value;m!==f?(m=f,r=d==="da"):e.binaryStateSort===!0?r=!r:r===!0?d==="ad"?m=null:r=!1:d==="ad"?r=!0:m=null,v({sortBy:m,descending:r,page:1})}return{columnToSort:o,computedSortMethod:c,sort:i}}const Xt={filter:[String,Object],filterMethod:Function};function Jt(e,a){const l=u(()=>e.filterMethod!==void 0?e.filterMethod:(v,o,c,i)=>{const f=o?o.toLowerCase():"";return v.filter(d=>c.some(m=>{const r=i(m,d)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(f)!==-1}))});return z(()=>e.filter,()=>{Ie(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function Yt(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function je(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Zt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function el(e,a){const{props:l,emit:v}=e,o=j(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length>0?l.rowsPerPageOptions[0]:5},l.pagination)),c=u(()=>{const r=l["onUpdate:pagination"]!==void 0?{...o.value,...l.pagination}:o.value;return je(r)}),i=u(()=>c.value.rowsNumber!==void 0);function f(r){d({pagination:r,filter:l.filter})}function d(r={}){Ie(()=>{v("request",{pagination:r.pagination||c.value,filter:r.filter||l.filter,getCellValue:a})})}function m(r,S){const q=je({...c.value,...r});if(Yt(c.value,q)===!0){i.value===!0&&S===!0&&f(q);return}if(i.value===!0){f(q);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?v("update:pagination",q):o.value=q}return{innerPagination:o,computedPagination:c,isServerSide:i,requestServerInteraction:d,setPagination:m}}function tl(e,a,l,v,o,c){const{props:i,emit:f,proxy:{$q:d}}=e,m=u(()=>v.value===!0?l.value.rowsNumber||0:c.value),r=u(()=>{const{page:x,rowsPerPage:T}=l.value;return(x-1)*T}),S=u(()=>{const{page:x,rowsPerPage:T}=l.value;return x*T}),q=u(()=>l.value.page===1),C=u(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),w=u(()=>S.value===0?!0:l.value.page>=C.value),h=u(()=>(i.rowsPerPageOptions.includes(a.value.rowsPerPage)?i.rowsPerPageOptions:[a.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(T=>({label:T===0?d.lang.table.allRows:""+T,value:T})));z(C,(x,T)=>{if(x===T)return;const E=l.value.page;x&&!E?o({page:1}):x<E&&o({page:x})});function _(){o({page:1})}function B(){const{page:x}=l.value;x>1&&o({page:x-1})}function V(){const{page:x,rowsPerPage:T}=l.value;S.value>0&&x*T<m.value&&o({page:x+1})}function $(){o({page:C.value})}return i["onUpdate:pagination"]!==void 0&&f("update:pagination",{...l.value}),{firstRowIndex:r,lastRowIndex:S,isFirstPage:q,isLastPage:w,pagesNumber:C,computedRowsPerPageOptions:h,computedRowsNumber:m,firstPage:_,prevPage:B,nextPage:V,lastPage:$}}const ll={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},al=["update:selected","selection"];function nl(e,a,l,v){const o=u(()=>{const w={};return e.selected.map(v.value).forEach(h=>{w[h]=!0}),w}),c=u(()=>e.selection!=="none"),i=u(()=>e.selection==="single"),f=u(()=>e.selection==="multiple"),d=u(()=>l.value.length>0&&l.value.every(w=>o.value[v.value(w)]===!0)),m=u(()=>d.value!==!0&&l.value.some(w=>o.value[v.value(w)]===!0)),r=u(()=>e.selected.length);function S(w){return o.value[w]===!0}function q(){a("update:selected",[])}function C(w,h,_,B){a("selection",{rows:h,added:_,keys:w,evt:B});const V=i.value===!0?_===!0?h:[]:_===!0?e.selected.concat(h):e.selected.filter($=>w.includes(v.value($))===!1);a("update:selected",V)}return{hasSelectionMode:c,singleSelection:i,multipleSelection:f,allRowsSelected:d,someRowsSelected:m,rowsSelectedNumber:r,isRowSelected:S,clearSelection:q,updateSelection:C}}function Ae(e){return Array.isArray(e)?e.slice():[]}const rl={expanded:Array},ol=["update:expanded"];function il(e,a){const l=j(Ae(e.expanded));z(()=>e.expanded,i=>{l.value=Ae(i)});function v(i){return l.value.includes(i)}function o(i){e.expanded!==void 0?a("update:expanded",i):l.value=i}function c(i,f){const d=l.value.slice(),m=d.indexOf(i);f===!0?m===-1&&(d.push(i),o(d)):m!==-1&&(d.splice(m,1),o(d))}return{isRowExpanded:v,setExpanded:o,updateExpanded:c}}const ul={visibleColumns:Array};function sl(e,a,l){const v=u(()=>{if(e.columns!==void 0)return e.columns;const f=e.rows[0];return f!==void 0?Object.keys(f).map(d=>({name:d,label:d.toUpperCase(),field:d,align:we(f[d])?"right":"left",sortable:!0})):[]}),o=u(()=>{const{sortBy:f,descending:d}=a.value;return(e.visibleColumns!==void 0?v.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):v.value).map(r=>{const S=r.align||"right",q=`text-${S}`;return{...r,align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:q+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===f?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>q+" "+r.classes:C=>q+" "+r.classes(C):()=>q}})}),c=u(()=>{const f={};return o.value.forEach(d=>{f[d.name]=d}),f}),i=u(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(l.value===!0?1:0));return{colList:v,computedCols:o,computedColsMap:c,computedColspan:i}}const ie="q-table__bottom row items-center",ze={};Ne.forEach(e=>{ze[e]={}});var kl=A({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...ze,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...ue,...Vt,...ul,...Xt,...Zt,...rl,...ll,...Wt},emits:["request","virtual-scroll",...Ot,...ol,...al],setup(e,{slots:a,emit:l}){const v=U(),{proxy:{$q:o}}=v,c=se(e,o),{inFullscreen:i,toggleFullscreen:f}=$t(),d=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=j(null),r=j(null),S=u(()=>e.grid!==!0&&e.virtualScroll===!0),q=u(()=>" q-table__card"+(c.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(c.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),w=u(()=>C.value+(e.loading===!0?" q-table--loading":""));z(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{S.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:h,computedPagination:_,isServerSide:B,requestServerInteraction:V,setPagination:$}=el(v,Q),{computedFilterMethod:x}=Jt(e,$),{isRowExpanded:T,setExpanded:E,updateExpanded:K}=il(e,l),W=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:s,descending:g}=_.value;return e.filter&&(t=x.value(t,e.filter,L.value,Q)),We.value!==null&&(t=Ge.value(e.rows===t?t.slice():t,s,g)),t}),X=u(()=>W.value.length),F=u(()=>{let t=W.value;if(B.value===!0)return t;const{rowsPerPage:s}=_.value;return s!==0&&(Z.value===0&&e.rows!==t?t.length>ee.value&&(t=t.slice(0,ee.value)):t=t.slice(Z.value,ee.value)),t}),{hasSelectionMode:D,singleSelection:k,multipleSelection:p,allRowsSelected:J,someRowsSelected:Pe,rowsSelectedNumber:ce,isRowSelected:de,clearSelection:Ue,updateSelection:Y}=nl(e,l,F,d),{colList:Ke,computedCols:L,computedColsMap:xe,computedColspan:Re}=sl(e,_,D),{columnToSort:We,computedSortMethod:Ge,sort:ve}=Gt(e,_,Ke,$),{firstRowIndex:Z,lastRowIndex:ee,isFirstPage:fe,isLastPage:ge,pagesNumber:te,computedRowsPerPageOptions:Xe,computedRowsNumber:le,firstPage:be,prevPage:me,nextPage:Se,lastPage:he}=tl(v,h,_,B,$,X),Je=u(()=>F.value.length===0),Ye=u(()=>{const t={};return Ne.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ze(){S.value===!0&&r.value.reset()}function et(){if(e.grid===!0)return vt();const t=e.hideHeader!==!0?$e:null;if(S.value===!0){const g=a["top-row"],b=a["bottom-row"],y={default:R=>Be(R.item,a.body,R.index)};if(g!==void 0){const R=n("tbody",g({cols:L.value}));y.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(y.before=t);return b!==void 0&&(y.after=()=>n("tbody",b({cols:L.value}))),n(jt,{ref:r,class:e.tableClass,style:e.tableStyle,...Ye.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:Re.value,onVirtualScroll:lt},y)}const s=[at()];return t!==null&&s.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function tt(t,s){if(r.value!==null){r.value.scrollTo(t,s);return}t=parseInt(t,10);const g=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const b=m.value.querySelector(".q-table__middle.scroll"),{offsetTop:y}=g,R=y<b.scrollTop?"decrease":"increase";b.scrollTop=y,l("virtual-scroll",{index:t,from:0,to:h.value.rowsPerPage-1,direction:R})}}function lt(t){l("virtual-scroll",t)}function Te(){return[n(Et,{class:"q-table__linear-progress",color:e.color,dark:c.value,indeterminate:!0,trackColor:"transparent"})]}function Be(t,s,g){const b=d.value(t),y=de(b);if(s!==void 0)return s(Ve({key:b,row:t,pageIndex:g,__trClass:y?"selected":""}));const R=a["body-cell"],P=L.value.map(O=>{const ne=a[`body-cell-${O.name}`],re=ne!==void 0?ne:R;return re!==void 0?re(nt({key:b,row:t,pageIndex:g,col:O})):n("td",{class:O.__tdClass(t),style:O.__tdStyle(t)},Q(O,t))});if(D.value===!0){const O=a["body-selection"],ne=O!==void 0?O(rt({key:b,row:t,pageIndex:g})):[n(qe,{modelValue:y,color:e.color,dark:c.value,dense:e.dense,"onUpdate:modelValue":(re,ft)=>{Y([b],[t],re,ft)}})];P.unshift(n("td",{class:"q-table--col-auto-width"},ne))}const M={key:b,class:{selected:y}};return e.onRowClick!==void 0&&(M.class["cursor-pointer"]=!0,M.onClick=O=>{l("RowClick",O,t,g)}),e.onRowDblclick!==void 0&&(M.class["cursor-pointer"]=!0,M.onDblclick=O=>{l("RowDblclick",O,t,g)}),e.onRowContextmenu!==void 0&&(M.class["cursor-pointer"]=!0,M.onContextmenu=O=>{l("RowContextmenu",O,t,g)}),n("tr",M,P)}function at(){const t=a.body,s=a["top-row"],g=a["bottom-row"];let b=F.value.map((y,R)=>Be(y,t,R));return s!==void 0&&(b=s({cols:L.value}).concat(b)),g!==void 0&&(b=b.concat(g({cols:L.value}))),n("tbody",b)}function Ve(t){return ye(t),t.cols=t.cols.map(s=>{const g={...s};return G(g,"value",()=>Q(s,t.row)),g}),t}function nt(t){return ye(t),G(t,"value",()=>Q(t.col,t.row)),t}function rt(t){return ye(t),t}function ye(t){Object.assign(t,{cols:L.value,colsMap:xe.value,sort:ve,rowIndex:Z.value+t.pageIndex,color:e.color,dark:c.value,dense:e.dense}),D.value===!0&&G(t,"selected",()=>de(t.key),(s,g)=>{Y([t.key],[t.row],s,g)}),G(t,"expand",()=>T(t.key),s=>{K(t.key,s)})}function Q(t,s){const g=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(g,s):g}const I=u(()=>({pagination:_.value,pagesNumber:te.value,isFirstPage:fe.value,isLastPage:ge.value,firstPage:be,prevPage:me,nextPage:Se,lastPage:he,inFullscreen:i.value,toggleFullscreen:f}));function ot(){const t=a.top,s=a["top-left"],g=a["top-right"],b=a["top-selection"],y=D.value===!0&&b!==void 0&&ce.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:R},[t(I.value)]);let P;if(y===!0?P=b(I.value).slice():(P=[],s!==void 0?P.push(n("div",{class:"q-table-control"},[s(I.value)])):e.title&&P.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(n("div",{class:"q-table__separator col"})),P.push(n("div",{class:"q-table__control"},[g(I.value)]))),P.length!==0)return n("div",{class:R},P)}const Oe=u(()=>Pe.value===!0?null:J.value);function $e(){const t=it();return e.loading===!0&&a.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Re.value},Te())])),n("thead",t)}function it(){const t=a.header,s=a["header-cell"];if(t!==void 0)return t(_e({header:!0})).slice();const g=L.value.map(b=>{const y=a[`header-cell-${b.name}`],R=y!==void 0?y:s,P=_e({col:b});return R!==void 0?R(P):n(Ft,{key:b.name,props:P},()=>b.label)});if(k.value===!0&&e.grid!==!0)g.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(p.value===!0){const b=a["header-selection"],y=b!==void 0?b(_e({})):[n(qe,{color:e.color,modelValue:Oe.value,dark:c.value,dense:e.dense,"onUpdate:modelValue":Fe})];g.unshift(n("th",{class:"q-table--col-auto-width"},y))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function _e(t){return Object.assign(t,{cols:L.value,sort:ve,colsMap:xe.value,color:e.color,dark:c.value,dense:e.dense}),p.value===!0&&G(t,"selected",()=>Oe.value,Fe),t}function Fe(t){Pe.value===!0&&(t=!1),Y(F.value.map(d.value),F.value,t)}const ae=u(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Je.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,b=a["no-data"],y=b!==void 0?[b({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[n(Ce,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return n("div",{class:ie+" q-table__bottom--nodata"},y)}const t=a.bottom;if(t!==void 0)return n("div",{class:ie},[t(I.value)]);const s=e.hideSelectedBanner!==!0&&D.value===!0&&ce.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ce.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:ie+" justify-end"},ct(s));if(s.length>0)return n("div",{class:ie},s)}function st(t){$({page:1,rowsPerPage:t.value})}function ct(t){let s;const{rowsPerPage:g}=_.value,b=e.paginationLabel||o.lang.table.pagination,y=a.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),R===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),n(xt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Xe.value,displayValue:g===0?o.lang.table.allRows:g,dark:c.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":st})])),y!==void 0)s=y(I.value);else if(s=[n("span",g!==0?{class:"q-table__bottom-item"}:{},[g?b(Z.value+1,Math.min(ee.value,le.value),le.value):b(1,X.value,le.value)])],g!==0&&te.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),te.value>2&&s.push(n(oe,{key:"pgFirst",...P,icon:ae.value[0],disable:fe.value,onClick:be})),s.push(n(oe,{key:"pgPrev",...P,icon:ae.value[1],disable:fe.value,onClick:me}),n(oe,{key:"pgNext",...P,icon:ae.value[2],disable:ge.value,onClick:Se})),te.value>2&&s.push(n(oe,{key:"pgLast",...P,icon:ae.value[3],disable:ge.value,onClick:he}))}return t.push(n("div",{class:"q-table__control"},s)),t}function dt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[$e()])]:e.loading===!0&&a.loading===void 0?Te():void 0;return n("div",{class:"q-table__middle"},t)}function vt(){const t=a.item!==void 0?a.item:s=>{const g=s.cols.map(y=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[y.label]),n("div",{class:"q-table__grid-item-value"},[y.value])]));if(D.value===!0){const y=a["body-selection"],R=y!==void 0?y(s):[n(qe,{modelValue:s.selected,color:e.color,dark:c.value,dense:e.dense,"onUpdate:modelValue":(P,M)=>{Y([s.key],[s.row],P,M)}})];g.unshift(n("div",{class:"q-table__grid-item-row"},R),n(wt,{dark:c.value}))}const b={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=y=>{l("RowClick",y,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=y=>{l("RowDblclick",y,s.row,s.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[n("div",b,g)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((s,g)=>t(Ve({key:d.value(s),row:s,pageIndex:g}))))}return Object.assign(v.proxy,{requestServerInteraction:V,setPagination:$,firstPage:be,prevPage:me,nextPage:Se,lastPage:he,isRowSelected:de,clearSelection:Ue,isRowExpanded:T,setExpanded:E,sort:ve,resetVirtualScroll:Ze,scrollTo:tt,getCellValue:Q}),qt(v.proxy,{filteredSortedRows:()=>W.value,computedRows:()=>F.value,computedRowsNumber:()=>le.value}),()=>{const t=[ot()],s={ref:m,class:w.value};return e.grid===!0?t.push(dt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(et(),ut()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),n("div",s,t)}}});export{kl as Q,wl as a,Nt as b,Ht as c,zt as d,qe as e,Lt as f,It as o,Qt as u};
