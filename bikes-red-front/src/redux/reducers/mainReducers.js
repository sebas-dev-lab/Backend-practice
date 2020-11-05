import { combineReducers } from "redux";
import bikesReducers from "./bikesReducers";

const mainReducers = combineReducers({
  bikes: bikesReducers,
});

export default mainReducers;
