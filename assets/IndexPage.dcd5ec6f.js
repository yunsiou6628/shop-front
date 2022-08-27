import{c as H,a as W,g as te,h as oe}from"./render.5ec4709a.js";import{u as ae,a as ne,b as ie,c as le}from"./use-panel.b3294171.js";import{c as x,h as m,w as Z,y as se,o as re,X as ce,g as Y,i as G,l as ue,x as de,r as C,B as ge,e as p,n as E,k as c,Y as he,Z as pe,_ as ve,m as t,j as v,f as P,$ as j,F as z,p as J,a0 as I}from"./index.8cddd238.js";import{Q as T}from"./QBtn.65600ee2.js";import{u as me,a as xe}from"./use-dark.34b738c0.js";import{u as _e,a as ye,b as fe}from"./use-fullscreen.a0ccafaa.js";import{Q as U}from"./QCard.e3611a05.js";import"./selection.0704a185.js";import"./use-cache.b0833c75.js";import"./Ripple.509c7e72.js";import"./QSpinner.c7ef136c.js";var $=H({name:"QCarouselSlide",props:{...ae,imgSrc:String},setup(e,{slots:_}){const r=x(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:r.value},W(_.default))}});const we=["top","right","bottom","left"],be=["regular","flat","outline","push","unelevated"];var A=H({name:"QCarousel",props:{...me,...ne,..._e,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>be.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>we.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...ye,...ie],setup(e,{slots:_}){const{proxy:{$q:r}}=Y(),u=xe(e,r);let w,k;const{updatePanelsList:h,getPanelContent:B,panelDirectives:D,goToPanel:F,previousPanel:S,nextPanel:n,getEnabledPanels:L,panelIndex:y}=le(),{inFullscreen:l}=fe(),a=x(()=>l.value!==!0&&e.height!==void 0?{height:e.height}:{}),o=x(()=>e.vertical===!0?"vertical":"horizontal"),Q=x(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(l.value===!0?" fullscreen":"")+(u.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${o.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${q.value}`:"")),i=x(()=>{const s=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?s.reverse():s}),f=x(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),d=x(()=>e.navigationActiveIcon||f.value),q=x(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),b=x(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Z(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(w),N())}),Z(()=>e.autoplay,s=>{s?N():clearInterval(w)});function N(){const s=ce(e.autoplay)===!0?e.autoplay:5e3;w=setTimeout(s>=0?n:S,Math.abs(s))}se(()=>{e.autoplay&&N()}),re(()=>{clearInterval(w)});function X(s,V){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${s} q-carousel__navigation--${q.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},L().map(V))])}function ee(){const s=[];if(e.navigation===!0){const V=_["navigation-icon"]!==void 0?_["navigation-icon"]:g=>m(T,{key:"nav"+g.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${g.active===!0?"":"in"}active`,...g.btnProps,onClick:g.onClick}),M=k-1;s.push(X("buttons",(g,K)=>{const O=g.props.name,R=y.value===K;return V({index:K,maxIndex:M,name:O,active:R,btnProps:{icon:R===!0?d.value:f.value,size:"sm",...b.value},onClick:()=>{F(O)}})}))}else if(e.thumbnails===!0){const V=e.controlColor!==void 0?` text-${e.controlColor}`:"";s.push(X("thumbnails",M=>{const g=M.props;return m("img",{key:"tmb#"+g.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${g.name===e.modelValue?"":"in"}active`+V,src:g.imgSrc||g["img-src"],onClick:()=>{F(g.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&s.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${o.value} absolute flex flex-center`},[m(T,{icon:i.value[0],...b.value,onClick:S})])),(e.infinite===!0||y.value<k-1)&&s.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${o.value} absolute flex flex-center`},[m(T,{icon:i.value[1],...b.value,onClick:n})]))),oe(_.control,s)}return()=>(k=h(_),m("div",{class:Q.value,style:a.value},[te("div",{class:"q-carousel__slides-container"},B(),"sl-cont",e.swipeable,()=>D.value)].concat(ee())))}}),ke=H({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:_}){const{proxy:{$q:r}}=Y(),u=G(ue);G(de,()=>{console.error("QPage needs to be child of QPageContainer")});const w=x(()=>{const h=(u.header.space===!0?u.header.size:0)+(u.footer.space===!0?u.footer.size:0);if(typeof e.styleFn=="function"){const B=u.isContainer.value===!0?u.containerHeight.value:r.screen.height;return e.styleFn(h,B)}return{minHeight:u.isContainer.value===!0?u.containerHeight.value-h+"px":r.screen.height===0?h!==0?`calc(100vh - ${h}px)`:"100vh":r.screen.height-h+"px"}}),k=x(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:k.value,style:w.value},W(_.default))}});const qe={class:"relative"},Ce=t("div",{class:"row justify-center content-center items-center q-pa-xl bg-yellow",style:{"line-height":"300px"}}," \u52A0\u5165\u6587\u5B57 ",-1),Pe=t("div",{class:"row justify-center content-center items-center q-pa-xl bg-yellow",style:{"line-height":"300px"}}," \u52A0\u5165\u6587\u5B57 ",-1),Se=t("div",{class:"row justify-center content-center items-center q-pa-xl bg-yellow",style:{"line-height":"300px"}}," \u52A0\u5165\u6587\u5B57 ",-1),Ie=t("div",{class:"flex flex-center"},[t("div",{class:"row"})],-1),$e={class:"flex flex-center",style:{width:"100%",height:"auto",background:"#F4F8EE"}},Be={class:"row",style:{width:"90%"}},Ve={class:"col-12 col-lg-5 column justify-center content-center items-center q-py-xl q-py-lg-none"},je=t("img",{src:"https://i.imgur.com/0U2S3Xo.png",class:"col-auto",style:{width:"85%"}},null,-1),ze=t("div",{class:"col-auto",style:{width:"70%","font-size":"18px",padding:"30px 5px 0px 2px",color:"#5E8A4B"}},[t("p",null,"\u8D70\u9032\u5C71\u88E1\uFF0C\u611F\u53D7\u5927\u81EA\u7136\u7684\u5BEC\u95CA\uFF0C\u5C0D\u61C9\u81EA\u5DF1\u7684\u6E3A\u5C0F\uFF0C\u5C71\u7D66\u4E88\u7684\u9707\u64BC\u611F\uFF0C\u4E0D\u50C5\u50C5\u53EA\u662F\u751F\u7406\u4E0A\u7684\u8B8A\u5316\uFF0C\u9084\u6709\u66F4\u591A\u7121\u6CD5\u8A00\u55BB\u7684\u611F\u52D5\uFF0C\u722C\u5C71\u4E0D\u50C5\u50C5\u662F\u4E00\u9805\u6D3B\u52D5\uFF0C\u66F4\u662F\u4E00\u5834\u611B\u4E0A\u5C71\u6797\u3001\u611B\u4E0A\u751F\u6D3B\u7684\u904E\u7A0B\u3002")],-1),Fe=t("div",{class:"col-auto",style:{width:"70%","font-size":"18px",padding:"20px 5px 20px 2px",color:"#5E8A4B","text-align":"center"}},[t("p",null,"\u5E36\u4F60\u8D70\u9032\u5C71\u6797\u770B\u898B\u524D\u6240\u672A\u898B\u7684\u53F0\u7063\uFF01")],-1),Qe=t("div",{class:"col-12 col-lg-7",id:"indexImg-lg"},[t("img",{src:"https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/hiking-sunrise-2022-03-05-20-21-43-utc-800x533.jpg",style:{width:"600px",height:"400px",border:"10px solid white","z-index":"1",position:"absolute",top:"10%",left:"25%",transform:"rotate(5deg)","box-shadow":"0 0 10px rgba(0,0,0,0.3)"}}),t("img",{src:"https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/female-hiker-looking-up-in-forest-sarsy-village-2022-03-07-23-58-37-utc.jpg",style:{width:"250px",height:"250px",border:"10px solid white","z-index":"3",position:"absolute",top:"40%",left:"8%",transform:"rotate(-5deg)","box-shadow":"0 0 10px rgba(0,0,0,0.3)"}}),t("img",{src:"https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/hikers-uphilling-at-mountain-forest-back-view-2021-08-29-03-30-49-utc-800x550.jpg",style:{width:"400px",height:"300px",border:"10px solid white","z-index":"2",position:"absolute",top:"55%",left:"30%",transform:"rotate(-3deg)","box-shadow":"0 0 10px rgba(0,0,0,0.3)"}})],-1),Ee=t("div",{class:"col-12 column justify-center content-center items-center q-py-xl",id:"indexImg-xs"},[t("img",{src:"https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/hiking-sunrise-2022-03-05-20-21-43-utc-800x533.jpg",style:{width:"400px",height:"280px",border:"10px solid white",margin:"10px 0","box-shadow":"0 0 10px rgba(0,0,0,0.3)"}}),t("img",{src:"https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/female-hiker-looking-up-in-forest-sarsy-village-2022-03-07-23-58-37-utc.jpg",style:{width:"400px",height:"280px",border:"10px solid white",margin:"10px 0","box-shadow":"0 0 10px rgba(0,0,0,0.3)"}}),t("img",{src:"https://kitpro.site/hayka/wp-content/uploads/sites/75/2022/03/hikers-uphilling-at-mountain-forest-back-view-2021-08-29-03-30-49-utc-800x550.jpg",style:{width:"400px",height:"280px",border:"10px solid white",margin:"10px 0","box-shadow":"0 0 10px rgba(0,0,0,0.3)"}})],-1),Ae={class:"flex flex-center",style:{width:"100%",height:"900px"}},Te={class:"row",style:{width:"90%",height:"90%"}},De=t("div",{class:"col-12 text-weight-bold",style:{"font-size":"18px",color:"#5E8A4B","text-align":"center"}},[t("h3",null,"\u6700\u65B0\u884C\u7A0B")],-1),Ne={class:"gt-md text-grey-7",id:"cardCarousel3"},Me={class:"row q-pa-xl justify-center",style:{height:"510px"}},Ue=["src"],He={class:"text-h6 q-px-md q-py-lg text-weight-bold"},Le={class:"text-body1 q-px-md text-weight-bold description-textbox"},Xe={class:"gt-xs lt-lg",id:"cardCarousel2",style:{color:"#5E8A4B"}},Ke={class:"row q-pa-xl",style:{height:"510px"}},Oe=["src"],Re={class:"text-h6 q-px-md q-py-lg text-weight-bold"},Ze={class:"text-body1 q-px-md text-weight-bold description-textbox"},Ge={class:"lt-sm",id:"cardCarousel1",style:{color:"#5E8A4B"}},Je={class:"row q-pa-xl",style:{height:"510px"}},We={class:"col-12 q-pa-md"},Ye=["src"],et={class:"text-h6 q-px-md q-py-lg text-weight-bold"},tt={class:"text-body1 q-px-md text-weight-bold description-textbox"},ht={__name:"IndexPage",setup(e){const _=he(),r=C(1),u=C(1),w=C(1),k=C(1),h=C(!0),B=C(!0),D=C(!0),F=C(!0),S=y=>{_.push("/product/"+y)},n=ge([]);return console.log(n),(async()=>{try{const{data:y}=await pe.get("/products");n.push(...y.result)}catch{ve.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(y,l)=>(p(),E(ke,null,{default:c(()=>[t("div",qe,[v(A,{animated:"",modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=a=>r.value=a),navigation:"",infinite:"",autoplay:h.value,arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onMouseenter:l[1]||(l[1]=a=>h.value=!1),onMouseleave:l[2]||(l[2]=a=>h.value=!0)},{default:c(()=>[v($,{name:1,"img-src":"https://i.imgur.com/TvrZlw7.png"},{default:c(()=>[Ce]),_:1}),v($,{name:2,"img-src":"https://i.imgur.com/3JtHGzb.png"},{default:c(()=>[Pe]),_:1}),v($,{name:3,"img-src":"https://i.imgur.com/X27TWb7.png"},{default:c(()=>[Se]),_:1})]),_:1},8,["modelValue","autoplay"])]),Ie,t("div",$e,[t("div",Be,[t("div",Ve,[je,ze,Fe,v(T,{to:"/ProductViewAll",label:"Read More",class:"col-auto",style:{width:"200px","border-radius":"30px",background:"#9AB98D",color:"#fff","font-size":"18px"}})]),Qe,Ee])]),t("div",Ae,[t("div",Te,[De,t("div",Ne,[v(A,{modelValue:u.value,"onUpdate:modelValue":l[3]||(l[3]=a=>u.value=a),"transition-prev":"slide-right","transition-next":"slide-left",arrows:"",navigation:"",swipeable:"",animated:"",infinite:"",autoplay:B.value,"control-color":"light-green-5 padding",height:"600px"},{default:c(()=>[(p(!0),P(z,null,j(n.slice(0,3),(a,o)=>(p(),E($,{key:o,name:o},{default:c(()=>[t("div",Me,[(p(),P(z,null,j([0,1,2],(Q,i)=>t("div",{class:"col-4 q-pa-md",key:i},[v(U,{style:{height:"400px"},onClick:f=>{var d;return S((d=n[o+o*3+i])==null?void 0:d._id)}},{default:c(()=>{var f,d,q,b;return[(f=n[o+o*3+i])!=null&&f.image.length?(p(),P("img",{key:0,style:{width:"100%",height:"200px"},src:(d=n[o+o*3+i])==null?void 0:d.image},null,8,Ue)):J("",!0),t("div",He,I((q=n[o+o*3+i])==null?void 0:q.name),1),t("div",Le,I((b=n[o+o*3+i])==null?void 0:b.description),1)]}),_:2},1032,["onClick"])])),64))])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","autoplay"])]),t("div",Xe,[v(A,{modelValue:w.value,"onUpdate:modelValue":l[4]||(l[4]=a=>w.value=a),"transition-prev":"slide-right","transition-next":"slide-left",arrows:"",navigation:"",swipeable:"",animated:"",infinite:"",autoplay:D.value,"control-color":"light-green-5 padding",height:"600px"},{default:c(()=>[(p(!0),P(z,null,j(n.slice(0,3),(a,o)=>(p(),E($,{key:o,name:o},{default:c(()=>[t("div",Ke,[(p(),P(z,null,j([0,1],(Q,i)=>t("div",{class:"col-6 q-pa-md",key:i},[v(U,{style:{height:"400px"},onClick:f=>{var d;return S((d=n[o+o*3+i])==null?void 0:d._id)}},{default:c(()=>{var f,d,q,b;return[(f=n[o+o*2+i])!=null&&f.image.length?(p(),P("img",{key:0,style:{width:"100%",height:"200px"},src:(d=n[o+o*3+i])==null?void 0:d.image},null,8,Oe)):J("",!0),t("div",Re,I((q=n[o+o*2+i])==null?void 0:q.name),1),t("div",Ze,I((b=n[o+o*2+i])==null?void 0:b.description),1)]}),_:2},1032,["onClick"])])),64))])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","autoplay"])]),t("div",Ge,[v(A,{modelValue:k.value,"onUpdate:modelValue":l[5]||(l[5]=a=>k.value=a),"transition-prev":"slide-right","transition-next":"slide-left",arrows:"",navigation:"",swipeable:"",animated:"",infinite:"",autoplay:F.value,"control-color":"light-green-5 padding",height:"600px"},{default:c(()=>[(p(!0),P(z,null,j(n.slice(n.length-5,parseInt(n.length)),(a,o)=>(p(),E($,{key:o,name:o},{default:c(()=>[t("div",Je,[t("div",We,[v(U,{style:{height:"400px"},onClick:Q=>S(a._id)},{default:c(()=>[t("img",{style:{width:"100%",height:"200px"},src:a==null?void 0:a.image},null,8,Ye),t("div",et,I(a==null?void 0:a.name),1),t("div",tt,I(a==null?void 0:a.description),1)]),_:2},1032,["onClick"])])])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","autoplay"])])])])]),_:1}))}};export{ht as default};
