(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"0JQy":function(e,t){var a="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",c=n+r+i,l="\\ufe0e\\ufe0f",o="["+a+"]",s="["+c+"]",u="\\ud83c[\\udffb-\\udfff]",d="(?:"+s+"|"+u+")",m="[^"+a+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",g="\\u200d",b=d+"?",v="["+l+"]?",E="(?:"+g+"(?:"+[m,f,p].join("|")+")"+v+b+")*",y=v+b+E,h="(?:"+[m+s+"?",s,f,p,o].join("|")+")",x=RegExp(u+"(?="+u+")|"+h+y,"g");function I(e){return e.match(x)||[]}e.exports=I},"6D9b":function(e,t,a){e.exports={"ant-modal":"ant-modal","ant-image-preview":"ant-image-preview","zoom-enter":"zoom-enter","zoom-appear":"zoom-appear","ant-modal-mask":"ant-modal-mask","ant-image-preview-mask":"ant-image-preview-mask","ant-modal-mask-hidden":"ant-modal-mask-hidden","ant-image-preview-mask-hidden":"ant-image-preview-mask-hidden","ant-modal-wrap":"ant-modal-wrap","ant-image-preview-wrap":"ant-image-preview-wrap","ant-statistic":"ant-statistic","ant-statistic-title":"ant-statistic-title","ant-statistic-content":"ant-statistic-content","ant-statistic-content-value":"ant-statistic-content-value","ant-statistic-content-value-decimal":"ant-statistic-content-value-decimal","ant-statistic-content-prefix":"ant-statistic-content-prefix","ant-statistic-content-suffix":"ant-statistic-content-suffix","ant-statistic-rtl":"ant-statistic-rtl"}},"711d":function(e,t){function a(e){return function(t){return null==t?void 0:t[e]}}e.exports=a},"B6l+":function(e,t,a){var n=a("Sq3C"),r=a("Z1HP"),i=a("Sxd8"),c=a("dt0z");function l(e,t,a){e=c(e),t=i(t);var l=t?r(e):0;return t&&l<t?e+n(t-l,a):e}e.exports=l},Em2t:function(e,t,a){var n=a("bahg"),r=a("quyA"),i=a("0JQy");function c(e){return r(e)?i(e):n(e)}e.exports=c},"H/iU":function(e,t,a){"use strict";a.r(t);var n=a("k1fw"),r=a("tJVT"),i=a("Hx5s"),c=a("q1tI"),l=a.n(c),o=a("9kvl"),s=a("LEhT"),u=(a("Znn+"),a("ZTPi")),d=a("lnZv"),m=a.n(d),f=u["a"].TabPane,p=function(e){var t=e.tabData,a=void 0===t?[]:t,n=e.size,r=void 0===n?"default":n,i=e.tabsChange,c=function(e){i(e)};return l.a.createElement("div",{className:m.a.container},l.a.createElement("div",{id:"components-tabs-demo-basic"},l.a.createElement(u["a"],{defaultActiveKey:"1",onChange:c,size:r},a.map((function(e){return l.a.createElement(f,{tab:e.title,key:e.id},e.component)})))))},g=(a("g9YV"),a("wCAj")),b=a("0Owb"),v=a("55Ip"),E=a("K6AL"),y=a("nQOV"),h=a.n(y),x={x:1e3},I=[{title:"\u7533\u8bf7\u65e5\u671f",dataIndex:"lastImageInputtedDate",key:"lastImageInputtedDate"},{title:"\u7ecf\u9500\u5546",dataIndex:"agentOutletsName",key:"agentOutletsName"},{title:"\u5e02\u533a",dataIndex:"agentOutletsCity",key:"agentOutletsCity"},{title:"\u8f66\u8f86\u54c1\u724c",dataIndex:"brandName",key:"brandName"},{title:"\u8f66\u8f86\u578b\u53f7",dataIndex:"modelName",key:"modelName"},{title:"\u6574\u8f66\u7f16\u7801SN",dataIndex:"electrombileNumber",key:"electrombileNumber"},{title:"ccc\u8bc1\u4e66\u7f16\u7801",dataIndex:"cccCertificateNumber",key:"cccCertificateNumber"},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"auditStatus",key:"auditStatus",width:80,render:function(e){var t=E["b"].filter((function(t){return t.key===e}))||[];return l.a.createElement("span",{className:"font-".concat(t[0].color)},t[0].val)}},{title:"\u5ba1\u6838\u65e5\u671f",dataIndex:"auditedAt",key:"auditedAt"},{title:"\u4e0d\u901a\u8fc7\u539f\u56e0",dataIndex:"notPassReason",key:"notPassReason"},{title:"\u64cd\u4f5c",dataIndex:"id",key:"id",fixed:"right",render:function(e){return l.a.createElement(v["a"],{to:"/carmanage/details/".concat(e)},"\u67e5\u770b\u8be6\u60c5")}}],L=function(e){var t=e.meansListState,a=e.tableLoading,i=e.paginationChange,o=(e.getList,t.total),s=t.current,u=t.pageSize,d=t.list,m=Object(c["useState"])([u]),f=Object(r["a"])(m,2),p=f[0];f[1];console.log(u);var v=function(e,a){i(e,!1,Object(n["a"])(Object(n["a"])({},t.filter),{},{pageSize:a[0],pageIndex:e}))},E={rowKey:"id",columns:I,scroll:x,pagination:{total:o,current:s,pageSize:p,onChange:v,showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0},dataSource:d};return l.a.createElement("div",{className:h.a.container},l.a.createElement("div",{id:"components-table-demo-basic"},l.a.createElement(g["a"],Object(b["a"])({key:(new Date).getTime(),loading:a},E))))},S=Object(o["connect"])((function(e){var t=e.meansList,a=e.loading;return{meansListState:t,tableLoading:a.effects["meansList/getList"]}}))(L),D=(a("+L6B"),a("2/Rp")),N=(a("miYZ"),a("tsqr")),w=a("zXdt"),O=a("xvlK"),k=a("jzII"),C=a.n(k),j={x:1e3},z=[{title:"\u5e8f\u53f7",dataIndex:"plateNumberApplyId",key:"plateNumberApplyId"},{title:"\u7ecf\u9500\u5546",dataIndex:"secondaryAgentOutletsName",key:"secondaryAgentOutletsName"},{title:"\u8f66\u8f86\u54c1\u724c",dataIndex:"brandName",key:"brandName"},{title:"\u8f66\u8f86\u578b\u53f7",dataIndex:"modelName",key:"modelName"},{title:"\u6574\u8f66\u7f16\u7801SN",dataIndex:"electrombileNumber",key:"electrombileNumber"},{title:"\u8f66\u724c\u5e8f\u53f7",dataIndex:"prefix",key:"prefix"},{title:"\u8f66\u724c\u53f7",dataIndex:"plateNumberCode",key:"plateNumberCode"},{title:"\u7528\u9014",dataIndex:"electrombileUsageStr",key:"electrombileUsageStr"},{title:"\u5206\u914d\u65e5\u671f",dataIndex:"distributionDate",key:"distributionDate"}],Y=function(e){var t=e.distributeListState,a=e.tableLoading,i=e.paginationChange,o=t.total,s=t.current,u=t.pageSize,d=t.list;console.log("distributeListState: ",t);var m=Object(c["useState"])([u]),f=Object(r["a"])(m,2),p=f[0],v=f[1],E=function(e,a){console.log(111),console.log("filter",t.filter),i(e,!1,Object(n["a"])(Object(n["a"])({},t.filter),{},{pageIndex:e,pageSize:a[0]}))},y=function(){if(!d||0===d.length)return N["b"].warning("\u6ca1\u6709\u53f7\u724c\u5206\u914d\u6570\u636e\u53ef\u4ee5\u5bfc\u51fa"),!1;w["a"].exportExcel(z,d,"\u53f7\u724c\u5206\u914d\u8868.xlsx")},h={rowKey:"id",columns:z,pagination:{total:o,current:s,pageSize:p,onChange:E,showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(e,t){v(t)}},scroll:j,dataSource:d};return l.a.createElement("div",{className:C.a.container},l.a.createElement("div",{id:"components-table-demo-basic"},l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement(D["a"],{type:"primary",className:"btn-green mb-24",icon:l.a.createElement(O["a"],null),onClick:y},"\u5bfc\u51fa\u5206\u914d\u8868")),l.a.createElement(g["a"],Object(b["a"])({loading:a},h))))},M=Object(o["connect"])((function(e){var t=e.distributeList,a=e.loading;return{distributeListState:t,tableLoading:a.effects["distributeList/getList"]}}))(Y),A=(a("14J3"),a("BMrR")),T=(a("6UJt"),a("DFOY")),P=(a("jCWc"),a("kPKH")),Q=(a("5NDa"),a("5rEg")),R=(a("y8nQ"),a("Vl3Y")),H=(a("iQDF"),a("+eQT")),q=(a("OaEy"),a("2fM7")),Z=a("Q6aD"),B=a.n(Z),F=a("+n12"),J=q["a"].Option,K=H["a"].RangePicker,U=function(e){var t=e.dispatch,a=e.meansListState,n=e.userInfo,i=e.subDealerList,o=e.distributeList,s=e.subDealerListLoading;console.log("userInfo: ",n);var u=R["a"].useForm(),d=Object(r["a"])(u,1),m=d[0];function f(e){var a=Object(r["a"])(e,2),i=a[0],c=void 0===i?"":i,l=a[1],o=void 0===l?"":l;t({type:"subDealer/getList",payload:{agentOutletsId:n.firstId,city:c||"",region:o||""}}),m.setFieldsValue({secondDealer:""})}Object(c["useEffect"])((function(){t({type:"subDealer/getList",payload:{agentOutletsId:n.firstId,city:"",region:""}})}),[]),Object(c["useEffect"])((function(){t({type:"distributeList/requestGetCity",payload:{agentOutletsId:n.id}})}),[]),console.log(o);var p=function(){return l.a.createElement(A["a"],{gutter:24},l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u6574\u8f66\u7f16\u7801SN",name:"SNCode"},l.a.createElement(Q["a"],{placeholder:"\u6574\u8f66\u7f16\u7801SN"}))),"vip"!=n["antd-pro-authority"]&&l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u8f66\u8f86\u54c1\u724c",name:"carBrand"},l.a.createElement(Q["a"],{placeholder:"\u8f66\u8f86\u54c1\u724c"}))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u8f66\u8f86\u578b\u53f7",name:"carModel"},l.a.createElement(Q["a"],{placeholder:"\u8f66\u8f86\u578b\u53f7"}))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u5ba1\u6838\u72b6\u6001",name:"status"},l.a.createElement(q["a"],{placeholder:"\u5ba1\u6838\u72b6\u6001"},l.a.createElement(J,{value:""},"\u5168\u90e8"),l.a.createElement(J,{value:"2"},"\u4e0d\u901a\u8fc7"),l.a.createElement(J,{value:"1"},"\u5df2\u5b8c\u6210"),l.a.createElement(J,{value:"0"},"\u5f85\u5ba1\u6838")))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u5e02\u533a",name:"address"},l.a.createElement(T["a"],{options:Object(F["a"])(o.city),onChange:f,placeholder:"\u8bf7\u9009\u62e9\u5e02\u533a",expandTrigger:"hover"}))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u7ecf\u9500\u5546",name:"secondDealer"},l.a.createElement(q["a"],{placeholder:"\u7ecf\u9500\u5546",loading:s,disabled:s},l.a.createElement(J,{value:""},"\u5168\u90e8"),i.map((function(e){return l.a.createElement(J,{key:e.id,value:e.id},e.name)}))))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u7533\u8bf7\u65e5\u671f",name:"applyDate"},l.a.createElement(K,null))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u5ba1\u6838\u65e5\u671f",name:"date"},l.a.createElement(K,null))))},g=function(e){t({type:"meansList/getList",payload:{agentOutletsId:n.firstId,account:n.phone,pageIndex:1,pageSize:a.pageSize,electrombileNumber:e.SNCode,brandName:e.carBrand,modelName:e.carModel,auditStatus:e.status,secondaryAgentOutletsId:e.secondDealer?[e.secondDealer]:[],startApplicationDate:e.applyDate?e.applyDate[0].format("YYYY-MM-DD"):"",endApplicationDate:e.applyDate?e.applyDate[1].format("YYYY-MM-DD"):"",startAuditedAt:e.date?e.date[0].format("YYYY-MM-DD"):"",endAuditedAt:e.date?e.date[1].format("YYYY-MM-DD"):"",city:e.address?e.address[0]:"",region:e.address&&e.address[1]?e.address[1]:""}})},b=function(e){console.log("fail",e)},v={secondDealer:"",address:[""],status:""};return l.a.createElement(R["a"],{className:"ant-advanced-search-form",name:"car-manage-form-search",form:m,onFinish:g,onFinishFailed:b,initialValues:v},p(),l.a.createElement(A["a"],null,l.a.createElement(P["a"],{span:24,style:{textAlign:"right"}},l.a.createElement(D["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"))))},V=Object(o["connect"])((function(e){var t=e.meansList,a=e.login,n=e.subDealer,r=e.distributeList,i=e.loading;return{meansListState:t,userInfo:a,subDealerList:n.list,distributeList:r,subDealerListLoading:i.effects["subDealer/getList"]}}))(U),W=function(e){var t=e.children;return l.a.createElement("div",{className:B.a.container},l.a.createElement("div",{id:"components-form-demo-advanced-search"},l.a.createElement("div",null,l.a.createElement(V,null),l.a.createElement("div",{className:"search-result-list"},t))))},X=a("ItmQ"),G=a.n(X),$=q["a"].Option,_=H["a"].RangePicker,ee=function(e){var t=e.dispatch,a=e.distributeListState,n=e.userInfo,r=e.subDealerList,i=e.platePrefixList;Object(c["useEffect"])((function(){t({type:"platePrefix/getList"})}),[]),Object(c["useEffect"])((function(){t({type:"subDealer/getList",payload:{agentOutletsId:n.firstId}})}),[]);var o=function(){return l.a.createElement(A["a"],{gutter:24},l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u7ecf\u9500\u5546",name:"secondDealer"},l.a.createElement(q["a"],{placeholder:"\u7ecf\u9500\u5546"},r.length&&l.a.createElement($,{value:""},"\u5168\u90e8"),r.map((function(e){return l.a.createElement($,{key:e.id,value:e.id},e.name)}))))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u6574\u8f66\u7f16\u7801SN",name:"SNCode"},l.a.createElement(Q["a"],{placeholder:"\u6574\u8f66\u7f16\u7801SN"}))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u8f66\u724c\u5e8f\u53f7",name:"platePrefix"},l.a.createElement(q["a"],{placeholder:"\u8f66\u724c\u5e8f\u53f7"},i.map((function(e){return l.a.createElement($,{key:e,value:e},e)}))))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u8f66\u724c\u53f7",name:"plateNumber"},l.a.createElement(Q["a"],{placeholder:"\u8f66\u724c\u53f7"}))),l.a.createElement(P["a"],{span:8},l.a.createElement(R["a"].Item,{label:"\u5206\u914d\u65e5\u671f",name:"date"},l.a.createElement(_,null))))},s=function(e){t({type:"distributeList/getList",payload:{agentOutletsId:n.firstId,account:n.phone,pageIndex:1,pageSize:a.pageSize,secondaryAgentOutletsId:e.secondDealer,electrombileNumber:e.SNCode,prefix:e.platePrefix,plateNumberCode:e.plateNumber,startDistributionDate:e.date?e.date[0].format("YYYY-MM-DD"):"",endDistributionDate:e.date?e.date[1].format("YYYY-MM-DD"):""}})};return l.a.createElement(R["a"],{className:"ant-advanced-search-form",name:"car-manage-form-search",onFinish:s,initialValues:{secondDealer:""}},o(),l.a.createElement(A["a"],{Row:!0},l.a.createElement(P["a"],{span:24,style:{textAlign:"right"}},l.a.createElement(D["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"))))},te=Object(o["connect"])((function(e){var t=e.distributeList,a=e.login,n=e.subDealer,r=e.platePrefix;return{distributeListState:t,userInfo:a,subDealerList:n.list,platePrefixList:r.list}}))(ee),ae=function(e){var t=e.children;return l.a.createElement("div",{className:G.a.container},l.a.createElement("div",{id:"components-form-demo-advanced-search"},l.a.createElement("div",null,l.a.createElement(te,null),l.a.createElement("div",{className:"search-result-list mt-32"},t))))},ne=(a("2qtc"),a("kLXV")),re=(a("IzEo"),a("bx4M")),ie=(a("cIOH"),a("6D9b"),a("lSNA")),ce=a.n(ie),le=a("pVnL"),oe=a.n(le),se=a("TSYQ"),ue=a.n(se),de=a("H84U"),me=a("B6l+"),fe=a.n(me),pe=function(e){var t,a=e.value,n=e.formatter,r=e.precision,i=e.decimalSeparator,l=e.groupSeparator,o=void 0===l?"":l,s=e.prefixCls;if("function"===typeof n)t=n(a);else{var u=String(a),d=u.match(/^(-?)(\d*)(\.(\d+))?$/);if(d&&"-"!==u){var m=d[1],f=d[2]||"0",p=d[4]||"";f=f.replace(/\B(?=(\d{3})+(?!\d))/g,o),"number"===typeof r&&(p=fe()(p,r,"0").slice(0,r)),p&&(p="".concat(i).concat(p)),t=[c["createElement"]("span",{key:"int",className:"".concat(s,"-content-value-int")},m,f),p&&c["createElement"]("span",{key:"decimal",className:"".concat(s,"-content-value-decimal")},p)]}else t=u}return c["createElement"]("span",{className:"".concat(s,"-content-value")},t)},ge=pe,be=function(e){var t=e.prefixCls,a=e.className,n=e.style,r=e.valueStyle,i=e.value,l=void 0===i?0:i,o=e.title,s=e.valueRender,u=e.prefix,d=e.suffix,m=e.direction,f=e.onMouseEnter,p=e.onMouseLeave,g=c["createElement"](ge,oe()({},e,{value:l})),b=ue()(t,ce()({},"".concat(t,"-rtl"),"rtl"===m),a);return c["createElement"]("div",{className:b,style:n,onMouseEnter:f,onMouseLeave:p},o&&c["createElement"]("div",{className:"".concat(t,"-title")},o),c["createElement"]("div",{style:r,className:"".concat(t,"-content")},u&&c["createElement"]("span",{className:"".concat(t,"-content-prefix")},u),s?s(g):g,d&&c["createElement"]("span",{className:"".concat(t,"-content-suffix")},d)))};be.defaultProps={decimalSeparator:".",groupSeparator:","};var ve=Object(de["c"])({prefixCls:"statistic"})(be),Ee=ve,ye=a("lwsE"),he=a.n(ye),xe=a("W8MJ"),Ie=a.n(xe),Le=a("7W2i"),Se=a.n(Le),De=a("LQ03"),Ne=a.n(De),we=a("J4zp"),Oe=a.n(we),ke=a("QQZ/"),Ce=a.n(ke),je=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function ze(e,t){var a=e,n=/\[[^\]]*]/g,r=(t.match(n)||[]).map((function(e){return e.slice(1,-1)})),i=t.replace(n,"[]"),c=je.reduce((function(e,t){var n=Oe()(t,2),r=n[0],i=n[1];if(-1!==e.indexOf(r)){var c=Math.floor(a/i);return a-=c*i,e.replace(new RegExp("".concat(r,"+"),"g"),(function(e){var t=e.length;return Ce()(c.toString(),t,"0")}))}return e}),i),l=0;return c.replace(n,(function(){var e=r[l];return l+=1,e}))}function Ye(e,t){var a=t.format,n=void 0===a?"":a,r=new Date(e).getTime(),i=Date.now(),c=Math.max(r-i,0);return ze(c,n)}var Me=a("0n0R"),Ae=1e3/30;function Te(e){return new Date(e).getTime()}var Pe=function(e){Se()(a,e);var t=Ne()(a);function a(){var e;return he()(this,a),e=t.apply(this,arguments),e.syncTimer=function(){var t=e.props.value,a=Te(t);a>=Date.now()?e.startTimer():e.stopTimer()},e.startTimer=function(){e.countdownId||(e.countdownId=window.setInterval((function(){e.forceUpdate()}),Ae))},e.stopTimer=function(){var t=e.props,a=t.onFinish,n=t.value;if(e.countdownId){clearInterval(e.countdownId),e.countdownId=void 0;var r=Te(n);a&&r<Date.now()&&a()}},e.formatCountdown=function(t,a){var n=e.props.format;return Ye(t,oe()(oe()({},a),{format:n}))},e.valueRender=function(e){return Object(Me["a"])(e,{title:void 0})},e}return Ie()(a,[{key:"componentDidMount",value:function(){this.syncTimer()}},{key:"componentDidUpdate",value:function(){this.syncTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return c["createElement"](Ee,oe()({valueRender:this.valueRender},this.props,{formatter:this.formatCountdown}))}}]),a}(c["Component"]);Pe.defaultProps={format:"HH:mm:ss"};var Qe=Pe;Ee.Countdown=Qe;var Re=Ee,He=(a("tU7J"),a("wFql")),qe=a("Ybbr"),Ze=a.n(qe),Be=He["a"].Title,Fe=Q["a"].Search,Je=[{title:"\u8f66\u724c\u53f7",dataIndex:"plateNumber",key:"plateNumber"}],Ke=function(e){var t=e.census,a=e.dispatch,n=e.userInfo,i=e.surplus,o=e.tableLoading,s=i.total,u=i.list,d=i.current,m=i.pageSize,f=Object(c["useState"])(!1),p=Object(r["a"])(f,2),b=p[0],v=p[1],E=function(e){v(e)},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a({type:"surplus/getList",payload:{agentOutletsId:n.firstId,pageIndex:e,pageSize:i.pageSize,plateNumber:t}})},h=function(){y(1),E(!0)},x=function(e){y(e)},I={columns:Je,dataSource:u,rowKey:"id",pagination:{total:s,current:d,pageSize:m,onChange:x},loading:o},L=function(e){y(1,e)};return l.a.createElement("div",{className:Ze.a.container},l.a.createElement(re["a"],{style:{width:600}},l.a.createElement(A["a"],null,l.a.createElement(P["a"],{span:12,className:"total item-wrap"},l.a.createElement(Re,{title:"\u5df2\u5206\u914d\u603b\u6570",value:t.distributionNumber})),l.a.createElement(P["a"],{span:12,className:"total item-wrap"},l.a.createElement("span",{onClick:h},l.a.createElement(Re,{title:"\u5269\u4f59\u5e93\u5b58\u603b\u6570",value:t.residualInventoryNumber,valueStyle:{textDecoration:"underline",color:"#1890ff"}}))))),l.a.createElement(ne["a"],{title:"\u53f7\u724c\u5e93\u5b58",visible:b,footer:null,onCancel:function(){return E(!1)}},l.a.createElement(Be,{level:4,className:"mb-16"},"\u5269\u4f59\u5e93\u5b58\u603b\u6570\uff1a",t.residualInventoryNumber),l.a.createElement(Fe,{className:"mb-16",placeholder:"\u641c\u7d22\u8f66\u724c\u53f7",onSearch:L,enterButton:!0}),l.a.createElement(g["a"],I)))},Ue=Object(o["connect"])((function(e){var t=e.distributeList,a=e.login,n=e.surplus,r=e.loading;return{census:t.census,userInfo:a,surplus:n,tableLoading:r.effects["surplus/getList"]}}))(Ke),Ve=a("RHow"),We=a.n(Ve),Xe=(a("LxC5"),[{title:"\u5206\u914d\u7edf\u8ba1",id:2,component:l.a.createElement(Ue,null)}]),Ge=function(e){var t=e.getMeansList,a=e.getDistributeList;return[{title:"\u8d44\u6599\u5ba1\u6838",id:1,component:l.a.createElement(W,null,l.a.createElement(S,{paginationChange:t}))},{title:"\u5206\u914d\u660e\u7ec6",id:2,component:l.a.createElement("div",null,l.a.createElement(p,{size:"large",tabData:Xe}),l.a.createElement(p,{size:"large",tabData:[{title:"\u53f7\u724c\u5206\u914d",id:2,component:l.a.createElement(ae,null,l.a.createElement(M,{paginationChange:a}))}]}))}]},$e=function(e){var t=e.dispatch,a=e.means,o=e.meansListState,u=e.userInfo,d=e.distributeListState,m=Object(c["useState"])("1"),f=Object(r["a"])(m,2),g=f[0],b=f[1],v=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(n["a"])({},o.filter);t({type:"meansList/getList",payload:Object(n["a"])({agentOutletsId:a||u.firstId,account:u.phone,pageIndex:e,pageSize:o.pageSize,secondaryAgentOutletsId:[]},r)}),t({type:"subDealer/getList",payload:{agentOutletsId:a||u.firstId}})},E=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t({type:"distributeList/getList",payload:Object(n["a"])(Object(n["a"])({agentOutletsId:a||u.firstId,account:u.phone,pageIndex:e,pageSize:d.pageSize,secondaryAgentOutletsId:"",electrombileNumber:"",prefix:"",plateNumberCode:"",startDistributionDate:"",endDistributionDate:""},d.filter),r)}),t({type:"distributeList/getCensus",payload:{account:u.phone,agentOutletsId:a||u.firstId}}),t({type:"subDealer/getList",payload:{agentOutletsId:a||u.firstId}})};Object(c["useEffect"])((function(){v(1,!1,{})}),[]);var y=function(e,t){switch(e){case"1":v(o.current,t);break;case"2":E(d.current,t);break;default:return!1}},h=function(e){b(e),y(e)},x=function(e){y(g,e)};return l.a.createElement(i["b"],{className:We.a.main},l.a.createElement(s["a"],{changeCallBack:x}),l.a.createElement(p,{tabData:Ge({means:a,getMeansList:v,getDistributeList:E}),tabsChange:h}))};t["default"]=Object(o["connect"])((function(e){var t=e.login,a=e.meansList,n=e.distributeList;return{userInfo:t,meansListState:a,distributeListState:n}}))($e)},ItmQ:function(e,t,a){e.exports={container:"antd-pro-pages-car-manage-components-distribute-form-search-index-container"}},KxBF:function(e,t){function a(e,t,a){var n=-1,r=e.length;t<0&&(t=-t>r?0:r+t),a=a>r?r:a,a<0&&(a+=r),r=t>a?0:a-t>>>0,t>>>=0;var i=Array(r);while(++n<r)i[n]=e[n+t];return i}e.exports=a},Q6aD:function(e,t,a){e.exports={container:"antd-pro-pages-car-manage-components-means-form-search-index-container"}},"QQZ/":function(e,t,a){var n=a("Sq3C"),r=a("Z1HP"),i=a("Sxd8"),c=a("dt0z");function l(e,t,a){e=c(e),t=i(t);var l=t?r(e):0;return t&&l<t?n(t-l,a)+e:e}e.exports=l},RHow:function(e,t,a){e.exports={main:"antd-pro-pages-car-manage-index-main"}},Sq3C:function(e,t,a){var n=a("sKgW"),r=a("zoYe"),i=a("wy8a"),c=a("quyA"),l=a("Z1HP"),o=a("Em2t"),s=Math.ceil;function u(e,t){t=void 0===t?" ":r(t);var a=t.length;if(a<2)return a?n(t,e):t;var u=n(t,s(e/l(t)));return c(t)?i(o(u),0,e).join(""):u.slice(0,e)}e.exports=u},Sxd8:function(e,t,a){var n=a("ZCgT");function r(e){var t=n(e),a=t%1;return t===t?a?t-a:t:0}e.exports=r},Ybbr:function(e,t,a){e.exports={container:"antd-pro-pages-car-manage-components-card-census-basic-index-container"}},Z1HP:function(e,t,a){var n=a("ycre"),r=a("quyA"),i=a("q4HE");function c(e){return r(e)?i(e):n(e)}e.exports=c},ZCgT:function(e,t,a){var n=a("tLB3"),r=1/0,i=17976931348623157e292;function c(e){if(!e)return 0===e?e:0;if(e=n(e),e===r||e===-r){var t=e<0?-1:1;return t*i}return e===e?e:0}e.exports=c},bahg:function(e,t){function a(e){return e.split("")}e.exports=a},dt0z:function(e,t,a){var n=a("zoYe");function r(e){return null==e?"":n(e)}e.exports=r},eUgh:function(e,t){function a(e,t){var a=-1,n=null==e?0:e.length,r=Array(n);while(++a<n)r[a]=t(e[a],a,e);return r}e.exports=a},jzII:function(e,t,a){},lnZv:function(e,t,a){e.exports={container:"antd-pro-pages-car-manage-components-tabs-basic-index-container"}},nQOV:function(e,t,a){},q4HE:function(e,t){var a="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",c=n+r+i,l="\\ufe0e\\ufe0f",o="["+a+"]",s="["+c+"]",u="\\ud83c[\\udffb-\\udfff]",d="(?:"+s+"|"+u+")",m="[^"+a+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",g="\\u200d",b=d+"?",v="["+l+"]?",E="(?:"+g+"(?:"+[m,f,p].join("|")+")"+v+b+")*",y=v+b+E,h="(?:"+[m+s+"?",s,f,p,o].join("|")+")",x=RegExp(u+"(?="+u+")|"+h+y,"g");function I(e){var t=x.lastIndex=0;while(x.test(e))++t;return t}e.exports=I},quyA:function(e,t){var a="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",c=n+r+i,l="\\ufe0e\\ufe0f",o="\\u200d",s=RegExp("["+o+a+c+l+"]");function u(e){return s.test(e)}e.exports=u},sKgW:function(e,t){var a=9007199254740991,n=Math.floor;function r(e,t){var r="";if(!e||t<1||t>a)return r;do{t%2&&(r+=e),t=n(t/2),t&&(e+=e)}while(t);return r}e.exports=r},wy8a:function(e,t,a){var n=a("KxBF");function r(e,t,a){var r=e.length;return a=void 0===a?r:a,!t&&a>=r?e:n(e,t,a)}e.exports=r},ycre:function(e,t,a){var n=a("711d"),r=n("length");e.exports=r},zoYe:function(e,t,a){var n=a("nmnc"),r=a("eUgh"),i=a("Z0cm"),c=a("/9aa"),l=1/0,o=n?n.prototype:void 0,s=o?o.toString:void 0;function u(e){if("string"==typeof e)return e;if(i(e))return r(e,u)+"";if(c(e))return s?s.call(e):"";var t=e+"";return"0"==t&&1/e==-l?"-0":t}e.exports=u}}]);