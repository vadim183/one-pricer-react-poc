import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { createGetItemsAction, GetItemsAction, StoreState } from '@store/index';

import { ItemList } from './list/ItemList.container';
import { ItemDetails } from './details/ItemDetails.container';

interface ItemsProps {
    getItems: () => void;
}

export class UnconnectedItems extends React.Component<ItemsProps> {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        return (
            <div className="op-flex op-flex-column">
                <div className="op-flex op-flex-row">
                    <div className="op-flex op-flex-column op-card">
                        <ItemList />
                    </div>
                    <div className="op-flex op-flex-column op-card">
                        <ItemList />
                    </div>
                    <div className="op-flex op-card">
                        <ItemDetails />
                    </div>
                </div>
                <div className="op-flex op-flex-row">
                    <div className="op-flex op-flex-column op-card">
                        <ItemList />
                    </div>
                    <div className="op-flex op-flex-column op-card">
                        <ItemList />
                    </div>
                    <div className="op-flex op-flex-column op-card">
                        <ItemList />
                    </div>
                </div>
            </div>);
    }
}

const mapStateToProps = (state: StoreState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<GetItemsAction>) => ({
    getItems: () => dispatch(createGetItemsAction())
});

export const Items = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedItems);
