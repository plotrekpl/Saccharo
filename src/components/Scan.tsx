import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useDispatch, useSelector } from 'react-redux';

import { getDrinkStarted } from 'src/store/drink/drinkActions';
import { AppState } from 'src/store/store';

export const Scan: React.FC = () => {
  const dispatch = useDispatch();
  /** You get the variable from the store that is not used in the component.
   * For future use comment the line and add a comment that a variable is implemented because will be needed in future */
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

  /** Event not typed */
  const onBarcodeRead = (event) => {
    if (!isBarcodeRead) {
      setIsBarcodeRead(true);
      setBarcodeType(event.type);
      setBarcodeValue(event.data);
    }
  };
  return (
    /** Be aware that permissions to use the camera are not android specific,
     * iOS will not throw an error but AppStore will not allow you to upload the application without appropriate plist setup.
     * Please check how to set up permissions for the camera in iOS */
    <RNCamera
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        /** It is reasonable to use i18 here also if we use it in other places*/
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
