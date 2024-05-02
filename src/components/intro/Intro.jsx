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
            <p>Welcome to my  website, where innovation meets excellence in web development. As a proficient MERN stack developer, I specialize in architecting robust web solutions driven by API integrations, React for dynamic front-end experiences, Node.js and expressJs for scalable backend implementations, and MongoDB for seamless data management.
            
            With a keen eye for detail and a commitment to delivering high-quality code, I excel in crafting elegant React components that elevate user interactions, designing efficient Node.js APIs for seamless communication between client and server, and executing MongoDB queries with precision to ensure optimal data retrieval and manipulation.</p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
