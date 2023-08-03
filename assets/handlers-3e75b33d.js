import{l as c}from"./index-43de7067.js";import{g as w}from"./entityHandlers-f34fc361.js";import{g as E,a as U}from"./userProfileHandlers-c8fb34f2.js";import{g as A,B as P}from"./getEndpoint-ac94413e.js";import{g as B,a as M,b as $}from"./accessRequirementHandlers-97e6e693.js";import{g as v}from"./wikiHandlers-0427fc7f.js";import{a as F,g as x}from"./fileHandlers-b64111f2.js";import{g as V}from"./researchProjectHandlers-8f9de6a2.js";import{bN as C,bO as N,au as m}from"./SynapseClient-0a8d63c6.js";import{m as _,c as D,d as g,M as K}from"./mock_user_profile-9a6a3ecf.js";import{f as r,p as k,b as W}from"./mockProject-6b9e6c20.js";import{t as q}from"./times-f1c18b3d.js";function G(e){return{id:String(r.number.int()),etag:r.string.uuid(),...e}}function L(e){return{id:String(r.number.int()),activeAuthors:_.map(t=>String(t.id)),createdBy:String(k().id),createdOn:r.date.anytime().toISOString(),etag:r.string.uuid(),isDeleted:!1,isEdited:!1,isPinned:!1,lastActivity:r.date.anytime().toISOString(),messageKey:`${r.number.int()}/${r.number.int()}/${r.string.uuid()}`,modifiedOn:r.date.anytime().toISOString(),numberOfReplies:r.number.int({max:500}),numberOfViews:r.number.int({max:5e3}),title:r.lorem.words({min:2,max:8}),...e}}const z="984321189",b=W.map(e=>G({projectId:e.id})),J=b.flatMap(e=>q(10).map(t=>L({forumId:e.id,projectId:e.projectId}))),l={id:"999",forumId:z,projectId:"123",title:"mockTitle1",createdOn:"2022-09-28",createdBy:D.ownerId,modifiedOn:"2022-09-28",etag:"xxx",messageKey:"xxx",numberOfViews:2,numberOfReplies:3,lastActivity:"2022-09-28",activeAuthors:[D.ownerId,g.ownerId],isEdited:!1,isDeleted:!1,isPinned:!1},Q={...l,id:"888",projectId:"12",title:"mockTitle2",createdBy:g.ownerId,numberOfViews:14,numberOfReplies:3};({...l,createdBy:g.ownerId,threadId:l.id});const h=[...J,l,Q];function X(e){return[c.rest.get(`${e}${C}/:id`,async(t,a,s)=>{let o=404,n={reason:`MSW could not find a mock forum object with ID ${t.params.id}`};const i=b.find(d=>d.id===t.params.id);return i&&(o=200,n=i),a(s.status(o),s.json(n))}),c.rest.get(`${e}${N}/:id`,async(t,a,s)=>{let o=404,n={reason:`MSW could not find a mock discussion thread bundle object with ID ${t.params.id}`};t.params.id==="messageUrl"&&(n={reason:"GET /thread/messageUrl is not yet implemented"});const i=h.find(d=>d.id===t.params.id);return i&&(o=200,n=i),a(s.status(o),s.json(n))})]}function j(e){return{subscriptionId:String(r.number.int({min:1e3,max:9999})),subscriberId:String(K),createdOn:r.date.anytime().toISOString(),...e}}const R=b.map(e=>j({objectId:e.id,objectType:m.FORUM})),S=h.map(e=>j({objectType:m.THREAD,objectId:e.id}));function Y(e){return[c.rest.get(`${e}/repo/v1/subscription/all`,async(t,a,s)=>{const o=t.url.searchParams.get("objectType"),n=t.url.searchParams.get("sortDirection"),i=t.url.searchParams.get("offset"),d=t.url.searchParams.get("limit");let u=[];o===m.FORUM?u=R:o===m.THREAD&&(u=S);const f=u.length;n&&(u=u.sort((O,H)=>{const y=new Date(H.createdOn).getTime()-new Date(O.createdOn).getTime();return n==="ASC"?y:-1*y}));let p=0,I;i&&(p=parseInt(i)),d&&(I=parseInt(d)),u=u.slice(p,p+(I??0));const T={results:u,totalNumberOfResults:f};return a(s.status(200),s.json(T))}),c.rest.post(`${e}/repo/v1/subscription/list`,async(t,a,s)=>{const o=await t.json(),n=o.objectType;let i=[];n===m.FORUM?i=R:n===m.THREAD&&(i=S),i.filter(f=>o.idList.includes(f.subscriptionId));const d=i.length,u={results:i,totalNumberOfResults:d};return a(s.status(200),s.json(u))})]}const Z=e=>[c.rest.options("*",async(t,a,s)=>a(s.status(200))),c.rest.get(`${e}/auth/v1/authenticatedOn`,async(t,a,s)=>a(s.status(200),s.json({authenticatedOn:new Date().toISOString()}))),...w(e),...E(e),U(e,!0,!0),...v(e),...B(e),...M(),...$(e),...F(e),...V(e),...x(e),...X(e),...Y(e)];Z(A(P.REPO_ENDPOINT));export{Z as g};
//# sourceMappingURL=handlers-3e75b33d.js.map