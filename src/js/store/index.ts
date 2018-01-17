import { createStore } from "redux";
import rootReducer from "../reducers/index";

const WIN: any = window;

const store = createStore(
  rootReducer,
  WIN.__REDUX_DEVTOOLS_EXTENSION__ && WIN.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;