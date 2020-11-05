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

export const addBikes = (input) => (dispatch) => {
  return axios
    .post(`${url}/bikes/create/`, {
      id: input.id,
      color: input.color,
      model: input.model,
      lat: input.lat,
      log: input.log,
    })
    .then((res) => {
      dispatch({
        type: POST_BIKE,
        bike: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const putBike = (id, update) => (dispatch) => {
  return axios
    .put(`${url}/bikes/${id}`, {
      id: update.id,
      color: update.color,
      model: update.model,
      lat: update.lat,
      log: update.log,
    })
    .then((res) => {
      dispatch({
        type: PUT_BIKE,
        bike: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteBike = (id) => (dispatch) => {
  axios
    .delete(`${url}/bikes/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_BIKE,
        bike: res.data,
        id: id,
      });
    })
    .catch((err) => console.log("error"));
};
