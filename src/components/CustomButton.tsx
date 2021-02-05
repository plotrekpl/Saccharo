import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, ViewStyle } from 'react-native';
import { palette } from 'src/styles/palette';

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
    width: '100%',
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: palette.blue,
    borderColor: palette.blueSaphire,
    borderWidth: 2,
    borderRadius: 10,
  },
  label: {
    color: palette.blueSaphire,
    textTransform: 'uppercase',
    fontSize: 16,
  },
  disabled: {
    backgroundColor: palette.gray,
    borderColor: palette.gray,
  },
});
