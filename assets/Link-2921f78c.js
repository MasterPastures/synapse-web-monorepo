import{_ as B}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as a}from"./extends-98964cd2.js";import{r as y}from"./index-8db94870.js";import{a as M,g as _,R as x,k as j,s as N,x as h,u as P,b as U,e as z}from"./styled-f64e11ba.js";import{j as W}from"./jsx-runtime-095bf462.js";import{T as H}from"./Typography-0933b2f6.js";import{a as w}from"./TransitionGroupContext-0df7f063.js";import{u as E}from"./useForkRef-f2aa3d66.js";function I(e){return _("MuiLink",e)}const O=M("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=O,g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},q=e=>g[e]||e,G=({theme:e,ownerState:o})=>{const n=q(o.color),r=x(e,`palette.${n}`,!1)||o.color,s=x(e,`palette.${n}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:j(r,.4)},J=G,K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=e=>{const{classes:o,component:n,focusVisible:r,underline:s}=e,t={root:["root",`underline${h(s)}`,n==="button"&&"button",r&&"focusVisible"]};return z(t,I,o)},X=N(H,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${h(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:J({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${S.focusVisible}`]:{outline:"auto"}})),Y=y.forwardRef(function(o,n){const r=P({props:o,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:k,underline:C="always",variant:d="inherit",sx:l}=r,L=B(r,K),{isFocusVisibleRef:m,onBlur:V,onFocus:v,ref:F}=w(),[R,f]=y.useState(!1),D=E(n,F),T=i=>{V(i),m.current===!1&&f(!1),u&&u(i)},$=i=>{v(i),m.current===!0&&f(!0),p&&p(i)},b=a({},r,{color:t,component:c,focusVisible:R,underline:C,variant:d}),A=Q(b);return W(X,a({color:t,className:U(A.root,s),classes:k,component:c,onBlur:T,onFocus:$,ref:D,ownerState:b,variant:d,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),ao=Y;export{ao as L};
//# sourceMappingURL=Link-2921f78c.js.map