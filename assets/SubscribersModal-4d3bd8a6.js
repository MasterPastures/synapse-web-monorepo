import{a as n,j as a}from"./jsx-runtime-095bf462.js";import{a as u}from"./ConfirmationDialog-7c25f4f2.js";import{a as d}from"./useSubscription-ecfc2772.js";import{U as c}from"./UserCard-79b6d53c.js";import{S as m}from"./SynapseConstants-d7ecf847.js";import{L as p}from"./Link-c55ec6e2.js";const t=({id:o,objectType:l,showModal:i,handleModal:r})=>{const{data:e}=d({objectId:o,objectType:l});return n("div",{className:"SubscribersModal",children:[e&&e.subscribers.length>0&&a(p,{onClick:()=>r(!0),children:`Followers (${e.subscribers.length})`}),a(u,{open:i,onCancel:()=>r(!1),title:"Followers",content:e&&e.subscribers.map(s=>a(c,{ownerId:s,size:m,showCardOnHover:!0},s)),onConfirm:()=>r(!1),confirmButtonText:"Ok",hasCancelButton:!1})]})};try{t.displayName="SubscribersModal",t.__docgenInfo={description:"",displayName:"SubscribersModal",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},objectType:{defaultValue:null,description:"",name:"objectType",required:!0,type:{name:"enum",value:[{value:'"FORUM"'},{value:'"THREAD"'},{value:'"DATA_ACCESS_SUBMISSION"'},{value:'"DATA_ACCESS_SUBMISSION_STATUS"'}]}},showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},handleModal:{defaultValue:null,description:"",name:"handleModal",required:!0,type:{name:"(a: boolean) => void"}}}}}catch{}export{t as S};
//# sourceMappingURL=SubscribersModal-4d3bd8a6.js.map