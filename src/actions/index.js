import { ADD_TO_CART, DELETE_FROM_CART, FETCH_DATA, UPDATE_IN_CART } from '../constants/actionTypes';
import data from '../mock/data.json';

export const fetchCakeData = () => {
  return dispatch => {
    setTimeout(() => dispatch({ type: FETCH_DATA, payload: data }), 100);
  };
};

export const addToCart = payload => {
  return dispatch => dispatch({ type: ADD_TO_CART, payload });
};

export const deleteFromCart = payload => {
  return dispatch => dispatch({ type: DELETE_FROM_CART, payload });
};

export const updateItemInCart = payload => {
  return dispatch => dispatch({ type: UPDATE_IN_CART, payload });
};
