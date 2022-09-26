import "./contact.css";
//import icons
import { useRef, useState } from "react";
import Tele from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/location.png";
import emailjs from '@emailjs/browser';

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

  return (
    <div className="c">
      {/* <div className="c-bg"></div> */}
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">let's talk about my projects</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Tele} alt="phone-icon" className="c-icon" />
                +49 1753486797
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
              <b>Wanting to know more?</b>
              Let's talk about the projects
            </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder="Subject" name="user_subject"/>
                <input type="text" placeholder="Email" name="user_email"/>
                <textarea rows="5" placeholder="Write your message here" name="message"></textarea>
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
