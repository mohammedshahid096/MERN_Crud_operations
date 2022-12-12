import express from 'express';
import User from '../Schema/UserSchema.js';
const PostRouter = express();

PostRouter.post('/add', async(req,res)=>{
    // console.log("hello post method is called");
    const userdetails = req.body;
    // console.log(userdetails);
    try {
        const newuser = new User(userdetails);
        await newuser.save();
        res.status(201).json(newuser);
        
    } catch (error) {
        res.status(409).json(error.message);
    }
    

})

export default PostRouter;