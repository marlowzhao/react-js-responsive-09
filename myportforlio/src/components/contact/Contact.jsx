import "./contact.css";
import React, { useRef, useState } from "react";
import Email from "../../img/email.png";
import Address from "../../img/location.png";
import GitHub from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact=()=>{
  const formRef= useRef()
  const [done, setDone]=useState(false)
  const handleSubmit=(e)=> {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_hrkqvwz',
        'template_jznto9l',
        formRef.current,
        'HDe5nyLCaKGs1Nf-H')

      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
          (error) => {
            console.log(error.text);
        });
  }

  const theme =useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="c" id="contact">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Talk about my projects</h1>
            <div className="c-info">
            <div className="c-info-item">
                <img src={GitHub} alt="gh-icon" className="c-icon" />
                <a href="https://github.com/marlowzhao" rel="noopener noreferrer" target="_blank" className="c-anchor" style={{color: darkMode && "#EFEEEF"}}>View my project code </a>
              </div>
              <div className="c-info-item">
                <img src={Linkedin} alt="lkin-icon" className="c-icon" />
                <a href="https://www.linkedin.com/in/jszhao/"
                  target="_blank" rel="noopener noreferrer" className="c-anchor"
                  style={{color: darkMode && "#EFEEEF"}}>Find me on LinkedIn
                </a>
              </div>
              <div className="c-info-item">
                <img src={Email} alt="email-icon" className="c-icon" />
                marlowzhao@163.com
              </div>
              <div className="c-info-item">
                <img src={Address} alt="address-icon" className="c-icon" />
                Steglitz, Berlin, Germany
              </div>
            </div>
          </div>

          <div className="c-right">
            <p className="c-desc">
              <b>Wanting to know more? </b>
              Leave your message below!
            </p>
              <form ref={formRef} onSubmit={handleSubmit} >
                <input type="text" required placeholder="Name*" name="user_name" style={{backgroundColor: darkMode? "#232221" : "#EFEEEF"}}/>
                <input type="text" required placeholder="Subject*" name="user_subject" style={{backgroundColor: darkMode? "#232221" : "#EFEEEF"}}/>
                <input type="text" required placeholder="Email*" name="user_email" style={{backgroundColor: darkMode? "#232221" : "#EFEEEF"}}/>
                <textarea rows="5" required placeholder="Write your message here*" name="message" style={{backgroundColor: darkMode? "#232221" : "#EFEEEF"}}></textarea>
                {done && "Message sent successfully!"}
                <br/>
                <button>Submit</button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
