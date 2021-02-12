import { combineReducers } from 'redux';

import drinkReducer from './drink/drinkReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  userReducer,
  drinkReducer,
});

export default rootReducer;
