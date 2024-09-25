import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {   //platformBrowserDynamic (paginas web)
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
