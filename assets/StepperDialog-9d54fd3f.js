import{j as n,a as l,F as d}from"./jsx-runtime-095bf462.js";import{L as g}from"./ConfirmationDialog-7c25f4f2.js";import{S as x}from"./LoadingScreen-d59502c0.js";import{S as y}from"./SpinnerButton-1057b470.js";import{B as i}from"./Button-6910d769.js";import{B as S}from"./Box-079b1034.js";import{A as h}from"./AlertTitle-1c4986af.js";const u=({errorMessage:r,onCancel:o,onConfirm:a,confirming:c,onStepChange:t,open:m,step:e,content:p,loading:f})=>{if(!e)return null;const s=n(S,{display:"flex",flexDirection:"column",gap:1,children:l(d,{children:[f?n(x,{size:40}):p,r&&n(h,{severity:"error",children:r})]})});return n(g,{actions:l(d,{children:[(e==null?void 0:e.cancelButtonText)&&n(i,{variant:"outlined",onClick:()=>o(),children:e.cancelButtonText}),(e==null?void 0:e.previousStep)&&n(i,{variant:"outlined",color:"primary",onClick:()=>e.previousStep?t(e.previousStep):null,children:"Back"}),(e==null?void 0:e.nextStep)&&n(i,{variant:"contained",color:"primary",disabled:!e.nextEnabled,onClick:()=>e.nextStep?t(e.nextStep):null,children:"Next"}),a&&(e==null?void 0:e.confirmButtonText)&&n(y,{variant:"contained",color:"primary",disabled:!e.confirmEnabled,onClick:()=>{a()},showSpinner:c===!0,sx:{marginLeft:"8px"},children:e.confirmButtonText})]}),content:s,onCancel:o,open:m,title:e.title,sx:{h2:{paddingTop:0,paddingBottom:"20px"}},contentProps:e.contentProps})};try{u.displayName="StepperDialog",u.__docgenInfo={description:"A stepper dialog built using MUI components.",displayName:"StepperDialog",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string | undefined"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"(() => Promise<void>) | (() => undefined)"}},confirming:{defaultValue:null,description:"",name:"confirming",required:!1,type:{name:"boolean"}},onStepChange:{defaultValue:null,description:"",name:"onStepChange",required:!0,type:{name:"(arg: string) => void"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"Step"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}}}}}catch{}export{u as S};
//# sourceMappingURL=StepperDialog-9d54fd3f.js.map