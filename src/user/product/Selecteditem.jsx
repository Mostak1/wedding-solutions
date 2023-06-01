import React, { useState, useEffect } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { Outlet, Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/FirebaseConfig";

export const Selecteditem = () => {
  //login varified
  const [isLogin, setIsLogin] = useState(false);
  const [user_email, setUser_email] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        // const email = user.email;
        //const uid = user.uid;
        //console.log(email);
        setUser_email(user.email);
      } else {
        setIsLogin(false);
        setUser_email(null);
      }
    });
  }, []);

  const [isSending, setIsSending] = useState(false);
  const [scartItems, setScartItems] = useState([]);
  const [phcartItems, setPhcartItems] = useState([]);
  const [gcartItems, setGcartItems] = useState([]);
  const [hcartItems, setHcartItems] = useState([]);

  useEffect(() => {
    setScartItems(JSON.parse(localStorage.getItem("scartItems")) || []);
    setPhcartItems(JSON.parse(localStorage.getItem("phcartItems")) || []);
    setGcartItems(JSON.parse(localStorage.getItem("gcartItems")) || []);
    setHcartItems(JSON.parse(localStorage.getItem("hcartItems")) || []);
  }, []);
  // const scartItems = JSON.parse(localStorage.getItem('scartItems')) || [];
  // const phcartItems = JSON.parse(localStorage.getItem('phcartItems')) || [];
  // const gcartItems = JSON.parse(localStorage.getItem('gcartItems')) || [];
  // const hcartItems = JSON.parse(localStorage.getItem('hcartItems')) || [];

  const allCartItems = [
    ...scartItems,
    ...phcartItems,
    ...gcartItems,
    ...hcartItems,
  ];

  // console.log(scartItems);
  //image url
  const gimgUrl =
    "http://localhost/WDPF/react/wedding-solutions/src/assets/picture/gate/";
  const simgUrl =
    "http://localhost/WDPF/react/wedding-solutions/src/assets/picture/stage/";
  const phimgUrl =
    "http://localhost/WDPF/react/wedding-solutions/src/assets/picture/photoshoot/";
  const himgUrl =
    "http://localhost/WDPF/react/wedding-solutions/src/assets/picture/hall/";

  //using axios
  const sendCartItemsToDatabase = () => {
    setIsSending(true);
    const payload = {
      user_email: user_email, // Include user_email in the payload
      cartItems: allCartItems, // Include allCartItems
    };
    axios
      .post(
        "http://localhost/WDPF/react/wedding-solutions/API/ordersubmit.php",
        payload
      )
      .then((response) => {
        console.log("Selected items sent to database:", response.data);
        alert("Selected items sent to database:", response.data);
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Error sending Selected items to database:", error);
        setIsSending(false);
      });
  };
  // delete items from local storage
  const deleteItemFromLocalStorage = (cartItemsKey, productId) => {
    const cartItems = JSON.parse(localStorage.getItem(cartItemsKey)) || [];
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    localStorage.setItem(cartItemsKey, JSON.stringify(updatedCartItems));
    //  re-render the component
    if (cartItemsKey === "scartItems") {
      setScartItems(updatedCartItems);
    } else if (cartItemsKey === "phcartItems") {
      setPhcartItems(updatedCartItems);
    } else if (cartItemsKey === "gcartItems") {
      setGcartItems(updatedCartItems);
    } else if (cartItemsKey === "hcartItems") {
      setHcartItems(updatedCartItems);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="fs-2 fw-bold fnt2 text-center my-3">
            Selected Stage Items
          </div>
          {scartItems.map((product) => (
            <div class="col-md-6 mb-3">
              <div class="card h-100">
                <img
                  src={simgUrl + product.images}
                  height={400}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title fs-4 fnt3">{product.title}</h5>
                  <p class="card-text"></p>
                </div>
                <div class="card-footer text-center">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={() =>
                      deleteItemFromLocalStorage("scartItems", product.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="fs-2 fw-bold fnt2 text-center my-3">
            Selected Gate Items
          </div>
          {gcartItems.map((product) => (
            <div class="col-md-6 mb-3">
              <div class="card h-100">
                <img
                  src={gimgUrl + product.images}
                  height={400}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title fs-4 fnt3">{product.title}</h5>
                  <p class="card-text"></p>
                </div>
                <div class="card-footer text-center">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={() =>
                      deleteItemFromLocalStorage("gcartItems", product.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="fs-2 fw-bold fnt2 text-center my-3">
            Selected Hall Items
          </div>
          {hcartItems.map((product) => (
            <div class="col-md-6 mb-3">
              <div class="card h-100">
                <img
                  src={himgUrl + product.images}
                  height={400}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title fs-4 fnt3">{product.title}</h5>
                  <p class="card-text"></p>
                </div>
                <div class="card-footer text-center">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={() =>
                      deleteItemFromLocalStorage("hcartItems", product.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="fs-2 fw-bold fnt2 text-center my-3">
            Selected Photoshoot Items
          </div>
          {phcartItems.map((product) => (
            <div class="col-md-6 mb-3">
              <div class="card h-100">
                <img
                  src={phimgUrl + product.images}
                  height={400}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title fs-4 fnt3">{product.title}</h5>
                  <p class="card-text"></p>
                </div>
                <div class="card-footer text-center">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={() =>
                      deleteItemFromLocalStorage("phcartItems", product.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isLogin && (
          <div className="fs-2 fw-bold fnt2 text-center my-3">
            <button
              className="btn btn-outline-dark fs-2 mx-auto"
              type="button"
              onClick={sendCartItemsToDatabase}
            >
              Submit Data
            </button>
          </div>
        )}
        {!isLogin && (
          <div className="fs-2 fw-bold fnt2 text-center my-3">
            Please <Link to="/login">LogIn</Link> to Submit Your Choice
          </div>
        )}
      </div>
    </>
  );
};
