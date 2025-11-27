import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import { LuCircleUserRound } from 'react-icons/lu';
import SocialLogin from './SocialLogin/SocialLogin';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';


const Register = () => {

    const {register, handleSubmit,  formState:{ errors },} = useForm();
    const {registerUser, userUpdateProfile} = UseAuth();
    const location = useLocation();
    const Navigate = useNavigate();
    const axiosSecure =UseAxiosSecure();
    

    const [showPassword, setShowPassword] = useState(false); 
     const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
    const handelRegister = (data)  => {
        console.log('after register data', data.image);
        const ProfileImg = data.image[0];

        registerUser(data.email, data.password, data.name)
        .then(result => {
            console.log(result.user);

            // store profile image
            const formData = new FormData();
            formData.append("image", ProfileImg)

            // sent user profile to store
            const Image_Api_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_Key}`
            axios.post(Image_Api_Url, formData)
            .then( res =>{
                const photourl = res.data.data.display_url;

              // create user in the database
              const userInfo = {
                email: data.email,
                displayName: data.name,
                photoURL: photourl,
              }
              axiosSecure.post('/users', userInfo)
              .then(res =>{
                if(res.data.insertedId){
                  console.log('after created user in the database');
                }
              })

                // update user profile fairbase
                const userProfile = {
                  email: data.email,
                  displayName : data.name,
                  photoURL: photourl,
                }
                userUpdateProfile(userProfile)
                .then(() => {
                    // console.log("user profile update done");
                    toast.success('user profile update done')
                     Navigate(location?.state || "/")
                    })
                .catch(error =>{
                console.log(error);
                 })
            })
          })        
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='p-7 md:p-10'>
            <div className='grid gap-2 mb-2'>
                <h2 className='text-4xl text-primary'>Create an Account</h2>
                <a href="" className=''>Login with Bangal Express</a>
                 {/* <LuCircleUserRound className='text-primary text-5xl' /> */}
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
            <input type="file" {...register("image", {required:true})} className="input file-input w-full"/>
            {errors.image?.type==='required' && (
                <p className='text-red-500'>image is required</p>
            )}
                {/* email */}
            <label className="label">Email</label>
            <input type="email" {...register("email", {required:true})} className="input w-full" placeholder="arju3h@gmail.com" />
            {errors.email?.type==='required' && (
                <p className='text-red-500'>Email name is required</p>
            )}
            {/* password */}
            <label className="label">Password</label>
            <div className='relative'>
                  <input 
                  type={showPassword ? "text" : "password"}  
                  {...register("password", {required:true, minLength: 6})}
                   className="input w-full"
                    placeholder="Password" />
                   <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 z-10"
              >
                {showPassword ? (
                  <Eye />
                ) : (
                  <EyeOff />
                )}
              </button>
            </div>
          
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
           <p className='m-4'>You have any account? <Link state={location.state} to="/Login"><span className='text-primary'>Login</span></Link></p>
           <SocialLogin />
        </div>
        </div>
    );
};

export default Register;