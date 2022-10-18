import{i as E,x as U,A as u,r as L,a as d,b as i,d as m,e as l,j as A,u as t,w as M,F as x}from"./main.bac42695.js";import{b as I}from"./breadcrumb.2d4cfefa.js";import{_ as r}from"./FormGroup.1462db17.js";import{_ as N}from"./FormSelect.55ec0df3.js";import{_ as $}from"./FormButton.0cc94290.js";import{_ as j}from"./ButtonLoader.0bb0d3b3.js";import"./error.34acba4a.js";import"./FormInput.c5b264e0.js";const B={class:"col-lg-4 m-auto"},D={class:"card"},F={class:"card-body"},O=["onSubmit"],P={key:0,class:"form-group"},S=["src"],H={key:1,class:"form-group"},W=l("h4",null,"No Image Uploaded Yet",-1),Y=[W],Q={key:2,class:"form-group"},q=["src"],z={key:3,class:"form-group"},G=l("h4",null,"No Logo Uploaded Yet",-1),J=[G],K={class:"mt-3 mb-3"},T=l("label",null,"Coin Logo",-1),X={class:"mt-3 mb-3"},Z=l("label",null,"QR Code Upload",-1),de={name:"edit",props:["payment"],setup(w){var c,_,b,f,y,g,h,v,V;const n=w,e=E({id:(c=n.payment)==null?void 0:c.id,name:(_=n.payment)==null?void 0:_.name,status:(b=n.payment)==null?void 0:b.status,symbol:(f=n.payment)==null?void 0:f.symbol,wallet:(y=n.payment)==null?void 0:y.wallet,image:(g=n.payment)==null?void 0:g.image,logo:(h=n.payment)==null?void 0:h.logo,svg:(v=n.payment)==null?void 0:v.svg,roi:(V=n.payment)==null?void 0:V.roi});let p=U(null),C=U(null);u(()=>e.symbol,a=>{a!=""&&(e.symbol=a.toUpperCase())}),u(()=>e.image,a=>{(a!=null||a!="")&&(p.value=URL.createObjectURL(a))}),u(()=>e.svg,a=>{(a!=null||a!="")&&(C.value=URL.createObjectURL(a))});const R=()=>{e.put(route("admin.payment-method.update",n.payment.id))};return(a,o)=>{const k=L("Head");return d(),i(x,null,[m(k,{title:"Edit Payment Method"}),m(I,{title:"Edit Payment Method",crumbs:["Dashboard","Settings","Payment Method","Edit"]}),l("div",B,[l("div",D,[l("div",F,[l("form",{onSubmit:A(R,["prevent"])},[m(r,{name:"name",placeholder:"Asset name",label:"Asset name",modelValue:t(e).name,"onUpdate:modelValue":o[0]||(o[0]=s=>t(e).name=s)},null,8,["modelValue"]),m(r,{name:"symbol",placeholder:"Coin Symbol",label:"Coin Symbol",modelValue:t(e).symbol,"onUpdate:modelValue":o[1]||(o[1]=s=>t(e).symbol=s),class:"mt-3"},null,8,["modelValue"]),m(r,{name:"roi",placeholder:"ROI",label:"Rewards",modelValue:t(e).roi,"onUpdate:modelValue":o[2]||(o[2]=s=>t(e).roi=s),class:"mt-3"},null,8,["modelValue"]),m(N,{id:"demo",name:"status",label:"Enable/Disable",options:{1:"Enable",0:"Disable"},modelValue:t(e).status,"onUpdate:modelValue":o[3]||(o[3]=s=>t(e).status=s)},null,8,["modelValue"]),m(r,{name:"wallet",placeholder:"Wallet Address",label:"Wallet Address",modelValue:t(e).wallet,"onUpdate:modelValue":o[4]||(o[4]=s=>t(e).wallet=s),class:"mt-3"},null,8,["modelValue"]),t(e).image?(d(),i("div",P,[l("img",{src:t(p),class:"img-fluid p-5"},null,8,S)])):(d(),i("div",H,Y)),t(e).svg?(d(),i("div",Q,[l("img",{src:a.logo,class:"img-fluid p-5"},null,8,q)])):(d(),i("div",z,J)),l("div",K,[T,l("input",{class:"form-control",type:"file",onInput:o[5]||(o[5]=s=>t(e).svg=s.target.files[0])},null,32)]),l("div",X,[Z,l("input",{class:"form-control",type:"file",onInput:o[6]||(o[6]=s=>t(e).image=s.target.files[0])},null,32)]),m($,{type:"submit",class:"w-100 btn btn-outline-primary mt-3",disabled:t(e).processing},{default:M(()=>[m(j,{text:"Update Payment Method",loading:t(e).processing},null,8,["loading"])]),_:1},8,["disabled"])],40,O)])])])],64)}}};export{de as default};
