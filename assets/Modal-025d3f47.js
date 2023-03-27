import{_ as Q}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as E}from"./extends-98964cd2.js";import{r as l}from"./index-f1f749bf.js";import{g as ce,d as de,i as ue,s as Z,e as fe,h as J}from"./styled-a7106a93.js";import{a as pe,j as A}from"./jsx-runtime-670450c2.js";import{F as ye}from"./Fade-9c0595ba.js";import{g as Re}from"./getScrollbarSize-ac846fe6.js";import{o as D,i as Pe}from"./isHostComponent-fa76b8d9.js";import{o as ee}from"./ownerWindow-12ded16b.js";import{f as ne,P as Te,h as Se,i as re}from"./Clear-3ac01158.js";import{u as me}from"./useForkRef-dd8a6e5c.js";import{u as se}from"./TransitionGroupContext-a2b6e27b.js";function ie(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}const Ce=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ne(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ie(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Me(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ie(e))}function Fe(e){const t=[],n=[];return Array.from(e.querySelectorAll(Ce)).forEach((o,i)=>{const r=Ne(o);r===-1||!Me(o)||(r===0?t.push(o):n.push({documentOrder:i,tabIndex:r,node:o}))}),n.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function we(){return!0}function Ae(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:r=Fe,isEnabled:s=we,open:c}=e,u=l.useRef(!1),k=l.useRef(null),y=l.useRef(null),m=l.useRef(null),p=l.useRef(null),v=l.useRef(!1),d=l.useRef(null),N=me(t.ref,d),P=l.useRef(null);l.useEffect(()=>{!c||!d.current||(v.current=!n)},[n,c]),l.useEffect(()=>{if(!c||!d.current)return;const a=D(d.current);return d.current.contains(a.activeElement)||(d.current.hasAttribute("tabIndex")||d.current.setAttribute("tabIndex","-1"),v.current&&d.current.focus()),()=>{i||(m.current&&m.current.focus&&(u.current=!0,m.current.focus()),m.current=null)}},[c]),l.useEffect(()=>{if(!c||!d.current)return;const a=D(d.current),b=R=>{const{current:I}=d;if(I!==null){if(!a.hasFocus()||o||!s()||u.current){u.current=!1;return}if(!I.contains(a.activeElement)){if(R&&p.current!==R.target||a.activeElement!==p.current)p.current=null;else if(p.current!==null)return;if(!v.current)return;let x=[];if((a.activeElement===k.current||a.activeElement===y.current)&&(x=r(d.current)),x.length>0){var B,U;const S=Boolean(((B=P.current)==null?void 0:B.shiftKey)&&((U=P.current)==null?void 0:U.key)==="Tab"),M=x[0],F=x[x.length-1];typeof M!="string"&&typeof F!="string"&&(S?F.focus():M.focus())}else I.focus()}}},f=R=>{P.current=R,!(o||!s()||R.key!=="Tab")&&a.activeElement===d.current&&R.shiftKey&&(u.current=!0,y.current&&y.current.focus())};a.addEventListener("focusin",b),a.addEventListener("keydown",f,!0);const L=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&b(null)},50);return()=>{clearInterval(L),a.removeEventListener("focusin",b),a.removeEventListener("keydown",f,!0)}},[n,o,i,s,c,r]);const g=a=>{m.current===null&&(m.current=a.relatedTarget),v.current=!0,p.current=a.target;const b=t.props.onFocus;b&&b(a)},T=a=>{m.current===null&&(m.current=a.relatedTarget),v.current=!0};return pe(l.Fragment,{children:[A("div",{tabIndex:c?0:-1,onFocus:T,ref:k,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:N,onFocus:g}),A("div",{tabIndex:c?0:-1,onFocus:T,ref:y,"data-testid":"sentinelEnd"})]})}function Be(e){const t=D(e);return t.body===e?ee(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function j(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ae(e){return parseInt(ee(e).getComputedStyle(e).paddingRight,10)||0}function Oe(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function le(e,t,n,o,i){const r=[t,n,...o];[].forEach.call(e.children,s=>{const c=r.indexOf(s)===-1,u=!Oe(s);c&&u&&j(s,i)})}function X(e,t){let n=-1;return e.some((o,i)=>t(o)?(n=i,!0):!1),n}function De(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Be(o)){const s=Re(D(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${ae(o)+s}px`;const c=D(o).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${ae(u)+s}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=D(o).body;else{const s=o.parentElement,c=ee(o);r=(s==null?void 0:s.nodeName)==="HTML"&&c.getComputedStyle(s).overflowY==="scroll"?s:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:s,property:c})=>{r?s.style.setProperty(c,r):s.style.removeProperty(c)})}}function Le(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Ue{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&j(t.modalRef,!1);const i=Le(n);le(n,t.mount,t.modalRef,i,!0);const r=X(this.containers,s=>s.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),o)}mount(t,n){const o=X(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=De(i,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=X(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&j(t.modalRef,n),le(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&j(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function _e(e){return ce("MuiModal",e)}de("MuiModal",["root","hidden","backdrop"]);const $e=["children","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],He=e=>{const{open:t,exited:n}=e;return ue({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Se(_e))};function Ke(e){return typeof e=="function"?e():e}function je(e){return e?e.props.hasOwnProperty("in"):!1}const We=new Ue,ze=l.forwardRef(function(t,n){var o,i;const{children:r,closeAfterTransition:s=!1,component:c,container:u,disableAutoFocus:k=!1,disableEnforceFocus:y=!1,disableEscapeKeyDown:m=!1,disablePortal:p=!1,disableRestoreFocus:v=!1,disableScrollLock:d=!1,hideBackdrop:N=!1,keepMounted:P=!1,manager:g=We,onBackdropClick:T,onClose:a,onKeyDown:b,open:f,onTransitionEnter:L,onTransitionExited:R,slotProps:I={},slots:B={}}=t,U=Q(t,$e),[x,S]=l.useState(!f),M=l.useRef({}),F=l.useRef(null),C=l.useRef(null),W=me(C,n),O=je(r),w=(o=t["aria-hidden"])!=null?o:!0,z=()=>D(F.current),_=()=>(M.current.modalRef=C.current,M.current.mountNode=F.current,M.current),$=()=>{g.mount(_(),{disableScrollLock:d}),C.current&&(C.current.scrollTop=0)},H=se(()=>{const h=Ke(u)||z().body;g.add(_(),h),C.current&&$()}),q=l.useCallback(()=>g.isTopModal(_()),[g]),be=se(h=>{F.current=h,!(!h||!C.current)&&(f&&q()?$():j(C.current,w))}),K=l.useCallback(()=>{g.remove(_(),w)},[g,w]);l.useEffect(()=>()=>{K()},[K]),l.useEffect(()=>{f?H():(!O||!s)&&K()},[f,K,O,s,H]);const G=E({},t,{closeAfterTransition:s,disableAutoFocus:k,disableEnforceFocus:y,disableEscapeKeyDown:m,disablePortal:p,disableRestoreFocus:v,disableScrollLock:d,exited:x,hideBackdrop:N,keepMounted:P}),te=He(G),he=()=>{S(!1),L&&L()},ge=()=>{S(!0),R&&R(),s&&K()},xe=h=>{h.target===h.currentTarget&&(T&&T(h),a&&a(h,"backdropClick"))},Ee=h=>{b&&b(h),!(h.key!=="Escape"||!q())&&(m||(h.stopPropagation(),a&&a(h,"escapeKeyDown")))},Y={};r.props.tabIndex===void 0&&(Y.tabIndex="-1"),O&&(Y.onEnter=ie(he,r.props.onEnter),Y.onExited=ie(ge,r.props.onExited));const oe=(i=c??B.root)!=null?i:"div",ke=ne({elementType:oe,externalSlotProps:I.root,externalForwardedProps:U,additionalProps:{ref:W,role:"presentation",onKeyDown:Ee},className:te.root,ownerState:G}),V=B.backdrop,ve=ne({elementType:V,externalSlotProps:I.backdrop,additionalProps:{"aria-hidden":!0,onClick:xe,open:f},className:te.backdrop,ownerState:G});return!P&&!f&&(!O||x)?null:A(Te,{ref:be,container:u,disablePortal:p,children:pe(oe,E({},ke,{children:[!N&&V?A(V,E({},ve)):null,A(Ae,{disableEnforceFocus:y,disableAutoFocus:k,disableRestoreFocus:v,isEnabled:q,open:f,children:l.cloneElement(r,Y)})]}))})}),Ye=ze;function qe(e){return ce("MuiBackdrop",e)}de("MuiBackdrop",["root","invisible"]);const Ge=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Ve=e=>{const{classes:t,invisible:n}=e;return ue({root:["root",n&&"invisible"]},qe,t)},Xe=Z("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>E({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Je=l.forwardRef(function(t,n){var o,i,r;const s=fe({props:t,name:"MuiBackdrop"}),{children:c,className:u,component:k="div",components:y={},componentsProps:m={},invisible:p=!1,open:v,slotProps:d={},slots:N={},TransitionComponent:P=ye,transitionDuration:g}=s,T=Q(s,Ge),a=E({},s,{component:k,invisible:p}),b=Ve(a),f=(o=d.root)!=null?o:m.root;return A(P,E({in:v,timeout:g},T,{children:A(Xe,E({"aria-hidden":!0},f,{as:(i=(r=N.root)!=null?r:y.Root)!=null?i:k,className:J(b.root,u,f==null?void 0:f.className),ownerState:E({},a,f==null?void 0:f.ownerState),classes:b,ref:n,children:c}))}))}),Qe=Je,Ze=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],et=Z("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>E({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),tt=Z(Qe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ot=l.forwardRef(function(t,n){var o,i,r,s,c,u;const k=fe({name:"MuiModal",props:t}),{BackdropComponent:y=tt,BackdropProps:m,classes:p,className:v,closeAfterTransition:d=!1,children:N,component:P,components:g={},componentsProps:T={},disableAutoFocus:a=!1,disableEnforceFocus:b=!1,disableEscapeKeyDown:f=!1,disablePortal:L=!1,disableRestoreFocus:R=!1,disableScrollLock:I=!1,hideBackdrop:B=!1,keepMounted:U=!1,slotProps:x,slots:S,theme:M}=k,F=Q(k,Ze),[C,W]=l.useState(!0),O={closeAfterTransition:d,disableAutoFocus:a,disableEnforceFocus:b,disableEscapeKeyDown:f,disablePortal:L,disableRestoreFocus:R,disableScrollLock:I,hideBackdrop:B,keepMounted:U},w=E({},k,O,{exited:C}),z=(o=(i=S==null?void 0:S.root)!=null?i:g.Root)!=null?o:et,_=(r=(s=S==null?void 0:S.backdrop)!=null?s:g.Backdrop)!=null?r:y,$=(c=x==null?void 0:x.root)!=null?c:T.root,H=(u=x==null?void 0:x.backdrop)!=null?u:T.backdrop;return A(Ye,E({slots:{root:z,backdrop:_},slotProps:{root:()=>E({},re($,w),!Pe(z)&&{as:P,theme:M},{className:J(v,$==null?void 0:$.className,p==null?void 0:p.root,!w.open&&w.exited&&(p==null?void 0:p.hidden))}),backdrop:()=>E({},m,re(H,w),{className:J(H==null?void 0:H.className,p==null?void 0:p.backdrop)})},onTransitionEnter:()=>W(!1),onTransitionExited:()=>W(!0),ref:n},F,O,{children:N}))}),bt=ot;export{Qe as B,Ae as F,bt as M};
//# sourceMappingURL=Modal-025d3f47.js.map
