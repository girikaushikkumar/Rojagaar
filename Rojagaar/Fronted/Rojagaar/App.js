import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/authContext';
import {RootNavigator} from './src/navigation/RootNavigator';
import {PostProvider} from './src/context/PostContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PostProvider>
          <RootNavigator />
        </PostProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
