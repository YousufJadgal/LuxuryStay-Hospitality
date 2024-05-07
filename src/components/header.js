import React  from "react";
import { Link } from "react-router-dom";


function Header()
{
    return(
        <div>
   <header class="header_area">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                
                    <a class="navbar-brand logo_h" to="index.html"><img src="template/image/Logo.png" alt=""/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item active"><Link class="nav-link" to="/">Home</Link></li> 
                            <li class="nav-item"><Link class="nav-link" to="/about">About us</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/accomodation">Accomodation</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/gallery">Gallery</Link></li>
                            <li class="nav-item submenu dropdown">
                                <Link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><Link class="nav-link" to="/blog">Blog</Link></li>
                                    <li class="nav-item"><Link class="nav-link" to="/blogone">Blog Details</Link></li>
                                </ul>
                            </li> 
                            <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/signup">Register</Link></li>

                        </ul>
                    </div> 
                </nav>
            </div>
        </header>
            </div>
    )

}

export default Header;