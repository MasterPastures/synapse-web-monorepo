import{u as c,aE as i,cn as F,az as m,co as d,cp as o}from"./EntityTypeUtils-2e4d4a81.js";import{u as y}from"./useMutation-84470403.js";import{u as f}from"./useInfiniteQuery-4cc5d26b.js";import"./index-8db94870.js";import"./getEndpoint-ac94413e.js";import"./jsx-runtime-095bf462.js";function C(e){var t;const{data:a,isLoading:r}=I();return{isFavorite:(t=a==null?void 0:a.results)==null?void 0:t.some(n=>n.id===e),isLoading:r}}function K(e){const{accessToken:a,keyFactory:r}=c(),s=i();return y({...e,mutationFn:t=>d(t,a),mutationKey:["addFavorite"],onSuccess:async(t,n,u)=>{if(await s.invalidateQueries(r.getFavoritesQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(t,n,u)}})}function E(e){const{accessToken:a}=c(),r=i(),{keyFactory:s}=c();return y({...e,mutationFn:t=>F(t,a),mutationKey:["removeFavorite"],onSuccess:async(t,n,u)=>{if(await r.invalidateQueries(s.getFavoritesQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(t,n,u)}})}function I(e="FAVORITED_ON",a="DESC",r){const{accessToken:s,keyFactory:t}=c();return m(t.getUserFavoritesQueryKey(e,a),()=>o(s,void 0,void 0,e,a),r)}function U(e="FAVORITED_ON",a="DESC",r){const{accessToken:t,keyFactory:n}=c();return f(n.getUserFavoritesInfiniteQueryKey(e,a),async u=>o(t,u.pageParam,10,e,a),{...r,getNextPageParam:(u,v)=>{if(u.results.length>0)return v.length*10}})}export{I as a,C as b,K as c,E as d,U as u};
//# sourceMappingURL=useFavorites-314b7d41.js.map