import React, { use, useRef, useState } from 'react';
import reviewImg from "../../../assets/customer-top.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
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
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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