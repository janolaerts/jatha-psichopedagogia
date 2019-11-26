import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'

const CartItem = (props) => {

  const item = props.item;
  const { itemToIncrement, setItemToIncrement } = useContext(StoreContext);
  let { amount, setAmount } = useContext(StoreContext);

  return (
    <div className="row" style={{ marginTop: '10px', borderBottom: '2px solid #2196f3' }} >
      <div className="col s12 m3 center blue-text"><h4>{ item.name }</h4></div>
      <div className="col s6 m3 center blue-text remove">
        <button className="btn blue">
          <span className="white-text">Sacar</span>
          <i className="material-icons left">remove</i>
        </button>
      </div>
      <div className="col s6 m3 center blue-text add">
        <button className="btn blue" onClick={() => {
          setAmount(amount + item.price);
          setItemToIncrement({...item, price: item.price + amount });
          console.log(amount);
        }}>
          <span className="white-text">Añadir</span>
          <i className="material-icons right">add</i>
        </button>
      </div>
      <div className="col s12 m3 center blue-text"><h4 className="blue-text">s./{ itemToIncrement.price ? itemToIncrement.price : item.price }</h4></div>
    </div>
  );
}

export default CartItem