import express from 'express';
import User from '../Schema/UserSchema.js';

const GetAll = express();

GetAll.get('/getall', async(req,res)=>{
    try {
        const alldata = await User.find();
        return res.status(200).json(alldata);
    } catch (error) {
        res.status(404).json(error.message);
    }
});

export default GetAll;