import React from 'react';
import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <div className='flex flex-col items-center p-2'>
            <a className='text-xl  m-4 '><img className='w-30 h-20' src={logo} alt="Logo" /></a>
            <h2 className='text-2xl text-primary -mt-7'>BanglaExpress</h2>
        </div>
    );
};

export default Logo;