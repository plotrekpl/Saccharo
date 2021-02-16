import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, Layout, UserData, CustomModal } from 'src/components';
import { AppState } from 'src/store/store';
import { userLogoutStarted } from 'src/store/user/userActions';
import { palette } from 'src/styles/palette';

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
      </View>
      <CustomButton label={t('user.changeName')} onPress={() => setVisible(!isVisible)} />
      <CustomModal isVisible={isVisible} onClose={setVisible}>
        <UserData />
      </CustomModal>
      <CustomButton label="Log Out" onPress={() => dispatch(userLogoutStarted())} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginVertical: 50,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: palette.gray,
  },
  title: {
    marginVertical: 20,
    fontSize: 24,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  user: {
    width: '80%',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  userElement: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
