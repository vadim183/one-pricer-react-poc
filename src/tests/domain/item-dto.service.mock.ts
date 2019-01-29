import { Observable, of } from 'rxjs/index';

import { ItemDtoService } from '@domain/item-dto.service';
import { Mock } from '@tests/mock.model';
import { ITEM_DTO_LIST } from '../api';
import { ItemDTO } from '@api/item-dto.model';

export function setupItemDtoServiceMock(): Mock<ItemDtoService> {
    return {
        getAll: jest.fn<Observable<ItemDTO[]>>(() => of(ITEM_DTO_LIST))
    } as any;
}