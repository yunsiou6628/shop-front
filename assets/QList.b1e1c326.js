import{c as o,a as n}from"./render.f0516c4c.js";import{u as d,a as i}from"./use-dark.58fcdffb.js";import{c as l,h as u,g as c}from"./index.932b337e.js";var g=o({name:"QList",props:{...d,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:a}){const r=c(),t=i(e,r.proxy.$q),s=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>u("div",{class:s.value},n(a.default))}});export{g as Q};