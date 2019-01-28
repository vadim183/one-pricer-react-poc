import { injectable } from 'inversify';
import { Observable } from 'rxjs/index';

import { HttpClient } from '@core/http';

import { ItemDTO } from '@api/item-dto.model';
import { map } from 'rxjs/internal/operators';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

@injectable()
export class ItemDtoService {
    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<ItemDTO[]> {
        return this.httpClient.get<ItemDTO[]>(API_URL).pipe(
            map((items)=> [...items, ...items, ...items, ...items, ...items])
        );
    }
}