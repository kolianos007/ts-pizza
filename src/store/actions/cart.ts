import { InferActionsTypes } from "../store"
import { IPizza } from '../../types/types';

export const cartActions = {
    addPizzaToCart: (pizzaObj: IPizza) => ({
        type: "ADD_PIZZA_CART",
        payload: pizzaObj
    } as const),
    clearCart: () => ({
        type: "CLEAR_CART"
    } as const),
    removeCartItem: (id: number) => ({
        type: "REMOVE_CART_ITEM",
        payload: id
    } as const),
    plusCartItem: (id: number) => ({
        type: "PLUS_CART_ITEM",
        payload: id
    } as const),
    minusCartItem: (id: number) => ({
        type: "MINUS_CART_ITEM",
        payload: id
    } as const)
}

export type CartActionsType = InferActionsTypes<typeof cartActions> 
    
