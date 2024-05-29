import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from '@store/store/product.actions';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '@store/store/product.service';


@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}


  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.loadProducts), 
    tap(console.log),
    switchMap(() => {
      return this.productService.getDummyProducts().pipe(
        delay(2000),
        map(products => {
          return ProductActions.productsLoaded({ products });
        }),
        catchError(errorState => {return of(ProductActions.loadProductsFailure({ errorState }))})
      );
    })
  ));

  setLoading$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    map(() => {
      return ProductActions.setLoading({ loading: false });
    })
  ));
}
