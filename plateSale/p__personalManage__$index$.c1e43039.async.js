(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"4BN6":function(e,t,a){"use strict";a.r(t);var n=a("Hx5s"),l=a("q1tI"),r=a.n(l),c=a("9kvl"),o=(a("14J3"),a("BMrR")),i=(a("+L6B"),a("2/Rp")),s=(a("jCWc"),a("kPKH")),u=(a("5NDa"),a("5rEg")),m=(a("y8nQ"),a("Vl3Y")),d=a("jrin"),p=a("k1fw"),f=a("tJVT"),E=(a("OaEy"),a("2fM7")),b=a("pxqB"),v=a.n(b),g=E["a"].Option,h=E["a"].OptGroup,y=function(e){var t=e.showAll,a=e.isAddPersonal,n=e.personalDealerState,c=e.dispatch,i=e.onCallBack,u=e.formProps,d=void 0===u?{}:u,p=e.span,b=void 0===p?8:p,y=Object(l["useState"])(""),O=Object(f["a"])(y,2),N=O[0],j=O[1],S=Object(l["useState"])(""),x=Object(f["a"])(S,2),k=x[0],I=x[1],L=Object(l["useState"])("6666666"),C=Object(f["a"])(L,2),w=C[0],P=C[1],T=d.city,q=void 0===T?{}:T,B=d.level,z=void 0===B?{}:B,A=d.dealer,D=void 0===A?{}:A,Y=function(){c({type:"personalDealer/getCityList"})},J=function(e,t){var a={};e&&(a.city=e.split("-")[0],a.region=e.split("-")[1]),c({type:"personalDealer/getOutletsList",payload:{city:a.city||"",region:a.region||"",level:t||k},onSuccess:function(){P("")}})},V=function(e,t){i(e,t),"city"===t&&(j(e),J(e)),"level"===t&&(I(e),J(N,e)),"outlets"===t&&P(e),"outlets"!==t&&i("","outlets")};return Object(l["useEffect"])((function(){Y()}),[]),Object(l["useEffect"])((function(){J()}),[]),r.a.createElement("div",{className:v.a.container},r.a.createElement(o["a"],{gutter:12},r.a.createElement(s["a"],{span:b},r.a.createElement(m["a"].Item,{name:"city",label:q.label||"",className:"mb-16"},r.a.createElement(E["a"],{placeholder:q.placeholder||"\u9009\u62e9\u5e02\u533a",onSelect:function(e){return V(e,"city")}},t&&r.a.createElement(g,{value:""},"\u5168\u90e8\u5e02\u533a"),n.city&&n.city.map((function(e){return r.a.createElement(h,{label:e.value},e.children.length>0&&e.children.map((function(t){return r.a.createElement(g,{value:"".concat(e.value,"-").concat(t.value)},t.value)})))}))))),r.a.createElement(s["a"],{span:b},r.a.createElement(m["a"].Item,{name:"level",label:z.label||"",className:"mb-16"},r.a.createElement(E["a"],{placeholder:z.placeholder||"\u9009\u62e9\u7ecf\u9500\u5546\u7ea7\u522b",onSelect:function(e){return V(e,"level")}},t&&r.a.createElement(g,{value:""},"\u5168\u90e8\u7ea7\u522b"),r.a.createElement(g,{value:"11"},"\u4e00\u7ea7\u7ecf\u9500\u5546"),r.a.createElement(g,{value:"12"},"\u6b21\u7ea7\u7ecf\u9500\u5546")))),r.a.createElement(s["a"],{span:b},r.a.createElement(m["a"].Item,{name:"outlets",value:w,label:D.label||"",className:"mb-16"},a?r.a.createElement(E["a"],{placeholder:D.placeholder||"\u9009\u62e9\u6240\u5c5e\u7ecf\u9500\u5546",onSelect:function(e){return V(e,"outlets")}},t&&r.a.createElement(g,{value:""},"\u5168\u90e8\u7f51\u70b9"),n.outlets&&n.outlets.map((function(e){return r.a.createElement(g,{value:"".concat(e.id,"-").concat(e.name)},e.name)}))):r.a.createElement(E["a"],{placeholder:D.placeholder||"\u9009\u62e9\u6240\u5c5e\u7ecf\u9500\u5546",onSelect:function(e){return V(e,"outlets")}},t&&r.a.createElement(g,{value:""},"\u5168\u90e8\u7f51\u70b9"),n.outlets&&n.outlets.map((function(e){return r.a.createElement(g,{value:e.id},e.name)})))))))},O=Object(c["a"])((function(e){var t=e.personalDealer;return{personalDealerState:t}}))(y),N=a("c1w/"),j=a.n(N),S=function(e){var t=e.btnLoading,a=e.getList,n=e.children,c=e.defaultOutlets,E=Object(l["useState"])({city:null,level:"",outlets:c||""}),b=Object(f["a"])(E,2),v=b[0],g=b[1],h=function(e){var t={city:"",region:"",level:e.level,agentOutletsId:v.outlets};e.city&&(t.city=e.city.split("-")[0],t.region=e.city.split("-")[1]),console.log(Object(p["a"])({},e,{},t)),a(1,Object(p["a"])({},e,{},t))},y=function(e,t){g(Object(p["a"])({},v,Object(d["a"])({},t,e)))},N={city:{placeholder:"\u5168\u90e8\u5e02\u533a"},level:{placeholder:"\u5168\u90e8\u7ea7\u522b"},dealer:{placeholder:"\u5168\u90e8\u7f51\u70b9"}};return r.a.createElement("div",{className:j.a.container},r.a.createElement("div",{id:"catalog-list-search-form"},r.a.createElement(m["a"],{fields:[{name:["outlets"],value:v.outlets}],className:"ant-advanced-search-form",name:"catalog-manage-table-search",onFinish:h},r.a.createElement("div",{gutter:24},r.a.createElement(m["a"].Item,{label:"\u6240\u5c5e\u7ecf\u9500\u5546"},r.a.createElement(O,{showAll:!0,formProps:N,span:6,onCallBack:y}))),r.a.createElement(o["a"],{gutter:24},r.a.createElement(s["a"],{span:8},r.a.createElement(m["a"].Item,{label:"\u59d3\u540d",name:"name"},r.a.createElement(u["a"],{placeholder:"\u59d3\u540d"}))),r.a.createElement(s["a"],{span:8},r.a.createElement(m["a"].Item,{label:"\u624b\u673a\u53f7",name:"phone"},r.a.createElement(u["a"],{placeholder:"\u624b\u673a\u53f7"}))),r.a.createElement(s["a"],{span:8},r.a.createElement(i["a"],{loading:t,type:"primary",htmlType:"submit",className:"search-button"},"\u67e5\u8be2")))),r.a.createElement("div",{className:"search-result-list"},n)))},x=Object(c["a"])((function(e){var t=e.loading;return{btnLoading:t.effects["catalogList/getList"]}}))(S),k=(a("2qtc"),a("kLXV")),I=(a("g9YV"),a("wCAj")),L=a("oBTY"),C=(a("miYZ"),a("tsqr")),w=a("xvlK"),P=a("y3hc"),T=a.n(P),q=function(e){var t=e.dispatch,a=e.onGetList,n=e.addLoading,c=Object(l["useState"])(!1),E=Object(f["a"])(c,2),b=E[0],v=E[1],g=Object(l["useState"])(!1),h=Object(f["a"])(g,2),y=h[0],N=h[1],j=Object(l["useState"])({city:null,level:"",outlets:""}),S=Object(f["a"])(j,2),x=S[0],P=S[1],q=Object(l["useState"])([]),B=Object(f["a"])(q,2),z=B[0],A=B[1],D=function(e){v(e)},Y=function(e,t){P(Object(p["a"])({},x,Object(d["a"])({},t,e)))},J=function(e){N(e)},V=function(e){if(e.city&&e.level&&e.outlets)return!0;for(var t={city:"\u8bf7\u9009\u62e9\u5e02\u533a\uff01",level:"\u8bf7\u9009\u62e9\u7ecf\u9500\u5546\u7ea7\u522b\uff01",outlets:"\u8bf7\u9009\u62e9\u6240\u5c5e\u7ecf\u9500\u5546\uff01"},a=Object.keys(e),n=0;n<a.length;n++)if(!e[a[n]])return C["a"].error(t[a[n]]),!1;return!1},F=function(e){if(!V(e))return!1;J(!1),A([].concat(Object(L["a"])(z),[Object(p["a"])({},e,{agentOutletsId:e.outlets.split("-")[0],dealer:e.outlets.split("-")[1],id:(new Date).getTime(),status:"01"})]))},K=function(){if(0!==z.length){var e=[];z.map((function(t){e.push({agentOutletsId:t.agentOutletsId,agentOutletsName:t.dealer,name:t.name,phoneNumber:t.phone,level:Number(t.level)})})),t({type:"personalList/add",payload:{list:e},onSuccess:function(){C["a"].success("\u6dfb\u52a0\u6210\u529f"),a(),D(!1),A([])}})}else C["a"].error("\u8bf7\u5148\u6dfb\u52a0\u4eba\u5458")},Q=function(e){A(z.filter((function(t){return t.id!==e})))},R=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u624b\u673a",dataIndex:"phone",key:"phone"},{title:"\u6240\u5c5e\u7ecf\u9500\u5546",dataIndex:"dealer",key:"name"},{title:"\u64cd\u4f5c",dataIndex:"id",key:"id",render:function(e){return r.a.createElement("div",{className:"pointer font-blue",onClick:function(){return Q(e)},key:e.id},"\u5220\u9664")}}],G={columns:R,dataSource:z,rowKey:"id",pagination:!1};return r.a.createElement("div",{className:T.a.container},r.a.createElement("div",{id:"add-personal-container"},r.a.createElement("div",{className:"add-btn-wrap"},r.a.createElement(i["a"],{type:"primary",className:"btn-green mb-24",icon:r.a.createElement(w["a"],null),onClick:function(){return D(!0)}},"\u65b0\u589e\u4eba\u5458")),r.a.createElement(k["a"],{className:"add-personal-modal",forceRender:!0,destroyOnClose:!0,visible:b,title:"\u65b0\u589e\u4eba\u5458",onCancel:function(){return D(!1)},onOk:function(){return K()}},r.a.createElement(I["a"],G),y?r.a.createElement(m["a"],{fields:[{name:["outlets"],value:x.outlets}],className:"mt-16",name:"add-personal-form",onFinish:F},r.a.createElement(o["a"],{gutter:12},r.a.createElement(s["a"],{span:8},r.a.createElement(m["a"].Item,{name:"name",className:"mb-16",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d!"}]},r.a.createElement(u["a"],{placeholder:"\u59d3\u540d"}))),r.a.createElement(s["a"],{span:8},r.a.createElement(m["a"].Item,{name:"phone",className:"mb-16",rules:[{required:!0,len:11,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7!"}]},r.a.createElement(u["a"],{placeholder:"\u624b\u673a\u53f7"})))),r.a.createElement("div",null,r.a.createElement(O,{isAddPersonal:!0,onCallBack:Y})),r.a.createElement("div",{className:"text-right"},r.a.createElement(i["a"],{loading:n,type:"primary",htmlType:"submit",className:"search-button mr-8"},"\u6dfb\u52a0"),r.a.createElement(i["a"],{className:"search-button",onClick:function(){return J(!1)}},"\u53d6\u6d88"))):r.a.createElement("p",{className:T.a.add_text,onClick:function(){return J(!0)}},r.a.createElement(w["a"],null),"\xa0\xa0\u6dfb\u52a0"))))},B=Object(c["a"])((function(e){var t=e.loading;return{addLoading:t.effects["personalList/add"]}}))(q),z=(a("P2fV"),a("NJEC")),A=(a("tU7J"),a("wFql")),D=a("LZAR"),Y=a("LxC5"),J=a("ko5n"),V=a.n(J),F=A["a"].Text,K=function(e){var t,a=e.dispatch,n=e.id,l=e.status,c=void 0===l?Y["h"].OPEN:l,o=e.getList,i=function(){var e="";c===Y["h"].OPEN&&(e=Y["h"].CLOSE),c===Y["h"].CLOSE&&(e=Y["h"].OPEN),a({type:"personalStatus/update",payload:{status:e,id:n},onSuccess:function(){o()}})};t=c===Y["h"].OPEN?r.a.createElement("div",null,"\u505c\u7528\u4f1a\u5bfc\u81f4\u8be5\u4e1a\u52a1\u4eba\u5458\u65e0\u6cd5\u518d\u767b",r.a.createElement("br",null),"\u5f55\u67e5\u9a8c\u5c0f\u7a0b\u5e8f\u529e\u7406\u4e1a\u52a1,\u786e\u8ba4\u8981\u505c\u7528\u5417?"):r.a.createElement("p",null,"\u542f\u7528\u540e\u8be5\u4e1a\u52a1\u4eba\u5458\u5c06\u53ef\u4ee5\u4f7f\u7528\u8d26",r.a.createElement("br",null),"\u53f7\u767b\u5f55\u67e5\u9a8c\u5c0f\u7a0b\u5e8f\u5e76\u83b7\u5f97\u76f8\u5e94\u7684\u4e1a\u52a1\u529e",r.a.createElement("br",null),"\u7406\u6743\u9650\uff0c\u786e\u8ba4\u8981\u542f\u7528\u5417\uff1f");var s=c===Y["h"].OPEN?"\u505c\u7528":"\u542f\u7528";return r.a.createElement("div",null,r.a.createElement(z["a"],{okText:"\u662f",cancelText:"\u5426",title:t,onConfirm:i},r.a.createElement("a",null,s)))};console.log();var Q=function(e){var t=e.dispatch,a=e.item,n=e.getList,c=Object(l["useState"])({city:a.region,level:a.level,outlets:"".concat(a.agentOutletsId,"-").concat(a.agentOutletsName)}),o=Object(f["a"])(c,2),s=o[0],E=o[1],b=Object(l["useState"])(!1),v=Object(f["a"])(b,2),g=v[0],h=v[1],y=function(e){h(e)},N=function(e,t){E(Object(p["a"])({},s,Object(d["a"])({},t,e)))},j=function(){if(s.city&&s.level&&s.outlets)return!0;for(var e={city:"\u8bf7\u9009\u62e9\u5e02\u533a\uff01",level:"\u8bf7\u9009\u62e9\u7ecf\u9500\u5546\u7ea7\u522b\uff01",outlets:"\u8bf7\u9009\u62e9\u6240\u5c5e\u7ecf\u9500\u5546\uff01"},t=Object.keys(s),a=0;a<t.length;a++)if(!s[t[a]])return C["a"].error(e[t[a]]),!1;return!1},S=function(e){if(!j())return!1;var l={id:a.id,agentOutletsId:e.outlets.split("-")[0],agentOutletsName:e.outlets.split("-")[1],name:e.name,phoneNumber:e.phoneNumber,level:Number(e.level)};t({type:"personalStatus/edit",payload:l,onSuccess:function(){y(!1),C["a"].success("\u7f16\u8f91\u6210\u529f"),n()}})},x={city:{placeholder:"\u5168\u90e8\u5e02\u533a"},level:{placeholder:"\u5168\u90e8\u7ea7\u522b"},dealer:{placeholder:"\u5168\u90e8\u7f51\u70b9"}};return r.a.createElement("div",null,r.a.createElement("a",{onClick:function(){return y(!0)}},"\u7f16\u8f91"),r.a.createElement(k["a"],{title:"\u7f16\u8f91\u4e1a\u52a1\u4eba\u5458",destroyOnClose:!0,visible:g,footer:null,onCancel:function(){return y(!1)}},r.a.createElement(m["a"],{initialValues:{name:a.name,phoneNumber:a.phoneNumber,city:a.region,level:String(a.level)},fields:[{name:["outlets"],value:s.outlets}],className:"personal-edit-form",name:"catalog-manage-table-search",onFinish:S},r.a.createElement(m["a"].Item,{label:"\u59d3\u540d",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d!"}]},r.a.createElement(u["a"],{placeholder:"\u59d3\u540d"})),r.a.createElement(m["a"].Item,{label:"\u624b\u673a\u53f7",name:"phoneNumber",rules:[{required:!0,len:11,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7!"}]},r.a.createElement(u["a"],{placeholder:"\u624b\u673a\u53f7"})),r.a.createElement(m["a"].Item,{label:"\u6240\u5c5e\u7ecf\u9500\u5546",name:"name"},r.a.createElement(O,{isAddPersonal:!0,formProps:x,span:8,onCallBack:N,defaultLevel:a.level})),r.a.createElement("div",{className:"text-right"},r.a.createElement(i["a"],{type:"primary",htmlType:"submit",className:"search-button mr-8"},"\u4fdd\u5b58"),r.a.createElement(i["a"],{className:"search-button",onClick:function(){return y(!1)}},"\u53d6\u6d88")))))},R=function(e){var t=e.dispatch,a=e.getList,n=e.personalList,c=Object(l["useState"])([n.pageSize]),o=Object(f["a"])(c,2),i=o[0],s=o[1],u=function(e){a(e)},m=[{title:"\u4eba\u5458ID",dataIndex:"id",key:"id"},{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u6240\u5c5e\u7ecf\u9500\u5546",dataIndex:"agentOutletsName",key:"agentOutletsName"},{title:"\u521b\u5efa\u65e5\u671f",dataIndex:"createTime",key:"createTime"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return e===Y["h"].OPEN?r.a.createElement("span",{className:"font-green"},Object(D["b"])("personalStatus",e)):r.a.createElement(F,{type:"danger"},Object(D["b"])("personalStatus",e))}},{title:"\u505c\u7528/\u542f\u7528\u65e5\u671f",dataIndex:"updateTime",key:"updateTime"},{title:"\u64cd\u4f5c",dataIndex:"opera",key:"opera",fixed:"right",render:function(e,n){return r.a.createElement("div",{className:"inline"},r.a.createElement(Q,{item:n,dispatch:t,getList:a}),r.a.createElement(K,{id:n.id,status:n.status,dispatch:t,getList:a}))}}],d={total:n.total,current:n.current,onChange:u,showTotal:function(e){return"\u5171".concat(e,"\u6761")},showSizeChanger:!0,showQuickJumper:!0,pageSize:i,onShowSizeChange:function(e,t){s(t),a(e,{pageSize:t})}};return r.a.createElement("div",{className:V.a.container},r.a.createElement("div",{id:"components-catalog-table-wrap"},r.a.createElement(I["a"],{className:"components-table-demo-nested",columns:m,dataSource:n.list,rowKey:"id",pagination:d})))},G=Object(c["a"])((function(e){var t=e.personalList;return{personalList:t}}))(R),_=a("YtQY"),H=a.n(_),M=function(e){var t=e.dispatch,a=e.listStore,c=a.current,o=a.pageSize,i=a.filter,s=e.userInfo,u=e.match.params,m=void 0===u?{}:u,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;t({type:"personalList/getList",payload:{agentOutletsId:a.outlets||s.firstId,pageIndex:e,pageSize:a.pageSize||o,name:a.name||"",phoneNumber:a.phone||"",city:a.city||"",region:a.region||"",level:a.level||""}})};return Object(l["useEffect"])((function(){m.index?d(c,{outlets:Number(m.index)}):d()}),[]),r.a.createElement(n["b"],{className:H.a.main},r.a.createElement(x,{getList:d,defaultOutlets:Number(m.index)},r.a.createElement("div",{className:"inline",style:{textAlign:"right"}},r.a.createElement(B,{onGetList:d})),r.a.createElement(G,{getList:d})))};t["default"]=Object(c["a"])((function(e){var t=e.login,a=e.personalList;return{listStore:a,userInfo:t}}))(M)},YtQY:function(e,t,a){e.exports={main:"antd-pro-pages-personal-manage-index-main"}},"c1w/":function(e,t,a){e.exports={container:"antd-pro-pages-personal-manage-components-form-advanced-search-index-container"}},ko5n:function(e,t,a){e.exports={container:"antd-pro-pages-personal-manage-components-table-list-index-container"}},pxqB:function(e,t,a){},y3hc:function(e,t,a){e.exports={add_text:"antd-pro-pages-personal-manage-components-add-index-add_text"}}}]);