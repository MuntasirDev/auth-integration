import React, { use } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userInfo=
    {
        email: ' alimuntasir2001@gmail.com'
    }
    return (
       <AuthContext value={userInfo}>
{children}
       </AuthContext>
    );
};

export default AuthProvider;