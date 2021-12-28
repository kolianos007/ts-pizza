import { InferActionsTypes } from "../store"

const filterActions = {
    setSortBy: (sortBy: string) => ({
        type: "SET_SORT_BY",
        payload: sortBy
    } as const),
    setCategory: (catIndex: number | null) => ({
        type: "SET_CATEGORY",
        payload: catIndex
    } as const)
}

export type FiltersActionsType = InferActionsTypes<typeof filterActions>

export default filterActions