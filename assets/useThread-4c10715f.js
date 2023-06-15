import{r as o}from"./index-8db94870.js";import{a as t,l as T,d as i,u as y}from"./SynapseClient-e12f3692.js";import{u as d}from"./useMutation-a2021e36.js";function F(e){const{data:s,isLoading:u}=g(e),{data:r,isLoading:a}=f(s,{enabled:!!s}),{mutate:c}=Q(),{mutate:n}=m(),l=o.useCallback(()=>{s&&(s!=null&&s.isPinned?n(s):c(s))},[n,c,s]);return{threadData:s,threadBody:r,togglePin:l,isLoading:a||u}}function g(e,s){const{accessToken:u,keyFactory:r}=t();return T(r.getThreadQueryKey(e),()=>i.getThread(e,u),s)}function f(e,s){const{accessToken:u,keyFactory:r}=t(),a=async()=>{const c=await i.getThreadMessageUrl(e==null?void 0:e.messageKey,u);return(await fetch(c.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return T(r.getThreadBodyQueryKey(e==null?void 0:e.id,e==null?void 0:e.messageKey),a,s)}function K(e){const s=y(),{accessToken:u,keyFactory:r}=t();return d(a=>i.putThreadTitle(u,a),{...e,onSuccess:async(a,c,n)=>{await s.invalidateQueries(r.getAllForumThreadsQueryKey(a.forumId)),await s.invalidateQueries(r.getThreadQueryKey(c.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(a,c,n)}})}function C(e){const s=y(),{accessToken:u,keyFactory:r}=t();return d(a=>i.putThreadMessage(u,a),{...e,onSuccess:async(a,c,n)=>{await s.invalidateQueries(r.getThreadQueryKey(c.threadId)),e!=null&&e.onSuccess&&await e.onSuccess(a,c,n)}})}function v(e){const s=y(),{accessToken:u,keyFactory:r}=t();return d(a=>i.postThread(u,a),{...e,onSuccess:async(a,c,n)=>{await s.invalidateQueries(r.getAllForumThreadsQueryKey(a.forumId)),e!=null&&e.onSuccess&&await e.onSuccess(a,c,n)}})}function q(e){const s=y(),{accessToken:u,keyFactory:r}=t();return d(a=>i.deleteThread(u,a.id),{...e,onSuccess:async(a,c,n)=>{await s.invalidateQueries(r.getAllForumThreadsQueryKey(c.forumId)),await s.invalidateQueries(r.getThreadQueryKey(c.id)),e!=null&&e.onSuccess&&await e.onSuccess(a,c,n)}})}function A(e){const s=y(),{accessToken:u,keyFactory:r}=t();return d(a=>i.restoreThread(u,a.id),{...e,onSuccess:async(a,c,n)=>{await s.invalidateQueries(r.getAllForumThreadsQueryKey(c.forumId)),await s.invalidateQueries(r.getThreadQueryKey(c.id)),e!=null&&e.onSuccess&&await e.onSuccess(a,c,n)}})}function Q(e){const s=y(),{accessToken:u,keyFactory:r}=t();return d(a=>i.pinThread(u,a.id),{...e,onSuccess:async(a,c,n)=>{await s.invalidateQueries(r.getAllForumThreadsQueryKey(c.forumId)),await s.invalidateQueries(r.getThreadQueryKey(c.id)),e!=null&&e.onSuccess&&await e.onSuccess(a,c,n)}})}function m(e){const s=y(),{accessToken:u,keyFactory:r}=t();return d(a=>i.unPinThread(u,a.id),{...e,onSuccess:async(a,c,n)=>{await s.invalidateQueries(r.getAllForumThreadsQueryKey(c.forumId)),await s.invalidateQueries(r.getThreadQueryKey(c.id)),e!=null&&e.onSuccess&&await e.onSuccess(a,c,n)}})}export{q as a,A as b,K as c,C as d,v as e,F as u};
//# sourceMappingURL=useThread-4c10715f.js.map