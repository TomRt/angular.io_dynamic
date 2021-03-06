import './rxjs.imports';
import './polyfills.browser';


var ENV = 'DEV';  //t.b. set by my own --> TODO: has to set elsewhere

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';
import { BrowserAppLoginModule } from './app/browser.appLogin.module';
import { decorateModuleRef } from './environment';


if ('production' === ENV) {
  enableProdMode();
}

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(BrowserAppLoginModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));
}

// needed for hmr
// in prod this is replace for document ready
bootloader(main);
