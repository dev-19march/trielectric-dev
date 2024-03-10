import React from 'react'
import './Derms.scss'
import graph from '../assets/images/derms-graph.svg'

const Derms = () => {
  return (
    <div className="centered-content">
    <h1 className="heading p-3">Why DERMS</h1>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. beofoeufxbfkrxrioilcxuokicoix.bzr <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <img src={graph} alt="Image" className="derms-image" />
  </div>
  )
}

export default Derms