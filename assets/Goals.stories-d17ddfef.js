import{j as t,a}from"./jsx-runtime-ad672792.js";import{r as h}from"./index-f1f749bf.js";import{ai as F,aP as A,au as O,aC as P}from"./SynapseContext-d313cbec.js";import{u as Q}from"./useGetQueryResultBundle-8a54fdb6.js";import{u as j}from"./useShowDesktop-5e97065b.js";import{E as B}from"./ExpandableContent-30b3a192.js";import{Q as R}from"./QueryCount-9891cb07.js";import{B as L}from"./Button-7d415009.js";import{g as p}from"./queryUtils-7639a20c.js";import{o as $,i as K}from"./SynapseConstants-9d1f6e44.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./isArray-5e3f9107.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./getEndpoint-ac94413e.js";import"./SvgIcon-08a7d1dd.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-25e9c81a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./IconSvg-6d8374ab.js";import"./Clear-499958d6.js";import"./useTheme-419a64bd.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./Box-4cee9ecb.js";import"./extendSxProp-f2003eec.js";import"./Button-182a752c.js";import"./ButtonBase-d1b34a95.js";import"./emotion-react.browser.esm-dd348113.js";import"./assertThisInitialized-081f9914.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./useInfiniteQuery-7e8e431b.js";import"./infiniteQueryBehavior-b692f36a.js";import"./merge-1cd54690.js";import"./_baseClone-0d24ce97.js";import"./_MapCache-65b087e4.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-089af80a.js";import"./_isIterateeCall-54465d38.js";import"./sqlFunctions-783bb8e8.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-ab706eb8.js";import"./cloneDeep-c3de8e39.js";function q({link:o,summary:n,countSql:l,title:i}){return t(B,{title:a("div",{className:"Goals__Mobile__Header",children:[l&&t("span",{className:"Goals__Mobile__Header__Count",children:t(R,{parens:!1,query:{sql:l}})}),a("span",{className:"Goals__Mobile__Header__Title",children:[" ",i," "]})]}),content:a("div",{className:"Goals__Mobile__Content bootstrap-4-backport",children:[t("p",{children:n}),t(L,{variant:"secondary",className:"Goals__Mobile__Content__Link",href:o,children:"Explore"})]})})}try{q.displayName="GoalsMobile",q.__docgenInfo={description:"",displayName:"GoalsMobile",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}function b({asset:o,link:n,summary:l,countSql:i,title:d}){return a("div",{className:"Goals__Card bootstrap-4-backport",children:[t("div",{className:"Goals__Card__header",style:{background:`url('${o}')`},children:a("p",{children:[a("span",{className:"Goals__Card__header__title",children:[" ",d," "]}),i&&t("span",{className:"Goals__Card__header__count",children:t(R,{parens:!1,query:{sql:i}})})]})}),a("div",{className:"Goals__Card__summary",children:[a("p",{children:[" ",l," "]}),t(L,{className:"Goals__Card__summary__link",variant:"secondary",href:n,children:"Explore"})]})]})}try{b.displayName="GoalsDesktop",b.__docgenInfo={description:"",displayName:"GoalsDesktop",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}const C=o=>{const{entityId:n}=o,{accessToken:l}=F(),[i,d]=h.useState(),[_,G]=h.useState(),E=j(),w={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:n,partMask:$|K,query:{sql:`select * from ${n} order by ItemOrder`}},{data:e}=Q(w);h.useEffect(()=>{(async()=>{try{const m=p("Asset",e),r=(e==null?void 0:e.queryResult.queryResults.rows.map(s=>s.values[m]))??[];if(r.some(s=>s===null)&&console.warn("Row has null value(s) when no nulls expected"),r.length===0)return;const c={includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:r.map(s=>({associateObjectId:n,associateObjectType:O.TableEntity,fileHandleId:s}))},g=await P(c,l);G(void 0),d(g.requestedFiles.filter(s=>s.preSignedURL!==void 0).map(s=>s.preSignedURL))}catch(m){console.error("Error on get data",m),G(m)}})()},[n,l,e]);const S=p("TableId",e),y=p("CountSql",e),D=p("Title",e),M=p("Summary",e),T=p("Link",e);return a("div",{className:`Goals${E?"__Desktop":""}`,children:[_&&t(A,{error:_}),e==null?void 0:e.queryResult.queryResults.rows.map((k,m)=>{const r=k.values;r.some(H=>H===null)&&console.warn("Row has null value(s) when no nulls expected");const f=S>-1?r[S]:void 0;let c;y>-1&&r[y]?c=r[y]:f&&(c=`SELECT * FROM ${f}`);const g=r[D],s=r[M],V=r[T],U=(i==null?void 0:i[m])??"",I={countSql:c,title:g,summary:s,link:V,asset:U};return E?t(b,{...I}):t(q,{...I})})]})};try{C.displayName="Goals",C.__docgenInfo={description:"",displayName:"Goals",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}const $e={title:"Home Page/Goals",component:C},u={args:{entityId:"syn22315959"}};var N,x,v;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    entityId: 'syn22315959'
  }
}`,...(v=(x=u.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const Ke=["Demo"];export{u as Demo,Ke as __namedExportsOrder,$e as default};
//# sourceMappingURL=Goals.stories-d17ddfef.js.map