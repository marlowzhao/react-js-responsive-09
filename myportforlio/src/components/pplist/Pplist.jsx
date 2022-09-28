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
      <div className="pl-text">
        <h1 className="pl-tittle"> My Work </h1>
        <p className="pl-desc"> Here is the work I did during the bootcamp and later
        during my independent study, where you can see my progress!</p>
      </div>

      <div className="pl-list">
        {allProducts}
      </div>
    </div>

  )
}

export default Prolist
