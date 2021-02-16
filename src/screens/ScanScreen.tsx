import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { CustomModal, Scan } from 'src/components';
import { AddDrink } from 'src/components/AddDrink';
import { ScanInformation } from 'src/components/ScanInformation';
import { AppState } from 'src/store/store';

export const ScanScreen: React.FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [barCode, setBarCode] = useState<string>('');
  const { drink } = useSelector((state: AppState) => state.drinkReducer);

  console.log('ScanScreen:', barCode);
  return (
    <>
      <Scan isVisible={isVisible} showModal={setVisible} setBarCode={setBarCode} />
      <CustomModal isVisible={isVisible} onClose={setVisible}>
        {drink ? <AddDrink /> : <ScanInformation barCode={barCode} />}
      </CustomModal>
    </>
  );
};

export default ScanScreen;
