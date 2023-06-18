import { combineReducers } from 'redux';

import appReducer from './app';

export const defaultReducers = {
  app: appReducer,
};

export default combineReducers(defaultReducers);
