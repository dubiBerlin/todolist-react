import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Klickzaehler from './Klickzaehler3';
import registerServiceWorker from './registerServiceWorker';
import counter from "./reducers/index";
import App from "./App";
import { incrementCounter } from "./actions/index";

import { createStore } from "redux";

// den Reducer in den Store anmelden
let store = createStore(counter);

const render = () => {

    ReactDOM.render(
        <Klickzaehler
            count={store.getState()}
            onIncrement={() => { store.dispatch(incrementCounter()); }}

        />,
        document.getElementById('root')
    );

}

render();
store.subscribe(render);
registerServiceWorker();
