import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { Router } from './src/routers';
import React from 'react';

enableScreens();

export default function App(){
  return (
    <SafeAreaProvider>
      <NavigationContainer>
            <Router/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}