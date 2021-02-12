import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, View } from 'react-native';

import { CustomButton } from './CustomButton';
import { BaseModal } from './index';

interface IProps {
  visible: boolean;
  setVisible: any;
  children: ReactNode;
}

export const CustomModal: React.FC<IProps> = ({ visible, setVisible, children }) => {
  const { t } = useTranslation();
  return (
    <Modal visible={visible} animationType="slide">
      <BaseModal>
        <View>{children}</View>
        <CustomButton label={t('modal.closeModal')} onPress={() => setVisible(!visible)} />
      </BaseModal>
    </Modal>
  );
};
