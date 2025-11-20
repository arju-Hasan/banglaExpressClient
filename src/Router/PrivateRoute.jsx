import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import Loader from '../Pages/Loading/Loading';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} =UseAuth();

     if(loading){
        return <Loader />
     }
     if(!user){
        return <Navigate to="/login"></Navigate>
     }
     else{
        return children;
     }

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;