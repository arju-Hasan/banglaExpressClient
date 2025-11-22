import React from 'react';
import Container from '../../Components/Container';
import { useForm } from 'react-hook-form';

const SendParcle = () => {

    const {register, handleSubmit, formState: { error }} = useForm();
     const handelSendParcle = data =>{
            console.log(data);
     }


    return (
        <div className='m-10 border'>
            <Container className="m-4 border">
            <h2 className="text-5xl font-bold">Send A Parcel</h2>
            <p className="text-2xl font-bold mt-2">Enter your parcel details</p>
            <form onSubmit={handleSubmit(handelSendParcle)} className=''>
                {/* docoment */}
                <div className='m-4'>
                    <label className="label mr-4">
                        <input type="radio" {...register('parcleType')} value="document" className='radio' defaultChecked />
                        Docoment
                    </label>
                    <label className="label">
                        <input type="radio" {...register('parcleType')} value="non-document" className='radio'  />
                        Non-Docoment
                    </label>
                </div>
                {/* Parcle info  */}
                <div>
                     <fieldset className="fieldset grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className='w-1/2 flex flex-col'>
                        <label className="label font-bold">Parcel Name</label>
                        <input type="text" {...register('parcel-Name')} className="input w-full" placeholder="Parcle Name" />
                        </div>
                        <div className='w-1/2'>
                         <label className="label font-bold">Parcel Weight (KG)</label>
                        <input type="number" {...register('parcle-Weight')} className="input w-full" placeholder="Parcel Weight (KG)" />   
                        </div>
                        
                    </fieldset>
                </div>
                {/* tow colum */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {/* sent info */}
                    <fieldset className="fieldset ">
                        <h2 className="text-4xl font-bold">Sender Details</h2> 

                        <label className="label font-bold mt-2">Sender Name</label>
                        <input type="text" {...register('Sender-Name')} className="input w-full" placeholder="Sender Name" />  
                        <label className="label font-bold mt-2">Address</label>
                        <input type="text" {...register('Address')} className="input w-full" placeholder="Address" /> 
                        <label className="label font-bold mt-2">Sender Phone No</label>
                        <input type="number" {...register('Sender-Phone-No')} className="input w-full" placeholder="Sender-Phone" />  
                        <label className="label font-bold mt-2">Your District</label>
                        <input type="text" {...register('YourDistrict')} className="input w-full" placeholder="Your District" /> 
                        <label className="label font-bold mt-2">Pickup Instruction</label>
                        <input type="text" {...register('PickupInstruction')} className="input w-full" placeholder="Pickup Instructiont" /> 
                    </fieldset>
                    {/* rechive info */}
                    <fieldset className="fieldset ">
                        <h2 className="text-4xl font-bold">Receiver Details</h2> 

                        <label className="label font-bold mt-2">Receiver Name</label>
                        <input type="text" {...register('Rwceiver-Name')} className="input w-full" placeholder="Rwceiver Name" />  
                        <label className="label font-bold mt-2">Address</label>
                        <input type="text" {...register('Address')} className="input w-full" placeholder="Address" /> 
                        <label className="label font-bold mt-2">Rwceiver Phone No</label>
                        <input type="number" {...register('Rwceiver-Phone-No')} className="input w-full" placeholder="Rwceiver-Phone" />  
                        <label className="label font-bold mt-2">Receiver District</label>
                        <input type="text" {...register('YourDistrict')} className="input w-full" placeholder="Receiver District" /> 
                        <label className="label font-bold mt-2">Delivery Instruction</label>
                        <input type="text" {...register('DeliveryInstruction')} className="input w-full" placeholder="Delivery Instruction" /> 
                    </fieldset>
                </div>
                <p className='m-4'>* PickUp Time 10am-7pm Approx.</p>
                <input type="submit" className='btn btn-primary m-4'  value="SendParcle" />
            </form>
            </Container>
        </div>
    );
};

export default SendParcle;