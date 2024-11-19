import { combineReducers } from 'redux';
import categoryReducers from './category';
import PostReducers from './post';
import userReducers from './user';

const rootReducer = combineReducers({
   category: categoryReducers,
   user: userReducers,
   post: PostReducers,
});

export default rootReducer;
