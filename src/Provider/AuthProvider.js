
import React, {useState, useEffect, createContext} from 'react';
import {getAccessTokenApi, getRefreshTokenApi, refreshAccessTokenApi} from '../api/auth';

export const AuthContext = createContext();

export default function AuthProvider(props){
    const {children} = props;
    const [user, setUser] = useState({
        user: "Seba",
        isLoading: true
    });

    useEffect(()=>{
        checkUserLogin(setUser);
    })

    return <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
}

function checkUserLogin(setUser){
    const accessToken = getAccessTokenApi();
    console.log(accessToken);
}
