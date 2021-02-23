import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { IUser } from 'src/constants';
import { AppState } from 'src/store/store';
import { updateUserStarted } from 'src/store/user/userActions';

import { CustomButton } from './CustomButton';
import { CustomTextInput } from './CustomTextInput';

interface IInitialValues {
  name: string;
}

interface IProps {
  onClose: (open: boolean) => void;
}
export const UserData: React.FC<IProps> = ({ onClose }) => {
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
    onClose(false);
  };

  const { setFieldValue, handleChange, values, errors, isValid, dirty } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View>
      <Text style={styles.title}>{t('user.name')}:</Text>
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

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Rajdhani-Medium',
    fontSize: 18,
  },
});
