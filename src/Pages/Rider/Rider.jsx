import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useLoaderData, useNavigate } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import Container from '../../Components/Container';
import rider from '../../assets/agent-pending.png'
import Swal from 'sweetalert2';

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
    const Regions = useWatch({control, name:'Regions'});

    const districtByRegions = region => {
        const regionDistricts = serviceCentars.filter(c => c.region === region );
        const districts = regionDistricts.map(d => d.district)
        return districts;
    }
    const handelBeARider = data =>{
            console.log(data);
            axiosSecure.post('/riders', data)
            .then( res => {
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application success. We Will rech to you 15 days",
                        showConfirmButton: false,
                        timer: 3000
                        });
                }
            })
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
                        <label className="label font-bold mt-2">Name</label>
                        <input type="text" {...register('Name')} defaultValue={user?.displayName} className="input w-full" placeholder=" Name" /> 
                            {/* email */}
                        <label className="label font-bold mt-2">Email</label>
                          <input type="text" {...register('email')} defaultValue={user?.email} className="input w-full" placeholder=" Email" /> 
                         {/* sender phone number */}
                        <label className="label font-bold mt-2">Phone No</label>
                        <input type="number" {...register('PhoneNo')} className="input w-full" placeholder="Phone No" />

                        {/*  Regions */}
                        <fieldset className="fieldset">
                        <label className="label font-bold mt-2">Regions</label>
                        <select defaultValue="Pick a Regions" {...register('Regions')} className="select w-full">
                            <option disabled={true}>Pick a Regions</option>
                            {
                                regions.map((r,i)=><option key={i} value={r}>{r}</option>)
                            }                                
                        </select>                      
                        </fieldset>
                         {/*  Districts */}
                        <fieldset className="fieldset">                       
                        <label className="label font-bold mt-2">District</label>
                        <select defaultValue="Pick a District" {...register('Districts')} className="select w-full">
                            <option disabled={true}>Pick a District</option>
                            {
                               districtByRegions(Regions).map((r,i)=><option key={i} value={r}>{r}</option>)
                            }                                
                        </select>                      
                        </fieldset>                      
                    </fieldset> 
                    <fieldset className="fieldset">
                         {/* address */}
                        <label className="label font-bold mt-2">address</label>
                        <input type="text" {...register('Address')}  className="input w-full" placeholder=" Address" />
                        {/* NID */}
                        <label className="label font-bold mt-2">Nid number</label>
                        <input type="number" {...register('NID')}  className="input w-full" placeholder=" NID number" />
                        {/* bike number */}
                        <label className="label font-bold mt-2">Bike NUmber</label>
                        <input type="text" {...register('BikeNumber')}  className="input w-full" placeholder="Bike Number" />
                        {/* licence number */}
                        <label className="label font-bold mt-2">Licence Number</label>
                        <input type="text" {...register('licenceNumber')}  className="input w-full" placeholder="licence number" />
                    </fieldset>                        
                </div>
                <p className='m-4'>* PickUp Time 10am-7pm Approx.</p>
                <input type="submit" className='btn btn-sm btn-primary hover:bg-accent m-4 w-full'  value="Submit" />
            </form>

            </div>
            </Container>
        </div>
    )
};

export default Rider;