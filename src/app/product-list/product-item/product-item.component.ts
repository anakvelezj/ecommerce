import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '@model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: IProduct;
  @Output() addToCart = new EventEmitter<IProduct>();

  constructor(private router: Router) { }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  goToProductDetail(productId: number) {
    this.router.navigate(['/detail', productId]);
  }
}
