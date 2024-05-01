import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        {/* <h1>Mobinul Islam Mahi</h1> */}
        <TypeAnimation
          sequence={[
            'Mobinul Islam Mahi',
            1000, 
            'Mern Stack Devloper',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />

        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
