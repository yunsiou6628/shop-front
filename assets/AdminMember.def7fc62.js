import{Q as p}from"./Ripple.c41b49b6.js";import{Q as u}from"./QInput.f20281a3.js";import{Q as f}from"./QBtn.daf27308.js";import{Q as _,a as b}from"./QTable.5868120b.js";import{r as x,B as h,e as g,f as w,j as a,k as i,m as n,ae as m,_ as s,t as Q}from"./index.f5ebbf36.js";import"./render.44e537f7.js";import"./create.8729ca24.js";import"./use-key-composition.178d78f7.js";import"./QSpinner.9c0c9cd9.js";import"./use-dark.57277639.js";import"./focus-manager.d6507951.js";import"./QSeparator.e4b569a8.js";import"./QList.aa300b7e.js";import"./QSelect.b00148d7.js";import"./QItem.817c36fe.js";import"./QMenu.ed1e8133.js";import"./selection.c2ba4770.js";import"./focusout.6bc3bf19.js";import"./use-timeout.36472764.js";import"./scroll.14591afc.js";import"./QDialog.662eeda8.js";import"./rtl.4b414a6d.js";import"./use-fullscreen.89ff757b.js";const y={class:"q-pa-xl"},v=n("div",{class:"q-pb-xl"},[n("div",{class:"text-h5 text-center text-weight-bold",style:{color:"#5E8A4B"}},"\u6703\u54E1\u7BA1\u7406")],-1),k=Q("\u522A\u9664"),X={__name:"AdminMember",setup(q){const l=x(""),r=h([]),c=[{name:"name",required:!0,label:"\u59D3\u540D",align:"left",field:e=>e.name,sortable:!0},{name:"account",required:!0,label:"\u5E33\u865F",align:"left",field:e=>e.account,sortable:!0},{name:"email",required:!0,label:"email",align:"left",field:e=>e.email,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F\u4FEE\u6539",align:"left",sortable:!0}],d=async e=>{try{await m.delete("/users/"+e),await s.fire({icon:"success",title:"\u522A\u9664\u6210\u529F"});const t=r.findIndex(o=>o._id===e);r.splice(t,1)}catch(t){s.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}};return(async()=>{try{const{data:e}=await m.get("/users/all");r.push(...e.result),console.log(r)}catch{s.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"})}})(),(e,t)=>(g(),w("div",y,[v,a(_,{class:"text-grey-7",title:"\u6703\u54E1\u8CC7\u6599",rows:r,columns:c,"row-key":"name"},{"top-right":i(()=>[a(u,{borderless:"",dense:"",debounce:"300",modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value=o),placeholder:"Search"},{append:i(()=>[a(p,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-edit":i(o=>[a(b,null,{default:i(()=>[a(f,{onClick:V=>d(o.row._id)},{default:i(()=>[k]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["rows"])]))}};export{X as default};
