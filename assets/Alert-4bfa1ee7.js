import{_ as f}from"./extends-9cd95192.js";import{_ as w,u as _,c as k,S as E}from"./Button-a16e56e5.js";import{R as r}from"./index-f1f749bf.js";import{u as y}from"./hook-3d9ea2b9.js";import{c as u,u as H}from"./createWithBsPrefix-d1384812.js";import{C as S,d as g,F as v}from"./divWithClassName-f0cd5fab.js";var B=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],p=g("h4");p.displayName="DivStyledAsH4";var R=u("alert-heading",{Component:p}),W=u("alert-link",{Component:E}),D={show:!0,transition:v,closeLabel:"Close alert"},a=r.forwardRef(function(h,b){var e=y(h,{show:"onClose"}),C=e.bsPrefix,i=e.show,x=e.closeLabel,A=e.className,P=e.children,o=e.variant,l=e.onClose,n=e.dismissible,d=e.transition,c=w(e,B),s=_(C,"alert"),L=H(function(N){l&&l(!1,N)}),t=d===!0?v:d,m=r.createElement("div",f({role:"alert"},t?void 0:c,{ref:b,className:k(A,s,o&&s+"-"+o,n&&s+"-dismissible")}),n&&r.createElement(S,{onClick:L,label:x}),P);return t?r.createElement(t,f({unmountOnExit:!0},c,{ref:void 0,in:i}),m):i?m:null});a.displayName="Alert";a.defaultProps=D;a.Link=W;a.Heading=R;const q=a;export{q as A};
//# sourceMappingURL=Alert-4bfa1ee7.js.map