import mongoose , {model} from "mongoose";
const {Schema} = mongoose;
const registerSchema = new Schema({
    name : {
        type:String,
        require :true
    },
    email : 
    {
        type:String,
        require :true,
        unique:true
    },
    password:
    { 
        type:String,
        require :true,
    },
    role:
    { 
        type:String,
        require :true,
        default:"user"
    },

    
})


export default model('signups' , registerSchema);