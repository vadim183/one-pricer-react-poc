import { ItemDTO } from '@api/item-dto.model';

export const ITEM_DTO_LIST: ItemDTO[] = [
    {
        id: 1,
        userId: 1,
        completed: true,
        title: 'completed todo item'
    },
    {
        id: 2,
        userId: 1,
        completed: false,
        title: 'not completed todo item'
    }
];