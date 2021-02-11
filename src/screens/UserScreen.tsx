import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CustomButton, Layout } from 'src/components';
import UserData from 'src/components/UserData';
import CustomModal from 'src/components/auth/CustomModal';
import { palette } from 'src/styles/palette';

const UserScreen: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <View style={styles.wrapper}>
        <View style={styles.avatar}></View>
        <Text style={styles.title}>User profile</Text>
        <View style={styles.user}>
          <View style={styles.userInfo}>
            <Text style={styles.userElement}>Name:</Text>
            <Text style={styles.userElement}>Dominik</Text>
          </View>
        </View>
      </View>
      <CustomButton label="Change name" onPress={() => setVisible(!visible)} />
      <CustomModal visible={visible} setVisible={setVisible}>
        <UserData />
      </CustomModal>
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

export default UserScreen;
