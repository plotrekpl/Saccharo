import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Layout, ListDrinks } from 'src/components';
import { AppState } from 'src/store/store';
import { palette } from 'src/styles/palette';

export const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state: AppState) => state.userReducer);

  return (
    <Layout>
      <View style={styles.homeTitle}>
        <Text style={styles.title}>{t('drink.list')}</Text>
      </View>
      {user && user.drinks?.length ? (
        <ListDrinks drinks={user.drinks} />
      ) : (
        <Text style={styles.information}>{t('drink.missingDrink')}</Text>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  homeTitle: {
    alignItems: 'flex-start',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Rajdhani-Bold',
    textTransform: 'uppercase',
    color: palette.orange,
  },
  information: {
    fontSize: 26,
    fontFamily: 'Rajdhani-Bold',
    textTransform: 'uppercase',
    marginHorizontal: 15,
  },
});
