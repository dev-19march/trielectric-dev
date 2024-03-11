import React from 'react';
import './ContactUs.scss'
import { useRef } from 'react';
import submit from "../assets/images/submit.svg"

const ContactUs = () => {
  
    const fileInputRef = useRef(null);
  
    const handleFileInputClick = () => {
      fileInputRef.current.click();
    }
    return (
        <div className='contactus'>
        <div className='container'>
  <div className="contact-form">
  <div className='row'>

    <div className="col-lg-5 col-12">
      <div className="contact-details">
        <h2>Drop Us a <br></br> <span>Line !</span> </h2>
        <p>Don’t hesitate to contact us, we’d love to hear your story.</p>
      </div>
      </div>
      <div className='col-lg-7 col-12'>
      <form>
      
        <div className="form-group">
          <div className="flex-container">
            <div className="form-field">
              <label htmlFor="name">Your Name <sup>*</sup></label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Your Email <sup>*</sup></label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="project">Tell us about your project</label>
          <textarea id="project" name="project" placeholder="Enter your project details"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="attachments">Attachments</label>
            <div className="custom-file-input" onClick={handleFileInputClick}>
           <span>Add Files</span>  or drop files here
            </div>
            <input
              type="file"
              id="attachments"
              name="attachments"
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
          </div>
          <button type="submit" class="submit-button">
  <img src={submit} alt="Submit" className="button-icon"></img> 
  <span class="button-text">Submit</span>
</button>      </form>
      </div>
      </div>
    </div>

        </div>
        </div>
    );
  
};

export default ContactUs;
