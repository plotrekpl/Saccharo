import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { CustomModal, Scan } from 'src/components';
import { AddDrink } from 'src/components/AddDrink';
import { AppState } from 'src/store/store';

export const ScanScreen: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <Scan isVisible={isVisible} showModal={setVisible} />
      <CustomModal isVisible={isVisible} onClose={setVisible}>
        <AddDrink />
      </CustomModal>
    </>
  );
};

export default ScanScreen;
