(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"1wCB":function(e,a,t){"use strict";t.r(a);t("g9YV");var n=t("wCAj"),l=t("tJVT"),r=t("k1fw"),i=t("q1tI"),p=t.n(i),c=t("Hx5s"),o=(t("+L6B"),t("2/Rp")),m=(t("14J3"),t("BMrR")),d=(t("5NDa"),t("5rEg")),s=(t("jCWc"),t("kPKH")),u=(t("OaEy"),t("2fM7")),v=(t("y8nQ"),t("Vl3Y")),g=(t("iQDF"),t("+eQT")),E=t("9kvl"),f=t("2tBs"),y=t.n(f),b=t("LZAR"),S=g["a"].RangePicker,h=function(e){var a=e.typeApproval,t=e.getList,n=v["a"].useForm(),i=Object(l["a"])(n,1),c=i[0],g=function(e){var n=e.applyTimeStart,l=e.auditTimeStart,i=Object(r["a"])(Object(r["a"])({},e),{},{applyTimeStart:n&&Object(b["a"])(n[0]),applyTimeEnd:n&&Object(b["a"])(n[1]),auditTimeStart:l&&Object(b["a"])(l[0]),auditTimeEnd:l&&Object(b["a"])(l[1])});void 0!==i&&null!==i&&t({pageIndex:1,pageSize:a.pageSize,filter:i})},E=a.agentList;return p.a.createElement("div",{className:y.a.filter},p.a.createElement(v["a"],{form:c,name:"advanced_search",className:"ant-advanced-search-form",onFinish:g,initialValues:{agentOutletsId:"",batchName:void 0,applyTimeStart:void 0,approvalStatus:"",auditTimeStart:void 0}},p.a.createElement(m["a"],{gutter:24},p.a.createElement(s["a"],{span:6},p.a.createElement(v["a"].Item,{label:"\u54c1\u724c\u5382\u5bb6",name:"agentOutletsId"},p.a.createElement(u["a"],{placeholder:"\u54c1\u724c\u5382\u5bb6"},p.a.createElement(u["a"].Option,{value:""},"\u5168\u90e8"),E&&E.length&&E.map((function(e,a){return p.a.createElement(u["a"].Option,{key:a,value:e.id},e.name)}))))),p.a.createElement(s["a"],{span:6},p.a.createElement(v["a"].Item,{label:"\u6279\u6b21\u540d\u79f0",name:"batchName"},p.a.createElement(d["a"],{placeholder:"\u6279\u6b21\u540d\u79f0"}))),p.a.createElement(s["a"],{span:6},p.a.createElement(v["a"].Item,{label:"\u7533\u8bf7\u65e5\u671f",name:"applyTimeStart"},p.a.createElement(S,null))),p.a.createElement(s["a"],{span:6},p.a.createElement(v["a"].Item,{label:"\u5ba1\u6838\u72b6\u6001",name:"approvalStatus"},p.a.createElement(u["a"],{placeholder:"\u5ba1\u6838\u72b6\u6001"},p.a.createElement(u["a"].Option,{value:""},"\u5168\u90e8"),p.a.createElement(u["a"].Option,{value:"1"},"\u5f85\u5ba1\u6838"),p.a.createElement(u["a"].Option,{value:"2"},"\u672a\u901a\u8fc7"),p.a.createElement(u["a"].Option,{value:"3"},"\u5df2\u901a\u8fc7"))))),p.a.createElement(m["a"],{gutter:24},p.a.createElement(s["a"],{span:6},p.a.createElement(v["a"].Item,{label:"\u5ba1\u6838\u65e5\u671f",name:"auditTimeStart"},p.a.createElement(S,null))),p.a.createElement(s["a"],{span:6},p.a.createElement(o["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"))),p.a.createElement(m["a"],null)))},O=Object(E["a"])((function(e){var a=e.typeApproval;return{typeApproval:a}}))(h),I=t("Mria"),x=t.n(I),j=t("uYtH"),k=function(e){var a=e.dispatch,t=e.typeApproval,o=function(e){var n=e.pageIndex,l=void 0===n?t.pageIndex:n,i=e.pageSize,p=void 0===i?t.pageSize:i,c=e.filter,o=void 0===c?t.filter:c;a({type:"typeApproval/reqList",payload:{filter:Object(r["a"])({},o),pageIndex:l,pageSize:p}})};Object(i["useEffect"])((function(){return o({}),function(){o({filter:{}})}}),[]);var m=[{title:"\u7533\u62a5\u65e5\u671f",dataIndex:"applyAt",key:"applyAt"},{title:"\u54c1\u724c\u5382\u5bb6",dataIndex:"agentOutletsName",key:"agentOutletsName"},{title:"\u6279\u6b21\u540d\u79f0",dataIndex:"batchName",key:"batchName"},{title:"\u6279\u6b21\u578b\u53f7\u6570",dataIndex:"batchModelCount",key:"batchModelCount"},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"approvalStatus",key:"approvalStatus",render:function(e){return 1==e?p.a.createElement("div",{className:"font-pending"},"\u5f85\u5ba1\u6838"):2==e?p.a.createElement("div",{className:"font-red"},"\u672a\u901a\u8fc7"):3==e?p.a.createElement("div",{className:"font-success"},"\u5df2\u901a\u8fc7"):void 0}},{title:"\u5ba1\u6838\u65e5\u671f",dataIndex:"approvalAt",key:"approvalAt"},{title:"\u4e0d\u901a\u8fc7\u539f\u56e0",dataIndex:"notPassReason",key:"notPassReason"},{title:"\u64cd\u4f5c",render:function(e){var a=e.id;return p.a.createElement(j["a"],{to:"/catalog/typeapproval/detail/".concat(a)},"\u67e5\u770b\u8be6\u60c5")}}],d=Object(i["useState"])(t.pageSize),s=Object(l["a"])(d,2),u=s[0],v=s[1],g={total:t.total,current:t.pageIndex,pageSize:u,onChange:function(e){o({pageIndex:e,pageSize:u})},showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(e,a){v(a),o({pageIndex:e,pageSize:a})}};return p.a.createElement(c["b"],{className:x.a.main},p.a.createElement(O,{getList:o}),p.a.createElement(n["a"],{dataSource:t.content,columns:m,pagination:g,rowKey:"id",loading:t.tableLoadings}))};a["default"]=Object(E["a"])((function(e){var a=e.typeApproval,t=e.loading;return{typeApproval:a,tableLoading:t.effects["typeApproval/reqList"]}}))(k)},"2tBs":function(e,a,t){e.exports={filter:"antd-pro-pages-type-approval-components-filter-search-index-filter"}},Mria:function(e,a,t){e.exports={main:"antd-pro-pages-type-approval-index-main"}}}]);