import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useEffect, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({children}) => {

    //global state
    const [state,setState] = useState({
        user : null,
        token : "",
    });

    //initial local storage data
    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data = await AsyncStorage.getItem("@auth");
            let loginData = JSON.parse(data);

            setState({...state,user:loginData?.user,token: loginData?.token});
        };
        loadLocalStorageData();
    },[]);

    let token = state && state.token;

    //default axios setting
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.defaults.baseURL="http://192.168.42.235:8080/api";

    return(
        <AuthContext.Provider value={[state,setState]}>
            {children}
        </AuthContext.Provider>
    );

};

export {AuthContext,AuthProvider};