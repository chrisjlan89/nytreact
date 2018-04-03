
import React from "react";
import { Input, FormBtn } from "./Form/";
import { Link } from 'react-router-dom'

 const Navbar =() => {
    return (
  <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark  bg-nav">
    <span className="navbar-brand nav-text">NYT React App</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className={window.location.pathname === "/" ? "active" : ""}  to="/" className="nav-item nav-link active nav-text">  Home </Link>
      <Link className={window.location.pathname === "/saved" ? "active" : ""}  to="/saved" className="nav-item nav-link active nav-text">  Saved </Link>
      <form class="form-inline my-2 my-lg-0">
      <Input/>
      <FormBtn/>
      
      </form>

   
    
      
      
    </div>
    
  </div>
</nav>
    )
};
export default Navbar;



// <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> ...