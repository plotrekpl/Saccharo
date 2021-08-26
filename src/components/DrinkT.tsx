import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from 'src/store/store';

export const DrinkT = () => {
  const { drink } = useSelector((state: AppState) => state.drinkReducer);

  return (
    <View>
      <Text testID='test'>{drink?.id}</Text>
    </View>
  );
};

