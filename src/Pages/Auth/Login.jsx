import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin/SocialLogin';



const Login = () => {

    const {register, handleSubmit,  formState:{ errors },} = useForm();
    const { singinUser,} = UseAuth();
    const location = useLocation();
    // console.log(location);
    const Navigate = useNavigate();
    // console.log(Navigate);
    
    const handelLogin = (data)  => {
        // console.log('after login data', data);

         singinUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            Navigate(location?.state || "/")
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleForgotPassword = () => {
  const email = document.querySelector('input[name="email"]').value;
  Navigate("/forgot", { state: { email } });
};





    return (
        <div className='p-7 md:p-10'>
            <div className='grid gap-2 mb-2'>
                <h2 className='text-4xl text-primary'>Welcome Back</h2>
                <a href="" className=''>Login with ZapShift</a>                
            </div>
            <div>
           <form onSubmit={handleSubmit(handelLogin)}>
             <fieldset className="fieldset">
                {/* email */}
            <label className="label">Email</label>
            <input type="email" {...register("email", {required:true})} className="input w-full" placeholder="Arju3h@gmail.com" />
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
             
            <p onClick={handleForgotPassword} className='hover:text-primary underline'>Forget Password?</p>
            <button className="btn btn-primary mt-4">Login</button>
            </fieldset>
           </form>
           <p className='m-4'>Don’t have any account? <Link state={location.state} to="/Register"><span className='text-primary'>Register</span></Link></p>
           {/* sociall login */}
          <SocialLogin />

        </div>
        </div>
    );
};

export default Login;