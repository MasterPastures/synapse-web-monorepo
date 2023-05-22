import{u as r,S as u,am as l,an as d}from"./SynapseClient-c43c6534.js";import{u as y}from"./useMutation-424ee4ed.js";import{u as c}from"./useInfiniteQuery-f8eb063d.js";function f(e,n,a){const{accessToken:s,keyFactory:t}=r(),o={concreteType:"org.sagebionetworks.repo.model.download.AvailableFilesRequest"};return e&&(o.sort=[e]),n&&(o.filter=n),c(t.getDownloadListAvailableFilesInfiniteQueryKey(o),async i=>u.getAvailableFilesToDownload({...o,nextPageToken:i.pageParam},s),{...a,getNextPageParam:i=>i.nextPageToken})}function T(e){const{accessToken:n,keyFactory:a}=r(),s={concreteType:"org.sagebionetworks.repo.model.download.ActionRequiredRequest"};return c(a.getDownloadListActionsRequiredInfiniteQueryKey(),async t=>await u.getDownloadListActionsRequired({...s,nextPageToken:t.pageParam},n),{...e,getNextPageParam:t=>t.nextPageToken})}function k(e){const{accessToken:n,keyFactory:a}=r();return l(a.getDownloadListStatisticsQueryKey(),()=>u.getDownloadListStatistics(n),e)}function D(e){const{accessToken:n,keyFactory:a}=r(),s=d();return y({...e,mutationFn:t=>u.addFileToDownloadListV2(t.entityId,t.entityVersionNumber,n),mutationKey:["addFileToDownloadList"],onSuccess:async(t,o,i)=>{if(await s.invalidateQueries(a.getDownloadListBaseQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(t,o,i)}})}export{D as a,f as b,T as c,k as u};
//# sourceMappingURL=useDownloadList-1bef3ea6.js.map