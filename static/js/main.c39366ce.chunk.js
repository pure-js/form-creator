(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){e.exports=t(280)},109:function(e,a,t){},111:function(e,a,t){},280:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(16),c=t.n(r),o=(t(109),t(39)),i=t(40),u=t(42),m=t(41),s=t(43),h=t(20),d=(t(111),t(103)),E=t.n(d),b=t(98),p=t(29),f=t.n(p),v=t(62),g=t.n(v),k=t(21),C=t.n(k),O=t(101),j=t.n(O),w=t(102),y=t.n(w),T=t(45),x=t.n(T),I=t(100),F=t.n(I),N=t(44),A=t.n(N),P=t(61),S=t.n(P),B=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(u.a)(this,Object(m.a)(a).call(this))).state={fieldType:"input",fielddName:""},e.handleInputChange=e.handleInputChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(s.a)(a,e),Object(i.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target;this.setState(Object(b.a)({},a.name,a.value))}},{key:"render",value:function(){var e;switch(this.state.fieldType){case"input":e=l.a.createElement(f.a,null);break;case"textarea":e=l.a.createElement(f.a,{multiline:!0});break;case"checkbox":e=l.a.createElement("input",{type:"checkbox"});break;case"radio":e=l.a.createElement(S.a,{component:"fieldset"},l.a.createElement(F.a,null,l.a.createElement(A.a,{value:"female",control:l.a.createElement(x.a,null),label:"Female"}),l.a.createElement(A.a,{value:"male",control:l.a.createElement(x.a,null),label:"Male"}),l.a.createElement(A.a,{value:"other",control:l.a.createElement(x.a,null),label:"Other"})));break;case"select":e=l.a.createElement("select",null);break;case"file":e=l.a.createElement("input",{type:"file"});break;default:e=l.a.createElement(f.a,null)}return l.a.createElement("div",null,l.a.createElement("section",null,l.a.createElement(g.a,{onChange:this.handleInputChange,value:this.state.fieldType,name:"fieldType"},l.a.createElement(C.a,{value:"input"},"Input"),l.a.createElement(C.a,{value:"textarea"},"Textarea"),l.a.createElement(C.a,{value:"checkbox"},"Checkbox"),l.a.createElement(C.a,{value:"radio"},"Radio"),l.a.createElement(C.a,{value:"select"},"Select"),l.a.createElement(C.a,{value:"file"},"File")),l.a.createElement(f.a,{onChange:this.handleInputChange,placeholder:"filed name",name:"fielddName"}),l.a.createElement(j.a,{color:"primary","aria-label":"Add"},l.a.createElement(y.a,null))),l.a.createElement("form",null,l.a.createElement("h1",null,"Preview"),l.a.createElement("label",null,this.state.fielddName,e)))}}]),a}(n.PureComponent),J=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(u.a)(this,Object(m.a)(a).call(this))).state={create:!1},e.goToCreatingForms=e.goToCreatingForms.bind(Object(h.a)(Object(h.a)(e))),e}return Object(s.a)(a,e),Object(i.a)(a,[{key:"goToCreatingForms",value:function(){this.setState({create:!0})}},{key:"render",value:function(){var e;return this.state.create&&(e=l.a.createElement(B,null)),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(E.a,{variant:"contained",onClick:this.goToCreatingForms,color:"primary"},"Create new form"),e))}}]),a}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[104,2,1]]]);
//# sourceMappingURL=main.c39366ce.chunk.js.map