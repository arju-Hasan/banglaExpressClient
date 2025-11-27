import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useLoaderData, useNavigate } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import Container from '../../Components/Container';
import rider from '../../assets/agent-pending.png'

const Rider = () => {
     const {register, 
            handleSubmit, 
            // formState: { error }, 
            control, 
        } = useForm();
     const axiosSecure = UseAxiosSecure();
    const Navigate = useNavigate();
    const {user } = UseAuth();

    const serviceCentars = useLoaderData();     
    const regionsDup = serviceCentars.map(c => c.region);
    const regions = [...new Set(regionsDup)];
    const senderRegions = useWatch({control, name:'senderRegions'});

    const districtByRegions = region => {
        const regionDistricts = serviceCentars.filter(c => c.region === region );
        const districts = regionDistricts.map(d => d.district)
        return districts;
    }
    const handelBeARider = data =>{
            console.log(data);
    }        
    
    return (
        <div className='mx-10'>
            <Container>
            <h2 className='text-2xl font-bold'>Be A Rider</h2>
            <p className='pt-4 pb-15'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <img src={rider} alt="agent pending" />
                <form onSubmit={handleSubmit(handelBeARider)} className=''>
                 <h2 className="text-4xl font-bold">Tell us about yourself</h2>    
                               
                {/* tow colum */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {/* Rider info */}
                    <fieldset className="fieldset ">                        
                            {/* name */}
                        <label className="label font-bold mt-2">Sender Name</label>
                        <input type="text" {...register('SenderName')} defaultValue={user?.displayName} className="input w-full" placeholder="Sender Name" /> 
                            {/* email */}
                        <label className="label font-bold mt-2">Sender Email</label>
                        <input type="email" {...register('SenderEmail')} defaultValue={user?.email} className="input w-full" placeholder="Sender email" />  
                         {/* sender phone number */}
                        <label className="label font-bold mt-2">Sender Phone No</label>
                        <input type="number" {...register('SenderPhoneNo')} className="input w-full" placeholder="Sender Phone" />

                        {/* sender Regions */}
                        <fieldset className="fieldset">
                        {/* <legend className="fieldset-legend">Sender Regions</legend> */}
                        <label className="label font-bold mt-2">Sender Regions</label>
                        <select defaultValue="Pick a Regions" {...register('senderRegions')} className="select w-full">
                            <option disabled={true}>Pick a Regions</option>
                            {
                                regions.map((r,i)=><option key={i} value={r}>{r}</option>)
                            }                                
                        </select>                      
                        </fieldset>
                         {/* sender Districts */}
                        <fieldset className="fieldset">
                        {/* <legend className="fieldset-legend">Sender District</legend> */}
                        <label className="label font-bold mt-2">Sender District</label>
                        <select defaultValue="Pick a District" {...register('senderDistricts')} className="select w-full">
                            <option disabled={true}>Pick a District</option>
                            {
                               districtByRegions(senderRegions).map((r,i)=><option key={i} value={r}>{r}</option>)
                            }                                
                        </select>                      
                        </fieldset>
                        {/* address */}
                        <label className="label font-bold mt-2">Address</label>
                        <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Address" />
                            {/* instruction */}
                        <label className="label font-bold mt-2">Pickup Instruction</label>
                        <input type="text" {...register('PickupInstruction')} className="input w-full" placeholder="Pickup Instructiont" /> 
                    </fieldset>
                    {/* rechive info */}
                    <fieldset className="fieldset ">
                        {/* <h2 className="text-4xl font-bold">Receiver Details</h2>  */}
                            {/* name  */}
                        <label className="label font-bold mt-2">Receiver Name</label>
                        <input type="text" {...register('ReceiverName')} className="input w-full" placeholder="Receiver Name" /> 
                        {/* email */}
                        <label className="label font-bold mt-2">Receiver Email</label>
                        <input type="email" {...register('ReceiverEmail')} className="input w-full" placeholder="Receiver email" /> 
                        {/* phone number */}
                        <label className="label font-bold mt-2">Receiver Phone No</label>
                        <input type="number" {...register('ReceiverPhoneNo')} className="input w-full" placeholder="Receiver Phone" />  
                          {/* Rwceiver Regions */}
                       
                        
                        {/* address */}
                         <label className="label font-bold mt-2">Receiver Address</label>
                        <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Address" /> 
                        <label className="label font-bold mt-2">Delivery Instruction</label>
                        <input type="text" {...register('DeliveryInstruction')} className="input w-full" placeholder="Delivery Instruction" /> 
                    </fieldset>
                </div>
                <p className='m-4'>* PickUp Time 10am-7pm Approx.</p>
                <input type="submit" className='btn btn-primary m-4 w-full'  value="SendParcle" />
            </form>

            </div>
            </Container>
        </div>
    );
};

export default Rider;