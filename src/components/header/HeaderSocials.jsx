import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mobinulislam143/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/mobinulislam143/" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://facebook.com/mobinulislam143" target="_blank" rel="noreferrer" ><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials