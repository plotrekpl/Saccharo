import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';

import { Layout, ListDrinks } from 'src/components';

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
    alignItems: 'center',
    marginVertical: 30,
  },
  title: {
    fontSize: 22,
  },
});
