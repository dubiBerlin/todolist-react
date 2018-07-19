import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Klickzaehler from './Klickzaehler3';
import registerServiceWorker from './registerServiceWorker';
import counter from "./reducers/index";
import App from "./App";
import { connect } from "react-redux";

import { createStore } from "redux";

// den Reducer in den Store anmelden
let store = createStore(counter);




ReactDOM.render(
    <Klickzaehler
        store={store}
    />,
    document.getElementById('root')
);
registerServiceWorker();
