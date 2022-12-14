import "./intro.css";
import Chebu from "../../img/portrait.png";
import React from "react";

const Intro = () =>{
return(
  <div className="i">

   <div className="i-left">
       <img src={Chebu} className="i-img" alt="chebu"></img>
    </div>

    <div className="i-right">
      <div className="i-right-wrapper">
        <h2 className="i-intro">Hi, my name is</h2>
        <h1 className="i-name"> JINSHENG ZHAO</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Traveller</div>
            <div className="i-title-item">Translator</div>
            <div className="i-title-item">Photographer</div>
            <div className="i-title-item">Linguist</div>
          </div>
        </div>
        <div className="i-desc">
          I build things with the latest tech stack.<br/>
          Now I am focusing on React and full-stack development.
        </div>
      </div>
    </div>


  </div>

  )
}

export default Intro
