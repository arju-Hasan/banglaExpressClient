import React from 'react';
import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <div className='items-center  p-2'>
            <img src={logo} alt="Logo" />
            <h2 className='text-2xl -mt-4'>BanglaExpress</h2>
        </div>
    );
};

export default Logo;