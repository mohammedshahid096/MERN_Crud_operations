import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {AddUser} from  "../Services/Api";

function Adduser() {
  const [user, setuser] = useState({
    username: "",
    userid: "",
    useremail: "",
    userphone: "",
  });
  const getonchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const addUserButton = async() => {
    // console.log(user);
    await AddUser(user);
    navigate('/');

  };

  return (
    <div className="row mt-3">
      <div id="adduser" className="col-md-6 offset-md-3">
        <center>
          <h1>Add user</h1>
        </center>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="username"
            onChange={getonchange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="userid">Username</label>
          <input
            type="text"
            className="form-control"
            id="userid"
            name="userid"
            placeholder="Enter username"
            onChange={getonchange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="useremail">Email</label>
          <input
            type="text"
            className="form-control"
            id="useremail"
            name="useremail"
            placeholder="Enter Email"
            onChange={getonchange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="userphone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="userphone"
            name="userphone"
            placeholder="Enter phone"
            onChange={getonchange}
          />
        </div>

        <div className="row justify-content-center mt-4">
          <button className="btn btn-primary w-75" onClick={addUserButton}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adduser;
