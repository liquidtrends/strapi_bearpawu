"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[302],{40316:(B,u,a)=>{a.r(u),a.d(u,{SingleSignOn:()=>f,default:()=>L});var e=a(67294),l=a(95489),p=a(22522),s=a(72899),E=a(97132),v=a(18446),b=a.n(v),C=a(38683),g=a(48474),c=a(87751),r=a(53209);const M=r.Ry().shape({autoRegister:r.Xg().required(l.translatedErrors.required),defaultRole:r.nK().when("autoRegister",(t,i)=>t?i.required(l.translatedErrors.required):i.nullable())}),m={...c.Z.settings.sso,readRoles:c.Z.settings.roles.read},f=()=>{const{formatMessage:t}=(0,E.useIntl)(),{isLoading:i,allowedActions:{canUpdate:h,canReadRoles:O}}=(0,l.useRBAC)(m),[{formErrors:o,initialData:y,isLoading:I,modifiedData:d,showHeaderButtonLoader:P},x,{handleChange:S,handleSubmit:D}]=(0,g.G4)((0,C.IF)("providers/options"),M,()=>{},["autoRegister","defaultRole"]),{roles:T}=(0,g.bF)(O);(0,l.useFocusWhenNavigate)();const k=i||I;(0,e.useEffect)(()=>{if(o.defaultRole){const n='[name="defaultRole"]';document.querySelector(n).focus()}},[o]);const R=b()(y,d);return e.createElement(s.Layout,null,e.createElement(l.SettingsPageTitle,{name:"SSO"}),e.createElement(s.Main,{tabIndex:-1},e.createElement("form",{onSubmit:n=>{if(R){n.preventDefault();return}D(n)}},e.createElement(s.HeaderLayout,{primaryAction:e.createElement(s.Button,{"data-testid":"save-button",disabled:R,loading:P,startIcon:e.createElement(p.Check,null),type:"submit",size:"L"},t({id:"global.save",defaultMessage:"Save"})),title:t({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:t({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),e.createElement(s.ContentLayout,null,k?e.createElement(l.LoadingIndicatorPage,null):e.createElement(s.Stack,{spacing:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.Typography,{variant:"delta",as:"h2"},t({id:"global.settings",defaultMessage:"Settings"})),e.createElement(s.Grid,{gap:4},e.createElement(s.GridItem,{col:6,m:6,s:12},e.createElement(s.ToggleInput,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!h,checked:d.autoRegister,hint:t({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:t({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:n=>{S({target:{name:"autoRegister",value:n.target.checked}})}})),e.createElement(s.GridItem,{col:6,m:6,s:12},e.createElement(s.Select,{disabled:!h,hint:t({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:o.defaultRole?t({id:o.defaultRole.id,defaultMessage:o.defaultRole.id}):"",label:t({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:n=>{S({target:{name:"defaultRole",value:n}})},placeholder:t({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:d.defaultRole},T.map(({id:n,name:A})=>e.createElement(s.Option,{key:n,value:n.toString()},A))))))))))},L=()=>e.createElement(l.CheckPagePermissions,{permissions:m.main},e.createElement(f,null))}}]);
