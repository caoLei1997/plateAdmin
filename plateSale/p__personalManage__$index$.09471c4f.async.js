(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"4BN6":function(e,t,a){"use strict";a.r(t);var n=a("rh40"),l=a("ZZRV"),c=a.n(l),r=a("9kvl"),o=(a("r81L"),a("xjop")),s=(a("UuN+"),a("fetT")),i=(a("H0yR"),a("VwV8")),u=(a("Nsaa"),a("V0eL")),m=(a("k75N"),a("jIn6")),d=a("iNbU"),p=a("gKBb"),b=a("fXbq"),f=(a("w0HD"),a("q145")),E=a("pxqB"),v=a.n(E),g=f["a"].Option,h=f["a"].OptGroup,O=function(e){var t=e.showAll,a=e.isAddPersonal,n=e.personalDealerState,r=e.dispatch,s=e.onCallBack,u=e.formProps,d=void 0===u?{}:u,p=e.span,E=void 0===p?8:p,O=Object(l["useState"])(""),y=Object(b["a"])(O,2),N=y[0],j=y[1],x=Object(l["useState"])(""),I=Object(b["a"])(x,2),S=I[0],k=I[1],L=Object(l["useState"])("6666666"),C=Object(b["a"])(L,2),w=C[0],P=C[1],T=d.city,q=void 0===T?{}:T,B=d.level,D=void 0===B?{}:B,A=d.dealer,z=void 0===A?{}:A,J=function(){r({type:"personalDealer/getCityList"})},V=function(e,t){var a={};e&&(a.city=e.split("-")[0],a.region=e.split("-")[1]),r({type:"personalDealer/getOutletsList",payload:{city:a.city||"",region:a.region||"",level:t||S},onSuccess:function(){P("")}})},Y=function(e,t){s(e,t),"city"===t&&(j(e),V(e)),"level"===t&&(k(e),V(N,e)),"outlets"===t&&P(e),"outlets"!==t&&s("","outlets")};return Object(l["useEffect"])((function(){J()}),[]),Object(l["useEffect"])((function(){V()}),[]),c.a.createElement("div",{className:v.a.container},c.a.createElement(o["a"],{gutter:12},c.a.createElement(i["a"],{span:E},c.a.createElement(m["a"].Item,{name:"city",label:q.label||"",className:"mb-16"},c.a.createElement(f["a"],{placeholder:q.placeholder||"\u9009\u62e9\u5e02\u533a",onSelect:function(e){return Y(e,"city")}},t&&c.a.createElement(g,{value:""},"\u5168\u90e8\u5e02\u533a"),n.city&&n.city.map((function(e){return c.a.createElement(h,{label:e.value},e.children.length>0&&e.children.map((function(t){return c.a.createElement(g,{value:"".concat(e.value,"-").concat(t.value)},t.value)})))}))))),c.a.createElement(i["a"],{span:E},c.a.createElement(m["a"].Item,{name:"level",label:D.label||"",className:"mb-16"},c.a.createElement(f["a"],{placeholder:D.placeholder||"\u9009\u62e9\u7ecf\u9500\u5546\u7ea7\u522b",onSelect:function(e){return Y(e,"level")}},t&&c.a.createElement(g,{value:""},"\u5168\u90e8\u7ea7\u522b"),c.a.createElement(g,{value:"11"},"\u4e00\u7ea7\u7ecf\u9500\u5546"),c.a.createElement(g,{value:"12"},"\u6b21\u7ea7\u7ecf\u9500\u5546")))),c.a.createElement(i["a"],{span:E},c.a.createElement(m["a"].Item,{name:"outlets",value:w,label:z.label||"",className:"mb-16"},a?c.a.createElement(f["a"],{placeholder:z.placeholder||"\u9009\u62e9\u6240\u5c5e\u7ecf\u9500\u5546",onSelect:function(e){return Y(e,"outlets")}},t&&c.a.createElement(g,{value:""},"\u5168\u90e8\u7f51\u70b9"),n.outlets&&n.outlets.map((function(e){return c.a.createElement(g,{value:"".concat(e.id,"-").concat(e.name)},e.name)}))):c.a.createElement(f["a"],{placeholder:z.placeholder||"\u9009\u62e9\u6240\u5c5e\u7ecf\u9500\u5546",onSelect:function(e){return Y(e,"outlets")}},t&&c.a.createElement(g,{value:""},"\u5168\u90e8\u7f51\u70b9"),n.outlets&&n.outlets.map((function(e){return c.a.createElement(g,{value:e.id},e.name)})))))))},y=Object(r["a"])((function(e){var t=e.personalDealer;return{personalDealerState:t}}))(O),N=a("c1w/"),j=a.n(N),x=(f["a"].Option,function(e){var t=e.btnLoading,a=e.getList,n=e.children,r=e.defaultOutlets,f=Object(l["useState"])({city:null,level:"",outlets:r||""}),E=Object(b["a"])(f,2),v=E[0],g=E[1],h=function(e){var t={city:"",region:"",level:e.level,agentOutletsId:v.outlets};e.city&&(t.city=e.city.split("-")[0],t.region=e.city.split("-")[1]),console.log(Object(p["a"])(Object(p["a"])({},e),t)),a(1,Object(p["a"])(Object(p["a"])({},e),t))},O=function(e,t){g(Object(p["a"])(Object(p["a"])({},v),{},Object(d["a"])({},t,e)))},N={city:{placeholder:"\u5168\u90e8\u5e02\u533a"},level:{placeholder:"\u5168\u90e8\u7ea7\u522b"},dealer:{placeholder:"\u5168\u90e8\u7f51\u70b9"}};return c.a.createElement("div",{className:j.a.container},c.a.createElement("div",{id:"catalog-list-search-form"},c.a.createElement(m["a"],{fields:[{name:["outlets"],value:v.outlets}],className:"ant-advanced-search-form",name:"catalog-manage-table-search",onFinish:h},c.a.createElement("div",{gutter:24},c.a.createElement(m["a"].Item,{label:"\u6240\u5c5e\u7ecf\u9500\u5546"},c.a.createElement(y,{showAll:!0,formProps:N,span:6,onCallBack:O}))),c.a.createElement(o["a"],{gutter:24},c.a.createElement(i["a"],{span:8},c.a.createElement(m["a"].Item,{label:"\u59d3\u540d",name:"name"},c.a.createElement(u["a"],{placeholder:"\u59d3\u540d"}))),c.a.createElement(i["a"],{span:8},c.a.createElement(m["a"].Item,{label:"\u624b\u673a\u53f7",name:"phoneNumber"},c.a.createElement(u["a"],{placeholder:"\u624b\u673a\u53f7"}))),c.a.createElement(i["a"],{span:8},c.a.createElement(s["a"],{loading:t,type:"primary",htmlType:"submit",className:"search-button"},"\u67e5\u8be2")))),c.a.createElement("div",{className:"search-result-list"},n)))}),I=Object(r["a"])((function(e){var t=e.loading;return{btnLoading:t.effects["catalogList/getList"]}}))(x),S=(a("dOwq"),a("nbbt")),k=(a("JYCv"),a("nFUC")),L=a("XGJZ"),C=(a("QqbH"),a("nIwd")),w=a("5pW2"),P=a("y3hc"),T=a.n(P),q=function(e){var t=e.dispatch,a=e.onGetList,n=e.addLoading,r=Object(l["useState"])(!1),f=Object(b["a"])(r,2),E=f[0],v=f[1],g=Object(l["useState"])(!1),h=Object(b["a"])(g,2),O=h[0],N=h[1],j=Object(l["useState"])({city:null,level:"",outlets:""}),x=Object(b["a"])(j,2),I=x[0],P=x[1],q=Object(l["useState"])([]),B=Object(b["a"])(q,2),D=B[0],A=B[1],z=function(e){v(e)},J=function(e,t){P(Object(p["a"])(Object(p["a"])({},I),{},Object(d["a"])({},t,e)))},V=function(e){N(e)},Y=function(e){if(e.city&&e.level&&e.outlets)return!0;for(var t={city:"\u8bf7\u9009\u62e9\u5e02\u533a\uff01",level:"\u8bf7\u9009\u62e9\u7ecf\u9500\u5546\u7ea7\u522b\uff01",outlets:"\u8bf7\u9009\u62e9\u6240\u5c5e\u7ecf\u9500\u5546\uff01"},a=Object.keys(e),n=0;n<a.length;n++)if(!e[a[n]])return C["a"].error(t[a[n]]),!1;return!1},F=function(e){if(!Y(e))return!1;V(!1),console.log(I),A([].concat(Object(L["a"])(D),[Object(p["a"])(Object(p["a"])({},e),{},{agentOutletsId:e.outlets.split("-")[0],dealer:e.outlets.split("-")[1],id:(new Date).getTime(),status:"01"})]))},G=function(){console.log(D);var e=[];D.map((function(t){e.push({agentOutletsId:t.agentOutletsId,agentOutletsName:t.dealer,name:t.name,phoneNumber:t.phone,level:Number(t.level)})})),t({type:"personalList/add",payload:{list:e},onSuccess:function(){C["a"].success("\u6dfb\u52a0\u6210\u529f"),a(),z(!1)}})},Q=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u624b\u673a",dataIndex:"phone",key:"phone"},{title:"\u6240\u5c5e\u7ecf\u9500\u5546",dataIndex:"dealer",key:"name"},{title:"\u64cd\u4f5c",dataIndex:"id",key:"id",render:function(e){return c.a.createElement("div",{key:e.id},"\u5220\u9664")}}],R={columns:Q,dataSource:D,rowKey:"id",pagination:!1};return c.a.createElement("div",{className:T.a.container},c.a.createElement("div",{id:"add-personal-container"},c.a.createElement("div",{className:"add-btn-wrap"},c.a.createElement(s["a"],{type:"primary",className:"btn-green mb-24",icon:c.a.createElement(w["a"],null),onClick:function(){return z(!0)}},"\u65b0\u589e\u4eba\u5458")),c.a.createElement(S["a"],{className:"add-personal-modal",forceRender:!0,destroyOnClose:!0,visible:E,title:"\u65b0\u589e\u4eba\u5458",onCancel:function(){return z(!1)},onOk:function(){return G()}},c.a.createElement(k["a"],R),O?c.a.createElement(m["a"],{fields:[{name:["outlets"],value:I.outlets}],className:"mt-16",name:"add-personal-form",onFinish:F},c.a.createElement(o["a"],{gutter:12},c.a.createElement(i["a"],{span:8},c.a.createElement(m["a"].Item,{name:"name",className:"mb-16",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d!"}]},c.a.createElement(u["a"],{placeholder:"\u59d3\u540d"}))),c.a.createElement(i["a"],{span:8},c.a.createElement(m["a"].Item,{name:"phone",className:"mb-16",rules:[{required:!0,len:11,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7!"}]},c.a.createElement(u["a"],{placeholder:"\u624b\u673a\u53f7"})))),c.a.createElement("div",null,c.a.createElement(y,{isAddPersonal:!0,onCallBack:J})),c.a.createElement("div",{className:"text-right"},c.a.createElement(s["a"],{loading:n,type:"primary",htmlType:"submit",className:"search-button mr-8"},"\u6dfb\u52a0"),c.a.createElement(s["a"],{className:"search-button",onClick:function(){return V(!1)}},"\u53d6\u6d88"))):c.a.createElement("p",{className:T.a.add_text,onClick:function(){return V(!0)}},c.a.createElement(w["a"],null),"\xa0\xa0\u6dfb\u52a0"))))},B=Object(r["a"])((function(e){var t=e.loading;return{addLoading:t.effects["personalList/add"]}}))(q),D=(a("vrub"),a("qkEo")),A=(a("MPvh"),a("m6Cg")),z=a("LZAR"),J=a("LxC5"),V=a("ko5n"),Y=a.n(V),F=A["a"].Text,G=function(e){var t=e.dispatch,a=e.id,n=e.status,l=void 0===n?J["h"].OPEN:n,r=e.getList,o=function(){var e="";l===J["h"].OPEN&&(e=J["h"].CLOSE),l===J["h"].CLOSE&&(e=J["h"].OPEN),t({type:"personalStatus/update",payload:{status:e,id:a},onSuccess:function(){r()}})},s=l===J["h"].OPEN?"\u505c\u7528\u4f1a\u5bfc\u81f4\u8be5\u4e1a\u52a1\u4eba\u5458\u65e0\u6cd5\u518d\u767b\u5f55\u67e5\u9a8c\u5c0f\u7a0b\u5e8f\u529e\u7406\u4e1a\u52a1\uff0c\u786e\u8ba4\u8981\u505c\u7528\u5417\uff1f":"\u542f\u7528\u540e\u8be5\u4e1a\u52a1\u4eba\u5458\u5c06\u53ef\u4ee5\u4f7f\u7528\u8d26\u53f7\u767b\u5f55\u67e5\u9a8c\u5c0f\u7a0b\u5e8f\u5e76\u83b7\u5f97\u76f8\u5e94\u7684\u4e1a\u52a1\u529e\u7406\u6743\u9650\uff0c\u786e\u8ba4\u8981\u542f\u7528\u5417\uff1f",i=l===J["h"].OPEN?"\u505c\u7528":"\u542f\u7528";return c.a.createElement("div",null,c.a.createElement(D["a"],{okText:"\u662f",cancelText:"\u5426",title:c.a.createElement("p",null,s),onConfirm:o},c.a.createElement("a",null,i)))},Q=function(e){var t=e.dispatch,a=e.item,n=e.getList,r=Object(l["useState"])({city:a.region,level:a.level,outlets:"".concat(a.agentOutletsId,"-").concat(a.agentOutletsName)}),o=Object(b["a"])(r,2),i=o[0],f=o[1],E=Object(l["useState"])(!1),v=Object(b["a"])(E,2),g=v[0],h=v[1],O=function(e){h(e)},N=function(e,t){f(Object(p["a"])(Object(p["a"])({},i),{},Object(d["a"])({},t,e)))},j=function(){if(i.city&&i.level&&i.outlets)return!0;for(var e={city:"\u8bf7\u9009\u62e9\u5e02\u533a\uff01",level:"\u8bf7\u9009\u62e9\u7ecf\u9500\u5546\u7ea7\u522b\uff01",outlets:"\u8bf7\u9009\u62e9\u6240\u5c5e\u7ecf\u9500\u5546\uff01"},t=Object.keys(i),a=0;a<t.length;a++)if(!i[t[a]])return C["a"].error(e[t[a]]),!1;return!1},x=function(e){if(!j())return!1;var l={id:a.id,agentOutletsId:e.outlets.split("-")[0],agentOutletsName:e.outlets.split("-")[1],name:e.name,phoneNumber:e.phoneNumber,level:Number(e.level)};console.log("".concat(a.agentOutletsId,"-").concat(a.agentOutletsName)),t({type:"personalStatus/edit",payload:l,onSuccess:function(){O(!1),C["a"].success("\u6dfb\u52a0\u6210\u529f"),n()}})},I={city:{placeholder:"\u5168\u90e8\u5e02\u533a"},level:{placeholder:"\u5168\u90e8\u7ea7\u522b"},dealer:{placeholder:"\u5168\u90e8\u7f51\u70b9"}};return c.a.createElement("div",null,c.a.createElement("a",{onClick:function(){return O(!0)}},"\u7f16\u8f91"),c.a.createElement(S["a"],{title:"\u7f16\u8f91\u4e1a\u52a1\u4eba\u5458",destroyOnClose:!0,visible:g,footer:null,onCancel:function(){return O(!1)}},c.a.createElement(m["a"],{initialValues:{name:a.name,phoneNumber:a.phoneNumber,city:a.region,level:String(a.level)},fields:[{name:["outlets"],value:i.outlets}],className:"personal-edit-form",name:"catalog-manage-table-search",onFinish:x},c.a.createElement(m["a"].Item,{label:"\u59d3\u540d",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d!"}]},c.a.createElement(u["a"],{placeholder:"\u59d3\u540d"})),c.a.createElement(m["a"].Item,{label:"\u624b\u673a\u53f7",name:"phoneNumber",rules:[{required:!0,len:11,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7!"}]},c.a.createElement(u["a"],{placeholder:"\u624b\u673a\u53f7"})),c.a.createElement(m["a"].Item,{label:"\u6240\u5c5e\u7ecf\u9500\u5546",name:"name"},c.a.createElement(y,{isAddPersonal:!0,formProps:I,span:8,onCallBack:N,defaultLevel:a.level})),c.a.createElement("div",{className:"text-right"},c.a.createElement(s["a"],{type:"primary",htmlType:"submit",className:"search-button mr-8"},"\u6dfb\u52a0"),c.a.createElement(s["a"],{className:"search-button",onClick:function(){return O(!1)}},"\u53d6\u6d88")))))},R=function(e){var t=e.dispatch,a=e.getList,n=e.list,l=function(e){a(e)},r=[{title:"\u4eba\u5458ID",dataIndex:"id",key:"id"},{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u6240\u5c5e\u7ecf\u9500\u5546",dataIndex:"agentOutletsName",key:"agentOutletsName"},{title:"\u521b\u5efa\u65e5\u671f",dataIndex:"createTime",key:"createTime"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return e===J["h"].OPEN?c.a.createElement("span",{className:"font-green"},Object(z["b"])("personalStatus",e)):c.a.createElement(F,{type:"danger"},Object(z["b"])("personalStatus",e))}},{title:"\u505c\u7528/\u542f\u7528\u65e5\u671f",dataIndex:"updateTime",key:"updateTime"},{title:"\u64cd\u4f5c",dataIndex:"opera",key:"opera",fixed:"right",render:function(e,n){return c.a.createElement("div",{className:"inline"},c.a.createElement(Q,{item:n,dispatch:t,getList:a}),c.a.createElement(G,{id:n.id,status:n.status,dispatch:t,getList:a}))}}],o={onChange:l,showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(e,t){a(e,!1,{pageSize:t})}};return c.a.createElement("div",{className:Y.a.container},c.a.createElement("div",{id:"components-catalog-table-wrap"},c.a.createElement(k["a"],{className:"components-table-demo-nested",columns:r,dataSource:n,rowKey:"id",pagination:o})))},Z=Object(r["a"])((function(e){var t=e.personalList;return{list:t.list}}))(R),H=a("YtQY"),K=a.n(H),U=function(e){var t=e.dispatch,a=e.listStore,r=a.current,o=a.pageSize,s=a.filter,i=e.userInfo,u=e.match.params,m=void 0===u?{}:u,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;t({type:"personalList/getList",payload:{agentOutletsId:a.outlets||i.firstId,pageIndex:e,pageSize:o,name:a.name||"",phoneNumber:a.phone||"",city:a.city||"",region:a.region||"",level:a.level||""}})};return Object(l["useEffect"])((function(){m.index?d(r,{outlets:Number(m.index)}):d()}),[]),c.a.createElement(n["b"],{className:K.a.main},c.a.createElement(I,{getList:d,defaultOutlets:Number(m.index)},c.a.createElement("div",{className:"inline",style:{textAlign:"right"}},c.a.createElement(B,{onGetList:d})),c.a.createElement(Z,{getList:d})))};t["default"]=Object(r["a"])((function(e){var t=e.login,a=e.personalList;return{listStore:a,userInfo:t}}))(U)},YtQY:function(e,t,a){e.exports={main:"antd-pro-pages-personal-manage-index-main"}},"c1w/":function(e,t,a){e.exports={container:"antd-pro-pages-personal-manage-components-form-advanced-search-index-container"}},ko5n:function(e,t,a){e.exports={container:"antd-pro-pages-personal-manage-components-table-list-index-container"}},pxqB:function(e,t,a){},y3hc:function(e,t,a){e.exports={add_text:"antd-pro-pages-personal-manage-components-add-index-add_text"}}}]);