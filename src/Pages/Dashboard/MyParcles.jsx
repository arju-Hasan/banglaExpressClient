import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyParcles = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: parcles = [] } = useQuery({
        queryKey: ['myparcle', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcles?email=${user.email}`)
            return res.data;
        }
        
    });


    return (
        <div className='p-4'>
            this is my parcle {parcles.length} 
        </div>
    );
};

export default MyParcles;