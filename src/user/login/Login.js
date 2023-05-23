import React, { useState } from 'react'
import './Login.css';
import { FaFacebook, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import img8 from '../../assets/img/mt-1993-img05.jpg';
import logo from '../../assets/img/ws.png';
import { Outlet, Link } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validUser, setvalidUser] = useState(localStorage.getItem("validuser") || false);
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    // 
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost/round_53/React/wedding-solutions/API/login.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            if(data.success){ localStorage.setItem("validuser",true); setvalidUser(true);}
            else{ localStorage.removeItem("validuser"); setvalidUser(false);}
          } else {
            // Login failed, handle the error
            console.log('Login failed');
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };  
    // 
    return (
        <div className=' '>
        <div className='container my-5 '>
            <div className='row regform'>
                <div className='col-md-5 p-5 my-auto'>

                    <img src={logo} class="simg1 img-fluid" alt="" />
                    <p className='text-center fs-1 txclr fnt2'>LogIn Form</p>

                   
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    
                    <div class="form-floating mb-3">
                        {/* <input type="submit" class="form-control" id="floatingPassword" value={'Submit'} /> */}
                        <button type='button' className='btns' >Submit</button>
                    </div>
                    <div className='text-center mb-3 txclr'>

                        <span className=''>Go to <Link to='/registration'>Registration</Link> Or LogIn With Social Site</span>
                        <div class="">
                            <a href="#" class="me-2"><FaFacebook size={25} /></a>
                            <a href="#" class="me-2"><FaGooglePlusG size={35} /></a>
                            <a href="#" class=""><FaLinkedinIn size={25} /></a>
                        </div>
                        <span></span>
                    </div>
                </div>
                <div className='col-md-7'>
                    <img src={img8} class="simg img-fluid" alt="" />

                </div>
            </div>
            <hr/>
            <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
        </div>
    </div>
    )
}
