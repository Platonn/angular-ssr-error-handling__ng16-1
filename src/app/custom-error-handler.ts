import { ErrorHandler, Injectable, inject } from '@angular/core';
import { PROPAGATE_ERROR_TO_CLIENT } from './propagate-error-to-client';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
  propagateErrorToClient = inject(PROPAGATE_ERROR_TO_CLIENT);

  override handleError(error: Error) {
    this.propagateErrorToClient(error);
  }
}
