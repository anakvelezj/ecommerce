import { Injectable } from '@angular/core';
import { IProduct } from '@model/product.model';
import { ProductService } from '@store/store/product.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitializationService {

  constructor(private productService: ProductService) { }

  initializeApp(): () => Promise<IProduct[]> {
    return () => {
      return firstValueFrom(this.productService.returnProducts());
    };
  }
}
