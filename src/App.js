
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Layout } from './user/Layout';
import { Home } from './user/home/Home';
import { Contact } from './user/contact/Contact';
import { Nopage } from './user/Nopage';
import { About } from "./user/about/About";
import { Login } from "./user/login/Login";
import { Registration } from "./user/registration/Registration";
import { Gatedecoration } from "./user/product/Gatedecoration";
import { Stagedecoration } from "./user/product/Stagedecoration";
import { Halldec } from "./user/product/Halldec";
import { Photoshootdec } from "./user/product/Photoshootdec";
import { Selecteditem } from "./user/product/Selecteditem";
//admin
import PrivateRoute from "./Privateroute";
import DashLayout from "./admin/DashLayout";
import DashHome from "./admin/pages/DashHome";
import AddProducts from "./admin/pages/AddProducts";
import User from "./admin/pages/User";
import { Submititem } from "./user/product/Submititem";
import { UserDetails } from "./user/UserDetails";
import { Editprofile } from "./user/Editprofile";

// import { FaReact } from 'react-icons/fa';



function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to My React App</h1>
      <FaReact size={320} color="blue" /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="gatedecoration" element={<Gatedecoration />} />
            <Route path="stage" element={<Stagedecoration />} />
            <Route path="hall" element={<Halldec />} />
            <Route path="photoshoot" element={<Photoshootdec />} />
            <Route path="selected" element={<Selecteditem />} />
            <Route path="submititem" element={<Submititem />} />
            <Route path="userDetails" element={<UserDetails />} />
            <Route path="editprofile" element={<Editprofile />} />
            <Route path="*" element={<Nopage />} />
          </Route>
          <Route path="dashboard" element={
            <PrivateRoute>
              <DashLayout />
            </PrivateRoute>
          }>
            <Route index element={<DashHome />} />
            <Route path="add-product" element={<AddProducts />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
