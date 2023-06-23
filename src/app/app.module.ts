import { APP_INITIALIZER, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlatformLocation } from '@angular/common';
import { AppComponent } from './app.component';

const appInitializer = () => {
  const url = inject(PlatformLocation).href;
  return () => {
    if (url.endsWith('errorIn_appInitializer')) {
      throw new Error('errorIn_appInitializer');
    }
  };
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
