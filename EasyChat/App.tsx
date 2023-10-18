/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/presentation/navigation/stackNavigator';

function App() {
  return(
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;
