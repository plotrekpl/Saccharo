import React from 'react';
import { ScrollView } from 'react-native';

import { IDrink } from 'src/constants';

import { Drink } from '.';

interface IProps {
  drinks: IDrink[];
}

export const ListDrinks: React.FC<IProps> = ({ drinks }) => {
  return (
    <ScrollView>
      {drinks!.map((drink) => (
        <Drink key={drink.barCode} drink={drink} />
      ))}
    </ScrollView>
  );
};
