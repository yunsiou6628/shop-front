import{u as s,a as d}from"./use-dark.e974edd8.js";import{c as u}from"./create.76be8067.js";import{a as n}from"./render.38a4aa5d.js";import{c,h as l,g as m}from"./index.44c6c104.js";var k=u({name:"QCard",props:{...s,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const e=m(),t=d(a,e.proxy.$q),o=c(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>l(a.tag,{class:o.value},n(r.default))}});export{k as Q};