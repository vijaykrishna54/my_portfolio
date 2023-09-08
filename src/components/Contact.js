import React from 'react';
import './stylesforcomponents/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
     
      <h2>CONTACT</h2>
      <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <div className='card'>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
