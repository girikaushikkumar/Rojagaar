import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // global state
    const [userState, setUserState] = useState({
        user: null,
        token: '',
    });

    // default axios settings
    // axios.defaults.baseURL = 'http://192.168.42.244:8080/api';

    // get initial storage data
    useEffect(() => {
        const getLocalStorageData = async() => {
            let data = await AsyncStorage.getItem('@auth');
            let loginData = JSON.parse(data);
            setUserState({...userState, user: loginData?.user, token: loginData?.token});
        }

        getLocalStorageData();
    }, []);

    return (
        <AuthContext.Provider value={[userState, setUserState]}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};