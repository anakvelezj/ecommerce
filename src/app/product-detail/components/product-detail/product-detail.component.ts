import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@model/product.model';
import { ProductService } from '@store/store/product.service';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/product-car/car-store/car.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  productId!: number;
  product$: Observable<IProduct | undefined> | undefined;
  quantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = + params['id']; 
      this.product$ = this.productService.getProductById(this.productId);
    });
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  
  addProductToCart(product : IProduct) {
    this.carService.addToCart({...product, quantity: this.quantity});
  }
}
