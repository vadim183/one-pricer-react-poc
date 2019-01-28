import { WorkStatus } from '@shared/index';

import { ItemDTO } from '@api/item-dto.model';

import { ItemsState, ItemsData } from './items-state.model';

import {
    ItemsActions,
    GetItemsAction,
    GetItemsSuccessAction,
    GetItemsErrorAction,
    SelectItemAction,
    UpdateItemAction
} from './actions';

const ITEMS_INITIAL_STATE: ItemsState = {
    data: {},
    status: WorkStatus.Idle,
    selectedItemId: null
};

type Actions =
    | GetItemsAction
    | GetItemsSuccessAction
    | GetItemsErrorAction
    | SelectItemAction
    | UpdateItemAction;

export function itemsStateReducer(
    state = ITEMS_INITIAL_STATE,
    action: Actions
) {
    switch (action.type) {
        case ItemsActions.GET:
            return {
                ...state,
                status: WorkStatus.InProgress
            };

        case ItemsActions.GET_SUCCESS:
            let newData = mapToData(action.payload);

            return {
                ...state,
                data: {
                    ...state.data,
                    ...newData
                },
                status: WorkStatus.Success
            };

        case ItemsActions.GET_ERROR:
            return {
                ...ITEMS_INITIAL_STATE,
                status: WorkStatus.Error
            };

        case ItemsActions.SELECT:
            return {
                ...state,
                selectedItemId: action.payload
            };

        case ItemsActions.UPDATE:
            return {
                ...state,
                selectedItemId: ITEMS_INITIAL_STATE.selectedItemId,
                data: {
                    ...state.data,
                    [action.payload.id]: action.payload
                }
            };

        default:
            return state;
    }
}

function mapToData(items: ItemDTO[]): ItemsData {
    let id = 0;
    return items.reduce<ItemsData>((data, item) => {
        return {
            ...data,
            [++id]: item
        };
    }, {});
}
