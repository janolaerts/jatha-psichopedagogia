import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([
    { name: 'Car', price: 10, img: '../assets/products/car.jpg', id: 1 },
    { name: 'Airplane', price: '15', img: '../assets/products/airplane.jpg', id: 2 }
  ])

  return(
    <ProductContext.Provider value={{products}}>
      { props.children }
    </ProductContext.Provider> 
  );
}

export default ProductContextProvider