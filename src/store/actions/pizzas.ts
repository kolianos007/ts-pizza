import { TPizzaList } from "../../types/types"
import { InferActionsTypes } from "../store"

const pizzaActions = {
    setPizzas: (items: TPizzaList) => ({
        type: "SET_PIZZAS",
        payload: items
    } as const)
}

export type PizzaActionsType = InferActionsTypes<typeof pizzaActions>

export default pizzaActions