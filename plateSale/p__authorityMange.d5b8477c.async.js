(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{LGu7:function(e,a,t){e.exports={main:"antd-pro-pages-authority-mange-index-main"}},qTtk:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Hx5s"),i=(t("14J3"),t("BMrR")),c=(t("+L6B"),t("2/Rp")),u=(t("jCWc"),t("kPKH")),o=(t("5NDa"),t("5rEg")),s=t("k1fw"),m=(t("OaEy"),t("2fM7")),d=(t("y8nQ"),t("Vl3Y")),p=t("tJVT"),g=t("9kvl"),b=function(e){e.dispatch;var a=e.authorityList,t=e.getList,n=d["a"].useForm(),r=Object(p["a"])(n,1),g=r[0],b=m["a"].Option,h=function(){var e=g.getFieldsValue();t(Object(s["a"])({},e,{pageIndex:1}))};return l.a.createElement("div",null,l.a.createElement(d["a"],{form:g,name:"horizontal_login",onFinish:h},l.a.createElement(i["a"],{gutter:20},l.a.createElement(u["a"],{span:6},l.a.createElement(d["a"].Item,{name:"name",label:"\u59d3\u540d"},l.a.createElement(o["a"],{placeholder:"\u59d3\u540d"}))),l.a.createElement(u["a"],{span:6},l.a.createElement(d["a"].Item,{name:"phoneNumber",label:"\u624b\u673a\u53f7"},l.a.createElement(o["a"],{placeholder:"\u624b\u673a\u53f7",maxLength:11}))),l.a.createElement(u["a"],{span:6},l.a.createElement(d["a"].Item,{name:"type",label:"\u89d2\u8272"},l.a.createElement(m["a"],{placeholder:"\u5168\u90e8\u89d2\u8272"},a.rolesList&&a.rolesList.map((function(e){return l.a.createElement(b,{key:e.code,value:e.code+","+e.type},e.message)}))))),l.a.createElement(d["a"].Item,null,l.a.createElement(c["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2")))))},h=Object(g["a"])((function(e){var a=e.authorityList;return{authorityList:a}}))(b),E=(t("g9YV"),t("wCAj")),f=(t("2qtc"),t("kLXV")),v=t("xvlK"),y=(t("6UJt"),t("DFOY")),L=(t("sRBo"),t("kaz8")),O=t("WmNS"),j=t.n(O),k=(t("miYZ"),t("tsqr")),I=t("9og8"),x=t("ETKo");function N(e){var a=e.authorityList,t=(e.dispatch,e.isVisible),r=void 0===t||t,i=e.visibleFn,c=void 0===i?null:i,u=e.type,g=e.rows,b=void 0===g?null:g,h=e.getList,E=m["a"].Option,v=d["a"].useForm(),O=Object(p["a"])(v,1),N=O[0],w=Object(n["useState"])(b?b.role:null),C=Object(p["a"])(w,2),S=C[0],z=C[1],T=Object(n["useState"])({}),V=Object(p["a"])(T,2),F=V[0],J=V[1],q=function(){var e=Object(I["a"])(j.a.mark((function e(){var a,t,n,l,r,i;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.validateFields();case 2:e.sent,a=F.brandid,t=void 0===a?"":a,n=F.brandname,l=void 0===n?"":n,r=N.getFieldsValue(),console.log(b),i=null===b?Object(s["a"])({},r,{brandId:t,brandName:l}):Object(s["a"])({},r,{agentOutletsId:b.agentOutletsId,brandId:t||b.brandId,brandName:l||b.brandName,id:b&&b.id}),Object(x["a"])(i).then((function(e){var a=e.retCode,t=e.retMsg;"0000"==a&&(k["a"].success(t),h(),c(),N.resetFields())}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){c(),N.resetFields(),z(null)},R=function(e,a){var t=a.key;z(t)},D=[{label:"\u4eba\u5458\u7ba1\u7406",value:"\u4eba\u5458\u7ba1\u7406"},{label:"\u7ecf\u9500\u5546\u7ba1\u7406",value:"\u7ecf\u9500\u5546\u7ba1\u7406"},{label:"\u76ee\u5f55\u7ba1\u7406",value:"\u76ee\u5f55\u7ba1\u7406"},{label:"\u8f66\u8f86\u7ba1\u7406",value:"\u8f66\u8f86\u7ba1\u7406"},{label:"\u5907\u6848\u7ba1\u7406",value:"\u5907\u6848\u7ba1\u7406"},{label:"\u6743\u9650\u7ba1\u7406",value:"\u6743\u9650\u7ba1\u7406"}],G=function(e){return"\u8d85\u7ea7\u7ba1\u7406\u5458"===e?"\u62e5\u6709\u6240\u6709\u6743\u9650":"\u54c1\u724c\u5382\u5bb6"===e?l.a.createElement(L["a"].Group,{key:"1",disabled:!0,options:D,defaultValue:["\u8f66\u8f86\u7ba1\u7406"]}):"\u54c1\u724c\u5382\u5bb6"!=e&&null!=e&&"\u8d85\u7ea7\u7ba1\u7406\u5458"!=e?l.a.createElement(L["a"].Group,{key:"2",disabled:!0,options:D,defaultValue:["\u5907\u6848\u7ba1\u7406"]}):"\u6839\u636e\u89d2\u8272\u9009\u62e9\u81ea\u52a8\u5339\u914d"},H=function(e,a){J(a)},K=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function M(e){console.log(e)}function B(e){return e.join("-")}return l.a.createElement("div",null,l.a.createElement(f["a"],{title:"add"===u?"\u65b0\u589e\u7ba1\u7406\u5458":"\u7f16\u8f91",visible:r,onOk:q,onCancel:Y},l.a.createElement(d["a"],{labelCol:{span:4},form:N,initialValues:Object(s["a"])({},b,{type:b&&b.role,agentOutletsId:b&&b.brandname})},l.a.createElement(d["a"].Item,{rules:[{required:!0,message:"\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a"}],label:"\u59d3\u540d",name:"name"},l.a.createElement(o["a"],{placeholder:"\u59d3\u540d"})),l.a.createElement(d["a"].Item,{rules:[{required:!0,len:11,message:"\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a"}],label:"\u624b\u673a\u53f7",name:"phoneNumber"},l.a.createElement(o["a"],{placeholder:"\u624b\u673a\u53f7",maxLength:11})),l.a.createElement(d["a"].Item,{rules:[{required:!0,message:"\u89d2\u8272\u4e0d\u80fd\u4e3a\u7a7a"}],label:"\u9009\u62e9\u89d2\u8272",className:"mt-8",name:"type"},l.a.createElement(m["a"],{getPopupContainer:function(e){return e.parentNode},placeholder:"\u9009\u62e9\u89d2\u8272",onChange:R},a.rolesList&&a.rolesList.map((function(e){return l.a.createElement(E,{key:e.message,value:e.code+","+e.type},e.message)})))),l.a.createElement(d["a"].Item,{label:"\u6240\u5c5e\u652f\u961f"},l.a.createElement(m["a"],{placeholder:"\u9009\u62e9\u6240\u5c5e\u652f\u961f"},l.a.createElement(E,{value:"jack"},"Jack"),l.a.createElement(E,{value:"lucy"},"Lucy"),l.a.createElement(E,{value:"Yiminghe"},"yiminghe"))),l.a.createElement(d["a"].Item,{label:"\u6240\u5c5e\u5927\u961f"},l.a.createElement("div",null,l.a.createElement(y["a"],{options:K,expandTrigger:"hover",displayRender:B,onChange:M,plplaceholder:"\u9009\u62e9\u5e02\u533a"}))),l.a.createElement(d["a"].Item,{colon:!1,label:" "},l.a.createElement("div",null,l.a.createElement(m["a"],{placeholder:"\u9009\u62e9\u6240\u5c5e\u5927\u961f"},l.a.createElement(E,{value:"jack"},"Jack"),l.a.createElement(E,{value:"lucy"},"Lucy"),l.a.createElement(E,{value:"Yiminghe"},"yiminghe")))),"\u54c1\u724c\u5382\u5bb6"==S&&l.a.createElement(d["a"].Item,{rules:[{required:!0,message:"\u7ecf\u9500\u5546\u4e0d\u80fd\u4e3a\u7a7a"}],label:"\u7ecf\u9500\u5546",name:"agentOutletsId"},l.a.createElement(m["a"],{getPopupContainer:function(e){return e.parentNode},placeholder:"\u7ecf\u9500\u5546",onChange:H},a.agentList&&a.agentList.map((function(e,a){return l.a.createElement(E,{brandid:e.brandId,brandname:e.brandName,key:a,value:e.agentOutletId},e.brandName)})))),l.a.createElement(d["a"].Item,{label:"\u529f\u80fd\u6743\u9650"},G(S),l.a.createElement("div",null)))))}var w=Object(g["a"])((function(e){var a=e.authorityList;return{authorityList:a}}))(N),C=t("LxC5"),S=function(e){var a=e.authorityList,t=e.dispatch,r=e.getList,o=e.tableLoading,m=(e.login,f["a"].confirm),d=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u624b\u673a\u53f7",dataIndex:"phoneNumber",key:"phoneNumber"},{title:"\u89d2\u8272",dataIndex:"role",key:"role",render:function(e,a){return"\u652f\u961f\u7ba1\u7406\u5458"===e?l.a.createElement("div",null,e,l.a.createElement("div",null," (",a.roleArea,")")):l.a.createElement("div",null,e," ",a.brandName&&l.a.createElement("span",null," (",a.brandName+"\u54c1\u724c\u5382\u5bb6",")")," ")}},{title:"\u529f\u80fd\u6743\u9650",dataIndex:"power",key:"power"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return l.a.createElement("div",null,1==e?l.a.createElement("a",{className:"font-red"},"\u505c\u7528"):l.a.createElement("a",{className:"font-success"},"\u6b63\u5e38"))}},{title:"\u505c\u7528/\u542f\u7528\u65e5\u671f",dataIndex:"updateTime",key:"updateTime"},{title:"\u64cd\u4f5c",key:"action",render:function(e){return e.phoneNumber==C["c"]?l.a.createElement("div",null,l.a.createElement("a",{onClick:function(){B("edit",e)},className:"mr-8"},"\u7f16\u8f91")):l.a.createElement("div",null,l.a.createElement("a",{onClick:function(){B("edit",e)},className:"mr-8"},"\u7f16\u8f91"),1==e.status?l.a.createElement("a",{onClick:function(){b(e)}},"\u542f\u7528"):l.a.createElement("a",{onClick:function(){g(e)},className:"font-red"},"\u505c\u7528"))}}],g=function(e){var a=e.id;m({title:"\u505c\u7528",content:"\u505c\u7528\u4f1a\u5bfc\u81f4\u8be5\u7ba1\u7406\u5458\u4e0d\u80fd\u5728\u767b\u5f55\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u8fdb\u884c\u4efb\u4f55\u7ba1\u7406\u64cd\u4f5c\uff0c\u786e\u8ba4\u8981\u505c\u7528\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){t({type:"authorityList/modifyStatus",payload:{status:1,id:a}})},onCancel:function(){}})},b=function(e){var a=e.id;m({title:"\u542f\u7528",content:"\u542f\u7528\u540e\u8be5\u7ba1\u7406\u5458\u5c06\u6062\u590d\u8d26\u53f7\u89d2\u8272\u5bf9\u5e94\u7ba1\u7406\u6743\u9650\uff0c\u786e\u8ba4\u8981\u542f\u7528\u5417\uff1f",cancelText:"\u53d6\u6d88",okText:"\u786e\u8ba4",onOk:function(){t({type:"authorityList/modifyStatus",payload:{status:0,id:a}})},onCancel:function(){}})},h=Object(n["useState"])(a.pageSize),y=Object(p["a"])(h,2),L=y[0],O=y[1],j=Object(n["useState"])(a.pageIndex),k=Object(p["a"])(j,2),I=k[0],x=k[1];Object(n["useEffect"])((function(){O(a.pageSize),x(a.pageIndex)}),[a.pageSize,a.pageIndex]);var N=function(e){r(Object(s["a"])({},a.filterValue,{pageIndex:e,pageSize:L}))},S={total:a.total,pageIndex:I,pageSize:L,onChange:N,showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(e,a){O(a)}},z=Object(n["useState"])(!1),T=Object(p["a"])(z,2),V=T[0],F=T[1],J=Object(n["useState"])("add"),q=Object(p["a"])(J,2),Y=q[0],R=q[1],D=Object(n["useState"])(null),G=Object(p["a"])(D,2),H=G[0],K=G[1],M=function(){F(!1)},B=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;K(a),R(e),F(!0)};return l.a.createElement("div",{className:"mt-32"},l.a.createElement(i["a"],{justify:"end"},l.a.createElement(u["a"],null,l.a.createElement(c["a"],{onClick:function(){B("add")},className:"btn-green",icon:l.a.createElement(v["a"],null),type:"primary"},"\u65b0\u589e"))),l.a.createElement("div",{className:"mt-16"},l.a.createElement(E["a"],{key:a.pageIndex+(new Date).getTime(),loading:o,rowKey:"id",dataSource:a.data?a.data.content:[],columns:d,pagination:S})),l.a.createElement(w,{key:H?H.id+(new Date).getTime():1,type:Y,isVisible:V,visibleFn:M,rows:H,getList:r}))},z=Object(g["a"])((function(e){var a=e.authorityList,t=e.loading,n=e.login;return{authorityList:a,login:n,tableLoading:t.effects["authorityList/getList"]}}))(S),T=t("LGu7"),V=t.n(T),F=function(e){var a=e.authorityList,t=e.dispatch,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.pageIndex,l=a.pageSize;t({type:"authorityList/getList",payload:{pageIndex:n,pageSize:l,filterValue:e}})},c=function(){t({type:"authorityList/getRoles"})};return Object(n["useEffect"])((function(){i(),c()}),[]),l.a.createElement(r["b"],{className:V.a.main},l.a.createElement("div",null,l.a.createElement(h,{getList:i}),l.a.createElement(z,{getList:i})))};a["default"]=Object(g["a"])((function(e){var a=e.authorityList;return{authorityList:a}}))(F)}}]);