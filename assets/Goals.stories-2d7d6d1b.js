import{j as t,a as o}from"./jsx-runtime-095bf462.js";import{r as h}from"./index-8db94870.js";import{u as F,E as A,b8 as O,be as Q}from"./EntityTypeUtils-9d897fe7.js";import{n as j,k as B}from"./SynapseConstants-a1d83293.js";import"./getEndpoint-ac94413e.js";import{u as P}from"./useShowDesktop-4eaeb2a6.js";import{a as $}from"./useGetQueryResultBundle-248caecb.js";import{E as K}from"./ExpandableContent-dcf57fd3.js";import{Q as R}from"./QueryCount-3ca1045a.js";import{B as L}from"./Button-891a522f.js";import{g as c}from"./queryUtils-4020c93e.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-c82a83d4.js";import"./isArray-5e3f9107.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./SvgIcon-4c933a0b.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-f64e11ba.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./IconSvg-ea827063.js";import"./Tooltip-1ed747d5.js";import"./useTheme-14d0ce71.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./TransitionGroupContext-0df7f063.js";import"./utils-724ac38b.js";import"./Clear-72bafe95.js";import"./Box-13f1aabd.js";import"./extendSxProp-29a14132.js";import"./Button-5637ed55.js";import"./Alert-fbdd8ab9.js";import"./createWithBsPrefix-f259edae.js";import"./index-58d3fd43.js";import"./useInfiniteQuery-85a3a0df.js";import"./infiniteQueryBehavior-4735d4ba.js";import"./merge-528b3f09.js";import"./_Uint8Array-4f44bc5d.js";import"./_MapCache-a5fe62d2.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./_baseClone-9893c13d.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-c6a1cb9a.js";import"./_baseRest-02fa5698.js";import"./_isIterateeCall-32e9d79b.js";import"./sqlFunctions-283a0d8b.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-2c17af13.js";import"./ButtonBase-4f599170.js";import"./emotion-react.browser.esm-4b1ddfee.js";import"./assertThisInitialized-081f9914.js";import"./cloneDeep-e7395938.js";function q({link:a,summary:n,countSql:l,title:i}){return t(K,{title:o("div",{className:"Goals__Mobile__Header",children:[l&&t("span",{className:"Goals__Mobile__Header__Count",children:t(R,{parens:!1,query:{sql:l}})}),o("span",{className:"Goals__Mobile__Header__Title",children:[" ",i," "]})]}),content:o("div",{className:"Goals__Mobile__Content",children:[t("p",{children:n}),t(L,{variant:"contained",color:"secondary",className:"Goals__Mobile__Content__Link",href:a,children:"Explore"})]})})}try{q.displayName="GoalsMobile",q.__docgenInfo={description:"",displayName:"GoalsMobile",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}function E({asset:a,link:n,summary:l,countSql:i,title:p}){return o("div",{className:"Goals__Card",children:[t("div",{className:"Goals__Card__header",style:{background:`url('${a}')`},children:o("p",{children:[o("span",{className:"Goals__Card__header__title",children:[" ",p," "]}),i&&t("span",{className:"Goals__Card__header__count",children:t(R,{parens:!1,query:{sql:i}})})]})}),o("div",{className:"Goals__Card__summary",children:[o("p",{children:[" ",l," "]}),t(L,{className:"Goals__Card__summary__link",variant:"contained",color:"secondary",href:n,children:"Explore"})]})]})}try{E.displayName="GoalsDesktop",E.__docgenInfo={description:"",displayName:"GoalsDesktop",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}const G=a=>{const{entityId:n}=a,{accessToken:l}=F(),[i,p]=h.useState(),[_,b]=h.useState(),C=P(),w={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:n,partMask:j|B,query:{sql:`select * from ${n} order by ItemOrder`}},{data:e}=$(w);h.useEffect(()=>{(async()=>{try{const m=c("Asset",e),r=(e==null?void 0:e.queryResult.queryResults.rows.map(s=>s.values[m]))??[];if(r.some(s=>s===null)&&console.warn("Row has null value(s) when no nulls expected"),r.length===0)return;const d={includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:r.map(s=>({associateObjectId:n,associateObjectType:O.TableEntity,fileHandleId:s}))},g=await Q(d,l);b(void 0),p(g.requestedFiles.filter(s=>s.preSignedURL!==void 0).map(s=>s.preSignedURL))}catch(m){console.error("Error on get data",m),b(m)}})()},[n,l,e]);const S=c("TableId",e),y=c("CountSql",e),D=c("Title",e),M=c("Summary",e),T=c("Link",e);return o("div",{className:`Goals${C?"__Desktop":""}`,children:[_&&t(A,{error:_}),e==null?void 0:e.queryResult.queryResults.rows.map((I,m)=>{const r=I.values;r.some(H=>H===null)&&console.warn("Row has null value(s) when no nulls expected");const f=S>-1?r[S]:void 0;let d;y>-1&&r[y]?d=r[y]:f&&(d=`SELECT * FROM ${f}`);const g=r[D],s=r[M],V=r[T],U=(i==null?void 0:i[m])??"",N={countSql:d,title:g,summary:s,link:V,asset:U};return C?t(E,{...N}):t(q,{...N})})]})};try{G.displayName="Goals",G.__docgenInfo={description:"",displayName:"Goals",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}const Ke={title:"Home Page/Goals",component:G},u={args:{entityId:"syn22315959"}};var k,x,v;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    entityId: 'syn22315959'
  }
}`,...(v=(x=u.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const Ye=["Demo"];export{u as Demo,Ye as __namedExportsOrder,Ke as default};
//# sourceMappingURL=Goals.stories-2d7d6d1b.js.map
