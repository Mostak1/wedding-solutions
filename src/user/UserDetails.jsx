import React, { useState, useEffect } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/FirebaseConfig";

export const UserDetails = () => {

  const [editedUser, setEditedUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  
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
    setEditedUser(filteredUsers[0]); // Assuming only one user is filtered
  };
  
  const handleInputChange = (event) => {
    setEditedUser({
      ...editedUser,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost/WDPF/react/wedding-solutions/API/updateUser.php",
        editedUser
      );
      console.log(response.data); // Log the response from the server
  
      // Optional: If you want to update the user list after submitting the form, uncomment the following lines
      // const updatedUsers = users.map((user) =>
      //   user.id === editedUser.id ? editedUser : user
      // );
      // setUsers(updatedUsers);
  
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile. Please try again.");
    }
  };
  
  return (
    <>
    
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-6 offset-md-3">
            <h3 class="text-center">User Details</h3>
            {filteredUsers.map((user) => (
            <div class="card" key={user.id}>
              <div class="card-body">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    value={user.name}
                    disabled
                    readonly
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={user.email}
                    disabled
                    readonly
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone:</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    value={user.phone}
                    disabled
                    readonly
                  />
                </div>
                <div class="form-group">
                  <label for="address">Address:</label>
                  <textarea
                    class="form-control"
                    id="address"
                    rows="3"
                    disabled
                    readonly
                  >
                    {user.address}
                  </textarea>
                </div>
                <div className="text-center my-2">
                  <Link className="btn btn-outline-secondary" to='/editprofile'>Edit Profile</Link>
                </div>
              </div>
            </div>
             ))}
          </div>
        </div>
      </div>
    </>
  );
};
