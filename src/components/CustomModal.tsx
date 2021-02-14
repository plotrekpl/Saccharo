import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, View } from 'react-native';

import { CustomButton } from './CustomButton';
import { BaseModal } from './index';

interface IProps {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
}

export const CustomModal: React.FC<IProps> = ({ isVisible, setVisible, children }) => {
  const { t } = useTranslation();
  return (
    <Modal visible={isVisible} animationType="slide">
      <BaseModal>
        <View>{children}</View>
        <CustomButton label={t('modal.closeModal')} onPress={() => setVisible(!isVisible)} />
      </BaseModal>
    </Modal>
  );
};
