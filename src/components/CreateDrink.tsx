import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { IDrink } from 'src/constants';
import { createDrinkStarted } from 'src/store/drink/drinkActions';

import { CustomButton } from './CustomButton';
import { CustomTextInput } from './CustomTextInput';

interface ICreateDrink {
  id: string;
  barCode: string;
  name: string;
  amountOfSugar: number;
}

const initialValues: ICreateDrink = {
  id: '',
  barCode: '',
  name: '',
  amountOfSugar: 0,
};

interface IProps {
  barCode: string;
}

export const CreateDrink: React.FC<IProps> = ({ barCode }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const validationSchema = () =>
    Yup.object({
      name: Yup.string().required(`${t('validation.nameRequired')}`),
      amountOfSugar: Yup.number().required(`${t('validation.sugarRequired')}`),
    });

  const handleSubmit = () => {
    const newDrink: IDrink = {
      name: values.name,
      amountOfSugar: +values.amountOfSugar,
      barCode,
      id: Math.random().toString(),
    };
    dispatch(createDrinkStarted(newDrink));
    resetForm({});
  };

  const { handleChange, resetForm, values, errors, isValid, dirty } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View>
      <Text style={styles.title}>{t('drink.name')}</Text>
      <CustomTextInput
        onChangeText={handleChange('name')}
        error={errors.name}
        value={values.name}
        placeholder={`${t('drink.name')}`}
      />
      <Text style={styles.title}>{t('drink.amountOfSugar')}</Text>
      <CustomTextInput
        onChangeText={handleChange('amountOfSugar')}
        error={errors.amountOfSugar}
        value={values.amountOfSugar.toString()}
        placeholder={`${t('drink.amountOfSugar')}`}
      />
      <CustomButton
        label={`${t('drink.create')}`}
        onPress={handleSubmit}
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
