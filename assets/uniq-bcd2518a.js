import{b}from"./_baseSlice-cf92e063.js";import{bb as S,bd as u}from"./SynapseContext-ab4629e5.js";import{t as g}from"./toInteger-c3a1d5a9.js";import{S as v,c as w}from"./_cacheHas-734f2223.js";import{a as p,c as x}from"./without-f769b44b.js";import{s as I}from"./_setToArray-3d6ec6fd.js";function A(){}var C=Math.ceil,M=Math.max;function H(n,e,r){(r?S(n,e,r):e===void 0)?e=1:e=M(g(e),0);var f=n==null?0:n.length;if(!f||e<1)return[];for(var s=0,o=0,l=Array(C(f/e));s<f;)l[o++]=b(n,s,s+=e);return l}var R=1/0,d=u&&1/I(new u([,-0]))[1]==R?function(n){return new u(n)}:A;const q=d;var E=200;function N(n,e,r){var f=-1,s=p,o=n.length,l=!0,h=[],t=h;if(r)l=!1,s=x;else if(o>=E){var c=e?null:q(n);if(c)return I(c);l=!1,s=w,t=new v}else t=e?[]:h;n:for(;++f<o;){var i=n[f],a=e?e(i):i;if(i=r||i!==0?i:0,l&&a===a){for(var m=t.length;m--;)if(t[m]===a)continue n;e&&t.push(a),h.push(i)}else s(t,a,r)||(t!==h&&t.push(a),h.push(i))}return h}function L(n){return n&&n.length?N(n):[]}export{N as b,H as c,A as n,L as u};
//# sourceMappingURL=uniq-bcd2518a.js.map