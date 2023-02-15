import{a as S,j as t}from"./jsx-runtime-670450c2.js";import{R as o}from"./index-f1f749bf.js";import{d as k}from"./ToastMessage-f34af748.js";import{R as y}from"./RadioGroup-21807f37.js";import{c as a,b as r}from"./isArray-a82322d9.js";import{B}from"./Button-7d415009.js";import"./_commonjsHelpers-042e6b4d.js";import"./FullWidthAlert-ca15609f.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-3f5fe1df.js";import"./useTheme-860bf3dd.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-96c5f47c.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./styled-692f7acd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./index-4d501b15.js";import"./Typography-641a9a3f.js";import"./Clear-fa5d240c.js";import"./useIsFocusVisible-c754a498.js";import"./SvgIcon-11a58ea3.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";const I=()=>{const[i,v]=o.useState("info"),[n,h]=o.useState(""),[m,f]=o.useState(""),[l,C]=o.useState(0),[p,T]=o.useState(""),[u,b]=o.useState("");function x(){k(m,i,{title:n,autoCloseInMs:l,primaryButtonConfig:{text:p,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:u,href:"#"}})}return S("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(y,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:i,onChange:e=>v(e)}),t(a,{children:"Message"}),t(r,{value:m,onChange:e=>f(e.target.value)}),t(a,{children:"Title"}),t(r,{value:n,onChange:e=>h(e.target.value)}),t(a,{children:"Auto-close (ms)"}),t(r,{type:"number",value:l,onChange:e=>C(Number.parseInt(e.target.value))}),t(a,{children:"Optional Button Text"}),t(r,{value:p,onChange:e=>T(e.target.value)}),t(a,{children:"Optional Link Text"}),t(r,{value:u,onChange:e=>b(e.target.value)}),t(B,{variant:"primary-500",onClick:x,children:"Push toast message"})]})},rt={title:"UI/ToastMessage",component:I},s={};var c,g,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const st=["Toast"];export{s as Toast,st as __namedExportsOrder,rt as default};
//# sourceMappingURL=ToastDemo.stories-5b242317.js.map