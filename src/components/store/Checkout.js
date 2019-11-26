import React, { useState, useContext } from 'react';
import { StoreContext } from './StoreContext';

const Checkout = () => {

  const { checkoutTotal } = useContext(StoreContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [card, setCard] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setCard('');
  }
  
  return (
    <div className="container checkout">
      <h1 className="blue-text center" style={{ textDecoration: 'underline', margin: '0' }}>Checkout para s./{ checkoutTotal }</h1>
        <form className="center" onSubmit={handleSubmit}>
          <div className="input-field name">
            <i className="material-icons prefix blue-text">person</i>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" />
            <label className="blue-text" htmlFor="name">Su nombre</label>
          </div>
          <div className="input-field email">
            <i className="material-icons prefix blue-text">email</i>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
            <label className="blue-text" htmlFor="email">Su correo</label>
          </div>
          <div className="input-field credit-card">
            <i className="material-icons prefix blue-text">credit_card</i>
            <input value={card} onChange={(e) => setCard(e.target.value)} type="number" id="card" />
            <label className="blue-text" htmlFor="card">Su número de tarjeta</label>
          </div>
          <button className="btn blue">Pagar</button>
        </form>
    </div>
  );
}

export default Checkout