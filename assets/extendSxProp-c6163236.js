import{_ as i}from"./extends-98964cd2.js";import{_ as c,y as f,z as a}from"./styled-1b6f4d44.js";const x=["sx"],m=t=>{var s,n;const o={systemProps:{},otherProps:{}},r=(s=t==null||(n=t.theme)==null?void 0:n.unstable_sxConfig)!=null?s:f;return Object.keys(t).forEach(e=>{r[e]?o.systemProps[e]=t[e]:o.otherProps[e]=t[e]}),o};function y(t){const{sx:s}=t,n=c(t,x),{systemProps:o,otherProps:r}=m(n);let e;return Array.isArray(s)?e=[o,...s]:typeof s=="function"?e=(...u)=>{const l=s(...u);return a(l)?i({},o,l):o}:e=i({},o,s),i({},r,{sx:e})}export{y as e};
//# sourceMappingURL=extendSxProp-c6163236.js.map
