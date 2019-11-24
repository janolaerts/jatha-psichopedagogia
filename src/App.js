import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Store from './components/store/Store';
import Footer from './components/Footer';
import ProductContextProvider from './components/store/ProductContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <ProductContextProvider>
          <Route exact path="/Store" component={Store} />
        </ProductContextProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
