import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import { useDispatch } from 'react-redux';

import { getDrinkStarted } from 'src/store/drink/drinkActions';

interface IProps {
  showModal: (open: boolean) => void;
  isVisible: boolean;
  setBarCode: (barCode: string) => void;
}

export const Scan: React.FC<IProps> = ({ showModal, isVisible, setBarCode }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onBarcodeRead = (event: BarCodeReadEvent) => {
    dispatch(getDrinkStarted(event.data));
    setBarCode(event.data);
    showModal(true);
  };

  return (
    <RNCamera
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: `${t('camera.title')}`,
        message: `${t('camera.message')}`,
        buttonPositive: `${t('common.buttonPositive')}`,
        buttonNegative: `${t('common.buttonNegative')}`,
      }}
      onBarCodeRead={!isVisible ? onBarcodeRead : undefined}
    />
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%',
    height: '50%',
  },
});
