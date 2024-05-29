import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '@model/product.model';
import { ICarItem, ICarState } from 'src/app/product-car/car-store/car.state';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

  @Input() products: IProduct[] | null = [];
  @Input() loading: boolean | null = false;
  @Output() addToCart = new EventEmitter<IProduct>();


  constructor (){}

  trackByProductIndex(index: number, item: IProduct): number {
    return item.id;
  }

  onAddToCart(product: IProduct): void {
    this.addToCart.emit(product);
  }
}
