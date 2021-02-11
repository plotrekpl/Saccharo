import { useFormik } from 'formik';
import React from 'react';
import { View, Text } from 'react-native';
import * as Yup from 'yup';

import { CustomButton } from './CustomButton';
import { CustomTextInput } from './CustomTextInput';

const UserData: React.FC = () => {
  const initialValues = {
    name: '',
  };

  const validationSchema = () =>
    Yup.object({
      name: Yup.string().required('Name is required'),
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
      <Text>Name:</Text>
      <CustomTextInput
        error={errors.name}
        onChangeText={handleChange('name')}
        value={values.name}
        placeholder="Name"
      />
      <CustomButton label="Save" onPress={handleSubmit} disabled={!isValid || !dirty} />
    </View>
  );
};

export default UserData;
