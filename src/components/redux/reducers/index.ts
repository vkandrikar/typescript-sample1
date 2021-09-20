import { combineReducers } from "redux";
import bankReducer from "./bank.reducer";
import postReducer from "./post.reducer";

const rootReducer = combineReducers({
  bank: bankReducer,
  post: postReducer
});

export default rootReducer;

export type ReducersType = ReturnType<typeof rootReducer>;