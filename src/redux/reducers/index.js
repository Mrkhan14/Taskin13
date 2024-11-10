import { combineReducers } from "redux";
import counterReducer from "./counter";
import lenReducer from "./len";

const rootReducer = combineReducers({
    counter: counterReducer,
    len: lenReducer
})

export default rootReducer;