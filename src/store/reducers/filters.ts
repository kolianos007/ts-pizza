import { FiltersActionsType } from "../actions/filters"

const initialState = {
    category: 0 as number | null,
    sortBy: "popular"
}

type InitialState = typeof initialState

const filters = (state = initialState, action: FiltersActionsType):InitialState => {
    switch(action.type) {
        case "SET_SORT_BY":
            return {
                ...state,
                sortBy: action.payload
            }
        case "SET_CATEGORY":
            return {
                ...state,
                category: action.payload
            }
        default: 
            return state
    }   
}

export default filters