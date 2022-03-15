import React from 'react'
import './testimorials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Tina snow",
    review: "Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text"
  },

  {
    id: 2,
    avatar: AVTR2,
    name: "Shatta Wale",
    review: "Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text"
  },

  {
    id: 3,
    avatar: AVTR3,
    name: "Kwame Despite",
    review: "Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text"
  },

  {
    id: 4,
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review: "Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text"
  },
]

const Testimorials = () => {
  return (
    <section id='testimorials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
      
        {
          data.map(({id,avatar,name,review}) => {
            return (
              <SwiperSlide key= {id} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
            
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review} </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimorials