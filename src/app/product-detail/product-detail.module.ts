import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from '../product-car/car-store/car.effects';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CoreModule } from '../core/core.module';
import { CurrencyFormatPipe } from '../shared/pipes/currency.pipe';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    EffectsModule.forFeature([CarEffects]),
    CurrencyFormatPipe,
    TranslateModule
  ]
})
export class ProductDetailModule { }
