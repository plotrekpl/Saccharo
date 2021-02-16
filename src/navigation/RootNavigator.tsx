import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { asyncStorageKeys } from 'src/constants/enums/asyncStorageKeys';
import { HomeScreen, RegisterScreen, UserScreen } from 'src/screens';
import { AppState } from 'src/store/store';
import { getUserStarted } from 'src/store/user/userActions';
import { getFromAsyncStorage } from 'src/utils/helpers/asyncStorageHelpers';

import { Routes } from '../constants/enums/routes';

const RootNavigator = () => {
  const { user } = useSelector((state: AppState) => state.userReducer);
  const dispatch = useDispatch();
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const tryLogin = async () => {
    try {
      const userData = await getFromAsyncStorage(asyncStorageKeys.userData);
      if (!userData.uid) {
        return;
      }
      dispatch(getUserStarted(userData.uid));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    tryLogin();
  }, []);

  return (
    <NavigationContainer>
      {user?.uid ? (
        <Tab.Navigator>
          <Tab.Screen name={Routes.HomeScreen} component={HomeScreen} />
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
