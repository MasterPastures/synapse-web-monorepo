import{j as o,a as s,F as i}from"./jsx-runtime-095bf462.js";import{u,am as c,S as l}from"./SynapseClient-c43c6534.js";import{L as y}from"./SynapseConstants-1ebc8be6.js";import{A as m}from"./ActionRequiredCard-b11dba7c.js";import{T as g}from"./Typography-b4a6e0b5.js";import{B as w}from"./Button-b9be626b.js";function f(e,n){const{accessToken:r,keyFactory:t}=u();return c(t.getEntityHeadersQueryKey(e),()=>l.getEntityHeaders(e,r),n)}function D(e,n){const{accessToken:r,keyFactory:t}=u();return c(t.getEntityHeaderQueryKey(e),()=>l.getEntityHeader(e,r),n)}const h="Download Permission Required",d=({entityId:e,count:n,onViewSharingSettingsClicked:r=t=>window.open(`https://www.synapse.org/#!Synapse:${t}`,"_blank")})=>{const{data:t,isLoading:p}=f([{targetId:e}],{useErrorBoundary:!0}),a=t==null?void 0:t.results[0];return o(m,{isLoading:p,title:h,description:s(i,{children:["You must be granted the download permission on"," ",o("strong",{children:a==null?void 0:a.name})," in order to download this set of files."]}),iconType:y,count:n,actionNode:s(i,{children:[o(g,{variant:"smallText1",sx:{mb:1,color:"grey.700"},children:"Contact an administrator to request download permission"}),o(w,{variant:"outlined",onClick:()=>{r(e)},children:"View Sharing Settings"})]})})};try{d.displayName="RequestDownloadCard",d.__docgenInfo={description:"",displayName:"RequestDownloadCard",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},onViewSharingSettingsClicked:{defaultValue:{value:`benefactorEntityId =>
    window.open(
      \`https://www.synapse.org/#!Synapse:\${benefactorEntityId}\`,
      '_blank',
    )`},description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!1,type:{name:"((benefactorId: string) => void)"}}}}}catch{}export{d as R,D as a,f as u};
//# sourceMappingURL=RequestDownloadCard-c37b551f.js.map