import React from 'react';
import './Centralize.scss';

const Centralize = () => {
  return (
    <div className='my-home-component'>
    <div className="my-component container-fluid">
        <div className='centered-div'>
      <h1 className="heading text-center">Centralize, Optimize,  <br></br> <span>Revolutionize</span> </h1>
      <p className="description text-center">Simplyfying Distributed Enery Management for a modern and efficient grid.</p>
      <div className="points d-flex justify-content-center">
        <div className="point">
          <span>MONITOR</span>
        </div>
        <div className="point">
          <span>|</span>
        </div>
        <div className="point">
          <span>ANALYZE</span>
        </div>
        <div className="point">
          <span>|</span>
        </div>
        <div className="point">
          <span>PREDICT</span>
        </div>
        <div className="point">
          <span>|</span>
        </div>
        <div className="point">
          <span>CONTROL</span>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Centralize;
