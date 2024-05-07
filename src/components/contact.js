
import React, { useState }  from "react";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Contact()
{

    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [subject,setsubject] = useState('');
    const [message,setmessge] = useState('');

    const contactinsert = async () =>
        {
           if(name =="")
           {
            toast.error('Name filled is requried!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              
                });
           }
           else if(email == "")
           {
            toast.error('Email filled is requried!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              
                });
           
           }

           else if(subject == "")
{
    toast.error('Subject filled is requried!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      
        });

}

else if(message  == "")
{
    toast.error('Message filled is requried!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      
        });
        

}
else 
{
    const res  = await fetch("http://localhost:4000/api/contact/insertcontact",{
        method: 'POST',
        headers : {
          'Content-Type'  : 'application/json'
        },
        body : JSON.stringify({name, email ,subject,message})
        
          })
       
        
}
        }
    return(
        <div>

<ToastContainer/>
        
     
<section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">Contact Us</h2>
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Contact Us</li>
                    </ol>
                </div>
            </div>
        </section>
       
        <section class="contact_area section_gap">
            <div class="container">
                
                <div class="row">
                    <div class="col-md-3">
                        <div class="contact_info">
                            <div class="info_item">
                                <i class="lnr lnr-home"></i>
                                <h6>California, United States</h6>
                                <p>Santa monica bullevard</p>
                            </div>
                            <div class="info_item">
                                <i class="lnr lnr-phone-handset"></i>
                                <h6><a href="#">00 (440) 9865 562</a></h6>
                                <p>Mon to Fri 9am to 6 pm</p>
                            </div>
                            <div class="info_item">
                                <i class="lnr lnr-envelope"></i>
                                <h6><a href="#">support@colorlib.com</a></h6>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">

                        <div class="row contact_form"  id="contactForm">

        
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" onChange={(e)=>setname(e.target.value)} id="name" name="name" placeholder="Enter your name"/>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" onChange={(e)=>setemail(e.target.value)} id="email" name="email" placeholder="Enter email address"/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="subject" onChange={(e)=>setsubject(e.target.value)} name="subject" placeholder="Enter Subject"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea class="form-control" name="message" id="message" onChange={(e)=>setmessge(e.target.value)} rows="1" placeholder="Enter Message"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 text-right">
                                <button type="submit" onClick={contactinsert} value="submit" class="btn theme_btn button_hover">Send Message</button>
                            </div>
                        

                        </div>
                    </div>
                </div>
            </div>
        </section>
       	
    

        </div>
    )
}

export default Contact;