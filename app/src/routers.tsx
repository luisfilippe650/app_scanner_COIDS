import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './screens/inicio';
import Dados from './screens/dados';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Dados" component={Dados} />
    </Stack.Navigator>
  );
}
