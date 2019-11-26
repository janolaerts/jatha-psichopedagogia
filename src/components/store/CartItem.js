import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'

const CartItem = (props) => {

  const item = props.item;
  const { itemToIncrement, setItemToIncrement } = useContext(StoreContext);
  let { amount, setAmount } = useContext(StoreContext);
  let { quantity, setQuantity } = useContext(StoreContext);

  const addQuantity = () => {
    if(amount === 0){
      setAmount(item.price * 2);
    }
    else {
      setAmount(amount + item.price);
    }
    setQuantity(quantity + 1);
    setItemToIncrement({...item, quantity: quantity + 1, price: item.price + amount });
  }

  return (
    <div className="row" style={{ marginTop: '10px', borderBottom: '2px solid #2196f3' }} >
      <div className="col s12 m3 center blue-text"><h4>{ quantity } { item.name }</h4></div>
      <div className="col s6 m3 center blue-text remove">
        <button className="btn blue">
          <span className="white-text">Sacar</span>
          <i className="material-icons left">remove</i>
        </button>
      </div>
      <div className="col s6 m3 center blue-text add">
        <button className="btn blue" onClick={() => addQuantity()}>
          <span className="white-text">Añadir</span>
          <i className="material-icons right">add</i>
        </button>
      </div>
      <div className="col s12 m3 center blue-text"><h4 className="blue-text">s./{ amount ? amount : item.price }</h4></div>
    </div>
  );
}

export default CartItem