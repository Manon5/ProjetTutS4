(this.webpackJsonpreactbuttonexample=this.webpackJsonpreactbuttonexample||[]).push([[0],{108:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(22),s=a.n(m),i=a(27),o=(a(75),a(76),a(77),a(78),a(109)),l=a(29),c=(a(31),a(32)),u=a(46),d=function(e){return console.log(e),r.a.createElement(o.a,{bg:"dark",variant:"dark"},r.a.createElement(c.a,{sm:11},r.a.createElement(u.a,{type:"text",placeholder:"Search",className:"mr-sm-2",expand:"md",size:"sm"})),r.a.createElement(c.a,{sm:.5},r.a.createElement(l.a,{className:"btn",variant:"outline-light"},r.a.createElement("i",{className:"fa fa-search"}))),r.a.createElement(c.a,{sm:.5},r.a.createElement(i.b,{to:"/Menu"},r.a.createElement(l.a,{className:"btn",variant:"light"},r.a.createElement("i",{className:"fa fa-bars"})))))},p=a(7),h=a(13),g=a(11),f=a(10),b=a(12),v=a(23),E=a(37),k=a(21),j=(a(85),function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Menu"},r.a.createElement(E.a,null,r.a.createElement(k.a,null,r.a.createElement(l.a,{className:"btn_menu",variant:"info",size:"lg",block:!0},"Monuments \xe0 proximit\xe9",r.a.createElement("i",{className:"fas fa-route fa-2x"}))),r.a.createElement(k.a,null,r.a.createElement(l.a,{className:"btn_menu",variant:"info",size:"lg",block:!0},"Les incontournables",r.a.createElement("i",{className:"fas fa-crown fa-2x"}))),r.a.createElement(k.a,null,r.a.createElement(l.a,{className:"btn_menu",variant:"info",size:"lg",block:!0},"Parcours de visite",r.a.createElement("i",{className:"fas fa-map-marked-alt fa-2x"}))),r.a.createElement(k.a,{className:"ret_row"},r.a.createElement(i.b,{to:"/Home"},r.a.createElement(l.a,{className:"btn_ret",variant:"danger",size:"lg"},"Retour \xe0 la carte")))))}}]),t}(n.Component)),w=a(16),z=(Object(w.a)(),a(86),a(114)),x=a(116),L=a(115),N=a(117),O=a(8),M=a.n(O),y=a(49),I=a.n(y),S=a(113),_=a(66),P=a.n(_),C=a(50),A=(a(107),[0,0]),q=[],U={enableHighAccuracy:!0,timeout:1e4},Z=new M.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),V=new M.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),D=new M.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});function H(e,t,a,n){if(e==a&&t==n)return 0;var r=Math.PI*e/180,m=Math.PI*a/180,s=t-n,i=Math.PI*s/180,o=Math.sin(r)*Math.sin(m)+Math.cos(r)*Math.cos(m)*Math.cos(i);return o>1&&(o=1),o=60*(o=180*(o=Math.acos(o))/Math.PI)*1.1515,1e3*(o*=1.609344)}function B(e){var t=e.coords;A=[t.latitude,t.longitude]}function F(e){}var T=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this))).update=function(){var e=150;a.setState({zoom:a.getMapZoom()}),q!=[]&&H(q[0],q[1],a.state.marker[0],a.state.marker[1])>150&&(a.setState({near:!1}),e=150);for(var t=0;t<Object.keys(a.state.monuments).length;t++)H(a.state.marker[0],a.state.marker[1],a.state.monuments[t].Latitude,a.state.monuments[t].Longitude)<=e&&(e=H(a.state.marker[0],a.state.marker[1],a.state.monuments[t].Latitude,a.state.monuments[t].Longitude));for(t=0;t<Object.keys(a.state.monuments).length;t++)if(H(a.state.marker[0],a.state.marker[1],a.state.monuments[t].Latitude,a.state.monuments[t].Longitude)<=e&&0==a.state.near){window.navigator.vibrate(1e3),a.setState({near:!0});var n="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument"+a.state.monuments[t].id_monu+"/image1.jpg";C.a.notify(r.a.createElement("div",null,r.a.createElement(S.a,{src:n,fluid:!0}),r.a.createElement("br",null),"Vous \xeates proche de ",a.state.monuments[t].nom_monu,r.a.createElement(l.a,{className:"btn_popup",variant:"info",size:"sm",block:!0},"Plus d'informations")),{duration:null}),q=[a.state.monuments[t].Latitude,a.state.monuments[t].Longitude,t];break}},a.handleZoomstart=function(e){console.log(a.map&&a.map.leafletElement)},a.state={marker:A,zoom:14,near:!1,monuments:[]},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this;I.a.getCurrentPosition(B,F,U),this.setState({marker:A}),P.a.get("https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php").then((function(a){var n=a.data;t.setState({monuments:n});for(var r=0;r<Object.keys(e.state.monuments).length;r++)1==e.state.monuments[r].id_imp?M.a.marker([e.state.monuments[r].Latitude,e.state.monuments[r].Longitude],{icon:V}).addTo(e.map.leafletElement).bindPopup("<img  style='width:100%'src=https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument"+e.state.monuments[r].id_monu+"/image1.jpg </img><center><b>"+e.state.monuments[r].nom_monu+"</b></center><br ><center>"+e.state.monuments[r].introduction+"</center>"):2==e.state.monuments[r].id_imp?M.a.marker([e.state.monuments[r].Latitude,e.state.monuments[r].Longitude],{icon:D}).addTo(e.map.leafletElement).bindPopup("<center><b>"+e.state.monuments[r].nom_monu+"</b></center><br ><center>"+e.state.monuments[r].introduction+"</center>"):M.a.marker([e.state.monuments[r].Latitude,e.state.monuments[r].Longitude],{icon:Z}).addTo(e.map.leafletElement).bindPopup("<center><b>"+e.state.monuments[r].nom_monu+"</b></center><br ><center>"+e.state.monuments[r].introduction+"</center>")})).catch((function(e){C.a.notify("Veuillez relancer l'application avec un acc\xe8s \xe0 internet"),console.log(e)})),I.a.watchPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude;console.log([a,n]),t=[a,n],e.setState({marker:[a,n]})}),F,U)}},{key:"getMapZoom",value:function(){return this.map&&this.map.leafletElement.getZoom()}},{key:"render",value:function(){var e=this,t=r.a.createElement(z.a,{position:this.state.marker,onLoad:setInterval(this.update,1e3)},r.a.createElement(x.a,null,"Vous \xeates ici !"));return r.a.createElement("div",null,r.a.createElement(L.a,{ref:function(t){e.map=t},center:[49.133333,6.166667],zoom:this.state.zoom,maxBounds:[[49.072067,6.100502],[49.143538,6.256371]],maxBoundsViscosity:1,zoomControl:!1,maxZoom:18,minZoom:13},r.a.createElement(N.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t))}}]),t}(n.Component),J=(a(108),a(26)),R=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=null,a=null,n=null,m=null,s=null;return e=r.a.createElement(J.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image1.jpg",alt:"Image1"})),t=r.a.createElement(J.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image2.jpg",alt:"Image2"})),a=r.a.createElement(J.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image3.jpg",alt:"Image3"})),n=r.a.createElement(J.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image4.jpg",alt:"Image4"})),m=r.a.createElement(J.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image5.jpg",alt:"Image5"})),s=r.a.createElement(J.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument1/image6.jpg",alt:"Image6"})),console.log(6),r.a.createElement("div",{className:"Menu"},r.a.createElement(E.a,null,r.a.createElement(k.a,null,r.a.createElement(J.a,{className:"slider",slide:"false"},e,t,a,n,m,s)),r.a.createElement(k.a,null,r.a.createElement("h1",null,"Cath\xe9drale de Metz")),r.a.createElement("div",{className:"scrollabeleu"},r.a.createElement(k.a,null,r.a.createElement("p",null,"Horaires :\n9h30-12h30 et 13h30-17h30 du Lundi au Samedi\n14h-18h le Dimanche\n\nLa Cath\xe9drale Saint-\xc9tienne est situ\xe9e au coeur de Metz. Sa construction, commenc\xe9e en 1240, a dur\xe9 trois si\xe8cles. Elle est la troisi\xe8me plus haute cath\xe9drale de France.\n")),r.a.createElement(k.a,null,r.a.createElement("p",null,"Quelques chiffres\nLa cath\xe9drale de Metz figure parmi les plus hautes cath\xe9drales de France, gr\xe2ce \xe0 ses vo\xfbtes mesurant 43.10 m\xe8tres. Le b\xe2timent a une surface de 3500 m\xb2, et la cath\xe9drale poss\xe8de la plus grande surface de vitraux de France, avec 6500 m\xb2 de vitraux au total, ce qui lui a valu le surnom de \u201cla lanterne de Dieu\u201d.\n\nArchitecture\nLa cath\xe9drale pr\xe9sente une particularit\xe9 majeure dans sa construction : en effet, elle a \xe9t\xe9 construite par la r\xe9union de deux \xe9glises plus petites et anciennes. La cath\xe9drale est assez proche du style gothique, avec une inspiration rh\xe9nane. \n\nHistoire\nLa construction de la Cath\xe9drale a d\xe9but\xe9 sous l'\xc9v\xeaque Conrad de Schaffenberg en 1240, et s\u2019est termin\xe9e en 1522. Le 7 Mai 1877, un incendie provoqu\xe9 par un feu d\u2019artifice ravage la toiture, qui sera reconstruite par la suite. Les travaux dur\xe8rent plus de 30 ans, et au cours des si\xe8cles suivants, la cath\xe9drale subit plusieurs modifications mineures ainsi que des restaurations.\n\nVisite \nLa cath\xe9drale est le monument le plus visit\xe9 de Metz, avec 650 000 visiteurs par an. L\u2019entr\xe9e est libre, mais la visite guid\xe9e est disponible \xe0 partir de 2.50\u20ac par personne. Pour en savoir plus, vous pouvez visiter le site de la cath\xe9drale \xe0 l\u2019adresse suivante : cathedrale-metz.fr\n")),r.a.createElement(k.a,{className:"ret_row"},r.a.createElement(l.a,{className:"btn_ret",variant:"danger",size:"lg",href:"/"},"Retour \xe0 la carte")))))}}]),t}(n.Component),Q=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/Menu",component:j}),r.a.createElement(v.a,{path:"/Descriptif",component:R}),r.a.createElement(v.a,{path:"/",component:T}))}}]),t}(n.Component);var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(Q,null))};s.a.render(r.a.createElement(i.a,null,r.a.createElement(G,null)),document.getElementById("root"))},70:function(e,t,a){e.exports=a(110)},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.4c9e9eac.chunk.js.map