import { PlatformLocation } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `App Component`,
})
export class AppComponent {
  url = inject(PlatformLocation).href;

  constructor() {
    if (this.url.endsWith('errorIn_syncConstructor')) {
      throw new Error('errorIn_syncConstructor');
    }
  }

  ngOnInit() {
    if (this.url.endsWith('errorIn_syncRender')) {
      throw new Error('errorIn_syncRender');
    }

    if (this.url.endsWith('errorIn_asyncRender')) {
      setTimeout(() => {
        throw new Error('errorIn_asyncRender');
      }, 0);
    }
  }
}
