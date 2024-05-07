import mongoose , {model} from "mongoose";
const {Schema} = mongoose;
const RoomSchema = new Schema({
    name : {
        type:String,
        require :true
    },
    roomprice : 
    {
        type:String,
        require :true,
        unique:true
    },
   
    roomdetails:
    { 
        type:String,
        require :true,
    },
    roomstatus:
    { 
        type:String,
        require :true,
    },
    roomfile:
    { 
        type:String,
        require :true,
    },
})

export default model('rooms' , RoomSchema);