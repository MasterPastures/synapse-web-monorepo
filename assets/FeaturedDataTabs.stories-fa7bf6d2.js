import{j as e,a as d,F as I}from"./jsx-runtime-670450c2.js";import{r as f}from"./index-f1f749bf.js";import{a9 as K}from"./SynapseContext-af369fe6.js";import{p as L}from"./sqlFunctions-e0fad088.js";import{p as U,q as w,o as j,i as k,n as Y}from"./SynapseConstants-41b9b1f3.js";import{u as G,b as Z,o as ee,p as te,q as ae,r as re,n as J,e as H,l as $}from"./FacetNav-0a6f205d.js";import{c as se,P as oe}from"./factory-76e91d33.js";import{r as ne}from"./react-sizeme-2217af01.js";import{g as ie}from"./ColorGradient-3d3e1969.js";import{l as le}from"./LoadingScreen-9e217d36.js";import{I as de}from"./ElementWithTooltip-6d79d02c.js";import{B as ce}from"./Button-7d415009.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-9c0595ba.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-3634b412.js";import"./styled-a7106a93.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Clear-3ac01158.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./SvgIcon-139ff9de.js";import"./IconSvg-93d4f8f8.js";import"./Box-410a3c10.js";import"./extendSxProp-667aa008.js";import"./Button-c1d710d9.js";import"./ButtonBase-b022013b.js";import"./emotion-react.browser.esm-2df70300.js";import"./assertThisInitialized-081f9914.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-bb924752.js";import"./queryUtils-fbfbc21b.js";import"./cloneDeep-8777ac5d.js";import"./_baseClone-5e29aa40.js";import"./use-deep-compare-effect.esm-2b920fea.js";import"./index-5d0cf067.js";import"./NoSearchResults-af5e6b64.js";import"./NoData-a9ac3abd.js";import"./unCamelCase-ec1c2b3d.js";import"./ColumnType-5116adf5.js";import"./useEntity-9b981b8e.js";import"./useMutation-66a587b1.js";import"./useInfiniteQuery-bdc736a7.js";import"./pick-fa90edae.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseSlice-cf92e063.js";import"./useGetQueryResultBundle-850d3dd0.js";import"./isEqual-93188ff2.js";import"./_cacheHas-7917f93a.js";import"./_setToArray-3d6ec6fd.js";import"./useGetInfoFromIds-c8ede463.js";import"./uniq-86b8885b.js";import"./toInteger-3da160c7.js";import"./without-7c7a60bb.js";import"./Checkbox-23c2f4f8.js";import"./uniqueId-4d05949d.js";import"./Dropdown-924f7791.js";import"./usePrevious-9f30f8c7.js";import"./contains-33365353.js";import"./usePopperMarginModifiers-bc085d79.js";import"./hasClass-ec9efd32.js";import"./isRequiredForA11y-0a29da5f.js";import"./RadioGroup-e708cf9e.js";import"./dayjs.min-e0adaab4.js";import"./RangeSlider-0587bed1.js";import"./toConsumableArray-85fcc1b5.js";import"./getPrototypeOf-e4242ba0.js";import"./Skeleton-b0c086f6.js";import"./Stack-8c388aa9.js";import"./Modal-6ffa84ac.js";import"./useWillUnmount-7fb15b8a.js";import"./removeClass-164fd327.js";import"./useWaitForDOMRef-54076dc2.js";import"./SelectionCriteriaPill-78e071be.js";import"./Close-35b5f5db.js";import"./colorPalette-c43701fe.js";import"./Typography-5bc17eac.js";import"./SynapseTableConstants-942d2b0b.js";const ue=se(oe),me={showlegend:!1,annotations:[],margin:{l:0,r:0,b:0,t:0,pad:0},yaxis:{visible:!1,showgrid:!1},xaxis:{visible:!1,showgrid:!1}},b=({title:t,description:s,facetsToPlot:r,detailsPagePath:i})=>{const{accessToken:c}=K(),{data:a,isLoadingNewBundle:n}=G(),{getColumnDisplayName:y,rgbIndex:p}=Z(),[m,S]=f.useState([]),[h,X]=f.useState([]),[x,z]=f.useState(""),{colorPalette:W}=ie(p??0,2);if(f.useEffect(()=>{var P;if(!(!r||!a)){const _=l=>{var u,g;return(g=(u=a==null?void 0:a.columnModels)==null?void 0:u.find(E=>E.name===l.columnName))==null?void 0:g.columnType},C=ee(a,r);X(C),Promise.all(C.map(async(l,u)=>await te(l,_(l),u+1,"PIE",c))).then(l=>S(l));const o=(P=a==null?void 0:a.facets)==null?void 0:P.map(l=>{const u=l.facetValues;if(u){const g=u.filter(E=>E.isSelected);return g.length>0?g[0]:void 0}else return})[0];o&&o.value&&z(o==null?void 0:o.value)}},[r,a]),n||!m||!h||h.length===0)return e("div",{className:"FacetPlotsCard FacetPlotsCard__loading SRC-centerContentColumn",children:le});{let P=e(I,{});i&&x&&(P=e("div",{className:"FacetPlotsCard__link",children:d("a",{href:i,children:["View ",x]})}));const _=m.length>1,C=t??(_?x:y(h[0].columnName));return d("div",{className:"FacetPlotsCard cardContainer",children:[d("div",{className:"FacetPlotsCard__titlebar",style:{backgroundColor:W[0].replace(")",",.05)")},children:[e("span",{className:"FacetPlotsCard__title",children:C}),s&&e("span",{className:"FacetPlotsCard__description",children:s}),P,n&&e("span",{style:{marginLeft:"2px"},className:"spinner"})]}),e("div",{className:"FacetPlotsCard__body",children:m.map((o,l)=>d("div",{children:[l!==0&&e("hr",{}),_&&e("div",{className:"FacetPlotsCard__body__facetname",children:e("span",{children:y(h[l].columnName)})}),d("div",{className:"FacetPlotsCard__body__row",children:[e(ne.SizeMe,{monitorHeight:!0,children:({size:u})=>e("div",{className:"FacetPlotsCard__body__plot",children:e(ue,{layout:me,data:(o==null?void 0:o.data)??[],style:ae(u.width,"PIE",150),config:{displayModeBar:!1}},`${r[l]}-${u.width}`)})}),e(re,{labels:o==null?void 0:o.labels,colors:o==null?void 0:o.colors,isExpanded:!1})]})]},l))})]})}};try{b.displayName="FacetPlotsCard",b.__docgenInfo={description:"",displayName:"FacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!1,type:{name:"string"}}}}}catch{}function pe(t,s,r){return{entityId:L(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:U|w|j|k,query:{sql:t,offset:0,limit:Y,selectedFacets:[{columnName:s,facetValues:[r],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]}}}const N=t=>{const{title:s,description:r,sql:i,facetsToPlot:c,rgbIndex:a,selectFacetColumnName:n,selectFacetColumnValue:y,detailsPagePath:p,...m}=t,S=pe(i,n,y);return e("div",{className:"QueryPerFacetPlotsCard",children:e(J,{...m,initQueryRequest:S,children:d(H,{rgbIndex:a,...m,children:[e($,{}),e(b,{title:s,description:r,facetsToPlot:c,detailsPagePath:p})]})})})};try{N.displayName="QueryPerFacetPlotsCard",N.__docgenInfo={description:"",displayName:"QueryPerFacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},selectFacetColumnName:{defaultValue:null,description:"",name:"selectFacetColumnName",required:!0,type:{name:"string"}},selectFacetColumnValue:{defaultValue:null,description:"",name:"selectFacetColumnValue",required:!0,type:{name:"string"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!0,type:{name:"string"}}}}}catch{}function q(t){return{entityId:L(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:U|w|j|k,query:{sql:t,offset:0,limit:1}}}const A=t=>{const{sql:s,facetsToPlot:r,rgbIndex:i,columnAliases:c}=t,a=q(s);return e("div",{className:"SingleQueryFacetPlotsCards",children:e(J,{initQueryRequest:a,children:d(H,{rgbIndex:i,columnAliases:c,children:[e($,{}),r==null?void 0:r.map(n=>e(b,{facetsToPlot:[n]},`FacetPlotCard-${n}`))]})})})};try{q.displayName="getQueryRequest",q.__docgenInfo={description:"",displayName:"getQueryRequest",props:{}}}catch{}try{A.displayName="SingleQueryFacetPlotsCards",A.__docgenInfo={description:"",displayName:"SingleQueryFacetPlotsCards",props:{rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},columnAliases:{defaultValue:null,description:"",name:"columnAliases",required:!1,type:{name:"Record<string, string>"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}}}}}catch{}const M=t=>{const{configs:s,rgbIndex:r,sql:i}=t,c=s[0].selectFacetColumnName;return e("div",{className:`FeaturedDataPlots${c?"__queryPerCard":"__singleQuery"}`,children:s.map(a=>d(I,{children:[c&&e(N,{...a,rgbIndex:r,sql:i}),!c&&e(A,{...a,rgbIndex:r,sql:i})]}))})};try{M.displayName="FeaturedDataPlots",M.__docgenInfo={description:"",displayName:"FeaturedDataPlots",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"QueryFacetPlotsCardsProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},explorePagePath:{defaultValue:null,description:"",name:"explorePagePath",required:!1,type:{name:"string"}}}}}catch{}const V=t=>{var y;const[s,r]=f.useState(0),{configs:i,rgbIndex:c,sql:a}=t,n=i[s];return d("div",{className:"FeaturedDataTabs",children:[e("div",{className:"FeaturedDataTabs__tabs",children:i.map((p,m)=>e("div",{className:`FeaturedDataTabs__tabs__tab ${m===s?"FeaturedDataTabs__tabs__tab__selected":""}`,children:d("button",{className:"SRC-centerAndJustifyContent",onClick:()=>r(m),children:[p.icon&&e(de,{type:p.icon}),e("span",{children:p.title})]})},p.title))}),n&&d(I,{children:[e(M,{...n.plotsConfig,rgbIndex:c,sql:a,explorePagePath:n.explorePagePath},`${a}-${s}`),n.explorePagePath&&e("div",{className:"bootstrap-4-backport FeaturedDataTabs__explore-all",children:d(ce,{className:"pill",variant:"secondary",size:"lg",href:n.explorePagePath,children:["EXPLORE ALL ",(y=n.exploreObjectType)==null?void 0:y.toUpperCase()]})})]})]})};try{V.displayName="FeaturedDataTabs",V.__docgenInfo={description:"",displayName:"FeaturedDataTabs",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"FeatureDataTabProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!0,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}}}}}catch{}const Yt={title:"Home Page/FeaturedDataTabs",component:V},T={args:{rgbIndex:1,sql:"SELECT * FROM syn21994974",configs:[{title:"Studies",icon:"chart2",explorePagePath:"/Explore/Studies",exploreObjectType:"Studies",plotsConfig:{sql:`SELECT * FROM syn21994974 WHERE ( ( "collectionType" = 'Validation Study' OR "collectionType" = 'Interventional Study' OR "collectionType" = 'Observational Study' ) )`,configs:[{facetsToPlot:["dataCollectionMethod","deviceType","devicePlatform","diagnosis","reportedOutcome","digitalAssessmentCategory"]}]}}]}},F={args:{rgbIndex:1,sql:"select * from syn11346063",configs:[{title:"Human Studies",icon:"PERSON",explorePagePath:"/Explore/HumanStudies",exploreObjectType:"Studies",plotsConfig:{configs:[{title:"The Religious Orders and Memory and Aging Project Study",description:"This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"ROSMAP",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3219045"},{title:"The Mount Sinai Brain Bank Study",description:"This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"MSBB",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3159438"},{title:"The RNAseq Harmonization Study",description:"The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"rnaSeqReprocessing",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn5550404"}]}},{title:"Animal Model Studies",icon:"MOUSE",plotsConfig:{configs:[{title:"The UCI MODEL-AD 5XFAD Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"UCI_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn16798076"},{title:"The IU/Jax/Pitt MODEL-AD Primary Screen Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_PrimaryScreen",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn21595258"},{title:"The IU/Jax/Pit MODEL-AD APOE/TREM2 Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn17095980"}]}}]}};var R,D,O;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    rgbIndex: 1,
    sql: 'SELECT * FROM syn21994974',
    configs: [{
      title: 'Studies',
      icon: 'chart2',
      explorePagePath: '/Explore/Studies',
      exploreObjectType: 'Studies',
      plotsConfig: {
        sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \\'Validation Study\\' OR "collectionType" = \\'Interventional Study\\' OR "collectionType" = \\'Observational Study\\' ) )',
        configs: [{
          facetsToPlot: ['dataCollectionMethod', 'deviceType', 'devicePlatform', 'diagnosis', 'reportedOutcome', 'digitalAssessmentCategory']
        }]
      }
    }]
  }
}`,...(O=(D=T.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var v,Q,B;F.parameters={...F.parameters,docs:{...(v=F.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    rgbIndex: 1,
    sql: 'select * from syn11346063',
    configs: [{
      title: 'Human Studies',
      icon: 'PERSON',
      explorePagePath: '/Explore/HumanStudies',
      exploreObjectType: 'Studies',
      plotsConfig: {
        configs: [{
          title: 'The Religious Orders and Memory and Aging Project Study',
          description: 'This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'ROSMAP',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3219045'
        }, {
          title: 'The Mount Sinai Brain Bank Study',
          description: 'This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'MSBB',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3159438'
        }, {
          title: 'The RNAseq Harmonization Study',
          description: 'The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'rnaSeqReprocessing',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn5550404'
        }]
      }
    }, {
      title: 'Animal Model Studies',
      icon: 'MOUSE',
      // explorePagePath:'/Explore/AnimalStudies',
      // exploreObjectType:'Studies',
      plotsConfig: {
        configs: [{
          title: 'The UCI MODEL-AD 5XFAD Study',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'UCI_5XFAD',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn16798076'
        }, {
          title: 'The IU/Jax/Pitt MODEL-AD Primary Screen Study',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'Jax.IU.Pitt_PrimaryScreen',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn21595258'
        }, {
          title: 'The IU/Jax/Pit MODEL-AD APOE/TREM2 Study',
          facetsToPlot: ['dataType', 'assay'],
          selectFacetColumnName: 'study',
          selectFacetColumnValue: 'Jax.IU.Pitt_5XFAD',
          detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn17095980'
        }]
      }
    }]
  }
}`,...(B=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:B.source}}};const Gt=["SingleQuery","QueryPerCard"];export{F as QueryPerCard,T as SingleQuery,Gt as __namedExportsOrder,Yt as default};
//# sourceMappingURL=FeaturedDataTabs.stories-fa7bf6d2.js.map
