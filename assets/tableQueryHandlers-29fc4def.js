import{l as E}from"./index-c6708cb3.js";import{cy as S,cz as l,cA as U}from"./SynapseClient-171f0a1b.js";import{g as B,B as d}from"./getEndpoint-ac94413e.js";import{n as M,o as i,w as A,j as c,u as m,v as p,p as L,B as N}from"./SynapseConstants-d7ecf847.js";import{u as T}from"./uniqueId-4d05949d.js";import{c as R}from"./cloneDeep-ea282eda.js";const D={[M]:"queryResult",[i]:"queryCount",[A]:"selectColumns",[c]:"maxRowsPerPage",[m]:"columnModels",[p]:"facets",[L]:"sumFileSizes",[N]:"lastUpdatedOn"};function u(n,r){const s=R(n);return Object.entries(D).forEach(([t,o])=>{r&parseInt(t)||delete s[o]}),s}function I(n,r=B(d.REPO_ENDPOINT)){const s=T();let t;return[E.rest.post(`${r}${S(":id")}`,async(o,a,e)=>(t=o.body,a(e.status(201),e.json({token:s})))),E.rest.get(`${r}${l(s)}`,async(o,a,e)=>{const _=u(n,t.partMask);return a(e.status(201),e.json({jobState:"COMPLETE",jobCanceling:!1,requestBody:t,etag:"00000000-0000-0000-0000-000000000000",jobId:s,responseBody:_,startedByUserId:0,startedOn:"",changedOn:"",progressMessage:"",progressCurrent:100,progressTotal:100,exception:"",errorMessage:"",errorDetails:"",runtimeMS:100}))}),E.rest.get(`${r}${U(":id",s)}`,async(o,a,e)=>{const _=u(n,t.partMask);return a(e.status(201),e.json(_))})]}export{I as g};
//# sourceMappingURL=tableQueryHandlers-29fc4def.js.map