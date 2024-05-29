import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/core/model/product.model';


export const loadProducts = createAction('[Product] Load Products');
export const productsLoaded = createAction('[Product] Products Loaded', props<{ products: IProduct[] }>());
export const loadProductsFailure = createAction('[Product] Load Products Failure', props<{ errorState: string }>());
export const setLoading = createAction('[Product] Set Loading', props<{ loading: boolean }>() )

