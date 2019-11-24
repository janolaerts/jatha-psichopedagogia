import React, { useContext } from 'react'
import { ProductContext } from './ProductContext';

const Store = () => {

  const { products } = useContext(ProductContext);

  return(
    <div className="store container">
      <div className="row">
        { products.map(item => {
          return  <div className="col s12 m6 l3" key={item.id}>
                    <div className="card">
                      <div className="card-image">
                        <img src={require(`${item.img}`)} alt={item.name}/>
                      </div>
                      <div className="card-content">
                        <span className="left">{item.name}</span>
                        <p className="right">{item.price}$</p>
                      </div>
                      <div className="card-action center">
                        <button className="btn blue">Agregar</button>
                      </div>
                    </div>
                  </div>
        }) }

      </div>
    </div>
  );
}

export default Store