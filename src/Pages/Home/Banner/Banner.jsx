import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from '../../../Components/Container';
import img1 from "../../../assets/banner/banner1.png";
import img2 from "../../../assets/banner/banner2.png";
import img3 from "../../../assets/banner/banner3.png";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    const button = <>
        <button className='btn btn-secondary btn-warning mr-5'>Track Your Parcel</button>
         <button className='btn btn-primary btn-info'>Be A Rider</button>
    </>
    return (
        <Container>
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={img1} />
                 <div className='absolute bottom-1/7  left-1/9'>
                   {button}
                </div> 
                </div>
                <div>
                    <img src={img2} />
                  <div className='absolute bottom-1/7  left-1/9'>
                   {button}
                </div> 
                </div>
                <div>
                    <img src={img3} />
                    <div className='absolute bottom-1/7  left-1/9'>
                   {button}
                </div> 
                </div>
               
            </Carousel>
        </Container>
    );
};

export default Banner;