import express from 'express';
import User from '../Schema/UserSchema.js';

const GetSingle = express();

GetSingle.get('/getsingle/:id', async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    try {
        const alldata = await User.find({'userid':id});
        return res.json(alldata);
    } catch (error) {
        res.status(404).json(error.message);
    }
});

export default GetSingle;