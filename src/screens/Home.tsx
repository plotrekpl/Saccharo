import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home: React.FC = () => {
  return (
    // It is only mockup to test navigation. I wil change this screen in the future.
    <View style={styles.headerWrapper}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
