import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import RootNavigator from './src/navigation/RootNavigator';
import i18n from './src/locales/i18n';
const initI18n = i18n;
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
