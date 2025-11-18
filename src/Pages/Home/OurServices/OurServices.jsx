import React from 'react';
import Container from '../../../Components/Container';
import serviceImg from '../../../assets/service.png';

const OurServices = () => {
    return (
        <>
            <Container>
                 <div className='bg-accent rounded-xl p-10'>
                    <h2 className='text-3xl font-bold text-center text-white mb-8'> Our Services</h2>
                    <p className='text-white text-center pb-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-5'>
                    {/* number 1 */}
                    <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                       <img src={serviceImg} alt="Service" />
                        <h3 className='text-2xl font-semibold text-accent mb-4'>Pick & Drop Service</h3>
                        <p className='text-gray-600 pb-4'>Schedule a convenient pickup time, and our professional riders will collect your parcels from your doorstep.</p>
                    </div>
                        {/* number 2 */}
                     <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                        <img src={serviceImg} alt="Service" />
                        <h3 className='text-2xl font-semibold text-accent mb-4'>Nationwide Delivery</h3>
                        <p className='text-gray-600 pb-4'> We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.</p>
                    </div>
                    {/* number 3 */}
                     <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                        <img src={serviceImg} alt="Service" />
                        <h3 className='text-2xl font-semibold text-accent mb-4'> Cash on Home Delivery</h3>
                        <p className='text-gray-600 pb-4'> 100% cash on delivery anywhere in Bangladesh with guarant safety of your product.</p>                      

                    </div> 
                    {/* number 4 */}
                    <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                        <img src={serviceImg} alt="Service" />
                        <h3 className='text-2xl font-semibold text-accent mb-4'>Fulfillment Solution</h3>
                        <p className='text-gray-600 pb-4'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>                      

                    </div>
                     {/* number 5 */}
                     <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                        <img src={serviceImg} alt="Service" />
                        <h3 className='text-2xl font-semibold text-accent mb-4'>Corporate Service / Contract In Logistics</h3>
                        <p className='text-gray-600 pb-4'> Customized corporate services which includes warehouse and inventory management support.</p>                      

                    </div>  {/* number 6 */}
                     <div className="flex bg-white hover:bg-secondary flex-col items-center text-center p-4 border rounded-2xl shadow-lg space-y-5">
                        <img src={serviceImg} alt="Service" />
                        <h3 className='text-2xl font-semibold text-accent mb-4'>Parcel Return </h3>
                        <p className='text-gray-600 pb-4'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants. </p>                      

                    </div> 
                </div>                

                   </div>
                                
            </Container>
            </>
            ) ;  
}

export default OurServices;