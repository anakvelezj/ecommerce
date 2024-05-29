import { createReducer, on } from "@ngrx/store";
import { ICarState, initialCarState } from "./car.state";
import * as CarActions from './car.actions';

export const carReducer = createReducer(
    initialCarState,
    on(CarActions.addToCart, (state, { products }) => {
        const existingItemIndex = state.items.findIndex(item => item.id === products.id);
        if (existingItemIndex !== -1) {
            const updatedItems = state.items.map((item, index) => {
                if (index === existingItemIndex) {
                    return { ...item, quantity: item.quantity + products.quantity };
                }
                return item;
            });
            return { ...state, items: updatedItems };
        } else {
            const updatedItems = [...state.items, products];
            return { ...state, items: updatedItems };
        }
    }),
    on(CarActions.removeFromCart, (state, { productId }) => {
        const updatedItems =  state.items.filter(item => item.id !== productId);
        return { ...state, items: updatedItems };
    }),
    on(CarActions.updateQuantity, (state, { productId, quantity }) => {
        const updatedItems = state.items.map(item => {
            if (item.id === productId) {
                return {...item, quantity: quantity};
            }
            return item;
        });
        return { ...state, items: updatedItems };
    }),
    on(CarActions.clearCart, () => initialCarState)
);
