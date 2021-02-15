import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useDispatch, useSelector } from 'react-redux';

import { getDrinkStarted } from 'src/store/drink/drinkActions';
import { AppState } from 'src/store/store';

export const Scan: React.FC = () => {
  const dispatch = useDispatch();
  const { drink } = useSelector((state: AppState) => state.drinkReducer);
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
          },
        },
      ]);
    }
  }, [isBarcodeRead, barcodeType, barcodeValue]);

  const onBarcodeRead = (event) => {
    if (!isBarcodeRead) {
      setIsBarcodeRead(true);
      setBarcodeType(event.type);
      setBarcodeValue(event.data);
    }
  };
  return (
    <RNCamera
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      onBarCodeRead={onBarcodeRead}
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
