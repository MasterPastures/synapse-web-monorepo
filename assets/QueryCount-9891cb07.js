import{j as p}from"./jsx-runtime-ad672792.js";import{R as i}from"./index-f1f749bf.js";import"./SynapseContext-d313cbec.js";import{p as c}from"./sqlFunctions-783bb8e8.js";import{u as m}from"./useGetQueryResultBundle-8a54fdb6.js";import{j as d}from"./SynapseConstants-9d1f6e44.js";function n(r){var a;const{query:o,parens:s}=r,u=c(o.sql),l={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:o,entityId:u,partMask:d},{data:e}=m(l),t=(a=e==null?void 0:e.queryCount)==null?void 0:a.toLocaleString();return p(i.Fragment,{children:t&&(s?`(${t})`:t)})}try{n.displayName="QueryCount",n.__docgenInfo={description:"Shows the total count of results for a table query.",displayName:"QueryCount",props:{query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"Query"}},parens:{defaultValue:null,description:"",name:"parens",required:!1,type:{name:"boolean"}}}}}catch{}export{n as Q};
//# sourceMappingURL=QueryCount-9891cb07.js.map