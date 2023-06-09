import React, { useState, useEffect } from "react";
import "./Registration.css";
import img8 from "../../assets/img/mt-1993-img05.jpg";
import logo from "../../assets/img/ws.png";
import { FaFacebook, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../../firebase/FirebaseConfig";

export const Registration = () => {
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, [navigate]);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === rpassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          if (user) {
            const url ="http://localhost/WDPF/react/wedding-solutions/API/createuser.php";
            // const url = "http://localhost/round_53/React/wedding-solutions/API/createuser.php";

            let fData = new FormData();
            fData.append("name", name);
            fData.append("mobile", mobile);
            fData.append("email", email);
            fData.append("address", address);
            fData.append("password", password);

            axios
              .post(url, fData)
              .then((Response) => alert(Response.data))
              .catch((Error) => alert(Error));

            alert("User Register SuccessFully");
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("User Password Not Match");
    }
  };

  return (
    <div className=" ">
      <div className="container my-5 ">
        <div className="row regform">
          <div className="col-md-5 p-5">
            <img src={logo} className="simg1 img-fluid" alt="" />
            <p className="text-center fs-1 txclr fnt2">Registration Form</p>
            <form onSubmit={handleRegister}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="mobile no"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <label for="floatingInput">Mobile</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                <label for="floatingInput">Address</label>
                            </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={rpassword}
                  onChange={(e) => setRpassword(e.target.value)}
                />
                <label for="floatingPassword">Re-Type Password</label>
              </div>
              <div className="form-floating mb-3">
                <input type="submit" className="btns" value="Register" />

                {/* <button type='button' className='btns' onClick={handleSubmit} >Submit</button> */}
              </div>
            </form>
            <div className="text-center mb-3 txclr">
              <span className="">
                Have an Account Go to <Link to="/login">LogIn</Link> Or
                Registration With Social Site
              </span>
              <div className="">
                <a href="#" className="me-2">
                  <FaFacebook size={25} />
                </a>
                <a href="#" className="me-2">
                  <FaGooglePlusG size={35} />
                </a>
                <a href="#" className="">
                  <FaLinkedinIn size={25} />
                </a>
              </div>
              <span></span>
            </div>
          </div>
          <div className="col-md-7">
            <img src={img8} className="simg img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
