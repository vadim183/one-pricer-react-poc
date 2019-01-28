import * as React from 'react';

export interface TableColumn {
    field: string
    header: string
    className?: string;
    bodyTemplate?: (rowData: any) => React.ReactElement<any> ;
}
