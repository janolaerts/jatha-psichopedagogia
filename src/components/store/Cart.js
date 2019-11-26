import React, { useContext, useState } from 'react'
import uuid from 'uuid/v1'
import { Link } from 'react-router-dom'
import { StoreContext } from './StoreContext'
import CartItem from './CartItem'

const Cart = () => {

  let { added } = useContext(StoreContext);
  const { setCheckoutTotal } = useContext(StoreContext);
  added = [...new Set(added)];

  let total = 0;
  const calculateTotal = () => {
    added.forEach(item => {
      total = total + item.price;
      setCheckoutTotal(total);
    })
  }
  calculateTotal();
 
  return (
    <div className="container cart">
      <h1 className="blue-text center" style={{ textDecoration: 'underline', margin: '0' }}>Carrito</h1>
      { added.map(item => {
        return (
          <CartItem item={item} key={uuid()} />
        )
      }) }
      <div className="row" style={{ marginTop: '10px', borderBottom: '2px solid #2196f3' }}>
        <div className="col s12 m6 blue white-text center"><h4>Precio total:</h4></div>
        <div className="col s12 m6 blue white-text center"><h4>s./{ total }</h4></div>
      </div>
      <div className="row">
        <div className="col s12">
          <Link to="/store">
            <button className="btn blue left">
              <span>Tienda</span>
              <i className="material-icons left">keyboard_arrow_left</i>
            </button>
          </Link>
          <Link to="/checkout">
            <button className="btn blue right">
              <span>Checkout</span>
              <i className="material-icons left">credit_card</i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart