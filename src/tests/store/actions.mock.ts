import { Action } from 'redux';
import { of } from 'rxjs/index';

import { ActionsObservable } from 'redux-observable';

export function setupActionsMock<T extends Action>(action: T): ActionsObservable<T> {
    return of<T>(action) as ActionsObservable<T>;
};