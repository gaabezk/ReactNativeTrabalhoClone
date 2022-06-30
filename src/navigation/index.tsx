import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dispositivos} from '../screens/Dispositivos';
import {Image} from 'react-native';
import telaInicial from '../assets/icons/telaInicial.png';
import comunicacao from '../assets/icons/comunicacao.png';
import reproducao from '../assets/icons/reproducao.png';
import dispositivos from '../assets/icons/Dispositivos.png';
import mais from '../assets/icons/Mais.png';
import {Breve} from '../screens/Breve';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dispositivos"
      screenOptions={{
        tabBarActiveTintColor: '#059fd1',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Tela inicial"
        component={Breve}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{tintColor: color, width: 22, height: 22}}
              source={telaInicial}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Comunicação"
        component={Breve}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{tintColor: color, width: 22, height: 22}}
              source={comunicacao}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Reprodução"
        component={Breve}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{tintColor: color, width: 22, height: 22}}
              source={reproducao}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Dispositivos"
        component={Dispositivos}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{tintColor: color, width: 22, height: 22}}
              source={dispositivos}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Mais"
        component={Breve}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{tintColor: color, width: 22, height: 22}}
              source={mais}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
