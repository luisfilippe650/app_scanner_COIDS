import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Data from './screens/data';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Data"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Data" component={Data} />
    </Stack.Navigator>
  );
}
