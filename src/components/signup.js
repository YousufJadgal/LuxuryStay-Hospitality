import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Signup()
{

    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
const addrecord = async ()=>
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
    else if(password =="")
    {
        toast.error('Password filled is requried!', {
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
        const res  = await fetch("http://localhost:4000/api/auth/insertsignup",{
            method: 'POST',
            headers : {
              'Content-Type'  : 'application/json'
            },
            body : JSON.stringify({name, email ,password})
            
              },
              toast.success('Account created successfully!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
               
                }),
            
            )
    }
}
    return(
        <div>

            <ToastContainer/>
<Header/>

<section class="breadcrumb_area">
            <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">SignUp Form </h2>
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Signup</li>
                    </ol>
                </div>
            </div>
        </section>





<div className="container">
<input type="text" placeholder="Name" onChange={(e)=>setname(e.target.value)} className="form-control w-50 mt-3"/>
<input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)} className="form-control w-50 mt-3"/>
<input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} className="form-control w-50 mt-3"/>
<button onClick={addrecord} className="btn btn-warning mt-3 mb-3">Create Account</button>
</div>


<Footer/>
        </div>
    )
}

export default Signup;