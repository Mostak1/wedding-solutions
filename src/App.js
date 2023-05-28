
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';

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
import ProductComponent from "./user/product/Product";
<<<<<<< HEAD
import { Decorations } from "./user/product/Decorations";
=======
>>>>>>> b472591b9ca805c85da4382014a7fa2536d796c5

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
<<<<<<< HEAD
          <Route path="decorations" element={<Decorations />} />
=======
>>>>>>> b472591b9ca805c85da4382014a7fa2536d796c5
          <Route path="product" element={<ProductComponent />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
