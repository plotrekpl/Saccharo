import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { CreateDrink } from './CreateDrink';
import { CustomButton } from './CustomButton';

interface IProps {
  barCode: string;
}

export const ScanInformation: React.FC<IProps> = ({ barCode }) => {
  const [isForm, setIsForm] = useState(false);
  const { t } = useTranslation();
  return (
    <View>
      {isForm ? (
        <CreateDrink barCode={barCode} />
      ) : (
        <>
          <Text>{t('drink.notExists')}</Text>
        </>
      )}
      <CustomButton
        label={isForm ? `${t('form.close')}` : `${t('common.add')}`}
        onPress={() => setIsForm(!isForm)}
      />
    </View>
  );
};
