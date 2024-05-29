import { Injectable } from '@angular/core';
import { CartModalStrategy } from './cart-modal-strategy';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterCartModalStrategy implements CartModalStrategy {
  constructor(private router: Router) { }

  openCartModal() {
    this.router.navigate(['/car']);
  }
}
