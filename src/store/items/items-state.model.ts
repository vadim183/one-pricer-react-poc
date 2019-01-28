import { ItemDTO } from '@api/item-dto.model';

import { WorkStatus } from '@shared/work-status.model';

export type ItemsData = { [itemId: number]: ItemDTO };

export interface ItemsState {
  data: ItemsData;
  status: WorkStatus;
  selectedItemId: number | null;
}
