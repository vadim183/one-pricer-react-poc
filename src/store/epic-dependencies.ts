import { ItemDtoService } from '@domain/item-dto.service';

import { itemDtoService } from '@store/store.ioc-root';

export interface EpicDependencies {
    itemDtoService: ItemDtoService
}

export const epicDependencies: EpicDependencies = {
    itemDtoService
};