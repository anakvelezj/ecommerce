import { createAction, props } from "@ngrx/store";
import { ICarItem } from "./car.state";

export const addToCart = createAction('[Cart] Add to Cart', props<{products: ICarItem}>());
export const removeFromCart = createAction('[Cart] Remove from Cart', props<{productId: number }>());
export const updateQuantity = createAction('[Cart] Update Quantity', props<{ productId: number, quantity: number }>());
export const clearCart = createAction('[Cart] Clear Cart');
export const confirmPurchase = createAction('[Cart] Confirm Purchase', props<{ items: ICarItem[] }>());