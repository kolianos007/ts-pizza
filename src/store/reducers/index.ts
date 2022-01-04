import { combineReducers } from "redux"
import pizzas from './pizzas';
import filters from './filters';
import cart from './cart';

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

const rootReducers = combineReducers({pizzas, filters, cart})

export default rootReducers