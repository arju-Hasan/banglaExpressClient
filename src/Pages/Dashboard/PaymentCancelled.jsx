import { Link } from 'react-router-dom';
import React from 'react';

const PaymentCancelled = () => {
    return (
        <div className="h-screen flex justify-center items-center text-center">
        <div>
            <h2>Your payment Cancelled, try again!</h2>

            <Link to="/dashboard/my-parcles">
                <button className="btn btn-primary my-4 hover:btn-secondary hover:text-accent btn-sm">
                    My-Parcle
                </button>
            </Link>
        </div>
        </div>
    );
};

export default PaymentCancelled;
