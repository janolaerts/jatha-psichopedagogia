import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([
    { name: 'Car', price: 10, img: '../../assets/products/car.jpg', id: 1 },
    { name: 'Airplane', price: 15, img: '../../assets/products/airplane.jpg', id: 2 },
    { name: 'Worm', price: 20, img: '../../assets/products/worm.jpg', id: 3 },
    { name: 'Truck', price: 25, img: '../../assets/products/truck.jpg', id: 4 },
    { name: 'Bus', price: 30, img: '../../assets/products/bus.jpg', id: 5 },
    { name: 'Train', price: 35, img: '../../assets/products/train.jpg', id: 6 },
    { name: 'Monkey', price: 40, img: '../../assets/products/monkey.jpg', id: 7 },
    { name: 'Teddy Bear', price: 45, img: '../../assets/products/bear.jpg', id: 8 }
  ])

  return(
    <ProductContext.Provider value={{products}}>
      { props.children }
    </ProductContext.Provider> 
  );
}

export default ProductContextProvider