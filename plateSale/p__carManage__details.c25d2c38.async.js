(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"9eKG":function(e,a,t){e.exports={title:"antd-pro-pages-car-manage-details-style-title"}},zxAJ:function(e,a,t){"use strict";t.r(a);t("14J3");var n=t("BMrR"),l=(t("jCWc"),t("kPKH")),i=(t("IzEo"),t("bx4M")),r=(t("g9YV"),t("wCAj")),c=(t("/zsF"),t("PArb")),m=(t("bP8k"),t("gFTJ")),s=(t("cWXX"),t("/ezw")),o=t("k1fw"),d=(t("tU7J"),t("wFql")),u=t("5bA4"),p=t("UESt"),b=t("q1tI"),g=t.n(b),f=t("Hx5s"),y=t("55Ip"),E=t("9kvl"),N=t("K6AL"),k=t("LxC5"),I=t("IICa"),h=(t("2qtc"),t("kLXV")),v=(t("y8nQ"),t("Vl3Y")),x=t("0Owb"),A=(t("+L6B"),t("2/Rp")),S=t("tJVT"),O=(t("5NDa"),t("5rEg")),P=O["a"].TextArea,j=function(e){var a=e.dispatch,t=e.userInfo,n=e.id,l=e.loading,i=e.callBack,r=Object(b["useState"])(!1),c=Object(S["a"])(r,2),m=c[0],s=c[1],o=function(e){s(e)},d=function(e){a({type:"meansDetailAudit/notPass",payload:{id:n,name:t.employeeName,phone:t.phone,notPassReason:e.reason},onSuccess:function(){o(!1),i()}})},u={label:"\u539f\u56e0\uff1a",name:"reason",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u5ba1\u6838\u4e0d\u901a\u8fc7\u7406\u7531"},{max:50,message:"\u5ba1\u6838\u4e0d\u901a\u8fc7\u7406\u7531\u4e0d\u80fd\u8d85\u8fc750\u5b57"}]};return g.a.createElement("div",null,g.a.createElement(A["a"],{onClick:function(){return o(!0)},type:"primary",danger:!0,size:"large"},"\u5ba1\u6838\u4e0d\u901a\u8fc7"),g.a.createElement(h["a"],{title:"\u786e\u8ba4\u5ba1\u6838\u4e0d\u901a\u8fc7\u5417",visible:m,footer:null,onCancel:function(){return o(!1)}},g.a.createElement(v["a"],{name:"catalog-manage-modal-add",onFinish:d},g.a.createElement(v["a"].Item,Object(x["a"])({name:"brandName"},u),g.a.createElement(P,{rows:4,placeholder:"\u8bf7\u586b\u5199\u5ba1\u6838\u4e0d\u901a\u8fc7\u7406\u7531",maxLength:50})),g.a.createElement("div",{style:{textAlign:"right"}},g.a.createElement(A["a"],{loading:l,type:"primary",htmlType:"submit",style:{marginRight:16}},"\u786e\u5b9a"),g.a.createElement(A["a"],{onClick:function(){return o(!1)}},"\u53d6\u6d88")))))},w=(Object(E["connect"])((function(e){var a=e.login,t=e.loading;return{userInfo:a,loading:t.effects["meansDetailAudit/notPass"]}}))(j),t("LZAR"),O["a"].TextArea,d["a"].Text),C=(d["a"].Title,function(e){var a=e.dispatch,t=e.userInfo,n=e.loading,l=e.auditInfo,i=e.params,r=e.callBack,c=Object(b["useState"])(!1),s=Object(S["a"])(c,2),o=s[0],d=s[1],u=function(e){d(e)},p=function(){u(!0),a({type:"meansDetailAudit/getPlateAndName",payload:{id:i.id}})},f=function(e){a({type:"meansDetailAudit/pass",payload:{id:i.id,name:t.employeeName,phone:t.phone,firstAgentOutletsId:l.firstAgentOutletsId,firstAgentOutletsName:l.firstAgentOutletsName,secondaryAgentOutletsId:i.agentOutletsId,secondaryAgentOutletsName:l.secondaryAgentOutletsName,prefix:l.plateNumberPrefix,type:i.type,electrombileUsage:i.electrombileUsage,plateNumberCode:e.plateNumber,plateNumber:l.plateNumberPrefix+e.plateNumber},onSuccess:function(){u(!1),r()}})},y={label:"\u5206\u914d\u53f7\u724c\uff1a",name:"plateNumber",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8f66\u724c\u53f7"}]};return g.a.createElement("div",null,g.a.createElement(A["a"],{onClick:p,type:"primary",size:"large"},"\u5ba1\u6838\u901a\u8fc7"),g.a.createElement(h["a"],{title:"\u5ba1\u6838\u901a\u8fc7",visible:o,footer:null,onCancel:function(){return u(!1)}},g.a.createElement(v["a"],{name:"catalog-manage-modal-add",onFinish:f},g.a.createElement(w,null,l.secondaryAgentOutletsName),g.a.createElement(m["a"],{className:"mt-16"},g.a.createElement(m["a"].Item,{span:24,label:"\u8f66\u724c\u5e8f\u53f7"},l.plateNumberPrefix),g.a.createElement(m["a"].Item,{span:24,label:"\u53f7\u724c\u7c7b\u578b"},i.typeStr),g.a.createElement(m["a"].Item,{span:24,label:"\u53f7\u724c\u7528\u9014"},i.electrombileUsageStr)),g.a.createElement(v["a"].Item,null,g.a.createElement(v["a"].Item,Object(x["a"])({name:"brandName"},y),g.a.createElement(O["a"],{placeholder:"\u8f93\u5165\u8f66\u724c\u53f7"})),g.a.createElement(w,{type:"warning"},"\u4ec5\u8f93\u5165\u6570\u5b57\u90e8\u5206")),g.a.createElement("div",{style:{textAlign:"right"}},g.a.createElement(A["a"],{loading:n,type:"primary",htmlType:"submit",style:{marginRight:16}},"\u786e\u5b9a"),g.a.createElement(A["a"],{onClick:function(){return u(!1)}},"\u53d6\u6d88")))))}),D=(Object(E["connect"])((function(e){var a=e.meansDetailAudit,t=e.login,n=e.loading;return{auditInfo:a.plateAndName,userInfo:t,loading:n.effects["meansDetailAudit/pass"]}}))(C),[{title:"\u8f66\u8f86\u4fe1\u606f",id:1,children:[{id:11,label:"\u4f9d\u636e\u6807\u51c6",key:"complianceVehicleTypeStr"},{id:12,label:"\u8f66\u8f86\u5236\u9020\u5546",key:"electrombileManufacturer"},{id:13,label:"\u8f66\u8f86\u4e2d\u6587\u5546\u6807",key:"electrombileChineseTradeMark"},{id:14,label:"\u6574\u8f66\u7f16\u7801",key:"electrombileNumber"},{id:15,label:"\u8f66\u8f86\u578b\u53f7",key:"modelName"},{id:16,label:"\u4ea7\u54c1\u5408\u683c\u8bc1",key:"electrombileCertificate"},{id:17,label:"\u8f66\u8eab\u957f\u5ea6",key:"electrombileLengthStr"},{id:18,label:"\u8f66\u8eab\u5bbd\u5ea6",key:"electrombileWidthStr"},{id:19,label:"\u8f66\u8eab\u9ad8\u5ea6",key:"electrombileHeightStr"},{id:110,label:"\u7eed\u822a\u91cc\u7a0b",key:"enduranceMileageStr"},{id:111,label:"\u6574\u8f66\u8d28\u91cf",key:"totalWeight"},{id:112,label:"\u6700\u9ad8\u8bbe\u8ba1\u65f6\u901f",key:"maximumDesignedSpeed"},{id:113,label:"\u6574\u8f66\u7f16\u7801\u4f4d\u7f6e",key:"codeOnFrame"},{id:114,label:"\u94ed\u724c\u56fa\u5b9a\u4f4d\u7f6e",key:"fixedPositionName"},{id:116,label:"\u5236\u9020\u65e5\u671f",key:"manufactureDate"},{id:117,label:"\u9500\u552e\u4f01\u4e1a\u540d\u79f0",key:"saleEnterpriseName"},{id:118,label:"\u751f\u4ea7\u4f01\u4e1a\u540d\u79f0",key:"factoryName"},{id:119,label:"\u7535\u673a\u7f16\u7801",key:"electricNumber"},{id:120,label:"\u8f66\u8eab\u989c\u8272",key:"electrombileColor"},{id:121,label:"\u8f66\u8f86\u7528\u9014",key:"electrombileUsageStr"},{id:122,label:"\u53f7\u724c\u79cd\u7c7b",key:"plateNumberTypeStr"}]}]),L=t("9eKG"),T=t.n(L),z=d["a"].Text,J=[{title:"\u5ba1\u6838\u4eba",dataIndex:"auditName",key:"auditName"},{title:"\u5ba1\u6838\u65e5\u671f",dataIndex:"auditedAt",key:"auditedAt"},{title:"\u5ba1\u6838\u7ed3\u679c",dataIndex:"auditStatus",key:"auditStatus",render:function(e){var a=N["b"].filter((function(a){return a.key===e}))||[];return g.a.createElement("span",{className:"font-".concat(a[0].color)},a[0].val)}},{title:"\u4e0d\u901a\u8fc7\u539f\u56e0",dataIndex:"notPassReason",key:"notPassReason"}],R=function(e){var a=e.dispatch,t=e.match,d=e.detailState,E=e.loading,N=(e.meansListState,e.history),h=JSON.parse(sessionStorage.getItem(k["g"])),v=function(e){a({type:"meansDetail/getDetail",payload:{id:e}})};Object(b["useEffect"])((function(){S(),v(t.params.id)}),[t.params.id]);var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",a=h.findIndex((function(e){return e===Number(t.params.id)}));return"next"===e?h[a+1]:h[a-1]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first",a=h.findIndex((function(e){return e===Number(t.params.id)}));return"last"===e?a===h.length-1:0===a},S=function(e){var t=JSON.parse(sessionStorage.getItem(k["f"])),n=t.pageIndex;"first"===e&&(n=t.pageIndex-1),"last"===e&&(n=t.pageIndex+1),a({type:"meansList/getList",payload:Object(o["a"])(Object(o["a"])({},t),{},{pageIndex:n}),onSuccess:function(a){e&&N.replace("/carmanage/basic/details/".concat(a))}})};t.params.id,d.agentOutletsId,d.plateNumberType,d.electrombileUsage,d.electrombileUsageStr,d.type,d.typeStr;return g.a.createElement(f["b"],null,E?g.a.createElement("div",{style:{backgroundColor:"#ffffff",padding:16}},g.a.createElement(s["a"],{active:!0})):g.a.createElement("div",null,g.a.createElement(i["a"],{bordered:!1},D.map((function(e){return g.a.createElement("div",null,g.a.createElement(m["a"],{title:e.title},e.children.length>0&&e.children.map((function(e){return g.a.createElement(m["a"].Item,{key:e.id,label:e.label},d[e.key])}))),g.a.createElement("div",{style:{marginBottom:32}},g.a.createElement(z,{className:"inline-block top mr-8",style:{color:"rgba(0,0,0,0.85)"}},"\u8f66\u8f86\u7167\u7247:"),g.a.createElement("div",{className:"inline inline-block text-center"},d.carPic&&d.carPic.map((function(e){return g.a.createElement("div",{className:"mr-16"},e.url&&g.a.createElement("div",null,g.a.createElement(I["a"],{layout:"inline",src:e.url}),g.a.createElement("p",{className:"mt-8 font-size-12"},e.title)))})))),g.a.createElement(c["a"],{style:{marginBottom:32}}))})),g.a.createElement("div",{className:T.a.title},"\u5ba1\u6838\u8bb0\u5f55"),g.a.createElement(r["a"],{style:{marginBottom:24},pagination:!1,dataSource:d.managementPlatformAuditRecordsList,columns:J,rowKey:"id"})),g.a.createElement(n["a"],{justify:"space-between",align:"middle",className:"mt-32"},g.a.createElement(l["a"],{span:3},A()?g.a.createElement(z,{className:"font-size-20",disabled:!0},g.a.createElement(u["a"],null),"\u4e0a\u4e00\u4e2a"):g.a.createElement(y["a"],{className:"font-size-20",to:"/carmanage/basic/details/".concat(x("prev"))},g.a.createElement(u["a"],null),"\u4e0a\u4e00\u4e2a")),g.a.createElement(l["a"],{span:3,style:{textAlign:"right"}},A("last")?g.a.createElement(z,{className:"font-size-20",disabled:!0},"\u4e0b\u4e00\u4e2a",g.a.createElement(p["a"],null)):g.a.createElement(y["a"],{className:"font-size-20",to:"/carmanage/basic/details/".concat(x("next"))},g.a.createElement("span",null,"\u4e0b\u4e00\u4e2a"),g.a.createElement(p["a"],null))))))};a["default"]=Object(E["connect"])((function(e){var a=e.meansList,t=e.meansDetail,n=e.loading,l=e.login;return{detailState:t.data,userInfo:l,meansListState:a,loading:n.effects["meansDetail/getDetail"]}}))(R)}}]);