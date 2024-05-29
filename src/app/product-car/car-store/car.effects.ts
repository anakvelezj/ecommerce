import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as CarActions from './car.actions';
import { map, tap } from 'rxjs/operators';
import { PurchasedItemsService } from './purchased-items.service';

@Injectable()
export class CarEffects {

  constructor(
    private actions$: Actions,
    private purchasedItemsService: PurchasedItemsService
  ) {}

  addPurchasedItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarActions.confirmPurchase),
      tap((action) => {
        this.purchasedItemsService.addPurchasedItems(action.items);
      }),
      map(() => CarActions.clearCart())
    )
  );

}

