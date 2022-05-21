import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {FaFacebookMessenger,FaWhatsappSquare} from 'react-icons/fa'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v7b5vkn', 'template_5rztp8g', form.current, 'E_rXxc1t791Xa39CB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h3>heryn3333@gmail.com</h3>
            <a href="mailto:heryn3333@gmail.com">Send Message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h3>Hery</h3>
            <a href="mailto:heryn3333@gmail.com">Send Message</a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h3>0343333333</h3>
            <a href="mailto:heryn3333@gmail.com">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your FullName' required/>
          <input type='email' name='email' placeholder ='Your Email' required/>
          <textarea name='message' id='message' cols='30' rows='15' placeholder='Your Message' required>

          </textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact