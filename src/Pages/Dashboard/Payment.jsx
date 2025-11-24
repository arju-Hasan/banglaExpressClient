import React from 'react';
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

    if(isLoading){
        <Loader />
    }
    

console.log(parcle);

    return (
        <div>
            <h2 className='px-5 text-xl font-semibold'>Parcle name : {parcle.parcelName}</h2>
            <button className='btn btn-primary hover:btn-secondary hover:text-accent mx-4'>Pay Now</button>
        </div>
    );
};

export default Payment;