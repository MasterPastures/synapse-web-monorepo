import{g as b,d as B,s as W,p as u,e as C,_ as M,h as P,i as R}from"./styled-1b6f4d44.js";import{_ as s}from"./extends-9cd95192.js";import{r as _}from"./index-f1f749bf.js";import{j as U}from"./jsx-runtime-670450c2.js";import{e as j}from"./extendSxProp-c6163236.js";function N(a){return b("MuiTypography",a)}B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],L=a=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:e,variant:o,classes:p}=a,i={root:["root",o,a.align!=="inherit"&&`align${u(t)}`,r&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return R(i,N,p)},w=W("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${u(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>s({margin:0},t.variant&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=a=>z[a]||a,D=_.forwardRef(function(t,r){const n=C({props:t,name:"MuiTypography"}),e=A(n.color),o=j(s({},n,{color:e})),{align:p="inherit",className:i,component:h,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:g="body1",variantMapping:m=y}=o,v=M(o,$),c=s({},o,{align:p,color:e,className:i,component:h,gutterBottom:d,noWrap:f,paragraph:l,variant:g,variantMapping:m}),x=h||(l?"p":m[g]||y[g])||"span",T=L(c);return U(w,s({as:x,ref:r,ownerState:c,className:P(T.root,i)},v))}),q=D;export{q as T};
//# sourceMappingURL=Typography-0df81c96.js.map
