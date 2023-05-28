import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Decorations = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const imgUrl = 'http://localhost/WDPF/react/wedding-solutions/src/assets/picture/gate/';
  // data get from api
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost/WDPF/react/wedding-solutions/API/gateapi.php');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  //add to cart from product

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  //send data to database from cart list
  const sendCartItemsToDatabase = async () => {
    try {
      setIsSending(true);
      const response = await axios.post('http://localhost/WDPF/react/wedding-solutions/API/cartapi.php', cartItems);
      console.log('Cart items sent to database:', response.data);
      setIsSending(false);
    } catch (error) {
      console.error('Error sending cart items to database:', error);
      setIsSending(false);
    }
  };



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">

            <h1>Wedding Gate Design</h1>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  {product.title}
                  <img src={imgUrl+product.images} alt="" width={300} />
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </li>
              ))}
            </ul>


          </div>
          <div className="col-md-3">

            <h2>Cart</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.title}<img src={imgUrl+item.images} alt="" width={200} /></li>
              ))}
            </ul>
            <button onClick={sendCartItemsToDatabase} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send to Database'}
            </button>

          </div>
        </div>
      </div>
    </>
  );

}

