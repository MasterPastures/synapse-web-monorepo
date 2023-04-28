import{j as a,a as d,F as A}from"./jsx-runtime-ad672792.js";import{r as o,R as G}from"./index-f1f749bf.js";import{ai as B,ak as Q,aC as ne,aE as ie,bl as se,aW as le,bm as J,bn as oe,av as de}from"./SynapseContext-d313cbec.js";import{g as ce,B as ue,P as X}from"./getEndpoint-ac94413e.js";import{S as me}from"./SkeletonTable-f95355ab.js";import{I as V}from"./IconSvg-6d8374ab.js";import{T as fe}from"./ToastMessage-524a41fb.js";import{C as pe,a as Ce,c as he,d as Le,H as ge,u as ye,h as ve,I as Re}from"./SynapseConstants-9d1f6e44.js";import{a as Se}from"./Clear-499958d6.js";import{S as ee}from"./Skeleton-fcc77827.js";import{P as we}from"./Popover-11254ce5.js";import{F as _e}from"./Fade-d6b62a61.js";import{P as be}from"./Paper-832645e7.js";function Ne(e){e&&clearTimeout(e)}const Ee=250,Ie=500;function ae(e,r,t=Ee,n=Ie,i={},s={vertical:"top",horizontal:"right"},C={vertical:"center",horizontal:"left"}){const c=o.useRef(!1),h=o.useRef(null),[p,g]=o.useState(!1);o.useEffect(()=>(c.current=!0,()=>{c.current=!1}),[]);const u=o.useCallback((m=p,y=!0)=>{Ne(h.current),y?h.current=setTimeout(()=>{c.current&&g(m)},m?t:n):g(m)},[n,t,p]),L=o.useCallback((m=!0)=>{u(!0,m)},[u]),l=o.useCallback((m=!0)=>{u(!1,m)},[u]);return{OverlayComponent:o.useCallback(()=>a(we,{TransitionComponent:_e,anchorEl:r.current,open:p,anchorOrigin:s,transformOrigin:C,sx:{pointerEvents:"none"},children:a(be,{...i,onMouseEnter:()=>{u(!0,!1)},onMouseLeave:()=>{l(!0)},sx:{pointerEvents:"auto",width:"max-content",minWidth:"300px",...i.sx},children:e})}),[e,p,s,r,u,l]),isShowing:p,toggleShow:L,toggleHide:l,toggle:u}}async function Ue(e){return await(await fetch(e)).blob()}function Ae(e){URL.revokeObjectURL(e)}function Me(e){const[r,t]=o.useState(void 0),n=re(r);return o.useEffect(()=>{let i=!0;return e&&(async C=>{try{const c=await Ue(C);i&&t(c)}catch{console.error(`Failed to fetch object with presigned URL ${C}. See network log for details`)}})(e),()=>{i=!1}},[e]),n}function re(e){const[r,t]=o.useState(void 0);return o.useEffect(()=>{if(e){const n=URL.createObjectURL(e);t(n)}else t(void 0)},[e]),o.useEffect(()=>()=>{r&&Ae(r)},[r]),r}function ea(e,r,t,n){r.requestedFiles.length!==1&&console.warn("useGetPresignedUrlContent only supports one file at a time");const{accessToken:i,keyFactory:s}=B(),C=async()=>{const c=await ne(r,i);return await ie(e,c.requestedFiles[0].preSignedURL,t)};return Q(s.getPresignedUrlContentQueryKey(e,r,t),C,{staleTime:1/0,...n})}function Pe(e,r){const{keyFactory:t}=B(),n=async()=>{const i=await se(e);return i?await(await fetch(i,{method:"GET",mode:"cors",cache:"no-cache"})).blob():null};return Q(t.getProfileImageQueryKey(e),n,{staleTime:1/0,...r})}async function aa(e){return{list:(await le(e)).list.map(n=>n.profilePicureFileHandleId?{...n,clientPreSignedURL:`${ce(ue.REPO_ENDPOINT)}/repo/v1/userProfile/${n.ownerId}/image/preview?redirect=true`}:n)}}const W=["chocolate","black","firebrick","maroon","olive","green","forestgreen","darkturquoise","teal","blue","navy","darkmagenta","purple","blue","orangered","blueviolet"],Ve=e=>{const r=e.split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0);return Math.abs(r)},ke=e=>{const r=Ve(e);return W[r%W.length]},x=e=>a("svg",{...e,className:`Icon-Copy ${e.className??""}`,width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M10.7368 12.7273H3.78947V3.81818H10.7368V12.7273ZM10.7368 2.54545H3.78947C3.45446 2.54545 3.13317 2.67954 2.89629 2.91823C2.6594 3.15691 2.52632 3.48063 2.52632 3.81818V12.7273C2.52632 13.0648 2.6594 13.3885 2.89629 13.6272C3.13317 13.8659 3.45446 14 3.78947 14H10.7368C11.0719 14 11.3931 13.8659 11.63 13.6272C11.8669 13.3885 12 13.0648 12 12.7273V3.81818C12 3.48063 11.8669 3.15691 11.63 2.91823C11.3931 2.67954 11.0719 2.54545 10.7368 2.54545V2.54545ZM8.8421 0H1.26316C0.928148 0 0.606858 0.134091 0.36997 0.372773C0.133082 0.611456 0 0.935179 0 1.27273V10.1818H1.26316V1.27273H8.8421V0Z"})});try{x.displayName="IconCopy",x.__docgenInfo={description:"",displayName:"IconCopy",props:{}}}catch{}const xe=a("span",{className:"SRC-validatedProfileIcon",children:a("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M1.21612 12.9284C1.00431 13.5978 1.46323 14.3024 2.16925 14.4081L2.62816 14.4786C3.12238 14.5491 3.51069 14.9366 3.61659 15.4299L3.68719 15.8879C3.7931 16.5925 4.49912 17.0153 5.20514 16.8039L5.66405 16.663C6.15827 16.5221 6.68778 16.6982 6.97019 17.121L7.2526 17.5086C7.67621 18.0723 8.48813 18.178 9.01765 17.6847L9.37066 17.3676C9.75897 17.0153 10.2885 16.9448 10.7474 17.1915L11.171 17.4029C11.8064 17.7552 12.5831 17.4733 12.8302 16.8039L13.0067 16.3811C13.1832 15.9231 13.6774 15.606 14.1716 15.6413L14.6305 15.6765C15.3365 15.7117 15.9367 15.1128 15.8661 14.4081L15.8307 13.9501C15.7954 13.4569 16.0779 12.9636 16.5721 12.7875L16.9957 12.6113C17.6664 12.3294 17.9135 11.5543 17.5605 10.9554L17.2428 10.5678C16.9957 10.145 17.0663 9.58133 17.384 9.19378L17.7017 8.84145C18.1606 8.31297 18.09 7.50264 17.4899 7.07985L17.1016 6.83322C16.678 6.55137 16.5015 6.02289 16.6427 5.52964L16.7839 5.07162C16.9957 4.40221 16.5368 3.69757 15.8307 3.59187L15.3718 3.52141C14.8776 3.45094 14.4893 3.06339 14.3834 2.57014L14.3128 2.11212C14.2069 1.40748 13.5009 0.984696 12.7949 1.19609L12.3359 1.33702C11.8417 1.47795 11.3122 1.30179 11.0298 0.879L10.7474 0.491447C10.3238 -0.072267 9.51186 -0.177963 8.98235 0.315286L8.62934 0.632375C8.24103 0.984696 7.71151 1.05516 7.2526 0.808536L6.82899 0.597143C6.19357 0.244822 5.41694 0.526679 5.16984 1.19609L4.99333 1.61887C4.81683 2.07689 4.32261 2.39398 3.8284 2.35875L3.44009 2.28828C2.73407 2.25305 2.13395 2.852 2.20455 3.55664L2.23985 4.01466C2.27515 4.50791 1.99274 5.00116 1.49853 5.17732L1.07492 5.35348C0.404196 5.63533 0.15709 6.41044 0.5101 7.00939L0.757207 7.39694C1.00431 7.81972 0.933712 8.38344 0.616003 8.77099L0.298294 9.12331C-0.16062 9.65179 -0.0900176 10.4621 0.5101 10.8849L0.898411 11.1315C1.32202 11.4134 1.49853 11.9419 1.35732 12.4351L1.21612 12.9284ZM6.37007 7.6788L7.92332 9.26424L11.6652 5.56487L13.2891 7.18555L9.54716 10.8497L7.92332 12.4704L6.29947 10.8497L4.74622 9.29947L6.37007 7.6788Z",fill:"#28A745"})})}),q=e=>{const{menuActions:r=[],userProfile:t}=e;return a("div",{className:"dropdown open",children:a("ul",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenu1",children:r.map((n,i)=>{const s=()=>n.callback(t);return n.field===pe?a("hr",{className:"SRC-break"},`${n.field}_${i}`):a("li",{role:"menuitem",style:{listStyle:"none"},className:"SRC-menu-item SRC-table-dropdown-list SRC-primary-background-color-hover",onClick:s,onKeyPress:s,children:a("button",{className:"SRC-menuAction",children:n.field})},n.field)})})})};try{q.displayName="UserCardContextMenu",q.__docgenInfo={description:"",displayName:"UserCardContextMenu",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},menuActions:{defaultValue:null,description:"",name:"menuActions",required:!0,type:{name:"MenuAction[]"}}}}}catch{}const qe=a("span",{className:"SRC-certified-user-icon",children:d("svg",{width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a("path",{d:"M5.63578 14.1759C5.53042 14.0916 5.40399 14.0284 5.27756 14.0284L4.39256 13.9652C3.48648 13.902 2.68576 13.4384 2.15897 12.7641L0.0518096 17.2523C-0.137835 17.6738 0.220382 18.1584 0.683957 18.0741L2.5804 17.7159C2.81219 17.6738 3.06505 17.7791 3.19148 18.0109L4.11862 19.6966C4.35041 20.1181 4.94042 20.097 5.13006 19.6545L7.174 15.2927C6.85793 15.1663 6.584 14.9977 6.31007 14.7659L5.63578 14.1759Z",fill:"#58A158"}),a("path",{d:"M16.6564 17.2523L14.5492 12.7641C14.0224 13.4384 13.2217 13.8809 12.3156 13.9652L11.4306 14.0284C11.2831 14.0495 11.1778 14.0916 11.0724 14.1759L10.3981 14.7448C10.1453 14.9555 9.85025 15.1452 9.53418 15.2716L11.5781 19.6334C11.7678 20.0549 12.3788 20.0759 12.5896 19.6756L13.5167 17.9899C13.6431 17.7791 13.8749 17.6527 14.1278 17.6948L16.0242 18.0531C16.4878 18.1374 16.8671 17.6738 16.6564 17.2523Z",fill:"#58A158"}),a("path",{d:"M10.2503 13.2277C10.5453 12.9748 10.9246 12.8063 11.3249 12.7852L12.2099 12.722C13.1371 12.6588 13.8746 11.9212 13.9378 10.9941L14.001 10.1091C14.0221 9.70873 14.1906 9.32944 14.4435 9.03444L15.0335 8.36015C15.6446 7.64372 15.6446 6.61121 15.0335 5.91585L14.4435 5.24156C14.1906 4.94655 14.0221 4.56727 14.001 4.16691L13.9378 3.2819C13.8746 2.35475 13.1371 1.61724 12.2099 1.55403L11.3249 1.49081C10.9246 1.46974 10.5453 1.30117 10.2503 1.04831L9.57597 0.458307C8.85954 -0.152769 7.82703 -0.152769 7.13167 0.458307L6.45738 0.985097C6.16237 1.23796 5.78309 1.40653 5.38273 1.4276L4.49772 1.49081C3.57057 1.55403 2.83306 2.29153 2.76985 3.21868L2.70664 4.10369C2.68556 4.50405 2.51699 4.88334 2.26413 5.17834L1.67413 5.85263C1.06305 6.56907 1.06305 7.60157 1.67413 8.29694L2.26413 8.97123C2.51699 9.26623 2.68556 9.64552 2.70664 10.0459L2.76985 10.9309C2.83306 11.858 3.57057 12.5955 4.49772 12.6588L5.38273 12.722C5.78309 12.743 6.16237 12.9116 6.45738 13.1645L7.13167 13.7545C7.8481 14.3656 8.88061 14.3656 9.57597 13.7545L10.2503 13.2277ZM4.39236 7.11693C4.39236 4.92548 6.16237 3.15547 8.35382 3.15547C10.5453 3.15547 12.3153 4.92548 12.3153 7.11693C12.3153 9.30837 10.5453 11.0784 8.35382 11.0784C6.16237 11.0784 4.39236 9.2873 4.39236 7.11693Z",fill:"#58A158"}),a("path",{d:"M10.5875 6.0844L9.49182 5.87368C9.38646 5.85261 9.28111 5.7894 9.23896 5.68404L8.6911 4.69367C8.5436 4.44081 8.16431 4.44081 8.03788 4.69367L7.49002 5.68404C7.42681 5.7894 7.34252 5.85261 7.23716 5.87368L6.14144 6.0844C5.84644 6.14761 5.74108 6.50583 5.93072 6.71654L6.6893 7.53834C6.77359 7.62262 6.79466 7.72798 6.79466 7.83334L6.66823 8.95013C6.62609 9.24513 6.94216 9.45585 7.19502 9.32942L8.20646 8.84477C8.31181 8.80263 8.41717 8.80263 8.52253 8.84477L9.53396 9.32942C9.8079 9.45585 10.1029 9.24513 10.0608 8.95013L9.93433 7.83334C9.91325 7.72798 9.9554 7.60155 10.0397 7.53834L10.7983 6.71654C10.9879 6.48476 10.8825 6.14761 10.5875 6.0844Z",fill:"#C94281"})]})});function D({userProfile:e,isCertified:r}){const{summary:t,industry:n,location:i,url:s}=e;return a("div",{className:"SRC-cardMetaData",children:d("div",{className:"SRC-cardMetaData-scroll",children:[t&&d("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" Bio "}),a("p",{children:t})]}),s&&d("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" More Info "}),a("p",{children:s})]}),n&&d("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" Industry "}),a("p",{children:n})]}),i&&d("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" Location "}),a("p",{children:i})]}),r&&d("div",{children:[a("p",{className:"SRC-card-metadata-title",children:" Access "}),d("p",{children:[qe," Certified Account"]})]})]})})}try{D.displayName="UserCardLarge",D.__docgenInfo={description:"UserCardLarge wraps around UserCardMedium",displayName:"UserCardLarge",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}}}}}catch{}const Z=(e,r,t)=>n=>{n.preventDefault(),navigator.clipboard.writeText(r).then(()=>{t()})},E=({userProfile:e,menuActions:r,isLarge:t=!1,imageURL:n,hideEmail:i=!1,disableLink:s=!1,link:C,openLinkInNewTab:c=!1,isValidated:h,isCertified:p,isLoadingAvatar:g})=>{const[u,L]=o.useState(!1),[l,v]=o.useState(!1),m=o.useRef(null),y=()=>{L(!0),setTimeout(()=>{L(!1)},4e3)},{displayName:w,userName:f,firstName:R,lastName:_,position:I,company:P}=e;o.useEffect(()=>{const k=z=>{l&&setTimeout(()=>{l&&b()},10)};return window.addEventListener("mouseup",k,!1),()=>{window.removeEventListener("mouseup",k,!1)}},[]);const{data:U}=J(e.ownerId,Ce),N=U==null?void 0:U.ORCID,b=k=>{v(z=>!z)};let S="";const O=C||`${X.PORTAL}#!Profile:${e.ownerId}`,F=`${f}@synapse.org`;w?S=w:R&&_?S=`${R} ${_}`:f&&(S=f);const $=a(M,{userProfile:e,imageURL:n,avatarSize:"LARGE",isLoadingAvatar:g}),H=d(G.Fragment,{children:[!i&&a(fe,{show:u,text:"Email address copied to clipboard",autohide:!0}),s&&$,!s&&a("a",{href:O,target:c?"_blank":"",rel:c?"noreferrer":"",className:`SRC-no-border-bottom-imp ${t?"SRC-isLargeCard":""}`,children:$}),d("div",{className:"SRC-cardContent",children:[d("p",{className:"SRC-eqHeightRow SRC-userCardName",children:[t||s?a("span",{className:t?"SRC-whiteText":"SRC-blackText",children:S}):a("a",{href:O,target:c?"_blank":"",rel:c?"noreferrer":"",tabIndex:0,className:"SRC-hand-cursor",children:S}),h&&a(Se,{title:"This user profile has been validated.",placement:"bottom",enterNextDelay:300,children:a("span",{children:xe})})]}),(I||P)&&d("p",{className:`${t?"SRC-whiteText":""}`,children:[I," ",I?" / ":""," ",P]}),!i&&d("p",{ref:m,className:`${t?"SRC-whiteText":""}
              SRC-hand-cursor SRC-eqHeightRow SRC-inlineFlex SRC-emailText SRC-cardSvg`,onClick:Z(m,F,y),onKeyPress:Z(m,F,y),tabIndex:0,children:[a("span",{style:{paddingRight:"5px",paddingBottom:"2px"},children:a("a",{className:`link ${t?"SRC-whiteText":""}`,children:`${f}@synapse.org`})}),a(x,{})]}),N&&a("a",{href:N,target:"_blank",rel:"noopener noreferrer",style:{width:"fit-content"},tabIndex:0,className:t?"SRC-whiteText":"",children:"View ORCID"})]}),r&&d(G.Fragment,{children:[a("span",{role:"menu",className:`SRC-extraPadding SRC-hand-cursor SRC-primary-background-color-hover SRC-inlineBlock
              SRC-cardMenuButton ${l?"SRC-primary-background-color":""}`,style:{outline:"none"},tabIndex:0,onClick:b,onKeyPress:b,children:a("span",{className:l||t?"SRC-whiteText":"SRC-primary-text-color",children:a(V,{icon:"verticalEllipsis"})})}),l&&a(q,{menuActions:r,userProfile:e})]}),!r&&a("span",{style:{padding:"0px 0px 0px 35px"}})]});return t?d("div",{className:l?"SRC-hand-cursor cardContainer":"cardContainer",onClick:l?b:void 0,children:[a("div",{className:`SRC-primary-background-color SRC-userCard SRC-userCardMediumUp ${l?"SRC-hand-cursor":""}`,children:H}),t?a(D,{userProfile:e,isCertified:p}):!1]}):a("div",{style:{border:"1px solid #DDDDDF",backgroundColor:"white"},className:`cardContainer SRC-userCard SRC-userCardMediumUp ${l?"SRC-hand-cursor":""}`,onClick:l?b:void 0,children:H})},K=()=>d("div",{className:"cardContainer SRC-userCard SRC-userCardMediumUp",style:{width:"380px"},children:[a(ee,{variant:"circular",width:"80px",height:"80px"}),a("div",{style:{width:"250px"},children:a(me,{numCols:1,numRows:2})})]});try{E.displayName="UserCardMedium",E.__docgenInfo={description:"",displayName:"UserCardMedium",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},menuActions:{defaultValue:null,description:"",name:"menuActions",required:!1,type:{name:"MenuAction[]"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},hideEmail:{defaultValue:{value:"false"},description:"",name:"hideEmail",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},openLinkInNewTab:{defaultValue:{value:"false"},description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:{value:"false"},description:"",name:"disableLink",required:!1,type:{name:"boolean"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},isLoadingAvatar:{defaultValue:null,description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}}}}}catch{}try{K.displayName="LoadingUserCardMedium",K.__docgenInfo={description:"",displayName:"LoadingUserCardMedium",props:{}}}catch{}const De=250,Te=500,M=({userProfile:e,avatarSize:r="LARGE",imageURL:t,showCardOnHover:n=!1,isLoadingAvatar:i=!1})=>{const s=o.useRef(null),C=a(E,{userProfile:e,imageURL:t}),{OverlayComponent:c,isShowing:h,toggleShow:p,toggleHide:g}=ae(C,s,De,Te,{sx:{maxWidth:"425px"}});let u;switch(r){case"SMALL":u="SRC-userImgSmall";break;case"MEDIUM":u="SRC-userImgMedium";break;case"LARGE":u="SRC-userImg";break}const L=n?"pointer":"unset",l=!!t,v=l?{backgroundImage:`url(${t})`}:{background:ke(e.userName)};if(i)return a(ee,{className:u,variant:"circular"});let m=a(A,{});return l||(m=e.firstName?e.firstName[0]:e.userName[0]),d(A,{children:[n&&a(c,{}),a("div",{ref:s,role:"img",onMouseEnter:()=>p(),onMouseLeave:()=>g(),onClick:y=>{n&&y.stopPropagation(),h?g(!1):p(!1)},className:`${u} SRC-centerContentInline`,style:{cursor:L,...v},children:m})]})};try{M.displayName="Avatar",M.__docgenInfo={description:"",displayName:"Avatar",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},avatarSize:{defaultValue:{value:"LARGE"},description:"",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},showCardOnHover:{defaultValue:{value:"false"},description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}},isLoadingAvatar:{defaultValue:{value:"false"},description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}}}}}catch{}const Oe=250,Fe=500,Y=" ",T=e=>{const{userProfile:r,showCardOnHover:t=!0,disableLink:n,showAccountLevelIcon:i=!1,openLinkInNewTab:s,withAvatar:C=!1,avatarSize:c="SMALL",imageURL:h,className:p,showFullName:g=!1,isLoadingAvatar:u,...L}=e;let{link:l}=e;const[v,m]=o.useState(a(V,{icon:"accountRegistered"})),y=o.useRef(null),w=he|Le,{data:f}=J(r.ownerId,w);o.useEffect(()=>{f!=null&&f.isCertified&&m(a(V,{icon:"accountCertified"})),f!=null&&f.isVerified&&m(a(V,{icon:"accountValidated"}))},[i,f==null?void 0:f.isCertified,f==null?void 0:f.isVerified]);const R=o.useMemo(()=>a(E,{userProfile:r,imageURL:h,...L}),[h,L,r]);l==null&&(l=`${X.PORTAL}#!Profile:${r.ownerId}`);const{OverlayComponent:_,toggleShow:I,toggleHide:P}=ae(R,y,Oe,Fe,{sx:{maxWidth:"425px"}}),U=C?a("span",{className:"SRC-inline-avatar",children:a(M,{userProfile:r,avatarSize:c,imageURL:h,isLoadingAvatar:u})}):a(A,{}),N=g&&(r.firstName||r.lastName)?d("span",{className:"user-fullname",children:[`${r.firstName??""}`,r.firstName&&r.lastName?Y:"",`${r.lastName??""}`]}):null,b=t||!n?"a":"span";let S={};return t?S={whiteSpace:"nowrap"}:n&&(S={cursor:"unset"}),d(A,{children:[t&&a(_,{}),d(b,{className:`SRC-userCard UserCardSmall SRC-boldText ${p??""}`,style:S,href:n?void 0:l,target:s?"_blank":"",rel:s?"noreferrer":"",ref:y,onMouseEnter:()=>I(),onMouseLeave:()=>P(),children:[U,N,N?`${Y}(`:"",`@${r.userName}`,N?")":"",i&&a("span",{className:"account-level-icon",children:v})]})]})};try{T.displayName="UserCardSmall",T.__docgenInfo={description:"",displayName:"UserCardSmall",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},showCardOnHover:{defaultValue:null,description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"",name:"disableLink",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},showAccountLevelIcon:{defaultValue:null,description:"",name:"showAccountLevelIcon",required:!1,type:{name:"boolean"}},openLinkInNewTab:{defaultValue:null,description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},withAvatar:{defaultValue:null,description:"",name:"withAvatar",required:!1,type:{name:"boolean"}},avatarSize:{defaultValue:null,description:"",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},isLoadingAvatar:{defaultValue:null,description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showFullName:{defaultValue:null,description:"",name:"showFullName",required:!1,type:{name:"boolean"}}}}}catch{}var te=(e=>(e.USER_NAME="USER_NAME",e.TEAM_NAME="TEAM_NAME",e.USER_EMAIL="USER_EMAIL",e.USER_OPEN_ID="USER_OPEN_ID",e.USER_ORCID="USER_ORCID",e))(te||{});const j=e=>{var _;const{userProfile:r,preSignedURL:t,size:n,ownerId:i,alias:s,...C}=e,{data:c,isLoading:h}=oe({alias:s,type:te.USER_NAME},{enabled:!!s}),p=(_=i??(r==null?void 0:r.ownerId)??c)==null?void 0:_.toString(),{data:g,isLoading:u}=de(p,{enabled:!!p&&!r}),L=r??g,{data:l,isLoading:v}=Pe(p,{enabled:!!(!t&&p)}),m=Me(t),y=re(l),w=m??y,f=h||u,R=o.useMemo(()=>({userProfile:L,imageURL:w,isLoadingAvatar:v,...C}),[w,v,C,L]);if(f||L==null)return a(A,{});switch(n){case Re:return a(M,{...R});case ve:return a(T,{...R});case ye:return a(E,{...R});case ge:return a(E,{isLarge:!0,...R});default:return console.warn("No size specified for UserCard"),a("span",{})}};try{j.displayName="UserCard",j.__docgenInfo={description:"",displayName:"UserCard",props:{userProfile:{defaultValue:null,description:"A UserProfile may be used for data for the card. You must supply one of `userProfile`, `alias`, `ownerId`",name:"userProfile",required:!1,type:{name:"UserProfile"}},alias:{defaultValue:null,description:"An alias that resolves the ownerId for the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId`",name:"alias",required:!1,type:{name:"string"}},ownerId:{defaultValue:null,description:"The unique ownerId of the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId`",name:"ownerId",required:!1,type:{name:"string"}},hideEmail:{defaultValue:null,description:"Whether to hide the user's Synapse email address",name:"hideEmail",required:!1,type:{name:"boolean"}},preSignedURL:{defaultValue:null,description:"If set, the corresponding image will be shown for the user.",name:"preSignedURL",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Specifies the card size",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},showCardOnHover:{defaultValue:null,description:"For the small user card or avatar, shows the medium user card on mouseover",name:"showCardOnHover",required:!1,type:{name:"boolean"}},hideTooltip:{defaultValue:null,description:"For the small user card, hides the tooltip observed when hovering over the profile image.",name:"hideTooltip",required:!1,type:{name:"boolean"}},menuActions:{defaultValue:null,description:"Specifies the dropdown menu functionality for the ellipsis on medium/large cards. If field === 'SEPERATOR' then a break will occur in the menu. If left undefined, the menu will not render to the screen.",name:"menuActions",required:!1,type:{name:"MenuAction[]"}},link:{defaultValue:null,description:"The link to point to on the username, defaults to https://www.synapse.org/#!Profile:${userProfile.ownerId}",name:"link",required:!1,type:{name:"string"}},openLinkInNewTab:{defaultValue:null,description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"Disables the `@username` link for the small user card (if `showCardOnHover` is false). For the medium user card, disables linking the user's name to their profile (or other specified destination)",name:"disableLink",required:!1,type:{name:"boolean"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},avatarSize:{defaultValue:null,description:"Determines the size of the avatar when size === 'AVATAR' or (size === 'SMALL' and withAvatar is true)",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},withAvatar:{defaultValue:null,description:"Whether to show the avatar with the name for the small user card",name:"withAvatar",required:!1,type:{name:"boolean"}},showFullName:{defaultValue:null,description:"Whether to show the full name in the small user card",name:"showFullName",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{x as I,K as L,j as U,T as a,aa as g,ea as u};
//# sourceMappingURL=UserCard-8c18eb6b.js.map