import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./reducers";

type ProppertiesType<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args:any[]) => any}> = ReturnType<ProppertiesType<T>>

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

// window.store = store

export default store;
