import mongoose , {model} from "mongoose";
const {Schema} = mongoose;
const ContactSchema = new Schema({
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
   
    subject:
    { 
        type:String,
        require :true,
    },
    message:
    { 
        type:String,
        require :true,
    },
})

export default model('contacts' , ContactSchema);