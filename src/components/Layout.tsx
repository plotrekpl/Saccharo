import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

import { palette } from 'src/styles/palette';

export const Layout: React.FC = ({ children }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.wrapper}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logoTitle}>{t('common.title')}</Text>
        </View>
        <View style={styles.childrenWrapper}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: palette.blue,
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  logoTitle: {
    color: palette.blueSapphire,
    fontSize: 44,
    letterSpacing: 2,
  },
  childrenWrapper: {
    flex: 1,
  },
});
