import {connect} from "mongoose";

const connectToMongo = async () =>{
    try {
        await connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.4");
        console.log("Connected To Mongo SuccessFully");
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;