import{c as r}from"./create.76be8067.js";import{a as e}from"./render.38a4aa5d.js";import{c as n,h as c}from"./index.44c6c104.js";var m=r({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(o,{slots:t}){const a=n(()=>`q-card__section q-card__section--${o.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>c(o.tag,{class:a.value},e(t.default))}});export{m as Q};