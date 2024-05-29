import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { ProductsComponent } from './products.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductCarModule } from '../product-car/product-car.module';
import { AppModule } from "../app.module";
import { CurrencyFormatPipe } from "../shared/pipes/currency.pipe";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
  }

@NgModule({
    declarations: [
        ProductsComponent,
        ListItemComponent,
        ProductItemComponent
    ],
    providers: [],
    exports: [ProductsComponent],
    imports: [
        CommonModule,
        ProductListRoutingModule,
        ProductCarModule,
        CurrencyFormatPipe,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          })
    ]
})
export class ProductListModule { }
