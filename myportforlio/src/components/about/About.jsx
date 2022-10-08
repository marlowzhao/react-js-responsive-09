import "./about.css";
import { iconData } from "../../iconData.js";
import Techstack from "../techstack/Techstack";
import React from "react";

const About=()=>{
  const techIcons = iconData.map(icon => {
  return <Techstack
    key={icon.id}
    {...icon}/>
  })

  return(
    <div className="a" id="about">

      <div className="a-left">
        <h1 className="a-title">ABOUT ME</h1>
        <p className="a-sub">
          Keep learning and coding
        </p>
        <p className="a-text">
          I used to work as a translator and customer manager in the international education
          sector in Shanghai, China. In 2019, I moved to Germany, picked up my German and took some
          business course modules.
        </p>
        <p className="a-text">
          In 2021 I found my true house in web development, completed an immersive
          web dev bootcamp, and started to devote my time to JavaScript and React.
        </p>
      </div>

      <div className="a-right">
        <p className="a-right-up">MY TECH STACK</p>
        <div className="a-right-low">
          { techIcons }
        </div>
      </div>
    </div>
  )
}

export default About
