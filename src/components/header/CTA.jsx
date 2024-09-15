import React from 'react';
import myCv from '../../assets/myCv2.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={myCv} target="_blank" download className="btn">
        Download CV
      </a>
     
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
