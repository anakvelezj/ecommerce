import { Injectable } from '@angular/core';
import { ICarItem } from '../car-store/car.state';

@Injectable({
  providedIn: 'root'
})
export class PurchasedItemsService {

  constructor() {}

  addPurchasedItems(items: ICarItem[]) {
    localStorage.setItem('purchasedItems', JSON.stringify(items));
  }
}
