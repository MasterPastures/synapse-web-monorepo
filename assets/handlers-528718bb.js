import{l as c}from"./index-0e02dd68.js";import{g as w}from"./entityHandlers-a51b946c.js";import{a as E,g as P}from"./userProfileHandlers-93b76042.js";import{g as U,B as A}from"./getEndpoint-ac94413e.js";import{g as B,a as M,b as $}from"./accessRequirementHandlers-79d2cbc2.js";import{g as v}from"./MockSubmission-98405334.js";import{a as F,g as x}from"./fileHandlers-8d618832.js";import{g as V}from"./researchProjectHandlers-4dbfd775.js";import{bO as C,bP as _,aJ as m}from"./SynapseClient-d9a6d554.js";import{m as K,c as D,d as g,M as N}from"./mock_user_profile-f88f9ec5.js";import{f as r,p as k,b as W}from"./mockProject-c4b487d3.js";import{t as q}from"./times-fc1da7cc.js";function G(e){return{id:String(r.number.int()),etag:r.string.uuid(),...e}}function J(e){return{id:String(r.number.int()),activeAuthors:K.map(t=>String(t.id)),createdBy:String(k().id),createdOn:r.date.anytime().toISOString(),etag:r.string.uuid(),isDeleted:!1,isEdited:!1,isPinned:!1,lastActivity:r.date.anytime().toISOString(),messageKey:`${r.number.int()}/${r.number.int()}/${r.string.uuid()}`,modifiedOn:r.date.anytime().toISOString(),numberOfReplies:r.number.int({max:500}),numberOfViews:r.number.int({max:5e3}),title:r.lorem.words({min:2,max:8}),...e}}const L="984321189",b=W.map(e=>G({projectId:e.id})),z=b.flatMap(e=>q(10).map(t=>J({forumId:e.id,projectId:e.projectId}))),l={id:"999",forumId:L,projectId:"123",title:"mockTitle1",createdOn:"2022-09-28",createdBy:D.ownerId,modifiedOn:"2022-09-28",etag:"xxx",messageKey:"xxx",numberOfViews:2,numberOfReplies:3,lastActivity:"2022-09-28",activeAuthors:[D.ownerId,g.ownerId],isEdited:!1,isDeleted:!1,isPinned:!1},Q={...l,id:"888",projectId:"12",title:"mockTitle2",createdBy:g.ownerId,numberOfViews:14,numberOfReplies:3};({...l,createdBy:g.ownerId,threadId:l.id});const h=[...z,l,Q];function X(e){return[c.rest.get(`${e}${C}/:id`,async(t,a,s)=>{let o=404,n={reason:`MSW could not find a mock forum object with ID ${t.params.id}`};const i=b.find(d=>d.id===t.params.id);return i&&(o=200,n=i),a(s.status(o),s.json(n))}),c.rest.get(`${e}${_}/:id`,async(t,a,s)=>{let o=404,n={reason:`MSW could not find a mock discussion thread bundle object with ID ${t.params.id}`};t.params.id==="messageUrl"&&(n={reason:"GET /thread/messageUrl is not yet implemented"});const i=h.find(d=>d.id===t.params.id);return i&&(o=200,n=i),a(s.status(o),s.json(n))})]}function j(e){return{subscriptionId:String(r.number.int({min:1e3,max:9999})),subscriberId:String(N),createdOn:r.date.anytime().toISOString(),...e}}const R=b.map(e=>j({objectId:e.id,objectType:m.FORUM})),S=h.map(e=>j({objectType:m.THREAD,objectId:e.id}));function Y(e){return[c.rest.get(`${e}/repo/v1/subscription/all`,async(t,a,s)=>{const o=t.url.searchParams.get("objectType"),n=t.url.searchParams.get("sortDirection"),i=t.url.searchParams.get("offset"),d=t.url.searchParams.get("limit");let u=[];o===m.FORUM?u=R:o===m.THREAD&&(u=S);const f=u.length;n&&(u=u.sort((O,H)=>{const y=new Date(H.createdOn).getTime()-new Date(O.createdOn).getTime();return n==="ASC"?y:-1*y}));let p=0,I;i&&(p=parseInt(i)),d&&(I=parseInt(d)),u=u.slice(p,p+(I??0));const T={results:u,totalNumberOfResults:f};return a(s.status(200),s.json(T))}),c.rest.post(`${e}/repo/v1/subscription/list`,async(t,a,s)=>{const o=await t.json(),n=o.objectType;let i=[];n===m.FORUM?i=R:n===m.THREAD&&(i=S),i.filter(f=>o.idList.includes(f.subscriptionId));const d=i.length,u={results:i,totalNumberOfResults:d};return a(s.status(200),s.json(u))})]}const Z=e=>[c.rest.options("*",async(t,a,s)=>a(s.status(200))),c.rest.get(`${e}/auth/v1/authenticatedOn`,async(t,a,s)=>a(s.status(200),s.json({authenticatedOn:new Date().toISOString()}))),...w(e),...E(e),P(e,!0,!0),...v(e),...B(e),...M(),...$(e),...F(e),...V(e),...x(e),...X(e),...Y(e)];Z(U(A.REPO_ENDPOINT));export{Z as g};
//# sourceMappingURL=handlers-528718bb.js.map