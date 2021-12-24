import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))