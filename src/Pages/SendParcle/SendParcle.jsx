import React from 'react';
import Container from '../../Components/Container';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcle = () => {
    const {register, handleSubmit, formState: { error }, watch, } = useForm();
    const serviceCentars = useLoaderData();     
    const regionsDup = serviceCentars.map(c => c.region);
    const regions = [...new Set(regionsDup)];
    const senderRegions = watch('senderRegions')

    const districtByRegions = region => {
        const regionDistricts = serviceCentars.filter(c => c.region === region );
        const districts = regionDistricts.map(d => d.district)
        return districts;
    }

   
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
                        <div className=''>
                        <label className="label font-bold">Parcel Name</label>
                        <input type="text" {...register('parcel-Name')} className="input w-full" placeholder="Parcle Name" />
                        </div>
                        <div className=''>
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
                            {/* name */}
                        <label className="label font-bold mt-2">Sender Name</label>
                        <input type="text" {...register('Sender-Name')} className="input w-full" placeholder="Sender Name" /> 
                            {/* email */}
                        <label className="label font-bold mt-2">Sender Email</label>
                        <input type="email" {...register('Sender-email')} className="input w-full" placeholder="Sender email" />  
                         {/* sender phone number */}
                        <label className="label font-bold mt-2">Sender Phone No</label>
                        <input type="number" {...register('Sender-Phone-No')} className="input w-full" placeholder="Sender-Phone" />

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
                        <input type="text" {...register('Address')} className="input w-full" placeholder="Address" />
                            {/* instruction */}
                        <label className="label font-bold mt-2">Pickup Instruction</label>
                        <input type="text" {...register('PickupInstruction')} className="input w-full" placeholder="Pickup Instructiont" /> 
                    </fieldset>
                    {/* rechive info */}
                    <fieldset className="fieldset ">
                        <h2 className="text-4xl font-bold">Receiver Details</h2> 

                        <label className="label font-bold mt-2">Receiver Name</label>
                        <input type="text" {...register('Rwceiver-Name')} className="input w-full" placeholder="Rwceiver Name" /> 
                        <label className="label font-bold mt-2">Receiver Email</label>
                        <input type="email" {...register('Receiver-email')} className="input w-full" placeholder="Receiver email" /> 
                        <label className="label font-bold mt-2">Receiver Address</label>
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