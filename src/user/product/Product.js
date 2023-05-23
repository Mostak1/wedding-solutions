import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 30px;
`;

const Category = styled.div`
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h2`
  color: #333;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductName = styled.span`
  margin-right: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
`;

const ProductComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Container>
      <Category>
        <CategoryTitle>Getes</CategoryTitle>
        <ProductList>
          {/* Products in Getes category */}
          <ProductItem>
            <ProductName>Product 1</ProductName>
            <AddToCartButton onClick={() => handleAddToCart('Product 1')}>
              Add to Cart
            </AddToCartButton>
          </ProductItem>
          {/* Add more products in the same format */}
          {/* ... */}
        </ProductList>
      </Category>
      <Category>
        <CategoryTitle>State</CategoryTitle>
        <ProductList>
          {/* Products in State category */}
          <ProductItem>
            <ProductName>Product 1</ProductName>
            <AddToCartButton onClick={() => handleAddToCart('Product 1')}>
              Add to Cart
            </AddToCartButton>
          </ProductItem>
          {/* Add more products in the same format */}
          {/* ... */}
        </ProductList>
      </Category>
      <Category>
        <CategoryTitle>Caterings</CategoryTitle>
        <ProductList>
          {/* Products in Caterings category */}
          <ProductItem>
            <ProductName>Product 1</ProductName>
            <AddToCartButton onClick={() => handleAddToCart('Product 1')}>
              Add to Cart
            </AddToCartButton>
          </ProductItem>
          {/* Add more products in the same format */}
          {/* ... */}
        </ProductList>
      </Category>
      {/* Display cart items */}
      <div>
        <h3>Cart</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ProductComponent;
