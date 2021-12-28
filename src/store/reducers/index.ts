import { combineReducers } from "redux"
import pizzas from './pizzas';
import filters from './filters';

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

const rootReducers = combineReducers({pizzas, filters})

export default rootReducers