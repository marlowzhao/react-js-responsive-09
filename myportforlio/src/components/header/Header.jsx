import Toggle from "../toggle/Toggle";
import "./header.css";
import React from "react";
import { HashLink as Link} from "react-router-hash-link";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Header=()=>{
  const theme =useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return(
    <div className="mheader" style={{
      backgroundColor: darkMode? "rgb(35,33,34)" : "rgb(239, 238, 238)"}}>
      <Link className="header-item" to="#about">ABOUT ME</Link>
      <Link className="header-item" to="#work">MY WORK</Link>
      <Link className="header-item" to="#contact">CONTACT</Link>
     <Toggle />
    </div>
  )
}

export default Header
