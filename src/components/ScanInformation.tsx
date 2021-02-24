import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

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
          <Text style={styles.scanInfo}>{t('drink.notExists')}</Text>
          <Text style={styles.scanInfo}>{t('drink.addDrink')}</Text>
          <CustomButton label={t('common.add')} onPress={() => setIsForm(!isForm)} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scanInfo: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
    letterSpacing: 1,
    marginVertical: 15,
  },
});
