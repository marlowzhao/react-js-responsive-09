import Product from "../product/Product"
import "./pplist.css"

const Prolist =()=>{
  return(
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-tittle"> do it do it </h1>
        <p className="pl-desc"> dgegdfghhkdsndhsprgjnsbabgdagb</p>
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
