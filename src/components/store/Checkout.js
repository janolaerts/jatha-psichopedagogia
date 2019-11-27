import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from './StoreContext';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
//import StripeCheckout from 'react-stripe-checkout'

const Checkout = () => {

  const { checkoutTotal } = useContext(StoreContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [docType, setDocType] = useState('');
  const [docNumber, setDocNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, cardNumber, securityCode, expirationMonth, expirationYear, docType, docNumber);

    setName('');
    setEmail('');
    setCardNumber('');
    setSecurityCode('');
    setExpirationMonth('');
    setExpirationYear('');
    setDocType('');
    setDocNumber('');
  }

  useEffect(() => {
    let select = document.querySelectorAll('select');
    M.FormSelect.init(select);
  })
  
  return (
    <div className="container checkout">
      <h1 className="blue-text center" style={{ textDecoration: 'underline', margin: '0' }}>A pagar: s./{ checkoutTotal }</h1>
        <form className="center" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col s12">
              <div className="input-field email">
                <i className="material-icons prefix blue-text">email</i>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
                <label className="blue-text" htmlFor="email">Su correo</label>
              </div>
            </div>
            <div className="col s12">
              <div className="input-field credit-card">
                <i className="material-icons prefix blue-text">credit_card</i>
                <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} type="number" id="cardNumber" data-checkout="cardNumber" />
                <label className="blue-text" htmlFor="cardNumber">Su número de tarjeta</label>
              </div>
            </div>
            <div className="col s12">
              <div className="input-field ccv">
                <i className="material-icons prefix blue-text">lock</i>
                <input value={securityCode} onChange={(e) => setSecurityCode(e.target.value)} type="number" id="securityCode" data-checkout="securityCode" />
                <label className="blue-text" htmlFor="securityCode">Su número de seguridad</label>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="input-field expirationMonth">
                <i className="material-icons prefix blue-text">calendar_today</i>
                <input value={expirationMonth} onChange={(e) => setExpirationMonth(e.target.value)} type="number" id="expirationMonth" data-checkout="expirationMonth" />
                <label className="blue-text" htmlFor="expirationMonth">Mes de expiración</label>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="input-field expirationYear">
                <i className="material-icons prefix blue-text">calendar_today</i>
                <input value={expirationYear} onChange={(e) => setExpirationYear(e.target.value)} type="number" id="expirationYear" data-checkout="expirationYear" />
                <label className="blue-text" htmlFor="expirationYear">Año de expiración</label>
              </div>
            </div>
            <div className="col s12">
              <div className="input-field name">
                <i className="material-icons prefix blue-text">person</i>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" data-checkout="name" />
                <label className="blue-text" htmlFor="name">Nombre del dueño de la tarjeta</label>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="input-field docType">
                <i className="material-icons prefix blue-text">format_list_numbered</i>
                <select value={docType} className="icons" onChange={(e) => setDocType(e.target.value)} type="text" id="docType" data-checkout="docType">
                  <option>Something</option>
                </select>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="input-field docNumber">
                <i className="material-icons prefix blue-text">format_list_numbered</i>
                <input value={docNumber} onChange={(e) => setDocNumber(e.target.value)} type="number" id="docNumber" data-checkout="docNumber" />
                <label className="blue-text" htmlFor="docNumber">Número de documento</label>
              </div>
            </div>
          </div>
          <button className="btn blue">Pagar</button>
        </form>
    </div>
  );
}

export default Checkout