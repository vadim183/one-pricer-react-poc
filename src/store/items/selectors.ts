import { createSelector } from 'reselect';

import { WorkStatus } from '@shared/work-status.model';

import { StoreState } from '../store-state.models';
import { ItemsData } from './items-state.model';

export const selectItemsData = createSelector(
    (storeState: StoreState) => storeState.items.data,
    (itemsData: ItemsData) => Object.keys(itemsData).map(itemId => itemsData[itemId])
);

export const selectItemsStatus = createSelector(
    (storeState: StoreState) => storeState.items.status,
    (itemStatus: WorkStatus) => itemStatus
);

export const selectItem = createSelector(
    (storeState: StoreState) => storeState.items.selectedItemId,
    (storeState: StoreState) => storeState.items.data,
    (selectedItemId: number, itemsData: ItemsData) => selectedItemId ? itemsData[selectedItemId] : null
);
