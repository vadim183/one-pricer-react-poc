import * as React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Items } from '@app/items/Items.container';

import { configureStore } from '@store/index';

const store = configureStore();

export const App = () => {

    function redirectToItems() {
        return <Redirect to="/items" />;
    }

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route exact={true}
                           path="/"
                           render={redirectToItems} />
                    <Route path="/items"
                           component={Items} />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
};
