import{_ as p}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as n}from"./extends-98964cd2.js";import{r as d}from"./index-8db94870.js";import{g,e as u,s as f,f as m,i as D,j as x}from"./styled-2cba4329.js";import{j as C}from"./jsx-runtime-095bf462.js";import{T}from"./Typography-b4a6e0b5.js";const S=d.createContext({}),w=S;function y(o){return g("MuiDialogActions",o)}u("MuiDialogActions",["root","spacing"]);const M=["className","disableSpacing"],R=o=>{const{classes:t,disableSpacing:s}=o;return x({root:["root",!s&&"spacing"]},y,t)},$=f("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,!s.disableSpacing&&t.spacing]}})(({ownerState:o})=>n({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),b=d.forwardRef(function(t,s){const e=m({props:t,name:"MuiDialogActions"}),{className:r,disableSpacing:a=!1}=e,l=p(e,M),i=n({},e,{disableSpacing:a}),c=R(i);return C($,n({className:D(c.root,r),ownerState:i,ref:s},l))}),G=b;function A(o){return g("MuiDialogContent",o)}u("MuiDialogContent",["root","dividers"]);function N(o){return g("MuiDialogTitle",o)}const U=u("MuiDialogTitle",["root"]),_=U,h=["className","dividers"],j=o=>{const{classes:t,dividers:s}=o;return x({root:["root",s&&"dividers"]},A,t)},P=f("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>n({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${_.root} + &`]:{paddingTop:0}})),I=d.forwardRef(function(t,s){const e=m({props:t,name:"MuiDialogContent"}),{className:r,dividers:a=!1}=e,l=p(e,h),i=n({},e,{dividers:a}),c=j(i);return C(P,n({className:D(c.root,r),ownerState:i,ref:s},l))}),H=I,L=["className","id"],W=o=>{const{classes:t}=o;return x({root:["root"]},N,t)},k=f(T,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),B=d.forwardRef(function(t,s){const e=m({props:t,name:"MuiDialogTitle"}),{className:r,id:a}=e,l=p(e,L),i=e,c=W(i),{titleId:v=a}=d.useContext(w);return C(k,n({component:"h2",className:D(c.root,r),ownerState:i,ref:s,variant:"h6",id:a??v},l))}),J=B;export{J as D,H as a,G as b,w as c};
//# sourceMappingURL=DialogTitle-cac35fb9.js.map