(this.webpackJsonpreactbuttonexample=this.webpackJsonpreactbuttonexample||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(26),o=a.n(m),l=a(17),c=(a(77),a(78),a(79),a(80),a(117)),s=a(27),i=(a(23),a(11)),u=a(50),d=function(e){return console.log(e),r.a.createElement(c.a,{bg:"dark",variant:"dark"},r.a.createElement(i.a,{sm:11},r.a.createElement(u.a,{type:"text",placeholder:"Recherche",className:"mr-sm-2",expand:"md",size:"sm"})),r.a.createElement(i.a,{sm:.5},r.a.createElement(s.a,{className:"btn",variant:"outline-light"},r.a.createElement("i",{className:"fa fa-search"}))),r.a.createElement(i.a,{sm:.5},r.a.createElement(l.b,{to:"/Menu"},r.a.createElement(s.a,{className:"btn",variant:"light"},r.a.createElement("i",{className:"fa fa-bars"})))))},p=a(4),f=a(10),h=a(7),g=a(6),E=a(8),b=a(30),v=a(21),k=a(14),N=(a(87),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Menu"},r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement(l.b,{to:"/Proximite",className:"btn_menu"},r.a.createElement(s.a,{className:"btn_menu",variant:"info",size:"lg",block:!0},"Monuments \xe0 proximit\xe9",r.a.createElement("i",{className:"fas fa-route fa-2x"})))),r.a.createElement(k.a,null,r.a.createElement(l.b,{to:"/Incontournables",className:"btn_menu"},r.a.createElement(s.a,{className:"btn_menu",variant:"info",size:"lg",block:!0},"Les incontournables",r.a.createElement("i",{className:"fas fa-crown fa-2x"})))),r.a.createElement(k.a,null,r.a.createElement(l.b,{to:"/Parcours",className:"btn_menu"},r.a.createElement(s.a,{className:"btn_menu",variant:"info",size:"lg",block:!0,inactive:!0},"Parcours de visite",r.a.createElement("i",{className:"fas fa-map-marked-alt fa-2x"})))),r.a.createElement(k.a,{className:"ret_row"},r.a.createElement(l.b,{to:"/Home"},r.a.createElement(s.a,{className:"btn_ret",variant:"danger",size:"lg"},"Retour \xe0 la carte")))))}}]),t}(n.Component)),j=a(19),w=(Object(j.a)(),a(88),a(120)),x=a(122),_=a(121),O=a(123),y=a(13),z=a.n(y),I=a(37),M=a.n(I),S=a(28),L=a.n(S),P=a(69),C=(a(109),{id_monument:{id:0}}),U=(r.a.createContext(C.id_monument),a(110),a(41)),A=a.n(U),D=[0,0],Z=[],H={enableHighAccuracy:!0,timeout:1e4},B=new z.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),V=new z.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),R=new z.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});function T(e,t,a,n){if(e==a&&t==n)return 0;var r=Math.PI*e/180,m=Math.PI*a/180,o=t-n,l=Math.PI*o/180,c=Math.sin(r)*Math.sin(m)+Math.cos(r)*Math.cos(m)*Math.cos(l);return c>1&&(c=1),c=60*(c=180*(c=Math.acos(c))/Math.PI)*1.1515,1e3*(c*=1.609344)}function J(e){var t=e.coords;D=[t.latitude,t.longitude]}function q(e){}var F=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this))).update=function(){var e=150;a.setState({zoom:a.getMapZoom()}),Z!=[]&&T(Z[0],Z[1],a.state.marker[0],a.state.marker[1])>150&&(a.setState({near:!1}),e=150);for(var t=0;t<Object.keys(a.state.monuments).length;t++)T(a.state.marker[0],a.state.marker[1],a.state.monuments[t].Latitude,a.state.monuments[t].Longitude)<=e&&(e=T(a.state.marker[0],a.state.marker[1],a.state.monuments[t].Latitude,a.state.monuments[t].Longitude));for(t=0;t<Object.keys(a.state.monuments).length;t++)if(T(a.state.marker[0],a.state.marker[1],a.state.monuments[t].Latitude,a.state.monuments[t].Longitude)<=e&&0==a.state.near){window.navigator.vibrate(1e3),a.setState({near:!0});a.state.monuments[t].id_monu;C.id=a.state.monuments[t].id_monu,U.store.addNotification({title:"Vous \xeates pr\xe8s de "+a.state.monuments[t].nom_monu,message:r.a.createElement(l.b,{to:"/Descriptif"},r.a.createElement(s.a,{className:"btn_popup",variant:"info",size:"sm",block:!0},"Plus d'informations")),type:"info",insert:"top",container:"top-center",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:0,onScreen:!0}}),Z=[a.state.monuments[t].Latitude,a.state.monuments[t].Longitude,t];break}},a.handleZoomstart=function(e){console.log(a.map&&a.map.leafletElement)},a.state={marker:D,zoom:14,near:!1,monuments:[]},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this;M.a.getCurrentPosition(J,q,H),this.setState({marker:D}),L.a.get("https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php").then((function(a){var n=a.data;t.setState({monuments:n});for(var r=0;r<Object.keys(e.state.monuments).length;r++)1==e.state.monuments[r].id_imp?z.a.marker([e.state.monuments[r].Latitude,e.state.monuments[r].Longitude],{icon:V}).addTo(e.map.leafletElement).bindPopup("<img  style='width:100%'src=https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument"+e.state.monuments[r].id_monu+"/image1.jpg </img><center><b>"+e.state.monuments[r].nom_monu+"</b></center><br ><center>"+e.state.monuments[r].introduction+"</center>"):2==e.state.monuments[r].id_imp?z.a.marker([e.state.monuments[r].Latitude,e.state.monuments[r].Longitude],{icon:R}).addTo(e.map.leafletElement).bindPopup("<center><b>"+e.state.monuments[r].nom_monu+"</b></center><br ><center>"+e.state.monuments[r].introduction+"</center>"):z.a.marker([e.state.monuments[r].Latitude,e.state.monuments[r].Longitude],{icon:B}).addTo(e.map.leafletElement).bindPopup("<center><b>"+e.state.monuments[r].nom_monu+"</b></center><br ><center>"+e.state.monuments[r].introduction+"</center>")})).catch((function(e){P.a.notify("Veuillez relancer l'application avec un acc\xe8s \xe0 internet"),console.log(e)})),M.a.watchPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude;console.log([a,n]),t=[a,n],e.setState({marker:[a,n]})}),q,H)}},{key:"getMapZoom",value:function(){return this.map&&this.map.leafletElement.getZoom()}},{key:"render",value:function(){var e=this,t=r.a.createElement(w.a,{position:this.state.marker,onLoad:setInterval(this.update,1e3)},r.a.createElement(x.a,null,"Vous \xeates ici !"));return r.a.createElement("div",null,r.a.createElement(_.a,{ref:function(t){e.map=t},center:[49.133333,6.166667],zoom:this.state.zoom,maxBounds:[[49.072067,6.100502],[49.143538,6.256371]],maxBoundsViscosity:1,zoomControl:!1,maxZoom:18,minZoom:13},r.a.createElement(O.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t))}}]),t}(n.Component),G=(a(112),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Menu"},r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement("img",{src:"Logo.png",alt:"Monu'Mix"})),r.a.createElement(k.a,null,r.a.createElement(l.b,{to:"/Home",className:"btn_menu"},r.a.createElement(s.a,{className:"btn_menu",variant:"info",size:"lg",block:!0},"Acc\xe9der \xe0 la carte")))))}}]),t}(n.Component)),K=a(33),Q=a(29),W=(a(113),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,m=new Array(n),o=0;o<n;o++)m[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(m)))).state={persons:[]},a.func_test=function(e,t){for(var a=t.length,n="",m="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument"+t[0]+"/image1.jpg",o=0;o<a;o++)n=n;return r.a.createElement(v.a,null,r.a.createElement(k.a,{className:"block_menu"},r.a.createElement(i.a,{xs:4,className:"see_more"},r.a.createElement(Q.a,{width:"100%",src:m,rounded:!0})),r.a.createElement(i.a,{className:"description",xs:7},e[0]),r.a.createElement(i.a,{xs:1,className:"see_more"},r.a.createElement("a",{href:""},r.a.createElement("i",{className:"fas fa-arrow-circle-right fa-lg"})))))},a.getUrl=function(e){return"https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument"+C.id+"/image"+e+".jpg"},a.generateCarousel=function(e){var t=r.a.createElement(K.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:a.getUrl(1),alt:"Image1"})),n=null,m=null,o=null,l=null,c=null;return e>=2&&(n=r.a.createElement(K.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:a.getUrl(2),alt:"Image2"}))),e>=3&&(m=r.a.createElement(K.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:a.getUrl(3),alt:"Image3"}))),e>=4&&(o=r.a.createElement(K.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:a.getUrl(4),alt:"Image4"}))),e>=5&&(l=r.a.createElement(K.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:a.getUrl(5),alt:"Image5"}))),e>=6&&(c=r.a.createElement(K.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:a.getUrl(6),alt:"Image6"}))),r.a.createElement(K.a,{className:"slider",slide:"false"},t,n,m,o,l,c)},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.a.get("https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php?id="+C.id).then((function(t){var a=t.data;e.setState({persons:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.persons.map((function(t){return r.a.createElement(v.a,null,r.a.createElement(l.b,{to:"/Home"},"  ",r.a.createElement(s.a,{className:"btn_desci",variant:"danger",size:"lg"},"Retour \xe0 la carte")),r.a.createElement(k.a,null,e.generateCarousel(t.nbimages)),r.a.createElement(k.a,null,r.a.createElement("h1",null,t.nom_monu)),r.a.createElement("div",{className:"scrollabeleu"},r.a.createElement(k.a,null,r.a.createElement("p",null,t.introduction)),r.a.createElement(k.a,null,r.a.createElement("p",null,t.description))))})))}}]),t}(r.a.Component)),X=(a(114),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,m=new Array(n),o=0;o<n;o++)m[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(m)))).state={persons:[]},a.func_test=function(e,t){for(var a=t.length,n="",m="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument"+t[0]+"/image1.jpg",o=0;o<a;o++)n=n;return r.a.createElement(v.a,null,r.a.createElement(k.a,{className:"block_menu"},r.a.createElement(i.a,{xs:4,className:"see_more"},r.a.createElement(Q.a,{width:"100%",src:m,rounded:!0})),r.a.createElement(i.a,{className:"description",xs:7},e[0]),r.a.createElement(i.a,{xs:1,className:"see_more"},r.a.createElement("a",{href:""},r.a.createElement("i",{className:"fas fa-arrow-circle-right fa-lg"})))))},a.generate_url=function(e){return"https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument"+e+"/image1.jpg"},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.a.get("https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php?OrderByImportance=1").then((function(t){var a=t.data;e.setState({persons:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.persons.map((function(t){return r.a.createElement(v.a,null,r.a.createElement(k.a,{className:"block_menu"},r.a.createElement(i.a,{xs:4,className:"see_more"},r.a.createElement(Q.a,{width:"100%",src:e.generate_url(t.id_monu),rounded:!0})),r.a.createElement(i.a,{className:"description",xs:7},t.introduction),r.a.createElement(i.a,{xs:1,className:"see_more"},r.a.createElement("a",{href:""},r.a.createElement("i",{className:"fas fa-arrow-circle-right fa-lg"})))))})))}}]),t}(r.a.Component)),Y=(a(115),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this))).func_test=function(e,t){for(var a=t.length,n="",m="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument"+t[0]+"/image1.jpg",o=0;o<a;o++)n=n;return r.a.createElement(v.a,null,r.a.createElement(k.a,{className:"block_menu"},r.a.createElement(i.a,{xs:4,className:"see_more"},r.a.createElement(Q.a,{width:"100%",src:m,rounded:!0})),r.a.createElement(i.a,{className:"description",xs:7},e[0]),r.a.createElement(i.a,{xs:1,className:"see_more"},r.a.createElement("a",{href:""},r.a.createElement("i",{className:"fas fa-arrow-circle-right fa-lg"})))))},a.generate_url=function(e){return"https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument"+e+"/image1.jpg"},a.state={lat:0,long:0,persons:[]},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.a.getCurrentPosition((function(t){e.state.lat=t.coords.latitude,e.state.long=t.coords.longitude,console.log([e.state.lat,e.state.long]),t=[e.state.lat,e.state.long],console.log(e.state.lat),L.a.get("https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php?lat="+e.state.lat+"&long="+e.state.long).then((function(t){var a=t.data;e.setState({persons:a})})),e.setState({marker:[e.state.lat,e.state.long]})}),void 0,void 0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.persons.map((function(t){return r.a.createElement(v.a,null,r.a.createElement(k.a,{className:"block_menu"},r.a.createElement(i.a,{xs:4,className:"see_more"},r.a.createElement(Q.a,{width:"100%",src:e.generate_url(t.id_monu),rounded:!0})),r.a.createElement(i.a,{className:"description",xs:6},t.introduction),r.a.createElement(i.a,{xs:2,className:"see_more"},r.a.createElement("a",{href:""},r.a.createElement("i",{className:"fas fa-arrow-circle-right fa-lg"})))))})))}}]),t}(r.a.Component)),$=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/Menu",component:N}),r.a.createElement(b.a,{path:"/Descriptif",component:W}),r.a.createElement(b.a,{path:"/Incontournables",component:X}),r.a.createElement(b.a,{path:"/Proximite",component:Y}),r.a.createElement(b.a,{path:"/Home",component:F}),r.a.createElement(b.a,{path:"/",component:G}))}}]),t}(n.Component);var ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(A.a,null),r.a.createElement($,null))};o.a.render(r.a.createElement(l.a,null,r.a.createElement(ee,null)),document.getElementById("root"))},72:function(e,t,a){e.exports=a(116)},77:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.c2d00c33.chunk.js.map