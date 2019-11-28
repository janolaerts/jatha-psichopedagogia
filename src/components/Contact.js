import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import emailjs from 'emailjs-com';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

export class GMap extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    name: '',
    email: '',
    message: ''
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  onIWClose = () => {
    this.setState({
      showingInfoWindow: false
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.name, this.state.email, this.state.message);

    if(this.state.name && this.state.email && this.state.message) {
      emailjs.send('gmail', 'email', { "user_name": this.state.name, "user_email": this.state.email, "message": `${this.state.message}. Este mensaje es de ${this.state.name} con email: ${this.state.email}` }, 'user_7JHuVTK3qMLcYImW8gFxu')
      .then(response => {
          console.log(response.status, response.text);
          M.toast({html: `Muchas gracias, le responderemos pronto!`, classes: 'green'});
        })
      .catch(error => {
        console.log(error);
        M.toast({html: 'Hubo un error al enviar el correo!', classes: 'red'});
      })
    }

    e.target.name.value = null;
    e.target.email.value = null;
    e.target.message.value = null;
    this.setState({
      name: null,
      email: null,
      message: null
    });
  }

  render() {
    return (
      <div className="contact container">
        <h1 className="blue-text center">Déjanos un mensaje</h1>
        <div className="row">
          <div className="col s12 l6">
            <div className="message-container container">
              <form className="center" onSubmit={this.handleSubmit}>
                <div className="input-field name">
                  <i className="material-icons prefix">person</i>
                  <input onChange={this.handleChange} type="text" id="name" name="user_name" />
                  <label className="blue-text" htmlFor="name">Su nombre</label>
                </div>
                <div className="input-field email">
                  <i className="material-icons prefix">email</i>
                  <input onChange={this.handleChange} type="email" id="email" name="user_email" />
                  <label className="blue-text" htmlFor="email">Su correo</label>
                </div>
                <div className="input-field message">
                  <i className="material-icons prefix">message</i>
                  <textarea onChange={this.handleChange} className="materialize-textarea" type="email" id="message" name="message" />
                  <label className="blue-text" htmlFor="message">Su mensaje</label>
                </div>
                <button className="btn blue" value="Send" type="submit">Enviar mensaje</button>
              </form>
            </div>
          </div>
          <div className="col s12 l6">
            <div className="map-container" style={{ marginTop: '20px' }}>
              <Map google={this.props.google} onClick={this.onMapClicked} name={'Current Location'} zoom={15} style={{width: '100%', height: '100%'}} initialCenter={{lat: -12.080049, lng: -77.098030}}>
                <Marker onClick={this.onMarkerClick} name={'Current location'} />
                <InfoWindow onClose={this.onIWClose} marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                  <h5 className="blue-text">Jatha Psicopedagogía</h5>
                  <form>
                    <div className="input-field">
                      <i className="material-icons prefix blue-text">home</i>
                      <input disabled placeholder="Calle Los Mochicas 170" type="text" />
                    </div>
                    <div className="input-field">
                      <i className="material-icons prefix blue-text">contact_phone</i>
                      <input disabled placeholder="983 840 923" type="text" />
                    </div>
                    <div className="input-field mail">
                      <i className="material-icons prefix blue-text">mail</i>
                      <input disabled placeholder="jathapsicopedagogiaperu@gmail.com" type="text" />
                    </div>
                  </form>
                </InfoWindow>
              </Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDHWTOrEr_ujqRINudoj-UqAvt029005F8'
})(GMap)