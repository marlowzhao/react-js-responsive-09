import {Link} from "react-router-dom";
import "./header.css";


const Header=()=>{

  return(
    <div className="mheader">
        <Link className="header-item" to="/">Intro</Link>
        <Link className="header-item" to="/about">About</Link>
        <Link className="header-item" to="/mywork">Work</Link>
        <Link className="header-item" to="/contact">Contact</Link>
    </div>
  )
}

export default Header
