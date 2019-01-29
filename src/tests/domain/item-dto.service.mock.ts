import { Observable, of } from 'rxjs/index';

import { ItemDTO } from '@api/item-dto.model';
import { ItemDtoService } from '@domain/item-dto.service';
import { Mock } from '../mock.model';
import { ITEM_DTO_LIST } from '../api';

export function setupItemDtoServiceMock(): Mock<ItemDtoService> {
  return {
    getAll: jest.fn<() => Observable<ItemDTO[]>>(() => of(ITEM_DTO_LIST))
  };
}
