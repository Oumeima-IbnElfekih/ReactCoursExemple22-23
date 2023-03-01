import { combineReducers } from 'redux';
import counterReducer from './slices/CounterSlice';


const rootReducer = combineReducers({
  counter: counterReducer,
  //....
});

export default rootReducer;