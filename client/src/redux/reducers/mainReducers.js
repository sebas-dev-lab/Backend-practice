import { combineReducers } from "redux";
import bikesReducers from "./bikesReducers";
import userReducer from "./userReducers";
import reserveReducer from "./reserveReducers";
import imageReducer from "./imageReducers";
import centerReducer from "./centerReducers";

const mainReducers = combineReducers({
  users: userReducer,
  bikes: bikesReducers,
  center: centerReducer,
  reserve: reserveReducer,
  image: imageReducer,
});

export default mainReducers;
