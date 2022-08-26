import{u as D,a as L,Q as $,e as R}from"./Ripple.98361d2d.js";import{c as C,h as P,a as N}from"./render.f0516c4c.js";import{c as x,h as b,u as U,r as w,B as S,e as j,f as M,m as t,j as s,k as m,a0 as i,a6 as V,F,aj as I,Y as T,Z as z,_ as O,t as f}from"./index.932b337e.js";import{a as Y,b as Z,Q as y}from"./QBtn.8d6d3afb.js";import{Q as B}from"./QImg.814a6f32.js";import{Q as v}from"./QSeparator.5d987790.js";import{Q}from"./QInput.4bfb2191.js";import{Q as k}from"./QForm.5173043c.js";import"./QSpinner.3792bdff.js";import"./use-dark.58fcdffb.js";import"./use-key-composition.2b116415.js";import"./focus-manager.d6507951.js";var q=C({name:"QBreadcrumbsEl",props:{...D,label:String,icon:String,tag:{type:String,default:"span"}},setup(a,{slots:p}){const{linkTag:g,linkProps:h,linkClass:u,hasRouterLink:_,navigateToRouterLink:r}=L(),e=x(()=>{const d={class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(a.disable!==!0?"q-link--focusable"+u.value:"q-breadcrumbs__el--disable"),...h.value};return _.value===!0&&(d.onClick=r),d}),c=x(()=>"q-breadcrumbs__el-icon"+(a.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const d=[];return a.icon!==void 0&&d.push(b($,{class:c.value,name:a.icon})),a.label!==void 0&&d.push(a.label),b(g.value,{...e.value},P(p.default,d))}}});const G=["",!0];var H=C({name:"QBreadcrumbs",props:{...Y,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:a=>["none","xs","sm","md","lg","xl"].includes(a),default:"sm"}},setup(a,{slots:p}){const g=Z(a),h=x(()=>`flex items-center ${g.value}${a.gutter==="none"?"":` q-gutter-${a.gutter}`}`),u=x(()=>a.separatorColor?` text-${a.separatorColor}`:""),_=x(()=>` text-${a.activeColor}`);return()=>{const r=R(N(p.default));if(r.length===0)return;let e=1;const c=[],d=r.filter(o=>o.type!==void 0&&o.type.name==="QBreadcrumbsEl").length,l=p.separator!==void 0?p.separator:()=>a.separator;return r.forEach(o=>{if(o.type!==void 0&&o.type.name==="QBreadcrumbsEl"){const n=e<d,E=o.props!==null&&G.includes(o.props.disable),A=(n===!0?"":" q-breadcrumbs--last")+(E!==!0&&n===!0?_.value:"");e++,c.push(b("div",{class:`flex items-center${A}`},[o])),n===!0&&c.push(b("div",{class:"q-breadcrumbs__separator"+u.value},l()))}else c.push(o)}),b("div",{class:"q-breadcrumbs"},[b("div",{class:h.value},c)])}}});const J={class:"q-pa-md q-gutter-sm"},K={class:"q-px-xxxl gt-md",style:{"margin-left":"20%","margin-right":"20%",color:"#5E8A4B"}},W={class:"row"},X={class:"col-12 q-py-xl text-center",ratio:4/3},tt={class:"col-12 q-py-sm text-weight-bold text-h4"},et={class:"col-12 q-py-sm q-my-sm text-weight-bold text-h6 row"},lt={class:"col-12 q-py-sm text-weight-bold text-h6"},st={class:"col-12 q-py-sm text-weight-bold text-subtitle1"},ot=t("div",{class:"col-12 q-py-sm text-weight-bold text-subtitle1 row"},[t("span",null,"\u203B \u5831\u540D\u8ACB\u5148\u586B\u5BEB\u500B\u4EBA\u8CC7\u6599\u8207\u9AD4\u80FD\u8A55\u4F30\u8868\u55AE\uFF0C\u586B\u5BEB\u5B8C\u6210\u5F8C\uFF0C\u8ACB\u975C\u5019\u56AE\u5C0E\u548C\u60A8\u806F\u7E6B\uFF0C\u8207\u60A8\u8A0E\u8AD6\u662F\u5426\u9069\u5408\u53C3\u8207\u6B64\u884C\u7A0B\u3002"),t("span",null,"\u203B \u672C\u5718\u51FA\u968A\u5C07\u4EE5\u5B89\u5168\u5E36\u60A8\u4E0A\u3001\u4E0B\u5C71\u70BA\u76EE\u6A19\uFF0C\u6545\u5C07\u8A55\u4F30\u60A8\u7684\u5065\u5EB7\u8207\u9AD4\u80FD\u72C0\u614B\uFF0C\u7D66\u4E88\u5C0D\u61C9\u7684\u8A13\u7DF4\u5EFA\u8B70\u548C\u884C\u524D\u6E96\u5099\u3002"),t("span",null,"\u203B \u56E0\u61C9\u9632\u75AB\u63AA\u65BD\uFF0C14\u5929\u5167\u6709\u570B\u5916\u65C5\u904A\u53F2\u3001\u78BA\u8A3A\u8005\u63A5\u89F8\u53F2\uFF0C\u6700\u665A\u51FA\u767C\u524D1\u9031\u8ACB\u4F86\u96FB\u544A\u77E5\u66F4\u63DB\u6642\u9593\u6216\u53D6\u6D88\u3002")],-1),at={class:"col-12"},it={class:"col-12 q-px-xxxl"},nt={class:"col-12 q-py-sm text-subtitle1 row justify-center"},rt=f(" \u52A0\u5165\u8CFC\u7269\u8ECA"),ut={class:"col-12 q-py-sm text-weight-bold text-subtitle1 text-wrapper"},ct={class:"col-12"},dt=t("div",{class:"column"},[t("span",null,"\u203B \u8CBB \u7528 \u8AAA \u660E :"),t("span",null,"\u8CBB\u7528\u5305\u542B\uFF1A500\u842C\u8CAC\u4EFB\u96AA (\u4F9D\u898F\u5B9A15\u6B72\u4EE5\u4E0B\u53CA70\u6B72\u4EE5\u4E0A\u6700\u9AD8\u6295\u4FDD\u91D1\u984D\u70BA200\u842C)\u3001\u4F4F\u5BBF(\u5C71\u5C4B\u6216\u71DF\u5730)\u3001\u591A\u5929\u884C\u7A0B\u8CBB\u7528\u542B\u65E9\u665A2\u9910/\u65E5\uFF08\u4E2D\u9910\u3001\u884C\u52D5\u91CF\u81EA\u884C\u6E96\u5099\uFF09\u3001\u9AD8\u5C71\u5305\u8ECA\u8CBB\u7528\u3001\u56AE\u5C0E\u3001\u9818\u968A\u8CBB\u7528\u3001\u5C71\u5C4B\u7533\u8ACB\u884C\u653F\u624B\u7E8C\u8CBB\u7B49\u3002"),t("span",null,"\u8CBB\u7528\u4E0D\u542B\uFF1A\u984D\u5916\u4F19\u98DF\u3001\u500B\u4EBA\u767B\u5C71\u88DD\u5099\u7B49\u3002")],-1),mt={class:"col-12"},pt=t("div",{class:"column"},[t("span",null,"\u203B \u5831 \u540D \u6CE8 \u610F \u4E8B \u9805 :"),t("span",null,"\u5831\u540D\u7E73\u8CBB\u5F8C\u53D6\u6D88\u53C3\u52A0\u6309\u7167\u300C\u570B\u5167\u65C5\u904A\u5B9A\u578B\u5316\u5951\u7D04\u66F8\u300D\u898F\u5B9A:"),t("span",null,"\u8DDD\u51FA\u767C\u65E5\u524D\u7B2C41\u65E5\u4EE5\u524D\u53D6\u6D88\u6263\u6D3B\u52D5\u8CBB\u7528 5%\uFF1B"),t("span",null,"\u51FA\u767C\u65E5\u524D\u7B2C31\u65E5~\u7B2C40\u65E5\u4EE5\u524D\u53D6\u6D88\u6263\u6D3B\u52D5\u8CBB\u752810%\uFF1B"),t("span",null,"\u51FA\u767C\u65E5\u524D\u7B2C21\u65E5~\u7B2C30\u65E5\u4EE5\u5167\u626320%\uFF1B"),t("span",null,"\u51FA\u767C\u65E5\u524D\u7B2C2\u65E5~\u7B2C20\u65E5\u4EE5\u5167\u626330%\uFF1B"),t("span",null,"\u51FA\u767C\u524D\u4E00\u65E5\u626350%\uFF1B\u51FA\u767C\u7576\u65E5\u672A\u5230\u5247\u6263\u5168\u984D100%\u3002"),t("span",null," \u4E59\u65B9\u5982\u80FD\u8B49\u660E\u5176\u6240\u53D7\u640D\u5BB3\u8D85\u904E\u4EE5\u4E0A\u4E4B\u57FA\u6E96\u8005\uFF0C\u5F97\u5C31\u5176\u5BE6\u969B\u640D\u5BB3\u8ACB\u6C42\u8CE0\u511F\u3002\u5176\u4ED6\u4E8B\u9805\u6309\u7167\u300C\u570B\u5167\u65C5\u904A\u5B9A\u578B\u5316\u5951\u7D04\u66F8\u300D\u898F\u7BC4\u57F7\u884C\u3002 ")],-1),_t=f(" \u8FD4\u56DE\u884C\u7A0B "),vt={class:"lt-lg",style:{"margin-left":"5%","margin-right":"5%",color:"#5E8A4B"}},bt={class:"row"},xt={class:"col-12 q-py-xl text-center"},gt={class:"col-12 q-py-sm text-weight-bold text-h4"},ht={class:"col-12 q-py-sm q-my-sm text-weight-bold text-h6 row"},yt={class:"col-12 q-py-sm text-weight-bold text-h6"},ft={class:"col-12 q-py-sm text-weight-bold text-subtitle1"},qt=t("div",{class:"col-12 q-py-sm text-weight-bold text-subtitle1 row"},[t("span",null,"\u203B \u672C\u6D3B\u52D5\u4EE5\u767B\u5C71\u5B89\u5168\u70BA\u91CD\uFF0C\u5805\u6301\u96D9\u9818\u968A\u524D\u5F8C\u7167\u61C9\uFF0C\u8B93\u5927\u5BB6\u5B89\u5FC3\u767B\u5C71\u3002"),t("span",null,"\u203B \u56E0\u61C9\u9632\u75AB\u63AA\u65BD\uFF0C14\u5929\u5167\u6709\u570B\u5916\u65C5\u904A\u53F2\u3001\u78BA\u8A3A\u8005\u63A5\u89F8\u53F2\uFF0C\u6700\u665A\u51FA\u767C\u524D1\u9031\u8ACB\u4F86\u96FB\u544A\u77E5\u66F4\u63DB\u6642\u9593\u6216\u53D6\u6D88\u3002")],-1),wt={class:"col-12"},St={class:"col-12 q-px-xxl"},Vt={class:"col-12 q-py-sm text-subtitle1 row justify-center"},Bt=f(" \u52A0\u5165\u8CFC\u7269\u8ECA"),Qt={class:"col-12 q-py-sm text-weight-bold text-subtitle1 text-wrapper"},kt={class:"col-12"},Ct=t("div",{class:"column"},[t("span",null,"\u203B \u8CBB \u7528 \u8AAA \u660E :"),t("span",null,"\u8CBB\u7528\u5305\u542B\uFF1A500\u842C\u8CAC\u4EFB\u96AA (\u4F9D\u898F\u5B9A15\u6B72\u4EE5\u4E0B\u53CA70\u6B72\u4EE5\u4E0A\u6700\u9AD8\u6295\u4FDD\u91D1\u984D\u70BA200\u842C)\u3001\u4F4F\u5BBF(\u5C71\u5C4B\u6216\u71DF\u5730)\u3001\u591A\u5929\u884C\u7A0B\u8CBB\u7528\u542B\u65E9\u665A2\u9910/\u65E5\uFF08\u4E2D\u9910\u3001\u884C\u52D5\u91CF\u81EA\u884C\u6E96\u5099\uFF09\u3001\u9AD8\u5C71\u5305\u8ECA\u8CBB\u7528\u3001\u56AE\u5C0E\u3001\u9818\u968A\u8CBB\u7528\u3001\u5C71\u5C4B\u7533\u8ACB\u884C\u653F\u624B\u7E8C\u8CBB\u7B49\u3002"),t("span",null,"\u8CBB\u7528\u4E0D\u542B\uFF1A\u984D\u5916\u4F19\u98DF\u3001\u500B\u4EBA\u767B\u5C71\u88DD\u5099\u7B49\u3002")],-1),Et={class:"col-12"},At=t("div",{class:"column"},[t("span",null,"\u203B \u5831 \u540D \u6CE8 \u610F \u4E8B \u9805 :"),t("span",null,"\u5831\u540D\u7E73\u8CBB\u5F8C\u53D6\u6D88\u53C3\u52A0\u6309\u7167\u300C\u570B\u5167\u65C5\u904A\u5B9A\u578B\u5316\u5951\u7D04\u66F8\u300D\u898F\u5B9A:"),t("span",null,"\u8DDD\u51FA\u767C\u65E5\u524D\u7B2C41\u65E5\u4EE5\u524D\u53D6\u6D88\u6263\u6D3B\u52D5\u8CBB\u7528 5%\uFF1B"),t("span",null,"\u51FA\u767C\u65E5\u524D\u7B2C31\u65E5~\u7B2C40\u65E5\u4EE5\u524D\u53D6\u6D88\u6263\u6D3B\u52D5\u8CBB\u752810%\uFF1B"),t("span",null,"\u51FA\u767C\u65E5\u524D\u7B2C21\u65E5~\u7B2C30\u65E5\u4EE5\u5167\u626320%\uFF1B"),t("span",null,"\u51FA\u767C\u65E5\u524D\u7B2C2\u65E5~\u7B2C20\u65E5\u4EE5\u5167\u626330%\uFF1B"),t("span",null,"\u51FA\u767C\u524D\u4E00\u65E5\u626350%\uFF1B\u51FA\u767C\u7576\u65E5\u672A\u5230\u5247\u6263\u5168\u984D100%\u3002"),t("span",null," \u4E59\u65B9\u5982\u80FD\u8B49\u660E\u5176\u6240\u53D7\u640D\u5BB3\u8D85\u904E\u4EE5\u4E0A\u4E4B\u57FA\u6E96\u8005\uFF0C\u5F97\u5C31\u5176\u5BE6\u969B\u640D\u5BB3\u8ACB\u6C42\u8CE0\u511F\u3002\u5176\u4ED6\u4E8B\u9805\u6309\u7167\u300C\u570B\u5167\u65C5\u904A\u5B9A\u578B\u5316\u5951\u7D04\u66F8\u300D\u898F\u7BC4\u57F7\u884C\u3002 ")],-1),Dt=f(" \u8FD4\u56DE\u884C\u7A0B "),Ot={__name:"ProductViewOne",setup(a){const p=I(),g=T(),h=U(),u=w(1),_=S([l=>l>=1||"\u6578\u91CF\u932F\u8AA4"]),r=w(!1);x(()=>e.map(l=>({label:l.product_date,value:l._id})));const e=S({_id:"",name:"",product_date:"",region:"",reserve:0,price:0,sub:"",sell:!1,image:null,description:"",bulletin:"",idx:-1,dialog:!1,valid:!1,submitting:!1,category:{_id:"",category:"",sub:[]}}),c=()=>{h.addCart({product:e._id,quantity:u.value})};return(async()=>{try{const{data:l}=await z.get("/products/"+p.params.id);console.log("21231"+l.result),e._id=l.result._id,e.name=l.result.name,e.product_date=l.result.product_date,e.region=l.result.region,e.reserve=l.result.reserve,e.price=l.result.price,e.category=l.result.category,e.sub=l.result.sub,e.sell=l.result.sell,e.image=l.result.image,e.description=l.result.description,e.bulletin=l.result.bulletin}catch{O.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),g.go(-1)}})(),(l,o)=>(j(),M(F,null,[t("div",J,[s(H,{class:"text-teal-9","active-color":"light-green-4"},{default:m(()=>[s(q,{label:"\u767B\u5C71\u884C\u7A0B"}),s(q,null,{default:m(()=>[t("pre",null,i(e.category.category),1)]),_:1}),s(q,null,{default:m(()=>[t("pre",null,i(e.category.sub),1)]),_:1})]),_:1})]),t("div",K,[t("div",W,[t("div",X,[s(B,{src:e.image},null,8,["src"])]),t("div",tt,[t("div",null,i(e.name),1)]),t("div",et,[t("div",null,i(new Date(e.product_date.from).toLocaleDateString()),1),t("div",null," ~ "+i(new Date(e.product_date.to).toLocaleDateString()),1)]),t("div",lt,[t("div",null," $"+i(e.price),1)]),t("div",st,[t("div",null,i(e.bulletin),1)]),ot,t("div",at,[s(v,{class:"q-my-xl"})]),t("div",it,[s(Q,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=n=>u.value=n),modelModifiers:{number:!0},type:"number",filled:"",label:"\u6578\u91CF",rules:_,class:"text-weight-bold text-subtitle1",style:{color:"#5E8A4B"}},null,8,["modelValue","rules"])]),t("div",nt,[t("div",null," \u5EAB\u5B58\u5269\u9918 "+i(e.reserve),1)]),s(k,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=n=>r.value=n),onSubmit:V(c,["prevent"]),class:"col-12 row"},{default:m(()=>[s(y,{class:"col-12 q-py-sm q-my-xl q-px-xxxl text-weight-bold",style:{background:"#5E8A4B",color:"#fff"},type:"submit"},{default:m(()=>[rt]),_:1})]),_:1},8,["modelValue","onSubmit"]),t("div",ut,[t("div",null,i(e.description),1)]),t("div",ct,[s(v,{class:"q-my-lg"})]),dt,t("div",mt,[s(v,{class:"q-my-lg"})]),pt,s(y,{class:"col-12 q-py-sm q-my-xl q-px-xxxl text-weight-bold",style:{background:"#5E8A4B",color:"#fff"},type:"submit",to:"/ProductViewAll"},{default:m(()=>[_t]),_:1})])]),t("div",vt,[t("div",bt,[t("div",xt,[s(B,{src:e.image,ratio:4/3},null,8,["src"])]),t("div",gt,[t("div",null,i(e.name),1)]),t("div",ht,[t("div",null,i(new Date(e.product_date.from).toLocaleDateString()),1),t("div",null," ~ "+i(new Date(e.product_date.to).toLocaleDateString()),1)]),t("div",yt,[t("div",null," $"+i(e.price),1)]),t("div",ft,[t("div",null,i(e.bulletin),1)]),qt,t("div",wt,[s(v,{class:"q-my-xl"})]),t("div",St,[s(Q,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=n=>u.value=n),modelModifiers:{number:!0},type:"number",filled:"",label:"\u6578\u91CF",rules:_,class:"text-weight-bold text-subtitle1",style:{color:"#5E8A4B"}},null,8,["modelValue","rules"])]),t("div",Vt,[t("div",null," \u5EAB\u5B58\u5269\u9918 "+i(e.reserve),1)]),s(k,{modelValue:r.value,"onUpdate:modelValue":o[3]||(o[3]=n=>r.value=n),onSubmit:V(c,["prevent"]),class:"col-12 row"},{default:m(()=>[s(y,{class:"col-12 q-py-sm q-my-xl q-px-xxxl text-weight-bold",style:{background:"#5E8A4B",color:"#fff"},type:"submit"},{default:m(()=>[Bt]),_:1})]),_:1},8,["modelValue","onSubmit"]),t("div",Qt,[t("div",null,i(e.description),1)]),t("div",kt,[s(v,{class:"q-my-lg"})]),Ct,t("div",Et,[s(v,{class:"q-my-lg"})]),At,s(y,{class:"col-12 q-py-sm q-my-xl q-px-xxxl text-weight-bold",style:{background:"#5E8A4B",color:"#fff"},type:"submit",to:"/ProductViewAll"},{default:m(()=>[Dt]),_:1})])])],64))}};export{Ot as default};