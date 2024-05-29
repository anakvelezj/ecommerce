import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { productReducer } from '@store/store/product.reducer';
import { ProductStoreModule } from './product-store';
import { CarStoreModule } from './product-car/car-store';
import { carReducer } from './product-car/car-store/car.reducer';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProductCarModule } from './product-car/product-car.module';
import { InitializationService } from './shared/services/initialization.service';
import { CurrencyFormatPipe } from './shared/pipes/currency.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageInterceptor } from './shared/interceptors/language.interceptor';
import { HomeComponent } from './shared/home/home.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ products: productReducer, carProducts: carReducer  }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({connectInZone: true}),
    StoreRouterConnectingModule.forRoot(),
    ProductStoreModule,
    CarStoreModule,
    ProductDetailModule ,
    ProductCarModule,
    CurrencyFormatPipe,
    HttpClientModule,
    HomeComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers:[
    {
      provide: APP_INITIALIZER,
      useFactory: (initializationService: InitializationService) => initializationService.initializeApp(),
      multi: true,
      deps: [InitializationService]
    },
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    },
  ],
  exports:[CurrencyFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
