
import "./header.css";
import React from "react";
import { HashLink as Link} from "react-router-hash-link";

const Header=()=>{

  return(
    <div className="mheader">
      <Link className="header-item" to="#about">About Me</Link>
      <Link className="header-item" to="#work">My Work</Link>
      <Link className="header-item" to="#contact">Contact</Link>
    </div>
  )
}

export default Header
