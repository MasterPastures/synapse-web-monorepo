import{_ as b}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as s}from"./extends-98964cd2.js";import{r as B}from"./index-f1f749bf.js";import{g as W,d as C,s as M,t as u,e as P,h as R,i as _}from"./styled-a7106a93.js";import{j as U}from"./jsx-runtime-670450c2.js";import{e as j}from"./extendSxProp-667aa008.js";function N(a){return W("MuiTypography",a)}C("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],L=a=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:e,variant:o,classes:p}=a,i={root:["root",o,a.align!=="inherit"&&`align${u(t)}`,r&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return _(i,N,p)},w=M("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${u(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>s({margin:0},t.variant&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=a=>z[a]||a,D=B.forwardRef(function(t,r){const n=P({props:t,name:"MuiTypography"}),e=A(n.color),o=j(s({},n,{color:e})),{align:p="inherit",className:i,component:h,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:g="body1",variantMapping:m=y}=o,v=b(o,$),c=s({},o,{align:p,color:e,className:i,component:h,gutterBottom:d,noWrap:f,paragraph:l,variant:g,variantMapping:m}),x=h||(l?"p":m[g]||y[g])||"span",T=L(c);return U(w,s({as:x,ref:r,ownerState:c,className:R(T.root,i)},v))}),F=D;export{F as T};
//# sourceMappingURL=Typography-5bc17eac.js.map
