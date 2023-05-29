import React, { useState,useEffect } from 'react'
import './Login.css';
import { FaFacebook, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import img8 from '../../assets/img/mt-1993-img05.jpg';
import logo from '../../assets/img/ws.png';
import { useNavigate, Link } from "react-router-dom";
import {  signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import auth from '../../firebase/FirebaseConfig';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  useEffect(()=>{
      onAuthStateChanged(auth,(user)=> {
          if(user){
              navigate("/")
          }
      })
  },[navigate])

  // login handel
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,email,password)
    .then( (userCredential) => {
        let user = userCredential.user;
        if(user){
            navigate("/")
        }
    })
    .catch((error)=> {
        alert(error.message)
    })

}
  return (
    <div className=' '>
      <div className='container my-5 '>
        <div className='row regform'>
          <div className='col-md-5 p-5 my-auto'>

            <img src={logo} className="simg1 img-fluid" alt="" />
            <p className='text-center fs-1 txclr fnt2'>LogIn Form</p>

            <form onSubmit={handleLogin}>


              <div className="form-floating mb-3">
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" value={password} id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-floating mb-3">
                <input type="submit" className="btns" id="floatingPassword" value={'LogIn'} />
                {/* <button type='button' className='btns' >Submit</button> */}
              </div>
            </form>
            <div className='text-center mb-3 txclr'>

              <span className=''>Go to <Link to='/registration'>Registration</Link> Or LogIn With Social Site</span>
              <div className="">
                <a href="#" className="me-2"><FaFacebook size={25} /></a>
                <a href="#" className="me-2"><FaGooglePlusG size={35} /></a>
                <a href="#" className=""><FaLinkedinIn size={25} /></a>
              </div>
              <span></span>
            </div>
          </div>
          <div className='col-md-7'>
            <img src={img8} className="simg img-fluid" alt="" />

          </div>
        </div>
        
      </div>
    </div>
  )
}
