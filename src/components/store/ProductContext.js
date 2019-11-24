import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    { name: 'Car', price: 10, img: 'products/car.png', alt: 'car', id: 1 },
    { name: 'Airplane', price: 15, img: 'products/airplane.png', alt: 'airplane', id: 2 },
    { name: 'Worm', price: 20, img: 'products/worm.png', alt: 'worm', id: 3 },
    { name: 'Truck', price: 25, img: 'products/truck.png', alt: 'truck', id: 4 },
    { name: 'Bus', price: 30, img: 'products/bus.png', alt: 'bus', id: 5 },
    { name: 'Train', price: 35, img: 'products/train.png', alt: 'train', id: 6 },
    { name: 'Monkey', price: 40, img: 'products/monkey.png', alt: 'monkey', id: 7 },
    { name: 'Teddy Bear', price: 45, img: 'products/bear.png', alt: 'teddy', id: 8 }
  ])

  return(
    <ProductContext.Provider value={{products}}>
      { props.children }
    </ProductContext.Provider> 
  );
}

export default ProductContextProvider