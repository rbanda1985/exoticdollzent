import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
import bachelorParty from '../assets/bachelor-party.jpg';
import birthday from '../assets/birthday.jpg';
import goingAway from '../assets/going-away.jpg';
import holiday from '../assets/holiday.jpg';
import officeParty from '../assets/office-party.jpg';
import poker from '../assets/poker.jpg';
import yacht from '../assets/strip-yacht.jpg';
import './Carousel.css'

import { EffectCoverflow, Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bachelorParty} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={birthday} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={goingAway} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={holiday} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={officeParty} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poker} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={yacht} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default Carousel