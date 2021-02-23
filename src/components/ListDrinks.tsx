import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { IDrink } from 'src/constants';

import { Drink } from './Drink';

interface IProps {
  drinks: IDrink[];
}

export const ListDrinks: React.FC<IProps> = ({ drinks }) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        {drinks.map((drink) => (
          <Drink key={drink.barCode} drink={drink} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
  },
});
