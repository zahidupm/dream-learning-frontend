import { getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../configs/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={''}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;