import "./techstack.css";
import React from "react";

const Techstack=(props)=>{
  return (
    <div className="t-icons">
      <img src={`./stackimgs/${props.image}`} alt="icon" className="t-img"/>
      <p className="t-desc">{props.title}</p>
    </div>
  )
}

export default Techstack
