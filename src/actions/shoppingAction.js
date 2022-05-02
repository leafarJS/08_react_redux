import {
  ADD_TO_CART,
  REMOVE_ALL_CART,
  REMOVE_ONE_CART,
  CLEAR_CART,
} from "../types";
//
export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });
export const deleteCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_CART, payload: id }
    : { type: REMOVE_ONE_CART, payload: id };
export const clearCart = (id) => ({ type: CLEAR_CART });