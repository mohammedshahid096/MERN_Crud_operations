import  mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username:String, 
        userid: String,
        useremail: String,
        userphone: String
    }
);

const User = mongoose.model('users',UserSchema);
export default User;
