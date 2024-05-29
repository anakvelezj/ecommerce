import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICarItem, ICarState } from './car.state';
import * as CarActions from './car.actions';
import { IProduct } from '@model/product.model';
import { CarSelectorsService } from './car.selectors.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private store: Store<ICarState>, private carSelectors: CarSelectorsService) { }

  addToCart(product: ICarItem) {
    this.store.dispatch(CarActions.addToCart({ products: product }));
  }

  removeFromCart(productId: number) {
    this.store.dispatch(CarActions.removeFromCart({ productId }));
  }

  updateQuantity(productId: number, quantity: number) {
    this.store.dispatch(CarActions.updateQuantity({ productId, quantity }));
  }

  clearCart() {
    this.store.dispatch(CarActions.clearCart());
  }

  returnCarProducts(): Observable<ICarItem[]> {
    return this.store.pipe(
      select(this.carSelectors.selectCarProducts)
    );
  }

  getTotalItemsInCart(): Observable<number> {
    return this.store.pipe(
      select(this.carSelectors.selectQuantityCar)
    );
  }

  confirmPurchase(items: ICarItem[]) {
    this.store.dispatch(CarActions.confirmPurchase({ items }));
  }
  
}
