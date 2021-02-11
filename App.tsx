import React from 'react';
import { Provider } from 'react-redux';
import RegisterScreen from './src/screens/RegisterScreen';
import UserScreen from './src/screens/UserScreen';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <UserScreen />
    </Provider>
  );
};

export default App;
