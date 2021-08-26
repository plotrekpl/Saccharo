import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import drinkReducer from './drink/drinkReducer';

import rootReducer from './rootReducer';
import rootSagas from './rootSaga';

export type AppState = ReturnType<typeof rootReducer>;

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(drinkReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSagas);

export default store;
