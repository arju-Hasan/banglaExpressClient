import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
// import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';

const AuthProvider = ({children}) => {

    const registerUser = (email, password,) =>{
        return createUserWithEmailAndPassword(auth, email, password,)
    }
    const singinUser = (email, password,) =>{
        return signInWithEmailAndPassword (auth, email, password,)
    }
       
    const Authinfo = {
        registerUser,
        singinUser,

    }

    return (
        <AuthContext value={Authinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;