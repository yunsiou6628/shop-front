import{Q as B}from"./QCard.71dd6be9.js";import{Q as C,b as Q,a as p}from"./QTable.2965f1ff.js";import{c as L}from"./create.6ebd28f1.js";import{a as T}from"./render.e31021a0.js";import{c as V,h as E,B as F,e as r,f as o,m as s,j as d,k as l,af as N,_ as O,F as h,$ as f,q as P,ak as $,a0 as a,p as i,n as m,t as j}from"./index.11608dba.js";import{Q as S}from"./QImg.a3e1469d.js";import{Q as z}from"./QBtn.40d62d65.js";import"./use-dark.55d0a7a3.js";import"./Ripple.877a939d.js";import"./QSeparator.0fdd68e8.js";import"./QList.d462ac06.js";import"./QSelect.07912d9e.js";import"./use-key-composition.efc9ecb3.js";import"./QSpinner.f59fa46a.js";import"./focus-manager.d6507951.js";import"./QItem.acd67996.js";import"./QMenu.119aa93d.js";import"./selection.0f4cca1a.js";import"./focusout.dd75ad4c.js";import"./use-timeout.f5d8a06d.js";import"./scroll.67cedf7f.js";import"./QDialog.2005f48b.js";import"./rtl.4b414a6d.js";import"./use-fullscreen.dbd66013.js";var w=L({name:"QTr",props:{props:Object,noHover:Boolean},setup(u,{slots:c}){const _=V(()=>"q-tr"+(u.props===void 0||u.props.header===!0?"":" "+u.props.__trClass)+(u.noHover===!0?" q-tr--no-hover":""));return()=>E("tr",{class:_.value},T(c.default))}});const A={class:"q-pa-xl",style:{width:"100%",height:"100%","background-image":"linear-gradient(to bottom,#F4F8EE, #fff)","z-index":"-1"}},H={class:"col-12"},I={key:0},M={img:"img"},G=["src"],J={class:"q-ma-lg"},K={key:0},R={key:1},U={key:2},W={key:3},X={key:4},Y={key:5},Z={key:2},ee={key:3},te={key:4},re={key:5},ae={key:6},oe=s("span",null," \u986F\u793A\u8A73\u7D30\u8CC7\u6599 ",-1),ie={class:"text-left text-wrapper"},Ve={__name:"OrderView",setup(u){const c=F([]),_=[{name:"image",required:!0,label:"\u5716\u7247",align:"left"},{name:"_id",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"left",field:n=>n._id,sortable:!0},{name:"product_date",required:!0,label:"\u884C\u7A0B\u65E5\u671F",align:"left",sortable:!0},{name:"label",required:!0,label:"\u4ED8\u6B3E\u65B9\u5F0F",align:"left",sortable:!0},{name:"date",required:!0,label:"\u4E0B\u8A02\u55AE\u65E5\u671F",align:"left",sortable:!0}];return(async()=>{try{const{data:n}=await N.get("/orders/getMyOrders");c.push(...n.result)}catch{O.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(n,le)=>(r(),o("div",A,[s("div",H,[d(C,{grid:n.$q.screen.lt.md,title:"\u8A02\u55AE\u67E5\u8A62",rows:c,columns:_,"row-key":"name",filter:n.filter,style:{color:"#5E8A4B"}},{item:l(e=>[d(B,{class:"col-12 q-pa-md q-my-lg text-weight-bold text-grey-7"},{default:l(()=>[(r(!0),o(h,null,f(e.cols,t=>(r(),o("div",{key:t.name},[t.name==="image"?(r(),o("div",I,[s("div",M,[s("img",{src:e.row.products[0].product.image,style:{width:"100%"}},null,8,G)])])):i("",!0),s("div",J,[t.name==="_id"?(r(),o("div",K,[s("div",null,"\u8A02\u55AE\u7DE8\u865F : "+a(e.row.products[0].product._id),1)])):i("",!0),t.name==="product_date"?(r(),o("div",R,[s("div",null,a(t.label)+" : "+a(new Date(e.row.products[0].product.product_date.from).toLocaleDateString())+" ~ "+a(new Date(e.row.products[0].product.product_date.to).toLocaleDateString()),1)])):i("",!0),t.name==="quantity"?(r(),o("div",U,[s("div",null,a(t.label)+" : "+a(t.value),1)])):i("",!0),t.name==="price"?(r(),o("div",W,[s("div",null,a(t.label)+" : "+a(t.value),1)])):i("",!0),t.name==="subtotal"?(r(),o("div",X,[s("div",null,a(t.label)+" : "+a(t.value),1)])):i("",!0),t.name==="date"?(r(),o("div",Y,[s("div",null,a(t.label)+" : "+a(new Date(e.row.date).toLocaleDateString()),1)])):i("",!0)])]))),128))]),_:2},1024)]),header:l(e=>[d(w,{props:e},{default:l(()=>[(r(!0),o(h,null,f(e.cols,t=>(r(),m(Q,{key:t.name,props:e},{default:l(()=>[j(a(t.label),1)]),_:2},1032,["props"]))),128)),d(Q,{"auto-width":""})]),_:2},1032,["props"])]),body:l(e=>[d(w,{props:e},{default:l(()=>[(r(!0),o(h,null,f(e.cols,t=>(r(),m(p,{key:t.name,props:e},{default:l(()=>{var g,b,v,y,k,q,D,x;return[t.label=="\u5716\u7247"&&((g=e.row.products[0].product)==null?void 0:g.image)?(r(),m(S,{key:0,src:(b=e.row.products[0].product)==null?void 0:b.image,"q-pa-sm":""},null,8,["src"])):i("",!0),t.label=="\u5716\u7247"&&!((v=e.row.products[0].product)!=null&&v.image)?(r(),m(S,{key:1})):i("",!0),t.label=="\u884C\u7A0B\u65E5\u671F"?(r(),o("span",Z,a(new Date((y=e.row.products[0].product)==null?void 0:y.product_date.from).toLocaleDateString())+" ~ "+a(new Date((k=e.row.products[0].product)==null?void 0:k.product_date.to).toLocaleDateString()),1)):i("",!0),t.label=="\u8A02\u55AE\u7DE8\u865F"?(r(),o("span",ee,a(e.row._id),1)):i("",!0),t.label=="\u4E0B\u8A02\u55AE\u65E5\u671F"?(r(),o("span",te,a(new Date(e.row.date).toLocaleDateString()),1)):i("",!0),t.label=="\u4ED8\u6B3E\u65B9\u5F0F"&&((q=e.row.checkPay)==null?void 0:q.label)?(r(),o("span",re,a((D=e.row.checkPay)==null?void 0:D.label),1)):i("",!0),t.label=="\u4ED8\u6B3E\u65B9\u5F0F"&&!((x=e.row.checkPay)!=null&&x.label)?(r(),o("span",ae,"\u4ED8\u6B3E\u65B9\u5F0F\u672A\u586B")):i("",!0)]}),_:2},1032,["props"]))),128)),d(p,{"auto-width":""},{default:l(()=>[d(z,{size:"sm",onClick:t=>e.expand=!e.expand},{default:l(()=>[oe]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["props"]),P(d(w,{props:e},{default:l(()=>[d(p,{colspan:"100%"},{default:l(()=>[s("div",ie,[s("pre",null,a(e.row),1)])]),_:2},1024)]),_:2},1032,["props"]),[[$,e.expand]])]),_:1},8,["grid","rows","filter"])])]))}};export{Ve as default};