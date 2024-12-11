import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import localeDe from '@angular/common/locales/de'
import localeCh from '@angular/common/locales/de-CH'

import {registerLocaleData} from '@angular/common'

registerLocaleData(localeDe, 'de-DE')
registerLocaleData(localeCh, 'de-CH')

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    {
      provide: LOCALE_ID, useValue: 'de-DE'
    }
]
};
