import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { TPizzaList } from "../../types/types"
import { AppStateType } from "../reducers";
import { InferActionsTypes } from "../store"



const pizzaActions = {
    setPizzas: (items: TPizzaList) => ({
        type: "SET_PIZZAS",
        payload: items
    } as const),
    setLoaded: (payload: boolean) => ({
        type: "SET_LOADED",
        payload
    } as const)
}

export const fetchPizzas = (sortBy: any, category: number | null) => (dispatch: ThunkDispatch<AppStateType, {}, any>) => {
    dispatch(pizzaActions.setLoaded(false))
    axios
      .get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
      .then((response) => dispatch(pizzaActions.setPizzas(response.data)));
}

export type PizzaActionsType = InferActionsTypes<typeof pizzaActions>

export default pizzaActions