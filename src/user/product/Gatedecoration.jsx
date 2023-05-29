import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Gatedecoration = () => {
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
  
    const sendCartItemsToDatabase = async () => {
      try {
        setIsSending(true);
        // Save cart items to local storage
        localStorage.setItem('gcartItems', JSON.stringify(cartItems));
  
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
  
              <h1 className='fnt2'>Wedding Gate Design</h1>
              <div className="row">
  
                {products.map((product) => (
                  <div class="col-md-6 mb-3">
                    <div class="card h-100">
                      <img src={imgUrl + product.images} height={400} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title fs-4 fnt3">{product.title}</h5>
                        <p class="card-text"></p>
                      </div>
                      <div class="card-footer text-center">
                        <button className='btn btn-outline-secondary px-4' onClick={() =>addToCart(product)}>Add to Cart</button>
                        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
                      </div>
                    </div>
                  </div>
                ))}
                {/* <li key={product.id}>
                    {product.title}
                    <img src={imgUrl+product.images} alt="" width={300} />
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                  </li> */}
  
              </div>
  
            </div>
            <div className="col-md-3">
  
              <h2 className='fnt2'>Cart</h2>
              <ul>
                {cartItems.map((item, index) => (
                  <div class="col mb-3">
                    <div class="card h-100">
                      <img src={imgUrl + item.images} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title ">{item.title}</h5>
                        <p class="card-text"></p>
                      </div>
  
                    </div>
                  </div>
                  // <li key={index}>{item.title}<img src={imgUrl + item.images} alt="" width={200} /></li>
                ))}
              </ul>
              <button className='btn btn-outline-dark' onClick={sendCartItemsToDatabase} disabled={isSending}>
                {isSending ? 'Sending...' : 'Save'}
              </button>
  
            </div>
          </div>
        </div>
      </>
    );
  
}
