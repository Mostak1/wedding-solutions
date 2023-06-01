import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import {  Link, useNavigate } from "react-router-dom";
import auth from '../../firebase/FirebaseConfig';


export const Submititem = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  // console.log(orders.id);
  //for login confirmation
  const [isLogin, setIsLogin] = useState(false);
  const [user_email, setUser_email] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true)
        // const email = user.email;
        //const uid = user.uid;
        //console.log(email);
        setUser_email(user.email);
      } else {
        setIsLogin(false)
        setUser_email(null);
      }
    })
  }, [])


  const imgUrl = 'http://localhost/WDPF/react/wedding-solutions/src/assets/picture/all/';
  // data get from api
  const dataApi = 'http://localhost/WDPF/react/wedding-solutions/API/alltableapi.php';

  //get data for orders table..
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(dataApi);
        setOrders(response.data.orders);
        console.log(response.data.orders.u_email);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);
  // Filter the products based on the logged-in user's email for orders table
  const filteredOrders = orders.filter(
    (order) => order.u_email === user_email
  );
  //get data for users table..
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(dataApi);
        setUsers(response.data.users);
        console.log(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchOrders();
  }, []);
  // Filter the products based on the logged-in user's email for users table
  
  const filteredUsers = users.filter(
    (users) => users.email === user_email
  );
  //delete order
  const deleteOrderItem = async (orderId) => {
    try {
      await axios.delete(`http://localhost/WDPF/react/wedding-solutions/API/deleteOrder.php?orderId=${orderId}`);
      // Remove the deleted order item from the state
      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error('Error deleting order item:', error);
    }
  };

  return (

    <>
      <div className="container">
        {isLogin &&
          <h1 className='fnt2 text-center'>Selected Design of 
          {filteredUsers.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
          </h1>
        }
        {!isLogin &&
          <h1 className='fnt2 text-center'><Link>LogIn</Link> to Show your selected Design</h1>
        }
        <div className="row">

          {filteredOrders.map((product) => (
            <div key={product.id} class="col-md-6 mb-3">
              <div class="card h-100">
                <img src={imgUrl + product.p_images} height={400} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title fs-4 fnt3">{product.p_name}</h5>
                  <p class="card-text"></p>
                </div>
                <div class="card-footer text-center">
                  <button
                    onClick={() => deleteOrderItem(product.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}


