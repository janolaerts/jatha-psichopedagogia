import React from 'react';

const ProductDetails = (props) => {

  const { product } = props;
  console.log(product);

  return (
    <h1>Hello from ProductDetails</h1>
  );
}

export default ProductDetails