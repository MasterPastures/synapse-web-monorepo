import{u as h}from"./SynapseConstants-9d1f6e44.js";import{j as e,a as l,F as U}from"./jsx-runtime-ad672792.js";import{u as V}from"./useShowDesktop-5e97065b.js";import{U as S}from"./UserCardListRotate-55817e92.js";import{E}from"./ExpandableContent-98e5d2d4.js";import{r as q}from"./index-f1f749bf.js";import{B as C}from"./Button-7d415009.js";import"./sqlFunctions-21dad1e9.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-6b3a472b.js";import"./SynapseContext-c58a2137.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./isArray-5e3f9107.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./getEndpoint-5374ab4d.js";import"./SvgIcon-93d86b25.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-8837a0b3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./IconSvg-87f26736.js";import"./Clear-a9f76abf.js";import"./useTheme-c4678cf9.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./Box-2e3c1244.js";import"./extendSxProp-a6801df0.js";import"./Button-e0234af7.js";import"./ButtonBase-26873d31.js";import"./emotion-react.browser.esm-a8a50fc7.js";import"./assertThisInitialized-081f9914.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./ColumnType-5116adf5.js";import"./UserCardList-96608fe9.js";import"./UserCard-2d391e21.js";import"./IconCopy-4d77a0f7.js";import"./SkeletonTable-732b8297.js";import"./times-16c3568d.js";import"./_baseTimes-8cccc40f.js";import"./toInteger-7a6378f7.js";import"./isSymbol-7c514724.js";import"./Skeleton-cff63b1c.js";import"./ToastMessage-306d2a68.js";import"./FullWidthAlert-d2f0fc35.js";import"./Typography-f5dd8748.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Overlay-77639877.js";import"./contains-33365353.js";import"./usePopperMarginModifiers-95563bac.js";import"./useWaitForDOMRef-54076dc2.js";import"./without-562d1a85.js";import"./_cacheHas-6b54133e.js";import"./_MapCache-31c5c3d9.js";import"./isArrayLikeObject-bbd21067.js";import"./use-deep-compare-effect.esm-2b920fea.js";import"./index-5d0cf067.js";function p(t){const{columnName:a,facetValues:r,...s}=t;return e("div",{children:r==null?void 0:r.map((i,o)=>{const n=r[o],m=e(S,{...s,selectedFacets:[{columnName:a,facetValues:[n],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]});return e(E,{title:l(U,{children:[" ",n," "]}),content:m},`UserCardListGroup-Mobile-${o}`)})})}try{p.displayName="UserCardListGroupsMobile",p.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function d(t){const[a,r]=q.useState(0),{columnName:s,facetValues:i,...o}=t,n={columnName:s,facetValues:[i[a]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return l("div",{className:"control-container",children:[l("div",{className:"button-container",children:[i==null?void 0:i.map((c,m)=>e("button",{className:a===m?"isSelected":"",onClick:()=>r(m),children:c},c)),e("button",{className:"gap-fill"})]}),e("div",{className:"content-container",children:e(S,{...o,selectedFacets:[n]},`UserCardListGroup-${a}`)})]})}try{d.displayName="UserCardListGroupsDesktop",d.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function y(t){const{summaryLink:a,summaryLinkText:r,...s}=t,i=V();return e("div",{className:`bootstrap-4-backport UserCardListGroups${i?"__Desktop":""}`,children:l("div",{children:[i?e(d,{...s}):e(p,{...s}),a&&r&&e("div",{className:"UserCardListGroups__summary",children:e(C,{variant:"secondary",size:"lg",href:a,children:r})})]})})}try{y.displayName="UserCardListGroups",y.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}const Fe={title:"Home Page/UserCardListGroups",component:y},u={args:{sql:"SELECT * FROM syn21781196 WHERE isFeatured='true'",columnName:"Project Title",facetValues:["Somatic Mosaicism in the brain of Tourette syndrome","Somatic Mosaicism in Schizophrenia and Control Brains","1/3-Schizophrenia Genetics and Brain Somatic Mosaicism","2/3-Schizophrenia Genetics and Brain Somatic Mosaicism","Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder","Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease","1/2-Somatic mosaicism and autism spectrum disorder","2/2-Somatic mosaicism and autism spectrum disorder","3/3-Schizophrenia Genetics and Brain Somatic Mosaicism"],size:h,useQueryResultUserData:!1,summaryLinkText:"Explore All People",summaryLink:"/Explore/People",count:6}};var f,R,L;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sql: "SELECT * FROM syn21781196 WHERE isFeatured='true'",
    columnName: 'Project Title',
    facetValues: ['Somatic Mosaicism in the brain of Tourette syndrome', 'Somatic Mosaicism in Schizophrenia and Control Brains', '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism', '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism', 'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder', 'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease', '1/2-Somatic mosaicism and autism spectrum disorder', '2/2-Somatic mosaicism and autism spectrum disorder', '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism'],
    size: MEDIUM_USER_CARD,
    useQueryResultUserData: false,
    summaryLinkText: 'Explore All People',
    summaryLink: '/Explore/People',
    count: 6
  }
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const Be=["Demo"];export{u as Demo,Be as __namedExportsOrder,Fe as default};
//# sourceMappingURL=UserCardListGroups.stories-412a2276.js.map