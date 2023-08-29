"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5175],{2542:(We,re,y)=>{y.r(re),y.d(re,{default:()=>Ge});var f=y(67294),be=y(45697),N=y.n(be),A=y(27821),x=y(72899),Ee=y(22522),Ce=y(97132);function E(){return(E=Object.assign||function(t){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c])}return t}).apply(this,arguments)}function B(t,l){if(t==null)return{};var u,c,s={},i=Object.keys(t);for(c=0;c<i.length;c++)l.indexOf(u=i[c])>=0||(s[u]=t[u]);return s}function F(t){var l=(0,f.useRef)(t),u=(0,f.useRef)(function(c){l.current&&l.current(c)});return l.current=t,u.current}var q=function(t,l,u){return l===void 0&&(l=0),u===void 0&&(u=1),t>u?u:t<l?l:t},O=function(t){return"touches"in t},U=function(t){return t&&t.ownerDocument.defaultView||self},te=function(t,l,u){var c=t.getBoundingClientRect(),s=O(l)?function(i,d){for(var v=0;v<i.length;v++)if(i[v].identifier===d)return i[v];return i[0]}(l.touches,u):l;return{left:q((s.pageX-(c.left+U(t).pageXOffset))/c.width),top:q((s.pageY-(c.top+U(t).pageYOffset))/c.height)}},oe=function(t){!O(t)&&t.preventDefault()},V=f.memo(function(t){var l=t.onMove,u=t.onKey,c=B(t,["onMove","onKey"]),s=(0,f.useRef)(null),i=F(l),d=F(u),v=(0,f.useRef)(null),p=(0,f.useRef)(!1),h=(0,f.useMemo)(function(){var w=function(C){oe(C),(O(C)?C.touches.length>0:C.buttons>0)&&s.current?i(te(s.current,C,v.current)):_(!1)},P=function(){return _(!1)};function _(C){var g=p.current,M=U(s.current),z=C?M.addEventListener:M.removeEventListener;z(g?"touchmove":"mousemove",w),z(g?"touchend":"mouseup",P)}return[function(C){var g=C.nativeEvent,M=s.current;if(M&&(oe(g),!function(Je,Qe){return Qe&&!O(Je)}(g,p.current)&&M)){if(O(g)){p.current=!0;var z=g.changedTouches||[];z.length&&(v.current=z[0].identifier)}M.focus(),i(te(M,g,v.current)),_(!0)}},function(C){var g=C.which||C.keyCode;g<37||g>40||(C.preventDefault(),d({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},_]},[d,i]),m=h[0],H=h[1],k=h[2];return(0,f.useEffect)(function(){return k},[k]),f.createElement("div",E({},c,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:s,onKeyDown:H,tabIndex:0,role:"slider"}))}),$=function(t){return t.filter(Boolean).join(" ")},G=function(t){var l=t.color,u=t.left,c=t.top,s=c===void 0?.5:c,i=$(["react-colorful__pointer",t.className]);return f.createElement("div",{className:i,style:{top:100*s+"%",left:100*u+"%"}},f.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:l}}))},b=function(t,l,u){return l===void 0&&(l=0),u===void 0&&(u=Math.pow(10,l)),Math.round(u*t)/u},xe={grad:.9,turn:360,rad:360/(2*Math.PI)},ne=function(t){return Y(J(t))},J=function(t){return t[0]==="#"&&(t=t.substring(1)),t.length<6?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?b(parseInt(t[3]+t[3],16)/255,2):1}:{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16),a:t.length===8?b(parseInt(t.substring(6,8),16)/255,2):1}},ae=function(t,l){return l===void 0&&(l="deg"),Number(t)*(xe[l]||1)},le=function(t){var l=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(t);return l?Q({h:ae(l[1],l[2]),s:Number(l[3]),l:Number(l[4]),a:l[5]===void 0?1:Number(l[5])/(l[6]?100:1)}):{h:0,s:0,v:0,a:1}},He=le,Q=function(t){var l=t.s,u=t.l;return{h:t.h,s:(l*=(u<50?u:100-u)/100)>0?2*l/(u+l)*100:0,v:u+l,a:t.a}},ue=function(t){return Ne(L(t))},K=function(t){var l=t.s,u=t.v,c=t.a,s=(200-l)*u/100;return{h:b(t.h),s:b(s>0&&s<200?l*u/100/(s<=100?s:200-s)*100:0),l:b(s/2),a:b(c,2)}},S=function(t){var l=K(t);return"hsl("+l.h+", "+l.s+"%, "+l.l+"%)"},X=function(t){var l=K(t);return"hsla("+l.h+", "+l.s+"%, "+l.l+"%, "+l.a+")"},L=function(t){var l=t.h,u=t.s,c=t.v,s=t.a;l=l/360*6,u/=100,c/=100;var i=Math.floor(l),d=c*(1-u),v=c*(1-(l-i)*u),p=c*(1-(1-l+i)*u),h=i%6;return{r:b(255*[c,v,d,d,p,c][h]),g:b(255*[p,c,c,v,d,d][h]),b:b(255*[d,d,p,c,c,v][h]),a:b(s,2)}},ce=function(t){var l=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(t);return l?D({h:ae(l[1],l[2]),s:Number(l[3]),v:Number(l[4]),a:l[5]===void 0?1:Number(l[5])/(l[6]?100:1)}):{h:0,s:0,v:0,a:1}},Me=ce,se=function(t){var l=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(t);return l?Y({r:Number(l[1])/(l[2]?100/255:1),g:Number(l[3])/(l[4]?100/255:1),b:Number(l[5])/(l[6]?100/255:1),a:l[7]===void 0?1:Number(l[7])/(l[8]?100:1)}):{h:0,s:0,v:0,a:1}},ye=se,Z=function(t){var l=t.toString(16);return l.length<2?"0"+l:l},Ne=function(t){var l=t.r,u=t.g,c=t.b,s=t.a,i=s<1?Z(b(255*s)):"";return"#"+Z(l)+Z(u)+Z(c)+i},Y=function(t){var l=t.r,u=t.g,c=t.b,s=t.a,i=Math.max(l,u,c),d=i-Math.min(l,u,c),v=d?i===l?(u-c)/d:i===u?2+(c-l)/d:4+(l-u)/d:0;return{h:b(60*(v<0?v+6:v)),s:b(i?d/i*100:0),v:b(i/255*100),a:s}},D=function(t){return{h:b(t.h),s:b(t.s),v:b(t.v),a:b(t.a,2)}},ie=f.memo(function(t){var l=t.hue,u=t.onChange,c=$(["react-colorful__hue",t.className]);return f.createElement("div",{className:c},f.createElement(V,{onMove:function(s){u({h:360*s.left})},onKey:function(s){u({h:q(l+360*s.left,0,360)})},"aria-label":"Hue","aria-valuenow":b(l),"aria-valuemax":"360","aria-valuemin":"0"},f.createElement(G,{className:"react-colorful__hue-pointer",left:l/360,color:S({h:l,s:100,v:100,a:1})})))}),fe=f.memo(function(t){var l=t.hsva,u=t.onChange,c={backgroundColor:S({h:l.h,s:100,v:100,a:1})};return f.createElement("div",{className:"react-colorful__saturation",style:c},f.createElement(V,{onMove:function(s){u({s:100*s.left,v:100-100*s.top})},onKey:function(s){u({s:q(l.s+100*s.left,0,100),v:q(l.v-100*s.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(l.s)+"%, Brightness "+b(l.v)+"%"},f.createElement(G,{className:"react-colorful__saturation-pointer",top:1-l.v/100,left:l.s/100,color:S(l)})))}),I=function(t,l){if(t===l)return!0;for(var u in t)if(t[u]!==l[u])return!1;return!0},T=function(t,l){return t.replace(/\s/g,"")===l.replace(/\s/g,"")},de=function(t,l){return t.toLowerCase()===l.toLowerCase()||I(J(t),J(l))};function ve(t,l,u){var c=F(u),s=(0,f.useState)(function(){return t.toHsva(l)}),i=s[0],d=s[1],v=(0,f.useRef)({color:l,hsva:i});(0,f.useEffect)(function(){if(!t.equal(l,v.current.color)){var h=t.toHsva(l);v.current={hsva:h,color:l},d(h)}},[l,t]),(0,f.useEffect)(function(){var h;I(i,v.current.hsva)||t.equal(h=t.fromHsva(i),v.current.color)||(v.current={hsva:i,color:h},c(h))},[i,t,c]);var p=(0,f.useCallback)(function(h){d(function(m){return Object.assign({},m,h)})},[]);return[i,p]}var he,we=typeof window<"u"?f.useLayoutEffect:f.useEffect,ke=function(){return he||y.nc},er=function(t){he=t},ge=new Map,pe=function(t){we(function(){var l=t.current?t.current.ownerDocument:document;if(l!==void 0&&!ge.has(l)){var u=l.createElement("style");u.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,ge.set(l,u);var c=ke();c&&u.setAttribute("nonce",c),l.head.appendChild(u)}},[])},R=function(t){var l=t.className,u=t.colorModel,c=t.color,s=c===void 0?u.defaultColor:c,i=t.onChange,d=B(t,["className","colorModel","color","onChange"]),v=(0,f.useRef)(null);pe(v);var p=ve(u,s,i),h=p[0],m=p[1],H=$(["react-colorful",l]);return f.createElement("div",E({},d,{ref:v,className:H}),f.createElement(fe,{hsva:h,onChange:m}),f.createElement(ie,{hue:h.h,onChange:m,className:"react-colorful__last-control"}))},_e={defaultColor:"000",toHsva:ne,fromHsva:function(t){return ue({h:t.h,s:t.s,v:t.v,a:1})},equal:de},Ie=function(t){return f.createElement(R,E({},t,{colorModel:_e}))},Pe=function(t){var l=t.className,u=t.hsva,c=t.onChange,s={backgroundImage:"linear-gradient(90deg, "+X(Object.assign({},u,{a:0}))+", "+X(Object.assign({},u,{a:1}))+")"},i=$(["react-colorful__alpha",l]),d=b(100*u.a);return e.createElement("div",{className:i},e.createElement("div",{className:"react-colorful__alpha-gradient",style:s}),e.createElement(V,{onMove:function(v){c({a:v.left})},onKey:function(v){c({a:q(u.a+v.left)})},"aria-label":"Alpha","aria-valuetext":d+"%","aria-valuenow":d,"aria-valuemin":"0","aria-valuemax":"100"},e.createElement(G,{className:"react-colorful__alpha-pointer",left:u.a,color:X(u)})))},j=function(t){var l=t.className,u=t.colorModel,c=t.color,s=c===void 0?u.defaultColor:c,i=t.onChange,d=B(t,["className","colorModel","color","onChange"]),v=r(null);pe(v);var p=ve(u,s,i),h=p[0],m=p[1],H=$(["react-colorful",l]);return e.createElement("div",E({},d,{ref:v,className:H}),e.createElement(fe,{hsva:h,onChange:m}),e.createElement(ie,{hue:h.h,onChange:m}),e.createElement(Pe,{hsva:h,onChange:m,className:"react-colorful__last-control"}))},Re={defaultColor:"0001",toHsva:ne,fromHsva:ue,equal:de},rr=function(t){return e.createElement(j,E({},t,{colorModel:Re}))},je={defaultColor:{h:0,s:0,l:0,a:1},toHsva:Q,fromHsva:K,equal:I},tr=function(t){return e.createElement(j,E({},t,{colorModel:je}))},qe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:le,fromHsva:X,equal:T},or=function(t){return e.createElement(j,E({},t,{colorModel:qe}))},Te={defaultColor:{h:0,s:0,l:0},toHsva:function(t){return Q({h:t.h,s:t.s,l:t.l,a:1})},fromHsva:function(t){return{h:(l=K(t)).h,s:l.s,l:l.l};var l},equal:I},nr=function(t){return e.createElement(R,E({},t,{colorModel:Te}))},Be={defaultColor:"hsl(0, 0%, 0%)",toHsva:He,fromHsva:S,equal:T},ar=function(t){return e.createElement(R,E({},t,{colorModel:Be}))},Fe={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(t){return t},fromHsva:D,equal:I},lr=function(t){return e.createElement(j,E({},t,{colorModel:Fe}))},Oe={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:ce,fromHsva:function(t){var l=D(t);return"hsva("+l.h+", "+l.s+"%, "+l.v+"%, "+l.a+")"},equal:T},ur=function(t){return e.createElement(j,E({},t,{colorModel:Oe}))},$e={defaultColor:{h:0,s:0,v:0},toHsva:function(t){return{h:t.h,s:t.s,v:t.v,a:1}},fromHsva:function(t){var l=D(t);return{h:l.h,s:l.s,v:l.v}},equal:I},cr=function(t){return e.createElement(R,E({},t,{colorModel:$e}))},Le={defaultColor:"hsv(0, 0%, 0%)",toHsva:Me,fromHsva:function(t){var l=D(t);return"hsv("+l.h+", "+l.s+"%, "+l.v+"%)"},equal:T},sr=function(t){return e.createElement(R,E({},t,{colorModel:Le}))},De={defaultColor:{r:0,g:0,b:0,a:1},toHsva:Y,fromHsva:L,equal:I},ir=function(t){return e.createElement(j,E({},t,{colorModel:De}))},ze={defaultColor:"rgba(0, 0, 0, 1)",toHsva:se,fromHsva:function(t){var l=L(t);return"rgba("+l.r+", "+l.g+", "+l.b+", "+l.a+")"},equal:T},fr=function(t){return e.createElement(j,E({},t,{colorModel:ze}))},Ae={defaultColor:{r:0,g:0,b:0},toHsva:function(t){return Y({r:t.r,g:t.g,b:t.b,a:1})},fromHsva:function(t){return{r:(l=L(t)).r,g:l.g,b:l.b};var l},equal:I},dr=function(t){return e.createElement(R,E({},t,{colorModel:Ae}))},Ke={defaultColor:"rgb(0, 0, 0)",toHsva:ye,fromHsva:function(t){var l=L(t);return"rgb("+l.r+", "+l.g+", "+l.b+")"},equal:T},vr=function(t){return e.createElement(R,E({},t,{colorModel:Ke}))},Se=/^#?([0-9A-F]{3,8})$/i,Xe=function(t){var l=t.color,u=l===void 0?"":l,c=t.onChange,s=t.onBlur,i=t.escape,d=t.validate,v=t.format,p=t.process,h=B(t,["color","onChange","onBlur","escape","validate","format","process"]),m=o(function(){return i(u)}),H=m[0],k=m[1],w=F(c),P=F(s),_=a(function(g){var M=i(g.target.value);k(M),d(M)&&w(p?p(M):M)},[i,p,d,w]),C=a(function(g){d(g.target.value)||k(i(u)),P(g)},[u,i,d,P]);return n(function(){k(i(u))},[u,i]),e.createElement("input",E({},h,{value:v?v(H):H,spellCheck:"false",onChange:_,onBlur:C}))},me=function(t){return"#"+t},hr=function(t){var l=t.prefixed,u=t.alpha,c=B(t,["prefixed","alpha"]),s=a(function(d){return d.replace(/([^0-9A-F]+)/gi,"").substring(0,u?8:6)},[u]),i=a(function(d){return function(v,p){var h=Se.exec(v),m=h?h[1].length:0;return m===3||m===6||!!p&&m===4||!!p&&m===8}(d,u)},[u]);return e.createElement(Xe,E({},c,{escape:s,format:l?me:void 0,process:me,validate:i}))},W=y(31606);const Ze=A.default.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: ${t=>t.color};
  border: 1px solid rgba(0, 0, 0, 0.1);
