(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{CUBi:function(e,a,t){"use strict";t.r(a);t("2qtc");var n=t("kLXV"),l=(t("Mwp2"),t("VXEj")),r=(t("g9YV"),t("wCAj")),c=(t("y8nQ"),t("Vl3Y")),i=(t("5NDa"),t("5rEg")),o=t("tJVT"),s=t("q1tI"),m=t.n(s),d=t("9kvl"),p=t("Hx5s"),u=t("D+M2"),g=t.n(u),f=(t("+L6B"),t("2/Rp")),E=(t("14J3"),t("BMrR")),b=(t("OaEy"),t("2fM7")),x=(t("jCWc"),t("kPKH")),S=t("k1fw"),h=(t("iQDF"),t("+eQT")),v=t("WqHJ"),N=t.n(v),y=t("LZAR"),I=h["a"].RangePicker,O=function(e){var a=e.snDeclare,t=e.getList,n=c["a"].useForm(),l=Object(o["a"])(n,1),r=l[0],s=function(e){var a=e.applyTimeStart,n=e.auditTimeStart,l=Object(S["a"])(Object(S["a"])({},e),{},{applyTimeStart:a&&Object(y["a"])(a[0]),applyTimeEnd:a&&Object(y["a"])(a[1]),auditTimeStart:n&&Object(y["a"])(n[0]),auditTimeEnd:n&&Object(y["a"])(n[1])});t({pageIndex:1,filter:l})};a.agentList;return m.a.createElement("div",{className:N.a.filter},m.a.createElement(c["a"],{form:r,name:"advanced_search",className:"ant-advanced-search-form",onFinish:s},m.a.createElement(E["a"],{gutter:24},m.a.createElement(x["a"],{span:6},m.a.createElement(c["a"].Item,{label:"\u6279\u6b21\u540d\u79f0",name:"batchName"},m.a.createElement(i["a"],{placeholder:"\u6279\u6b21\u540d\u79f0"}))),m.a.createElement(x["a"],{span:6},m.a.createElement(c["a"].Item,{label:"\u7533\u8bf7\u65e5\u671f",name:"applyTimeStart"},m.a.createElement(I,null))),m.a.createElement(x["a"],{span:6},m.a.createElement(c["a"].Item,{label:"\u5ba1\u6838\u72b6\u6001",name:"approvalStatus"},m.a.createElement(b["a"],{placeholder:"\u5ba1\u6838\u72b6\u6001"},m.a.createElement(b["a"].Option,{value:""},"\u5168\u90e8"),m.a.createElement(b["a"].Option,{value:"1"},"\u5f85\u5ba1\u6838"),m.a.createElement(b["a"].Option,{value:"2"},"\u672a\u901a\u8fc7"),m.a.createElement(b["a"].Option,{value:"3"},"\u5df2\u901a\u8fc7"))))),m.a.createElement(E["a"],{gutter:24},m.a.createElement(x["a"],{span:6},m.a.createElement(c["a"].Item,{label:"\u5ba1\u6838\u65e5\u671f",name:"auditTimeStart"},m.a.createElement(I,null))),m.a.createElement(x["a"],{span:6},m.a.createElement(f["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"))),m.a.createElement(E["a"],null)))},D=Object(d["a"])((function(e){var a=e.snDeclare;return{snDeclare:a}}))(O),j=(t("DZo9"),t("8z0m")),k=(t("fOrg"),t("+KLJ")),C=(t("tU7J"),t("wFql")),w=t("xvlK"),T=t("zXdt"),L=C["a"].Text;function z(e){var a=e.snDeclare,t=e.dispatch,l=e.getList,r=Object(s["useState"])(!1),i=Object(o["a"])(r,2),d=i[0],p=i[1],u=Object(s["useState"])([]),b=Object(o["a"])(u,2),S=b[0],h=b[1],v=c["a"].useForm(),N=Object(o["a"])(v,1),y=N[0],I=function(){h([]),p(!1),t({type:"snDeclare/clearExcelData"})},O={accept:".xls",showUploadList:!0,onRemove:function(e){h([]),t({type:"snDeclare/clearExcelData"})},beforeUpload:function(e){return h([e]),t({type:"snDeclare/clearExcelData"}),!1},fileList:S},D=function(e){var a=new FormData;a.append("file",e),t({type:"snDeclare/reqUpload",payload:{formData:a},onSuccess:function(){p(!1),h([]),l({})}})};Object(s["useEffect"])((function(){return function(){t({type:"snDeclare/clearExcelData"})}}),[]);var C=function(){S&&0!==S.length?D(S[0]):h([])},z=a.errorData,F=a.errorNum,q=(a.uploadStatus,[{title:"\u6574\u8f66\u7f16\u7801SN",dataIndex:"electrombileNumber",key:"electrombileNumber"},{title:"\u9519\u8bef\u539f\u56e0",dataIndex:"errorMsg",key:"errorMsg"},{title:"\u793a\u4f8b",dataIndex:"modelName",key:"modelName"}]),J=function(){T["a"].exportExcel(q,z,"\u54c1\u724c\u5382\u5bb6SN\u7533\u62a5\u6a21\u677f-\u62a5\u9519\u8868.xlsx")};return m.a.createElement("div",null,m.a.createElement(E["a"],null,m.a.createElement(x["a"],{span:24,style:{textAlign:"right",marginBottom:"16px"}},m.a.createElement(f["a"],{onClick:function(){p(!0)},icon:m.a.createElement(w["a"],null)},"\u65b0\u589eSN\u7533\u62a5"))),m.a.createElement(n["a"],{title:"\u65b0\u589eSN\u7533\u62a5",visible:d,onOk:C,onCancel:I,okText:"\u5bfc\u5165"},m.a.createElement(c["a"],{labelCol:{span:5},form:y,initialValues:{snFile:null}},m.a.createElement(k["a"],{className:"mb-16",message:"\u8bf7\u5148\u4e0b\u8f7d\u6a21\u7248\uff0c\u6309\u7167\u6a21\u7248\u8981\u6c42\u586b\u5199\u5b8c\u6210\u540e\u5728\u4e0b\u65b9\u4e0a\u4f20",type:"warning"}),m.a.createElement("div",{className:g.a.formAddEls},m.a.createElement(c["a"].Item,{label:"\u4e0a\u4f20excel",name:"snFile",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4e0a\u4f20\u6587\u4ef6"}]},m.a.createElement(j["a"],O,m.a.createElement(f["a"],null,"\u4e0a\u4f20\u6587\u4ef6")),S&&0===S.length&&m.a.createElement(L,{type:"danger"},"\u8bf7\u9009\u62e9excel\u6587\u4ef6\uff01")),m.a.createElement("div",{className:g.a.uploadFile},m.a.createElement("p",{className:"mt-8"},m.a.createElement("a",{href:"./snDeclare.xls",download:"\u54c1\u724c\u5382\u5bb6SN\u7533\u62a5\u6a21\u677f",className:"font-underline"},"\u6a21\u677f\u4e0b\u8f7d")))),F>=1&&m.a.createElement(m.a.Fragment,null,m.a.createElement(k["a"],{message:"\u63d0\u4ea4\u5931\u8d25",type:"error",showIcon:!0}),m.a.createElement("h3",{className:"mt-8 mb-24"},m.a.createElement(L,{type:"danger"},"\u5bfc\u5165\u5931\u8d25",F,"\u6761\uff0c",m.a.createElement(L,{underline:!0},m.a.createElement("a",{onClick:J},"\u4e0b\u8f7d\u67e5\u770b")),"\xa0\xa0\u67e5\u770b\u5931\u8d25\u539f\u56e0"))))))}var F=Object(d["a"])((function(e){var a=e.snDeclare;e.loading;return{snDeclare:a}}))(z),q=function(e){var a=e.snDeclare,t=e.tableLoading,d=e.dispatch,u=e.listLoading,f=Object(s["useState"])(!1),E=Object(o["a"])(f,2),b=E[0],x=E[1],S=Object(s["useState"])(null),h=Object(o["a"])(S,2),v=h[0],N=h[1],y=i["a"].Search,I=c["a"].useForm(),O=Object(o["a"])(I,1),j=O[0],k=[{title:"\u7533\u62a5\u65e5\u671f",dataIndex:"applyAt",key:"applyAt"},{title:"\u6279\u6b21\u540d\u79f0",dataIndex:"batchName",key:"batchName"},{title:"\u5173\u8054\u578b\u53f7\u6570",dataIndex:"batchModelCount",key:"batchModelCount"},{title:"\u6279\u6b21SN\u6570",dataIndex:"batchSNCount",key:"batchSNCount",render:function(e,a){return m.a.createElement("div",{className:"font-pending cur",onClick:function(){J(a)}},e)}},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"approvalStatus",key:"approvalStatus",render:function(e){return 1==e?m.a.createElement("div",{className:"font-pending"},"\u5f85\u5ba1\u6838"):2==e?m.a.createElement("div",{className:"font-red"},"\u672a\u901a\u8fc7"):m.a.createElement("div",{className:"font-success"},"\u901a\u8fc7")}},{title:"\u5ba1\u6838\u65e5\u671f",dataIndex:"approvalAt",key:"approvalAt"},{title:"\u4e0d\u901a\u8fc7\u539f\u56e0",dataIndex:"notPassReason",key:"notPassReason",width:300}],C=function(e){var t=e.pageIndex,n=void 0===t?a.pageIndex:t,l=e.pageSize,r=void 0===l?a.pageSize:l,c=e.filter,i=void 0===c?a.filter:c;d({type:"snDeclare/reqList",payload:{pageIndex:n,pageSize:r,filter:i}})};Object(s["useEffect"])((function(){C({filter:{},pageIndex:1,pageSize:10})}),[]);var w=Object(s["useState"])(a.pageSize),T=Object(o["a"])(w,2),L=T[0],z=T[1],q={total:a.total,current:a.pageIndex,pageSize:L,onChange:function(e){C({pageIndex:e,pageSize:L})},showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(e,a){z(a),C({pageIndex:e,pageSize:a})}},J=function(e){var a=e.id;N(a),x(!0)};Object(s["useEffect"])((function(){b&&A({})}),[b]);var A=function(e){var t=e.electrombileNumber,n=void 0===t?"":t,l=e.pageIndex,r=void 0===l?a.batchPageIndex:l,c=e.pageSize,i=void 0===c?a.batchPageSize:c,o=e.snBatchId,s=void 0===o?v:o;d({type:"snDeclare/reqBatch",payload:{snBatchId:s,electrombileNumber:n,pageIndex:r,pageSize:i}})},M=function(){x(!1)},B=a.content,P=a.batchTotal,R=a.batchList,V=Object(s["useState"])(1),U=Object(o["a"])(V,2),H=(U[0],U[1]);return m.a.createElement(p["b"],{className:g.a.main},m.a.createElement("div",null,m.a.createElement(D,{getList:C}),m.a.createElement(F,{getList:C}),m.a.createElement(r["a"],{rowKey:"id",dataSource:B,columns:k,pagination:q,tableLoading:t}),m.a.createElement(n["a"],{title:"\u6574\u8f66\u7f16\u7801SN",visible:b,onOk:M,onCancel:function(){x(!1),j.resetFields(),A({pageIndex:1})},key:v,footer:!1},m.a.createElement("p",null,"\u6279\u6b21SN\u6570\uff1a",JSON.stringify(P)),m.a.createElement(c["a"],{initialValues:{search:""},form:j},m.a.createElement(c["a"].Item,{name:"search"},m.a.createElement(y,{placeholder:"\u8bf7\u8f93\u5165\u67e5\u8be2SN\u6570",onSearch:function(e){console.log(e),A({electrombileNumber:e,pageIndex:1})}}))),m.a.createElement(l["b"],{className:"mt-16",size:"small",pagination:{onChange:function(e){A({pageIndex:e}),H(Number(e))},pageSize:10,total:JSON.stringify(P),showSizeChanger:!1,current:a.batchPageIndex},dataSource:R,loading:u,renderItem:function(e){return m.a.createElement(l["b"].Item,null,e.electrombileNumber)}}))))};a["default"]=Object(d["a"])((function(e){var a=e.snDeclare,t=e.loading;return{snDeclare:a,tableLoading:t.effects["snDeclare/reqList"],listLoading:t.effects["snDeclare/reqBatch"]}}))(q)},"D+M2":function(e,a,t){e.exports={main:"antd-pro-pages-sn-declare-index-main",treeContainer:"antd-pro-pages-sn-declare-index-treeContainer",treeTitle:"antd-pro-pages-sn-declare-index-treeTitle",treeContent:"antd-pro-pages-sn-declare-index-treeContent",formAddEls:"antd-pro-pages-sn-declare-index-formAddEls",uploadFile:"antd-pro-pages-sn-declare-index-uploadFile",snTreeContainer:"antd-pro-pages-sn-declare-index-snTreeContainer",snTreeEdit:"antd-pro-pages-sn-declare-index-snTreeEdit"}},WqHJ:function(e,a,t){e.exports={filter:"antd-pro-pages-sn-declare-components-sn-filter-index-filter"}}}]);