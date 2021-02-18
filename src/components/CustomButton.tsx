import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, ViewStyle } from 'react-native';

import { palette, shadow } from 'src/styles/palette';

interface Props {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  customStyles?: ViewStyle;
}

export const CustomButton: React.FC<Props> = ({
  label,
  onPress,
  disabled,
  loading,
  customStyles,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, customStyles, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator color={palette.orangeRed} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: palette.orange,
    borderRadius: 15,
    ...shadow,
  },
  label: {
    color: palette.white,
    fontFamily: 'Rajdhani-Bold',
    textTransform: 'uppercase',
    fontSize: 22,
  },
  disabled: {
    backgroundColor: palette.lightOrange,
    borderColor: palette.black,
  },
});
