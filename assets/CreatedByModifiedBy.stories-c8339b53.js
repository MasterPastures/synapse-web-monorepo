import{j as t,a as r,F as k}from"./jsx-runtime-095bf462.js";import{B as V,S as w}from"./SynapseConstants-fca8ab5f.js";import{I as y}from"./SynapseClient-f341520e.js";import{u as z}from"./useEntity-b527573f.js";import"./index-8db94870.js";import"./getEndpoint-ac94413e.js";import{u as G}from"./useGetQueryResultBundle-d1ccbb43.js";import{i as h,e as P,c as K,a as Q}from"./EntityTypeUtils-e39da199.js";import{U as C}from"./UserCard-72448b1a.js";import{f as u}from"./DateFormatter-27dd40cf.js";import{C as M}from"./ConditionalWrapper-51b8d1ed.js";import{d as f}from"./dayjs.min-8d4ef725.js";import{B as H}from"./Box-ef0af35d.js";import{B as J}from"./Breadcrumbs-d1e4e73f.js";import{S as N}from"./Skeleton-79583c46.js";import{T as p}from"./Typography-bbc222e1.js";import{T as b}from"./Tooltip-ada0ed7d.js";import"./OrientationBanner-ec8fcbed.js";import"./FullWidthAlert-ac112c77.js";import"./AlertTitle-1c4986af.js";import"./styled-0d0c058b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./createSvgIcon-c04c1e3c.js";import"./Paper-c5bb6f3a.js";import"./IconButton-055a3ecb.js";import"./ButtonBase-89336bd6.js";import"./emotion-react.browser.esm-a1e35fdb.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Stack-fc7a4170.js";import"./extendSxProp-32377841.js";import"./useTheme-48a0a3fd.js";import"./Grow-abebdd1c.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";import"./utils-a7612588.js";import"./ClickAwayListener-36b79525.js";import"./Button-6910d769.js";import"./Link-c55ec6e2.js";import"./isArray-5e3f9107.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-a72e35ba.js";import"./inputBaseClasses-2d1e355f.js";import"./Fade-8ab202b4.js";import"./useMutation-90a3309e.js";import"./useInfiniteQuery-742a0dc6.js";import"./pick-f00c427f.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseClone-f57d488e.js";import"./_Uint8Array-b6f30a55.js";import"./_MapCache-1b8ab7d0.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./hasIn-b2d46eed.js";import"./_baseSlice-cf92e063.js";import"./merge-ec662195.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-0038fa24.js";import"./_baseRest-64ea8530.js";import"./_isIterateeCall-f0476731.js";import"./IsType-6afea24e.js";import"./SkeletonTable-d99c7f04.js";import"./times-23469bb8.js";import"./IconSvg-b02bf18e.js";import"./ErrorOutlined-81a5221b.js";import"./InfoOutlined-1e8e00a7.js";import"./ToastMessage-c60353c5.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./Popover-35c1d8c6.js";import"./Modal-1e12e009.js";import"./Backdrop-85605ced.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./index-953d39fd.js";function X(){return t(p,{variant:"breadcrumb1",sx:{color:"grey.700"},children:"/"})}function g(T){var _;const{entityId:m,versionNumber:d}=T,i=`${m}${d?`.${d}`:""}`,{data:e}=z(m,d),{data:c}=G({entityId:m,query:{sql:`SELECT * FROM ${i} LIMIT 0`},partMask:V,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!(e&&h(e))}),B=(_=c==null?void 0:c.responseBody)==null?void 0:_.lastUpdatedOn,o=e?P(K(e.concreteType)):"",j="This is the user who created this Dataset. This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.",q=r(k,{children:[r("p",{children:["This is when the configuration of this ",o," was last changed."]}),t("p",{children:"Configuration changes may be triggered by (for example):"}),r("ul",{children:[r("li",{children:["Editing the name of the ",o]}),r("li",{children:["Updating the schema used by the ",o]})]}),r("p",{children:["This does NOT reflect changes to the data displayed in the the"," ",o,"."]})]}),R=`This is when the configuration of this ${o} was last changed.`,W=`When data changes, the ${o} is rebuilt to reflect those changes. This is the last time changes were made to the data.`,x=`${i}-createdByTooltip`,I=`${i}-modifiedByTooltip`,S=`${i}-lastUpdatedTooltip`,l={width:"16px",height:"16px",ml:"4px",verticalAlign:"text-bottom"};return t(H,{sx:{bgcolor:"grey.100",py:"10px"},children:r(J,{separator:t(X,{}),sx:{"& .MuiBreadcrumbs-ol":{justifyContent:"center"}},children:[t(M,{condition:!e,wrapper:N,children:r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":x,children:[o," created by"," ",t(C,{ownerId:e==null?void 0:e.createdBy,size:w})," on"," ",u(f(e==null?void 0:e.createdOn)),e&&Q(e)&&t(b,{id:x,title:j,children:t(y,{sx:l})})]})}),t(M,{condition:!e,wrapper:N,children:r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":I,children:[e&&h(e)?"Configuration":o," last modified by"," ",t(C,{ownerId:e==null?void 0:e.modifiedBy,size:w})," on"," ",u(f(e==null?void 0:e.modifiedOn)),e&&h(e)&&t(b,{id:I,title:q,"aria-label":R,children:t(y,{sx:l})})]})}),B&&r(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":S,children:[o," last rebuilt on ",u(f(B)),t(b,{title:W,id:S,children:t(y,{sx:l})})]})]})})}try{g.displayName="CreatedByModifiedBy",g.__docgenInfo={description:"",displayName:"CreatedByModifiedBy",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const wt={title:"Synapse/EntityPage/CreatedByModifiedBy",component:g},a={args:{entityId:"syn36695878",versionNumber:1}},s={args:{entityId:"syn35197546"}},n={args:{entityId:"syn26302617"}};var v,D,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    entityId: 'syn36695878',
    versionNumber: 1
  }
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var U,L,O;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    entityId: 'syn35197546'
  }
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var $,A,F;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    entityId: 'syn26302617'
  }
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const Ct=["File","Table","Dataset"];export{n as Dataset,a as File,s as Table,Ct as __namedExportsOrder,wt as default};
//# sourceMappingURL=CreatedByModifiedBy.stories-c8339b53.js.map