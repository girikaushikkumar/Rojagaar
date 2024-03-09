import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/authContext';
import { RootNavigator } from './navigation/RootNavigator';
import { FooterNavigator } from './navigation/FooterNavigation';


const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigator/>
      </AuthProvider>
    </NavigationContainer>

   
    
  );
};

export default App;
