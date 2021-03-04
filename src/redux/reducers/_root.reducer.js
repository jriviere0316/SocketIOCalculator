import { combineReducers } from 'redux';
import calculations from './calculations.reducer';

const rootReducer = combineReducers({
calculations,
});

export default rootReducer;
