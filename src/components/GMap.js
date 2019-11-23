import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const Map = () => <div></div>

class GMap extends Component {

  renderComponents = (map, maps) => {
    const marker = new maps.Marker({
      position: { lat: -12.080049, lng: -77.098030 },
      map: map,
      title: 'Something',
      clickable: true
    });
    const infoWindow = new maps.InfoWindow({
      zoom: 4,
      center: { lat: -12.080049, lng: -77.098030 }
    });
  }

  showPopUp = () => {
    console.log('infoWindow should pop up');
  } 

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <div style={{ height: '400px', width: '100%' }}>
              <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDHWTOrEr_ujqRINudoj-UqAvt029005F8' }}
              defaultCenter={{ lat: -12.080049, lng: -77.098030 }}
              defaultZoom={15}
              options={{ streetViewControl: true }}
              onGoogleApiLoaded={({map, maps}) => this.renderComponents(map, maps)}
              yesIWantToUseGoogleMapApiInternals={true}
              onChildClick={() => this.showPopUp()}
              >
              <Map lat={-12.080049} lng={-77.098030} />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GMap