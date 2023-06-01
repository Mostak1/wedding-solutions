import React, { useState, useEffect } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/FirebaseConfig";

export const Editprofile = () => {
  const [editedUser, setEditedUser] = useState({
    id:"",
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  // console.log(orders.id);
  //for login confirmation
  const [isLogin, setIsLogin] = useState(false);
  const [user_email, setUser_email] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setUser_email(user.email);
      } else {
        setIsLogin(false);
        setUser_email(null);
      }
    });
  }, []);

  // data get from api
  const dataApi =
    "http://localhost/WDPF/react/wedding-solutions/API/alltableapi.php";

  //get data for users table..
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(dataApi);
        setUsers(response.data.users);
        console.log(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchOrders();
  }, []);
  // Filter the products based on the logged-in user's email for users table

  const filteredUsers = users.filter((users) => users.email === user_email);

  const editProfile = () => {
      setId(filteredUsers[0].id);// Assuming only one user is filtered
      setName(filteredUsers[0].name);// Assuming only one user is filtered
      setAddress(filteredUsers[0].address);// Assuming only one user is filtered
      setMobile(filteredUsers[0].phone);// Assuming only one user is filtered
      
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
            const url ="http://localhost/WDPF/react/wedding-solutions/API/updateUser.php";
            // const url = "http://localhost/round_53/React/wedding-solutions/API/createuser.php";

            let fData = new FormData();
            fData.append("id", id);
            fData.append("name", name);
            fData.append("mobile", mobile);
            fData.append("address", address);

            axios
              .post(url,fData)
              .then((Response) => alert(Response.data))
              .catch((Error) => alert(Error));
            alert("User Update SuccessFully");
      
   
  };

  return (
    <>
    
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-6 offset-md-3">
            <h3 class="text-center">Edit User Details</h3>
            <div className="text-center">

            <button className="btn  btn-outline-secondary my-2" onClick={editProfile}>
              Edit Profile
            </button>
            </div>

            
            <form onSubmit={handleRegister}>
                <input type="text" 
                value={id}
                onChange={(e) => setId(e.target.value)}
                hidden
                />
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!editedUser}
                  readOnly={!editedUser}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  disabled={!editedUser}
                  readOnly={!editedUser}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  rows="3"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  disabled={!editedUser}
                  readOnly={!editedUser}
                />
              </div>
              <div className="">
                <input className="form-control" type="submit" value="Update" />
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
