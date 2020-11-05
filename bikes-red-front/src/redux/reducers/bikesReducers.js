import {
  GET_BIKES,
  GET_ONE_BIKE,
  POST_BIKE,
  PUT_BIKE,
  DELETE_BIKE,
} from "../actions/actionsTypes";

const initialState = {
  allBikes: [],
  bike: {},
};
function bikesReducers(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_BIKES:
      return {
        ...state,
        allBikes: action.bikes,
      };

    default:
      return state;
  }
}

export default bikesReducers;
