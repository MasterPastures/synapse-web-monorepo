import{a as l,F as y,j as o}from"./jsx-runtime-095bf462.js";import{r as e}from"./index-8db94870.js";import{b as D}from"./useSubscription-09daae09.js";import{au as p,P as I}from"./SynapseClient-0a8d63c6.js";import{S as T}from"./SubscriptionItem-7c3ca246.js";import{D as v}from"./DropdownSelect-21a853d5.js";import{B as C}from"./Box-891dc3c7.js";import{T as F,a as d}from"./Tabs-e906015a.js";import{S as R}from"./Stack-f7ee2fdc.js";import{B as E}from"./Button-d3d5b3a8.js";import{M as _}from"./getEndpoint-ac94413e.js";import{g as j}from"./handlers-3e75b33d.js";import"./_commonjsHelpers-042e6b4d.js";import"./useMutation-cd764d1b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./inheritsLoose-c82a83d4.js";import"./useInfiniteQuery-cb326aba.js";import"./OrientationBanner-d057b0e6.js";import"./FullWidthAlert-7e419f2a.js";import"./AlertTitle-d92dfb78.js";import"./styled-96220216.js";import"./createSvgIcon-102248e7.js";import"./Paper-8ac7942c.js";import"./IconButton-1e0dd4f6.js";import"./ButtonBase-0195d275.js";import"./emotion-react.browser.esm-8516f11f.js";import"./assertThisInitialized-081f9914.js";import"./TransitionGroupContext-f2b81dde.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-c5b8eeae.js";import"./extendSxProp-d749f662.js";import"./useTheme-a5fe342b.js";import"./Grow-15d1c4f6.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./utils-60a28f01.js";import"./ClickAwayListener-36b79525.js";import"./Tooltip-e6a8fad5.js";import"./SynapseConstants-0807672a.js";import"./Link-9ad54ce1.js";import"./isArray-5e3f9107.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./CheckCircleTwoTone-cd25e954.js";import"./inputBaseClasses-f1eaf41c.js";import"./Fade-5a6f6506.js";import"./Topic-9225c19a.js";import"./IconSvg-ca528df2.js";import"./ErrorOutlined-b4a8c67a.js";import"./GetAppTwoTone-9a0869d1.js";import"./InfoOutlined-1265fd90.js";import"./ConditionalWrapper-51b8d1ed.js";import"./Skeleton-a24326d8.js";import"./useForum-ebff9318.js";import"./useEntity-89cebbd9.js";import"./pick-e197ef9d.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseClone-c8b39ad5.js";import"./_Uint8Array-90a26a60.js";import"./_MapCache-e9b04981.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./hasIn-4d72521a.js";import"./_baseSlice-cf92e063.js";import"./useThread-a96ca1ad.js";import"./MenuList-f2b66e01.js";import"./index-953d39fd.js";import"./getScrollbarSize-ac846fe6.js";import"./MenuItem-faea0340.js";import"./dividerClasses-30b81617.js";import"./ownerWindow-2c76219e.js";import"./index-43de7067.js";import"./util-f846e4fa.js";import"./entityHandlers-f34fc361.js";import"./mock_user_profile-9a6a3ecf.js";import"./mockProject-6b9e6c20.js";import"./times-f1c18b3d.js";import"./mockFileEntity-7a34149e.js";import"./mock_file_handle-c119220f.js";import"./mockTableEntity-5d93df01.js";import"./userProfileHandlers-c8fb34f2.js";import"./mockSchema-058c6f26.js";import"./accessRequirementHandlers-97e6e693.js";import"./wikiHandlers-0427fc7f.js";import"./mockWiki-f0247f65.js";import"./fileHandlers-b64111f2.js";import"./MockResearchProject-1f79897b.js";import"./researchProjectHandlers-8f9de6a2.js";const r=[{value:"ASC",label:"Date Posted"},{value:"DESC",label:"Most Recent"}];function M(){const[a,S]=e.useState(p.FORUM),[s,f]=e.useState(r[0]),x=e.useId(),n={objectType:a,sortBy:I.CREATED_ON,sortDirection:s.value},{data:m,hasNextPage:h,isFetchingNextPage:c,fetchNextPage:P}=D(n,{staleTime:1/0},[`subscriptionPageFetch_${x}`,n]);return l(y,{children:[o(C,{sx:{float:"right"},children:o(v,{variant:"outlined",options:r.map(t=>t.label),selectedIndex:r.findIndex(t=>t.value===s.value),setSelectedIndex:t=>f(r[t])})}),l(F,{sx:{mb:3},value:a,onChange:(t,O)=>{t.stopPropagation(),S(O)},textColor:"secondary",indicatorColor:"secondary",children:[o(d,{value:p.FORUM,label:"Project Forums"}),o(d,{value:p.THREAD,label:"Threads"})]}),o(R,{gap:.5,children:m==null?void 0:m.pages.map(t=>o(T,{subscription:t},t.subscriptionId))}),h&&o(E,{variant:"contained",onClick:()=>{P()},disabled:c,sx:{mt:6},children:c?"Loading...":"Load More"})]})}const xo={title:"Synapse/Following/SubscriptionPage",component:M,parameters:{stack:"mock"}},i={name:"SubscriptionPage",args:{},parameters:{msw:{handlers:{...j(_)}}}};var u,g,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'SubscriptionPage',
  args: {},
  parameters: {
    msw: {
      handlers: {
        ...getHandlers(MOCK_REPO_ORIGIN)
      }
    }
  }
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const ho=["Demo"];export{i as Demo,ho as __namedExportsOrder,xo as default};
//# sourceMappingURL=SubscriptionPage.stories-024f0310.js.map