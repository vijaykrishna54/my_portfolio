import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './stylesforcomponents/Contact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_jshjuoj', 'template_vqsn8j8', form.current, 's-OjtRcMWpJQeY0je')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
     
      <h2>CONTACT</h2>
      <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <div className='card'>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" value="Send">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;

