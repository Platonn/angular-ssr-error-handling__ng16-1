import { PlatformLocation } from '@angular/common';
import { ErrorHandler, Injectable, inject } from '@angular/core';
import { PROPAGATE_ERROR_TO_CLIENT } from './propagate-error-to-client';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
  propagateErrorToClient = inject(PROPAGATE_ERROR_TO_CLIENT, {
    optional: true,
  });

  url = inject(PlatformLocation).href;

  override handleError(error: Error) {
    if (this.url.includes('/handler_propagate/')) {
      console.log('ErrorHandler: propagated', error.message);
      this.propagateErrorToClient?.(error);
      return;
    }

    if (this.url.includes('/handler_rethrow/')) {
      console.log('ErrorHandler: rethrow', error.message);
      throw error;
    }

    super.handleError(error);
  }
}
