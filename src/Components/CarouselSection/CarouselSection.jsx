import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay ,Controller,   } from 'swiper/modules';
import './CarauselSection.scss'
import list from './list.json'

function CarouselSection() {

  return (
    <div id='carousel'>
          <Swiper className='slides'
          modules={[Navigation, Pagination, Scrollbar, A11y,Controller,Autoplay]}
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            autoplay={{delay:5300}}
            navigation
            pagination={{ clickable: true , type: 'bullets'}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
           
            {list.map((pic, index) => (
                 <SwiperSlide className='slide'>
                    <div className='wrapper'></div>
                    <img src={pic.link} alt="" key={index} />
                    </SwiperSlide>
            ))}
         
        </Swiper>
    </div>
  )
}

export default CarouselSection