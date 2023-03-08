import{j as t,a as n,F as T}from"./jsx-runtime-670450c2.js";import{r as o}from"./index-f1f749bf.js";import{a9 as $,cN as L,di as P,cM as F,b0 as k,cV as O,dj as U,ag as q}from"./SynapseContext-3d6f4701.js";import{d as A}from"./dayjs.min-e0adaab4.js";import{U as K}from"./UserCard-4d2c9697.js";import{h as z}from"./SynapseConstants-41b9b1f3.js";import{I as _}from"./IconSvg-03399efa.js";import{S as G}from"./SkeletonTable-d98e81eb.js";import{P as B}from"./getEndpoint-5374ab4d.js";import{f as H}from"./DateFormatter-cfd8096f.js";import{R as J}from"./Row-36b4b687.js";import{C as E}from"./Col-053aba76.js";import{S as Q}from"./Skeleton-1377209b.js";import{T as g}from"./Typography-0df81c96.js";import{s as W}from"./NoSearchResults-af5e6b64.js";import{d as X}from"./ToastMessage-37d46070.js";import{B as Y}from"./Button-a16e56e5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-9cd95192.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-df5bc5e3.js";import"./extends-98964cd2.js";import"./styled-1b6f4d44.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-b2c92aa4.js";import"./Clear-b4ccb838.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./useIsFocusVisible-83eed526.js";import"./Transition-955f7fb7.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./SvgIcon-36e6768e.js";import"./isArray-5e3f9107.js";import"./Box-5df43b07.js";import"./extendSxProp-c6163236.js";import"./Button-41488909.js";import"./ButtonBase-4feee6fc.js";import"./emotion-react.browser.esm-0771b2df.js";import"./assertThisInitialized-4a7b3b26.js";import"./Alert-4bfa1ee7.js";import"./hook-3d9ea2b9.js";import"./createWithBsPrefix-d1384812.js";import"./divWithClassName-f0cd5fab.js";import"./index-4d501b15.js";import"./IconCopy-9a72c17a.js";import"./Overlay-907d5d0f.js";import"./contains-33365353.js";import"./usePopperMarginModifiers-5c87d941.js";import"./hasClass-ec9efd32.js";import"./useWaitForDOMRef-c561e186.js";import"./times-23e595c8.js";import"./toInteger-67b97e96.js";import"./isSymbol-7c514724.js";import"./utc-8a3e1a17.js";import"./FullWidthAlert-89ce8092.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";const b=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),x=r=>{const{threadId:p,replyId:c}=r,{accessToken:a}=$(),[s,l]=o.useState(),[h,f]=o.useState(""),[i,m]=o.useState(),[S,I]=o.useState(),[y,v]=o.useState(!1),N=async()=>{let u;const e=await L(p,a);if(v(!0),c){const d=await P(c,a);u=await F(d.messageKey,a),I(await k(a,d.createdBy)),m(d)}else I(await k(a,e.createdBy)),u=await O(e.messageKey,a);f(await b(u.messageUrl)),l(e),v(!1)};return o.useEffect(()=>{N()},[]),t("div",{className:"search-result-container",children:n(J,{children:[t(E,{xs:1,children:y?t(Q,{variant:"circular",width:"40px",height:"40px"}):c?t(_,{icon:"replyTwoTone"}):t(_,{icon:"chatTwoTone"})}),t(E,{xs:11,children:y?t(G,{numCols:1,numRows:4}):n(T,{children:[t(g,{variant:"headline3",children:t("a",{className:"link",href:((u,e,d)=>{let j=`${B.PORTAL}#!Synapse:${e}/discussion/threadId=${u}`;return d&&(j+=`&replyId=${d}`),j})(s==null?void 0:s.id,s==null?void 0:s.projectId,i==null?void 0:i.id),children:s==null?void 0:s.title})}),t("div",{className:"truncated",children:t(g,{variant:"body1",children:h})}),n("div",{className:"search-result-footer",children:[c?"Reply":"Thread"," by"," ",t(K,{size:z,ownerId:S==null?void 0:S.ownerId})," ",H(A(i==null?void 0:i.createdOn))]})]})})]})})};try{b.displayName="getMessage",b.__docgenInfo={description:"",displayName:"getMessage",props:{}}}catch{}try{x.displayName="DiscussionSearchResult",x.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}}}catch{}const w=r=>{const{onSearchResultsVisible:p}=r,{accessToken:c}=$(),[a,s]=o.useState(""),[l,h]=o.useState(),[f,i]=o.useState(),[m,S]=o.useState(),[I,y]=o.useState(!1),v=async()=>{p&&p(!0);try{h(void 0),y(!1);const e=await U({searchString:a,nextPageToken:void 0},r.forumId,c);e.matches.length==0&&y(!0),h(e),i(e.matches)}catch(e){X(e.reason,"danger")}},N=()=>{p&&p(!1),s(""),h(void 0),y(!1),i(void 0)};o.useEffect(()=>{(async()=>{if(r.projectId){const d=await q(c,r.projectId);S(d)}})()},[c,r.projectId]);const C=()=>n("div",{className:"text-center",children:[W,t(g,{variant:"body1",children:"No results with this query"}),t(g,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),u=async()=>{const e=await U({searchString:a,nextPageToken:l==null?void 0:l.nextPageToken},r.forumId,c);h(e),f&&i([...f,...e.matches])};return n("div",{className:"bootstrap-4-backport ForumSearch",children:[n("div",{children:[t("span",{className:"SearchIcon",children:t(_,{icon:"search"})}),t("input",{role:"textbox",type:"search",className:`SearchBar  ${l?"SearchBarResult":""}`,placeholder:"Search discussions",value:a,onChange:e=>{s(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&v()}}),a&&t("button",{className:"ClearSearchIcon",onClick:()=>{N()},children:t(_,{icon:"clear"})})]}),I&&n(T,{children:[r.projectId&&n(g,{variant:"body1Italic",className:"NoResultsText",children:['No results for "',a,'" in ',m==null?void 0:m.name]}),t(C,{})]}),f&&n(T,{children:[r.projectId&&!I&&n(g,{variant:"body1Italic",className:"ResultsText",children:['Results for "',a,'" in ',m==null?void 0:m.name]}),f.map(e=>t("div",{children:t(x,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(l==null?void 0:l.nextPageToken)&&t("div",{className:"text-center",children:t(Y,{variant:"primary",onClick:()=>{u()},children:"Load more"})})]})};try{w.displayName="ForumSearch",w.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}const nt={title:"Synapse/ForumSearch",component:w},R={args:{forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)}};var M,V,D;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    forumId: '1032',
    onSearchResultsVisible: visible => alert(\`Is visible? \${visible}\`)
  }
}`,...(D=(V=R.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const ct=["Demo"];export{R as Demo,ct as __namedExportsOrder,nt as default};
//# sourceMappingURL=ForumSearch.stories-cb223585.js.map
