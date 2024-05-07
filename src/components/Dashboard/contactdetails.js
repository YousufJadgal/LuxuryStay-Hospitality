import React, { useEffect, useState } from "react";
import DashboardHeader from "./dashboardheader";
import axios from "axios";
import { useParams } from "react-router-dom";

function ContactDetails()
{
const {id} = useParams();
const [schedule,setschedule] = useState([])
	useEffect(()=>
{
	axios.get('http://localhost:4000/api/contact/fetchcontact')
	.then(schedule=>setschedule(schedule.data)).catch(err=>console.log(err))
		
	console.log(schedule);
},[])


const deletecontactrecord = (id) =>
{
	//alert(id)

	axios.delete('http://localhost:4000/api/contact/deletecontact/'+id).then(res=>{console.log(res)
	window.location.reload()})
}
    return(
        <div>
<DashboardHeader/>

<div id="main-wrapper">
		<div class="main-content">
			<section id="welcome">
				<div class="content-header">
					<h1>Contact Details</h1>
                    <table className="table table-bordered text-center mt-3">
<tr>
<th>S.No</th>
    <th>Name</th>
	<th>Email</th>
	<th>Subject </th>
	<th>Message</th>
	<th>Action</th>

</tr>

{
	schedule.map((data,index)=>
	
	<tr>
		<td>{index+1}</td>
		<td>{data.name}</td>
		<td>{data.email}</td>
		<td>{data.subject}</td>
		<td>{data.message}</td>

		<td>

		<i onClick={()=>deletecontactrecord(data._id)} class="fa fa-close"></i>
		</td>
	</tr>
	
	)
}
                    </table>
				</div>
				
				
				
			</section>
			
		
	
		
				
			
			
		
			
		</div>
	</div>
        </div>
    )
}

export default ContactDetails