import{_ as b}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as i}from"./extends-98964cd2.js";import{r}from"./index-f1f749bf.js";import{g as L,d as f,s as x,e as C,h as P,i as v}from"./styled-a7106a93.js";import{j as M,a as _}from"./jsx-runtime-670450c2.js";const j=r.createContext({}),R=j;function U(s){return L("MuiList",s)}f("MuiList",["root","padding","dense","subheader"]);const w=["children","className","component","dense","disablePadding","subheader"],y=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return v({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},U,e)},N=x("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>i({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),S=r.forwardRef(function(e,t){const o=C({props:e,name:"MuiList"}),{children:a,className:d,component:c="ul",dense:n=!1,disablePadding:p=!1,subheader:u}=o,m=b(o,w),g=r.useMemo(()=>({dense:n}),[n]),l=i({},o,{component:c,dense:n,disablePadding:p}),h=y(l);return M(R.Provider,{value:g,children:_(N,i({as:c,className:P(h.root,d),ref:t,ownerState:l},m,{children:[u,a]}))})}),k=S;export{k as L,R as a};
//# sourceMappingURL=List-56e23071.js.map
