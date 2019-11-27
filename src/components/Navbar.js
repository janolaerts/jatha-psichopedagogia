import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.jpg';

class Navbar extends Component {

  componentDidMount() {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {edge:'left'});
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar-fixed">
          <nav className="nav-wrapper blue darken-1">
            <div className="container">
              <Link to="/" className="brand-logo center hide-on-small-only">Jatha</Link>
              <Link to="#" className="sidenav-trigger" data-target="mobile-links">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/about">Nosotros</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
                <li><NavLink to="/store">Tienda</NavLink></li>
              </ul>
              <Link to="/" className="brand-logo center hide-on-med-and-up">Jatha</Link>
            </div>
          </nav>
        </div>
        <ul className="sidenav blue" id="mobile-links">
          <li><NavLink className="sidenav-close white-text" to="/">Inicio</NavLink></li>
          <li><NavLink className="sidenav-close white-text" to="/about">Nosotros</NavLink></li>
          <li><NavLink className="sidenav-close white-text" to="/contact">Contacto</NavLink></li>
          <li><NavLink className="sidenav-close white-text" to="/store">Tienda</NavLink></li>
          <img style={{ width: '300px' }} src={ Logo } alt="logo"/>
        </ul>
      </React.Fragment>
    );
  } 
}

export default Navbar