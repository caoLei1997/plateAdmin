(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{LGu7:function(e,t,a){e.exports={main:"antd-pro-pages-authority-mange-index-main"}},qTtk:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Hx5s"),u=(a("14J3"),a("BMrR")),i=(a("+L6B"),a("2/Rp")),c=(a("jCWc"),a("kPKH")),o=(a("5NDa"),a("5rEg")),s=(a("OaEy"),a("2fM7")),m=(a("y8nQ"),a("Vl3Y")),d=a("tJVT"),p=function(e){var t=e.getList,a=m["a"].useForm(),n=Object(d["a"])(a,1),r=n[0],p=s["a"].Option,g=function(){var e=r.getFieldsValue();t({filterValue:e,pageIndex:1})},b=[{label:"\u5168\u90e8",value:""},{label:"\u8d85\u7ea7\u7ba1\u7406\u5458",value:"0"},{label:"\u54c1\u724c\u5382\u5bb6",value:"1"},{label:"\u652f\u961f\u7ba1\u7406\u5458",value:"2"},{label:"\u5927\u961f\u7ba1\u7406\u5458",value:"3"}];return l.a.createElement("div",null,l.a.createElement(m["a"],{form:r,name:"horizontal_login",onFinish:g},l.a.createElement(u["a"],{gutter:20},l.a.createElement(c["a"],{span:6},l.a.createElement(m["a"].Item,{name:"name",label:"\u59d3\u540d"},l.a.createElement(o["a"],{placeholder:"\u59d3\u540d"}))),l.a.createElement(c["a"],{span:6},l.a.createElement(m["a"].Item,{name:"phoneNumber",label:"\u624b\u673a\u53f7"},l.a.createElement(o["a"],{placeholder:"\u624b\u673a\u53f7",maxLength:11}))),l.a.createElement(c["a"],{span:6},l.a.createElement(m["a"].Item,{name:"type",label:"\u89d2\u8272"},l.a.createElement(s["a"],{placeholder:"\u5168\u90e8\u89d2\u8272"},b.map((function(e){return l.a.createElement(p,{key:e.value,value:e.value},e.label)}))))),l.a.createElement(m["a"].Item,null,l.a.createElement(i["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2")))))},g=p,b=(a("g9YV"),a("wCAj")),f=(a("2qtc"),a("kLXV")),v=a("xvlK"),E=(a("6UJt"),a("DFOY")),h=(a("sRBo"),a("kaz8")),O=a("WmNS"),y=a.n(O),I=(a("miYZ"),a("tsqr")),j=a("9og8"),N=a("k1fw"),k=a("9kvl"),L=a("ETKo");function x(e){var t=e.authorityList,a=(e.dispatch,e.isVisible),r=void 0===a||a,u=e.visibleFn,i=void 0===u?null:u,c=e.type,p=e.rowss,g=void 0===p?null:p,b=e.getList,v=g?Object(N["a"])({},g):null,O=s["a"].Option,k=m["a"].useForm(),x=Object(d["a"])(k,1),S=x[0],w=Object(n["useState"])(v&&v.type),C=Object(d["a"])(w,2),V=C[0],T=C[1],F=Object(n["useState"])(v?v.agentOutlesName:void 0),q=Object(d["a"])(F,2),z=q[0],J=q[1],G=[{label:"\u8d85\u7ea7\u7ba1\u7406\u5458",value:"0"},{label:"\u54c1\u724c\u5382\u5bb6",value:"1"},{label:"\u652f\u961f\u7ba1\u7406\u5458",value:"2"},{label:"\u5927\u961f\u7ba1\u7406\u5458",value:"3"}],R=function(){var e=Object(j["a"])(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S.validateFields();case 2:e.sent,t=S.getFieldsValue(),a=null===v?Object(N["a"])(Object(N["a"])({},t),{},{address:null,agentOutlesName:z}):Object(N["a"])(Object(N["a"])(Object(N["a"])({},v),t),{},{address:null,agentOutlesName:z}),Object(L["a"])(a).then((function(e){var t=e.retCode,a=e.retMsg;"0000"==t&&(I["b"].success(a),b({}),i(),S.resetFields())}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){i(),S.resetFields(),T(null)},M=function(e,t){t.label;T(e)},Y=[{label:"\u4eba\u5458\u7ba1\u7406",value:"\u4eba\u5458\u7ba1\u7406"},{label:"\u7ecf\u9500\u5546\u7ba1\u7406",value:"\u7ecf\u9500\u5546\u7ba1\u7406"},{label:"\u76ee\u5f55\u7ba1\u7406",value:"\u76ee\u5f55\u7ba1\u7406"},{label:"\u8f66\u8f86\u7ba1\u7406",value:"\u8f66\u8f86\u7ba1\u7406"},{label:"\u5907\u6848\u7ba1\u7406",value:"\u5907\u6848\u7ba1\u7406"},{label:"\u6743\u9650\u7ba1\u7406",value:"\u6743\u9650\u7ba1\u7406"},{label:"SN\u7ba1\u7406",value:"SN\u7ba1\u7406"}],B=function(e){return"0"==e?"\u62e5\u6709\u6240\u6709\u6743\u9650":"1"==e?l.a.createElement(h["a"].Group,{key:"1",disabled:!0,options:Y,defaultValue:["\u8f66\u8f86\u7ba1\u7406","SN\u7ba1\u7406"]}):"2"!=e&&"3"!=e||null==e||"\u8d85\u7ea7\u7ba1\u7406\u5458"==e?"\u6839\u636e\u89d2\u8272\u9009\u62e9\u81ea\u52a8\u5339\u914d":l.a.createElement(h["a"].Group,{key:"2",disabled:!0,options:Y,defaultValue:["\u5907\u6848\u7ba1\u7406"]})},D=function(e,t){var a=t.agentOutletsName;J(a)},P=Object(n["useState"])([]),H=Object(d["a"])(P,2),Q=H[0],W=H[1];function A(e){var t=Object(d["a"])(e,2),a=t[0],n=t[1];S.setFieldsValue({agentOutletsId:void 0}),Object(L["d"])({city:a,region:n}).then((function(e){W(e.data)}))}function U(e){return e.join("-")}return l.a.createElement("div",null,l.a.createElement(f["a"],{title:"add"===c?"\u65b0\u589e\u7ba1\u7406\u5458":"\u7f16\u8f91",visible:r,onOk:R,onCancel:K},l.a.createElement(m["a"],{labelCol:{span:4},form:S,initialValues:Object(N["a"])(Object(N["a"])({},v),{},{type:v&&v.type,agentOutletsId:v&&v.agentOutletsId})},l.a.createElement(m["a"].Item,{rules:[{required:!0,message:"\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a"}],label:"\u59d3\u540d",name:"name"},l.a.createElement(o["a"],{placeholder:"\u59d3\u540d"})),l.a.createElement(m["a"].Item,{rules:[{required:!0,len:11,message:"\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a"}],label:"\u624b\u673a\u53f7",name:"phoneNumber"},l.a.createElement(o["a"],{placeholder:"\u624b\u673a\u53f7",maxLength:11})),l.a.createElement(m["a"].Item,{rules:[{required:!0,message:"\u89d2\u8272\u4e0d\u80fd\u4e3a\u7a7a"}],label:"\u9009\u62e9\u89d2\u8272",className:"mt-8",name:"type"},l.a.createElement(s["a"],{getPopupContainer:function(e){return e.parentNode},placeholder:"\u9009\u62e9\u89d2\u8272",onChange:M},G.map((function(e,t){return l.a.createElement(O,{key:t,label:e.label,value:e.value},e.label)})))),"1"==V&&l.a.createElement(m["a"].Item,{rules:[{required:!0,message:"\u54c1\u724c\u5382\u5bb6\u4e0d\u80fd\u4e3a\u7a7a"}],label:"\u54c1\u724c\u5382\u5bb6",name:"agentOutletsId"},l.a.createElement(s["a"],{getPopupContainer:function(e){return e.parentNode},placeholder:"\u8bf7\u9009\u62e9\u54c1\u724c\u5382\u5bb6",onChange:D},t.agentList&&t.agentList.length&&t.agentList.map((function(e,t){return l.a.createElement(O,{key:t,agentOutletsName:e.agentOutlesName,value:e.agentOutlesId},e.agentOutlesName)})))),"2"==V&&l.a.createElement(m["a"].Item,{label:"\u6240\u5c5e\u652f\u961f",rules:[{required:!0,message:"\u6240\u5c5e\u652f\u961f\u4e0d\u80fd\u4e3a\u7a7a"}],name:"agentOutletsId"},l.a.createElement(s["a"],{placeholder:"\u9009\u62e9\u6240\u5c5e\u652f\u961f",onChange:D},t.detachment&&t.detachment.map((function(e,t){return l.a.createElement(O,{key:t,agentOutletsName:e.agentOutlesName,value:e.agentOutlesId},e.agentOutlesName)})))),"3"==V&&l.a.createElement("div",null,l.a.createElement(m["a"].Item,{rules:[{required:!0,message:"\u5e02\u533a\u4e0d\u80fd\u4e3a\u7a7a"}],name:"address",label:"\u6240\u5c5e\u5927\u961f"},l.a.createElement(E["a"],{options:t.cityTree,expandTrigger:"hover",displayRender:U,onChange:A,placeholder:"\u9009\u62e9\u5e02\u533a"})),l.a.createElement(m["a"].Item,{colon:!1,label:" ",rules:[{required:!0,message:"\u6240\u5c5e\u5927\u961f\u4e0d\u80fd\u4e3a\u7a7a"}],name:"agentOutletsId"},l.a.createElement(s["a"],{placeholder:"\u9009\u62e9\u6240\u5c5e\u5927\u961f"},Q&&Q.length&&Q.map((function(e){return l.a.createElement(O,{key:e.agentOutlesId,value:e.agentOutlesId},e.agentOutlesName)}))))),l.a.createElement(m["a"].Item,{label:"\u529f\u80fd\u6743\u9650"},B(V),l.a.createElement("div",null)))))}var S=Object(k["a"])((function(e){var t=e.authorityList;return{authorityList:t}}))(x),w=a("LxC5"),C=function(e){var t=e.authorityList,a=e.dispatch,r=e.getList,o=e.tableLoading,s=f["a"].confirm,m=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u624b\u673a\u53f7",dataIndex:"phoneNumber",key:"phoneNumber"},{title:"\u89d2\u8272",dataIndex:"type",key:"type",render:function(e,t){function a(e){return 0==e?"\u8d85\u7ea7\u7ba1\u7406\u5458":1==e?"\u54c1\u724c\u5382\u5bb6":2==e?"\u652f\u961f\u7ba1\u7406\u5458":3==e?"\u5927\u961f\u7ba1\u7406\u5458":void 0}return l.a.createElement("div",null,a(e),l.a.createElement("p",null,t.agentOutletsName&&"(".concat(t.agentOutletsName,")")))}},{title:"\u529f\u80fd\u6743\u9650",dataIndex:"power",key:"power"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return l.a.createElement("div",null,1==e?l.a.createElement("a",{className:"font-red"},"\u505c\u7528"):l.a.createElement("a",{className:"font-success"},"\u6b63\u5e38"))}},{title:"\u505c\u7528/\u542f\u7528\u65e5\u671f",dataIndex:"updateTime",key:"updateTime"},{title:"\u64cd\u4f5c",key:"action",render:function(e){return e.phoneNumber==w["c"]?l.a.createElement("div",null,l.a.createElement("a",{onClick:function(){K("edit",e)},className:"mr-8"},"\u7f16\u8f91")):l.a.createElement("div",null,l.a.createElement("a",{onClick:function(){K("edit",e)},className:"mr-8"},"\u7f16\u8f91"),1==e.status?l.a.createElement("a",{onClick:function(){g(e)}},"\u542f\u7528"):l.a.createElement("a",{onClick:function(){p(e)},className:"font-red"},"\u505c\u7528"))}}],p=function(e){var t=e.id;s({title:"\u505c\u7528",content:"\u505c\u7528\u4f1a\u5bfc\u81f4\u8be5\u7ba1\u7406\u5458\u4e0d\u80fd\u5728\u767b\u5f55\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u8fdb\u884c\u4efb\u4f55\u7ba1\u7406\u64cd\u4f5c\uff0c\u786e\u8ba4\u8981\u505c\u7528\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){a({type:"authorityList/modifyStatus",payload:{status:1,id:t},onSuccess:function(){r({})}})}})},g=function(e){var t=e.id;s({title:"\u542f\u7528",content:"\u542f\u7528\u540e\u8be5\u7ba1\u7406\u5458\u5c06\u6062\u590d\u8d26\u53f7\u89d2\u8272\u5bf9\u5e94\u7ba1\u7406\u6743\u9650\uff0c\u786e\u8ba4\u8981\u542f\u7528\u5417\uff1f",cancelText:"\u53d6\u6d88",okText:"\u786e\u8ba4",onOk:function(){a({type:"authorityList/modifyStatus",payload:{status:0,id:t},onSuccess:function(){r({})}})}})},E=function(e){r({pageIndex:e,pageSize:y})},h=Object(n["useState"])(t.pageSize),O=Object(d["a"])(h,2),y=O[0],I=O[1],j={total:t.total,pageIndex:t.pageIndex,onChange:E,showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,pageSize:y,onShowSizeChange:function(e,t){I(t),r({pageIndex:e,pageSize:t})}},N=Object(n["useState"])(!1),k=Object(d["a"])(N,2),L=k[0],x=k[1],C=Object(n["useState"])("add"),V=Object(d["a"])(C,2),T=V[0],F=V[1],q=Object(n["useState"])(null),z=Object(d["a"])(q,2),J=z[0],G=z[1],R=function(){x(!1)},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;G(t),F(e),x(!0)};return l.a.createElement("div",{className:"mt-32"},l.a.createElement(u["a"],{justify:"end"},l.a.createElement(c["a"],null,l.a.createElement(i["a"],{onClick:function(){K("add")},className:"btn-green",icon:l.a.createElement(v["a"],null),type:"primary"},"\u65b0\u589e"))),l.a.createElement("div",{className:"mt-16"},l.a.createElement(b["a"],{loading:o,rowKey:"id",dataSource:t.content?t.content:[],columns:m,pagination:j})),l.a.createElement(S,{key:J?J.id+(new Date).getTime():"",type:T,isVisible:L,visibleFn:R,rowss:J,getList:r}))},V=Object(k["a"])((function(e){var t=e.loading,a=e.authorityList;return{authorityList:a,tableLoading:t.effects["authorityList/getList"]}}))(C),T=a("LGu7"),F=a.n(T),q=(a("NGMh"),function(e){var t=e.authorityList,a=e.dispatch,u=function(e){var n=e.filterValue,l=void 0===n?t.filterValue:n,r=e.pageIndex,u=void 0===r?t.pageIndex:r,i=e.pageSize,c=void 0===i?t.pageSize:i;a({type:"authorityList/getList",payload:{pageIndex:u,pageSize:c,filterValue:l}})},i=function(){a({type:"authorityList/getRoles"})};return Object(n["useEffect"])((function(){u({pageIndex:1}),i()}),[]),l.a.createElement(r["b"],{className:F.a.main},l.a.createElement("div",null,l.a.createElement(g,{getList:u}),l.a.createElement(V,{getList:u})))});t["default"]=Object(k["a"])((function(e){var t=e.authorityList;return{authorityList:t}}))(q)}}]);