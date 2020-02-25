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
  markersGreen: Array<MarkerData>,
  markersRed: Array<MarkerData>,
}

// ICONE VERTE

var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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

//

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
      <ListMarkerGreen markers={this.state.markers} />
      </Map>
    )
  }
}
