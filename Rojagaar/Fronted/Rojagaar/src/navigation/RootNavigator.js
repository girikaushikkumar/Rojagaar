import { useContext } from "react"
import { AuthContext } from "../context/authContext";
import { AuthenticatedNavigator,NonAuthenticatedNavigator } from "./MainNavigation "; 

export const RootNavigator = () => {
    const [userState] = useContext(AuthContext);
    const isLoggedIn = userState?.user && userState?.token;

    return isLoggedIn ? <AuthenticatedNavigator/> : <NonAuthenticatedNavigator/>
}