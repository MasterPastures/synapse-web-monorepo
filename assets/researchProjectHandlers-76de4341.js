import{l as o}from"./index-c28dc88f.js";import{ah as n,ai as E}from"./SynapseClient-28b35d32.js";import{a as R}from"./MockResearchProject-3c90740e.js";function p(e){return[o.rest.post(`${e}${n}`,async(r,t,s)=>{const a=await r.json();return t(s.status(201),s.json(a))}),o.rest.get(`${e}${E(":id")}`,async(r,t,s)=>{const a={...R,accessRequirementId:r.params.id.toString()};return t(s.status(200),s.json(a))})]}export{p as g};
//# sourceMappingURL=researchProjectHandlers-76de4341.js.map