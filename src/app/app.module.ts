import { APP_INITIALIZER, ErrorHandler, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlatformLocation } from '@angular/common';
import { AppComponent } from './app.component';
import { CustomErrorHandler } from './custom-error-handler';

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
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
