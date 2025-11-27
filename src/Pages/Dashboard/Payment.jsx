import React, { useState } from 'react';
import { useParams } from 'react-router';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loading/Loading';

const Payment = () => {

    const {parcleId} = useParams();
    const axiosSecure = UseAxiosSecure();

    const {isLoading, data: parcle } = useQuery({
        queryKey:['parcle', parcleId],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/parcles/${parcleId}`);
            return res.data;
        }
    })
    if (!parcle) return <p>No parcel found</p>;

   if(isLoading) return <Loader />;

    const handelpayment = async() => {
        const paymentInfo ={
            cost: parcle.cost,
            parcleId: parcle._id,
            senderEmail: parcle.SenderEmail,
            // parcleName: parcle.parcleName
            parcleName: parcle.parcelName

        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data);
        window.location.href = res.data.url;
    }

console.log(parcle);

    return (
        <div className='mx-auto text-center'>
            <h2 className='px-5 text-xl font-semibold'>Parcle name : {parcle.parcelName}</h2>
            <p className='my-5'>please pay ${parcle.cost}</p>
            <button onClick={handelpayment} className='btn btn-primary hover:btn-secondary hover:text-accent mx-4'>Pay Now</button>
        </div>
    );
};

export default Payment;