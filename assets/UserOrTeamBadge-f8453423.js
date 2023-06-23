import{a as h,j as o,F as H}from"./jsx-runtime-095bf462.js";import{r as m}from"./index-8db94870.js";import{u as i,am as p,S as c}from"./SynapseClient-171f0a1b.js";import{S as G}from"./SynapseConstants-d7ecf847.js";import{P as _}from"./getEndpoint-ac94413e.js";import{I as U}from"./IconSvg-152a0feb.js";import{U as b}from"./UserCard-79b6d53c.js";import{S as I}from"./Skeleton-79583c46.js";function N(r,e){const{accessToken:t,keyFactory:n}=i(),s=n.getUserGroupHeaderQueryKey(r);return p(s,async()=>{const a=await c.getGroupHeadersBatch([r],t);if(a.children.length!==1)throw new Error(`Expected one response in useGetUserGroupHeader for id: ${r}, got ${a.children.length}`);return a.children[0]},e)}function k(r,e,t){const{keyFactory:n}=i(),s=n.getUserGroupHeaderSearchQueryKey(r,e);return p(s,async()=>(await c.getUserGroupHeaders(r,e)).children,t)}function v(r,e){const{keyFactory:t}=i(),n=t.getUserGroupHeaderWithAliasQueryKey(r);return p(n,async()=>(await c.postUserGroupHeadersWithAlias(r)).list,e)}function l(r){const{teamId:e,teamName:t,disableHref:n}=r;return h("span",{children:[o(U,{icon:"team"}),o("a",{style:{marginLeft:"5px"},href:n?void 0:`${_.PORTAL}#!Team:${e}`,children:t})]})}try{l.displayName="TeamBadge",l.__docgenInfo={description:"",displayName:"TeamBadge",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string | number"}},teamName:{defaultValue:null,description:"",name:"teamName",required:!0,type:{name:"string"}},disableHref:{defaultValue:null,description:"",name:"disableHref",required:!1,type:{name:"boolean"}}}}}catch{}function f(r){let e=r.principalId;const{disableHref:t,showCardOnHover:n,showFullName:s,userGroupHeader:a}=r;e==null&&(e=a==null?void 0:a.ownerId);const{accessToken:y}=i(),[u,g]=m.useState(a),{data:d}=N((e??"").toString(),{enabled:!a});return m.useEffect(()=>{e&&u==null&&d&&g(d)},[y,e,u,d]),e==null&&a==null?(console.error("Expected one of principalId or userGroupHeader to be defined but both were null or undefined"),o(H,{})):u===void 0?o(I,{width:125,height:30}):u.isIndividual?o(b,{ownerId:e.toString(),size:G,disableLink:t,showFullName:s,showCardOnHover:n}):o(l,{teamId:e,teamName:u.userName,disableHref:t})}try{f.displayName="UserOrTeamBadge",f.__docgenInfo={description:"",displayName:"UserOrTeamBadge",props:{principalId:{defaultValue:null,description:"",name:"principalId",required:!1,type:{name:"string | number"}},userGroupHeader:{defaultValue:null,description:"",name:"userGroupHeader",required:!1,type:{name:"UserGroupHeader"}},showFullName:{defaultValue:null,description:"",name:"showFullName",required:!1,type:{name:"boolean"}},disableHref:{defaultValue:null,description:"",name:"disableHref",required:!1,type:{name:"boolean"}},showCardOnHover:{defaultValue:null,description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}}}}}catch{}export{f as U,k as a,v as u};
//# sourceMappingURL=UserOrTeamBadge-f8453423.js.map