import React, { Component } from "react";
import history from './../history';
import "./Home.css";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Geolocation from '@react-native-community/geolocation'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from "react-bootstrap/FormControl";
import axios from 'axios'
import 'leaflet-routing-machine';

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
  maximumAge: 0
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

var yellowIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
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
      markers: [
        { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
        { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
        { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
      ],
      monuments:[],

    };
  }



  componentDidMount() {
    var self= this
    Geolocation.getCurrentPosition(success, error, options);
    Geolocation.watchPosition(position => {
        this.setState({marker:[position.coords.latitude,position.coords.longitude]})
        console.log(this.state.marker);
  },
  error => alert(error.message),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
);


    axios.get('https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/api/monuments.php').then(res=>{
          const monu = res.data;
          self.setState({monuments:monu});
          for(var i=0;i<Object.keys(this.state.monuments).length;i++){
            if (this.state.monuments[i].id_imp==1)
              L.marker([this.state.monuments[i].Latitude,this.state.monuments[i].Longitude],{icon:yellowIcon}).addTo(this.map.leafletElement)
                  .bindPopup('<img style="width:100%;border: 2px solid;" src="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument'+(i+1)+'/image1.jpg">'+'<center><b>'+this.state.monuments[i].nom_monu+'</b></center>'+'<br \>'+'<center>'+this.state.monuments[i].lib_imp+'</center>');
            else if (this.state.monuments[i].id_imp==2)
              L.marker([this.state.monuments[i].Latitude,this.state.monuments[i].Longitude],{icon:violetIcon}).addTo(this.map.leafletElement).bindPopup('<img style="width:100%;border: 2px solid;" src="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument'+(i+1)+'/image1.jpg">'+'<center><b>'+this.state.monuments[i].nom_monu+'</b></center>'+'<br \>'+'<center>'+this.state.monuments[i].lib_imp+'</center>');
            else
              L.marker([this.state.monuments[i].Latitude,this.state.monuments[i].Longitude],{icon:greenIcon}).addTo(this.map.leafletElement).bindPopup('<img style="width:100%;border: 2px solid;" src="https://devweb.iutmetz.univ-lorraine.fr/~ramier2u/monumix/images/monument'+(i+1)+'/image1.jpg">'+'<center><b>'+this.state.monuments[i].nom_monu+'</b></center>'+'<br \>'+'<center>'+this.state.monuments[i].lib_imp+'</center>');
          }
        }
    );



  }

  update = () =>{
    window.navigator.vibrate(1000);
    Geolocation.getCurrentPosition(success, error, options);
    this.setState({marker:position,zoom:this.getMapZoom()});
    if (nearLocation != [] && distance(nearLocation[0],nearLocation[1],position[0],position[1])>150){
      this.setState({near:false});
    }
    for(var i=0;i<Object.keys(this.state.monuments).length;i++){
      if (distance(position[0],position[1],this.state.monuments[i].Latitude,this.state.monuments[i].Longitude)<=150 && this.state.near==false){
        window.navigator.vibrate(1000);
        this.setState({near:true});
        alert(`Vous êtes proche de `+this.state.monuments[i].nom_monu)

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
        <Marker position={this.state.marker}>
          <Popup >
            Vous êtes ici !
          </Popup>
        </Marker>



    return (
        <div>
          <Map  ref={(ref) => { this.map = ref; }} center={[49.133333,6.166667]} zoom={this.state.zoom} maxBounds={[[49.072067,6.100502],[49.143538,6.256371]]} maxBoundsViscosity={1.0} zoomControl={true} maxZoom={18} minZoom={13}>
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
