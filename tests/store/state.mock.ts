import { of } from 'rxjs/index';
import { StateObservable } from 'redux-observable';

import { StoreState } from '@store/store-state.models';

export function setupStateMock(): StateObservable<StoreState> {
    return of<StoreState>(null) as StateObservable<StoreState>;
}