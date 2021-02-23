import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { CustomButton } from 'src/components/CustomButton';
import { CustomTextInput } from 'src/components/CustomTextInput';
import { ILoginCredentials } from 'src/constants';
import { AppState } from 'src/store/store';
import { userLoginStarted } from 'src/store/user/userActions';
import { palette } from 'src/styles/palette';

interface ILoginUser {
  email: string;
  password: string;
}

const initialValues: ILoginUser = {
  email: '',
  password: '',
};

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: AppState) => state.userReducer);
  const { t } = useTranslation();
  const validationSchema = () =>
    Yup.object({
      email: Yup.string()
        .email(`${t('validation.emailValid')}`)
        .required(`${t('validation.emailRequired')}`),
      password: Yup.string()
        .min(6, ({ min }) => `${t('validation.passwordMinLength', { min })}`)
        .required(`${t('validation.passwordRequired')}`),
    });

  const handleSubmit = () => {
    dispatch(userLoginStarted(credentials));
    resetForm({});
  };

  const { handleChange, resetForm, values, errors, isValid, dirty } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const credentials: ILoginCredentials = {
    email: values.email,
    password: values.password,
  };

  return (
    <View>
      {!loading ? (
        <>
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
          <CustomButton
            onPress={handleSubmit}
            label={t('authorization.logIn')}
            disabled={!isValid || !dirty}
          />
        </>
      ) : null}
    </View>
  );
};
