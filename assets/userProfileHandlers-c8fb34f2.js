import{l as u}from"./index-43de7067.js";import{ak as $,al as p,am as E,an as I,ao as _,ap as R,aq as g,ar as f,as as L,at as S}from"./SynapseClient-0a8d63c6.js";import{g as H,B as U}from"./getEndpoint-ac94413e.js";import{M as j,m as d,b as c,c as D}from"./mock_user_profile-9a6a3ecf.js";import{m as y}from"./mockFileEntity-7a34149e.js";import{m as P}from"./mockProject-6b9e6c20.js";const N=P.id,l=P.entity;y.name;const h=y.entityHeader,C="syn20000",k="A $@*#$% terribly named Project",m={id:C,parentId:N,name:"my folder name",concreteType:"org.sagebionetworks.repo.model.Folder"},F={id:m.id,name:m.name,type:m.concreteType,versionNumber:1,versionLabel:"Version label",benefactorId:1234,createdOn:"",modifiedOn:"",createdBy:"",modifiedBy:"",isLatestVersion:!0},O={totalNumberOfResults:2,results:[h,F]};l.id,l.name,l.modifiedOn,j;const v=i=>[u.rest.get(`${i}${$(":id")}`,async(r,t,e)=>{let s=404,o={reason:`Mock Service worker could not find a user profile with ID ${r.params.id}`};const a=d.find(n=>n.id.toString()===r.params.id);return a&&a.userProfile&&(o=a.userProfile,s=200),t(e.status(s),e.json(o))}),u.rest.get(`${i}${p}`,async(r,t,e)=>{const s=D,o=200;return t(e.status(o),e.json(s))}),u.rest.get(`${H(U.REPO_ENDPOINT)}${E}`,async(r,t,e)=>{const s=c;return t(e.status(200),e.json(s))}),u.rest.get(`${i}${I(":id")}`,async(r,t,e)=>{let s=404,o={reason:`Mock Service worker could not find a user bundle with ID ${r.params.id}`};const a=d.find(n=>n.id.toString()===r.params.id);return a&&a.userBundle&&(o=a.userBundle,s=200),t(e.status(s),e.json(o))}),u.rest.get(`${i}${_}`,async(r,t,e)=>t(e.status(200),e.json(O))),u.rest.get(`${i}${R}`,async(r,t,e)=>{const s=r.url.searchParams.get("ids").split(","),o={children:d.filter(a=>s.includes(a.id.toString())).map(a=>a.userGroupHeader)};return t(e.status(200),e.json(o))}),u.rest.post(`${i}${p}`,async(r,t,e)=>{const s=(await r.json()).list,o={list:d.filter(a=>s.includes(a.id.toString())).map(a=>a.userProfile).filter(a=>a!=null)};return t(e.status(200),e.json(o))}),u.rest.get(`${i}${g}`,async(r,t,e)=>{const s=(r.url.searchParams.get("prefix")??"").toLowerCase(),o=r.url.searchParams.get("typeFilter"),a={children:d.filter(n=>!o||o===f.ALL?!0:o===f.USERS_ONLY?n.userGroupHeader.isIndividual:!n.userGroupHeader.isIndividual).filter(n=>n.userGroupHeader.userName.toLowerCase().startsWith(s)||(n.userGroupHeader.firstName||"").toLowerCase().startsWith(s)||(n.userGroupHeader.displayName||"").toLowerCase().startsWith(s)||(n.userGroupHeader.lastName||"").toLowerCase().startsWith(s)).map(n=>n.userGroupHeader)};return t(e.status(200),e.json(a))}),u.rest.get(`${i}${L(":userId")}`,async(r,t,e)=>t(e.status(404),e.json({reason:"user has no profile image"}))),u.rest.get(`${i}${S}`,async(r,t,e)=>{var s;return t(e.status(200),e.json({email:(s=c.userProfile)==null?void 0:s.email}))}),u.rest.get(`${i}/auth/v1/2fa`,async(r,t,e)=>{const s={status:"ENABLED"};return t(e.status(200),e.json(s))})];function V(i,r,t){return u.rest.get(`${i}${E}`,async(e,s,o)=>{const n={...c,isCertified:r,isVerified:t};return s(o.status(200),o.json(n))})}export{C as M,V as a,k as b,v as g};
//# sourceMappingURL=userProfileHandlers-c8fb34f2.js.map