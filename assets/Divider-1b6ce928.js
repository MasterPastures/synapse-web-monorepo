import{_ as w}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as a}from"./extends-98964cd2.js";import{r as C}from"./index-f1f749bf.js";import{d as A,g as D,s as f,v as R,e as W,h as $,i as I}from"./styled-a7106a93.js";import{j as v}from"./jsx-runtime-670450c2.js";function L(i){return D("MuiDivider",i)}const V=A("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),E=V,M=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],T=i=>{const{absolute:t,children:e,classes:l,flexItem:s,light:n,orientation:r,textAlign:o,variant:d}=i;return I({root:["root",t&&"absolute",d,n&&"light",r==="vertical"&&"vertical",s&&"flexItem",e&&"withChildren",e&&r==="vertical"&&"withChildrenVertical",o==="right"&&r!=="vertical"&&"textAlignRight",o==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},L,l)},_=f("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>a({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:R(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:i,ownerState:t})=>a({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:i,ownerState:t})=>a({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(i.vars||i).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:i})=>a({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),B=f("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>a({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),N=C.forwardRef(function(t,e){const l=W({props:t,name:"MuiDivider"}),{absolute:s=!1,children:n,className:r,component:o=n?"div":"hr",flexItem:d=!1,light:p=!1,orientation:m="horizontal",role:h=o!=="hr"?"separator":void 0,textAlign:u="center",variant:x="fullWidth"}=l,b=w(l,M),c=a({},l,{absolute:s,component:o,flexItem:d,light:p,orientation:m,role:h,textAlign:u,variant:x}),g=T(c);return v(_,a({as:o,className:$(g.root,r),role:h,ref:e,ownerState:c},b,{children:n?v(B,{className:g.wrapper,ownerState:c,children:n}):null}))}),X=N;export{X as D,E as d};
//# sourceMappingURL=Divider-1b6ce928.js.map
