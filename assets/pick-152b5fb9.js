import{a as _}from"./toString-cc90cb98.js";import{i as L,c as O,g as x,b as A,j as C}from"./_baseClone-2337a707.js";import{b as E,a as g,c as o,t as c,h as F}from"./hasIn-359c7c5f.js";import{b as P}from"./_baseSlice-cf92e063.js";import{i as S}from"./_isIndex-af14b756.js";import{m as d}from"./SynapseClient-d9a6d554.js";import{s as G,o as I}from"./_MapCache-7a0e0573.js";function N(n){var r=n==null?0:n.length;return r?E(n,1):[]}function v(n){return G(I(n,void 0,N),n+"")}function B(n){var r=n==null?0:n.length;return r?n[r-1]:void 0}function D(n,r){return r.length<2?n:g(n,P(r,0,-1))}function K(n,r){return r=o(r,n),n=D(n,r),n==null||delete n[c(B(r))]}function M(n){return L(n)?void 0:n}var R=1,T=2,h=4,p=v(function(n,r){var e={};if(n==null)return e;var i=!1;r=_(r,function(t){return t=o(t,n),i||(i=t.length>1),t}),O(n,x(n),e),i&&(e=A(e,R|T|h,M));for(var s=r.length;s--;)K(e,r[s]);return e});const z=p;function U(n,r,e,i){if(!d(n))return n;r=o(r,n);for(var s=-1,t=r.length,f=t-1,l=n;l!=null&&++s<t;){var u=c(r[s]),a=e;if(u==="__proto__"||u==="constructor"||u==="prototype")return n;if(s!=f){var m=l[u];a=i?i(m,u,l):void 0,a===void 0&&(a=d(m)?m:S(r[s+1])?[]:{})}C(l,u,a),l=l[u]}return n}function Y(n,r,e){for(var i=-1,s=r.length,t={};++i<s;){var f=r[i],l=g(n,f);e(l,f)&&U(t,o(f,n),l)}return t}function $(n,r){return Y(n,r,function(e,i){return F(n,i)})}var q=v(function(n,r){return n==null?{}:$(n,r)});const k=q;export{k as _,U as a,Y as b,K as c,N as d,v as f,B as l,z as o,D as p};
//# sourceMappingURL=pick-152b5fb9.js.map