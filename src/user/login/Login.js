import React, { useState } from 'react'
import './Login.css';
import { FaFacebook, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import img8 from '../../assets/img/mt-1993-img05.jpg';
import logo from '../../assets/img/ws.png';
import { Outlet, Link } from "react-router-dom";

export const Login = () => {
 
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
        </div>
    </div>
    )
}
