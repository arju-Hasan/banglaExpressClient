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
console.log(payments);



    return (
        <div className='ml-4'>
            <h2 className='text-2xl font-bold mx-3'>Payment History: {payments.length}</h2> 
            <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Parcle Name</th>
                    <th>Amount</th>
                    <th>Tracking Id</th>
                    <th>transaction Id</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    payments.map((p, i ) =>
                <tr key={p._id}>
                    <th>{i+1}</th>
                    <td>{p.parcleName}</td>
                    <td>${p.amount}(paid)</td>
                    <td>{p.trackingId}</td>
                    <td>{p.transactionId}</td>
                    <td className='btn btn-primary btn-sm hover:btn-secondary hover:text-accent'>View</td>
                </tr>
                )
                }
                
                
                </tbody>
            </table>
            </div>          
        </div>
    );
};

export default PaymentHistory;