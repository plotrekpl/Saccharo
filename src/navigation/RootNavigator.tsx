import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import 'react-native-gesture-handler';
import Home from 'src/screens/Home';
import User from 'src/screens/User';
import RegisterScreen from 'src/screens/register/RegisterScreen';

import { Routes } from '../constants/enums/routes';

const RootNavigator = () => {
  /** I suppose this is temporary mock. For those, please consider adding 'Mock' in name to be easy to find i.e.: tokenMock or comment for the same reasons*/
  const token = true;
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {token ? (
        <Tab.Navigator>
          <Tab.Screen name={Routes.HomeScreen} component={Home} />
          <Tab.Screen name={Routes.UserScreen} component={User} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name={Routes.RegisterScreen} component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
