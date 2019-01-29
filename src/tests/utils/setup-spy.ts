import { throwError } from 'rxjs/index';

import { Spy } from '@tests/spy.model';

export function setupSpy<T = {}>(returnValue?: T): Spy {
  return returnValue ? jest.fn<() => T>(() => returnValue) : jest.fn();
}

export function setupErrorSpy(): Spy {
  let error = new Error();
  return setupSpy(throwError(error));
}
