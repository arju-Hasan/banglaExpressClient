import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import HowToProess from '../HowToProess/HowToProess';
import Reviews from '../Reviews/Reviews';

const reviewsPromice = fetch('/reviews.json').then(res=> res.json());

const Home = () => {
    return (
        <div className='bg-base-200'>
               <Banner />
               <HowItWorks />
               <OurServices />
               <Brands />
               <HowToProess />
               <Reviews reviewsPromice={reviewsPromice} />
        </div>
    );
};

export default Home;