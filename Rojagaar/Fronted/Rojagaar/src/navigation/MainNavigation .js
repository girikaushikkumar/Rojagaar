import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes"; 
import Profile from "../screens/Profile/Profile";
import User_Login from "../screens/auth/User_Login";
import Home from "../screens/Home/Home";
import Register from "../screens/auth/Register";
import SavedJob from "../screens/SavedJob/SavedJob";

const Stack = createStackNavigator();

 const NonAuthenticatedNavigator = () => {
    return(
        <Stack.Navigator initialRouteName={Routes.User_Login} screenOptions={{header: ()=> null,headerShown:false}}>
           <Stack.Screen name={Routes.User_Login} component={User_Login}/>
           <Stack.Screen name={Routes.Register} component={Register} />

        </Stack.Navigator>
    );
};

 const AuthenticatedNavigator = () => {
    return(
        <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{header: ()=> null,headerShown:false}}>
           <Stack.Screen name={Routes.Home} component={Home}/>
           <Stack.Screen name={Routes.Profile} component={Profile}/>
           <Stack.Screen name = {Routes.SavedJob} component={SavedJob}/>
        </Stack.Navigator>
    );
};






export {AuthenticatedNavigator,NonAuthenticatedNavigator};
