import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'
import { Link } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

const Store = () => {

  const { products, setDetails, addToCart } = useContext(StoreContext);

  return(
    <div className="store container">
      <div id="toast-container"></div>
      <div className="row">
        { products.map((item, index) => {
          return (
            <div className="col s12 m6 l3" key={item.id}>
              <div className="card">
                <div className="card-image">
                  <Link to="/details">
                    <img src={item.img} alt={item.alt} onClick={() => setDetails({...item})} />
                  </Link>
                  <button onClick={(e) => {
                    addToCart(item);
                    M.toast({html: `Añadiste ${products[index].name} al carrito!`, classes: 'blue'});
                  }} className="halfway-fab btn-floating blue">
                    <i className="material-icons">add_shopping_cart</i>
                  </button>
                </div>
                <div className="card-content">
                  <p className="left">{item.name}</p>
                  <p className="right">s./{item.price}</p>
                </div>
                <div className="card-action center">
                  <Link to="/details">
                    <button onClick={() => setDetails({...item})} className="btn blue">Más info</button>
                  </Link>
                </div>
              </div>
            </div>
          )  
        }) }
      </div>
      <Link to="/cart" className="btn-floating blue cart-button">
        <i className="material-icons">shopping_cart</i>
      </Link>
      <p className="blue white-text center cart-text">Ir a carrito</p>
    </div>
  );
}

export default Store