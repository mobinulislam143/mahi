import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Mobinul Islam Mahi</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li> 
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/mobinulislam143/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/mobinulislam143/" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://facebook.com/mobinulislam143" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; mobinulislam {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
