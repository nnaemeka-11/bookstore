import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../assets/css/landing/style.css';
import biography from '../../assets/images/biography.jpg'
import fiction from '../../assets/images/fiction.jpg'
import health from '../../assets/images/health.jpg'
import politics from '../../assets/images/politics.jpg'
import religion from '../../assets/images/religion.jpg'
import mystery from '../../assets/images/mystery.jpg'
import selfhelp from '../../assets/images/selfhelp.jpg'

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={biography} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fiction} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={religion} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={health} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mystery} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={politics} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={selfhelp} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
