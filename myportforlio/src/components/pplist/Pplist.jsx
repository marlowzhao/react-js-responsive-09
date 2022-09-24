import Product from "../product/Product"
import "./pplist.css"

const Prolist =()=>{
  return(
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-tittle"> Keep Coding </h1>
        <p className="pl-desc"> Here is the work I did during the bootcamp and later
        during my independent study. You can see my progress!</p>
      </div>

      <div className="pl-list">
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>

  )
}

export default Prolist
