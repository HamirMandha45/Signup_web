import mongoose, { Schema } from "mongoose";

const registerSchema = new mongoose.Schema({
    name:{
     type:String,
     required:true,
     trim:true,
     unique: true,  
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true}); 

const User = mongoose.model("Register",registerSchema);
export default User;