import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const User: React.FC = () => {
  return (
    <View style={styles.headerWrapp}>
      <Text>User Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default User;
