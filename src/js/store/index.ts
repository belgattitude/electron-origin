import { createStore } from "redux";
import rootReducer from "../reducers/index";

let win: any = window;

const store = createStore(
  rootReducer,
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

