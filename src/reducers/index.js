import { combineReducers } from 'redux';

import subReducer from './subReducer';

const allReducer = combineReducers({
  subReddit: subReducer
});

export default allReducer;
