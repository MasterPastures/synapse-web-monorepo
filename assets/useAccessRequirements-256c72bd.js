import{ai as r,ak as a,bV as o,bW as y,bX as m,bY as k,bt as A,bZ as g,b2 as R}from"./SynapseContext-d313cbec.js";import{u as f}from"./useMutation-d80eaf70.js";import{u as q}from"./useInfiniteQuery-7e8e431b.js";function l(e,c){const{accessToken:t,keyFactory:s}=r();return a(s.getAccessRequirementQueryKey(String(e)),()=>o(t,e),c)}function F(e,c){const{accessToken:t,keyFactory:s}=r();return a(s.getAccessRequirementWikiPageKey(e),()=>R(t,e),c)}function P(e,c){const{accessToken:t,keyFactory:s}=r();return a(s.getAccessRequirementAclQueryKey(e),()=>y(t,e),c)}function T(e,c){const{accessToken:t,keyFactory:s}=r();return q(s.searchAccessRequirementsQueryKey(e),async n=>await m(t,{...e,nextPageToken:n.pageParam}),{...c,getNextPageParam:n=>n.nextPageToken})}function S(e,c){const{accessToken:t,keyFactory:s}=r();return a(s.getAccessRequirementRestrictionInformationQueryKey(e),()=>k(e,t),c)}function x(e){const{accessToken:c}=r(),t=A(),{keyFactory:s}=r();return f({...e,mutationFn:n=>g(n,c),mutationKey:["createLockAccessRequirement"],onSuccess:async(n,u,i)=>{if(await t.invalidateQueries(s.getAccessRequirementQueryKey()),await t.invalidateQueries(s.getAllEntityDataQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(n,u,i)}})}export{l as a,x as b,T as c,P as d,F as e,S as u};
//# sourceMappingURL=useAccessRequirements-256c72bd.js.map