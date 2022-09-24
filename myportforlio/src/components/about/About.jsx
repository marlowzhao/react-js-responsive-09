import "./about.css"

const About=()=>{
  return(
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://bjphotography.in/wp-content/uploads/2018/09/found-photographer.jpg"
            alt="photographer"
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">ABOUT ME</h1>
        <p className="a-sub">
          Keep learning and coding
        </p>
        <p className="a-text">
          I used to work as a translator and customer manager in the international education
          sector in China. In 2019 I moved to Germany and spent a few years learning German and topping
          up my business skills. In 2021 I found my true house in web development, completed an immersive
          web dev bootcamp, and deveted my time to React and JavaScript.
        </p>
      </div>

    </div>
  )
}

export default About
