import React, { Component } from 'react'
import GoogleMap from 'google-map-react';

const Map = () => <div></div>

class GMap extends Component {

  renderMarkers = (map, maps) => {
    new maps.Marker({
      position: { lat: -12.080049, lng: -77.098030 },
      map: map,
      title: 'Something'
    });

  }

  render() {
    return (
      <div style={{ height: '50vw', width: '100%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyDHWTOrEr_ujqRINudoj-UqAvt029005F8' }}
          defaultCenter={{ lat: -12.080049, lng: -77.098030 }}
          defaultZoom={16}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <Map lat={-12.080049} lng={-77.098030} />
        </GoogleMap>
      </div>
    );
  }
}

export default GMap