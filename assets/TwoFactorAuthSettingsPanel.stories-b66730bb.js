import{a as n,j as o}from"./jsx-runtime-670450c2.js";import{d as u}from"./ToastMessage-3fa25ad5.js";import{I as v}from"./IconSvg-4faf2a65.js";import{u as B,a as F,T as k}from"./TwoFactorEnrollmentForm-b54e98fa.js";import{C as s}from"./ConditionalWrapper-1e5f9ce7.js";import{B as x}from"./Box-accd0a45.js";import{T as a}from"./Typography-1581d220.js";import{S as d}from"./Skeleton-db2b2a46.js";import{S}from"./Stack-6d983b08.js";import{B as l}from"./Button-fe14b0ec.js";import{P as C}from"./Paper-461328aa.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./FullWidthAlert-8d7329be.js";import"./Alert-b64c11d0.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./Button-dd6fc6af.js";import"./hook-c05d8d9f.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./createWithBsPrefix-9409c681.js";import"./divWithClassName-ed69a318.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-96c5f47c.js";import"./index-4d501b15.js";import"./Clear-10ac5e31.js";import"./styled-233e7b47.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-4a3c7035.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./SvgIcon-50b3abbe.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./isArray-5e3f9107.js";import"./isSymbol-7c514724.js";import"./LeftRightPanel-05832582.js";import"./SynapseContext-fab53256.js";import"./Fade-f26d100e.js";import"./inheritsLoose-54b40604.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./TextField-4573029d.js";import"./FormControl-bd6a1a99.js";import"./ownerWindow-12ded16b.js";import"./emotion-react.browser.esm-f6f061a3.js";import"./LoadingScreen-c6660b68.js";import"./Modal-dba3e6b3.js";import"./contains-33365353.js";import"./useWillUnmount-7fb15b8a.js";import"./usePrevious-9f30f8c7.js";import"./useWaitForDOMRef-30f94d40.js";import"./useMutation-4718bdca.js";import"./DialogContent-952d9657.js";import"./Modal-6e86dc8b.js";import"./getScrollbarSize-ac846fe6.js";import"./DialogTitle-cc1f44af.js";import"./IconButton-7189a745.js";import"./ButtonBase-b06d7823.js";import"./Link-bf4a54f2.js";import"./Divider-3ea3d957.js";import"./extendSxProp-797c7f85.js";function m(e){const{onRegenerateBackupCodes:w,onBeginTwoFactorEnrollment:y}=e,{data:t,isLoading:c}=B(),r=(t==null?void 0:t.status)==="ENABLED",{mutate:A,isLoading:T}=F({onSuccess:()=>{u("2FA removed from this account","info")}}),i=c||T;return n(x,{children:[o(a,{variant:"headline2",children:"Two-factor Authentication (2FA)"}),o(s,{condition:i,wrapper:d,children:n(a,{variant:"body1",color:r?"success.main":"error.main",sx:{my:2,display:"flex",alignItems:"center"},children:[o(v,{icon:r?"check":"cross",sx:{mr:1,height:"24px"}}),i?"Loading...":r?"Active":"Inactive"]})}),o(a,{variant:"body1Italic",sx:{my:1},children:"Required to satisfy certain data access requirements, and recommended for overall account security."}),o(a,{variant:"body1",sx:{my:2},children:"Synapse uses a time-based system, which you can set up using an app like Google Authenticator, Duo Mobile, Microsoft Authenticator, or Authy. Certain data may require 2FA to be turned on for your account in order to request access."}),n(S,{direction:"row",gap:1,children:[o(s,{condition:c,wrapper:d,children:n(l,{variant:"outlined",disabled:i,onClick:()=>{r?A():y()},children:[r?"Deactivate":"Activate"," 2FA"]})}),(t==null?void 0:t.status)!=="DISABLED"&&o(s,{condition:c,wrapper:d,children:o(l,{variant:"text",disabled:i,onClick:()=>{w()},children:"Regenerate Backup Codes"})}),o(l,{variant:"text",onClick:()=>window.open(k,"_blank"),children:"More Information"})]})]})}try{m.displayName="TwoFactorAuthSettingsPanel",m.__docgenInfo={description:"",displayName:"TwoFactorAuthSettingsPanel",props:{onRegenerateBackupCodes:{defaultValue:null,description:"",name:"onRegenerateBackupCodes",required:!0,type:{name:"() => void"}},onBeginTwoFactorEnrollment:{defaultValue:null,description:"",name:"onBeginTwoFactorEnrollment",required:!0,type:{name:"() => void"}}}}}catch{}const Vo={title:"Authentication/TwoFactorSettingsPanel",component:m,render:e=>o(C,{sx:{p:7,mx:"auto",width:"720px"},children:o(m,{...e})})},p={args:{onBeginTwoFactorEnrollment:()=>{u("In-app, you would now redirect to the two-factor enrollment page","info")},onRegenerateBackupCodes:()=>{u("In-app, you would now redirect to the backup codes page","info")}}};var g,h,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onBeginTwoFactorEnrollment: () => {
      displayToast('In-app, you would now redirect to the two-factor enrollment page', 'info');
    },
    onRegenerateBackupCodes: () => {
      displayToast('In-app, you would now redirect to the backup codes page', 'info');
    }
  }
}`,...(f=(h=p.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Wo=["Demo"];export{p as Demo,Wo as __namedExportsOrder,Vo as default};
//# sourceMappingURL=TwoFactorAuthSettingsPanel.stories-b66730bb.js.map