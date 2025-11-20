import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

import { auth } from '../../Firebase/Firebase.init';



const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    

    const registerUser = (email, password,) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password,)
    }
    const singinUser = (email, password,) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password,)
    }
    const singinGoogle = () => {
        setLoading(true);
        return signInWithPopup (auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut (auth)
    }


    // observer 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        });
         return ()=>{
            unSubscribe();
         }
    },[])
       
    const Authinfo = {
        loading,
        user,
        setUser,
        registerUser,
        singinUser,
        singinGoogle,
        logOut,

    }

    return (
        <AuthContext value={Authinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;