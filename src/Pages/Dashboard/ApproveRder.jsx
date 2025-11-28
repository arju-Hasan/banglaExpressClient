import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';
import { MdPersonAdd } from "react-icons/md";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from 'sweetalert2';

const ApproveRder = () => {
    const axiosSecure = UseAxiosSecure();
    const { refetch, data: riders = []} = useQuery({
        queryKey: ['riders', 'panding'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/riders');
            return(res.data)
        }
    });
    const updateRiderStatus = (rider, status) => {
        const updateInfo = {status: status, email: rider.email }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
        .then(res =>{
            if(res.data.modifiedCount){
                refetch();
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Rider status ${status}`,
                showConfirmButton: false,
                timer: 2500
                });
            }
        })
    }
     
    const handelApproveRider = rider => {
      updateRiderStatus(rider, 'approved')        
    }
    const handelRejctionRider = rider => {
        updateRiderStatus(rider, 'rejction')
    }
    const handelRiderDelete = id => {     
         axiosSecure.delete(`/riders/${id}`)
        .then(res =>{
        console.log(res.data);
        if(res.data.deletedCount){                    
        refetch(); // refresh data this ui
        Swal.fire({
        title: "Deleted!",
        text: "Rider has been deleted.",
        icon: "success"
        });
        }
    })} 

    return (
        <div>
            <h2 className="text-4xl mx-5">Rider Approve Panding: ({riders.length})</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Rider Name</th>
                    <th>Rider Email</th>
                    <th>Districts</th>                    
                    <th>Status</th>                    
                    <th>BE A Rider</th>                    
                    
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
               {
                    riders.map((r, index) => (

                        <tr key={r._id || index}>
                            <th>{index + 1}</th>
                            <td>{r.Name}</td>
                            <td>{r.email}</td>
                            <td>{r.Districts}</td>                           
                            <td>{r.status}</td>                           
                           <td>
                                {r.status === "panding" ? (
                                    <span className="btn btn-sm btn-primary text-white px-4">Pending</span>
                                ) : r.status === "rejction" ? (
                                    <span className="btn btn-sm text-red-500">Rejection</span>
                                ) : (
                                    <button className="btn btn-secondary hover:btn-primary text-accent btn-sm">
                                    BEX-Rider
                                    </button>
                                )}
                                </td>                            
                            <td>
                                <button onClick={()=> handelApproveRider(r)} className='btn btn-square hover:bg-primary'><MdPersonAdd className='text-3xl' /></button>

                                <button onClick={()=> handelRejctionRider(r)} className='btn btn-square hover:bg-primary mx-2'> <IoPersonRemoveSharp className='text-2xl' /></button>

                                <button onClick={()=> handelRiderDelete(r._id)} className='btn btn-square hover:bg-primary'><Trash2 /></button>
                            </td>
                        </tr>
                    ))
                }
                {/* onClick={()=>handelpayment(p)} */}
                {/* onClick={()=> handelParcleDelete(p._id)} */}
               
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ApproveRder;