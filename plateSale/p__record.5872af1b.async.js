(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"9Yr2":function(e,t,a){"use strict";a.r(t);a("g9YV");var n=a("wCAj"),r=a("fWQN"),i=a("mtLc"),l=a("yKVA"),c=a("879j"),o=a("q1tI"),d=a.n(o),m=a("55Ip"),s=a("Hx5s"),p=(a("+L6B"),a("2/Rp")),u=(a("5NDa"),a("5rEg")),g=(a("14J3"),a("BMrR")),f=(a("OaEy"),a("2fM7")),E=(a("jCWc"),a("kPKH")),h=(a("6UJt"),a("DFOY")),b=a("k1fw"),v=(a("y8nQ"),a("Vl3Y")),y=a("tJVT"),I=(a("iQDF"),a("+eQT")),L=a("9kvl"),x=a("l4xY"),O=a.n(x),S=a("LZAR"),T=I["a"].RangePicker,N=function(e){var t=e.dispatch,a=e.recordList,n=e.login,r=e.getList,i=v["a"].useForm(),l=Object(y["a"])(i,1),c=l[0],m=function(e){console.log(e);var t=e.applyTimeStart,a=e.auditTimeStart,n=e.city,i=Object(b["a"])(Object(b["a"])({},e),{},{citys:n?n[0]:"",region:n?n[1]:"",applyTimeStart:t&&Object(S["a"])(t[0]),applyTimeEnd:t&&Object(S["a"])(t[1]),auditTimeStart:a&&Object(S["a"])(a[0]),auditTimeEnd:a&&Object(S["a"])(a[1])});r({filter:i})};function s(e){return e.join("-")}function I(e){var a=Object(y["a"])(e,2),n=a[0],r=a[1];t({type:"recordList/getCityAndRegion",payload:{city:n,region:r}})}Object(o["useEffect"])((function(){t({type:"recordList/requestGetCity",payload:{agentOutletsId:n.id}})}),[]);var L="YYYY/MM/DD";return d.a.createElement("div",{className:O.a.filter},d.a.createElement(v["a"],{form:c,name:"advanced_search",className:"ant-advanced-search-form",onFinish:m},d.a.createElement(g["a"],{gutter:24},d.a.createElement(E["a"],{span:6},d.a.createElement(v["a"].Item,{name:"city",label:"\u6240\u5c5e\u5927\u961f"},d.a.createElement(h["a"],{options:a.city,expandTrigger:"hover",displayRender:s,onChange:I,placeholder:"\u9009\u62e9\u5e02\u533a"}))),d.a.createElement(E["a"],{span:6},d.a.createElement(v["a"].Item,{colon:!1,label:" ",name:"agentOutlesId"},d.a.createElement(f["a"],{placeholder:"\u9009\u62e9\u6240\u5c5e\u5927\u961f"},a.brigadeList.length&&a.brigadeList.map((function(e,t){return d.a.createElement(Option,{key:t,agentOutletsName:e.agentOutlesName,value:e.agentOutlesId},e.agentOutlesName)})))))),d.a.createElement(g["a"],{gutter:24},d.a.createElement(E["a"],{span:6},d.a.createElement(v["a"].Item,{label:"\u767b\u8bb0\u4eba",name:"userName"},d.a.createElement(u["a"],{placeholder:"\u767b\u8bb0\u4eba"}))),d.a.createElement(E["a"],{span:6},d.a.createElement(v["a"].Item,{label:"\u8bc1\u4ef6\u53f7\u7801",name:"certificateNumber"},d.a.createElement(u["a"],{placeholder:"\u8bc1\u4ef6\u53f7\u7801"}))),d.a.createElement(E["a"],{span:6},d.a.createElement(v["a"].Item,{label:"\u624b\u673a\u53f7\u7801",name:"phone"},d.a.createElement(u["a"],{placeholder:"\u624b\u673a\u53f7\u7801"})))),d.a.createElement(g["a"],{gutter:24},d.a.createElement(E["a"],{span:6},d.a.createElement(v["a"].Item,{label:"\u8f66\u724c\u53f7",name:"plateNumber"},d.a.createElement(u["a"],{placeholder:"\u8f66\u724c\u53f7"}))),d.a.createElement(E["a"],{span:6},d.a.createElement(v["a"].Item,{label:"\u5ba1\u6838\u72b6\u6001",name:"recordStatus"},d.a.createElement(f["a"],{placeholder:"\u5ba1\u6838\u72b6\u6001"},d.a.createElement(f["a"].Option,{value:"2"},"\u5f85\u5ba1\u6838"),d.a.createElement(f["a"].Option,{value:"3"},"\u4e0d\u901a\u8fc7"),d.a.createElement(f["a"].Option,{value:"4"},"\u5df2\u901a\u8fc7")))),d.a.createElement(E["a"],{span:6},d.a.createElement(v["a"].Item,{label:"\u7533\u8bf7\u65e5\u671f",name:"applyTimeStart"},d.a.createElement(T,{format:L}))),d.a.createElement(E["a"],{span:6},d.a.createElement(v["a"].Item,{label:"\u5ba1\u6838\u65e5\u671f",name:"auditTimeStart"},d.a.createElement(T,{format:"YYYY/MM/DD"})))),d.a.createElement(g["a"],null,d.a.createElement(E["a"],{span:24,style:{textAlign:"right"}},d.a.createElement(p["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2")))))},j=Object(L["a"])((function(e){var t=e.recordList,a=e.login;return{recordList:t,login:a}}))(N),w=a("e6dq"),Y=a.n(w),z=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(e){var n;Object(r["a"])(this,a),n=t.call(this,e),n.getList=function(e){var t=e.pageIndex,a=void 0===t?n.props.recordList.pageIndex:t,r=e.pageSize,i=void 0===r?n.props.recordList.pageSize:r,l=e.filter,c=void 0===l?n.props.recordList.filter:l,o=n.props.dispatch;o({type:"recordList/getList",payload:{pageIndex:a,pageSize:i,filter:c}})},n.handlePaginationChange=function(e){var t=n.state.pageSize;n.getList({pageIndex:e,pageSize:t})};var i=n.props.recordList;return n.state={pageSize:i.pageSize,pageIndex:i.current,total:i.total},n}return Object(i["a"])(a,[{key:"componentDidMount",value:function(){this.getList({filter:{}})}},{key:"render",value:function(){var e=[{title:"\u7533\u8bf7\u65e5\u671f",dataIndex:"applyTime",render:function(e){var t=new Date(e);return t.getFullYear()+"\u5e74"+t.getMonth()+"1\u6708"+t.getDate()+"\u65e5"},sorter:function(e,t){return e.applyTime-t.applyTime}},{title:"\u5f52\u5c5e\u5730",dataIndex:"city"},{title:"\u767b\u8bb0\u4eba",dataIndex:"userName",width:80},{title:"\u8bc1\u4ef6\u7c7b\u578b",dataIndex:"certificateType",ellipsis:!0,render:function(e){return d.a.createElement("div",null,0===e?"\u8eab\u4efd\u8bc1":1===e?"\u62a4\u7167":2===e?"\u6e2f\u6fb3\u901a\u884c\u8bc1":"\u519b\u5b98\u8bc1")}},{title:"\u8bc1\u4ef6\u53f7\u7801",dataIndex:"certificateNumber",ellipsis:!0},{title:"\u8f66\u724c\u53f7",dataIndex:"plateNumber",ellipsis:!0},{title:"\u8f66\u8f86\u4e2d\u6587\u5546\u6807",dataIndex:"electrombileChineseTradeMark"},{title:"\u8f66\u8f86\u578b\u53f7",dataIndex:"modelName"},{title:"\u6574\u8f66\u7f16\u7801",dataIndex:"electrombileNumber",ellipsis:!0},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"recordStatus",render:function(e){return d.a.createElement("div",{size:"middle"},2==e?d.a.createElement("div",{className:"font-pending"},"\u5f85\u5ba1\u6838"):3==e?d.a.createElement("div",{className:"font-danger"},"\u4e0d\u901a\u8fc7"):d.a.createElement("div",{className:"font-green"},"\u5df2\u901a\u8fc7"))}},{title:"\u5ba1\u6838\u65e5\u671f",dataIndex:"auditTime",sorter:function(e,t){return e.auditTime-t.auditTime},render:function(e){if(""==e)return"-";var t=new Date(e);return t.getFullYear()+"\u5e74"+t.getMonth()+"\u6708"+t.getDate()+"\u65e5"},filterMultiple:!1},{title:"\u4e0d\u901a\u8fc7\u539f\u56e0",dataIndex:"notPassReason"},{title:"\u64cd\u4f5c",dataIndex:"plateNumberApplyId",render:function(e){return d.a.createElement("div",{size:"middle"},d.a.createElement(m["a"],{to:"/record/recordDetail/".concat(e)},"\u67e5\u770b\u8be6\u60c5"))}}],t=this.props,a=t.recordList,r=t.tableLoading,i=this,l={total:a.total,current:a.pageIndex,pageSize:a.pageSize,onChange:this.handlePaginationChange,showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(e,t){i.setState({pageSize:t})}};return d.a.createElement(s["b"],{className:Y.a.main},d.a.createElement("div",null,d.a.createElement(j,{getList:this.getList}),d.a.createElement(n["a"],{rowKey:"id",columns:e,dataSource:a.content,pagination:l,loading:r})))}}]),a}(o["Component"]);t["default"]=Object(L["a"])((function(e){var t=e.recordList,a=e.loading;return{recordList:t,tableLoading:a.effects["recordList/getList"]}}))(z)},e6dq:function(e,t,a){e.exports={main:"antd-pro-pages-record-index-main"}},l4xY:function(e,t,a){e.exports={filter:"antd-pro-pages-record-components-filter-index-filter"}}}]);