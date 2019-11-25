import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { Link } from 'react-router-dom'

const ProductDetails = (props) => {

  const { details } = useContext(ProductContext);

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
          <button className="btn blue">
            <span>Carrito</span>
            <i className="material-icons left">add_shopping_cart</i>
          </button>
        </div>
      </div>
      
    </div>
    

  );
}

export default ProductDetails