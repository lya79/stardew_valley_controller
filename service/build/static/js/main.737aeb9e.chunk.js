(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,t,n){"use strict";n.r(t);var a,o=n(0),l=n.n(o),r=n(31),i=n.n(r),s=(n(80),n(4)),c=n(5),h=n(8),u=n(6),d=n(22),v=n(9),p=n(7),E=n(38),m=n.n(E),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleEvent=function(e,t){if(void 0!==t.direction){if(console.log("lastKey:"+a),t.direction.angle===a)return;"up"===a?n.props.handleKeyEvent("2:w"):"down"===a?n.props.handleKeyEvent("2:s"):"left"===a?n.props.handleKeyEvent("2:a"):"right"===a&&n.props.handleKeyEvent("2:d"),"up"===(a=t.direction.angle)?n.props.handleKeyEvent("1:w"):"down"===a?n.props.handleKeyEvent("1:s"):"left"===a?n.props.handleKeyEvent("1:a"):"right"===a&&n.props.handleKeyEvent("1:d")}else a=void 0,n.props.handleKeyEvent("2:w"),n.props.handleKeyEvent("2:s"),n.props.handleKeyEvent("2:a"),n.props.handleKeyEvent("2:d"),console.log("release")},n}return Object(v.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:e.fab},l.a.createElement(m.a,{options:{mode:"static",position:{top:"50%",left:"50%"},color:"blue"},style:{width:100,height:100,position:"relative"},onStart:this.handleEvent,onEnd:this.handleEvent,onMove:this.handleEvent,onDir:this.handleEvent,onPlain:this.handleEvent,onShown:this.handleEvent,onHidden:this.handleEvent,onPressure:this.handleEvent}))}}]),t}(l.a.Component),y=Object(p.withStyles)(function(e){return{fab:{position:"fixed",bottom:16,left:16}}})(f),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleEvent=function(e,t){n.props.handleKeyEvent("2:mouse_xy_release"),void 0!==t.direction&&(t.angle.degree>=0&&t.angle.degree<=22.5?n.props.handleKeyEvent("1:mouse_x_right"):t.angle.degree>=337.5?n.props.handleKeyEvent("1:mouse_x_right"):t.angle.degree>=22.5&&t.angle.degree<=67.5?(n.props.handleKeyEvent("1:mouse_x_right"),n.props.handleKeyEvent("1:mouse_y_up")):t.angle.degree>=67.5&&t.angle.degree<=112.5?n.props.handleKeyEvent("1:mouse_y_up"):t.angle.degree>=112.5&&t.angle.degree<=157.5?(n.props.handleKeyEvent("1:mouse_x_left"),n.props.handleKeyEvent("1:mouse_y_up")):t.angle.degree>=157.5&&t.angle.degree<=202.5?n.props.handleKeyEvent("1:mouse_x_left"):t.angle.degree>=202.5&&t.angle.degree<=247.5?(n.props.handleKeyEvent("1:mouse_x_left"),n.props.handleKeyEvent("1:mouse_y_down")):t.angle.degree>=247.5&&t.angle.degree<=292.5?n.props.handleKeyEvent("1:mouse_y_down"):t.angle.degree>=292.5&&t.angle.degree<=337.5?(n.props.handleKeyEvent("1:mouse_x_right"),n.props.handleKeyEvent("1:mouse_y_down")):console.log("degree: "+t.angle.degree))},n}return Object(v.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:e.fab},l.a.createElement(m.a,{options:{mode:"static",position:{top:"50%",left:"50%"},color:"blue"},style:{width:100,height:100,position:"relative"},onStart:this.handleEvent,onEnd:this.handleEvent,onMove:this.handleEvent,onDir:this.handleEvent,onPlain:this.handleEvent,onShown:this.handleEvent,onHidden:this.handleEvent,onPressure:this.handleEvent}))}}]),t}(l.a.Component),g=Object(p.withStyles)(function(e){return{fab:{position:"fixed",bottom:132,left:16}}})(b),O=n(16),j=n.n(O),K=n(14),w=n.n(K),k=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e,n))).handleEvent=function(e,t){a.props.handleKeyEvent("0:e")},a}return Object(v.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement(j.a,{onClick:this.handleEvent,color:"primary","aria-label":"Add",className:e.fab},l.a.createElement(w.a,{color:"inherit",variant:"caption",gutterBottom:!0},"E")))}}]),t}(l.a.Component),_=Object(p.withStyles)(function(e){return{fab:{position:"fixed",bottom:88,right:16}}})(k),S=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e,n))).handleEvent=function(e,t){a.props.handleKeyEvent("0:f")},a.state={},a}return Object(v.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement(j.a,{onClick:this.handleEvent,color:"primary","aria-label":"Add",className:e.fab},l.a.createElement(w.a,{color:"inherit",variant:"caption",gutterBottom:!0},"F")))}}]),t}(l.a.Component),C=Object(p.withStyles)(function(e){return{fab:{position:"fixed",bottom:88,right:88}}})(S),N=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e,n))).handleEvent=function(e,t){a.props.handleKeyEvent("0:m")},a}return Object(v.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement(j.a,{onClick:this.handleEvent,color:"primary","aria-label":"Add",className:e.fab},l.a.createElement(w.a,{color:"inherit",variant:"caption",gutterBottom:!0},"M")))}}]),t}(l.a.Component),P=Object(p.withStyles)(function(e){return{fab:{position:"fixed",bottom:88,right:160}}})(N),x=n(15),B=n.n(x),I=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e,n))).handleEvent1=function(e,t){a.props.handleKeyEvent("0:1")},a.handleEvent2=function(e,t){a.props.handleKeyEvent("0:2")},a.handleEvent3=function(e,t){a.props.handleKeyEvent("0:3")},a.handleEvent4=function(e,t){a.props.handleKeyEvent("0:4")},a.handleEvent5=function(e,t){a.props.handleKeyEvent("0:5")},a.handleEvent6=function(e,t){a.props.handleKeyEvent("0:6")},a.handleEvent7=function(e,t){a.props.handleKeyEvent("0:7")},a.handleEvent8=function(e,t){a.props.handleKeyEvent("0:8")},a.handleEvent9=function(e,t){a.props.handleKeyEvent("0:9")},a.handleEvent0=function(e,t){a.props.handleKeyEvent("0:0")},a.handleEventDash=function(e,t){a.props.handleKeyEvent("0:-")},a.handleEventEqual=function(e,t){a.props.handleKeyEvent("0:=")},a}return Object(v.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:e.fab},l.a.createElement("div",null,l.a.createElement(B.a,{onClick:this.handleEvent1,variant:"outlined",color:"primary",className:e.button},"1"),l.a.createElement(B.a,{onClick:this.handleEvent2,variant:"outlined",color:"primary",className:e.button},"2"),l.a.createElement(B.a,{onClick:this.handleEvent3,variant:"outlined",color:"primary",className:e.button},"3"),l.a.createElement(B.a,{onClick:this.handleEvent4,variant:"outlined",color:"primary",className:e.button},"4")),l.a.createElement("div",null,l.a.createElement(B.a,{onClick:this.handleEvent5,variant:"outlined",color:"primary",className:e.button},"5"),l.a.createElement(B.a,{onClick:this.handleEvent6,variant:"outlined",color:"primary",className:e.button},"6"),l.a.createElement(B.a,{onClick:this.handleEvent7,variant:"outlined",color:"primary",className:e.button},"7"),l.a.createElement(B.a,{onClick:this.handleEvent8,variant:"outlined",color:"primary",className:e.button},"8")),l.a.createElement("div",null,l.a.createElement(B.a,{onClick:this.handleEvent9,value:"0:num9",variant:"outlined",color:"primary",className:e.button},"9"),l.a.createElement(B.a,{onClick:this.handleEvent0,value:"0:num0",variant:"outlined",color:"primary",className:e.button},"0"),l.a.createElement(B.a,{onClick:this.handleEventDash,value:"0:-",variant:"outlined",color:"primary",className:e.button},"-"),l.a.createElement(B.a,{onClick:this.handleEventEqual,value:"0:=",variant:"outlined",color:"primary",className:e.button},"=")))}}]),t}(l.a.Component),R=Object(p.withStyles)(function(e){return{fab:{position:"fixed",bottom:25,left:132},button:{}}})(I),Q=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e,n))).handleButtonPress=a.handleButtonPress.bind(Object(d.a)(a)),a.handleButtonRelease=a.handleButtonRelease.bind(Object(d.a)(a)),a}return Object(v.a)(t,e),Object(c.a)(t,[{key:"handleButtonPress",value:function(){console.log("press"),this.props.handleKeyEvent("1:mouse_left")}},{key:"handleButtonRelease",value:function(){console.log("release"),this.props.handleKeyEvent("2:mouse_left")}},{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement(j.a,{onTouchStart:this.handleButtonPress,onTouchEnd:this.handleButtonRelease,onMouseDown:this.handleButtonPress,onMouseUp:this.handleButtonRelease,onMouseLeave:this.handleButtonRelease,color:"primary","aria-label":"Add",className:e.fab},l.a.createElement(w.a,{color:"inherit",variant:"caption",gutterBottom:!0},"LEFT MOUSE")))}}]),t}(l.a.Component),M=Object(p.withStyles)(function(e){return{fab:{position:"fixed",bottom:16,right:88}}})(Q),U=function(e){function t(e,n){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e,n))).handleEvent=function(e,t){a.props.handleKeyEvent("0:mouse_right")},a}return Object(v.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement(j.a,{onClick:this.handleEvent,color:"primary","aria-label":"Add",className:e.fab},l.a.createElement(w.a,{color:"inherit",variant:"caption",gutterBottom:!0},"RIGHT MOUSE")))}}]),t}(l.a.Component),L=Object(p.withStyles)(function(e){return{fab:{position:"fixed",bottom:16,right:16}}})(U),W=n(32),A=n.n(W);function T(e){var t="http://"+window.location.hostname+":8080/query/ip";console.log("url2222:"+t),fetch(t,{method:"GET"}).then(function(e){if(e.status>=200&&e.status<300)return e.json();var t=new Error(e.statusText);throw t.response=e,t}).then(function(t){console.log("request successful",t);var n=JSON.stringify(t);console.log("dataStr:"+n);var a=JSON.parse(n);console.log("obj IP:"+a.IP),e(a.IP)}).catch(function(t){console.log("request failed status",t),e("")})}var D,q,J=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).handleQueryIP=function(){console.log("start QueryIP");var t=Object(d.a)(e);T(function(e){if(void 0===e||e.length<=0)return console.log("fail QueryIP"),void t.setState({webURL:""});console.log("success QueryIP:"+e);var n="http://"+e+":8080/";t.setState({webURL:n})})},e.state={webURL:""},e}return Object(v.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.handleQueryIP()}},{key:"render",value:function(){var e=this.props.classes,t=n(0),a=n(164);return console.log("web url:"+this.state.webURL),t.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},t.createElement(A.a,null,t.createElement(A.a,{className:e.title},t.createElement(w.a,{variant:"h5",gutterBottom:!0},"\u624b\u6a5f\u6383\u63cf\u6b64\u689d\u78bc\u53ef\u76f4\u63a5\u958b\u555f\u904a\u6232\u624b\u628a")),t.createElement(A.a,{className:e.title},t.createElement(w.a,{variant:"h5",gutterBottom:!0},this.state.webURL)),t.createElement(A.a,{className:e.title},t.createElement(a,{value:this.state.webURL}))))}}]),t}(l.a.Component),H=Object(p.withStyles)(function(e){return{fab:{marginLeft:"auto",marginRight:"auto"},title:{textAlign:"center"}}})(J),F=n(47),G=n.n(F),Y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).handleQueryIP=function(){console.log("start QueryIP");var t=Object(d.a)(e);T(function(e){if(void 0===e||e.length<=0)console.log("fail QueryIP");else if(console.log("success QueryIP:"+e),void 0===window.WebSocket)alert("Your browser does not support WebSockets.");else{console.log("initWS");var n=e;console.log("WebSocket:"+n);var a=new WebSocket("ws://"+n+":3006/ws");a.onopen=function(){q=!0,console.log("Socket is open.")},a.onmessage=function(e){console.log("Received data.",e.data)},a.onclose=function(){q=!1,console.log("Socket closed."),setTimeout(function(){t.handleQueryIP()},3e3)},D=a}})},e.handleKeyEvent=function(e){console.log("send event:"+e),q?D.send(e):console.log("not connect")},q=!1,e}return Object(v.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.handleQueryIP()}},{key:"render",value:function(){this.props.classes;return l.a.createElement("div",null,l.a.createElement(G.a,{mdUp:!0},l.a.createElement(y,{handleKeyEvent:this.handleKeyEvent}),l.a.createElement(g,{handleKeyEvent:this.handleKeyEvent}),l.a.createElement(P,{handleKeyEvent:this.handleKeyEvent}),l.a.createElement(C,{handleKeyEvent:this.handleKeyEvent}),l.a.createElement(_,{handleKeyEvent:this.handleKeyEvent}),l.a.createElement(L,{handleKeyEvent:this.handleKeyEvent}),l.a.createElement(M,{handleKeyEvent:this.handleKeyEvent}),l.a.createElement(R,{handleKeyEvent:this.handleKeyEvent})),l.a.createElement(G.a,{smDown:!0},l.a.createElement(H,null)))}}]),t}(l.a.Component),$=Object(p.withStyles)(function(e){return{}})(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,n){e.exports=n(179)},80:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.737aeb9e.chunk.js.map