import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 47.497912,
  lng: 19.040235,
};

class CovidMap extends Component {
  render() {
    return (
      <main>
      <h1>PDSZ Covid Map</h1>
      <LoadScript
        googleMapsApiKey="AIzaSyByPiJ1yGBqT9IdNkK7M13Ic4-cK7lyP2I"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker
            position={center}
          />
        </GoogleMap>
      </LoadScript>
      </main>
    )
  }
}

export default CovidMap
