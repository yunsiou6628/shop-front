import{Q as y,a as U,b}from"./QTabPanels.517ae062.js";import{a as z}from"./QTabs.4721b2c4.js";import{Q as h}from"./QSeparator.dae6cbb7.js";import{Q as i}from"./QInput.9a049c2c.js";import{Q as V}from"./QBtn.fd74b821.js";import{Q as g}from"./QForm.14ef5ded.js";import{Q as B}from"./QCard.3373cc56.js";import{u as E,r as w,B as c,b as T,e as j,m as o,f as a,j as r,Y as k,a7 as v,t as n,a1 as p,Z as A,$ as _}from"./index.29aa1ca1.js";import"./render.1af6db0b.js";import"./use-panel.2dd48bb7.js";import"./selection.cc46c2a0.js";import"./use-cache.b0833c75.js";import"./Ripple.15150790.js";import"./use-dark.986dc809.js";import"./use-timeout.c83cb5b2.js";import"./rtl.4b414a6d.js";import"./use-key-composition.0dd64b41.js";import"./QSpinner.1e7c4006.js";import"./focus-manager.d6507951.js";const F={class:"q-pa-md q-py-xl row justify-center",style:{height:"100vh","background-image":"linear-gradient(to bottom,#F4F8EE, #fff)","z-index":"-1"}},N={class:"q-gutter-y-md",style:{width:"800px"}},P={class:"q-pa-xl"},Z={class:"col-5"},$={class:"col-5"},C={class:"col-5"},D={class:"col-5"},I={class:"q-gutter-md col-md-8 offset-md-0 q-mt-xl"},L={class:"q-pa-xl"},M={class:"q-gutter-md"},ne={__name:"LoginPage",setup(R){const x=E(),Q=k(),f=w(!1),u=w("mails"),s=c({account:"",password:"",email:"",name:""}),m=c({account:"",password:""}),d=c({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],email:[e=>!!e||"mail\u5FC5\u586B"]}),q=async()=>{f.value=!0;try{await A.post("/users",s),await _.fire({icon:"success",title:"\u6210\u529F",text:"\u8A3B\u518A\u6210\u529F"}),Q.push("/")}catch(e){_.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError&&e.response.data?e.response.data.message:"\u767C\u751F\u932F\u8AA4"})}f.value=!1},S=()=>{x.login(m)};return(e,l)=>(T(),j("div",F,[o("div",N,[a(B,null,{default:r(()=>[a(z,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=t=>u.value=t),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:r(()=>[a(y,{name:"mails",label:"\u8A3B\u518A"}),a(y,{name:"alarms",label:"\u767B\u5165"})]),_:1},8,["modelValue"]),a(h),a(U,{modelValue:u.value,"onUpdate:modelValue":l[7]||(l[7]=t=>u.value=t),animated:""},{default:r(()=>[a(b,{name:"mails"},{default:r(()=>[o("div",P,[a(g,{onSubmit:v(q,["prevent"]),class:"q-gutter-md items-start q-py-sm"},{default:r(()=>[o("div",Z,[n(p(s.account)+" ",1),a(i,{filled:"",type:"text",label:"account",modelValue:s.account,"onUpdate:modelValue":l[1]||(l[1]=t=>s.account=t),"lazy-rules":"",rules:d.account},null,8,["modelValue","rules"])]),o("div",$,[n(p(s.password)+" ",1),a(i,{filled:"",type:"password",label:"password",modelValue:s.password,"onUpdate:modelValue":l[2]||(l[2]=t=>s.password=t),"lazy-rules":"",rules:d.password},null,8,["modelValue","rules"])]),o("div",C,[n(p(s.name)+" ",1),a(i,{filled:"",type:"name",label:"name",modelValue:s.name,"onUpdate:modelValue":l[3]||(l[3]=t=>s.name=t),"lazy-rules":"",rules:d.name},null,8,["modelValue","rules"])]),o("div",D,[n(p(s.email)+" ",1),a(i,{filled:"",modelValue:s.email,"onUpdate:modelValue":l[4]||(l[4]=t=>s.email=t),type:"email",label:"E-mail"},null,8,["modelValue"])]),o("div",I,[a(V,{label:"Submit",type:"submit",color:"primary"})])]),_:1},8,["onSubmit"])])]),_:1}),a(b,{name:"alarms"},{default:r(()=>[o("div",L,[a(g,{onSubmit:v(S,["prevent"]),class:"q-gutter-md items-start q-py-sm"},{default:r(()=>[a(i,{filled:"",type:"text",label:"account",modelValue:m.account,"onUpdate:modelValue":l[5]||(l[5]=t=>m.account=t),"lazy-rules":"",rules:d.account},null,8,["modelValue","rules"]),a(i,{filled:"",type:"password",label:"password",modelValue:m.password,"onUpdate:modelValue":l[6]||(l[6]=t=>m.password=t),"lazy-rules":"",rules:d.password},null,8,["modelValue","rules"]),o("div",M,[a(V,{label:"Submit",type:"submit",color:"primary"})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1},8,["modelValue"])]),_:1})])]))}};export{ne as default};
