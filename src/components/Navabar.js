import React from 'react';
import './Navbar.scss';
import logo from "../assets/images/t-logo.svg"
import { useState } from 'react';
 import Offcanvas from 'react-bootstrap/Offcanvas';
import footerlogo from "../assets/images/footer-logo.png"


const Navbar = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <nav className="navbar p-3">
      <div className="container">
        <div className='row w-100'>
        <div className="col-lg-3 col-6">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="col-lg-9  col-6 d-flex justify-content-end align-items-center">
        <button onClick={handleShow} className="hamburger-button">
        ☰
      </button>
       
            <div className='content-wrapper'>
          <ul className="navbar-items">
            <li className="navbar-item"><a href="/">Features</a></li>
            <li className="navbar-item"><a href="/jobs">Jobs</a></li>
            <li className="navbar-item"><a href="/">Blogs</a></li>
          </ul>
          <div className="navbar-buttons ml-3">
            <button className="btn">Sign In</button>
            <button className="btn">Sign Up</button>
          </div>
          </div>
        </div>
      </div>
  
      </div>
 
      
    
    



      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <a href="/">
          <img src={footerlogo} alt="Logo" className="canva-logo" />
          </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='content-wrapper'>
        <ul className="navbar-items">
            <li className="navbar-item"><a href="/">Features</a></li>
            <li className="navbar-item"><a href="/jobs">Jobs</a></li>
            <li className="navbar-item"><a href="/">Blogs</a></li>
          </ul>
          <div className="navbar-buttons ml-3">
            <button className="btn">Sign In</button>
            <button className="btn">Sign Up</button>
          </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>



  

  
  );
}




export default Navbar;
