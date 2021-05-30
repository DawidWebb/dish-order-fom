export const ADD_ORDER = "ADD_ORDER";
export const GET_ORDERS = "GET_ORDERS";
export const DELETE_ORDER = "DELETE_ORDER";

export const addOrder = (data) => ({
  type: ADD_ORDER,
  payload: data,
});
export const getOrders = (data) => ({
  type: GET_ORDERS,
  payload: data,
});

export const deleteOrder = (id) => ({
  type: DELETE_ORDER,
  payload: id,
});
