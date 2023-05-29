import React, { useState } from 'react';
import axios from 'axios';

export const Sellecteditem = () => {

    const [isSending, setIsSending] = useState(false);

    const scartItems = JSON.parse(localStorage.getItem('scartItems')) || [];
    const phcartItems = JSON.parse(localStorage.getItem('phcartItems')) || [];
    const gcartItems = JSON.parse(localStorage.getItem('gcartItems')) || [];
    const hcartItems = JSON.parse(localStorage.getItem('hcartItems')) || [];

    const allCartItems = [...scartItems, ...phcartItems, ...gcartItems, ...hcartItems];

    // console.log(scartItems);
    //image url
    const gimgUrl = 'http://localhost/WDPF/react/wedding-solutions/src/assets/picture/gate/';
    const simgUrl = 'http://localhost/WDPF/react/wedding-solutions/src/assets/picture/stage/';
    const phimgUrl = 'http://localhost/WDPF/react/wedding-solutions/src/assets/picture/photoshoot/';
    const himgUrl = 'http://localhost/WDPF/react/wedding-solutions/src/assets/picture/hall/';


    //data submitted function
    const submitCartItemsToDatabase = () => {
        const xhr = new XMLHttpRequest();
        const url = 'http://localhost/WDPF/react/wedding-solutions/API/ordersubmit.php';
        const method = 'POST';
      
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
      
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              console.log('Cart items submitted successfully');
            } else {
              console.error('Error submitting cart items:', xhr.status);
            }
          }
        };
      
        const data = JSON.stringify(allCartItems);
        xhr.send(data);
      };

      //using axios
      const sendCartItemsToDatabase = () => {
        setIsSending(true);
      
        axios.post('http://localhost/WDPF/react/wedding-solutions/API/ordersubmit.php', allCartItems)
          .then(response => {
            console.log('Cart items sent to database:', response.data);
            setIsSending(false);
          })
          .catch(error => {
            console.error('Error sending cart items to database:', error);
            setIsSending(false);
          });
      };
      
      
    return (
      <>
        <div className="container">
  
          <div className="row">
            <div className="fs-2 fw-bold fnt2 text-center my-3">
               

                Sellected Stage Items
               
                </div>
            {scartItems.map((product) => (
              <div class="col-md-6 mb-3">
                <div class="card h-100">
                  <img src={simgUrl + product.images} height={400} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title fs-4 fnt3">{product.title}</h5>
                    <p class="card-text"></p>
                  </div>
                  {/* <div class="card-footer text-center">
                    
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="fs-2 fw-bold fnt2 text-center my-3">Sellected Gate Items</div>
            {gcartItems.map((product) => (
              <div class="col-md-6 mb-3">
                <div class="card h-100">
                  <img src={gimgUrl + product.images} height={400} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title fs-4 fnt3">{product.title}</h5>
                    <p class="card-text"></p>
                  </div>
                  {/* <div class="card-footer text-center">
                    
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="fs-2 fw-bold fnt2 text-center my-3">Sellected Hall Items</div>
            {hcartItems.map((product) => (
              <div class="col-md-6 mb-3">
                <div class="card h-100">
                  <img src={himgUrl + product.images} height={400} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title fs-4 fnt3">{product.title}</h5>
                    <p class="card-text"></p>
                  </div>
                  {/* <div class="card-footer text-center">
                    
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="fs-2 fw-bold fnt2 text-center my-3">Sellected Photoshoot Items</div>
            {phcartItems.map((product) => (
              <div class="col-md-6 mb-3">
                <div class="card h-100">
                  <img src={phimgUrl + product.images} height={400} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title fs-4 fnt3">{product.title}</h5>
                    <p class="card-text"></p>
                  </div>
                  {/* <div class="card-footer text-center">
                    
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <button className='btn btn-outline-dark' onClick={sendCartItemsToDatabase} disabled={isSending}>
  {isSending ? 'Sending...' : 'Save'}
</button>

          <button type="submit" onClick={submitCartItemsToDatabase}>Submit Data</button>
        </div>
        
      </>
    )
}
