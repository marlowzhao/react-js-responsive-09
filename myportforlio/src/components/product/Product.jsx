import "./product.css";
import React from "react";


const Product=(props)=>{
  return(
    <div className="p">
      <a href={props.link} target="_blank"  rel="noopener noreferrer" className="p-link">{props.title}</a>
      <img src={`../productimgs/${props.coverImage}`} alt="p-img" className="p-insert" />
    </div>
  )
}

export default Product
