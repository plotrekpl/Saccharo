import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.headerWrapp}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  /** Please check and consider one of two: headerWrap or HeaderWrapper */
  headerWrapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
