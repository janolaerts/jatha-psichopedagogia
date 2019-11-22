import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {

  componentDidMount() {
    const modal = document.querySelector('.modal');
    M.Modal.init(modal);
  }

  render() {
    return (
      <div className="modal" id="services">
        <div className="modal-content">
          <h1 className="center">{ this.props.item.title }</h1>
        </div>
      </div>
    )
  }
}

export default Modal