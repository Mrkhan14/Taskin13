import { combineReducers } from 'redux';
import categoryReducers from './category';
import userReducers from './user';

const rootReducer = combineReducers({
   category: categoryReducers,
   user: userReducers,
});

export default rootReducer;
