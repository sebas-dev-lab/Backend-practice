import axios from "axios";
import {
  GET_BIKES,
  GET_ONE_BIKE,
  POST_BIKE,
  PUT_BIKE,
  DELETE_BIKE,
} from "./actionsTypes";

const url = "http://localhost:3001";

export const getBikes = () => (dispatch) => {
  axios
    .get(`${url}/bikes/`)
    .then((res) => {
      dispatch({
        type: GET_BIKES,
        bikes: res.data.bikes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
