import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'

const CartItem = (props) => {

  let item = props.item;
  const { increment, decrement } = useContext(StoreContext);

  return (
    <div className="row cart-item" style={ item.quantity === 0 ? { display: 'none' } : { display: 'block' } } >
      <div className="col s12 m3 center blue-text"><h4>{ item.quantity }x { item.name }</h4></div>
      <div className="col s6 m3 center blue-text remove">
        <button className="btn blue" onClick={() => decrement(item)}>
          <span className="white-text">Sacar</span>
          <i className="material-icons left">remove</i>
        </button>
      </div>
      <div className="col s6 m3 center blue-text add">
        <button className="btn blue" onClick={() => increment(item)}>
          <span className="white-text">Añadir</span>
          <i className="material-icons right">add</i>
        </button>
      </div>
      <div className="col s12 m3 center blue-text"><h4 className="blue-text">s./{ item.price }</h4></div>
    </div>
  );
}

export default CartItem