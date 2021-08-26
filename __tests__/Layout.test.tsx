import { render } from '@testing-library/react-native';
import React from 'react';
import { Layout } from '../src/components';

describe('Layout ', () => {
  it('Simple text test :>>', () => {
    const header = render(<Layout />);
    const title = header.getByText(/common.title/i);
    expect(title.props.children).toEqual('common.title');
  });
});
