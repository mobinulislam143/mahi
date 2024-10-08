import React from 'react';
import IMG1 from '../../assets/ecommerce.png';
import IMG2 from '../../assets/icard.png';
import IMG4 from '../../assets/hmart.png';
import IMG5 from '../../assets/trade.png';
import IMG6 from '../../assets/it.png';
import IMG3 from '../../assets/blog.png';
import IMG7 from '../../assets/ponno.png';
import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'H Mart',
      img: IMG4,
      description:
        'Full Stack E-commerce Website with ssl-commerze Payment gateway. Services: Login System, email Verification, Add cart, Add Wish, product Filtering using price, keyword, brand and category. There anyone can contact with admin in Contact Page.',
      technologies: 'React | Zustand | nodejs | Express js| Mongodb.|ssl payment gateway',
      link: 'https://h-mart001.vercel.app/',
      github: 'https://github.com/mobinulislam143/ecommerceRestApi',
    },
    {
      id: 2,
      title: 'Ponno Sheba',
      img: IMG7,
      description:
        'I am developing a dynamic eCommerce platform using the MERN stack, inspired by Bikroy, where users can seamlessly create, post, and update products. The platform offers a user-friendly interface and robust backend to manage product listings, making it easy for individuals to buy and sell goods online.',
      technologies: 'React | redux | nodejs | Express js| Mongodb.',
      link: 'https://ponno-sheba.vercel.app/',
      github: 'https://github.com/mobinulislam143/ponno_ecommerce_frontend.git',
    },
    {
      id: 3,
      title: 'Blog Buzz',
      img: IMG3,
      description:
        'Blog Website. Api request to read blog.',
      technologies: 'Tailwind | Zustand | React.js | nodejs | Mongodb',
      link: 'https://blogging-peach.vercel.app/',
      github: 'https://github.com/mobinulislam143/blogging',
    },
    {
      id: 4,
      title: 'Trade Mark',
      img: IMG5,
      description:
        'Single page ecommrce page. Services: Login System, email Verification, change profile image, brand and category, CRUD Operation in porduct. ',
      technologies: 'Tailwind | Zustand | nodejs | Express js| Mongodb',
      link: 'https://frontend-trade.vercel.app/',
      github: 'https://github.com/mobinulislam143/frontendTrade',
    },
    {
      id: 5,
      title: 'Fake Store',
      img: IMG1,
      description:
        'BookStore app that allows users to store books and update progress',
      technologies: 'React | Redux ',
      link: 'https://mycollection-eight.vercel.app/',
      github: 'https://github.com/mobinulislam143/Lxcollection',
    },

    {
      id: 6,
      title: 'Home Agency It',
      img: IMG6,
      description:
        'Home Agency ui/ux design',
      technologies: 'React ',
      link: 'https://strong-muffin-736e08.netlify.app/',
      github: 'https://github.com/mobinulislam143/module14Assignment',
    },
    {
      id: 7,
      title: 'Id card',
      img: IMG2,
      description: 'Online student id card genterator',
      technologies: 'JavaScript | Webpack',
      link: 'https://stdidcard.vercel.app/',
      github: 'https://github.com/mobinulislam143/icard',
    },
   

   
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
              <p style={{marginTop: '8px'}}>Tech: {pro.technologies}</p>
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
