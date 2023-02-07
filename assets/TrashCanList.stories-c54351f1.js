import{a as l,j as e,F as k}from"./jsx-runtime-670450c2.js";import{d as O}from"./dayjs.min-e0adaab4.js";import{r as m}from"./index-f1f749bf.js";import{f as z}from"./DateFormatter-b21d27ba.js";import{a4 as S,dR as Q,bJ as E,dS as q,dT as G}from"./SynapseContext-211e2958.js";import{u as W}from"./useEntity-c7e000f8.js";import{u as P}from"./useMutation-65f16e0e.js";import{u as Y}from"./useInfiniteQuery-6d07f95f.js";import{E as _}from"./EntityLink-810aada6.js";import{B as J,S as V}from"./LoadingScreen-33c9956c.js";import{W as $}from"./WarningModal-fe3a4073.js";import{C as R}from"./Checkbox-44f336ac.js";import{T as g}from"./Typography-f91bff1f.js";import{T as H}from"./Table-6b0350f2.js";import{A as K}from"./FullWidthAlert-bcde5cdd.js";import{B as p}from"./Button-7d415009.js";import"./_commonjsHelpers-042e6b4d.js";import"./utc-8a3e1a17.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-d5cf0a46.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-5ece020a.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./styled-9b57412c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Clear-ddba1ff0.js";import"./useIsFocusVisible-c754a498.js";import"./SvgIcon-a4f5cf68.js";import"./isArray-a82322d9.js";import"./index-4d501b15.js";import"./getEndpoint-5374ab4d.js";import"./IconSvg-9c13dbe8.js";import"./createWithBsPrefix-e09f51dd.js";import"./IconButton-6e69f6c0.js";import"./ButtonBase-a1be1f9a.js";import"./emotion-react.browser.esm-515d14f4.js";import"./assertThisInitialized-081f9914.js";import"./Link-ce35937e.js";import"./Button-475c86c5.js";import"./SynapseConstants-6db32387.js";import"./queryKeys-dd803d9a.js";import"./pick-0dc13abc.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";import"./_baseClone-eded737a.js";import"./_Set-fca98fa5.js";import"./_baseSlice-cf92e063.js";import"./EntityIcon-0e824e3c.js";import"./ErrorChip-f06e10be.js";import"./Skeleton-38aaf623.js";import"./Modal-29f84dca.js";import"./contains-60f9209b.js";import"./useWillUnmount-7fb15b8a.js";import"./divWithClassName-f9d24722.js";import"./usePrevious-9f30f8c7.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./useWaitForDOMRef-54076dc2.js";import"./uniqueId-9feaf103.js";import"./hook-c05d8d9f.js";function U(r){const{accessToken:t}=S();return Y(["trashcan","list",t],s=>Q(t,s.pageParam),{...r,getNextPageParam:(s,n)=>{const a=n.flatMap(o=>o.results).length;if(s.totalNumberOfResults>a)return a}})}function X(r){const t=E(),{accessToken:s}=S();return P(n=>{typeof n=="string"&&(n=new Set([n]));const a=Array.from(n).map(o=>q(o,s));return Promise.allSettled(a)},{...r,onSuccess:async(n,a,o)=>{await t.invalidateQueries(["trashcan"]),r!=null&&r.onSuccess&&await r.onSuccess(n,a,o)}})}function Z(r){const t=E(),{accessToken:s}=S();return P(n=>{typeof n=="string"&&(n=new Set([n]));const a=Array.from(n).map(o=>G(o,s));return Promise.allSettled(a)},{...r,onSuccess:async(n,a,o)=>{await t.invalidateQueries(["trashcan"]),r!=null&&r.onSuccess&&await r.onSuccess(n,a,o)}})}function ee(r){const{item:t,isSelected:s,setIsSelected:n,onRestore:a}=r,{data:o}=W(t.originalParentId);return l("tr",{children:[e("td",{children:e(R,{label:`Select ${t.entityId}`,hideLabel:!0,checked:s,onChange:n})}),e("td",{children:t.entityId}),e("td",{children:t.entityName}),e("td",{children:l(k,{children:[o&&e(_,{entity:o})," (",t.originalParentId,")"]})}),e("td",{children:z(O(t.deletedOn))}),e("td",{children:e(p,{size:"sm",variant:"outline",onClick:a,children:"Restore"})})]})}function te(r){return r.filter(t=>t.status==="rejected").map(t=>t.reason)}function re(){const r=m.useRef(!0),[t,s]=m.useState(new Set),[n,a]=m.useState(!1),[o,C]=m.useState([]);m.useEffect(()=>(r.current=!0,()=>{r.current=!1}));function b(i,d){r.current&&(i?C(te(i)):d&&C([d]),s(new Set))}const{mutate:T,isLoading:D}=X({onSettled:b}),{mutate:B,isLoading:I}=Z({onSettled:b}),M=D||I,{data:h,isLoading:f,hasNextPage:N,fetchNextPage:A,isFetchingNextPage:j}=U({useErrorBoundary:!0}),c=(h==null?void 0:h.pages.flatMap(i=>i.results))??[],w=t.size===c.length,F=()=>{s(w?new Set:new Set(c.map(i=>i.entityId)))};return l("div",{className:"bootstrap-4-backport",children:[e(J,{show:M,headlineText:I?"Deleting...":"Restoring..."}),e(g,{variant:"body1",children:'The trash can contains items that were recently deleted. You can recover deleted items in the trash can by clicking "Restore". Items will remain in the trash can for 30 days before being automatically purged.'}),e($,{title:"Delete selected items from your Trash?",modalBody:e(g,{variant:"body1",children:"You can't undo this action."}),confirmButtonText:"Delete",confirmButtonVariant:"danger",onConfirm:()=>{B(t),a(!1)},onCancel:()=>{a(!1)},show:n}),f&&e(V,{}),!f&&c.length===0&&e(g,{variant:"body1",children:"Trash Can is currently empty."}),!f&&c.length>0&&l(k,{children:[l(H,{striped:!0,borderless:!0,bordered:!1,children:[e("thead",{children:l("tr",{children:[e("th",{children:e(R,{label:"Select All",hideLabel:!0,checked:w,onChange:F})}),e("th",{children:"ID"}),e("th",{children:"Name"}),e("th",{children:"Location"}),e("th",{children:"Deleted On"}),e("th",{})]})}),e("tbody",{children:c.map(i=>e(ee,{item:i,isSelected:t.has(i.entityId),setIsSelected:d=>{s(y=>(d?y.add(i.entityId):y.delete(i.entityId),new Set(y)))},onRestore:()=>{T(i.entityId),t.delete(i.entityId)}},i.entityId))})]}),o.length>0&&l(K,{dismissible:!1,show:!0,variant:"danger",transition:!1,children:["The following errors were encountered:",e("ul",{children:o.map(i=>e("li",{children:i.message},i.message))})]}),l("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[N&&e(p,{variant:"sds-primary",disabled:j,onClick:()=>{A()},children:"Load More"}),e("div",{style:{margin:"auto"}}),e(p,{variant:"danger",disabled:t.size===0,onClick:()=>{a(!0)},children:"Delete Selected"}),e(p,{variant:"outline",disabled:t.size===0,onClick:()=>{T(t)},children:"Restore Selected"})]})]})]})}const ut={title:"Synapse/TrashCanList",component:re},u={};var x,v,L;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(L=(v=u.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const pt=["TrashCan"];export{u as TrashCan,pt as __namedExportsOrder,ut as default};
//# sourceMappingURL=TrashCanList.stories-c54351f1.js.map