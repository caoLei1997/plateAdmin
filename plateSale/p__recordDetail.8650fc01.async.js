(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{fH4s:function(e,a,t){e.exports={main:"antd-pro-pages-record-detail-index-main","ant-pro-page-header-wrap-children-content":"antd-pro-pages-record-detail-index-ant-pro-page-header-wrap-children-content",container:"antd-pro-pages-record-detail-index-container",status:"antd-pro-pages-record-detail-index-status",photoContainer:"antd-pro-pages-record-detail-index-photoContainer",item:"antd-pro-pages-record-detail-index-item"}},pg6J:function(e,a,t){"use strict";t.r(a);t("14J3");var l=t("BMrR"),r=(t("jCWc"),t("kPKH")),n=(t("g9YV"),t("wCAj")),c=(t("/zsF"),t("PArb")),i=(t("XCrF"),t("1GRj")),m=(t("bP8k"),t("gFTJ")),o=t("fWQN"),s=t("mtLc"),d=t("yKVA"),E=t("879j"),u=(t("tU7J"),t("wFql")),p=(t("fu2T"),t("gK9i")),g=t("q1tI"),h=t.n(g),b=t("fH4s"),I=t.n(b),f=t("5bA4"),v=t("UESt"),N=t("Hx5s"),y=(t("2qtc"),t("kLXV")),C=(t("+L6B"),t("2/Rp")),w=t("WmNS"),x=t.n(w),P=(t("/xke"),t("TeRw")),D=t("9og8"),k=(t("y8nQ"),t("Vl3Y")),O=t("tJVT"),S=(t("5NDa"),t("5rEg")),R=t("9kvl"),j=t("oRlz"),B=S["a"].TextArea,A=function(e){var a=Object(g["useState"])(!1),t=Object(O["a"])(a,2),l=t[0],r=t[1],n=Object(g["useState"])(0),c=Object(O["a"])(n,2),i=c[0],m=c[1],o=e.recordDetail,s=e.login,d=e.dispatch,E=(JSON.parse(localStorage.getItem("recordList")),k["a"].useForm()),u=Object(O["a"])(E,1),p=u[0],b=function(e){r(e)},I=function(e){r(e)},f=function(){var a=Object(D["a"])(x.a.mark((function a(t){var l,r;return x.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return l={id:o.content.licensedSalesRecordApplyRecordId,plateNumberApplyId:o.content.id,driverLicenseId:o.content.driverLicense,notPassReason:t.notPassReason,auditName:s.name,auditPhone:s.phone},a.next=3,Object(j["a"])(l);case 3:r=a.sent,"0000"===r.retCode?(d({type:"recordDetail/getDetail",payload:{id:e.recordId}}),I()):P["a"].error(r.retMsg);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),v=function(e){console.log(e),m(e.notPassReason)};return h.a.createElement("div",null,h.a.createElement(C["a"],{type:"danger",onClick:function(){I(!0)}},"\u5ba1\u6838\u4e0d\u901a\u8fc7"),h.a.createElement(y["a"],{title:"\u786e\u8ba4\u5ba1\u6838\u4e0d\u901a\u8fc7\u5417",visible:l,footer:null,onCancel:function(){return b(!1)}},h.a.createElement("p",null,"\u586b\u5199\u5ba1\u6838\u7406\u7531"),h.a.createElement(k["a"],{name:"catalog-manage-modal-add",onFinish:f,form:p,initialValues:{notPassReason:""},onValuesChange:function(e){v(e)}},h.a.createElement(k["a"].Item,{name:"notPassReason",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u5ba1\u6838\u4e0d\u901a\u8fc7\u7406\u7531!"}],label:"\u539f\u56e0"},h.a.createElement(B,{rows:4,placeholder:"\u8bf7\u586b\u5199\u5ba1\u6838\u4e0d\u901a\u8fc7\u7406\u7531",maxLength:30})),h.a.createElement("div",{style:{textAlign:"right",margin:"-10px 0 10px"}},i.length||0,"/30"),h.a.createElement("div",{style:{textAlign:"right"}},h.a.createElement(C["a"],{type:"primary",htmlType:"submit",style:{marginRight:16}},"\u786e\u5b9a"),h.a.createElement(C["a"],{onClick:function(){return b(!1)}},"\u53d6\u6d88")))))},L=Object(R["a"])((function(e){var a=e.recordDetail,t=e.login;return{recordDetail:a,login:t}}))(A),T=function(e){var a=function(){var a=e.recordDetail,t=e.login,l=e.dispatch,r=(JSON.parse(localStorage.getItem("recordList")),{id:a.content.licensedSalesRecordApplyRecordId,plateNumberApplyId:a.content.id,driverLicenseId:a.content.driverLicense,auditName:t.name,auditPhone:t.phone});Object(j["b"])(r).then((function(a){"0000"===a.retCode&&l({type:"recordDetail/getDetail",payload:{id:e.recordId}})}))},t=function(){y["a"].confirm({title:"\u5ba1\u6838\u901a\u8fc7",content:"\u5ba1\u6838\u901a\u8fc7\u540e\u8be5\u7528\u6237\u7684\u7535\u5b50\u884c\u9a76\u8bc1\u5c06\u6b63\u5f0f\u751f\u6548\uff0c\u786e\u8ba4\u8981\u5ba1\u6838\u901a\u8fc7\u4e48",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:a})};return h.a.createElement("div",null,h.a.createElement(C["a"],{type:"primary",onClick:t},"\u5ba1\u6838\u901a\u8fc7"))},J=Object(R["a"])((function(e){var a=e.recordDetail,t=e.login;return{recordDetail:a,login:t}}))(T),F=p["a"].Panel,M=u["a"],V=function(e){Object(d["a"])(t,e);var a=Object(E["a"])(t);function t(){var e;Object(o["a"])(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return e=a.call.apply(a,[this].concat(r)),e.getDetail=function(a){var t=e.props,l=t.dispatch,r=t.history;l({type:"recordDetail/getDetail",payload:{id:a}}),r.replace("/record/recordDetail/".concat(a)),window.scrollTo(0,0)},e.getPagePrev=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first",t=e.props.match,l=JSON.parse(localStorage.getItem("recordList")).data.ids,r=l.findIndex((function(e){return e===Number(t.params.id)}));return"last"===a?r!==l.length-1:0!==r},e.toDetail=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prev",t=e.props,l=t.match,r=(t.dispatch,JSON.parse(localStorage.getItem("recordList")).data.ids),n=r.findIndex((function(e){return e===Number(l.params.id)}));l.params.id;return"next"===a?r[n+1]:r[n-1]},e}return Object(s["a"])(t,[{key:"componentDidMount",value:function(){this.getDetail(this.props.match.params.id)}},{key:"render",value:function(){var e=this,a=this.props.recordDetail,t=a.content,o=(a.retMsg,this.props.match.params.id),s=function(e){return 0==e?"\u81ea\u7528":1==e?"\u5feb\u9012":2==e?"\u5916\u5356":3==e?"\u5176\u5b83":""},d=[{title:"\u5ba1\u6838\u4eba\u624b\u673a\u53f7",dataIndex:"auditPhone",key:"auditPhone"},{title:"\u5ba1\u6838\u65e5\u671f",dataIndex:"auditedAt",key:"auditedAt"},{title:"\u5ba1\u6838\u7ed3\u679c",dataIndex:"auditStatus",key:"auditStatus",render:function(e){return 1==e?h.a.createElement("div",{className:"font-success"},"\u901a\u8fc7"):h.a.createElement("div",{className:"font-red"},"\u4e0d\u901a\u8fc7")}},{title:"\u4e0d\u901a\u8fc7\u539f\u56e0",dataIndex:"notPassReason",key:"notPassReason"}];return t?h.a.createElement("div",null,h.a.createElement(N["b"],{className:I.a.main},h.a.createElement("div",{className:I.a.container},h.a.createElement("div",{className:I.a.status},h.a.createElement("span",null,"\u5ba1\u6838\u72b6\u6001\uff1a "),h.a.createElement("div",{className:"inline",style:{display:"inline-block"}},2==t.recordStatus?h.a.createElement("div",{className:"font-pending"},"\u5f85\u5ba1\u6838"):4==t.recordStatus?h.a.createElement("div",{className:"font-success"},"\u901a\u8fc7"):h.a.createElement("div",{className:"font-red"},"\u672a\u901a\u8fc7"))),h.a.createElement("div",{className:"record-collapse"},h.a.createElement(p["a"],{accordion:!0,expandIconPosition:"right",ghost:!0},h.a.createElement(F,{className:"collapse",header:"\u5382\u5bb6\u578b\u53f7\u4fe1\u606f",key:"1"},h.a.createElement(m["a"],{title:"",column:2},h.a.createElement(m["a"].Item,{label:"\u8f66\u8f86\u4e2d\u6587\u5546\u6807"},t.electrombileChineseTradeMark),h.a.createElement(m["a"].Item,{label:"\u8f66\u8f86\u578b\u53f7"},t.modelName),h.a.createElement(m["a"].Item,{label:"\u8f66\u8eab\u957f\u5ea6"},t.electrombileLength),h.a.createElement(m["a"].Item,{label:"\u8f66\u8eab\u5bbd\u5ea6"},t.electrombileWidth),h.a.createElement(m["a"].Item,{label:"\u8f66\u8eab\u9ad8\u5ea6"},t.electrombileHeight),h.a.createElement(m["a"].Item,{label:"\u7eed\u822a\u91cc\u7a0b"},t.enduranceMileage),h.a.createElement(m["a"].Item,{label:"\u6574\u8f66\u8d28\u91cf"},t.totalWeight),h.a.createElement(m["a"].Item,{label:"\u6700\u9ad8\u8bbe\u8ba1\u65f6\u901f"},t.maximumDesignedSpeed),h.a.createElement(m["a"].Item,{label:"\u6574\u8f66\u7f16\u7801\u4f4d\u7f6e"},t.codeOnFrame),h.a.createElement(m["a"].Item,{label:"\u94ed\u724c\u56fa\u5b9a\u4f4d\u7f6e"},t.fixedPositionName)),h.a.createElement(m["a"],{title:"",column:1},h.a.createElement(m["a"].Item,{label:"\u8f66\u8f86\u7167\u7247"},h.a.createElement("div",{className:I.a.photoContainer},t.frontElectricCarImage&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.frontElectricCarImage,alt:"\u8f66\u8f86\u6b63\u9762\u7167",width:200,height:165}),h.a.createElement("p",null,"\u8f66\u8f86\u6b63\u9762\u7167")),t.leftElectricCarImage&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.leftElectricCarImage,alt:"\u8f66\u8f86\u5de6\u4fa7\u7167\u7247",width:200,height:165}),h.a.createElement("p",null,"\u8f66\u8f86\u5de6\u4fa7\u7167\u7247")),t.rightRearElectricCarImage&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.rightRearElectricCarImage,alt:"\u53f3\u540e\u65b945\u5ea6\u6574\u8f66\u7167\u7247",width:200,height:165}),h.a.createElement("p",null,"\u53f3\u540e\u65b945\u5ea6\u6574\u8f66\u7167\u7247")),t.certificateElectricCarImage&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.certificateElectricCarImage,alt:"\u8f66\u8f86\u5408\u683c\u8bc1",width:200,height:165}),h.a.createElement("p",null,"\u8f66\u8f86\u5408\u683c\u8bc1")),t.productCertificationImage&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.productCertificationImage,alt:"\u4ea7\u54c1\u8ba4\u8bc1\u4e66",width:200,height:165}),h.a.createElement("p",null,"\u4ea7\u54c1\u8ba4\u8bc1\u4e66")),t.otherImage&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.otherImage,alt:"\u5176\u5b831",width:200,height:165}),h.a.createElement("p",null,"\u5176\u5b831")))))))),h.a.createElement(c["a"],null),h.a.createElement("h3",null,"\u8f66\u8f86\u4fe1\u606f"),h.a.createElement(c["a"],null),h.a.createElement(m["a"],{title:"",column:2},h.a.createElement(m["a"].Item,{label:"\u767b\u8bb0\u5e8f\u53f7"},t.number||"--"),h.a.createElement(m["a"].Item,{label:"\u4f9d\u636e\u6807\u51c6"},(1==t.standard?"\u7b26\u5408\u65b0\u6807\u51c6":2==t.standard?"\u7b26\u5408\u65e7\u6807\u51c6":"\u90fd\u4e0d\u7b26\u5408")||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u8f86\u5236\u9020\u5546"},t.electrombileManufacturer||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u8f86\u4e2d\u6587\u5546\u6807"},t.electrombileChineseTradeMark||"--"),h.a.createElement(m["a"].Item,{label:"\u6574\u8f66\u7f16\u7801"}," ",t.electrombileNumber||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u8f86\u578b\u53f7"}," ",t.modelName||"--"),h.a.createElement(m["a"].Item,{label:"\u4ea7\u54c1\u5408\u683c\u8bc1"}," ",t.electrombileCertificate||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u8eab\u957f\u5ea6"}," ",t.electrombileLength||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u8eab\u5bbd\u5ea6"}," ",t.electrombileWidth||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u8eab\u9ad8\u5ea6"}," ",t.electrombileHeight||"--"),h.a.createElement(m["a"].Item,{label:"\u7eed\u822a\u91cc\u7a0b"}," ",t.enduranceMileage||"--"),h.a.createElement(m["a"].Item,{label:"\u6700\u9ad8\u8bbe\u8ba1\u65f6\u901f"}," ",t.maximumDesignedSpeed||"--"),h.a.createElement(m["a"].Item,{label:"\u6574\u8f66\u7f16\u7801"}," ",t.codeOnFrame||"--"),h.a.createElement(m["a"].Item,{label:"\u94ed\u724c\u56fa\u5b9a\u4f4d\u7f6e"}," ",t.fixedPositionName||"--"),h.a.createElement(m["a"].Item,{label:"\u5236\u9020\u65e5\u671f"}," ",t.manufactureDate||"--"),h.a.createElement(m["a"].Item,{label:"\u9500\u552e\u4f01\u4e1a\u540d\u79f0"}," ",t.saleEnterpriseName||"--"),h.a.createElement(m["a"].Item,{label:"\u751f\u4ea7\u4f01\u4e1a\u540d\u79f0"}," ",t.factoryName||"--"),h.a.createElement(m["a"].Item,{label:"\u7535\u673a\u7f16\u7801"}," ",t.electricNumber||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u8eab\u989c\u8272"}," ",t.electrombileColor||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u8f86\u7528\u9014"}," ",s(t.electrombileUsage)||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u724c\u53f7"}," ",t.plateNumber||"--"),h.a.createElement(m["a"].Item,{label:"\u8f66\u724c\u79cd\u7c7b"}," ","01"==t.plateNumberType?"\u666e\u901a\u7535\u52a8\u81ea\u884c\u8f66\u53f7\u724c":"\u5176\u4ed6\u7535\u52a8\u8f66\u53f7\u724c\uff09"),h.a.createElement(m["a"].Item,{label:"\u767b\u8bb0\u65e5\u671f"}," ",t.createAt||"--"),h.a.createElement(m["a"].Item,{label:"\u767b\u8bb0\u7701\u4efd"}," ",t.registeredRegionName||"--"),h.a.createElement(m["a"].Item,{label:"\u53d1\u8bc1\u673a\u5173"}," ",t.licenselssueAgencyName||"--")),h.a.createElement(m["a"],{title:"",column:1},h.a.createElement(m["a"].Item,{label:"\u8f66\u8f86\u7167\u7247"},h.a.createElement("div",{className:I.a.photoContainer},t.idCardFrontImageBase64&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.idCardFrontImageBase64,alt:"\u8eab\u4efd\u8bc1\u6b63\u9762",width:200,height:165}),h.a.createElement("p",null,"\u8eab\u4efd\u8bc1\u6b63\u9762")),t.idCardEndImageBase64&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.idCardEndImageBase64,alt:"\u8eab\u4efd\u8bc1\u53cd\u9762",width:200,height:165}),h.a.createElement("p",null,"\u8eab\u4efd\u8bc1\u53cd\u9762")),t.electrombileImageBase64&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.electrombileImageBase64,alt:"\u53f3\u540e\u65b945\u5ea6\u6574\u8f66\u7167\u7247",width:200,height:165}),h.a.createElement("p",null,"\u53f3\u540e\u65b945\u5ea6\u6574\u8f66\u7167\u7247")),t.electrombileNumberImageBase64&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.electrombileNumberImageBase64,alt:"\u6574\u8f66\u7f16\u7801",width:200,height:165}),h.a.createElement("p",null,"\u6574\u8f66\u7f16\u7801")),t.electricNumberImageBase64&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.electricNumberImageBase64,alt:"\u7535\u673a\u7f16\u7801",width:200,height:165}),h.a.createElement("p",null,"\u7535\u673a\u7f16\u7801")),t.otherImage1Base64&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.otherImage1Base64,alt:"\u5176\u5b831",width:200,height:165}),h.a.createElement("p",null,"\u5176\u5b831")),t.otherImage2Base64&&h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.otherImage2Base64,alt:"\u5176\u5b832",width:200,height:165}),h.a.createElement("p",null,"\u5176\u5b832")))),t.invoiceImageBase64&&h.a.createElement(m["a"].Item,{label:"\u8d2d\u8f66\u51ed\u8bc1"},h.a.createElement("div",{className:I.a.photoContainer},h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.invoiceImageBase64,alt:"\u8d2d\u8f66\u51ed\u8bc1",width:200,height:165})))),t.licensePlatePhotoBase64&&h.a.createElement(m["a"].Item,{label:"\u5e26\u724c\u8f66\u8f86\u7167\u7247"},h.a.createElement("div",{className:I.a.photoContainer},h.a.createElement("div",{className:I.a.item},h.a.createElement(i["a"],{src:t.licensePlatePhotoBase64,alt:"\u5e26\u724c\u8f66\u8f86\u7167\u7247",width:200,height:165}))))),h.a.createElement("h3",null,"\u8f66\u4e3b\u4fe1\u606f"),h.a.createElement(c["a"],null),h.a.createElement(m["a"],{title:"",column:2},h.a.createElement(m["a"].Item,{label:"\u59d3\u540d"},t.userName||"--"),h.a.createElement(m["a"].Item,{label:"\u8bc1\u4ef6\u7c7b\u578b"},0==t.certificateType?"\u8eab\u4efd\u8bc1":(1==t.certificateType?"\u62a4\u7167":2==t.certificateType?"\u6e2f\u6fb3\u901a\u884c\u8bc1":"\u519b\u5b98\u8bc1")||"--"),h.a.createElement(m["a"].Item,{label:"\u8bc1\u4ef6\u53f7\u7801"},t.certificateNumber||"--"),h.a.createElement(m["a"].Item,{label:"\u624b\u673a\u53f7\u7801"},t.phoneNumber||"--"),h.a.createElement(m["a"].Item,{label:"\u5bb6\u5ead\u4f4f\u5740"},t.detailAddress||"--")),h.a.createElement("h3",null,"\u5ba1\u6838\u8bb0\u5f55"),h.a.createElement(c["a"],null),h.a.createElement(n["a"],{rowKey:"id",columns:d,dataSource:t.managementPlatformAuditRecordsList}))),h.a.createElement(l["a"],{justify:"space-between",align:"middle",className:"mt-32"},h.a.createElement(r["a"],{span:3},this.getPagePrev("first")?h.a.createElement(M,{className:"link-a",onClick:function(){return e.getDetail(e.toDetail("prev"))}}," ",h.a.createElement(f["a"],null),"\u4e0a\u4e00\u6761 "):h.a.createElement(M,{className:"font-size-16",disabled:!0},h.a.createElement(f["a"],null),"\u4e0a\u4e00\u6761")),h.a.createElement(r["a"],{span:12},2==t.recordStatus&&h.a.createElement("div",{className:"inline text-center"},h.a.createElement(L,{recordId:o}),h.a.createElement(J,{recordId:o}))),h.a.createElement(r["a"],{span:3,style:{textAlign:"right"}},this.getPagePrev("last")?h.a.createElement(M,{className:"link-a",onClick:function(){return e.getDetail(e.toDetail("next"))}}," \u4e0b\u4e00\u6761 ",h.a.createElement(v["a"],null)," "):h.a.createElement(M,{className:"font-size-16",disabled:!0},"\u4e0b\u4e00\u6761 ",h.a.createElement(v["a"],null))))):h.a.createElement("div",null,"\u6682\u65e0\u6570\u636e")}}]),t}(g["Component"]);a["default"]=Object(R["a"])((function(e){var a=e.recordDetail;return{recordDetail:a}}))(V)}}]);