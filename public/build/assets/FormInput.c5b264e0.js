import{a as o,b as i}from"./main.bac42695.js";const u=["name","type","id","placeholder","value","disabled"],c={name:"FormInput",props:{type:{type:String,default:"text"},name:String,id:String,placeholder:String,disabled:{type:Boolean,default:!1},modelValue:null,modelModifiers:{default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,d=l=>{t.modelModifiers.lazy||a("update:modelValue",l.target.value)},n=l=>{t.modelModifiers.lazy&&a("update:modelValue",l.target.value)};return(l,r)=>(o(),i("input",{name:e.name,type:e.type,class:"form-control",id:e.id,placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,onInput:d,onChange:n},null,40,u))}};export{c as _};
