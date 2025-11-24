import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import Loader from '../Pages/Loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} =UseAuth();
    const location = useLocation();
   //  console.log("location", location);

     if(loading){
        return <Loader />
     }
     if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
     }
     else{
        return children;
     }

};

export default PrivateRoute;