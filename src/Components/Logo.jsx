import React from 'react';
import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <div className='flex flex-col items-center '>
            <span className='text-xl '><img  src={logo} alt="Logo" /></span>
           
        </div>
    );
};

export default Logo;