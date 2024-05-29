import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICarState } from './car.state';

@Injectable({
    providedIn: 'root'
})
export class CarSelectorsService {
    constructor() { }
    public selectCartState = createFeatureSelector<ICarState>('carProducts');

    public selectCarProducts = createSelector(
        this.selectCartState,
        (state: ICarState) => state.items
    );
    
    public selectQuantityCar = createSelector(
        this.selectCartState,
        (state: ICarState) => {
            return state.items.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
        }
    );
}