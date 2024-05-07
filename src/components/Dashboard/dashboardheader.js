import React from "react";
import { Link } from "react-router-dom";


function DashboardHeader()
{
    return(
        <div>
<body id="welcome">

<aside class="left-sidebar">
		<div class="logo">
			<a href="#welcome">
				<img src="dashboard/img/logo.png" alt=""/>
			</a>
		</div>
		<nav class="left-nav">
			<ul id="nav">
				<li class="current"><Link to="/contactdetails">Contact Details</Link></li>
				<li><Link to="/signupdetails">Signup Details</Link></li>
				<li><a href="#tmpl-structure">Add Room</a></li>
				<li><a href="#css-structure">Room Details</a></li>
				<li><Link to="/">Add Staff</Link></li>
				<li><a href="#contact-form">Staff Details</a></li>
				
			</ul>
		</nav>
	</aside>

    </body>

        </div>
    )
}

export default DashboardHeader