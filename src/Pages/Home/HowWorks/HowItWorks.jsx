import React from 'react';
import Container from '../../../Components/Container';
import { FaPeopleCarryBox } from 'react-icons/fa6';
import { BsCashCoin } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { LuNotebookPen } from 'react-icons/lu';

const HowItWorks = () => {
    return (
        <div>
            <Container className="p-10">
                <h2 className='text-3xl font-bold text-accent my-8'>How It Works</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 py-5'>
                    {/* number 1 */}
                    <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                        <FaPeopleCarryBox className='text-5xl text-accent' />
                        <h3 className='text-2xl font-semibold text-accent mb-4'>Booking Pick & Drop</h3>
                        <p className='text-gray-600 pb-4'>From personal packages to business shipments — we deliver on time, every time..</p>
                    </div>
                        {/* number 2 */}
                     <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                        <BsCashCoin className='text-5xl text-accent' />
                        <h3 className='text-2xl font-semibold text-accent mb-4'>Cash On Delivery</h3>
                        <p className='text-gray-600 pb-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                    {/* number 3 */}
                     <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                        <TbTruckDelivery className='text-5xl text-accent' />
                        <h3 className='text-2xl font-semibold text-accent mb-4'>Delivery Hub</h3>
                        <p className='text-gray-600 pb-4'>From personal packages to business shipments — we deliver on time, every time.</p>                      

                    </div> 
                    {/* number 4 */}
                    <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                       <LuNotebookPen className='text-5xl text-accent' />
                        <h3 className='text-2xl font-semibold text-accent mb-4'>Booking SME & Corporate</h3>
                        <p className='text-gray-600 pb-4'>From personal packages to business shipments — we deliver on time, every time.</p>                      

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HowItWorks;
