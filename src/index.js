import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Klickzaehler from './components/clickzaehler/Klickzaehler3';
import registerServiceWorker from './registerServiceWorker';
import counter from "./reducers/index";
import App from "./App";
import { connect, Provider } from "react-redux"; 

import { createStore } from "redux";
import Todolist from './components/clickzaehler/Todolist';

// den Reducer in den Store anmelden
let store = createStore(counter);




ReactDOM.render(
    <Provider store={store} >
    <div>
        <Klickzaehler/>
        <Todolist />
    </div>
    </Provider >,
    document.getElementById('root')
);
registerServiceWorker();
