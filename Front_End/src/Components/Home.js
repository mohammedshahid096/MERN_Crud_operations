import React,{useEffect,useState } from 'react';
import {GetUsers,DeleteUser} from '../Services/Api';
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';

function Home() {

useEffect(() => {
  fetchallusers();
}, []);

const [usersdata, setusersdata] = useState([]);

//fetching all the users from a api function
const fetchallusers = async() =>{
  const  response = await GetUsers();
  // console.log(response);
  setusersdata(response.data);
}

//detele user button
const deleteUser = async(id)=>{
  // alert(id);
  await DeleteUser(id);
  fetchallusers();

}


let countsno =0;
const displaydata = usersdata.map((item)=>{
  countsno++;
  return(
    <tr key={uuidv4()}>
       <th scope="row">{countsno}</th>
      <td>{item.username}</td>
      <td>{item.userid}</td>
      <td>{item.useremail}</td>
      <td>{item.userphone}</td>
      <td> 
      <Link to={`/edituser/${item.userid}`}><input type="button" className='btn btn-warning' value="Edit" /></Link>
        <input type="button" className='btn btn-danger' onClick={()=>deleteUser(item._id)} value="Delete" />
      </td>
    </tr>
  );
});


  return (
    <div className='row mt-3' id='homepage' >
        <div className="col" style={{overflow:"auto"}}>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {displaydata}
  </tbody>
</table>
        </div>
        </div>
  )
}

export default Home;