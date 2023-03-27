import{_ as F}from"./extends-98964cd2.js";import{_ as E}from"./objectWithoutPropertiesLoose-4f48578a.js";import{c as I,u as L}from"./Button-7d415009.js";import{R as v,r as V}from"./index-f1f749bf.js";import{p as T}from"./index-4d501b15.js";import{C as W}from"./Col-1f1afacc.js";var O={},G={get exports(){return O},set exports(e){O=e}},P={},H={get exports(){return P},set exports(e){P=e}};(function(e,l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=r;function r(p){function n(o,s,a,u,d,m){var i=u||"<<anonymous>>",c=m||a;if(s[a]==null)return o?new Error("Required "+d+" `"+c+"` was not specified "+("in `"+i+"`.")):null;for(var x=arguments.length,f=Array(x>6?x-6:0),y=6;y<x;y++)f[y-6]=arguments[y];return p.apply(void 0,[s,a,i,d,c].concat(f))}var t=n.bind(null,!1);return t.isRequired=n.bind(null,!0),t}e.exports=l.default})(H,P);(function(e,l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=t;var r=P,p=n(r);function n(o){return o&&o.__esModule?o:{default:o}}function t(){for(var o=arguments.length,s=Array(o),a=0;a<o;a++)s[a]=arguments[a];function u(){for(var d=arguments.length,m=Array(d),i=0;i<d;i++)m[i]=arguments[i];var c=null;return s.forEach(function(x){if(c==null){var f=x.apply(void 0,m);f!=null&&(c=f)}}),c}return(0,p.default)(u)}e.exports=l.default})(G,O);var J=["as","className","type","tooltip"],K={type:T.string,tooltip:T.bool,as:T.elementType},R=v.forwardRef(function(e,l){var r=e.as,p=r===void 0?"div":r,n=e.className,t=e.type,o=t===void 0?"valid":t,s=e.tooltip,a=s===void 0?!1:s,u=E(e,J);return v.createElement(p,F({},u,{ref:l,className:I(n,o+"-"+(a?"tooltip":"feedback"))}))});R.displayName="Feedback";R.propTypes=K;const Q=R;var U=v.createContext({controlId:void 0});const k=U;var X=["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"],q=v.forwardRef(function(e,l){var r=e.bsPrefix,p=e.bsCustomPrefix,n=e.type,t=e.size,o=e.htmlSize,s=e.id,a=e.className,u=e.isValid,d=u===void 0?!1:u,m=e.isInvalid,i=m===void 0?!1:m,c=e.plaintext,x=e.readOnly,f=e.custom,y=e.as,w=y===void 0?"input":y,A=E(e,X),M=V.useContext(k),j=M.controlId,S=f?[p,"custom"]:[r,"form-control"],B=S[0],D=S[1];r=L(B,D);var b;if(c){var N;b=(N={},N[r+"-plaintext"]=!0,N)}else if(n==="file"){var g;b=(g={},g[r+"-file"]=!0,g)}else if(n==="range"){var $;b=($={},$[r+"-range"]=!0,$)}else if(w==="select"&&f){var C;b=(C={},C[r+"-select"]=!0,C[r+"-select-"+t]=t,C)}else{var h;b=(h={},h[r]=!0,h[r+"-"+t]=t,h)}return v.createElement(w,F({},A,{type:n,size:o,ref:l,readOnly:x,id:s||j,className:I(a,b,d&&"is-valid",i&&"is-invalid")}))});q.displayName="FormControl";const le=Object.assign(q,{Feedback:Q});var Y=["as","bsPrefix","column","srOnly","className","htmlFor"],Z={column:!1,srOnly:!1},z=v.forwardRef(function(e,l){var r=e.as,p=r===void 0?"label":r,n=e.bsPrefix,t=e.column,o=e.srOnly,s=e.className,a=e.htmlFor,u=E(e,Y),d=V.useContext(k),m=d.controlId;n=L(n,"form-label");var i="col-form-label";typeof t=="string"&&(i=i+" "+i+"-"+t);var c=I(s,n,o&&"sr-only",t&&i);return a=a||m,t?v.createElement(W,F({ref:l,as:"label",className:c,htmlFor:a},u)):v.createElement(p,F({ref:l,className:c,htmlFor:a},u))});z.displayName="FormLabel";z.defaultProps=Z;const ne=z;export{k as F,Q as a,le as b,ne as c};
//# sourceMappingURL=FormLabel-897d2462.js.map
