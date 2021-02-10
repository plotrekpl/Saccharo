import AsyncStorage from '@react-native-community/async-storage';

import { asyncStorageKeys } from 'src/constants/enums/asyncStorageKeys';

export const getFromAsyncStorage = async (key: asyncStorageKeys): Promise<any> => {
  const data = await AsyncStorage.getItem(key);
  if (!data) {
    return undefined;
  }
  return JSON.parse(data);
};

export const saveToAsyncStorage = async (key: asyncStorageKeys, data: any): Promise<void> => {
  if (typeof data === 'object') {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } else {
    await AsyncStorage.setItem(key, data);
  }
};

export const removeFromAsyncStorage = async (key: asyncStorageKeys): Promise<void> => {
  await AsyncStorage.removeItem(key);
};
