import React, { useState } from 'react';
import './Registration.css';
import img8 from '../../assets/img/mt-1993-img05.jpg';
import logo from '../../assets/img/ws.png';
import { FaFacebook, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

export const Registration = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (name.length < 4) {
            alert("Name must be at least 4 characters");
        } else if (mobile.length !== 11) {
            alert("Mobile must be at least 11 characters");
        } else {
            const url = "http://localhost/WDPF/react/wedding-solutions/API/createuser.php";

            let fData = new FormData();
            fData.append('name',name);
            fData.append('mobile', mobile);
            fData.append('email',email);
            fData.append('address',address);
            fData.append('password',password);

            axios.post(url, fData).then(Response=>alert(Response.data)).catch(Error=> alert(Error));
        }
    };

    return (
        <div className=' '>
            <div className='container my-5 '>
                <div className='row regform'>
                    <div className='col-md-5 p-5'>

                        <img src={logo} class="simg1 img-fluid" alt="" />
                        <p className='text-center fs-1 txclr fnt2'>Registration Form</p>
                        
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" placeholder="mobile no" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            <label for="floatingInput">Mobile</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <label for="floatingInput">Address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Re-Type Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            {/* <input type="submit" class="form-control" id="floatingPassword" value={'Submit'} /> */}

                            <button type='button' className='btns' onClick={handleSubmit} >Submit</button>
                        </div>
                        <div className='text-center mb-3 txclr'>

                            <span className=''>Have an Account Go to <Link to='/login'>LogIn</Link> Or Registration With Social Site</span>
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
