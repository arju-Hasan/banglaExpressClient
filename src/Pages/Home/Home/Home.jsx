import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import HowToProess from '../HowToProess/HowToProess';

const Home = () => {
    return (
        <div className='bg-base-200'>
               <Banner />
               <HowItWorks />
               <OurServices />
               <Brands />
               <HowToProess />
        </div>
    );
};

export default Home;