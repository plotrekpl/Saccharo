import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { CustomModal, Scan, ShowDrink } from 'src/components';
import { AppState } from 'src/store/store';

export const ScanScreen: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const { drink } = useSelector((state: AppState) => state.drinkReducer);
  return (
    <>
      <Scan isVisible={isVisible} showModal={setVisible} />
      <CustomModal isVisible={isVisible} onClose={setVisible}>
        {drink ? <ShowDrink drink={drink} /> : <Text>This drink doesn`t exist</Text>}
      </CustomModal>
    </>
  );
};
