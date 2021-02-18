import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { IDrink } from 'src/constants';
import { getDrinksStarted } from 'src/store/drink/drinkActions';
import { AppState } from 'src/store/store';

import { Drink } from '.';

export const ListDrinks: React.FC = () => {
  const drinks: IDrink[] = useSelector((state: AppState) => state.drinkReducer.drinks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrinksStarted());
  }, []);

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
