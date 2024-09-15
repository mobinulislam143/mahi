import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
          });
      
    }, []);
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        {/* <h1>Mobinul Islam Mahi</h1> */}
        <TypeAnimation
          sequence={[
            'Mobinul Islam Mahi',
            1000, 
            'Mern Stack Developer',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />

        <CTA />
        <a href="#contact" className="scroll__down text-red-700">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
