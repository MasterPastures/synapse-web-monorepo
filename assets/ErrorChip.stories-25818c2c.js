import{j as e}from"./jsx-runtime-670450c2.js";import{E as p}from"./ErrorChip-8ffa0771.js";import{_ as A,S as E,j as s}from"./SynapseContext-af369fe6.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Clear-3ac01158.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-a7106a93.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-3634b412.js";import"./isHostComponent-fa76b8d9.js";import"./index-96c5f47c.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./createSvgIcon-e9aacc10.js";import"./SvgIcon-139ff9de.js";import"./ButtonBase-b022013b.js";import"./emotion-react.browser.esm-2df70300.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-74263c7b.js";import"./IconSvg-93d4f8f8.js";import"./Fade-9c0595ba.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./Box-410a3c10.js";import"./extendSxProp-667aa008.js";import"./Button-c1d710d9.js";import"./Button-7d415009.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";const nr={title:"Components/ErrorChip",component:p,render:n=>e(A,{children:i=>e(E,{synapseContext:{...i,accessToken:n.isAuthenticated?i.accessToken||"fake token":void 0},children:e(p,{...n})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},l=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:l,isAuthenticated:!0}};var a,c,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const ir=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,ir as __namedExportsOrder,nr as default};
//# sourceMappingURL=ErrorChip.stories-25818c2c.js.map
