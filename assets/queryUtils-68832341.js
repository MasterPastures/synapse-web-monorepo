import{V as l}from"./SynapseConstants-86492207.js";import{q as o,r as c,s as u,t as f,v as m}from"./SynapseClient-b65fe3d4.js";import{c as F}from"./cloneDeep-e4749918.js";const N=(e,a)=>{var n;return((n=a==null?void 0:a.selectColumns)==null?void 0:n.findIndex(s=>s.name===e))??-1},d=(e,a)=>e==null||a==null||e.length===0||a.length===0?!1:e.filter(s=>!h(s)&&a.find(t=>t.name===s.columnName)).length>0,h=e=>e.facetType==="enumeration"&&e.facetValues.length==1&&e.facetValues[0].value==l;function p(e,a){var s;const n=a==null?void 0:a.columnName;if(n&&e){const t=F(e),r=(s=t.facets)==null?void 0:s.filter(i=>i.columnName.toLowerCase()!==n.toLowerCase());return t.facets=r,t}else return e}function w(e,a){const n=Array.isArray(e.selectedFacets)&&e.selectedFacets.filter(t=>t.columnName!==(a==null?void 0:a.columnName)).length>0,s=Array.isArray(e.additionalFilters)&&e.additionalFilters.filter(t=>o(t)||c(t)?t.columnName!==(a==null?void 0:a.columnName):!0).length>0;return n||s}function L(e){return!!(e&&(u(e)&&f(e)||m(e)))}export{h as a,L as c,N as g,w as h,d as i,p as r};
//# sourceMappingURL=queryUtils-68832341.js.map