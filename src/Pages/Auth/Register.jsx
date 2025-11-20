import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router';
import { LuCircleUserRound } from 'react-icons/lu';
import SocialLogin from './SocialLogin/SocialLogin';

const Register = () => {

    const {register, handleSubmit,  formState:{ errors },} = useForm();
    const {registerUser,} = UseAuth();
    
    const handelRegister = (data)  => {
        console.log('after register data', data.image[0]);
        registerUser(data.email, data.password, data.name)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='p-7 md:p-10'>
            <div className='grid gap-2 mb-2'>
                <h2 className='text-4xl text-primary'>Create an Account</h2>
                <a href="" className=''>Login with ZapShift</a>
                 <LuCircleUserRound className='text-primary text-5xl' />
            </div>
            <div>
           <form onSubmit={handleSubmit(handelRegister)}>
             <fieldset className="fieldset">
                   {/* name */}
            <label className="label">Name</label>
            <input type="text" {...register("name", {required:true})} className="input w-full" placeholder="Arju Hasan" />
            {errors.name?.type==='required' && (
                <p className='text-red-500'>Name is required</p>
            )}
            {/*User Photo */}
             <label className="label">Profile Image</label>
            <input type="file" {...register("file", {required:true})} className="input file-input w-full"/>
            {errors.file?.type==='required' && (
                <p className='text-red-500'>image is required</p>
            )}
                {/* email */}
            <label className="label">Email</label>
            <input type="email" {...register("email", {required:true})} className="input w-full" placeholder="Email" />
            {errors.email?.type==='required' && (
                <p className='text-red-500'>Email name is required</p>
            )}
            {/* password */}
            <label className="label">Password</label>
            <input type="password" {...register("password", {required:true, minLength: 6})} className="input w-full" placeholder="Password" />
            {errors.password?.type==='required' && (
                <p className='text-red-500'>Password name is required</p>
            )}
            {
              errors.password?.type==='minLength' && (
            <p className='text-red-500'>Password must be 6 characters or longer</p> )             
            }
             

           
            <button className="btn btn-primary mt-4">Register Now</button>
            </fieldset>
           </form>
           <p className='m-4'>You have any account? <Link to="/Login"><span className='text-primary'>Login</span></Link></p>
           <SocialLogin />
        </div>
        </div>
    );
};

export default Register;