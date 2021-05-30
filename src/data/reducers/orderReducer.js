import { ADD_ORDER, GET_ORDERS, DELETE_ORDER } from "../actions";

export const orderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];
    case GET_ORDERS:
      return [...state];
    case DELETE_ORDER:
      return state.filter((item) => item._id !== action.payload);

    default:
      console.warn(`Nie ma akcji typu ${action.type}`);
      return state;
  }
};
