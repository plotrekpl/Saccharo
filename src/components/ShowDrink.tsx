import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { IDrink } from 'src/constants';
import { addDrinkStarted } from 'src/store/user/userActions';

import { CustomButton } from './CustomButton';

interface IProps {
  drink: IDrink;
  setVisible: (open: boolean) => void;
}

export const ShowDrink: React.FC<IProps> = ({ drink, setVisible }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handlerClose = () => {
    dispatch(addDrinkStarted(drink));
    setVisible(false);
  };

  return (
    <View style={styles.drinkWrapper}>
      <Text style={styles.drinkTitle}>{t('drink.drink')}</Text>
      <Image source={require('../image/Pepsi.png')} />
      <View style={styles.drinkDescribe}>
        <Text style={styles.drinkData}>{t('drink.name')}:</Text>
        <Text style={styles.drinkData}>{drink.name}</Text>
      </View>
      <View style={styles.drinkDescribe}>
        <Text style={styles.drinkData}>{t('drink.sugar')}:</Text>
        <Text style={styles.drinkData}>{drink.amountOfSugar}</Text>
      </View>
      <CustomButton
        label={t('common.add')}
        onPress={() => handlerClose()}
        customStyles={styles.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drinkWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  drinkTitle: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 36,
    marginBottom: 10,
  },
  drinkDescribe: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 190,
    marginVertical: 5,
  },
  drinkData: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 18,
    marginLeft: 10,
  },
  btn: {
    width: '100%',
  },
});
