import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const UseAuth = () => {

    const authinfo = use(AuthContext)
    return authinfo
};

export default UseAuth;