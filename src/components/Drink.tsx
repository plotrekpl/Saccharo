import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { IDrink } from 'src/constants';

interface IProps {
  drink: IDrink;
}

export const Drink: React.FC<IProps> = ({ drink }) => {
  return (
    <View style={styles.drinkWrapper}>
      <Text style={styles.drinkElement}>{drink.name}</Text>
      <Text style={styles.drinkElement}>{drink.amountOfSugar}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  drinkWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
    padding: 10,
  },
  drinkElement: {
    fontSize: 22,
  },
});
