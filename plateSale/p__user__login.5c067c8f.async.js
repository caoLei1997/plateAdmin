(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{CyIy:function(e,a,t){e.exports={main:"antd-pro-pages-user-login-style-main",icon:"antd-pro-pages-user-login-style-icon",other:"antd-pro-pages-user-login-style-other",register:"antd-pro-pages-user-login-style-register"}},DdhY:function(e,a,t){e.exports={login:"antd-pro-pages-user-login-components-login-index-login",getCaptcha:"antd-pro-pages-user-login-components-login-index-getCaptcha",icon:"antd-pro-pages-user-login-components-login-index-icon",other:"antd-pro-pages-user-login-components-login-index-other",register:"antd-pro-pages-user-login-components-login-index-register",prefixIcon:"antd-pro-pages-user-login-components-login-index-prefixIcon",submit:"antd-pro-pages-user-login-components-login-index-submit"}},NGMh:function(e,a,t){"use strict";t.r(a);var n=t("k1fw"),r=t("tJVT"),c=(t("fOrg"),t("+KLJ")),o=t("zsHu"),i=t("q1tI"),s=t.n(i),l=t("9kvl"),u=(t("y8nQ"),t("Vl3Y")),m=(t("Znn+"),t("ZTPi")),p=t("oBTY"),d=t("yUgw"),g=t("TSYQ"),b=t.n(g),f=Object(i["createContext"])({}),h=f,C=(t("14J3"),t("BMrR")),E=(t("+L6B"),t("2/Rp")),v=(t("jCWc"),t("kPKH")),O=(t("5NDa"),t("5rEg")),j=t("0Owb"),y=t("WmNS"),x=t.n(y),w=(t("miYZ"),t("tsqr")),N=(t("/xke"),t("TeRw")),P=t("9og8"),I=t("PpiC"),T=t("BGR+"),k=t("xQXo"),S=t("cJ7L"),L=t("MGYb"),U=t("FQ2w"),M=t("LtMZ"),q=t("cGnJ"),z=t("DdhY"),B=t.n(z),D={UserName:{props:{size:"large",id:"userName",prefix:s.a.createElement(S["a"],{style:{color:"#1890ff"},className:B.a.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:s.a.createElement(L["a"],{className:B.a.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:s.a.createElement(U["a"],{className:B.a.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},PicCode:{props:{size:"large",prefix:s.a.createElement(M["a"],{className:B.a.prefixIcon}),placeholder:"\u56fe\u7247\u9a8c\u8bc1\u7801"},rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801\uff01"},{pattern:/^[\d\w]{4}$/,message:"\u56fe\u7247\u9a8c\u8bc1\u7801\u683c\u5f0f\u9519\u8bef\uff01"}]},Captcha:{props:{size:"large",prefix:s.a.createElement(q["a"],{className:B.a.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}},J=t("LxC5"),V=u["a"].Item,Y=function(e){var a=e.onChange,t=e.defaultValue,n=e.customProps,r=void 0===n?{}:n,c=e.rules,o={rules:c||r.rules};return a&&(o.onChange=a),t&&(o.initialValue=t),o},F=function(e){var a=Object(i["useState"])(e.countDown||0),t=Object(r["a"])(a,2),c=t[0],o=t[1],l=Object(i["useState"])(!1),m=Object(r["a"])(l,2),p=m[0],d=m[1],g=Object(i["useState"])(!1),b=Object(r["a"])(g,2),f=b[0],h=b[1],y=(e.onChange,e.customProps),S=(e.defaultValue,e.rules,e.name),L=(e.getCaptchaButtonText,e.getCaptchaSecondText,e.updateActive,e.type),U=(e.tabUtil,Object(I["a"])(e,["onChange","customProps","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type","tabUtil"])),M=U?Object(n["a"])({},U,{children:null}):{},q=Object(i["useCallback"])(function(){var e=Object(P["a"])(x.a.mark((function e(a){var t;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return h(!0),e.next=3,Object(k["a"])({phoneNumber:a.mobile,checkId:a.checkId,imgContent:a.picCode,types:7});case 3:if(t=e.sent,t.retCode===J["k"]){e.next=9;break}return N["a"].error({description:t.retMsg||"\u60a8\u7684\u7f51\u7edc\u53d1\u751f\u5f02\u5e38\uff0c\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668",message:t.retMsg?"\u8bf7\u6c42\u9519\u8bef":"\u7f51\u7edc\u5f02\u5e38"}),h(!1),M.getPicCode(),e.abrupt("return");case 9:h(!1),a.onSuccess(t.data),w["a"].success("\u83b7\u53d6\u9a8c\u8bc1\u7801\u6210\u529f\uff01"),d(!0);case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]);if(Object(i["useEffect"])((function(){var a=0,t=e.countDown;return p&&(a=window.setInterval((function(){o((function(e){return e<=1?(d(!1),clearInterval(a),t||60):e-1}))}),1e3)),function(){return clearInterval(a)}}),[p]),!S)return null;var z=Y(e);if("Captcha"===L){var D=Object(T["a"])(M,["onGetCaptcha","countDown"]);return s.a.createElement(V,{shouldUpdate:!0,noStyle:!0},(function(e){var a=e.validateFields,t=e.setFieldsValue;return s.a.createElement(C["a"],{gutter:8},s.a.createElement(v["a"],{span:16},s.a.createElement(V,Object(j["a"])({name:S},z),s.a.createElement(O["a"],Object(j["a"])({},y,D))),s.a.createElement(V,{name:"serialNumber",style:{display:"none"}},s.a.createElement(O["a"],null))),s.a.createElement(v["a"],{span:8},s.a.createElement(E["a"],{disabled:p,loading:f,className:B.a.getCaptcha,size:"large",onClick:function(){a(["mobile","picCode"]).then((function(e){q(Object(n["a"])({},e,{checkId:M.checkId,onSuccess:function(e){t({serialNumber:e})}}))}))}},p?"".concat(c," \u79d2"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")))}))}if("PicCode"===L){var F=Object(T["a"])(M,["onGetCaptcha","countDown"]);return s.a.createElement(u["a"].Item,null,s.a.createElement(C["a"],{gutter:8},s.a.createElement(v["a"],{span:16},s.a.createElement(u["a"].Item,Object(j["a"])({className:"mb-0",name:S},z),s.a.createElement(O["a"],Object(j["a"])({},y,F)))),s.a.createElement(v["a"],{span:8,className:"pic-code-box"},e.children)))}return s.a.createElement(V,Object(j["a"])({name:S},z),s.a.createElement(O["a"],Object(j["a"])({},y,M)))},G={};Object.keys(D).forEach((function(e){var a=D[e];G[e]=function(t){return s.a.createElement(h.Consumer,null,(function(n){return s.a.createElement(F,Object(j["a"])({customProps:a.props,rules:a.rules},t,{type:e},n,{updateActive:n.updateActive}))}))}}));var A=G,K=u["a"].Item,Q=function(e){var a=e.className,t=Object(I["a"])(e,["className"]),n=b()(B.a.submit,a);return s.a.createElement(K,null,s.a.createElement(E["a"],Object(j["a"])({size:"large",className:n,type:"primary",htmlType:"submit"},t)))},R=Q,Z=m["a"].TabPane,W=function(){var e=0;return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(a).concat(e)}}(),$=function(e){Object(i["useEffect"])((function(){var a=W("login-tab-"),t=e.tabUtil;t&&t.addTab(a)}),[]);var a=e.children;return s.a.createElement(Z,e,e.active&&a)},H=function(e){return s.a.createElement(h.Consumer,null,(function(a){return s.a.createElement($,Object(j["a"])({tabUtil:a.tabUtil},e))}))};H.typeName="LoginTab";var X=H,_=function(e){var a=e.className,t=Object(i["useState"])([]),n=Object(r["a"])(t,2),c=n[0],o=n[1],l=Object(i["useState"])({}),g=Object(r["a"])(l,2),f=g[0],C=g[1],E=Object(d["a"])("",{value:e.activeKey,onChange:e.onTabChange}),v=Object(r["a"])(E,2),O=v[0],j=v[1],y=[],x=[];return s.a.Children.forEach(e.children,(function(e){e&&("LoginTab"===e.type.typeName?y.push(e):x.push(e))})),s.a.createElement(h.Provider,{value:{tabUtil:{addTab:function(e){o([].concat(Object(p["a"])(c),[e]))},removeTab:function(e){o(c.filter((function(a){return a!==e})))}},updateActive:function(e){f&&(f[O]?f[O].push(e):f[O]=[e],C(f))}}},s.a.createElement("div",{className:b()(a,B.a.login)},s.a.createElement(u["a"],{form:e.from,onFinish:function(a){e.onSubmit&&e.onSubmit(a)}},c.length?s.a.createElement(s.a.Fragment,null,s.a.createElement(m["a"],{animated:!1,className:B.a.tabs,activeKey:O,onChange:function(e){j(e)}},y),x):e.children)))};_.Tab=X,_.Submit=R,_.UserName=A.UserName,_.Password=A.Password,_.Mobile=A.Mobile,_.PicCode=A.PicCode,_.Captcha=A.Captcha;var ee=_,ae=t("CyIy"),te=t.n(ae),ne=ee.Tab,re=ee.Mobile,ce=ee.Submit,oe=ee.Captcha,ie=ee.PicCode,se=function(e){var a=e.content;return s.a.createElement(c["a"],{style:{marginBottom:24},message:a,type:"error",showIcon:!0})},le=function(e){var a=e.userLogin,t=void 0===a?{}:a,c=e.submitting,l=e.picCode,u=e.dispatch,m=e.picCodeLoading,p=t.status,d=t.type,g=Object(i["useState"])("mobile"),b=Object(r["a"])(g,2),f=b[0],h=b[1],C=function(){u({type:"code/getPicCode"})};Object(i["useEffect"])((function(){C()}),[]);var E=function(e){u({type:"login/login",payload:Object(n["a"])({},e,{type:7}),onFail:function(){C()}})};return s.a.createElement("div",{className:te.a.main},s.a.createElement(ee,{activeKey:f,onTabChange:h,onSubmit:E},s.a.createElement(ne,{key:"mobile",tab:"\u7528\u6237\u767b\u5f55"},"error"===p&&"mobile"===d&&!c&&s.a.createElement(se,{content:"\u9a8c\u8bc1\u7801\u9519\u8bef"}),s.a.createElement(re,{name:"mobile",placeholder:"\u624b\u673a\u53f7",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"},{pattern:/^1\d{10}$/,message:"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01"}]}),s.a.createElement(ie,{name:"picCode"},s.a.createElement("div",{className:"inline"},m?s.a.createElement(o["a"],{spin:!0}):s.a.createElement("img",{src:l.pic,alt:"",onClick:C,style:{cursor:"pointer"}}))),s.a.createElement(oe,{name:"captcha",placeholder:"\u9a8c\u8bc1\u7801",countDown:120,getCaptchaButtonText:"",getCaptchaSecondText:"\u79d2",checkId:l.checkId,getPicCode:function(){C()},rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]})),s.a.createElement(ce,{loading:c},"\u767b\u5f55")))};a["default"]=Object(l["a"])((function(e){var a=e.login,t=e.loading,n=e.code;return{userLogin:a,submitting:t.effects["login/login"],picCode:n.picCode,picCodeLoading:t.effects["code/getPicCode"]}}))(le)}}]);