import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const ForgotPassword = () => {
 const {register,   formState:{ errors },} = useForm();
//     const { singinUser,} = UseAuth();
//     
//     const handelLogin = (data)  => {
//         console.log('after login data', data);
//          singinUser(data.email, data.password)
//         .then(result => {
//             console.log(result.user);
//         })
//         .catch(error =>{
//             console.log(error);
//         })
//     }
    return (
        <div className='p-7 md:p-10'>
            <div className='grid gap-2 mb-2'>
                <h2 className='text-4xl text-primary'>Forgot Password</h2>
                <a href="" className=''>Enter your email address and we'll send you a reset link.</a>                
            </div>
            <div>
           <form>
             <fieldset className="fieldset">
                {/* email */}
            <label className="label">Email</label>
            <input type="email" {...register("email", {required:true})} className="input w-full" placeholder="Arju3h@gmail.com" />
            {errors.email?.type==='required' && (
                <p className='text-red-500'>Email name is required</p>
            )}
          

            <button className="btn btn-primary mt-4">Send</button>
            </fieldset>
           </form>
           <p className='m-4'>Remember your password? <Link to="/Login"><span className='text-primary'>Login</span></Link></p>
           </div>
        </div>
        
    );
};

export default ForgotPassword;