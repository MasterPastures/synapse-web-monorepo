import{a as m,F as f,j as e}from"./jsx-runtime-095bf462.js";import{r as i}from"./index-8db94870.js";import{r as h,i as y,a as C}from"./jsx-runtime_commonjs-proxy-7ed43bfd.js";import{T as g}from"./ToastMessage-f9dfa353.js";import{B as v}from"./Box-13f1aabd.js";import{T as x}from"./TextField-19903dcf.js";import{I as _}from"./InputAdornment-ad0230a6.js";import{I as b}from"./IconButton-74239a2b.js";var r={},T=y;Object.defineProperty(r,"__esModule",{value:!0});var d=r.default=void 0,I=T(h()),w=C,j=(0,I.default)((0,w.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");d=r.default=j;const s=({value:t,inputWidth:l})=>{const[p,a]=i.useState(!1),o=i.createRef(),n=(M,u)=>c=>{c.preventDefault(),navigator.clipboard.writeText(u).then(()=>{a(!0),setTimeout(()=>{a(!1)},4e3)})};return m(f,{children:[e(g,{text:"Successfully copied to clipboard",show:p,autohide:!0}),e(v,{display:"flex",justifyContent:"center",sx:{my:2,mx:0},ref:o,children:e(x,{sx:{width:l},value:t,inputProps:{readOnly:!0,onClick:n(o,t)},InputProps:{endAdornment:e(_,{position:"end",children:e(b,{onClick:n(o,t),children:e(d,{})})})}})})]})};try{s.displayName="CopyToClipboardInput",s.__docgenInfo={description:`Component that holds a large string in a readonly <input> to be copied to the user's clipboard when clicked.
This component should only be used when the full length of the string value to copy does not necessarily need to be
seen by the user. This component was adapted from the email address copy to clipboard functionality in UserCardMedium.
For smaller/inline strings, look at UserCardMedium functionality for displaying the value in a <p> tag instead of a
readonly <input> tag.`,displayName:"CopyToClipboardInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},inputWidth:{defaultValue:null,description:"",name:"inputWidth",required:!0,type:{name:"string"}}}}}catch{}export{s as C};
//# sourceMappingURL=CopyToClipboardInput-08496ef7.js.map