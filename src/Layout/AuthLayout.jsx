import React from 'react';
import Logo from '../Components/Logo';
import loginImg from "../assets/authImage.png"
import Container from '../Components/Container';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Container>
            <div className='flex justify-start w-30 '>
                <Logo></Logo>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center p-4'>
                <div className='col-span-1 order-2 md:order-1'>
                    <Outlet></Outlet>
                </div>
                <img className='col-span-1 order-1 md:order-2' src={loginImg} alt="" />
                
            </div>
            </Container>
        </div>
    );
};

export default AuthLayout;