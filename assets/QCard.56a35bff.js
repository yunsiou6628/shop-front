import{u as s,a as d}from"./use-dark.bf0b6226.js";import{c as u}from"./create.271cd6e4.js";import{a as n}from"./render.b33f033f.js";import{c,h as l,g as m}from"./index.c74ba9e5.js";var k=u({name:"QCard",props:{...s,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const e=m(),t=d(a,e.proxy.$q),o=c(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>l(a.tag,{class:o.value},n(r.default))}});export{k as Q};