import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { CustomTextInput } from 'src/components';
import { IRegisterCredentials } from 'src/constants';
import { userRegister } from 'src/store/user/userActions';

import { CustomButton } from '../CustomButton';

interface IRegisterUser {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: IRegisterUser = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const validationSchema = () =>
    Yup.object({
      displayName: Yup.string().required(`${t('validation.nameRequired')}`),
      email: Yup.string()
        .email(`${t('validation.emailValid')}`)
        .required(`${t('validation.emailRequired')}`),
      password: Yup.string()
        .min(6, ({ min }) => `${t('validation.passwordMinLength', { min })}`)
        .required(`${t('validation.passwordRequired')}`),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], `${t('validation.confirmPasswordMatch')}`)
        .required(`${t('validation.confirmPasswordRequired')}`),
    });

  const handleSubmit = () => {
    dispatch(userRegister(credentials));
    resetForm({});
  };

  const { handleChange, resetForm, values, errors, isValid, dirty } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const credentials: IRegisterCredentials = {
    email: values.email,
    password: values.password,
    name: values.displayName,
  };

  return (
    <View>
      <CustomTextInput
        error={errors.displayName}
        onChangeText={handleChange('displayName')}
        value={values.displayName}
        placeholder={t('form.name')}
      />
      <CustomTextInput
        error={errors.email}
        onChangeText={handleChange('email')}
        value={values.email}
        placeholder={t('form.email')}
      />
      <CustomTextInput
        error={errors.password}
        onChangeText={handleChange('password')}
        value={values.password}
        placeholder={t('form.password')}
        securePassword
      />
      <CustomTextInput
        error={errors.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        value={values.confirmPassword}
        placeholder={t('form.confirmPassword')}
        securePassword
      />
      <CustomButton
        label={t('authorization.signUp')}
        onPress={handleSubmit}
        disabled={!isValid || !dirty}
      />
    </View>
  );
};
