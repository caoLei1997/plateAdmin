(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"7fyL":function(e,t,a){e.exports={menuTitle:"antd-pro-layouts-basic-layout-menuTitle"}},bsDN:function(e,t,a){e.exports={menu:"antd-pro-components-global-header-index-menu",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",name:"antd-pro-components-global-header-index-name"}},maEh:function(e,t,a){"use strict";a.r(t);var n=a("0Owb"),r=a("oBTY"),o=a("k1fw"),c=(a("J+/v"),a("MoRW")),l=(a("+L6B"),a("2/Rp")),i=a("Hx5s"),u=a("q1tI"),s=a.n(u),m=a("55Ip"),d=a("9kvl"),p=a("HZnN"),h=(a("+BJd"),a("mr32")),f=(a("T2oS"),a("W9HT")),g=(a("Telt"),a("Tckk")),b=(a("lUTK"),a("BvKs")),y=a("fWQN"),v=a("mtLc"),E=a("Nsem"),k=a("oZsa"),N=a("yKVA"),O=a("aIfO"),x=a("cJ7L"),R=a("6Wvd"),j=a("bsDN"),L=a.n(j);function T(e){return function(){var t,a=Object(k["a"])(e);if(w()){var n=Object(k["a"])(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(E["a"])(this,t)}}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=function(e){Object(N["a"])(a,e);var t=T(a);function a(){var e;Object(y["a"])(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.onMenuClick=function(t){var a=t.key;if("logout"!==a)d["c"].push("/account/".concat(a));else{var n=e.props.dispatch;n&&n({type:"login/logout"})}},e}return Object(v["a"])(a,[{key:"render",value:function(){var e=this.props.currentUser,t=void 0===e?{avatar:"",name:""}:e,a=s.a.createElement(b["a"],{className:L.a.menu,selectedKeys:[],onClick:this.onMenuClick},s.a.createElement(b["a"].Item,{key:"logout"},s.a.createElement(O["a"],null),"\u9000\u51fa\u767b\u5f55"));return t&&t.name?s.a.createElement(R["a"],{overlay:a},s.a.createElement("span",{className:"".concat(L.a.action," ").concat(L.a.account)},s.a.createElement(g["a"],{className:L.a.avatar,shape:"square",size:"small",icon:s.a.createElement(x["a"],null)}),s.a.createElement("span",{className:L.a.name},t.employeeName))):s.a.createElement("span",{className:"".concat(L.a.action," ").concat(L.a.account)},s.a.createElement(f["a"],{size:"small",style:{marginLeft:8,marginRight:8}}))}}]),a}(s.a.Component),D=Object(d["a"])((function(e){var t=e.login;return{currentUser:t}}))(C),I={dev:"orange",test:"green",pre:"#87d068"},J=function(e){var t=e.theme,a=e.layout,n=L.a.right;return"dark"===t&&"topmenu"===a&&(n="".concat(L.a.right,"  ").concat(L.a.dark)),s.a.createElement("div",{className:n},s.a.createElement(D,null),s.a.createElement("span",null,s.a.createElement(h["a"],{color:I["buildtest"]},"buildtest")))},S=Object(d["a"])((function(e){var t=e.settings;return{theme:t.navTheme,layout:t.layout}}))(J),B=a("+n12"),H=(a("LxC5"),a("7fyL")),K=a.n(H),M=s.a.createElement(c["a"],{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:s.a.createElement(l["a"],{type:"primary"},s.a.createElement(m["Link"],{to:"/user/login"},"Go Login"))}),U=s.a.createElement(i["a"],{copyright:"\u9655\u897f\u4e07\u76db\u8fbe\u4fe1\u606f\u79d1\u6280\u6709\u9650\u516c\u53f8",links:[]}),W=function(e){var t=e.dispatch,a=e.children,c=e.settings,l=e.location,u=void 0===l?{pathname:"/"}:l,d=(e.loginState,function e(t){return t.map((function(t){var a=Object(o["a"])({},t,{children:t.children?e(t.children):[]});return console.log(a),p["a"].check(t.authority,a,null)}))}),h=function(e){t&&t({type:"global/changeLayoutCollapsed",payload:e})},f=Object(B["a"])(e.route.routes,u.pathname||"/")||{authority:void 0};return s.a.createElement(i["d"],Object(n["a"])({menuHeaderRender:function(e,t){return s.a.createElement(m["Link"],{to:"/",className:K.a.menuTitle},t)},onCollapse:h,menuItemRender:function(e,t){return e.isUrl||e.children||!e.path?t:s.a.createElement(m["Link"],{to:e.path},t)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:"\u9996\u9875"}].concat(Object(r["a"])(e))},itemRender:function(e,t,a,n){var r=0===a.indexOf(e);return r?s.a.createElement(m["Link"],{to:n.join("/")},e.breadcrumbName):s.a.createElement("span",null,e.breadcrumbName)},footerRender:function(){return U},menuDataRender:d,rightContentRender:function(){return s.a.createElement(S,null)}},e,c),s.a.createElement(p["a"],{authority:f.authority,noMatch:M},a))};t["default"]=Object(d["a"])((function(e){var t=e.login,a=e.global,n=e.settings;return{collapsed:a.collapsed,settings:n,loginState:t}}))(W)}}]);