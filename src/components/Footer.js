import React from 'react';
import './Footer.scss';
import footerlogo from "../assets/images/footer-logo.png"


const Footer = () => {
  return (
    <footer className="footer pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-section">
              <img src={footerlogo} alt="Logo" className="footer-logo" />
              <p className="footer-text mt-4">Lorem Ipsum is simply dummy text of the printing <br></br>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-section">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#">Features</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-section">
              <h3 className="footer-heading">Drop Us a line</h3>
              <p className="footer-contact-text">Don’t hesitate to contact us, we’d <br></br> love to hear your story.</p>
              <button className="custom_btn">Contact Us</button>
            </div>
          </div>
          


        </div>
      </div>
      <div className="footer-bottom">
    <span className="footer-company-name">© 2024 Codalien Technologies Pvt. Ltd.</span>
    <div className="footer-links-bottom">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms and Conditions</a>
    </div>
  </div>
    </footer>
  
  );
};

export default Footer;
