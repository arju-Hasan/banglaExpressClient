// import React, { createContext } from 'react';
// 
// 
// export const AuthContext = createContext()



import React, { createContext } from 'react';
import { auth } from '../../Firebase/Firebase.init';
// import app from '../../firebase'; // তোমার firebase config

;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


  return (
    <AuthContext.Provider value={{ auth }}>
      {children}
    </AuthContext.Provider>
  );
};
