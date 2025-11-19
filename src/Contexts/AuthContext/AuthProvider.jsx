import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../Firebase/Firebase.init';



const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)

    

    const registerUser = (email, password,) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password,)
    }
    const singinUser = (email, password,) =>{
        setLoding(true);
        return signInWithEmailAndPassword (auth, email, password,)
    }
    const singinGoogle = () => {
        setLoding(true);
        return signInWithPopup (auth, googleProvider)
    }
       
    const Authinfo = {
        loding,
        user,
        setUser,
        registerUser,
        singinUser,
        singinGoogle,

    }

    return (
        <AuthContext value={Authinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;