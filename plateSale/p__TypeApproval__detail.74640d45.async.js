(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"7miX":function(e,a,t){"use strict";t.r(a);t("14J3");var l=t("BMrR"),n=(t("jCWc"),t("kPKH")),r=(t("g9YV"),t("wCAj")),c=(t("XCrF"),t("1GRj")),i=(t("y8nQ"),t("Vl3Y")),m=(t("OaEy"),t("2fM7")),o=(t("/zsF"),t("PArb")),s=(t("bP8k"),t("gFTJ")),p=t("k1fw"),d=t("tJVT"),u=(t("tU7J"),t("wFql")),E=t("q1tI"),g=t.n(E),f=t("Hx5s"),v=t("Hp0T"),h=t.n(v),b=(t("2qtc"),t("kLXV")),y=(t("+L6B"),t("2/Rp")),I=(t("miYZ"),t("tsqr")),N=t("WmNS"),w=t.n(N),x=t("9og8"),C=(t("5NDa"),t("5rEg")),A=t("9kvl"),O=C["a"].TextArea,k=function(e){var a=e.dispatch,t=e.id,l=Object(E["useState"])(!1),n=Object(d["a"])(l,2),r=n[0],c=n[1],m=Object(E["useState"])(0),o=Object(d["a"])(m,2),s=o[0],u=o[1],f=i["a"].useForm(),v=Object(d["a"])(f,1),h=v[0],N=function(e){c(e)},C=function(e){c(e)},A=function(){var e=Object(x["a"])(w.a.mark((function e(l){return w.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a({type:"typeApproval/reqApprovalNo",payload:Object(p["a"])(Object(p["a"])({},l),{},{modelBatchId:t}),onSuccess:k});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),k=function(e){I["b"].success(e.retMsg),a({type:"typeApproval/reqDetail",payload:{id:t}})},S=function(e){u(e.notPassReason)};return g.a.createElement("div",null,g.a.createElement(y["a"],{type:"danger",onClick:function(){C(!0)}},"\u5ba1\u6838\u4e0d\u901a\u8fc7"),g.a.createElement(b["a"],{title:"\u786e\u8ba4\u5ba1\u6838\u4e0d\u901a\u8fc7\u5417",visible:r,footer:null,onCancel:function(){return N(!1)}},g.a.createElement("p",null,"\u586b\u5199\u5ba1\u6838\u7406\u7531"),g.a.createElement(i["a"],{name:"catalog-manage-modal-add",onFinish:A,form:h,initialValues:{notPassReason:""},onValuesChange:function(e){S(e)}},g.a.createElement(i["a"].Item,{name:"notPassReason",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u5ba1\u6838\u4e0d\u901a\u8fc7\u7406\u7531!"}],label:"\u539f\u56e0"},g.a.createElement(O,{rows:4,placeholder:"\u8bf7\u586b\u5199\u5ba1\u6838\u4e0d\u901a\u8fc7\u7406\u7531",maxLength:50})),g.a.createElement("div",{style:{textAlign:"right",margin:"-10px 0 10px"}},s.length||0,"/50"),g.a.createElement("div",{style:{textAlign:"right"}},g.a.createElement(y["a"],{onClick:function(){return N(!1)},style:{marginRight:16}},"\u53d6\u6d88"),g.a.createElement(y["a"],{type:"primary",htmlType:"submit"},"\u786e\u5b9a")))))},S=Object(A["a"])()(k),j=function(e){var a=e.dispatch,t=e.id,l=function(){a({type:"typeApproval/reqApprovalAgree",payload:{modelBatchId:t},onSuccess:n})},n=function(e){I["b"].success(e.retMsg),a({type:"typeApproval/reqDetail",payload:{id:t}})},r=function(){b["a"].confirm({title:"\u5ba1\u6838\u901a\u8fc7",content:"\u5ba1\u6838\u901a\u8fc7\u540e\u6279\u6b21\u7533\u62a5\u6240\u6709\u6574\u8f66\u7f16\u7801SN\u5c06\u53ef\u7528\u4e0e\u5e26\u724c\u9500\u552e\uff0c\u786e\u8ba4\u8981\u5ba1\u6838\u901a\u8fc7\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:l})};return g.a.createElement("div",null,g.a.createElement(y["a"],{type:"primary",onClick:r},"\u5ba1\u6838\u901a\u8fc7"))},R=Object(A["a"])()(j),q=t("5bA4"),P=t("UESt"),T=t("55Ip"),M=u["a"],F=[{title:"\u5ba1\u6838\u4eba",dataIndex:"approvalPeople",key:"approvalPeople"},{title:"\u5ba1\u6838\u65e5\u671f",dataIndex:"approvalAt",key:"approvalAt"},{title:"\u5ba1\u6838\u7ed3\u679c",dataIndex:"approvalResult",key:"approvalResult",render:function(e){return"\u901a\u8fc7"==e?g.a.createElement("div",{className:"font-success"},"\u901a\u8fc7"):g.a.createElement("div",{className:"font-red"}," \u4e0d\u901a\u8fc7")}},{title:"\u4e0d\u901a\u8fc7\u539f\u56e0",dataIndex:"notPassReason",key:"notPassReason"}],J=function(e){var a=e.dispatch,t=e.match,u=e.typeApproval,v=Object(E["useState"])(null),b=Object(d["a"])(v,2),y=b[0],I=b[1],N=function(e){a({type:"typeApproval/reqDetail",payload:Object(p["a"])({},e)})},w=function(){a({type:"typeApproval/reqApprovalModel",payload:{modelBatchId:t.params.id}})};Object(E["useEffect"])((function(){N({id:t.params.id,modelName:y}),window.scrollTo(0,0)}),[y,t.params.id]),Object(E["useEffect"])((function(){w()}),[]);var x=u.detailData,C=u.detailModelList,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first",a=JSON.parse(window.localStorage.getItem("ids")),l=a.findIndex((function(e){return e===Number(t.params.id)}));return"last"===e?l!==a.length-1:0!==l},O=function(e){var a=JSON.parse(window.localStorage.getItem("ids")),l=a.findIndex((function(e){return e===Number(t.params.id)}));return"first"===e?0==l?a[l]:a[l-1]:"last"===e?l==a.length-1?a[l]:a[l+1]:void 0};return g.a.createElement("div",{key:t.params.id},g.a.createElement(f["b"],{className:h.a.main},g.a.createElement(s["a"],{title:"",column:1},g.a.createElement(s["a"].Item,{label:"\u5ba1\u6838\u72b6\u6001"},g.a.createElement("div",{className:"inline",style:{display:"inline-block"}},x.approvalStatus&&1==x.approvalStatus?g.a.createElement("div",{className:"font-pending"},"\u5f85\u5ba1\u6838"):2==x.approvalStatus?g.a.createElement("div",{className:"font-red"},"\u672a\u901a\u8fc7"):g.a.createElement("div",{className:"font-success"},"\u901a\u8fc7"))),g.a.createElement(s["a"].Item,{label:"\u6279\u6b21\u540d\u79f0"},x.batchName),g.a.createElement(s["a"].Item,{label:"\u6279\u6b21\u53f7\u6570"},x.batchModelCount)),g.a.createElement("h3",null,"\u8f66\u8f86\u4fe1\u606f"),g.a.createElement(o["a"],null),g.a.createElement(i["a"].Item,{label:"\u9009\u62e9\u578b\u53f7"},g.a.createElement(m["a"],{placeholder:"\u8bf7\u9009\u62e9\u578b\u53f7",onChange:function(e){I(e)},style:{width:"220px"}},C&&C.length&&C.map((function(e){return g.a.createElement(m["a"].Option,{key:e.id,value:e.modelName},e.modelName)})))),g.a.createElement(s["a"],{title:"",column:2},g.a.createElement(s["a"].Item,{label:"\u8f66\u8f86\u4e2d\u6587\u5546\u6807"},x.electrombileChineseTradeMark),g.a.createElement(s["a"].Item,{label:"\u8f66\u8f86\u578b\u53f7"},x.modelName),g.a.createElement(s["a"].Item,{label:"\u8f66\u8eab\u957f\u5ea6"},x.electrombileLength),g.a.createElement(s["a"].Item,{label:"\u8f66\u8eab\u5bbd\u5ea6"},x.electrombileWidth),g.a.createElement(s["a"].Item,{label:"\u8f66\u8eab\u9ad8\u5ea6"},x.electrombileHeight),g.a.createElement(s["a"].Item,{label:"\u7eed\u822a\u91cc\u7a0b"},x.enduranceMileage),g.a.createElement(s["a"].Item,{label:"\u6574\u8f66\u8d28\u91cf"},x.totalWeight),g.a.createElement(s["a"].Item,{label:"\u6700\u9ad8\u8bbe\u8bbe\u8ba1\u65f6\u901f"},x.maximumDesignedSpeed),g.a.createElement(s["a"].Item,{label:"\u6574\u8f66\u7f16\u7801"},x.codeOnFrame),g.a.createElement(s["a"].Item,{label:"\u94ed\u724c\u56fa\u5b9a\u4f4d\u7f6e"},x.fixedPositionName)),g.a.createElement(s["a"],{title:"",column:1},g.a.createElement(s["a"].Item,{label:"\u8f66\u8f86\u7167\u7247"},g.a.createElement("div",{className:h.a.photoContainer},x.frontElectricCarImage&&g.a.createElement("div",{className:h.a.item},g.a.createElement(c["a"],{src:x.frontElectricCarImage,alt:"\u8f66\u8f86\u6b63\u9762\u7167",width:200,height:165}),g.a.createElement("p",null,"\u8f66\u8f86\u6b63\u9762\u7167")),x.leftElectricCarImage&&g.a.createElement("div",{className:h.a.item},g.a.createElement(c["a"],{src:x.leftElectricCarImage,alt:"\u8f66\u8f86\u5de6\u4fa7\u7167\u7247",width:200,height:165}),g.a.createElement("p",null,"\u8f66\u8f86\u5de6\u4fa7\u7167\u7247")),x.rightRearElectricCarImage&&g.a.createElement("div",{className:h.a.item},g.a.createElement(c["a"],{src:x.rightRearElectricCarImage,alt:"\u53f3\u540e\u65b945\u5ea6\u6574\u8f66\u7167\u7247",width:200,height:165}),g.a.createElement("p",null,"\u53f3\u540e\u65b945\u5ea6\u6574\u8f66\u7167\u7247")),x.certificateElectricCarImage&&g.a.createElement("div",{className:h.a.item},g.a.createElement(c["a"],{src:x.certificateElectricCarImage,alt:"\u8f66\u8f86\u5408\u683c\u8bc1",width:200,height:165}),g.a.createElement("p",null,"\u8f66\u8f86\u5408\u683c\u8bc1")),x.productCertificationImage&&g.a.createElement("div",{className:h.a.item},g.a.createElement(c["a"],{src:x.productCertificationImage,alt:"\u4ea7\u54c1\u8ba4\u8bc1\u8bc1\u4e66",width:200,height:165}),g.a.createElement("p",null,"\u4ea7\u54c1\u8ba4\u8bc1\u8bc1\u4e66")),x.otherImage&&g.a.createElement("div",{className:h.a.item},g.a.createElement(c["a"],{src:x.otherImage,alt:"\u5176\u4ed6",width:200,height:165}),g.a.createElement("p",null,"\u5176\u4ed6"))))),x.approvalStatus&&1!=x.approvalStatus&&g.a.createElement(g.a.Fragment,null,g.a.createElement("h3",{className:"mt-32"},"\u5ba1\u6838\u8bb0\u5f55"),g.a.createElement(o["a"],null),g.a.createElement(r["a"],{rowKey:"id",columns:F,dataSource:x.logs,pagination:!1}))),g.a.createElement(l["a"],{justify:"space-between",align:"middle",className:"mt-32"},g.a.createElement(n["a"],{span:3},A("first")?g.a.createElement(T["a"],{to:"/catalog/typeapproval/detail/".concat(O("first"))},g.a.createElement(q["a"],null),"\u4e0a\u4e00\u6761 "):g.a.createElement(M,{className:"font-size-16 cur-not",disabled:!0},g.a.createElement(q["a"],null),"\u4e0a\u4e00\u6761")),x.approvalStatus&&1==x.approvalStatus&&g.a.createElement(n["a"],{span:12},g.a.createElement("div",{className:"inline text-center"},g.a.createElement(S,{id:t.params.id}),g.a.createElement(R,{id:t.params.id}))),g.a.createElement(n["a"],{span:3,style:{textAlign:"right"}},A("last")?g.a.createElement(T["a"],{to:"/catalog/typeapproval/detail/".concat(O("last"))}," \u4e0b\u4e00\u6761 ",g.a.createElement(P["a"],null)," "):g.a.createElement(M,{className:"font-size-16 cur-not",disabled:!0},"\u4e0b\u4e00\u6761 ",g.a.createElement(P["a"],null)))))};a["default"]=Object(A["a"])((function(e){var a=e.typeApproval;return{typeApproval:a}}))(J)},Hp0T:function(e,a,t){e.exports={main:"antd-pro-pages-type-approval-detail-index-main",photoContainer:"antd-pro-pages-type-approval-detail-index-photoContainer",item:"antd-pro-pages-type-approval-detail-index-item"}}}]);