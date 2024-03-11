import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/authContext';
import { RootNavigator } from './src/navigation/RootNavigator';

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
