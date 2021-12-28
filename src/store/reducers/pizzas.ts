import { TPizzaList } from "../../types/types"
import { PizzaActionsType } from "../actions/pizzas"

const initialState = {
    items: [] as TPizzaList,
    isLoaded: false
}

type InitialState = typeof initialState

const pizzas = (state = initialState, action: PizzaActionsType):InitialState => {
    switch(action.type) {
        case "SET_PIZZAS":
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state
    }
}

export default pizzas