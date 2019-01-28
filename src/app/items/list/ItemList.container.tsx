import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ItemDTO } from '@api/item-dto.model';

import {
    selectItemsData,
    selectItemsStatus,
    createSelectItemAction,
    GetItemsAction,
    SelectItemAction,
    StoreState
} from '@store/index';

import { Table, WorkStatus } from '@shared/index';
import { ItemTableColumns } from './item-table-columns';

import './ItemList.container.scss';

interface ItemListProps {
    items: ItemDTO[];
    isLoading: boolean;
    selectItem: (itemId: number) => void;
}

class UnconnectedItemList extends React.Component<ItemListProps> {

    recordClick(item: ItemDTO) {
        this.props.selectItem(item.id);
    }

    render() {
        return (
            <Table className="op-item-table"
                   records={this.props.items}
                   isLoading={this.props.isLoading}
                   columns={ItemTableColumns}
                   recordClick={this.recordClick.bind(this)} />
        );
    }
}

const mapStateToProps = (state: StoreState) => ({
    items: selectItemsData(state),
    isLoading: selectItemsStatus(state) === WorkStatus.InProgress
});

const mapDispatchToProps = (dispatch: Dispatch<GetItemsAction | SelectItemAction>) => ({
    selectItem: (itemId: number) => dispatch(createSelectItemAction(itemId))
});

export const ItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedItemList);
