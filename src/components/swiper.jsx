import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Swipper() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://prodimage.images-bn.com/pimages/9780316769488_p0_v5_s1200x630.jpg" className='shadow-lg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prodimage.images-bn.com/pimages/9780590353427_p0_v5_s1200x630.jpg" className='shadow-lg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prodimage.images-bn.com/pimages/9780618645619_p0_v4_s1200x630.jpg" className='shadow-lg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prodimage.images-bn.com/pimages/9780345339683_p0_v4_s1200x630.jpg" className='shadow-lg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prodimage.images-bn.com/pimages/9780316769488_p0_v5_s1200x630.jpg" className='shadow-lg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prodimage.images-bn.com/pimages/9780618645619_p0_v4_s1200x630.jpg" className='shadow-lg'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
