import express from 'express';
import User from '../Schema/UserSchema.js';
const EditUserSingle = express();

EditUserSingle.put('/edituser/:id', async(req,res)=>{
    const id = req.params.id;
    const userdetails = req.body;
    const edit_user = new User(userdetails);
    console.log(req.params.id);
    try {
        await User.updateOne({'userid':id},edit_user);
        res.status(201).json(edit_user);
        
    } catch (error) {
        res.status(409).json(error.message);
    }
    

})

export default EditUserSingle;