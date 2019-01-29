import { ActionsObservable, StateObservable } from 'redux-observable';

import { setupActionsMock, setupStateMock } from '@tests/store';
import { setupItemDtoServiceMock } from '@tests/domain';
import { ITEM_DTO_LIST } from '@tests/api';
import { setupSpy, Mock, Spy } from '@tests/index';

import { GetItemsEpic, getItemsEpic } from '@store/items/epics/get-items.epic';
import {
    createGetItemsAction, createGetItemsErrorAction, createGetItemsSuccessAction,
    GetItemsAction
} from '@store/items';
import { StoreState } from '@store/store-state.models';
import { ItemDtoService } from '@domain/item-dto.service';
import { setupErrorSpy } from '@tests/utils';


describe('GetItemsEpic', () => {
    let epic: GetItemsEpic;

    let actions$: ActionsObservable<GetItemsAction>;
    let state$: StateObservable<StoreState>;

    let itemDtoService: Mock<ItemDtoService>;

    let spy: Spy;

    beforeEach(() => {
        actions$ = setupActionsMock(createGetItemsAction());
        state$ = setupStateMock();

        itemDtoService = setupItemDtoServiceMock();

        epic = getItemsEpic(actions$, state$, {
            itemDtoService
        });

        spy = setupSpy();
    });

    test('should call `getAll` from `itemDtoService`', () => {
        runEpic();

        expect(itemDtoService.getAll).toHaveBeenCalled();
    });

    test('should return `GetItemsSuccessAction`', () => {
        runEpic();

        let action = createGetItemsSuccessAction(ITEM_DTO_LIST);

        expect(spy).toHaveBeenCalledWith(action);
    });

    test('should return `GetItemsErrorAction`', () => {
        itemDtoService.getAll = setupErrorSpy();

        runEpic();

        let action = createGetItemsErrorAction(new Error());

        expect(spy).toHaveBeenCalledWith(action);
    });

    function runEpic() {
        epic.subscribe(spy);
    }
});