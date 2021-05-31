import { timeoutShowTask } from "./taskActions";
import { addSpinner, removeSpinner } from "./spinnerActions";

export const ADD_ORDER = "ADD_ORDER";
export const GET_ORDERS = "GET_ORDERS";
export const DELETE_ORDER = "DELETE_ORDER";

const baseURL = "https://frosty-wood-6558.getsandbox.com:443/dishes";

// export const addOrder = (data) => ({
//   type: ADD_ORDER,
//   payload: data,
// });
// export const getOrders = (data) => ({
//   type: GET_ORDERS,
//   payload: data,
// });

// export const deleteOrder = (id) => ({
//   type: DELETE_ORDER,
//   payload: id,
// });
export const addOrder = (data) => async (dispatch) => {
  dispatch(addSpinner());
  const orderRes = await fetch(baseURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const status = orderRes.status;
  const content = await orderRes.json();
  if (status === 200) {
    dispatch({
      type: ADD_ORDER,
      payload: content,
    });
    dispatch(removeSpinner());
    dispatch(timeoutShowTask("Dodano zamówienie"));
  } else {
    dispatch(removeSpinner());
    dispatch(
      timeoutShowTask("Błąd w formacie zamówienia - sprawdź consol.log")
    );
    console.log(status, content);
  }
};
