import{Q as y}from"./QInput.052f3307.js";import{Q as d}from"./QBtn.f279a071.js";import{Q as A}from"./QForm.a408df62.js";import{Q as F}from"./Ripple.891c4bd2.js";import{Q as S,a as k}from"./QTable.a344ee36.js";import{r as $,B as w,e as i,f as m,m as n,j as r,k as s,a6 as E,F as b,ae as h,_ as p,$ as V,n as _,t as u,a0 as U}from"./index.ff29e5ab.js";import"./use-key-composition.54987b19.js";import"./QSpinner.de2b4796.js";import"./render.0ef71f6b.js";import"./use-dark.75e59d6f.js";import"./focus-manager.d6507951.js";import"./QSeparator.97932856.js";import"./QList.f8ec6bc3.js";import"./QSelect.f5e3f362.js";import"./QItem.61f9569c.js";import"./QMenu.bb69f940.js";import"./selection.e417e335.js";import"./focusout.25c3a41b.js";import"./use-timeout.82738b16.js";import"./scroll.997765d1.js";import"./QDialog.b454607d.js";import"./rtl.4b414a6d.js";import"./use-fullscreen.5694e1f6.js";const j=n("div",{class:"q-pt-xl"},[n("div",{class:"text-h5 text-center"},"\u5546\u54C1\u5206\u985E")],-1),I={class:"q-pa-xl"},N={class:"q-pb-xl row justify-center"},T={class:"row"},D={class:"col-12"},L=u("+"),M=u("\u2014"),z={class:"q-pt-md row justify-center"},G=u(" \u65B0\u589E\u5206\u985E "),H=u(" \u7DE8\u8F2F\u78BA\u8A8D "),J=u("\u53D6\u6D88"),K={class:"col-12"},O=u("\u7DE8\u8F2F"),P=u("\u522A\u9664"),he={__name:"AdminCategory",setup(R){const f=$(""),l=w([]),e=w({_id:"",category:"",sub:[{name:""}],idx:-1,dialog:!1,valid:!1,submitting:!1}),v=()=>{e._id="",e.category="",e.sub=[{name:""}],e.idx=-1,e.dialog=!1,e.valid=!1,e.submitting=!1},C=o=>{const t=o===""?-1:l.findIndex(a=>a._id===o);e._id=o,console.log(e._id),t>-1?(e.category=l[t].category,e.sub=l[t].sub):(e.category="",e.sub=""),e.idx=t,e.dialog=!0,e.valid=!1,e.submitting=!1},Q=async()=>{e.submitting=!0;const o=new FormData;for(const t in e)["_id","idx","dialog","valid","submitting"].includes(t)||o.append(t,e[t]);try{if(e._id.length===0){const{data:t}=await h.post("/products_category",e);l.push(t.result),p.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:t}=await h.patch("/products_category/"+e._id,e);l[e.idx]=t.result,p.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),v()}e.dialog=!1}catch(t){p.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}e.submitting=!1},q=[{name:"category",required:!0,label:"\u5927\u5206\u985E",align:"left",field:o=>o.category,sortable:!0},{name:"sub",required:!0,label:"\u5C0F\u5206\u985E",align:"left",sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F\u4FEE\u6539",align:"left",sortable:!0}],B=async o=>{try{x()}catch(t){console.log("\u5931\u6557"),p.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}},x=async()=>{try{const{data:o}=await h.get("/products_category/all");l.splice(0,l.length),l.push(...o.result)}catch(o){p.fire({icon:"error",title:"\u5931\u6557",text:o.isAxiosError?o.response.data.message:o.message})}};return x(),(o,t)=>(i(),m(b,null,[j,n("div",I,[n("div",N,[r(A,{onSubmit:E(Q,["prevent"])},{default:s(()=>[n("div",T,[n("div",D,[r(y,{outlined:"",modelValue:e.category,"onUpdate:modelValue":t[0]||(t[0]=a=>e.category=a),label:"\u8F38\u5165\u5927\u5206\u985E"},null,8,["modelValue"])]),(i(!0),m(b,null,V(e.sub,(a,c)=>(i(),m("div",{class:"col-12",key:c},[r(y,{outlined:"",modelValue:a.name,"onUpdate:modelValue":g=>a.name=g,label:"\u8F38\u5165\u5C0F\u5206\u985E"},null,8,["modelValue","onUpdate:modelValue"]),c===0?(i(),_(d,{key:0,onClick:g=>e.sub.push({name:""})},{default:s(()=>[L]),_:2},1032,["onClick"])):(i(),_(d,{key:1,onClick:g=>e.sub.splice(c,1),id:"submit"},{default:s(()=>[M]),_:2},1032,["onClick"]))]))),128))]),n("div",z,[e._id===""?(i(),_(d,{key:0,type:"submit",color:"secondary"},{default:s(()=>[G]),_:1})):(i(),_(d,{key:1,type:"submit",color:"yellow-8"},{default:s(()=>[H]),_:1})),r(d,{color:"primary",onClick:v},{default:s(()=>[J]),_:1})])]),_:1},8,["onSubmit"])]),n("div",K,[r(S,{title:"\u5546\u54C1\u5206\u985E\u8CC7\u6599",rows:l,columns:q,"row-key":"name",filter:f.value},{"top-right":s(()=>[r(y,{borderless:"",dense:"",debounce:"300",modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=a=>f.value=a),placeholder:"Search"},{append:s(()=>[r(F,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-sub":s(a=>[r(k,null,{default:s(()=>[(i(!0),m(b,null,V(a.row.sub,c=>(i(),m("div",{key:c},[n("pre",null,U(c.name),1)]))),128))]),_:2},1024)]),"body-cell-edit":s(a=>[r(k,null,{default:s(()=>[r(d,{onClick:c=>C(a.row._id)},{default:s(()=>[O]),_:2},1032,["onClick"]),r(d,{onClick:c=>B(a.row._id)},{default:s(()=>[P]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])])],64))}};export{he as default};
