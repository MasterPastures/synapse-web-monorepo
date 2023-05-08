import{j as y}from"./jsx-runtime-095bf462.js";import{Q as $,n as q}from"./EntityTypeUtils-2e4d4a81.js";import{r as D}from"./index-8db94870.js";import{t as j}from"./Typography-fd50ec33.js";import{F as z}from"./Fade-e4fb8afd.js";import{C as G,f as U,h as V,T as Q,i as W,j as K,k as X,l as Y,c as Z}from"./styled-f64e11ba.js";import{_ as J}from"./extends-98964cd2.js";import{Q as ee}from"./queryClient-ac2ec801.js";let A;typeof document=="object"&&(A=U({key:"css",prepend:!0}));function te(e){const{injectFirst:r,children:t}=e;return r&&A?y(G,{value:A,children:t}):t}const re=typeof Symbol=="function"&&Symbol.for,ae=re?Symbol.for("mui.nested"):"__THEME_NESTED__";function ne(e,r){return typeof r=="function"?r(e):J({},e,r)}function ie(e){const{children:r,theme:t}=e,a=V(),i=D.useMemo(()=>{const n=a===null?t:ne(a,t);return n!=null&&(n[ae]=a!==null),n},[t,a]);return y(Q.Provider,{value:i,children:r})}const se={};function oe(e){const r=W();return y(K.Provider,{value:typeof r=="object"?r:se,children:e.children})}function fe(e){const{children:r,theme:t}=e;return y(ie,{theme:t,children:y(oe,{children:r})})}const he=/^\s+/,de=/\s+$/;function s(e,r){if(e=e||"",r=r||{},e instanceof s)return e;if(!(this instanceof s))return new s(e,r);var t=ue(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||t.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}s.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),r,t,a,i,n,o;return r=e.r/255,t=e.g/255,a=e.b/255,r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),t<=.03928?n=t/12.92:n=Math.pow((t+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*i+.7152*n+.0722*o},setAlpha:function(e){return this._a=N(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=w(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=w(this._r,this._g,this._b),r=Math.round(e.h*360),t=Math.round(e.s*100),a=Math.round(e.v*100);return this._a==1?"hsv("+r+", "+t+"%, "+a+"%)":"hsva("+r+", "+t+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var e=R(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=R(this._r,this._g,this._b),r=Math.round(e.h*360),t=Math.round(e.s*100),a=Math.round(e.l*100);return this._a==1?"hsl("+r+", "+t+"%, "+a+"%)":"hsla("+r+", "+t+"%, "+a+"%, "+this._roundA+")"},toHex:function(e){return C(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return pe(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(h(this._r,255)*100)+"%",g:Math.round(h(this._g,255)*100)+"%",b:Math.round(h(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(h(this._r,255)*100)+"%, "+Math.round(h(this._g,255)*100)+"%, "+Math.round(h(this._b,255)*100)+"%)":"rgba("+Math.round(h(this._r,255)*100)+"%, "+Math.round(h(this._g,255)*100)+"%, "+Math.round(h(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Pe[C(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var r="#"+H(this._r,this._g,this._b,this._a),t=r,a=this._gradientType?"GradientType = 1, ":"";if(e){var i=s(e);t="#"+H(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+t+")"},toString:function(e){var r=!!e;e=e||this._format;var t=!1,a=this._a<1&&this._a>=0,i=!r&&a&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return i?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString())},clone:function(){return s(this.toString())},_applyModification:function(e,r){var t=e.apply(null,[this].concat([].slice.call(r)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(ve,arguments)},brighten:function(){return this._applyModification(_e,arguments)},darken:function(){return this._applyModification(xe,arguments)},desaturate:function(){return this._applyModification(be,arguments)},saturate:function(){return this._applyModification(me,arguments)},greyscale:function(){return this._applyModification(ye,arguments)},spin:function(){return this._applyModification(Me,arguments)},_applyCombination:function(e,r){return e.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(Se,arguments)},complement:function(){return this._applyCombination(ke,arguments)},monochromatic:function(){return this._applyCombination(Te,arguments)},splitcomplement:function(){return this._applyCombination(Ae,arguments)},triad:function(){return this._applyCombination(F,[3])},tetrad:function(){return this._applyCombination(F,[4])}};s.fromRatio=function(e,r){if(typeof e=="object"){var t={};for(var a in e)e.hasOwnProperty(a)&&(a==="a"?t[a]=e[a]:t[a]=M(e[a]));e=t}return s(e,r)};function ue(e){var r={r:0,g:0,b:0},t=1,a=null,i=null,n=null,o=!1,d=!1;return typeof e=="string"&&(e=He(e)),typeof e=="object"&&(v(e.r)&&v(e.g)&&v(e.b)?(r=le(e.r,e.g,e.b),o=!0,d=String(e.r).substr(-1)==="%"?"prgb":"rgb"):v(e.h)&&v(e.s)&&v(e.v)?(a=M(e.s),i=M(e.v),r=ge(e.h,a,i),o=!0,d="hsv"):v(e.h)&&v(e.s)&&v(e.l)&&(a=M(e.s),n=M(e.l),r=ce(e.h,a,n),o=!0,d="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=N(t),{ok:o,format:e.format||d,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:t}}function le(e,r,t){return{r:h(e,255)*255,g:h(r,255)*255,b:h(t,255)*255}}function R(e,r,t){e=h(e,255),r=h(r,255),t=h(t,255);var a=Math.max(e,r,t),i=Math.min(e,r,t),n,o,d=(a+i)/2;if(a==i)n=o=0;else{var u=a-i;switch(o=d>.5?u/(2-a-i):u/(a+i),a){case e:n=(r-t)/u+(r<t?6:0);break;case r:n=(t-e)/u+2;break;case t:n=(e-r)/u+4;break}n/=6}return{h:n,s:o,l:d}}function ce(e,r,t){var a,i,n;e=h(e,360),r=h(r,100),t=h(t,100);function o(g,x,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?g+(x-g)*6*p:p<1/2?x:p<2/3?g+(x-g)*(2/3-p)*6:g}if(r===0)a=i=n=t;else{var d=t<.5?t*(1+r):t+r-t*r,u=2*t-d;a=o(u,d,e+1/3),i=o(u,d,e),n=o(u,d,e-1/3)}return{r:a*255,g:i*255,b:n*255}}function w(e,r,t){e=h(e,255),r=h(r,255),t=h(t,255);var a=Math.max(e,r,t),i=Math.min(e,r,t),n,o,d=a,u=a-i;if(o=a===0?0:u/a,a==i)n=0;else{switch(a){case e:n=(r-t)/u+(r<t?6:0);break;case r:n=(t-e)/u+2;break;case t:n=(e-r)/u+4;break}n/=6}return{h:n,s:o,v:d}}function ge(e,r,t){e=h(e,360)*6,r=h(r,100),t=h(t,100);var a=Math.floor(e),i=e-a,n=t*(1-r),o=t*(1-i*r),d=t*(1-(1-i)*r),u=a%6,g=[t,o,n,n,d,t][u],x=[d,t,t,o,n,n][u],p=[n,n,d,t,t,o][u];return{r:g*255,g:x*255,b:p*255}}function C(e,r,t,a){var i=[m(Math.round(e).toString(16)),m(Math.round(r).toString(16)),m(Math.round(t).toString(16))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function pe(e,r,t,a,i){var n=[m(Math.round(e).toString(16)),m(Math.round(r).toString(16)),m(Math.round(t).toString(16)),m(B(a))];return i&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)&&n[3].charAt(0)==n[3].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function H(e,r,t,a){var i=[m(B(a)),m(Math.round(e).toString(16)),m(Math.round(r).toString(16)),m(Math.round(t).toString(16))];return i.join("")}s.equals=function(e,r){return!e||!r?!1:s(e).toRgbString()==s(r).toRgbString()};s.random=function(){return s.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function be(e,r){r=r===0?0:r||10;var t=s(e).toHsl();return t.s-=r/100,t.s=k(t.s),s(t)}function me(e,r){r=r===0?0:r||10;var t=s(e).toHsl();return t.s+=r/100,t.s=k(t.s),s(t)}function ye(e){return s(e).desaturate(100)}function ve(e,r){r=r===0?0:r||10;var t=s(e).toHsl();return t.l+=r/100,t.l=k(t.l),s(t)}function _e(e,r){r=r===0?0:r||10;var t=s(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(r/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(r/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(r/100)))),s(t)}function xe(e,r){r=r===0?0:r||10;var t=s(e).toHsl();return t.l-=r/100,t.l=k(t.l),s(t)}function Me(e,r){var t=s(e).toHsl(),a=(t.h+r)%360;return t.h=a<0?360+a:a,s(t)}function ke(e){var r=s(e).toHsl();return r.h=(r.h+180)%360,s(r)}function F(e,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var t=s(e).toHsl(),a=[s(e)],i=360/r,n=1;n<r;n++)a.push(s({h:(t.h+n*i)%360,s:t.s,l:t.l}));return a}function Ae(e){var r=s(e).toHsl(),t=r.h;return[s(e),s({h:(t+72)%360,s:r.s,l:r.l}),s({h:(t+216)%360,s:r.s,l:r.l})]}function Se(e,r,t){r=r||6,t=t||30;var a=s(e).toHsl(),i=360/t,n=[s(e)];for(a.h=(a.h-(i*r>>1)+720)%360;--r;)a.h=(a.h+i)%360,n.push(s(a));return n}function Te(e,r){r=r||6;for(var t=s(e).toHsv(),a=t.h,i=t.s,n=t.v,o=[],d=1/r;r--;)o.push(s({h:a,s:i,v:n})),n=(n+d)%1;return o}s.mix=function(e,r,t){t=t===0?0:t||50;var a=s(e).toRgb(),i=s(r).toRgb(),n=t/100,o={r:(i.r-a.r)*n+a.r,g:(i.g-a.g)*n+a.g,b:(i.b-a.b)*n+a.b,a:(i.a-a.a)*n+a.a};return s(o)};s.readability=function(e,r){var t=s(e),a=s(r);return(Math.max(t.getLuminance(),a.getLuminance())+.05)/(Math.min(t.getLuminance(),a.getLuminance())+.05)};s.isReadable=function(e,r,t){var a=s.readability(e,r),i,n;switch(n=!1,i=Fe(t),i.level+i.size){case"AAsmall":case"AAAlarge":n=a>=4.5;break;case"AAlarge":n=a>=3;break;case"AAAsmall":n=a>=7;break}return n};s.mostReadable=function(e,r,t){var a=null,i=0,n,o,d,u;t=t||{},o=t.includeFallbackColors,d=t.level,u=t.size;for(var g=0;g<r.length;g++)n=s.readability(e,r[g]),n>i&&(i=n,a=s(r[g]));return s.isReadable(e,a,{level:d,size:u})||!o?a:(t.includeFallbackColors=!1,s.mostReadable(e,["#fff","#000"],t))};var S=s.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Pe=s.hexNames=Re(S);function Re(e){var r={};for(var t in e)e.hasOwnProperty(t)&&(r[e[t]]=t);return r}function N(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function h(e,r){we(e)&&(e="100%");var t=Ce(e);return e=Math.min(r,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*r,10)/100),Math.abs(e-r)<1e-6?1:e%r/parseFloat(r)}function k(e){return Math.min(1,Math.max(0,e))}function l(e){return parseInt(e,16)}function we(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function Ce(e){return typeof e=="string"&&e.indexOf("%")!=-1}function m(e){return e.length==1?"0"+e:""+e}function M(e){return e<=1&&(e=e*100+"%"),e}function B(e){return Math.round(parseFloat(e)*255).toString(16)}function O(e){return l(e)/255}var b=function(){var e="[-\\+]?\\d+%?",r="[-\\+]?\\d*\\.\\d+%?",t="(?:"+r+")|(?:"+e+")",a="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+a),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+a),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+a),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function v(e){return!!b.CSS_UNIT.exec(e)}function He(e){e=e.replace(he,"").replace(de,"").toLowerCase();var r=!1;if(S[e])e=S[e],r=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=b.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=b.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=b.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=b.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=b.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=b.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=b.hex8.exec(e))?{r:l(t[1]),g:l(t[2]),b:l(t[3]),a:O(t[4]),format:r?"name":"hex8"}:(t=b.hex6.exec(e))?{r:l(t[1]),g:l(t[2]),b:l(t[3]),format:r?"name":"hex"}:(t=b.hex4.exec(e))?{r:l(t[1]+""+t[1]),g:l(t[2]+""+t[2]),b:l(t[3]+""+t[3]),a:O(t[4]+""+t[4]),format:r?"name":"hex8"}:(t=b.hex3.exec(e))?{r:l(t[1]+""+t[1]),g:l(t[2]+""+t[2]),b:l(t[3]+""+t[3]),format:r?"name":"hex"}:!1}function Fe(e){var r,t;return e=e||{level:"AA",size:"small"},r=(e.level||"AA").toUpperCase(),t=(e.size||"small").toLowerCase(),r!=="AA"&&r!=="AAA"&&(r="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:r,size:t}}const f=(e,r)=>({100:s(e).desaturate(25).lighten(50).toString(),200:s(e).desaturate(13).lighten(20).toString(),300:s(e).desaturate(3).lighten(10).toString(),400:s(e).desaturate(1).lighten(5).toString(),500:s(e).toString(),600:s(e).saturate(5).darken(4).toString(),700:s(e).saturate(11).darken(8).toString(),800:s(e).saturate(18).darken(10).toString(),900:s(e).saturate(24).darken(18).toString(),light:r&&r[400]||s(e).desaturate(1).lighten(5).toString(),main:s(e).toString(),dark:r&&r[600]||s(e).saturate(5).darken(4).toString(),...r}),c={primary:f("#395979",{100:"#d7dee4",200:"#b0bdc9",300:"#889baf",400:"#617a94",500:"#395979",600:"#2e4761",700:"#223549",800:"#172430",900:"#0b1218"}),secondary:f("#469285",{100:"#dae9e7",200:"#b5d3ce",300:"#90beb6",400:"#6ba89d",500:"#469285",600:"#38756a",700:"#2a6960",800:"#1c3a35",900:"#0e1d1b"}),tertiary:f("#EDC766",{100:"#fbf4e0",200:"#f8e9c2",300:"#f4dda3",400:"#f1d285",500:"#edc766",600:"#be9f52",700:"#8e773d",800:"#5f5029",900:"#2f2814"}),grey:{1e3:"#22252a",900:"#353a3f",800:"#4a5056",700:"#878e95",600:"#aeb5bc",500:"#d0d4d9",400:"#dfe2e6",300:"#eaecee",200:"#f1f3f5",100:"#fbfbfc"},neutral:f("#d0d4d9",{1e3:"#22252a",900:"#353a3f",800:"#4a5056",700:"#878e95",600:"#aeb5bc",500:"#d0d4d9",400:"#dfe2e6",300:"#eaecee",200:"#f1f3f5",100:"#fbfbfc"}),success:{main:"#32a330"},info:{main:"#017fa5"},warning:{main:"#cc9f00"},error:{main:"#c13415"},text:{primary:"#353a3f",secondary:"#4a5056"},contrastThreshold:4.5},Ge={...c,primary:f("#4F527D"),secondary:f("#9499C7")},Ue={...c,primary:f("#e79776"),secondary:f("#e79776")},Ve={...c,primary:f("#4d5491"),secondary:f("#2f8e94")},E={...f("#39AC97"),contrastText:"#ffffff"};({...c});const Qe={...c,primary:f("#125e81"),secondary:f("#404b63")},We={...c,primary:f("#00255c"),secondary:f("#2699a7")},Ke={...c,primary:f("#00565e"),secondary:f("#f7a700")},Xe={...c,primary:f("#4d5491"),secondary:f("#4d5491")},Ye={...c,primary:f("#3e7293"),secondary:f("#164767")},Ze={...c,primary:f("#0085ff"),secondary:f("#0085ff")},Je={...c,primary:f("#38568e"),secondary:f("#47337d")},et={...c,primary:f("#24AB9F"),secondary:f("#F5B33C")},Oe={defaultProps:{underline:"always"},styleOverrides:{root:{fontWeight:700,letterSpacing:"0.5px"},underlineAlways:({theme:e})=>({textDecoration:"underline",textUnderlineOffset:"4px",textDecorationThickness:"1px",textDecorationColor:e.palette.grey[600],"&:hover":{textDecorationColor:e.palette.primary.main,textDecorationThickness:"2px"}}),underlineHover:{"&:hover":{textUnderlineOffset:"4px",textDecorationThickness:"2px"}}}},_="2px",L={typography:j,palette:c,components:{MuiAlert:{styleOverrides:{root:({ownerState:e,theme:r})=>({borderRadius:"0px",fontSize:"16px",borderLeft:`10px solid ${r.palette[e.severity||"success"].main}`})}},MuiLink:Oe,MuiButtonBase:{defaultProps:{disableRipple:!0}},MuiButton:{styleOverrides:{root:{fontWeight:900,padding:"6px 12px",borderRadius:"3px",textTransform:"capitalize","&:hover":{transition:"0.2s"}},text:({theme:e})=>({"&:hover":{textDecoration:"underline",textUnderlineOffset:"4px",textDecorationColor:e.palette.primary.main,textDecorationThickness:"2px"}})}},MuiCheckbox:{defaultProps:{color:"secondary"}},MuiDialog:{defaultProps:{PaperProps:{sx:e=>({borderRadius:"0px",padding:e.spacing(5.5),alignSelf:"flex-start"})}}},MuiDialogTitle:{styleOverrides:{root:({theme:e})=>({fontSize:"24px",fontWeight:700,paddingLeft:"0px",paddingRight:"0px",paddingBottom:e.spacing(3)})}},MuiDialogContent:{defaultProps:{dividers:!0},styleOverrides:{root:({ownerState:e,theme:r})=>({color:r.palette.text.secondary,paddingTop:e.dividers?r.spacing(3):0,paddingBottom:e.dividers?r.spacing(3):0,paddingLeft:_,paddingRight:_,marginLeft:`-${_}`,marginRight:`-${_}`,borderImage:e.dividers?`linear-gradient(to right, transparent 0px, transparent ${_}, ${r.palette.grey[400]} ${_}, ${r.palette.grey[400]} calc(100% - ${_}), transparent calc(100% - ${_})) 1`:void 0})}},MuiDialogActions:{styleOverrides:{root:({theme:e})=>({paddingLeft:"0px",paddingRight:"0px",paddingTop:e.spacing(3),"& .MuiButton-root":{height:"36px",padding:"0px 16px"}})}},MuiInputBase:{styleOverrides:{root:({theme:e})=>({borderRadius:"3px",fontSize:"14px",position:"relative",backgroundColor:e.palette.grey[200],border:"none","&.Mui-focused":{boxShadow:`${X(e.palette.primary.main,.25)} 0 0 0 0.1rem`,borderColor:e.palette.primary.main}}),input:({theme:e})=>({padding:"14px 12px"})}},MuiMenuItem:{styleOverrides:{root:{height:"38px",paddingLeft:"12px",paddingRight:"12px"}}},MuiTooltip:{defaultProps:{arrow:!0,TransitionComponent:z},styleOverrides:{arrow:({theme:e})=>({color:e.palette.common.black}),tooltip:({theme:e})=>({fontSize:"14px",borderRadius:"2px",backgroundColor:e.palette.common.black})}},MuiTypography:{defaultProps:{variantMapping:{headline1:"p",headline2:"p",headline3:"p",body1:"p",body1Italic:"p",body2:"p",breadcrumb1:"span",breadcrumb2:"span",smallText1:"p",smallText2:"p",smallLink:"span",label:"span",buttonLink:"span",hintText:"p",sectionTitle:"p",subsectionHeader:"p",dataFieldKey:"p"}}}},styledBackground:"url('https://s3.amazonaws.com/static.synapse.org/images/SynapseLoginPageBackground.svg')"};function T(e){return Y(L,e)}const P=({theme:e=L,children:r})=>{const t=D.useMemo(()=>T(e),[e]),a=Z(t);return y(te,{injectFirst:!0,children:y(fe,{theme:a,children:r})})};try{T.displayName="mergeTheme",T.__docgenInfo={description:"",displayName:"mergeTheme",props:{styledBackground:{defaultValue:null,description:"",name:"styledBackground",required:!1,type:{name:"string"}}}}}catch{}try{P.displayName="ThemeProvider",P.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"ThemeOptions"}}}}}catch{}const Ee={defaultOptions:{queries:{staleTime:1e3*60*5,cacheTime:1e3*60*30,retry:!1,refetchOnWindowFocus:!1}}},Ie=new ee(Ee);function I(e){const{children:r,synapseContext:t,queryClient:a,theme:i}=e;return y($,{client:a??Ie,children:y(P,{theme:i,children:y(q,{synapseContext:t,children:r})})})}try{I.displayName="FullContextProvider",I.__docgenInfo={description:`Provides all context necessary for components in SRC.
Contexts include
- SynapseContext
- QueryClientContext (react-query)
- ThemeContext (@mui)`,displayName:"FullContextProvider",props:{synapseContext:{defaultValue:null,description:"",name:"synapseContext",required:!0,type:{name:"Partial<SynapseContextType>"}},queryClient:{defaultValue:null,description:"",name:"queryClient",required:!1,type:{name:"QueryClient"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"ThemeOptions"}}}}}catch{}export{I as F,L as a,Ue as b,Ve as c,Ee as d,We as e,Ke as f,Xe as g,Ye as h,Ze as i,Je as j,Ge as m,Qe as n,c as p,et as s};
//# sourceMappingURL=FullContextProvider-65c539b6.js.map