/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppServerModule from './main.server';


platformBrowserDynamic().bootstrapModule(AppServerModule)
  .catch(err => console.error(err));
