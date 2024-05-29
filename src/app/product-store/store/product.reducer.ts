import { createReducer, on } from '@ngrx/store';
import { initialState, ProductState } from './product.state';
import * as ProductActions from './product.actions';


export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => ({
    ...state,
    loading: true,
    error: ''
  })),
  on(ProductActions.productsLoaded, (state, { products }) => ({
    ...state,
    items: products,
    loading: false,
    error: ''
  })),
  on(ProductActions.loadProductsFailure, (state, { errorState }) => ({
    ...state,
    errorState,
    loading: false,
    error: errorState
  }))
);