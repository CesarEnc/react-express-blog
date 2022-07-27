import React from "react";
import { Link } from "react-router-dom";
import {GrInfo} from "react-icons/gr"

const NavBar = () => {
   return(
    <>
    <nav className="nav">
        <ul>
            <li className="icon"><GrInfo/></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/articles-list">Articles</Link></li>
        </ul>
    </nav>
    </>
   ) 
}


export default NavBar;