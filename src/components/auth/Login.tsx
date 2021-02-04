import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import { CustomTextInput } from 'src/components';

import { CustomButton } from '../CustomButton';

interface initialValues {
  email: string;
  password: string;
}

const initialValues: initialValues = {
  email: '',
  password: '',
};

export const Login: React.FC = () => {
  const validationSchema = () =>
    Yup.object({
      email: Yup.string().email('Please enter valid email').required('Email address id required'),
      password: Yup.string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    });

  const handleSubmit = () => {
    resetForm({});
  };

  const { handleChange, resetForm, values, errors, isValid, dirty } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View>
      <CustomTextInput
        error={errors.email}
        onChangeText={handleChange('email')}
        value={values.email}
        placeholder="E-mail"
      />
      <CustomTextInput
        error={errors.password}
        onChangeText={handleChange('password')}
        value={values.password}
        placeholder="Password"
        securePassword
      />
      <CustomButton label="Log in" disabled={!isValid || !dirty} />
    </View>
  );
};
