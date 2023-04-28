import{a as e,F as p,j as r}from"./jsx-runtime-ad672792.js";import{r as f}from"./index-f1f749bf.js";import{az as h}from"./SynapseContext-d313cbec.js";import{k as g}from"./AccessRequirementList-e2eede37.js";import{I as w}from"./ElementWithTooltip-71b82886.js";import{aq as N}from"./SynapseConstants-9d1f6e44.js";import{L as q}from"./MeetAccessRequirementCard-28a6cea2.js";import{T as l}from"./Typography-33ebb906.js";import{B as E}from"./Button-7d415009.js";const y="Download Permission Required",c=({entityId:t,count:m,onViewSharingSettingsClicked:u})=>{const s=h(),{data:a,isLoading:d,isError:n,error:i}=g([{targetId:t}]),o=a==null?void 0:a.results[0];return f.useEffect(()=>{n&&i&&s(i)},[n,i,s]),e(p,{children:[!n&&!d&&e("div",{className:"RequestDownloadCart actionRequiredCard",children:[r(w,{type:N}),e("div",{className:"metadata",children:[r(l,{variant:"headline3",className:"title",children:y}),e("div",{className:"fileCount",children:[m," File(s)"]}),e("div",{className:"description",children:["You must be granted the download permission on"," ",r("strong",{children:o==null?void 0:o.name})," in order to download this set of files."]})]}),e("div",{className:"startButtonContainer",children:[r(l,{variant:"smallText1",className:"contactAdminNote",children:"Contact an administrator to request download permission"}),r(E,{className:"startButton",variant:"outline-primary",onClick:()=>{u(t)},children:"View Sharing Settings"})]})]}),d&&r(q,{})]})};try{c.displayName="RequestDownloadCard",c.__docgenInfo={description:"",displayName:"RequestDownloadCard",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},onViewSharingSettingsClicked:{defaultValue:null,description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!0,type:{name:"(benefactorId: string) => void"}}}}}catch{}export{c as R};
//# sourceMappingURL=RequestDownloadCard-9621de54.js.map