import "./product.css";
// import chebu from "../../productimgs/culture-shot.png";
// `../../productimgs/${props.image}`

const Product=(props)=>{
  return(
    <div className="p">

      <a href={props.link} target="_blank" rel="noreferrer" className="p-link">{props.title}</a>
      <img src={`../productimgs/${props.coverImage}`} alt="p-img" className="p-insert" />
    </div>
  )
}

export default Product
