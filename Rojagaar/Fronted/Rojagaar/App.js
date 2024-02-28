import {Text, View } from 'react-native';
import React from 'react';
import Register from './screens/auth/Register';
import User_Login from './screens/auth/User_Login';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation ';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
    
  );
};

export default App;
