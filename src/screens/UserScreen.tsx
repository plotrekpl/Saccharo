import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, Layout, UserData, CustomModal } from 'src/components';
import { AppState } from 'src/store/store';
import { userLogoutStarted } from 'src/store/user/userActions';
import { palette } from 'src/styles/palette';

const waveURI = require('../image/Wave.png');

export const UserScreen: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const { name } = useSelector((state: AppState) => state.userReducer.user!);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Layout>
      <View style={styles.wrapper}>
        <View style={styles.avatar}></View>
        <Text style={styles.title}>{t('user.profile')}</Text>
        <View style={styles.user}>
          <View style={styles.userInfo}>
            <Text style={styles.userElement}>{t('user.name')}:</Text>
            <Text style={styles.userElement}>{name}</Text>
          </View>
        </View>
        <Image style={styles.wave} source={waveURI} />
        <Image style={styles.waveSecond} source={waveURI} />
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton label={t('user.changeName')} onPress={() => setVisible(!isVisible)} />
        <CustomModal isVisible={isVisible} onClose={setVisible}>
          <UserData />
        </CustomModal>
        <CustomButton label="Log Out" onPress={() => dispatch(userLogoutStarted())} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginVertical: 50,
    alignItems: 'center',
    position: 'relative',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: palette.white,
    borderWidth: 10,
  },
  title: {
    marginVertical: 10,
    fontSize: 32,
    textTransform: 'uppercase',
    fontFamily: 'Rajdhani-Bold',
  },
  user: {
    width: '80%',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  userElement: {
    fontSize: 25,
    fontFamily: 'Rajdhani-Bold',
    marginHorizontal: 5,
  },
  wave: {
    position: 'absolute',
    left: -50,
    top: 5,
  },
  waveSecond: {
    position: 'absolute',
    transform: [{ rotateY: '180deg' }, { rotateX: '180deg' }],
    top: -50,
    right: -50,
  },
  buttonWrapper: {
    marginHorizontal: 50,
  },
});
