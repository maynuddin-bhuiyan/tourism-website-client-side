import React, { createContext } from 'react';
import useFirebase from '../Page/Hooks/useFirebase';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const allConstsxt = useFirebase();

    return (

        <AuthContext.Provider value={allConstsxt}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;