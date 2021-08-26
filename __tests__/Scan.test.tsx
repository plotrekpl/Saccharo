import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { Scan } from '../src/components';
import store from '../src/store/store';

const mockFn = jest.fn;

describe('Scan ', () => {
  it('Simple scan test :>>', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Scan showModal={mockFn} isVisible={false} setBarCode={mockFn} />
      </Provider>,
    );

    expect(getByTestId('test')).toBeTruthy();
  });
});
