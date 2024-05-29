import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct } from '@model/product.model';
import { ProductService } from '@store/store/product.service';
import { Observable } from 'rxjs';
import { CarService } from '../product-car/car-store/car.service';

@Component({
  template: '<app-list-item [products]="products | async" [loading]="loading | async"  (addToCart)="addProductToCart($event)"></app-list-item>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  products: Observable<IProduct[]> = this.productService.returnProducts();
  loading:  Observable<boolean> = this.productService.getLoading();

  constructor(
    private productService: ProductService,
    private carService: CarService
    ) { }

    addProductToCart(product: IProduct): void {
      this.carService.addToCart({...product, quantity:1});
    }
};