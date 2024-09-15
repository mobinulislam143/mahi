import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/myImg.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
            <p>Welcome to my digital realm, where innovation and excellence converge in web development. As a seasoned MERN stack developer, I deliver cutting-edge web solutions that blend seamless API integrations, dynamic React-driven user experiences, and scalable backend architectures powered by Node.js and Express.js. With MongoDB at the core, I ensure efficient data management for smooth, high-performance applications. My expertise lies in crafting intuitive React components, designing robust APIs for flawless client-server communication, and executing precise MongoDB queries to optimize data flow. Let’s build something extraordinary together.</p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
