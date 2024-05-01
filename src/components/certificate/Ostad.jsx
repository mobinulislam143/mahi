import React from 'react';
import ostad from '../../assets/ostad.png';
import './ostad.css'


const Ostad = () => {

  return (
    <section id="contact">
     
      <div className="container contact__container">
        <div className="contact__options">
          <img src={ostad} alt='certified' />
        </div>
        <div>
          
          <h3>Certified from Ostad as a Full Stack Web Development with MERN</h3>
        </div>
      </div>
    </section>
  );
};

export default Ostad;
