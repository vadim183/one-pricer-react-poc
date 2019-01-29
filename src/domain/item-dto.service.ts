import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';

import { httpClient } from '@core/index';

import { ItemDTO } from '@api/item-dto.model';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export interface ItemDtoService {
  getAll(): Observable<ItemDTO[]>;
}

export const itemDtoService: ItemDtoService = {
  getAll: () =>
    httpClient
      .get<ItemDTO[]>(API_URL)
      .pipe(map(items => [...items, ...items, ...items, ...items, ...items]))
};
