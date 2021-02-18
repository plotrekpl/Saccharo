import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { IDrink } from 'src/constants';
import { palette, shadow } from 'src/styles/palette';

interface IProps {
  drink: IDrink;
}

export const Drink: React.FC<IProps> = ({ drink }) => {
  const { t } = useTranslation();
  return (
    <LinearGradient colors={[palette.orange, palette.yellow]} style={styles.drinkWrapper}>
      <Text style={styles.drinkName}>{drink.name}</Text>
      <Text style={styles.drinkDescription}>
        {t('drink.amountOfSugar')}
        <Text style={styles.drinkSugar}>{drink.amountOfSugar}</Text>
      </Text>
      <View style={styles.drinkImage}>
        <Image source={require('../image/Pepsi.png')} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  drinkWrapper: {
    width: 155,
    height: 165,
    marginHorizontal: 10,
    marginVertical: 15,
    padding: 5,
    borderRadius: 10,
    ...shadow,
  },
  drinkName: {
    marginBottom: 10,
    padding: 2,
    color: palette.white,
    fontFamily: 'Rajdhani-Bold',
    fontSize: 22,
  },
  drinkDescription: {
    width: '60%',
    color: palette.white,
    fontFamily: 'Rajdhani-Medium',
    fontSize: 20,
  },
  drinkSugar: {
    color: palette.white,
    fontFamily: 'Rajdhani-Bold',
    fontSize: 20,
  },
  drinkImage: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
