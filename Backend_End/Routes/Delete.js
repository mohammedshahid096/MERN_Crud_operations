import express from 'express';
import User from '../Schema/UserSchema.js';

const Delete = express();

Delete.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    try {
         await User.deleteOne({_id:id});
         res.status(200).json({message:"successfully deleted"});
    } catch (error) {
        res.status(404).json(error.message);
    }
});

export default Delete;