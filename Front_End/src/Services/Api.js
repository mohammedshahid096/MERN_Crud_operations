import axios from 'axios';

const URL ="http://localhost:8000";

export const AddUser = async(data) => {
try {
  return await axios.post(`${URL}/add`,data);

} catch (error) {
    console.log("Error occured while calling API: "+error );
}
}


//all users api calling
export const GetUsers = async() =>{
  try {
    return await axios.get(`${URL}/getall`);
  } catch (error) {
    console.log("Error occured while  calling  API: "+error);
  }
}

export const SingleUser = async(id)=>{
  try {
    return await axios.get(`${URL}/getsingle/${id}`);
  } catch (error) {
    console.log("error occured while calling single user API: "+error);
  }
}

export const EditUser = async(data,id)=>{
  // console.log(id);
  try {
    return await axios.put(`${URL}/edituser/${id}`,data);
  } catch (error) {
    console.log("Error occured while Editing the user data: "+error);
  }
}

export const  DeleteUser = async(id)=>{
  try {
    await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log("error occured while deleting the user: "+error);
  }
}
