import React, { Component } from 'react';  

const NavBar =({total})=>{
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            NavBar <span className="badge badge-pill secondary">{total}</span>
            </a>
         </nav> 
    )
}

 
export default NavBar;