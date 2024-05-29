import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCarRoutingModule } from './product-car-routing.module';
import { ProductCarComponent } from './components/product-car/product-car.component';
import { ModalServiceCartModalStrategy } from '../core/strategies/modal-service-cart-modal-strategy';
import { RouterCartModalStrategy } from '../core/strategies/router-cart-modal-strategy';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components/modal/modal.component';
import { CurrencyFormatPipe } from '../shared/pipes/currency.pipe';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ProductCarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ProductCarRoutingModule,
    CurrencyFormatPipe,
    TranslateModule
  ],
  providers: [ { provide: ModalServiceCartModalStrategy, useClass: RouterCartModalStrategy },
    { provide: ModalService, useClass: ModalService } ]
})
export class ProductCarModule { }
