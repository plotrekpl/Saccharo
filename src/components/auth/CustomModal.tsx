import React, { ReactNode } from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';

import { Layout } from '..';
import { CustomButton } from '../CustomButton';
import BaseModal from '../baseModal';

interface IProps {
  visible: boolean;
  setVisible: any;
  children: ReactNode;
}

const CustomModal: React.FC<IProps> = ({ visible, setVisible, children }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <BaseModal>
        <View>{children}</View>
        <CustomButton label="Close modal" onPress={() => setVisible(!visible)} />
      </BaseModal>
    </Modal>
  );
};

export default CustomModal;
