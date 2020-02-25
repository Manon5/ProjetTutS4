import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Geolocation from '@react-native-community/geolocation'

var position = [0,0]


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  console.log('Votre position actuelle est :');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
  position=[crd.latitude,crd.longitude];

}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export const pointerIcon = new L.Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bruce_Lee_1973.jpg/290px-Bruce_Lee_1973.jpg',
  iconRetinaUrl: '../assets/pointerIcon.svg',
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
  shadowUrl: '../assets/marker-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
})

export const suitcasePoint = new L.Icon({
  iconUrl: 'https://images-na.ssl-images-amazon.com/images/I/61Vh5DJkCKL._AC_SL1000_.jpg',
  iconRetinaUrl: '../assets/suitcaseIcon.svg',
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40],
  shadowUrl: '../assets/marker-shadow.png',
  shadowSize: [29, 40],
  shadowAnchor: [7, 40],
})

export default class CustomIcons extends Component {
  constructor(props) {
    super();

    this.state={
      marker:position,
      zoom:14,
      draggable: true,


    };


  }


  componentDidMount() {
    Geolocation.getCurrentPosition(success, error, options);
    this.setState({marker:position});
   }

   update = () =>{


    Geolocation.getCurrentPosition(success, error, options);
    this.setState({marker:position,zoom:this.getMapZoom()});


  }






  handleZoomstart = (map) => {
  console.log(this.map && this.map.leafletElement);
};

getMapZoom() {
   return this.map && this.map.leafletElement.getZoom();
}

  render() {


    console.log(`La précision est de ${position} mètres.`);
    const marker =
      <Marker position={this.state.marker}

            onLoad={setInterval(this.update, 5000)}>
        <Popup>You are here</Popup>
      </Marker>



    return (
      <Map  ref={(ref) => { this.map = ref; }} center={[49.133333,6.166667]} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
    )
  }
}
