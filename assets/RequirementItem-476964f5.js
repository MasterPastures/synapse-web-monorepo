import{j as a,F as u,a as d}from"./jsx-runtime-095bf462.js";import{C as g}from"./ConditionalWrapper-51b8d1ed.js";import{A as C}from"./Avatar-c25dcc6a.js";import{u as x}from"./useTheme-14d0ce71.js";import{S as f}from"./Skeleton-3aad52b9.js";import{c as l}from"./Clear-72bafe95.js";import{s as p}from"./styled-f64e11ba.js";import{B as o}from"./Box-13f1aabd.js";import{B as v}from"./Button-891a522f.js";const k=l(a("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"}),"AccessTimeFilled"),y=l(a("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"}),"CheckTwoTone"),L=l([a("path",{d:"M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z",opacity:".3"},"0"),a("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"},"1")],"LockTwoTone");var A=(e=>(e.COMPLETE="COMPLETE",e.PENDING="PENDING",e.LOCKED="LOCKED",e.LOADING="LOADING",e))(A||{});const i={width:"20px"},E=p(C,{label:"AccessApprovalCheckMarkContainer"})({color:"white",height:"30px",width:"30px"});function c({status:e,sx:r}){const s=x();let n,t=a(u,{});switch(e){case"COMPLETE":n=s.palette.success.main,t=a(y,{sx:i});break;case"PENDING":n="#395979",t=a(k,{sx:i});break;case"LOCKED":n="#FF9B00",t=a(L,{sx:i});break}return a(E,{"data-testid":`AccessApprovalCheckMark-${e}`,sx:{backgroundColor:n,...r},children:a(g,{condition:e==="LOADING",wrapper:f,wrapperProps:{variant:"circular",sx:{minHeight:"30px",minWidth:"30px"}},children:t})})}try{c.displayName="AccessApprovalCheckMark",c.__docgenInfo={description:"Renders an icon for a RequirementItem based on the status prop.",displayName:"AccessApprovalCheckMark",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"COMPLETE"'},{value:'"PENDING"'},{value:'"LOCKED"'},{value:'"LOADING"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}const N=p(o,{label:"RequirementContainer"})({display:"grid",gridTemplateRows:"50px auto auto",gridTemplateColumns:"30px auto",columnGap:"20px",alignItems:"center",margin:"1rem 0 2rem"}),T=p(o,{label:"InlineButtonContainer"})(({theme:e})=>({display:"flex",gap:e.spacing(2),margin:`${e.spacing(1)} 0`}));function m(e){const{actions:r,status:s,children:n}=e;return d(N,{"data-testid":"RequirementItem",children:[a(c,{status:s,sx:{gridRow:"1 / span 1",gridColumn:"1 / span 1",margin:"auto"}}),a(o,{sx:{gridColumn:"2 / span 1",gridRow:"1 / span 2",alignSelf:"start",mt:"12px"},children:n}),r&&!!r.length&&d(u,{children:[a(o,{sx:{gridColumnStart:1,gridRow:"2 / span 1",width:"1px",height:"100%",backgroundColor:"grey.400",margin:"auto"}}),a(o,{sx:t=>({gridColumnStart:1,gridRow:"3 / span 1",width:"50%",height:"60%",borderLeft:`1px solid ${t.palette.grey[400]}`,borderBottom:`1px solid ${t.palette.grey[400]}`,marginLeft:"auto",marginBottom:"auto",marginRight:"0"})})]}),r&&!!r.length&&a(T,{sx:{gridColumnStart:2,gridRow:"3 / span 1",mt:2},children:r.map((t,h)=>a(v,{disabled:s==="LOADING",...t},h))})]})}try{m.displayName="RequirementItem",m.__docgenInfo={description:`Renders a single requirement item, which includes a checkmark, the requirement text, and any required actions. This
component represents one condition (of potentially many) that a user must meet to gain access to data.

This component does not make requests to external stores and is side-effect free. Variations in the displayed
component are controlled entirely by props`,displayName:"RequirementItem",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"COMPLETE"'},{value:'"PENDING"'},{value:'"LOCKED"'},{value:'"LOADING"'}]}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ButtonProps[]"}}}}}catch{}export{y as C,L,m as R,A as a};
//# sourceMappingURL=RequirementItem-476964f5.js.map
