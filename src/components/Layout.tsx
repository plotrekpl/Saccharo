import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground, Image } from 'react-native';

import { palette } from 'src/styles/palette';

export const Layout: React.FC = ({ children }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.layout}>
      <ImageBackground source={require('../image/background.jpg')} style={styles.layout}>
        <View style={styles.wrapper}>
          <View style={styles.logoWrapper}>
            <Image source={require('../image/Logo.png')} />
            <Text style={styles.appTitle}>{t('common.title')}</Text>
          </View>
          <View style={styles.childrenWrapper}>{children}</View>
        </View>
      </ImageBackground>
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
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
  },
  appTitle: {
    color: palette.black,
    fontFamily: 'Rajdhani-Bold',
    fontSize: 44,
    letterSpacing: 2,
    paddingTop: 32,
  },
  childrenWrapper: {
    justifyContent: 'center',
    flex: 1,
  },
});
