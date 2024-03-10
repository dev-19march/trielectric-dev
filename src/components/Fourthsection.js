import React from 'react'
import './Fourthsection.scss'
import fourthbg from "../assets/images/laptop.svg"



const Fourthsection = () => {
  return (
  
    <div className="image-with-content">
         <div className='container'>
       <div className='row'> 
    <div className="fourth-left-column">
      <img src={fourthbg} alt="Image" className="fourth-image" />
    </div>
    <div className="fourth-right-column">
      <h2 className="fourth-heading">Lorem ipsum is Simply, <span> Dummy Text</span></h2>
      <p className="fourth-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore </p>
      <p className="fourth-paragraph">Ut enim ad minim veniam, quis nostrud exercitation </p>
      <p className="fourth-paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
   </div>
   </div>
  </div>

  )
}

export default Fourthsection