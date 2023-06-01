import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import {  Link, useNavigate } from "react-router-dom";
import auth from '../../firebase/FirebaseConfig';

export const UserName = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [user_email, setUser_email] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true)
        setUser_email(user.email);
      } else {
        setIsLogin(false)
        setUser_email(null);
      }
    })
  }, [])


  
  // data get from api
  const dataApi = 'http://localhost/WDPF/react/wedding-solutions/API/alltableapi.php';

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




  return (
    <div>
      {filteredUsers.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  )
};

