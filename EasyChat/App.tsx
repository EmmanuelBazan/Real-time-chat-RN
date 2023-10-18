/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/presentation/navigation/stackNavigator';
import { StatusBar } from 'react-native';

function App() {
  return(
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;
