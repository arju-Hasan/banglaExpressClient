import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {

    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const {data: payments = []} = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/payments?email=${user.email}`)
        return res.data;
    }
})



    return (
        <div>
            <h2>Payment History: {payments.length}</h2>           
        </div>
    );
};

export default PaymentHistory;