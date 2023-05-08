import{i as T,b as Z,r as z,S,a as k}from"./isArray-5e3f9107.js";import{b as rr,k as _,c as G,s as tr,a as er,d as nr,U as P,S as ar,g as or}from"./_Uint8Array-2ff739b2.js";import{d as I,e as sr}from"./_MapCache-56fce68f.js";import{aT as d,bV as D,aU as ir,bW as cr,a_ as j,bX as b,aQ as K,aV as fr}from"./EntityTypeUtils-2e4d4a81.js";var x=Object.create,ur=function(){function r(){}return function(t){if(!d(t))return{};if(x)return x(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}}();const gr=ur;function lr(r,t){var e=-1,a=r.length;for(t||(t=Array(a));++e<a;)t[e]=r[e];return t}function br(r,t){for(var e=-1,a=r==null?0:r.length;++e<a&&t(r[e],e,r)!==!1;);return r}function N(r,t,e){t=="__proto__"&&I?I(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}var pr=Object.prototype,yr=pr.hasOwnProperty;function R(r,t,e){var a=r[t];(!(yr.call(r,t)&&sr(a,e))||e===void 0&&!(t in r))&&N(r,t,e)}function p(r,t,e,a){var g=!e;e||(e={});for(var s=-1,o=t.length;++s<o;){var i=t[s],c=a?a(e[i],r[i],i,e,r):void 0;c===void 0&&(c=r[i]),g?N(e,i,c):R(e,i,c)}return e}function Tr(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var dr=Object.prototype,jr=dr.hasOwnProperty;function Ar(r){if(!d(r))return Tr(r);var t=D(r),e=[];for(var a in r)a=="constructor"&&(t||!jr.call(r,a))||e.push(a);return e}function A(r){return ir(r)?rr(r,!0):Ar(r)}var Or=cr(Object.getPrototypeOf,Object);const O=Or;var $r="[object Object]",hr=Function.prototype,vr=Object.prototype,q=hr.toString,mr=vr.hasOwnProperty,wr=q.call(Object);function Yt(r){if(!T(r)||Z(r)!=$r)return!1;var t=O(r);if(t===null)return!0;var e=mr.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&q.call(e)==wr}function Sr(r,t){return r&&p(t,_(t),r)}function Pr(r,t){return r&&p(t,A(t),r)}var W=typeof exports=="object"&&exports&&!exports.nodeType&&exports,C=W&&typeof module=="object"&&module&&!module.nodeType&&module,Ir=C&&C.exports===W,U=Ir?z.Buffer:void 0,E=U?U.allocUnsafe:void 0;function xr(r,t){if(t)return r.slice();var e=r.length,a=E?E(e):new r.constructor(e);return r.copy(a),a}function Cr(r,t){return p(r,G(r),t)}var Ur=Object.getOwnPropertySymbols,Er=Ur?function(r){for(var t=[];r;)er(t,G(r)),r=O(r);return t}:tr;const Q=Er;function Fr(r,t){return p(r,Q(r),t)}function Lr(r){return nr(r,A,Q)}var Mr=Object.prototype,Br=Mr.hasOwnProperty;function _r(r){var t=r.length,e=new r.constructor(t);return t&&typeof r[0]=="string"&&Br.call(r,"index")&&(e.index=r.index,e.input=r.input),e}function $(r){var t=new r.constructor(r.byteLength);return new P(t).set(new P(r)),t}function Gr(r,t){var e=t?$(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.byteLength)}var Dr=/\w*$/;function Kr(r){var t=new r.constructor(r.source,Dr.exec(r));return t.lastIndex=r.lastIndex,t}var F=S?S.prototype:void 0,L=F?F.valueOf:void 0;function Nr(r){return L?Object(L.call(r)):{}}function Rr(r,t){var e=t?$(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var qr="[object Boolean]",Wr="[object Date]",Qr="[object Map]",Vr="[object Number]",Xr="[object RegExp]",Yr="[object Set]",Hr="[object String]",Jr="[object Symbol]",Zr="[object ArrayBuffer]",zr="[object DataView]",kr="[object Float32Array]",rt="[object Float64Array]",tt="[object Int8Array]",et="[object Int16Array]",nt="[object Int32Array]",at="[object Uint8Array]",ot="[object Uint8ClampedArray]",st="[object Uint16Array]",it="[object Uint32Array]";function ct(r,t,e){var a=r.constructor;switch(t){case Zr:return $(r);case qr:case Wr:return new a(+r);case zr:return Gr(r,e);case kr:case rt:case tt:case et:case nt:case at:case ot:case st:case it:return Rr(r,e);case Qr:return new a;case Vr:case Hr:return new a(r);case Xr:return Kr(r);case Yr:return new a;case Jr:return Nr(r)}}function ft(r){return typeof r.constructor=="function"&&!D(r)?gr(O(r)):{}}var ut="[object Map]";function gt(r){return T(r)&&j(r)==ut}var M=b&&b.isMap,lt=M?K(M):gt;const bt=lt;var pt="[object Set]";function yt(r){return T(r)&&j(r)==pt}var B=b&&b.isSet,Tt=B?K(B):yt;const dt=Tt;var jt=1,At=2,Ot=4,V="[object Arguments]",$t="[object Array]",ht="[object Boolean]",vt="[object Date]",mt="[object Error]",X="[object Function]",wt="[object GeneratorFunction]",St="[object Map]",Pt="[object Number]",Y="[object Object]",It="[object RegExp]",xt="[object Set]",Ct="[object String]",Ut="[object Symbol]",Et="[object WeakMap]",Ft="[object ArrayBuffer]",Lt="[object DataView]",Mt="[object Float32Array]",Bt="[object Float64Array]",_t="[object Int8Array]",Gt="[object Int16Array]",Dt="[object Int32Array]",Kt="[object Uint8Array]",Nt="[object Uint8ClampedArray]",Rt="[object Uint16Array]",qt="[object Uint32Array]",n={};n[V]=n[$t]=n[Ft]=n[Lt]=n[ht]=n[vt]=n[Mt]=n[Bt]=n[_t]=n[Gt]=n[Dt]=n[St]=n[Pt]=n[Y]=n[It]=n[xt]=n[Ct]=n[Ut]=n[Kt]=n[Nt]=n[Rt]=n[qt]=!0;n[mt]=n[X]=n[Et]=!1;function y(r,t,e,a,g,s){var o,i=t&jt,c=t&At,H=t&Ot;if(e&&(o=g?e(r,a,g,s):e(r)),o!==void 0)return o;if(!d(r))return r;var h=k(r);if(h){if(o=_r(r),!i)return lr(r,o)}else{var l=j(r),v=l==X||l==wt;if(fr(r))return xr(r,i);if(l==Y||l==V||v&&!g){if(o=c||v?{}:ft(r),!i)return c?Fr(r,Pr(o,r)):Cr(r,Sr(o,r))}else{if(!n[l])return g?r:{};o=ct(r,l,i)}}s||(s=new ar);var m=s.get(r);if(m)return m;s.set(r,o),dt(r)?r.forEach(function(f){o.add(y(f,t,e,f,r,s))}):bt(r)&&r.forEach(function(f,u){o.set(u,y(f,t,e,u,r,s))});var J=H?c?Lr:or:c?A:_,w=h?void 0:J(r);return br(w||r,function(f,u){w&&(u=f,f=r[u]),R(o,u,y(f,t,e,u,r,s))}),o}export{p as a,y as b,lr as c,R as d,N as e,xr as f,Lr as g,Rr as h,Yt as i,ft as j,A as k,gr as l,br as m,Sr as n,O as o,bt as p,dt as q};
//# sourceMappingURL=_baseClone-206cc617.js.map