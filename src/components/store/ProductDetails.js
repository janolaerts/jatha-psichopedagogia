import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'
import { Link } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

const ProductDetails = (props) => {

  const { details, addToCart } = useContext(StoreContext);

  return (
    <div className="container product-details">
      <h1 className="center blue-text" style={{ textDecoration: 'underline' }}>{ details.name }</h1>
      <div className="row">
        <div className="col s12 l6">
          <img className="responsive-img" src={ details.img } alt={ details.alt } />
        </div>
        <div className="col s12 l6">
          <p className="blue-text" style={{ textAlign: 'justify' }}>{ details.info }</p>
        </div>
      </div>
      <div className="row">
        <div className="s6 left">
          <Link to="/store">
            <button className="btn blue">
              <span>Tienda</span>
              <i className="material-icons left">keyboard_arrow_left</i>
            </button>
          </Link>
        </div>
        <div className="s6 right">
          <button className="btn blue" onClick={() => {
            addToCart(details);
            M.toast({html: `Añadiste ${details.name} al carrito!`, classes: 'blue'});
          }}>
            <span>Carrito</span>
            <i className="material-icons left">add_shopping_cart</i>
          </button>
        </div>
      </div>
      <Link to="/cart" className="btn-floating blue cart-button">
        <i className="material-icons">shopping_cart</i>
      </Link>
      <p className="blue white-text center cart-text">Ir a carrito</p>
    </div>
  );
}

export default ProductDetails