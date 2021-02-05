import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { CustomTextInput } from 'src/components';
import { ICredentials } from 'src/constants';
import { userRegister } from 'src/store/user/userActions';

import { CustomButton } from '../CustomButton';
import { Layout } from '../Layout';

/** Please consider renaming to IRegisterUser or similar and apply to Login*/
interface IRegisterValues {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: IRegisterValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

interface IProps {
  isSignUp: boolean;
}

export const Register: React.FC<IProps> = ({ isSignUp }) => {
  const dispatch = useDispatch();

  const validationSchema = () =>
    Yup.object({
      displayName: Yup.string().required('Name is required'),
      email: Yup.string().email('Please enter valid email').required('Email address id required'),
      password: Yup.string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
    });
  /** I am not quite sure if the resolution with additional register flag makes sense. Using functions should be specific in name and function,
   * if you register, "register" flag is redundant. In saga make separate generators for login and register or move the line with logic into proper generators
   * Login and register in fact are different in function. If you need make any logic extensions for only Login you would need to make additional conditional checks which will make code less readable
   * */
  const handleSubmit = () => {
    dispatch(userRegister(credentials, isSignUp));
    resetForm({});
  };

  const { handleChange, resetForm, values, errors, isValid, dirty } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const credentials: ICredentials = {
    email: values.email,
    password: values.password,
  };

  return (
    <View>
      <CustomTextInput
        error={errors.displayName}
        onChangeText={handleChange('displayName')}
        value={values.displayName}
        placeholder="Name"
      />
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
      <CustomTextInput
        error={errors.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        value={values.confirmPassword}
        placeholder="Confirm Password"
        securePassword
      />
      <CustomButton label="Sign up" onPress={handleSubmit} disabled={!isValid || !dirty} />
    </View>
  );
};
