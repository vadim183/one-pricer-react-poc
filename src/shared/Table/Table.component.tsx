import * as React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { TableColumn } from '@shared/Table/table-column.model';

import './Table.component.scss';

const BODY_SELECTOR = '.p-datatable-scrollable-body';

const RESIZE_EVENT = 'resize';

interface TableProps {
    records: any[];
    recordClick: (rowData: any) => void;
    isLoading: boolean;
    columns: TableColumn[]
    className?: string;
}

interface TableState {
    visibleRecords: any[],
    recordCount: number;
    totalRecords: number;
    rowHeight: number;
}

interface TableClickEvent {
    data: any;
    originalEvent: any;
}

export class Table extends React.Component<TableProps, TableState> {
    tableRef: React.RefObject<HTMLDivElement>;

    constructor(props: TableProps) {
        super(props);

        this.tableRef = React.createRef();

        this.state = {
            visibleRecords: [],
            recordCount: 100,
            totalRecords: 0,
            rowHeight: 28
        };
    }

    componentWillMount() {
        window.addEventListener(RESIZE_EVENT, this.onWindowResize);
    }

    componentDidMount() {
        this.updateScrollHeight();
    }

    componentWillReceiveProps(nextProps: TableProps) {
        if (nextProps.records === this.props.records) {
            return;
        }

        let records = nextProps.records;
        if (records.length > 0) {
            this.setState({
                visibleRecords: records.slice(0, this.state.recordCount),
                totalRecords: records.length
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener(RESIZE_EVENT, this.onWindowResize);
    }

    onRowClick(event: TableClickEvent) {
        this.props.recordClick(event.data);
    }

    onVirtualScroll(event: { first: number, rows: number }) {
        this.setState({
            visibleRecords: this.props.records.slice(event.first, event.first + event.rows)
        });
    }

    render() {
        return (
            <div className="op-flex op-flex-column"
                 ref={this.tableRef}>
                <DataTable className={this.props.className}
                           value={this.state.visibleRecords}
                           loading={this.props.isLoading}
                           totalRecords={this.state.totalRecords}
                           rows={this.state.recordCount}
                           virtualRowHeight={this.state.rowHeight}
                           scrollable={true}
                           virtualScroll={true}
                           lazy={true}
                           virtualScrollDelay={0}
                           onRowClick={this.onRowClick.bind(this)}
                           onVirtualScroll={this.onVirtualScroll.bind(this)}>
                    {this.props.columns.map((column, index) => <Column
                        key={index}
                        field={column.field}
                        header={column.header}
                        className={column.className}
                        body={column.bodyTemplate}
                    />)}
                </DataTable>
            </div>
        );
    }

    private onWindowResize = () => {
        this.updateScrollHeight();
    };

    private updateScrollHeight() {
        let tableBody = this.tableRef.current.querySelector<HTMLDivElement>(BODY_SELECTOR);
        tableBody.style.maxHeight = `${this.tableRef.current.scrollHeight - this.state.rowHeight}px`;
    };
};


