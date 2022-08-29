import "./about.css"

const About=()=>{
  return(
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://bjphotography.in/wp-content/uploads/2018/09/found-photographer.jpg"
            alt="fotographer"
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">ABOUT ME</h1>
        <p className="a-sub">
          lorem ipsom dolor sit amet
        </p>
        <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>


      <div className="a-right"></div>
    </div>
  )
}

export default About
