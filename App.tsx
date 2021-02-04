import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Text>Hello</Text>
    </Provider>

  );
};

export default App;
