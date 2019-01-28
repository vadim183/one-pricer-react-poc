import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import { rootReducer } from './root-reducer';
import { rootEpics } from './root-epics';

import { StoreState } from './store-state.models';
import { EpicDependencies, epicDependencies } from './epic-dependencies';

const logger = createLogger({});

const epicMiddleware = createEpicMiddleware<any, any, StoreState, EpicDependencies>({
    dependencies: epicDependencies
});

const middleware = applyMiddleware(
    epicMiddleware, logger
);

export const configureStore = () => {
    const store = createStore(rootReducer, middleware);

    epicMiddleware.run(rootEpics);

    return store;
};
