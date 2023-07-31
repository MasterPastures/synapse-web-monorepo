import{j as P}from"./jsx-runtime-095bf462.js";import{_ as ce}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{r as n}from"./index-8db94870.js";import{_ as fe,a as p,h as Se,b as I,c as me,u as ve,S as ge,d as he}from"./Select-ce3716e1.esm-8435c103.js";import"./index-8ce4a492.js";import{u as Oe,x as z}from"./SynapseClient-d9a6d554.js";import{a as _e}from"./useAccessRequirements-f993c294.js";import{S as ye}from"./Skeleton-a24326d8.js";var Ie=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function Ce(t){var r=t.defaultOptions,e=r===void 0?!1:r,l=t.cacheOptions,d=l===void 0?!1:l,c=t.loadOptions;t.options;var i=t.isLoading,C=i===void 0?!1:i,h=t.onInputChange,a=t.filterOption,O=a===void 0?null:a,u=fe(t,Ie),S=u.inputValue,o=n.useRef(void 0),_=n.useRef(!1),H=n.useState(Array.isArray(e)?e:void 0),$=p(H,2),J=$[0],E=$[1],K=n.useState(typeof S<"u"?S:""),N=p(K,2),j=N[0],A=N[1],Q=n.useState(e===!0),w=p(Q,2),U=w[0],m=w[1],X=n.useState(void 0),B=p(X,2),L=B[0],x=B[1],Y=n.useState([]),D=p(Y,2),Z=D[0],V=D[1],ee=n.useState(!1),k=p(ee,2),te=k[0],y=k[1],ne=n.useState({}),M=p(ne,2),v=M[0],T=M[1],ae=n.useState(void 0),G=p(ae,2),se=G[0],re=G[1],oe=n.useState(void 0),W=p(oe,2),ie=W[0],ue=W[1];d!==ie&&(T({}),ue(d)),e!==se&&(E(Array.isArray(e)?e:void 0),re(e)),n.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var b=n.useCallback(function(g,f){if(!c)return f();var s=c(g,f);s&&typeof s.then=="function"&&s.then(f,function(){return f()})},[c]);n.useEffect(function(){e===!0&&b(j,function(g){_.current&&(E(g||[]),m(!!o.current))})},[]);var pe=n.useCallback(function(g,f){var s=Se(g,f,h);if(!s){o.current=void 0,A(""),x(""),V([]),m(!1),y(!1);return}if(d&&v[s])A(s),x(s),V(v[s]),m(!1),y(!1);else{var de=o.current={};A(s),m(!0),y(!L),b(s,function(q){_&&de===o.current&&(o.current=void 0,m(!1),x(s),V(q||[]),y(!1),T(q?I(I({},v),{},me({},s,q)):v))})}},[d,b,L,v,h]),le=te?[]:j&&L?Z:J||[];return I(I({},u),{},{options:le,isLoading:U||C,onInputChange:pe,filterOption:O})}var Ae=n.forwardRef(function(t,r){var e=Ce(t),l=ve(e);return n.createElement(ge,ce({ref:r},l))}),Le=Ae;function R(t,r){return t.toString()===r?r:`${r} (${t})`}const xe={Control:t=>P(he.Control,{...t,className:`form-control ${t.className??""}`})};function F(t){const{inputId:r,initialId:e,onChange:l,placeholder:d}=t,{accessToken:c}=Oe(),{data:i,isLoading:C}=_e(e,{enabled:!!e});async function h(a){var S;const O=parseInt(a);let u;return O&&(u=[await z.getAccessRequirementById(c,O)]),u||(u=(S=await z.searchAccessRequirements(c,{nameContains:a}))==null?void 0:S.results),(u==null?void 0:u.map(o=>({id:o.id.toString(),value:o.id.toString(),label:R(o.id,o.name)})))??[]}return e&&C?P(ye,{width:"100%"}):P(Le,{className:"bootstrap-4-backport AsyncSelect",defaultInputValue:e?R(e,(i==null?void 0:i.name)??e.toString()):void 0,defaultOptions:e?[{id:e,value:e,label:R(e,(i==null?void 0:i.name)??e.toString())}]:!0,inputId:r,cacheOptions:!0,isClearable:!0,styles:{control:a=>({...a,display:"flex !important"}),input:a=>({...a,input:{gridArea:"1 / 2 / 4 / 4 !important"}})},components:xe,loadOptions:h,onChange:a=>{l(a==null?void 0:a.id.toString())},placeholder:d})}try{F.displayName="AccessRequirementSearchBox",F.__docgenInfo={description:"",displayName:"AccessRequirementSearchBox",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},initialId:{defaultValue:null,description:"",name:"initialId",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessRequirementId?: string | undefined) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{F as A};
//# sourceMappingURL=AccessRequirementSearchBox-9fa31182.js.map