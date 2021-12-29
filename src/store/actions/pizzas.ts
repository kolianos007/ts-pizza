import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { TPizzaList } from "../../types/types"
import { AppStateType } from "../reducers";
import { InferActionsTypes } from "../store"



const pizzaActions = {
    setPizzas: (items: TPizzaList) => ({
        type: "SET_PIZZAS",
        payload: items
    } as const)
}

export const fetchPizzas = () => (dispatch: ThunkDispatch<AppStateType, {}, any>) => {
    axios
      .get("http://localhost:3001/pizzas")
      .then((response) => dispatch(pizzaActions.setPizzas(response.data)));
}

export type PizzaActionsType = InferActionsTypes<typeof pizzaActions>

export default pizzaActions