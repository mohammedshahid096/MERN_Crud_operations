import React, { useState, useEffect } from "react";
import {useNavigate,useParams} from 'react-router-dom';
import {SingleUser,EditUser} from  "../Services/Api";

function Edituser() {

  const {id} = useParams();

  // const [apidata, setapidata] = useState([]);

  useEffect(() => {
    loadapi();
  },[]);


  const loadapi =async() =>{
    const response = await SingleUser(id);
    // console.log(response);
    setuser(response.data[0]);
  }


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
    console.log(id);
    await EditUser(user,id);
    navigate('/');
    // console.log(user);

  };

  return (
    <div className="row mt-3">
      <div id="adduser" className="col-md-6 offset-md-3">
        <center>
          <h1>Edit user</h1>
        </center>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="username"
            value={user.username}
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
            value={user.userid}
            disabled
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
            value={user.useremail}
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
            value={user.userphone}
            onChange={getonchange}
          />
        </div>

        <div className="row justify-content-center mt-4">
          <button className="btn btn-primary w-75" onClick={addUserButton}>
            Submit for Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edituser;
