import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { DrinkT } from '../src/components';
import configureMockStore from 'redux-mock-store';
import { sagaMiddleware } from '../src/store/store';

const renderWithProviders = (children: JSX.Element) => {
  const store = configureMockStore([sagaMiddleware])({
    drinkReducer: {
      drink: {
        id: 'id',
        barCode: 'barCode',
        name: 'name',
        amountOfSugar: 1,
      },
    },
  });
  return render(<Provider store={store}>{children}</Provider>);
};

describe('DrinkT component test ', () => {
  it('UseSelector from drinkReducer work', () => {
    const { getByText } = renderWithProviders(<DrinkT />);
    expect(getByText(/id/i)).toBeTruthy();
  });
});
