import{a as d,j as n}from"./jsx-runtime-670450c2.js";import{r as u,R as x}from"./index-f1f749bf.js";import{B as p}from"./Button-7d415009.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";const o=a=>{const{barColor:e,barPercent:r,backBtnLabel:g,forwardBtnLabel:B,forwardBtnActive:s,backBtnCallback:l,forwardBtnCallback:c}=a,[k,C]=u.useState(0);let i=!0;u.useEffect(()=>(i&&C(r),()=>{i=!1}),[r]);const P=y=>{l&&l()},w=y=>{c&&s&&c()};return d("section",{className:"page-progress",children:[n("div",{className:"page-progress-percent",style:{width:`${k}%`,backgroundColor:e}}),d("div",{className:"page-progress-action",children:[n(p,{className:"btn-progress-back",onClick:P,children:g}),n(p,{className:s?"btn-progress-next-active":"btn-progress-next",onClick:w,children:B})]})]})};try{o.displayName="PageProgress",o.__docgenInfo={description:"",displayName:"PageProgress",props:{barColor:{defaultValue:null,description:"",name:"barColor",required:!0,type:{name:"string"}},barPercent:{defaultValue:null,description:"",name:"barPercent",required:!0,type:{name:"number"}},backBtnLabel:{defaultValue:null,description:"",name:"backBtnLabel",required:!0,type:{name:"string"}},backBtnCallback:{defaultValue:null,description:"",name:"backBtnCallback",required:!1,type:{name:"(() => void)"}},forwardBtnLabel:{defaultValue:null,description:"",name:"forwardBtnLabel",required:!0,type:{name:"string"}},forwardBtnCallback:{defaultValue:null,description:"",name:"forwardBtnCallback",required:!1,type:{name:"(() => void)"}},forwardBtnActive:{defaultValue:null,description:"",name:"forwardBtnActive",required:!0,type:{name:"boolean"}}}}}catch{}const V={title:"UI/PageProgress",component:o,render:a=>{const[e,r]=x.useState(0);return n(o,{barPercent:e,backBtnCallback:()=>{r(e-25)},forwardBtnCallback:()=>{r(e+25)},forwardBtnActive:e<100,...a})}},t={args:{barColor:"green",backBtnLabel:"Back",forwardBtnLabel:"Next"}};var b,m,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    barColor: 'green',
    backBtnLabel: 'Back',
    forwardBtnLabel: 'Next'
  }
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const A=["Demo"];export{t as Demo,A as __namedExportsOrder,V as default};
//# sourceMappingURL=PageProgress.stories-f587e5fc.js.map
