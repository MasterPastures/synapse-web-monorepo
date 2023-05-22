import{a as c}from"./index-0d8ff56c.js";import{I as O,J as j,O as M,K as L,L as S,N as B,P as V,R as h,T as P,U,V as Y,W as Z}from"./SynapseClient-c43c6534.js";import{g as H,B as K}from"./getEndpoint-ac94413e.js";import{M as y,a as k}from"./mock_user_profile-eae64209.js";import{m as u}from"./mock_file_handle-e16b5e33.js";import{m as N,b as R}from"./userProfileHandlers-c0d3ddc8.js";const f="syn234",b="A Mocked Dataset",I={id:f,parentId:u.id,name:b,concreteType:"org.sagebionetworks.repo.model.table.Dataset",createdBy:y.toString(),modifiedBy:k.toString(),createdOn:"2020-01-01T00:00:00.000Z",modifiedOn:"2020-02-01T00:00:00.000Z",versionNumber:3,versionLabel:"in progress",versionComment:"in progress",isLatestVersion:!0,etag:"00000000-0000-0000-0000-000000000000",items:[],columnIds:[],isSearchEnabled:!1},F={id:f,type:"org.sagebionetworks.repo.model.table.Dataset",name:b,benefactorId:parseInt(u.id),createdOn:"2020-01-01T00:00:00.000Z",modifiedOn:"2020-02-01T00:00:00.000Z",createdBy:y.toString(),modifiedBy:y.toString(),versionNumber:3,versionLabel:"in progress",isLatestVersion:!0},$={path:[{name:"root",id:"syn4489",type:"org.sagebionetworks.repo.model.Folder"},{name:u.name,id:u.id,type:"org.sagebionetworks.repo.model.Project"},{name:b,id:f,type:"org.sagebionetworks.repo.model.FileEntity"}]},J={1:{...I,versionNumber:1,versionLabel:"snapshot 1",versionComment:"",isLatestVersion:!1},2:{...I,versionNumber:2,versionLabel:"snapshot 2",versionComment:"",isLatestVersion:!1}},z=[{id:f,versionNumber:2,versionLabel:"snapshot 2",versionComment:"",isLatestVersion:!1,modifiedBy:y.toString(),modifiedByPrincipalId:y.toString(),modifiedOn:"2022-03-22T18:50:22.336Z"},{id:f,versionNumber:1,versionLabel:"snapshot 1",versionComment:"",isLatestVersion:!1,modifiedBy:y.toString(),modifiedByPrincipalId:y.toString(),modifiedOn:"2022-03-22T18:47:34.797Z"}],q={entity:I,entityType:O.DATASET,path:$,permissions:{canView:!0,canEdit:!0,canMove:!0,canAddChild:!0,canCertifiedUserEdit:!0,canCertifiedUserAddChild:!0,isCertifiedUser:!0,canChangePermissions:!0,canChangeSettings:!0,canDelete:!0,canDownload:!0,canUpload:!0,canEnableInheritance:!0,ownerPrincipalId:3350396,canPublicRead:!0,canModerate:!0,isCertificationRequired:!0,isEntityOpenData:!1}},_={id:f,name:b,entity:I,entityHeader:F,path:$,bundle:q,versions:J,versionInfo:z},g="syn654651",T="A Mocked Dataset Collection",G={id:g,parentId:u.id,name:T,concreteType:"org.sagebionetworks.repo.model.table.DatasetCollection",createdBy:y.toString(),modifiedBy:y.toString(),etag:"00000000-0000-0000-0000-000000000000",items:[{entityId:_.id,versionNumber:1}],columnIds:[],isSearchEnabled:!1},W={path:[{name:"root",id:"syn4489",type:"org.sagebionetworks.repo.model.Folder"},{name:u.name,id:u.id,type:"org.sagebionetworks.repo.model.Project"},{name:T,id:g,type:"org.sagebionetworks.repo.model.FileEntity"}]},Q={id:g,name:T,entity:G,path:W},v="syn345",w="my table name",C=u.id,l={id:v,versionNumber:1,versionLabel:"in progress",versionComment:"in progress",parentId:C,name:w,concreteType:"org.sagebionetworks.repo.model.table.TableEntity",createdBy:y.toString(),createdOn:"2022-02-03T12:44:35.457Z",modifiedOn:"2022-05-14T17:10:36.915Z",modifiedBy:k.toString(),etag:"00000000-0000-0000-0000-000000000000",columnIds:[],isSearchEnabled:!0,isLatestVersion:!0},X={name:l.name,id:v,type:"org.sagebionetworks.repo.model.table.TableEntity",versionNumber:l.versionNumber,versionLabel:l.versionLabel,benefactorId:C,createdOn:l.createdOn,modifiedOn:l.modifiedOn,createdBy:l.createdBy,modifiedBy:l.modifiedBy,isLatestVersion:l.isLatestVersion},x={id:v,name:w,entity:l,entityHeader:X},p=[N,u,_,Q,x],D=N.entity,E={jsonSchemaVersionInfo:{organizationId:"1",organizationName:"org.sagebionetworks",schemaId:"1",schemaName:"Mock Schema",versionId:"555",$id:"org.sagebionetworks-MockSchema",jsonSHA256Hex:"5f2cd73c0fe25b30cbee2f213b6d633951f1873ca1911f494d4654f702a69e95",createdOn:"2021-04-01T08:00:00.000Z",createdBy:"1"},objectId:3333,objectType:j.entity,createdOn:"2021-04-01T08:00:00.000Z",createdBy:"1"};D.id,M.entity,D.etag,`${E.jsonSchemaVersionInfo.$id}`;`${E.jsonSchemaVersionInfo.$id}`;const ie=m=>[c.rest.post(`${m}${L}`,async(n,i,e)=>{let o=404,s={reason:`Mock Service worker could not find a matching mock entity for this request : ${JSON.stringify(n.body)}`};if(n.body){const t=n.body,r=p.find(a=>a.name===t.name);r?(s=r.entity,o=200):t.name===R&&(s.reason="Invalid project name",o=403)}return i(e.status(o),e.json(s))}),c.rest.get(`${m}${S(":entityId")}`,async(n,i,e)=>{let o=404,s={reason:`Mock Service worker could not find a mock entity with ID ${n.params.entityId}`};const t=p.find(r=>r.id===n.params.entityId);return t&&(s=t.entity,o=200),i(e.status(o),e.json(s))}),c.rest.get(`${m}${B(":entityId")}`,async(n,i,e)=>{let o=404,s={reason:`Mock Service worker could not find mock entity versions for ID ${n.params.entityId}`};const t=p.find(r=>r.id===n.params.entityId);return t&&t.versionInfo&&(s={results:t.versionInfo},o=200),i(e.status(o),e.json(s))}),c.rest.get(`${m}${V(":entityId",":versionNumber")}`,async(n,i,e)=>{let o=404;const s=n.params.entityId,t=n.params.versionNumber.toString(),r=parseInt(t);let a={reason:`Mock Service worker could not find a mock versioned entity with ID ${s}.${t}`};const d=p.find(A=>A.id===n.params.entityId);return d&&d.versions&&d.versions[r]&&(a=d.versions[r],o=200),i(e.status(o),e.json(a))}),c.rest.post(`${m}${h(":entityId")}`,async(n,i,e)=>{let o=404,s={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const t=p.find(r=>r.id===n.params.entityId);return t!=null&&t.bundle&&(s=t.bundle,o=200),i(e.status(o),e.json(s))}),c.rest.post(`${m}${h(":entityId",":versionNumber")}`,async(n,i,e)=>{const o=n.params.entityId,s=parseInt(n.params.versionNumber);let t=404,r={reason:`Mock Service worker could not find a mock entity bundle with ID ${o}`};const a=p.find(d=>d.id===o);if(a){const d=a.bundle;a.versions&&a.versions[s]?r={...d,entity:a.versions[s]}:r=d,t=200}return i(e.status(t),e.json(r))}),c.rest.get(`${m}${P(":entityId")}`,async(n,i,e)=>i(e.status(200),e.json(E))),c.rest.get(`${m}${U(":entityId")}`,async(n,i,e)=>{let o=404,s={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const t=p.find(r=>r.id===n.params.entityId);return t!=null&&t.json&&(s=t.json,o=200),i(e.status(o),e.json(s))}),c.rest.post(`${m}${Y}`,async(n,i,e)=>{let o=404,s={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const t=n.body,r=p.filter(a=>t.references.find(d=>d.targetId===a.id)).map(a=>a.entityHeader).filter(a=>!!a);return r&&(s={results:r},o=200),i(e.status(o),e.json(s))}),c.rest.get(`${m}${S(":entityId")}/path`,async(n,i,e)=>{let o=404,s={reason:`Mock Service worker could not find a mock entity path using ID ${n.params.entityId}`};const t=p.find(r=>n.params.entityId===r.id);return t&&t.path&&(s=t.path,o=200),i(e.status(o),e.json(s))}),c.rest.get(`${H(K.REPO_ENDPOINT)}/file/v1/entity/:id/uploadDestination`,async(n,i,e)=>{const o={banner:"",storageLocationId:1,uploadType:Z.S3,concreteType:"org.sagebionetworks.repo.model.file.S3UploadDestination"};return i(e.status(200),e.json(o))})];export{ie as g};
//# sourceMappingURL=entityHandlers-c341d57b.js.map