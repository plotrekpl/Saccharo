import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from 'src/store/store';
import { addDrinkStarted } from 'src/store/user/userActions';

import { CustomButton } from './CustomButton';

export const AddDrink: React.FC = () => {
  const { t } = useTranslation();
  const { drink } = useSelector((state: AppState) => state.drinkReducer);
  const dispatch = useDispatch();
  console.log(drink);
  /** I am not sure what this component does. Do we add drink here or we show drink here?
   * On one hand we are not sure that drink will be available to display<Text>{drink?.name}</Text>,
   * on the other we are sure it will be available addDrinkStarted(drink!)
   * It seems like this code will generate errors when drink is not yest fetched from state or db */
  return (
    <View>
      <View style={styles.describeWrapper}>
        <Text>{t('drink.name')}</Text>
        <Text>{t('drink.sugar')}</Text>
      </View>
      <View style={styles.drinkWrapper}>
        <Text>{drink?.name}</Text>
        <Text>{drink?.amountOfSugar}</Text>
      </View>
      <CustomButton label={t('common.add')} onPress={() => dispatch(addDrinkStarted(drink!))} />
    </View>
  );
};

const styles = StyleSheet.create({
  describeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  drinkWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
