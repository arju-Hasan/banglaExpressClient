import React from 'react';
import Container from '../../Components/Container';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseAuth from '../../Hooks/UseAuth';
 
export  const SendParcle = () => {
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
    const receiverRegions = useWatch({control, name:'receiverRegions'});

    const districtByRegions = region => {
        const regionDistricts = serviceCentars.filter(c => c.region === region );
        const districts = regionDistricts.map(d => d.district)
        return districts;
    }

   
     const handelSendParcle = data =>{
            console.log(data);
            const isDocoment = data.parcleType === 'document';
            const isSamedistricts = data.senderDistricts === data.receiverDistricts;
            const parcleWeight = parseFloat(data.parcleWeight);

            let cost = 0;
            if (isDocoment){
                cost = isSamedistricts ? 60 : 80;
            }
            else{
                if(parcleWeight < 3){
                    cost = isSamedistricts ? 110 : 150;
                }
                else{
                   const minCost  = isSamedistricts ? 110 : 150;
                   const extraWeight = parcleWeight - 3;
                   const extraCost = isSamedistricts ? extraWeight * 40 : extraWeight * 40 + 40;
                   cost = minCost + extraCost ;
                }
            }
            console.log('cost', cost);
            data.cost = cost;
            Swal
            Swal.fire({
                title: "Are you sure?",
                text: `Total cost ${cost} BDT`,
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
                }).then((result) => {
                if (result.isConfirmed) {

                    // save the persal data in database
                    axiosSecure.post('/parcles', data )
                    .then(res => {
                        console.log("after saving parcles", res.data);
                    })
                    Navigate('/dashboard/my-parcles');
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your parcle is ready pay now",
                    showConfirmButton: false,
                    timer: 2500
                    });
                }
                });
     }
    return (
        <div className='m-10 border rounded-2xl'>
            <Container className="m-4 ">
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
                        <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcle Name" />
                        </div>
                        <div className=''>
                         <label className="label font-bold">Parcel Weight (KG)</label>
                        <input type="number" {...register('parcleWeight')} className="input w-full" placeholder="Parcel Weight (KG)" />   
                        </div>
                        
                    </fieldset>
                </div>
                {/* tow colum */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {/* sender info */}
                    <fieldset className="fieldset ">
                        <h2 className="text-4xl font-bold">Sender Details</h2> 
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
                        <h2 className="text-4xl font-bold">Receiver Details</h2> 
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
                        <fieldset className="fieldset">
                        {/* <legend className="fieldset-legend">Sender Regions</legend> */}
                        <label className="label font-bold mt-2">Receiver Regions</label>
                        <select defaultValue="Pick a Regions" {...register('receiverRegions')} className="select w-full">
                            <option disabled={true}>Pick a Regions</option>
                            {
                                regions.map((r,i)=><option key={i} value={r}>{r}</option>)
                            }                                
                        </select>                      
                        </fieldset>
                         {/* sreceiver Districts */}
                        <fieldset className="fieldset">
                        {/* <legend className="fieldset-legend">Sender District</legend> */}
                        <label className="label font-bold mt-2">Receiverr District</label>
                        <select defaultValue="Pick a District" {...register('receiverDistricts')} className="select w-full">
                            <option disabled={true}>Pick a District</option>
                            {
                               districtByRegions(receiverRegions).map((r,i)=><option key={i} value={r}>{r}</option>)
                            }                                
                        </select>                      
                        </fieldset>
                        {/* address */}
                         <label className="label font-bold mt-2">Receiver Address</label>
                        <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Address" /> 
                        <label className="label font-bold mt-2">Delivery Instruction</label>
                        <input type="text" {...register('DeliveryInstruction')} className="input w-full" placeholder="Delivery Instruction" /> 
                    </fieldset>
                </div>
                <p className='m-4'>* PickUp Time 10am-7pm Approx.</p>
                <input type="submit" className='btn btn-primary m-4'  value="SendParcle" />
            </form>
            </Container>
        </div>
    );
};

export default SendParcle;