(this.webpackJsonpprojet=this.webpackJsonpprojet||[]).push([[0],{21:function(e,o,t){e.exports=t(32)},26:function(e,o,t){},32:function(e,o,t){"use strict";t.r(o);var n=t(0),a=t.n(n),c=t(7),r=t.n(c),s=(t(26),t(16)),i=t(8),l=t(19),u=t(17),p=t(20),h=t(34),m=t(36),g=t(35),d=t(37),w=t(4),k=t.n(w),v=t(13),f=t.n(v),b=[49.11995,6.163673],j={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};function y(e){var o=e.coords;console.log("Votre position actuelle est :"),console.log("Latitude : ".concat(o.latitude)),console.log("Longitude : ".concat(o.longitude)),console.log("La pr\xe9cision est de ".concat(o.accuracy," m\xe8tres.")),b=[o.latitude,o.longitude]}function A(e){console.warn("ERREUR (".concat(e.code,"): ").concat(e.message))}new k.a.Icon({iconUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bruce_Lee_1973.jpg/290px-Bruce_Lee_1973.jpg",iconRetinaUrl:"../assets/pointerIcon.svg",iconAnchor:[5,55],popupAnchor:[10,-44],iconSize:[25,55],shadowUrl:"../assets/marker-shadow.png",shadowSize:[68,95],shadowAnchor:[20,92]}),new k.a.Icon({iconUrl:"https://images-na.ssl-images-amazon.com/images/I/61Vh5DJkCKL._AC_SL1000_.jpg",iconRetinaUrl:"../assets/suitcaseIcon.svg",iconAnchor:[20,40],popupAnchor:[0,-35],iconSize:[40,40],shadowUrl:"../assets/marker-shadow.png",shadowSize:[29,40],shadowAnchor:[7,40]});var L=function(e){function o(e){var t;return Object(s.a)(this,o),(t=Object(l.a)(this,Object(u.a)(o).call(this))).update=function(){f.a.getCurrentPosition(y,A,j),t.setState({marker:b})},t.state={marker:b,draggable:!0},t}return Object(p.a)(o,e),Object(i.a)(o,[{key:"componentDidMount",value:function(){f.a.getCurrentPosition(y,A,j),this.setState({marker:b})}},{key:"render",value:function(){console.log("La pr\xe9cision est de ".concat(b," m\xe8tres."));var e=a.a.createElement(h.a,{position:this.state.marker,onLoad:setInterval(this.update,2e3)},a.a.createElement(m.a,null,"You are here"));return a.a.createElement(g.a,{center:b,zoom:17},a.a.createElement(d.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e)}}]),o}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.955e35ac.chunk.js.map