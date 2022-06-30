import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from '../screens/Login';
import {Dispositivos} from '../screens/Dispositivos';

const Stack = createNativeStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dispositivos" component={Dispositivos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
