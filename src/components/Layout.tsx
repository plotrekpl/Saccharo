import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

import { palette } from 'src/styles/palette';

export const Layout: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logoTitle}>QofSugar</Text>
      </View>
      <View>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
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
});
