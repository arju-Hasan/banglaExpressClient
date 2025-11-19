import React from 'react';
import Container from '../../../Components/Container';
import livetracking from '../../../assets/live-tracking.png';
import tiny from '../../../assets/tiny-deliveryman.png';
import callimg from '../../../assets/safe-delivery.png/';
import bgimg from "../../../assets/bgimg.png"

const HowToProess = () => {
    return (
        <div>
            <Container>
                <div className='border-y-5 border-dotted border-accent p-10 mt-20'>
                    <div className='flex flex-col md:flex-row items-center gap-6 border-accent text-accent rounded-xl p-10 mt-0 bg-white'>
                        <img src={livetracking} className='border-r-3 border-dotted pr-12' alt="Live Tracking" />
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>Live Parcel Tracking</h2>
                            <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-6 border-accent text-accent rounded-xl p-10 mt-10 bg-white'>
                        <img src={tiny} className='border-r-3 border-dotted pr-12' alt="Live Tracking" />
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>100% Safe Delivery</h2>
                            <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-6 border-accect text-accent rounded-xl p-10 mt-10 bg-white'>
                        <img src={callimg} className='border-r-3 border-dotted pr-12' alt="Live Tracking" />
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>24/7 Call Center Support</h2>
                            <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                        </div>
                    </div>
                </div>

                <div className='bg-{bgimg} mx-auto rounded-2xl m-10 w-7/8 h-100'>
                <img src={bgimg} alt="bgimg" />
                <div className='absulet -mt-90 ml-20 space-y-10'>
                    <h2 className='text-2xl font-bold text-white'>Merchant and Customer Satisfaction <br /> is Our First Priority </h2>
                    <p className='text-white'>We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.</p>
                    <button className='btn rounded-full btn-secondary border-2 border-secondary text-accent y m-2 hover:btn-accent hover:text-secondary'>Become a Merchant</button>
                    <button className='btn rounded-full btn-accen text-accent border-2 border-secondary y m-2 hover:btn-accent hover:text-secondary'>Earn with ZapShift Courier</button>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default HowToProess;