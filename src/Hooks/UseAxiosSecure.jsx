import React, { useEffect } from 'react';
import axios from 'axios';
import UseAuth from './UseAuth';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const UseAxiosSecure = () => {
    const {user} = UseAuth();
    

    //janker sir 
    useEffect(() =>{
    axiosSecure.interceptors.request.use( config => {
    config.headers.Authorization = `Bearer ${user.accessToken} `
     return config;
  })
    },[user])




     //   ai make 
//  useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use(async (config) => {
//       if (user) {
//         const token = await user.getIdToken();
//         config.headers.authorization = `${token}`;
//       }
//       return config;
//     });
// 
//     return () => {
//       axiosSecure.interceptors.request.eject(interceptor);
//     };
//   }, [user]);

    return axiosSecure;
};

export default UseAxiosSecure;
// ===============================

//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use(async (config) => {
//       if (user) {
//         const token = await user.getIdToken();
//         config.headers.authorization = `${token}`;
//       }
//       return config;
//     });
// 
//     return () => {
//       axiosSecure.interceptors.request.eject(interceptor);
//     };
//   }, [user]);

  