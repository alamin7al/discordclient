import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";
import blog6 from '../img/blog6.png'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={blog6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={blog6} alt="" />
        </SwiperSlide>
    
      
      </Swiper>
    </>
  );
}
