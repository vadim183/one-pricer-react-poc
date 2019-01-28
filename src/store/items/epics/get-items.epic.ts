import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { StoreState } from '@store/store-state.models';
import { EpicDependencies } from '@store/epic-dependencies';

import {
    GetItemsAction,
    ItemsActions,
    createGetItemsSuccessAction,
    createGetItemsErrorAction
} from '../actions';

export const getItemsEpic = (
    action$: ActionsObservable<GetItemsAction>,
    state$: StateObservable<StoreState>,
    { itemDtoService }: EpicDependencies
) =>
    action$.pipe(
        ofType(ItemsActions.GET),
        withLatestFrom(state$),
        switchMap(([_, __]: [any, any]) => {
            return itemDtoService.getAll().pipe(
                map(createGetItemsSuccessAction),
                catchError(error => of(createGetItemsErrorAction(error)))
            );
        })
    );
