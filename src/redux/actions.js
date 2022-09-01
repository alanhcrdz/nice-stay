// Defining actions
export const GET_PROPERTIES = "GET_PROPERTIES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

// axios and base_url to fetch
import axios from "axios";
import { BASE_URL } from "../services/axios";

export const getProperties = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`${BASE_URL}`);
      if (response.data) {
        dispatch({
          type: GET_PROPERTIES,
          payload: response.data,
        });
      } else {
        console.log(" Error fetching data from API");
      }
    };
  } catch (error) {
    console.log(error);
  }
  // next step: call a reducer and import the actions
};

export const addPropertyToFavorite = (property) => (dispatch) => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: property,
  });
};

export const removePropertyFromFavorite = (property) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: property,
  });
  //The next step is to update the state of the redux store in reducers.js
};
