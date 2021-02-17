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
