import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import axios from 'axios'
import Geolocation from '@react-native-community/geolocation'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import FormControl from "react-bootstrap/FormControl";

var position = [0,0]


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  position=[crd.latitude,crd.longitude];

}

const GreenMarker = ({ content, position }: Props) => (
   <Marker position={position} icon={greenIcon}>
     <Popup>{content}</Popup>
   </Marker>
)

const ListMarkerGreen = ({ markers }: { markers: Array<MarkerData> }) => {
 const items = markers.map(({ key, ...props }) => (
     <GreenMarker key={key} {...props} />
 ))
 return <React.Fragment>{items}</React.Fragment>
}


function clickRechercher() {
 console.log("ça marche bieng");
}


function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

type State = {
  lat: number,
  lng: number,
  zoom: number,
  markersGreen: Array<MarkerData>,
  markersRed: Array<MarkerData>,
}

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



//


const popupContent = {
  textAlign: "center",
  height: "350px",
  marginTop: "30px"
};
const popupHead = {
  fontWeight: "bold",
  fontSize: "22px"
};

const popupText = {
  fontSize: "15px",
  marginBottom: "20px"
};

const okText = {
  fontSize: "15px"
};

export { popupContent, popupHead, popupText, okText };

export default class CustomIcons extends Component {
  constructor(props) {
    super();

    this.state={
      marker:position,
      zoom:14,
      draggable: true,
      markers: [
        { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
        { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
        { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
      ],
      monuments:[],
    };
  }


  componentDidMount() {
    var self= this;
    Geolocation.getCurrentPosition(success, error, options);
    this.setState({marker:position});
    axios.get('https://my-json-server.typicode.com/Yonah125/test3/db').then(res=>{
          const monu = res.data;
          self.setState({monuments:monu});
          for(var i=0;i<Object.keys(this.state.monuments.id).length;i++){
            if (this.state.monuments.id[i].Importance==1)
              L.marker([this.state.monuments.id[i].Latitude,this.state.monuments.id[i].Longitude],{icon:greenIcon}).addTo(this.map.leafletElement).bindPopup(this.state.monuments.id[i].nom_monu);
              else if (this.state.monuments.id[i].Importance==2)
              L.marker([this.state.monuments.id[i].Latitude,this.state.monuments.id[i].Longitude],{icon:violetIcon}).addTo(this.map.leafletElement).bindPopup(this.state.monuments.id[i].nom_monu);
              else
              L.marker([this.state.monuments.id[i].Latitude,this.state.monuments.id[i].Longitude],{icon:redIcon}).addTo(this.map.leafletElement).bindPopup(this.state.monuments.id[i].nom_monu);
          }
        }
      );



  }

  update = () =>{
    Geolocation.getCurrentPosition(success, error, options);
    this.setState({marker:position,zoom:this.getMapZoom()});

  }


  addmarker(){
    console.log(`${this.map}`);
    L.marker([50.5, 30.5]).addTo(this.map.leafletElement);
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
    onLoad={setInterval(this.update, 5000)}>
    <Popup className="request-popup">
      <div style={popupContent}>
        <img
          src="https://cdn.vox-cdn.com/thumbor/-YgFj4-1xPchm7IMQpLkoRWUB9A=/0x0:2048x1208/1400x933/filters:focal(1116x306:1442x632):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/59579007/DcDLKrMU0AAs9XL.0.jpg"
          width="150"
          height="150"
        />
        <div className="m-2" style={popupHead}>
          Success!
        </div>
        <span style={popupText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </span>
        <div className="m-2" style={okText}>
          Okay
        </div>
      </div>
    </Popup>
  </Marker>



    return (
      <div>

         <Navbar bg="dark" variant="dark">
         <Col sm={11}>
             <FormControl type="text" placeholder="Search" className="mr-sm-2" expand = "md" size="sm"/>
         </Col>
         <Col sm={0.5}>
         <Button className="btn" variant = "outline-light"  onClick = {() => clickRechercher()}><i className="fa fa-search"></i></Button>
       </Col>

         <Col sm={0.5}>
           <Button className="btn" variant = "light"><i className="fa fa-bars"></i></Button>
         </Col>
       </Navbar>

        <Map  ref={(ref) => { this.map = ref; }} center={[49.133333,6.166667]} zoom={this.state.zoom}>
       <TileLayer
       attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
        <ListMarkerGreen markers={this.state.markers} />
       </Map>

      </div>

    )
  }
}
