import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import logo from '../assets/img/ws.png'
import { FaReact,FaFacebook,FaTwitter,FaGoogle,FaInstagram,FaLinkedin,FaGithub,FaHome,FaEnvelope,FaPhone,FaPrint } from 'react-icons/fa';

export const Layout = () => {
    const bgclr1 ='rgba(0, 0, 0, 0.025)';
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand cll" href="#" to='/'><img width="270px" src={logo} alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to='/' >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/about' >About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/contact' >Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/product' >Service</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" href="#" to='login'>Login</Link></li>
                                    <li><Link class="dropdown-item" href="#" to='registration'>Registration</Link></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        {/* {/*{<!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->} */} 
                    </div>

                    <div class="nav-item">
                        {/* {/*{<!-- Button trigger modal -->} */} 
                        <button type="button" class="btn btnsr" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Send Request
                        </button>
                    </div>
                </div>
            </nav>


            {/* {/*{<!-- Modal -->} */} 
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                        <button type="button" class="btn-close close_btn" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                        <div class="modal-header">
                            <p class="modal-title mx-auto titleclr" id="exampleModalLabel"><span class="title text-center d-block fs-1">Request A Callback</span> <span>We can call you in 30 seconds, just enter  your number below</span></p><br />
                        </div>
                        <p class="titleclr"></p>
                        <div class="modal-body">
                            <form id="myForm">
                                {/* {/*{<!-- <label class="form-control" for="name">Name:</label> -->} */} 
                                <input class="form-control mb-2" type="text" id="name" name="name" placeholder="Name*" required />
                                {/* {/*{<!-- <label class="form-control" for="email">Email:</label> -->} */} 
                                <input class="form-control mb-2" type="email" id="email" name="email" placeholder="email@gmail.com" required />
                                {/* {/*{<!-- <label class="form-control" for="phone">Phone:</label> -->} */} 
                                <input class="form-control mb-2" type="tel" id="phone" name="phone" placeholder="01777777777" required />
                                <button class="form-control btnsr mb-2" type="submit">Submit</button>
                            </form>

                        </div>
                        <div class="modal-footer">
                            {/* {/*{<!-- <button type="button" class="btn btn-primary">Save changes</button> -->} */} 
                        </div>
                    </div>
                </div>
            </div>

            {/* ***************************
otlate showing here
*********************************/}
            <Outlet />

            {/* ***************************
Footer showing here
*********************************/}
            {/*{<!-- Footer -->} */}
            <footer class="text-center text-lg-start bg-white text-muted">
                {/*{<!-- Section: Social media -->} */}
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/*{<!-- Left -->} */}
                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/*{<!-- Left -->} */}

                    {/*{<!-- Right -->} */}
                    <div>
                        <a href="" class="me-4 fclr ">
                            <FaFacebook size={30} color="#BE9A82" /> 
                        </a>
                        <a href="" class="me-4 link-secondary">
                           <FaTwitter size={30} color="#BE9A82" />
                        </a>
                        <a href="" class="me-4 link-secondary">
                            <FaGoogle size={30} color="#BE9A82" />
                        </a>
                        <a href="" class="me-4 link-secondary">
                            <FaInstagram size={30} color="#BE9A82" />
                        </a>
                        <a href="" class="me-4 link-secondary">
                            <FaLinkedin size={30} color="#BE9A82" />
                        </a>
                        <a href="" class="me-4 link-secondary">
                            <FaGithub size={30} color="#BE9A82" />
                        </a>
                    </div>
                    {/*{<!-- Right -->} */}
                </section>
                {/*{<!-- Section: Social media -->} */}

                {/*{<!-- Section: Links  -->} */}
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        {/*{<!-- Grid row -->} */}
                        <div class="row mt-3">
                            {/*{<!-- Grid column -->} */}
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/*{<!-- Content -->} */}
                                <img width="270px" src={logo} alt=""/>
                                    <p>
                                        Wedding Solutions is a professional event-planning and catering service that organizes both corporate and personal events. We’ll make your special day long-remembered!
                                    </p>
                            </div>
                            {/*{<!-- Grid column -->} */}

                            {/*{<!-- Grid column -->} */}
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/*{<!-- Links -->} */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Engagement</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Corporate Event</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Business Meeting</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Birthday Party</a>
                                </p>
                            </div>
                            {/*{<!-- Grid column -->} */}

                            {/*{<!-- Grid column -->} */}
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/*{<!-- Links -->} */}
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help</a>
                                </p>
                            </div>
                            {/*{<!-- Grid column -->} */}

                            {/*{<!-- Grid column -->} */}
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/*{<!-- Links -->} */}
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><FaHome size={20}/>273/7 Shenpara Parbata Dhaka-1216</p>
                                <p>
                                    <FaEnvelope size={20}/>
                                    tech2click@example.com
                                </p>
                                <p><FaPhone size={20}/> +88 01 234 567 88</p>
                                <p><FaPrint size={20}/> +88 01 234 567 89</p>
                            </div>
                            {/*{<!-- Grid column -->} */}
                        </div>
                        {/*{<!-- Grid row -->} */}
                    </div>
                </section>
                {/*{<!-- Section: Links  -->} */}

                {/*{<!-- Copyright -->} */}
                <div class="text-center p-4" style={{backgroundColor:bgclr1}}>
                    © 2023 Copyright:
                    <a class="text-reset fw-bold" href="">Md Mostak Ahmed</a>
                </div>
                {/* {/*{<!-- Copyright -->} */} 
            </footer>
            {/* {/*{<!-- Footer -->} */} 

        </div>
    )
}
