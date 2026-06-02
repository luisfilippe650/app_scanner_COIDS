import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Inicio from './src/screens/inicio';
import { View, Text } from 'react-native';
import React from 'react';

export default function App(){
  return (
    <SafeAreaView>
      <View>
      <Inicio/>
      </View>
    </SafeAreaView>
  );
}