import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';

import { Layout, ListDrinks } from 'src/components';
import { palette } from 'src/styles/palette';

export const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <View style={styles.homeTitle}>
        <Text style={styles.title}>{t('drink.list')}</Text>
      </View>
      <ListDrinks />
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
});