`,Ye=(0,A.default)(Ie)`
  && {
    width: 100%;
    aspect-ratio: 1.5;
  }

  .react-colorful__pointer {
    width: ${({theme:t})=>t.spaces[3]};
    height: ${({theme:t})=>t.spaces[3]};
  }

  .react-colorful__saturation {
    border-radius: ${({theme:t})=>t.spaces[1]};
    border-bottom: none;
  }

  .react-colorful__hue {
    border-radius: 10px;
    height: ${({theme:t})=>t.spaces[3]};
    margin-top: ${({theme:t})=>t.spaces[2]};
  }
`,Ue=(0,A.default)(x.BaseButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: ${({theme:t})=>t.spaces[2]};
    height: ${({theme:t})=>t.spaces[2]};
  }

  svg > path {
    fill: ${({theme:t})=>t.colors.neutral500};
    justify-self: flex-end;
  }
`,Ve=(0,A.default)(x.Popover)`
  padding: ${({theme:t})=>t.spaces[2]};
  min-height: 270px;
`,ee=({attribute:t,description:l,disabled:u,error:c,intlLabel:s,labelAction:i,name:d,onChange:v,required:p,value:h})=>{const[m,H]=(0,f.useState)(!1),k=(0,f.useRef)(),{formatMessage:w}=(0,Ce.useIntl)(),P=h||"#000000",_={textTransform:"uppercase"},C=g=>{g.preventDefault(),g.currentTarget.contains(g.relatedTarget)||H(!1)};return f.createElement(x.Field,{name:d,id:d,error:c,hint:l&&w(l),required:p},f.createElement(x.Flex,{direction:"column",alignItems:"stretch",gap:1},f.createElement(x.FieldLabel,{action:i},w(s)),f.createElement(Ue,{ref:k,"aria-label":w({id:(0,W.Z)("color-picker.toggle.aria-label"),defaultMessage:"Color picker toggle"}),"aria-controls":"color-picker-value","aria-haspopup":"dialog","aria-expanded":m,"aria-disabled":u,disabled:u,onClick:()=>H(!m)},f.createElement(x.Flex,null,f.createElement(Ze,{color:P}),f.createElement(x.Typography,{style:_,textColor:h?null:"neutral600",variant:"omega"},P)),f.createElement(Ee.CarretDown,{"aria-hidden":!0})),m&&f.createElement(Ve,{onBlur:C,role:"dialog",source:k,spacing:4},f.createElement(x.FocusTrap,{onEscape:()=>H(!1)},f.createElement(Ye,{color:P,onChange:g=>v({target:{name:d,value:g,type:t.type}})}),f.createElement(x.Flex,{paddingTop:3,paddingLeft:4,justifyContent:"flex-end"},f.createElement(x.Box,{paddingRight:2},f.createElement(x.Typography,{variant:"omega",as:"label",textColor:"neutral600"},w({id:(0,W.Z)("color-picker.input.format"),defaultMessage:"HEX"}))),f.createElement(x.FieldInput,{id:"color-picker-value","aria-label":w({id:(0,W.Z)("color-picker.input.aria-label"),defaultMessage:"Color picker input"}),style:_,value:h,placeholder:"#000000",onChange:v})))),f.createElement(x.FieldHint,null),f.createElement(x.FieldError,null)))};ee.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},ee.propTypes={intlLabel:N().object.isRequired,onChange:N().func.isRequired,attribute:N().object.isRequired,name:N().string.isRequired,description:N().object,disabled:N().bool,error:N().string,labelAction:N().object,required:N().bool,value:N().string};const Ge=ee}}]);
