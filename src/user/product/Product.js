import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost/WDPF/react/wedding-solutions/API/productapi.php');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  //add to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <Container>
      <div className='row'>
        <div className='col-md-9'>


          <Category>
            <CategoryTitle>Getes</CategoryTitle>
            <ProductList>
              {/* Products in Getes category */}
              <ProductItem>
              <h1>Product List</h1>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  {product.title}
                  
                  {product.images}
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </li>
              ))}
            </ul>
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
        </div>
        <div className='col-md-3'>
          {/* <h3>Cart</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
          <div>
            
            <h2>Cart</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductComponent;
