import React from 'react';
import './Navbar.scss';
import logo from "../assets/images/t-logo.svg"

const Navbar = () => {
  return (
    <nav className="navbar p-3">
      <div className="container">
        <div className='row w-100'>
        <div className="col-lg-3">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="col-lg-9 d-flex justify-content-end align-items-center">
            <div className='content-wrapper'>
          <ul className="navbar-items">
            <li className="navbar-item"><a href="/">Features</a></li>
            <li className="navbar-item"><a href="/">Jobs</a></li>
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
    </nav>
  );
};

export default Navbar;
