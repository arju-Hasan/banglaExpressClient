import React from 'react';
import Marquee from "react-fast-marquee";
import brand1 from '../../../assets/brands/amazon.png';
import brand2 from '../../../assets/brands/amazon_vector.png';
import brand3 from '../../../assets/brands/casio.png';
import brand4 from '../../../assets/brands/moonstar.png';
import brand5 from '../../../assets/brands/randstad.png';
import brand6 from '../../../assets/brands/star.png';
import brand7 from '../../../assets/brands/start_people.png';

const Brands = () => {
    return (
        <>
        <h2 className='text-center text-4xl text-accent font-bold pt-20 py-15'>We've helped thousands of sales teamss</h2>
        <Marquee speed={100} pauseOnHover={true} gradient={false}>
    <div className='flex items-center space-x-5 py-5 gap-5'>
        <img className='h-12 md:h-18 lg:h-20' src={brand1} alt="Brand 1" />
        <img className='h-12 md:h-18 lg:h-20' src={brand2} alt="Brand 2" />
        <img className='h-12 md:h-18 lg:h-20' src={brand3} alt="Brand 3" />
        <img className='h-12 md:h-18 lg:h-20' src={brand4} alt="Brand 4" />
        <img className='h-12 md:h-18 lg:h-20' src={brand5} alt="Brand 5" />
        <img className='h-12 md:h-18 lg:h-20' src={brand6} alt="Brand 6" />
        <img className='h-12 md:h-18 lg:h-20' src={brand7} alt="Brand 7" />
    </div>
        </Marquee>
        </>
    );
};

export default Brands;