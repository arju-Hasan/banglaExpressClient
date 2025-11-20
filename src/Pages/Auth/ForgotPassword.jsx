import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../Firebase/Firebase.init';

const ForgotPassword = () => {
 const {register,   formState:{ errors },} = useForm();

 const [error, setError] = useState("");
//    const { auth } = useContext(AuthContext);
//    console.log(auth);
 
 
   const location = useLocation();
   const prefilledEmail = location.state?.email || ""; 
 
   const handleReset = (e) => {
     e.preventDefault();
     const form = e.target;
     const email = form.email.value;
 
     sendPasswordResetEmail(auth, email)
       .then(() => {
         toast.success("Password reset email sent! chake your inbox or spame");
         window.open("https://mail.google.com/mail/u/0/#spam", "_blank");
       })
       .catch((error) => {
         setError(error.code);
         toast.error(`${error.code}: ${error.message}`);
       });
   };


    return (
        <div className='p-7 md:p-10'>
            <div className='grid gap-2 mb-2'>
                <h2 className='text-4xl text-primary'>Forgot Password</h2>
                <a href="" className=''>Enter your email address and we'll send you a reset link.</a>                
            </div>
            <div>
           <form onSubmit={handleReset}>
             <fieldset className="fieldset">
                {/* email */}
            <label className="label">Email</label>
            <input 
            type="email" {...register("email", {required:true})} 
            className="input w-full" 
            placeholder="Arju3h@gmail.com"
            defaultValue={prefilledEmail} 
             />
            {errors.email?.type==='required' && (
                <p className='text-red-500'>Email name is required</p>
            )}
          
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button className="btn btn-primary mt-4">Reset Password</button>
            </fieldset>
           </form>
           <p className='m-4'>Remember your password? <Link to="/Login"><span className='text-primary'>Login</span></Link></p>
           </div>
        </div>
        
    );
};

export default ForgotPassword;