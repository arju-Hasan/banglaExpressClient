import React, { use, useRef, useState } from 'react';
import reviewImg from "../../../assets/customer-top.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import Container from '../../../Components/Container';


const Reviewa = ({reviewsPromice}) => {
    const reviews = use(reviewsPromice);
        console.log(reviews);
    
    return (
        <>
        <Container>
            <div className='flex flex-col justify-center items-center w-2/3 mx-auto space-y-3'>
                <img src={reviewImg} alt="" />
                <h2 className='text-2xl'>What our customers are sayings</h2>
                <p className='text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
      <Swiper
        loop ={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper mt-14"
      >
        {
            reviews.map(reviewed =>
            <SwiperSlide key={reviewed.id} >
                            <ReviewCard  review={reviewed} />
            </SwiperSlide>
        )
        }
      </Swiper>
      </Container>
    </>
    );
};

export default Reviewa;