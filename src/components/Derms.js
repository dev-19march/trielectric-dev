import React from 'react'
import './Derms.scss'
import graph from '../assets/images/derms-graph.svg'

const Derms = () => {
  return (
    <div className="centered-content">
    <h1 className="heading">Why DERMS</h1>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <img src={graph} alt="Image" className="image" />
  </div>
  )
}

export default Derms