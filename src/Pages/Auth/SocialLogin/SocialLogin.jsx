import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    const {singinGoogle} =UseAuth();
    const location = useLocation();
    const Navigate = useNavigate();
    const axiosSecure = UseAxiosSecure();


    const handelGooglesingIn = () =>{
        singinGoogle()
        .then(result=>{
            console.log("After singin",  result.user);
            

              // update user profile fairbase
                const userInfo = {
                    email: result.user.email,
                    displayName : result.user.displayName,
                    photoURL: result.user.photoURL,
                }
                axiosSecure.post('/users', userInfo)
              .then(res =>{                
                  console.log('user data store the database', res.data);
                  Navigate(location?.state || "/")                
        })
        .catch(error=>{
            console.log(error);
        })
    })
}
    return (
        <div className='flex flex-col gap-4 mt-4'>
            
            <h3 className='text-center'>Or</h3>
            {/* google */}
            <button onClick={handelGooglesingIn} className="btn text-center bg-white text-black border-[#e5e5e5]">
                <FcGoogle className='text-2xl' />
             Continue With Google
            </button>
            </div>
    );
};

export default SocialLogin;


