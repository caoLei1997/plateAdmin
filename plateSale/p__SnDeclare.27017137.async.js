(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{CUBi:function(e,a,t){"use strict";t.r(a);t("2qtc");var n=t("kLXV"),r=(t("Mwp2"),t("VXEj")),l=(t("g9YV"),t("wCAj")),c=(t("5NDa"),t("5rEg")),i=t("tJVT"),o=t("q1tI"),s=t.n(o),m=t("9kvl"),d=t("Hx5s"),u=t("D+M2"),p=t.n(u),f=(t("+L6B"),t("2/Rp")),g=(t("14J3"),t("BMrR")),E=(t("OaEy"),t("2fM7")),b=(t("jCWc"),t("kPKH")),x=t("k1fw"),v=(t("y8nQ"),t("Vl3Y")),h=(t("iQDF"),t("+eQT")),S=t("WqHJ"),N=t.n(S),y=t("LZAR"),I=h["a"].RangePicker,O=function(e){var a=e.snDeclare,t=e.getList,n=v["a"].useForm(),r=Object(i["a"])(n,1),l=r[0],o=function(e){var a=e.applyTimeStart,n=e.auditTimeStart,r=Object(x["a"])(Object(x["a"])({},e),{},{applyTimeStart:a&&Object(y["a"])(a[0]),applyTimeEnd:a&&Object(y["a"])(a[1]),auditTimeStart:n&&Object(y["a"])(n[0]),auditTimeEnd:n&&Object(y["a"])(n[1])});t({pageIndex:1,filter:r})};a.agentList;return s.a.createElement("div",{className:N.a.filter},s.a.createElement(v["a"],{form:l,name:"advanced_search",className:"ant-advanced-search-form",onFinish:o},s.a.createElement(g["a"],{gutter:24},s.a.createElement(b["a"],{span:6},s.a.createElement(v["a"].Item,{label:"\u6279\u6b21\u540d\u79f0",name:"batchName"},s.a.createElement(c["a"],{placeholder:"\u6279\u6b21\u540d\u79f0"}))),s.a.createElement(b["a"],{span:6},s.a.createElement(v["a"].Item,{label:"\u7533\u8bf7\u65e5\u671f",name:"applyTimeStart"},s.a.createElement(I,null))),s.a.createElement(b["a"],{span:6},s.a.createElement(v["a"].Item,{label:"\u5ba1\u6838\u72b6\u6001",name:"approvalStatus"},s.a.createElement(E["a"],{placeholder:"\u5ba1\u6838\u72b6\u6001"},s.a.createElement(E["a"].Option,{value:""},"\u5168\u90e8"),s.a.createElement(E["a"].Option,{value:"1"},"\u5f85\u5ba1\u6838"),s.a.createElement(E["a"].Option,{value:"2"},"\u672a\u901a\u8fc7"),s.a.createElement(E["a"].Option,{value:"3"},"\u5df2\u901a\u8fc7"))))),s.a.createElement(g["a"],{gutter:24},s.a.createElement(b["a"],{span:6},s.a.createElement(v["a"].Item,{label:"\u5ba1\u6838\u65e5\u671f",name:"auditTimeStart"},s.a.createElement(I,null))),s.a.createElement(b["a"],{span:6},s.a.createElement(f["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"))),s.a.createElement(g["a"],null)))},j=Object(m["a"])((function(e){var a=e.snDeclare;return{snDeclare:a}}))(O),k=(t("DZo9"),t("8z0m")),D=(t("fOrg"),t("+KLJ")),w=t("WmNS"),C=t.n(w),T=t("9og8"),L=(t("tU7J"),t("wFql")),z=t("xvlK"),F=t("zXdt"),q=L["a"].Text;function A(e){var a=e.snDeclare,t=e.dispatch,r=e.getList,l=Object(o["useState"])(!1),c=Object(i["a"])(l,2),m=c[0],d=c[1],u=Object(o["useState"])(null),E=Object(i["a"])(u,2),x=E[0],h=E[1],S=v["a"].useForm(),N=Object(i["a"])(S,1),y=N[0],I=function(){h(null),d(!1)},O={accept:".xls",showUploadList:!0,onRemove:function(e){h(null),t({type:"snDeclare/clearExcelData"})},beforeUpload:function(e){return h([e]),!1},fileList:x},j=function(e){var a=new FormData;a.append("file",e),t({type:"snDeclare/reqUpload",payload:{formData:a},onSuccess:function(){r({}),d(!1)}})},w=function(){var e=Object(T["a"])(C.a.mark((function e(){return C.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(x&&0!==x.length){e.next=3;break}return h([]),e.abrupt("return");case 3:return e.next=5,j(x[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=a.errorData,A=a.errorNum,J=(a.uploadStatus,[{title:"\u6574\u8f66\u7f16\u7801SN",dataIndex:"electrombileNumber",key:"electrombileNumber"},{title:"\u9519\u8bef\u539f\u56e0",dataIndex:"errorMsg",key:"errorMsg"},{title:"\u793a\u4f8b",dataIndex:"modelName",key:"modelName"}]),M=function(){F["a"].exportExcel(J,L,"\u54c1\u724c\u5382\u5bb6SN\u7533\u62a5\u6a21\u677f-\u62a5\u9519\u8868.xlsx")};return s.a.createElement("div",null,s.a.createElement(g["a"],null,s.a.createElement(b["a"],{span:24,style:{textAlign:"right",marginBottom:"16px"}},s.a.createElement(f["a"],{onClick:function(){d(!0)},icon:s.a.createElement(z["a"],null)},"\u65b0\u589eSN\u7533\u62a5"))),s.a.createElement(n["a"],{title:"\u65b0\u589eSN\u7533\u62a5",visible:m,onOk:w,onCancel:I,okText:"\u5bfc\u5165"},s.a.createElement(v["a"],{labelCol:{span:5},form:y,initialValues:{snFile:null}},s.a.createElement(D["a"],{className:"mb-16",message:"\u8bf7\u5148\u4e0b\u8f7d\u6a21\u7248\uff0c\u6309\u7167\u6a21\u7248\u8981\u6c42\u586b\u5199\u5b8c\u6210\u540e\u5728\u4e0b\u65b9\u4e0a\u4f20",type:"warning"}),s.a.createElement("div",{className:p.a.formAddEls},s.a.createElement(v["a"].Item,{label:"\u4e0a\u4f20excel",name:"snFile",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4e0a\u4f20\u6587\u4ef6"}]},s.a.createElement(k["a"],O,s.a.createElement(f["a"],null,"\u4e0a\u4f20\u6587\u4ef6")),x&&0===x.length&&s.a.createElement(q,{type:"danger"},"\u8bf7\u9009\u62e9excel\u6587\u4ef6\uff01")),s.a.createElement("div",{className:p.a.uploadFile},s.a.createElement("p",{className:"mt-8"},s.a.createElement("a",{href:"./snDeclare.xls",download:"\u54c1\u724c\u5382\u5bb6SN\u7533\u62a5\u6a21\u677f",className:"font-underline"},"\u6a21\u677f\u4e0b\u8f7d")))),A>=1&&s.a.createElement(s.a.Fragment,null,s.a.createElement(D["a"],{message:"\u63d0\u4ea4\u5931\u8d25",type:"error",showIcon:!0}),s.a.createElement("h3",{className:"mt-8 mb-24"},s.a.createElement(q,{type:"danger"},"\u5bfc\u5165\u5931\u8d25",A,"\u6761\uff0c",s.a.createElement(q,{underline:!0},s.a.createElement("a",{onClick:M},"\u4e0b\u8f7d\u67e5\u770b")),"\xa0\xa0\u67e5\u770b\u5931\u8d25\u539f\u56e0"))))))}var J=Object(m["a"])((function(e){var a=e.snDeclare;e.loading;return{snDeclare:a}}))(A),M=function(e){var a=e.snDeclare,t=e.tableLoading,m=e.dispatch,u=e.listLoading,f=Object(o["useState"])(!1),g=Object(i["a"])(f,2),E=g[0],b=g[1],x=Object(o["useState"])(null),v=Object(i["a"])(x,2),h=v[0],S=v[1],N=c["a"].Search,y=[{title:"\u7533\u62a5\u65e5\u671f",dataIndex:"applyAt",key:"applyAt"},{title:"\u6279\u6b21\u540d\u79f0",dataIndex:"batchName",key:"batchName"},{title:"\u5173\u8054\u578b\u53f7\u6570",dataIndex:"batchModelCount",key:"batchModelCount"},{title:"\u6279\u6b21SN\u6570",dataIndex:"batchSNCount",key:"batchSNCount",render:function(e,a){return s.a.createElement("div",{className:"font-pending cur",onClick:function(){T(a)}},e)}},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"approvalStatus",key:"approvalStatus",render:function(e){return 1==e?s.a.createElement("div",{className:"font-pending"},"\u5f85\u5ba1\u6838"):2==e?s.a.createElement("div",{className:"font-red"},"\u672a\u901a\u8fc7"):s.a.createElement("div",{className:"font-success"},"\u901a\u8fc7")}},{title:"\u5ba1\u6838\u65e5\u671f",dataIndex:"approvalAt",key:"approvalAt"},{title:"\u4e0d\u901a\u8fc7\u539f\u56e0",dataIndex:"notPassReason",key:"notPassReason",width:300}],I=function(e){var t=e.pageIndex,n=void 0===t?a.pageIndex:t,r=e.pageSize,l=void 0===r?a.pageSize:r,c=e.filter,i=void 0===c?a.filter:c;m({type:"snDeclare/reqList",payload:{pageIndex:n,pageSize:l,filter:i}})};Object(o["useEffect"])((function(){I({})}),[]);var O=Object(o["useState"])(a.pageSize),k=Object(i["a"])(O,2),D=k[0],w=k[1],C={total:a.total,current:a.pageIndex,pageSize:D,onChange:function(e){I({pageIndex:e,pageSize:D})},showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(e,a){w(a),I({pageIndex:e,pageSize:a})}},T=function(e){var a=e.id;S(a),b(!0)};Object(o["useEffect"])((function(){E&&L({})}),[E]);var L=function(e){var t=e.electrombileNumber,n=void 0===t?a.batchSearch:t,r=e.pageIndex,l=void 0===r?a.batchPageIndex:r,c=e.pageSize,i=void 0===c?a.batchPageSize:c,o=e.snBatchId,s=void 0===o?h:o;m({type:"snDeclare/reqBatch",payload:{snBatchId:s,electrombileNumber:n,pageIndex:l,pageSize:i}})},z=function(){b(!1)},F=a.content,q=a.batchTotal,A=a.batchList;return s.a.createElement(d["b"],{className:p.a.main},s.a.createElement("div",null,s.a.createElement(j,{getList:I}),s.a.createElement(J,{getList:I}),s.a.createElement(l["a"],{rowKey:"id",dataSource:F,columns:y,pagination:C,tableLoading:t}),s.a.createElement(n["a"],{title:"\u6574\u8f66\u7f16\u7801SN",visible:E,onOk:z,onCancel:function(){b(!1)},key:h},s.a.createElement("p",null,"\u6279\u6b21SN\u6570\uff1a",JSON.stringify(q)),s.a.createElement(N,{placeholder:"\u8bf7\u8f93\u5165\u67e5\u8be2SN\u6570",onSearch:function(e){L({electrombileNumber:e,pageIndex:1})},value:""}),s.a.createElement(r["b"],{className:"mt-16",size:"small",pagination:{onChange:function(e){L({pageIndex:e})},pageSize:10},dataSource:A,loading:u,renderItem:function(e){return s.a.createElement(r["b"].Item,null,e.electrombileNumber)}}))))};a["default"]=Object(m["a"])((function(e){var a=e.snDeclare,t=e.loading;return{snDeclare:a,tableLoading:t.effects["snDeclare/reqList"],listLoading:t.effects["snDeclare/reqBatch"]}}))(M)},"D+M2":function(e,a,t){e.exports={main:"antd-pro-pages-sn-declare-index-main",treeContainer:"antd-pro-pages-sn-declare-index-treeContainer",treeTitle:"antd-pro-pages-sn-declare-index-treeTitle",treeContent:"antd-pro-pages-sn-declare-index-treeContent",formAddEls:"antd-pro-pages-sn-declare-index-formAddEls",uploadFile:"antd-pro-pages-sn-declare-index-uploadFile",snTreeContainer:"antd-pro-pages-sn-declare-index-snTreeContainer",snTreeEdit:"antd-pro-pages-sn-declare-index-snTreeEdit"}},WqHJ:function(e,a,t){e.exports={filter:"antd-pro-pages-sn-declare-components-sn-filter-index-filter"}}}]);