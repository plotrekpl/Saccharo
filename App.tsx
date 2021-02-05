import React from 'react';
import { Provider } from 'react-redux';
import RegisterScreen from './src/screens/register/RegisterScreen';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <RegisterScreen />
    </Provider>
  );
};

export default App;
