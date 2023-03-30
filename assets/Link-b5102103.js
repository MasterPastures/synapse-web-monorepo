import{_ as B}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as a}from"./extends-98964cd2.js";import{r as y}from"./index-f1f749bf.js";import{d as M,g as P,P as h,v as _,s as j,t as x,e as N,h as U,i as z}from"./styled-a7106a93.js";import{j as W}from"./jsx-runtime-670450c2.js";import{T as H}from"./Typography-5bc17eac.js";import{a as w}from"./TransitionGroupContext-a2b6e27b.js";import{u as E}from"./useForkRef-dd8a6e5c.js";function I(e){return P("MuiLink",e)}const O=M("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=O,g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},q=e=>g[e]||e,G=({theme:e,ownerState:o})=>{const n=q(o.color),r=h(e,`palette.${n}`,!1)||o.color,s=h(e,`palette.${n}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:_(r,.4)},J=G,K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=e=>{const{classes:o,component:n,focusVisible:r,underline:s}=e,t={root:["root",`underline${x(s)}`,n==="button"&&"button",r&&"focusVisible"]};return z(t,I,o)},X=j(H,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${x(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:J({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${S.focusVisible}`]:{outline:"auto"}})),Y=y.forwardRef(function(o,n){const r=N({props:o,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:C,underline:k="always",variant:d="inherit",sx:l}=r,v=B(r,K),{isFocusVisibleRef:m,onBlur:L,onFocus:V,ref:F}=w(),[D,f]=y.useState(!1),R=E(n,F),T=i=>{L(i),m.current===!1&&f(!1),u&&u(i)},$=i=>{V(i),m.current===!0&&f(!0),p&&p(i)},b=a({},r,{color:t,component:c,focusVisible:D,underline:k,variant:d}),A=Q(b);return W(X,a({color:t,className:U(A.root,s),classes:C,component:c,onBlur:T,onFocus:$,ref:R,ownerState:b,variant:d,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},v))}),ao=Y;export{ao as L};
//# sourceMappingURL=Link-b5102103.js.map