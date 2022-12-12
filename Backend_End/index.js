import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRouter from './Routes/PostRouter.js';
import GetAll from './Routes/GetAll.js';
import GetSingle from './Routes/GetSingle.js';
import Delete from './Routes/Delete.js';
import EditUserSingle from './Routes/EditUserSingle.js';

//mongodb connection
const dburl = "mongodb://localhost:27017/test_DataBase";
mongoose.connect(dburl,{}).then(()=>{
    console.log("data base is connected");
}).catch((err)=>{
    console.log(err.message);
})


const app = express();
app.use(express.json());
app.use(cors());

app.use('/',PostRouter);
app.use('/',GetAll);
app.use('/',GetSingle);
app.use('/',Delete);
app.use('/',EditUserSingle);


app.listen(8000, () => {
    console.log("serverr running..... port at 8000");
  });