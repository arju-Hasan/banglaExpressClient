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
            <div className='flex flex-wrap gap-4 justify-center items-center p-4'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <img className='flex-1' src={loginImg} alt="" />
                
            </div>
            </Container>
        </div>
    );
};

export default AuthLayout;