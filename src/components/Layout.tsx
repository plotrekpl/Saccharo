import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { palette } from 'src/styles/palette';

export const Layout: React.FC = ({ children }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logoTitle}>QofSugar</Text>
      </View>
      <View>{children}</View>
    </View>
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
    color: palette.blueSaphire,
    fontSize: 44,
    letterSpacing: 2,
  },
});
