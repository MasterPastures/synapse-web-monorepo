import{r as g}from"./index-f1f749bf.js";import{u as S}from"./use-deep-compare-effect.esm-2b920fea.js";import{ah as O,am as T,aY as R,bd as h}from"./SynapseContext-c58a2137.js";import{u as _,c as k}from"./uniq-b76a2325.js";import{w as A}from"./without-562d1a85.js";import{V as y,w as F,x as N,y as D}from"./SynapseConstants-9d1f6e44.js";const b={ownerId:"",firstName:"Unknown",lastName:"Unknown",userName:"Unknown",isIndividual:!1},H={name:"Unknown",id:"unknown",type:"org.sagebionetworks.repo.model.FileEntity",versionNumber:0,versionLabel:"placeholder",benefactorId:0,createdOn:"null",modifiedOn:"null",createdBy:"null",modifiedBy:"null",isLatestVersion:!0},v={id:"unknown",etag:"Unknown",name:"Unknown",description:"Unknown",ownerId:"null",createdOn:"null",contentSource:"Unknown",submissionInstructionsMessage:"Unknown",submissionReceiptMessage:"Unknown"},L=async(o,c)=>{const e=await T(o,c),n=o.filter(t=>e.results.map(d=>d.id).indexOf(t.targetId)===-1).map(t=>({...H,id:t.targetId,name:`${t.targetId}`}));return[...e.results,...n]},P=async o=>{const c=(await R(o)).children,i=o.filter(n=>c.map(t=>t.ownerId).indexOf(n)===-1).map(n=>({...b,ownerId:n,name:`Unknown User (${n})`}));return[...c,...i]},Y=async(o,c)=>{const e=await h(o,c),n=o.filter(t=>e.results.map(d=>d.id).indexOf(t)===-1).map(t=>({...v,id:t,name:t}));return[...e.results,...n]};function J(o){const{ids:c,type:e}=o,{accessToken:i}=O(),[n,t]=g.useState([]),d=a=>a==="USER_PROFILE"?"ownerId":"id",w=a=>{switch(a){case"USER_PROFILE":return D;case"ENTITY_HEADER":return N;case"EVALUATION_QUEUE":return F;default:return""}},p=n.map(a=>a[d(e)]),U=c.filter(a=>a!==y),I=_(A(U,...p));return g.useEffect(()=>{((l,r)=>{if(!l.length)return;const m=sessionStorage.getItem(w(r));try{const u=m?JSON.parse(m):[],E=u.map(s=>s[d(r)]);for(const s of l)E.includes(s[d(r)])||u.push(s);sessionStorage.setItem(w(r),JSON.stringify(u))}catch{sessionStorage.setItem(w(r),JSON.stringify(l))}})(n,e)},[n,e]),S(()=>{let a=!1;return(async()=>{if(I.length>0)try{const r=Array.from(I),m=e==="ENTITY_HEADER"?r.map(s=>({targetId:s})):r,u=k(m,45),E=[];for(const s of u){let f=[];switch(e){case"USER_PROFILE":f=await P(s);break;case"ENTITY_HEADER":f=await L(s,i);break;case"EVALUATION_QUEUE":f=await Y(s,i);break}E.push(...f)}a||t(s=>s.concat(...E))}catch(r){console.error("Error on data retrieval",r)}})(),()=>{a=!0}},[i,e,I]),n}export{J as u};
//# sourceMappingURL=useGetInfoFromIds-915388b6.js.map