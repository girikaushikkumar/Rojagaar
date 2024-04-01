import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile/Profile';
import User_Login from '../screens/auth/User_Login';
import Register from '../screens/auth/Register';
import SavedJob from '../screens/SavedJob/SavedJob';
import {Routes} from './Routes';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import {getFontFamily} from '../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../assets/style/scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faCirclePlus,
  faEye,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Job from '../screens/Job/Job';
import PostJob from '../screens/PostJob/PostJob';
import ViewJobPost from '../screens/ViewJobPost/ViewJobPost';
import ApplyJob from '../screens/ApplyJob/ApplyJob';
import JobPostDetails from '../screens/ViewJobPostDetails/JobPostDetails';
import ApplicationStatus from '../screens/ApplicationStatus/ApplicationStatus';
import ViewPostDetails from '../screens/ViewPostDetails/ViewPostDetails';
import JobPostStatus from '../screens/JobPostStatus/JobPostStatus';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NonAuthenticatedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.User_Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.User_Login} component={User_Login} />
      <Stack.Screen name={Routes.Register} component={Register} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = ({job}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: horizontalScale(-15),
          fontFamily: getFontFamily('Inter', 600),
          fontSize: scaleFontSize(15),
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHouse} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={Routes.SavedJob}
        component={SavedJob}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faBookmark} size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={Routes.PostJob}
        component={PostJob}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faCirclePlus} size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={Routes.ViewJobPost}
        component={ViewJobPost}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faEye} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={Routes.ApplicationStatus}
        component={ApplicationStatus}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faEye} size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const AuthenticatedNavigator = () => {
  return <DrawerNavigator />;
};

const StackNavigator = ({job, jobPosterName, jobPosterPhoto}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Job} component={Job} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
      <Stack.Screen name={Routes.SavedJob} component={SavedJob} />
      <Stack.Screen name={Routes.ApplyJob} component={ApplyJob} initialParams={{job, jobPosterName, jobPosterPhoto}}/>
      <Stack.Screen name={Routes.JobPostDetails} component={JobPostDetails} initialParams={job} />
      <Stack.Screen name={Routes.ViewPostDetails} component={ViewPostDetails} initialParams={{job, jobPosterName, jobPosterPhoto}}/>
      <Stack.Screen name={Routes.JobPostStatus} component={JobPostStatus} initialParams={job}/>
    </Stack.Navigator>
  );
};

export {AuthenticatedNavigator, NonAuthenticatedNavigator, StackNavigator};
