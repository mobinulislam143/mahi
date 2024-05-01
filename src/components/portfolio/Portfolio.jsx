import React from 'react';
import IMG1 from '../../assets/ecommerce.png';
import IMG2 from '../../assets/icard.png';
import IMG3 from '../../assets/burger.png';
import IMG4 from '../../assets/chatting.png';
import IMG5 from '../../assets/store.png';
import IMG6 from '../../assets/it.png';
import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Fake Store',
      img: IMG1,
      description:
        'BookStore app that allows users to store books and update progress',
      technologies: 'React | Redux ',
      link: 'https://mycollection-eight.vercel.app/',
      github: 'https://github.com/mobinulislam143/Lxcollection',
    },
    {
      id: 2,
      title: 'Whishpchats',
      img: IMG4,
      description:
        'Real chatting website',
      technologies: 'React | Redux',
      link: 'https://wishpchats.vercel.app/',
      github: 'https://github.com/mobinulislam143/wishpchat',
    },
    {
      id: 4,
      title: 'Burger Order',
      img: IMG6,
      description:
        'Home Agency ui/ux design',
      technologies: 'React ',
      link: 'https://strong-muffin-736e08.netlify.app/',
      github: 'https://github.com/mobinulislam143/module14Assignment',
    },
    {
      id: 3,
      title: 'Id card',
      img: IMG2,
      description: 'Online student id card genterator',
      technologies: 'JavaScript | Webpack',
      link: 'https://stdidcard.vercel.app/',
      github: 'https://github.com/mobinulislam143/icard',
    },
   
    
    // {
    //   id: 5,
    //   title: 'ecommerce',
    //   img: IMG5,
    //   description:
    //     'fake ecommerce website',
    //   technologies: 'JavaScript | CSS | React',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/mobinulislam143/fakestore',
    // },
   
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
        <article className="portfolio__item" >
            <div className="portfolio__item-image">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-rE53cELL4ncJlhWFjOUImwmRfDL2YyK6OV3xMHraQ&s' alt='imgSkeleton' />
            </div>
            <div className="portfolio__item-content">
              <h3>2+ ecommerce site are comming soon. With fully backend system using MERN</h3>
            </div>
            
          </article>
      </div>
    </section>
  );
};

export default Portfolio;
