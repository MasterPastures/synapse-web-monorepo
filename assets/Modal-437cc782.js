import{_ as pe}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as C}from"./extends-98964cd2.js";import{u as Be,c as G}from"./Button-5637ed55.js";import{e as He,o as V,a as k,l as Le,c as Ie,r as $e,d as Xe}from"./createWithBsPrefix-f259edae.js";import{u as Ye,b as qe,c as Ke,q as F,a as Je}from"./contains-584479aa.js";import{r as u,R as f}from"./index-8db94870.js";import{s as j,C as Qe,d as Ze,F as ze,t as _e}from"./Alert-fbdd8ab9.js";import{P as d}from"./index-58d3fd43.js";import{R as en}from"./index-8ce4a492.js";import{a as nn,r as on}from"./ToastMessage-97113c06.js";import{_ as tn}from"./inheritsLoose-c82a83d4.js";function an(e){var n=u.useRef(e);return n.current=e,n}function Ue(e){var n=an(e);u.useEffect(function(){return function(){return n.current()}},[])}var ve;function me(e){if((!ve&&ve!==0||e)&&He){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),ve=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return ve}function Te(e){e===void 0&&(e=V());try{var n=e.activeElement;return!n||!n.nodeName?null:n}catch{return e.body}}function rn(e){return"nodeType"in e&&e.nodeType===document.DOCUMENT_NODE}function De(e){return"window"in e&&e.window===e?e:rn(e)&&e.defaultView||!1}function sn(e){return e&&e.tagName.toLowerCase()==="body"}function ln(e){var n=De(e)?V():V(e),a=De(e)||n.defaultView;return n.body.clientWidth<a.innerWidth}function dn(e){var n=De(e);return n||sn(e)?ln(e):e.scrollHeight>e.clientHeight}var un=["template","script","style"],cn=function(n){var a=n.nodeType,o=n.tagName;return a===1&&un.indexOf(o.toLowerCase())===-1},We=function(n,a,o){[].forEach.call(n.children,function(t){a.indexOf(t)===-1&&cn(t)&&o(t)})};function he(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}function fn(e,n){var a=n.dialog,o=n.backdrop;We(e,[a,o],function(t){return he(!0,t)})}function vn(e,n){var a=n.dialog,o=n.backdrop;We(e,[a,o],function(t){return he(!1,t)})}function mn(e,n){var a=-1;return e.some(function(o,t){return n(o,t)?(a=t,!0):!1}),a}var hn=function(){function e(a){var o=a===void 0?{}:a,t=o.hideSiblingNodes,r=t===void 0?!0:t,i=o.handleContainerOverflow,s=i===void 0?!0:i;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=r,this.handleContainerOverflow=s,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=me()}var n=e.prototype;return n.isContainerOverflowing=function(o){var t=this.data[this.containerIndexFromModal(o)];return t&&t.overflowing},n.containerIndexFromModal=function(o){return mn(this.data,function(t){return t.modals.indexOf(o)!==-1})},n.setContainerStyle=function(o,t){var r={overflow:"hidden"};o.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},o.overflowing&&(r.paddingRight=parseInt(j(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),j(t,r)},n.removeContainerStyle=function(o,t){Object.assign(t.style,o.style)},n.add=function(o,t,r){var i=this.modals.indexOf(o),s=this.containers.indexOf(t);if(i!==-1)return i;if(i=this.modals.length,this.modals.push(o),this.hideSiblingNodes&&fn(t,o),s!==-1)return this.data[s].modals.push(o),i;var v={modals:[o],classes:r?r.split(/\s+/):[],overflowing:dn(t)};return this.handleContainerOverflow&&this.setContainerStyle(v,t),v.classes.forEach(nn.bind(null,t)),this.containers.push(t),this.data.push(v),i},n.remove=function(o){var t=this.modals.indexOf(o);if(t!==-1){var r=this.containerIndexFromModal(o),i=this.data[r],s=this.containers[r];if(i.modals.splice(i.modals.indexOf(o),1),this.modals.splice(t,1),i.modals.length===0)i.classes.forEach(on.bind(null,s)),this.handleContainerOverflow&&this.removeContainerStyle(i,s),this.hideSiblingNodes&&vn(s,o),this.containers.splice(r,1),this.data.splice(r,1);else if(this.hideSiblingNodes){var v=i.modals[i.modals.length-1],g=v.backdrop,p=v.dialog;he(!1,p),he(!1,g)}}},n.isTopModal=function(o){return!!this.modals.length&&this.modals[this.modals.length-1]===o},e}();const ge=hn;var Oe=function(n){var a;return typeof document>"u"?null:n==null?V().body:(typeof n=="function"&&(n=n()),n&&"current"in n&&(n=n.current),(a=n)!=null&&a.nodeType&&n||null)};function pn(e,n){var a=u.useState(function(){return Oe(e)}),o=a[0],t=a[1];if(!o){var r=Oe(e);r&&t(r)}return u.useEffect(function(){n&&o&&n(o)},[n,o]),u.useEffect(function(){var i=Oe(e);i!==o&&t(i)},[e,o]),o}var Re;function gn(){return Re||(Re=new ge),Re}function bn(e){var n=e||gn(),a=u.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:function(t,r){return n.add(a.current,t,r)},remove:function(){return n.remove(a.current)},isTopModal:function(){return n.isTopModal(a.current)},setDialogRef:u.useCallback(function(o){a.current.dialog=o},[]),setBackdropRef:u.useCallback(function(o){a.current.backdrop=o},[])})}var Ae=u.forwardRef(function(e,n){var a=e.show,o=a===void 0?!1:a,t=e.role,r=t===void 0?"dialog":t,i=e.className,s=e.style,v=e.children,g=e.backdrop,p=g===void 0?!0:g,X=e.keyboard,be=X===void 0?!0:X,w=e.onBackdropClick,N=e.onEscapeKeyDown,B=e.transition,Y=e.backdropTransition,q=e.autoFocus,T=q===void 0?!0:q,J=e.enforceFocus,Ee=J===void 0?!0:J,Q=e.restoreFocus,ye=Q===void 0?!0:Q,Ce=e.restoreFocusOptions,Z=e.renderDialog,H=e.renderBackdrop,we=H===void 0?function(c){return f.createElement("div",c)}:H,_=e.manager,ee=e.container,ne=e.containerClassName,I=e.onShow,A=e.onHide,oe=A===void 0?function(){}:A,te=e.onExit,ae=e.onExited,xe=e.onExiting,re=e.onEnter,ke=e.onEntering,ie=e.onEntered,P=pe(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),y=pn(ee),m=bn(_),se=Ye(),b=qe(o),le=u.useState(!o),x=le[0],L=le[1],S=u.useRef(null);u.useImperativeHandle(n,function(){return m},[m]),He&&!b&&o&&(S.current=Te()),!B&&!o&&!x?L(!0):o&&x&&L(!1);var $=k(function(){if(m.add(y,ne),z.current=Le(document,"keydown",de),K.current=Le(document,"focus",function(){return setTimeout(Ne)},!0),I&&I(),T){var c=Te(document);m.dialog&&c&&!Ke(m.dialog,c)&&(S.current=c,m.dialog.focus())}}),M=k(function(){if(m.remove(),z.current==null||z.current(),K.current==null||K.current(),ye){var c;(c=S.current)==null||c.focus==null||c.focus(Ce),S.current=null}});u.useEffect(function(){!o||!y||$()},[o,y,$]),u.useEffect(function(){x&&M()},[x,M]),Ue(function(){M()});var Ne=k(function(){if(!(!Ee||!se()||!m.isTopModal())){var c=Te();m.dialog&&c&&!Ke(m.dialog,c)&&m.dialog.focus()}}),Se=k(function(c){c.target===c.currentTarget&&(w==null||w(c),p===!0&&oe())}),de=k(function(c){be&&c.keyCode===27&&m.isTopModal()&&(N==null||N(c),c.defaultPrevented||oe())}),K=u.useRef(),z=u.useRef(),Me=function(){L(!0);for(var fe=arguments.length,h=new Array(fe),l=0;l<fe;l++)h[l]=arguments[l];ae==null||ae.apply(void 0,h)},U=B;if(!y||!(o||U&&!x))return null;var ue=C({role:r,ref:m.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},P,{style:s,className:i,tabIndex:-1}),W=Z?Z(ue):f.createElement("div",ue,f.cloneElement(v,{role:"document"}));U&&(W=f.createElement(U,{appear:!0,unmountOnExit:!0,in:!!o,onExit:te,onExiting:xe,onExited:Me,onEnter:re,onEntering:ke,onEntered:ie},W));var O=null;if(p){var ce=Y;O=we({ref:m.setBackdropRef,onClick:Se}),ce&&(O=f.createElement(ce,{appear:!0,in:!!o},O))}return f.createElement(f.Fragment,null,en.createPortal(f.createElement(f.Fragment,null,O,W),y))}),En={show:d.bool,container:d.any,onShow:d.func,onHide:d.func,backdrop:d.oneOfType([d.bool,d.oneOf(["static"])]),renderDialog:d.func,renderBackdrop:d.func,onEscapeKeyDown:d.func,onBackdropClick:d.func,containerClassName:d.string,keyboard:d.bool,transition:d.elementType,backdropTransition:d.elementType,autoFocus:d.bool,enforceFocus:d.bool,restoreFocus:d.bool,restoreFocusOptions:d.shape({preventScroll:d.bool}),onEnter:d.func,onEntering:d.func,onEntered:d.func,onExit:d.func,onExiting:d.func,onExited:d.func,manager:d.instanceOf(ge)};Ae.displayName="Modal";Ae.propTypes=En;const yn=Object.assign(Ae,{Manager:ge});var D={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},Cn=function(e){tn(n,e);function n(){return e.apply(this,arguments)||this}var a=n.prototype;return a.adjustAndStore=function(t,r,i){var s,v=r.style[t];r.dataset[t]=v,j(r,(s={},s[t]=parseFloat(j(r,t))+i+"px",s))},a.restore=function(t,r){var i=r.dataset[t];if(i!==void 0){var s;delete r.dataset[t],j(r,(s={},s[t]=i,s))}},a.setContainerStyle=function(t,r){var i=this;if(e.prototype.setContainerStyle.call(this,t,r),!!t.overflowing){var s=me();F(r,D.FIXED_CONTENT).forEach(function(v){return i.adjustAndStore("paddingRight",v,s)}),F(r,D.STICKY_CONTENT).forEach(function(v){return i.adjustAndStore("marginRight",v,-s)}),F(r,D.NAVBAR_TOGGLER).forEach(function(v){return i.adjustAndStore("marginRight",v,s)})}},a.removeContainerStyle=function(t,r){var i=this;e.prototype.removeContainerStyle.call(this,t,r),F(r,D.FIXED_CONTENT).forEach(function(s){return i.restore("paddingRight",s)}),F(r,D.STICKY_CONTENT).forEach(function(s){return i.restore("marginRight",s)}),F(r,D.NAVBAR_TOGGLER).forEach(function(s){return i.restore("marginRight",s)})},n}(ge);const wn=Ie("modal-body");var xn=f.createContext({onHide:function(){}});const je=xn;var kn=["bsPrefix","className","contentClassName","centered","size","children","scrollable"],Ge=f.forwardRef(function(e,n){var a=e.bsPrefix,o=e.className,t=e.contentClassName,r=e.centered,i=e.size,s=e.children,v=e.scrollable,g=pe(e,kn);a=Be(a,"modal");var p=a+"-dialog";return f.createElement("div",C({},g,{ref:n,className:G(p,o,i&&a+"-"+i,r&&p+"-centered",v&&p+"-scrollable")}),f.createElement("div",{className:G(a+"-content",t)},s))});Ge.displayName="ModalDialog";const Ve=Ge,Nn=Ie("modal-footer");var Sn=["bsPrefix","closeLabel","closeButton","onHide","className","children"],Mn={closeLabel:"Close",closeButton:!1},Pe=f.forwardRef(function(e,n){var a=e.bsPrefix,o=e.closeLabel,t=e.closeButton,r=e.onHide,i=e.className,s=e.children,v=pe(e,Sn);a=Be(a,"modal-header");var g=u.useContext(je),p=k(function(){g&&g.onHide(),r&&r()});return f.createElement("div",C({ref:n},v,{className:G(i,a)}),s,t&&f.createElement(Qe,{label:o,onClick:p}))});Pe.displayName="ModalHeader";Pe.defaultProps=Mn;const Tn=Pe;var On=Ze("h4");const Rn=Ie("modal-title",{Component:On});var Fn=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],Fe,Dn={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:Ve};function Bn(e){return f.createElement(ze,C({},e,{timeout:null}))}function Hn(e){return f.createElement(ze,C({},e,{timeout:null}))}var E=f.forwardRef(function(e,n){var a=e.bsPrefix,o=e.className,t=e.style,r=e.dialogClassName,i=e.contentClassName,s=e.children,v=e.dialogAs,g=e["aria-labelledby"],p=e["aria-describedby"],X=e["aria-label"],be=e.show,w=e.animation,N=e.backdrop,B=e.keyboard,Y=e.onEscapeKeyDown,q=e.onShow,T=e.onHide,J=e.container,Ee=e.autoFocus,Q=e.enforceFocus,ye=e.restoreFocus,Ce=e.restoreFocusOptions,Z=e.onEntered,H=e.onExit,we=e.onExiting,_=e.onEnter,ee=e.onEntering,ne=e.onExited,I=e.backdropClassName,A=e.manager,oe=pe(e,Fn),te=u.useState({}),ae=te[0],xe=te[1],re=u.useState(!1),ke=re[0],ie=re[1],P=u.useRef(!1),y=u.useRef(!1),m=u.useRef(null),se=Je(),b=se[0],le=se[1],x=k(T);a=Be(a,"modal"),u.useImperativeHandle(n,function(){return{get _modal(){return b}}},[b]);var L=u.useMemo(function(){return{onHide:x}},[x]);function S(){return A||(Fe||(Fe=new Cn),Fe)}function $(h){if(He){var l=S().isContainerOverflowing(b),R=h.scrollHeight>V(h).documentElement.clientHeight;xe({paddingRight:l&&!R?me():void 0,paddingLeft:!l&&R?me():void 0})}}var M=k(function(){b&&$(b.dialog)});Ue(function(){$e(window,"resize",M),m.current&&m.current()});var Ne=function(){P.current=!0},Se=function(l){P.current&&b&&l.target===b.dialog&&(y.current=!0),P.current=!1},de=function(){ie(!0),m.current=_e(b.dialog,function(){ie(!1)})},K=function(l){l.target===l.currentTarget&&de()},z=function(l){if(N==="static"){K(l);return}if(y.current||l.target!==l.currentTarget){y.current=!1;return}T==null||T()},Me=function(l){!B&&N==="static"?(l.preventDefault(),de()):B&&Y&&Y(l)},U=function(l,R){l&&(l.style.display="block",$(l)),_==null||_(l,R)},ue=function(l){m.current==null||m.current(),H==null||H(l)},W=function(l,R){ee==null||ee(l,R),Xe(window,"resize",M)},O=function(l){l&&(l.style.display=""),ne==null||ne(l),$e(window,"resize",M)},ce=u.useCallback(function(h){return f.createElement("div",C({},h,{className:G(a+"-backdrop",I,!w&&"show")}))},[w,I,a]),c=C({},t,ae);w||(c.display="block");var fe=function(l){return f.createElement("div",C({role:"dialog"},l,{style:c,className:G(o,a,ke&&a+"-static"),onClick:N?z:void 0,onMouseUp:Se,"aria-label":X,"aria-labelledby":g,"aria-describedby":p}),f.createElement(v,C({},oe,{onMouseDown:Ne,className:r,contentClassName:i}),s))};return f.createElement(je.Provider,{value:L},f.createElement(yn,{show:be,ref:le,backdrop:N,container:J,keyboard:!0,autoFocus:Ee,enforceFocus:Q,restoreFocus:ye,restoreFocusOptions:Ce,onEscapeKeyDown:Me,onShow:q,onHide:T,onEnter:U,onEntering:W,onEntered:Z,onExit:ue,onExiting:we,onExited:O,manager:S(),containerClassName:a+"-open",transition:w?Bn:void 0,backdropTransition:w?Hn:void 0,renderBackdrop:ce,renderDialog:fe}))});E.displayName="Modal";E.defaultProps=Dn;E.Body=wn;E.Header=Tn;E.Title=Rn;E.Footer=Nn;E.Dialog=Ve;E.TRANSITION_DURATION=300;E.BACKDROP_TRANSITION_DURATION=150;const Vn=E;export{Vn as M};
//# sourceMappingURL=Modal-437cc782.js.map
