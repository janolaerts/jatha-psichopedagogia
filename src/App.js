import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Store from './components/store/Store';
import Footer from './components/Footer';
import StoreContextProvider from './components/store/StoreContext';
import ProductDetails from './components/store/ProductDetails';
import Cart from './components/store/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <StoreContextProvider>
          <Route exact path="/store" component={Store} />
          <Route exact path="/details" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
        </StoreContextProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
