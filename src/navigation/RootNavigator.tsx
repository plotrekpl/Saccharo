import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { alertTypes } from 'src/constants/enums/alert';
import { asyncStorageKeys } from 'src/constants/enums/asyncStorageKeys';
import { HomeScreen, AuthScreen, UserScreen, ScanScreen } from 'src/screens';
import { AppState } from 'src/store/store';
import { getUserStarted } from 'src/store/user/userActions';
import { palette } from 'src/styles/palette';
import alertHandler from 'src/utils/helpers/alertHandler';
import { getFromAsyncStorage } from 'src/utils/helpers/asyncStorageHelpers';

import { Routes } from '../constants/enums/routes';

const RootNavigator: React.FC = () => {
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
      alertHandler(error, alertTypes.alert);
    }
  };

  useEffect(() => {
    tryLogin();
  }, []);

  return (
    <NavigationContainer>
      {user?.uid ? (
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 22,
              fontFamily: 'Rajdhani-Medium',
              alignItems: 'center',
              width: 100,
              height: 40,
            },
            activeTintColor: palette.orange,
          }}>
          <Tab.Screen name={Routes.HomeScreen} component={HomeScreen} />
          <Tab.Screen name={Routes.UserScreen} component={UserScreen} />
          <Tab.Screen name={Routes.ScanScreen} component={ScanScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.RegisterScreen}
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
