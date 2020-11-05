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
    case POST_BIKE:
      return {
        ...state,
        allBike: state.allBikes.concat(action.bike),
      };
    case PUT_BIKE:
      return {
        ...state,
        allBikes: state.allBikes.map((bike) => {
          if (bike.id === action.bike.id) {
            bike = action.bike;
          }
          return bike;
        }),
      };
    case DELETE_BIKE:
      return {
        ...state,
        allBikes: state.allBikes.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

export default bikesReducers;
