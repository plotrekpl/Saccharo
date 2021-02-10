import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import Home from 'src/screens/Home';
import RegisterScreen from 'src/screens/RegisterScreen';
import UserScreen from 'src/screens/UserScreen';
import { AppState } from 'src/store/store';

import { Routes } from '../constants/enums/routes';

const RootNavigator = () => {
  const { auth } = useSelector((state: AppState) => state.userReducer);
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {auth ? (
        <Tab.Navigator>
          <Tab.Screen name={Routes.HomeScreen} component={Home} />
          <Tab.Screen name={Routes.UserScreen} component={UserScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.RegisterScreen}
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
