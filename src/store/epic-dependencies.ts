import { ItemDtoService, itemDtoService } from '@domain/item-dto.service';

export interface EpicDependencies {
  itemDtoService: ItemDtoService;
}

export const epicDependencies: EpicDependencies = {
  itemDtoService
};
