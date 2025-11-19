import React from 'react';
import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <div className='flex flex-col items-center '>
            <a className='text-xl '><img  src={logo} alt="Logo" /></a>
           
        </div>
    );
};

export default Logo;