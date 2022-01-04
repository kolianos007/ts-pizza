import { isTemplateSpan } from 'typescript';
import { TPizzaList, IPizza } from '../../types/types';
import { CartActionsType } from '../actions/cart';

const initialState = {
    items: {} as IItemsType,
    totalPrice: 0,
    itemsCount: 0
}

export interface IItemsType {
    // [key: number]: TPizzaList
    [key: number]: any
}

export type CartInitialState = typeof initialState

const getTotalPrice = (arr: any)  => arr.reduce((sum: any, obj:any) => obj.price + sum, 0)

const _get = (obj:any, path:any) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val:any, key:any) => {
      return val[key];
    }, obj[firstKey]);
  };
  
const getTotalSum = (obj:any, path:any) => {
return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
}, 0);
};

const cart = (state = initialState, action: CartActionsType):CartInitialState => {
    switch(action.type) {
        case "ADD_PIZZA_CART": {
            const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [
                ...state.items[action.payload.id].items,
                action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }
            // const totalCount = Object.keys(newItems).reduce((sum, key: any) => newItems[key].items.length + sum, 0)
            // const totalPrice = Object.keys(newItems).reduce((sum, key: any) => newItems[key].totalPrice + sum, 0)

            const totalCount = getTotalSum(newItems, "items.length")
            const totalPrice = getTotalSum(newItems, "totalPrice")
            // const items = Object.values(newItems).map(obj => obj.items)
            // const allPizzas = ([] as TPizzaList).concat.apply([],items)
            // const totalPrice = getTotalPrice(allPizzas)
            return {
                ...state,
                items: newItems,
                itemsCount: totalCount,
                totalPrice
            }
        }
        case "CLEAR_CART":
            return {
                items: {},
                totalPrice: 0,
                itemsCount: 0
            }
        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
                },
            };
        
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
        
            return {
                ...state,
                items: newItems,
                itemsCount: totalCount,
                totalPrice,
            };
            }
        
            case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
                },
            };
        
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
        
            return {
                ...state,
                items: newItems,
                itemsCount:totalCount,
                totalPrice,
            };
            }
          
        case 'REMOVE_CART_ITEM': 
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                itemsCount: state.itemsCount - currentTotalCount
            }
        default: 
            return state
    }
}

export default cart