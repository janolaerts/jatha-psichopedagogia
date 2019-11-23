import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {

  componentDidMount() {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {edge:'left'});
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper blue darken-1">
          <div className="container">
            <Link to="/" className="brand-logo center hide-on-small-only">Jatha</Link>
            <Link to="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/store">Store</NavLink></li>
            </ul>
            <Link to="/" className="brand-logo center hide-on-med-and-up">Jatha</Link>
            <ul className="sidenav" id="mobile-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/store">Store</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } 
}

export default Navbar