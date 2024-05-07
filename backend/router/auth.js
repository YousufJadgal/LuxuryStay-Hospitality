import express from 'express';
import signup from '../models/register.js';

const signuprouter = express.Router();


signuprouter.post("/insertsignup" , async (req , res)=>{
    const {name , email , password} = req.body;
    try {
        if(!email.includes('@')){
            return res.status(400).json({error : "Invalid Email"});
        }         
        const newUser = new signup({
            name,
            email,
            password
            
        })
        res.status(200).json({success : "User Created"});
        console.log(newUser);
        newUser.save();

    } catch (error) {
        res.status(500).json({error : "Internal Server Error"});
    }
})


signuprouter.get('/fetchsignup', async (req,res)=>
{
    signup.find().then(ticketrecord =>res.json(ticketrecord)).
    catch(err=>res.json(err));
})

signuprouter.delete('/deletesignup/:id',async(req,res)=>
{
    const id= req.params.id;
    signup.findByIdAndDelete({_id: id}).then(userdata=>res.json(userdata));
})

export default signuprouter;