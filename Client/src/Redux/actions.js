import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";

export const addFavorite = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";

  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character);
      const data = response.data;
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFavorite = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const data = response.data;
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function filterReset() {
  return {
    type: RESET,
  };
}

export function orderCards(orden) {
  return {
    type: ORDER,
    payload: orden,
  };
}
