import{Q as h,a as s}from"./QTable.2965f1ff.js";import{Q as v}from"./QBtn.40d62d65.js";import{B as g,e as u,f as d,m as l,j as n,k as t,af as f,_ as p,a0 as i,F as b,$ as _,p as q,t as k}from"./index.11608dba.js";import"./create.6ebd28f1.js";import"./render.e31021a0.js";import"./Ripple.877a939d.js";import"./QSeparator.0fdd68e8.js";import"./use-dark.55d0a7a3.js";import"./QList.d462ac06.js";import"./QSelect.07912d9e.js";import"./use-key-composition.efc9ecb3.js";import"./QSpinner.f59fa46a.js";import"./focus-manager.d6507951.js";import"./QItem.acd67996.js";import"./QMenu.119aa93d.js";import"./selection.0f4cca1a.js";import"./focusout.dd75ad4c.js";import"./use-timeout.f5d8a06d.js";import"./scroll.67cedf7f.js";import"./QDialog.2005f48b.js";import"./rtl.4b414a6d.js";import"./use-fullscreen.dbd66013.js";const x={class:"q-pa-xl"},A=l("div",{class:"q-pb-xl"},[l("div",{class:"text-h5 text-center text-weight-bold",style:{color:"#5E8A4B"}},"\u8A02\u55AE\u7BA1\u7406")],-1),B={class:"col-12"},N={key:0},Q=k("\u522A\u9664"),Z={__name:"AdminOrderView",setup(V){const m=g([]),y=[{name:"_id",required:!0,label:"\u8A02\u55AEID",align:"left",field:r=>r._id,sortable:!0},{name:"user",required:!0,label:"\u6703\u54E1ID",align:"left",field:r=>{var a;return(a=r.user)==null?void 0:a._id},sortable:!0},{name:"name",required:!0,label:"\u6703\u54E1\u59D3\u540D",align:"left",sortable:!0},{name:"phone",required:!0,label:"\u6703\u54E1\u96FB\u8A71",align:"left",sortable:!0},{name:"products",required:!0,label:"\u8CFC\u8CB7\u5546\u54C1",align:"left",sortable:!0},{name:"quantity",required:!0,label:"\u8CFC\u8CB7\u6578\u91CF",align:"left",sortable:!0},{name:"PAY",required:!0,label:"\u4ED8\u6B3E\u65B9\u5F0F",align:"left",sortable:!0},{name:"cardname",required:!0,label:"\u6301\u5361\u4EBA\u59D3\u540D",align:"left",sortable:!0},{name:"PAYaccound",required:!0,label:"\u4ED8\u6B3E\u5E33\u865F / \u672B\u4E94\u78BC",align:"left",sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F / \u522A\u9664",align:"left",sortable:!0}],w=async r=>{try{await f.delete("/orders/"+r),await p.fire({icon:"success",title:"\u522A\u9664\u6210\u529F"});const a=m.findIndex(e=>e._id===r);m.splice(a,1)}catch(a){p.fire({icon:"error",title:"\u5931\u6557",text:a.isAxiosError?a.response.data.message:a.message})}};return(async()=>{try{const{data:r}=await f.get("/orders/all");m.push(...r.result.map(a=>(a.totalPrice=a.products.reduce((e,o)=>e+o.price*o.quantity,0),a))),console.log(r.result)}catch(r){console.log(r),p.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(r,a)=>(u(),d("div",x,[A,l("div",B,[n(h,{class:"text-grey-7",title:"\u8A02\u55AE\u8CC7\u6599",rows:m,columns:y,"row-key":"name",filter:r.filter},{"body-cell-name":t(e=>[n(s,null,{default:t(()=>[l("div",null,i(e.row.name),1)]),_:2},1024)]),"body-cell-phone":t(e=>[n(s,null,{default:t(()=>[l("div",null,i(e.row.phone),1)]),_:2},1024)]),"body-cell-products":t(e=>[n(s,null,{default:t(()=>[(u(!0),d(b,null,_(e.row.products,o=>{var c;return u(),d("div",{key:o},[l("div",null,i((c=o.product)==null?void 0:c.name),1)])}),128))]),_:2},1024)]),"body-cell-quantity":t(e=>[n(s,null,{default:t(()=>[(u(!0),d(b,null,_(e.row.products,o=>(u(),d("div",{key:o},[l("div",null,i(o.quantity),1)]))),128))]),_:2},1024)]),"body-cell-PAY":t(e=>[n(s,null,{default:t(()=>{var o,c;return[l("div",null,i((o=e.row.cardtype)==null?void 0:o.label),1),l("div",null,i((c=e.row.checkPay)==null?void 0:c.label),1),e.row.atmcheckDay?(u(),d("div",N,"ATM \u4ED8\u6B3E")):q("",!0)]}),_:2},1024)]),"body-cell-cardname":t(e=>[n(s,null,{default:t(()=>[l("div",null,i(e.row.cardname),1),l("div",null,i(e.row.checkName),1),l("div",null,i(e.row.atmcheckName),1)]),_:2},1024)]),"body-cell-PAYaccound":t(e=>[n(s,null,{default:t(()=>[l("div",null,i(e.row.cardnumber),1),l("div",null,i(e.row.checkAccount),1),l("div",null,i(e.row.atmcheckAccount),1)]),_:2},1024)]),"body-cell-edit":t(e=>[n(s,null,{default:t(()=>[n(v,{onClick:o=>w(e.row._id)},{default:t(()=>[Q]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])]))}};export{Z as default};