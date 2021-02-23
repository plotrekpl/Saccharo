import React from 'react';
import { View, StyleSheet } from 'react-native';

import { palette, shadow } from 'src/styles/palette';

export const BaseModal: React.FC = ({ children }) => {
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalView}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: palette.white,
    width: 350,
    height: 450,
    borderRadius: 15,
    padding: 30,
    ...shadow,
  },
});
