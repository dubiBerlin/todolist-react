import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Klickzaehler from './components/clickzaehler/Klickzaehler3';
import registerServiceWorker from './registerServiceWorker';
import App from "./App";
import { connect, Provider } from "react-redux"; 

import { createStore } from "redux";
import Todolist from './components/clickzaehler/Todolist';
import TodoAdd from "./components/clickzaehler/TodoAdd";
import reduce from './reducers/index';

// den Reducer in den Store anmelden
let store = createStore(reduce);

ReactDOM.render(
    <Provider store={store} >
    <div className="container">
        <Klickzaehler/>
        <Todolist />
    </div>
    </Provider >,
    document.getElementById('root')
);
registerServiceWorker();
