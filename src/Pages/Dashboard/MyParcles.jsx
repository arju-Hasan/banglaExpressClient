import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { ScanEye, SquarePen, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcles = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: parcles = [], refetch } = useQuery({
        queryKey: ['myparcle', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcles?email=${user.email}`)
            return res.data;
        }
        
        
    });
    const handelParcleDelete = id => {
            // console.log(id);
            Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcles/${id}`)
                .then(res =>{
                    console.log(res.data);
                    if(res.data.deletedCount){                    
                    refetch(); // refresh data this ui
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your Parcle has been deleted.",
                    icon: "success"
                    });
                    }
                })
                
            }
            });
    }
      const handelpayment = async(p) => {
        const paymentInfo ={
            cost: p.cost,
            parcleId: p._id,
            senderEmail: p.SenderEmail,            
            parcleName: p.parcelName

        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data);
        window.location.href = res.data.url;
    }

    return (
        <div className='p-4'>
            <h2 className='font-bold text-xl'>My Total Parcle =({parcles.length}) </h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Cost</th>                    
                    <th>Payment</th>                    
                    <th>Delivary status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
               {
                    parcles.map((p, index) => (

                        <tr key={p._id || index}>
                            <th>{index + 1}</th>
                            <td>{p.parcelName}</td>
                            <td>({p.cost}) Taka</td>
                            {/* <td>
                                {
                                    p.paymentStatus === "paid" ?
                                    <span className='text-green-400'>Paid</span>
                                    :
                                    <Link to={`/dashboard/payment/${p._id}`} > <button className='btn btn-primary'>Pay</button>
                                    
                                    </Link>
                                }
                            </td> */}
                            <td>
                                {
                                    p.paymentStatus === "paid" ? 
                                    <span className='btn btn-sm btn-secondary text-accent'>Paid</span>
                                    :                                    
                                    <button className='btn btn-primary hover:btn-secondary hover:text-accent btn-sm' onClick={()=>handelpayment(p)}>pay</button>
                                }
                                </td>

                            <td>Blue</td>
                            <td>
                                <button className='btn btn-square hover:bg-primary'><ScanEye /></button>

                                <button className='btn btn-square hover:bg-primary mx-2'> <SquarePen /></button>

                                <button onClick={()=> handelParcleDelete(p._id)} className='btn btn-square hover:bg-primary'><Trash2 /></button>
                            </td>
                        </tr>
                    ))
                }

                
               
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyParcles;