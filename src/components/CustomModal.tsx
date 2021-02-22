import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, StyleSheet, View } from 'react-native';

import { BaseModal } from './BaseModal';
import { CustomButton } from './CustomButton';

interface IProps {
  isVisible: boolean;
  onClose: (isVisible: boolean) => void;
}

export const CustomModal: React.FC<IProps> = ({ isVisible, onClose, children }) => {
  const { t } = useTranslation();
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="overFullScreen"
      transparent
      style={styles.modalView}>
      <BaseModal>
        <View>{children}</View>
        <CustomButton label={t('modal.closeModal')} onPress={() => onClose(!isVisible)} />
      </BaseModal>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: 'relative',
  },
});
