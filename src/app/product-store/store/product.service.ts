import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadProducts } from './product.actions';
import { Observable, of } from 'rxjs';
import { ProductSelectorsService } from './product.selectors.service';
import { IProduct } from '@model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private store: Store, private productSelectors: ProductSelectorsService) { }

  loadProducts() {
    this.store.dispatch(loadProducts());
  }

  returnProducts(): Observable<IProduct[]> {
    this.loadProducts();
    return this.store.pipe(
      select(this.productSelectors.selectProducts)
    );
  }

  getLoading(): Observable<any> {
    return this.store.pipe(
      select(this.productSelectors.selectLoading)
    )
  }

  getProductById(productId: number): Observable<IProduct | undefined> {
    return this.store.pipe(
      select(this.productSelectors.selectProductById(productId))
    );
  }

  getDummyProducts() : Observable <IProduct[]>{
    return of([ {
      id: 1,
      name: 'Men item 1',
      detail: {
        description: 'Description Men Item 1',
        price: 10000,
        picture: 'assets/image-product-1.jpg',
        pictureThumbnails: [
          'assets/image-product-1-thumbnail.jpg',
          'assets/image-product-2-thumbnail.jpg',
          'assets/image-product-3-thumbnail.jpg',
          'assets/image-product-4-thumbnail.jpg'
        ],
      },
      type: 'men'
    },
    {
      id: 2, name: 'Men item 2',
      detail: {
        description: 'Description Men Item 2',
        price: 20000,
        picture: 'assets/image-product-2.jpg',
        pictureThumbnails: [
          'assets/image-product-1-thumbnail.jpg',
          'assets/image-product-2-thumbnail.jpg',
          'assets/image-product-3-thumbnail.jpg',
          'assets/image-product-4-thumbnail.jpg'
        ],
      },
      type: 'men'
    },
    {
      id: 3, name: 'Women Item 1',
      detail: {
        description: 'Description Women Item 1',
        price: 15000,
        picture: 'assets/image-product-3.jpg',
        pictureThumbnails: [
          'assets/image-product-1-thumbnail.jpg',
          'assets/image-product-2-thumbnail.jpg',
          'assets/image-product-3-thumbnail.jpg',
          'assets/image-product-4-thumbnail.jpg'
        ],
      },
      type: 'women'
    },
    {
      id: 4, name: 'Women Item 2',
      detail: {
        description: 'Description Women Item 2',
        price: 25000,
        picture: 'assets/image-product-4.jpg',
        pictureThumbnails: [
          'assets/image-product-1-thumbnail.jpg',
          'assets/image-product-2-thumbnail.jpg',
          'assets/image-product-3-thumbnail.jpg',
          'assets/image-product-4-thumbnail.jpg'
        ],
      },
      type: 'women'
    }
  ]) 
}
}
