import * as React from 'react';

import { Checkbox } from 'primereact/checkbox';

import { ItemDTO } from '@api/item-dto.model';

import { TableColumn } from '@shared/Table';

const completedColumnTemplate = (rowData: ItemDTO) => (
    <div className="op-flex-row op-flex-center-center">
        <Checkbox disabled={true}
                  checked={rowData.completed}
                  onChange={() => {
                  }} />
    </div>
);

export const ItemTableColumns: TableColumn[] = [
    {
        field: 'completed',
        header: 'Completed',
        className: 'op-item-table-completed',
        bodyTemplate: completedColumnTemplate
    },
    {
        field: 'id',
        header: 'Item Id',
        className: 'op-item-table-item-id'
    },
    {
        field: 'userId',
        className: 'op-item-table-user-id',
        header: 'User Id'
    },
    {
        field: 'title',
        className: 'op-item-table-title',
        header: 'Title'
    }
];
