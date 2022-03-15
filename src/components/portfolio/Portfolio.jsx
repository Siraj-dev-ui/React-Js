import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image : IMG1,
    title: 'Infinite credit exploration',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17695203-Infinite-credit-exploration'
  },

  {
    id: 2,
    image : IMG2,
    title: 'Eneftie - NFT Dashboard Darkmode',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17710155--Eneftie-NFT-Dashboard-Darkmode'
  },

  {
    id: 3,
    image : IMG3,
    title: 'The Galart - Art Gallery Landing Page',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17711899-The-Galart-Art-Gallery-Landing-Page'
  },

  {
    id: 4,
    image : IMG4,
    title: 'Digicomp - Digital Marketing Landing Page',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17714195-Digicomp-Digital-Marketing-Landing-Page'
  },

  {
    id: 5,
    image : IMG5,
    title: 'Sejauh - User Dashboard',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17713714-Sejauh-User-Dashboard'
  },

  {
    id: 6,
    image : IMG6,
    title: 'UserIns - User Testing Landing Page',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17712715-UserIns-User-Testing-Landing-Page'
  },
]

const Portfolio = () => {

  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({id,image,title,github,demo}) => {
          return(
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Dribbble</a>
          </div>
       </article>
          )
        })
      }
        

       
      </div>
    </section>
  )
}

export default Portfolio