import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InitializationService } from './shared/services/initialization.service';
import { provideClientHydration } from '@angular/platform-browser';
import { LanguageInterceptor } from './shared/interceptors/language.interceptor';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule,
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
  bootstrap: [AppComponent],
})
export class AppServerModule {}
