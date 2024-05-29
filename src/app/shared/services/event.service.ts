import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartEventService {
  private cartModalSubject = new Subject<void>();

  cartModal$ = this.cartModalSubject.asObservable();

  openCartModal() {
    this.cartModalSubject.next();
  }
}
