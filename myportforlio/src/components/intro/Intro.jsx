import "./intro.css"
// import Me from "../../img/me.jpg"

const Intro = () =>{
return(
  <div className="i">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 className="i-intro">Hello my name is</h2>
        <h1 className="i-name"> Jinsheng Zhao</h1>
        <div className="i-title">
          <div className="i-title wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Translator</div>
            <div className="i-title-item">Photographer</div>
          </div>
        </div>
        <div className="i-desc">
          I like building things with the latest web development tech stack and am working
          to move into the tech field.
        </div>
      </div>
    </div>

    <div className="i-right">
      {/* <img src={Me} className="i-img" alt="my-foto"></img> */}
    </div>
  </div>

  )
}

export default Intro
