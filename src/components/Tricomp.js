import React from 'react'
import './Tricomp.scss'
import background from '../assets/images/cards-bg.svg'

const Tricomp = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="card first-card">Card 1</div>
            </div>
            <div className="col-lg-12">
              <div className="card">Lorem Ipsum is simply dummy text of the printing</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">Card 3</div>
            </div>
            <div className="col-lg-12">
              <div className="card">Card 4</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
              <img src={background} alt="Logo"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tricomp