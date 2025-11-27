import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { ScanEye, SquarePen, Trash2 } from 'lucide-react';

const ApproveRder = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: riders = []} = useQuery({
        queryKey: ['riders', 'panding'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/riders');
            return(res.data)
        }
    });
    console.log(riders);
     
    const handelApproveRider = {

    }

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
                                {
                                    r.status === "panding" ? 
                                     <button onClick={()=> handelApproveRider(r._id)}  className='btn btn-secondary hover:btn-primary text-accent btn-sm' >Make A Rider</button>
                                    :                                    
                                   <span className='btn btn-sm btn-primary text-white'>Panding</span>
                                }
                                </td>

                            
                            <td>
                                <button className='btn btn-square hover:bg-primary'><ScanEye /></button>

                                <button className='btn btn-square hover:bg-primary mx-2'> <SquarePen /></button>

                                <button  className='btn btn-square hover:bg-primary'><Trash2 /></button>
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