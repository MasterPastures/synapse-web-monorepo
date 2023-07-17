var R=Object.defineProperty;var H=(s,a,e)=>a in s?R(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e;var h=(s,a,e)=>(H(s,typeof a!="symbol"?a+"":a,e),e);import{a as f,j as c,F as b}from"./jsx-runtime-095bf462.js";import{R as S,r as E}from"./index-8db94870.js";import{C as U}from"./ChallengeRegisterButton-9101c438.js";import{C as q}from"./ChallengeTeamWizard-7125c500.js";import{q as v,r as D,A as P,a as O}from"./ConfirmationDialog-69828ddd.js";import{b8 as V,x as d,b9 as x,u as w,ba as j,F as A,bb as J,K as $}from"./SynapseClient-b65fe3d4.js";import{u as z}from"./useEntity-d4c5a12b.js";import{u as M}from"./useGetEntityChallenge-24a15625.js";import"./OrientationBanner-3e5e2da7.js";import"./getEndpoint-ac94413e.js";import{d as I}from"./ToastMessage-08f9c422.js";import"./AccessTokenPage-ca815692.js";import"./AccountLevelBadge-9eb8ed5f.js";import"./StandaloneLoginForm-730e98c4.js";import"./TwoFactorAuthSettingsPanel-07f9cd08.js";import"./TwoFactorEnrollmentForm-0e8a63f4.js";import"./TwoFactorBackupCodes-2dce45a7.js";import"./CertificationQuiz-9447cd60.js";import"./index-dc401356.js";import"./ChallengeSubmission-202ebb82.js";import"./DownloadCartPage-9d3703e7.js";import"./ShowDownloadV2-5b3d4e35.js";import"./useEntitySelection-11d2e184.js";import"./EvaluationCard-225c5fb3.js";import"./EvaluationEditorPage-0921ce5d.js";import"./ExperimentalMode-17347b56.js";import{O as W}from"./IconSvg-0fe56357.js";import"./FileUpload-8aebf3c2.js";import"./FeaturedDataTabs-c8ab4691.js";import"./FeaturedToolsList-9bd7d33d.js";import"./DiscussionThread-a8384188.js";import"./ForumPage-4a71e0f9.js";import"./FullWidthAlert-7a6f936f.js";import"./Goals-2d6d6356.js";import"./GoogleMap-f0e26754.js";import"./Icon-4e722f43.js";import"./MarkdownEditor-94e0bbf8.js";import"./MarkdownCollapse-86fcced4.js";import"./OAuthManagement-6ca54738.js";import"./ThemesPlot-2ae42979.js";import"./UpsetPlot-5ba57ac4.js";import"./ProjectViewCarousel-62b8bd11.js";import"./Programs-978dfef8.js";import"./QueryCount-d4865668.js";import"./RenderIfInView-d2b71642.js";import"./Resources-0ee333bd.js";import"./RssFeedCards-c2cd24a1.js";import"./ElementWithTooltip-6bc49aea.js";import"./SkeletonButton-1cc36769.js";import"./SkeletonTable-c2ad006d.js";import"./LeftRightPanel-71231b3e.js";import"./TextField-65354e1c.js";import"./WideButton-f0b8b47c.js";import"./InputSizedButton-afdd58fd.js";import"./SubscriptionItem-1099b7e3.js";import"./DropdownSelect-72e36aab.js";import"./SubsectionRowRenderer-65620c2a.js";import"./SynapseFormWrapper-a7f5547a.js";import"./SynapseFormSubmissionsGrid-191fd563.js";import"./SystemUseNotification-f23e4136.js";import"./TableFeedCards-d5847dfb.js";import"./TermsAndConditions-01a74ea8.js";import"./UserCard-7906ac7a.js";import"./UserCardList-e42fc018.js";import"./UserCardListRotate-e2b02901.js";import"./UserCardListGroups-7ad1645a.js";import"./UserOrTeamBadge-80647f92.js";import"./UserProfileLinks-0a15a46c.js";import{a as G}from"./useTeamMembers-256a8091.js";class C extends S.Component{constructor(e){super(e);h(this,"formRef");h(this,"submitForm",()=>{this.formRef.current.submit()});h(this,"refresh",()=>{if(this.context.accessToken){const e=[d.getUserProfile(this.context.accessToken),d.getEntity(this.context.accessToken,this.props.formSchemaEntityId),d.getEntity(this.context.accessToken,this.props.formUiSchemaEntityId)];Promise.all(e).then(t=>{const i=t[0];this.getTargetContainer(i,this.context.accessToken).then(n=>{const o=t[1],r=t[2];this.getSchemaFileContent(n,o,r)})}).catch(t=>{this.onError(t)})}});h(this,"getSchemaFileContent",(e,t,i)=>{const n=[d.getFileResult(t,this.context.accessToken,!0,!0),d.getFileResult(i,this.context.accessToken,!0,!0)];Promise.all(n).then(o=>{try{const r=o.map(l=>x(l.fileHandle,l.preSignedURL));Promise.all(r).then(l=>{const m=JSON.parse(l[0]),u=JSON.parse(l[1]);this.getExistingFileData(e,m,u)}).catch(l=>{console.log("getSchemaFileContent: Error getting form content",l)})}catch(r){console.log("getSchemaFileContent: Error getting schema content",r)}}).catch(o=>{this.onError(o)})});h(this,"getExistingFileData",(e,t,i)=>{const o={entityName:`${t.title}.json`,parentId:e};let r,l;d.lookupChildEntity(o,this.context.accessToken).then(m=>d.getEntity(this.context.accessToken,m.id).then(u=>(l=u,this.props.initFormData?d.getFileResult(l,this.context.accessToken,!0,!0).then(async y=>{try{const p=await x(y.fileHandle,y.preSignedURL);r=JSON.parse(p)}catch(p){console.log("getExistingFileData: Error setting form data",p)}}):Promise.resolve()))).finally(()=>{this.setState({formData:r,currentFileEntity:l,formSchema:t,formUiSchema:i})})});h(this,"getTargetContainer",async(e,t)=>{const i={entityName:e.ownerId,parentId:this.props.parentContainerId};try{const n=await d.lookupChildEntity(i,t);return console.log(`EntityForm uploading to https://www.synapse.org/#!Synapse:${n.id}`),this.setState({userprofile:e,containerId:n.id,isLoading:!1}),n.id}catch(n){return n.status===404?this.onError(new Error("Your folder has not yet been set up, please retry in a few minutes.")):this.onError(n)}});h(this,"finishedProcessing",()=>{this.setState({isLoading:!1,successfullyUploaded:!0})});h(this,"onError",e=>{this.setState({error:e,isLoading:!1,successfullyUploaded:!1})});h(this,"onSubmit",({formData:e})=>{this.setState({isLoading:!0,successfullyUploaded:!1});const t=new Blob([JSON.stringify(e)],{type:"text/json"});this.createEntityFile(t)});h(this,"createEntityFile",e=>{const t=`${this.state.formSchema.title}.json`;d.uploadFile(this.context.accessToken,t,e).then(i=>{const n=i.fileHandleId;if(this.state.currentFileEntity){const r={...this.state.currentFileEntity,dataFileHandleId:n};return this.setState({currentFileEntity:r}),d.updateEntity(r,this.context.accessToken)}const o={parentId:this.state.containerId,name:t,concreteType:"org.sagebionetworks.repo.model.FileEntity",dataFileHandleId:n};return d.createEntity(o,this.context.accessToken)}).then(i=>{this.finishedProcessing(),this.props.synIdCallback&&this.props.synIdCallback(i.id)}).catch(i=>{this.onError(i)})});this.formRef=S.createRef(),this.state={isLoading:!0,successfullyUploaded:!1}}componentDidMount(){this.refresh()}render(){return f("div",{children:[this.state.error&&f("div",{className:"panel panel-danger errors",children:[c("div",{className:"panel-heading",children:c("h3",{className:"panel-title",children:"Error"})}),c("ul",{className:"list-group",children:f("li",{className:"list-group-item text-danger",children:[this.state.error.name," ",this.state.error.reason,this.state.error.message]})})]}),this.context.accessToken&&!this.state.isLoading&&!this.state.successfullyUploaded&&this.state.formSchema&&this.state.formUiSchema&&!this.state.error&&c(v,{validator:D,formData:this.state.formData,schema:this.state.formSchema,uiSchema:this.state.formUiSchema,onSubmit:this.onSubmit,ref:this.formRef,children:c("div",{style:{display:"none"},children:c("button",{type:"submit",className:"btn btn-info",children:"Submit"})})}),!this.state.error&&this.context.accessToken&&this.state.isLoading&&f(S.Fragment,{children:[c("span",{children:"Saving…"}),c("span",{style:{marginLeft:"2px"},className:"spinner"})]})]})}}h(C,"contextType",V);try{C.displayName="EntityForm",C.__docgenInfo={description:"",displayName:"EntityForm",props:{parentContainerId:{defaultValue:null,description:"",name:"parentContainerId",required:!0,type:{name:"string"}},formSchemaEntityId:{defaultValue:null,description:"",name:"formSchemaEntityId",required:!0,type:{name:"string"}},formUiSchemaEntityId:{defaultValue:null,description:"",name:"formUiSchemaEntityId",required:!0,type:{name:"string"}},initFormData:{defaultValue:null,description:"",name:"initFormData",required:!0,type:{name:"boolean"}},synIdCallback:{defaultValue:null,description:"",name:"synIdCallback",required:!0,type:{name:"(synId: string) => void"}}}}}catch{}const k=s=>{const{accessToken:a}=w(),{synId:e,className:t}=s,[i,n]=E.useState(void 0);E.useEffect(()=>{(async()=>{try{const m=await d.getEntity(a,e);if(!j(m))throw new Error(`File Entity expected but found ${m}`);const u={requestedFiles:[{associateObjectId:e,associateObjectType:A.FileEntity,fileHandleId:m.dataFileHandleId}],includeFileHandles:!0,includePreSignedURLs:!1,includePreviewPreSignedURLs:!1},p=(await d.getFiles(u,a)).requestedFiles[0].fileHandle;if(p&&J(p))n({externalFileHandle:p,fileEntity:m});else throw new Error(`Not an external file handle: ${p==null?void 0:p.id}`)}catch(m){console.error("Error on getting external file handle = ",m)}})()},[e,a]);const o=i==null?void 0:i.externalFileHandle,r=i==null?void 0:i.fileEntity;return o?c("a",{href:o.externalURL,className:t,target:"_blank",rel:"noopener noreferrer",children:f("span",{children:[r==null?void 0:r.name,c(W,{style:{marginLeft:5}})]})}):c(b,{})};try{k.displayName="ExternalFileHandleLink",k.__docgenInfo={description:"",displayName:"ExternalFileHandleLink",props:{synId:{defaultValue:null,description:"",name:"synId",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function T({projectId:s}){const{accessToken:a}=w(),[e,t]=E.useState(!1),[i,n]=E.useState(!1),[o,r]=E.useState(!1),{data:l}=$(),{data:m}=z(s),u=F=>{t(F)},y=()=>{n(!0)},p=()=>{r(!0)},{mutate:N}=G({onSuccess:()=>{I("You are no longer registered for this challenge","info")},onError:F=>{I(F.reason,"danger")}}),L=()=>{a&&g&&l&&N({teamId:g.participantTeamId,userId:l.ownerId})},_=()=>{n(!1),a&&t(!0)},{data:g}=M(s);return f(b,{children:[c(U,{projectId:s,onJoinClick:y,onLeaveClick:p}),i&&c(P,{entityId:s,teamId:g==null?void 0:g.participantTeamId,onHide:_,renderAsModal:!0,requestObjectName:m==null?void 0:m.name,dialogTitle:"Challenge Terms and Conditions"}),e&&c(q,{projectId:s,onClose:()=>{u(!1)},isShowingModal:!0}),o&&c(O,{open:o,title:"Leave this Challenge?",content:"Are you sure you want to leave this Challenge?",onCancel:()=>r(!1),onConfirm:()=>{L(),r(!1)}})]})}try{T.displayName="ChallengeDetailPage",T.__docgenInfo={description:"",displayName:"ChallengeDetailPage",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}}}}}catch{}export{T as C};
//# sourceMappingURL=ChallengeDetailPage-38a20ee3.js.map