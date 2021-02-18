import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import { palette, shadow } from 'src/styles/palette';

interface CustomTextInputProps {
  onChangeText: (text: string) => void;
  value: string;
  placeholder?: string;
  error?: string;
  securePassword?: boolean;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onChangeText,
  value,
  placeholder,
  error,
  securePassword,
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={securePassword}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    height: 65,
  },
  input: {
    backgroundColor: palette.white,
    paddingLeft: 10,
    borderRadius: 15,
    fontFamily: 'Rajdhani-Light',
    ...shadow,
  },
  error: {
    color: palette.orangeRed,
    shadowColor: palette.black,
    fontFamily: 'Rajdhani-Bold',
    textShadowColor: palette.black,
    textShadowOffset: {
      height: 1,
      width: 1,
    },
    textShadowRadius: 1,
    paddingLeft: 5,
  },
});
