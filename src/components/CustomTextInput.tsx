import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { palette } from 'src/styles/palette';

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
    borderRadius: 10,
    shadowColor: palette.black,
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 1,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  error: {
    color: palette.orangeRed,
  },
});
