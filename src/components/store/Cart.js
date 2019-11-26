import React, { useContext } from 'react'
import uuid from 'uuid/v1'
import { StoreContext } from './StoreContext'
import CartItem from './CartItem'

const Cart = () => {

  const { added } = useContext(StoreContext);

  let total = 0;
  const calculateTotal = () => {
    added.forEach(item => {
      total = total + item.price;
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
    </div>
  );
}

export default Cart