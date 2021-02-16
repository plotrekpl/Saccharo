import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { IUser } from 'src/constants';
import { AppState } from 'src/store/store';
import { updateUserStarted } from 'src/store/user/userActions';

import { CustomButton, CustomTextInput } from './index';

interface IInitialValues {
  name: string;
}

export const UserData: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state: AppState) => state.userReducer);
  const dispatch = useDispatch();

  const initialValues: IInitialValues = {
    name: user!.name,
  };

  useEffect(() => {
    setFieldValue('name', user?.name);
  }, [user]);

  const validationSchema = () =>
    Yup.object({
      name: Yup.string().required(`${t('validation.nameRequired')}`),
    });

  const handleSubmit = (value: IInitialValues) => {
    const newUser: IUser = {
      ...user!,
      ...value,
    };
    dispatch(updateUserStarted(newUser));
  };

  const { setFieldValue, handleChange, values, errors, isValid, dirty } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View>
      <Text>{t('user.name')}:</Text>
      <CustomTextInput
        error={errors.name}
        onChangeText={handleChange('name')}
        value={values.name}
        placeholder="Name"
      />
      <CustomButton
        label={t('common.save')}
        onPress={() => handleSubmit(values)}
        disabled={!isValid || !dirty}
      />
    </View>
  );
};
