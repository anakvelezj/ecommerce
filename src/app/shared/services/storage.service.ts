import { Injectable } from '@angular/core';
import { ICarItem } from 'src/app/product-car/car-store/car.state';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: ICarItem[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
