import{_ as u}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{_ as b}from"./styled-96220216.js";import{c as v,u as N}from"./ThemeProvider-c7f6a893.js";import{R as a,r as D}from"./index-8db94870.js";import{c as o}from"./createWithBsPrefix-3758f106.js";import{a as x,j as U}from"./jsx-runtime-095bf462.js";import{U as E}from"./UserCard-92089eac.js";import{S as L}from"./SynapseConstants-76f49806.js";import"./getEndpoint-ac94413e.js";import{u as O}from"./SynapseClient-773213a5.js";const g=function(e){return a.forwardRef(function(t,s){return a.createElement("div",u({},t,{ref:s,className:v(t.className,e)}))})};var h=a.createContext(null);h.displayName="CardContext";const R=h;var T=["bsPrefix","className","variant","as"],_={variant:null},C=a.forwardRef(function(e,t){var s=e.bsPrefix,m=e.className,d=e.variant,n=e.as,c=n===void 0?"img":n,l=b(e,T),i=N(s,"card-img");return a.createElement(c,u({ref:t,className:v(d?i+"-"+d:i,m)},l))});C.displayName="CardImg";C.defaultProps=_;const $=C;var H=["bsPrefix","className","bg","text","border","body","children","as"],j=g("h5"),w=g("h6"),P=o("card-body"),A=o("card-title",{Component:j}),F=o("card-subtitle",{Component:w}),k=o("card-link",{Component:"a"}),W=o("card-text",{Component:"p"}),Z=o("card-header"),q=o("card-footer"),M=o("card-img-overlay"),V={body:!1},r=a.forwardRef(function(e,t){var s=e.bsPrefix,m=e.className,d=e.bg,n=e.text,c=e.border,l=e.body,i=e.children,f=e.as,I=f===void 0?"div":f,S=b(e,H),p=N(s,"card"),B=D.useMemo(function(){return{cardHeaderBsPrefix:p+"-header"}},[p]);return a.createElement(R.Provider,{value:B},a.createElement(I,u({ref:t},S,{className:v(m,p,d&&"bg-"+d,n&&"text-"+n,c&&"border-"+c)}),l?a.createElement(P,null,i):i))});r.displayName="Card";r.defaultProps=V;r.Img=$;r.Title=A;r.Subtitle=F;r.Body=P;r.Link=k;r.Text=W;r.Header=Z;r.Footer=q;r.ImgOverlay=M;const se=r,z={timeZoneName:"short"},G={timeZone:"UTC",timeZoneName:"short"},y=({userId:e,date:t})=>{const{utcTime:s}=O();return x("div",{className:"created-on",children:[x("span",{children:["Created on"," ",t.toLocaleDateString(void 0,s?G:z).replace(",","")," ","by"," "]}),U(E,{size:L,ownerId:e})]})};try{y.displayName="CreatedOnByUserDiv",y.__docgenInfo={description:"",displayName:"CreatedOnByUserDiv",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}}}}}catch{}export{se as C,y as a};
//# sourceMappingURL=CreatedOnByUserDiv-3deddc8d.js.map