import{K as G,av as M}from"./EntityTypeUtils-2e4d4a81.js";function I(){return{onFetch:function(e){e.fetchFn=function(){var t,$,q,A,_,O,h=(t=e.fetchOptions)==null||($=t.meta)==null?void 0:$.refetchPage,v=(q=e.fetchOptions)==null||(A=q.meta)==null?void 0:A.fetchMore,m=v==null?void 0:v.pageParam,k=(v==null?void 0:v.direction)==="forward",B=(v==null?void 0:v.direction)==="backward",r=((_=e.state.data)==null?void 0:_.pages)||[],s=((O=e.state.data)==null?void 0:O.pageParams)||[],y=G(),Q=y==null?void 0:y.signal,P=s,w=!1,R=e.options.queryFn||function(){return Promise.reject("Missing queryFn")},N=function(i,c,n,g){return P=g?[c].concat(P):[].concat(P,[c]),g?[n].concat(i):[].concat(i,[n])},d=function(i,c,n,g){if(w)return Promise.reject("Cancelled");if(typeof n>"u"&&!c&&i.length)return Promise.resolve(i);var l={queryKey:e.queryKey,signal:Q,pageParam:n,meta:e.meta},f=R(l),F=Promise.resolve(f).then(function(E){return N(i,n,E,g)});if(M(f)){var p=F;p.cancel=f.cancel}return F},o;if(!r.length)o=d([]);else if(k){var C=typeof m<"u",S=C?m:b(e.options,r);o=d(r,C,S)}else if(B){var x=typeof m<"u",z=x?m:j(e.options,r);o=d(r,x,z,!0)}else(function(){P=[];var u=typeof e.options.getNextPageParam>"u",i=h&&r[0]?h(r[0],0,r):!0;o=i?d([],u,s[0]):Promise.resolve(N([],s[0],r[0]));for(var c=function(l){o=o.then(function(f){var F=h&&r[l]?h(r[l],l,r):!0;if(F){var p=u?s[l]:b(e.options,f);return d(f,u,p)}return Promise.resolve(N(f,s[l],r[l]))})},n=1;n<r.length;n++)c(n)})();var K=o.then(function(u){return{pages:u,pageParams:P}}),D=K;return D.cancel=function(){w=!0,y==null||y.abort(),M(o)&&o.cancel()},K}}}}function b(a,e){return a.getNextPageParam==null?void 0:a.getNextPageParam(e[e.length-1],e)}function j(a,e){return a.getPreviousPageParam==null?void 0:a.getPreviousPageParam(e[0],e)}function J(a,e){if(a.getNextPageParam&&Array.isArray(e)){var t=b(a,e);return typeof t<"u"&&t!==null&&t!==!1}}function L(a,e){if(a.getPreviousPageParam&&Array.isArray(e)){var t=j(a,e);return typeof t<"u"&&t!==null&&t!==!1}}export{L as a,J as h,I as i};
//# sourceMappingURL=infiniteQueryBehavior-ec539414.js.map