import{a,F as h,j as e}from"./jsx-runtime-095bf462.js";import{r as q}from"./index-8db94870.js";import{a as I}from"./EntityTypeUtils-2e4d4a81.js";import{u as y}from"./useAccessRequirements-bfb111ff.js";import{I as S}from"./ElementWithTooltip-2d145823.js";import{an as l,am as v,al as _}from"./SynapseConstants-06779f3a.js";import{A as N}from"./ConfirmationDialog-91491214.js";import{S as n}from"./Skeleton-3aad52b9.js";import{T as E}from"./Typography-0933b2f6.js";import{B as L}from"./Button-5637ed55.js";const b="Requires Acceptance of Data-Specific Terms of Use",w="Requires Acceptance of Data-Specific Terms of Use",F="Requires Approval of Data-Specific Access Requirements",k="Access Restricted",C=({accessRequirementId:o,count:p})=>{const f=I(),{data:r,isFetching:d,isError:c,error:m}=y(o);q.useEffect(()=>{c&&m&&f(m)},[c,m,f]);const[T,A]=q.useState(!1);let R=e(h,{});if(!c&&!d&&r){let t,s="",i="";switch(r.concreteType){case"org.sagebionetworks.repo.model.TermsOfUseAccessRequirement":t=b,s=_,i=r.name??"";break;case"org.sagebionetworks.repo.model.SelfSignAccessRequirement":{t=w;const g=r;g.isValidatedProfileRequired?s=l:g.isCertifiedUserRequired?s=v:s=_,i=r.name??"";break}case"org.sagebionetworks.repo.model.ManagedACTAccessRequirement":case"org.sagebionetworks.repo.model.ACTAccessRequirement":t=F,s=l,i=r.name??"";break;case"org.sagebionetworks.repo.model.LockAccessRequirement":t=k,s=l,i="Access restricted pending review by Synapse Access and Compliance Team.";break}t&&(R=a("div",{className:"MeetAccessRequirementCard actionRequiredCard",children:[e(S,{type:s}),a("div",{className:"metadata",children:[e(E,{variant:"headline3",className:"title",children:t}),a("div",{className:"fileCount",children:[p," File(s)"]}),e("div",{className:"description",children:i})]}),e("div",{className:"startButtonContainer",children:e(L,{className:"startButton",variant:"primary",onClick:()=>A(!0),children:"Start"})})]}))}return a(h,{children:[!c&&!d&&R,d&&e(u,{}),T&&r&&e(N,{entityId:r.subjectIds[0].id,accessRequirementFromProps:[r],renderAsModal:!0,numberOfFilesAffected:p,onHide:()=>A(!1)})]})},u=()=>a("div",{className:"MeetAccessRequirementCard actionRequiredCard",children:[e(n,{variant:"rectangular",width:136,height:74}),a("div",{className:"metadata",children:[e("div",{className:"title",children:e(n,{width:320})}),e("div",{className:"fileCount",children:e(n,{width:100})})]}),e("div",{className:"startButtonContainer",children:e(n,{variant:"rectangular",width:160,height:33})})]});try{C.displayName="MeetAccessRequirementCard",C.__docgenInfo={description:"",displayName:"MeetAccessRequirementCard",props:{accessRequirementId:{defaultValue:null,description:"",name:"accessRequirementId",required:!0,type:{name:"number"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}}}catch{}try{u.displayName="LoadingAccessRequirementCard",u.__docgenInfo={description:"",displayName:"LoadingAccessRequirementCard",props:{}}}catch{}export{u as L,C as M};
//# sourceMappingURL=MeetAccessRequirementCard-a63965e4.js.map