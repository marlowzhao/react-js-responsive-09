import Product from "../product/Product";
import "./pplist.css";
import { productData } from "../../productData";
import React from "react";

const Prolist =()=>{
  const allProducts = productData.map(photo=> {
  return (
    <Product
      key={photo.id}
      {...photo}
    />
  )
})

  return(
    <div className="pl" id="work">
      <div className="pl-list">
        {allProducts}
      </div>
      <div className="pl-text">
        <h1 className="pl-tittle"> MY WORK </h1>
        <p className="pl-desc"> Check out the projects I did during the bootcamp and later
        from my independent study. </p>
      </div>
    </div>

  )
}

export default Prolist
