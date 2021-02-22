import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet, View } from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import { useDispatch } from 'react-redux';

import { getDrinkStarted } from 'src/store/drink/drinkActions';
import { palette } from 'src/styles/palette';

interface IProps {
  showModal: (open: boolean) => void;
  isVisible: boolean;
  setBarCode: (barCode: string) => void;
}

export const Scan: React.FC<IProps> = ({ showModal, isVisible, setBarCode }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isBarcodeRead, setIsBarcodeRead] = useState(false);
  const [barcodeType, setBarcodeType] = useState('');
  const [barcodeValue, setBarcodeValue] = useState('');

  useEffect(() => {
    if (isBarcodeRead) {
      Alert.alert(barcodeType, barcodeValue, [
        {
          text: 'OK',
          onPress: () => {
            setIsBarcodeRead(false);
            setBarcodeType('');
            setBarcodeValue('');
            dispatch(getDrinkStarted(barcodeValue));
            setBarCode(barcodeValue);
            showModal(!isVisible);
          },
        },
      ]);
    }
  }, [isBarcodeRead, barcodeType, barcodeValue]);

  const onBarcodeRead = (event: BarCodeReadEvent) => {
    if (!isBarcodeRead) {
      setIsBarcodeRead(true);
      setBarcodeType(event.type);
      setBarcodeValue(event.data);
    }
  };
  return (
    <View style={styles.wrapper}>
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
        onBarCodeRead={onBarcodeRead}
      />
      <View style={styles.check}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  check: {
    position: 'absolute',
    width: 250,
    height: 125,
    alignSelf: 'center',
    backgroundColor: palette.transparentWhite,
  },
});
