import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/authContext';
import {RootNavigator} from './src/navigation/RootNavigator';
import {PostProvider} from './src/context/PostContext';
import { LocationProvider } from './src/context/LocationContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PostProvider>
          <LocationProvider>
             <RootNavigator />
          </LocationProvider>
        </PostProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
