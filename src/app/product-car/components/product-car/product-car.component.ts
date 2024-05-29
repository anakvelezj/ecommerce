import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarService } from '../../car-store/car.service';
import { Observable } from 'rxjs';
import { ICarItem } from '../../car-store/car.state';
import { IProduct } from '@model/product.model';
import { PurchasedItemsService } from '../../car-store/purchased-items.service';

@Component({
  selector: 'app-product-car',
  templateUrl: './product-car.component.html',
  styleUrls: ['./product-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCarComponent {

  items$: Observable<ICarItem[]> = this.carService.returnCarProducts();
  modalOpen: boolean = false; 

  constructor(private carService: CarService, private purchasedItemsService: PurchasedItemsService){}

  removeFromCart(id: number) {
    this.carService.removeFromCart(id);
  }

  clearCart(){
    this.carService.clearCart();
  }

  trackByFn(index: number, item: IProduct): number {
    return item.id;
  }

  openModal() {
    this.modalOpen = true; 
  }

  closeModal() {
    this.modalOpen = false;
  }

  confirmPurchase() {
    this.items$.subscribe(items => {
      if(items.length > 0)
        this.carService.confirmPurchase(items);
    });
    this.closeModal();
  }
}
