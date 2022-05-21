import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg';


//import modules from swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Show',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore consequatur perferendis explicabo aliquam reprehenderit beatae architecto eos voluptates nihil earum consectetur adipisci corporis, ab fugiat ipsa nisi iusto. Repudiandae at minus repellendus."
  },
  {
    avatar: AVATAR1,
    name: 'Ernerst',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore consequatur perferendis explicabo aliquam reprehe voluptates nihil earum consectetur adipisci corporis, ab fugiat ipsa nisi iusto. Repudiandae at minus repellendus."
  },
  {
    avatar: AVATAR1,
    name: 'Tina Show',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore consequatur perferendis explicabo aliquam reprehenderit beatae architecto eos voluptates nihil earum consectetur adipisci corporis, ab fugiat ipsa nisi iusto. Repudiandae at minus repellendus."
  },
  {
    avatar: AVATAR1,
    name: 'Tina Show',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore consequatur perferendis explicabo aliquam reprehenderit beatae architecto eos voluptates nihil earum consectetur adipisci corporis, ab fugiat ipsa nisi iusto. Repudiandae at minus repellendus."
  },
  {
    avatar: AVATAR1,
    name: 'Tina Show',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore consequatur perferendis explicabo aliquam reprehenderit beatae architecto eos voluptates nihil earum consectetur adipisci corporis, ab fugiat ipsa nisi iusto. Repudiandae at minus repellendus."
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
      pagination={true} 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      className="mySwiper container testimonials__container">
        
        {
          data.map(({avatar,name,review}, index) => { return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client-name'>{name}</h5>
              <small className='client-review'>
                {review}
              </small>
          </SwiperSlide>
          )
          
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials