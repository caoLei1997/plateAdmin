(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0JQy":function(e,t){var a="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",o=n+r+i,c="\\ufe0e\\ufe0f",l="["+a+"]",u="["+o+"]",s="\\ud83c[\\udffb-\\udfff]",f="(?:"+u+"|"+s+")",d="[^"+a+"]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",b="\\u200d",v=f+"?",g="["+c+"]?",y="(?:"+b+"(?:"+[d,m,p].join("|")+")"+g+v+")*",h=g+v+y,E="(?:"+[d+u+"?",u,m,p,l].join("|")+")",x=RegExp(s+"(?="+s+")|"+E+h,"g");function S(e){return e.match(x)||[]}e.exports=S},"6D9b":function(e,t,a){e.exports={"ant-statistic":"ant-statistic","ant-statistic-title":"ant-statistic-title","ant-statistic-content":"ant-statistic-content","ant-statistic-content-value":"ant-statistic-content-value","ant-statistic-content-value-decimal":"ant-statistic-content-value-decimal","ant-statistic-content-prefix":"ant-statistic-content-prefix","ant-statistic-content-suffix":"ant-statistic-content-suffix","ant-statistic-rtl":"ant-statistic-rtl"}},"711d":function(e,t){function a(e){return function(t){return null==t?void 0:t[e]}}e.exports=a},"B6l+":function(e,t,a){var n=a("Sq3C"),r=a("Z1HP"),i=a("Sxd8"),o=a("dt0z");function c(e,t,a){e=o(e),t=i(t);var c=t?r(e):0;return t&&c<t?e+n(t-c,a):e}e.exports=c},Em2t:function(e,t,a){var n=a("bahg"),r=a("quyA"),i=a("0JQy");function o(e){return r(e)?i(e):n(e)}e.exports=o},"H/iU":function(e,t,a){"use strict";a.r(t);var n=a("VTBJ"),r=a("ODXe"),i=a("Hx5s"),o=a("q1tI"),c=a.n(o),l=a("9kvl"),u=a("LEhT"),s=(a("Znn+"),a("ZTPi")),f=a("lnZv"),d=a.n(f),m=s["a"].TabPane,p=function(e){var t=e.tabData,a=void 0===t?[]:t,n=e.size,r=void 0===n?"default":n,i=e.tabsChange,o=function(e){i(e)};return c.a.createElement("div",{className:d.a.container},c.a.createElement("div",{id:"components-tabs-demo-basic"},c.a.createElement(s["a"],{defaultActiveKey:"1",onChange:o,size:r},a.map((function(e){return c.a.createElement(m,{tab:e.title,key:e.id},e.component)})))))},b=(a("g9YV"),a("wCAj")),v=a("55Ip"),g=a("K6AL"),y=a("nQOV"),h=a.n(y),E={x:1e3},x=[{title:"\u7533\u8bf7\u65e5\u671f",dataIndex:"updatedAt",key:"updatedAt"},{title:"\u6b21\u7ea7\u7ecf\u9500\u5546",dataIndex:"agentOutletsName",key:"agentOutletsName"},{title:"\u8f66\u8f86\u54c1\u724c",dataIndex:"brandName",key:"brandName"},{title:"\u8f66\u8f86\u578b\u53f7",dataIndex:"modelName",key:"modelName"},{title:"\u6574\u8f66\u7f16\u7801SN",dataIndex:"electrombileNumber",key:"electrombileNumber"},{title:"ccc\u8bc1\u4e66\u7f16\u7801",dataIndex:"cccCertificateNumber",key:"cccCertificateNumber"},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"auditStatus",key:"auditStatus",width:80,render:function(e){var t=g["b"].filter((function(t){return t.key===e}))||[];return c.a.createElement("span",{className:"font-".concat(t[0].color)},t[0].val)}},{title:"\u5ba1\u6838\u65e5\u671f",dataIndex:"auditedAt",key:"auditedAt"},{title:"\u4e0d\u901a\u8fc7\u539f\u56e0",dataIndex:"notPassReason",key:"notPassReason"},{title:"\u64cd\u4f5c",dataIndex:"id",key:"id",fixed:"right",render:function(e){return c.a.createElement(v["a"],{to:"/carmanage/details/".concat(e)},"\u67e5\u770b\u8be6\u60c5")}}],S=function(e){var t=e.meansListState,a=e.tableLoading,n=e.paginationChange,i=t.total,l=t.current,u=t.pageSize,s=t.list,f=Object(o["useState"])([u]),d=Object(r["a"])(f,2),m=d[0],p=d[1],v=function(e){n(e)},g={rowKey:"id",columns:x,pagination:{total:i,current:l,pageSize:m,onChange:v,showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(e,t){p(t),n(e,!1,{pageSize:t})}},loading:a,scroll:E,dataSource:s};return c.a.createElement("div",{className:h.a.container},c.a.createElement("div",{id:"components-table-demo-basic"},c.a.createElement(b["a"],g)))},I=Object(l["a"])((function(e){var t=e.meansList,a=e.loading;return{meansListState:t,tableLoading:a.effects["carMeansList/getList"]}}))(S),N=(a("+L6B"),a("2/Rp")),D=(a("miYZ"),a("tsqr")),O=a("zXdt"),w=a("xvlK"),L=a("jzII"),k=a.n(L),j={x:1e3},C=[{title:"\u5e8f\u53f7",dataIndex:"plateNumberApplyId",key:"plateNumberApplyId"},{title:"\u6b21\u7ea7\u7ecf\u9500\u5546",dataIndex:"secondaryAgentOutletsName",key:"secondaryAgentOutletsName"},{title:"\u8f66\u8f86\u54c1\u724c",dataIndex:"brandName",key:"brandName"},{title:"\u8f66\u8f86\u578b\u53f7",dataIndex:"modelName",key:"modelName"},{title:"\u6574\u8f66\u7f16\u7801SN",dataIndex:"electrombileNumber",key:"electrombileNumber"},{title:"\u8f66\u724c\u5e8f\u53f7",dataIndex:"prefix",key:"prefix"},{title:"\u8f66\u724c\u53f7",dataIndex:"plateNumberCode",key:"plateNumberCode"},{title:"\u7528\u9014",dataIndex:"electrombileUsageStr",key:"electrombileUsageStr"},{title:"\u5206\u914d\u65e5\u671f",dataIndex:"distributionDate",key:"distributionDate"}],z=function(e){var t=e.distributeListState,a=e.tableLoading,n=e.paginationChange,i=t.total,l=t.current,u=t.pageSize,s=t.list,f=Object(o["useState"])([u]),d=Object(r["a"])(f,2),m=d[0],p=d[1],v=function(e){n(e)},g=function(){if(!s||0===s.length)return D["a"].warning("\u6ca1\u6709\u53f7\u724c\u5206\u914d\u6570\u636e\u53ef\u4ee5\u5bfc\u51fa"),!1;O["a"].exportExcel(C,s,"\u53f7\u724c\u5206\u914d\u8868.xlsx")},y={rowKey:"id",columns:C,pagination:{total:i,current:l,pageSize:m,onChange:v,showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(e,t){p(t),n(e,!1,{pageSize:t})}},loading:a,scroll:j,dataSource:s};return c.a.createElement("div",{className:k.a.container},c.a.createElement("div",{id:"components-table-demo-basic"},c.a.createElement("div",{style:{textAlign:"right"}},c.a.createElement(N["a"],{type:"primary",className:"btn-green mb-24",icon:c.a.createElement(w["a"],null),onClick:g},"\u5bfc\u51fa\u5206\u914d\u8868")),c.a.createElement(b["a"],y)))},A=Object(l["a"])((function(e){var t=e.distributeList,a=e.loading;return{distributeListState:t,tableLoading:a.effects["carMeansList/getList"]}}))(z),Y=(a("14J3"),a("BMrR")),M=(a("jCWc"),a("kPKH")),P=(a("y8nQ"),a("Vl3Y")),T=(a("5NDa"),a("5rEg")),R=(a("iQDF"),a("+eQT")),Q=(a("OaEy"),a("2fM7")),H=a("Q6aD"),Z=a.n(H),q=Q["a"].Option,B=R["a"].RangePicker,K=function(e){var t=e.dispatch,a=e.meansListState,n=e.userInfo,r=e.subDealerList;Object(o["useEffect"])((function(){t({type:"subDealer/getList",payload:{agentOutletsId:n.firstId}})}),[]);var i=function(){return c.a.createElement(Y["a"],{gutter:24},c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u6574\u8f66\u7f16\u7801SN",name:"SNCode"},c.a.createElement(T["a"],{placeholder:"\u6574\u8f66\u7f16\u7801SN"}))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u8f66\u8f86\u54c1\u724c",name:"carBrand"},c.a.createElement(T["a"],{placeholder:"\u8f66\u8f86\u54c1\u724c"}))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u8f66\u8f86\u578b\u53f7",name:"carModel"},c.a.createElement(T["a"],{placeholder:"\u8f66\u8f86\u578b\u53f7"}))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u5ba1\u6838\u72b6\u6001",name:"status"},c.a.createElement(Q["a"],{placeholder:"\u5ba1\u6838\u72b6\u6001"},g["b"].map((function(e){return"3"!==e.key&&c.a.createElement(q,{key:e.key,value:e.key},e.val)}))))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u6b21\u7ea7\u7ecf\u9500\u5546",name:"secondDealer"},c.a.createElement(Q["a"],{placeholder:"\u6b21\u7ea7\u7ecf\u9500\u5546"},r.map((function(e){return c.a.createElement(q,{key:e.id,value:e.id},e.name)}))))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u7533\u8bf7\u65e5\u671f",name:"applyDate"},c.a.createElement(B,null))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u5ba1\u6838\u65e5\u671f",name:"date"},c.a.createElement(B,null))))},l=function(e){t({type:"meansList/getList",payload:{agentOutletsId:n.firstId,account:n.phone,pageIndex:1,pageSize:a.pageSize,electrombileNumber:e.SNCode,brandName:e.carBrand,modelName:e.carModel,auditStatus:e.status,secondaryAgentOutletsId:e.secondDealer,startApplicationDate:e.applyDate?e.applyDate[0].format("YYYY-MM-DD"):"",endApplicationDate:e.applyDate?e.applyDate[1].format("YYYY-MM-DD"):"",startAuditedAt:e.date?e.date[0].format("YYYY-MM-DD"):"",endAuditedAt:e.date?e.date[1].format("YYYY-MM-DD"):""}})},u=function(e){console.log("fail",e)};return c.a.createElement(P["a"],{className:"ant-advanced-search-form",name:"car-manage-form-search",onFinish:l,onFinishFailed:u},i(),c.a.createElement(Y["a"],null,c.a.createElement(M["a"],{span:24,style:{textAlign:"right"}},c.a.createElement(N["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"))))},U=Object(l["a"])((function(e){var t=e.meansList,a=e.login,n=e.subDealer;return{meansListState:t,userInfo:a,subDealerList:n.list}}))(K),F=function(e){var t=e.children;return c.a.createElement("div",{className:Z.a.container},c.a.createElement("div",{id:"components-form-demo-advanced-search"},c.a.createElement("div",null,c.a.createElement(U,null),c.a.createElement("div",{className:"search-result-list"},t))))},J=a("ItmQ"),_=a.n(J),V=Q["a"].Option,W=R["a"].RangePicker,X=function(e){var t=e.dispatch,a=e.distributeListState,n=e.userInfo,r=e.subDealerList,i=e.platePrefixList;Object(o["useEffect"])((function(){t({type:"platePrefix/getList"})}),[]),Object(o["useEffect"])((function(){t({type:"subDealer/getList",payload:{agentOutletsId:n.firstId}})}),[]);var l=function(){return c.a.createElement(Y["a"],{gutter:24},c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u6b21\u7ea7\u7ecf\u9500\u5546",name:"secondDealer"},c.a.createElement(Q["a"],{placeholder:"\u6b21\u7ea7\u7ecf\u9500\u5546"},r.map((function(e){return c.a.createElement(V,{key:e.id,value:e.id},e.name)}))))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u6574\u8f66\u7f16\u7801SN",name:"SNCode"},c.a.createElement(T["a"],{placeholder:"\u6574\u8f66\u7f16\u7801SN"}))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u8f66\u724c\u5e8f\u53f7",name:"platePrefix"},c.a.createElement(Q["a"],{placeholder:"\u8f66\u724c\u5e8f\u53f7"},i.map((function(e){return c.a.createElement(V,{key:e,value:e},e)}))))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u8f66\u724c\u53f7",name:"plateNumber"},c.a.createElement(T["a"],{placeholder:"\u8f66\u724c\u53f7"}))),c.a.createElement(M["a"],{span:8},c.a.createElement(P["a"].Item,{label:"\u5206\u914d\u65e5\u671f",name:"date"},c.a.createElement(W,null))))},u=function(e){t({type:"distributeList/getList",payload:{agentOutletsId:n.firstId,account:n.phone,pageIndex:1,pageSize:a.pageSize,secondaryAgentOutletsId:e.secondDealer,electrombileNumber:e.SNCode,prefix:e.platePrefix,plateNumberCode:e.plateNumber,startDistributionDate:e.date?e.date[0].format("YYYY-MM-DD"):"",endDistributionDate:e.date?e.date[1].format("YYYY-MM-DD"):""}})};return c.a.createElement(P["a"],{className:"ant-advanced-search-form",name:"car-manage-form-search",onFinish:u},l(),c.a.createElement(Y["a"],null,c.a.createElement(M["a"],{span:24,style:{textAlign:"right"}},c.a.createElement(N["a"],{type:"primary",htmlType:"submit"},"\u67e5\u8be2"))))},$=Object(l["a"])((function(e){var t=e.distributeList,a=e.login,n=e.subDealer,r=e.platePrefix;return{distributeListState:t,userInfo:a,subDealerList:n.list,platePrefixList:r.list}}))(X),G=function(e){var t=e.children;return c.a.createElement("div",{className:_.a.container},c.a.createElement("div",{id:"components-form-demo-advanced-search"},c.a.createElement("div",null,c.a.createElement($,null),c.a.createElement("div",{className:"search-result-list mt-32"},t))))},ee=(a("2qtc"),a("kLXV")),te=(a("IzEo"),a("bx4M")),ae=(a("cIOH"),a("6D9b"),a("TSYQ")),ne=a.n(ae),re=a("H84U"),ie=a("B6l+"),oe=a.n(ie),ce=function(e){var t,a=e.value,n=e.formatter,r=e.precision,i=e.decimalSeparator,c=e.groupSeparator,l=void 0===c?"":c,u=e.prefixCls;if("function"===typeof n)t=n(a);else{var s=String(a),f=s.match(/^(-?)(\d*)(\.(\d+))?$/);if(f&&"-"!==s){var d=f[1],m=f[2]||"0",p=f[4]||"";m=m.replace(/\B(?=(\d{3})+(?!\d))/g,l),"number"===typeof r&&(p=oe()(p,r,"0").slice(0,r)),p&&(p="".concat(i).concat(p)),t=[o["createElement"]("span",{key:"int",className:"".concat(u,"-content-value-int")},d,m),p&&o["createElement"]("span",{key:"decimal",className:"".concat(u,"-content-value-decimal")},p)]}else t=s}return o["createElement"]("span",{className:"".concat(u,"-content-value")},t)},le=ce;function ue(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},se.apply(this,arguments)}var fe=function(e){var t=e.prefixCls,a=e.className,n=e.style,r=e.valueStyle,i=e.value,c=void 0===i?0:i,l=e.title,u=e.valueRender,s=e.prefix,f=e.suffix,d=e.direction,m=e.onMouseEnter,p=e.onMouseLeave,b=o["createElement"](le,se({},e,{value:c})),v=ne()(t,a,ue({},"".concat(t,"-rtl"),"rtl"===d));return o["createElement"]("div",{className:v,style:n,onMouseEnter:m,onMouseLeave:p},l&&o["createElement"]("div",{className:"".concat(t,"-title")},l),o["createElement"]("div",{style:r,className:"".concat(t,"-content")},s&&o["createElement"]("span",{className:"".concat(t,"-content-prefix")},s),u?u(b):b,f&&o["createElement"]("span",{className:"".concat(t,"-content-suffix")},f)))};fe.defaultProps={decimalSeparator:".",groupSeparator:","};var de=Object(re["c"])({prefixCls:"statistic"})(fe),me=de,pe=a("QQZ/"),be=a.n(pe);function ve(e,t){return xe(e)||Ee(e,t)||ye(e,t)||ge()}function ge(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ye(e,t){if(e){if("string"===typeof e)return he(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?he(e,t):void 0}}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Ee(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)if(a.push(o.value),t&&a.length===t)break}catch(l){r=!0,i=l}finally{try{n||null==c["return"]||c["return"]()}finally{if(r)throw i}}return a}}function xe(e){if(Array.isArray(e))return e}var Se=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function Ie(e,t){var a=e,n=/\[[^\]]*]/g,r=(t.match(n)||[]).map((function(e){return e.slice(1,-1)})),i=t.replace(n,"[]"),o=Se.reduce((function(e,t){var n=ve(t,2),r=n[0],i=n[1];if(-1!==e.indexOf(r)){var o=Math.floor(a/i);return a-=o*i,e.replace(new RegExp("".concat(r,"+"),"g"),(function(e){var t=e.length;return be()(o.toString(),t,"0")}))}return e}),i),c=0;return o.replace(n,(function(){var e=r[c];return c+=1,e}))}function Ne(e,t){var a=t.format,n=void 0===a?"":a,r=new Date(e).getTime(),i=Date.now(),o=Math.max(r-i,0);return Ie(o,n)}var De=a("0n0R");function Oe(e){return Oe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oe(e)}function we(){return we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},we.apply(this,arguments)}function Le(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ke(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function je(e,t,a){return t&&ke(e.prototype,t),a&&ke(e,a),e}function Ce(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ze(e,t)}function ze(e,t){return ze=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ze(e,t)}function Ae(e){var t=Pe();return function(){var a,n=Te(e);if(t){var r=Te(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Ye(this,a)}}function Ye(e,t){return!t||"object"!==Oe(t)&&"function"!==typeof t?Me(e):t}function Me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Te(e){return Te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Te(e)}var Re=1e3/30;function Qe(e){return new Date(e).getTime()}var He=function(e){Ce(a,e);var t=Ae(a);function a(){var e;return Le(this,a),e=t.apply(this,arguments),e.syncTimer=function(){var t=e.props.value,a=Qe(t);a>=Date.now()?e.startTimer():e.stopTimer()},e.startTimer=function(){e.countdownId||(e.countdownId=window.setInterval((function(){e.forceUpdate()}),Re))},e.stopTimer=function(){var t=e.props,a=t.onFinish,n=t.value;if(e.countdownId){clearInterval(e.countdownId),e.countdownId=void 0;var r=Qe(n);a&&r<Date.now()&&a()}},e.formatCountdown=function(t,a){var n=e.props.format;return Ne(t,we(we({},a),{format:n}))},e.valueRender=function(e){return Object(De["a"])(e,{title:void 0})},e}return je(a,[{key:"componentDidMount",value:function(){this.syncTimer()}},{key:"componentDidUpdate",value:function(){this.syncTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return o["createElement"](me,we({valueRender:this.valueRender},this.props,{formatter:this.formatCountdown}))}}]),a}(o["Component"]);He.defaultProps={format:"HH:mm:ss"};var Ze=He;me.Countdown=Ze;var qe=me,Be=(a("tU7J"),a("wFql")),Ke=a("Ybbr"),Ue=a.n(Ke),Fe=Be["a"].Title,Je=T["a"].Search,_e=[{title:"\u8f66\u724c\u53f7",dataIndex:"plateNumber",key:"plateNumber"}],Ve=function(e){var t=e.census,a=e.dispatch,n=e.userInfo,i=e.surplus,l=e.tableLoading,u=i.total,s=i.list,f=i.current,d=i.pageSize,m=Object(o["useState"])(!1),p=Object(r["a"])(m,2),v=p[0],g=p[1],y=function(e){g(e)},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a({type:"surplus/getList",payload:{agentOutletsId:n.firstId,pageIndex:e,pageSize:i.pageSize,plateNumber:t}})},E=function(){h(1),y(!0)},x=function(e){h(e)},S={columns:_e,dataSource:s,rowKey:"id",pagination:{total:u,current:f,pageSize:d,onChange:x},loading:l},I=function(e){h(1,e)};return c.a.createElement("div",{className:Ue.a.container},c.a.createElement(te["a"],{style:{width:600}},c.a.createElement(Y["a"],null,c.a.createElement(M["a"],{span:12,className:"total item-wrap"},c.a.createElement(qe,{title:"\u5df2\u5206\u914d\u603b\u6570",value:t.distributionNumber})),c.a.createElement(M["a"],{span:12,className:"total item-wrap"},c.a.createElement("span",{onClick:E},c.a.createElement(qe,{title:"\u5269\u4f59\u5e93\u5b58\u603b\u6570",value:t.residualInventoryNumber,valueStyle:{textDecoration:"underline",color:"#1890ff"}}))))),c.a.createElement(ee["a"],{title:"\u53f7\u724c\u5e93\u5b58",visible:v,footer:null,onCancel:function(){return y(!1)}},c.a.createElement(Fe,{level:4,className:"mb-16"},"\u5269\u4f59\u5e93\u5b58\u603b\u6570\uff1a",t.residualInventoryNumber),c.a.createElement(Je,{className:"mb-16",placeholder:"\u641c\u7d22\u8f66\u724c\u53f7",onSearch:I,enterButton:!0}),c.a.createElement(b["a"],S)))},We=Object(l["a"])((function(e){var t=e.distributeList,a=e.login,n=e.surplus,r=e.loading;return{census:t.census,userInfo:a,surplus:n,tableLoading:r.effects["surplus/getList"]}}))(Ve),Xe=a("RHow"),$e=a.n(Xe),Ge=[{title:"\u5206\u914d\u7edf\u8ba1",id:2,component:c.a.createElement(We,null)}],et=function(e){var t=e.getMeansList,a=e.getDistributeList;return[{title:"\u8d44\u6599\u5ba1\u6838",id:1,component:c.a.createElement(F,null,c.a.createElement(I,{paginationChange:t}))},{title:"\u5206\u914d\u660e\u7ec6",id:2,component:c.a.createElement("div",null,c.a.createElement(p,{size:"large",tabData:Ge}),c.a.createElement(p,{size:"large",tabData:[{title:"\u53f7\u724c\u5206\u914d",id:2,component:c.a.createElement(G,null,c.a.createElement(A,{paginationChange:a}))}]}))}]},tt=function(e){var t=e.dispatch,a=e.means,l=e.meansListState,s=e.userInfo,f=e.distributeListState,d=Object(o["useState"])("1"),m=Object(r["a"])(d,2),b=m[0],v=m[1],g=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t({type:"meansList/getList",payload:Object(n["a"])({agentOutletsId:a||s.firstId,account:s.phone,pageIndex:e,pageSize:l.pageSize},r)})},y=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t({type:"distributeList/getList",payload:Object(n["a"])({agentOutletsId:a||s.firstId,account:s.phone,pageIndex:e,pageSize:f.pageSize,secondaryAgentOutletsId:"",electrombileNumber:"",prefix:"",plateNumberCode:"",startDistributionDate:"",endDistributionDate:""},r)}),t({type:"distributeList/getCensus",payload:{account:s.phone,agentOutletsId:a||s.firstId}})};Object(o["useEffect"])((function(){g(1)}),[]);var h=function(e,t){switch(e){case"1":g(l.current,t);break;case"2":y(f.current,t);break;default:return!1}},E=function(e){v(e),h(e)},x=function(e){h(b,e)};return c.a.createElement(i["b"],{className:$e.a.main},c.a.createElement(u["a"],{changeCallBack:x}),c.a.createElement(p,{tabData:et({means:a,getMeansList:g,getDistributeList:y}),tabsChange:E}))};t["default"]=Object(l["a"])((function(e){var t=e.login,a=e.meansList,n=e.distributeList;return{userInfo:t,meansListState:a,distributeListState:n}}))(tt)},ItmQ:function(e,t,a){e.exports={container:"antd-pro-pages-car-manage-components-distribute-form-search-index-container"}},KxBF:function(e,t){function a(e,t,a){var n=-1,r=e.length;t<0&&(t=-t>r?0:r+t),a=a>r?r:a,a<0&&(a+=r),r=t>a?0:a-t>>>0,t>>>=0;var i=Array(r);while(++n<r)i[n]=e[n+t];return i}e.exports=a},Q6aD:function(e,t,a){e.exports={container:"antd-pro-pages-car-manage-components-means-form-search-index-container"}},"QQZ/":function(e,t,a){var n=a("Sq3C"),r=a("Z1HP"),i=a("Sxd8"),o=a("dt0z");function c(e,t,a){e=o(e),t=i(t);var c=t?r(e):0;return t&&c<t?n(t-c,a)+e:e}e.exports=c},RHow:function(e,t,a){e.exports={main:"antd-pro-pages-car-manage-index-main"}},Sq3C:function(e,t,a){var n=a("sKgW"),r=a("zoYe"),i=a("wy8a"),o=a("quyA"),c=a("Z1HP"),l=a("Em2t"),u=Math.ceil;function s(e,t){t=void 0===t?" ":r(t);var a=t.length;if(a<2)return a?n(t,e):t;var s=n(t,u(e/c(t)));return o(t)?i(l(s),0,e).join(""):s.slice(0,e)}e.exports=s},Sxd8:function(e,t,a){var n=a("ZCgT");function r(e){var t=n(e),a=t%1;return t===t?a?t-a:t:0}e.exports=r},Ybbr:function(e,t,a){e.exports={container:"antd-pro-pages-car-manage-components-card-census-basic-index-container"}},Z1HP:function(e,t,a){var n=a("ycre"),r=a("quyA"),i=a("q4HE");function o(e){return r(e)?i(e):n(e)}e.exports=o},ZCgT:function(e,t,a){var n=a("tLB3"),r=1/0,i=17976931348623157e292;function o(e){if(!e)return 0===e?e:0;if(e=n(e),e===r||e===-r){var t=e<0?-1:1;return t*i}return e===e?e:0}e.exports=o},bahg:function(e,t){function a(e){return e.split("")}e.exports=a},dt0z:function(e,t,a){var n=a("zoYe");function r(e){return null==e?"":n(e)}e.exports=r},eUgh:function(e,t){function a(e,t){var a=-1,n=null==e?0:e.length,r=Array(n);while(++a<n)r[a]=t(e[a],a,e);return r}e.exports=a},jzII:function(e,t,a){},lnZv:function(e,t,a){e.exports={container:"antd-pro-pages-car-manage-components-tabs-basic-index-container"}},nQOV:function(e,t,a){},q4HE:function(e,t){var a="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",o=n+r+i,c="\\ufe0e\\ufe0f",l="["+a+"]",u="["+o+"]",s="\\ud83c[\\udffb-\\udfff]",f="(?:"+u+"|"+s+")",d="[^"+a+"]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",b="\\u200d",v=f+"?",g="["+c+"]?",y="(?:"+b+"(?:"+[d,m,p].join("|")+")"+g+v+")*",h=g+v+y,E="(?:"+[d+u+"?",u,m,p,l].join("|")+")",x=RegExp(s+"(?="+s+")|"+E+h,"g");function S(e){var t=x.lastIndex=0;while(x.test(e))++t;return t}e.exports=S},quyA:function(e,t){var a="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",o=n+r+i,c="\\ufe0e\\ufe0f",l="\\u200d",u=RegExp("["+l+a+o+c+"]");function s(e){return u.test(e)}e.exports=s},sKgW:function(e,t){var a=9007199254740991,n=Math.floor;function r(e,t){var r="";if(!e||t<1||t>a)return r;do{t%2&&(r+=e),t=n(t/2),t&&(e+=e)}while(t);return r}e.exports=r},wy8a:function(e,t,a){var n=a("KxBF");function r(e,t,a){var r=e.length;return a=void 0===a?r:a,!t&&a>=r?e:n(e,t,a)}e.exports=r},ycre:function(e,t,a){var n=a("711d"),r=n("length");e.exports=r},zoYe:function(e,t,a){var n=a("nmnc"),r=a("eUgh"),i=a("Z0cm"),o=a("/9aa"),c=1/0,l=n?n.prototype:void 0,u=l?l.toString:void 0;function s(e){if("string"==typeof e)return e;if(i(e))return r(e,s)+"";if(o(e))return u?u.call(e):"";var t=e+"";return"0"==t&&1/e==-c?"-0":t}e.exports=s}}]);