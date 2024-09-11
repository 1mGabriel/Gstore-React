import React from "react";
import {Link} from "react-router-dom"
import { StatesContext } from "../context/Context";
import { useContext } from 'react'
import "./Navbar.css"
const Navbar = () => {
  const { menu, setMenu} = useContext(StatesContext);
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="menu-icon">
        <i class="fa-solid fa-bars" onClick={(e)=>setMenu(true)}></i>
        </div>
        <div className="logo-icon">
            <Link to="/"><p>GStore</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
