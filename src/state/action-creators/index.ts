import { combineReducers, Dispatch } from 'redux';
import bankReducer from '../reducers/bankReducer';

const reducers = combineReducers({
    bank: bankReducer
});

export default reducers;
