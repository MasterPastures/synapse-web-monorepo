import{a9 as c,c6 as u,c7 as l,ab as d,c8 as g,bO as b,c9 as f}from"./SynapseContext-57d40dc1.js";import{u as w}from"./useMutation-db4c1cb0.js";import{u as r}from"./useInfiniteQuery-12d50096.js";const a={base:["downloadList"],availableFiles:e=>[...a.base,"availableFiles",e],availableFilesInfinite:e=>[...a.availableFiles(e),"infinite"],getActionsRequired:()=>[...a.base,"actionsRequired"],getActionsRequiredInfinite:()=>[...a.getActionsRequired(),"infinite"],getStatistics:()=>[...a.base,"statistics"]};function q(e,i,n){const{accessToken:t}=c(),s={concreteType:"org.sagebionetworks.repo.model.download.AvailableFilesRequest"};return e&&(s.sort=[e]),i&&(s.filter=i),r(a.availableFilesInfinite(s),async o=>u({...s,nextPageToken:o.pageParam},t),{...n,getNextPageParam:o=>o.nextPageToken})}function F(e){const{accessToken:i}=c(),n={concreteType:"org.sagebionetworks.repo.model.download.ActionRequiredRequest"};return r(a.getActionsRequiredInfinite(),async t=>await l({...n,nextPageToken:t.pageParam},i),{...e,getNextPageParam:t=>t.nextPageToken})}function A(e){const{accessToken:i}=c();return d(a.getStatistics(),()=>g(i),e)}function k(e){const{accessToken:i}=c(),n=b();return w({...e,mutationFn:t=>f(t.entityId,t.entityVersionNumber,i),mutationKey:["addFileToDownloadList"],onSuccess:async(t,s,o)=>{if(await n.invalidateQueries(a.base),e!=null&&e.onSuccess)return e.onSuccess(t,s,o)}})}export{k as a,q as b,F as c,A as u};
//# sourceMappingURL=useDownloadList-8416aadc.js.map