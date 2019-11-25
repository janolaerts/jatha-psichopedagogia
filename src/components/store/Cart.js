import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'
import uuid from 'uuid/v1'

const Cart = () => {

  const { added } = useContext(StoreContext);
  console.log(added);

  let total;

  const calculateTotal = () => {
    added.forEach(item => {
      return total = total + item.price;
    })
  }

  console.log(total);
 
  return (
    <div className="container cart">
      <h1 className="blue-text center" style={{ textDecoration: 'underline', margin: '0' }}>Cart</h1>
      { added.map(item => {
        return (
          <div className="row" style={{ marginTop: '10px', borderBottom: '2px solid #2196f3' }} key={uuid()} >
            <div className="col s12 m3 center blue-text"><h4>{ item.name }</h4></div>
            <div className="col s12 m3 center blue-text"><h4 className="blue-text">-</h4></div>
            <div className="col s12 m3 center blue-text"><h4 className="blue-text">+</h4></div>
            <div className="col s12 m3 center blue-text"><h4 className="blue-text">{ item.price }</h4></div>
          </div>
        )
      }) }

    </div>
  );
}

export default Cart