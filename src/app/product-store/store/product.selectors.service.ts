import { Injectable } from '@angular/core';
import { ProductState } from './product.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ProductSelectorsService {

  public selectProductState = createFeatureSelector<ProductState>('products');

  public selectProducts = createSelector(
    this.selectProductState,
    (state: ProductState) => state.items
  );

  public selectLoading = createSelector(
    this.selectProductState,
    (state: ProductState) => state.loading
  );

  public selectProductById = (productId: number) => createSelector(
    this.selectProductState,
    (state: ProductState) => state.items.find(product => product.id === productId)
  );

  constructor() { }
}
