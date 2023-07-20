import React, { useRef, useState } from 'react';
//slider config
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

//Images
import Banner1 from "../../imgs/1.png";
import Banner2 from "../../imgs/2.png";
//Css
import './slyle.css'

function Banner() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Banner1} /></SwiperSlide>
        <SwiperSlide><img src={Banner2} /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;