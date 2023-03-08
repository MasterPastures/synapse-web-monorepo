import{j as t,a}from"./jsx-runtime-670450c2.js";import{r as h}from"./index-f1f749bf.js";import{a9 as H,aF as O,al as A,at as P}from"./SynapseContext-3d6f4701.js";import{u as Q}from"./useGetQueryResultBundle-19269b6c.js";import{u as j}from"./useShowDesktop-5e97065b.js";import{E as B}from"./ExpandableContent-fe228aac.js";import{Q as x}from"./QueryCount-934aa04f.js";import{B as L}from"./Button-a16e56e5.js";import{g as c}from"./queryUtils-98a4937b.js";import{o as $,i as K}from"./SynapseConstants-41b9b1f3.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-9cd95192.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-df5bc5e3.js";import"./extends-98964cd2.js";import"./styled-1b6f4d44.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-b2c92aa4.js";import"./Clear-b4ccb838.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./useIsFocusVisible-83eed526.js";import"./Transition-955f7fb7.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./SvgIcon-36e6768e.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./IconSvg-03399efa.js";import"./Box-5df43b07.js";import"./extendSxProp-c6163236.js";import"./Button-41488909.js";import"./ButtonBase-4feee6fc.js";import"./emotion-react.browser.esm-0771b2df.js";import"./assertThisInitialized-4a7b3b26.js";import"./Alert-4bfa1ee7.js";import"./hook-3d9ea2b9.js";import"./createWithBsPrefix-d1384812.js";import"./divWithClassName-f0cd5fab.js";import"./index-4d501b15.js";import"./useInfiniteQuery-4894bbfc.js";import"./sqlFunctions-cb15b508.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-c56aa7b9.js";import"./cloneDeep-632229c4.js";import"./_baseClone-3ca9cb28.js";function q({link:o,summary:n,countSql:i,title:l}){return t(B,{title:a("div",{className:"Goals__Mobile__Header",children:[i&&t("span",{className:"Goals__Mobile__Header__Count",children:t(x,{parens:!1,query:{sql:i}})}),a("span",{className:"Goals__Mobile__Header__Title",children:[" ",l," "]})]}),content:a("div",{className:"Goals__Mobile__Content bootstrap-4-backport",children:[t("p",{children:n}),t(L,{variant:"secondary",className:"pill Goals__Mobile__Content__Link",href:o,children:"EXPLORE"})]})})}try{q.displayName="GoalsMobile",q.__docgenInfo={description:"",displayName:"GoalsMobile",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}function b({asset:o,link:n,summary:i,countSql:l,title:p}){return a("div",{className:"Goals__Card bootstrap-4-backport",children:[t("div",{className:"Goals__Card__header",style:{background:`url('${o}')`},children:a("p",{children:[a("span",{className:"Goals__Card__header__title",children:[" ",p," "]}),l&&t("span",{className:"Goals__Card__header__count",children:t(x,{parens:!1,query:{sql:l}})})]})}),a("div",{className:"Goals__Card__summary",children:[a("p",{children:[" ",i," "]}),t(L,{className:"pill Goals__Card__summary__link",variant:"secondary",href:n,children:"EXPLORE"})]})]})}try{b.displayName="GoalsDesktop",b.__docgenInfo={description:"",displayName:"GoalsDesktop",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}const E=o=>{const{entityId:n}=o,{accessToken:i}=H(),[l,p]=h.useState(),[_,G]=h.useState(),C=j(),w={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:n,partMask:$|K,query:{sql:`select * from ${n} order by ItemOrder`}},{data:e}=Q(w);h.useEffect(()=>{(async()=>{try{const m=c("Asset",e),r=(e==null?void 0:e.queryResult.queryResults.rows.map(s=>s.values[m]))??[];if(r.some(s=>s===null)&&console.warn("Row has null value(s) when no nulls expected"),r.length===0)return;const d={includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:r.map(s=>({associateObjectId:n,associateObjectType:A.TableEntity,fileHandleId:s}))},g=await P(d,i);G(void 0),p(g.requestedFiles.filter(s=>s.preSignedURL!==void 0).map(s=>s.preSignedURL))}catch(m){console.error("Error on get data",m),G(m)}})()},[n,i,e]);const S=c("TableId",e),y=c("CountSql",e),D=c("Title",e),M=c("Summary",e),T=c("Link",e);return a("div",{className:`Goals${C?"__Desktop":""}`,children:[_&&t(O,{error:_}),e==null?void 0:e.queryResult.queryResults.rows.map((k,m)=>{const r=k.values;r.some(F=>F===null)&&console.warn("Row has null value(s) when no nulls expected");const f=S>-1?r[S]:void 0;let d;y>-1&&r[y]?d=r[y]:f&&(d=`SELECT * FROM ${f}`);const g=r[D],s=r[M],V=r[T],U=(l==null?void 0:l[m])??"",I={countSql:d,title:g,summary:s,link:V,asset:U};return C?t(b,{...I}):t(q,{...I})})]})};try{E.displayName="Goals",E.__docgenInfo={description:"",displayName:"Goals",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}const Pe={title:"Home Page/Goals",component:E},u={args:{entityId:"syn22315959"}};var N,v,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    entityId: 'syn22315959'
  }
}`,...(R=(v=u.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const Qe=["Demo"];export{u as Demo,Qe as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Goals.stories-3bb8d0bd.js.map
