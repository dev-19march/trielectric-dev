import React from 'react'
import './Creativity.scss'
import trilogo from '../assets/images/creativity.svg'

const Creativity = () => {
  return (
    <div className="component-with-cards">
      <div className='container'>
      <div className='row d-flex justify-content-between'>

      <div className="header">
        <h2 className="Creativity-heading">Our approach <span>Creativity.</span> </h2>
        <p className="Creativity-paragraph">Lorem Ipsum is simply dummy text of the printing</p>
      </div>
      {/* <div className="co"> */}
        <div className="col-lg-5">
          <div className='Creativity-card'>
          <h3 className="Creativity-card-heading">Lorem Ipsum </h3>
          <p className="Creativity-card-paragraph">Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing</p>
          <h3 className="Creativity-card-subheading">Lorem Ipsum </h3>
          <p className="Creativity-card-subtext">Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing.</p>
        </div>
        </div>
        <div className="col-lg-5">
        <div className='Creativity-card right'>
          <h3 className="Creativity-card-heading">Lorem Ipsum </h3>
          <p className="Creativity-card-paragraph">Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing</p>
          <h3 className="Creativity-card-subheading">Lorem Ipsum </h3>
          <p className="Creativity-card-subtext">Lorem Ipsum is simply dummy text of the printingLorem <br></br> Ipsum is simply dummy text of the printing.</p>
        </div>
        </div>
      {/* </div> */}
      </div>
      <img src={trilogo} alt="Image" className="Creativity-center-image" />
      </div>
    </div>
  )
}

export default Creativity