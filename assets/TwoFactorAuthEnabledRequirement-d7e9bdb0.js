import{j as o}from"./jsx-runtime-095bf462.js";import{g as c,B as u}from"./getEndpoint-ac94413e.js";import{u as d}from"./SynapseClient-171f0a1b.js";import{u as m,T as l}from"./TwoFactorEnrollmentForm-ef525493.js";import{R as p,a as n}from"./RequirementItem-829d4e8e.js";import{T}from"./Typography-bbc222e1.js";const f=`${c(u.PORTAL_ENDPOINT)}#!TwoFactorAuth:Enroll`;function E(t,r,e){return t?r?n.LOADING:e==="ENABLED"?n.COMPLETE:n.LOCKED:n.LOCKED}function a(){const{accessToken:t}=d(),r=!!t,{data:e,isLoading:i}=m({enabled:r,refetchOnWindowFocus:!0,staleTime:5e3}),s=(e==null?void 0:e.status)==="DISABLED"?[{variant:"outlined",href:f,target:"_blank",rel:"noopener noreferrer",children:"Activate 2FA (opens a new tab)"},{variant:"text",href:l,target:"_blank",rel:"noopener noreferrer",children:"2FA Documentation"}]:void 0;return o(p,{status:E(r,i,e==null?void 0:e.status),actions:s,children:o(T,{variant:"body1",children:"You must have Two-factor Authentication (2FA) active on your Synapse account in order to download the requested files"})})}try{a.displayName="TwoFactorAuthEnabledRequirement",a.__docgenInfo={description:"Displays a data access request requirement that prompts the user to enable two-factor authentication.",displayName:"TwoFactorAuthEnabledRequirement",props:{}}}catch{}export{a as T};
//# sourceMappingURL=TwoFactorAuthEnabledRequirement-d7e9bdb0.js.map