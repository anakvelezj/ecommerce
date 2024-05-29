import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sneakers ecommerce';
  param = {value: 'world'};

  constructor(public translate: TranslateService) {

    translate.addLangs(['eni', 'fr', 'enu', 'es']);
    translate.setDefaultLang('eni');

    const browserLang = translate.getBrowserLang();
    const selectedLang = browserLang && browserLang.match(/eni|fr|enu|es/) ? browserLang : 'eni';
    console.log(selectedLang, 'lenguaje', translate.getLangs(), 'browserLang',browserLang)
    translate.use(selectedLang);
  }

}
