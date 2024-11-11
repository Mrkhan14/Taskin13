import { combineReducers } from 'redux';
import categoryReducers from './category';
import counterReducer from './counter';
import lenReducer from './len';

const rootReducer = combineReducers({
   counter: counterReducer,
   len: lenReducer,
   category: categoryReducers,
});

export default rootReducer;
