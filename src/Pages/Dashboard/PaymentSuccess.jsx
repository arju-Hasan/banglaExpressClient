
import React from 'react';
import { Link } from 'react-router';

const PaymentSuccess = () => {
    return (
        // <div>
        //     <h2>Thanks payment successfull</h2>
        //     <Link to="/">Home</Link>
        // </div>
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