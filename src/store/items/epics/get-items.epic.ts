import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { StoreState } from '@store/store-state.models';
import { EpicDependencies } from '@store/epic-dependencies';

import {
    GetItemsAction,
    ItemsActions,
    GetItemsErrorAction,
    GetItemsSuccessAction,
    createGetItemsSuccessAction,
    createGetItemsErrorAction
} from '../actions';

export type GetItemsEpic = Observable<GetItemsSuccessAction | GetItemsErrorAction>;

export const getItemsEpic = (
    action$: ActionsObservable<GetItemsAction>,
    state$: StateObservable<StoreState>,
    { itemDtoService }: EpicDependencies
): GetItemsEpic =>
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
