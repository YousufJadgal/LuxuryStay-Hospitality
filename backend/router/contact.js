import express from 'express';
import contact from '../models/contact.js';

const contactrouter = express.Router();


contactrouter.post("/insertcontact" , async (req , res)=>{
    const {name , email , subject, message} = req.body;
    try {
        if(!email.includes('@')){
            return res.status(400).json({error : "Invalid Email"});
        }         
        const newUser = new contact({
            name,
            email,
            subject,
            message 
        })
        res.status(200).json({success : "User Created"});
        console.log(newUser);
        newUser.save();

    } catch (error) {
        res.status(500).json({error : "Internal Server Error"});
    }
})


contactrouter.get('/fetchcontact', async (req,res)=>
{
    contact.find().then(ticketrecord =>res.json(ticketrecord)).
    catch(err=>res.json(err));
})

contactrouter.delete('/deletecontact/:id',async(req,res)=>
{
    const id= req.params.id;
    contact.findByIdAndDelete({_id: id}).then(userdata=>res.json(userdata));
})

export default contactrouter;