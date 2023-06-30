import{l as d}from"./index-c28dc88f.js";import{a6 as p,a7 as E,O as g,a8 as R,a9 as S,l as A}from"./SynapseClient-28b35d32.js";import{M as l}from"./getEndpoint-ac94413e.js";import{e as u,f,a as m}from"./MockSubmission-741c78f1.js";const C=o=>[d.rest.get(`${o}${p(":id")}`,async(t,s,r)=>{let a=404,e={reason:`Mock Service worker could not find an access requirement with ID ${t.params.id}`};const i=u.find(n=>n.id.toString()===t.params.id);return i&&(e=i,a=200),s(r.status(a),r.json(e))}),d.rest.get(`${o}${E(":id")}`,async(t,s,r)=>{let a=404,e={reason:`Mock Service worker could not find an access requirement wiki page key with AR ID ${t.params.id}`};const i=f.find(n=>(n.ownerObjectType===g.ACCESS_REQUIREMENT&&n.ownerObjectId.toString())===t.params.id);return i&&(e=i,a=200),s(r.status(a),r.json(e))})],_=(o,t=":entityId",s=u)=>[d.rest.get(`${l}${R(t)}`,async(r,a,e)=>{let i=200,n={results:s,totalNumberOfResults:s.length};return a(e.status(i),e.json(n))})],k=(o,t={})=>[d.rest.get(`${o}${S(":id")}`,async(s,r,a)=>{let e;const i=u.find(c=>s.params.id===c.id.toString());if(s.params.id in t&&(e=t[s.params.id]),!e){const c=i.concreteType==="org.sagebionetworks.repo.model.ManagedACTAccessRequirement";e={accessRequirementId:s.params.id,concreteType:c?"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus":"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:c?{submissionId:m.id,submittedBy:m.submittedBy,modifiedOn:m.modifiedOn,state:A.APPROVED}:void 0}}const n=e?200:404;return r(a.status(n),a.json(e))})];export{_ as a,k as b,C as g};
//# sourceMappingURL=accessRequirementHandlers-c162718f.js.map