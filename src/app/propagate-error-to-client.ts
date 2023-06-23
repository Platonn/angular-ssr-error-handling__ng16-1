import { InjectionToken } from '@angular/core';

export const PROPAGATE_ERROR_TO_CLIENT = new InjectionToken<
  (error: unknown) => void
>('PROPAGATE_ERROR_TO_CLIENT');
