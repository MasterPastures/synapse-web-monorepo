import{l as a}from"./index-07e2bb0e.js";import{R as E,g as R}from"./SynapseClient-773213a5.js";import{M as n}from"./MockResearchProject-228d5578.js";function m(o){return[a.rest.post(`${o}${E}`,async(r,t,s)=>{const e=await r.json();return t(s.status(201),s.json(e))}),a.rest.get(`${o}${R(":id")}`,async(r,t,s)=>{const e={...n,accessRequirementId:r.params.id.toString()};return t(s.status(200),s.json(e))})]}export{m as g};
//# sourceMappingURL=researchProjectHandlers-12240b25.js.map