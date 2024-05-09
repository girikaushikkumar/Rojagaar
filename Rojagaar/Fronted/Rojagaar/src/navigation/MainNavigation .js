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
  faArrowLeft,
  faBars,
  faBookmark,
  faCirclePlus,
  faEye,
  faHouse,
  faLayerGroup,
  faPeopleGroup,
  faUser,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import Job from '../screens/Job/Job';
import PostJob from '../screens/PostJob/PostJob';
import ViewJobPost from '../screens/ViewJobPost/ViewJobPost';
import ApplyJob from '../screens/ApplyJob/ApplyJob';
import JobPostDetails from '../screens/ViewJobPostDetails/JobPostDetails';
import ApplicationStatus from '../screens/ApplicationStatus/ApplicationStatus';
import ViewPostDetails from '../screens/ViewPostDetails/ViewPostDetails';
import JobPostStatus from '../screens/JobPostStatus/JobPostStatus';
import {TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import CreateTeam from '../screens/Team/CreateTeam/CreateTeam';
import JoinTeam from '../screens/Team/JoinTeam/JoinTeam';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ApplicationStatusTabTitle from '../components/ApplicationStatusTabTitle/ApplicationStatusTabTitle';
import JobStatusDetails from '../components/JobStatusDetails/JobStatusDetails';
import Hiring from '../screens/Hire/Hiring';
import {faHireAHelper} from '@fortawesome/free-brands-svg-icons';
import JobInvites from '../screens/JobInvites/JobInvites';
import HiringStatus from '../screens/HiringStatus/HiringStatus';
import Dashboard from '../screens/Dashboard/Dashboard';
import Category from '../screens/Category/Category';
import ViewTeam from '../screens/Team/ViewTeam/ViewTeam';
import ViewJoinRequest from '../screens/Team/ViewJoinRequest/ViewJoinRequest';
import ViewMember from '../screens/Team/ViewTeamMember/ViewMember';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ApplicationStatusTab = createMaterialTopTabNavigator();

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

export const ApplicationStatusTabNavigation = () => {
  return (
    <ApplicationStatusTab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          // backgroundColor:'transparent'
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ApplicationStatusTab.Screen
        name="Tab1"
        options={{
          tabBarLabel: ({focused}) => (
            <ApplicationStatusTabTitle isFocused={focused} title={'Pending'} />
          ),
        }}
        component={JobStatusDetails}
        initialParams={{status: 'Pending'}}
      />
      <ApplicationStatusTab.Screen
        name="Tab2"
        options={{
          tabBarLabel: ({focused}) => (
            <ApplicationStatusTabTitle isFocused={focused} title={'Accepted'} />
          ),
        }}
        component={JobStatusDetails}
        initialParams={{status: 'Accepted'}}
      />
      <ApplicationStatusTab.Screen
        name="Tab3"
        options={{
          tabBarLabel: ({focused}) => (
            <ApplicationStatusTabTitle isFocused={focused} title={'Rejected'} />
          ),
        }}
        component={JobStatusDetails}
        initialParams={{status: 'Rejected'}}
      />
    </ApplicationStatusTab.Navigator>
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
        name="Back"
        component={StackNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faArrowLeft} size={size}/>
          ),
          drawerActiveTintColor:'#000',
          drawerActiveBackgroundColor: '#ffffff',
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Dashboard}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHouse} size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="My Work Order"
        component={JobInvites}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faLayerGroup} size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={Routes.Hiring}
        component={Category}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHireAHelper} size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={Routes.Job}
        component={Job}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faLayerGroup} size={size} color={color} />
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
        name={Routes.CreateTeam}
        component={CreateTeam}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faPeopleGroup} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={Routes.JoinTeam}
        component={JoinTeam}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faUserPlus} size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const AuthenticatedNavigator = () => {
  return <DrawerNavigator />;
};

const StackNavigator = ({
  job,
  jobPosterName,
  jobPosterPhoto,
  skill,
  village,
  member,
  teamId
}) => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <FontAwesomeIcon
                icon={faBars}
                color="#000000"
                size={24}
                style={{marginLeft: 10}}
              />
            </TouchableOpacity>
          );
        },
      }}
      initialRouteName={Routes.Dashboard}>
       <Stack.Screen name={Routes.Dashboard} component={Dashboard} />
      <Stack.Screen name={Routes.Job} component={Job} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
      <Stack.Screen name={Routes.SavedJob} component={SavedJob} />
      <Stack.Screen
        name={Routes.ApplyJob}
        component={ApplyJob}
        initialParams={{job, jobPosterName, jobPosterPhoto}}
      />
      <Stack.Screen
        name={Routes.JobPostDetails}
        component={JobPostDetails}
        initialParams={job}
      />
      <Stack.Screen
        name={Routes.ViewPostDetails}
        component={ViewPostDetails}
        initialParams={{job, jobPosterName, jobPosterPhoto}}
      />
      <Stack.Screen
        name={Routes.JobPostStatus}
        component={JobPostStatus}
        initialParams={job}
      />
     
      <Stack.Screen name={Routes.Category} component={Category} />
      <Stack.Screen
        name={Routes.Hiring}
        component={Hiring}
        initialParams={{skill, village}}
      />
      <Stack.Screen name={Routes.JobInvites} component={JobInvites}/>
      <Stack.Screen name={Routes.ViewTeam} component={ViewTeam} />
      <Stack.Screen name={Routes.ApplicationStatus} component={ApplicationStatus} />
      <Stack.Screen name={Routes.ViewJobPost} component={ViewJobPost}/>
      <Stack.Screen name={Routes.HiringStatus} component={HiringStatus}/>
      <Stack.Screen name={Routes.ViewJoinRequest} component={ViewJoinRequest} initialParams={{teamId,member}}/>
      <Stack.Screen name={Routes.ViewMemeber} component={ViewMember} initialParams={{member}}/>
    </Stack.Navigator>
  );
};

export {AuthenticatedNavigator, NonAuthenticatedNavigator, StackNavigator};
