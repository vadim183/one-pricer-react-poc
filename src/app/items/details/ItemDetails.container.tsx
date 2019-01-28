import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ItemDTO } from '@api/item-dto.model';

import { createUpdateItemAction, selectItem, UpdateItemAction } from '@store/items';
import {
    StoreState
} from '@store/store-state.models';
import { ItemForm } from '@app/items/details/form/ItemForm.component';

import './ItemDetails.component.scss';

interface ItemDetailsProps {
    item: ItemDTO;
    updateItem: (item: ItemDTO) => void;
}

class UnconnectedItemDetails extends React.Component<ItemDetailsProps> {

    render() {
        return (
            <div className="op-item-details">
                <div className="op-item-details_title">Edit Item</div>
                <ItemForm item={this.props.item} updateItem={this.props.updateItem.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState) => ({
    item: selectItem(state)
});

const mapDispatchToProps = (dispatch: Dispatch<UpdateItemAction>) => ({
    updateItem: (item: ItemDTO) => dispatch(createUpdateItemAction(item))
});

export const ItemDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedItemDetails);
