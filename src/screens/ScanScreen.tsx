import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { CustomModal, Scan, ShowDrink } from 'src/components';
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
        {drink ? <ShowDrink drink={drink} /> : <ScanInformation barCode={barCode} />}
      </CustomModal>
    </>
  );
};
