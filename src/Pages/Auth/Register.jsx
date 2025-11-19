import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';

const Register = () => {

    const {register, handleSubmit,  formState:{ errors },} = useForm();
    const {registerUser,} = UseAuth();
    
    const handelRegister = (data)  => {
        console.log('after register data', data);
        registerUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div>
           <form onSubmit={handleSubmit(handelRegister)}>
             <fieldset className="fieldset">
                {/* email */}
            <label className="label">Email</label>
            <input type="email" {...register("email", {required:true})} className="input" placeholder="Email" />
            {errors.email?.type==='required' && (
                <p className='text-red-500'>Email name is required</p>
            )}
            {/* password */}
            <label className="label">Password</label>
            <input type="password" {...register("password", {required:true, minLength: 6})} className="input" placeholder="Password" />
            {errors.password?.type==='required' && (
                <p className='text-red-500'>Password name is required</p>
            )}
            {
              errors.password?.type==='minLength' && (
            <p className='text-red-500'>Password must be 6 characters or longer</p> )             
            }
             {/* {
              errors.password?.type==='pattern' && (
            <p className='text-red-500'>upercase,lowercase, number & spachal characters</p> )             
            } */}

            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Register Now</button>
            </fieldset>
           </form>
        </div>
        </div>
    );
};

export default Register;