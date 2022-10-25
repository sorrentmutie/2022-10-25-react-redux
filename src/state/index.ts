import { combineReducers } from 'redux';
import bankReducer from './reducers/bankReducer';

export * from './store';
export const reducers = combineReducers({
    bank: bankReducer
  });
  
export type State = ReturnType<typeof reducers>