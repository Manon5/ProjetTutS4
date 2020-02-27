import React, { Component } from "react";
import history from './../history';
import "./Home.css";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Geolocation from '@react-native-community/geolocation'
import { Button , Image} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from "react-bootstrap/FormControl";
import axios from 'axios'
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

type State = {
  lat: number,
  lng: number,
  zoom: number,
  markersGreen: Array<MarkerData>,
  markersRed: Array<MarkerData>,
}

var position = [0,0]
var nearLocation=[];

var options = {
  enableHighAccuracy: true,
  timeout: 10000,
};

// ICONE COULEUR

var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var violetIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});



function distance(lat1, lon1, lat2, lon2) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;

    return dist*1000;
  }
}


function success(pos) {
  var crd = pos.coords;
  position=[crd.latitude,crd.longitude];

}

function error(err) {
}


export default class Home extends Component {

  constructor(props) {
    super();

    this.state={
      marker:position,
      zoom:14,
      near:false,
      monuments:[],

    };
  }



  componentDidMount() {
    var self= this
    var id;
    Geolocation.getCurrentPosition(success, error, options);
    this.setState({marker:position});
    axios.get('https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php').then(res=>{
          const monu = res.data;
          self.setState({monuments:monu});
          for(var i=0;i<Object.keys(this.state.monuments).length;i++){
            if (this.state.monuments[i].id_imp==1)
              L.marker([this.state.monuments[i].Latitude,this.state.monuments[i].Longitude],{icon:redIcon}).addTo(this.map.leafletElement)
                  .bindPopup("<img  style='width:100%'src=https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument" + this.state.monuments[i].id_monu + "/image1.jpg </img>"+'<center><b>'+this.state.monuments[i].nom_monu+'</b></center>'+'<br \>'+'<center>'+this.state.monuments[i].introduction+'</center>');
            else if (this.state.monuments[i].id_imp==2)
              L.marker([this.state.monuments[i].Latitude,this.state.monuments[i].Longitude],{icon:violetIcon}).addTo(this.map.leafletElement).bindPopup('<center><b>'+this.state.monuments[i].nom_monu+'</b></center>'+'<br \>'+'<center>'+this.state.monuments[i].introduction+'</center>');
            else
              L.marker([this.state.monuments[i].Latitude,this.state.monuments[i].Longitude],{icon:greenIcon}).addTo(this.map.leafletElement).bindPopup('<center><b>'+this.state.monuments[i].nom_monu+'</b></center>'+'<br \>'+'<center>'+this.state.monuments[i].introduction+'</center>');
          }
        }
    ) .catch(function (error) {
    toast.notify("Veuillez relancer l'application avec un accès à internet" );
    console.log(error);
  });
	    id = Geolocation.watchPosition(position=>{
							var lat = position.coords.latitude;
							var long = position.coords.longitude;
							console.log([lat,long])
							this.setState({marker:[lat,long]});}, error, options);


  }

  update = () =>{

    var vardis=150;
    this.setState({zoom:this.getMapZoom()});
    if (nearLocation != [] && distance(nearLocation[0],nearLocation[1],position[0],position[1])>150){
      this.setState({near:false});
      vardis=150;
    }

    for(var i=0;i<Object.keys(this.state.monuments).length;i++){
      if (distance(position[0],position[1],this.state.monuments[i].Latitude,this.state.monuments[i].Longitude)<=vardis){
        vardis=distance(position[0],position[1],this.state.monuments[i].Latitude,this.state.monuments[i].Longitude);
      }
    }

    for(var i=0;i<Object.keys(this.state.monuments).length;i++){
      if (distance(position[0],position[1],this.state.monuments[i].Latitude,this.state.monuments[i].Longitude)<=vardis && this.state.near==false){
        window.navigator.vibrate(1000);
        this.setState({near:true});
        var lurl = "https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument" + this.state.monuments[i].id_monu + "/image1.jpg";
        toast.notify(
       <div>
           <Image src = {lurl} fluid />
           <br />Vous êtes proche de {this.state.monuments[i].nom_monu}
           <Button className="btn_popup" variant="info" size="sm" block>
               Plus d'informations
           </Button>
       </div>
       , {duration: null});

        nearLocation=[this.state.monuments[i].Latitude,this.state.monuments[i].Longitude,i];
        //alert(`Vous êtes proche de `+this.state.monuments.id[i].nom_monu)
        break;
      }
    }

  }

  handleZoomstart = (map) => {
    console.log(this.map && this.map.leafletElement);
  };

  getMapZoom() {
    return this.map && this.map.leafletElement.getZoom();
  }

  render() {
    const marker =
        <Marker position={this.state.marker}
            onLoad={setInterval(this.update,1000)}>
          <Popup >
            Vous êtes ici !
          </Popup>
        </Marker>



    return (
        <div>
          <Map  ref={(ref) => { this.map = ref; }} center={[49.133333,6.166667]} zoom={this.state.zoom} maxBounds={[[49.072067,6.100502],[49.143538,6.256371]]} maxBoundsViscosity={1.0} zoomControl={false} maxZoom={18} minZoom={13}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marker}
          </Map>
        </div>

    )
  }
}
