import{u as l,b as m,c as i}from"./QTabs.4721b2c4.js";import{c as t,a as b,g as c}from"./render.1af6db0b.js";import{u as P,a as v,b as d,c as T}from"./use-panel.2dd48bb7.js";import{h as Q,c as f,g as q}from"./index.29aa1ca1.js";import{u as k,a as D}from"./use-dark.986dc809.js";var w=t({name:"QTab",props:l,emits:m,setup(a,{slots:s,emit:e}){const{renderTab:r}=i(a,s,e);return()=>r("div")}}),y=t({name:"QTabPanel",props:P,setup(a,{slots:s}){return()=>Q("div",{class:"q-tab-panel"},b(s.default))}}),I=t({name:"QTabPanels",props:{...v,...k},emits:d,setup(a,{slots:s}){const e=q(),r=D(a,e.proxy.$q),{updatePanelsList:n,getPanelContent:p,panelDirectives:o}=T(),u=f(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(s),c("div",{class:u.value},p(),"pan",a.swipeable,()=>o.value))}});export{w as Q,I as a,y as b};
