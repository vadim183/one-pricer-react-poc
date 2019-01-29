import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'reflect-metadata';
import 'typeface-roboto';

import './index.scss';

import registerServiceWorker from './registerServiceWorker';

import { App } from '@app/App';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

registerServiceWorker();
