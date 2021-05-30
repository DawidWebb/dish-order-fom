import { combineReducers } from "redux";

import { orderReducer } from "./orderReducer";
import { spinnerReducer } from "./spinnerReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({
  order: orderReducer,
  spinner: spinnerReducer,
  task: taskReducer,
});
