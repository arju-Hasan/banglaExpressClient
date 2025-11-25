
import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const PaymentSuccess = () => {
     const [searchParams] = useSearchParams();
     const sessonId = searchParams.get('session_id')
     const axiosSecure = UseAxiosSecure();
    console.log(sessonId);

    useEffect(()=>{
        if(sessonId){
            axiosSecure.patch(`/payment-success?session_id=${sessonId}`)
            .then(res =>{
                console.log(res.data);
            })
        }
    },[sessonId, axiosSecure])


    return (
        
        <div className="h-screen flex justify-center items-center text-center">
        <div>
            <h2>Thanks Your Payment Successfull</h2>

            <Link to="/dashboard/my-parcles">
                <button className="btn btn-primary my-4 hover:btn-secondary hover:text-accent btn-sm">
                    My-Parcle
                </button>
            </Link>
        </div>
        </div>
        
    );
};

export default PaymentSuccess;