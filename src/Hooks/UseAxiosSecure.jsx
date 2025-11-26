import React, { useEffect } from 'react';
import axios from 'axios';
import UseAuth from './UseAuth';
import { useNavigate } from 'react-router';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const UseAxiosSecure = () => {
    const {user, logOut} = UseAuth();
    const navigate = useNavigate();
    

    //janker sir 
    useEffect(() => {
        // interceptor request
    const interceptor = axiosSecure.interceptors.request.use( async (config) => {
        //this is working
    config.headers.Authorization = `Bearer ${user.accessToken}`
        //another one
    // config.headers.Authorization = `Bearer ${await user.getIdToken()}`
//another one
    // if (user) {
    //     const token = await user.getIdToken();
    //     config.headers.authorization = `Bearer ${token}`;
    //   }

     return config;
  })
  // interceptor respones
   const resinterceptor = axiosSecure.interceptors.response.use((response) =>{
    return response;
   },(error)=>{
    console.log(error);

    // const statuscode = error.status;
    const statuscode = error.response?.status;
    if ( statuscode === 401 || statuscode === 403){
        logOut()
        .then(()=>{
            navigate('/login')
        })
    }
    return Promise.reject(error);
})

  return () => {
      axiosSecure.interceptors.request.eject(interceptor);
      axiosSecure.interceptors.response.eject(resinterceptor)
    };
    },[user])

    return axiosSecure;
};

export default UseAxiosSecure;

  