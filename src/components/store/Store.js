import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { Link } from 'react-router-dom'

const Store = () => {

  const { products } = useContext(ProductContext);

  return(
    <div className="store container">
      <div className="row">
        { products.map(item => {
          return (
            <div className="col s12 m6 l3" key={item.id}>
              <div className="card">
                <div className="card-image">
                  <Link to="/details">
                    <img src={item.img} alt={item.alt} product={item} />
                  </Link>
                  <a href="#" className="halfway-fab btn-floating blue">
                    <i className="material-icons">add_shopping_cart</i>
                  </a>
                </div>
                <div className="card-content">
                  <span className="left">{item.name}</span>
                  <p className="right">{item.price}$</p>
                </div>
                <div className="card-action center">
                  <Link to="/details">
                    <button className="btn blue">Más info</button>
                  </Link>
                  
                </div>
              </div>
            </div>
          )  
        }) }
      </div>
    </div>
  );
}

export default Store